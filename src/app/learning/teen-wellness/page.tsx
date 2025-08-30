import type { Metadata } from 'next';

import { createModuleMetadata } from '@/utils/seo';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { teenWellnessLessons } from '@/data/teen-wellness';
import { K2Module } from '@/data/moduleNavigation';

export const metadata: Metadata = createModuleMetadata(
  'Teen Wellness & Mental Health - Sức khỏe tinh thần tuổi teen',
  'Chương trình toàn diện về sức khỏe tinh thần cho teenagers. Học cách quản lý stress, anxiety, xây dựng mối quan hệ tích cực và phát triển emotional intelligence.',
  ['teen wellness', 'mental health', 'sức khỏe tinh thần', 'tuổi teen', 'stress management', 'anxiety control', 'mindfulness'],
  'teen-wellness'
);

export default function TeenWellnessPage() {
  const moduleData = {
    id: K2Module.TeenWellness,
    title: 'Teen Wellness & Mental Health',
    subtitle: 'Sức khỏe tinh thần toàn diện cho thế hệ trẻ Việt Nam',
    description:
      'Chương trình wellness được thiết kế đặc biệt cho teenagers Việt Nam, giúp quản lý stress học tập, xây dựng mối quan hệ tích cực, và phát triển kỹ năng emotional intelligence cần thiết cho cuộc sống hiện đại. Từ mindfulness đến digital wellness, khóa học cung cấp tools thực tế để thành công cả trong học tập và cuộc sống.',
    level: 'Cơ bản đến Nâng cao',
    duration: '12-15 giờ',
    category: 'Youth Development & Mental Health',
    heroImageUrl:
      'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200&h=600&fit=crop',
    features: [
      '🧠 Stress & Anxiety Management cho áp lực học tập',
      '🧘 Mindfulness & Meditation techniques phù hợp với teen',
      '📱 Digital Wellness & Screen Time Balance',
      '❤️ Building Healthy Relationships với peers và family',
      '⚖️ Study-Life Balance để tránh burnout',
      '🎭 Emotional Intelligence Development',
      '🆘 Crisis Support & Professional Help Navigation',
      '🌱 Sustainable Wellness Habits cho tuổi trưởng thành',
    ],
    icon: '🧘',
    color: 'from-green-600 to-teal-600',
    objectives: [
      'Nhận biết và quản lý stress, anxiety hiệu quả trong môi trường học tập',
      'Phát triển mindfulness practice phù hợp với lifestyle của teens',
      'Xây dựng healthy relationship với technology và social media',
      'Cải thiện communication skills với family, friends, và peers',
      'Tạo sustainable balance giữa academic performance và personal wellbeing',
      'Phát triển emotional intelligence cho better decision making',
      'Hiểu khi nào cần seek professional help và làm thế nào',
      'Build resilience và coping strategies cho life challenges',
    ],
    prerequisites: [
      'Sự cởi mở và sẵn sàng thảo luận về cảm xúc và mental health',
      'Cam kết thực hành wellness techniques hàng ngày',
      'Có trusted adult (parent, teacher, counselor) để hỗ trợ',
      'Môi trường an toàn để explore và process difficult emotions',
      'Willingness để thay đổi unhealthy habits và patterns',
    ],
    careerOutcomes: [
      'Peer Mental Health Advocate và support group leader',
      'Youth Counselor và wellness program coordinator',
      'Mental Health First Aid trainer cho schools',
      'Social Worker chuyên về adolescent mental health',
      'Psychology hoặc Counseling field preparation',
      'Youth Program Developer cho NGOs và community organizations',
      'Wellness Coach cho teens và young adults',
      'Mental Health Content Creator và educator',
    ],
    industryApplications: [
      'Educational Sector - School counseling và student support',
      'Healthcare - Mental health services cho adolescents',
      'Technology - Digital wellness apps và platform development',
      'Social Services - Youth outreach và community mental health',
      'Non-Profit - Teen advocacy và mental health awareness',
      'Corporate Wellness - Employee mental health programs',
      'Media & Content - Mental health education và awareness',
      'Research - Adolescent psychology và wellness studies',
    ],
    marketDemand: {
      averageSalary: 'Invaluable life skills',
      jobGrowth: '+200% need',
      hireDemand: 'Critical Priority',
    },
    relatedModules: [
      K2Module.ContentCreator,
      K2Module.YoungEntrepreneur,
      K2Module.DigitalMarketing,
      K2Module.VietnameseHealthcare,
    ],
  };

  const additionalStats = [
    {
      label: 'Vietnamese Teens Affected',
      value: '75%+',
      icon: '🇻🇳',
    },
    {
      label: 'Stress Reduction',
      value: '60-80%',
      icon: '📉',
    },
    {
      label: 'Academic Performance',
      value: '+25%',
      icon: '📚',
    },
    {
      label: 'Relationship Quality',
      value: '+50%',
      icon: '❤️',
    },
  ];

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={teenWellnessLessons}
      additionalStats={additionalStats}
    />
  );
}
