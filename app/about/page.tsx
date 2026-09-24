import type { Metadata } from 'next';
import Image from 'next/image';
import { Target, Eye, ShieldCheck, Award, Users, Briefcase } from 'lucide-react';
import { PageShell } from '@/components/PageShell';
import { PageHeader } from '@/components/PageHeader';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Motion';
import { CtaSection } from '@/components/sections/CtaSection';
import { companyStats } from '@/utils/site-data';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about O A Dewani & Co., a chartered accountancy firm with 15+ years of experience in audit, tax, GST, and business advisory services across India.',
};

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To deliver audit, tax, and advisory services with uncompromising integrity, helping businesses stay compliant and make confident financial decisions.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To be the most trusted chartered accountancy partner for growing Indian businesses, recognised for precision, accessibility, and genuine partnership.',
  },
  {
    icon: ShieldCheck,
    title: 'Our Values',
    description:
      'Integrity in every engagement, transparency in every fee, and proactive care for every client. We treat your business as if it were our own.',
  },
];

const milestones = [
  { year: '2010', text: 'Firm founded by CA O A Dewani with a focus on audit and tax practice.' },
  { year: '2014', text: 'Expanded into GST consultancy following the national tax reform rollout.' },
  { year: '2018', text: 'Launched a dedicated startup consultancy vertical for early-stage founders.' },
  { year: '2022', text: 'Crossed 350+ active clients across manufacturing, services, and technology.' },
  { year: '2026', text: 'Continuing to grow with eight full service verticals and a nationwide reach.' },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About Our Firm"
        title="A firm built on trust, precision, and partnership"
        description="O A Dewani & Co. is a full-service chartered accountancy firm helping businesses across India navigate compliance, taxation, and growth with confidence."
        breadcrumb="About"
      />

      {/* Overview */}
      <section className="section-pad bg-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="scale-in" className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
              <Image
                src="https://images.pexels.com/photos/8463151/pexels-photo-8463151.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Business executives in a modern conference room"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-card-hover sm:block">
              <div className="flex items-center gap-4">
                <Award className="h-10 w-10 text-gold-600" />
                <div>
                  <p className="text-2xl font-semibold text-navy-900">ICAI</p>
                  <p className="text-xs text-slate-500">Certified Members</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="Company Overview"
              title="Fifteen years of reliable financial stewardship"
              description="Founded in 2010 by CA O A Dewani, our firm has grown from a single-partner practice into a multidisciplinary chartered accountancy firm serving over 350 clients. We serve manufacturers, traders, service businesses, startups, and high-net-worth individuals with the same commitment to accuracy and accessibility."
              align="left"
            />
            <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
              Our team of qualified chartered accountants and support staff brings
              deep technical knowledge across audit, direct and indirect taxation,
              corporate law, and business advisory. We believe compliance is not a
              burden to be managed but a foundation to be built upon — one that, when
              done right, gives you the clarity to make better decisions.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Briefcase className="mt-0.5 h-6 w-6 text-gold-600" />
                <div>
                  <p className="font-semibold text-navy-900">350+ Clients</p>
                  <p className="text-sm text-slate-500">Across industries</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="mt-0.5 h-6 w-6 text-gold-600" />
                <div>
                  <p className="font-semibold text-navy-900">Qualified Team</p>
                  <p className="text-sm text-slate-500">ICAI member firm</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-pad bg-slate-50">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="What Drives Us"
              title="Mission, vision, and values"
              description="These principles guide every engagement, every filing, and every conversation we have with our clients."
            />
          </Reveal>
          <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={value.title}>
                  <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-gold-400">
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-navy-900">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-500">
                      {value.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-navy-900 py-16 sm:py-20">
        <div className="absolute inset-0 bg-grid-light opacity-20" />
        <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-navy-700/30 blur-3xl" />
        <div className="container-page relative z-10">
          <StaggerGroup className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {companyStats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <p className="text-4xl font-semibold text-gold-500 sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-wider text-slate-400">
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Our Journey"
              title="Fifteen years of steady growth"
              description="From a single desk to a full-service firm, every milestone has been earned through client trust."
            />
          </Reveal>
          <div className="mt-14 max-w-3xl">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.06}>
                <div className="relative flex gap-6 pb-10 last:pb-0">
                  {i < milestones.length - 1 && (
                    <div className="absolute left-[1.875rem] top-12 h-full w-px bg-slate-200" />
                  )}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-gold-400 shadow-card">
                    {m.year}
                  </div>
                  <div className="pt-4">
                    <p className="text-[15px] leading-relaxed text-slate-600">
                      {m.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </PageShell>
  );
}
