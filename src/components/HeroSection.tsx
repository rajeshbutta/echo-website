import React from 'react';
import { ViewType } from '../types';
import { AppPreview } from './AppPreview';

interface HeroSectionProps {
  setCurrentView: (view: ViewType) => void;
  onOpenDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ setCurrentView, onOpenDemo }) => {
  return (
    <section className="relative pt-32 pb-20 md:py-36 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#3b82f6]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#8b5cf6]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column Text */}
        <div className="lg:col-span-7 flex flex-col items-start gap-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#adc6ff] text-xs font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" />
            AI CRM for Insurance &amp; Wealth Advisors
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.15] tracking-tight">
            Never Forget a Conversation.{' '}
            <span className="pulse-text glow-text">Never Miss a Renewal.</span>
          </h1>

          <p className="text-[#c2c6d6] text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
            Echo records every client call, generates AI summaries, tracks policy renewals, and sends automated WhatsApp follow-ups — so your advisors close more, retain more, and never drop the ball.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
            <button
              onClick={() => window.open('https://admin.saraltechnomart.com', '_blank')}
              className="btn-primary px-8 py-4 rounded-full font-bold text-base text-white flex items-center justify-center gap-3 shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all"
            >
              Start Free 90-Day Trial
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                arrow_forward
              </span>
            </button>

            <button
              onClick={onOpenDemo}
              className="btn-secondary px-8 py-4 rounded-full font-semibold text-base text-[#adc6ff] hover:text-white flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <span className="material-symbols-outlined text-2xl text-[#3b82f6]">
                play_circle
              </span>
              Try Live AI Call Demo
            </button>
          </div>

          {/* Social Proof metrics */}
          <div className="pt-8 border-t border-white/10 w-full grid grid-cols-3 gap-6">
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white">100%</div>
              <div className="text-xs text-[#c2c6d6]/70 mt-1">Automated Call Summaries</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#adc6ff]">0 Missed</div>
              <div className="text-xs text-[#c2c6d6]/70 mt-1">Policy Renewals</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#d0bcff]">90 Days</div>
              <div className="text-xs text-[#c2c6d6]/70 mt-1">Free Trial, No Card Needed</div>
            </div>
          </div>
        </div>

        {/* Right Column — Live App Preview */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div className="absolute inset-0 bg-[#3b82f6]/20 rounded-full blur-[90px] z-0" />
          <div className="relative z-10 w-full flex justify-center items-center">
            <AppPreview />
          </div>
        </div>
      </div>
    </section>
  );
};
