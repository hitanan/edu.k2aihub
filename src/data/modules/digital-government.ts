import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export interface DigitalGovLesson extends BaseLessonData {
  govTechnologies: string[];
  publicServices: string[];
}

export const lessons: DigitalGovLesson[] = [
  {
    id: 'vietnam-digital-government',
    title: 'Bài 1: Chính phủ Điện tử Việt Nam và Smart City Development',
    description:
      'Tìm hiểu chiến lược chính phủ điện tử của Việt Nam, các dịch vụ công trực tuyến và smart city initiatives. Học cách phát triển civic tech solutions.',
    videoUrl: 'https://www.youtube.com/watch?v=wDoMXUIEpUg',
    imageUrl: 'https://images.unsplash.com/photo-1573164713619-24c711fe7878?w=400&h=400&fit=crop',
    difficulty: 'Trung bình',
    duration: '120 phút',
    govTechnologies: ['Digital ID', 'Blockchain', 'IoT sensors', 'Open data', 'AI/ML'],
    publicServices: ['Citizen services', 'Business registration', 'Tax filing', 'Healthcare', 'Education'],
    objectives: [
      'Hiểu Digital Government strategy của Việt Nam đến 2030',
      'Analyze public service delivery models và digital transformation',
      'Design civic technology solutions cho Vietnamese context',
      'Implement integration với government APIs và data sources',
    ],
    prerequisites: [
      'Basic understanding of public administration',
      'Familiarity với web development',
      'Knowledge of Vietnamese administrative system',
    ],
    exercises: [
      {
        title: 'Public Service Portal Design',
        description: 'Design user-friendly portal cho Vietnamese citizen services',
        difficulty: 'Trung bình',
        requirements: ['UX/UI design skills', 'Government service knowledge', 'Accessibility standards'],
        hints: [
          'Consider multi-language support (Vietnamese, ethnic minorities)',
          'Design for low digital literacy users',
          'Integrate với existing government ID systems',
        ],
        expectedOutput: 'Complete service portal design với user journey mapping',
        solution: 'Mobile-first design với progressive enhancement cho desktop',
      },
    ],
    realWorldApplications: [
      'Citizen service applications và e-governance platforms',
      'Smart city dashboard và monitoring systems',
      'Public transportation optimization',
      'Environmental monitoring và reporting',
    ],
    caseStudies: [
      {
        title: 'Ho Chi Minh City Smart Traffic System',
        organization: 'HCMC Department of Transportation',
        problem: 'Reduce traffic congestion trong megacity với 9M dân',
        solution: 'AI-powered traffic management với IoT sensors',
        impact: '15% reduction in travel time, 20% fewer accidents',
        innovations: [
          'Real-time data integration is crucial',
          'Public-private partnerships accelerate deployment',
          'Citizen engagement improves system effectiveness',
        ],
      },
    ],
    resources: [
      {
        title: 'Vietnam National Public Service Portal',
        url: 'https://dichvucong.gov.vn',
        type: 'government',
        description: 'Central portal for Vietnamese public services',
      },
      {
        title: 'Government API Documentation',
        url: 'https://api.gov.vn',
        type: 'api',
        description: 'Official APIs for government data integration',
      },
    ],
    faqs: [
      {
        question: '"Chính phủ số" là gì và tại sao nó quan trọng đối với Việt Nam?',
        answer:
          'Chính phủ số là việc ứng dụng công nghệ số để thay đổi mô hình hoạt động, quản lý của chính phủ, nhằm phục vụ người dân và doanh nghiệp tốt hơn, hiệu quả hơn, minh bạch hơn. Đối với Việt Nam, đây là yếu tố then chốt để thúc đẩy phát triển kinh tế - xã hội, nâng cao năng lực cạnh tranh quốc gia và hội nhập quốc tế.',
      },
      {
        question: '"Thành phố thông minh" (Smart City) là gì và có ví dụ nào ở Việt Nam không?',
        answer:
          'Thành phố thông minh sử dụng công nghệ thông tin và truyền thông (ICT) để cải thiện chất lượng cuộc sống, hiệu quả hoạt động đô thị và tính bền vững. Các ví dụ ở Việt Nam bao gồm Đà Nẵng (tiên phong về giao thông thông minh, chính quyền điện tử), Bình Dương (tập trung vào khu công nghiệp thông minh) và TP.HCM (triển khai trung tâm điều hành đô thị thông minh).',
      },
      {
        question: '"CivicTech" (Công nghệ Công dân) là gì và làm thế nào tôi có thể tham gia?',
        answer:
          'CivicTech là các công nghệ giúp tăng cường mối quan hệ giữa người dân và chính phủ. Bạn có thể tham gia bằng cách sử dụng các ứng dụng phản ánh hiện trường (như app của tổng đài 1022), tham gia góp ý chính sách qua các cổng thông tin điện tử, hoặc thậm chí tự phát triển các ứng dụng giải quyết vấn đề cộng đồng dựa trên dữ liệu mở.',
      },
      {
        question: 'Dữ liệu của tôi có an toàn khi sử dụng các dịch vụ công trực tuyến không?',
        answer:
          'Chính phủ Việt Nam đã và đang triển khai nhiều giải pháp để đảm bảo an toàn thông tin cho các hệ thống dịch vụ công, tuân thủ theo Luật An ninh mạng. Tuy nhiên, người dùng cũng cần có trách nhiệm tự bảo vệ tài khoản của mình bằng cách sử dụng mật khẩu mạnh và bật xác thực hai yếu tố.',
      },
    ],
  },
  {
    id: 'smart-city-iot',
    title: 'Bài 2: Smart City IoT Solutions và Environmental Monitoring',
    description:
      'Phát triển IoT systems cho smart city applications. Học air quality monitoring, traffic management, và waste management solutions cho Vietnamese cities.',
    videoUrl: 'https://www.youtube.com/watch?v=8QbncQ3Hr-0',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop',
    difficulty: 'Nâng cao',
    duration: '180 phút',
    govTechnologies: ['IoT sensors', 'LoRaWAN', '5G networks', 'Edge computing', 'Data analytics'],
    publicServices: ['Air quality monitoring', 'Waste management', 'Water quality', 'Noise pollution'],
    objectives: [
      'Deploy IoT sensor networks cho environmental monitoring',
      'Build real-time data dashboards cho city administrators',
      'Implement predictive analytics cho urban planning',
      'Create citizen engagement platforms cho environmental data',
    ],
    prerequisites: [
      'IoT fundamentals và hardware knowledge',
      'Data analysis và visualization skills',
      'Understanding of urban environmental challenges',
    ],
    exercises: [
      {
        title: 'Air Quality Monitoring Network',
        description: 'Build comprehensive air quality monitoring system cho Vietnamese city',
        difficulty: 'Nâng cao',
        requirements: ['IoT sensors', 'Cloud platform', 'Data visualization tools'],
        hints: [
          'Use low-cost PM2.5 và NO2 sensors',
          'Implement data validation và quality control',
          'Create public API cho citizen access',
        ],
        expectedOutput: 'Functioning air quality network với public dashboard',
        solution: 'Arduino/ESP32-based sensors với cloud analytics và mobile app',
      },
    ],
    realWorldApplications: [
      'Environmental monitoring systems cho industrial areas',
      'Smart parking solutions để reduce urban congestion',
      'Flood early warning systems cho Mekong Delta',
      'Energy management cho public buildings',
    ],
    caseStudies: [
      {
        title: 'Da Nang Smart City Initiative',
        organization: 'Da Nang City Government',
        problem: 'Transform into ASEAN smart city leader',
        solution: 'Comprehensive IoT deployment với citizen app integration',
        impact: '40% improvement in service delivery, 25% energy savings',
        innovations: [
          'Citizen engagement drives adoption',
          'Interoperability standards are essential',
          'Public-private partnerships enable scaling',
        ],
      },
    ],
    resources: [
      {
        title: 'Vietnam Smart City Development Plan',
        url: 'https://mic.gov.vn/smart-city-plan',
        type: 'government',
        description: 'National strategy for smart city development',
      },
    ],
  },
  {
    id: 'civic-engagement-platforms',
    title: 'Bài 3: Civic Engagement Platforms và Citizen Participation Technology',
    description:
      'Xây dựng platforms để tăng cường sự tham gia của công dân vào quản lý đô thị. Học participatory budgeting, citizen reporting, và community engagement tools.',
    videoUrl: 'https://www.youtube.com/watch?v=i8jeXM2HpGk',
    imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=400&fit=crop',
    difficulty: 'Trung bình',
    duration: '140 phút',
    govTechnologies: ['Mobile apps', 'Geolocation', 'Social platforms', 'Voting systems', 'Crowdsourcing'],
    publicServices: ['Citizen reporting', 'Community forums', 'Budget participation', 'Service feedback'],
    objectives: [
      'Design inclusive civic engagement platforms',
      'Implement secure voting và feedback systems',
      'Create community-driven problem solving tools',
      'Build trust transparency mechanisms trong government operations',
    ],
    prerequisites: [
      'Mobile app development experience',
      'Understanding of democratic processes',
      'Knowledge of Vietnamese civic culture',
    ],
    exercises: [
      {
        title: 'Citizen Reporting Mobile App',
        description: 'Build app cho citizens để report infrastructure issues',
        difficulty: 'Trung bình',
        requirements: ['Mobile development platform', 'GPS integration', 'Photo/video upload'],
        hints: [
          'Implement offline capability cho rural areas',
          'Use Vietnamese administrative boundary data',
          'Add community verification features',
        ],
        expectedOutput: 'Mobile app với government dashboard integration',
        solution: 'React Native app với backend API cho government workflows',
      },
    ],
    realWorldApplications: [
      'Participatory budgeting platforms cho local governments',
      'Community issue tracking và resolution systems',
      'Public consultation platforms cho policy development',
      'Transparency portals cho government spending',
    ],
    caseStudies: [
      {
        title: 'Hanoi Public Participation Platform',
        organization: "Hanoi People's Committee",
        problem: 'Increase citizen engagement trong urban planning decisions',
        solution: 'Multi-channel platform với online/offline integration',
        impact: '300% increase in citizen feedback, improved policy acceptance',
        innovations: [
          'Multi-generational design improves participation',
          'Local language support is critical',
          'Government responsiveness builds trust',
        ],
      },
    ],
    resources: [
      {
        title: 'Citizen Engagement Guidelines',
        url: 'https://www.undp.org/vietnam/civic-engagement',
        type: 'guide',
        description: 'Best practices for civic technology in Vietnam',
      },
    ],
  },
];

