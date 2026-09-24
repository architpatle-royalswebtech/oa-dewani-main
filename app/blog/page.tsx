import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { PageHeader } from '@/components/PageHeader';
import { BlogCard } from '@/components/BlogCard';
import { Reveal } from '@/components/Motion';
import { blogPosts } from '@/utils/blog-data';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Practical articles on GST, income tax, audit, company law, and business advisory from the chartered accountants at O A Dewani & Co.',
};

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const rest = blogPosts.filter((p) => p.slug !== featured.slug);

  const categories = Array.from(
    new Set(blogPosts.map((p) => p.category)),
  );

  return (
    <PageShell>
      <PageHeader
        eyebrow="Insights & Articles"
        title="Guidance you can put to work"
        description="Plain-language articles on tax, GST, audit, and compliance — written by our chartered accountants for business owners and founders."
        breadcrumb="Blog"
      />

      <section className="section-pad bg-white">
        <div className="container-page">
          {/* Category pills */}
          <Reveal>
            <div className="flex flex-wrap gap-2.5">
              <span className="rounded-full bg-navy-900 px-4 py-1.5 text-sm font-medium text-white">
                All Articles
              </span>
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-medium text-slate-600"
                >
                  {category}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Featured post */}
          <Reveal className="mt-10">
            <BlogCard post={featured} featured />
          </Reveal>

          {/* Grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.07}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
