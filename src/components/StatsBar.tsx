import React from 'react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { 
  Zap, 
  ShieldCheck, 
  Award, 
  Clock, 
  Cpu
} from 'lucide-react';

export const StatsBar: React.FC = () => {
  const techLogos = [
    { name: 'React 18 / 19', tag: 'Core UI Engine' },
    { name: 'TypeScript', tag: 'Strict Typing' },
    { name: 'Tailwind CSS', tag: 'Design Tokens' },
    { name: 'Framer Motion', tag: 'Micro-Interactions' },
    { name: 'Vite', tag: 'Sub-Second Bundling' },
    { name: 'Python & ML', tag: 'DRDO CAIR Alum' },
    { name: 'REST & Webhooks', tag: 'API Integration' },
    { name: 'WCAG 2.1 AA', tag: 'High Accessibility' },
  ];

  return (
    <section className="py-12 border-y border-white/10 bg-dark-900/60 backdrop-blur-md relative overflow-hidden">
      {/* Subtle Glow Overlay */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {DEVELOPER_INFO.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-panel glass-panel-hover border border-white/5 relative group"
            >
              <div className="flex items-baseline justify-between mb-2">
                <span className="font-display font-extrabold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-white via-slate-100 to-electric-cyan">
                  {metric.value}
                </span>
                {idx === 0 && <Award className="w-5 h-5 text-electric-cyan opacity-80" />}
                {idx === 1 && <Zap className="w-5 h-5 text-amber-400 opacity-80" />}
                {idx === 2 && <ShieldCheck className="w-5 h-5 text-emerald-400 opacity-80" />}
                {idx === 3 && <Clock className="w-5 h-5 text-accent-neon opacity-80" />}
              </div>
              <h3 className="font-display font-bold text-sm text-white mb-1">
                {metric.label}
              </h3>
              <p className="text-xs text-slate-400 leading-snug">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack Marquee Strip */}
        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 whitespace-nowrap">
            <Cpu className="w-4 h-4 text-electric-cyan" />
            <span>Enterprise Engineering Stack</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4">
            {techLogos.map((tech, idx) => (
              <div
                key={idx}
                className="px-3.5 py-1.5 rounded-xl bg-dark-950/80 border border-white/10 flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white hover:border-electric-cyan/40 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />
                <span>{tech.name}</span>
                <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">({tech.tag})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
