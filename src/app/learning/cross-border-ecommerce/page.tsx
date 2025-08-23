import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { crossBorderEcommerceLessons } from '@/data/cross-border-ecommerce';
import { createTitle, createDescription } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';

export async function generateMetadata() {
  return {
    title: createTitle('Thương mại Điện tử Xuyên biên giới'),
    description: createDescription('Học cách kinh doanh online quốc tế, từ thiết lập store đến logistics và marketing đa văn hóa. Khóa học thực tế với market size $5-12 tỷ USD.'),
    keywords: ['cross-border-ecommerce', 'thuong-mai-dien-tu', 'kinh-doanh-quoc-te', 'ban-hang-online', 'logistics', 'payment-gateway', 'K2AI'],
    openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

      title: 'Thương mại Điện tử Xuyên biên giới - K2AiHub',
      description: 'Mở rộng kinh doanh ra thị trường quốc tế với thương mại điện tử xuyên biên giới. Học từ cơ bản đến nâng cao.',
      type: 'website',
    },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
  };
}

export default function CrossBorderEcommerceMainPage() {
  const moduleData = {
    id: 'cross-border-ecommerce',
    title: 'Thương mại Điện tử Xuyên biên giới',
    subtitle: 'Mở rộng kinh doanh ra thị trường toàn cầu',
    description: 'Nắm vững nghệ thuật kinh doanh online quốc tế với market size lên đến $12 tỷ USD. Từ việc thiết lập store trên các platform lớn như Amazon, eBay đến quản lý logistics, thanh toán và marketing đa văn hóa. Khóa học cung cấp kiến thức thực tế để mở rộng thành công ra thị trường ASEAN và toàn cầu.',
    level: 'Trung bình',
    duration: '12-15 giờ',
    category: 'Professional Skills',
    features: [
      'Thiết lập store trên các platform quốc tế (Amazon, eBay, Shopee Global)',
      'Quản lý logistics và vận chuyển xuyên biên giới hiệu quả',
      'Giải pháp thanh toán đa tiền tệ và multi-gateway',
      'Marketing và localization cho từng thị trường mục tiêu',
      'Compliance pháp lý và tax management quốc tế',
      'Analytics và optimization để tăng ROI 25-40%'
    ],
    icon: '🌐',
    color: 'from-emerald-600 to-green-600',
    objectives: [
      'Thiết lập và vận hành cross-border e-commerce business từ A-Z',
      'Quản lý hiệu quả logistics, payment và customer service quốc tế',
      'Phát triển chiến lược marketing phù hợp với văn hóa địa phương',
      'Tuân thủ pháp lý và tối ưu hóa tax cho business quốc tế',
      'Sử dụng data analytics để tối ưu hóa performance và ROI',
      'Mở rộng thành công vào thị trường ASEAN và châu Âu'
    ],
    prerequisites: [
      'Kiến thức cơ bản về thương mại điện tử và marketing online',
      'Hiểu biết về business operations và customer service',
      'Kỹ năng sử dụng máy tính và các công cụ online',
      'Khả năng giao tiếp bằng tiếng Anh cơ bản'
    ],
    careerOutcomes: [
      'Cross-border E-commerce Manager (25-45 triệu VNĐ/tháng)',
      'International Business Development Specialist',
      'Global Marketplace Consultant',
      'Digital Export Manager',
      'E-commerce Entrepreneur (Thu nhập không giới hạn)',
      'International Logistics Coordinator'
    ],
    industryApplications: [
      'Mở rộng business existing ra thị trường quốc tế',
      'Tư vấn cross-border cho SMEs Việt Nam',
      'Phát triển marketplace solutions cho enterprises',
      'Quản lý global supply chain và logistics',
      'International digital marketing agency',
      'Cross-border payment và fintech solutions'
    ],
    marketDemand: {
      averageSalary: '25-45 triệu VNĐ',
      jobGrowth: '+42%',
      hireDemand: 'Rất cao'
    },
    heroImageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    relatedModules: [
      K2Module.DigitalMarketing,
      K2Module.FinancialLiteracy,
      K2Module.DataScienceAnalytics,
      K2Module.VietnameseBusiness
    ]
  };

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={crossBorderEcommerceLessons}
    />
  );
}
