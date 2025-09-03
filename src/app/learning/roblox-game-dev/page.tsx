import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { robloxLessons } from '@/data/roblox-game-dev';
import { K2Module } from '@/data/moduleNavigation';
import { createTitle, createDescription } from '@/utils/seo';
import { Bot } from 'lucide-react';

export async function generateMetadata() {
  return {
    title: createTitle('Phát triển Game với Roblox'),
    description: createDescription(
      'Học cách tạo ra thế giới game 3D của riêng bạn với Roblox Studio và ngôn ngữ lập trình Lua. Từ những bước cơ bản đến xuất bản game đầu tiên.',
    ),
    keywords: ['roblox', 'game development', 'lua', 'lập trình game', 'roblox studio', 'K2AI'],
    openGraph: {
      title: 'Phát triển Game với Roblox - K2AiHub',
      description: 'Học cách tạo ra thế giới game 3D của riêng bạn với Roblox Studio và ngôn ngữ lập trình Lua.',
      type: 'website',
    },
  };
}

export default function RobloxGameDevPage() {
  const moduleData = {
    id: 'roblox-game-dev',
    title: 'Phát triển Game với Roblox',
    subtitle: 'Từ ý tưởng đến thế giới 3D tương tác',
    description:
      'Khóa học này sẽ dẫn dắt bạn qua toàn bộ quá trình tạo ra một trò chơi trên nền tảng Roblox. Bạn sẽ học cách sử dụng Roblox Studio, một công cụ mạnh mẽ để xây dựng thế giới 3D, và làm quen với Lua, ngôn ngữ lập trình giúp bạn thổi hồn vào các vật thể và tạo ra những trải nghiệm tương tác độc đáo. Đây là bước khởi đầu hoàn hảo cho những ai đam mê sáng tạo và muốn trở thành một nhà phát triển game.',
    level: 'Cơ bản',
    duration: '8-10 giờ',
    category: 'Creative Technology',
    features: [
      'Hướng dẫn trực quan với Roblox Studio.',
      'Lập trình game với ngôn ngữ Lua dễ tiếp cận.',
      'Xây dựng các kịch bản game từ đơn giản đến phức tạp.',
      'Học cách xuất bản và chia sẻ game với cộng đồng hàng triệu người chơi.',
    ],
    icon: '🎮',
    color: 'from-red-500 to-rose-500',
    objectives: [
      'Sử dụng thành thạo các công cụ trong Roblox Studio để xây dựng và thiết kế.',
      'Viết mã Lua để tạo ra các cơ chế và tương tác trong game.',
      'Hiểu các nguyên tắc cơ bản của thiết kế game.',
      'Xuất bản thành công một game hoàn chỉnh lên nền tảng Roblox.',
    ],
    prerequisites: [
      'Kỹ năng sử dụng máy tính cơ bản.',
      'Tư duy sáng tạo và logic.',
      'Không yêu cầu kinh nghiệm lập trình trước đó.',
    ],
    careerOutcomes: [
      'Nhà phát triển game Roblox',
      'Nhà thiết kế cấp độ (Level Designer)',
      'Lập trình viên Lua',
      'Người sáng tạo nội dung game',
    ],
    industryApplications: [
      'Giải trí và Trò chơi điện tử',
      'Giáo dục (tạo ra các bài học tương tác)',
      'Mô phỏng và Huấn luyện',
      'Marketing và Sự kiện ảo',
    ],
    marketDemand: {
      averageSalary: 'Thỏa thuận (dựa trên doanh thu game)',
      jobGrowth: '+30%',
      hireDemand: 'Rất cao',
    },
    relatedModules: [K2Module.GameDevelopment, K2Module.Python, K2Module.AIArtCreativeTech],
    heroImageUrl: 'https://images.unsplash.com/photo-1611996573833-5c8a5b39b8a1?w=1200&h=600&fit=crop',
    additionalStats: [
      {
        label: 'Nền tảng',
        value: 'Roblox',
        icon: <Bot className="w-6 h-6" />,
      },
    ],
  };

  return <ModulePageTemplate moduleData={moduleData} lessons={robloxLessons} />;
}
