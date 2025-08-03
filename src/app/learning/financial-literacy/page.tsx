import type { Metadata } from "next";
import ModulePageTemplate, { type ModuleData } from '@/components/learning/ModulePageTemplate';
import { type BaseLessonData } from '@/components/learning/LessonPageTemplate';
import { financialLiteracyLessons, type FinancialLiteracyLessons } from '@/data/financial-literacy';
import { createTitle, createDescription } from '@/utils/seo';
import { K2Module } from "@/data/moduleNavigation";

export const metadata: Metadata = {
  title: createTitle("Financial Literacy & FinTech - Kiến Thức Tài Chính"),
  description: createDescription("Khóa học Financial Literacy và FinTech toàn diện. Từ personal finance đến investment strategies, cryptocurrency và digital banking"),
  keywords: ["financial literacy", "fintech", "investment", "cryptocurrency", "personal finance", "digital banking", "k2aihub"],
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: "Financial Literacy & FinTech",
    description: "Nắm vững kiến thức tài chính và công nghệ FinTech với K2AiHub",
    type: "website",
  },
};

// Convert FinancialLiteracyLessons to BaseLessonData interface
function convertToLesson(financialLiteracyLesson: FinancialLiteracyLessons): BaseLessonData {
  return {
    id: financialLiteracyLesson.id,
    title: financialLiteracyLesson.title,
    description: financialLiteracyLesson.description,
    duration: financialLiteracyLesson.duration,
    difficulty: financialLiteracyLesson.difficulty,
    category: 'Financial Technology',
    imageUrl: financialLiteracyLesson.imageUrl || '/default-lesson.jpg',
    videoUrl: financialLiteracyLesson.videoUrl,
    objectives: financialLiteracyLesson.objectives,
    prerequisites: financialLiteracyLesson.prerequisites || ['Basic math skills', 'Interest in finance'],
    exercises: financialLiteracyLesson.exercises?.map(ex => ({
      title: ex.title,
      description: ex.description,
      difficulty: ex.difficulty,
      materials: ex.requirements || [],
      procedure: ex.hints || [ex.description],
      expectedResults: ex.expectedOutput || 'Financial calculation completed',
      solution: ex.solution || 'Follow financial best practices'
    })) || [],
    resources: financialLiteracyLesson.resources || [],
    tools: financialLiteracyLesson.technologies || ['Excel', 'Banking Apps', 'Investment Platforms', 'Budgeting Tools'],
    realWorldApplications: financialLiteracyLesson.realWorldApplications || [],
    caseStudies: financialLiteracyLesson.caseStudies?.map(cs => ({
      title: cs.title,
      organization: cs.person,
      problem: cs.challenge,
      solution: cs.solution,
      impact: cs.results,
      innovations: cs.insights || []
    })) || []
  }
}

export default function FinancialLiteracyPage() {
  // Convert lessons to base interface
  const convertedLessons = financialLiteracyLessons.map(convertToLesson);

  const moduleData: ModuleData = {
    id: 'financial-literacy',
    title: 'Financial Literacy & FinTech',
    subtitle: 'Kiến thức tài chính & công nghệ FinTech',
    description: 'Nắm vững kiến thức tài chính cá nhân và khám phá thế giới FinTech. Từ budgeting đến investment, cryptocurrency và digital banking - trở thành chuyên gia tài chính trong thời đại số.',
    level: 'Cơ bản đến Nâng cao',
    duration: '18-22 giờ',
    category: 'Finance & Technology',
    primaryColor: 'green',
    gradientColors: 'from-slate-900 via-green-900 to-emerald-900',
    basePath: '/learning/financial-literacy',
    heroImageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=600&fit=crop',
    features: [
      'Personal Finance Management và Budgeting',
      'Investment Strategies và Portfolio Management',
      'Cryptocurrency và Blockchain Technology',
      'Digital Banking và FinTech Applications',
      'Risk Management và Insurance Planning',
      'Retirement Planning và Wealth Building',
      'Tax Planning và Optimization',
      'Financial Analysis và Decision Making'
    ],
    icon: '💰',
    statsConfig: {
      lessons: `${financialLiteracyLessons.length}+ bài`,
      duration: '18-22 giờ',
      level: 'Cơ bản đến Nâng cao',
      projects: '10+ tình huống thực tế'
    },
    marketData: {
      marketSize: '$26.5 Trillion',
      marketNote: 'Global FinTech market by 2026',
      jobGrowth: '20% Growth',
      jobNote: 'FinTech jobs by 2030',
      reduction: '40% Lower',
      reductionNote: 'Cost with digital banking',
      startups: '26000+ Companies',
      startupsNote: 'FinTech companies worldwide'
    },
    objectives: [
      'Quản lý tài chính cá nhân và xây dựng budget hiệu quả',
      'Hiểu và áp dụng các chiến lược đầu tư thông minh',
      'Nắm vững cryptocurrency và blockchain technology',
      'Sử dụng thành thạo các ứng dụng FinTech hiện đại',
      'Phân tích risk và lập kế hoạch bảo hiểm phù hợp',
      'Xây dựng kế hoạch retirement và wealth building'
    ],
    prerequisites: [
      'Kỹ năng toán học cơ bản và logic tính toán',
      'Hiểu biết về tiền tệ và hệ thống ngân hàng',
      'Sử dụng thành thạo smartphone và computer',
      'Quan tâm đến thị trường tài chính và đầu tư'
    ],
    careerPaths: [
      'Financial Advisor (15-35 triệu VNĐ)',
      'FinTech Product Manager (25-50 triệu VNĐ)',
      'Investment Analyst (18-40 triệu VNĐ)',
      'Digital Banking Specialist (20-38 triệu VNĐ)',
      'Cryptocurrency Trader (10-100+ triệu VNĐ)',
      'Risk Management Analyst (22-42 triệu VNĐ)',
      'Financial Technology Consultant (28-55 triệu VNĐ)',
      'Personal Finance Coach (12-30 triệu VNĐ)'
    ],
    industryApplications: [
      'Banking và financial institutions',
      'Investment management firms',
      'Insurance companies',
      'FinTech startups và technology',
      'Cryptocurrency exchanges',
      'Real estate và property investment',
      'Government financial agencies',
      'Corporate finance departments',
      'Financial consulting services',
      'Educational institutions'
    ],
    technicalHighlights: [
      {
        title: 'Personal Finance',
        icon: '📊',
        items: ['Budgeting Apps', 'Expense Tracking', 'Goal Setting', 'Cash Flow Analysis']
      },
      {
        title: 'Investment Tools',
        icon: '📈',
        items: ['Portfolio Management', 'Stock Analysis', 'Robo-Advisors', 'Trading Platforms']
      },
      {
        title: 'Cryptocurrency',
        icon: '₿',
        items: ['Blockchain Technology', 'Digital Wallets', 'DeFi Protocols', 'NFT Marketplace']
      },
      {
        title: 'Digital Banking',
        icon: '🏦',
        items: ['Mobile Banking', 'Digital Payments', 'Online Lending', 'Open Banking APIs']
      },
      {
        title: 'Risk Management',
        icon: '🛡️',
        items: ['Insurance Planning', 'Credit Scoring', 'Market Analysis', 'Portfolio Diversification']
      },
      {
        title: 'Financial Analysis',
        icon: '🔍',
        items: ['Excel Modeling', 'Financial Ratios', 'Valuation Methods', 'Data Visualization']
      }
    ],
    relatedModules: [K2Module.DigitalMarketing, K2Module.Python, K2Module.AIArtCreativeTech]
  };

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={convertedLessons}
    />
  );
}
