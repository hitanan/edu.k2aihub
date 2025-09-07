import { K2Module } from '@/data/moduleNavigation';
import { ModuleData } from '@/types';

export const youngEntrepreneurModuleData: ModuleData = {
  id: K2Module.YoungEntrepreneur,
  title: 'Young Entrepreneur Bootcamp',
  subtitle: 'Khởi nghiệp thành công từ tuổi teen',
  description:
    'Bootcamp toàn diện cho thế hệ GenZ muốn khởi nghiệp thành công. Từ phát triển ý tưởng, xây dựng MVP, kiểm chứng thị trường, gọi vốn đầu tư đến scale business bền vững. Chương trình tập trung đặc biệt vào ecosystem startup Việt Nam với các case study từ Tiki, Grab, VNG, Momo và các unicorn khác.',
  level: 'Trung bình',
  duration: '25-30 giờ',
  category: 'Entrepreneurship & Business',
  heroImageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop',
  features: [
    'Phát triển tư duy khởi nghiệp và nhận diện cơ hội thị trường',
    'Xây dựng và validate Business Model Canvas',
    'Tạo MVP và test với real customers',
    'Growth hacking và digital marketing strategies',
    'Fundraising và investor presentation skills',
    'Team building và leadership development',
    'Legal compliance và business operations',
    'Case studies từ startup unicorn Việt Nam',
  ],
  icon: '🚀',
  color: 'from-orange-600 to-red-600',
  objectives: [
    'Xây dựng startup từ ý tưởng đến MVP thành công',
    'Hiểu rõ ecosystem khởi nghiệp Việt Nam',
    'Phát triển kỹ năng leadership và team management',
    'Chuẩn bị sẵn sàng cho fundraising và scaling',
  ],
  prerequisites: [
    'Tư duy logic và khả năng sáng tạo',
    'Đam mê với kinh doanh và khởi nghiệp',
    'Kỹ năng học hỏi nhanh và thích ứng',
    'Tinh thần chấp nhận thử thách và thất bại',
  ],
  careerOutcomes: [
    'Founder/Co-founder của startup công nghệ',
    'Business Development Manager tại tech companies',
    'Product Manager cho digital products',
    'Startup Consultant và Business Advisor',
    'Venture Capital Analyst',
    'Innovation Manager tại corporate',
  ],
  industryApplications: [
    'Technology Startups & SaaS platforms',
    'E-commerce & Digital Marketplace',
    'FinTech & Digital Banking',
    'EdTech & Online Learning platforms',
    'HealthTech & Telemedicine',
    'AgriTech & Sustainable Solutions',
    'Social Impact & Non-profit organizations',
  ],
  marketDemand: {
    averageSalary: '20-100 triệu VNĐ',
    jobGrowth: '+35%',
    hireDemand: 'Rất cao',
  },
  relatedModules: [
    K2Module.ContentCreator,
    K2Module.DigitalMarketing,
    K2Module.FinancialLiteracy,
    K2Module.AIArtCreativeTech,
  ],
};
