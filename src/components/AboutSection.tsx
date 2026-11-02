import React from 'react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles, 
  Terminal, 
  Brain, 
  Code2, 
  Compass, 
  CheckCircle,
  ArrowUpRight
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: 'Performance-First Engineering',
      description: 'Zero bloat, sub-second loads, 99+ Lighthouse metrics, and strict Core Web Vitals compliance on every single page.',
      icon: Terminal,
      color: 'text-electric-cyan',
      bg: 'bg-electric-cyan/10'
    },
    {
      title: 'Applied ML & Algorithmic Rigor',
      description: 'Formed at DRDO – CAIR: treating front-end state, data parsing, and user interactions with mathematical precision.',
      icon: Brain,
      color: 'text-accent-neon',
      bg: 'bg-accent-violet/10'
    },
    {
      title: 'High-Ticket Conversion UI/UX',
      description: 'Designing intuitive user journeys that establish immediate credibility and drive bookings, inquiries, and revenue.',
      icon: Compass,
      color: 'text-amber-400',
      bg: 'bg-amber-400/10'
    },
    {
      title: 'Clean Modular Architecture',
      description: 'Zero spaghetti code. Typed schemas, semantic React components, and maintainable systems your future team will love.',
      icon: Code2,
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-violet/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-electric-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-mono text-electric-cyan">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Architect & Engineer Profile</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Engineering Precision Meets{' '}
            <span className="text-gradient">
              Agency-Grade Aesthetics
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A developer who understands both computational architecture and conversion-driven design.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Professional Photo & Badges */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-sm">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-electric-cyan via-accent-violet to-accent-magenta opacity-70 blur-xl group-hover:opacity-100 transition-opacity duration-700" />

              {/* Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden glass-panel border border-white/20 shadow-2xl bg-dark-900 aspect-[4/5]">
                <img
                  src={DEVELOPER_INFO.photoUrl}
                  alt={DEVELOPER_INFO.name}
                  className="w-full h-full object-cover object-[50%_15%] transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />

                {/* Bottom Card Inside Photo */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-dark-950/90 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display font-bold text-white text-base">
                        {DEVELOPER_INFO.name}
                      </h3>
                      <p className="text-xs font-mono text-electric-cyan">
                        Bangalore, India • Available Globally
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge: DRDO CAIR */}
              <div className="absolute -top-4 -right-4 px-3.5 py-2 rounded-xl glass-panel border border-electric-cyan/40 shadow-xl bg-dark-950/90 text-xs font-mono text-white flex items-center gap-2">
                <Brain className="w-4 h-4 text-electric-cyan" />
                <span>DRDO – CAIR Alum</span>
              </div>

              {/* Floating Badge: E&TC Engineer */}
              <div className="absolute -bottom-4 -left-4 px-3.5 py-2 rounded-xl glass-panel border border-accent-purple/40 shadow-xl bg-dark-950/90 text-xs font-mono text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-accent-neon" />
                <span>E&TC Engineering Grad</span>
              </div>
            </div>

            {/* Direct Social Links */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href={DEVELOPER_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl glass-panel hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 hover:text-electric-blue flex items-center gap-2 transition-all shadow-sm"
              >
                <Linkedin className="w-4 h-4 text-electric-blue" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={DEVELOPER_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl glass-panel hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 hover:text-white flex items-center gap-2 transition-all shadow-sm"
              >
                <Github className="w-4 h-4 text-slate-200" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={`mailto:${DEVELOPER_INFO.email}`}
                className="px-4 py-2 rounded-xl glass-panel hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 hover:text-accent-magenta flex items-center gap-2 transition-all shadow-sm"
              >
                <Mail className="w-4 h-4 text-accent-magenta" />
                <span>Direct Mail</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            {/* Punchy Designer Highlights */}
            <div className="space-y-3">
              <h3 className="font-display font-bold text-xl text-white">
                Designing Digital Reality with Mathematical Precision.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Combining a rigorous foundation in <span className="text-electric-cyan font-medium">Electronics & Telecommunications</span> with machine learning research at <span className="text-accent-neon font-medium">DRDO – CAIR</span>. Today, I build enterprise web platforms where award-winning visual craftsmanship meets high-speed engineering.
              </p>
            </div>

            {/* Core Architectural Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl glass-panel glass-panel-hover border border-white/10 space-y-2"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg ${pillar.bg} flex items-center justify-center ${pillar.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-display font-bold text-white text-sm">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-normal">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
