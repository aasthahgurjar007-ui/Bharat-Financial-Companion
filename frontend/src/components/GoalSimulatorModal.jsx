import React, { useState } from 'react';
import { 
  X, 
  AlertTriangle, 
  Calculator 
} from 'lucide-react';

export default function GoalSimulatorModal({ isOpen, onClose, customer }) {
  if (!isOpen) return null;

  const defaultGoal = customer.activeGoal;
  const [targetAmount, setTargetAmount] = useState(defaultGoal.targetAmount);
  const [downPayment, setDownPayment] = useState(20000);
  const [tenureMonths, setTenureMonths] = useState(24);
  const interestRateAnnual = 10.5;

  const loanPrincipal = Math.max(0, targetAmount - downPayment);
  const monthlyInterestRate = interestRateAnnual / (12 * 100);
  
  let calculatedEMI = 0;
  if (loanPrincipal > 0 && tenureMonths > 0) {
    calculatedEMI = Math.round(
      (loanPrincipal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureMonths)) /
      (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1)
    );
  }

  const safeSurplus = customer.netSurplus;
  const remainingSurplus = safeSurplus - calculatedEMI;
  const dtiRatio = ((customer.existingEMI + calculatedEMI) / customer.income) * 100;

  let dynamicScore = 95;
  let feasibilityLabel = 'High Feasibility';
  let feasibilityBadgeColor = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';

  if (calculatedEMI > safeSurplus * 1.2 || dtiRatio > 40) {
    dynamicScore = 38;
    feasibilityLabel = 'High Risk / Low Feasibility';
    feasibilityBadgeColor = 'text-rose-400 bg-rose-500/10 border-rose-500/30';
  } else if (calculatedEMI > safeSurplus || dtiRatio > 30) {
    dynamicScore = 62;
    feasibilityLabel = 'Moderate Feasibility';
    feasibilityBadgeColor = 'text-amber-400 bg-amber-500/10 border-amber-500/30';
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 sm:p-8 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">What-If Life Goal Simulator</h3>
              <p className="text-xs text-slate-400">Simulate custom down payment, target amounts & tenures for {customer.name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sliders Area */}
        <div className="py-6 space-y-5">
          
          {/* Slider 1: Total Cost */}
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1.5">
              <span className="text-slate-300">Goal Target Cost</span>
              <span className="text-orange-400 font-bold text-sm">₹{targetAmount.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min={30000}
              max={200000}
              step={5000}
              value={targetAmount}
              onChange={(e) => setTargetAmount(Number(e.target.value))}
              className="w-full accent-orange-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>₹30,000</span>
              <span>₹2,00,000</span>
            </div>
          </div>

          {/* Slider 2: Down Payment */}
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1.5">
              <span className="text-slate-300">Upfront Down Payment</span>
              <span className="text-emerald-400 font-bold text-sm">₹{downPayment.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min={0}
              max={Math.min(targetAmount, 80000)}
              step={2000}
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>₹0 (100% Loan)</span>
              <span>₹{Math.min(targetAmount, 80000).toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Slider 3: Loan Tenure */}
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1.5">
              <span className="text-slate-300">Repayment Tenure</span>
              <span className="text-indigo-400 font-bold text-sm">{tenureMonths} Months</span>
            </div>
            <input
              type="range"
              min={6}
              max={48}
              step={6}
              value={tenureMonths}
              onChange={(e) => setTenureMonths(Number(e.target.value))}
              className="w-full accent-indigo-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>6 Months</span>
              <span>48 Months</span>
            </div>
          </div>

        </div>

        {/* Real-time Results Dashboard */}
        <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
          
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase font-semibold">Net Loan Amount</span>
              <span className="text-base font-extrabold text-white mt-1 block">₹{loanPrincipal.toLocaleString('en-IN')}</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase font-semibold">Estimated Monthly EMI</span>
              <span className="text-base font-extrabold text-orange-400 mt-1 block">₹{calculatedEMI.toLocaleString('en-IN')}</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase font-semibold">Remaining Surplus</span>
              <span className={`text-base font-extrabold mt-1 block ${remainingSurplus >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {remainingSurplus >= 0 ? `+₹${remainingSurplus.toLocaleString('en-IN')}` : `-₹${Math.abs(remainingSurplus).toLocaleString('en-IN')}`}
              </span>
            </div>
          </div>

          {/* Feasibility Verdict */}
          <div className="flex items-center justify-between p-3.5 rounded-xl border bg-slate-900/60">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-300">Simulated Feasibility:</span>
              <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full uppercase border ${feasibilityBadgeColor}`}>
                {feasibilityLabel} ({dynamicScore}%)
              </span>
            </div>

            <span className="text-xs text-slate-400">
              DTI: <strong className="text-white">{dtiRatio.toFixed(1)}%</strong>
            </span>
          </div>

          {calculatedEMI > safeSurplus && (
            <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>
                <strong>Warning:</strong> The simulated monthly EMI (₹{calculatedEMI.toLocaleString('en-IN')}) exceeds {customer.name}'s safe monthly surplus (₹{safeSurplus.toLocaleString('en-IN')}). We strongly advise increasing the down payment or extending tenure to maintain financial health.
              </span>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all"
          >
            Close Simulator
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold shadow-md hover:from-orange-600 hover:to-amber-600 transition-all"
          >
            Apply This Simulation
          </button>
        </div>

      </div>
    </div>
  );
}
