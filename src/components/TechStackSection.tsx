import React, { useState } from 'react';
import { TECH_SKILLS } from '../data/portfolioData';
import { 
  Sparkles, 
  Cpu 
} from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const categories: Array<'Frontend Excellence' | 'Backend & Architecture' | 'AI, Data & ML' | 'DevOps & Tooling'> = [
    'Frontend Excellence',
    'Backend & Architecture',
    'AI, Data & ML',
    'DevOps & Tooling',
  ];

  const [activeTab, setActiveTab] = useState<'Frontend Excellence' | 'Backend & Architecture' | 'AI, Data & ML' | 'DevOps & Tooling'>('Frontend Excellence');

  const filteredSkills = TECH_SKILLS.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-dark-900/60">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-accent-violet/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-mono text-electric-cyan">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            The Technology{' '}
            <span className="text-gradient">
              Ecosystem
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Production-grade stack focused on speed, strict type safety, and seamless responsive design.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-electric-blue to-accent-violet text-white shadow-lg shadow-accent-violet/25'
                  : 'bg-dark-950/80 text-slate-400 hover:text-white border border-white/5 hover:border-white/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/10 space-y-4 bg-dark-950/80"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center text-electric-cyan">
                    <Sparkles className="w-5 h-5 text-accent-neon" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {skill.category}
                    </span>
                  </div>
                </div>

                <div className="text-xs font-mono font-bold text-electric-cyan">
                  {skill.proficiency}%
                </div>
              </div>

              {/* Proficiency Bar */}
              <div className="w-full h-1.5 rounded-full bg-dark-900 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-electric-cyan to-accent-violet transition-all duration-1000"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>

              {/* Highlight Note */}
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                {skill.highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
