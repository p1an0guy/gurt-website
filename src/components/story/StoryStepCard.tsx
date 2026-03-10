import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import type { StoryStep } from '@/lib/content';

interface StoryStepCardProps {
  active?: boolean;
  inlineMedia?: React.ReactNode;
  step: StoryStep;
}

export function StoryStepCard({ active = false, inlineMedia, step }: StoryStepCardProps) {
  return (
    <Card className={cn('p-6 transition', active ? 'story-step-active' : 'story-step-inactive')}>
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] text-slate-500 uppercase">{step.number}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{step.title}</h3>
          </div>
          <Badge variant={active ? 'accent' : 'muted'}>{step.eyebrow}</Badge>
        </div>
        <p className="text-base leading-7 text-slate-300">{step.description}</p>
        {inlineMedia ? <div className="lg:hidden">{inlineMedia}</div> : null}
        <ul className="grid gap-3 sm:grid-cols-2">
          {step.highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-2xl border border-white/8 bg-black/18 px-4 py-3 text-sm leading-6 text-slate-300"
            >
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