const transformedLessons: BaseLessonData[] = lessons.map((lesson) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    govTechnologies,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    publicServices,
    ...baseLesson
  } = lesson;
  return {
    ...baseLesson,
    realWorldApplications: lesson.realWorldApplications || [],
  };
});

export const digitalGovernmentModuleData: ModuleData = {
  id: K2Module.DigitalGovernment,
  title: 'Chính phủ số & Công nghệ Công dân',
  subtitle: 'Xây dựng giải pháp công nghệ cho một Việt Nam hiện đại, minh bạch và hiệu quả.',
  description:
    'Khóa học này cung cấp kiến thức và kỹ năng để phát triển các giải pháp công nghệ phục vụ chính phủ số (GovTech) và sự tham gia của công dân (CivicTech) trong bối cảnh Việt Nam. Học viên sẽ tìm hiểu về các sáng kiến thành phố thông minh, dịch vụ công trực tuyến và cách xây dựng các ứng dụng có tác động xã hội.',
  category: 'Công nghệ & Xã hội',
  icon: '🏛️',
  color: 'from-sky-600 to-cyan-500',
  level: 'Nâng cao',
  duration: '7-8 giờ',
  features: [
    'Chiến lược Chính phủ số Việt Nam',
    'Phát triển ứng dụng CivicTech',
    'Giải pháp IoT cho Thành phố thông minh',
    'Tích hợp API dịch vụ công',
  ],
  prerequisites: [
    'Kiến thức cơ bản về phát triển web hoặc di động.',
    'Hiểu biết về hệ thống hành chính công của Việt Nam.',
    'Quan tâm đến các vấn đề xã hội và công nghệ.',
  ],
  objectives: [
    'Hiểu rõ chiến lược và kiến trúc Chính phủ số của Việt Nam.',
    'Thiết kế và phát triển các giải pháp công nghệ cho dịch vụ công.',
    'Triển khai các ứng dụng IoT cho giám sát môi trường và quản lý đô thị.',
    'Xây dựng các nền tảng tăng cường sự tham gia của công dân.',
  ],
  careerOutcomes: [
    'Chuyên gia phát triển GovTech',
    'Kỹ sư giải pháp Thành phố thông minh',
    'Nhà sáng lập startup CivicTech',
    'Chuyên viên chuyển đổi số trong cơ quan nhà nước',
  ],
  industryApplications: ['Public Sector', 'Smart Cities', 'Urban Planning', 'Environmental Management'],
  marketDemand: {
    averageSalary: '1,500 - 3,000 USD/tháng',
    jobGrowth: '20% mỗi năm',
    hireDemand: 'Cao',
  },
  relatedModules: [K2Module.SmartManufacturing, K2Module.EnvironmentalDataScience, K2Module.Cybersecurity],
  lessons: transformedLessons,
};
