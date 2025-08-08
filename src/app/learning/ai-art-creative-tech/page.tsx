import ModulePageTemplate, {
  ModuleData,
} from '@/components/learning/ModulePageTemplate';
import { aiArtLessons, AiArtLesson } from '@/data/ai-art-creative-tech';
import { BaseLessonData } from '@/components/learning/LessonPageTemplate';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import type { Metadata } from 'next';
import { K2Module } from '@/data/moduleNavigation';

export const metadata: Metadata = {
  title: createTitle('AI Art & Creative Technology - Sáng Tạo Nghệ Thuật AI'),
  description: createDescription(
    'Khóa học AI Art và Creative Technology. Học Midjourney, DALL-E, Stable Diffusion, AI video generation và creative workflows',
  ),
  keywords: createKeywords([
    'ai art',
    'midjourney',
    'dall-e',
    'stable diffusion',
    'ai video',
    'creative technology',
    'digital art',
    'prompt engineering',
  ]),
  authors: [{ name: 'K2AiHub Team' }],
  openGraph: {
    title: createTitle('AI Art & Creative Technology - Sáng Tạo Nghệ Thuật AI'),
    description: createDescription(
      'Master AI art generation và creative technology với các công cụ hàng đầu',
    ),
    type: 'website',
  },
};

// Convert AiArtLesson to BaseLessonData interface
function convertToLesson(aiLesson: AiArtLesson): BaseLessonData {
  return {
    id: aiLesson.id,
    title: aiLesson.title,
    description: aiLesson.description,
    duration: aiLesson.duration,
    difficulty: aiLesson.difficulty,
    category: aiLesson.artType || 'AI Art',
    imageUrl: aiLesson.imageUrl || '/default-lesson.jpg',
    videoUrl: aiLesson.videoUrl,
    objectives: aiLesson.objectives,
    prerequisites: aiLesson.prerequisites,
    exercises: aiLesson.exercises || [],
    resources: aiLesson.resources || [],
    tools: aiLesson.tools || [],
    realWorldApplications: aiLesson.realWorldApplications || [],
    caseStudies:
      aiLesson.caseStudies?.map((cs) => ({
        title: cs.title,
        organization: cs.artist,
        problem: cs.challenge,
        solution: cs.solution,
        impact: cs.results,
        innovations: cs.insights || [],
      })) || [],
  };
}

export default function AiArtCreativeTechPage() {
  // Convert lessons to base interface
  const convertedLessons = aiArtLessons.map(convertToLesson);

  const moduleConfig: ModuleData = {
    title: 'AI Art & Creative Technology',
    subtitle: 'Sáng Tạo Nghệ Thuật với AI',
    description:
      'Master AI art generation và creative technology. Từ Midjourney, DALL-E đến AI video production - tạo ra những tác phẩm nghệ thuật đỉnh cao với sức mạnh của AI.',
    primaryColor: 'pink',
    gradientColors: 'from-pink-900 via-purple-900 to-indigo-900',
    basePath: '/learning/ai-art-creative-tech',
    heroImageUrl:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
    statsConfig: {
      lessons: `${aiArtLessons.length}+ bài`,
      duration: '8-12 giờ',
      level: 'Cơ bản → Nâng cao',
      projects: '5+ dự án sáng tạo',
    },
    marketData: {
      marketSize: '$4.2 Billion',
      marketNote: 'AI Art & Creative Tools market by 2028',
      jobGrowth: '65% Growth',
      jobNote: 'Digital artist jobs incorporating AI',
      reduction: '90% Time Saving',
      reductionNote: 'Content creation time with AI tools',
      startups: '500+ Startups',
      startupsNote: 'AI creative tools companies globally',
    },
    careerPaths: [
      'AI Art Director',
      'Creative Technology Specialist',
      'Digital Content Creator',
      'Brand Visual Designer',
      'AI Prompt Engineer',
      'Creative AI Consultant',
    ],
    technicalHighlights: [
      {
        title: 'AI Image Generation',
        icon: '🎨',
        items: [
          'Midjourney Mastery',
          'DALL-E 3 Techniques',
          'Stable Diffusion',
          'Prompt Engineering',
        ],
      },
      {
        title: 'AI Video Production',
        icon: '🎬',
        items: ['RunwayML', 'Pika Labs', 'Motion Graphics', 'Cinematic AI'],
      },
      {
        title: 'Creative Workflows',
        icon: '⚡',
        items: [
          'Adobe Integration',
          'Brand Design Systems',
          'Creative Automation',
          'Style Transfer',
        ],
      },
      {
        title: 'Professional Applications',
        icon: '💼',
        items: [
          'Marketing Campaigns',
          'Brand Identity',
          'Social Media Content',
          'Product Visualization',
        ],
      },
      {
        title: 'Advanced Techniques',
        icon: '🚀',
        items: [
          'Style Consistency',
          'Multi-Platform Optimization',
          'Creative Direction',
          'Quality Control',
        ],
      },
      {
        title: 'Industry Integration',
        icon: '🌐',
        items: [
          'Client Workflows',
          'Production Pipelines',
          'Creative Teams',
          'Commercial Applications',
        ],
      },
    ],
    relatedModules: [
      K2Module.AI,
      K2Module.DigitalMarketing,
      K2Module.GameDevelopment,
    ],
  };

  return (
    <ModulePageTemplate moduleData={moduleConfig} lessons={convertedLessons} />
  );
}
