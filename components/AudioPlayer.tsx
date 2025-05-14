'use client';

import { useEffect, useState } from 'react';
import { fetchAudioUrl } from '../app/util/fetchUrl';

const AudioPlayer = ({ fileName }: { fileName: string }) => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const url = await fetchAudioUrl(fileName);
        setAudioUrl(url);
      } catch (error) {
        console.error('Failed to load audio:', error);
      }
    }
    load();
  }, [fileName]);

  if (!audioUrl) return <p>Loading audio...</p>;

  return (
    <audio controls>
      <source src={audioUrl} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;
