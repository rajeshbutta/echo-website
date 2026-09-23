import React, { useState } from 'react';
import { ViewType, UserRole } from '../types';

interface NavbarProps {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
  isLoggedIn: boolean;
  userRole: UserRole;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  isLoggedIn,
  userRole,
  onLogout,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop & Main Navbar */}
      <nav className="bg-white border-b border-slate-200 fixed top-0 w-full z-50 shadow-sm transition-all">
        <div className="flex items-center justify-between px-6 py-3 max-w-screen-2xl mx-auto w-full">
          {/* Brand Logo */}
          <button
            onClick={() => {
              setCurrentView(isLoggedIn ? 'dashboard' : 'home');
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <img src="/echo_logo.png" alt="Echo" className="w-9 h-9 object-contain group-hover:scale-105 transition-transform" />
            <div>
              <span className="font-display font-bold text-2xl tracking-tight text-[#002060] block leading-none">
                Echo
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider uppercase font-semibold">
                AI CRM for Advisors
              </span>
            </div>
          </button>

          {/* Nav Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setCurrentView('home')}
              className={`font-medium transition-colors text-base py-1 px-2 ${
                currentView === 'home'
                  ? 'text-[#002060] font-bold underline underline-offset-[6px] decoration-2 decoration-[#2563EB]'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                setCurrentView('home');
                setTimeout(() => {
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="text-slate-500 hover:text-slate-900 transition-colors font-medium text-base py-1 px-2"
            >
              Features
            </button>
            <button
              onClick={() => setCurrentView('pricing')}
              className={`font-medium transition-colors text-base py-1 px-2 ${
                currentView === 'pricing'
                  ? 'text-[#002060] font-bold underline underline-offset-[6px] decoration-2 decoration-[#2563EB]'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Pricing
            </button>
            <button
              onClick={() => setCurrentView('download')}
              className={`font-medium transition-colors text-base py-1 px-2 ${
                currentView === 'download'
                  ? 'text-[#002060] font-bold underline underline-offset-[6px] decoration-2 decoration-[#2563EB]'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Get App
            </button>
            <a
              href="/onboarding.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 transition-colors font-medium text-base py-1 px-2"
            >
              Quick Start
            </a>

            {isLoggedIn && (
              <button
                onClick={() => setCurrentView('dashboard')}
                className={`font-semibold transition-colors text-base py-1 px-3 rounded-lg ${
                  currentView === 'dashboard'
                    ? 'bg-[#002060]/10 text-[#002060] border border-[#002060]/20'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Dashboard ({userRole === 'admin' ? 'Admin' : 'Advisor'})
              </button>
            )}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setCurrentView('dashboard')}
                  className="btn-primary px-5 py-2.5 rounded-full font-semibold text-xs tracking-wider uppercase text-white flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">dashboard</span>
                  Open OS
                </button>
                <button
                  onClick={onLogout}
                  className="text-slate-500 hover:text-slate-900 text-xs font-semibold uppercase tracking-wider px-3 py-2"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setCurrentView('login')}
                  className="text-slate-600 hover:text-slate-900 font-semibold text-xs uppercase tracking-wider transition-colors px-3 py-2"
                >
                  Login
                </button>
                <button
                  onClick={() => window.open('https://admin.saraltechnomart.com', '_blank')}
                  className="bg-[#002060] hover:bg-[#0d3080] text-white px-6 py-2.5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
                >
                  Start Free Trial
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-700 p-2 rounded-lg hover:bg-slate-100"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 flex flex-col gap-4">
            <button
              onClick={() => {
                setCurrentView('home');
                setMobileMenuOpen(false);
              }}
              className="text-left text-lg font-medium text-slate-900 py-2"
            >
              Home
            </button>
            <button
              onClick={() => {
                setCurrentView('home');
                setMobileMenuOpen(false);
                setTimeout(() => {
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="text-left text-lg font-medium text-slate-600 py-2"
            >
              Features
            </button>
            <button
              onClick={() => {
                setCurrentView('pricing');
                setMobileMenuOpen(false);
              }}
              className="text-left text-lg font-medium text-slate-600 py-2"
            >
              Pricing
            </button>
            <button
              onClick={() => {
                setCurrentView('download');
                setMobileMenuOpen(false);
              }}
              className="text-left text-lg font-medium text-slate-600 py-2"
            >
              Download App
            </button>
            <a
              href="/onboarding.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-left text-lg font-medium text-slate-600 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Quick Start Guide
            </a>

            {isLoggedIn ? (
              <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setCurrentView('dashboard');
                    setMobileMenuOpen(false);
                  }}
                  className="bg-[#002060] w-full py-3 rounded-xl font-bold text-white text-center"
                >
                  Open Voice Sales OS
                </button>
                <button
                  onClick={() => {
                    onLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2 text-slate-500 text-center"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setCurrentView('login');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3 border border-slate-300 rounded-xl font-bold text-slate-900 text-center"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    window.open('https://admin.saraltechnomart.com', '_blank');
                    setMobileMenuOpen(false);
                  }}
                  className="bg-[#002060] w-full py-3 rounded-xl font-bold text-white text-center"
                >
                  Start Free Trial
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </>
  );
};
