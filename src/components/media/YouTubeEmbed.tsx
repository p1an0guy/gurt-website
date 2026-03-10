'use client';

import { useEffect } from 'react';
import { Card } from '@/components/ui/Card';
import { demoVideo } from '@/lib/content';

export function YouTubeEmbed() {
  const videoId = process.env.NEXT_PUBLIC_YOUTUBE_ID || demoVideo.fallbackVideoId;

  useEffect(() => {
    void import('lite-youtube-embed/src/lite-yt-embed');
  }, []);

  return (
    <Card className="overflow-hidden border-white/8 bg-white/5 p-4">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-300">Product walkthrough</p>
          <h3 className="text-2xl font-semibold text-white">{demoVideo.title}</h3>
        </div>
      </div>
      <lite-youtube
        videoid={videoId}
        title={demoVideo.title}
        playlabel={`Play demo: ${demoVideo.title}`}
        style={{ backgroundImage: `url('https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg')` }}
      ></lite-youtube>
    </Card>
  );
}
