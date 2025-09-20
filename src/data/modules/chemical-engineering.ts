import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import type { BaseLessonData } from '@/types/lesson-base';

export const chemicalEngineeringLessons: BaseLessonData[] = [
  {
    id: 'process-improvement',
    title: 'Cải Tiến Quy Trình Hóa Học',
    description: 'Học các phương pháp tối ưu hóa và cải tiến quy trình trong công nghiệp hóa học.',
    duration: '60 phút',
    difficulty: 'Nâng cao',
    videoUrl: null,
    imageUrl: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu các nguyên tắc tối ưu hóa quy trình hóa học.',
      'Áp dụng các phương pháp cải tiến hiệu suất.',
      'Phân tích và giải quyết vấn đề trong sản xuất.',
      'Thiết kế quy trình bền vững và hiệu quả.',
    ],
    prerequisites: ['Kiến thức cơ bản về hóa học', 'Hiểu biết về quy trình công nghiệp'],
    exercises: [
      {
        title: 'Tối ưu hóa quy trình sản xuất',
        description: 'Phân tích và cải tiến một quy trình sản xuất hóa chất cụ thể.',
        difficulty: 'Nâng cao',
        procedure: [
          'Phân tích quy trình hiện tại và xác định bottlenecks.',
          'Đề xuất các giải pháp cải tiến hiệu suất.',
          'Tính toán lợi ích kinh tế và môi trường.',
          'Lập kế hoạch triển khai và giám sát.',
        ],
        expectedResults: 'Kế hoạch cải tiến quy trình chi tiết với ROI dự kiến.',
      },
    ],
    realWorldApplications: [
      'Tối ưu hóa nhà máy lọc dầu.',
      'Cải tiến quy trình sản xuất dược phẩm.',
      'Phát triển công nghệ xử lý nước thải.',
      'Thiết kế quy trình sản xuất xanh.',
    ],
    vietnamContext: {
      title: 'Công Nghiệp Hóa Chất Việt Nam',
      content: [
        'Việt Nam đang phát triển mạnh ngành công nghiệp hóa chất với các dự án lọc hóa dầu lớn.',
        'Các công ty như Petrovietnam, Vinachem đang đầu tư vào công nghệ tiên tiến.',
        'Nhu cầu về kỹ sư hóa học có chuyên môn cao đang tăng mạnh.',
      ],
    },
    faqs: [
      {
        question: 'Kỹ thuật hóa học là gì và tại sao nó lại quan trọng?',
        answer:
          'Kỹ thuật hóa học là một ngành kỹ thuật ứng dụng các nguyên tắc của hóa học, vật lý, và toán học để thiết kế, vận hành và tối ưu hóa các quy trình biến đổi nguyên liệu thô thành các sản phẩm có giá trị hơn. Nó quan trọng vì đóng vai trò trung tâm trong hầu hết các ngành công nghiệp, từ năng lượng, dược phẩm đến thực phẩm và vật liệu.',
      },
      {
        question: 'Cải tiến quy trình trong kỹ thuật hóa học có nghĩa là gì?',
        answer:
          'Cải tiến quy trình là việc tìm cách làm cho một quy trình sản xuất trở nên hiệu quả hơn, an toàn hơn, bền vững hơn và ít tốn kém hơn. Điều này có thể bao gồm việc thay đổi điều kiện vận hành, sử dụng chất xúc tác mới, hoặc thiết kế lại thiết bị để tăng hiệu suất và giảm thiểu chất thải.',
      },
      {
        question: 'Một "bottleneck" trong quy trình sản xuất là gì?',
        answer:
          'Một "bottleneck" (nút cổ chai) là một điểm trong quy trình sản-xuất mà tại đó dòng chảy bị hạn chế, làm giảm tốc độ tổng thể của toàn bộ hệ thống. Xác định và giải quyết các bottleneck là một phần quan trọng của việc tối ưu hóa quy trình.',
      },
      {
        question: 'Triển vọng nghề nghiệp cho kỹ sư hóa học tại Việt Nam như thế nào?',
        answer:
          'Với sự phát triển mạnh mẽ của ngành công nghiệp hóa chất và các dự án lọc hóa dầu lớn, nhu cầu về kỹ sư hóa học có chuyên môn cao tại Việt Nam đang tăng mạnh. Đây là một lĩnh vực có nhiều cơ hội việc làm và tiềm năng phát triển lớn.',
      },
    ],
  },
  {
    id: 'pollution-control-technology',
    title: 'Công Nghệ Kiểm Soát Ô Nhiễm',
    description: 'Thiết kế và vận hành hệ thống kiểm soát khí thải và nước thải trong công nghiệp.',
    duration: '55 phút',
    difficulty: 'Nâng cao',
    videoUrl: null,
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=600&fit=crop',
    objectives: [
      'Hiểu các công nghệ xử lý khí thải và nước thải.',
      'Thiết kế hệ thống kiểm soát ô nhiễm hiệu quả.',
      'Đánh giá tác động môi trường của quy trình công nghiệp.',
      'Áp dụng các quy chuẩn môi trường quốc tế.',
    ],
    prerequisites: ['Kiến thức về hóa học môi trường', 'Hiểu biết về quy trình công nghiệp'],
    exercises: [
      {
        title: 'Thiết kế hệ thống xử lý khí thải',
        description: 'Thiết kế hệ thống xử lý khí thải cho một nhà máy cụ thể.',
        difficulty: 'Nâng cao',
        procedure: [
          'Phân tích thành phần và lưu lượng khí thải.',
          'Chọn công nghệ xử lý phù hợp.',
          'Thiết kế sơ đồ hệ thống và tính toán thiết bị.',
          'Đánh giá hiệu quả và chi phí vận hành.',
        ],
        expectedResults: 'Thiết kế hệ thống xử lý khí thải đáp ứng quy chuẩn môi trường.',
      },
    ],
    realWorldApplications: [
      'Xử lý khí thải nhà máy xi măng.',
      'Kiểm soát ô nhiễm trong ngành thép.',
      'Hệ thống xử lý nước thải dệt nhuộm.',
      'Công nghệ carbon capture và storage.',
    ],
    faqs: [
      {
        question: 'Tại sao kiểm soát ô nhiễm lại là một phần quan trọng của kỹ thuật hóa học?',
        answer:
          'Hầu hết các quy trình công nghiệp hóa học đều tạo ra các sản phẩm phụ hoặc chất thải có thể gây hại cho môi trường. Kỹ sư hóa học có trách nhiệm thiết kế các quy trình không chỉ hiệu quả về mặt kinh tế mà còn phải an toàn và bền vững, bao gồm cả việc xử lý và giảm thiểu ô nhiễm.',
      },
      {
        question: 'Công nghệ xử lý khí thải và nước thải có giống nhau không?',
        answer:
          'Chúng khác nhau về nguyên tắc cơ bản. Xử lý khí thải thường liên quan đến các quá trình như hấp phụ, hấp thụ, hoặc chuyển hóa hóa học để loại bỏ các chất ô nhiễm dạng khí. Xử lý nước thải tập trung vào việc loại bỏ các chất rắn lơ lửng, chất hữu cơ hòa tan và các chất dinh dưỡng thông qua các quá trình sinh học, hóa học và vật lý.',
      },
      {
        question: 'Carbon Capture and Storage (CCS) là gì?',
        answer:
          'CCS là một nhóm các công nghệ nhằm thu giữ khí carbon dioxide (CO2) từ các nguồn phát thải lớn như nhà máy điện hoặc nhà máy công nghiệp, sau đó vận chuyển và lưu trữ nó ở một nơi mà nó không thể thoát vào khí quyển, thường là trong các thành tạo địa chất dưới lòng đất.',
      },
      {
        question: 'Làm thế nào để chọn công nghệ xử lý ô nhiễm phù hợp?',
        answer:
          'Việc lựa chọn phụ thuộc vào nhiều yếu tố, bao gồm: loại và nồng độ chất ô nhiễm, lưu lượng dòng thải, các quy định môi trường cần tuân thủ, chi phí đầu tư và vận hành, và không gian có sẵn. Một kỹ sư hóa học cần phân tích tất cả các yếu tố này để đưa ra giải pháp tối ưu.',
      },
    ],
  },
];

