import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/PageShell';
import { PageHeader } from '@/components/PageHeader';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Motion';
import { ButtonLink } from '@/components/Button';
import { CtaSection } from '@/components/sections/CtaSection';
import { services } from '@/utils/services-data';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore our chartered accountancy services: audit & assurance, income tax, GST, accounting, company registration, ROC compliance, business advisory, and startup consultancy.',
};

const processFeatures = [
  'Fixed fee agreed before work begins',
  'Single dedicated point of contact',
  'All filings tracked on a compliance calendar',
  'Proactive alerts before every deadline',
];

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="What We Do"
        title="Financial services for every stage of your business"
        description="Eight specialised verticals covering compliance, taxation, and advisory — delivered by qualified chartered accountants with a single point of contact for every client."
        breadcrumb="Services"
      />

      <section className="section-pad bg-white">
        <div className="container-page">
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Engagement approach */}
      <section className="section-pad bg-slate-50">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="How We Work"
              title="A structured engagement, every time"
              description="No matter which service you choose, you get the same predictable experience — clear scope, fixed fees, and a named contact who knows your business."
              align="left"
            />
            <ul className="mt-8 space-y-4">
              {processFeatures.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold-500" />
                  <span className="text-[15px] leading-relaxed text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink
                href="/contact"
                variant="primary"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Discuss Your Requirements
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.1} variant="scale-in">
            <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-card">
              <h3 className="text-xl font-semibold text-navy-900">
                Service engagement snapshot
              </h3>
              <div className="mt-6 space-y-5">
                {[
                  { label: 'Average response time', value: 'Under 1 business day' },
                  { label: 'On-time filing rate', value: '99%' },
                  { label: 'Fee transparency', value: 'Fixed, agreed upfront' },
                  { label: 'Client retention', value: '94% year on year' },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between border-b border-slate-100 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-slate-500">{row.label}</span>
                    <span className="text-sm font-semibold text-navy-900">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </PageShell>
  );
}
