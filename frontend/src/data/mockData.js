export const CUSTOMER_PROFILES = {
  meena: {
    id: 'meena',
    name: 'Meena Sharma',
    avatar: '👩‍💼',
    role: 'Small Boutique Owner',
    location: 'Jaipur, Rajasthan',
    segment: 'Micro-Merchant / Informal Cashflow',
    accountType: 'Bharat Vyapar Current + Jan Dhan Savings',
    cibilScore: 742,
    kycStatus: 'Verified (Aadhaar + GST/Udyam)',
    income: 35000,
    incomeNote: '₹30k - ₹40k range (UPI 82%, Cash 18%)',
    expenses: 23000,
    savingsRate: 14.3,
    existingSavingsMonthly: 5000,
    existingEMI: 4000,
    existingEMINote: 'Sewing Machine Loan (Ends in 3 months)',
    netSurplus: 3000,
    emergencyReserve: 24000,
    emergencyMonths: 1.04,
    healthScore: 71,
    healthRating: 'Good Stability, Limited Liquidity Buffer',
    healthColor: '#F59E0B',
    pillars: [
      { name: 'Emergency Runway', score: 58, status: 'warning', value: '1.04 Months', benchmark: 'Min 3 Months Recommended', tip: 'Boost liquid buffer to ₹69k for unexpected inventory swings' },
      { name: 'Debt Burden (DTI)', score: 79, status: 'good', value: '11.4%', benchmark: 'Safe threshold is < 35%', tip: 'Existing ₹4,000 EMI is well managed with zero defaults' },
      { name: 'Cashflow Velocity', score: 88, status: 'excellent', value: 'Daily UPI', benchmark: 'Consistent digital trail', tip: 'Average 28 UPI receipts per week signals healthy footfall' },
      { name: 'Expense Discipline', score: 66, status: 'warning', value: '₹23,000 / mo', benchmark: 'Recent raw material spike', tip: 'Fabric cost rose +18% due to festival stock build-up' },
      { name: 'Savings Consistency', score: 82, status: 'good', value: '₹5,000 / mo', benchmark: '14.3% savings rate', tip: 'Regular monthly transfer into informal chits or bank reserve' },
      { name: 'Repayment Track Record', score: 94, status: 'excellent', value: '36 Mo Clean', benchmark: '100% on-time repayment', tip: 'Flawless track record on government Mudra micro-loan' }
    ],
    cashflowHistory: [
      { month: 'Nov', income: 33000, expense: 21000, surplus: 4000, savings: 5000 },
      { month: 'Dec', income: 39000, expense: 25000, surplus: 6000, savings: 7000 },
      { month: 'Jan', income: 34000, expense: 22000, surplus: 3500, savings: 4500 },
      { month: 'Feb', income: 36000, expense: 22800, surplus: 4200, savings: 5000 },
      { month: 'Mar', income: 35000, expense: 23000, surplus: 3000, savings: 5000 },
      { month: 'Apr (Est)', income: 37500, expense: 23500, surplus: 4500, savings: 5500 }
    ],
    expenseBreakdown: [
      { category: 'Raw Materials & Cloth', amount: 10800, percentage: 47, color: '#3B82F6' },
      { category: 'Shop Rent & Utilities', amount: 6400, percentage: 28, color: '#6366F1' },
      { category: 'Household Essentials', amount: 3800, percentage: 16, color: '#10B981' },
      { category: 'Personal & Discretionary', amount: 2000, percentage: 9, color: '#F59E0B' }
    ],
    activeGoal: {
      id: 'scooter-goal',
      title: 'Electric Delivery Scooter for Boutique Deliveries',
      category: 'Business Mobility & Growth',
      icon: '🛵',
      targetAmount: 85000,
      targetMonths: 6,
      currentAllocated: 5000,
      feasibility: 'Moderate Feasibility',
      feasibilityScore: 62,
      feasibilityBadge: 'Caution: Unassisted 100% Loan Strains Surplus',
      feasibilityReason: 'A standard full-cost loan EMI of ₹4,250/mo would exceed your monthly uncommitted safe surplus of ₹3,000/mo. Any sudden drop in boutique sales could force you into distress.',
      whyThisExplanation: {
        whyThis: 'An electric delivery scooter saves Meena ~₹2,200/month in 3rd-party parcel couriers and allows same-day customer fittings across Jaipur.',
        whyNow: 'Existing sewing machine EMI of ₹4,000 expires in 90 days. Timing the new scooter purchase now prevents debt overlap.',
        alternativesConsidered: 'Unassisted 24-mo Personal Loan (Rejected: 18% APR, ₹4,300 EMI pushes DTI over 38%), Second-hand petrol scooter (Rejected: High maintenance and fuel costs).'
      },
      options: [
        {
          id: 'option-a',
          isRecommended: true,
          badge: 'AI Recommended • Safe & Sustainable',
          title: 'Option A: Smart Goal-Linked Recurring Deposit + Concessional Loan',
          headline: 'Save ₹4,000/mo for 6 months, then finance the remaining ₹61,000',
          savingsPlan: '₹4,000 / month into 7.25% Bharat Smart RD',
          downPayment: 24000,
          loanAmount: 61000,
          futureEMI: 2850,
          tenureMonths: 24,
          postFeasibilityScore: 94,
          benefits: [
            'Accumulate ₹24,000 down payment without touching existing emergency buffer',
            'Future EMI (₹2,850/mo) fits 100% within your safe free surplus',
            'Zero pre-payment penalties + 0.50% interest rate rebate on completing RD milestone',
            'Existing ₹4,000 sewing EMI expires before scooter EMI begins (Zero debt overlap)'
          ],
          actionLabel: 'Lock 6-Month Smart RD'
        },
        {
          id: 'option-b',
          isRecommended: false,
          badge: 'Faster Access • Uses Partial Buffer',
          title: 'Option B: Lower Loan Amount with Instant Down Payment',
          headline: 'Pay ₹20,000 from current savings now + ₹65,000 loan over 36 months',
          savingsPlan: 'Immediate down payment of ₹20,000 from liquid reserves',
          downPayment: 20000,
          loanAmount: 65000,
          futureEMI: 2320,
          tenureMonths: 36,
          postFeasibilityScore: 74,
          benefits: [
            'Get delivery scooter within 48 hours for immediate business boost',
            'Low monthly EMI of ₹2,320/mo fits within free surplus',
            'Downside: Drops emergency buffer from ₹24,000 to ₹4,000 (Low emergency cushion)'
          ],
          actionLabel: 'Apply with ₹20k Down Payment'
        },
        {
          id: 'option-c',
          isRecommended: false,
          badge: 'Flexible for Merchant Cashflows',
          title: 'Option C: Tiered Seasonal Flexi-EMI Micro Loan',
          headline: 'Pay lower EMI in lean summer months, higher during festival peaks',
          savingsPlan: 'Token ₹5,000 booking advance',
          downPayment: 5000,
          loanAmount: 80000,
          futureEMI: '₹2,100 (Lean) / ₹3,850 (Festive)',
          tenureMonths: 28,
          postFeasibilityScore: 82,
          benefits: [
            'Off-peak summer months (May-July) EMI drops to ₹2,100 to protect cashflow',
            'Festival months (Oct-Jan wedding rush) absorbs higher ₹3,850 EMI smoothly',
            'Direct UPI auto-debit tied to boutique sales volume'
          ],
          actionLabel: 'Select Seasonal Flexi Plan'
        }
      ]
    },
    pulse: {
      alertType: 'Protective Nudge',
      alertTitle: 'Discretionary & Material Spurt Detected',
      alertDescription: 'Boutique fabric inventory spend increased by 18% (₹2,800) in March. If this continues, your free surplus will shrink to ₹1,200/mo.',
      severity: 'warning',
      stages: [
        { label: 'Month 1-3', name: 'Baseline Stability', desc: 'Surplus steady at ₹3,500/mo, zero missed dues.', status: 'completed' },
        { label: 'Month 4', name: 'Raw Material Surge', desc: 'Raw fabric restocking spiked spend by 18%.', status: 'completed' },
        { label: 'Month 5', name: 'Surplus Erosion', desc: 'Net uncommitted cash dipped from ₹3,500 to ₹1,800.', status: 'active' },
        { label: 'AI Protective Intervention', name: 'Smart Protective Nudge', desc: 'AI prevents taking 100% debt; recommends 6-mo RD pathway.', status: 'next' },
        { label: 'Outcome', name: 'Resilient Purchase', desc: 'Zero debt distress; scooter acquired safely.', status: 'future' }
      ],
      recommendationNudge: 'Delay planned ₹12,000 shop decorative lighting until festival season. This preserves ₹4,000/mo for your scooter RD.'
    }
  },

  rahul: {
    id: 'rahul',
    name: 'Rahul Verma',
    avatar: '👨‍💻',
    role: 'Freelance UI/UX Designer & Gig Tech',
    location: 'Bengaluru, Karnataka',
    segment: 'Gig Economy / High Income Volatility',
    accountType: 'Freelancer Smart Account',
    cibilScore: 688,
    kycStatus: 'Verified (PAN + Digital Freelance GST)',
    income: 65000,
    incomeNote: 'High volatility: ₹42k - ₹95k (Client invoices)',
    expenses: 42000,
    savingsRate: 18.4,
    existingSavingsMonthly: 12000,
    existingEMI: 8500,
    existingEMINote: 'Credit Card Revolving & Tech Gadget BNPL',
    netSurplus: 2500,
    emergencyReserve: 58000,
    emergencyMonths: 1.38,
    healthScore: 58,
    healthRating: 'Moderate - High Discretionary & Volatility Risk',
    healthColor: '#EF4444',
    pillars: [
      { name: 'Emergency Runway', score: 48, status: 'warning', value: '1.38 Months', benchmark: 'Gig workers need 6 Months', tip: 'Volatile income requires min ₹2.5L liquid safety net' },
      { name: 'Debt Burden (DTI)', score: 55, status: 'warning', value: '13.1%', benchmark: 'High interest revolving debt', tip: 'Revolving 24% card dues draining ₹2,100 in interest alone' },
      { name: 'Cashflow Velocity', score: 62, status: 'warning', value: 'Lumpy / Milestone', benchmark: 'Payment delays common', tip: 'Average invoice realization lag is 22 days' },
      { name: 'Expense Discipline', score: 52, status: 'warning', value: '₹42,000 / mo', benchmark: 'High discretionary dining/gadgets', tip: 'Discretionary food & leisure accounts for 34% of outflows' },
      { name: 'Savings Consistency', score: 65, status: 'warning', value: 'Irregular', benchmark: 'Zero automatic sweep', tip: 'Savings occur only in surplus months; zero rainy-day automation' },
      { name: 'Repayment Track Record', score: 72, status: 'good', value: '2 Missed Minimums', benchmark: 'Timely due discipline', tip: 'Occasional late fee due to client payment mismatch' }
    ],
    cashflowHistory: [
      { month: 'Nov', income: 72000, expense: 41000, surplus: 14000, savings: 17000 },
      { month: 'Dec', income: 48000, expense: 44000, surplus: -4500, savings: 0 },
      { month: 'Jan', income: 85000, expense: 46000, surplus: 22000, savings: 17000 },
      { month: 'Feb', income: 52000, expense: 39000, surplus: 2000, savings: 5000 },
      { month: 'Mar', income: 65000, expense: 42000, surplus: 2500, savings: 12000 },
      { month: 'Apr (Est)', income: 78000, expense: 41000, surplus: 16000, savings: 15000 }
    ],
    expenseBreakdown: [
      { category: 'Rent & Co-working Desk', amount: 18000, percentage: 43, color: '#3B82F6' },
      { category: 'Food Delivery & Socializing', amount: 14200, percentage: 34, color: '#F59E0B' },
      { category: 'Software Subscriptions & Cloud', amount: 5300, percentage: 13, color: '#8B5CF6' },
      { category: 'Utilities & Commute', amount: 4500, percentage: 10, color: '#10B981' }
    ],
    activeGoal: {
      id: 'macbook-goal',
      title: 'High-Performance MacBook Pro M3 Max for 3D UI Renderings',
      category: 'Professional Equipment',
      icon: '💻',
      targetAmount: 160000,
      targetMonths: 6,
      currentAllocated: 15000,
      feasibility: 'High Risk without Restructuring',
      feasibilityScore: 41,
      feasibilityBadge: 'High Risk: Discretionary Leak & Volatile Inflow',
      feasibilityReason: 'Adding ₹9,500/mo EMI while servicing ₹8,500 revolving credit card debt creates severe risk during low-income freelance months (e.g. Dec was ₹48k).',
      whyThisExplanation: {
        whyThis: 'Faster rendering boosts client turnaround by 40%, enabling higher tier overseas gig contracts.',
        whyNow: 'Immediate hardware failure risk with old machine; however financing without restructuring is dangerous.',
        alternativesConsidered: 'Direct No-Cost 6-mo EMI (High default risk in lean invoice month), M2 Refurbished unit (Saves ₹60,000).'
      },
      options: [
        {
          id: 'opt-consolidation',
          isRecommended: true,
          badge: 'AI Restructure • High Impact',
          title: 'Option 1: Debt Consolidation + Automated Milestone Sweep',
          headline: 'Combine ₹8,500 card debt into 1 fixed 11.5% loan + 15% invoice sweep',
          savingsPlan: 'Auto-sweep 15% of every incoming client invoice into Hardware Fund',
          downPayment: 35000,
          loanAmount: 125000,
          futureEMI: 4400,
          tenureMonths: 30,
          postFeasibilityScore: 86,
          benefits: [
            'Slashes interest drag from 24% card APR down to 11.5%',
            'Consolidates 3 fragmented dues into a single predictable monthly payment',
            'Automated invoice sweep funds down payment without feeling the pinch'
          ],
          actionLabel: 'Consolidate Debt & Enable Auto-Sweep'
        },
        {
          id: 'opt-refurbished',
          isRecommended: false,
          badge: 'Prudent Choice',
          title: 'Option 2: Certified Enterprise Refurbished M2 Studio Setup',
          headline: 'Total cost ₹98,000 instead of ₹1,60,000 with 1-year warranty',
          savingsPlan: '₹8,000/mo for 4 months',
          downPayment: 32000,
          loanAmount: 66000,
          futureEMI: 3100,
          tenureMonths: 24,
          postFeasibilityScore: 91,
          benefits: [
            'Delivers 85% of M3 performance at 60% of the price',
            'Leaves emergency runway intact for freelance lean periods'
          ],
          actionLabel: 'View Certified Equipment Catalog'
        }
      ]
    },
    pulse: {
      alertType: 'Volatility Warning',
      alertTitle: 'Variable Client Inflow Dip Warning',
      alertDescription: 'Two pending invoices totaling ₹48,000 are overdue by 14 days. Discretionary spending should be capped at ₹8,000 this week.',
      severity: 'danger',
      stages: [
        { label: 'Week 1', name: 'Invoice Issued', desc: '₹55k bill submitted to US client.', status: 'completed' },
        { label: 'Week 3', name: 'Payment Delay', desc: 'Overdue by 14 days; card minimum due approaching.', status: 'active' },
        { label: 'AI Cushion', name: 'Interest Shield Activated', desc: 'Companion suggests drawing ₹8k from micro-overdraft instead of 24% revolving credit.', status: 'next' },
        { label: 'Recovery', name: 'Invoice Realization', desc: 'Overdraft cleared automatically upon wire credit.', status: 'future' }
      ],
      recommendationNudge: 'Switch off food delivery subscriptions for 14 days to preserve liquid liquidity until US wire clears.'
    }
  },

  priya: {
    id: 'priya',
    name: 'Priya Sundaram',
    avatar: '👩‍🏫',
    role: 'Senior Secondary School Teacher',
    location: 'Coimbatore, Tamil Nadu',
    segment: 'Salaried Public Sector / Predictable Cashflow',
    accountType: 'Salary Gold Privilege Account',
    cibilScore: 815,
    kycStatus: 'Fully Verified (Aadhaar, PAN, Govt Service ID)',
    income: 52000,
    incomeNote: 'Credited on 1st of every month without fail',
    expenses: 28000,
    savingsRate: 34.6,
    existingSavingsMonthly: 18000,
    existingEMI: 6000,
    existingEMINote: 'Gold Loan (Jewellery pledge, 9.5% APR)',
    netSurplus: 18000,
    emergencyReserve: 185000,
    emergencyMonths: 6.6,
    healthScore: 89,
    healthRating: 'Excellent - High Surplus & Rock-Solid Stability',
    healthColor: '#10B981',
    pillars: [
      { name: 'Emergency Runway', score: 96, status: 'excellent', value: '6.6 Months', benchmark: 'Recommended: 6 Months', tip: 'Excellent ₹1.85L liquid emergency cushion in sweep FDs' },
      { name: 'Debt Burden (DTI)', score: 88, status: 'good', value: '11.5%', benchmark: 'Safe threshold is < 35%', tip: 'Existing ₹6,000 Gold Loan well backed by physical asset' },
      { name: 'Cashflow Velocity', score: 98, status: 'excellent', value: '100% On-Time', benchmark: 'Govt treasury salary credit', tip: 'Zero variance in salary credit date for past 6 years' },
      { name: 'Expense Discipline', score: 84, status: 'good', value: '₹28,000 / mo', benchmark: 'Frugal lifestyle', tip: 'Household budget strictly tracked across envelopes' },
      { name: 'Savings Consistency', score: 92, status: 'excellent', value: '₹18,000 / mo', benchmark: '34.6% savings rate', tip: 'High savings rate; potential to optimize idle cash returns' },
      { name: 'Repayment Track Record', score: 98, status: 'excellent', value: '72 Mo Clean', benchmark: 'Zero 30+ DPD ever', tip: 'Prime credit profile with top-tier Tier-1 pricing eligibility' }
    ],
    cashflowHistory: [
      { month: 'Nov', income: 52000, expense: 27500, surplus: 18500, savings: 18000 },
      { month: 'Dec', income: 52000, expense: 29000, surplus: 17000, savings: 17000 },
      { month: 'Jan', income: 52000, expense: 27000, surplus: 19000, savings: 19000 },
      { month: 'Feb', income: 52000, expense: 28000, surplus: 18000, savings: 18000 },
      { month: 'Mar', income: 54000, expense: 28500, surplus: 19500, savings: 19000 },
      { month: 'Apr (Est)', income: 54000, expense: 28000, surplus: 20000, savings: 20000 }
    ],
    expenseBreakdown: [
      { category: 'Household Provisions & Groceries', amount: 12500, percentage: 45, color: '#3B82F6' },
      { category: 'Children Education & Books', amount: 7200, percentage: 26, color: '#10B981' },
      { category: 'Healthcare & Insurance', amount: 4800, percentage: 17, color: '#8B5CF6' },
      { category: 'Personal & Religious Giving', amount: 3500, percentage: 12, color: '#F59E0B' }
    ],
    activeGoal: {
      id: 'solar-goal',
      title: '3kW Rooftop Solar System (PM Surya Ghar Muft Bijli Yojana)',
      category: 'Sustainable Home Infrastructure',
      icon: '☀️',
      targetAmount: 120000,
      targetMonths: 3,
      currentAllocated: 50000,
      feasibility: 'High Feasibility',
      feasibilityScore: 92,
      feasibilityBadge: 'Prime Feasibility: Strong Surplus & Govt Subsidy',
      feasibilityReason: 'Monthly surplus of ₹18,000 can easily absorb solar EMI of ₹2,900/mo, while cutting home electricity bills by ₹2,100/mo. Net cost is negligible.',
      whyThisExplanation: {
        whyThis: 'Rooftop solar generates 360 units/month, slashing household electricity bill from ₹2,600 to zero, generating a 22% annualized ROI.',
        whyNow: 'Central Government PM Surya Ghar scheme provides ₹78,000 direct DBT subsidy if installed before fiscal quarter end.',
        alternativesConsidered: 'Paying full ₹1,20,000 from savings (Unnecessary drain on emergency fund when 7% concessional green loans exist).'
      },
      options: [
        {
          id: 'opt-green-subsidy',
          isRecommended: true,
          badge: 'Government Subsidized • Net Free Power',
          title: 'Option A: PM Surya Ghar Concessional Green Energy Loan',
          headline: '₹78,000 direct DBT subsidy + ₹42,000 bank loan at 7.0% p.a.',
          savingsPlan: 'Use ₹42,000 from current surplus or finance at ₹1,920/mo',
          downPayment: 0,
          loanAmount: 42000,
          futureEMI: 1920,
          tenureMonths: 24,
          postFeasibilityScore: 98,
          benefits: [
            'Direct government subsidy of ₹78,000 credited within 30 days of grid sync',
            'Electricity bill drops by ₹2,200/month, completely offsetting the ₹1,920 loan EMI',
            'Zero processing fee, zero foreclosure penalty anytime'
          ],
          actionLabel: 'Apply for Green Solar Loan'
        },
        {
          id: 'opt-full-outright',
          isRecommended: false,
          badge: '100% Self-Funded',
          title: 'Option B: Self-Fund from Emergency Reserve',
          headline: 'Pay full ₹1,20,000 upfront and claim subsidy reimbursement later',
          savingsPlan: 'Deduct ₹1,20,000 from ₹1,85,000 reserve',
          downPayment: 120000,
          loanAmount: 0,
          futureEMI: 0,
          tenureMonths: 0,
          postFeasibilityScore: 89,
          benefits: [
            'Zero interest cost or EMI commitments',
            'Leaves emergency reserve at ₹65,000 (still 2.3 months of coverage)'
          ],
          actionLabel: 'Proceed with Self-Funding'
        }
      ]
    },
    pulse: {
      alertType: 'Growth Opportunity',
      alertTitle: 'Idle Cash Yield Optimization',
      alertDescription: '₹95,000 sitting in regular savings earning only 2.7%. Activating Auto-Sweep FD can earn an extra ₹4,800/year risk-free.',
      severity: 'info',
      stages: [
        { label: 'Stage 1', name: 'Surplus Audit', desc: '₹1.85L reserve verified in bank.', status: 'completed' },
        { label: 'Stage 2', name: 'Yield Leak Detected', desc: '₹95k earning sub-inflation 2.7% interest.', status: 'active' },
        { label: 'AI Optimization', name: 'Auto-Sweep Activation', desc: 'One-click switch to 7.1% Multi-Option Sweep FD with zero lock-in.', status: 'next' },
        { label: 'Benefit Realization', name: 'Compounded Wealth', desc: '+₹4,800 annual passive interest credited directly.', status: 'future' }
      ],
      recommendationNudge: 'Activate 1-Click Multi-Option Auto-Sweep to earn ₹4,800 without locking up your emergency liquidity.'
    }
  }
};