export const chemicalEngineeringModuleData: ModuleData = {
  id: K2Module.ChemicalEngineering,
  title: 'Kỹ Thuật Hóa Học',
  subtitle: 'Chemical Engineering',
  description: 'Nắm vững các nguyên lý kỹ thuật hóa học, thiết kế quy trình và công nghệ môi trường tiên tiến.',
  level: 'Nâng cao',
  duration: '16 tuần',
  category: 'Kỹ Thuật',
  features: [
    'Thiết kế quy trình hóa học',
    'Công nghệ kiểm soát ô nhiễm',
    'Tối ưu hóa sản xuất',
    'Hệ thống xử lý môi trường',
    'Ứng dụng thực tế trong công nghiệp',
  ],
  icon: '⚗️',
  color: 'from-orange-600 to-red-600',
  heroImageUrl: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=1200&h=600&fit=crop',
  objectives: [
    'Thiết kế và tối ưu hóa quy trình hóa học',
    'Phát triển công nghệ kiểm soát ô nhiễm',
    'Ứng dụng nguyên lý kỹ thuật vào sản xuất',
    'Giải quyết vấn đề môi trường trong công nghiệp',
  ],
  prerequisites: [
    'Kiến thức toán học và vật lý cơ bản',
    'Hiểu biết về hóa học đại cương',
    'Khả năng tư duy logic và phân tích',
  ],
  careerOutcomes: [
    'Kỹ sư quy trình hóa học',
    'Chuyên gia công nghệ môi trường',
    'Quản lý sản xuất công nghiệp',
    'Tư vấn kỹ thuật hóa học',
  ],
  industryApplications: [
    'Công nghiệp lọc hóa dầu',
    'Sản xuất hóa chất và dược phẩm',
    'Xử lý nước và nước thải',
    'Công nghệ thực phẩm',
  ],
  marketDemand: {
    averageSalary: '25-45 triệu VNĐ/tháng',
    jobGrowth: '+15% trong 5 năm tới',
    hireDemand: 'Cao - Nhu cầu tăng mạnh',
  },
  relatedModules: [K2Module.GreenTechnology, K2Module.EnvironmentalDataScience, K2Module.RenewableEnergy],
  lessons: chemicalEngineeringLessons,
};
