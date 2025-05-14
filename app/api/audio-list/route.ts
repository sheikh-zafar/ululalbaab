// app/api/list-audios/route.ts

import { NextResponse } from 'next/server';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';

// Avoid reinitializing Firebase app in hot reloads
if (!getApps().length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_KEY as string);

  initializeApp({
    credential: cert(serviceAccount),
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  });
}

const bucket = getStorage().bucket();

export const GET = async () => {
  try {
    const [files] = await bucket.getFiles({ prefix: 'quran-tafseer/' });

    const urls = await Promise.all(
      files.map(async (file) => {
        const [url] = await file.getSignedUrl({
          action: 'read',
          expires: '03-01-2026',
        });

        return {
          name: file.name.replace('quran-tafseer/', ''),
          url,
        };
      })
    );

    return NextResponse.json(urls);
  } catch (error) {
    console.error('Error fetching audio files:', error);
    return NextResponse.json({ error: 'Failed to list audio files' }, { status: 500 });
  }
};
