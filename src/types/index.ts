export interface DeveloperInfo {
  name: string;
  role: string;
  titles: string[];
  bio: string;
  fullBio: string[];
  location: string;
  email: string;
  whatsappNumber: string;
  linkedinUrl: string;
  githubUrl: string;
  photoUrl: string;
  availability: {
    status: 'Available' | 'Limited Availability' | 'Booked';
    message: string;
    nextSlot: string;
  };
  metrics: {
    value: string;
    label: string;
    detail: string;
  }[];
  awards: string[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  client: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  secondaryImage: string;
  accentColor: string;
  accentGlow: string;
  technologies: string[];
  liveUrl?: string;
  isLiveUrlActive: boolean;
  localPort?: number;
  localPath?: string;
  metrics: ProjectMetric[];
  keyFeatures: ProjectFeature[];
  businessImpact: string;
  architectureHighlights: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  badge: string;
  features: string[];
  deliverables: string[];
  timeline: string;
  idealFor: string;
}

export interface TechSkill {
  name: string;
  category: 'Frontend Excellence' | 'Backend & Architecture' | 'AI, Data & ML' | 'DevOps & Tooling';
  proficiency: number;
  highlight: string;
  iconName: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  timeline: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  projectCategory: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Process & Timeline' | 'Pricing & Engagement' | 'Tech Stack & Quality';
}

export interface ContactFormData {
  fullName: string;
  email: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  projectBrief: string;
}
