import { ModuleData } from '@/types';

export const robloxGameDevModule: ModuleData = {
  id: 'roblox-game-dev',
  title: 'Phát triển game trên Roblox',
  description: 'Học cách tạo ra các trò chơi của riêng bạn trên nền tảng Roblox và chia sẻ chúng với hàng triệu người chơi.',
  category: 'Phát triển game',
  lessons: [
    {
      id: 'roblox-studio-basics',
      title: 'Cơ bản về Roblox Studio',
      description: 'Làm quen với giao diện và các công cụ cơ bản trong Roblox Studio.',
      duration: '60 phút',
      difficulty: 'Cơ bản',
      objectives: [],
      realWorldApplications: [],
    },
    {
      id: 'lua-scripting',
      title: 'Lập trình với Lua',
      description: 'Học ngôn ngữ lập trình Lua để tạo ra các kịch bản và logic cho trò chơi của bạn.',
      duration: '120 phút',
      difficulty: 'Trung bình',
      objectives: [],
      realWorldApplications: [],
    },
  ],
};
