import { ModuleNavigation } from '@/types';

export const businessMarketingModuleData: ModuleNavigation = {
  id: 'business-marketing',
  title: 'AI cho Kinh Doanh & Marketing',
  subtitle: 'Marketing thông minh với AI',
  description: 'Ứng dụng AI trong marketing, phân tích khách hàng, tạo chatbot và tối ưu hóa SEO cho doanh nghiệp',
  category: ['professional', 'trending'], // Multiple categories
  icon: '📈',
  color: 'from-orange-600 to-red-600',
  totalDuration: '6-8 giờ',
  difficulty: 'Trung bình đến Nâng cao',
  href: '/learning/ai/business-marketing',
  features: ['Marketing automation', 'Customer analytics', 'Chatbot development', 'SEO optimization'],
  tags: ['marketing', 'business', 'analytics', 'automation'],
  prerequisites: ['Hiểu biết cơ bản về marketing', 'Kinh nghiệm kinh doanh'],
  lessons: [
    {
      id: 'marketing-automation',
      title: 'Tự động hóa Marketing',
      duration: '70 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'customer-analytics',
      title: 'Phân tích khách hàng với AI',
      duration: '80 phút',
      difficulty: 'Nâng cao',
    },
    {
      id: 'chatbot-development',
      title: 'Phát triển Chatbot',
      duration: '60 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'seo-ai',
      title: 'SEO tối ưu với AI',
      duration: '50 phút',
      difficulty: 'Trung bình',
    },
    {
      id: 'ai-powered-seo-business',
      title: 'SEO được hỗ trợ bởi AI cho doanh nghiệp',
      duration: '60 phút',
      difficulty: 'Trung bình',
    },
  ],
};
