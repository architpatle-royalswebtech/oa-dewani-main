'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Phone, Mail, MapPin,
  Linkedin, Facebook, Twitter, Instagram,
  ArrowRight, CheckCircle2, Send,
} from 'lucide-react';
import { Logo } from '@/components/Logo';
import { navItems } from '@/utils/site-data';
import { services } from '@/utils/services-data';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="relative overflow-hidden bg-navy-900 text-slate-300">
      <div className="absolute inset-0 bg-grid-light opacity-30" />
      <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-navy-700/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container-page relative z-10">

        {/* Newsletter band */}
        <div className="grid gap-8 border-b border-white/10 py-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Stay informed on tax and compliance
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Subscribe for practical updates on GST, income tax, and company law —
              no spam, only what matters to your business.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex w-full gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-label="Email address"
              className="h-12 flex-1 rounded-full border border-white/15 bg-white/5 px-5 text-sm text-white placeholder:text-slate-500 focus:border-secondary-bright focus:outline-none focus:ring-2 focus:ring-secondary-bright/30"
            />

            <button
              type="submit"
              className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-secondary px-6 text-sm font-semibold text-navy-950 transition-colors hover:bg-secondary-bright"
            >
              {subscribed ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Subscribed
                </>
              ) : (
                <>
                  Subscribe <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Main footer grid */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12">

          {/* Brand */}
          <div className="lg:col-span-4">
            {/* Logo on a white pill so it reads on the dark footer */}
            <div className="inline-block rounded-xl bg-white px-4 py-3 shadow-soft">
              <Logo variant="default" height={36} />
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              O A Dewani & Co. is a chartered accountancy firm delivering audit,
              tax, GST, and advisory services with precision and integrity to
              businesses across India.
            </p>

            <div className="mt-6 flex gap-3">
              {[
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Instagram, label: 'Instagram' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-400 transition-all hover:border-secondary-bright hover:bg-secondary hover:text-navy-950"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>

            <ul className="mt-4 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-secondary-bright"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>

            <ul className="mt-4 space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-slate-400 transition-colors hover:text-secondary-bright"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>

            <ul className="mt-4 space-y-4">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary-bright" />
                <span className="text-sm text-slate-400">
                  204, Heritage Towers, M. G. Road,<br />
                  Mumbai 400 001
                </span>
              </li>

              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-secondary-bright" />
                <a
                  href="tel:+919876543210"
                  className="text-sm text-slate-400 transition-colors hover:text-secondary-bright"
                >
                  +91 98765 43210
                </a>
              </li>

              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-secondary-bright" />
                <a
                  href="mailto:contact@oadewani.co"
                  className="text-sm text-slate-400 transition-colors hover:text-secondary-bright"
                >
                  contact@oadewani.co
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-slate-500">
              &copy; 2026 O A Dewani &amp; Co. All rights reserved.
            </p>

            <p className="text-xs text-slate-500">
              Designed &amp; Developed by{' '}
              <span className="font-medium text-secondary-bright">
                Royals Webtech Pvt. Ltd.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}