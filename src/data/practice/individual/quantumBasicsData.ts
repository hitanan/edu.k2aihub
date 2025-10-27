// Quantum Basics Game Data
export interface QuantumBasicsGameData {
  concepts: Array<{
    name: string;
    description: string;
    states: string[];
    quiz: {
      question: string;
      options: string[];
      correct: number;
      explanation: string;
    };
  }>;
}

export const quantumBasicsGameData: QuantumBasicsGameData = {
  concepts: [
    {
      name: 'Qubit',
      description: 'Đơn vị thông tin cơ bản của máy tính lượng tử',
      states: ['|0⟩', '|1⟩', 'Superposition'],
      quiz: {
        question: 'Qubit khác bit truyền thống như thế nào?',
        options: [
          'Chỉ lưu được 0 hoặc 1',
          'Có thể ở trạng thái chồng chất',
          'Lưu trữ nhiều bit hơn',
          'Tốc độ nhanh hơn',
        ],
        correct: 1,
        explanation: 'Qubit có thể ở trạng thái chồng chất của cả 0 và 1 đồng thời.',
      },
    },
    {
      name: 'Entanglement',
      description: 'Hiện tượng hai qubit liên kết lượng tử với nhau',
      states: ['Separated', 'Entangled', 'Measured'],
      quiz: {
        question: 'Entanglement có ý nghĩa gì?',
        options: [
          'Hai qubit hoàn toàn độc lập',
          'Đo qubit này ảnh hưởng ngay lập tức đến qubit kia',
          'Hai qubit có cùng giá trị',
          'Không thể đo được hai qubit',
        ],
        correct: 1,
        explanation: 'Khi đo một qubit entangled, trạng thái của qubit kia thay đổi ngay lập tức.',
      },
    },
    {
      name: 'Superposition',
      description: 'Trạng thái qubit có thể là cả 0 và 1 đồng thời',
      states: ['Pure |0⟩', 'Pure |1⟩', 'Superposition'],
      quiz: {
        question: 'Tại sao superposition quan trọng trong máy tính lượng tử?',
        options: [
          'Giúp qubit lưu trữ nhiều dữ liệu hơn',
          'Cho phép tính toán song song nhiều khả năng',
          'Làm cho máy tính nhanh hơn',
          'Giảm tiêu thụ năng lượng',
        ],
        correct: 1,
        explanation: 'Superposition cho phép máy tính lượng tử xử lý nhiều khả năng đồng thời.',
      },
    },
    {
      name: 'Quantum Gate',
      description: 'Phép toán cơ bản thao tác trên qubit',
      states: ['Identity', 'Pauli-X', 'Hadamard'],
      quiz: {
        question: 'Quantum gate khác logic gate truyền thống như thế nào?',
        options: [
          'Hoạt động nhanh hơn',
          'Có thể đảo ngược (reversible)',
          'Sử dụng ít năng lượng hơn',
          'Chỉ xử lý số 0 và 1',
        ],
        correct: 1,
        explanation: 'Quantum gate là reversible, có thể đảo ngược phép toán, khác với logic gate truyền thống.',
      },
    },
    {
      name: 'Quantum Measurement',
      description: 'Quá trình đo qubit làm sụp đổ superposition',
      states: ['Before Measurement', 'During Measurement', 'Collapsed State'],
      quiz: {
        question: 'Điều gì xảy ra khi đo một qubit ở trạng thái superposition?',
        options: [
          'Qubit giữ nguyên trạng thái',
          'Qubit sụp đổ thành 0 hoặc 1',
          'Qubit bị phá hủy',
          'Không thể đo được',
        ],
        correct: 1,
        explanation: 'Đo qubit làm sụp đổ superposition, qubit chỉ còn ở trạng thái 0 hoặc 1.',
      },
    },
    {
      name: 'Quantum Algorithm',
      description: 'Thuật toán được thiết kế cho máy tính lượng tử',
      states: ['Classical', 'Quantum', 'Hybrid'],
      quiz: {
        question: 'Thuật toán Shor nổi tiếng vì điều gì?',
        options: ['Tìm kiếm trong database', 'Phân tích số nguyên lớn', 'Sắp xếp dữ liệu', 'Nén dữ liệu'],
        correct: 1,
        explanation: 'Thuật toán Shor có thể phân tích số nguyên lớn nhanh hơn máy tính truyền thống exponentially.',
      },
    },
  ],
};
