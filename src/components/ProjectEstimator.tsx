import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  ArrowRight, 
  Calendar, 
  Zap,
  MessageSquare
} from 'lucide-react';

interface ProjectEstimatorProps {
  onPreFillBrief: (brief: string) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onPreFillBrief }) => {
  const [projectType, setProjectType] = useState<'app' | 'agency' | 'booking' | 'redesign'>('app');
  const [scope, setScope] = useState<'lean' | 'standard' | 'enterprise'>('standard');
  const [urgency, setUrgency] = useState<'standard' | 'expedited'>('standard');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'Responsive Design System',
    'Direct WhatsApp Lead Capture',
    'Sub-Second Performance Tuning'
  ]);

  const featureOptions = [
    { id: 'Responsive Design System', label: 'Dark/Light Modern Glassmorphism UI' },
    { id: 'Direct WhatsApp Lead Capture', label: 'WhatsApp + Form Validation Engine' },
    { id: 'Sub-Second Performance Tuning', label: '99+ Lighthouse & Web Vitals Guarantee' },
    { id: 'Dynamic Client-Side Filtering', label: 'Instant Search & Multi-Parameter Filters' },
    { id: 'Interactive Booking Modal', label: 'Appointment / Table Reservation Engine' },
    { id: 'Framer Motion Gestures', label: 'Hardware-Accelerated Fluid Animations' },
  ];

  const toggleFeature = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  // Turnaround and investment calculation
  const getTimeline = () => {
    if (urgency === 'expedited') {
      return scope === 'lean' ? '7 – 10 Days' : '10 – 14 Days';
    }
    return scope === 'lean' ? '2 Weeks' : scope === 'standard' ? '3 Weeks' : '4 – 5 Weeks';
  };

  const handleApplyEstimate = () => {
    const briefText = `I configured a project estimate:
- Project Type: ${projectType.toUpperCase()}
- Scope Level: ${scope.toUpperCase()}
- Pace: ${urgency === 'expedited' ? 'EXPEDITED SPRINT' : 'STANDARD TIMELINE'}
- Estimated Timeline: ${getTimeline()}
- Features Desired: ${selectedFeatures.join(', ')}`;
    
    onPreFillBrief(briefText);
    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="estimator" className="py-24 relative overflow-hidden bg-dark-900/50">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-electric-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-white/10 text-xs font-mono text-electric-cyan">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Scope Calculator</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Estimate Your Project{' '}
            <span className="text-gradient">
              Timeline & Scope
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Configure your technical requirements to generate a project blueprint and estimated delivery window instantly.
          </p>
        </div>

        {/* Estimator Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Project Type */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-3 bg-dark-950/80">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold block">
                1. Select Platform Type
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { id: 'app', label: 'Custom Web Application' },
                  { id: 'agency', label: 'Commercial Agency / Brand' },
                  { id: 'booking', label: 'Clinic or Real Estate Portal' },
                  { id: 'redesign', label: 'UI & Performance Overhaul' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setProjectType(item.id as any)}
                    className={`p-3 rounded-xl text-left text-xs font-medium transition-all ${
                      projectType === item.id
                        ? 'bg-gradient-to-r from-electric-blue to-accent-violet text-white shadow-md border-transparent'
                        : 'bg-dark-900 text-slate-300 hover:bg-white/5 border border-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Scope & Pages */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-3 bg-dark-950/80">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold block">
                2. Scope & Complexity
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'lean', label: 'MVP / Fast Launch', sub: '1–3 Views' },
                  { id: 'standard', label: 'Standard Platform', sub: '4–8 Views' },
                  { id: 'enterprise', label: 'Enterprise Suite', sub: '9+ Custom Views' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setScope(s.id as any)}
                    className={`p-3 rounded-xl text-center text-xs transition-all ${
                      scope === s.id
                        ? 'bg-gradient-to-r from-electric-blue to-accent-violet text-white shadow-md border-transparent'
                        : 'bg-dark-900 text-slate-300 hover:bg-white/5 border border-white/5'
                    }`}
                  >
                    <div className="font-bold">{s.label}</div>
                    <div className="text-[10px] text-slate-300 font-mono mt-0.5">{s.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. High-Value Features */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-3 bg-dark-950/80">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold block">
                3. Architecture & Add-On Features
              </label>
              <div className="space-y-2">
                {featureOptions.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3 rounded-xl flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-white/10 border border-electric-cyan/40 text-white'
                          : 'bg-dark-900 border border-white/5 text-slate-400 hover:bg-white/5'
                      }`}
                    >
                      <span className="text-xs font-medium">{feat.label}</span>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
                        isChecked ? 'bg-electric-cyan text-dark-950' : 'border border-white/20'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real-Time Summary Output Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-8 rounded-3xl glass-panel border border-accent-purple/30 bg-dark-950/95 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-accent-neon font-bold">
                  Estimated Sprint Blueprint
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Delivery Window */}
              <div className="space-y-1">
                <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-electric-cyan" />
                  <span>Estimated Delivery Window</span>
                </div>
                <div className="font-display font-extrabold text-3xl text-white">
                  {getTimeline()}
                </div>
              </div>

              {/* Scope Breakdown */}
              <div className="space-y-2 text-xs font-mono text-slate-300 pt-2 border-t border-white/5">
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Engineering Architecture:</span>
                  <span className="text-white font-bold">React 18 + Strict TS</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Selected Features:</span>
                  <span className="text-electric-cyan font-bold">{selectedFeatures.length} Add-ons</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Target Lighthouse:</span>
                  <span className="text-emerald-400 font-bold">98+ Guaranteed</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Warranty Support:</span>
                  <span className="text-white font-bold">30 Days Complimentary</span>
                </div>
              </div>

              {/* Urgency Toggle */}
              <div className="p-3 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span className="text-slate-200">Need Priority Fast-Track?</span>
                </div>
                <button
                  onClick={() => setUrgency(urgency === 'standard' ? 'expedited' : 'standard')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    urgency === 'expedited'
                      ? 'bg-amber-400 text-dark-950 shadow-md'
                      : 'bg-white/10 text-slate-300 hover:text-white'
                  }`}
                >
                  {urgency === 'expedited' ? 'Active ⚡' : 'Enable'}
                </button>
              </div>

              {/* Action Button */}
              <button
                onClick={handleApplyEstimate}
                className="w-full py-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-electric-blue via-accent-violet to-accent-magenta hover:from-electric-cyan hover:to-accent-purple shadow-xl shadow-accent-violet/30 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Submit Scope to Brief</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] font-mono text-center text-slate-500">
                Transfers this configuration directly into the contact form. No obligation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
