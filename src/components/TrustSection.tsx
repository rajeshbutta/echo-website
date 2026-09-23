import React from 'react';

export const TrustSection: React.FC = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-20 relative z-10">
      {/* Section header */}
      <div className="text-center mb-14 space-y-4">
        <span className="text-[#6ee7b7] text-xs font-semibold uppercase tracking-widest px-3 py-1 bg-[#10b981]/10 border border-[#10b981]/20 rounded-full">
          Built for Trust
        </span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
          Your Clients' Data Stays Yours. Always.
        </h2>
        <p className="text-[#c2c6d6] text-base sm:text-lg max-w-3xl mx-auto">
          Financial advisory runs on trust. Echo is architected so that your organisation's data is completely isolated — no other firm, advisor, or administrator outside your team can ever access it.
        </p>
      </div>

      {/* Pillars grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">

        <div className="glass-card p-7 rounded-2xl hover:border-[#6ee7b7]/30 transition-all hover:-translate-y-1">
          <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center mb-5 text-[#6ee7b7]">
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              shield_lock
            </span>
          </div>
          <h3 className="font-display font-bold text-lg text-white mb-2">Organisation-Level Isolation</h3>
          <p className="text-[#c2c6d6] text-sm leading-relaxed">
            Every piece of data — clients, calls, transcripts, renewals — is locked to your organisation ID using row-level security. It is structurally impossible for another organisation to read or write your records.
          </p>
        </div>

        <div className="glass-card p-7 rounded-2xl hover:border-[#adc6ff]/30 transition-all hover:-translate-y-1">
          <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center mb-5 text-[#adc6ff]">
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              lock
            </span>
          </div>
          <h3 className="font-display font-bold text-lg text-white mb-2">Encrypted at Every Step</h3>
          <p className="text-[#c2c6d6] text-sm leading-relaxed">
            All data is encrypted in transit over HTTPS/TLS and at rest in secure cloud storage. Call recordings are stored in a private, access-controlled bucket — never on a shared or public server.
          </p>
        </div>

        <div className="glass-card p-7 rounded-2xl hover:border-[#d0bcff]/30 transition-all hover:-translate-y-1">
          <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center mb-5 text-[#d0bcff]">
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified_user
            </span>
          </div>
          <h3 className="font-display font-bold text-lg text-white mb-2">Role-Based Access Within Your Team</h3>
          <p className="text-[#c2c6d6] text-sm leading-relaxed">
            Advisors can only see their own clients and calls. Only your designated Admin can view team-wide data, manage users, and configure settings — no one else has that access, not even Echo support.
          </p>
        </div>

        <div className="glass-card p-7 rounded-2xl hover:border-[#fcd34d]/30 transition-all hover:-translate-y-1">
          <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center mb-5 text-[#fcd34d]">
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              key
            </span>
          </div>
          <h3 className="font-display font-bold text-lg text-white mb-2">JWT-Authenticated API</h3>
          <p className="text-[#c2c6d6] text-sm leading-relaxed">
            Every API request — mobile app, admin panel, or webhook — is authenticated with a signed JSON Web Token tied to your user and organisation. Expired or forged tokens are rejected outright.
          </p>
        </div>

        <div className="glass-card p-7 rounded-2xl hover:border-[#89ceff]/30 transition-all hover:-translate-y-1">
          <div className="w-12 h-12 rounded-xl bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center mb-5 text-[#89ceff]">
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              phonelink_erase
            </span>
          </div>
          <h3 className="font-display font-bold text-lg text-white mb-2">Your Data Is Never Sold or Shared</h3>
          <p className="text-[#c2c6d6] text-sm leading-relaxed">
            Echo does not sell, share, or monetise your client data. Call transcripts and AI summaries are generated purely to serve you — they are never used to train third-party models or shared with insurers.
          </p>
        </div>

        <div className="glass-card p-7 rounded-2xl hover:border-[#f9a8d4]/30 transition-all hover:-translate-y-1">
          <div className="w-12 h-12 rounded-xl bg-[#ec4899]/10 border border-[#ec4899]/20 flex items-center justify-center mb-5 text-[#f9a8d4]">
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              delete_forever
            </span>
          </div>
          <h3 className="font-display font-bold text-lg text-white mb-2">Right to Delete</h3>
          <p className="text-[#c2c6d6] text-sm leading-relaxed">
            You own your data. Request a full export or permanent deletion of your organisation's data at any time. When you leave, nothing lingers on our servers.
          </p>
        </div>
      </div>

      {/* Trust banner */}
      <div className="glass-card rounded-2xl p-6 md:p-8 border-[#10b981]/20 bg-[#10b981]/5 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
        <div className="w-14 h-14 rounded-2xl bg-[#10b981]/20 border border-[#10b981]/30 flex items-center justify-center shrink-0 text-[#6ee7b7]">
          <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            security
          </span>
        </div>
        <div className="flex-1">
          <div className="font-display font-bold text-white text-lg mb-1">
            Zero-Trust Architecture, Multi-Tenant Separation
          </div>
          <p className="text-[#c2c6d6] text-sm leading-relaxed">
            Echo is built on a zero-trust principle — every request is verified, every query is scoped to your organisation, and no data layer assumes implicit access. Your 200 clients are as protected as those of a Fortune 500 enterprise.
          </p>
        </div>
        <div className="flex gap-4 shrink-0">
          <div className="text-center">
            <div className="font-display font-bold text-[#6ee7b7] text-xl">TLS 1.3</div>
            <div className="text-[10px] text-[#c2c6d6]/60 uppercase tracking-wider">In Transit</div>
          </div>
          <div className="text-center">
            <div className="font-display font-bold text-[#6ee7b7] text-xl">AES-256</div>
            <div className="text-[10px] text-[#c2c6d6]/60 uppercase tracking-wider">At Rest</div>
          </div>
          <div className="text-center">
            <div className="font-display font-bold text-[#6ee7b7] text-xl">RLS</div>
            <div className="text-[10px] text-[#c2c6d6]/60 uppercase tracking-wider">Row-Level</div>
          </div>
        </div>
      </div>
    </section>
  );
};
