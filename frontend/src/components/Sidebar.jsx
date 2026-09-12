import React from 'react';
import { 
  LayoutDashboard, 
  UserCheck, 
  Activity, 
  Target, 
  HeartPulse, 
  MessageSquareCode, 
  ShieldCheck,
  MapPin,
  TrendingUp
} from 'lucide-react';
import { CUSTOMER_PROFILES } from '../data/mockData';

export default function Sidebar({ 
  activeTab, 
  setActiveTab, 
  currentCustomerKey 
}) {
  const customer = CUSTOMER_PROFILES[currentCustomerKey] || CUSTOMER_PROFILES.rahul ;

  const navItems = [
    { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
    { id: 'lifegoal', label: 'Life Goal Mode', icon: Target, badge: 'Hero' },
    { id: 'profile', label: 'Financial Profile', icon: UserCheck },
    { id: 'health', label: 'Health Score', icon: Activity },
    { id: 'pulse', label: 'Financial Pulse', icon: HeartPulse, badge: 'Live' },
    { id: 'assistant', label: 'Vernacular AI', icon: MessageSquareCode },
    { id: 'responsible', label: 'Trust & Ethics', icon: ShieldCheck }
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 border-r border-slate-800/80 bg-[#080d1f] p-4 shrink-0 min-h-[calc(100vh-4rem)]">
      {/* Active Customer Profile Card */}
      <div className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800/90 border border-slate-700/60 shadow-lg mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/30 text-2xl">
            {customer.avatar}
          </div>
          <div className="overflow-hidden">
            <h3 className="text-sm font-bold text-white truncate">{customer.name}</h3>
            <p className="text-xs text-orange-400 font-medium truncate">{customer.role}</p>
            <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-0.5">
              <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
              <span className="truncate">{customer.location}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-700/50">
          <div className="bg-slate-950/60 p-2 rounded-xl border border-slate-800">
            <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">CIBIL</div>
            <div className="text-sm font-bold text-emerald-400 mt-0.5">{customer.cibilScore}</div>
          </div>
          <div className="bg-slate-950/60 p-2 rounded-xl border border-slate-800">
            <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">AI Score</div>
            <div className="text-sm font-bold text-amber-400 mt-0.5">{customer.healthScore}/100</div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="space-y-1.5 flex-1">
        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
          Navigation Modules
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-orange-500/20 to-amber-500/10 text-orange-400 border border-orange-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon className={`w-4 h-4 ${isActive ? 'text-orange-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase ${
                  item.badge === 'Hero'
                    ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                    : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Quick Philosophy Footer */}
      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 mt-4">
        <div className="flex items-center gap-1.5 font-semibold text-slate-300 mb-1">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
          <span>Bharat Promise</span>
        </div>
        <p className="text-[10px] text-slate-400 leading-relaxed">
          Guiding financial dignity. Never peddling predatory loans to meet bank targets.
        </p>
      </div>
    </aside>
  );
}
