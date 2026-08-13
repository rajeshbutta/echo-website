import React, { useState } from 'react';
import { ViewType } from '../types';

interface PricingViewProps {
  setCurrentView: (view: ViewType) => void;
  onSelectPlan?: (planName: string) => void;
}

const INCLUDED_FEATURES = [
  'In-app voice calling',
  'Call recording & storage',
  'AI transcription',
  'AI summary & insights',
  'WhatsApp draft generation',
  'Customer timeline',
  'Task management',
  'Admin dashboard & analytics',
  'Team visibility',
];

const MINUTES_TABLE = [
  { users: 2,  quarterly: '1,800', annual: '7,200' },
  { users: 5,  quarterly: '4,500', annual: '18,000' },
  { users: 10, quarterly: '9,000', annual: '36,000' },
];

export const PricingView: React.FC<PricingViewProps> = ({ setCurrentView, onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="pt-28 pb-20 px-6 max-w-screen-2xl mx-auto flex flex-col gap-16 relative">
      {/* Background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#3b82f6]/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#adc6ff] text-xs font-semibold tracking-wide uppercase mb-2">
          <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
          90-Day Free Trial — No Card Required
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight pulse-text">
          Simple, Transparent Pricing
        </h1>
        <p className="text-[#c2c6d6] text-base sm:text-lg">
          Every organization starts with a full 90-day trial. No credit card. No limits on features.
        </p>
      </section>

      {/* Free Trial Banner */}
      <section className="relative z-10 max-w-3xl mx-auto w-full">
        <div className="glass-card rounded-2xl p-8 border border-[#22c55e]/30 bg-[#191f31]/90 shadow-[0_0_40px_rgba(34,197,94,0.12)]">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#22c55e] via-[#3b82f6] to-[#22c55e] rounded-t-2xl" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-[#22c55e] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  redeem
                </span>
                <h2 className="font-display font-bold text-2xl text-white">90-Day Free Trial</h2>
              </div>
              <p className="text-[#c2c6d6] text-sm max-w-lg">
                Every new organization receives <strong className="text-white">₹7,500 worth of Echo credits</strong> — 5 users × ₹500 × 3 months. Full product access. No payment details required at signup.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Up to 5 users', 'Full feature access', '4,500 call mins', 'No card needed'].map(tag => (
                  <span key={tag} className="bg-[#22c55e]/10 text-[#4ade80] border border-[#22c55e]/30 px-3 py-1 rounded-full text-xs font-semibold">
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => {
                onSelectPlan?.('Trial');
                window.open('https://admin.saraltechnomart.com', '_blank');
              }}
              className="btn-primary px-8 py-4 rounded-xl font-bold text-sm text-white shadow-lg shadow-green-600/20 whitespace-nowrap hover:scale-105 active:scale-95 transition-all"
            >
              Start Free Trial →
            </button>
          </div>
        </div>
      </section>

      {/* Paid Plans */}
      <section className="relative z-10 max-w-5xl mx-auto w-full">
        <h2 className="font-display font-bold text-2xl text-white text-center mb-8">After Your Trial</h2>

        {/* Toggle */}
        <div className="flex items-center justify-center mb-10 space-x-4">
          <span className={`text-xs font-semibold uppercase tracking-wider ${!isAnnual ? 'text-white font-bold' : 'text-[#c2c6d6]'}`}>
            Quarterly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`w-14 h-7 rounded-full p-1 transition-colors relative focus:outline-none border border-white/20 ${
              isAnnual ? 'bg-[#3b82f6]' : 'bg-[#191f31]'
            }`}
          >
            <div className={`w-5 h-5 rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`} />
          </button>
          <span className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-2 ${isAnnual ? 'text-white font-bold' : 'text-[#c2c6d6]'}`}>
            Annual <span className="bg-[#d0bcff]/20 text-[#d0bcff] border border-[#d0bcff]/30 px-2 py-0.5 rounded-md text-[10px] font-bold">Best Value</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Quarterly Card */}
          <div className={`glass-card rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 relative ${!isAnnual ? 'border-[#3b82f6]/60 shadow-[0_0_40px_rgba(59,130,246,0.15)]' : 'border-white/10 opacity-70'}`}>
            {!isAnnual && <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#3b82f6] rounded-t-2xl" />}
            <div className="space-y-6">
              <div>
                <h3 className="font-display font-bold text-2xl text-white">Quarterly</h3>
                <p className="text-[#c2c6d6] text-sm mt-1">Billed every 3 months in advance</p>
              </div>
              <div className="flex items-baseline gap-1 py-2">
                <span className="text-2xl text-[#c2c6d6]">₹</span>
                <span className="font-display font-extrabold text-5xl text-white">1,800</span>
                <span className="text-[#c2c6d6] text-sm">/user/quarter</span>
              </div>
              <div className="text-[#c2c6d6] text-sm bg-white/5 rounded-lg px-4 py-3">
                ₹600 per user per month equivalent · Min. 2 users
              </div>
              <ul className="space-y-3 pt-2">
                {INCLUDED_FEATURES.map(f => (
                  <li key={f} className="flex items-start gap-3 text-white text-sm">
                    <span className="material-symbols-outlined text-[#3b82f6] text-lg flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    {f}
                  </li>
                ))}
                <li className="flex items-start gap-3 text-white text-sm">
                  <span className="material-symbols-outlined text-[#3b82f6] text-lg flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  900 AI call mins/user/quarter (pooled)
                </li>
              </ul>
            </div>
            <button
              onClick={() => {
                onSelectPlan?.('Quarterly');
                window.open('https://admin.saraltechnomart.com', '_blank');
              }}
              className="mt-8 w-full border border-[#3b82f6] text-[#adc6ff] hover:bg-[#3b82f6]/10 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Annual Card */}
          <div className={`glass-card rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 relative ${isAnnual ? 'border-[#3b82f6]/60 bg-[#191f31]/90 shadow-[0_0_40px_rgba(59,130,246,0.2)] md:-translate-y-2' : 'border-white/10 opacity-70'}`}>
            {isAnnual && <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#3b82f6] rounded-t-2xl" />}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-display font-bold text-2xl text-[#adc6ff]">Annual</h3>
                  <p className="text-[#c2c6d6] text-sm mt-1">Billed once a year in advance</p>
                </div>
                <span className="bg-[#3b82f6]/20 text-[#adc6ff] border border-[#3b82f6]/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Recommended
                </span>
              </div>
              <div className="flex items-baseline gap-1 py-2">
                <span className="text-2xl text-[#c2c6d6]">₹</span>
                <span className="font-display font-extrabold text-5xl text-white">6,000</span>
                <span className="text-[#c2c6d6] text-sm">/user/year</span>
              </div>
              <div className="text-[#adc6ff] text-sm bg-[#3b82f6]/10 rounded-lg px-4 py-3 border border-[#3b82f6]/20">
                ₹500 per user per month equivalent · Save ₹400/user vs quarterly · Min. 2 users
              </div>
              <ul className="space-y-3 pt-2">
                {INCLUDED_FEATURES.map(f => (
                  <li key={f} className="flex items-start gap-3 text-white text-sm">
                    <span className="material-symbols-outlined text-[#3b82f6] text-lg flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    {f}
                  </li>
                ))}
                <li className="flex items-start gap-3 text-white text-sm">
                  <span className="material-symbols-outlined text-[#3b82f6] text-lg flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  3,600 AI call mins/user/year (pooled)
                </li>
              </ul>
            </div>
            <button
              onClick={() => {
                onSelectPlan?.('Annual');
                window.open('https://admin.saraltechnomart.com', '_blank');
              }}
              className="mt-8 w-full btn-primary text-white px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Pooled Minutes Table */}
      <section className="relative z-10 max-w-3xl mx-auto w-full">
        <h2 className="font-display font-bold text-xl text-white text-center mb-6">Included Call Minutes (Pooled per Org)</h2>
        <div className="glass-card rounded-2xl overflow-hidden border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="text-left px-6 py-4 text-[#c2c6d6] font-semibold">Users</th>
                <th className="text-right px-6 py-4 text-[#c2c6d6] font-semibold">Minutes/Quarter</th>
                <th className="text-right px-6 py-4 text-[#c2c6d6] font-semibold">Minutes/Year</th>
              </tr>
            </thead>
            <tbody>
              {MINUTES_TABLE.map((row, i) => (
                <tr key={row.users} className={`border-b border-white/5 ${i % 2 === 0 ? '' : 'bg-white/[0.02]'}`}>
                  <td className="px-6 py-4 text-white font-semibold">{row.users} users</td>
                  <td className="px-6 py-4 text-[#adc6ff] text-right font-mono">{row.quarterly} mins</td>
                  <td className="px-6 py-4 text-[#d0bcff] text-right font-mono">{row.annual} mins</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-6 py-4 text-xs text-[#c2c6d6]/60">
            Overage billed at actual infrastructure cost × 2 on the next quarterly invoice. Calling continues uninterrupted.
          </div>
        </div>
      </section>

      {/* Policy notes */}
      <section className="relative z-10 max-w-3xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          {
            icon: 'payments',
            title: 'Offline Payment',
            desc: 'Bank transfer, UPI, or cheque. No online payment gateway required. Your Echo account manager handles invoicing.',
          },
          {
            icon: 'person_add',
            title: 'Add Users Anytime',
            desc: 'New seats are prorated for the remaining billing period. Reduce headcount only at renewal.',
          },
          {
            icon: 'notifications_active',
            title: 'Renewal Reminders',
            desc: 'You receive reminders at 30, 15, 7, and 1 day before expiry so you never lose access unexpectedly.',
          },
          {
            icon: 'whatsapp',
            title: 'WhatsApp Charges',
            desc: "Meta's messaging fees are billed separately at actual cost. Echo adds zero markup on WhatsApp charges.",
          },
        ].map(({ icon, title, desc }) => (
          <div key={title} className="glass-card rounded-xl p-6 border border-white/10 flex gap-4">
            <span className="material-symbols-outlined text-[#3b82f6] text-2xl flex-shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
              {icon}
            </span>
            <div>
              <div className="text-white font-semibold text-sm mb-1">{title}</div>
              <div className="text-[#c2c6d6] text-xs leading-relaxed">{desc}</div>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="relative z-10 text-center max-w-2xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-white mb-3">
          Ready to get started?
        </h2>
        <p className="text-[#c2c6d6] text-sm mb-6">
          Sign up in under 2 minutes. No credit card. Your 90-day trial starts immediately.
        </p>
        <button
          onClick={() => {
            onSelectPlan?.('Trial');
            window.open('https://admin.saraltechnomart.com', '_blank');
          }}
          className="btn-primary px-10 py-4 rounded-full font-bold text-base text-white shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all"
        >
          Start Your Free 90-Day Trial →
        </button>
      </section>
    </div>
  );
};
