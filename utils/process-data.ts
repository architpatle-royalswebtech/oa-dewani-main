import {
  Search,
  FileCheck2,
  ClipboardCheck,
  Send,
  type LucideIcon,
} from 'lucide-react';

export interface ProcessStepData {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStepData[] = [
  {
    step: '01',
    title: 'Discover',
    description:
      'We begin with a consultation to understand your business, industry, and current compliance position. No assumptions, only questions that get to the heart of your needs.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Plan',
    description:
      'We map out a tailored compliance and advisory plan with clear deliverables, deadlines, and fees agreed upfront. You always know what is being done and when.',
    icon: FileCheck2,
  },
  {
    step: '03',
    title: 'Execute',
    description:
      'Our team executes the plan, keeping your books, filings, and reports on schedule. You receive regular updates and a single point of contact throughout.',
    icon: ClipboardCheck,
  },
  {
    step: '04',
    title: 'Deliver',
    description:
      'You receive completed filings, reports, and advisory notes, plus a review meeting to discuss findings and the next steps for your business.',
    icon: Send,
  },
];

export const whyChooseUs = [
  {
    title: 'Qualified & Experienced Team',
    description:
      'Our partners and staff are qualified chartered accountants with over a decade of experience across audit, tax, and advisory.',
    icon: 'ShieldCheck',
  },
  {
    title: 'On-time, Every Time',
    description:
      'We treat every statutory deadline as non-negotiable. Our compliance calendar keeps your filings ahead of schedule.',
    icon: 'CalendarClock',
  },
  {
    title: 'Transparent Fixed Fees',
    description:
      'You receive a clear fee estimate before we start. No surprise billing, no hourly ambiguity, no hidden charges.',
    icon: 'ReceiptText',
  },
  {
    title: 'Personal Single Point of Contact',
    description:
      'You work with one dedicated account manager who knows your business and is always reachable.',
    icon: 'UserCheck',
  },
  {
    title: 'Proactive, Not Reactive',
    description:
      'We flag risks and opportunities before they become urgent, turning compliance into a strategic advantage.',
    icon: 'TrendingUp',
  },
  {
    title: 'End-to-end Coverage',
    description:
      'From incorporation to audit to advisory, every financial need is handled under one roof.',
    icon: 'Layers',
  },
];
