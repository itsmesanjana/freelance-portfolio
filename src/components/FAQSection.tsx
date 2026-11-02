import React, { useState } from 'react';
import { FAQS } from '../data/portfolioData';
import { Sparkles, ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-dark-900/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-mono text-electric-cyan">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clarity & Transparency</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Frequently Asked{' '}
            <span className="text-gradient">
              Questions
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Quick answers regarding timelines, IP ownership, and sprint deliverables.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl glass-panel border border-white/10 overflow-hidden transition-all duration-200 bg-dark-950/70"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-electric-cyan' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    <div className="mt-3">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                        Category: {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
