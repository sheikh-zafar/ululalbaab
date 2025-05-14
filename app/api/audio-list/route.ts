// pages/api/list-audios.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { initializeApp, cert } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';

const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_KEY as string);

const app = initializeApp({
  credential: cert(serviceAccount),
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
});

const bucket = getStorage().bucket();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const [files] = await bucket.getFiles({ prefix: 'your-folder-name/' });

    const urls = await Promise.all(
      files.map(async (file) => {
        const [url] = await file.getSignedUrl({
          action: 'read',
          expires: '03-01-2026',
        });

        return {
          name: file.name.replace('your-folder-name/', ''),
          url,
        };
      })
    );

    res.status(200).json(urls);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to list audio files' });
  }
}
