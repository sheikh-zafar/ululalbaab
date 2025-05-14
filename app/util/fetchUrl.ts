// utils/fetchAudioUrl.ts
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../lib/firebase';

export async function fetchAudioUrl(filePath: string) {
  const audioRef = ref(storage, filePath); // handles both root and folder paths
  const url = await getDownloadURL(audioRef);
  return url;
}
