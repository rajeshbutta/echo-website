import React, { useState } from 'react';

interface LiveVoiceDemoProps {
  onClose?: () => void;
  isModal?: boolean;
}

const PRESET_SCENARIOS = [
  {
    id: 's1',
    title: '1 Cr Term Policy Consultation',
    clientName: 'Rajesh Sharma',
    topic: 'Term Insurance & Critical Illness Rider',
    transcript: `Advisor: Hello Rajesh, thank you for taking my call regarding the HDFC Click 2 Protect 1 Crore term plan you inquired about on our website.
Client: Hi Ramesh! Yes, I was looking at the 1 Cr sum assured up to age 65. Can you explain if the critical illness rider covers cardiac procedures?
Advisor: Absolutely, Rajesh. The 30-critical-illness rider provides a 100% lump sum payout upon diagnosis of cardiac illness or cancer without requiring hospitalization bills. The additional annual premium for 20 Lacs rider cover is approximately ₹3,400.
Client: That sounds very useful. Does this qualify for tax deduction under Section 80C and 80D?
Advisor: Yes! The base term premium falls under Section 80C up to 1.5 Lacs, and the health rider portion gets extra deduction under Section 80D up to ₹25,000.
Client: Great. Please send me the modified comparison PDF with the rider break-up on WhatsApp. I will review it with my wife tonight and let's speak tomorrow at 4 PM.
Advisor: Perfect, I will WhatsApp you the illustration right away and set a reminder for 4 PM tomorrow. Have a great evening!`
  },
  {
    id: 's2',
    title: 'Mutual Fund SIP Portfolio Review',
    clientName: 'Priya Patel',
    topic: 'Flexi-Cap Step-Up SIP',
    transcript: `Advisor: Good morning Priya! Calling to review your Q2 mutual fund SIP portfolio performance.
Client: Hi Ramesh! I saw the statement, overall returns look really good at around 18% CAGR.
Advisor: Yes, your flexi-cap and small-cap funds have performed exceptionally well. Given your recent promotion, I suggest stepping up your monthly SIP from ₹20,000 to ₹25,000 to reach your retirement milestone 2 years earlier.
Client: I agree. Can we route the extra ₹5,000 into the Parag Parikh Flexi Cap fund?
Advisor: Excellent choice. I will generate a step-up mandate link and send it over WhatsApp. Once you approve on net banking, the updated SIP will trigger from the 1st of next month.
Client: Perfect, send the link over. Thanks Ramesh!`
  },
  {
    id: 's3',
    title: 'Family Health Floater Inquiry',
    clientName: 'Amit Verma',
    topic: '15 Lac Zero Co-Pay Health Plan',
    transcript: `Advisor: Hello Amit, hope you are doing well. Following up on your query for a comprehensive health floater for your family of 4.
Client: Hi Ramesh. My main concern with my company health policy is the 20% co-pay on senior family members and room rent sub-limits.
Advisor: Understood. I recommend the Care Advantage 15 Lac Floater Plan. It features zero room-rent cap, 100% restore benefit, and no co-payment at all across 11,000+ network hospitals.
Client: That addresses my main worry. What is the pre-existing disease waiting period?
Advisor: Standard 3 years, but with the reduction add-on we can bring it down to 2 years. Let me send you the full benefit breakdown matrix on WhatsApp.
Client: Please do, I want to finalize this before the month end.`
  }
];

