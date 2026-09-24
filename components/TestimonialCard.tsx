import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { getInitials } from '@/utils/format';
import type { Testimonial } from '@/types';
import { cn } from '@/lib/utils';

export function TestimonialCard({ testimonial, className }: { testimonial: Testimonial; className?: string }) {
  return (
    <Card
      className={cn(
        'relative flex h-full flex-col p-6 shadow-soft transition-all duration-300 hover:shadow-card-hover sm:p-7',
        className,
      )}
    >
      <Quote className="absolute right-6 top-6 h-10 w-10 text-slate-100" />

      <div className="flex gap-1 text-gold-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              'h-4 w-4',
              i < testimonial.rating
                ? 'fill-gold-500'
                : 'fill-slate-200 text-slate-200',
            )}
          />
        ))}
      </div>

      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-700">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-gold-400">
          {getInitials(testimonial.name)}
        </div>

        <div>
          <p className="font-semibold text-navy-900">{testimonial.name}</p>
          <p className="text-xs text-slate-500">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </Card>
  );
}