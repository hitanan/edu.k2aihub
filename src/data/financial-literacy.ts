export interface FinancialLiteracyLessons {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  duration: string;
  objectives: string[];
  prerequisites: string[];
  exercises: Exercise[];
  realWorldApplications: string[];
  videoUrl: string;
  imageUrl?: string;
  technologies: string[];
  financialImpact: string;
  resources: Resource[];
  caseStudies: CaseStudy[];
}

interface Exercise {
  title: string;
  description: string;
  difficulty: string;
  solution: string;
  requirements: string[];
  hints: string[];
  expectedOutput: string;
}

interface Resource {
  title: string;
  url: string;
  type: 'app' | 'platform' | 'calculator' | 'course' | 'book';
  description: string;
}

interface CaseStudy {
  title: string;
  person: string;
  challenge: string;
  solution: string;
  results: string;
  insights: string[];
}

export const financialLiteracyLessons: FinancialLiteracyLessons[] = [
  {
    id: 'personal-budgeting-fundamentals',
    title: 'Bài 1: Personal Budgeting & Financial Planning',
    description:
      'Master personal finance fundamentals: budgeting methods, expense tracking, financial goals setting. Sử dụng apps và tools để quản lý tài chính cá nhân hiệu quả.',
    videoUrl: 'https://www.youtube.com/watch?v=HQzoZfc3GwQ',
    imageUrl:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop',
    difficulty: 'Cơ bản',
    duration: '90 phút',
    financialImpact: 'Tiết kiệm 20-30% chi tiêu hàng tháng, tăng savings rate',
    objectives: [
      'Thiết lập comprehensive personal budget với 50/30/20 rule',
      'Track expenses và identify spending patterns',
      'Set SMART financial goals (short-term và long-term)',
      'Build emergency fund strategy (3-6 months expenses)',
      'Optimize cash flow và reduce unnecessary expenses'
    ],
    prerequisites: [
      'Basic math skills (addition, subtraction, percentages)',
      'Understanding của income sources và monthly expenses',
      'Smartphone hoặc computer for digital tools',
      'Bank account và financial statements access'
    ],
    technologies: [
      'Budgeting Apps (Mint, YNAB, Personal Capital)',
      'Spreadsheet Software (Excel, Google Sheets)',
      'Banking Apps với expense categorization',
      'Investment Tracking Platforms',
      'Receipt Scanning Apps',
      'Financial Calculator Tools'
    ],
    exercises: [
      {
        title: 'Create Personal Financial Dashboard',
        description:
          'Xây dựng comprehensive financial dashboard tracking income, expenses, savings, investments và net worth progression',
        difficulty: 'Trung bình',
        solution:
          "# Personal Financial Dashboard Creation\n\n## 1. Income Analysis & Categorization\n\n### Primary Income Sources:\n- **Salary (Net):** 25,000,000 VND/month\n- **Freelance Work:** 3,000,000 VND/month (average)\n- **Investment Returns:** 800,000 VND/month (dividends, interest)\n- **Side Business:** 2,000,000 VND/month\n- **Total Monthly Income:** 30,800,000 VND\n\n### Income Stability Assessment:\n- **Fixed Income (Salary):** 81% - Very stable\n- **Variable Income (Freelance/Business):** 19% - Moderate volatility\n- **Diversification Score:** Good (4 income streams)\n\n## 2. Expense Tracking & Categorization\n\n### Fixed Expenses (Needs - 50% target):\n- **Housing:** 8,000,000 VND (rent, utilities, internet)\n- **Transportation:** 2,500,000 VND (motorbike payment, gas, maintenance)\n- **Food (Groceries):** 3,000,000 VND\n- **Insurance:** 1,200,000 VND (health, motorbike)\n- **Debt Payments:** 500,000 VND (student loan)\n- **Subtotal:** 15,200,000 VND (49% of income) ✓\n\n### Variable Expenses (Wants - 30% target):\n- **Dining Out:** 2,500,000 VND\n- **Entertainment:** 1,500,000 VND\n- **Shopping:** 2,000,000 VND\n- **Hobbies:** 1,000,000 VND\n- **Travel Fund:** 2,000,000 VND\n- **Subtotal:** 9,000,000 VND (29% of income) ✓\n\n### Savings & Investments (20% target):\n- **Emergency Fund:** 2,000,000 VND\n- **Investment Portfolio:** 3,000,000 VND\n- **Retirement Savings:** 1,600,000 VND\n- **Subtotal:** 6,600,000 VND (21% of income) ✓\n\n## 3. Financial Goals Framework\n\n### Short-Term Goals (1-2 years):\n1. **Emergency Fund:** Build to 6 months expenses (91M VND)\n   - Current: 15M VND\n   - Target: 91M VND\n   - Monthly savings: 2M VND\n   - Timeline: 38 months\n\n2. **Vacation Fund:** Japan trip\n   - Target: 30M VND\n   - Monthly savings: 2M VND (travel fund)\n   - Timeline: 15 months\n\n### Medium-Term Goals (3-7 years):\n1. **House Down Payment:** Apartment purchase\n   - Target: 500M VND (20% down payment)\n   - Current savings rate: 3M VND/month\n   - Additional needed: 2M VND/month\n   - Timeline: 5-6 years\n\n2. **Business Expansion:** Grow side business\n   - Target investment: 100M VND\n   - Expected return: 20M VND/month additional income\n   - Timeline: 3 years\n\n### Long-Term Goals (10+ years):\n1. **Retirement Planning:** Early retirement at 50\n   - Target portfolio: 5 billion VND\n   - Current age: 28\n   - Investment horizon: 22 years\n   - Required monthly investment: 4.5M VND\n\n## 4. Budget Optimization Strategies\n\n### Expense Reduction Opportunities:\n- **Food Delivery:** Reduce from 1.5M to 800K (-700K/month)\n- **Subscription Services:** Audit và cancel unused (-200K/month)\n- **Shopping:** Implement 24-hour rule, buy only necessities (-500K/month)\n- **Transportation:** Optimize routes, consider carpooling (-300K/month)\n- **Total Potential Savings:** 1,700,000 VND/month\n\n### Income Optimization:\n- **Salary Negotiation:** Research market rates, prepare case for 15% raise\n- **Freelance Rates:** Increase hourly rate by 20% for new clients\n- **Investment Education:** Learn để improve returns from 3% to 7% annually\n- **Side Business Focus:** Allocate more time to highest-ROI activities\n\n## 5. Digital Tools Integration\n\n### Recommended App Stack:\n- **Primary Budgeting:** YNAB (You Need A Budget)\n- **Expense Tracking:** Mint connected to all accounts\n- **Investment Tracking:** Personal Capital\n- **Bill Management:** Prism for payment scheduling\n- **Receipt Scanning:** Expensify\n- **Goal Tracking:** Custom Google Sheets dashboard\n\n### Automation Setup:\n- **Automatic Transfers:** 6.6M VND to savings/investments monthly\n- **Bill Pay:** All fixed expenses on autopay\n- **Investment:** Dollar-cost averaging into index funds\n- **Expense Alerts:** Notifications when approaching category limits\n\n## 6. Monthly Review Process\n\n### Week 1 of Month: Planning\n- Review previous month's performance vs budget\n- Adjust current month's budget based on known variations\n- Check progress toward financial goals\n- Plan any large purchases or expenses\n\n### Week 2-3: Monitoring\n- Daily expense logging (5 minutes/day)\n- Weekly category review (15 minutes/week)\n- Identify any budget overruns early\n- Adjust spending if necessary\n\n### Week 4: Analysis & Optimization\n- Complete month-end reconciliation\n- Calculate actual vs budgeted variance\n- Identify trends và patterns\n- Plan optimizations for next month\n- Update financial goal progress\n\n## 7. Dashboard Metrics & KPIs\n\n### Financial Health Indicators:\n- **Savings Rate:** 21% (Target: 20%+) ✓\n- **Debt-to-Income Ratio:** 1.6% (Target: <20%) ✓\n- **Emergency Fund Ratio:** 0.6 months (Target: 6 months) ⚠️\n- **Investment Rate:** 9.7% (Target: 10%+) ⚠️\n\n### Behavioral Metrics:\n- **Budget Adherence:** 95% (Track monthly)\n- **Expense Logging:** Daily for 30+ days\n- **Goal Check-ins:** Weekly progress reviews\n- **Financial Education:** 2 hours/week learning\n\n### Net Worth Tracking:\n- **Assets:** 150M VND (cash, investments, possessions)\n- **Liabilities:** 25M VND (student loan, credit cards)\n- **Net Worth:** 125M VND\n- **Monthly Growth Target:** 6.6M VND\n- **Annual Growth Target:** 79.2M VND (63% increase)\n\n## 8. Risk Management\n\n### Income Protection:\n- **Diversified Income:** Multiple streams reduce risk\n- **Skill Development:** Continuous learning for marketability\n- **Professional Network:** Maintain relationships for opportunities\n- **Emergency Planning:** 3-month expense buffer minimum\n\n### Expense Management:\n- **Flexible Categories:** Ability to adjust non-essential spending\n- **Subscription Audits:** Quarterly review của recurring charges\n- **Insurance Coverage:** Adequate protection without over-insuring\n- **Health Fund:** Separate allocation for medical emergencies",
        requirements: [
          'Complete income và expense analysis for last 3 months',
          'Set up digital tracking system với automated categorization',
          'Define SMART financial goals với specific timelines',
          'Create monthly review process với KPIs',
          'Implement automation for savings và bill payments'
        ],
        hints: [
          'Use bank transaction data to identify actual spending patterns',
          'Start with broad categories, then refine based on usage',
          'Consider seasonal variations trong expense planning',
          'Set up alerts for budget overruns before they happen'
        ],
        expectedOutput:
          'Comprehensive financial dashboard với automated tracking, clear goals, và actionable optimization strategies'
      }
    ],
    realWorldApplications: [
      'Personal wealth building và financial independence',
      'Small business financial management',
      'Family financial planning và goal achievement',
      'Debt reduction và credit improvement strategies',
      'Investment decision making với risk assessment'
    ],
    resources: [
      {
        title: 'YNAB (You Need A Budget)',
        url: 'https://www.youneedabudget.com',
        type: 'app',
        description:
          'Comprehensive budgeting app với zero-based budgeting methodology'
      },
      {
        title: 'Mint Personal Finance',
        url: 'https://mint.intuit.com',
        type: 'platform',
        description:
          'Free financial tracking với automatic categorization và credit monitoring'
      }
    ],
    caseStudies: [
      {
        title: 'Young Professional Debt Freedom Journey',
        person: 'Minh, Software Developer, Age 26',
        challenge:
          'Graduated với 200M VND student debt, high lifestyle inflation after first job, no savings despite 30M VND monthly income',
        solution:
          'Implemented aggressive budgeting: moved to smaller apartment, cooked at home, used debt avalanche method. Allocated 15M VND monthly to debt payment while building 1-month emergency fund.',
        results:
          'Debt free trong 18 months, built 6-month emergency fund, started investing 8M VND monthly. Net worth increased from -200M to +150M VND trong 3 years.',
        insights: [
          'Lifestyle inflation is biggest threat to young professionals',
          'Aggressive debt payoff frees up significant cash flow long-term',
          'Small apartment sacrifices worth the financial freedom',
          'Cooking skills save 5-8M VND monthly while improving health'
        ]
      }
    ]
  },
  {
    id: 'investment-fundamentals',
    title: 'Bài 2: Investment Fundamentals & Portfolio Building',
    description:
      'Learn investment basics: stocks, bonds, ETFs, real estate. Build diversified portfolio với risk management và long-term wealth building strategies.',
    videoUrl: 'https://www.youtube.com/watch?v=gFQNPmLKj1k',
    imageUrl:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=400&fit=crop',
    difficulty: 'Trung bình',
    duration: '150 phút',
    financialImpact: '7-10% annual returns long-term, wealth compounding',
    objectives: [
      'Understand investment fundamentals: risk, return, diversification',
      'Build balanced portfolio appropriate for age và risk tolerance',
      'Master dollar-cost averaging và compound interest concepts',
      'Analyze stocks, bonds, ETFs, và real estate investments',
      'Implement tax-efficient investment strategies'
    ],
    prerequisites: [
      'Personal budgeting basics completed',
      'Emergency fund established (3-6 months expenses)',
      'Understanding của basic financial concepts',
      'Access to investment platforms hoặc brokerage accounts'
    ],
    technologies: [
      'Investment Platforms (eToro, Vanguard, Fidelity)',
      'Stock Analysis Tools (Yahoo Finance, Bloomberg)',
      'Portfolio Tracking Apps (Personal Capital, Sharesight)',
      'Robo-Advisors (Betterment, Wealthfront)',
      'Real Estate Platforms (REITs, Fundrise)',
      'Tax Software (TurboTax, TaxAct)'
    ],
    exercises: [
      {
        title: 'Build Diversified Investment Portfolio',
        description:
          'Create age-appropriate investment portfolio với proper asset allocation, risk management, và long-term growth strategy',
        difficulty: 'Nâng cao',
        solution:
          '# Investment Portfolio Construction: Age 28 Professional\n\n## 1. Investment Profile Assessment\n\n### Personal Financial Situation:\n- **Age:** 28 years old\n- **Investment Horizon:** 37 years until retirement (age 65)\n- **Risk Tolerance:** Moderate-Aggressive (time advantage)\n- **Monthly Investment Capacity:** 8,000,000 VND\n- **Current Portfolio Value:** 50,000,000 VND\n- **Investment Knowledge:** Intermediate\n\n### Financial Goals:\n- **Primary Goal:** Retirement với 5 billion VND at age 65\n- **Secondary Goals:** House down payment trong 5 years (500M VND)\n- **Required Annual Return:** 8.5% to meet retirement goal\n- **Emergency Fund:** Fully funded (6 months expenses)\n\n## 2. Strategic Asset Allocation\n\n### Core Portfolio Allocation (Age-Based Rule: 120 - Age):\n- **Equities (Stocks):** 70% (120-28 = 92, adjusted for conservative approach)\n- **Fixed Income (Bonds):** 20%\n- **Alternative Investments:** 7%\n- **Cash/Money Market:** 3%\n\n### Geographic Diversification:\n- **Domestic (Vietnam):** 40%\n- **Developed Markets (US, Europe):** 45%\n- **Emerging Markets:** 15%\n\n## 3. Detailed Portfolio Construction\n\n### Equity Holdings (70% = 35,000,000 VND):\n\n#### US Market ETFs (25% = 12,500,000 VND):\n- **VTI (Total Stock Market):** 10,000,000 VND\n  - Expense ratio: 0.03%\n  - Dividend yield: 1.8%\n  - Broad US market exposure\n\n- **QQQ (Nasdaq 100):** 2,500,000 VND\n  - Expense ratio: 0.20%\n  - Tech-heavy growth focus\n  - Higher volatility but growth potential\n\n#### Vietnam Market (20% = 10,000,000 VND):\n- **VN30 ETF:** 5,000,000 VND\n  - Top 30 Vietnamese companies\n  - Local market exposure\n  - Currency matching\n\n- **Individual Stocks:** 5,000,000 VND\n  - VCB (Vietcombank): 2,000,000 VND\n  - VIC (Vingroup): 1,500,000 VND\n  - HPG (Hoa Phat): 1,500,000 VND\n\n#### International Developed Markets (15% = 7,500,000 VND):\n- **VEA (Europe, Asia):** 4,500,000 VND\n- **VGK (European Stocks):** 3,000,000 VND\n\n#### Emerging Markets (10% = 5,000,000 VND):\n- **VWO (Emerging Markets ETF):** 3,000,000 VND\n- **ASEAN Focus ETF:** 2,000,000 VND\n\n### Fixed Income (20% = 10,000,000 VND):\n\n#### Government Bonds (12% = 6,000,000 VND):\n- **Vietnam Government Bonds:** 4,000,000 VND\n  - 5-year term, 6.5% annual yield\n  - Safe, predictable returns\n  - Currency matching for stability\n\n- **US Treasury ETFs (TLT):** 2,000,000 VND\n  - Long-term treasuries\n  - Inflation hedge\n  - Dollar diversification\n\n#### Corporate Bonds (8% = 4,000,000 VND):\n- **High-Grade Corporate Bonds:** 2,500,000 VND\n- **Vietnam Corporate Bond Fund:** 1,500,000 VND\n\n### Alternative Investments (7% = 3,500,000 VND):\n\n#### Real Estate Investment Trusts (5% = 2,500,000 VND):\n- **Vietnam REITs:** 1,500,000 VND\n  - Shopping malls, office buildings\n  - 7-9% dividend yields\n  - Real estate exposure without direct ownership\n\n- **US REITs (VNQ):** 1,000,000 VND\n  - Diversified US real estate\n  - Professional management\n  - Liquidity advantage\n\n#### Commodities (2% = 1,000,000 VND):\n- **Gold ETF (GLD):** 600,000 VND\n  - Inflation hedge\n  - Portfolio insurance\n  - Crisis diversification\n\n- **Commodity ETF (DJP):** 400,000 VND\n  - Broad commodity exposure\n  - Energy, agriculture, metals\n\n### Cash & Money Market (3% = 1,500,000 VND):\n- **High-Yield Savings:** 1,000,000 VND\n- **Money Market Fund:** 500,000 VND\n\n## 4. Investment Strategy Implementation\n\n### Dollar-Cost Averaging Plan:\n- **Monthly Investment:** 8,000,000 VND\n- **Allocation Strategy:** Maintain target percentages\n- **Rebalancing:** Quarterly review, annual rebalancing\n- **Automatic Investing:** Set up monthly transfers\n\n### Monthly Investment Distribution:\n- **Equities:** 5,600,000 VND\n- **Fixed Income:** 1,600,000 VND\n- **Alternatives:** 560,000 VND\n- **Cash Buffer:** 240,000 VND\n\n### Rebalancing Rules:\n- **Trigger:** When allocation deviates >5% from target\n- **Method:** Sell overweight, buy underweight\n- **Frequency:** Quarterly review, annual action\n- **Tax Considerations:** Use tax-advantaged accounts first\n\n## 5. Risk Management Framework\n\n### Diversification Strategies:\n- **Asset Class:** Stocks, bonds, alternatives, cash\n- **Geographic:** Multiple countries và regions\n- **Sector:** Technology, finance, healthcare, energy\n- **Company Size:** Large cap, mid cap, small cap\n- **Investment Style:** Growth và value\n\n### Risk Monitoring:\n- **Portfolio Beta:** Target 1.0-1.2 (moderate risk)\n- **Maximum Drawdown:** Prepared for 30-40% declines\n- **Correlation Analysis:** Ensure assets move differently\n- **Stress Testing:** Model portfolio performance trong various scenarios\n\n### Position Sizing Rules:\n- **Individual Stocks:** Maximum 5% of portfolio\n- **Single Sector:** Maximum 25% of equity allocation\n- **Single Country:** Maximum 50% of total portfolio\n- **Single Asset Class:** Follow strategic allocation limits\n\n## 6. Tax Optimization Strategies\n\n### Account Types Priority:\n1. **Tax-Advantaged Accounts:** Maximize contributions\n2. **Tax-Efficient Investments:** Index funds trong taxable accounts\n3. **Tax-Loss Harvesting:** Offset gains với losses\n4. **Asset Location:** Bonds trong tax-advantaged, growth stocks trong taxable\n\n### Tax-Efficient Investing:\n- **Hold Period:** >1 year for capital gains tax benefits\n- **Dividend Focus:** Qualified dividends taxed favorably\n- **Index Funds:** Lower turnover, fewer taxable events\n- **Municipal Bonds:** Tax-free interest (if applicable)\n\n## 7. Performance Monitoring\n\n### Key Performance Indicators:\n- **Total Return:** Compare to benchmarks (S&P 500, VN-Index)\n- **Risk-Adjusted Return:** Sharpe ratio >1.0 target\n- **Tracking Error:** Minimize deviation from target allocation\n- **Expense Ratio:** Average <0.5% for entire portfolio\n\n### Benchmark Comparisons:\n- **60/40 Portfolio:** Traditional stock/bond mix\n- **Target Date Fund:** Age-appropriate allocation\n- **S&P 500:** US equity benchmark\n- **VN-Index:** Vietnam market benchmark\n\n### Monthly Review Process:\n1. **Performance Analysis:** Calculate returns vs benchmarks\n2. **Allocation Check:** Confirm target percentages maintained\n3. **News Review:** Major events affecting holdings\n4. **Contribution Planning:** Adjust monthly investments if needed\n\n## 8. Long-Term Projections\n\n### Retirement Goal Analysis:\n- **Target Amount:** 5,000,000,000 VND\n- **Time Horizon:** 37 years\n- **Required Return:** 8.5% annually\n- **Monthly Investment:** 8,000,000 VND\n- **Probability of Success:** 75% based on historical returns\n\n### Scenario Analysis:\n- **Optimistic (10% annual return):** 8.2 billion VND\n- **Expected (8.5% annual return):** 5.0 billion VND\n- **Conservative (7% annual return):** 3.1 billion VND\n- **Pessimistic (5% annual return):** 1.6 billion VND\n\n### Adjustment Strategies:\n- **Underperformance:** Increase monthly contributions\n- **Overperformance:** Consider more aggressive allocation\n- **Life Changes:** Adjust goals và timeline as needed\n- **Market Volatility:** Stay the course, maintain discipline',
        requirements: [
          'Assess personal risk tolerance và investment timeline',
          'Research và select appropriate asset classes',
          'Calculate optimal allocation percentages',
          'Set up automatic investment plan',
          'Create monitoring và rebalancing schedule'
        ],
        hints: [
          'Use age-based allocation as starting point, adjust for personal situation',
          'Start với low-cost index funds before individual stock picking',
          'Consider tax implications của different account types',
          'Diversify across multiple dimensions: geography, sector, company size'
        ],
        expectedOutput:
          'Complete investment portfolio với detailed allocation, risk management plan, và performance monitoring system'
      }
    ],
    realWorldApplications: [
      'Retirement planning và wealth accumulation',
      'Education funding for children',
      'Real estate investment strategies',
      'Business investment và expansion funding',
      'Financial independence và early retirement (FIRE)'
    ],
    resources: [
      {
        title: 'Vanguard Investment Platform',
        url: 'https://investor.vanguard.com',
        type: 'platform',
        description:
          'Low-cost index funds và ETFs với comprehensive investment tools'
      },
      {
        title: 'Morningstar Investment Research',
        url: 'https://www.morningstar.com',
        type: 'platform',
        description:
          'Professional investment analysis, fund ratings, và portfolio tools'
      }
    ],
    caseStudies: [
      {
        title: 'Early Retirement Through Index Investing',
        person: 'Lan, Marketing Manager, Age 32',
        challenge:
          'Started investing late at age 30, wanted to retire by 50 với limited investment knowledge và moderate income',
        solution:
          'Focused on low-cost index fund investing: 80% stocks, 20% bonds. Maximized retirement account contributions, invested 40% of income through extreme frugality.',
        results:
          'Portfolio grew from 0 to 2.8 billion VND trong 15 years. Achieved financial independence at age 45, 5 years ahead of goal.',
        insights: [
          'Consistent investing beats timing the market',
          'High savings rate more important than investment returns',
          'Index funds provide broad diversification với minimal fees',
          'Compound interest accelerates wealth building over time'
        ]
      }
    ]
  }
];
