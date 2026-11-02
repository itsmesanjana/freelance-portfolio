import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Sparkles, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Background Gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-violet/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-mono text-accent-neon">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Trusted by Founders, Directors &{' '}
            <span className="text-gradient">
              Visionaries
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Feedback from commercial clients who entrusted their mission-critical digital platforms to my architecture.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="p-8 rounded-2xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between space-y-6 relative group bg-dark-900/50"
            >
              <div className="space-y-4">
                {/* Top Strip: Rating Stars & Category */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-electric-cyan">
                    {test.projectCategory}
                  </span>
                </div>

                {/* Quote Content */}
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-4">
                <img
                  src={test.avatar}
                  alt={test.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-accent-purple/30 group-hover:border-electric-cyan transition-colors"
                />
                <div>
                  <h4 className="font-display font-bold text-white text-sm">
                    {test.author}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {test.role} • <span className="text-slate-300 font-medium">{test.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
