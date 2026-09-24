import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
} from 'lucide-react';
import { PageShell } from '@/components/PageShell';
import { Reveal } from '@/components/Motion';
import { ButtonLink } from '@/components/Button';
import { SectionHeading } from '@/components/SectionHeading';
import { CtaSection } from '@/components/sections/CtaSection';
import { BlogCard } from '@/components/BlogCard';
import { blogPosts } from '@/utils/blog-data';
import { formatDate } from '@/utils/format';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Article Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, alt: post.imageAlt }],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function BlogDetailPage({ params }: PageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);
  const fallbackRelated = blogPosts
    .filter((p) => p.slug !== post.slug && !related.includes(p))
    .slice(0, 3 - related.length);
  const relatedPosts = [...related, ...fallbackRelated];

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-slate-50 pt-32 pb-0 sm:pt-36">
        <div className="absolute inset-0 -z-10 bg-dots opacity-60" />
        <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-navy-100/60 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent" />
        <div className="container-page">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-navy-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all articles
            </Link>
            <span className="mt-6 inline-flex items-center rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-700">
              {post.category}
            </span>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <User className="h-4 w-4 text-gold-600" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gold-600" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold-600" />
                {post.readTime}
              </span>
            </div>
          </Reveal>
        </div>

        {/* Hero image */}
        <Reveal className="container-page mt-10" delay={0.1}>
          <div className="relative aspect-[21/9] overflow-hidden rounded-3xl border border-slate-200 shadow-card">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Content + share */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <article className="lg:col-span-8">
            <Reveal>
              <p className="text-lg font-medium leading-relaxed text-navy-800">
                {post.excerpt}
              </p>
              <div className="mt-8 space-y-8">
                {post.content.map((block, i) => (
                  <div key={i}>
                    {block.heading && (
                      <h2 className="text-2xl font-semibold text-navy-900">
                        {block.heading}
                      </h2>
                    )}
                    <div className="mt-4 space-y-4">
                      {block.body.map((para, j) => (
                        <p
                          key={j}
                          className="text-[15px] leading-[1.8] text-slate-600"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </article>

          {/* Share sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft">
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-navy-900">
                  <Share2 className="h-4 w-4 text-gold-600" />
                  Share this article
                </h3>
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {[
                    { Icon: Linkedin, label: 'LinkedIn', color: 'hover:bg-[#0a66c2] hover:text-white' },
                    { Icon: Twitter, label: 'Twitter', color: 'hover:bg-[#1da1f2] hover:text-white' },
                    { Icon: Facebook, label: 'Facebook', color: 'hover:bg-[#1877f2] hover:text-white' },
                    { Icon: Link2, label: 'Copy Link', color: 'hover:bg-navy-900 hover:text-white' },
                  ].map(({ Icon, label, color }) => (
                    <button
                      key={label}
                      aria-label={label}
                      className={`flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition-all ${color}`}
                    >
                      <Icon className="h-5 w-5" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-navy-900 p-6 text-white shadow-card">
                <h3 className="text-lg font-semibold text-white">
                  Need expert help?
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Talk to a chartered accountant about your specific situation.
                </p>
                <ButtonLink
                  href="/contact"
                  variant="gold"
                  className="mt-5 w-full"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Book a Consultation
                </ButtonLink>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-gold-400">
                    OAD
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">{post.author}</p>
                    <p className="text-xs text-slate-500">{post.authorRole}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Chartered Accountant and Managing Partner at O A Dewani & Co.,
                  advising businesses on audit, tax, and growth.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="section-pad bg-slate-50">
          <div className="container-page">
            <SectionHeading
              eyebrow="Keep Reading"
              title="Related articles"
              description="More guidance from our team on similar topics."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {relatedPosts.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.08}>
                  <BlogCard post={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection />
    </PageShell>
  );
}
