'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { navItems } from '@/utils/site-data';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  /* Hero on home page is dark — use white logo when not scrolled on home */
  const isHome = pathname === '/';
  const isDarkBg = isHome && !scrolled;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-soft'
          : isHome
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-soft',
      )}
    >
      <nav className="container-page flex h-20 items-center justify-between gap-4">

        {/* Logo — dark on light pages/scrolled, white on dark hero */}
        <Logo
          variant={isDarkBg ? 'white' : 'default'}
          height={42}
        />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                  'after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:rounded-full after:transition-transform after:duration-300',
                  isActive(item.href)
                    ? isDarkBg
                      ? 'text-white after:bg-[#b8973a] after:scale-x-100'
                      : 'text-[#0d1f3c] after:bg-[#b8973a] after:scale-x-100'
                    : isDarkBg
                      ? 'text-white/75 hover:text-white hover:bg-white/10 after:bg-[#b8973a] after:scale-x-0 hover:after:scale-x-100'
                      : 'text-slate-600 hover:text-[#0d1f3c] hover:bg-slate-50 after:bg-[#b8973a] after:scale-x-0 hover:after:scale-x-100',
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className={cn(
              'group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200',
              isDarkBg
                ? 'bg-[#b8973a] text-[#0d1f3c] hover:bg-[#b8973a]/90 hover:shadow-glow'
                : 'bg-[#0d1f3c] text-white hover:bg-[#0d1f3c]/90 hover:shadow-navy-glow',
            )}
          >
            Get Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-lg lg:hidden transition-colors',
            isDarkBg
              ? 'text-white hover:bg-white/10'
              : 'text-[#0d1f3c] hover:bg-slate-100',
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          'lg:hidden overflow-hidden bg-white border-t border-slate-100 transition-[max-height,opacity] duration-300',
          open ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  'block rounded-xl px-4 py-3 text-[15px] font-medium transition-colors',
                  isActive(item.href)
                    ? 'bg-[#0d1f3c]/5 text-[#0d1f3c] font-semibold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-[#0d1f3c]',
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li className="mt-3">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-full bg-[#0d1f3c] px-5 py-3 text-[15px] font-semibold text-white"
            >
              Get Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}