export interface AIPromptChallengeGameData {
  challenges: Array<{
    category: string;
    task: string;
    difficulty: string;
    context: string;
    targetOutput: string;
    hints: string[];
    evaluation: {
      criteria: string[];
      perfectPrompt: string;
    };
  }>;
}

export const aiPromptChallengeData: AIPromptChallengeGameData = {
  challenges: [
    {
      category: 'Viết nội dung',
      task: 'Viết một email marketing cho sản phẩm công nghệ',
      difficulty: 'Dễ',
      context: 'Sản phẩm: Tai nghe Bluetooth cao cấp - Giá: 2.000.000 VNĐ - Tính năng: Chống ồn, pin 30 giờ',
      targetOutput: 'Email hấp dẫn, chuyên nghiệp với CTA rõ ràng',
      hints: [
        'Bắt đầu với tiêu đề thu hút',
        'Nhấn mạnh lợi ích cho khách hàng',
        'Kết thúc với call-to-action mạnh mẽ'
      ],
      evaluation: {
        criteria: ['Tiêu đề hấp dẫn', 'Nội dung thuyết phục', 'CTA rõ ràng', 'Tông giọng phù hợp'],
        perfectPrompt: 'Viết email marketing cho tai nghe Bluetooth cao cấp giá 2 triệu, có tính năng chống ồn và pin 30 giờ. Email cần có tiêu đề thu hút, nội dung nhấn mạnh lợi ích (âm thanh chất lượng, tiện lợi, bền bỉ), và call-to-action khuyến khích mua ngay với ưu đãi đặc biệt.'
      }
    },
    {
      category: 'Sáng tạo',
      task: 'Tạo concept cho video TikTok viral',
      difficulty: 'Trung bình',
      context: 'Chủ đề: Mẹo học tiếng Anh hiệu quả - Thời lượng: 30 giây - Đối tượng: Gen Z',
      targetOutput: 'Concept video ngắn, thú vị và có tính lan truyền cao',
      hints: [
        'Sử dụng trend hiện tại',
        'Tạo hook trong 3 giây đầu',
        'Kết hợp giải trí và giáo dục'
      ],
      evaluation: {
        criteria: ['Tính sáng tạo', 'Khả năng viral', 'Phù hợp Gen Z', 'Giá trị giáo dục'],
        perfectPrompt: 'Tạo concept video TikTok 30 giây về mẹo học tiếng Anh cho Gen Z. Video bắt đầu với hook hài hước (vd: "POV: Bạn học tiếng Anh như Pokemon"), sau đó show 3 mẹo nhanh với visual bắt mắt và nhạc trending. Kết thúc với challenge khuyến khích viewer thử và share.'
      }
    },
    {
      category: 'Phân tích',
      task: 'Phân tích đối thủ cạnh tranh',
      difficulty: 'Khó',
      context: 'Ngành: E-commerce thời trang - Đối thủ: Shopee, Lazada, Tiki - Sản phẩm: Thời trang bền vững',
      targetOutput: 'Báo cáo phân tích chiến lược và đề xuất positioning',
      hints: [
        'Phân tích điểm mạnh/yếu của từng đối thủ',
        'Xác định gap thị trường',
        'Đề xuất chiến lược khác biệt hóa'
      ],
      evaluation: {
        criteria: ['Độ chi tiết phân tích', 'Tính logic', 'Tính khả thi', 'Insight sâu sắc'],
        perfectPrompt: 'Phân tích đối thủ cạnh tranh trong e-commerce thời trang Việt Nam (Shopee, Lazada, Tiki) cho thương hiệu thời trang bền vững mới. Bao gồm: (1) So sánh model kinh doanh, pricing, customer experience (2) Điểm mạnh/yếu từng platform (3) Gap thị trường cho thời trang sustainable (4) Đề xuất positioning và strategy khác biệt dựa trên insights.'
      }
    }
  ]
};
