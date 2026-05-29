// Type definitions for the application

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  clientName?: string;
  completedDate?: string;
  projectUrl?: string;
  /** Detail page fields */
  tagline?: string;
  categoryLabel?: string;
  summary?: string;
  overview?: string;
  challenges?: string[];
  solution?: string;
  features?: { title: string; description: string }[];
  businessImpact?: string[];
  relatedServices?: { label: string; href: string }[];
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
}

export interface ProjectDetail extends Project {
  industry: string;
  tagline: string;
  categoryLabel: string;
  summary: string;
  overview: string;
  challenges: string[];
  solution: string;
  features: { title: string; description: string }[];
  businessImpact: string[];
  relatedServices: { label: string; href: string }[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  description: string;
  avatar: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}