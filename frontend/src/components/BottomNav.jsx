import React from 'react';
import { 
  LayoutDashboard, 
  Target, 
  Activity, 
  HeartPulse, 
  MessageSquareCode 
} from 'lucide-react';

export default function BottomNav({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'dashboard', label: 'Home', icon: LayoutDashboard },
    { id: 'lifegoal', label: 'Goals', icon: Target },
    { id: 'health', label: 'Health', icon: Activity },
    { id: 'pulse', label: 'Pulse', icon: HeartPulse },
    { id: 'assistant', label: 'AI Chat', icon: MessageSquareCode }
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0b1329]/95 backdrop-blur-xl border-t border-slate-800 px-3 py-2">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-xl transition-all ${
                isActive 
                  ? 'text-orange-400 font-bold' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-orange-400' : 'text-slate-400'}`} />
              <span className="text-[10px]">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
