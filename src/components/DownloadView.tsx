import React from 'react';
import { ViewType } from '../types';

interface DownloadViewProps {
  setCurrentView: (view: ViewType) => void;
}

export const DownloadView: React.FC<DownloadViewProps> = ({ setCurrentView }) => {
  return (
    <div className="pt-28 pb-20 px-6 max-w-screen-2xl mx-auto flex flex-col items-center justify-center relative">
      {/* Background glow */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#3b82f6]/5 blur-[120px] pointer-events-none z-[-1]" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#8b5cf6]/10 blur-[100px] pointer-events-none z-[-1]" />

      <main className="w-full flex flex-col items-center justify-center py-8 relative z-10">
        {/* Hero Section */}
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Download Info */}
          <div className="flex flex-col gap-6 items-start">
            <button
              onClick={() => setCurrentView('home')}
              className="flex items-center gap-2 text-[#adc6ff] hover:text-white transition-colors mb-2"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              <span className="font-semibold text-sm">Back to Home</span>
            </button>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white">
              Get the Echo App
            </h1>

            <p className="text-[#c2c6d6] text-lg max-w-md font-normal">
              Transform your advisor workflow with the Voice Sales OS. Record, analyze, and automate on the go.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 mt-6 w-full">
              {/* Primary Download Button */}
              <a
                href="#download-play"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Initiating Echo Voice Sales OS Android APK download...');
                }}
                className="btn-primary flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-white font-semibold w-full sm:w-auto shadow-lg shadow-blue-600/30"
              >
                <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  android
                </span>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] opacity-80 uppercase tracking-wider">Download on</span>
                  <span className="text-base font-bold">Google Play</span>
                </div>
              </a>

              <div className="hidden sm:flex items-center gap-4">
                <div className="h-12 w-px bg-white/20" />
                {/* QR Code */}
                <div className="glass-card p-2.5 rounded-xl flex items-center justify-center shrink-0 border-white/20">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD655VX3pAAcwN-7G2SYe_KhHhBRIHuY3xLM2GsWpN7anihklOL5mzwm8Iq-Q3IYY9JNIdvsBtRe_0P9BTjo3fIRO-5J9266fLPpMbqEVVG7Yxm7eQ84cYvOqi8wtc4VpfTeAJGYlneYyoXS0OvATfcqyDZEdUdQiu9qEgj7U_By_mbHFPuPyQSPNd6PMtfitJzOSS-jPi77q6mO6_9zC4R9Ng4ndAm3v4c5yriB0ZFmy9MqHvy14GD"
                    alt="Scan QR Code to Install Echo"
                    className="w-20 h-20 rounded-lg opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-xs text-[#c2c6d6] max-w-[100px] text-left leading-tight font-medium">
                  Scan to install directly
                </span>
              </div>
            </div>
          </div>

          {/* Right: App Showcase Image */}
          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-[#3b82f6]/10 rounded-full blur-[80px] z-[-1]" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqxaNeBNIThGHMIDoTGsb7ggJeFRu7-T1HNt1Opce0WDzYDZ6C3G0JwtEGK1sow5gsXM-8CSKBhA2VaWFlZmaRqLx75E_e_CQ9shzLvYQ9cBTWj8DJoy_IItaZm2Gp4Ka0Dv3dxJWM5bySXZ47aOqZP1LZ9Fg54BJfrzDDK8bw-WUZHks-KbwoWbANQOYHos0mtgO4hNImUvVAyekOwQCvPQ9FJfpEYe5KKPQJfmmNIfoetwEmRT-e"
              alt="Echo App on Smartphone"
              className="max-w-full h-auto w-[320px] sm:w-[380px] drop-shadow-2xl z-10"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))' }}
            />
          </div>
        </div>

        {/* Details Section: Bento Grid */}
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Installation Guide */}
          <div className="glass-card rounded-2xl p-8 md:col-span-2 flex flex-col gap-6 border-white/10">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#3b82f6] text-[28px]">
                integration_instructions
              </span>
              <h2 className="font-display font-bold text-2xl text-white">Installation Guide</h2>
            </div>

            <ol className="flex flex-col gap-6 relative pt-2">
              <div className="absolute left-[11px] top-6 bottom-4 w-px bg-white/15 z-0" />

              <li className="flex gap-4 relative z-10">
                <div className="w-6 h-6 rounded-full bg-[#191f31] border border-[#3b82f6] text-[#3b82f6] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">Download the App</h3>
                  <p className="text-[#c2c6d6] text-sm mt-1">
                    Tap the Google Play button above or scan the QR code to open the secure store page.
                  </p>
                </div>
              </li>

              <li className="flex gap-4 relative z-10">
                <div className="w-6 h-6 rounded-full bg-[#191f31] border border-[#3b82f6] text-[#3b82f6] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">Authenticate</h3>
                  <p className="text-[#c2c6d6] text-sm mt-1">
                    Sign in using your Echo advisor credentials. Biometric fingerprint/Face ID login is supported.
                  </p>
                </div>
              </li>

              <li className="flex gap-4 relative z-10">
                <div className="w-6 h-6 rounded-full bg-[#191f31] border border-[#3b82f6] text-[#3b82f6] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">Grant Permissions</h3>
                  <p className="text-[#c2c6d6] text-sm mt-1">
                    Allow microphone access for voice recording and notifications for real-time task updates.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* System Requirements */}
          <div className="glass-card rounded-2xl p-8 flex flex-col justify-between gap-6 border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-[#3b82f6] text-[28px]">memory</span>
                <h2 className="font-display font-bold text-2xl text-white">Requirements</h2>
              </div>

              <ul className="flex flex-col gap-4 text-sm">
                <li className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-[#c2c6d6]">OS Version</span>
                  <span className="text-white font-semibold">Android 10.0+</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-[#c2c6d6]">Storage</span>
                  <span className="text-white font-semibold">120 MB Free</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-[#c2c6d6]">RAM</span>
                  <span className="text-white font-semibold">4GB Minimum</span>
                </li>
                <li className="flex justify-between items-center pt-1">
                  <span className="text-[#c2c6d6]">Connectivity</span>
                  <span className="text-white font-semibold">Active Internet</span>
                </li>
              </ul>
            </div>

            <div className="pulse-wave h-1.5 w-full rounded-full opacity-60 mt-4" />
          </div>
        </div>
      </main>
    </div>
  );
};
