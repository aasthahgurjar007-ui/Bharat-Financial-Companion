import React, { useState } from 'react';
import { 
  HeartPulse, 
  AlertTriangle, 
  ShieldCheck, 
  TrendingDown, 
  CheckCircle, 
  Zap 
} from 'lucide-react';

export default function FinancialPulse({ customer }) {
  const pulse = customer.pulse;
  const [activeStageIndex, setActiveStageIndex] = useState(2);

  const stages = pulse.stages;

  const getStageColor = (status, isCurrent) => {
    if (isCurrent) return 'border-orange-500 bg-orange-500/20 text-orange-400 ring-2 ring-orange-500/50';
    if (status === 'completed') return 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400';
    if (status === 'active') return 'border-amber-500/50 bg-amber-500/10 text-amber-400';
    return 'border-slate-800 bg-slate-900/60 text-slate-500';
  };

  return (
    <div className="space-y-6">
      {/* Module Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Financial Pulse & Early Stress Detection
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">
              Module 08
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Detecting cashflow friction early to provide supportive guidance before late fees or defaults occur.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
          <HeartPulse className="w-4 h-4 text-rose-400 animate-pulse" />
          <span>Real-time Behavior Monitor</span>
        </div>
      </div>

      {/* Main Alert Card */}
      <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-rose-950/20 to-slate-900 border border-rose-500/30 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                  {pulse.alertType}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
              </div>
              <h3 className="text-lg font-bold text-white mt-0.5">
                {pulse.alertTitle}
              </h3>
            </div>
          </div>

          <div className="text-xs text-slate-400 bg-slate-950/80 px-3 py-1.5 rounded-xl border border-slate-800">
            Trigger: <span className="text-white font-semibold">Expense Discrepancy Algorithm</span>
          </div>
        </div>

        <p className="text-sm text-slate-300 mt-4 leading-relaxed">
          {pulse.alertDescription}
        </p>

        {/* Protective Action Recommendation */}
        <div className="mt-4 p-4 rounded-2xl bg-slate-950/90 border border-slate-800/80 flex items-start gap-3">
          <div className="p-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 shrink-0 mt-0.5">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-orange-300 uppercase tracking-wide block">
              Suggested Protective Action:
            </span>
            <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
              {pulse.recommendationNudge}
            </p>
          </div>
        </div>
      </div>

      {/* 5-Stage Stress Evolution Timeline */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-base font-bold text-white">
              Stress Detection & Preventive Intervention Journey
            </h3>
            <p className="text-xs text-slate-400">
              How the companion intervenes before distress grows vs. traditional bank delayed reaction
            </p>
          </div>
          <span className="text-xs font-medium text-slate-400">
            Stage {activeStageIndex + 1} of {stages.length}
          </span>
        </div>

        {/* Stage Timeline Stepper */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {stages.map((stage, idx) => {
            const isCurrent = activeStageIndex === idx;
            const stageClass = getStageColor(stage.status, isCurrent);

            return (
              <button
                key={idx}
                onClick={() => setActiveStageIndex(idx)}
                className={`text-left p-4 rounded-2xl border transition-all flex flex-col justify-between ${stageClass}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {stage.label}
                    </span>
                    {stage.status === 'completed' && <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />}
                    {stage.status === 'active' && <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />}
                    {stage.status === 'next' && <Zap className="w-3.5 h-3.5 text-orange-400" />}
                  </div>

                  <div className="text-xs font-bold text-white mb-1">
                    {stage.name}
                  </div>
                  <p className="text-[11px] text-slate-300 line-clamp-3 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/80 text-[10px] text-slate-400">
                  {idx === 0 && 'Stable Period'}
                  {idx === 1 && 'Spend Increase'}
                  {idx === 2 && 'Buffer Squeezed'}
                  {idx === 3 && 'AI Alert Fires'}
                  {idx === 4 && 'Safe Recovery'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Comparison: Traditional Banking vs Bharat Financial Companion */}
        <div className="mt-8 pt-6 border-t border-slate-800">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
            Paradigm Shift: Early Detection vs. Traditional Reaction
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-900/30 text-xs">
              <div className="flex items-center gap-2 font-bold text-rose-400 mb-2">
                <TrendingDown className="w-4 h-4" />
                <span>Traditional Banking Model (Lagging & Punitive)</span>
              </div>
              <ul className="space-y-1.5 text-slate-400 text-[11px]">
                <li>• No awareness of cashflow stress until customer misses an EMI payment.</li>
                <li>• Levies bounce charges (₹500 + GST) and penal interest, compounding stress.</li>
                <li>• Triggers aggressive recovery calls, damaging customer relationship.</li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-900/30 text-xs">
              <div className="flex items-center gap-2 font-bold text-emerald-400 mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Bharat Financial Companion (Proactive & Supportive)</span>
              </div>
              <ul className="space-y-1.5 text-slate-300 text-[11px]">
                <li>• Detects 18% expense increase 45 days before any EMI is compromised.</li>
                <li>• Suggests pausing discretionary outflows to preserve scooter savings buffer.</li>
                <li>• Recommends goal-linked RD to prevent high debt burden entirely.</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
