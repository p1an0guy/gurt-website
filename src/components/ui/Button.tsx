'use client';

import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'lg' | 'md' | 'sm';

type BaseProps = {
  children: ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type LinkButtonProps = BaseProps & {
  href: string;
  rel?: string;
  scrollToId?: never;
  target?: string;
};

type ActionButtonProps = BaseProps & {
  disabled?: boolean;
  href?: never;
  onClick?: () => void;
  scrollToId?: string;
  type?: 'button' | 'submit' | 'reset';
};

type ButtonProps = LinkButtonProps | ActionButtonProps;

const sizeClasses: Record<ButtonSize, string> = {
  lg: 'min-h-13 px-6 text-base',
  md: 'min-h-12 px-5 text-sm',
  sm: 'min-h-11 px-4 text-sm',
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border-[#c40f11]/50 bg-[#f6f7fb] text-slate-950 shadow-[0_12px_32px_rgba(255,255,255,0.12)] hover:-translate-y-0.5 hover:bg-white',
  secondary: 'border-white/12 bg-white/6 text-white hover:-translate-y-0.5 hover:bg-white/10',
};

export function Button(props: ButtonProps) {
  const { children, className, size = 'md', variant = 'primary' } = props;
  const classes = cn(
    'inline-flex items-center justify-center rounded-full border font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-60',
    sizeClasses[size],
    variantClasses[variant],
    className,
  );

  if ('href' in props) {
    const { href, rel, target } = props as LinkButtonProps;
    return (
      <a className={classes} href={href} rel={rel} target={target}>
        {children}
      </a>
    );
  }

  const { scrollToId, onClick, type = 'button', ...buttonProps } = props;

  return (
    <button
      className={classes}
      type={type}
      onClick={() => {
        if (scrollToId) {
          document
            .getElementById(scrollToId)
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        onClick?.();
      }}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
