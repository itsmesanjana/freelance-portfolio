import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { AboutSection } from './components/AboutSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ServicesSection } from './components/ServicesSection';
import { TechStackSection } from './components/TechStackSection';
import { ProcessSection } from './components/ProcessSection';
import { ProjectEstimator } from './components/ProjectEstimator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Project } from './types';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [contactBrief, setContactBrief] = useState<string>('');

  const scrollToContact = (briefContext?: string) => {
    if (briefContext) {
      setContactBrief(briefContext);
    }
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-accent-violet selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar onStartProject={() => scrollToContact()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreProjects={scrollToProjects}
          onStartProject={() => scrollToContact()}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* Proof Strip & Tech Ecosystem */}
        <StatsBar />

        {/* Flagship Commercial Work Showcase */}
        <ProjectShowcase
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* Engineer Profile & Background */}
        <AboutSection />

        {/* Services & Engagement Offerings */}
        <ServicesSection
          onSelectService={(serviceTitle) => scrollToContact(`I am interested in booking: ${serviceTitle}`)}
        />

        {/* Technical Stack & Proficiencies */}
        <TechStackSection />

        {/* 4-Step Agile Delivery Sprint */}
        <ProcessSection />

        {/* Interactive Scope & Cost Estimator */}
        <ProjectEstimator
          onPreFillBrief={(brief) => setContactBrief(brief)}
        />

        {/* Client Testimonials */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Contact & Inquiries */}
        <ContactSection
          initialBrief={contactBrief}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Deep-Dive Case Study Lightbox Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartProject={(context) => scrollToContact(context)}
      />
    </div>
  );
}

export default App;
