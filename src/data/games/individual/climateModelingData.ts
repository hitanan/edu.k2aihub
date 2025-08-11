// Climate Modeling Game Data
export interface ClimateModelingGameData {
  scenarios: Array<{
    name: string;
    parameters: { co2: number; temperature: number; seaLevel: number };
    effects: string[];
    solutions: string[];
    quiz: {
      question: string;
      options: string[];
      correct: number;
    };
  }>;
}

export const climateModelingGameData: ClimateModelingGameData = {
  scenarios: [
    {
      name: 'Tăng CO2 10%',
      parameters: { co2: 410, temperature: 1.2, seaLevel: 20 },
      effects: ['Tăng nhiệt độ 0.3°C', 'Băng tan nhanh hơn', 'Thời tiết cực đoan'],
      solutions: ['Năng lượng tái tạo', 'Trồng rừng', 'Giảm phát thải'],
      quiz: {
        question: 'Tác động chính của việc tăng CO2 là gì?',
        options: ['Giảm nhiệt độ', 'Tăng nhiệt độ', 'Không thay đổi', 'Giảm mực nước biển'],
        correct: 1,
      },
    },
    {
      name: 'Phá rừng Amazon 50%',
      parameters: { co2: 450, temperature: 2.0, seaLevel: 30 },
      effects: ['Mất đa dạng sinh học', 'Tăng CO2', 'Thay đổi khí hậu khu vực'],
      solutions: ['Bảo vệ rừng', 'Trồng rừng mới', 'Phát triển bền vững'],
      quiz: {
        question: 'Rừng Amazon quan trọng vì lý do gì?',
        options: ['Sản xuất gỗ', 'Hấp thụ CO2', 'Du lịch', 'Khai thác'],
        correct: 1,
      },
    },
    {
      name: 'Tăng năng lượng tái tạo 80%',
      parameters: { co2: 350, temperature: 0.8, seaLevel: 15 },
      effects: ['Giảm phát thải CO2', 'Chậm tăng nhiệt độ', 'Bảo vệ hệ sinh thái'],
      solutions: ['Đầu tư điện mặt trời', 'Phát triển điện gió', 'Lưu trữ năng lượng'],
      quiz: {
        question: 'Lợi ích lớn nhất của năng lượng tái tạo là gì?',
        options: ['Giá rẻ', 'Giảm phát thải', 'Dễ sử dụng', 'Không giới hạn'],
        correct: 1,
      },
    },
    {
      name: 'Tăng nhiệt độ toàn cầu 3°C',
      parameters: { co2: 500, temperature: 3.0, seaLevel: 50 },
      effects: ['Băng Bắc Cực tan hoàn toàn', 'Ngập lụt ven biển', 'Hạn hán và lũ lụt'],
      solutions: ['Giảm phát thải khẩn cấp', 'Thích ứng khí hậu', 'Công nghệ carbon capture'],
      quiz: {
        question: 'Hậu quả nghiêm trọng nhất của tăng nhiệt độ 3°C là gì?',
        options: ['Mưa nhiều hơn', 'Ngập lụt ven biển', 'Trời nóng hơn', 'Gió mạnh hơn'],
        correct: 1,
      },
    },
    {
      name: 'Chuyển đổi giao thông điện 100%',
      parameters: { co2: 380, temperature: 1.0, seaLevel: 18 },
      effects: ['Giảm ô nhiễm không khí', 'Giảm phát thải từ giao thông', 'Cải thiện sức khỏe cộng đồng'],
      solutions: ['Hạ tầng sạc điện', 'Ưu đãi xe điện', 'Giao thông công cộng'],
      quiz: {
        question: 'Giao thông điện giúp giảm phát thải như thế nào?',
        options: ['Chạy nhanh hơn', 'Không dùng xăng dầu', 'Ít tiếng ồn', 'Giá rẻ hơn'],
        correct: 1,
      },
    },
  ],
};
