import {
  ShieldCheck, CalendarClock, ReceiptText,
  UserCheck, TrendingUp, Layers, type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Motion';
import { whyChooseUs } from '@/utils/process-data';

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck, CalendarClock, ReceiptText, UserCheck, TrendingUp, Layers,
};

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The firm businesses trust with their numbers"
            description="We are not just a compliance vendor. We are a long-term partner who understands your business, anticipates your needs, and is always a call away."
          />
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] ?? ShieldCheck;

            return (
              <StaggerItem key={item.title}>
                <div className="group h-full rounded-2xl border border-slate-200/80 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:border-[#0d1f3c]/20">

                  {/* icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0d1f3c] text-[#b8973a] transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5.5 w-5.5" strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-[#0d1f3c]">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>

                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}