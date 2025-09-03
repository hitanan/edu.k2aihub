import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { DigitalCitizenshipLessons } from '@/data/digital-citizenship-online-safety';
import { createTitle, createDescription } from '@/utils/seo';

export async function generateMetadata() {
  return {
    title: createTitle('Công dân số & An toàn trực tuyến'),
    description: createDescription(
      'Trang bị cho học sinh những kỹ năng thiết yếu để trở thành công dân số có trách nhiệm, tự tin và an toàn trên không gian mạng.',
    ),
    keywords: ['công dân số', 'an toàn trực tuyến', 'an ninh mạng', 'đạo đức số', 'K2AI'],
    openGraph: {
      title: 'Công dân số & An toàn trực tuyến',
      description:
        'Trang bị cho học sinh những kỹ năng thiết yếu để trở thành công dân số có trách nhiệm, tự tin và an toàn trên không gian mạng.',
      type: 'website',
    },
  };
}

export default function DigitalCitizenshipPage() {
  const moduleData = {
    id: 'digital-citizenship-online-safety',
    title: 'Công dân số & An toàn trực tuyến',
    subtitle: 'Hành trang thiết yếu cho thế hệ tương lai',
    description:
      'Trong thế giới kết nối ngày nay, việc trở thành một công dân số có trách nhiệm là vô cùng quan trọng. Khóa học này cung cấp cho học sinh những kiến thức và kỹ năng để tương tác an toàn, có đạo đức và hiệu quả trên môi trường Internet.',
    level: 'Cơ bản',
    duration: '8-10 giờ',
    category: 'Kỹ năng sống',
    features: [
      'Bảo vệ danh tính và thông tin cá nhân.',
      'Nhận diện và phòng chống tin giả, lừa đảo.',
      'Xây dựng dấu chân số tích cực.',
      'Giao tiếp và ứng xử văn minh trên mạng.',
    ],
    icon: '🛡️',
    color: 'from-teal-500 to-cyan-600',
    objectives: [
      'Hiểu và quản lý được dấu chân số của bản thân.',
      'Áp dụng các biện pháp bảo mật để bảo vệ tài khoản và dữ liệu.',
      'Phát triển tư duy phản biện để đánh giá thông tin trực tuyến.',
      'Biết cách ứng phó với các tình huống tiêu cực trên mạng.',
    ],
    prerequisites: [
      'Kỹ năng sử dụng máy tính và Internet cơ bản.',
      'Có tài khoản mạng xã hội (Facebook, TikTok, etc.) là một lợi thế.',
      'Mong muốn trở thành người dùng Internet thông thái.',
    ],
    careerOutcomes: [
      'Kỹ năng cần thiết cho mọi ngành nghề trong tương lai.',
      'Nâng cao nhận thức về an ninh thông tin.',
      'Xây dựng thương hiệu cá nhân tích cực và chuyên nghiệp.',
    ],
    industryApplications: ['An toàn thông tin', 'Truyền thông số', 'Giáo dục', 'Phát triển cá nhân'],
    marketDemand: {
      averageSalary: 'N/A',
      jobGrowth: 'Cao',
      hireDemand: 'Cao',
    },
    relatedModules: ['ai-for-students', 'critical-thinking', 'communication-skills'],
  };

  return <ModulePageTemplate moduleData={moduleData} lessons={DigitalCitizenshipLessons} />;
}
