import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { PageShell } from '@/components/PageShell';
import { PageHeader } from '@/components/PageHeader';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Motion';
import { ButtonLink } from '@/components/Button';
import { CtaSection } from '@/components/sections/CtaSection';
import { services, serviceIcons } from '@/utils/services-data';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const Icon = serviceIcons[service.icon];
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <PageShell>
      <PageHeader
        breadcrumb="Services"
        title={service.title}
        description={service.shortDescription}
      />

      <section className="section-pad bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <Reveal>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-900 text-gold-400">
                <Icon className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <h2 className="mt-6 text-2xl font-semibold text-navy-900">
                Overview
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                {service.description}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="mt-10 text-xl font-semibold text-navy-900">
                What we cover
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                    <span className="text-sm leading-relaxed text-slate-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <h3 className="mt-10 text-xl font-semibold text-navy-900">
                What you receive
              </h3>
              <ul className="mt-5 space-y-3">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    <span className="text-[15px] leading-relaxed text-slate-700">
                      {deliverable}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1} variant="scale-in">
            <aside className="sticky top-28 space-y-6">
              <div className="rounded-2xl bg-navy-900 p-6 text-white shadow-card">
                <h3 className="text-lg font-semibold text-white">
                  Need this service?
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Book a consultation to discuss your requirements and get a fixed
                  fee quote.
                </p>
                <div className="mt-5 space-y-3">
                  <ButtonLink
                    href="/contact"
                    variant="gold"
                    className="w-full"
                    icon={<ArrowRight className="h-4 w-4" />}
                  >
                    Get Consultation
                  </ButtonLink>
                  <ButtonLink
                    href="tel:+919876543210"
                    variant="light"
                    className="w-full"
                    icon={<Phone className="h-4 w-4" />}
                  >
                    Call Us
                  </ButtonLink>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-navy-900">
                  Other Services
                </h4>
                <ul className="mt-4 space-y-3">
                  {related.map((r) => {
                    const RIcon = serviceIcons[r.icon];
                    return (
                      <li key={r.slug}>
                        <Link
                          href={`/services/${r.slug}`}
                          className="group flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-slate-50"
                        >
                          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-navy-700 transition-colors group-hover:bg-navy-900 group-hover:text-gold-400">
                            <RIcon className="h-5 w-5" strokeWidth={1.5} />
                          </span>
                          <span className="text-sm font-medium text-slate-600 group-hover:text-navy-900">
                            {r.title}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </PageShell>
  );
}
