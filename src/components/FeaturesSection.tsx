import React from 'react';

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="max-w-screen-2xl mx-auto px-6 py-20 relative z-10">
      <div className="glass-card rounded-3xl p-8 md:p-16 relative overflow-hidden border-white/10 bg-gradient-to-br from-[#151b2d]/80 via-[#0c1324]/90 to-[#191f31]/80">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3b82f6]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="mb-16 max-w-2xl">
          <span className="text-[#3b82f6] font-semibold text-xs uppercase tracking-widest bg-[#3b82f6]/10 px-3.5 py-1.5 rounded-full border border-[#3b82f6]/30 inline-block mb-4">
            Voice Sales OS Engine
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Intelligent Automation for Modern Financial Advisors.
          </h2>
          <p className="text-[#c2c6d6] text-base sm:text-lg mt-4 font-normal">
            From the first ring to policy renewal, Echo runs quietly in the background — capturing every conversation, automating follow-ups, and ensuring no renewal ever slips through the cracks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {/* Feature 1 */}
          <div className="flex gap-6 items-start group">
            <div className="w-14 h-14 rounded-2xl bg-[#3b82f6]/10 border border-[#3b82f6]/30 flex items-center justify-center shrink-0 text-[#adc6ff] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                mic
              </span>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-[#adc6ff] transition-colors">
                Crystal Voice Calling
              </h3>
              <p className="text-[#c2c6d6] text-sm leading-relaxed">
                Make high-quality VoIP calls directly through the Echo advisor app using your organization's virtual numbers. Assign numbers by team, territory, or product line. Every call is securely recorded and ready for instant AI analysis.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex gap-6 items-start group">
            <div className="w-14 h-14 rounded-2xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 flex items-center justify-center shrink-0 text-[#d0bcff] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                auto_awesome
              </span>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-[#d0bcff] transition-colors">
                AI Transcription & Smart Summary
              </h3>
              <p className="text-[#c2c6d6] text-sm leading-relaxed">
                Powered by OpenAI Whisper and GPT, every call is transcribed, speaker-labeled, and summarized automatically — extracting primary intent, key points, client objections, sentiment, and follow-up urgency. Zero manual note-taking.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex gap-6 items-start group">
            <div className="w-14 h-14 rounded-2xl bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 flex items-center justify-center shrink-0 text-[#89ceff] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                chat
              </span>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-[#89ceff] transition-colors">
                WhatsApp Follow-up & Renewal Alerts
              </h3>
              <p className="text-[#c2c6d6] text-sm leading-relaxed">
                AI drafts a warm, personalized WhatsApp message after every call — ready to review and send in one tap. Renewal reminders are sent automatically as due dates approach, so no policy renewal is ever missed.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex gap-6 items-start group">
            <div className="w-14 h-14 rounded-2xl bg-[#f59e0b]/10 border border-[#f59e0b]/30 flex items-center justify-center shrink-0 text-[#fcd34d] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                autorenew
              </span>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-[#fcd34d] transition-colors">
                Renewal & Policy Lifecycle Management
              </h3>
              <p className="text-[#c2c6d6] text-sm leading-relaxed">
                Assign products to clients by category — term, health, SIP, motor, and more. Set reference numbers, provider, premium amount, and next due date. Echo tracks every policy's renewal calendar and alerts advisors before lapse.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="flex gap-6 items-start group">
            <div className="w-14 h-14 rounded-2xl bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center shrink-0 text-[#6ee7b7] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                history
              </span>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-[#6ee7b7] transition-colors">
                Unified Client Timeline
              </h3>
              <p className="text-[#c2c6d6] text-sm leading-relaxed">
                A complete, chronological record of every call, WhatsApp thread, active policy, and pending task — all in one place for every client. Your entire relationship history, always at your fingertips.
              </p>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="flex gap-6 items-start group">
            <div className="w-14 h-14 rounded-2xl bg-[#ec4899]/10 border border-[#ec4899]/30 flex items-center justify-center shrink-0 text-[#f9a8d4] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                group
              </span>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-[#f9a8d4] transition-colors">
                Team & Multi-Number Management
              </h3>
              <p className="text-[#c2c6d6] text-sm leading-relaxed">
                Add multiple advisors under one organization. Assign dedicated virtual phone numbers per advisor or team. Admins get a full performance dashboard — calls made, sentiment trends, renewals tracked, and WhatsApp messages sent.
              </p>
            </div>
          </div>
        </div>

        {/* Mid-page CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-white/10">
          <div>
            <div className="font-display font-bold text-white text-lg">Ready to see it live?</div>
            <div className="text-[#c2c6d6] text-sm mt-1">90-day free trial · No credit card · Setup in 2 minutes</div>
          </div>
          <button
            onClick={() => window.open('https://admin.saraltechnomart.com', '_blank')}
            className="btn-primary px-8 py-3.5 rounded-full font-bold text-sm text-white shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
          >
            Start Free 90-Day Trial →
          </button>
        </div>
      </div>
    </section>
  );
};
