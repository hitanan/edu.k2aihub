// Neural Network Builder Game Data
export interface NeuralNetworkBuilderGameData {
  architectures: Array<{
    name: string;
    layers: Array<{
      type: string;
      neurons: number;
      activation: string;
    }>;
    description: string;
    use_case: string;
    challenge: string;
    components: string[];
    solution: string[];
  }>;
  challenges: Array<{
    problem: string;
    requirements: string[];
    solution: string;
    architecture: string;
    quiz: {
      question: string;
      options: string[];
      correct: number;
      explanation: string;
    };
  }>;
  concepts: Array<{
    name: string;
    description: string;
    formula: string;
    example: string;
  }>;
}

export const neuralNetworkBuilderGameData: NeuralNetworkBuilderGameData = {
  architectures: [
    {
      name: 'Simple Perceptron',
      layers: [
        { type: 'input', neurons: 2, activation: 'linear' },
        { type: 'output', neurons: 1, activation: 'sigmoid' },
      ],
      description: 'Mạng neural đơn giản cho bài toán phân loại nhị phân',
      use_case: 'Phân loại AND, OR logic gates',
      challenge: 'Kéo thả các lớp để tạo mạng neural',
      components: ['Input Layer', 'Output Layer', 'Activation Function'],
      solution: ['Input Layer (2 neurons)', 'Output Layer (1 neuron)', 'Sigmoid activation'],
    },
    {
      name: 'Multi-layer Perceptron',
      layers: [
        { type: 'input', neurons: 784, activation: 'relu' },
        { type: 'hidden', neurons: 128, activation: 'relu' },
        { type: 'hidden', neurons: 64, activation: 'relu' },
        { type: 'output', neurons: 10, activation: 'softmax' },
      ],
      description: 'Mạng neural nhiều lớp cho nhận diện chữ số',
      use_case: 'Nhận diện chữ số viết tay MNIST',
      challenge: 'Thiết kế mạng neural cho bài toán phân loại 10 lớp',
      components: ['Input Layer', 'Hidden Layer', 'Output Layer', 'ReLU', 'Softmax'],
      solution: ['Input (784)', 'Hidden (128)', 'Hidden (64)', 'Output (10)', 'Softmax'],
    },
  ],
  challenges: [
    {
      problem: 'Nhận diện khuôn mặt',
      requirements: [
        'Input: 64x64 pixel image',
        'Output: Person identity',
        'Hidden layers needed',
      ],
      solution: 'CNN with convolutional and pooling layers',
      architecture: 'Convolutional Neural Network',
      quiz: {
        question: 'Lớp nào phù hợp nhất cho xử lý ảnh?',
        options: ['Dense Layer', 'Convolutional Layer', 'LSTM Layer', 'Dropout Layer'],
        correct: 1,
        explanation: 'Convolutional Layer rất hiệu quả trong việc phát hiện đặc trưng trong ảnh',
      },
    },
    {
      problem: 'Dự đoán giá cổ phiếu',
      requirements: [
        'Input: Historical stock prices',
        'Output: Next day price',
        'Time series data',
      ],
      solution: 'LSTM/GRU neural network',
      architecture: 'Recurrent Neural Network',
      quiz: {
        question: 'Loại mạng nào tốt nhất cho dữ liệu time series?',
        options: ['CNN', 'RNN/LSTM', 'Dense Network', 'Autoencoder'],
        correct: 1,
        explanation: 'RNN và LSTM được thiết kế đặc biệt cho dữ liệu chuỗi thời gian',
      },
    },
  ],
  concepts: [
    {
      name: 'Forward Propagation',
      description: 'Quá trình truyền dữ liệu từ input đến output',
      formula: 'y = f(Wx + b)',
      example: 'Input → Hidden → Output',
    },
    {
      name: 'Backpropagation',
      description: 'Quá trình cập nhật trọng số dựa trên lỗi',
      formula: 'W = W - α∇L',
      example: 'Tính gradient và cập nhật weights',
    },
  ],
};
