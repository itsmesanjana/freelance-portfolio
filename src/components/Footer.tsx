import React from 'react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUp, 
  Globe
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-accent-violet/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-cyan via-accent-violet to-accent-magenta p-[2px] shadow-md shadow-accent-violet/20">
                <img
                  src={DEVELOPER_INFO.photoUrl}
                  alt={DEVELOPER_INFO.name}
                  className="w-full h-full object-cover object-[50%_15%] rounded-[10px]"
                />
              </div>
              <div>
                <span className="font-display font-bold text-white text-base">
                  {DEVELOPER_INFO.name}
                </span>
                <p className="text-xs font-mono text-slate-400">
                  Senior Frontend Architect & Developer
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Engineering ultra-premium, high-converting commercial web applications with modern React, TypeScript, and mathematical precision.
            </p>

            {/* Timezone & Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
              <Globe className="w-3.5 h-3.5 text-electric-cyan" />
              <span>Bengaluru, India (IST • UTC+5:30) • Remote Global</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#projects" className="hover:text-electric-cyan transition-colors">Flagship Commercial Suite</a>
              </li>
              <li>
                <a href="#about" className="hover:text-electric-cyan transition-colors">Engineering Background</a>
              </li>
              <li>
                <a href="#services" className="hover:text-electric-cyan transition-colors">Freelance Services</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-electric-cyan transition-colors">Tech Stack Matrix</a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-electric-cyan transition-colors">Project Scope Estimator</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-electric-cyan transition-colors">Start a Project Brief</a>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Direct Channels
            </div>
            <p className="text-xs text-slate-400">
              Direct line for high-ticket contracts, agency sprints, and project inquiries:
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href={DEVELOPER_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-dark-900 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-electric-blue transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={DEVELOPER_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-dark-900 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${DEVELOPER_INFO.email}`}
                className="w-9 h-9 rounded-xl bg-dark-900 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-accent-magenta transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} {DEVELOPER_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-electric-cyan transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
