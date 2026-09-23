import React from 'react';

const TESTIMONIALS = [
  {
    quote: "Earlier I used to lose track of what was discussed in the morning calls by evening. Now Echo gives me the full summary the moment I hang up. My renewal conversion has gone up noticeably.",
    name: "Arvind Kapoor",
    role: "Independent Financial Advisor",
    location: "Pune",
    initials: "AK",
    color: "#3b82f6",
  },
  {
    quote: "The WhatsApp draft feature alone saves me 45 minutes every day. I used to type out follow-ups manually after every call. Now I just review and hit send. Clients say I respond faster than ever.",
    name: "Sunita Rajan",
    role: "Senior Wealth Advisor",
    location: "Bengaluru",
    initials: "SR",
    color: "#8b5cf6",
  },
  {
    quote: "Managing 8 advisors and their calls was chaotic before Echo. Now I can see every call, every renewal due date, and every pending task from one admin dashboard. It's like having a second ops team.",
    name: "Manish Deshpande",
    role: "Agency Principal",
    location: "Mumbai",
    initials: "MD",
    color: "#10b981",
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-20 relative z-10">
      <div className="text-center mb-14 space-y-4">
        <span className="text-[#adc6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 bg-[#3b82f6]/10 border border-[#3b82f6]/20 rounded-full">
          From Advisors Who Use Echo Daily
        </span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
          Real Advisors. Real Results.
        </h2>
        <p className="text-[#c2c6d6] text-base max-w-2xl mx-auto">
          Financial advisors across India use Echo to close more, retain more, and spend less time on admin.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            className="glass-card p-7 rounded-2xl flex flex-col justify-between hover:-translate-y-1 transition-all"
            style={{ borderTop: `3px solid ${t.color}30` }}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {[1,2,3,4,5].map(i => (
                <span key={i} style={{ color: '#f59e0b', fontSize: 14 }}>★</span>
              ))}
            </div>

            {/* Quote */}
            <p className="text-[#cbd5e1] text-sm leading-relaxed flex-1 mb-6">
              "{t.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                style={{ background: t.color + '33', border: `1px solid ${t.color}55` }}
              >
                <span style={{ color: t.color }}>{t.initials}</span>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">{t.name}</div>
                <div className="text-[#64748b] text-xs">{t.role} · {t.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Social proof bar */}
      <div className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
        <div>
          <div className="font-display font-bold text-2xl text-white">500+</div>
          <div className="text-[#64748b] text-xs mt-1">Calls Processed</div>
        </div>
        <div className="hidden sm:block w-px h-10 bg-white/10" />
        <div>
          <div className="font-display font-bold text-2xl text-[#adc6ff]">₹0</div>
          <div className="text-[#64748b] text-xs mt-1">Setup Cost</div>
        </div>
        <div className="hidden sm:block w-px h-10 bg-white/10" />
        <div>
          <div className="font-display font-bold text-2xl text-[#6ee7b7]">90 Days</div>
          <div className="text-[#64748b] text-xs mt-1">Free Trial, No Card</div>
        </div>
        <div className="hidden sm:block w-px h-10 bg-white/10" />
        <div>
          <div className="font-display font-bold text-2xl text-[#fcd34d]">2 Min</div>
          <div className="text-[#64748b] text-xs mt-1">To Get Started</div>
        </div>
      </div>
    </section>
  );
};
