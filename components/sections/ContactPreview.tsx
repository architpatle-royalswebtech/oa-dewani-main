import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Motion';
import { ContactForm } from '@/components/ContactForm';
import { officeDetails } from '@/utils/site-data';

export function ContactPreview() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Contact Us"
            title="Let's talk about your business"
            description="Send us a message or reach out directly. We respond to every enquiry within one business day."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Office details */}
          <Reveal className="lg:col-span-2" delay={0.05}>
            <div className="flex h-full flex-col gap-6 rounded-2xl bg-slate-50 p-6 sm:p-8">
              <div>
                <h3 className="text-xl font-semibold text-primary">
                  Office Details
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Visit us during working hours or book an appointment.
                </p>
              </div>

              <ul className="space-y-5">
                {officeDetails.map((detail) => {
                  const Icon = detail.icon;

                  return (
                    <li key={detail.label} className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-secondary-bright">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-400">
                          {detail.label}
                        </p>

                        <p className="mt-0.5 text-sm leading-relaxed text-navy-800">
                          {detail.value}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* map placeholder */}
              <div className="mt-auto overflow-hidden rounded-xl border border-slate-200">
                <div className="relative flex aspect-video items-center justify-center bg-slate-100 text-center">
                  <div className="absolute inset-0 bg-dots opacity-50" />

                  <div className="relative z-10">
                    <MapPin className="mx-auto h-8 w-8 text-navy-700" />

                    <p className="mt-2 text-xs text-slate-500">
                      Heritage Towers, M. G. Road, Mumbai
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className="lg:col-span-3" delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}