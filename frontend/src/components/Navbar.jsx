import React from 'react';
import { 
  Sparkles, 
  Languages, 
  ShieldCheck, 
  Bell, 
  SlidersHorizontal,
  Volume2
} from 'lucide-react';
import { CUSTOMER_PROFILES } from '../data/mockData';

export default function Navbar({ 
  currentCustomerKey, 
  setCurrentCustomerKey, 
  language, 
  setLanguage,
  onOpenSimulator
}) {
  const customer = CUSTOMER_PROFILES[currentCustomerKey];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#0b1329]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Brand Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 via-amber-500 to-emerald-600 shadow-md glow-saffron">
              <span className="font-extrabold text-white text-lg tracking-tight">भ</span>
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#0b1329]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                  BHARAT <span className="text-orange-400">FINANCIAL</span> COMPANION
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  HackOut'26
                </span>
              </div>
              <p className="hidden sm:block text-[11px] text-slate-400 font-medium">
                AI-Powered Hyper-Personalized Banking • <span className="text-emerald-400">Understand, Guide, Protect</span>
              </p>
            </div>
          </div>

          {/* Right Actions: Persona Switcher, Language & Simulator */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Persona Switcher Buttons */}
            <div className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800">
              {Object.keys(CUSTOMER_PROFILES).map((key) => {
                const c = CUSTOMER_PROFILES[key];
                const isActive = currentCustomerKey === key;
                return (
                  <button
                    key={key}
                    onClick={() => setCurrentCustomerKey(key)}
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      isActive 
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-sm' 
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                    }`}
                    title={`${c.name} - ${c.role}`}
                  >
                    <span>{c.avatar}</span>
                    <span className="hidden md:inline">{c.name.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Language Switcher */}
            <div className="flex items-center bg-slate-900/80 p-1 rounded-xl border border-slate-800 text-xs">
              <Languages className="w-3.5 h-3.5 text-slate-400 ml-1.5 mr-1" />
              {[
                { id: 'en', label: 'EN' },
                { id: 'hi', label: 'हिंदी' },
                { id: 'hinglish', label: 'Hinglish' }
              ].map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setLanguage(lang.id)}
                  className={`px-2 py-1 rounded-md font-medium transition-all ${
                    language === lang.id
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Goal Simulator Trigger */}
            <button
              onClick={onOpenSimulator}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600/30 border border-indigo-500/30 text-xs font-semibold transition-all glow-indigo"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden lg:inline">What-If Simulator</span>
            </button>

          </div>
        </div>
      </div>
    </header>
  );
}
