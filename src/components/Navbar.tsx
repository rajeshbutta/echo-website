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
      <nav className="bg-[#0c1324]/80 backdrop-blur-xl border-b border-white/10 fixed top-0 w-full z-50 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] transition-all">
        <div className="flex items-center justify-between px-6 py-4 max-w-screen-2xl mx-auto w-full">
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
              <span className="font-display font-bold text-2xl tracking-tight text-[#adc6ff] block leading-none">
                Echo
              </span>
              <span className="text-[10px] text-[#c2c6d6] tracking-wider uppercase font-semibold">
                Voice Sales OS
              </span>
            </div>
          </button>

          {/* Nav Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setCurrentView('home')}
              className={`font-medium transition-colors text-base py-1 px-2 ${
                currentView === 'home'
                  ? 'text-[#adc6ff] font-bold border-b-2 border-[#adc6ff]'
                  : 'text-[#c2c6d6]/80 hover:text-white'
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
              className="text-[#c2c6d6]/80 hover:text-white transition-colors font-medium text-base py-1 px-2"
            >
              Features
            </button>
            <button
              onClick={() => setCurrentView('pricing')}
              className={`font-medium transition-colors text-base py-1 px-2 ${
                currentView === 'pricing'
                  ? 'text-[#adc6ff] font-bold border-b-2 border-[#adc6ff]'
                  : 'text-[#c2c6d6]/80 hover:text-white'
              }`}
            >
              Pricing
            </button>
            <button
              onClick={() => setCurrentView('download')}
              className={`font-medium transition-colors text-base py-1 px-2 ${
                currentView === 'download'
                  ? 'text-[#adc6ff] font-bold border-b-2 border-[#adc6ff]'
                  : 'text-[#c2c6d6]/80 hover:text-white'
              }`}
            >
              Get App
            </button>

            {isLoggedIn && (
              <button
                onClick={() => setCurrentView('dashboard')}
                className={`font-semibold transition-colors text-base py-1 px-3 rounded-lg ${
                  currentView === 'dashboard'
                    ? 'bg-[#3b82f6]/20 text-[#adc6ff] border border-[#3b82f6]/40'
                    : 'text-[#adc6ff] hover:bg-white/5'
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
                  className="text-[#c2c6d6] hover:text-white text-xs font-semibold uppercase tracking-wider px-3 py-2"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setCurrentView('login')}
                  className="text-[#dce1fb] hover:text-[#adc6ff] font-semibold text-xs uppercase tracking-wider transition-colors px-3 py-2"
                >
                  Login
                </button>
                <button
                  onClick={() => setCurrentView('login')}
                  className="btn-primary px-6 py-2.5 rounded-full font-semibold text-xs uppercase tracking-wider text-white hover:opacity-95 transition-all shadow-lg shadow-blue-600/30 active:scale-95"
                >
                  Start Free Trial
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0c1324] border-b border-white/10 px-6 py-6 flex flex-col gap-4">
            <button
              onClick={() => {
                setCurrentView('home');
                setMobileMenuOpen(false);
              }}
              className="text-left text-lg font-medium text-white py-2"
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
              className="text-left text-lg font-medium text-[#c2c6d6] py-2"
            >
              Features
            </button>
            <button
              onClick={() => {
                setCurrentView('pricing');
                setMobileMenuOpen(false);
              }}
              className="text-left text-lg font-medium text-[#c2c6d6] py-2"
            >
              Pricing
            </button>
            <button
              onClick={() => {
                setCurrentView('download');
                setMobileMenuOpen(false);
              }}
              className="text-left text-lg font-medium text-[#c2c6d6] py-2"
            >
              Download App
            </button>

            {isLoggedIn ? (
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setCurrentView('dashboard');
                    setMobileMenuOpen(false);
                  }}
                  className="btn-primary w-full py-3 rounded-xl font-bold text-white text-center"
                >
                  Open Voice Sales OS
                </button>
                <button
                  onClick={() => {
                    onLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2 text-[#c2c6d6] text-center"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setCurrentView('login');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3 border border-white/20 rounded-xl font-bold text-white text-center"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setCurrentView('login');
                    setMobileMenuOpen(false);
                  }}
                  className="btn-primary w-full py-3 rounded-xl font-bold text-white text-center"
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
