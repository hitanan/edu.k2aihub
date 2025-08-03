import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { contentCreatorLessons } from '@/data/content-creator';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';

export async function generateMetadata() {
  return {
    title: createTitle('Content Creator Academy - Thành công với Social Media'),
    description: createDescription('Học từ A-Z cách trở thành content creator thành công trên TikTok, YouTube, Instagram. Từ xây dựng personal brand đến monetization với thu nhập 15-100 triệu VNĐ/tháng.'),
    keywords: createKeywords([
      'content creator',
      'social media',
      'youtube',
      'tiktok',
      'instagram',
      'personal branding',
      'video production',
      'livestreaming',
      'monetization',
      'brand partnerships',
      'influencer marketing',
      'content strategy',
      'vietnamese creators',
      'social media marketing',
      'digital marketing',
      'creator economy',
      'K2AI'
    ]),
    openGraph: {
      title: 'Content Creator Academy - K2AI Learning Platform',
      description: 'Học từ A-Z cách trở thành content creator thành công. Thu nhập 15-100 triệu VNĐ/tháng từ social media.',
      type: 'website',
      locale: 'vi_VN',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Content Creator Academy - Thành công với Social Media',
      description: 'Học từ A-Z cách trở thành content creator thành công trên TikTok, YouTube, Instagram.',
    },
    alternates: {
      canonical: '/learning/content-creator',
    },
  };
}

export default function ContentCreatorPage() {
  const moduleData = {
    id: K2Module.ContentCreator,
    title: 'Content Creator Academy',
    subtitle: 'Thành công với Social Media - Thu nhập 15-100 triệu VNĐ/tháng',
    description: 'Khóa học toàn diện từ A-Z để trở thành content creator thành công trên các nền tảng TikTok, YouTube, Instagram, Facebook. Học cách xây dựng personal brand mạnh mẽ, tạo nội dung viral, và kiếm tiền bền vững từ sự sáng tạo của bạn.',
    level: 'Cơ bản đến Nâng cao',
    duration: '18-22 giờ',
    category: 'Creator Economy & Digital Media',
    heroImageUrl: '/images/content-creator/content-creator-hero.jpg',
    features: [
      '🎬 Video Production & Editing chuyên nghiệp với smartphone',
      '💡 Personal Branding & Content Strategy độc đáo',
      '📺 Livestreaming & Community Building hiệu quả',
      '💰 Monetization đa kênh: ads, sponsorship, affiliate',
      '🤝 Brand Partnership & Sponsorship Deal negotiations',
      '📊 Analytics & Growth Optimization data-driven',
      '📅 Content Calendar & Automation Systems',
      '⚖️ Legal & Business setup cho content creators'
    ],
    icon: '📱',
    color: 'from-pink-600 to-purple-600',
    objectives: [
      'Xây dựng personal brand mạnh mẽ và nhất quán trên tất cả platforms',
      'Tạo video content chất lượng cao với equipment cơ bản',
      'Phát triển engagement strategy và xây dựng loyal fanbase',
      'Master các phương pháp monetization: ads, sponsorship, affiliate, products',
      'Negotiate và quản lý brand partnerships hiệu quả',
      'Sử dụng analytics để optimize content và accelerate growth',
      'Set up business legal structure cho sustainable income',
      'Scale content operation với systems và automation'
    ],
    prerequisites: [
      'Smartphone với camera chất lượng tốt (iPhone 12+ hoặc Android tương đương)',
      'Kết nối internet ổn định cho upload và livestream',
      'Tư duy sáng tạo và khả năng storytelling cơ bản',
      'Commitment để duy trì consistency trong content creation',
      'Sẵn sàng xuất hiện trước camera và tương tác với audience'
    ],
    careerOutcomes: [
      'Full-time Content Creator với thu nhập 15-100 triệu VNĐ/tháng',
      'Social Media Manager cho businesses (15-30 triệu VNĐ/tháng)',
      'Influencer Marketing Specialist tại agencies',
      'Personal Brand Consultant cho entrepreneurs và professionals',
      'Digital Marketing Agency Owner chuyên về creator economy',
      'Brand Ambassador với long-term partnerships',
      'Online Course Creator và Educational Content Developer',
      'Event Host và MC cho digital marketing events'
    ],
    industryApplications: [
      'Creator Economy - Ngành công nghiệp 100+ tỷ USD toàn cầu',
      'Influencer Marketing - 16+ tỷ USD market size năm 2025',
      'E-commerce Integration - Social commerce growth 35%/năm',
      'Brand Marketing - 75% brands sử dụng influencer marketing',
      'Educational Content - Online learning market 350+ tỷ USD',
      'Entertainment Industry - Streaming và digital content boom',
      'Tourism & Hospitality - Travel influencer marketing surge',
      'Technology Reviews - Consumer decision influence 90%+'
    ],
    marketDemand: {
      averageSalary: '15-100 triệu VNĐ/tháng',
      jobGrowth: '+150%',
      hireDemand: 'Rất Cao'
    },
    relatedModules: [
      K2Module.DigitalMarketing,
      K2Module.AIArtCreativeTech,
      K2Module.VietnameseBusiness,
      K2Module.YoungEntrepreneur
    ]
  };

  const additionalStats = [
    {
      label: 'Creator Economy Size',
      value: '104+ tỷ USD',
      icon: '💰'
    },
    {
      label: 'Vietnamese Creators',
      value: '15M+ người',
      icon: '🇻🇳'
    },
    {
      label: 'Avg. Success Time',
      value: '6-12 tháng',
      icon: '⏱️'
    },
    {
      label: 'Top Creator Income',
      value: '500M+ VNĐ/năm',
      icon: '🏆'
    }
  ];

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={contentCreatorLessons}
      additionalStats={additionalStats}
    />
  );
}
