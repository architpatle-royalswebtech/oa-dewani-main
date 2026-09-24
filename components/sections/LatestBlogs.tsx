import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { BlogCard } from '@/components/BlogCard';
import { Reveal } from '@/components/Motion';
import { ButtonLink } from '@/components/Button';
import { blogPosts } from '@/utils/blog-data';

export function LatestBlogs() {
  const latest = blogPosts.slice(0, 3);

  return (
    <section className="section-pad bg-slate-50">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Latest Insights"
            title="Practical guidance from our practice"
            description="Plain-language articles on tax, GST, audit, and compliance to help you stay ahead of the rules that affect your business."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center" delay={0.1}>
          <ButtonLink
            href="/blog"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="h-4 w-4" />}
          >
            Read All Articles
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}