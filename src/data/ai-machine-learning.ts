import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface AIMLLessonData extends BaseLessonData {
  aiConcepts?: string[];
  practicalProjects?: Array<{
    title: string;
    description: string;
    tools: string[];
    difficulty: string;
  }>;
}

export const AIMLLessons: AIMLLessonData[] = [
  {
    id: 'ai-fundamentals',
    title: 'Cơ bản về AI và Machine Learning',
    description:
      'Tìm hiểu các khái niệm cơ bản về trí tuệ nhân tạo và học máy, từ lịch sử phát triển đến ứng dụng thực tế.',
    duration: '120 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://youtube.com/watch?v=aircAruvnKk',
    imageUrl: '/images/ai-fundamentals.jpg',
    objectives: [
      'Hiểu được khái niệm AI và Machine Learning',
      'Phân biệt các loại AI: Narrow AI, General AI, Super AI',
      'Nắm vững quy trình Machine Learning cơ bản',
      'Tìm hiểu các ứng dụng AI trong đời sống',
    ],
    prerequisites: [
      'Kiến thức toán học cơ bản',
      'Hiểu biết về máy tính và lập trình',
    ],
    exercises: [
      {
        title: 'Xây dựng mô hình dự đoán đơn giản',
        description:
          'Sử dụng Python và scikit-learn để tạo mô hình dự đoán giá nhà',
        difficulty: 'Cơ bản',
        materials: ['Python', 'Jupyter Notebook', 'scikit-learn', 'pandas'],
        procedure: [
          'Cài đặt các thư viện cần thiết: pip install scikit-learn pandas numpy',
          'Tải dataset giá nhà từ sklearn.datasets',
          'Khám phá dữ liệu với pandas.describe() và matplotlib',
          'Chia dữ liệu train/test với train_test_split',
          'Huấn luyện mô hình Linear Regression',
          'Đánh giá mô hình với mean_squared_error',
          'Visualize kết quả dự đoán với matplotlib',
        ],
        expectedResults:
          'Mô hình có khả năng dự đoán giá nhà với độ chính xác hợp lý',
        solution:
          '# Code hoàn chỉnh\nfrom sklearn.datasets import load_boston\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_squared_error\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# Load data\ndata = load_boston()\nX, y = data.data, data.target\n\n# Split data\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\n\n# Train model\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\n\n# Predict\ny_pred = model.predict(X_test)\n\n# Evaluate\nmse = mean_squared_error(y_test, y_pred)\nprint(f"Mean Squared Error: {mse}")\n\n# Visualize\nplt.scatter(y_test, y_pred)\nplt.xlabel("Actual Prices")\nplt.ylabel("Predicted Prices")\nplt.title("Actual vs Predicted House Prices")\nplt.show()',
      },
    ],
    realWorldApplications: [
      'Hệ thống đề xuất của Netflix, Amazon',
      'Nhận dạng giọng nói trong Siri, Google Assistant',
      'Xe tự lái của Tesla, Google',
      'Chẩn đoán y tế bằng hình ảnh',
      'Phát hiện gian lận tài chính',
    ],
    caseStudies: [
      {
        title: 'AlphaGo - Chiến thắng kỳ thủ hàng đầu thế giới',
        organization: 'DeepMind (Google)',
        problem: 'Cờ vây có độ phức tạp cực cao với 10^170 khả năng đi cờ',
        solution:
          'Sử dụng Deep Reinforcement Learning kết hợp Monte Carlo Tree Search',
        impact: 'Mở ra kỷ nguyên mới cho AI trong các trò chơi phức tạp',
        innovations: [
          'Deep Neural Networks',
          'Reinforcement Learning',
          'Self-play training',
        ],
      },
    ],
    aiConcepts: [
      'Supervised Learning',
      'Unsupervised Learning',
      'Reinforcement Learning',
      'Neural Networks',
      'Deep Learning',
    ],
    practicalProjects: [
      {
        title: 'Chatbot customer service',
        description: 'Xây dựng chatbot hỗ trợ khách hàng bằng NLP',
        tools: ['Python', 'NLTK', 'TensorFlow', 'Flask'],
        difficulty: 'Trung bình',
      },
    ],
  },
  {
    id: 'neural-networks',
    title: 'Mạng Neural và Deep Learning',
    description:
      'Khám phá kiến trúc mạng neural, cách hoạt động và ứng dụng trong deep learning.',
    duration: '150 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://youtube.com/watch?v=aircAruvnKk',
    objectives: [
      'Hiểu cấu trúc và hoạt động của neuron nhân tạo',
      'Nắm vững các loại mạng neural: CNN, RNN, LSTM',
      'Thực hành xây dựng mạng neural với TensorFlow',
      'Áp dụng deep learning vào bài toán thực tế',
    ],
    prerequisites: [
      'Kiến thức AI cơ bản',
      'Toán học: đại số tuyến tính, giải tích',
      'Lập trình Python cơ bản',
    ],
    exercises: [
      {
        title: 'Phân loại hình ảnh với CNN',
        description: 'Xây dựng mạng CNN để phân loại ảnh CIFAR-10',
        difficulty: 'Trung bình',
        materials: ['TensorFlow', 'Keras', 'CIFAR-10 dataset'],
        procedure: [
          'Import các thư viện cần thiết',
          'Tải và chuẩn bị dữ liệu CIFAR-10',
          'Xây dựng kiến trúc CNN với Conv2D, MaxPooling2D',
          'Compile model với optimizer Adam',
          'Huấn luyện model với 10 epochs',
          'Đánh giá hiệu suất trên test set',
          'Visualize kết quả dự đoán',
        ],
      },
    ],
    realWorldApplications: [
      'Nhận dạng khuôn mặt trong camera an ninh',
      'Dịch ngôn ngữ real-time của Google Translate',
      'Phân tích X-quang trong y tế',
      'Xe tự lái nhận diện vật thể',
      'Phân tích cảm xúc trong social media',
    ],
  },
  {
    id: 'ml-algorithms',
    title: 'Thuật toán Machine Learning',
    description:
      'Tìm hiểu chi tiết các thuật toán ML phổ biến và cách áp dụng trong thực tế.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Nắm vững các thuật toán: Linear/Logistic Regression, Decision Tree, Random Forest, SVM',
      'So sánh ưu nhược điểm của từng thuật toán',
      'Biết cách chọn thuật toán phù hợp cho từng bài toán',
      'Thực hành fine-tuning hyperparameters',
    ],
    prerequisites: [
      'Kiến thức AI và Neural Networks',
      'Thống kê và xác suất',
      'Lập trình Python nâng cao',
    ],
    exercises: [
      {
        title: 'So sánh hiệu suất các thuật toán ML',
        description:
          'Áp dụng nhiều thuật toán khác nhau trên cùng dataset và so sánh',
        difficulty: 'Nâng cao',
        procedure: [
          'Chọn dataset phù hợp (ví dụ: Iris, Wine, Breast Cancer)',
          'Preprocessing dữ liệu: scaling, encoding',
          'Áp dụng 5-6 thuật toán khác nhau',
          'Cross-validation để đánh giá đáng tin cậy',
          'Hyperparameter tuning với GridSearchCV',
          'Visualize kết quả so sánh',
          'Phân tích và đưa ra kết luận',
        ],
      },
    ],
    realWorldApplications: [
      'Hệ thống credit scoring trong ngân hàng',
      'Phân loại email spam',
      'Dự đoán churn rate khách hàng',
      'Phân tích rủi ro đầu tư',
      'Tối ưu hóa giá cả dynamic pricing',
    ],
  },
  {
    id: 'ai-ethics-applications',
    title: 'Đạo đức AI và Ứng dụng thực tế',
    description:
      'Khám phá các vấn đề đạo đức trong AI và cách áp dụng AI có trách nhiệm.',
    duration: '90 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Hiểu các vấn đề đạo đức trong AI: bias, privacy, transparency',
      'Nắm vững nguyên tắc Responsible AI',
      'Biết cách đánh giá tác động xã hội của AI',
      'Áp dụng AI đạo đức trong dự án thực tế',
    ],
    prerequisites: ['Kiến thức AI cơ bản', 'Hiểu biết về xã hội và luật pháp'],
    exercises: [
      {
        title: 'Phân tích bias trong AI recruitment',
        description:
          'Phát hiện và khắc phục bias trong hệ thống tuyển dụng tự động',
        difficulty: 'Trung bình',
        procedure: [
          'Phân tích dataset CV với thông tin demographic',
          'Kiểm tra bias theo giới tính, chủng tộc',
          'Áp dụng fairness metrics',
          'Đề xuất giải pháp khắc phục bias',
          'Thiết kế quy trình kiểm soát đạo đức',
        ],
      },
    ],
    realWorldApplications: [
      'Hệ thống tuyển dụng công bằng',
      'AI trong y tế không phân biệt',
      'Chatbot customer service có văn hóa',
      'Xe tự lái ra quyết định đạo đức',
      'Hệ thống credit score minh bạch',
    ],
  },
];
