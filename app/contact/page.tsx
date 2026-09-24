import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { PageShell } from '@/components/PageShell';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Motion';
import { ContactForm } from '@/components/ContactForm';
import { officeDetails } from '@/utils/site-data';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with O A Dewani & Co. for audit, tax, GST, and advisory services. Call +91 98765 43210 or send us a message and we will respond within one business day.',
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Get In Touch"
        title="Let's talk about your business"
        description="Whether you need a one-time filing or a long-term compliance partner, we are here to help. Reach out and we will respond within one business day."
        breadcrumb="Contact"
      />

      <section className="section-pad bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-5">
          {/* Office details */}
          <Reveal className="lg:col-span-2" delay={0.05}>
            <div className="flex h-full flex-col gap-6 rounded-2xl bg-navy-900 p-6 text-white shadow-card sm:p-8">
              <div>
                <h2 className="text-xl font-semibold text-white">Office Details</h2>
                <p className="mt-2 text-sm text-slate-300">
                  Visit us during working hours or book an appointment in advance.
                </p>
              </div>
              <ul className="space-y-5">
                {officeDetails.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <li key={detail.label} className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-gold-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-400">
                          {detail.label}
                        </p>
                        <p className="mt-0.5 text-sm leading-relaxed text-white">
                          {detail.value}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-auto overflow-hidden rounded-xl border border-white/10">
                <div className="relative flex aspect-video items-center justify-center bg-navy-800/60 text-center">
                  <div className="absolute inset-0 bg-grid-light opacity-20" />
                  <div className="relative z-10">
                    <MapPin className="mx-auto h-10 w-10 text-gold-400" />
                    <p className="mt-2 text-sm font-medium text-white">
                      Heritage Towers, M. G. Road
                    </p>
                    <p className="text-xs text-slate-400">Mumbai 400 001</p>
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
      </section>

      {/* Map placeholder */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <div className="relative aspect-[21/9] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card">
              <div className="absolute inset-0 bg-dots opacity-50" />
              <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 text-gold-400 shadow-card">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-navy-900">
                  Find us on the map
                </h3>
                <p className="mt-2 max-w-md text-sm text-slate-500">
                  Our office is located at Heritage Towers on M. G. Road, Mumbai.
                  A live Google Maps embed will appear here in production.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
