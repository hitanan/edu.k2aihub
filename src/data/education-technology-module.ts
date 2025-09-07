import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';

export const educationTechnologyModuleData: ModuleData = {
  id: 'education-technology',
  title: 'Công Nghệ Giáo Dục',
  subtitle: 'Education Technology & Digital Learning Innovation',
  description:
    'Khám phá và master các công nghệ tiên tiến đang revolutionize ngành giáo dục. Từ Learning Management Systems, AI-powered education tools, VR/AR immersive learning đến Educational Data Analytics và EdTech Entrepreneurship. Trở thành expert trong việc áp dụng technology để transform teaching và learning experiences.',
  level: 'Nâng cao',
  duration: '20-25 giờ',
  category: 'Education & Technology',
  heroImageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop',
  features: [
    'Triển khai và quản lý Learning Management Systems (LMS) professional',
    'Tích hợp AI và Machine Learning vào educational workflows',
    'Phát triển VR/AR experiences cho immersive learning',
    'Phân tích Educational Data để optimize student outcomes',
    'Khởi nghiệp EdTech startup từ ý tưởng đến market launch',
  ],
  icon: '🎓',
  color: 'from-indigo-600 to-purple-600',
  objectives: [
    'Master các platform LMS phổ biến và best practices deployment',
    'Phát triển AI-powered educational tools và chatbots',
    'Tạo VR/AR content cho enhanced learning experiences',
    'Thực hiện Educational Data Mining và Learning Analytics',
    'Validate và launch EdTech products với sustainable business models',
  ],
  prerequisites: [
    'Kiến thức cơ bản về công nghệ thông tin và web development',
    'Hiểu biết về educational processes và learning theories',
    'Experience với data analysis tools (Excel, basic SQL)',
    'Familiarity với cloud platforms và SaaS applications',
  ],
  careerOutcomes: [
    'Educational Technology Specialist - 25-40 triệu VNĐ/tháng',
    'Learning Experience Designer - 20-35 triệu VNĐ/tháng',
    'EdTech Product Manager - 30-50 triệu VNĐ/tháng',
    'Educational Data Analyst - 20-35 triệu VNĐ/tháng',
    'EdTech Entrepreneur - Potential unlimited income',
    'Corporate Learning & Development Manager - 25-45 triệu VNĐ/tháng',
  ],
  industryApplications: [
    'K-12 Schools: Smart classroom management và personalized learning systems',
    'Higher Education: University-wide LMS deployment và student analytics',
    'Corporate Training: Employee skill development platforms và VR simulations',
    'Language Learning: AI-powered tutoring systems và pronunciation coaching',
    'Healthcare Education: Medical simulation software và virtual training labs',
    'Government Training: Civil service education platforms và policy training systems',
  ],
  marketDemand: {
    averageSalary: '20-50 triệu VNĐ',
    jobGrowth: '+35%',
    hireDemand: 'Rất cao',
  },
  relatedModules: [
    K2Module.AdvancedAI,
    K2Module.DataScienceAnalytics,
    K2Module.ProfessionalSkills,
    K2Module.DigitalMarketing,
  ],
};
