import React from 'react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-20 relative z-10">
      <div className="text-center mb-16 space-y-4">
        <span className="text-[#ffb4ab] text-xs font-semibold uppercase tracking-widest px-3 py-1 bg-[#ffb4ab]/10 border border-[#ffb4ab]/20 rounded-full">
          The Hidden Sales Drain
        </span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
          The Data Gap in Financial Advisory
        </h2>
        <p className="text-[#c2c6d6] text-base sm:text-lg max-w-3xl mx-auto">
          Insurance and wealth advisors lose critical context between back-to-back client calls — and lose even more revenue when renewals fall through the cracks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:border-[#ffb4ab]/40 transition-all hover:-translate-y-1">
          <div className="w-16 h-16 rounded-2xl bg-[#ffb4ab]/10 border border-[#ffb4ab]/20 flex items-center justify-center mb-6 text-[#ffb4ab]">
            <span className="material-symbols-outlined text-3xl">call_missed</span>
          </div>
          <h3 className="font-display font-bold text-xl text-white mb-3">Lost Details</h3>
          <p className="text-[#c2c6d6] text-sm leading-relaxed">
            Crucial client preferences and objection nuances mentioned verbally are forgotten before notes can be typed into the CRM.
          </p>
        </div>

        {/* Card 2 */}
        <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:border-[#adc6ff]/40 transition-all hover:-translate-y-1">
          <div className="w-16 h-16 rounded-2xl bg-[#adc6ff]/10 border border-[#adc6ff]/20 flex items-center justify-center mb-6 text-[#adc6ff]">
            <span className="material-symbols-outlined text-3xl">hourglass_empty</span>
          </div>
          <h3 className="font-display font-bold text-xl text-white mb-3">Wasted Time</h3>
          <p className="text-[#c2c6d6] text-sm leading-relaxed">
            Advisors waste up to 2 hours every day manually summarizing discussions and drafting repetitive follow-up WhatsApp messages.
          </p>
        </div>

        {/* Card 3 */}
        <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:border-[#d0bcff]/40 transition-all hover:-translate-y-1">
          <div className="w-16 h-16 rounded-2xl bg-[#d0bcff]/10 border border-[#d0bcff]/20 flex items-center justify-center mb-6 text-[#d0bcff]">
            <span className="material-symbols-outlined text-3xl">trending_down</span>
          </div>
          <h3 className="font-display font-bold text-xl text-white mb-3">Missed Sales</h3>
          <p className="text-[#c2c6d6] text-sm leading-relaxed">
            Without automated task generation and follow-up tracking, warm leads go cold and policy upgrades are never offered at the right time.
          </p>
        </div>

        {/* Card 4 — NEW */}
        <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:border-[#fcd34d]/40 transition-all hover:-translate-y-1">
          <div className="w-16 h-16 rounded-2xl bg-[#fcd34d]/10 border border-[#fcd34d]/20 flex items-center justify-center mb-6 text-[#fcd34d]">
            <span className="material-symbols-outlined text-3xl">event_busy</span>
          </div>
          <h3 className="font-display font-bold text-xl text-white mb-3">Lapsed Renewals</h3>
          <p className="text-[#c2c6d6] text-sm leading-relaxed">
            Policy renewal dates tracked in spreadsheets are missed silently. One lapsed renewal can cost months of commission — and the client relationship.
          </p>
        </div>
      </div>
    </section>
  );
};
