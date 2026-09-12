import React from 'react';
import { 
  Wallet, 
  ArrowUpRight, 
  ArrowDownRight, 
  PiggyBank, 
  CreditCard, 
  Activity
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';

export default function FinancialProfile({ customer }) {
  const expenseData = customer.expenseBreakdown.map(item => ({
    name: item.category,
    value: item.amount,
    color: item.color
  }));

  return (
    <div className="space-y-6">
      {/* Top Title & Persona Summary */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              AI Financial Profile & Cashflow
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Module 03
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Holistic contextual view of real monthly inflows, fixed commitments, and safe unallocated surplus.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
          <Activity className="w-4 h-4 text-emerald-400" />
          <span>Account: <strong className="text-white">{customer.accountType}</strong></span>
        </div>
      </div>

      {/* 4 Key Financial Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Metric 1: Monthly Income */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Verified Monthly Income</span>
            <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-white">
            ₹{customer.income.toLocaleString('en-IN')}
          </div>
          <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
            <span className="text-emerald-400 font-medium">● 82% UPI</span>
            <span>/ 18% Cash receipts</span>
          </p>
          <div className="mt-3 text-[10px] text-slate-500 bg-slate-950/60 p-1.5 rounded-lg border border-slate-800/80">
            {customer.incomeNote}
          </div>
        </div>

        {/* Metric 2: Monthly Expenses */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Monthly Outflows</span>
            <div className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400">
              <ArrowDownRight className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-white">
            ₹{customer.expenses.toLocaleString('en-IN')}
          </div>
          <p className="text-[11px] text-amber-400 mt-1 font-medium">
            Raw material fabric spike (+18%)
          </p>
          <div className="mt-3 text-[10px] text-slate-500 bg-slate-950/60 p-1.5 rounded-lg border border-slate-800/80">
            65.7% of total monthly gross income
          </div>
        </div>

        {/* Metric 3: Existing Commitments */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Existing Active EMI</span>
            <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
              <CreditCard className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-white">
            ₹{customer.existingEMI.toLocaleString('en-IN')}
          </div>
          <p className="text-[11px] text-indigo-300 mt-1 font-medium">
            {customer.existingEMINote}
          </p>
          <div className="mt-3 text-[10px] text-emerald-400 bg-emerald-950/30 p-1.5 rounded-lg border border-emerald-800/40">
            ✓ 100% on-time payment track record
          </div>
        </div>

        {/* Metric 4: Safe Free Surplus */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-emerald-950/40 border border-emerald-500/30 shadow-md glow-emerald">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">Safe Uncommitted Surplus</span>
            <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-300">
              <PiggyBank className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-emerald-400">
            ₹{customer.netSurplus.toLocaleString('en-IN')}<span className="text-xs font-normal text-slate-400">/mo</span>
          </div>
          <p className="text-[11px] text-slate-300 mt-1">
            Buffer: <strong className="text-white">₹{customer.emergencyReserve.toLocaleString('en-IN')}</strong> ({customer.emergencyMonths} mo)
          </p>
          <div className="mt-3 text-[10px] text-slate-400 bg-slate-950/60 p-1.5 rounded-lg border border-slate-800">
            Max safe EMI capacity: ₹3,000/mo
          </div>
        </div>

      </div>

      {/* Cashflow Trends & Expense Breakdown Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 6-Month Cashflow Trajectory (Bar / Area Chart) */}
        <div className="lg:col-span-2 p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-white">6-Month Cashflow Trajectory</h3>
              <p className="text-xs text-slate-400">Tracking income seasonality, raw material expenses, and net surplus</p>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1 text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Income
              </span>
              <span className="flex items-center gap-1 text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> Expense
              </span>
              <span className="flex items-center gap-1 text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500" /> Surplus
              </span>
            </div>
          </div>

          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={customer.cashflowHistory} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} />
                <YAxis stroke="#64748b" fontSize={11} tickLine={false} tickFormatter={(val) => `₹${val/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', fontSize: '12px' }}
                  formatter={(val) => [`₹${val.toLocaleString('en-IN')}`, '']}
                />
                <Bar dataKey="income" name="Income" fill="#10B981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="expense" name="Expense" fill="#EF4444" radius={[4, 4, 0, 0]} />
                <Bar dataKey="surplus" name="Surplus" fill="#F59E0B" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Expense Category Distribution */}
        <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-white mb-1">Expense Breakdown</h3>
            <p className="text-xs text-slate-400 mb-4">Where does monthly outflow go?</p>

            <div className="h-44 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseData}
                    innerRadius={48}
                    outerRadius={68}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {expenseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', fontSize: '12px' }}
                    formatter={(val) => [`₹${val.toLocaleString('en-IN')}`, '']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-2 mt-3 pt-3 border-t border-slate-800">
            {customer.expenseBreakdown.map((cat) => (
              <div key={cat.category} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                  <span className="text-slate-300 truncate max-w-[130px]">{cat.category}</span>
                </div>
                <div className="font-semibold text-white">
                  ₹{cat.amount.toLocaleString('en-IN')} <span className="text-slate-500 font-normal">({cat.percentage}%)</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
