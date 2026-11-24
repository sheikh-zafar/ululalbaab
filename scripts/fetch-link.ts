
import fs from "fs/promises";

const API_KEY = process.env.YOUTUBE_API_KEY;
if (!API_KEY) {
    console.error("Missing YOUTUBE_API_KEY in environment");
    process.exit(1);
}
const apiKey: string = API_KEY;

async function main() {
    const playlistUrl = process.argv[2];

    if (!playlistUrl) {
        console.error("Usage: npm run fetch:link -- <playlist-url>");
        process.exit(1);
    }

    const playlistId = new URL(playlistUrl).searchParams.get("list");

    if (!playlistId) {
        console.error("Could not extract playlist ID");
        process.exit(1);
    }


    const links: string[] = [];
    let pageToken = "";
    let index = 1;

    try {
        do {
            const url = new URL(
                "https://www.googleapis.com/youtube/v3/playlistItems"
            );

            url.searchParams.set("part", "snippet");
            url.searchParams.set("maxResults", "50");
            url.searchParams.set("playlistId", playlistId);
            url.searchParams.set("key", apiKey);

            if (pageToken) {
                url.searchParams.set("pageToken", pageToken);
            }

            const res = await fetch(url.toString());
            const data = await res.json();

            if (!res.ok) {
                throw new Error(JSON.stringify(data, null, 2));
            }

            for (const item of data.items ?? []) {
                const videoId = item.snippet?.resourceId?.videoId;
                const title = item.snippet?.title;

                if (
                    videoId &&
                    title &&
                    title !== "Private video" &&
                    title !== "Deleted video"
                ) {
                    links.push(
                        `https://www.youtube.com/watch?v=${videoId}&list=${playlistId}&index=${index}`
                    );

                    index++;
                }
            }

            pageToken = data.nextPageToken ?? "";

        } while (pageToken);

        await fs.writeFile(
            "video-links.json",
            JSON.stringify(links, null, 2),
            "utf-8"
        );

        console.log(`✅ Wrote ${links.length} video links to video-links.json`);

    } catch (error) {
        console.error("Failed to fetch playlist:", error);
        process.exit(1);
    }
}

main();
