import { Phone, Mail, Clock, MapPin, type LucideIcon } from 'lucide-react';
import type { Testimonial, OfficeDetail } from '@/types';

export const testimonials: Testimonial[] = [
  {
    name: 'Rajesh Mehta',
    role: 'Managing Director',
    company: 'Mehta Textiles Pvt. Ltd.',
    quote:
      'O A Dewani & Co. has handled our statutory audit and tax filings for four years. They are meticulous, responsive, and have saved us from several compliance pitfalls. I trust their judgement completely.',
    rating: 5,
    avatar:
      'https://images.pexels.com/photos/13801472/pexels-photo-13801472.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
  },
  {
    name: 'Priya Sharma',
    role: 'Founder & CEO',
    company: 'BrightPath Technologies',
    quote:
      'As a first-time founder, the incorporation and tax planning guidance was invaluable. They explained every step in plain language and helped us secure DPIIT recognition and the Section 80 IAC benefit.',
    rating: 5,
    avatar:
      'https://images.pexels.com/photos/7468194/pexels-photo-7468194.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
  },
  {
    name: 'Anil Kapoor',
    role: 'Director',
    company: 'Kapoor Trading LLP',
    quote:
      'Their GST team reconciles our input credit every month without fail. We have not had a single dispute since we moved to them. The monthly retainer is worth every rupee for the peace of mind.',
    rating: 5,
    avatar:
      'https://images.pexels.com/photos/29852895/pexels-photo-29852895.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
  },
  {
    name: 'Sneha Iyer',
    role: 'CFO',
    company: 'Coastline Logistics',
    quote:
      'The advisory engagement transformed how we manage cash flow. Their rolling forecast surfaced a working capital gap two months before it would have hurt us. Genuinely strategic accountants.',
    rating: 5,
    avatar:
      'https://images.pexels.com/photos/7316732/pexels-photo-7316732.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
  },
];

export const officeDetails: OfficeDetail[] = [
  {
    label: 'Phone',
    value: '+91 98765 43210',
    icon: Phone,
  },
  {
    label: 'Email',
    value: 'contact@oadewani.co',
    icon: Mail,
  },
  {
    label: 'Working Hours',
    value: 'Mon - Sat: 9:30 AM - 7:00 PM',
    icon: Clock,
  },
  {
    label: 'Office',
    value: '204, Heritage Towers, M. G. Road, Mumbai 400 001',
    icon: MapPin,
  },
];

export const companyStats = [
  { value: '15+', label: 'Years of Practice' },
  { value: '350+', label: 'Clients Served' },
  { value: '8', label: 'Service Verticals' },
  { value: '99%', label: 'On-time Filings' },
];

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];
