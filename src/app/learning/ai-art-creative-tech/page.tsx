import type { Metadata } from 'next';

import ModulePageTemplate, { ModuleData } from '@/components/learning/ModulePageTemplate';
import { aiArtLessons, AiArtLesson } from '@/data/ai-art-creative-tech';
import { BaseLessonData } from '@/types/lesson-base';
import { createModuleMetadata } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';

export const metadata: Metadata = createModuleMetadata(
  'AI Art & Creative Technology - Nghệ Thuật AI',
  'Khóa học AI Art và Creative Technology. Từ Midjourney đến generative art',
  ['ai art', 'generative art', 'midjourney', 'dall-e', 'creative technology', 'digital art'],
  'ai-art-creative-tech',
);

function convertToLesson(lesson: AiArtLesson): BaseLessonData {
  return {
    id: lesson.id,
    title: lesson.title,
    description: lesson.description,
    duration: lesson.duration,
    difficulty: lesson.difficulty,
    videoUrl: lesson.videoUrl,
    imageUrl: lesson.imageUrl,
    objectives: lesson.objectives,
    prerequisites: lesson.prerequisites,
    exercises: lesson.exercises.map((ex) => ({
      title: ex.title,
      description: ex.description,
      difficulty: ex.difficulty,
      solution: ex.solution,
      materials: ex.requirements,
      expectedResults: ex.expectedOutput,
    })),
    realWorldApplications: lesson.realWorldApplications,
    caseStudies: lesson.caseStudies.map((cs) => ({
      title: cs.title,
      organization: cs.artist,
      problem: cs.challenge,
      solution: cs.solution,
      impact: cs.results,
      innovations: cs.insights,
    })),
    resources: lesson.resources.map((r) => ({
      title: r.title,
      url: r.url,
      type: r.type,
    })),
    vietnamContext: lesson.vietnamContext,
    careerConnect: lesson.careerConnect,
    quizzes: lesson.quizzes,
  };
}

export default function AiArtCreativeTechPage() {
  const convertedLessons = aiArtLessons.map(convertToLesson);

  const moduleConfig: ModuleData = {
    id: 'ai-art-creative-tech',
    title: 'AI Art & Creative Technology',
    subtitle: 'Sáng Tạo Nghệ Thuật với AI',
    description:
      'Master AI art generation và creative technology. Từ Midjourney, DALL-E đến AI video production - tạo ra những tác phẩm nghệ thuật đỉnh cao với sức mạnh của AI.',
    primaryColor: 'pink',
    gradientColors: 'from-pink-900 via-purple-900 to-indigo-900',
    heroImageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
    statsConfig: {
      lessons: `${aiArtLessons.length}+ bài`,
      duration: '8-12 giờ',
      level: 'Cơ bản → Nâng cao',
      projects: '5+ dự án',
    },
    marketDemand: {
      averageSalary: '$75,000/năm',
      jobGrowth: '65%',
      hireDemand: 'Cao',
    },
    careerOutcomes: [
      'AI Art Director',
      'Creative Technology Specialist',
      'Digital Content Creator',
      'Brand Visual Designer',
      'AI Prompt Engineer',
      'Creative AI Consultant',
    ],
    objectives: [
      'Sử dụng thành thạo các công cụ AI tạo sinh hình ảnh hàng đầu như Midjourney, DALL-E 3, và Stable Diffusion.',
      'Nắm vững kỹ thuật Prompt Engineering để tạo ra hình ảnh theo đúng ý tưởng và phong cách mong muốn.',
      'Ứng dụng AI vào quy trình sản xuất video, từ tạo kịch bản, storyboard đến sản xuất video hoàn chỉnh với RunwayML và Pika Labs.',
      'Tích hợp công cụ AI vào các quy trình sáng tạo chuyên nghiệp với Adobe và các hệ thống thiết kế thương hiệu.',
      'Phát triển các ứng dụng thực tế của AI trong marketing, xây dựng thương hiệu, và tạo nội dung cho mạng xã hội.',
      'Nắm bắt các kỹ thuật nâng cao để đảm bảo tính nhất quán về phong cách và tối ưu hóa chất lượng cho nhiều nền tảng.',
    ],
    prerequisites: [
      'Có đam mê với nghệ thuật, thiết kế, và công nghệ.',
      'Kỹ năng sử dụng máy tính cơ bản và internet.',
      'Không yêu cầu kinh nghiệm lập trình hay nghệ thuật trước đó.',
      'Tư duy sáng tạo và sẵn sàng thử nghiệm những điều mới.',
    ],
    industryApplications: [
      {
        name: 'Quảng cáo & Marketing',
        description: 'Tạo hình ảnh và video quảng cáo độc đáo với chi phí và thời gian giảm đáng kể.',
      },
      {
        name: 'Giải trí & Game',
        description: 'Thiết kế nhân vật, bối cảnh, và các tài sản trong game một cách nhanh chóng.',
      },
      {
        name: 'Thiết kế & Thương hiệu',
        description: 'Xây dựng bộ nhận diện thương hiệu, logo, và các ấn phẩm truyền thông.',
      },
      {
        name: 'Thời trang & Sản phẩm',
        description: 'Phác thảo ý tưởng, thiết kế sản phẩm và hình ảnh hóa cho thương mại điện tử.',
      },
      {
        name: 'Kiến trúc & Nội thất',
        description: 'Tạo các bản render và phối cảnh chân thực để trình bày ý tưởng với khách hàng.',
      },
      {
        name: 'Sản xuất Phim & Video',
        description: 'Tự động hóa các công đoạn như tạo storyboard, hiệu ứng hình ảnh, và video ngắn.',
      },
    ],
    relatedModules: [K2Module.AI, K2Module.DigitalMarketing, K2Module.GameDevelopment],
  };

  return <ModulePageTemplate moduleData={moduleConfig} lessons={convertedLessons} />;
}
