import { EducationalGame } from '@/types';
import { defaultImage } from '@/utils/image';

export const NEW_STORY_GAMES_DATA: EducationalGame[] = [
  {
    id: 'data-detective-missing-shipment',
    title: 'Data Detective: The Missing Shipment',
    description:
      'Data Detective: Missing Shipment là interactive mystery game: investigate logistics company cargo disappearance using real data science techniques. You analyze: shipping manifests (SQL queries), GPS tracking logs (geospatial analysis), warehouse inventory (reconciliation), employee records (patterns), financial transactions (anomaly detection). Clues hidden in data: timestamps inconsistencies, route deviations, suspicious correlations. Game teach: data cleaning (handle missing values, outliers), exploratory analysis (visualize distributions, spot anomalies), hypothesis testing (is this statistically significant?), storytelling (present findings convincingly). Tools: SQL (join tables, filter records), Python pandas (data manipulation), Tableau (interactive dashboards), statistics (regression, correlation). Progressive difficulty: simple queries → complex joins → predictive modeling. Real forensics techniques: Benford Law (detect fake data), network analysis (connection patterns), time series anomalies. Learn critical thinking: distinguish correlation vs causation, consider alternative explanations, seek disconfirming evidence. Phù hợp aspiring data analysts, business intelligence students, anyone loving mysteries + data!',
    category: ['Logic & Puzzle'],
    difficulty: 'Trung bình',
    imageUrl: defaultImage,
    tags: ['data science', 'puzzle', 'mystery', 'analytics', 'problem solving'],
    faqs: [
      {
        question: 'Có cần coding experience trước không?',
        answer:
          'No! Game teaches SQL and Python basics through tutorials. Start with point-click interface, gradually introduce code. By end, write simple queries and scripts. Learning by solving mysteries = fun way to learn!',
      },
      {
        question: 'Data detective skills có real-world applications không?',
        answer:
          'Absolutely! Same techniques used in: (1) Fraud detection (insurance, banking), (2) Supply chain optimization, (3) Forensic accounting (Enron investigation!), (4) Cybersecurity (threat hunting), (5) Journalism (investigative reporting from leaks). High-demand skills!',
      },
      {
        question: 'Game có dạy về data privacy và ethics không?',
        answer:
          'Yes! Scenarios include: (1) What data ethical to access? (2) How anonymize sensitive info? (3) When report findings? (4) Balance investigation vs privacy. Learn responsible data handling - crucial for trust!',
      },
      {
        question: 'Làm sao biết which analysis technique to use?',
        answer:
          'Game provides framework: (1) Descriptive (what happened? - summaries, visualizations), (2) Diagnostic (why happened? - drill-down, comparisons), (3) Predictive (what will happen? - regression, ML), (4) Prescriptive (what should we do? - optimization). Learn to match question to method!',
      },
      {
        question: 'Career paths cho data detectives?',
        answer:
          'Many options: (1) Fraud analyst ($60K-90K), (2) Business intelligence analyst, (3) Data journalist (investigative teams), (4) Supply chain analyst, (5) Forensic data analyst. Any role involving finding insights in data. Storytelling + technical skills = powerful combo!',
      },
    ],
    learningObjectives: [
      'Master SQL queries: SELECT, JOIN, WHERE, GROUP BY for data investigation',
      'Learn data cleaning và exploratory analysis techniques',
      'Apply statistical methods: anomaly detection, correlation, significance testing',
      'Develop investigative thinking: form hypotheses, test with data, iterate',
      'Practice data storytelling: present findings clearly and convincingly',
    ],
    relatedLessons: [
      {
        moduleId: 'data-science',
        lessonId: 'data-science-fundamentals',
        title: 'Cơ bản về Data Science',
        connection: 'Áp dụng các khái niệm làm sạch và phân tích dữ liệu để giải quyết các manh mối trong game.',
      },
    ],
    isNew: true,
    isInternal: true,
  },
  {
    id: 'ethical-ai-simulator',
    title: 'Ethical AI Simulator',
    description:
      'Ethical AI Simulator là interactive narrative: play as AI developer at tech company facing real ethical dilemmas. Scenarios: (1) Hiring algorithm shows gender bias (fix loses accuracy - trade-off!), (2) Facial recognition for police (public safety vs racial bias), (3) Content moderation AI (free speech vs harm prevention), (4) Autonomous vehicle trolley problem (who to save in crash?), (5) Medical diagnosis AI (liability when wrong?), (6) Deepfake detection (arms race challenges). Branching story: your choices affect company reputation, user trust, regulatory scrutiny, personal career. Game shows consequences: technical (performance metrics), social (public reactions), legal (lawsuits, regulations), ethical (principles violated?). Teach frameworks: (1) Utilitarian (maximize good for most), (2) Deontological (rules-based ethics), (3) Virtue ethics (character focus), (4) Care ethics (relationships). Learn AI risks: bias amplification, privacy violations, job displacement, autonomous weapons, misinformation, surveillance. Based on real cases: Amazon hiring AI bias, Clearview facial recognition controversies, Tesla autopilot crashes. Phù hợp AI developers, CS students, policymakers, tech leaders, ethicists!',
    category: ['Simulation'],
    difficulty: 'Trung bình',
    imageUrl: defaultImage,
    tags: ['ai', 'ethics', 'simulation', 'narrative', 'decision making'],
    faqs: [
      {
        question: 'Có "right answers" trong ethical dilemmas không?',
        answer:
          'Often no! Game focuses on reasoning process, not specific answers. Different ethical frameworks yield different conclusions. Important: (1) Consider stakeholders, (2) Evaluate trade-offs, (3) Anticipate consequences, (4) Justify with principles. Thoughtful analysis > "correct" choice!',
      },
      {
        question: 'AI ethics chỉ là theoretical hay có real impact?',
        answer:
          'HUGE real impact! Examples: (1) Amazon scrapped biased hiring AI, (2) Clearview facial recognition banned in cities, (3) EU AI Act regulating high-risk systems, (4) ChatGPT content policies debated globally. Ethics determines whether AI benefits or harms humanity!',
      },
      {
        question: 'Developers có responsible cho AI harms không hay blame company/users?',
        answer:
          'Shared responsibility! Game explores: (1) Developers: design choices, testing biases, (2) Companies: priorities, deployment decisions, (3) Regulators: oversight, standards, (4) Users: usage patterns, feedback. No single villain - systemic issues. But developers have ethical duty to raise concerns!',
      },
      {
        question: 'Làm sao balance innovation speed với ethical considerations?',
        answer:
          'Tension exists! Game shows: (1) "Move fast, break things" causes harms (Facebook, Uber), (2) "Ethics by design" prevents costly mistakes later, (3) Early ethical review faster than post-deployment fixes. Long-term: ethical AI = competitive advantage (trust = users/investors)!',
      },
      {
        question: 'Career opportunities trong AI ethics?',
        answer:
          'Growing field: (1) AI ethicist ($100K-150K+), (2) ML fairness engineer, (3) AI policy analyst (government, think tanks), (4) Ethics researcher (universities), (5) Chief Ethics Officer (tech companies). Demand rising - regulations increasing, companies realizing importance!',
      },
    ],
    learningObjectives: [
      'Analyze complex ethical dilemmas in AI development and deployment',
      'Apply ethical frameworks: utilitarian, deontological, virtue ethics, care ethics',
      'Identify AI risks: bias, privacy violations, job displacement, misinformation',
      'Evaluate trade-offs between competing values: accuracy vs fairness, innovation vs safety',
      'Develop responsible AI practices: testing for bias, stakeholder consideration, transparency',
    ],
    relatedLessons: [
      {
        moduleId: 'ai-for-students',
        lessonId: 'ethical-use-of-ai',
        title: 'Sử dụng AI có trách nhiệm và đạo đức',
        connection:
          'Trải nghiệm trực tiếp các vấn đề thiên vị thuật toán và quyền riêng tư được thảo luận trong bài học.',
      },
    ],
    isNew: true,
    isInternal: true,
  },
];
