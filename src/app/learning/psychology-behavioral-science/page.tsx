import type { Metadata } from 'next';

import ModulePageTemplate, {
  type ModuleData,
} from '@/components/learning/ModulePageTemplate';
import { psychologyBehavioralScienceLessons } from '@/data/psychology-behavioral-science';
import { K2Module } from '@/data/moduleNavigation';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  'Psychology & Behavioral Science - Tâm Lý Học Ứng Dụng',
  'Master behavioral psychology principles for technology design. Học user experience psychology và behavioral economics trong digital products.',
  ['behavioral psychology', 'behavioral science', 'user psychology', 'behavioral economics', 'cognitive psychology', 'ux psychology', 'vietnam psychology', 'k2aihub'],
  'psychology-behavioral-science'
);

export default function PsychologyBehavioralSciencePage() {
  const moduleData: ModuleData = {
    id: 'psychology-behavioral-science',
    title: 'Psychology & Behavioral Science',
    subtitle: 'Tâm lý học ứng dụng trong công nghệ',
    description:
      'Khám phá behavioral psychology principles và applications trong technology design, user experience và business strategy.',
    level: 'Trung bình',
    duration: '16-22 giờ',
    category: 'Applied Psychology',
    primaryColor: 'purple',
    gradientColors: 'from-slate-900 via-purple-900 to-indigo-900',
    basePath: '/learning/psychology-behavioral-science',
    heroImageUrl:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop',
    features: [
      'Cognitive Psychology Principles',
      'Behavioral Economics Applications',
      'User Experience Psychology',
      'Persuasion & Influence Techniques',
      'Decision Making Psychology',
      'Social Psychology in Technology',
      'Behavioral Design Patterns',
      'Cultural Psychology Insights',
    ],
    icon: '🧠',
    color: 'from-purple-600 to-indigo-600',
    statsConfig: {
      lessons: `${psychologyBehavioralScienceLessons.length}+ bài`,
      duration: '16-22 giờ',
      level: 'Trung bình',
      projects: '10+ psychology experiments',
    },
    marketData: {
      marketSize: '$25.8 Billion',
      marketNote: 'Global behavioral analytics market by 2027',
      jobGrowth: '72% Growth',
      jobNote: 'UX psychology specialist roles by 2030',
      reduction: '35% Better',
      reductionNote: 'User engagement through behavioral design',
      startups: '88% Companies',
      startupsNote: 'Using behavioral insights for product design',
    },
    objectives: [
      'Understand cognitive psychology principles for design',
      'Apply behavioral economics trong business decisions',
      'Design persuasive user experiences',
      'Analyze user behavior patterns',
      'Create behavior-driven product strategies',
      'Develop cultural sensitivity trong global products',
    ],
    prerequisites: [
      'Basic understanding của human behavior',
      'Interest trong psychology applications',
      'User experience awareness',
      'Critical thinking skills',
    ],
    careerPaths: [
      'UX Psychology Specialist (40-75 triệu VNĐ)',
      'Behavioral Product Manager (45-85 triệu VNĐ)',
      'User Research Psychologist (35-70 triệu VNĐ)',
      'Behavioral Analytics Manager (40-80 triệu VNĐ)',
      'Persuasion Design Expert (35-75 triệu VNĐ)',
      'Consumer Behavior Analyst (40-70 triệu VNĐ)',
      'Behavioral Economics Consultant (45-90 triệu VNĐ)',
      'Cultural Psychology Advisor (35-80 triệu VNĐ)',
    ],
    industryApplications: [
      'Product design và user experience',
      'Marketing psychology strategies',
      'E-commerce conversion optimization',
      'Educational technology development',
      'Healthcare behavior modification',
      'Financial services user engagement',
      'Gaming psychology applications',
      'Social media platform design',
      'Mobile app engagement design',
      'Corporate training programs',
    ],
    technicalHighlights: [
      {
        title: 'Cognitive Principles',
        icon: '🎯',
        items: [
          'Attention Management',
          'Memory Psychology',
          'Decision Heuristics',
          'Cognitive Load Theory',
        ],
      },
      {
        title: 'Behavioral Patterns',
        icon: '📊',
        items: [
          'User Journey Mapping',
          'Behavior Analytics',
          'A/B Testing Psychology',
          'Conversion Optimization',
        ],
      },
      {
        title: 'Design Psychology',
        icon: '🎨',
        items: [
          'Color Psychology',
          'Typography Psychology',
          'Layout Psychology',
          'Interaction Design',
        ],
      },
      {
        title: 'Persuasion Techniques',
        icon: '💡',
        items: [
          'Social Proof',
          'Scarcity Principle',
          'Authority Influence',
          'Reciprocity Psychology',
        ],
      },
      {
        title: 'Vietnamese Context',
        icon: '🇻🇳',
        items: [
          'Cultural Psychology',
          'Local Behavior Patterns',
          'Social Media Preferences',
          'Traditional Values Impact',
        ],
      },
      {
        title: 'Research Methods',
        icon: '🔬',
        items: [
          'User Research',
          'Experimental Design',
          'Statistical Analysis',
          'Ethnographic Studies',
        ],
      },
    ],
    relatedModules: [
      K2Module.UXUIDesign,
      K2Module.DigitalMarketing,
      K2Module.DataScienceAnalytics,
    ],
  };

  return (
    <ModulePageTemplate moduleData={moduleData} lessons={psychologyBehavioralScienceLessons} />
  );
}