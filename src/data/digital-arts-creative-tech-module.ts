import { ModuleNavigation } from '@/types';

export const digitalArtsCreativeTechModuleData: ModuleNavigation = {
  id: 'digital-arts-creative-tech',
  title: 'Digital Arts & Creative Technology',
  subtitle: 'Nghệ thuật số và Công nghệ sáng tạo',
  description:
    'Khám phá sự giao thoa giữa nghệ thuật và công nghệ, từ digital painting đến VR art và interactive installations.',
  category: 'creative',
  icon: '🎨',
  color: 'from-rose-500 to-pink-500',
  totalDuration: '20-25 giờ',
  difficulty: 'Trung bình',
  level: 'Trung bình',
  duration: '20-25 giờ',
  href: '/learning/digital-arts-creative-tech',
  features: ['Digital Painting', '3D Modeling', 'VR/AR Art', 'Creative Coding', 'Interactive Art'],
  tags: ['digital art', 'creative tech', 'vr art', '3d modeling', 'interactive'],
  prerequisites: [
    'Năng khiếu nghệ thuật',
    'Kỹ năng sử dụng máy tính',
    'Tư duy sáng tạo và không gian',
    'Sẵn sàng thử nghiệm công nghệ mới',
  ],
  lessons: [
    {
      id: 'digital-painting-illustration',
      title: 'Digital Painting và Illustration',
      duration: '240 phút',
      difficulty: 'Trung bình',
    },
    {
      id: '3d-modeling-sculpting',
      title: '3D Modeling và Sculpting',
      duration: '280 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'vr-ar-art-creation',
      title: 'Sáng tạo nghệ thuật với VR/AR',
      duration: '260 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'creative-coding-interactive-installations',
      title: 'Creative Coding và Interactive Installations',
      duration: '220 phút',
      difficulty: 'Nâng cao',
    },
  ],
};
