import React, { useState, useEffect } from 'react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { 
  Menu, 
  X, 
  Sparkles, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Send 
} from 'lucide-react';

interface NavbarProps {
  onStartProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Featured Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Tech Stack', href: '#skills' },
    { name: 'Process', href: '#process' },
    { name: 'Estimator', href: '#estimator' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-dark-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#hero');
              }}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-electric-cyan via-accent-violet to-accent-magenta p-[2px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-accent-violet/20">
                <img
                  src={DEVELOPER_INFO.photoUrl}
                  alt={DEVELOPER_INFO.name}
                  className="w-full h-full object-cover object-[50%_15%] rounded-[10px]"
                />
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-dark-950 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-white text-base tracking-tight group-hover:text-electric-cyan transition-colors">
                  {DEVELOPER_INFO.name}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Frontend Architect
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-dark-900/60 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Desktop CTA & Socials */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={DEVELOPER_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-850 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={DEVELOPER_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-850 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-electric-blue transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <button
                onClick={onStartProject}
                className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-electric-blue to-accent-violet hover:from-electric-cyan hover:to-accent-purple shadow-lg shadow-accent-violet/25 hover:shadow-electric-cyan/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-3.5 h-3.5 text-electric-cyan animate-pulse" />
                <span>Start Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onStartProject}
                className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-gradient-to-r from-electric-blue to-accent-violet"
              >
                Contact
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-dark-850 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-dark-950/95 backdrop-blur-2xl lg:hidden flex flex-col pt-24 px-6 pb-8 border-b border-white/10 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="flex items-center justify-between py-3 px-4 rounded-xl text-left text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-all"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-4">
            <div className="flex items-center justify-center gap-4">
              <a
                href={DEVELOPER_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-850 border border-white/10 text-xs text-slate-300"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={DEVELOPER_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-850 border border-white/10 text-xs text-slate-300"
              >
                <Linkedin className="w-4 h-4 text-electric-blue" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${DEVELOPER_INFO.email}`}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-850 border border-white/10 text-xs text-slate-300"
              >
                <Mail className="w-4 h-4 text-accent-magenta" />
                <span>Email</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProject();
              }}
              className="w-full py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-electric-blue via-accent-violet to-accent-magenta shadow-lg shadow-accent-violet/30 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Book a Discovery Sprint</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
