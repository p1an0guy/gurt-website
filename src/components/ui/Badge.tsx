import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: 'accent' | 'default' | 'muted';
}

const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
  accent: 'border-[#c40f11]/30 bg-[#c40f11]/12 text-[#ffd5d6]',
  default: 'border-white/12 bg-white/6 text-white',
  muted: 'border-white/10 bg-white/5 text-slate-300',
};

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.22em] uppercase',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
