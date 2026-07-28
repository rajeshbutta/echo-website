import React, { useState } from 'react';
import { ViewType } from '../types';

interface PricingViewProps {
  setCurrentView: (view: ViewType) => void;
  onSelectPlan?: (planName: string) => void;
}

export const PricingView: React.FC<PricingViewProps> = ({ setCurrentView, onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="pt-28 pb-20 px-6 max-w-screen-2xl mx-auto flex flex-col gap-16 relative">
      {/* Background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#3b82f6]/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Header Section */}
      <section className="text-center space-y-4 max-w-3xl mx-auto pt-8 relative z-10">
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight pulse-text">
          Pricing for Velocity
        </h1>
        <p className="text-[#c2c6d6] text-base sm:text-lg">
          Intelligent infrastructure that scales with your advisory team. No hidden fees, just raw performance.
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center mt-8 space-x-4">
          <span className={`text-xs font-semibold uppercase tracking-wider ${!isAnnual ? 'text-white font-bold' : 'text-[#c2c6d6]'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`w-14 h-7 rounded-full p-1 transition-colors relative focus:outline-none border border-white/20 ${
              isAnnual ? 'bg-[#3b82f6]' : 'bg-[#191f31]'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white transition-transform ${
                isAnnual ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-2 ${isAnnual ? 'text-white font-bold' : 'text-[#c2c6d6]'}`}>
            Annual <span className="bg-[#d0bcff]/20 text-[#d0bcff] border border-[#d0bcff]/30 px-2 py-0.5 rounded-md text-[10px] font-bold">Save 20%</span>
          </span>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 max-w-6xl mx-auto w-full items-stretch">
        {/* Starter */}
        <div className="glass-card rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 relative border-white/10">
          <div className="space-y-6">
            <h3 className="font-display font-bold text-2xl text-white">Starter</h3>
            <p className="text-[#c2c6d6] text-sm">
              Essential features for solo advisors to begin automating workflows.
            </p>

            <div className="flex items-baseline gap-1 py-2">
              <span className="font-display font-extrabold text-4xl sm:text-5xl text-white">Free</span>
            </div>

            <ul className="space-y-4 pt-4 border-t border-white/10 text-sm">
              <li className="flex items-start gap-3 text-white">
                <span className="material-symbols-outlined text-[#3b82f6] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span>50 Call mins / month</span>
              </li>
              <li className="flex items-start gap-3 text-white">
                <span className="material-symbols-outlined text-[#3b82f6] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span>Basic AI summaries</span>
              </li>
              <li className="flex items-start gap-3 text-[#c2c6d6]/50">
                <span className="material-symbols-outlined text-[#8c909f] text-lg">remove</span>
                <span>No WhatsApp integration</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => {
              onSelectPlan?.('Starter');
              setCurrentView('login');
            }}
            className="mt-8 w-full border border-[#3b82f6] text-[#adc6ff] hover:bg-[#3b82f6]/10 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Start Free
          </button>
        </div>

        {/* Growth (Highlighted) */}
        <div className="glass-card rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 relative border-[#3b82f6]/60 bg-[#191f31]/90 shadow-[0_0_40px_rgba(59,130,246,0.2)] md:-translate-y-2">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#3b82f6] rounded-t-2xl" />

          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="font-display font-bold text-2xl text-[#adc6ff]">Growth</h3>
              <span className="bg-[#3b82f6]/20 text-[#adc6ff] border border-[#3b82f6]/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Most Popular
              </span>
            </div>

            <p className="text-[#c2c6d6] text-sm">
              Engineered for agile teams (5-15 users) needing volume and multi-channel automation.
            </p>

            <div className="flex items-baseline gap-1 py-2">
              <span className="text-2xl text-[#c2c6d6]">₹</span>
              <span className="font-display font-extrabold text-4xl sm:text-5xl text-white">
                {isAnnual ? '400' : '500'}
              </span>
              <span className="text-[#c2c6d6] text-sm">/user/mo</span>
            </div>

            <ul className="space-y-4 pt-4 border-t border-white/10 text-sm">
              <li className="flex items-start gap-3 text-white">
                <span className="material-symbols-outlined text-[#3b82f6] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span>300 Call mins / month</span>
              </li>
              <li className="flex items-start gap-3 text-white">
                <span className="material-symbols-outlined text-[#3b82f6] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span>200 WhatsApp messages</span>
              </li>
              <li className="flex items-start gap-3 text-white">
                <span className="material-symbols-outlined text-[#3b82f6] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span>Advanced AI insights & CRM sync</span>
              </li>
              <li className="flex items-start gap-3 text-white">
                <span className="material-symbols-outlined text-[#3b82f6] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span>Admin Dashboard Access</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => {
              onSelectPlan?.('Growth');
              setCurrentView('login');
            }}
            className="mt-8 w-full btn-primary text-white px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30"
          >
            Upgrade to Growth
          </button>
        </div>

        {/* Enterprise */}
        <div className="glass-card rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 relative border-white/10">
          <div className="space-y-6">
            <h3 className="font-display font-bold text-2xl text-white">Enterprise</h3>
            <p className="text-[#c2c6d6] text-sm">
              Bespoke limits, custom SLA, and dedicated infrastructure for large firms.
            </p>

            <div className="flex items-baseline gap-1 py-2">
              <span className="font-display font-bold text-2xl text-white">Custom Pricing</span>
            </div>

            <ul className="space-y-4 pt-4 border-t border-white/10 text-sm">
              <li className="flex items-start gap-3 text-white">
                <span className="material-symbols-outlined text-[#3b82f6] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span>Unlimited Call mins & WhatsApp</span>
              </li>
              <li className="flex items-start gap-3 text-white">
                <span className="material-symbols-outlined text-[#3b82f6] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span>Custom AI Model Fine-tuning</span>
              </li>
              <li className="flex items-start gap-3 text-white">
                <span className="material-symbols-outlined text-[#3b82f6] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span>Dedicated Account Manager</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => {
              alert('Contacting Enterprise Sales team. An advisor manager will reach out within 2 hours.');
            }}
            className="mt-8 w-full border border-white/20 text-white hover:bg-white/10 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Contact Sales
          </button>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="mt-12 max-w-6xl mx-auto w-full">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-center text-white mb-8">
          Detailed Feature Comparison
        </h2>
        <div className="glass-card rounded-2xl overflow-x-auto border-white/10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="p-5 font-semibold text-xs uppercase tracking-wider text-[#c2c6d6] w-1/4">Features</th>
                <th className="p-5 font-semibold text-xs uppercase tracking-wider text-[#c2c6d6] w-1/4">Starter</th>
                <th className="p-5 font-semibold text-xs uppercase tracking-wider text-[#3b82f6] w-1/4 bg-[#3b82f6]/10">Growth</th>
                <th className="p-5 font-semibold text-xs uppercase tracking-wider text-[#c2c6d6] w-1/4">Enterprise</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-white/10">
              <tr>
                <td className="p-5 font-semibold text-white">Call Minutes</td>
                <td className="p-5 text-[#c2c6d6]">50 / month</td>
                <td className="p-5 font-semibold text-[#adc6ff] bg-[#3b82f6]/10">300 / month</td>
                <td className="p-5 text-[#c2c6d6]">Unlimited</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold text-white">WhatsApp Messages</td>
                <td className="p-5 text-[#8c909f]">
                  <span className="material-symbols-outlined text-lg">remove</span>
                </td>
                <td className="p-5 font-semibold text-[#adc6ff] bg-[#3b82f6]/10">200 / month</td>
                <td className="p-5 text-[#c2c6d6]">Unlimited</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold text-white">AI Processing Credits</td>
                <td className="p-5 text-[#c2c6d6]">Basic</td>
                <td className="p-5 font-semibold text-[#adc6ff] bg-[#3b82f6]/10">Advanced (10k credits)</td>
                <td className="p-5 text-[#c2c6d6]">Custom</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold text-white">Admin Dashboard Access</td>
                <td className="p-5 text-[#8c909f]">
                  <span className="material-symbols-outlined text-lg">remove</span>
                </td>
                <td className="p-5 font-semibold text-[#adc6ff] bg-[#3b82f6]/10">
                  <span className="material-symbols-outlined text-[#3b82f6] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check
                  </span>
                </td>
                <td className="p-5 text-[#c2c6d6]">
                  <span className="material-symbols-outlined text-white text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check
                  </span>{' '}
                  (Role-based)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto w-full">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-center text-white mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="glass-card p-6 rounded-2xl border-white/10">
            <h4 className="font-bold text-white mb-2">What payment methods do you accept in India?</h4>
            <p className="text-sm text-[#c2c6d6] leading-relaxed">
              We accept all major credit cards, UPI, net banking, and corporate Razorpay payments. Invoicing with GST credit is available for all paid plans.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border-white/10">
            <h4 className="font-bold text-white mb-2">Are prices inclusive of GST?</h4>
            <p className="text-sm text-[#c2c6d6] leading-relaxed">
              An 18% GST will be applied at checkout for Indian registered entities. You can enter your GSTIN during checkout to claim Input Tax Credit.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border-white/10">
            <h4 className="font-bold text-white mb-2">What kind of support is included?</h4>
            <p className="text-sm text-[#c2c6d6] leading-relaxed">
              Starter plans include standard email support. Growth includes priority chat & phone support. Enterprise includes a dedicated account manager.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
