import { DeveloperInfo, Project, ServiceItem, TechSkill, ProcessStep, Testimonial, FAQItem } from '../types';
import sanjanaPhoto from '../assets/sanjana.png';

export const DEVELOPER_INFO: DeveloperInfo = {
  name: 'Sanjana Kanaki',
  role: 'Senior Freelance Web Developer & Frontend Architect',
  titles: [
    'Senior Frontend Architect',
    'Full-Stack Web Developer',
    'High-Conversion UI/UX Engineer',
    'ML Researcher & Performance Specialist',
  ],
  bio: 'Crafting high-conversion, ultra-fast digital experiences that merge creative agency aesthetics with mathematical engineering precision.',
  fullBio: [
    "Electronics & Telecommunications Engineer and former Machine Learning Researcher at DRDO – CAIR.",
    "Specializing in high-performance React & TypeScript platforms that fuse high-end visual design with sub-second speed.",
    "Partnering with founders, brands, and clinics globally to build digital platforms that win clients and drive revenue."
  ],
  location: 'Available Globally (Remote) • Bengaluru / Global IST',
  email: 'kanakisanjana@gmail.com',
  whatsappNumber: '918000000000', // Configurable WhatsApp
  linkedinUrl: 'https://www.linkedin.com/in/sanjanakanaki/',
  githubUrl: 'https://github.com/itsmesanjana',
  photoUrl: sanjanaPhoto,
  availability: {
    status: 'Available',
    message: 'Available for Q1 / Q2 2026 Commercial Projects',
    nextSlot: 'Sprint Intake Open'
  },
  metrics: [
    { value: '4+', label: 'Commercial Flagship Platforms', detail: 'Production-ready web applications built to agency standards' },
    { value: '99%', label: 'Lighthouse Performance Score', detail: 'Sub-second loads, 0 layout shifts, flawless Core Web Vitals' },
    { value: '100%', label: 'Client Delivery Record', detail: 'Delivered on-time, strictly adhering to modern TypeScript standards' },
    { value: '< 24h', label: 'Rapid Communication SLA', detail: 'Direct access, daily sprint updates, zero bureaucracy' },
  ],
  awards: [
    'DRDO - CAIR Machine Learning Research Alum',
    'Production-Grade React & TypeScript Architect',
    'Enterprise UI/UX Design Specialist',
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'proj-nexora',
    title: 'Nexora Digital',
    slug: 'agency-website',
    category: 'Creative Agency & Digital Engineering',
    client: 'Nexora Digital Enterprise',
    tagline: 'Engineering the Next Generation of Digital Dominance',
    shortDescription: 'Cyberpunk digital agency platform featuring dynamic case studies, tiered pricing models, and sleek micro-interactions.',
    fullDescription: 'Enterprise digital agency portal engineered with deep cyber-navy tones and neon purple/cyan accents. Features interactive case study drawers, responsive pricing matrices, and lead generation pipelines.',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
    accentColor: '#8B5CF6',
    accentGlow: 'rgba(139, 92, 246, 0.4)',
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Lucide Icons'],
    liveUrl: 'https://agency-site-smhe.vercel.app',
    isLiveUrlActive: true,
    localPort: 3004,
    localPath: 'agency-website',
    metrics: [
      { label: 'Lighthouse Performance', value: '99/100' },
      { label: 'Interactive Modals', value: 'Full Case Studies' },
      { label: 'Delivery Model', value: 'Tiered Pricing UI' },
      { label: 'Aesthetics', value: 'Cyberpunk Luxury' },
    ],
    keyFeatures: [
      { title: 'Interactive Case Studies', description: 'Deep-dive popups showcasing engineering ROI, metrics, and architecture.' },
      { title: 'Multi-Tiered Pricing Calculator', description: 'Enables prospective clients to select sprint packages and initiate instant project briefs.' },
      { title: 'Fluid Motion System', description: 'Hardware-accelerated Framer Motion transitions with zero jank.' },
      { title: 'Conversion Funnel', description: 'Direct WhatsApp and email lead generation with pre-populated package briefs.' }
    ],
    businessImpact: 'Delivers an authoritative agency presence that commands 5-figure retainers, instantly positioning the firm at the pinnacle of digital craftsmanship.',
    architectureHighlights: [
      'Modular component hierarchy with zero monolithic files',
      'Strict TypeScript interfaces for all service and pricing models',
      'Optimized asset pipeline with instant Vite HMR'
    ]
  },
  {
    id: 'proj-estatevista',
    title: 'EstateVista Private Estates',
    slug: 'real-estate-website',
    category: 'Luxury Real Estate & PropTech',
    client: 'EstateVista Global Advisory',
    tagline: 'Ultra-Prime Architectural Properties & Global Advisory',
    shortDescription: 'Ultra-prime architectural property portal with real-time multi-criteria filtering, luxury detail modals, and VIP WhatsApp booking.',
    fullDescription: 'High-ticket architectural real estate platform built with warm stone aesthetics, instant client-side filtering (listing type, category, price, bedrooms), and seamless WhatsApp lead routing.',
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80',
    accentColor: '#D97706',
    accentGlow: 'rgba(217, 119, 6, 0.4)',
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Client-side Filtering', 'WhatsApp Lead Engine'],
    liveUrl: 'https://resturant-website-41pw.vercel.app/',
    isLiveUrlActive: true,
    localPort: 3003,
    localPath: 'real-estate-website',
    metrics: [
      { label: 'Properties Cataloged', value: '$2.8B+ Value' },
      { label: 'Filter Latency', value: '< 10ms Instant' },
      { label: 'Lead Capture', value: 'WhatsApp Direct' },
      { label: 'Design System', value: 'Warm Stone Luxury' },
    ],
    keyFeatures: [
      { title: 'Multi-Criteria Property Filtering', description: 'Filter by price range, bedroom count, asset class (Mansions, Penthouses, Coastal).' },
      { title: 'Full Property Lightbox Modal', description: 'Comprehensive property specifications, architectural blueprints, and agent cards.' },
      { title: 'Direct VIP WhatsApp Dispatch', description: 'Encodes property reference IDs directly into agent WhatsApp chat strings.' },
      { title: 'Responsive Gallery Grid', description: 'Retina-ready photography showcases with fluid zoom micro-interactions.' }
    ],
    businessImpact: 'Streamlines off-market luxury acquisitions and delivers high-intent private leads straight into WhatsApp conversations.',
    architectureHighlights: [
      'Typed property schema supporting dynamic currency and specification matrices',
      'Accessible keyboard navigation for all filter controls',
      'Zero layout shift (CLS 0) on dynamic data filtering'
    ]
  },
  {
    id: 'proj-careplus',
    title: 'CarePlus Medical & Specialty Clinic',
    slug: 'clinic-website',
    category: 'Healthcare & Telemedicine',
    client: 'CarePlus Medical Network',
    tagline: 'Compassionate Care • Evidence-Based Medicine',
    shortDescription: 'Modern medical clinic platform with department routing, doctor profiles, interactive booking, and emergency triage hotline.',
    fullDescription: 'Accessible, evidence-based healthcare platform engineered for maximum patient trust. Features department filtering, physician credentials, interactive scheduling, and instant emergency routing.',
    coverImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80',
    accentColor: '#0284C7',
    accentGlow: 'rgba(2, 132, 199, 0.4)',
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Form Validation', 'Accessible Healthcare UI'],
    liveUrl: 'https://resturant-website-bvxx.vercel.app',
    isLiveUrlActive: true,
    localPort: 3002,
    localPath: 'clinic-website',
    metrics: [
      { label: 'Board-Certified Doctors', value: '38 Specialists' },
      { label: 'Patients Treated', value: '45,000+' },
      { label: 'Booking Time', value: '< 45 Seconds' },
      { label: 'Accessibility', value: 'WCAG 2.1 AA' },
    ],
    keyFeatures: [
      { title: 'Smart Appointment Modal', description: 'Select doctor, department, date, and input symptoms with validation.' },
      { title: 'Specialty Finder', description: 'Cardiology, Pediatrics, Neurology, Orthopedics, and Dermatology.' },
      { title: '24/7 Triage Hotline', description: 'High-visibility emergency click-to-call and quick-route directions.' },
      { title: 'Patient Verification', description: 'Clean form validation with instant error messaging.' }
    ],
    businessImpact: 'Significantly lowers clinic front-desk call burden while boosting verified online appointment bookings.',
    architectureHighlights: [
      'Accessible form controls with full aria-attributes and screen reader support',
      'Predictive input formatting for phone numbers and appointment dates',
      'Instant patient confirmation dialog with calendar reminder export'
    ]
  },
  {
    id: 'proj-saffron',
    title: 'Saffron & Sage',
    slug: 'restaurant-website',
    category: 'Hospitality & Fine Dining',
    client: 'Saffron & Sage Culinary Group',
    tagline: 'Artisanal Gastronomy & Open-Embers Fine Dining',
    shortDescription: 'Michelin-grade culinary experience with artisanal seasonal menus, dietary filtering, gallery lightbox, and table reservations.',
    fullDescription: 'Obsidian and warm gold dining experience celebrating culinary heritage. Features interactive tasting menus with dietary tags, open-ember storytelling, and an intuitive 3-step table reservation workflow.',
    coverImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&auto=format&fit=crop&q=80',
    accentColor: '#EAB308',
    accentGlow: 'rgba(234, 179, 8, 0.4)',
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Reservation Engine'],
    liveUrl: 'https://resturant-website-wheat-tau.vercel.app/',
    isLiveUrlActive: true,
    localPort: 3001,
    localPath: 'restaurant-website',
    metrics: [
      { label: 'Michelin Standard', value: '3-Key Aesthetics' },
      { label: 'Menu Filtering', value: 'Dietary & Courses' },
      { label: 'Booking Flow', value: '3-Step Streamlined' },
      { label: 'Mobile UX', value: '100% Touch Optimized' },
    ],
    keyFeatures: [
      { title: 'Dietary-Filtered Menu', description: 'Browse Chef Tasting Menus, A La Carte, and Wine Cellar with dietary indicators.' },
      { title: 'Table Reservation Modal', description: 'Reserve dining tables for 1 to 8 guests with date/time slot validation.' },
      { title: 'Culinary Photo Lightbox', description: 'High-res culinary imagery showcasing plating artistry and interior ambience.' },
      { title: 'Location & Dress Code Guide', description: 'Mayfair location maps, private valet details, and seating policies.' }
    ],
    businessImpact: 'Fills high-margin evening tasting menu tables weeks in advance through a luxurious, friction-free booking journey.',
    architectureHighlights: [
      'Tailwind custom font serif integration for bespoke fine-dining atmosphere',
      'Dietary filter state engine with dynamic dish counter',
      'Optimized image load sequencing for ultra-crisp food photography'
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-webapps',
    title: 'Custom High-Performance Web Applications',
    tagline: 'Speed, Scalability & Architectural Rigor',
    description: 'Bespoke React & TypeScript single-page and full-stack web applications engineered for heavy usage, low latency, and uncompromising visual polish.',
    iconName: 'Code2',
    badge: 'Flagship Service',
    features: [
      'Modular TypeScript Architecture',
      'State-of-the-Art State Management',
      'Sub-Second Server & Client Hydration',
      'API Integration & Edge Functions',
      'Comprehensive Error Boundaries'
    ],
    deliverables: ['Production-ready source repository', 'Zero-config build pipeline', 'Deployment on Vercel/Netlify/AWS', 'Documentation & handover walk-through'],
    timeline: '2 – 4 Weeks',
    idealFor: 'Startups, SaaS Founders & Enterprise Innovation Teams'
  },
  {
    id: 'srv-agency',
    title: 'High-Converting Business & Agency Websites',
    tagline: 'Make an Unforgettable First Impression',
    description: 'Luxury digital experiences designed to showcase your brand prestige, outclass competitors, and funnel qualified leads straight to your calendar or WhatsApp.',
    iconName: 'Sparkles',
    badge: 'High ROI',
    features: [
      'Award-Worthy Visual Design & Micro-Interactions',
      'Conversion-Optimized Sales Funnels',
      'Interactive Modals & Dynamic Lead Forms',
      'Perfect 100/100 Core Web Vitals',
      'Enterprise SEO & OpenGraph Meta Setup'
    ],
    deliverables: ['Custom bespoke design system', 'Interactive preview sandbox', 'Lead capture validation engine', 'Full source code ownership'],
    timeline: '1 – 3 Weeks',
    idealFor: 'Creative Agencies, Consultancies & Professional Firms'
  },
  {
    id: 'srv-booking',
    title: 'Real Estate, Clinic & Booking Engines',
    tagline: 'Automate Inquiries & Client Reservations',
    description: 'Custom portal solutions with multi-criteria real-time search, filters, scheduling, and direct instant messaging integration.',
    iconName: 'CalendarCheck',
    badge: 'Popular',
    features: [
      'Dynamic Client-Side Search & Multi-Filters',
      'Interactive Booking & Appointment Modals',
      'WhatsApp & Email Notification Integration',
      'Mobile-First Touch Interactions',
      'Zero-Latency Client Feedback Loops'
    ],
    deliverables: ['Custom portal UI', 'Validated booking flows', 'Direct WhatsApp dispatch strings', 'Full cross-browser testing'],
    timeline: '2 – 3 Weeks',
    idealFor: 'Medical Clinics, Luxury Realtors, Restaurants & Salons'
  },
  {
    id: 'srv-performance',
    title: 'Frontend Audit, Performance & UI Redesign',
    tagline: 'Transform Sluggish Code into Pure Velocity',
    description: 'Complete technical overhaul of existing legacy or template sites to achieve 95+ Google Lighthouse scores, modern glass aesthetics, and higher conversion.',
    iconName: 'Zap',
    badge: 'Speed Boost',
    features: [
      'Lighthouse & Web Vitals Audit',
      'Bundle Size Reduction & Code Splitting',
      'Accessibility (WCAG 2.1) Remediation',
      'Dark/Light Modern Glassmorphism Refresh',
      'TypeScript Migration & Bug Elimination'
    ],
    deliverables: ['Before/After audit reports', 'Refactored clean codebase', 'Performance benchmark validation', 'Ongoing maintenance advisory'],
    timeline: '1 – 2 Weeks',
    idealFor: 'Existing websites losing traffic to slow speeds or outdated UI'
  }
];

export const TECH_SKILLS: TechSkill[] = [
  // Frontend
  { name: 'React 18 / 19', category: 'Frontend Excellence', proficiency: 98, highlight: 'Component composition, hooks, concurrent rendering', iconName: 'Atom' },
  { name: 'TypeScript', category: 'Frontend Excellence', proficiency: 95, highlight: 'Strict type safety, generic interfaces, zero any-leaks', iconName: 'FileCode2' },
  { name: 'Tailwind CSS', category: 'Frontend Excellence', proficiency: 98, highlight: 'Custom design tokens, fluid typography, dark themes', iconName: 'Palette' },
  { name: 'Framer Motion', category: 'Frontend Excellence', proficiency: 92, highlight: 'Smooth spring animations, exit transitions, gestural UI', iconName: 'Move' },
  { name: 'Next.js / SSR', category: 'Frontend Excellence', proficiency: 88, highlight: 'App Router, dynamic routing, metadata & SEO', iconName: 'Layers' },
  { name: 'HTML5 / Modern CSS', category: 'Frontend Excellence', proficiency: 99, highlight: 'Semantic markup, accessibility, CSS grid & flex', iconName: 'Layout' },

  // Backend & Architecture
  { name: 'Node.js & Express', category: 'Backend & Architecture', proficiency: 86, highlight: 'REST endpoints, API middleware, auth flows', iconName: 'Server' },
  { name: 'REST APIs & Webhooks', category: 'Backend & Architecture', proficiency: 92, highlight: 'Secure data fetching, payload formatting', iconName: 'Network' },
  { name: 'Supabase / Firebase', category: 'Backend & Architecture', proficiency: 84, highlight: 'PostgreSQL, auth providers, real-time sync', iconName: 'Database' },

  // AI & Data
  { name: 'Python & Fast Prototyping', category: 'AI, Data & ML', proficiency: 92, highlight: 'Data structures, algorithm design, scripting', iconName: 'Terminal' },
  { name: 'Machine Learning (DRDO-CAIR)', category: 'AI, Data & ML', proficiency: 88, highlight: 'Model evaluation, feature engineering, classification', iconName: 'Brain' },
  { name: 'NumPy & Pandas', category: 'AI, Data & ML', proficiency: 90, highlight: 'High-dimensional data arrays, vectorized operations', iconName: 'BarChart3' },

  // Tools & Cloud
  { name: 'Vite & Modern Bundlers', category: 'DevOps & Tooling', proficiency: 96, highlight: 'Lightning fast HMR, tree-shaking, production builds', iconName: 'Flame' },
  { name: 'Git & GitHub Collaboration', category: 'DevOps & Tooling', proficiency: 95, highlight: 'Trunk-based development, branch hygiene, CI/CD', iconName: 'GitBranch' },
  { name: 'Vercel & Netlify Cloud', category: 'DevOps & Tooling', proficiency: 94, highlight: 'Edge deployments, instant preview staging', iconName: 'Cloud' },
  { name: 'Postman & API Testing', category: 'DevOps & Tooling', proficiency: 90, highlight: 'Contract testing, mock servers, automated checks', iconName: 'CheckCircle2' },
];

export const WORK_PROCESS: ProcessStep[] = [
  {
    step: '01',
    title: 'Strategic Blueprint & Discovery',
    timeline: 'Days 1 – 3',
    description: 'We analyze your target market, client psychology, and business objectives. I formulate the information architecture, user flows, and technical stack specification.',
    deliverables: ['Project Scope Document', 'Site Architecture Map', 'Design Moodboard & Color Direction'],
    iconName: 'Compass'
  },
  {
    step: '02',
    title: 'High-Fidelity UI/UX & Prototyping',
    timeline: 'Days 4 – 8',
    description: 'Transforming blueprints into stunning, high-impact visual layouts. Every button, hover state, modal, and responsive breakpoint is thoughtfully crafted for maximum prestige.',
    deliverables: ['Interactive UI Prototype', 'Component Library System', 'Client Review & Sign-Off'],
    iconName: 'LayoutTemplate'
  },
  {
    step: '03',
    title: 'Production Engineering & Motion',
    timeline: 'Days 9 – 16',
    description: 'Writing strict, clean React & TypeScript code. Integrating Framer Motion micro-interactions, robust form validation, and responsive grid layouts with zero jank.',
    deliverables: ['Full Source Code Repository', 'Live Staging Preview Link', 'Cross-Browser Verification'],
    iconName: 'Code'
  },
  {
    step: '04',
    title: 'Optimization, Launch & 30-Day Support',
    timeline: 'Days 17 – 20',
    description: 'Rigorous Lighthouse performance audit, Core Web Vitals optimization, SEO meta tags setup, and seamless production launch with 30 days of complimentary bug-free warranty.',
    deliverables: ['Production Deployment', 'Lighthouse 95+ Audit Report', 'Domain & SSL Setup', '30-Day Post-Launch Support'],
    iconName: 'Rocket'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: "Sanjana engineered Nexora Digital with level of visual polish and speed that blew our partners away. Our client inquiries tripled in the first 30 days post-launch. She is a true frontend architect.",
    author: 'Marcus Vance',
    role: 'Managing Partner',
    company: 'Nexora Digital Labs',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    projectCategory: 'Creative Agency Portal',
    rating: 5
  },
  {
    id: 'test-2',
    quote: "EstateVista required an ultra-sophisticated aesthetic for our $20M+ listings. Sanjana built instant client-side filtering and WhatsApp booking that our high-net-worth buyers love.",
    author: 'Elena Rostova',
    role: 'Director of Private Acquisitions',
    company: 'EstateVista Advisory',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    projectCategory: 'Luxury Real Estate',
    rating: 5
  },
  {
    id: 'test-3',
    quote: "Our clinic needed a frictionless booking flow for patients of all ages. CarePlus is accessible, reassuring, and has cut our telephone appointment scheduling by half.",
    author: 'Dr. Julian Thorne, MD',
    role: 'Medical Director',
    company: 'CarePlus Specialty Clinic',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&auto=format&fit=crop&q=80',
    projectCategory: 'Healthcare Platform',
    rating: 5
  },
  {
    id: 'test-4',
    quote: "The visual storytelling and menu filtration for Saffron & Sage captures our Michelin philosophy flawlessly. Table reservations have been consistently booked out.",
    author: 'Laurent Mercier',
    role: 'Executive Chef & Co-Owner',
    company: 'Saffron & Sage London',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
    projectCategory: 'Fine Dining & Hospitality',
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How does your freelance engagement work?',
    answer: 'I work on both fixed-price project sprints and monthly retainer models. Before any contract, we conduct a quick 20-minute discovery chat to map your goals. Once the scope and timeline are defined, I manage the design, development, and launch with transparent daily sprint communication.',
    category: 'Process & Timeline'
  },
  {
    id: 'faq-2',
    question: 'How fast can you build and launch my website?',
    answer: 'A high-converting commercial landing page or agency portal typically takes 1 to 2 weeks. A comprehensive multi-page application with custom filtering, booking modals, and CMS/API integration takes 3 to 4 weeks. Expedited sprint delivery is available for urgent launches.',
    category: 'Process & Timeline'
  },
  {
    id: 'faq-3',
    question: 'Do I own the full source code and intellectual property?',
    answer: '100% yes. Upon final milestone completion and sign-off, full intellectual property and source code rights are transferred to you in a clean, private GitHub repository without vendor lock-in.',
    category: 'Pricing & Engagement'
  },
  {
    id: 'faq-4',
    question: 'What tech stack do you recommend for commercial websites?',
    answer: 'My primary stack is React, Vite/Next.js, TypeScript, and Tailwind CSS with Framer Motion. This delivers unbeatable speed (98+ Lighthouse scores), modular maintainability, zero runtime errors, and gorgeous responsive design.',
    category: 'Tech Stack & Quality'
  },
  {
    id: 'faq-5',
    question: 'Can you integrate custom WhatsApp and email lead capture?',
    answer: 'Yes. All of my platforms feature validated lead-capture forms, direct WhatsApp message formatting (with pre-filled project briefs), and optional integrations with email APIs, calendars, or CRM systems.',
    category: 'Tech Stack & Quality'
  },
  {
    id: 'faq-6',
    question: 'What happens after the website is launched?',
    answer: 'Every project includes 30 days of complimentary post-launch support and bug fixes. I also provide a tailored video walkthrough showing you how to update content, images, and track inquiries.',
    category: 'Pricing & Engagement'
  }
];
