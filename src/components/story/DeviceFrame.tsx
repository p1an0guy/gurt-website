import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import type { StoryStep } from '@/lib/content';

interface DeviceFrameProps {
  priority?: boolean;
  step: StoryStep;
}

export function DeviceFrame({ priority = false, step }: DeviceFrameProps) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-[#0f131c] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.36)]">
      <div className="mb-3 flex items-center justify-between px-2">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff7b72]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f0c15b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#5ed08d]" />
        </div>
        <Badge variant="muted">{step.eyebrow}</Badge>
      </div>
      <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b0f18]">
        <div className="relative aspect-[16/10]">
          <Image
            src={step.image.src}
            alt={step.image.alt}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 46vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5">
            <p className="text-xs tracking-[0.28em] text-slate-300 uppercase">{step.kicker}</p>
            <p className="mt-2 text-2xl font-semibold text-white">{step.title}</p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-200">{step.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
