import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Database, 
  Cpu, 
  Target, 
  Eye, 
  CheckCircle2, 
  Info 
} from 'lucide-react';
import { PHILOSOPHY_PIPELINE } from '../data/mockData';

export default function WelcomeBanner({ customer, onExploreGoal }) {
  if (!customer) {
    return null;
  }
  
  const [activeStep, setActiveStep] = useState(0);

  const iconMap = {
    Database: Database,
    Cpu: Cpu,
    Target: Target,
    Eye: Eye,
    CheckCircle2: CheckCircle2
  };

  const activeStepDetails = [
    {
      title: 'Real Inflows & Uncommitted Reserves',
      details: `${customer.name}'s verified monthly income is ₹${customer.income.toLocaleString('en-IN')}, with ₹${customer.existingEMI.toLocaleString('en-IN')} current EMI and a ₹${customer.netSurplus.toLocaleString('en-IN')} net safe monthly surplus.`
    },
    {
      title: 'Context-Aware AI Intelligence',
      details: `Instead of judging merely by credit score (${customer.cibilScore}), AI assesses cashflow volatility, seasonal surges, and emergency buffer (${customer.emergencyMonths} months).`
    },
    {
      title: 'Meaningful Life Milestone',
      details: `Identified goal: ${customer.activeGoal.title}. Target: ₹${customer.activeGoal.targetAmount.toLocaleString('en-IN')} within ${customer.activeGoal.targetMonths} months.`
    },
    {
      title: 'Transparent Explainability',
      details: `Rated ${customer.activeGoal.feasibility}: Evaluates safe debt-to-income and prevents distress before offering tailored options.`
    },
    {
      title: 'Proactive Wealth-Building Pathways',
      details: `Next Best Action: 3 clear choices presented with zero aggressive push, prioritizing financial resilience and savings.`
    }
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-[#0d1633] border border-slate-700/60 p-6 sm:p-8 shadow-2xl">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Top Tag & Hero Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-6 border-b border-slate-800/80">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-wide uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>HackOut'26 Ideation Paradigm</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Understand the customer. <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
                Guide the customer.
              </span>{' '}
              Don’t just sell to the customer.
            </h1>

            <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
              Transforming traditional product-push banking into an empathetic, Vernacular AI co-pilot designed for the unique cashflows and ambitions of Bharat.
            </p>
          </div>

          {/* Quick CTA to Life Goal */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <button
              onClick={onExploreGoal}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm shadow-lg glow-saffron transition-all"
            >
              <span>Explore {customer.name.split(' ')[0]}'s Goal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="text-center lg:text-right text-xs text-slate-400">
              Active Persona: <span className="font-semibold text-slate-200">{customer.name}</span>
            </div>
          </div>
        </div>

        {/* The 5-Stage UX Architecture Pipeline */}
        <div className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <span>The 5-Stage Companion Journey</span>
              <span className="text-slate-500 font-normal text-[11px]">(Click any step to inspect AI context)</span>
            </span>
            <span className="text-xs text-orange-400 font-medium">Step {activeStep + 1} of 5</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
            {PHILOSOPHY_PIPELINE.map((item, index) => {
              const Icon = iconMap[item.icon];
              const isSelected = activeStep === index;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStep(index)}
                  className={`text-left p-3 rounded-2xl border transition-all ${
                    isSelected
                      ? 'bg-gradient-to-b from-slate-800 to-slate-900 border-orange-500/50 shadow-md ring-1 ring-orange-500/30'
                      : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[11px] font-extrabold ${isSelected ? 'text-orange-400' : 'text-slate-500'}`}>
                      {item.step}
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-400'}`} />
                  </div>
                  <div className="text-xs font-bold text-slate-100 truncate">{item.title}</div>
                  <div className="text-[10px] text-slate-400 line-clamp-2 mt-0.5 leading-snug">{item.desc}</div>
                </button>
              );
            })}
          </div>

          {/* Interactive Pipeline Inspector Card */}
          <div className="mt-3.5 p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3">
            <div className="p-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 shrink-0 mt-0.5">
              <Info className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <span className="font-bold text-orange-300">
                Pipeline Step {PHILOSOPHY_PIPELINE[activeStep].step} Context: {activeStepDetails[activeStep].title} —{' '}
              </span>
              <span className="text-slate-300 font-medium">
                {activeStepDetails[activeStep].details}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
