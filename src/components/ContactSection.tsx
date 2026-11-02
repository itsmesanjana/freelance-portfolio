import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Linkedin, 
  Github, 
  Sparkles, 
  Clock, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface ContactSectionProps {
  initialBrief?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialBrief = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    projectType: 'Custom Web Application',
    budgetRange: '$3,000 – $6,000',
    timeline: 'Standard (3 – 4 Weeks)',
    projectBrief: initialBrief,
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Sync initialBrief if updated externally by estimator
  React.useEffect(() => {
    if (initialBrief) {
      setFormData(prev => ({ ...prev, projectBrief: initialBrief }));
    }
  }, [initialBrief]);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.projectBrief.trim()) {
      errs.projectBrief = 'Please provide a short overview of your project requirements.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate instant secure processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00F0FF', '#8B5CF6', '#EC4899', '#10B981']
      });
    }, 600);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Sanjana! I came across your portfolio. I'd like to discuss a project:\n\n- Name: ${formData.fullName || 'Client'}\n- Type: ${formData.projectType}\n- Timeline: ${formData.timeline}\n- Brief: ${formData.projectBrief || 'Commercial Web Project'}`
  );

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-accent-violet/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-electric-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-mono text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Commercial Intake</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Let's Engineer Your Next{' '}
            <span className="text-gradient">
              Competitive Advantage
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Ready to build a website that outshines your competitors? Reach out directly via WhatsApp or submit your project brief below.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          {/* Left Column: Direct Channels & SLA */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Priority CTA Card */}
            <a
              href={`https://wa.me/?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/70 to-dark-900 border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 block group shadow-xl shadow-emerald-950/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[11px] font-bold">
                  FASTEST RESPONSE
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-white group-hover:text-emerald-300 transition-colors mb-1">
                Chat on WhatsApp
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Connect directly on WhatsApp for real-time consultation, fast project scoping, and instant audio walk-throughs.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 group-hover:underline">
                <span>Open WhatsApp Chat</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* Email Card with Copy-to-Clipboard */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-4 bg-dark-900/60">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-dark-950 border border-white/10 flex items-center justify-center text-accent-magenta">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={copyEmailToClipboard}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-all"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                  Direct Email
                </div>
                <a
                  href={`mailto:${DEVELOPER_INFO.email}`}
                  className="font-display font-bold text-lg text-white hover:text-electric-cyan transition-colors"
                >
                  {DEVELOPER_INFO.email}
                </a>
              </div>
            </div>

            {/* LinkedIn & GitHub Direct Hub */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={DEVELOPER_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass-panel hover:bg-white/10 border border-white/10 flex items-center gap-3 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-electric-blue">
                    LinkedIn
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    /in/sanjanakanaki
                  </div>
                </div>
              </a>

              <a
                href={DEVELOPER_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass-panel hover:bg-white/10 border border-white/10 flex items-center gap-3 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center text-white">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-electric-cyan">
                    GitHub
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    /itsmesanjana
                  </div>
                </div>
              </a>
            </div>

            {/* SLA Guarantee Strip */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <Clock className="w-4 h-4 text-electric-cyan" />
                <span>24-Hour Response Guarantee</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                All client inquiries receive a direct technical response and feasibility appraisal within one business day.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/15 bg-dark-900/80 shadow-2xl relative">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-6 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 mx-auto flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                      Project Brief Received!
                    </h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{formData.fullName}</strong>. I will review your requirements and reply to <strong className="text-electric-cyan">{formData.email}</strong> within 24 hours.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Speed Up via WhatsApp</span>
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          projectType: 'Custom Web Application',
                          budgetRange: '$3,000 – $6,000',
                          timeline: 'Standard (3 – 4 Weeks)',
                          projectBrief: '',
                        });
                      }}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-medium text-slate-300 hover:text-white glass-panel"
                    >
                      Submit Another Brief
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-xl text-white">
                      Start Your Project Brief
                    </h3>
                    <p className="text-xs text-slate-400">
                      Fill out the parameters below to receive a personalized proposal and timeline.
                    </p>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 flex items-center justify-between">
                        <span>Your Name *</span>
                        {errors.fullName && <span className="text-rose-400 text-[10px]">{errors.fullName}</span>}
                      </label>
                      <input
                        type="text"
                        placeholder="Sarah Jenkins"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-dark-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                          errors.fullName ? 'border-rose-500/60 focus:border-rose-500' : 'border-white/10 focus:border-electric-cyan'
                        }`}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 flex items-center justify-between">
                        <span>Work Email *</span>
                        {errors.email && <span className="text-rose-400 text-[10px]">{errors.email}</span>}
                      </label>
                      <input
                        type="email"
                        placeholder="sarah@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-dark-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                          errors.email ? 'border-rose-500/60 focus:border-rose-500' : 'border-white/10 focus:border-electric-cyan'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Project Type & Budget Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-sm text-white focus:outline-none focus:border-electric-cyan"
                      >
                        <option value="Custom Web Application">Custom Web Application</option>
                        <option value="Agency / Brand Portal">Agency / Brand Portal</option>
                        <option value="Real Estate / Clinic Booking Engine">Real Estate / Clinic Booking Engine</option>
                        <option value="Performance & UI Redesign">Performance & UI Redesign</option>
                        <option value="Full-Stack Engineering Sprint">Full-Stack Engineering Sprint</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Target Budget
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-sm text-white focus:outline-none focus:border-electric-cyan"
                      >
                        <option value="$1,500 – $3,000">$1,500 – $3,000 (MVP Launch)</option>
                        <option value="$3,000 – $6,000">$3,000 – $6,000 (Standard Commercial Platform)</option>
                        <option value="$6,000 – $12,000+">$6,000 – $12,000+ (Full Enterprise Portal)</option>
                        <option value="Monthly Retainer">Monthly Retainer Advisory</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Brief Textarea */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 flex items-center justify-between">
                      <span>Project Scope & Goals *</span>
                      {errors.projectBrief && <span className="text-rose-400 text-[10px]">{errors.projectBrief}</span>}
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell me about your product, target audience, ideal timeline, or share reference links..."
                      value={formData.projectBrief}
                      onChange={(e) => {
                        setFormData({ ...formData, projectBrief: e.target.value });
                        if (errors.projectBrief) setErrors({ ...errors, projectBrief: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-dark-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.projectBrief ? 'border-rose-500/60 focus:border-rose-500' : 'border-white/10 focus:border-electric-cyan'
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-electric-blue via-accent-violet to-accent-magenta hover:from-electric-cyan hover:to-accent-purple shadow-xl shadow-accent-violet/30 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Processing Brief...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Project Brief & Request Proposal</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
