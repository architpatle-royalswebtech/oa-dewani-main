'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  /**
   * 'default' — dark text logo (on white / light backgrounds)
   * 'white'   — inverted to all-white (on dark backgrounds)
   */
  variant?: 'default' | 'white';
  className?: string;
  height?: number;
}

export function Logo({ variant = 'default', className, height = 48 }: LogoProps) {
  return (
    <Link href="/" aria-label="O A Dewani & Co. — Home" className="inline-flex items-center">
      <Image
        src="/OADLogo.svg"
        alt="O A Dewani & Co. Chartered Accountants"
        width={Math.round(height * 7.5)}
        height={height}
        className={cn(
          'h-auto w-auto object-contain select-none',
          variant === 'white' && 'brightness-0 invert',
          className,
        )}
        priority
      />
    </Link>
  );
}
