import { ArrowRight, Phone } from 'lucide-react';
import { Reveal } from '@/components/Motion';
import { ButtonLink } from '@/components/Button';

export function CtaSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <Reveal variant="scale-in">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-navy-800 px-6 py-14 text-center shadow-navy-glow sm:px-12 sm:py-16 lg:py-20">
            {/* decorative grid + orbs */}
            <div className="absolute inset-0 bg-grid-light opacity-20" />
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-navy-600/30 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Ready to put your compliance on autopilot?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                Book a free 30-minute consultation. We will review your current
                compliance position and outline exactly how we can help — no
                obligation, no jargon.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <ButtonLink
                  href="/contact"
                  variant="gold"
                  size="lg"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Book a Free Consultation
                </ButtonLink>

                <ButtonLink
                  href="tel:+919876543210"
                  variant="light"
                  size="lg"
                  icon={<Phone className="h-4 w-4" />}
                >
                  +91 98765 43210
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}