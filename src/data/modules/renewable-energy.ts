import { ModuleData } from '@/types';

export const renewableEnergyModule: ModuleData = {
  id: 'renewable-energy',
  title: 'Năng lượng tái tạo',
  description: 'Tìm hiểu về các nguồn năng lượng tái tạo và vai trò của chúng trong tương lai bền vững.',
  category: 'Công nghệ xanh',
  lessons: [
    {
      id: 'solar-power',
      title: 'Năng lượng mặt trời',
      description: 'Khám phá công nghệ pin mặt trời và các ứng dụng của nó.',
      duration: '60 phút',
      difficulty: 'Cơ bản',
      objectives: [],
      realWorldApplications: [],
    },
    {
      id: 'wind-power',
      title: 'Năng lượng gió',
      description: 'Tìm hiểu về tuabin gió và cách chúng tạo ra điện.',
      duration: '60 phút',
      difficulty: 'Cơ bản',
      objectives: [],
      realWorldApplications: [],
    },
  ],
};
