import type { LucideIcon } from 'lucide-react';

export type ServiceIconKey =
  | 'audit'
  | 'tax'
  | 'gst'
  | 'accounting'
  | 'registration'
  | 'roc'
  | 'advisory'
  | 'startup';

export interface Service {
  slug: string;
  icon: ServiceIconKey;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  deliverables: string[];
}

export interface BlogBlock {
  heading?: string;
  body: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  tags: string[];
  featured?: boolean;
  content: BlogBlock[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface OfficeDetail {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  created_at: string;
}
