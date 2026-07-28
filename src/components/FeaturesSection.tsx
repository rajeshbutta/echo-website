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
            From the first ring to the final policy issuance, Echo runs quietly in the background powering your entire sales workflow.
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
                Make high-quality VoIP or mobile calls directly through the Echo advisor app. Every call is securely recorded and ready for instant AI analysis.
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
                AI Transcription & Executive Summary
              </h3>
              <p className="text-[#c2c6d6] text-sm leading-relaxed">
                Powered by Gemini AI, convert speech into clean text in real-time. Extract key financial needs, customer sentiment, and policy interest automatically.
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
                WhatsApp Follow-up Automation
              </h3>
              <p className="text-[#c2c6d6] text-sm leading-relaxed">
                Auto-generate warm, personalized WhatsApp messages immediately after a call. Send policy quotes, meeting takeaways, and next steps with 1-click.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
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
                Maintain a complete, chronological record of every conversation, WhatsApp message, active policy, and pending task for every client in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
