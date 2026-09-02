import fs from "fs/promises";

const API_KEY = process.env.YOUTUBE_API_KEY;
if (!API_KEY) {
  console.error("Missing YOUTUBE_API_KEY in environment");
  process.exit(1);
}
const apiKey: string = API_KEY;

interface DuroosVideo {
  videoId: string;
  playlistId: string;
  title: string;
  url: string;
  thumbnail: string;
  uploadDate: string;
}

function extractPlaylistId(url: string): string | null {
  try {
    return new URL(url).searchParams.get("list");
  } catch {
    return null;
  }
}

async function fetchPlaylistVideos(playlistId: string): Promise<DuroosVideo[]> {
  const videos: DuroosVideo[] = [];
  let pageToken = "";

  do {
    const url = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
    url.searchParams.set("part", "snippet,contentDetails");
    url.searchParams.set("maxResults", "50");
    url.searchParams.set("playlistId", playlistId);
    url.searchParams.set("key", apiKey);
    if (pageToken) url.searchParams.set("pageToken", pageToken);

    const res = await fetch(url.toString());
    const data = await res.json();

    if (!res.ok) {
      console.error("API error:", JSON.stringify(data, null, 2));
      break;
    }

    for (const item of data.items ?? []) {
      const videoId: string | undefined = item.snippet?.resourceId?.videoId;
      const title: string | undefined = item.snippet?.title;
      const thumbnail: string | undefined =
        item.snippet?.thumbnails?.standard?.url ??
        item.snippet?.thumbnails?.high?.url; // fallback if standard isn't available for older/short videos
      const uploadDate: string | undefined = item.contentDetails?.videoPublishedAt;

      if (
        videoId &&
        title &&
        title !== "Private video" &&
        title !== "Deleted video"
      ) {
        videos.push({
          videoId,
          playlistId,
          title,
          url: `https://www.youtube.com/watch?v=${videoId}&list=${playlistId}`,
          thumbnail: thumbnail ?? "",
          uploadDate: uploadDate ?? "",
        });
      }
    }

    pageToken = data.nextPageToken ?? "";
  } while (pageToken);

  return videos;
}

async function main() {
  const playlistUrl = process.argv[2];
  if (!playlistUrl) {
    console.error("Usage: npm run fetch:raw -- <playlist-url>");
    process.exit(1);
  }

  const playlistId = extractPlaylistId(playlistUrl);
  if (!playlistId) {
    console.error("Could not extract playlist ID from URL");
    process.exit(1);
  }

  const videos = await fetchPlaylistVideos(playlistId);

  await fs.writeFile("raw-output.json", JSON.stringify(videos, null, 2), "utf-8");
  console.log(`✅ Wrote ${videos.length} videos to raw-output.json`);
}

main();