export const VERNACULAR_KNOWLEDGE_BASE = [
  {
    category: 'Scooter Goal Feasibility',
    queries: {
      en: 'Why is Meena\'s scooter goal rated Moderate instead of High feasibility?',
      hi: 'मीना का स्कूटर लक्ष्य हाई की जगह मॉडरेट क्यों दिखाया गया है?',
      hinglish: 'Meena ka scooter goal Moderate kyu hai, High kyu nahi?'
    },
    answer: {
      en: 'Because an immediate 100% loan would require an EMI of ₹4,250/month, which exceeds her current safe uncommitted surplus of ₹3,000/month. If wedding season demand dips or fabric costs rise, this creates high default risk. By saving ₹4,000/month for 6 months first (Option A), feasibility rises to 94%!',
      hi: 'क्योंकि सीधे 100% लोन लेने पर ₹4,250 प्रति माह की ईएमआई बनेगी, जो उनकी सुरक्षित बचत (₹3,000/माह) से अधिक है। यदि बुटीक का काम धीमा हुआ तो किस्त चुकाना भारी पड़ेगा। यदि वे 6 महीने ₹4,000 की आरडी करें, तो ईएमआई घटकर ₹2,850 हो जाएगी और रिस्क 94% सुरक्षित हो जाएगा!',
      hinglish: 'Kyunki agar direct full loan liya toh monthly EMI ₹4,250 aayegi, jabki unka monthly free surplus sirf ₹3,000 hai. Agar boutique mein thoda bhi mandi aayi toh EMI miss hone ka risk hai. Isliye AI ne 6-month RD pathway recommend kiya hai jisse EMI ghatkar ₹2,850 ho jayegi.'
    }
  },
  {
    category: 'Next Best Action',
    queries: {
      en: 'What is the Next Best Action for Meena right now?',
      hi: 'मीना के लिए इस समय सबसे सही अगला कदम क्या है?',
      hinglish: 'Meena ke liye abhi sabse best next step kya hai?'
    },
    answer: {
      en: 'Do not take an instant high-interest microloan. Instead, activate the 6-Month Bharat Smart Goal RD at ₹4,000/month. Her existing ₹4,000 sewing machine loan will end in 3 months, freeing up exact surplus right on schedule for the scooter down payment!',
      hi: 'तुरंत महंगा लोन न लें। इसके बजाय ₹4,000/माह की 6-महीने वाली भारत स्मार्ट आरडी शुरू करें। उनकी पुरानी ₹4,000 की सिलाई मशीन की किस्त 3 महीने में खत्म हो जाएगी, जिससे बिना किसी दबाव के स्कूटर के लिए पैसे तैयार हो जाएंगे!',
      hinglish: 'Instant unassisted loan mat lijiye. 6-Month Smart RD start kijiye ₹4,000/month par. 3 mahine mein purani sewing machine EMI khatam ho jayegi, toh budget par 1 rupaye ka bhi extra pressure nahi aayega!'
    }
  },
  {
    category: 'Financial Stress Warning',
    queries: {
      en: 'What financial stress did the AI detect in Meena\'s profile?',
      hi: 'एआई ने मीना के खाते में किस वित्तीय तनाव का पता लगाया?',
      hinglish: 'AI ne Meena ke account mein kya financial stress detect kiya?'
    },
    answer: {
      en: 'The AI detected an 18% spike in raw fabric expenses last month, reducing her monthly surplus from ₹3,500 to ₹1,800. The companion issued a protective nudge recommending postponing non-urgent shop renovation so her scooter timeline remains safe.',
      hi: 'एआई ने देखा कि पिछले महीने कपड़े की खरीद में 18% की अचानक बढ़ोतरी हुई, जिससे मीना जी की मासिक बचत ₹3,500 से घटकर ₹1,800 रह गई। साथी ने सलाह दी कि दुकान की सजावट का खर्च कुछ समय के लिए टाल दें ताकि स्कूटर का सपना न रुके।',
      hinglish: 'AI ne detect kiya ki last month raw cloth khareedne mein 18% extra spend hua, jisse unki monthly bachat ₹3,500 se girkar ₹1,800 ho gayi. AI ne turant protective nudge diya taaki vo non-urgent decoration kharche rok sakein.'
    }
  },
  {
    category: 'Responsible AI & Consent',
    queries: {
      en: 'How does Bharat Financial Companion ensure responsible banking?',
      hi: 'भारत फाइनेंशियल कम्पेनियन जिम्मेदार बैंकिंग कैसे सुनिश्चित करता है?',
      hinglish: 'Bharat Financial Companion responsible banking kaise ensure karta hai?'
    },
    answer: {
      en: '1. Never pushes unaffordable high-cost loans to earn bank commissions. 2. Plain-language explainability for every score and recommendation. 3. Full user control over financial data sharing via Account Aggregator. 4. Proactive debt-trap prevention before defaults occur.',
      hi: '1. बैंक कमीशन के लिए कभी भी भारी कर्ज नहीं थोपता। 2. हर सुझाव और स्कोर का सरल भाषा में स्पष्ट कारण बताता है। 3. अकाउंट एग्रीगेटर के जरिए डेटा पर ग्राहक का पूरा नियंत्रण रहता है। 4. कर्ज के जाल में फंसने से पहले ही चेतावनी देकर सुरक्षा करता है।',
      hinglish: '1. High commission ke chakkar mein unaffordable loans nahi bechta. 2. Har recommendation ka "Kyun aur Kaise" easy language mein explain karta hai. 3. Aapka data consent aapke haath mein hai. 4. Debt trap mein phasne se pehle hi warn karta hai.'
    }
  }
];

export const PHILOSOPHY_PIPELINE = [
  { step: '01', title: 'Customer Data', desc: 'Cashflow, UPI footprint, seasonal income, verified expenses & emergency cushion', icon: 'Database' },
  { step: '02', title: 'AI Understanding', desc: 'Holistic context mapping beyond crude bureau CIBIL scores', icon: 'Cpu' },
  { step: '03', title: 'Financial Need / Goal', desc: 'Real life milestones: Electric scooter, shop expansion, children tuition', icon: 'Target' },
  { step: '04', title: 'Explainable Options', desc: 'Clear pros, cons, DTI impacts & "Why This? Why Now? Alternatives"', icon: 'Eye' },
  { step: '05', title: 'Next Best Action', desc: 'Actionable, protective steps that build long-term wealth, not debt traps', icon: 'CheckCircle2' }
];
