import {
  ShieldCheck,
  Receipt,
  Percent,
  BookOpenCheck,
  Building2,
  FileStack,
  LineChart,
  Rocket,
  type LucideIcon,
} from 'lucide-react';
import type { Service } from '@/types';

export const services: Service[] = [
  {
    slug: 'audit-assurance',
    icon: 'audit',
    title: 'Audit & Assurance',
    shortDescription:
      'Independent statutory, internal, and tax audits that strengthen trust in your numbers.',
    description:
      'Our audit and assurance practice goes beyond a compliance tick. We examine your financial statements, evaluate internal controls, and deliver insights that help you fix issues before they become risks. Whether you need a statutory audit under the Companies Act, an internal audit for process assurance, or a tax audit under section 44AB, our team brings rigour and a practical perspective.',
    features: [
      'Statutory audit under Companies Act, 2013',
      'Internal and management audit',
      'Tax audit under section 44AB',
      'Stock and fixed asset verification',
      'Concurrent and revenue audits',
      'Due diligence and investigation audits',
    ],
    deliverables: [
      'Audited financial statements with auditor report',
      'Management letter with control observations',
      'Audit adjustment summary and walkthrough notes',
    ],
  },
  {
    slug: 'income-tax',
    icon: 'tax',
    title: 'Income Tax',
    shortDescription:
      'End-to-end income tax planning, filing, and representation for individuals and businesses.',
    description:
      'Income tax is a year-round discipline, not a March scramble. We handle return filing for individuals, firms, and companies, advance tax planning, tax audits, and representation before assessing officers. Our approach combines timely compliance with proactive planning so you pay only what is fairly due.',
    features: [
      'Income tax return filing for all entities',
      'Tax planning and advisory',
      'TDS compliance and return filing',
      'Assessment and appeal representation',
      'Advance tax estimation',
      'Capital gains and cross-border tax advisory',
    ],
    deliverables: [
      'Filed returns with acknowledgement',
      'Annual tax planning memorandum',
      'TDS compliance calendar and filings',
    ],
  },
  {
    slug: 'gst-consultancy',
    icon: 'gst',
    title: 'GST Consultancy',
    shortDescription:
      'Registration, monthly filing, reconciliation, and dispute resolution under one roof.',
    description:
      'GST touches almost every transaction your business makes. We help you register, classify goods and services correctly, file monthly and annual returns, and reconcile input tax credit. When notices arrive, we represent you before the authorities and resolve disputes efficiently.',
    features: [
      'GST registration and amendment',
      'Monthly and quarterly return filing',
      'Annual return (GSTR-9) and reconciliation (GSTR-9C)',
      'Input tax credit reconciliation',
      'GST audit and notice response',
      'Refund applications and follow-up',
    ],
    deliverables: [
      'Filed GST returns with receipts',
      'ITC reconciliation working file',
      'Compliance calendar with deadlines',
    ],
  },
  {
    slug: 'accounting-bookkeeping',
    icon: 'accounting',
    title: 'Accounting & Bookkeeping',
    shortDescription:
      'Accurate, timely books that give you reliable numbers for every business decision.',
    description:
      'Reliable books are the foundation of every other compliance and advisory service. We maintain your books on leading accounting platforms, reconcile banks and ledgers monthly, and produce management reports that tell you how the business is actually performing.',
    features: [
      'Monthly bookkeeping and ledger maintenance',
      'Bank and credit card reconciliation',
      'Accounts payable and receivable management',
      'Payroll processing and compliance',
      'Management accounting and MIS reports',
      'Software setup (Tally, QuickBooks, Zoho)',
    ],
    deliverables: [
      'Reconciled trial balance each month',
      'Monthly management dashboard',
      'Year-end ledgers ready for audit',
    ],
  },
  {
    slug: 'company-registration',
    icon: 'registration',
    title: 'Company Registration',
    shortDescription:
      'Fast, hassle-free incorporation of private limited companies, LLPs, and partnerships.',
    description:
      'Choosing and registering the right business structure shapes your liability, taxation, and ability to raise funds. We advise on the best entity type, prepare and file every form, and complete post-incorporation compliance so your company is ready to trade from day one.',
    features: [
      'Private limited company incorporation',
      'Limited Liability Partnership (LLP) formation',
      'Partnership firm registration',
      'DSC and DIN procurement',
      'Name approval and MOA/AOA drafting',
      'Startup India recognition',
    ],
    deliverables: [
      'Certificate of incorporation',
      'PAN, TAN and EPFO registrations',
      'Share certificates and statutory registers',
    ],
  },
  {
    slug: 'roc-compliance',
    icon: 'roc',
    title: 'ROC Compliance',
    shortDescription:
      'Annual and event-based filings with the Registrar of Companies, never missed.',
    description:
      'Company law compliance runs on a strict calendar. We manage your board meetings, annual general meeting, and every MCA filing so you never face per-day penalties. From AOC-4 to MGT-7, our retainer packages keep your company fully compliant year after year.',
    features: [
      'Annual return (MGT-7) filing',
      'Financial statement (AOC-4) filing',
      'Director appointment and resignation (DIR-12)',
      'Board meeting and AGM documentation',
      'Event-based filings and forms',
      'Maintenance of statutory registers',
    ],
    deliverables: [
      'All MCA filings completed on time',
      'Board and AGM minutes register',
      'Annual compliance calendar',
    ],
  },
  {
    slug: 'business-advisory',
    icon: 'advisory',
    title: 'Business Advisory',
    shortDescription:
      'Cash flow, budgeting, and growth strategy from accountants who understand your numbers.',
    description:
      'Beyond compliance, every business needs a sounding board. We provide cash flow forecasting, budgeting, pricing analysis, and growth planning grounded in your actual financial data. Our advisory helps you make confident decisions about expansion, funding, and risk.',
    features: [
      'Cash flow forecasting and working capital review',
      'Annual budgeting and variance analysis',
      'Pricing and profitability analysis',
      'Fundraising and debt structuring',
      'Business plan and financial model preparation',
      'Risk assessment and internal control design',
    ],
    deliverables: [
      'Rolling cash flow forecast model',
      'Monthly budget versus actuals report',
      'Advisory note on key decisions',
    ],
  },
  {
    slug: 'startup-consultancy',
    icon: 'startup',
    title: 'Startup Consultancy',
    shortDescription:
      'From incorporation to fundraising, we guide startups through their first critical years.',
    description:
      'Startups face a unique mix of compliance, tax, and investor-readiness challenges. We help founders incorporate, obtain DPIIT recognition, structure ESOPs, and prepare clean financials for due diligence. We also advise on Section 80 IAC tax holiday eligibility and angel tax exemptions.',
    features: [
      'Entity selection and incorporation',
      'DPIIT recognition and Section 80 IAC',
      'ESOP design and accounting',
      'Investor due diligence preparation',
      'Pitch deck financials and projections',
      'Compliance for seed and angel rounds',
    ],
    deliverables: [
      'Incorporation and recognition certificates',
      'ESOP plan and grant documentation',
      'Due diligence ready financials',
    ],
  },
];

export const serviceIcons: Record<string, LucideIcon> = {
  audit: ShieldCheck,
  tax: Receipt,
  gst: Percent,
  accounting: BookOpenCheck,
  registration: Building2,
  roc: FileStack,
  advisory: LineChart,
  startup: Rocket,
};
