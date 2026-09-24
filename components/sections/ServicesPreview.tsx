import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Motion';
import { ButtonLink } from '@/components/Button';
import { services } from '@/utils/services-data';

export function ServicesPreview() {
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title="Comprehensive financial services under one roof"
            description="From routine compliance to strategic advisory, our eight service verticals cover every stage of your business lifecycle."
          />
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mt-12 flex justify-center" delay={0.1}>
          <ButtonLink href="/services" variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
            View All Services
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
