import React from 'react';
import { ViewType } from '../types';

interface FooterProps {
  setCurrentView: (view: ViewType) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentView }) => {
  return (
    <footer className="bg-[#070d1f] border-t border-white/10 w-full mt-auto relative z-10 text-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 py-12 max-w-screen-2xl mx-auto">
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src="/echo_logo.png" alt="Echo" className="w-8 h-8 object-contain" />
            <span className="font-display text-2xl font-bold tracking-tight text-[#adc6ff]">
              Echo
            </span>
          </div>
          <p className="text-[#c2c6d6]/70 text-sm leading-relaxed">
            Voice Sales OS for high-performance financial advisors. Automate client summaries, task management, and WhatsApp updates.
          </p>
          <p className="text-[#c2c6d6]/50 text-xs mt-2">
            © 2026 Echo Voice Sales OS. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-xs tracking-wider uppercase text-white mb-1">
            Product
          </h4>
          <button
            onClick={() => setCurrentView('pricing')}
            className="text-left text-[#c2c6d6] hover:text-[#adc6ff] transition-colors"
          >
            Pricing & Plans
          </button>
          <button
            onClick={() => {
              setCurrentView('home');
              setTimeout(() => {
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="text-left text-[#c2c6d6] hover:text-[#adc6ff] transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => setCurrentView('download')}
            className="text-left text-[#c2c6d6] hover:text-[#adc6ff] transition-colors"
          >
            Download App
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-xs tracking-wider uppercase text-white mb-1">
            Support
          </h4>
          <a href="#support" onClick={(e) => { e.preventDefault(); alert('Support team reachable at support@echo.ai or +91 800-ECHO-OS'); }} className="text-[#c2c6d6] hover:text-[#adc6ff] transition-colors">
            Help Center
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); alert('Contact Sales: sales@echo.ai'); }} className="text-[#c2c6d6] hover:text-[#adc6ff] transition-colors">
            Contact Sales
          </a>
          <a href="#status" onClick={(e) => { e.preventDefault(); alert('All Systems Operational (99.99% Uptime)'); }} className="text-[#c2c6d6] hover:text-[#adc6ff] transition-colors">
            System Status
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-xs tracking-wider uppercase text-white mb-1">
            Legal & Compliance
          </h4>
          <a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Echo complies with IRDAI data guidelines and ISO 27001 encryption standards.'); }} className="text-[#c2c6d6] hover:text-[#adc6ff] transition-colors">
            Privacy Policy
          </a>
          <a href="#terms" onClick={(e) => { e.preventDefault(); alert('Terms of Service: End-to-end encrypted session & advisor data protection.'); }} className="text-[#c2c6d6] hover:text-[#adc6ff] transition-colors">
            Terms of Service
          </a>
          <a href="#refund" onClick={(e) => { e.preventDefault(); alert('14-day hassle-free refund policy for paid subscriptions.'); }} className="text-[#c2c6d6] hover:text-[#adc6ff] transition-colors">
            Refund Policy
          </a>
        </div>
      </div>
    </footer>
  );
};
