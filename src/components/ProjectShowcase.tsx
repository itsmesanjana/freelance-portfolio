import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { 
  Sparkles, 
  ExternalLink, 
  ArrowRight, 
  Terminal,
  Lock
} from 'lucide-react';

interface ProjectShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Creative Agency', 'Luxury Real Estate', 'Healthcare', 'Fine Dining'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-dark-900/50">
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent-violet/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-electric-cyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-mono text-accent-neon">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Production Portfolio Suite</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Four Flagship{' '}
              <span className="text-gradient">
                Commercial Applications
              </span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Every project below is an autonomous, full-featured commercial application engineered with isolated dependencies, strict TypeScript typings, bespoke design systems, and responsive interactive workflows.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-dark-950/80 p-1.5 rounded-2xl border border-white/10 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-electric-blue to-accent-violet text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl glass-panel border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1.5 flex flex-col bg-dark-950/90 shadow-2xl shadow-black/60 overflow-hidden"
            >
              {/* Top Dynamic Accent Glow Strip */}
              <div 
                className="h-1 w-full transition-all duration-500 opacity-80 group-hover:opacity-100"
                style={{ backgroundColor: project.accentColor }}
              />

              {/* Realistic Browser Window Frame */}
              <div className="px-4 py-2.5 bg-dark-900 border-b border-white/10 flex items-center justify-between text-xs font-mono">
                {/* Traffic Light Window Buttons */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-[11px] text-slate-400 hidden sm:inline">
                    {project.slug} (Port {project.localPort})
                  </span>
                </div>

                {/* Simulated URL pill */}
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-0.5 rounded bg-dark-950 border border-white/10 text-[10px] text-slate-300 hover:text-electric-cyan hover:border-electric-cyan/40 flex items-center gap-1 transition-colors"
                >
                  <Lock className="w-2.5 h-2.5 text-emerald-400" />
                  <span className="truncate max-w-[150px] sm:max-w-none">
                    {project.liveUrl?.replace('https://', '').replace(/\/$/, '')}
                  </span>
                </a>

                {/* Category Chip */}
                <span 
                  className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider"
                  style={{ 
                    backgroundColor: `${project.accentColor}20`, 
                    color: project.accentColor 
                  }}
                >
                  {project.category.split('&')[0].trim()}
                </span>
              </div>

              {/* Cover Image Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-dark-900 cursor-pointer" onClick={() => onSelectProject(project)}>
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-70" />

                {/* Tagline Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-dark-950/85 backdrop-blur-md border border-white/10 text-white font-medium">
                    {project.tagline}
                  </span>
                  <span className="text-electric-cyan font-mono text-[11px] bg-dark-950/80 px-2 py-1 rounded backdrop-blur-md flex items-center gap-1">
                    Inspect Specs →
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-electric-cyan transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Metrics Pills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                    {project.metrics.map((metric, idx) => (
                      <div 
                        key={idx}
                        className="p-2 rounded-lg bg-dark-900/80 border border-white/5 text-center"
                      >
                        <div className="font-display font-bold text-xs text-white">
                          {metric.value}
                        </div>
                        <div className="text-[10px] font-mono text-slate-400 truncate">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-dark-900 text-slate-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-all flex items-center gap-2"
                  >
                    <span>Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 text-electric-cyan" />
                  </button>

                  {/* Configurable Live Demo Link */}
                  {project.liveUrl && project.isLiveUrlActive ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-950/40 transition-all flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      <span>Live Vercel Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={() => onSelectProject(project)}
                      className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 bg-white/5 border border-white/5 flex items-center gap-1.5"
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      <span>Case Study Only</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
