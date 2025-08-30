import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { legalTechLessons } from '@/data/legal-technology';
import { createModuleMetadata } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';
import { ModuleData } from '@/types';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  'Legal Technology - Công Nghệ Pháp Lý',
  'Ứng dụng công nghệ trong lĩnh vực pháp lý từ contract automation đến AI legal research. Tối ưu hóa quy trình pháp lý với legal tech solutions trong hệ thống luật Việt Nam.',
  ['legal technology', 'công nghệ pháp lý', 'contract automation', 'legal research AI', 'case management', 'compliance technology', 'intellectual property management', 'legal tech vietnam', 'K2AI'],
  'legal-technology'
);

export default function LegalTechnologyMainPage() {
  const moduleData: ModuleData = {
    id: 'legal-technology',
    title: 'Legal Technology',
    subtitle: 'Cách mạng hóa nghề luật với công nghệ tiên tiến',
    description: 'Khám phá và ứng dụng các giải pháp công nghệ tiên tiến trong lĩnh vực pháp lý. Từ tự động hóa tài liệu hợp đồng, AI-powered legal research đến case management và compliance automation trong bối cảnh hệ thống pháp luật Việt Nam.',
    level: 'Nâng cao',
    duration: '20-25 giờ',
    category: 'Legal Technology',
    features: [
      'Legal document automation và contract lifecycle management',
      'AI-powered legal research và case law analysis',
      'Comprehensive case management và practice optimization',
      'Regulatory compliance automation và risk management',
      'Intellectual property management với Vietnamese IP system'
    ],
    icon: '⚖️',
    color: 'from-indigo-600 to-blue-600',
    heroImageUrl: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1200&h=600&fit=crop',
    objectives: [
      'Master legal document automation và contract management systems',
      'Leverage AI tools cho efficient legal research và analysis',
      'Implement comprehensive case management workflows',
      'Build regulatory compliance automation systems',
      'Optimize intellectual property portfolio management'
    ],
    prerequisites: [
      'Understanding của Vietnamese legal system',
      'Legal practice experience hoặc law education',
      'Basic technology và software proficiency'
    ],
    careerOutcomes: [
      'Legal Technology Manager (30-60 triệu VNĐ)',
      'Legal Operations Specialist (25-50 triệu VNĐ)',
      'Compliance Technology Officer (28-55 triệu VNĐ)',
      'Legal Tech Consultant (35-70 triệu VNĐ)',
      'IP Portfolio Manager (30-65 triệu VNĐ)',
      'Legal Innovation Director (40-80 triệu VNĐ)',
      'LegalTech Entrepreneur (Thu nhập không giới hạn)'
    ],
    industryApplications: [
      'International law firms với Vietnam practices',
      'Corporate legal departments của multinational companies',
      'Vietnamese law firms modernizing operations',
      'Compliance departments trong regulated industries',
      'IP law firms và patent prosecution services',
      'Legal tech startups serving Vietnamese market'
    ],
    marketDemand: {
      averageSalary: '30-70 triệu VNĐ',
      jobGrowth: '+45%',
      hireDemand: 'Rất Cao'
    },
    relatedModules: [
      K2Module.AI_Art,
      K2Module.ProfessionalSkills,
      K2Module.Cybersecurity,
      K2Module.Python
    ]
  };

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={legalTechLessons}
    />
  );
}