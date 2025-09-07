import { ModuleNavigation } from '@/types';

export const teenWellnessModuleData: ModuleNavigation = {
  id: 'teen-wellness',
  title: 'Teen Wellness & Mental Health',
  subtitle: 'Sức khỏe tinh thần tuổi teen',
  description:
    'Chương trình toàn diện về sức khỏe tinh thần cho teenagers. Học cách quản lý stress, anxiety, xây dựng mối quan hệ tích cực và phát triển emotional intelligence.',
  category: 'trending',
  icon: '🧘',
  color: 'from-green-600 to-teal-600',
  totalDuration: '12-15 giờ',
  difficulty: 'Cơ bản đến Nâng cao',
  level: 'Cơ bản',
  duration: '12-15 giờ',
  href: '/learning/teen-wellness',
  features: [
    'Stress & Anxiety Management',
    'Mindfulness & Meditation',
    'Digital Wellness',
    'Healthy Relationships',
    'Crisis Support',
  ],
  tags: ['teen wellness', 'mental health', 'stress management', 'mindfulness', 'emotional intelligence'],
  prerequisites: ['Sự cởi mở về cảm xúc', 'Cam kết thực hành hàng ngày', 'Hỗ trợ từ người lớn', 'Môi trường an toàn'],
  lessons: [
    {
      id: 'understanding-stress-anxiety',
      title: 'Understanding Stress & Anxiety Management',
      duration: '120 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'mindfulness-meditation-techniques',
      title: 'Mindfulness & Meditation Techniques',
      duration: '90 phút',
      difficulty: 'Cơ bản',
    },
    {
      id: 'digital-wellness-screen-time',
      title: 'Digital Wellness & Screen Time Balance',
      duration: '100 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'building-healthy-relationships',
      title: 'Building Healthy Relationships',
      duration: '110 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'study-life-balance',
      title: 'Study-Life Balance Strategies',
      duration: '95 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'emotional-intelligence-development',
      title: 'Emotional Intelligence Development',
      duration: '105 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'crisis-support-help-seeking',
      title: 'Crisis Support & When to Seek Help',
      duration: '75 phút',
      difficulty: 'Nâng cao',
    },
  ],
};
