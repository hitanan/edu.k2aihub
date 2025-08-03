import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { youngEntrepreneurLessons } from '@/data/young-entrepreneur';
import { createTitle, createDescription } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';

// Generate metadata for SEO
export async function generateMetadata() {
  return {
    title: createTitle('Young Entrepreneur Bootcamp - Khởi nghiệp thành công từ tuổi teen'),
    description: createDescription(
      'Bootcamp toàn diện cho thế hệ GenZ muốn khởi nghiệp: từ ý tưởng, xây dựng MVP, gọi vốn đến scale business với focus đặc biệt vào thị trường Việt Nam. Học từ các startup unicorn Việt Nam.'
    ),
    keywords: [
      'young entrepreneur',
      'startup vietnam',
      'khởi nghiệp',
      'business model',
      'mvp development',
      'fundraising',
      'gọi vốn',
      'startup ecosystem',
      'K2AI',
      'entrepreneur bootcamp',
      'teenage entrepreneur',
      'vietnam startup ecosystem'
    ],
    openGraph: {
      title: 'Young Entrepreneur Bootcamp - Khởi nghiệp thành công từ tuổi teen',
      description: 'Bootcamp toàn diện cho GenZ: từ ý tưởng đến startup thành công. Học từ ecosystem startup Việt Nam.',
      type: 'website',
      images: [
        {
          url: '/images/young-entrepreneur/young-entrepreneur-hero.jpg',
          width: 1200,
          height: 630,
          alt: 'Young Entrepreneur Bootcamp - K2AI'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Young Entrepreneur Bootcamp - K2AI',
      description: 'Bootcamp khởi nghiệp cho GenZ Việt Nam'
    }
  };
}

export default function YoungEntrepreneurBootcampPage() {
  const moduleData = {
    id: K2Module.YoungEntrepreneur,
    title: 'Young Entrepreneur Bootcamp',
    subtitle: 'Khởi nghiệp thành công từ tuổi teen',
    description: 'Bootcamp toàn diện cho thế hệ GenZ muốn khởi nghiệp thành công. Từ phát triển ý tưởng, xây dựng MVP, kiểm chứng thị trường, gọi vốn đầu tư đến scale business bền vững. Chương trình tập trung đặc biệt vào ecosystem startup Việt Nam với các case study từ Tiki, Grab, VNG, Momo và các unicorn khác.',
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
      'Case studies từ startup unicorn Việt Nam'
    ],
    icon: '🚀',
    color: 'from-orange-600 to-red-600',
    objectives: [
      'Xây dựng startup từ ý tưởng đến MVP thành công',
      'Hiểu rõ ecosystem khởi nghiệp Việt Nam',
      'Phát triển kỹ năng leadership và team management',
      'Chuẩn bị sẵn sàng cho fundraising và scaling'
    ],
    prerequisites: [
      'Tư duy logic và khả năng sáng tạo',
      'Đam mê với kinh doanh và khởi nghiệp',
      'Kỹ năng học hỏi nhanh và thích ứng',
      'Tinh thần chấp nhận thử thách và thất bại'
    ],
    careerOutcomes: [
      'Founder/Co-founder của startup công nghệ',
      'Business Development Manager tại tech companies',
      'Product Manager cho digital products',
      'Startup Consultant và Business Advisor',
      'Venture Capital Analyst',
      'Innovation Manager tại corporate'
    ],
    industryApplications: [
      'Technology Startups & SaaS platforms',
      'E-commerce & Digital Marketplace',
      'FinTech & Digital Banking',
      'EdTech & Online Learning platforms',
      'HealthTech & Telemedicine',
      'AgriTech & Sustainable Solutions',
      'Social Impact & Non-profit organizations'
    ],
    marketDemand: {
      averageSalary: '20-100 triệu VNĐ',
      jobGrowth: '+35%',
      hireDemand: 'Rất cao'
    },
    relatedModules: [
      K2Module.ContentCreator,
      K2Module.DigitalMarketing,
      K2Module.FinancialLiteracy,
      K2Module.AIArtCreativeTech
    ]
  };

  const additionalStats = [
    {
      label: 'Startup Success Rate',
      value: '15-25%',
      icon: <span className="text-2xl">📈</span>
    },
    {
      label: 'Unicorn Startups VN',
      value: '8+',
      icon: <span className="text-2xl">🦄</span>
    },
    {
      label: 'VC Funding 2024',
      value: '$800M+',
      icon: <span className="text-2xl">💰</span>
    },
    {
      label: 'Age Target',
      value: '16-25',
      icon: <span className="text-2xl">👥</span>
    }
  ];

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={youngEntrepreneurLessons}
      additionalStats={additionalStats}
    />
  );
}
