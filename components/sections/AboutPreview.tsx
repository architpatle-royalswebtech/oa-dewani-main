import Image from 'next/image';
import { CheckCircle2, ArrowRight, Landmark } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Motion';
import { ButtonLink } from '@/components/Button';

const highlights = [
  'Qualified chartered accountants with 15+ years of practice',
  'Single dedicated point of contact for every client',
  'Transparent fixed fees agreed before work begins',
  'Proactive compliance that flags issues before they cost you',
];

export function AboutPreview() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* Image column */}
        <Reveal variant="scale-in" className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card-hover">
            <Image
              src="https://images.pexels.com/photos/6285113/pexels-photo-6285113.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Professional accountants reviewing documents"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            {/* floating stat */}
            <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 p-5 shadow-card backdrop-blur-sm">
              <p className="text-3xl font-semibold text-[#0d1f3c]">15+</p>
              <p className="mt-0.5 text-sm text-slate-500">
                Years of trusted practice
              </p>
            </div>
          </div>

          {/* decorative corner frame */}
          <div className="absolute -right-3 -top-3 hidden h-20 w-20 items-center justify-center rounded-2xl border-2 border-[#b8973a]/50 sm:flex">
            <Landmark className="h-8 w-8 text-[#b8973a]" strokeWidth={1.5} />
          </div>
        </Reveal>

        {/* Copy column */}
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="About Our Firm"
            title="Precision in numbers, partnership in practice"
            description="O A Dewani & Co. is a full-service chartered accountancy firm serving businesses and individuals across India. From statutory audits to startup advisory, we combine technical expertise with a genuinely personal approach."
            align="left"
          />

          <ul className="mt-8 space-y-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#b8973a]/10 text-[#b8973a]">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </div>

                <span className="text-[15px] leading-relaxed text-slate-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <ButtonLink
              href="/about"
              variant="primary"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Learn More About Us
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
