'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { serviceIcons } from '@/utils/services-data';
import type { Service } from '@/types';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  className?: string;
  href?: string;
}

export function ServiceCard({
  service,
  className,
  href,
}: ServiceCardProps) {
  const Icon = serviceIcons[service.icon];
  const linkHref = href ?? `/services/${service.slug}`;

  return (
    <Card
      className={cn(
        'group relative h-full overflow-hidden border-slate-200/80 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-7',
        className,
      )}
    >
      {/* top accent on hover */}
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-secondary-bright to-secondary transition-transform duration-300 group-hover:scale-x-100" />

      {/* icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-50 text-navy-800 ring-1 ring-navy-100 transition-all duration-300 group-hover:bg-primary group-hover:text-secondary-bright group-hover:ring-primary">
        <Icon className="h-7 w-7" strokeWidth={1.5} />
      </div>

      <h3 className="mt-5 text-xl font-semibold text-navy-900">
        {service.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-slate-500">
        {service.shortDescription}
      </p>

      <Link
        href={linkHref}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 transition-colors group-hover:text-secondary"
      >
        Read More
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </Card>
  );
}