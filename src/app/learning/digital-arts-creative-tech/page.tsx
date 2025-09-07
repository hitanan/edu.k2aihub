import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { DigitalArtsLessons } from '@/data/digital-arts-creative-tech';
import { createModuleMetadata } from '@/utils/seo';
import { K2Module } from '@/data/k2-modules';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  'Nghệ Thuật Số & Công Nghệ Sáng Tạo',
  'Master digital art, motion graphics, AI art generation và immersive media cho creative careers. Học từ digital painting đến VR content creation và creative business.',
  ['digital art', 'motion graphics', 'ai art', 'creative technology', 'vr content', 'nghệ thuật số', 'K2AI'],
  'digital-arts-creative-tech',
);

export default function DigitalArtsCreativeTechMainPage() {
  const moduleData = {
    id: 'digital-arts-creative-tech',
    title: 'Nghệ Thuật Số & Công Nghệ Sáng Tạo',
    subtitle: 'Creative technology cho thế hệ mới',
    description:
      'Master digital art, motion graphics, AI art generation và immersive media cho creative careers. Học cách kết hợp traditional art skills với cutting-edge technology để tạo ra innovative content.',
    level: 'Trung bình',
    duration: '10-12 giờ',
    category: 'Creative Technology',
    features: [
      'Digital art mastery với Vietnamese cultural themes',
      'Motion graphics cho social media và advertising',
      'AI art generation với advanced prompting',
      'VR/AR content creation cho immersive experiences',
    ],
    icon: '🎨',
    color: 'from-pink-600 to-rose-600',
    objectives: [
      'Master digital art tools từ Photoshop đến Blender',
      'Create professional motion graphics và animations',
      'Generate unique AI art incorporating Vietnamese culture',
      'Develop VR/AR content cho education và entertainment',
      'Build sustainable creative technology business',
    ],
    prerequisites: [
      'Basic understanding của art principles',
      'Access to digital art software hoặc tablet',
      'Interest in visual arts và creativity',
    ],
    careerOutcomes: [
      'Digital Artist cho game studios và animation companies',
      'Motion Graphics Designer trong advertising agencies',
      'AI Art Specialist cho NFT markets',
      'VR/AR Content Creator',
      'Creative Technology Entrepreneur',
    ],
    industryApplications: [
      'Game development và interactive entertainment',
      'Social media content creation',
      'Advertising và marketing campaigns',
      'Education technology visual content',
      'Cultural heritage digital preservation',
    ],
    marketDemand: {
      averageSalary: '20-40 triệu VNĐ',
      jobGrowth: '+180%',
      hireDemand: 'Rất cao',
    },
    heroImageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    relatedModules: [K2Module.AIArtCreativeTech, K2Module.MetaverseVREducation, K2Module.GameDevelopment],
  };

  return <ModulePageTemplate moduleData={moduleData} lessons={DigitalArtsLessons} />;
}
