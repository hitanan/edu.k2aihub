import ModulePageTemplate, { ModuleData } from '@/components/learning/ModulePageTemplate';
import { criticalThinkingLessons } from '@/data/critical-thinking';
import { createTitle, createDescription } from '@/utils/seo';

export async function generateMetadata() {
  return {
    title: createTitle('Tư Duy Phê Phán và Giải Quyết Vấn Đề Sáng Tạo'),
    description: createDescription('Phát triển kỹ năng tư duy phê phán và giải quyết vấn đề sáng tạo - kỹ năng cần thiết cho thế hệ trẻ Việt Nam trong thời đại số hóa.'),
    keywords: ['tư duy phê phán', 'giải quyết vấn đề', 'design thinking', 'critical thinking', 'sáng tạo', 'K2AI'],
    openGraph: {
      title: 'Tư Duy Phê Phán và Giải Quyết Vấn Đề Sáng Tạo | K2AiHub',
      description: 'Phát triển kỹ năng tư duy phê phán và giải quyết vấn đề sáng tạo với phương pháp hiện đại, case studies Việt Nam và exercises thực tế.',
      type: 'website',
    },
  };
}

export default function CriticalThinkingMainPage() {
  const moduleData: ModuleData = {
    id: 'critical-thinking',
    title: 'Tư Duy Phê Phán và Giải Quyết Vấn Đề Sáng Tạo',
    subtitle: 'Phát triển tư duy logic, sáng tạo và khả năng giải quyết vấn đề',
    description: 'Khóa học toàn diện về tư duy phê phán và giải quyết vấn đề sáng tạo, được thiết kế đặc biệt cho học sinh phổ thông Việt Nam. Học cách phân tích thông tin, đưa ra quyết định có căn cứ, và áp dụng Design Thinking để tạo ra những giải pháp innovative cho các vấn đề thực tế.',
    level: 'Trung bình',
    duration: '8-10 giờ',
    category: 'Essential Skills',
    features: [
      'Nắm vững nguyên tắc tư duy phê phán và logical reasoning',
      'Áp dụng Design Thinking process trong giải quyết vấn đề',
      'Phân tích case studies từ các công ty Việt Nam thành công',
      'Thực hành với scenarios thực tế và relevant cho học sinh Việt Nam'
    ],
    icon: '🧠',
    color: 'from-purple-600 to-pink-600',
    heroImageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop',
    objectives: [
      'Phát triển khả năng phân tích và đánh giá thông tin một cách objective',
      'Nắm vững các framework và methods cho creative problem-solving',
      'Áp dụng systems thinking để hiểu complex problems',
      'Tạo ra innovative solutions cho real-world challenges'
    ],
    prerequisites: [
      'Không có yêu cầu tiên quyết cụ thể',
      'Có tinh thần mở và sẵn sàng challenge existing assumptions',
      'Khả năng đọc hiểu và giao tiếp tiếng Việt tốt'
    ],
    careerOutcomes: [
      'Business Analyst và Strategic Consultant',
      'Product Manager và Innovation Lead', 
      'Policy Researcher và Social Entrepreneur',
      'Academic Researcher và Critical Thinking Trainer'
    ],
    industryApplications: [
      'Tư vấn chiến lược và phát triển business models',
      'Research và development trong technology companies',
      'Policy analysis cho government agencies',
      'Education innovation và curriculum development',
      'Social impact projects và community development'
    ],
    marketDemand: {
      averageSalary: '15-40 triệu VNĐ',
      jobGrowth: '+35%',
      hireDemand: 'Rất cao'
    },
    relatedModules: []
  };

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={criticalThinkingLessons}
      additionalStats={[
        {
          label: 'Frameworks',
          value: '12+',
          icon: <span className="text-2xl">🧩</span>
        },
        {
          label: 'Case Studies',
          value: 'Việt Nam',
          icon: <span className="text-2xl">🏢</span>
        },
        {
          label: 'Practical Projects',
          value: '15+',
          icon: <span className="text-2xl">💡</span>
        }
      ]}
    />
  );
}