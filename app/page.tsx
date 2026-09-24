import { PageShell } from '@/components/PageShell';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { LatestBlogs } from '@/components/sections/LatestBlogs';
import { CtaSection } from '@/components/sections/CtaSection';
import { ContactPreview } from '@/components/sections/ContactPreview';

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <AboutPreview />
      <WhyChooseUs />
      <ServicesPreview />
      <ProcessSection />
      <TestimonialsSection />
      <LatestBlogs />
      <CtaSection />
      <ContactPreview />
    </PageShell>
  );
}