export const LiveVoiceDemo: React.FC<LiveVoiceDemoProps> = ({ onClose, isModal }) => {
  const [selectedScenario, setSelectedScenario] = useState(PRESET_SCENARIOS[0]);
  const [customTranscript, setCustomTranscript] = useState('');
  const [useCustom, setUseCustom] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recordingActive, setRecordingActive] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);

  const [aiResult, setAiResult] = useState<{
    summary: string;
    sentiment: 'Positive' | 'Neutral' | 'Concerned';
    keyTakeaways: string[];
    tasks: string[];
    whatsappDraft: string;
    dealStage: string;
  } | null>(null);

  const activeText = useCustom ? customTranscript : selectedScenario.transcript;

  const handleRunAnalysis = async () => {
    setIsAnalyzing(true);
    setAiResult(null);

    try {
      const res = await fetch('/api/analyze-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          transcript: activeText,
          clientName: useCustom ? 'Client' : selectedScenario.clientName,
          callTopic: useCustom ? 'Voice Advisory Session' : selectedScenario.topic
        })
      });

      const json = await res.json();
      if (json.success && json.data) {
        setAiResult(json.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleMicSimulate = () => {
    setRecordingActive(true);
    setAudioPlayed(true);
    setTimeout(() => {
      setRecordingActive(false);
      handleRunAnalysis();
    }, 2500);
  };

  return (
    <div className={isModal ? "p-6 max-w-4xl w-full mx-auto" : "max-w-screen-xl mx-auto px-6 py-12"}>
      <div className="glass-card rounded-3xl p-6 sm:p-10 border-white/10 bg-[#151b2d]/90 shadow-2xl relative">
        {isModal && onClose && (
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-[#c2c6d6] hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        )}

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] text-xs font-semibold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-ping" />
              Live Interactive AI Demo
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Try Echo Voice AI Processing
            </h2>
            <p className="text-[#c2c6d6] text-sm mt-1">
              Select a financial advisory conversation script or simulate a live microphone recording to test Gemini AI extraction.
            </p>
          </div>

          <button
            onClick={handleMicSimulate}
            disabled={recordingActive || isAnalyzing}
            className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all ${
              recordingActive
                ? 'bg-red-500 text-white animate-pulse'
                : 'bg-[#3b82f6]/20 border border-[#3b82f6]/40 text-[#adc6ff] hover:bg-[#3b82f6]/30'
            }`}
          >
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
              mic
            </span>
            {recordingActive ? 'Listening to Call...' : 'Record Mic Demo'}
          </button>
        </div>

        {/* Scenario Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {PRESET_SCENARIOS.map((sc) => (
            <button
              key={sc.id}
              onClick={() => {
                setSelectedScenario(sc);
                setUseCustom(false);
                setAiResult(null);
              }}
              className={`p-4 rounded-xl text-left border transition-all ${
                !useCustom && selectedScenario.id === sc.id
                  ? 'bg-[#3b82f6]/15 border-[#3b82f6] text-white shadow-lg shadow-blue-500/10'
                  : 'bg-white/5 border-white/10 text-[#c2c6d6] hover:bg-white/10'
              }`}
            >
              <div className="text-xs text-[#3b82f6] font-semibold uppercase tracking-wider mb-1">
                {sc.clientName}
              </div>
              <div className="font-bold text-sm text-white line-clamp-1">{sc.title}</div>
            </button>
          ))}
        </div>

        {/* Call Audio Waveform Simulation */}
        <div className="bg-[#0c1324] p-5 rounded-2xl border border-white/10 mb-6">
          <div className="flex items-center justify-between mb-3 text-xs text-[#c2c6d6]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#3b82f6]">graphic_eq</span>
              <span className="font-semibold text-white">Call Audio Transcript</span>
            </div>
            <span className="text-xs bg-white/5 px-2.5 py-1 rounded-md text-[#adc6ff]">
              Topic: {useCustom ? 'Custom Call' : selectedScenario.topic}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#dce1fb]/90 leading-relaxed max-h-40 overflow-y-auto whitespace-pre-line p-3 bg-white/5 rounded-xl border border-white/5 font-mono">
            {activeText}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 pt-3 border-t border-white/10">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => setAudioPlayed(!audioPlayed)}
                className="w-9 h-9 rounded-full bg-[#3b82f6] text-white flex items-center justify-center shrink-0 hover:scale-105 transition-transform"
              >
                <span className="material-symbols-outlined text-lg">
                  {audioPlayed ? 'pause' : 'play_arrow'}
                </span>
              </button>
              <div className="flex-1 sm:w-64 h-2 bg-white/10 rounded-full overflow-hidden relative">
                <div
                  className="h-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] transition-all duration-300"
                  style={{ width: audioPlayed ? '65%' : '15%' }}
                />
              </div>
              <span className="text-xs font-mono text-[#c2c6d6]">04:15</span>
            </div>

            <button
              onClick={handleRunAnalysis}
              disabled={isAnalyzing}
              className="btn-primary w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">auto_awesome</span>
              {isAnalyzing ? 'Extracting AI Insights...' : 'Analyze with Echo AI'}
            </button>
          </div>
        </div>

        {/* AI Processing Result Card */}
        {isAnalyzing && (
          <div className="py-12 flex flex-col items-center justify-center gap-3 text-[#adc6ff]">
            <div className="w-10 h-10 border-3 border-[#3b82f6] border-t-transparent rounded-full animate-spin" />
            <p className="text-sm font-semibold animate-pulse">
              Gemini AI analyzing speech sentiment, key points & WhatsApp draft...
            </p>
          </div>
        )}

        {aiResult && !isAnalyzing && (
          <div className="space-y-6 pt-4 border-t border-white/10 animate-fade-in">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-[#3b82f6]/10 border border-[#3b82f6]/30 p-4 rounded-2xl">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#3b82f6] text-2xl">check_circle</span>
                <div>
                  <div className="font-bold text-white text-sm">Echo Voice AI Analysis Complete</div>
                  <div className="text-xs text-[#c2c6d6]">Extracted in 0.8s</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#c2c6d6]">Sentiment:</span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase ${
                  aiResult.sentiment === 'Positive'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                }`}>
                  {aiResult.sentiment}
                </span>
                <span className="text-xs font-semibold text-[#c2c6d6] ml-3">Stage:</span>
                <span className="bg-[#8b5cf6]/20 text-[#d0bcff] border border-[#8b5cf6]/30 px-2.5 py-0.5 rounded-full text-xs font-bold">
                  {aiResult.dealStage || 'Proposal Sent'}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Executive Summary */}
              <div className="bg-[#0c1324] p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#3b82f6] mb-2 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">summarize</span>
                    AI Executive Summary
                  </h4>
                  <p className="text-sm text-[#dce1fb] leading-relaxed mb-4">
                    {aiResult.summary}
                  </p>
                </div>

                <div>
                  <h5 className="text-xs font-semibold text-[#c2c6d6] mb-2">Key Discussion Points:</h5>
                  <ul className="space-y-1.5 text-xs text-[#c2c6d6]">
                    {aiResult.keyTakeaways?.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#3b82f6] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* WhatsApp Auto-Draft */}
              <div className="bg-[#0f172a] p-5 rounded-2xl border border-emerald-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">chat</span>
                      WhatsApp Follow-Up Draft
                    </h4>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded-md font-semibold">
                      Ready to Send
                    </span>
                  </div>

                  <div className="p-3 bg-[#070d1f] rounded-xl border border-white/5 text-xs text-white leading-relaxed font-sans mb-4">
                    {aiResult.whatsappDraft}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(aiResult.whatsappDraft);
                      alert('WhatsApp draft copied to clipboard!');
                    }}
                    className="flex-1 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition-colors flex justify-center items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-sm">content_copy</span>
                    Copy Draft
                  </button>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(aiResult.whatsappDraft)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white transition-colors flex justify-center items-center gap-1.5 shadow-lg shadow-emerald-600/30"
                  >
                    <span className="material-symbols-outlined text-sm">send</span>
                    Send WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
