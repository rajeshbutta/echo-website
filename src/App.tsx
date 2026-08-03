import React, { useState } from 'react';
import { ViewType, UserRole, CallRecord, Client, TaskItem } from './types';
import { INITIAL_CALLS, INITIAL_CLIENTS, INITIAL_TASKS } from './mockData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { FeaturesSection } from './components/FeaturesSection';
import { LiveVoiceDemo } from './components/LiveVoiceDemo';
import { VideoSection } from './components/VideoSection';
import { PricingView } from './components/PricingView';
import { DownloadView } from './components/DownloadView';
import { LoginView } from './components/LoginView';
import { DashboardView } from './components/DashboardView';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>('advisor');
  const [userEmail, setUserEmail] = useState('advisor@echo.ai');
  const [showDemoModal, setShowDemoModal] = useState(false);

  // State
  const [clients, setClients] = useState<Client[]>(INITIAL_CLIENTS);
  const [calls, setCalls] = useState<CallRecord[]>(INITIAL_CALLS);
  const [tasks, setTasks] = useState<TaskItem[]>(INITIAL_TASKS);

  const handleLoginSuccess = (role: UserRole, email: string) => {
    setIsLoggedIn(true);
    setUserRole(role);
    setUserEmail(email);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('home');
  };

  const handleAddTask = (newTask: Omit<TaskItem, 'id'>) => {
    const task: TaskItem = {
      ...newTask,
      id: 't-' + Date.now(),
    };
    setTasks([task, ...tasks]);
  };

  const handleToggleTask = (taskId: string) => {
    setTasks(
      tasks.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleAddNewCall = (newCall: CallRecord) => {
    setCalls([newCall, ...calls]);
  };

  return (
    <div className="min-h-screen bg-[#0c1324] text-[#dce1fb] font-sans antialiased flex flex-col selection:bg-[#3b82f6] selection:text-white">
      {/* Navigation */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        isLoggedIn={isLoggedIn}
        userRole={userRole}
        onLogout={handleLogout}
      />

      {/* Main Content Pages */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <HeroSection
              setCurrentView={setCurrentView}
              onOpenDemo={() => setShowDemoModal(true)}
            />
            <ProblemSection />
            <FeaturesSection />
            <VideoSection />

            {/* Embedded Live Demo section on home page */}
            <div className="py-12">
              <LiveVoiceDemo />
            </div>

            {/* Teaser CTA */}
            <section className="max-w-screen-xl mx-auto px-6 py-16 text-center">
              <div className="glass-card rounded-3xl p-10 md:p-14 border-white/10 bg-gradient-to-br from-[#151b2d] to-[#0c1324]">
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">
                  Ready to Supercharge Your Advisory Team?
                </h2>
                <p className="text-[#c2c6d6] text-base max-w-xl mx-auto mb-8">
                  Get started in 2 minutes. Start your 30-day trial with full access to Gemini AI voice processing.
                </p>
                <button
                  onClick={() => setCurrentView('login')}
                  className="btn-primary px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider text-white shadow-xl shadow-blue-600/30"
                >
                  Start Free 30-Day Trial
                </button>
              </div>
            </section>
          </>
        )}

        {currentView === 'pricing' && (
          <PricingView
            setCurrentView={setCurrentView}
            onSelectPlan={(plan) => {
              if (!isLoggedIn) setCurrentView('login');
              else setCurrentView('dashboard');
            }}
          />
        )}

        {currentView === 'download' && (
          <DownloadView setCurrentView={setCurrentView} />
        )}

        {currentView === 'login' && (
          <LoginView
            onLoginSuccess={handleLoginSuccess}
            setCurrentView={setCurrentView}
          />
        )}

        {currentView === 'dashboard' && (
          <DashboardView
            userRole={userRole}
            userEmail={userEmail}
            setUserRole={setUserRole}
            clients={clients}
            calls={calls}
            tasks={tasks}
            onAddTask={handleAddTask}
            onToggleTask={handleToggleTask}
            onAddNewCall={handleAddNewCall}
          />
        )}
      </main>

      {/* Footer */}
      <Footer setCurrentView={setCurrentView} />

      {/* Global Live Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <LiveVoiceDemo
            isModal
            onClose={() => setShowDemoModal(false)}
          />
        </div>
      )}
    </div>
  );
}
