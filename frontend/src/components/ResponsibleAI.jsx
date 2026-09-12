import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  Scale 
} from 'lucide-react';

export default function ResponsibleAI({ customer }) {
  const [consentOptions, setConsentOptions] = useState({
    upiAggregator: true,
    gstN: true,
    predictivePulse: true,
    thirdPartySharing: false
  });

  const toggleConsent = (key) => {
    if (key === 'thirdPartySharing') {
      alert('Responsible Banking Policy: Third-party commercial sharing is permanently disabled in Bharat Financial Companion.');
      return;
    }
    setConsentOptions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6">
      {/* Module Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Responsible AI, Trust & Governance
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              Module 10
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Ethical frameworks ensuring AI serves as a fiduciary protector rather than a predatory debt-selling engine.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
          <Scale className="w-4 h-4 text-indigo-400" />
          <span>Fiduciary Architecture</span>
        </div>
      </div>

      {/* 4 Core Pillars of Trust */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Pillar 1 */}
        <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">1. Non-Predatory Guarantee</h3>
              <p className="text-[11px] text-orange-400">Never pushes loans for bank sales targets</p>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            If a customer cannot safely afford a loan without breaching safe Debt-to-Income (35%) or depleting emergency reserves, the companion strictly prevents instant disbursement and instead structures a goal-linked savings pathway.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">2. 100% Explainable Recommendations</h3>
              <p className="text-[11px] text-emerald-400">No mysterious black-box rejections</p>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Every rating and recommendation is backed by clear human math: "Why This? Why Now? What Alternatives Were Rejected?" displayed openly in the user's preferred native language.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">3. RBI Account Aggregator Consent</h3>
              <p className="text-[11px] text-blue-400">User retains sovereign data ownership</p>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Financial telemetry is fetched strictly with granular, time-bound consent. Customers can revoke data sharing with one click, and their financial profile is never sold to third-party telemarketers.
          </p>
        </div>

        {/* Pillar 4 */}
        <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">4. Supportive Stress Interventions</h3>
              <p className="text-[11px] text-purple-400">Pre-bounce assistance vs punitive fines</p>
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            When financial stress is detected, the system does not impose penal fees or dispatch recovery agents. It proactively offers flexible tenor realignment or micro-budget buffers to protect the borrower.
          </p>
        </div>

      </div>

      {/* User Data Consent & Privacy Controls Box */}
      <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-white">Data Consent & Privacy Controls</h3>
            <p className="text-xs text-slate-400">Manage Account Aggregator data sharing permissions for {customer.name}</p>
          </div>
          <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
            Aadhaar / AA Compliant
          </span>
        </div>

        <div className="space-y-3">
          
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
            <div>
              <div className="text-xs font-bold text-white">UPI & Merchant Transaction Telemetry</div>
              <div className="text-[11px] text-slate-400">Enables dynamic cashflow velocity and footfall scoring</div>
            </div>
            <button
              onClick={() => toggleConsent('upiAggregator')}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                consentOptions.upiAggregator
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 text-slate-400'
              }`}
            >
              {consentOptions.upiAggregator ? 'Active (Consented)' : 'Revoked'}
            </button>
          </div>

          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
            <div>
              <div className="text-xs font-bold text-white">GST / Udyam Business Verification Data</div>
              <div className="text-[11px] text-slate-400">Verifies business existence for concessional MSME rate subsidies</div>
            </div>
            <button
              onClick={() => toggleConsent('gstN')}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                consentOptions.gstN
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 text-slate-400'
              }`}
            >
              {consentOptions.gstN ? 'Active (Consented)' : 'Revoked'}
            </button>
          </div>

          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
            <div>
              <div className="text-xs font-bold text-white">Predictive Financial Pulse (Early Warning AI)</div>
              <div className="text-[11px] text-slate-400">Scans for discretionary spikes to deliver protective nudges</div>
            </div>
            <button
              onClick={() => toggleConsent('predictivePulse')}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                consentOptions.predictivePulse
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 text-slate-400'
              }`}
            >
              {consentOptions.predictivePulse ? 'Active (Consented)' : 'Revoked'}
            </button>
          </div>

          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 opacity-60">
            <div>
              <div className="text-xs font-bold text-white">Third-Party Commercial Data Broker Sharing</div>
              <div className="text-[11px] text-slate-400">Permanently locked: Zero telemetry is ever shared or monetized</div>
            </div>
            <span className="px-3 py-1 rounded-xl text-xs font-bold bg-rose-950/40 text-rose-400 border border-rose-900/30">
              Permanently Disabled
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
