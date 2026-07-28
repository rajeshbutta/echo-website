import React, { useState } from 'react';
import { UserRole, ViewType } from '../types';

interface LoginViewProps {
  onLoginSuccess: (role: UserRole, email: string) => void;
  setCurrentView: (view: ViewType) => void;
}

export const LoginView: React.FC<LoginViewProps> = ({ onLoginSuccess, setCurrentView }) => {
  const [role, setRole] = useState<UserRole>('advisor');
  const [email, setEmail] = useState('advisor@echo.ai');
  const [password, setPassword] = useState('password123');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess(role, email || 'advisor@echo.ai');
  };

  const handleQuickAdvisor = () => {
    setRole('advisor');
    setEmail('advisor.rajesh@echo.ai');
    setPassword('demo1234');
    onLoginSuccess('advisor', 'advisor.rajesh@echo.ai');
  };

  const handleQuickAdmin = () => {
    setRole('admin');
    setEmail('admin.manager@echo.ai');
    setPassword('demo1234');
    onLoginSuccess('admin', 'admin.manager@echo.ai');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-mesh relative overflow-hidden pt-28 pb-16">
      {/* Ambient background glow elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#3b82f6]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#8b5cf6]/10 blur-[130px] pointer-events-none" />

      <main className="w-full max-w-md glass-card rounded-2xl p-8 flex flex-col gap-8 border-white/15 relative z-10 shadow-2xl">
        {/* Header */}
        <div className="text-center flex flex-col gap-2">
          <div className="font-display text-4xl font-extrabold tracking-tight text-[#adc6ff] flex items-center justify-center gap-2 mb-1">
            <img src="/echo_logo.png" alt="Echo" className="w-10 h-10 object-contain" />
            Echo
          </div>
          <h1 className="font-display font-bold text-2xl text-white">Secure Access</h1>
          <p className="text-sm text-[#c2c6d6]">Sign in to your Voice Sales OS</p>
        </div>

        {/* Role Tabs */}
        <div className="flex p-1 bg-[#191f31] rounded-xl border border-white/10">
          <button
            type="button"
            onClick={() => {
              setRole('advisor');
              if (email.includes('admin')) setEmail('advisor@echo.ai');
            }}
            className={`flex-1 py-2 text-center rounded-lg font-semibold text-xs transition-all ${
              role === 'advisor'
                ? 'bg-[#23293c] text-[#adc6ff] shadow-md border border-[#3b82f6]/30'
                : 'text-[#c2c6d6] hover:text-white'
            }`}
          >
            Advisor
          </button>
          <button
            type="button"
            onClick={() => {
              setRole('admin');
              if (email.includes('advisor')) setEmail('admin@echo.ai');
            }}
            className={`flex-1 py-2 text-center rounded-lg font-semibold text-xs transition-all ${
              role === 'admin'
                ? 'bg-[#23293c] text-[#adc6ff] shadow-md border border-[#3b82f6]/30'
                : 'text-[#c2c6d6] hover:text-white'
            }`}
          >
            Admin
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-[#c2c6d6]">Email Address</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8c909f] text-[20px]">
                mail
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#0f172a] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-[#8c909f] focus:ring-2 focus:ring-[#3b82f6] focus:outline-none input-glow transition-all"
                placeholder="name@company.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold text-[#c2c6d6]">Password</label>
              <a href="#forgot" onClick={(e) => { e.preventDefault(); alert('Password reset link sent to your corporate email!'); }} className="text-xs text-[#3b82f6] hover:text-[#adc6ff] transition-colors font-medium">
                Forgot?
              </a>
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8c909f] text-[20px]">
                lock
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-[#0f172a] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-[#8c909f] focus:ring-2 focus:ring-[#3b82f6] focus:outline-none input-glow transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-2 w-full btn-primary text-white py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/30 flex justify-center items-center gap-2 hover:scale-[1.01] active:scale-95"
          >
            Sign In as {role === 'admin' ? 'Admin Manager' : 'Sales Advisor'}
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center py-1">
          <div className="flex-grow border-t border-white/10" />
          <span className="flex-shrink-0 mx-4 text-[#c2c6d6] text-[10px] font-bold uppercase tracking-wider">
            OR CONTINUE WITH
          </span>
          <div className="flex-grow border-t border-white/10" />
        </div>

        {/* Social Logins */}
        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={handleQuickAdvisor}
            className="w-full bg-white/5 border border-white/15 hover:bg-white/10 text-white py-2.5 rounded-xl text-sm font-medium transition-all flex justify-center items-center gap-3"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvKf3pR5-mM3y9wXAIUNVzmA2o28HOmiD_SD9QQX1MBCXoUNakj55UU6Th11bc6hrJVHJSGGpWXwXBQy1E8R_JsUKkdbR2cmtCQvZJ0nOR1uKBWvOte_vkCEST7qwcaALht6Fa-xctSrCO8J9oYeXQzJGkgH11AYU6FJuPyK9I1JzaQALLsJ4kgVdreOpdlW-mnhGmqfp8zZqLxt1W3AqRYNAuRxiPIogMrPgWcfuCJmumyrYOX7V5"
              alt="Microsoft Logo"
              className="w-5 h-5 object-contain"
            />
            Microsoft Workspace
          </button>

          <button
            type="button"
            onClick={handleQuickAdmin}
            className="w-full bg-white/5 border border-white/15 hover:bg-white/10 text-white py-2.5 rounded-xl text-sm font-medium transition-all flex justify-center items-center gap-3"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtrOr3V2Nd_t_yirUxWtSRL1VZ-kbGyeW-xze8Kf5Jlio7rI6n3bw1tFHY-kuloY4BOwbRdANxVFnZAbOz-ydMn954fcbcuEhRB6J4ajjekuxDghGMlX3fxSNZg7m_4BXBYj_KpycQ0lpCA2Xsq9daJzOBYjsf5BxXvVS6BXdmn-YJW56pU-xPvUYpy752tSICTD796e6IPwO0OjkOCQVrWo7C1SF1Dw5IOSDcd5ooqkdg5yq0n5pT"
              alt="Google Workspace Logo"
              className="w-5 h-5 object-contain"
            />
            Google Workspace
          </button>
        </div>

        {/* Status */}
        <div className="text-center pt-2">
          <p className="text-xs text-[#c2c6d6]/70 flex items-center justify-center gap-1.5 font-medium">
            <span className="material-symbols-outlined text-[16px] text-emerald-400">encrypted</span>
            End-to-end encrypted session
          </p>
        </div>
      </main>
    </div>
  );
};
