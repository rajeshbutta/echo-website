import React from 'react';

/** CSS-rendered mockup of the Echo admin panel — shown in the hero section. */
export const AppPreview: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: 'Inter, sans-serif',
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)',
        background: '#0f172a',
        width: '100%',
        maxWidth: 480,
        fontSize: 11,
      }}
    >
      {/* Window chrome */}
      <div style={{ background: '#1e293b', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 6, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
        <span style={{ flex: 1, textAlign: 'center', color: '#64748b', fontSize: 10 }}>admin.saraltechnomart.com</span>
      </div>

      <div style={{ display: 'flex', height: 360 }}>
        {/* Sidebar */}
        <div style={{ width: 130, background: '#1e2d4a', borderRight: '1px solid rgba(255,255,255,0.06)', padding: '12px 0', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ padding: '6px 14px', marginBottom: 8 }}>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 13 }}>echo</div>
            <div style={{ color: '#64748b', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Admin Panel</div>
          </div>
          {[
            { icon: '⊞', label: 'Dashboard', active: false },
            { icon: '👤', label: 'Clients', active: false },
            { icon: '📞', label: 'Calls', active: true },
            { icon: '✅', label: 'Tasks', active: false },
            { icon: '💬', label: 'WA Drafts', active: false },
            { icon: '🔄', label: 'Renewals', active: false },
          ].map(({ icon, label, active }) => (
            <div
              key={label}
              style={{
                padding: '7px 14px',
                display: 'flex', alignItems: 'center', gap: 7,
                background: active ? 'rgba(59,130,246,0.18)' : 'transparent',
                borderLeft: active ? '3px solid #3b82f6' : '3px solid transparent',
                color: active ? '#93c5fd' : '#64748b',
                fontWeight: active ? 600 : 400,
                fontSize: 10,
              }}
            >
              <span style={{ fontSize: 11 }}>{icon}</span> {label}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div style={{ flex: 1, padding: '14px 16px', overflowY: 'hidden', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: 13 }}>Call Details</div>
          <div style={{ color: '#64748b', fontSize: 10, marginTop: -8 }}>Priya Mehta · 23 Sep 2026, 11:30 AM</div>

          {/* Meta chips */}
          <div style={{ display: 'flex', gap: 6 }}>
            {[['CLIENT', 'Priya Mehta'], ['ADVISOR', 'Rajesh Butta'], ['DURATION', '4m 12s']].map(([label, val]) => (
              <div key={label} style={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, padding: '5px 9px', flex: 1 }}>
                <div style={{ color: '#475569', fontSize: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
                <div style={{ color: '#e2e8f0', fontSize: 10, fontWeight: 600, marginTop: 2 }}>{val}</div>
              </div>
            ))}
          </div>

          {/* Audio player */}
          <div style={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '10px 12px' }}>
            <div style={{ color: '#94a3b8', fontSize: 9, marginBottom: 6, fontWeight: 600 }}>🎵 CALL RECORDING</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 10, flexShrink: 0 }}>▶</div>
              <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,0.1)', borderRadius: 2, position: 'relative' }}>
                <div style={{ width: '35%', height: '100%', background: '#3b82f6', borderRadius: 2 }} />
              </div>
              <div style={{ color: '#64748b', fontSize: 9 }}>1:32 / 4:12</div>
            </div>
          </div>

          {/* AI Summary */}
          <div style={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '10px 12px' }}>
            <div style={{ color: '#94a3b8', fontSize: 9, marginBottom: 8, fontWeight: 600 }}>🤖 AI SUMMARY</div>
            <div style={{ color: '#64748b', fontSize: 8, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>Primary Intent</div>
            <div style={{ color: '#e2e8f0', fontSize: 10, marginBottom: 8 }}>Renewal of Health Floater — upgrade to 15L</div>
            <div style={{ color: '#64748b', fontSize: 8, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Key Points</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {[
                'Client: Concerned about premium increase this year.',
                'Advisor: Offered upgrade to 15L with zero co-pay.',
                'Client: Requested comparison PDF on WhatsApp.',
              ].map((pt, i) => (
                <div key={i} style={{ display: 'flex', gap: 5, alignItems: 'flex-start' }}>
                  <span style={{ color: '#3b82f6', fontSize: 8, marginTop: 1 }}>•</span>
                  <span style={{ color: '#cbd5e1', fontSize: 9, lineHeight: 1.4 }}>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp draft pill */}
          <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: 10, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 13 }}>💬</span>
            <div style={{ flex: 1 }}>
              <div style={{ color: '#86efac', fontSize: 9, fontWeight: 600 }}>WhatsApp Draft Ready</div>
              <div style={{ color: '#64748b', fontSize: 9, marginTop: 1 }}>AI-generated follow-up • Tap to review &amp; send</div>
            </div>
            <div style={{ background: '#22c55e', color: '#fff', fontSize: 9, fontWeight: 700, padding: '4px 9px', borderRadius: 6, whiteSpace: 'nowrap' }}>Send</div>
          </div>
        </div>
      </div>
    </div>
  );
};
