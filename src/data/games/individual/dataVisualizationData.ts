// Data Visualization Game Data
export interface DataVisualizationGameData {
  datasets: Array<{
    name: string;
    data: Array<{
      year: number;
      temp: number;
    }>;
    description: string;
    type: string;
  }>;
  challenges: Array<{
    question: string;
    dataset: string;
    options: string[];
    correct: number;
  }>;
}

export const dataVisualizationGameData: DataVisualizationGameData = {
  datasets: [
    {
      name: 'Global Temperature',
      data: [
        { year: 2020, temp: 14.9 },
        { year: 2021, temp: 15.1 },
        { year: 2022, temp: 15.3 },
        { year: 2023, temp: 15.5 },
        { year: 2024, temp: 15.7 },
      ],
      description: 'Nhiệt độ trung bình toàn cầu theo năm',
      type: 'line',
    },
    {
      name: 'Energy Sources',
      data: [
        { year: 2024, temp: 30 }, // representing percentage
        { year: 2024, temp: 25 },
        { year: 2024, temp: 20 },
        { year: 2024, temp: 15 },
        { year: 2024, temp: 10 },
      ],
      description:
        'Tỷ lệ các nguồn năng lượng: Hóa thạch, Mặt trời, Gió, Nước, Khác',
      type: 'pie',
    },
  ],
  challenges: [
    {
      question:
        'Biểu đồ nào phù hợp nhất để hiển thị xu hướng nhiệt độ theo thời gian?',
      dataset: 'Global Temperature',
      options: [
        'Biểu đồ cột',
        'Biểu đồ đường',
        'Biểu đồ tròn',
        'Biểu đồ điểm',
      ],
      correct: 1,
    },
  ],
};
