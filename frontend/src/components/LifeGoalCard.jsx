import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  ArrowUpRight
} from 'lucide-react';

export default function LifeGoalCard({ customer, onOpenSimulator }) {
  const goal = customer.activeGoal;
  const [selectedOptionId, setSelectedOptionId] = useState('option-a');
  const [showExplanation, setShowExplanation] = useState(true);
  const [actionSuccessMessage, setActionSuccessMessage] = useState(null);

  const selectedOption = goal.options.find(opt => opt.id === selectedOptionId) || goal.options[0];

  const handleActionClick = (option) => {
    setActionSuccessMessage(`✓ Selected: ${option.title}. In automated test mode: Plan pre-configured and ready for activation!`);
    setTimeout(() => {
      setActionSuccessMessage(null);
    }, 6000);
  };

  return (
    <div className="space-y-6">
      {/* Module Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Life Goal Mode & Explainable Recommendations
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20">
              Module 05 & 06
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Bridging real human milestones with responsible AI financing pathways instead of high-risk debt pushes.
          </p>
        </div>

        <button
          onClick={onOpenSimulator}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-slate-700 transition-all"
        >
          <span>Customize Goal In Simulator</span>
          <ArrowUpRight className="w-4 h-4 text-orange-400" />
        </button>
      </div>

      {/* Hero Goal Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-[#131c38] to-[#0a1126] border border-orange-500/30 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Goal Title & Target Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-3xl shrink-0">
              {goal.icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">{goal.category}</span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-slate-400">Target: {goal.targetMonths} Months</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                {goal.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                For {customer.name} ({customer.role}, {customer.location})
              </p>
            </div>
          </div>

          <div className="flex items-baseline md:items-end flex-col">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Required Target</span>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-0.5">
              ₹{goal.targetAmount.toLocaleString('en-IN')}
            </div>
            <span className="text-[11px] text-slate-400">Current earmarked: ₹{goal.currentAllocated.toLocaleString('en-IN')}</span>
          </div>
        </div>

        {/* Feasibility Assessment Strip */}
        <div className="py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-base font-bold text-amber-300">
                    AI Feasibility Assessment: {goal.feasibility} ({goal.feasibilityScore}%)
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 uppercase">
                    Requires Structuring
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                  {goal.feasibilityReason}
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 bg-slate-950/40 px-3 py-2 rounded-xl border border-amber-500/30 shrink-0 transition-all"
            >
              <span>{showExplanation ? 'Hide AI Reasoning' : 'Explain Why Moderate?'}</span>
              {showExplanation ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Explainable AI Deep-Dive Accordion (Why This? Why Now? Alternatives) */}
          {showExplanation && (
            <div className="mt-4 p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3.5 animate-fadeIn">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span>Explainable AI Diagnostic (Non-Black Box Reasoning)</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs font-bold text-orange-400 mb-1">1. Why This Recommendation?</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {goal.whyThisExplanation.whyThis}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs font-bold text-emerald-400 mb-1">2. Why Now? (Timing Match)</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {goal.whyThisExplanation.whyNow}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs font-bold text-rose-400 mb-1">3. Alternatives Rejected</div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {goal.whyThisExplanation.alternativesConsidered}
                  </p>
                </div>

              </div>
            </div>
          )}
        </div>

        {/* 3 Actionable Options (Next Best Actions) */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span>3 AI-Tailored Pathways for {customer.name.split(' ')[0]}</span>
                <span className="text-xs font-normal text-slate-400">(Select one to inspect financial outcome)</span>
              </h4>
            </div>
            <span className="text-xs text-orange-400 font-semibold">Responsible Next Best Action</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {goal.options.map((opt) => {
              const isSelected = selectedOptionId === opt.id;
              return (
                <div
                  key={opt.id}
                  onClick={() => setSelectedOptionId(opt.id)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-b from-slate-800 to-slate-900 border-orange-500 shadow-xl ring-2 ring-orange-500/40 glow-saffron'
                      : 'bg-slate-950/60 border-slate-800/90 hover:bg-slate-900/70 hover:border-slate-700'
                  }`}
                >
                  <div>
                    {/* Badge */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase ${
                        opt.isRecommended
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}>
                        {opt.badge}
                      </span>
                      <span className={`text-xs font-bold ${opt.postFeasibilityScore >= 90 ? 'text-emerald-400' : 'text-amber-400'}`}>
                        {opt.postFeasibilityScore}% Safe
                      </span>
                    </div>

                    <h5 className="text-sm font-bold text-white mb-1">
                      {opt.title}
                    </h5>
                    <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                      {opt.headline}
                    </p>

                    {/* Numeric Summary Pill */}
                    <div className="grid grid-cols-2 gap-2 bg-slate-900 p-3 rounded-xl border border-slate-800 text-xs mb-4">
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase font-semibold">Down Payment</span>
                        <span className="text-white font-bold">₹{opt.downPayment.toLocaleString('en-IN')}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase font-semibold">Future EMI</span>
                        <span className="text-emerald-400 font-bold">₹{typeof opt.futureEMI === 'number' ? opt.futureEMI.toLocaleString('en-IN') : opt.futureEMI}/mo</span>
                      </div>
                    </div>

                    {/* Key Benefits List */}
                    <div className="space-y-1.5 mb-4">
                      {opt.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-300 leading-tight">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleActionClick(opt);
                    }}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      opt.isRecommended
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-md'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                    }`}
                  >
                    <span>{opt.actionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Feedback message banner upon action click */}
          {actionSuccessMessage && (
            <div className="mt-4 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{actionSuccessMessage}</span>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
