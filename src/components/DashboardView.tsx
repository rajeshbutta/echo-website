import React, { useState } from 'react';
import { CallRecord, Client, TaskItem, UserRole } from '../types';
import { LiveVoiceDemo } from './LiveVoiceDemo';

interface DashboardViewProps {
  userRole: UserRole;
  userEmail: string;
  setUserRole: (role: UserRole) => void;
  clients: Client[];
  calls: CallRecord[];
  tasks: TaskItem[];
  onAddTask: (task: Omit<TaskItem, 'id'>) => void;
  onToggleTask: (taskId: string) => void;
  onAddNewCall: (call: CallRecord) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  userRole,
  userEmail,
  setUserRole,
  clients,
  calls,
  tasks,
  onAddTask,
  onToggleTask,
  onAddNewCall,
}) => {
  const [selectedCallId, setSelectedCallId] = useState<string>(calls[0]?.id || '');
  const [searchTerm, setSearchTerm] = useState('');
  const [showCallRecorder, setShowCallRecorder] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [activeTab, setActiveTab] = useState<'calls' | 'clients' | 'tasks'>('calls');

  const selectedCall = calls.find((c) => c.id === selectedCallId) || calls[0];

  const filteredCalls = calls.filter(
    (c) =>
      c.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddNewTaskSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim() || !selectedCall) return;
    onAddTask({
      clientId: selectedCall.id,
      clientName: selectedCall.clientName,
      title: newTaskTitle.trim(),
      dueDate: 'Tomorrow, 5:00 PM',
      priority: 'High',
      completed: false,
    });
    setNewTaskTitle('');
  };

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 max-w-screen-2xl mx-auto flex flex-col gap-6">
      {/* Top Banner & Control Header */}
      <div className="glass-card rounded-2xl p-5 border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#151b2d]/80">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#3b82f6] to-[#8b5cf6] flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-blue-500/20">
            {userEmail.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-display font-bold text-xl text-white">Voice Sales OS Workspace</h1>
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                userRole === 'admin'
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                  : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
              }`}>
                {userRole === 'admin' ? 'Admin Portal' : 'Advisor View'}
              </span>
            </div>
            <p className="text-xs text-[#c2c6d6] mt-0.5">
              Logged in as <span className="text-white font-medium">{userEmail}</span> • Plan: Growth (240/300 call mins remaining)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          {/* Role Switcher */}
          <div className="flex bg-[#0c1324] p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setUserRole('advisor')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                userRole === 'advisor'
                  ? 'bg-[#3b82f6] text-white shadow'
                  : 'text-[#c2c6d6] hover:text-white'
              }`}
            >
              Advisor
            </button>
            <button
              onClick={() => setUserRole('admin')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                userRole === 'admin'
                  ? 'bg-[#8b5cf6] text-white shadow'
                  : 'text-[#c2c6d6] hover:text-white'
              }`}
            >
              Admin
            </button>
          </div>

          <button
            onClick={() => setShowCallRecorder(true)}
            className="btn-primary px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white flex items-center gap-2 shadow-lg shadow-blue-600/30"
          >
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
              mic
            </span>
            Simulate / Record Call
          </button>
        </div>
      </div>

      {/* Main Workspace Layout */}
      {userRole === 'advisor' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Call & Client Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Search & Tabs */}
            <div className="glass-card rounded-2xl p-4 border-white/10">
              <div className="relative mb-3">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#8c909f] text-lg">
                  search
                </span>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search calls, clients, or topics..."
                  className="w-full bg-[#0c1324] border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder:text-[#8c909f] focus:outline-none focus:ring-1 focus:ring-[#3b82f6]"
                />
              </div>

              <div className="flex border-b border-white/10 text-xs font-semibold text-[#c2c6d6]">
                <button
                  onClick={() => setActiveTab('calls')}
                  className={`flex-1 py-2 text-center border-b-2 ${
                    activeTab === 'calls'
                      ? 'border-[#3b82f6] text-[#adc6ff] font-bold'
                      : 'border-transparent hover:text-white'
                  }`}
                >
                  Recent Calls ({calls.length})
                </button>
                <button
                  onClick={() => setActiveTab('clients')}
                  className={`flex-1 py-2 text-center border-b-2 ${
                    activeTab === 'clients'
                      ? 'border-[#3b82f6] text-[#adc6ff] font-bold'
                      : 'border-transparent hover:text-white'
                  }`}
                >
                  Clients ({clients.length})
                </button>
              </div>
            </div>

            {/* Calls List */}
            {activeTab === 'calls' && (
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
                {filteredCalls.map((call) => (
                  <button
                    key={call.id}
                    onClick={() => setSelectedCallId(call.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all ${
                      selectedCallId === call.id
                        ? 'bg-[#191f31] border-[#3b82f6] shadow-lg shadow-blue-500/10'
                        : 'glass-card border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1.5">
                      <div className="font-bold text-sm text-white">{call.clientName}</div>
                      <span className="text-[10px] text-[#c2c6d6] bg-white/5 px-2 py-0.5 rounded-md">
                        {call.time}
                      </span>
                    </div>

                    <div className="text-xs text-[#adc6ff] font-medium line-clamp-1 mb-2">
                      {call.topic}
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-[#c2c6d6]">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm text-[#3b82f6]">schedule</span>
                        {call.duration}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        call.sentiment === 'Positive'
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : 'bg-amber-500/20 text-amber-300'
                      }`}>
                        {call.sentiment}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Clients List */}
            {activeTab === 'clients' && (
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
                {clients.map((client) => (
                  <div key={client.id} className="glass-card p-4 rounded-2xl border-white/5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={client.avatar}
                        alt={client.name}
                        className="w-10 h-10 rounded-full object-cover border border-white/10"
                      />
                      <div>
                        <div className="font-bold text-sm text-white">{client.name}</div>
                        <div className="text-xs text-[#c2c6d6]">{client.policyType}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-[#adc6ff]">{client.totalValue}</div>
                      <span className="text-[10px] bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded-md">
                        {client.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Center Column: Selected Call Deep Insights */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {selectedCall && (
              <div className="glass-card rounded-2xl p-6 border-white/10 space-y-6">
                {/* Header info */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    {selectedCall.clientAvatar && (
                      <img
                        src={selectedCall.clientAvatar}
                        alt={selectedCall.clientName}
                        className="w-12 h-12 rounded-full object-cover border border-white/15"
                      />
                    )}
                    <div>
                      <h2 className="font-display font-bold text-lg text-white">{selectedCall.clientName}</h2>
                      <div className="text-xs text-[#c2c6d6]">{selectedCall.clientPhone} • {selectedCall.date}</div>
                    </div>
                  </div>

                  <span className="bg-[#8b5cf6]/20 text-[#d0bcff] border border-[#8b5cf6]/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {selectedCall.dealStage}
                  </span>
                </div>

                {/* Audio Wave Player */}
                <div className="bg-[#0c1324] p-4 rounded-xl border border-white/10">
                  <div className="flex items-center justify-between text-xs text-[#c2c6d6] mb-2">
                    <span className="font-semibold text-white">{selectedCall.topic}</span>
                    <span>{selectedCall.duration}</span>
                  </div>
                  <div className="pulse-wave h-2 w-full rounded-full opacity-80" />
                </div>

                {/* AI Executive Summary */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#3b82f6] mb-2 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base">auto_awesome</span>
                    AI Conversation Summary
                  </h3>
                  <p className="text-sm text-[#dce1fb] leading-relaxed bg-[#0c1324]/60 p-4 rounded-xl border border-white/5">
                    {selectedCall.summary}
                  </p>
                </div>

                {/* Key Discussion Takeaways */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#c2c6d6] mb-2">
                    Key Client Highlights
                  </h3>
                  <ul className="space-y-2 text-xs text-[#c2c6d6]">
                    {selectedCall.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-white/5 p-2.5 rounded-lg border border-white/5">
                        <span className="text-[#3b82f6] font-bold">•</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp Auto-Draft Box */}
                <div className="bg-[#0f172a] p-4 rounded-xl border border-emerald-500/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">chat</span>
                      WhatsApp Follow-Up Message
                    </span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-semibold">
                      Auto-Generated
                    </span>
                  </div>

                  <p className="text-xs text-white leading-relaxed p-3 bg-[#070d1f] rounded-lg border border-white/5 font-sans mb-3">
                    {selectedCall.whatsappDraft}
                  </p>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(selectedCall.whatsappDraft);
                        alert('WhatsApp message copied!');
                      }}
                      className="flex-1 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition-colors flex justify-center items-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-sm">content_copy</span>
                      Copy Text
                    </button>
                    <a
                      href={`https://wa.me/${selectedCall.clientPhone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(selectedCall.whatsappDraft)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white transition-colors flex justify-center items-center gap-1.5 shadow-md shadow-emerald-600/30"
                    >
                      <span className="material-symbols-outlined text-sm">send</span>
                      Send on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Extracted Tasks & Action Plan */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="glass-card rounded-2xl p-5 border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-base text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#3b82f6]">check_box</span>
                  AI Extracted Tasks
                </h3>
                <span className="text-xs font-bold bg-[#3b82f6]/20 text-[#adc6ff] px-2 py-0.5 rounded-full">
                  {tasks.filter((t) => !t.completed).length} Pending
                </span>
              </div>

              {/* Task Add Form */}
              <form onSubmit={handleAddNewTaskSubmit} className="mb-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    placeholder="Add action item..."
                    className="flex-1 bg-[#0c1324] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-[#8c909f] focus:outline-none focus:ring-1 focus:ring-[#3b82f6]"
                  />
                  <button
                    type="submit"
                    className="btn-primary px-3 py-2 rounded-xl text-white font-bold text-xs"
                  >
                    +
                  </button>
                </div>
              </form>

              {/* Task Checklist */}
              <div className="space-y-2.5 max-h-[450px] overflow-y-auto">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => onToggleTask(task.id)}
                    className={`p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                      task.completed
                        ? 'bg-white/5 border-white/5 opacity-60 line-through'
                        : 'bg-[#0c1324] border-white/10 hover:border-[#3b82f6]/40'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <span className={`material-symbols-outlined text-sm mt-0.5 ${
                        task.completed ? 'text-emerald-400' : 'text-[#8c909f]'
                      }`}>
                        {task.completed ? 'check_circle' : 'radio_button_unchecked'}
                      </span>
                      <div className="flex-1">
                        <div className="text-white font-medium">{task.title}</div>
                        <div className="text-[10px] text-[#c2c6d6] mt-1 flex justify-between">
                          <span>{task.clientName}</span>
                          <span className="text-[#adc6ff]">{task.dueDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Admin Portal View */
        <div className="space-y-8">
          {/* Admin KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 rounded-2xl border-white/10">
              <div className="text-xs text-[#c2c6d6] font-semibold uppercase tracking-wider">
                Total Calls Processed
              </div>
              <div className="font-display font-extrabold text-3xl text-white mt-2">128 Calls</div>
              <div className="text-xs text-emerald-400 mt-2 font-medium">↑ +24% this week</div>
            </div>

            <div className="glass-card p-6 rounded-2xl border-white/10">
              <div className="text-xs text-[#c2c6d6] font-semibold uppercase tracking-wider">
                Active Advisors
              </div>
              <div className="font-display font-extrabold text-3xl text-[#adc6ff] mt-2">12 Users</div>
              <div className="text-xs text-[#c2c6d6] mt-2 font-medium">Growth Tier Active</div>
            </div>

            <div className="glass-card p-6 rounded-2xl border-white/10">
              <div className="text-xs text-[#c2c6d6] font-semibold uppercase tracking-wider">
                WhatsApp Sent
              </div>
              <div className="font-display font-extrabold text-3xl text-emerald-400 mt-2">184 / 200</div>
              <div className="text-xs text-emerald-400 mt-2 font-medium">92% Delivery Rate</div>
            </div>

            <div className="glass-card p-6 rounded-2xl border-white/10">
              <div className="text-xs text-[#c2c6d6] font-semibold uppercase tracking-wider">
                Policy Conversion Rate
              </div>
              <div className="font-display font-extrabold text-3xl text-[#d0bcff] mt-2">34.2%</div>
              <div className="text-xs text-purple-300 mt-2 font-medium">Top Advisor: Ramesh K.</div>
            </div>
          </div>

          {/* Team Performance Table */}
          <div className="glass-card rounded-2xl p-6 border-white/10">
            <h2 className="font-display font-bold text-xl text-white mb-6">
              Advisor Team Call Activity & Sentiment
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-[#c2c6d6] uppercase tracking-wider">
                    <th className="p-4">Advisor Name</th>
                    <th className="p-4">Calls Today</th>
                    <th className="p-4">Call Mins Used</th>
                    <th className="p-4">Avg Sentiment</th>
                    <th className="p-4">WhatsApp Sent</th>
                    <th className="p-4">CRM Sync Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-white font-medium">
                  <tr>
                    <td className="p-4 font-bold text-[#adc6ff]">Ramesh Kumar (You)</td>
                    <td className="p-4">8 calls</td>
                    <td className="p-4">42 mins</td>
                    <td className="p-4"><span className="text-emerald-400 font-bold">Positive (88%)</span></td>
                    <td className="p-4">12 messages</td>
                    <td className="p-4"><span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">Synced</span></td>
                  </tr>
                  <tr>
                    <td className="p-4">Ananya Sen</td>
                    <td className="p-4">12 calls</td>
                    <td className="p-4">68 mins</td>
                    <td className="p-4"><span className="text-emerald-400 font-bold">Positive (91%)</span></td>
                    <td className="p-4">15 messages</td>
                    <td className="p-4"><span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">Synced</span></td>
                  </tr>
                  <tr>
                    <td className="p-4">Suresh Nair</td>
                    <td className="p-4">5 calls</td>
                    <td className="p-4">29 mins</td>
                    <td className="p-4"><span className="text-amber-400 font-bold">Neutral (74%)</span></td>
                    <td className="p-4">6 messages</td>
                    <td className="p-4"><span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded font-bold">Pending</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Call Recorder Modal */}
      {showCallRecorder && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <LiveVoiceDemo
            isModal
            onClose={() => setShowCallRecorder(false)}
          />
        </div>
      )}
    </div>
  );
};
