import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { dataDrivenAnalyticsLessons } from '@/data/data-driven-analytics';
import { createTitle, createDescription } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';

// Generate metadata
export async function generateMetadata() {
  return {
    title: createTitle('Data-Driven Analytics'),
    description: createDescription('Master advanced analytics techniques để extract actionable insights từ data và drive strategic business decisions. Học từ analytics fundamentals đến growth optimization.'),
    keywords: ['data analytics', 'business intelligence', 'growth analytics', 'performance optimization', 'data visualization', 'phân tích dữ liệu', 'K2AI'],
    openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

      title: 'Data-Driven Analytics - K2AiHub',
      description: 'Advanced analytics cho strategic decision making và business growth',
      type: 'website',
    },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
  };
}

export default function DataDrivenAnalyticsMainPage() {
  const moduleData = {
    id: 'data-driven-analytics',
    title: 'Data-Driven Analytics',
    subtitle: 'Advanced analytics cho strategic decision making',
    description: 'Master advanced analytics techniques để extract actionable insights từ data và drive strategic business decisions. Học cách sử dụng data để optimize performance, predict trends và accelerate growth.',
    level: 'Nâng cao',
    duration: '7-8 giờ',
    category: 'Business Analytics',
    features: [
      'Advanced Analytics Techniques với statistical methods',
      'Predictive Trend Forecasting cho business planning',
      'Data Visualization Mastery với modern tools',
      'Strategic Decision Support framework development'
    ],
    icon: '📊',
    color: 'from-slate-600 to-blue-600',
    objectives: [
      'Master advanced analytics techniques cho complex data analysis',
      'Implement predictive models để forecast trends và behaviors',
      'Create compelling data visualizations để communicate insights',
      'Design strategic frameworks cho data-driven decision making',
      'Optimize business performance through analytics-driven approaches'
    ],
    prerequisites: [
      'Basic data analysis experience',
      'Excel/Google Sheets advanced knowledge',
      'Understanding of business metrics và KPIs',
      'Critical thinking và problem-solving skills'
    ],
    careerOutcomes: [
      'Data Analytics Specialist trong enterprises',
      'Business Intelligence Analyst',
      'Growth Analytics Manager',
      'Performance Optimization Consultant',
      'Strategic Analytics Director'
    ],
    industryApplications: [
      'E-commerce: conversion optimization, customer analytics',
      'Marketing: campaign performance, audience insights',
      'Finance: risk analysis, investment decisions',
      'Operations: efficiency optimization, process improvement',
      'Product: user behavior analysis, feature optimization'
    ],
    marketDemand: {
      averageSalary: '20-45 triệu VNĐ',
      jobGrowth: '+25%',
      hireDemand: 'Cao'
    },
    heroImageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    relatedModules: [
      K2Module.DigitalMarketing,
      K2Module.DataScienceAnalytics,
      K2Module.FinancialLiteracy
    ]
  };

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={dataDrivenAnalyticsLessons}
    />
  );
}
