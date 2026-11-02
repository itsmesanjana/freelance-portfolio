import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { 
  Code2, 
  Sparkles, 
  CalendarCheck, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Users 
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-electric-cyan" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-accent-neon" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-6 h-6 text-emerald-400" />;
      case 'Zap':
      default:
        return <Zap className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-electric-cyan/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-mono text-electric-cyan">
            <Sparkles className="w-3.5 h-3.5" />
            <span>High-Impact Freelance Services</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Tailored Engineering for{' '}
            <span className="text-gradient">
              Ambitious Businesses
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Every engagement is laser-focused on measurable outcomes: faster load times, superior conversion rates, and immaculate code you can scale indefinitely.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-2xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between space-y-6 relative group bg-dark-900/50"
            >
              <div className="space-y-6">
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-dark-950 border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="font-display font-bold text-2xl text-white group-hover:text-electric-cyan transition-colors mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-accent-neon mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Key Capabilities
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables & Ideal For */}
                <div className="pt-4 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock className="w-4 h-4 text-electric-cyan shrink-0" />
                    <span>Sprint: <strong className="text-white font-sans">{service.timeline}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Users className="w-4 h-4 text-accent-neon shrink-0" />
                    <span className="truncate">For: <strong className="text-white font-sans truncate">{service.idealFor}</strong></span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service.title)}
                className="w-full py-3 rounded-xl font-semibold text-xs text-white bg-dark-950 hover:bg-white/10 border border-white/10 hover:border-electric-cyan/40 transition-all flex items-center justify-center gap-2 group/btn shadow-md"
              >
                <span>Select & Book Service</span>
                <ArrowRight className="w-4 h-4 text-electric-cyan transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
