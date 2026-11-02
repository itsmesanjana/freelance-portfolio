import React, { useEffect } from 'react';
import { Project } from '../types';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  TrendingUp, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onStartProject: (projectContext?: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onStartProject
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-dark-950/80 backdrop-blur-xl transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-dark-900 border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 animate-in zoom-in-95 duration-200">
        {/* Top Header Bar */}
        <div className="px-6 py-4 bg-dark-950/90 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: project.accentColor }} 
            />
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-dark-850 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Title & Client */}
          <div className="space-y-2">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              {project.title}
            </h2>
            <p className="text-electric-cyan font-mono text-xs sm:text-sm">
              Client: {project.client} • Tagline: {project.tagline}
            </p>
          </div>

          {/* Dual Imagery Showcase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-white/10 aspect-[16/10] bg-dark-950">
              <img
                src={project.coverImage}
                alt={`${project.title} cover`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 aspect-[16/10] bg-dark-950">
              <img
                src={project.secondaryImage}
                alt={`${project.title} secondary`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Performance & Business Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-dark-950/80 border border-white/10">
                <div className="font-display font-bold text-lg text-white">
                  {m.value}
                </div>
                <div className="text-xs font-mono text-slate-400">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Full Narrative */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent-neon" />
              <span>Project Overview & Commercial Purpose</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Core Features & Interactive Workflows</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-dark-950/60 border border-white/5 space-y-1">
                  <div className="font-display font-bold text-sm text-white">
                    {feat.title}
                  </div>
                  <div className="text-xs text-slate-400 leading-relaxed">
                    {feat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Highlights */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-electric-cyan" />
              <span>Frontend Architecture & Code Standards</span>
            </h3>
            <ul className="space-y-2">
              {project.architectureHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Engineered With
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-dark-950 text-slate-200 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Business Impact Banner */}
          <div className="p-4 rounded-xl bg-accent-violet/10 border border-accent-violet/20 flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-accent-neon shrink-0 mt-0.5" />
            <div>
              <div className="font-display font-bold text-sm text-white mb-0.5">
                Measurable Business ROI
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.businessImpact}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Action Footer */}
        <div className="p-6 bg-dark-950 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300">Live URL:</span>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-electric-cyan hover:underline truncate max-w-xs"
            >
              {project.liveUrl?.replace('https://', '')}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onStartProject(`Inquiry regarding ${project.title}`);
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-electric-blue via-accent-violet to-accent-magenta hover:from-electric-cyan hover:to-accent-purple shadow-md transition-all flex items-center gap-2"
            >
              <span>Build A Similar Solution</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-950/40 transition-all flex items-center gap-1.5"
              >
                <span>Open Live Vercel App</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
