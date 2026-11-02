import React, { useState } from 'react';
import { DEVELOPER_INFO, PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  ChevronRight
} from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onStartProject: () => void;
  onSelectProject: (project: Project) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onExploreProjects, 
  onStartProject,
  onSelectProject 
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentProject = PROJECTS[activeTab];

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Ambient Lighting & Backdrop Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-accent-violet/20 via-electric-cyan/15 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-electric-blue/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-magenta/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Availability & Status Pill */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-pill border border-white/10 text-xs font-mono text-slate-300 shadow-xl shadow-black/40 hover:border-accent-neon/50 transition-all duration-300">
            <div className="flex items-center gap-2">
              <img
                src={DEVELOPER_INFO.photoUrl}
                alt={DEVELOPER_INFO.name}
                className="w-7 h-7 rounded-full object-cover object-[50%_15%] border-2 border-electric-cyan shadow-sm"
              />
              <span className="text-white font-medium">Sanjana Kanaki</span>
            </div>
            <span className="text-slate-500">•</span>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 font-medium">Available for Projects</span>
            </div>
          </div>
        </div>

        {/* Hero Headline & Subhead */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.1]">
            Engineering Digital{' '}
            <span className="text-gradient">
              Masterpieces
            </span>{' '}
            That Convert High-Ticket Clients.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Senior Frontend Architect & DRDO – CAIR Alum. Crafting lightning-fast commercial web platforms with bespoke glassmorphism aesthetics and conversion rigor.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onExploreProjects}
              className="px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-electric-blue via-accent-violet to-accent-magenta hover:from-electric-cyan hover:to-accent-purple shadow-xl shadow-accent-violet/30 hover:shadow-electric-cyan/30 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 flex items-center gap-2.5 group"
            >
              <span>Explore Flagship Work</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onStartProject}
              className="px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 hover:text-white glass-panel hover:bg-white/10 border border-white/10 hover:border-electric-cyan/40 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-electric-cyan" />
              <span>Request Discovery Call</span>
            </button>
          </div>

          {/* Micro Trust Indicators */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Strict TypeScript Architecture
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              99/100 Lighthouse Performance
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              4 Production Commercial Portals
            </span>
          </div>
        </div>

        {/* 3D-Inspired Floating Browser Mockup */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          {/* Ambient Behind-Glow */}
          <div 
            className="absolute -inset-1 rounded-3xl blur-2xl opacity-40 transition-all duration-700 pointer-events-none"
            style={{ backgroundColor: currentProject.accentColor }}
          />

          {/* Browser Container Frame */}
          <div className="relative rounded-2xl glass-panel border border-white/15 shadow-2xl shadow-black/80 overflow-hidden bg-dark-950/90">
            {/* Top Browser Chrome Bar */}
            <div className="px-4 py-3 bg-dark-900/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
              {/* Window Controls */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/40 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/40 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/40 inline-block" />
                <span className="ml-3 text-xs font-mono text-slate-500 hidden sm:inline">sanjana-portfolio-os // v2.6</span>
              </div>

              {/* URL Address Bar */}
              <div className="flex-1 max-w-md mx-auto hidden md:flex items-center justify-center">
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-3 py-1 rounded-lg bg-dark-950/80 border border-white/10 hover:border-electric-cyan/50 flex items-center justify-between text-xs font-mono text-slate-400 transition-colors group/url"
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-emerald-400">https://</span>
                    <span className="text-slate-200 group-hover/url:text-electric-cyan truncate">
                      {currentProject.liveUrl?.replace('https://', '').replace(/\/$/, '')}
                    </span>
                  </div>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] uppercase font-bold tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    VERCEL LIVE
                  </span>
                </a>
              </div>

              {/* Action Button */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onSelectProject(currentProject)}
                  className="px-3 py-1 rounded-lg text-xs font-medium text-electric-cyan bg-electric-cyan/10 hover:bg-electric-cyan/20 border border-electric-cyan/30 flex items-center gap-1.5 transition-all"
                >
                  <span>Quick Inspect</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Interactive Project Switcher Tabs */}
            <div className="px-4 py-2 bg-dark-900/50 border-b border-white/5 flex items-center gap-2 overflow-x-auto scrollbar-none">
              {PROJECTS.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                    activeTab === idx
                      ? 'bg-white/10 text-white shadow-sm border border-white/15'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  <span 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: proj.accentColor }}
                  />
                  <span>{proj.title.split('—')[0].trim()}</span>
                  <span className="text-[10px] text-emerald-400 font-mono">● Live</span>
                </button>
              ))}
            </div>

            {/* Browser Content Stage */}
            <div className="relative p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[420px]">
              {/* Left Column: Project Overview */}
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-slate-300">
                  <span 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: currentProject.accentColor }}
                  />
                  <span>{currentProject.category}</span>
                </div>

                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                  {currentProject.title}
                </h2>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {currentProject.shortDescription}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {currentProject.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-dark-900 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {currentProject.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-dark-900/80 border border-white/10">
                      <div className="font-display font-bold text-lg text-white">
                        {m.value}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Launch & Deep-Dive Buttons */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => onSelectProject(currentProject)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-electric-blue to-accent-violet hover:from-electric-cyan hover:to-accent-purple transition-all duration-200 flex items-center gap-1.5 shadow-md"
                  >
                    <span>View Case Study</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-950/40 transition-all flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    <span>Open Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: High-Res Project Preview Mockup */}
              <div className="lg:col-span-7 relative group">
                <div className="relative rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-dark-900 aspect-[16/10]">
                  <img
                    src={currentProject.coverImage}
                    alt={currentProject.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-60" />

                  {/* Corner Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-dark-950/85 backdrop-blur-md border border-white/15 text-[11px] font-mono text-electric-cyan flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    <span>Commercial Application</span>
                  </div>

                  {/* Bottom Strip */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-dark-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs text-white font-medium">{currentProject.tagline}</span>
                    </div>
                    <button
                      onClick={() => onSelectProject(currentProject)}
                      className="text-xs text-electric-cyan hover:underline font-mono"
                    >
                      Expand Preview →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating 3D Metric Badges */}
          {/* Top Left Floating Badge */}
          <div className="hidden md:flex absolute -top-6 -left-6 px-4 py-3 rounded-2xl glass-panel border border-electric-cyan/30 shadow-xl shadow-black/60 items-center gap-3 animate-float-slow bg-dark-950/90 z-20">
            <div className="w-10 h-10 rounded-xl bg-electric-cyan/10 border border-electric-cyan/30 flex items-center justify-center text-electric-cyan">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-display">99/100 Lighthouse</div>
              <div className="text-[11px] font-mono text-slate-400">Zero Cumulative Layout Shift</div>
            </div>
          </div>

          {/* Bottom Right Floating Badge */}
          <div className="hidden md:flex absolute -bottom-6 -right-6 px-4 py-3 rounded-2xl glass-panel border border-accent-purple/30 shadow-xl shadow-black/60 items-center gap-3 animate-float-medium bg-dark-950/90 z-20">
            <div className="w-10 h-10 rounded-xl bg-accent-violet/10 border border-accent-violet/30 flex items-center justify-center text-accent-neon">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-display">Strict TypeScript</div>
              <div className="text-[11px] font-mono text-slate-400">Zero Runtime Unhandled Errors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
