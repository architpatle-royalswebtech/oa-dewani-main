import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { formatDate } from '@/utils/format';
import type { BlogPost } from '@/types';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
  className?: string;
  featured?: boolean;
}

export function BlogCard({ post, className, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <Card
        className={cn(
          'group grid overflow-hidden border-slate-200/80 p-0 shadow-soft transition-all duration-300 hover:shadow-card-hover md:grid-cols-2',
          className,
        )}
      >
        <Link
          href={`/blog/${post.slug}`}
          className="relative block aspect-[16/10] overflow-hidden md:aspect-auto"
        >
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <span className="absolute left-4 top-4 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-navy-950">
            Featured
          </span>
        </Link>

        <div className="flex flex-col justify-center p-6 sm:p-8">
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span className="font-semibold uppercase tracking-wider text-secondary">
              {post.category}
            </span>

            <span className="h-1 w-1 rounded-full bg-slate-300" />

            <span>{formatDate(post.date)}</span>
          </div>

          <h3 className="mt-3 text-2xl font-semibold leading-snug text-primary">
            <Link
              href={`/blog/${post.slug}`}
              className="transition-colors hover:text-secondary"
            >
              {post.title}
            </Link>
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-slate-500 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="mt-5 flex items-center justify-between">
            <span className="text-sm font-medium text-navy-700">
              {post.author}
            </span>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-secondary"
            >
              Read More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card
      className={cn(
        'group flex h-full flex-col overflow-hidden border-slate-200/80 p-0 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover',
        className,
      )}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="relative block aspect-[16/10] overflow-hidden"
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
          {post.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <span>{formatDate(post.date)}</span>

          <span className="h-1 w-1 rounded-full bg-slate-300" />

          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readTime}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-semibold leading-snug text-primary">
          <Link
            href={`/blog/${post.slug}`}
            className="transition-colors hover:text-secondary"
          >
            {post.title}
          </Link>
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-sm font-medium text-navy-700">
            {post.author}
          </span>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-secondary"
          >
            Read More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </Card>
  );
}