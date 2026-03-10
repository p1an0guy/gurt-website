import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-[1.75rem] border border-white/8 bg-white/5 shadow-[0_18px_48px_rgba(0,0,0,0.18)] backdrop-blur-sm',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
