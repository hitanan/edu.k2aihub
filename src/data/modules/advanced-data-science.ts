import { BaseLessonData } from '@/types/lesson-base';

export const advancedDataScienceLessons: BaseLessonData[] = [
  {
    id: 'advanced-machine-learning-algorithms',
    title: 'Thuật Toán Machine Learning Nâng Cao',
    description:
      'Master advanced ML algorithms including ensemble methods, advanced regression techniques, clustering algorithms, và dimensionality reduction cho real-world Vietnamese data problems.',
    duration: '240 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=ULE78ME1ckQ', // Advanced Machine Learning Algorithms
    imageUrl: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1200&h=600&fit=crop',
    objectives: [
      'Implement advanced ensemble learning methods (Random Forest, Gradient Boosting, Stacking)',
      'Apply advanced regression techniques (Ridge, Lasso, Elastic Net, Polynomial)',
      'Master clustering algorithms (K-Means, DBSCAN, Hierarchical, GMM)',
      'Implement dimensionality reduction techniques (PCA, t-SNE, UMAP)',
      'Develop custom machine learning pipelines với hyperparameter optimization',
    ],
    prerequisites: [
      'Basic machine learning knowledge',
      'Python programming proficiency',
      'Statistics và linear algebra fundamentals',
    ],
    exercises: [
      {
        title: 'Vietnamese E-commerce Recommendation System',
        description:
          'Build advanced recommendation system cho Vietnamese e-commerce platform using collaborative filtering, content-based filtering, và hybrid approaches',
        difficulty: 'Nâng cao',
        materials: [
          'Vietnamese e-commerce dataset',
          'Python ML libraries',
          'Recommendation algorithms',
          'Evaluation metrics',
        ],
        procedure: [
          'Analyze Vietnamese consumer behavior patterns trong e-commerce data',
          'Implement collaborative filtering using matrix factorization',
          'Develop content-based filtering using Vietnamese product features',
          'Create hybrid recommendation model combining multiple approaches',
          'Evaluate system performance using precision, recall, và Vietnamese user preferences',
        ],
        expectedResults: 'High-performance recommendation system optimized cho Vietnamese market preferences',
        solution:
          'Advanced ensemble recommendation system với culturally-adapted features và Vietnamese language processing',
      },
    ],
    realWorldApplications: [
      'Shopee product recommendation optimization',
      'Vingroup customer behavior analysis',
      'VPBank credit scoring model development',
      'Grab demand forecasting systems',
    ],
    caseStudies: [
      {
        title: 'VietinBank AI Credit Scoring System',
        organization: 'VietinBank',
        problem: 'Developing advanced credit risk assessment model cho Vietnamese borrowers với limited credit history',
        solution:
          'Advanced ML ensemble model combining traditional financial data, alternative data sources, behavioral patterns',
        impact:
          'Improved loan approval accuracy by 35%, reduced default rates by 28%, expanded lending to underserved segments',
        innovations: [
          'Vietnamese-specific risk factors',
          'Alternative data integration',
          'Explainable AI for regulatory compliance',
        ],
      },
    ],
    resources: [
      {
        title: 'Advanced Machine Learning Handbook',
        url: 'https://scikit-learn.org/stable/user_guide.html',
        type: 'Documentation',
      },
    ],
    vietnamContext: {
      title: 'Machine Learning giải quyết bài toán Việt Nam',
      content: [
        'Các ngân hàng Việt Nam như Techcombank, VPBank đang tiên phong áp dụng ML để chấm điểm tín dụng, giúp tiếp cận được nhiều khách hàng dưới chuẩn truyền thống.',
        'Trong nông nghiệp, các mô hình ML được dùng để dự báo sản lượng lúa ở Đồng bằng sông Cửu Long, dựa trên dữ liệu thời tiết và thổ nhưỡng.',
        'Các sàn thương mại điện tử như Tiki, Shopee sử dụng hệ thống khuyến nghị sản phẩm phức tạp để cá nhân hóa trải nghiệm mua sắm cho hàng triệu người dùng Việt.',
      ],
    },
    careerConnect: {
      name: 'TS. Nguyễn An Nguyên',
      title: 'Giám đốc Khoa học Dữ liệu',
      company: 'Tiki.vn',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyenannguyen',
      quote:
        'Dữ liệu ở Việt Nam rất độc đáo, từ hành vi mua sắm đến ngôn ngữ. Thách thức và cũng là cơ hội cho các nhà khoa học dữ liệu là xây dựng những mô hình "thuần Việt" thực sự hiệu quả.',
    },
    quizzes: [
      {
        question:
          'Phương pháp Ensemble Learning nào xây dựng các mô hình tuần tự, trong đó mô hình sau học từ lỗi của mô hình trước?',
        options: ['Random Forest', 'Bagging', 'Gradient Boosting', 'Stacking'],
        correctAnswerIndex: 2,
        explanation:
          'Gradient Boosting (như XGBoost, LightGBM) là một phương pháp ensemble tuần tự, nơi mỗi cây quyết định mới được huấn luyện để sửa các lỗi còn lại từ tập hợp các cây trước đó, giúp tạo ra một mô hình tổng thể rất mạnh.',
      },
    ],
    faqs: [
      {
        question: 'Sự khác biệt giữa PCA và t-SNE là gì?',
        answer:
          'PCA (Principal Component Analysis) là một kỹ thuật giảm chiều dữ liệu tuyến tính, tập trung vào việc giữ lại phương sai lớn nhất của dữ liệu. t-SNE (t-Distributed Stochastic Neighbor Embedding) là một kỹ thuật phi tuyến, tập trung vào việc giữ lại cấu trúc lân cận của các điểm dữ liệu, rất hiệu quả trong việc trực quan hóa các cụm dữ liệu trong không gian ít chiều hơn.',
      },
      {
        question: 'Overfitting (quá khớp) trong Machine Learning là gì?',
        answer:
          'Overfitting xảy ra khi một mô hình học quá "thuộc lòng" dữ liệu huấn luyện, bao gồm cả nhiễu và các chi tiết không quan trọng. Kết quả là mô hình hoạt động rất tốt trên dữ liệu đã thấy nhưng lại hoạt động kém trên dữ liệu mới, mất đi khả năng tổng quát hóa.',
      },
      {
        question: 'Ensemble Learning là gì?',
        answer: 'Ensemble Learning là một kỹ thuật kết hợp nhiều mô hình học máy (gọi là "base learners") lại với nhau để tạo ra một mô hình dự đoán tổng thể tốt hơn. Ý tưởng là sự kết hợp của nhiều mô hình yếu có thể tạo ra một mô hình mạnh. Random Forest và Gradient Boosting là hai ví dụ phổ biến.',
      },
      {
        question: 'Sự khác biệt giữa Bagging và Boosting là gì?',
        answer: 'Cả hai đều là kỹ thuật ensemble. Bagging (như Random Forest) xây dựng các mô hình một cách độc lập và song song trên các mẫu con khác nhau của dữ liệu. Boosting (như Gradient Boosting) xây dựng các mô hình một cách tuần tự, trong đó mỗi mô hình mới cố gắng sửa chữa những sai sót của mô hình trước đó.',
      },
      {
        question: 'Regularization (Điều chuẩn hóa) trong hồi quy có tác dụng gì?',
        answer: 'Regularization là một kỹ thuật được sử dụng để ngăn chặn overfitting trong các mô hình hồi quy. Nó hoạt động bằng cách thêm một "hình phạt" vào hàm mất mát dựa trên độ lớn của các hệ số của mô hình. Hồi quy Lasso (L1) có thể đưa một số hệ số về 0, giúp lựa chọn đặc trưng. Hồi quy Ridge (L2) thu nhỏ các hệ số nhưng không đưa chúng về 0.',
      },
      {
        question: 'DBSCAN khác với K-Means như thế nào?',
        answer: 'K-Means là một thuật toán phân cụm yêu cầu bạn phải chỉ định trước số lượng cụm (K). Nó có xu hướng tạo ra các cụm có hình cầu và kích thước tương tự nhau. DBSCAN (Density-Based Spatial Clustering of Applications with Noise) không yêu cầu số lượng cụm; thay vào đó, nó nhóm các điểm dữ liệu dựa trên mật độ, cho phép nó tìm thấy các cụm có hình dạng bất kỳ và xác định các điểm nhiễu (outliers).',
      },
      {
        question: 'Hyperparameter là gì và tại sao cần phải tối ưu hóa chúng?',
        answer: 'Hyperparameter là các tham số cấu hình của một thuật toán mà không được học từ dữ liệu (ví dụ: số lượng cây trong Random Forest, tốc độ học trong Gradient Boosting). Việc lựa chọn các giá trị hyperparameter phù hợp có ảnh hưởng lớn đến hiệu suất của mô hình. Tối ưu hóa hyperparameter (Hyperparameter Tuning) là quá trình tìm kiếm bộ giá trị tốt nhất cho chúng, thường được thực hiện bằng các kỹ thuật như Grid Search hoặc Randomized Search.',
      },
      {
        question: 'Cross-validation (Kiểm tra chéo) được sử dụng để làm gì?',
        answer: 'Cross-validation là một kỹ thuật đánh giá mô hình giúp ước tính hiệu suất của mô hình trên dữ liệu chưa thấy một cách đáng tin cậy hơn. Thay vì chỉ chia dữ liệu thành một cặp train/test, nó chia dữ liệu thành nhiều "fold" (phần), sau đó lần lượt huấn luyện và kiểm tra trên các kết hợp khác nhau của các fold này, rồi lấy kết quả trung bình.',
      },
      {
        question: 'Stacking trong Ensemble Learning là gì?',
        answer: 'Stacking là một kỹ thuật ensemble nâng cao. Nó kết hợp các dự đoán từ nhiều mô hình khác nhau (ví dụ: Random Forest, SVM, Neural Network) bằng cách sử dụng một "meta-model" (siêu mô hình) khác. Siêu mô hình này học cách kết hợp các dự đoán của các mô hình cơ sở một cách thông minh để đưa ra dự đoán cuối cùng, thường là tốt hơn so với bất kỳ mô hình đơn lẻ nào.',
      },
      {
        question: 'UMAP là gì và nó có ưu điểm gì so với t-SNE?',
        answer: 'UMAP (Uniform Manifold Approximation and Projection) là một kỹ thuật giảm chiều và trực quan hóa dữ liệu hiện đại, tương tự như t-SNE. Ưu điểm chính của UMAP là nó thường nhanh hơn đáng kể so với t-SNE và có khả năng bảo toàn cấu trúc toàn cục (global structure) của dữ liệu tốt hơn, trong khi t-SNE chủ yếu tập trung vào cấu trúc cục bộ.',
      },
    ],
  },
  {
    id: 'deep-learning-neural-networks',
    title: 'Deep Learning & Mạng Nơ-ron Sâu',
    description:
      'Comprehensive deep learning covering neural network architectures, CNN, RNN, LSTM, Transformer models, và advanced deep learning techniques.',
    duration: '260 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=aircAruvnKk', // Deep Learning and Neural Networks
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=600&fit=crop',
    objectives: [
      'Master deep neural network architectures và training techniques',
      'Implement Convolutional Neural Networks (CNNs) cho image processing',
      'Develop Recurrent Neural Networks (RNNs) và LSTMs for sequence data',
      'Build Transformer models cho attention-based learning',
      'Apply advanced optimization techniques và regularization methods',
    ],
    prerequisites: [
      'Advanced machine learning knowledge',
      'Strong Python programming skills',
      'Calculus và linear algebra proficiency',
    ],
    exercises: [
      {
        title: 'Vietnamese Document Classification System',
        description:
          'Build deep learning system cho classifying Vietnamese legal documents into categories using advanced NLP techniques',
        difficulty: 'Nâng cao',
        materials: [
          'Vietnamese legal document corpus',
          'Pre-trained Vietnamese language models',
          'Deep learning frameworks',
          'GPU computing resources',
        ],
        procedure: [
          'Preprocess Vietnamese legal document corpus với text normalization',
          'Implement word embeddings trained on Vietnamese legal texts',
          'Design và train CNN-LSTM hybrid architecture',
          'Fine-tune pre-trained Vietnamese BERT model',
          'Evaluate model performance on Vietnamese legal document classification',
        ],
        expectedResults: 'High-accuracy document classification system handling Vietnamese legal language complexity',
        solution:
          'Ensemble deep learning model combining CNN feature extraction, LSTM sequence modeling, và pre-trained transformer fine-tuning',
      },
    ],
    realWorldApplications: [
      'Zalo intelligent chatbot development',
      'VinAI computer vision applications',
      'FPT speech recognition systems',
      'Banking document processing automation',
    ],
    caseStudies: [
      {
        title: 'VinBrain Medical AI Diagnostics',
        organization: 'VinBrain (Vingroup AI subsidiary)',
        problem: 'Developing AI-powered medical imaging diagnosis system cho Vietnamese healthcare system',
        solution:
          'Advanced CNN architectures, transfer learning from international datasets, Vietnamese medical data integration',
        impact:
          'Achieved 95%+ accuracy on chest X-ray diagnosis, deployed in 50+ Vietnamese hospitals, reduced diagnosis time by 70%',
        innovations: [
          'Vietnamese-adapted medical AI',
          'Multi-modal medical data fusion',
          'Explainable AI for medical professionals',
        ],
      },
    ],
    resources: [
      {
        title: 'Deep Learning Specialization',
        url: 'https://www.deeplearning.ai/',
        type: 'Course',
      },
    ],
    vietnamContext: {
      title: 'Deep Learning và Tác động tại Việt Nam',
      content: [
        'VinBrain, một công ty của Vingroup, đã phát triển DrAid™ - một nền tảng AI chẩn đoán hình ảnh y tế, được triển khai rộng rãi và hỗ trợ đắc lực cho các bác sĩ Việt Nam.',
        'Các mô hình nhận dạng tiếng nói của Zalo AI, FPT.AI có khả năng phân biệt giọng ba miền Bắc-Trung-Nam, là một thành tựu quan trọng của Deep Learning ứng dụng.',
        'Xe tự lái của VinFast sử dụng các mô hình Deep Learning phức tạp để xử lý dữ liệu từ camera và cảm biến, thích ứng với điều kiện giao thông đặc thù của Việt Nam.',
      ],
    },
    careerConnect: {
      name: 'Trương Quốc Hùng',
      title: 'Tổng Giám đốc VinBrain',
      company: 'VinBrain',
      imageUrl: 'https://i.pravatar.cc/150?u=truongquochung',
      quote:
        'Deep Learning không chỉ là công nghệ, nó là công cụ để giải quyết những bài toán lớn của xã hội. Tại VinBrain, chúng tôi dùng nó để cải thiện chất lượng y tế cho người Việt.',
    },
    quizzes: [
      {
        question: 'Kiến trúc Transformer, nền tảng của các mô hình ngôn ngữ lớn hiện đại, dựa trên cơ chế chính nào?',
        options: ['Convolution (Tích chập)', 'Recurrence (Đệ quy)', 'Attention (Sự chú ý)', 'Pooling (Gộp)'],
        correctAnswerIndex: 2,
        explanation:
          'Cơ chế "Attention" cho phép mô hình cân nhắc tầm quan trọng của các từ khác nhau trong câu khi xử lý một từ cụ thể, giúp nó nắm bắt được các mối quan hệ ngữ nghĩa phức tạp và xa nhau, một bước đột phá so với RNN/LSTM.',
      },
    ],
    faqs: [
      {
        question: 'Mạng CNN (Convolutional Neural Network) hoạt động như thế nào?',
        answer:
          'Mạng CNN hoạt động bằng cách trượt các "bộ lọc" (filters hoặc kernels) qua hình ảnh đầu vào. Mỗi bộ lọc được thiết kế để phát hiện một đặc trưng cụ thể (như cạnh, góc, hoặc màu sắc). Các lớp sâu hơn sẽ kết hợp các đặc trưng đơn giản này để nhận diện các cấu trúc phức tạp hơn (như mắt, mũi, hoặc toàn bộ khuôn mặt).',
      },
      {
        question: 'Transfer Learning (Học chuyển giao) là gì và tại sao nó hữu ích?',
        answer:
          'Transfer Learning là kỹ thuật sử dụng một mô hình đã được huấn luyện trước trên một tập dữ liệu lớn (ví dụ: ImageNet) và tinh chỉnh (fine-tune) nó cho một nhiệm vụ cụ thể với tập dữ liệu nhỏ hơn. Điều này rất hữu ích vì nó tiết kiệm thời gian và tài nguyên tính toán, đồng thời cho phép đạt được hiệu suất cao ngay cả khi không có nhiều dữ liệu.',
      },
      {
        question: 'Sự khác biệt giữa Deep Learning và Machine Learning là gì?',
        answer: 'Machine Learning truyền thống thường yêu cầu con người phải thực hiện bước "trích xuất đặc trưng" (feature engineering) thủ công. Deep Learning, với kiến trúc nhiều lớp của nó, có khả năng tự động học các đặc trưng này trực tiếp từ dữ liệu thô. Điều này làm cho Deep Learning đặc biệt mạnh mẽ đối với các loại dữ liệu phức tạp như hình ảnh, âm thanh và văn bản.',
      },
      {
        question: 'Mạng RNN (Recurrent Neural Network) và LSTM (Long Short-Term Memory) được sử dụng cho loại bài toán nào?',
        answer: 'RNN và LSTM được thiết kế đặc biệt để xử lý dữ liệu dạng chuỗi (sequential data), nơi thứ tự của dữ liệu là quan trọng. Chúng được ứng dụng rộng rãi trong xử lý ngôn ngữ tự nhiên (dịch máy, phân tích văn bản), nhận dạng giọng nói, và dự báo chuỗi thời gian.',
      },
      {
        question: 'Vấn đề "vanishing gradient" (gradient biến mất) trong mạng RNN là gì?',
        answer: 'Trong quá trình huấn luyện RNN trên các chuỗi dài, gradient (đạo hàm của sai số) có thể trở nên rất nhỏ khi được lan truyền ngược qua nhiều bước thời gian. Điều này làm cho các lớp ở đầu chuỗi học rất chậm hoặc không học được gì cả. LSTM được phát minh để giải quyết vấn đề này bằng cách sử dụng các "cổng" (gates) để kiểm soát luồng thông tin.',
      },
      {
        question: 'Tại sao cần các hàm kích hoạt (activation functions) như ReLU trong mạng nơ-ron?',
        answer: 'Nếu không có các hàm kích hoạt phi tuyến (như ReLU, Sigmoid, Tanh), một mạng n-ron sâu dù có bao nhiêu lớp cũng chỉ tương đương với một mô hình tuyến tính duy nhất. Các hàm kích hoạt phi tuyến cho phép mạng học được các mối quan hệ phức tạp và phi tuyến trong dữ liệu.',
      },
      {
        question: 'Dropout là một kỹ thuật regularization hoạt động như thế nào?',
        answer: 'Trong mỗi lần lặp của quá trình huấn luyện, Dropout sẽ tạm thời "tắt" một cách ngẫu nhiên một số nơ-ron trong mạng. Điều này buộc mạng phải học các đặc trưng một cách dư thừa và không quá phụ thuộc vào bất kỳ một nơ-ron nào, từ đó giúp giảm overfitting.',
      },
      {
        question: 'Batch Normalization có tác dụng gì?',
        answer: 'Batch Normalization chuẩn hóa đầu vào của mỗi lớp trong mạng để có giá trị trung bình bằng 0 và phương sai bằng 1. Kỹ thuật này giúp ổn định và tăng tốc đáng kể quá trình huấn luyện, cho phép sử dụng tốc độ học (learning rate) cao hơn và làm cho việc khởi tạo trọng số trở nên ít quan trọng hơn.',
      },
      {
        question: 'Sự khác biệt giữa TensorFlow và PyTorch là gì?',
        answer: 'Cả hai đều là các thư viện deep learning hàng đầu. PyTorch được biết đến với tính linh hoạt, giao diện "Pythonic" và cơ chế "đồ thị động", rất phổ biến trong giới nghiên cứu. TensorFlow (đặc biệt với API Keras) mạnh về khả-năng triển khai sản phẩm (deployment) và có một hệ sinh thái công cụ hỗ trợ rộng lớn.',
      },
      {
        question: 'Generative AI (AI tạo sinh) là gì?',
        answer: 'Generative AI là một nhánh của AI tập trung vào việc tạo ra dữ liệu mới thay vì chỉ phân tích hoặc phân loại dữ liệu hiện có. Các mô hình như GANs (Generative Adversarial Networks) và các mô hình ngôn ngữ lớn (LLMs) như GPT là những ví dụ điển hình, có khả năng tạo ra hình ảnh, văn bản, âm nhạc mới.',
      },
    ],
  },
  {
    id: 'natural-language-processing-vietnamese',
    title: 'Xử Lý Ngôn Ngữ Tự Nhiên Tiếng Việt',
    description:
      'Specialized NLP techniques cho Vietnamese language including tokenization, named entity recognition, sentiment analysis, và machine translation.',
    duration: '225 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=QkSbtl8lU_o', // Natural Language Processing
    imageUrl: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=1200&h=600&fit=crop',
    objectives: [
      'Master Vietnamese text preprocessing và tokenization techniques',
      'Implement Vietnamese named entity recognition systems',
      'Develop sentiment analysis cho Vietnamese social media data',
      'Build Vietnamese question-answering systems',
      'Create Vietnamese-English machine translation models',
    ],
    prerequisites: ['NLP fundamentals', 'Deep learning knowledge', 'Vietnamese language understanding'],
    exercises: [
      {
        title: 'Vietnamese Social Media Sentiment Analysis System',
        description:
          'Build comprehensive sentiment analysis system cho Vietnamese social media posts từ Facebook, Instagram, và TikTok',
        difficulty: 'Nâng cao',
        materials: [
          'Vietnamese social media datasets',
          'Pre-trained Vietnamese embeddings',
          'Sentiment annotation tools',
          'Transformer models',
        ],
        procedure: [
          'Collect và preprocess Vietnamese social media data với proper encoding',
          'Implement Vietnamese-specific tokenization và text normalization',
          'Train sentiment classification models using Vietnamese pre-trained embeddings',
          'Fine-tune Vietnamese BERT for sentiment analysis',
          'Evaluate model performance on different Vietnamese dialects và informal language',
        ],
        expectedResults:
          'Robust sentiment analysis system handling Vietnamese language nuances và social media expressions',
        solution:
          'Multi-model ensemble combining rule-based sentiment lexicons, traditional ML classifiers, và fine-tuned transformers',
      },
    ],
    realWorldApplications: [
      'Zalo news feed optimization',
      'Tiki product review analysis',
      'Government social media monitoring',
      'Vietnamese language learning apps',
    ],
    caseStudies: [
      {
        title: 'VCCorp Vietnamese Content Processing Platform',
        organization: 'VCCorp (VnExpress parent company)',
        problem: 'Automated content categorization và recommendation cho Vietnamese news và entertainment platforms',
        solution:
          'Advanced Vietnamese NLP pipeline, topic modeling, content similarity detection, personalized recommendations',
        impact:
          'Processed 100M+ Vietnamese articles, improved content discovery by 50%, increased user engagement by 35%',
        innovations: [
          'Vietnamese-specific NLP preprocessing',
          'Cultural context understanding',
          'Real-time content analysis',
        ],
      },
    ],
    resources: [
      {
        title: 'Vietnamese NLP Resources',
        url: 'https://github.com/undertheseanlp/underthesea',
        type: 'Tool',
      },
    ],
    vietnamContext: {
      title: 'NLP và Thách thức với Tiếng Việt',
      content: [
        'Tiếng Việt là một ngôn ngữ phức tạp với thanh điệu, từ đồng âm khác nghĩa và cấu trúc không có dấu phân cách từ rõ ràng, đòi hỏi các kỹ thuật NLP chuyên biệt.',
        'Các thư viện như "Underthesea" được cộng đồng phát triển riêng cho Tiếng Việt, cung cấp các công cụ tách từ, gán nhãn từ loại hiệu quả.',
        'Phân tích sắc thái trong bình luận của người Việt trên mạng xã hội là một bài toán khó, do sự phổ biến của ngôn ngữ teen, nói lái, và các biểu đạt mỉa mai, châm biếm.',
      ],
    },
    careerConnect: {
      name: 'Vũ Anh',
      title: 'Trưởng nhóm NLP',
      company: 'VCCorp',
      imageUrl: 'https://i.pravatar.cc/150?u=vuanh',
      quote:
        'Để xử lý được ngôn ngữ tự nhiên của người Việt, máy móc không chỉ cần học từ vựng, ngữ pháp, mà còn phải học cả văn hóa, thói quen và cách chúng ta nói chuyện hàng ngày.',
    },
    quizzes: [
      {
        question: 'Trong NLP, "Tokenization" (tách từ) cho Tiếng Việt khó hơn Tiếng Anh vì sao?',
        options: [
          'Tiếng Việt có bảng chữ cái phức tạp hơn',
          'Tiếng Việt không dùng khoảng trắng để phân tách các từ một cách rõ ràng',
          'Tiếng Việt có nhiều từ mượn',
          'Tiếng Việt không có quy tắc ngữ pháp',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Trong tiếng Anh, từ được ngăn cách bởi khoảng trắng. Nhưng trong tiếng Việt, một "từ" có thể gồm nhiều âm tiết (ví dụ: "khoa học dữ liệu"), và các âm tiết này cũng được ngăn cách bởi khoảng trắng. Điều này làm cho việc xác định đâu là một từ trở nên phức tạp.',
      },
    ],
    faqs: [
      {
        question: 'Word Embedding là gì?',
        answer:
          'Word Embedding là kỹ thuật biểu diễn các từ dưới dạng các vector số thực trong một không gian nhiều chiều. Các từ có ngữ nghĩa tương tự nhau (ví dụ: "vua" và "nữ hoàng") sẽ có vị trí gần nhau trong không gian vector này. Đây là nền tảng cho hầu hết các mô hình NLP hiện đại.',
      },
      {
        question: 'Phân tích sắc thái (Sentiment Analysis) được ứng dụng để làm gì?',
        answer:
          'Phân tích sắc thái được sử dụng để tự động xác định thái độ (tích cực, tiêu cực, trung tính) của một đoạn văn bản. Các doanh nghiệp thường dùng nó để theo dõi phản hồi của khách hàng về sản phẩm trên mạng xã hội, phân tích đánh giá sản phẩm, hoặc đo lường hiệu quả của các chiến dịch marketing.',
      },
      {
        question: 'Sự khác biệt giữa BERT và GPT là gì?',
        answer: 'Cả hai đều là các mô hình Transformer, nhưng có sự khác biệt cốt lõi trong kiến trúc. BERT là một mô hình "encoder", nó nhìn vào toàn bộ câu (cả hai chiều) để hiểu ngữ cảnh, rất mạnh cho các tác vụ phân tích như phân loại văn bản, nhận dạng thực thể. GPT là một mô hình "decoder", nó xử lý văn bản từ trái sang phải, rất mạnh cho các tác vụ sinh văn bản (text generation).',
      },
      {
        question: 'Named Entity Recognition (NER) là gì?',
        answer: 'NER là một tác vụ của NLP nhằm xác định và phân loại các thực thể được đặt tên trong văn bản vào các danh mục được xác định trước như tên người, tổ chức, địa điểm, ngày tháng, v.v. Ví dụ, trong câu "FPT đã tổ chức sự kiện tại Hà Nội", NER sẽ xác định "FPT" là Tổ chức và "Hà Nội" là Địa điểm.',
      },
      {
        question: 'Topic Modeling là gì?',
        answer: 'Topic Modeling là một kỹ thuật học không giám sát được sử dụng để khám phá các "chủ đề" trừu tượng xuất hiện trong một tập hợp các tài liệu. Ví dụ, từ một kho các bài báo, nó có thể tự động nhóm các từ như "bầu cử", "tổng thống", "quốc hội" vào chủ đề "chính trị".',
      },
      {
        question: 'Tại sao cần phải có các mô hình ngôn ngữ dành riêng cho Tiếng Việt như PhoBERT?',
        answer: 'Các mô hình ngôn ngữ lớn được huấn luyện trên dữ liệu tiếng Anh sẽ không hiểu được các sắc thái, ngữ pháp và văn hóa của tiếng Việt. Các mô hình như PhoBERT được huấn luyện từ đầu trên một kho dữ liệu tiếng Việt khổng lồ, giúp chúng hiểu sâu sắc và xử lý tiếng Việt một cách chính xác hơn nhiều.',
      },
      {
        question: 'Hệ thống Hỏi-Đáp (Question-Answering System) hoạt động như thế nào?',
        answer: 'Có hai loại chính. Hệ thống Hỏi-Đáp trích xuất (extractive QA) tìm kiếm và trích xuất một đoạn văn bản từ một tài liệu cho trước để trả lời câu hỏi. Hệ thống Hỏi-Đáp tạo sinh (generative QA) tự tạo ra một câu trả lời hoàn toàn mới dựa trên kiến thức đã học, tương tự như cách ChatGPT hoạt động.',
      },
      {
        question: 'TF-IDF là gì?',
        answer: 'TF-IDF (Term Frequency-Inverse Document Frequency) là một thước đo thống kê dùng để đánh giá tầm quan trọng của một từ trong một tài liệu so với một kho tài liệu. Nó giúp xác định các từ khóa quan trọng của một văn bản bằng cách tăng trọng số cho các từ xuất hiện thường xuyên trong văn bản đó nhưng lại ít xuất hiện trong các văn bản khác.',
      },
      {
        question: 'Làm thế nào để xử lý từ viết tắt, tiếng lóng trên mạng xã hội Việt Nam?',
        answer: 'Đây là một thách thức lớn. Một cách tiếp cận phổ biến là xây dựng một bộ từ điển để chuẩn hóa các từ này về dạng chuẩn trước khi đưa vào mô hình (ví dụ: "ko" -> "không", "bt" -> "bình thường"). Việc này đòi hỏi sự cập nhật liên tục vì ngôn ngữ mạng xã hội thay đổi rất nhanh.',
      },
      {
        question: 'Dịch máy thần kinh (Neural Machine Translation - NMT) là gì?',
        answer: 'NMT là phương pháp dịch máy hiện đại sử dụng các mạng nơ-ron sâu (thường là kiến trúc Transformer). Thay vì dịch từng từ hoặc cụm từ như các hệ thống cũ, NMT đọc toàn bộ câu nguồn để hiểu ngữ cảnh, sau đó tạo ra câu đích. Điều này giúp tạo ra các bản dịch tự nhiên và chính xác hơn nhiều.',
      },
    ],
  },
  {
    id: 'computer-vision-image-processing',
    title: 'Computer Vision & Xử Lý Hình Ảnh',
    description:
      'Advanced computer vision techniques including object detection, image segmentation, facial recognition, và applications trong Vietnamese context.',
    duration: '250 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=wVE8SFMSBJ0', // Computer Vision and Image Processing
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    objectives: [
      'Implement advanced object detection algorithms (YOLO, R-CNN, SSD)',
      'Master image segmentation techniques (Semantic, Instance, Panoptic)',
      'Develop facial recognition systems với Vietnamese facial datasets',
      'Apply computer vision trong manufacturing quality control',
      'Build real-time video processing systems',
    ],
    prerequisites: ['Deep learning fundamentals', 'Image processing basics', 'Linear algebra và calculus'],
    exercises: [
      {
        title: 'Vietnamese Traffic Monitoring System',
        description:
          'Develop computer vision system cho monitoring Vietnamese traffic patterns including vehicles, motorcycles, và pedestrian detection',
        difficulty: 'Nâng cao',
        materials: [
          'Vietnamese traffic video datasets',
          'Pre-trained object detection models',
          'Annotation tools',
          'Real-time processing frameworks',
        ],
        procedure: [
          'Collect và annotate Vietnamese traffic video data với diverse scenarios',
          'Fine-tune YOLO model cho Vietnamese vehicle types (xe máy, xe ôm, etc.)',
          'Implement real-time traffic flow analysis algorithms',
          'Develop violation detection system (wrong-way driving, red light violations)',
          'Create traffic analytics dashboard với Vietnamese traffic pattern insights',
        ],
        expectedResults: 'Real-time traffic monitoring system optimized cho Vietnamese urban traffic conditions',
        solution:
          'Multi-model computer vision pipeline combining object detection, tracking, và behavioral analysis optimized for Vietnamese traffic patterns',
      },
    ],
    realWorldApplications: [
      'Grab driver behavior monitoring',
      'VinFast autonomous vehicle development',
      'Smart city traffic optimization',
      'Security surveillance systems',
    ],
    caseStudies: [
      {
        title: 'VinAI Computer Vision Platform',
        organization: 'VinAI Research',
        problem: 'Developing comprehensive computer vision solutions cho Vietnamese market applications',
        solution:
          'Multi-domain computer vision platform, Vietnamese-specific datasets, optimized models for local conditions',
        impact:
          'Deployed in 100+ applications across retail, automotive, healthcare sectors, achieved 97% accuracy on Vietnamese-specific tasks',
        innovations: [
          'Vietnamese cultural adaptation',
          'Multi-domain vision models',
          'Real-time optimization for Vietnamese hardware',
        ],
      },
    ],
    resources: [
      {
        title: 'Computer Vision Course',
        url: 'https://opencv.org/',
        type: 'Documentation',
      },
    ],
    vietnamContext: {
      title: 'Computer Vision và Bài toán Giao thông Việt Nam',
      content: [
        'Một trong những ứng dụng CV thách thức nhất tại Việt Nam là giám sát giao thông, do mật độ xe máy dày đặc và hành vi di chuyển phức tạp.',
        'Các mô hình phát hiện vật thể phải được huấn luyện lại với dữ liệu đặc thù của Việt Nam để có thể phân biệt được xe máy, xe ôm công nghệ, người đi bộ và các loại phương tiện khác.',
        'Công nghệ nhận dạng biển số xe được ứng dụng rộng rãi trong các bãi giữ xe thông minh tại các thành phố lớn, giúp tự động hóa và tăng cường an ninh.',
      ],
    },
    careerConnect: {
      name: 'Lê Viết Quốc',
      title: 'Nhà khoa học AI',
      company: 'Google DeepMind',
      imageUrl: 'https://i.pravatar.cc/150?u=levietquoc',
      quote:
        'Computer Vision có tiềm năng to lớn để giải quyết các vấn đề thực tiễn tại Việt Nam, từ y tế, nông nghiệp đến giao thông. Chìa khóa nằm ở việc xây dựng các bộ dữ liệu chất lượng và các mô hình phù hợp với bối cảnh địa phương.',
    },
    quizzes: [
      {
        question: 'Trong Computer Vision, "Image Segmentation" khác "Object Detection" ở điểm nào?',
        options: [
          'Image Segmentation chỉ hoạt động trên ảnh đen trắng',
          'Object Detection chỉ vẽ một hộp (bounding box) quanh vật thể, còn Image Segmentation phân loại từng pixel thuộc về vật thể nào',
          'Object Detection nhanh hơn Image Segmentation',
          'Image Segmentation chỉ dùng cho ảnh y tế',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Object Detection xác định vị trí và loại của vật thể bằng một hộp chữ nhật. Image Segmentation đi sâu hơn, nó tạo ra một "mặt nạ" (mask) cho từng vật thể, xác định chính xác ranh giới của vật thể ở cấp độ pixel.',
      },
    ],
    faqs: [
      {
        question: 'Data Augmentation (Tăng cường dữ liệu) trong Computer Vision là gì?',
        answer:
          'Data Augmentation là kỹ thuật tạo ra các phiên bản mới của ảnh từ tập dữ liệu huấn luyện hiện có bằng cách áp dụng các phép biến đổi như xoay, lật, thay đổi độ sáng, hoặc cắt cúp. Kỹ thuật này giúp làm tăng sự đa dạng của dữ liệu, giảm overfitting và cải thiện khả năng tổng quát hóa của mô hình.',
      },
      {
        question: 'YOLO (You Only Look Once) hoạt động như thế nào?',
        answer:
          'YOLO là một thuật toán phát hiện vật thể hoạt động theo cơ chế "một pha". Nó chia ảnh thành một lưới các ô và dự đoán các hộp bao (bounding boxes) và xác suất lớp cho mỗi ô cùng một lúc. Cách tiếp cận này giúp YOLO đạt được tốc độ xử lý rất nhanh, phù hợp cho các ứng dụng thời gian thực.',
      },
      {
        question: 'Sự khác biệt giữa Semantic Segmentation và Instance Segmentation là gì?',
        answer: 'Cả hai đều phân loại từng pixel. Tuy nhiên, Semantic Segmentation chỉ quan tâm đến loại đối tượng (ví dụ: tất cả "người" trong ảnh đều có cùng một màu). Instance Segmentation đi xa hơn, nó phân biệt được các thực thể khác nhau của cùng một loại đối tượng (ví dụ: "người 1" có màu xanh, "người 2" có màu đỏ).',
      },
      {
        question: 'Làm thế nào để một mô hình nhận dạng khuôn mặt hoạt động?',
        answer: 'Hệ thống thường bao gồm hai bước: phát hiện khuôn mặt trong ảnh, sau đó trích xuất các đặc trưng của khuôn mặt đó thành một vector số (gọi là "embedding"). Vector này sau đó được so sánh với các vector trong cơ sở dữ liệu để tìm ra người tương ứng. Các mô hình hiện đại sử dụng mạng nơ-ron sâu để học cách tạo ra các embedding này.',
      },
      {
        question: 'OpenCV là gì?',
        answer: 'OpenCV (Open Source Computer Vision Library) là một thư viện mã nguồn mở khổng lồ chứa hàng ngàn thuật toán xử lý ảnh và thị giác máy tính. Nó cung cấp các công cụ từ cơ bản (đọc/ghi ảnh, vẽ hình) đến phức tạp (phát hiện đối tượng, theo dõi chuyển động) và là công cụ không thể thiếu cho bất kỳ ai làm việc trong lĩnh vực này.',
      },
      {
        question: 'Làm thế nào để đánh giá hiệu suất của một mô hình phát hiện đối tượng?',
        answer: 'Các chỉ số phổ biến bao gồm Precision (độ chính xác) và Recall (độ bao phủ). Mean Average Precision (mAP) là một chỉ số tổng hợp thường được sử dụng, nó tính toán giá trị trung bình của Average Precision trên tất cả các lớp đối tượng và các ngưỡng IoU (Intersection over Union) khác nhau.',
      },
      {
        question: 'U-Net là kiến trúc gì và tại sao nó hiệu quả cho phân đoạn ảnh y tế?',
        answer: 'U-Net là một kiến trúc mạng CNN có hình dạng chữ U. Nó bao gồm một đường đi xuống (encoder) để nắm bắt ngữ cảnh và một đường đi lên (decoder) đối xứng để cho phép bản địa hóa chính xác. Kiến trúc này rất hiệu quả trong việc phân đoạn ảnh y tế vì nó hoạt động tốt ngay cả với tập dữ liệu tương đối nhỏ và cho ra kết quả phân đoạn rất chính xác.',
      },
      {
        question: 'Làm thế nào để xử lý vấn đề ánh sáng và góc nhìn khác nhau trong Computer Vision?',
        answer: 'Data Augmentation là một cách hiệu quả, bằng cách tạo ra các phiên bản ảnh với độ sáng, độ tương phản và góc nhìn khác nhau. Ngoài ra, các kiến trúc mạng nơ-ron hiện đại, đặc biệt là CNN, có khả năng học các đặc trưng bất biến (invariant features), tức là các đặc trưng không thay đổi dù đối tượng bị xoay, thay đổi kích thước hoặc chiếu sáng khác đi.',
      },
      {
        question: 'Optical Character Recognition (OCR) là gì?',
        answer: 'OCR là công nghệ cho phép máy tính "đọc" văn bản từ hình ảnh. Nó được ứng dụng rộng rãi trong việc số hóa tài liệu, nhận dạng biển số xe, hoặc trích xuất thông tin từ hóa đơn, chứng minh nhân dân.',
      },
      {
        question: 'Làm thế nào để triển khai một mô hình Computer Vision trên thiết bị di động?',
        answer: 'Để chạy trên các thiết bị có tài nguyên hạn chế, các mô hình cần được tối ưu hóa. Các kỹ thuật phổ biến bao gồm lượng tử hóa (quantization - giảm độ chính xác của các con số), cắt tỉa (pruning - loại bỏ các kết nối không quan trọng), và sử dụng các kiến trúc mạng nhẹ được thiết kế riêng cho di động như MobileNet hoặc EfficientNet.',
      },
    ],
  },
  {
    id: 'big-data-engineering-analytics',
    title: 'Big Data Engineering & Analytics',
    description:
      'Master big data technologies including distributed computing, data pipelines, real-time analytics, và cloud-based data processing.',
    duration: '230 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=hTjo-QVWcK0', // Big Data Engineering
    imageUrl: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&h=600&fit=crop',
    objectives: [
      'Design và implement scalable data pipelines',
      'Master distributed computing với Apache Spark',
      'Build real-time data streaming systems',
      'Implement data lakes và data warehousing solutions',
      'Develop cloud-based big data architectures',
    ],
    prerequisites: [
      'SQL database knowledge',
      'Programming experience (Python/Java)',
      'Distributed systems understanding',
    ],
    exercises: [
      {
        title: 'Vietnamese E-commerce Data Pipeline',
        description:
          'Build end-to-end big data pipeline cho processing Vietnamese e-commerce transactions, user behavior, và product analytics',
        difficulty: 'Nâng cao',
        materials: [
          'Vietnamese e-commerce datasets',
          'Apache Spark cluster',
          'Kafka streaming',
          'Cloud storage systems',
        ],
        procedure: [
          'Design data architecture cho handling millions of Vietnamese e-commerce transactions',
          'Implement real-time data ingestion using Apache Kafka',
          'Build batch processing pipeline với Apache Spark cho daily analytics',
          'Develop real-time recommendation engine using streaming data',
          'Create analytics dashboard với insights on Vietnamese consumer behavior',
        ],
        expectedResults:
          'Scalable data pipeline handling Vietnamese e-commerce data với real-time analytics capabilities',
        solution:
          'Lambda architecture combining batch và stream processing với Vietnamese-specific business logic và cultural insights',
      },
    ],
    realWorldApplications: [
      'Shopee real-time analytics platform',
      'VietinBank fraud detection system',
      'Viettel network optimization',
      'Vietnam Airlines operational analytics',
    ],
    caseStudies: [
      {
        title: 'FPT Big Data Platform',
        organization: 'FPT Corporation',
        problem:
          'Building unified big data platform cho multiple business units including telecommunications, banking, retail',
        solution:
          'Distributed data lake architecture, real-time processing capabilities, AI/ML model serving infrastructure',
        impact:
          'Processed 50TB+ daily data, improved decision-making speed by 80%, enabled real-time customer insights across all business units',
        innovations: [
          'Unified multi-tenant data platform',
          'Vietnamese-optimized data processing',
          'Auto-scaling cloud infrastructure',
        ],
      },
    ],
    resources: [
      {
        title: 'Apache Spark Documentation',
        url: 'https://spark.apache.org/docs/latest/',
        type: 'Documentation',
      },
    ],
    vietnamContext: {
      title: 'Kỹ thuật Dữ liệu lớn trong bối cảnh Việt Nam',
      content: [
        'Các công ty viễn thông như Viettel, Mobifone xử lý hàng petabyte dữ liệu mỗi ngày từ các cuộc gọi, tin nhắn và lưu lượng internet để tối ưu hóa mạng lưới.',
        'Sự bùng nổ của thanh toán không dùng tiền mặt qua các ví điện tử như MoMo, ZaloPay tạo ra một lượng lớn dữ liệu giao dịch, là nguồn tài nguyên quý giá cho việc phân tích và phát hiện gian lận.',
        'Nhu cầu về Kỹ sư dữ liệu (Data Engineer) tại Việt Nam đang tăng rất nhanh, thậm chí cao hơn cả Nhà khoa học dữ liệu, do các công ty cần xây dựng nền tảng dữ liệu vững chắc trước khi có thể khai thác.',
      ],
    },
    careerConnect: {
      name: 'Đặng Hoàng Vũ',
      title: 'Giám đốc Khoa học, Khối Công nghệ',
      company: 'Techcombank',
      imageUrl: 'https://i.pravatar.cc/150?u=danghoangvu',
      quote:
        'Dữ liệu là tài sản chiến lược. Một kỹ sư dữ liệu giỏi không chỉ xây dựng đường ống, họ xây dựng nền móng cho toàn bộ hoạt động kinh doanh dựa trên dữ liệu của tổ chức.',
    },
    quizzes: [
      {
        question:
          'Trong kiến trúc dữ liệu lớn, "Data Lake" (Hồ dữ liệu) khác với "Data Warehouse" (Kho dữ liệu) ở điểm nào cơ bản nhất?',
        options: [
          'Data Lake chỉ lưu trữ dữ liệu có cấu trúc',
          'Data Warehouse nhanh hơn Data Lake',
          'Data Lake lưu trữ dữ liệu thô ở mọi định dạng, trong khi Data Warehouse lưu trữ dữ liệu đã được xử lý và có cấu trúc',
          'Data Lake chỉ dùng trên cloud',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Data Lake theo nguyên tắc "lưu trữ tất cả", chấp nhận dữ liệu ở mọi định dạng (có cấu trúc, bán cấu trúc, phi cấu trúc). Ngược lại, Data Warehouse đòi hỏi dữ liệu phải được làm sạch, chuyển đổi và đưa về một cấu trúc (schema) xác định trước khi được nạp vào.',
      },
    ],
    faqs: [
      {
        question: 'Apache Spark là gì và tại sao nó phổ biến?',
        answer:
          'Apache Spark là một framework tính toán phân tán mạnh mẽ, được thiết kế để xử lý dữ liệu lớn một cách nhanh chóng. Nó phổ biến vì cung cấp các API dễ sử dụng (bằng Python, Scala, Java), hỗ trợ cả xử lý theo lô (batch) và xử lý thời gian thực (streaming), và có thể chạy nhanh hơn Hadoop MapReduce đáng kể nhờ khả năng xử lý trong bộ nhớ (in-memory processing).',
      },
      {
        question: 'ETL và ELT là gì?',
        answer:
          'ETL (Extract, Transform, Load) là quy trình truyền thống: trích xuất dữ liệu từ nguồn, biến đổi nó trên một máy chủ trung gian, sau đó tải vào kho dữ liệu. ELT (Extract, Load, Transform) là quy trình hiện đại hơn: trích xuất dữ liệu, tải thẳng vào một hệ thống đích mạnh mẽ (như data lake hoặc data warehouse trên cloud), sau đó mới thực hiện các phép biến đổi tại đó. ELT tận dụng được sức mạnh tính toán của các hệ thống đích.',
      },
      {
        question: 'Sự khác biệt giữa xử lý theo lô (batch processing) và xử lý luồng (stream processing) là gì?',
        answer: 'Xử lý theo lô xử lý một lượng lớn dữ liệu đã được lưu trữ trong một khoảng thời gian (ví dụ: xử lý dữ liệu bán hàng của ngày hôm qua vào mỗi đêm). Xử lý luồng xử lý dữ liệu ngay khi nó được tạo ra, trong thời gian gần như thực (ví dụ: phát hiện giao dịch thẻ tín dụng gian lận ngay lập tức).',
      },
      {
        question: 'Apache Kafka được sử dụng để làm gì?',
        answer: 'Apache Kafka là một nền tảng truyền tin phân tán (distributed streaming platform). Nó hoạt động như một hệ thống "nhắn tin" tốc độ cao, cho phép các ứng dụng khác nhau có thể gửi và nhận các luồng dữ liệu (streams of records) một cách đáng tin cậy và có khả năng chịu lỗi.',
      },
      {
        question: 'Định dạng file Parquet và ORC có ưu điểm gì trong hệ sinh thái Big Data?',
        answer: 'Parquet và ORC là các định dạng lưu trữ dạng cột (columnar storage). Thay vì lưu trữ dữ liệu theo hàng như file CSV, chúng lưu trữ theo cột. Điều này giúp nén dữ liệu hiệu quả hơn và tăng tốc độ truy vấn đáng kể, đặc biệt khi các truy vấn chỉ cần truy cập vào một vài cột nhất định trong một bảng có nhiều cột.',
      },
      {
        question: 'Lambda Architecture là gì?',
        answer: 'Lambda Architecture là một mẫu thiết kế hệ thống dữ liệu nhằm xử lý một lượng lớn dữ liệu bằng cách kết hợp cả phương pháp xử lý theo lô và xử lý luồng. Nó bao gồm một "lớp tốc độ" (speed layer) để cung cấp các kết quả thời gian thực và một "lớp lô" (batch layer) để cung cấp các kết quả toàn diện và chính xác hơn.',
      },
      {
        question: 'Một kỹ sư dữ liệu (Data Engineer) làm những công việc gì?',
        answer: 'Một kỹ sư dữ liệu chịu trách nhiệm thiết kế, xây dựng và duy trì các hệ thống và đường ống dữ liệu (data pipelines). Công việc của họ là đảm bảo dữ liệu được thu thập, lưu trữ, và cung cấp một cách hiệu quả, đáng tin cậy và có thể mở rộng để các nhà khoa học dữ liệu và nhà phân tích có thể sử dụng.',
      },
      {
        question: 'SQL vẫn còn quan trọng trong thế giới Big Data không?',
        answer: 'Rất quan trọng. SQL (Structured Query Language) vẫn là ngôn ngữ tiêu chuẩn để truy vấn và thao tác dữ liệu. Nhiều công cụ Big Data như Spark (với Spark SQL), Hive, Presto đều cung cấp các giao diện giống SQL, cho phép các nhà phân tích và kỹ sư dễ dàng làm việc với dữ liệu lớn mà không cần phải viết các đoạn mã phức tạp.',
      },
      {
        question: 'Data Governance (Quản trị dữ liệu) là gì?',
        answer: 'Data Governance là một tập hợp các quy trình, chính sách, tiêu chuẩn và vai trò nhằm đảm bảo dữ liệu trong một tổ chức được quản lý một cách nhất quán và hiệu quả. Nó giải quyết các vấn đề như chất lượng dữ liệu, bảo mật dữ liệu, quyền riêng tư và tuân thủ quy định.',
      },
      {
        question: 'Sự khác biệt giữa Data Lake, Data Warehouse và Data Mart là gì?',
        answer: 'Data Lake lưu trữ dữ liệu thô ở mọi định dạng. Data Warehouse lưu trữ dữ liệu có cấu trúc, đã được làm sạch cho mục đích phân tích toàn doanh nghiệp. Data Mart là một phiên bản nhỏ hơn của Data Warehouse, thường tập trung vào dữ liệu của một bộ phận hoặc một lĩnh vực kinh doanh cụ thể (ví dụ: Data Mart cho phòng Marketing).',
      },
    ],
  },
];
