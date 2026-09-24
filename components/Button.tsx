import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'gold' | 'outline' | 'ghost' | 'light';
type Size = 'sm' | 'md' | 'lg';

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
}

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8973a]/50 focus-visible:ring-offset-2';

const variants: Record<Variant, string> = {
  primary:
    'bg-[#0d1f3c] text-white hover:bg-[#0d1f3c]/90 hover:shadow-navy-glow active:scale-[0.98]',

  gold:
    'bg-[#b8973a] text-[#0d1f3c] hover:bg-[#b8973a]/90 hover:shadow-glow active:scale-[0.98]',

  outline:
    'border border-slate-300 bg-white text-[#0d1f3c] hover:border-[#0d1f3c]/30 hover:bg-slate-50 active:scale-[0.98]',

  ghost:
    'text-[#0d1f3c] hover:bg-slate-100 hover:text-[#0d1f3c]',

  light:
    'border border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 active:scale-[0.98]',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
  lg: 'h-12 px-7 text-[15px]',
};

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
  icon,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
      {icon}
    </Link>
  );
}
