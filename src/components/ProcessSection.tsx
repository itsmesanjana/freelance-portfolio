import React from 'react';
import { WORK_PROCESS } from '../data/portfolioData';
import { 
  Compass, 
  LayoutTemplate, 
  Code, 
  Rocket, 
  CheckCircle2, 
  Sparkles, 
  Clock 
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-electric-cyan" />;
      case 'LayoutTemplate':
        return <LayoutTemplate className="w-5 h-5 text-accent-neon" />;
      case 'Code':
        return <Code className="w-5 h-5 text-emerald-400" />;
      case 'Rocket':
      default:
        return <Rocket className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-violet/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-mono text-accent-neon">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sprint Methodology</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            From Initial Concept to{' '}
            <span className="text-gradient">
              Production Velocity
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Streamlined 4-phase agile delivery sprint with transparent milestones and rapid turnaround.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORK_PROCESS.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between space-y-6 relative group bg-dark-900/40"
            >
              <div className="space-y-4">
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-display font-black text-3xl text-white/20 group-hover:text-electric-cyan/40 transition-colors">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-dark-950 border border-white/10 flex items-center justify-center shadow-md">
                    {getIcon(step.iconName)}
                  </div>
                </div>

                {/* Timeline Tag */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-electric-cyan">
                  <Clock className="w-3 h-3" />
                  <span>{step.timeline}</span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Deliverables Checklist */}
              <div className="pt-4 border-t border-white/5 space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                  Sprint Outputs
                </div>
                {step.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-1.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
