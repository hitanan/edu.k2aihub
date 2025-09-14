import { ModuleData } from '@/types';

export const leadershipManagementModule: ModuleData = {
  id: 'leadership-management',
  title: 'Lãnh đạo và Quản lý',
  description: 'Phát triển kỹ năng lãnh đạo và quản lý hiệu quả để dẫn dắt đội nhóm và tổ chức thành công.',
  category: 'Kỹ năng chuyên nghiệp',
  lessons: [
    {
      id: 'leadership-styles',
      title: 'Các phong cách lãnh đạo',
      description: 'Tìm hiểu về các phong cách lãnh đạo khác nhau và khi nào nên áp dụng chúng.',
      duration: '60 phút',
      difficulty: 'Cơ bản',
      objectives: [],
      realWorldApplications: [],
      faqs: [
        {
          question: 'Phong cách lãnh đạo chuyên quyền (Autocratic) là gì?',
          answer:
            'Là phong cách mà người lãnh đạo đưa ra quyết định một mình mà không cần hoặc có rất ít sự tham gia từ các thành viên trong nhóm. Phong cách này hiệu quả trong các tình huống cần quyết định nhanh chóng hoặc khi người lãnh đạo là người có chuyên môn cao nhất.',
        },
        {
          question: 'Khi nào nên sử dụng phong cách lãnh đạo dân chủ (Democratic)?',
          answer:
            'Phong cách lãnh đạo dân chủ, nơi các thành viên trong nhóm được khuyến khích tham gia vào quá trình ra quyết định, rất phù hợp khi cần sự sáng tạo, sự đồng thuận cao và khi các thành viên trong nhóm có kiến thức và kỹ năng để đóng góp.',
        },
        {
          question: 'Lãnh đạo trao quyền (Laissez-Faire) có phải là không quản lý gì cả không?',
          answer:
            'Không hẳn. Lãnh đạo trao quyền cung cấp cho các thành viên trong nhóm rất nhiều quyền tự do trong công việc của họ, nhưng người lãnh đạo vẫn cung cấp các nguồn lực và lời khuyên khi cần. Phong cách này hoạt động tốt nhất với các đội nhóm có kinh nghiệm, có động lực cao và tự quản lý tốt.',
        },
        {
          question: 'Phong cách lãnh đạo chuyển đổi (Transformational) tập trung vào điều gì?',
          answer:
            'Lãnh đạo chuyển đổi tập trung vào việc truyền cảm hứng và động lực cho các thành viên trong nhóm để họ vượt qua lợi ích cá nhân vì mục tiêu chung của tổ chức. Họ thường có tầm nhìn rõ ràng và khả năng truyền đạt tầm nhìn đó một cách thuyết phục.',
        },
      ],
    },
    {
      id: 'team-management',
      title: 'Quản lý đội nhóm',
      description: 'Học cách xây dựng và quản lý một đội nhóm hiệu quả.',
      duration: '90 phút',
      difficulty: 'Trung bình',
      objectives: [],
      realWorldApplications: [],
    },
  ],
};
