import React from 'react';
import { ViewType } from '../types';

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
            Voice Sales OS for Advisors
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.15] tracking-tight">
            Never Forget Another{' '}
            <span className="pulse-text glow-text">Client Conversation.</span>
          </h1>

          <p className="text-[#c2c6d6] text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
            Echo automatically records every client interaction, creates AI summaries, generates follow-up tasks, and drafts personalized WhatsApp messages—so your advisors never miss an opportunity.
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
              <div className="font-display text-2xl sm:text-3xl font-bold text-white">3.8x</div>
              <div className="text-xs text-[#c2c6d6]/70 mt-1">Faster Client Follow-up</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#adc6ff]">100%</div>
              <div className="text-xs text-[#c2c6d6]/70 mt-1">Automated Call Summaries</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#d0bcff]">₹500</div>
              <div className="text-xs text-[#c2c6d6]/70 mt-1">Affordable User/Mo</div>
            </div>
          </div>
        </div>

        {/* Right Column 3D Smartphone Image */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div className="absolute inset-0 bg-[#3b82f6]/20 rounded-full blur-[90px] z-0" />
          <div className="relative z-10 w-full max-w-[420px] flex justify-center items-center">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqxaNeBNIThGHMIDoTGsb7ggJeFRu7-T1HNt1Opce0WDzYDZ6C3G0JwtEGK1sow5gsXM-8CSKBhA2VaWFlZmaRqLx75E_e_CQ9shzLvYQ9cBTWj8DJoy_IItaZm2Gp4Ka0Dv3dxJWM5bySXZ47aOqZP1LZ9Fg54BJfrzDDK8bw-WUZHks-KbwoWbANQOYHos0mtgO4hNImUvVAyekOwQCvPQ9FJfpEYe5KKPQJfmmNIfoetwEmRT-e"
              alt="Echo Voice Sales OS Smartphone App"
              className="w-full h-auto drop-shadow-[0_25px_60px_rgba(77,142,255,0.4)] animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
