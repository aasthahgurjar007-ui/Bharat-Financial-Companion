import React from 'react';
import { 
  Activity, 
  ShieldCheck, 
  Info
} from 'lucide-react';

export default function FinancialHealth({ customer }) {
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (customer.healthScore / 100) * circumference;

  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      case 'good':
        return 'text-blue-400 bg-blue-500/10 border-blue-500/30';
      case 'warning':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/30';
      case 'danger':
      default:
        return 'text-rose-400 bg-rose-500/10 border-rose-500/30';
    }
  };

  const getProgressBarColor = (status) => {
    switch (status) {
      case 'excellent':
        return 'bg-emerald-500';
      case 'good':
        return 'bg-blue-500';
      case 'warning':
        return 'bg-amber-500';
      case 'danger':
      default:
        return 'bg-rose-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              AI Financial Health & Resilience Score
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
              Module 04
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Dynamic, multi-dimensional assessment evaluating actual cash cushion, debt buffer, and spending resilience.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Non-Bureau Context Aware</span>
        </div>
      </div>

      {/* Top Hero Gauge Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0d152e] to-slate-900 border border-slate-800 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Radial Progress Score */}
          <div className="flex items-center gap-6">
            <div className="relative flex items-center justify-center">
              <svg className="w-36 h-36 -rotate-90 transform">
                {/* Background Ring */}
                <circle
                  cx="72"
                  cy="72"
                  r={radius}
                  className="stroke-slate-800"
                  strokeWidth="10"
                  fill="transparent"
                />
                {/* Score Progress Ring */}
                <circle
                  cx="72"
                  cy="72"
                  r={radius}
                  stroke={customer.healthColor}
                  strokeWidth="10"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>

              {/* Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-extrabold text-white tracking-tight">
                  {customer.healthScore}
                </span>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  out of 100
                </span>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-2">
                <Activity className="w-3.5 h-3.5" />
                <span>Overall Status: {customer.healthScore > 75 ? 'Strong' : customer.healthScore > 60 ? 'Moderate' : 'Caution'}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {customer.healthRating}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg mt-1 leading-relaxed">
                {customer.name} exhibits exceptional loan discipline and consistent daily merchant turnover, but low emergency liquidity runway necessitates smart goal-backed financing rather than full-debt leverage.
              </p>
            </div>
          </div>

          {/* Quick Summary Highlights */}
          <div className="w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
            <div className="bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800 text-xs">
              <div className="text-slate-400 font-medium">Safe EMI Cap</div>
              <div className="text-base font-bold text-emerald-400 mt-0.5">₹{customer.netSurplus.toLocaleString('en-IN')} / mo</div>
            </div>
            <div className="bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800 text-xs">
              <div className="text-slate-400 font-medium">Liquidity Buffer</div>
              <div className="text-base font-bold text-amber-400 mt-0.5">{customer.emergencyMonths} Months ({customer.emergencyReserve > 0 ? `₹${customer.emergencyReserve.toLocaleString('en-IN')}` : 'Low'})</div>
            </div>
          </div>

        </div>
      </div>

      {/* 6 Sub-Pillars Detailed Cards */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <span>The 6 Resilience Pillars</span>
            <span className="text-xs font-normal text-slate-400">(Deep dive into contextual factors)</span>
          </h3>
          <span className="text-xs text-slate-400">Holistic AI Model</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {customer.pillars.map((pillar) => {
            const statusClass = getStatusColor(pillar.status);
            const barClass = getProgressBarColor(pillar.status);

            return (
              <div
                key={pillar.name}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-white truncate">{pillar.name}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border uppercase ${statusClass}`}>
                      {pillar.status}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between mt-3 mb-1">
                    <span className="text-xl font-extrabold text-white">{pillar.value}</span>
                    <span className="text-xs font-semibold text-slate-400">{pillar.score}/100</span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2 mb-3">
                    <div
                      className={`h-full rounded-full ${barClass}`}
                      style={{ width: `${pillar.score}%` }}
                    />
                  </div>

                  <div className="text-[11px] text-slate-400">
                    <span className="text-slate-500 font-medium">Benchmark:</span> {pillar.benchmark}
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-800/80 text-[11px] text-slate-300 bg-slate-950/40 p-2.5 rounded-xl flex items-start gap-2">
                  <Info className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{pillar.tip}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
