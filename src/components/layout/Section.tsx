import type { ReactNode } from 'react';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  description?: string;
  eyebrow?: string;
  id?: string;
  title: string;
}

export function Section({ children, className, description, eyebrow, id, title }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-28 py-18 sm:py-22', className)}>
      <Container>
        <div className="mb-10 max-w-3xl space-y-4">
          {eyebrow ? (
            <p className="text-sm tracking-[0.28em] text-[#f0b4b5] uppercase">{eyebrow}</p>
          ) : null}
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description ? <p className="text-lg leading-8 text-slate-300">{description}</p> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
