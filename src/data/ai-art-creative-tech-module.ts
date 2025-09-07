import { K2Module } from './moduleNavigation';
import { ModuleNavigation } from '@/types';

export const aiArtCreativeTechModuleData: ModuleNavigation = {
  id: K2Module.AIArtCreativeTech,
  title: 'AI Art & Creative Technology',
  subtitle: 'AI sáng tạo',
  description: 'Master AI tools như Midjourney, DALL-E, Stable Diffusion',
  category: 'creative',
  icon: '🎨',
  color: 'from-pink-600 to-rose-600',
  totalDuration: '8-10 giờ',
  difficulty: 'Trung bình',
  level: 'Trung bình',
  duration: '8-10 giờ',
  href: '/learning/ai-art-creative-tech',
  features: ['Midjourney Pro', 'Video Generation', 'Creative Workflows', 'Commercial Use'],
  tags: ['ai', 'art', 'midjourney', 'creative', 'design'],
  prerequisites: ['Basic computer skills', 'Creative interest', 'Understanding của digital media'],
  lessons: [
    {
      id: 'ai-image-generation-fundamentals',
      title: 'AI Image Generation Fundamentals & Prompt Engineering',
      duration: '135 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'creative-video-ai-production',
      title: 'Creative Video AI Production & Advanced Workflows',
      duration: '135 phút',
      difficulty: 'Nâng cao',
    },
  ],
};
