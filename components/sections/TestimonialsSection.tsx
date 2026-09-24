import { SectionHeading } from '@/components/SectionHeading';
import { TestimonialCard } from '@/components/TestimonialCard';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Motion';
import { testimonials } from '@/utils/site-data';

export function TestimonialsSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Client Testimonials"
            title="What our clients say about working with us"
            description="Our reputation is built on long-term relationships. Here is what business owners and founders tell us about our work."
          />
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <TestimonialCard testimonial={testimonial} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}