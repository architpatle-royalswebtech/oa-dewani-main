'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb: string;
}

export function PageHeader({ eyebrow, title, description, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-50 pt-32 pb-16 sm:pt-36 sm:pb-20">
      {/* decorative */}
      <div className="absolute inset-0 -z-10 bg-dots opacity-60" />
      <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-navy-100/60 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-gold-100/50 blur-3xl" />
      {/* top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent" />

      <div className="container-page">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-1.5 text-sm text-slate-500"
        >
          <Link href="/" className="transition-colors hover:text-navy-900">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-navy-900">{breadcrumb}</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-3xl"
        >
          {eyebrow && (
            <span className="eyebrow">
              <span className="h-px w-6 bg-current" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-slate-600">{description}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
