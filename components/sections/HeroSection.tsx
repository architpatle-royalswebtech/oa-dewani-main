'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, ShieldCheck, Star, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';
import { ButtonLink } from '@/components/Button';
import { companyStats } from '@/utils/site-data';

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden bg-[#0d1f3c] pt-20 flex items-center">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.pexels.com/photos/8463151/pexels-photo-8463151.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-20"
        />

        {/* layered gradient: primary left, slightly lighter right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f3c] via-[#0d1f3c]/95 to-[#0d1f3c]/80" />

        {/* subtle top accent line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b8973a]/50 to-transparent" />

        {/* glow orbs */}
        <div className="absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-[#0d1f3c]/30 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-[#b8973a]/10 blur-3xl" />
      </div>

      <div className="container-page w-full py-20 sm:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">

          {/* Left — copy */}
          <motion.div
            className="lg:col-span-7 xl:col-span-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.08
                }
              }
            }}
          >

            {/* eyebrow badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55 }
                }
              }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#b8973a]/30 bg-[#b8973a]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#b8973a]">
                <ShieldCheck className="h-3.5 w-3.5" />
                Trusted Chartered Accountants — Est. 2010
              </span>
            </motion.div>

            {/* headline */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }
              }}
              className="mt-6 text-[2.6rem] font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]"
            >
              Financial clarity
              <span className="block text-[#b8973a]">
                you can act on.
              </span>
            </motion.h1>

            {/* sub-headline */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.65,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }
              }}
              className="mt-6 max-w-lg text-[1.05rem] leading-[1.75] text-slate-300"
            >
              Audit, taxation, GST, and strategic advisory delivered with precision
              and integrity — helping businesses across India stay compliant,
              confident, and growing.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }
              }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <ButtonLink
                href="/contact"
                variant="gold"
                size="lg"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Book Consultation
              </ButtonLink>

              <ButtonLink
                href="/contact"
                variant="light"
                size="lg"
                icon={<Phone className="h-4 w-4" />}
              >
                Contact Us
              </ButtonLink>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 0.6,
                    delay: 0.25
                  }
                }
              }}
              className="mt-10 flex flex-wrap items-center gap-8"
            >
              <div className="flex items-center gap-3">

                <div className="flex -space-x-2.5">
                  {[
                    'https://images.pexels.com/photos/7468194/pexels-photo-7468194.jpeg?auto=compress&cs=tinysrgb&h=80&w=80',
                    'https://images.pexels.com/photos/13801472/pexels-photo-13801472.jpeg?auto=compress&cs=tinysrgb&h=80&w=80',
                    'https://images.pexels.com/photos/29852895/pexels-photo-29852895.jpeg?auto=compress&cs=tinysrgb&h=80&w=80',
                  ].map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt=""
                      width={36}
                      height={36}
                      className="h-9 w-9 rounded-full border-2 border-[#0d1f3c] object-cover"
                    />
                  ))}
                </div>

                <div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-[#b8973a] text-[#b8973a]"
                      />
                    ))}
                  </div>

                  <p className="mt-0.5 text-xs text-slate-400">
                    350+ clients trust us
                  </p>
                </div>
              </div>

              <div className="h-8 w-px bg-white/10" />

              <div className="flex items-center gap-2 text-slate-300">
                <TrendingUp className="h-4 w-4 text-[#b8973a]" />
                <span className="text-sm">
                  99% on-time filings
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — stats card */}
          <motion.div
            className="lg:col-span-5 xl:col-span-6"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <div className="relative">

              {/* main card */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm">

                {/* stats grid */}
                <div className="grid grid-cols-2 gap-5">
                  {companyStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl bg-white/[0.07] px-5 py-4 text-center"
                    >
                      <p className="text-3xl font-semibold text-[#b8973a]">
                        {stat.value}
                      </p>

                      <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* quote */}
                <div className="mt-5 rounded-xl border border-white/10 bg-[#0d1f3c]/50 p-5">
                  <div className="flex gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#b8973a]/20 text-xs font-bold text-[#b8973a]">
                      OAD
                    </div>

                    <div>
                      <p className="text-sm leading-relaxed text-slate-200">
                        &ldquo;We turn compliance into a competitive advantage
                        — not a cost centre.&rdquo;
                      </p>

                      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#b8973a]">
                        CA O A Dewani, Managing Partner
                      </p>
                    </div>

                  </div>
                </div>

                {/* explore services CTA */}
                <Link
                  href="/services"
                  className="mt-5 flex items-center justify-between rounded-xl bg-[#b8973a] px-5 py-3.5 text-[#0d1f3c] transition-all hover:bg-[#b8973a]/90"
                >
                  <span className="text-sm font-semibold">
                    Explore our 8 services
                  </span>

                  <ArrowRight className="h-4 w-4" />
                </Link>

              </div>

              {/* floating badge */}
              <div className="absolute -right-4 -top-4 hidden rounded-2xl border border-white/15 bg-[#0d1f3c]/80 px-4 py-2.5 backdrop-blur-sm sm:block">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-[#b8973a]" />

                  <span className="text-xs font-semibold text-white">
                    ICAI Member Firm
                  </span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}