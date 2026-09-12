import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';
import WelcomeBanner from './components/WelcomeBanner';
import FinancialProfile from './components/FinancialProfile';
import FinancialHealth from './components/FinancialHealth';
import LifeGoalCard from './components/LifeGoalCard';
import FinancialPulse from './components/FinancialPulse';
import VernacularChat from './components/VernacularChat';
import ResponsibleAI from './components/ResponsibleAI';
import GoalSimulatorModal from './components/GoalSimulatorModal';
import { CUSTOMER_PROFILES } from './data/mockData';
import { MessageSquareCode, Sparkles, ArrowRight } from 'lucide-react';

import Login from "./pages/Login";

export default function App() {
  const [currentCustomerKey, setCurrentCustomerKey] = useState('meena');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [language, setLanguage] = useState('en');
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const customer =
  CUSTOMER_PROFILES?.[currentCustomerKey] ||
  CUSTOMER_PROFILES?.meena;

  console.log("Current Customer Key:", currentCustomerKey);
console.log("Current Customer:", customer);

  if (!loggedIn) {
  return (
    <Login
      onLogin={(profileKey) => {
        setCurrentCustomerKey(profileKey);
        setLoggedIn(true);
      }}
    />
  );
}

  return (
    <div className="min-h-screen bg-[#070b19] text-slate-100 flex flex-col font-sans">
      
      {/* Top Navbar */}
      <Navbar
        currentCustomerKey={currentCustomerKey}
        setCurrentCustomerKey={setCurrentCustomerKey}
        language={language}
        setLanguage={setLanguage}
        onOpenSimulator={() => setIsSimulatorOpen(true)}
      />

      {/* Main App Body */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto pb-20 lg:pb-10">
        
        {/* Desktop Sidebar */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          currentCustomerKey={currentCustomerKey}
        />

        {/* Dynamic Content Panel */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8 overflow-y-auto">
          
          {/* Tab: Dashboard Overview (Hero Aggregation) */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* Hero Philosophy Banner with 5-stage pipeline */}
              <WelcomeBanner
                customer={customer}
                onExploreGoal={() => setActiveTab('lifegoal')}
              />

              {/* Life Goal Mode Feature (Core Highlight) */}
              <LifeGoalCard
                customer={customer}
                onOpenSimulator={() => setIsSimulatorOpen(true)}
              />

              {/* Financial Health & Resilience */}
              <FinancialHealth
                customer={customer}
              />

              {/* Financial Profile & Cashflow */}
              <FinancialProfile
                customer={customer}
              />

              {/* Financial Pulse (Early Stress Detection) */}
              <FinancialPulse
                customer={customer}
              />

              {/* Quick Vernacular Assistant Access Banner */}
              <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950/40 border border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                    <MessageSquareCode className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Have questions about your finances?</h4>
                    <p className="text-xs text-slate-400">Chat with Bharat Saathi AI in Hindi, English, or Hinglish with audio voice readout.</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTab('assistant')}
                  className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition-all shadow-md shrink-0 flex items-center gap-1.5"
                >
                  <span>Open AI Assistant</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

          {/* Tab: Life Goal Mode */}
          {activeTab === 'lifegoal' && (
            <div className="animate-fadeIn">
              <LifeGoalCard
                customer={customer}
                onOpenSimulator={() => setIsSimulatorOpen(true)}
              />
            </div>
          )}

          {/* Tab: Financial Profile */}
          {activeTab === 'profile' && (
            <div className="animate-fadeIn">
              <FinancialProfile
                customer={customer}
              />
            </div>
          )}

          {/* Tab: Financial Health */}
          {activeTab === 'health' && (
            <div className="animate-fadeIn">
              <FinancialHealth
                customer={customer}
              />
            </div>
          )}

          {/* Tab: Financial Pulse */}
          {activeTab === 'pulse' && (
            <div className="animate-fadeIn">
              <FinancialPulse
                customer={customer}
              />
            </div>
          )}

          {/* Tab: Vernacular Assistant */}
          {activeTab === 'assistant' && (
            <div className="animate-fadeIn">
              <VernacularChat
                customer={customer}
                language={language}
                setLanguage={setLanguage}
              />
            </div>
          )}

          {/* Tab: Responsible AI */}
          {activeTab === 'responsible' && (
            <div className="animate-fadeIn">
              <ResponsibleAI
                customer={customer}
              />
            </div>
          )}

        </main>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <BottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* What-If Goal Simulator Modal */}
      <GoalSimulatorModal
        isOpen={isSimulatorOpen}
        onClose={() => setIsSimulatorOpen(false)}
        customer={customer}
      />

    </div>
  );
}
