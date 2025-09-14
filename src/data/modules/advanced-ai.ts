import { BaseLessonData } from '@/types/lesson-base';

export const advancedAILessons: BaseLessonData[] = [
  {
    id: 'deep-learning-foundations',
    title: 'Deep Learning & Neural Network Architectures',
    description:
      'Master advanced deep learning concepts từ CNN, RNN đến Transformers. Hiểu về backpropagation, gradient descent và optimization techniques cho production AI systems.',
    duration: '240 phút',
    videoUrl: 'https://www.youtube.com/watch?v=aircAruvnKk',
    difficulty: 'Nâng cao',
    aiDomain: 'Deep Learning',
    objectives: [
      'Understand neural network architectures: CNN, RNN, LSTM, GRU, Transformers',
      'Master backpropagation algorithm và gradient descent optimization',
      'Implement deep learning models using TensorFlow và PyTorch',
      'Optimize model performance với regularization techniques và hyperparameter tuning',
    ],
    prerequisites: [
      'Strong programming skills trong Python',
      'Linear algebra và calculus knowledge',
      'Basic machine learning concepts',
      'Statistics và probability theory',
    ],
    exercises: [
      {
        title: 'CNN Image Classification với Vietnam Dataset',
        description: 'Build convolutional neural network để classify Vietnamese cultural artifacts và landmarks.',
        difficulty: 'Nâng cao',
        tools: ['TensorFlow', 'Keras', 'Python', 'GPU Computing'],
        datasets: ['Vietnamese Landmarks Dataset', 'Cultural Artifacts Images'],
        procedure: [
          'Prepare và preprocess Vietnamese landmark image dataset',
          'Design CNN architecture với appropriate conv layers',
          'Implement data augmentation để improve generalization',
          'Train model với transfer learning từ pre-trained models',
          'Evaluate performance using accuracy, precision, recall metrics',
          'Deploy model cho real-time image classification',
        ],
        expectedResults: '95%+ accuracy trên test set với real-time inference capability',
        solution: 'Use transfer learning với ResNet-50 backbone, data augmentation, và proper regularization',
      },
      {
        title: 'Vietnamese Text Generation với Transformer',
        description: 'Implement Transformer model để generate Vietnamese text và poetry.',
        difficulty: 'Nâng cao',
        tools: ['PyTorch', 'Transformers', 'Hugging Face', 'Vietnamese Tokenizer'],
        datasets: ['Vietnamese Literature Corpus', 'Vietnamese News Dataset'],
        procedure: [
          'Tokenize Vietnamese text using appropriate tokenizer',
          'Implement Transformer architecture từ scratch',
          'Train model trên Vietnamese literature corpus',
          'Fine-tune for poetry generation',
          'Implement beam search decoding',
          'Evaluate generation quality và coherence',
        ],
        expectedResults: 'Coherent Vietnamese text generation với proper grammar và cultural context',
        solution: 'Use attention mechanisms, positional encoding, và proper Vietnamese language preprocessing',
      },
    ],
    realWorldApplications: [
      'Medical image analysis cho Vietnamese healthcare systems',
      'Vietnamese language processing cho government digitization',
      'Agricultural monitoring using satellite imagery trong Mekong Delta',
      'Traffic pattern analysis trong Vietnamese cities',
      'Financial fraud detection cho Vietnamese banking',
    ],
    caseStudies: [
      {
        title: 'VinAI Research - Vietnamese Language Model',
        organization: 'VinGroup AI Research',
        problem: 'Develop state-of-the-art Vietnamese language understanding cho enterprise applications',
        solution: 'Create PhoBERT - Vietnamese pre-trained language model với domain-specific fine-tuning',
        impact: 'Improved Vietnamese NLP accuracy by 15-20% across multiple tasks',
        innovations: ['BERT', 'Transformer', 'Vietnamese Corpus', 'Transfer Learning'],
      },
    ],
    resources: [
      {
        title: 'VinAI Research Publications',
        url: 'https://www.vinai.io/',
        type: 'Research Papers',
      },
    ],
    frameworks: ['TensorFlow', 'PyTorch', 'Transformers', 'OpenCV', 'scikit-learn'],
    vietnamContext: {
      title: 'Deep Learning tại Việt Nam: Từ Nghiên cứu đến Sản xuất',
      content: [
        'VinAI Research, một đơn vị của Vingroup, đang dẫn đầu trong nghiên cứu AI tại Việt Nam, với nhiều công trình được công bố tại các hội nghị hàng đầu thế giới như NeurIPS, ICML.',
        'Các công ty công nghệ lớn như FPT, Viettel, Zalo đều có các đội ngũ R&D mạnh về Deep Learning, ứng dụng vào nhận dạng giọng nói, xử lý ảnh và ngôn ngữ tự nhiên.',
        'Nhu cầu về kỹ sư Deep Learning tại Việt Nam đang tăng vọt, đặc biệt trong các lĩnh vực e-commerce, fintech và sản xuất thông minh.',
      ],
    },
    careerConnect: {
      name: 'TS. Bùi Hải Hưng',
      title: 'Tổng Giám đốc VinAI',
      company: 'VinAI Research',
      imageUrl: 'https://i.pravatar.cc/150?u=buihaihung',
      quote:
        'Chúng tôi muốn chứng minh rằng người Việt Nam hoàn toàn có thể làm chủ công nghệ lõi và tạo ra những sản phẩm AI đẳng cấp thế giới. Deep Learning là chìa khóa cho mục tiêu đó.',
    },
    quizzes: [
      {
        question: 'Backpropagation là thuật toán dùng để làm gì trong mạng neural?',
        options: [
          'Tính toán đầu ra của mạng',
          'Cập nhật trọng số của mạng để giảm sai số',
          'Khởi tạo trọng số ban đầu',
          'Chuẩn hóa dữ liệu đầu vào',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Backpropagation (lan truyền ngược) tính toán gradient của hàm mất mát đối với các trọng số của mạng, từ đó cho phép cập nhật trọng số thông qua các thuật toán tối ưu như Gradient Descent.',
      },
    ],
    faqs: [
      {
        question: 'Sự khác biệt chính giữa Deep Learning và Machine Learning truyền thống là gì?',
        answer:
          'Machine Learning truyền thống thường yêu cầu kỹ sư phải thực hiện "feature engineering" (trích xuất đặc trưng) thủ công. Ngược lại, Deep Learning, với kiến trúc mạng neural đa lớp, có khả năng tự động học các đặc trưng phức tạp trực tiếp từ dữ liệu thô (như hình ảnh, văn bản), giúp giải quyết các bài toán phức tạp hơn.',
      },
      {
        question: 'Tại sao GPU lại quan trọng cho việc huấn luyện mô hình Deep Learning?',
        answer:
          'Việc huấn luyện mô hình Deep Learning đòi hỏi một lượng lớn các phép tính ma trận song song. GPU (Graphics Processing Unit) được thiết kế với hàng nghìn nhân xử lý, cho phép thực hiện các phép tính này nhanh hơn CPU hàng chục đến hàng trăm lần, từ đó rút ngắn đáng kể thời gian huấn luyện.',
      },
    ],
  },
  {
    id: 'computer-vision-applications',
    title: 'Computer Vision & Image Processing Applications',
    description:
      'Advanced computer vision techniques cho real-world applications: object detection, semantic segmentation, facial recognition với focus trên Vietnam market applications.',
    duration: '220 phút',
    videoUrl: 'https://www.youtube.com/watch?v=puB-4LuRNys',
    difficulty: 'Nâng cao',
    aiDomain: 'Computer Vision',
    objectives: [
      'Master object detection algorithms: YOLO, R-CNN, SSD',
      'Implement semantic segmentation cho medical và agricultural applications',
      'Develop facial recognition systems với privacy considerations',
      'Optimize computer vision models cho mobile và edge deployment',
    ],
    prerequisites: [
      'Python programming với OpenCV experience',
      'Understanding của image processing fundamentals',
      'Deep learning knowledge',
      'Linear algebra và signal processing',
    ],
    exercises: [
      {
        title: 'Traffic Monitoring System cho Vietnamese Cities',
        description: 'Build comprehensive traffic monitoring system using computer vision cho urban planning.',
        difficulty: 'Nâng cao',
        tools: ['YOLO v8', 'OpenCV', 'Python', 'Edge Computing'],
        datasets: ['Vietnamese Traffic Dataset', 'Urban Planning Data'],
        procedure: [
          'Collect và annotate Vietnamese traffic video data',
          'Train YOLO model để detect vehicles, motorbikes, people',
          'Implement tracking algorithms cho traffic flow analysis',
          'Deploy model trên edge devices cho real-time processing',
          'Create dashboard để visualize traffic patterns',
          'Integrate với city planning systems',
        ],
        expectedResults: 'Real-time traffic monitoring với 90%+ detection accuracy',
        solution: 'Use YOLO v8 với custom Vietnamese traffic dataset và DeepSORT tracking',
      },
      {
        title: 'Medical Image Analysis cho Radiology',
        description: 'Develop AI system để assist Vietnamese radiologists trong medical diagnosis.',
        difficulty: 'Nâng cao',
        tools: ['U-Net', 'TensorFlow', 'DICOM Processing', 'Medical Imaging'],
        datasets: ['Medical Imaging Dataset', 'Radiology Reports'],
        procedure: [
          'Preprocess medical DICOM images',
          'Implement U-Net architecture cho semantic segmentation',
          'Train model để detect abnormalities trong X-rays, CTs',
          'Validate với Vietnamese medical experts',
          'Ensure regulatory compliance cho healthcare applications',
          'Deploy với appropriate security measures',
        ],
        expectedResults: 'Medical AI assistant với sensitivity >95% cho critical conditions',
        solution: 'Use ensemble methods, attention mechanisms, và expert validation loops',
      },
    ],
    realWorldApplications: [
      'Smart city monitoring trong Ho Chi Minh City và Hanoi',
      'Agricultural disease detection trong Vietnamese farms',
      'Quality control trong Vietnamese manufacturing',
      'Security surveillance cho airports và public spaces',
      'Medical diagnosis assistance trong rural Vietnamese clinics',
    ],
    caseStudies: [
      {
        title: 'FPT AI - Smart City Solutions',
        organization: 'FPT Software',
        problem: 'Implement AI-powered smart city solutions cho Vietnamese urban areas',
        solution: 'Deploy computer vision systems cho traffic monitoring, security, và urban planning',
        impact: 'Reduced traffic congestion by 25% và improved emergency response times',
        innovations: ['Computer Vision', 'Edge Computing', 'IoT Integration', 'Real-time Analytics'],
      },
    ],
    resources: [
      {
        title: 'FPT AI Solutions',
        url: 'https://fpt-aicenter.com/',
        type: 'Industry Platform',
      },
    ],
    frameworks: ['OpenCV', 'YOLO', 'TensorFlow', 'PyTorch', 'MediaPipe'],
    vietnamContext: {
      title: 'Computer Vision giải quyết bài toán đặc thù của Việt Nam',
      content: [
        'Giám sát giao thông: Các hệ thống CV được huấn luyện để nhận diện và đếm số lượng xe máy - phương tiện chiếm đa số tại Việt Nam, giúp tối ưu hóa đèn tín hiệu và quy hoạch đô thị.',
        'Nông nghiệp thông minh: CV được dùng để phát hiện sâu bệnh trên cây lúa, thanh long, hoặc giám sát sức khỏe tôm trong các đầm nuôi tại Đồng bằng sông Cửu Long.',
        'Bán lẻ và E-commerce: Các công ty như The Coffee House, Tiki sử dụng CV để phân tích hành vi khách hàng trong cửa hàng hoặc tự động hóa quy trình kiểm kho.',
      ],
    },
    careerConnect: {
      name: 'Nguyễn Hoàng Bảo Đại',
      title: 'AI Lead',
      company: 'FPT Software',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyenhoangbaodai',
      quote:
        'Thách thức lớn nhất của Computer Vision tại Việt Nam là dữ liệu. Chúng ta cần xây dựng những bộ dữ liệu đặc thù cho con người, văn hóa và bối cảnh Việt Nam để AI thực sự "hiểu" được chúng ta.',
    },
    quizzes: [
      {
        question: 'Mô hình YOLO (You Only Look Once) nổi tiếng trong lĩnh vực nào của Computer Vision?',
        options: [
          'Nhận dạng khuôn mặt (Facial Recognition)',
          'Phân đoạn ảnh (Image Segmentation)',
          'Phát hiện vật thể thời gian thực (Real-time Object Detection)',
          'Tăng cường chất lượng ảnh (Image Enhancement)',
        ],
        correctAnswerIndex: 2,
        explanation:
          'YOLO là một trong những thuật toán phát hiện vật thể một pha (single-stage) hiệu quả và nhanh nhất, cho phép xử lý video trong thời gian thực, rất phù hợp cho các ứng dụng như xe tự lái, giám sát an ninh.',
      },
    ],
    faqs: [
      {
        question: 'Object Detection và Image Segmentation khác nhau như thế nào?',
        answer:
          'Object Detection xác định vị trí và loại của các vật thể trong ảnh bằng cách vẽ một hộp bao (bounding box) quanh chúng. Image Segmentation đi sâu hơn, phân loại từng pixel trong ảnh vào một lớp đối tượng cụ thể, tạo ra một "mặt nạ" chính xác cho vật thể thay vì chỉ là hộp bao.',
      },
      {
        question: 'Tại sao việc xử lý ảnh DICOM trong y tế lại cần các công cụ chuyên dụng?',
        answer:
          'DICOM không chỉ là một định dạng ảnh, mà là một tiêu chuẩn lưu trữ và truyền tải thông tin y tế. Mỗi file DICOM chứa cả dữ liệu hình ảnh (ví dụ: ảnh X-quang) và siêu dữ liệu quan trọng về bệnh nhân, thiết bị chụp, v.v. Việc xử lý cần đảm bảo tính toàn vẹn của cả hai loại thông tin này và tuân thủ các quy định nghiêm ngặt về bảo mật y tế.',
      },
    ],
  },
  {
    id: 'nlp-language-models',
    title: 'Natural Language Processing & Large Language Models',
    description:
      'Comprehensive NLP techniques từ traditional methods đến modern LLMs. Focus trên Vietnamese language processing và multilingual applications.',
    duration: '200 phút',
    videoUrl: 'https://www.youtube.com/watch?v=fLvJ8VdHLA0',
    difficulty: 'Nâng cao',
    aiDomain: 'Natural Language Processing',
    objectives: [
      'Master traditional NLP techniques: tokenization, POS tagging, parsing',
      'Understand modern language models: BERT, GPT, T5 architectures',
      'Implement Vietnamese-specific NLP applications',
      'Fine-tune large language models cho domain-specific tasks',
    ],
    prerequisites: [
      'Programming experience với Python',
      'Understanding của linguistics concepts',
      'Machine learning fundamentals',
      'Experience với text processing',
    ],
    exercises: [
      {
        title: 'Vietnamese Legal Document Analysis System',
        description: 'Build NLP system để analyze và extract information từ Vietnamese legal documents.',
        difficulty: 'Nâng cao',
        tools: ['PhoBERT', 'Transformers', 'spaCy', 'Vietnamese NLP Tools'],
        datasets: ['Vietnamese Legal Corpus', 'Government Documents'],
        procedure: [
          'Preprocess Vietnamese legal documents',
          'Implement named entity recognition cho legal entities',
          'Build document classification system',
          'Extract key information using relation extraction',
          'Create question-answering system cho legal queries',
          'Validate accuracy với legal experts',
        ],
        expectedResults: 'Automated legal document processing với 85%+ accuracy',
        solution: 'Use PhoBERT với domain-specific fine-tuning và rule-based post-processing',
      },
      {
        title: 'Vietnamese Chatbot cho Customer Service',
        description: 'Develop intelligent chatbot để handle Vietnamese customer inquiries cho e-commerce.',
        difficulty: 'Nâng cao',
        tools: ['OpenAI API', 'LangChain', 'Vietnamese Dataset', 'Conversational AI'],
        datasets: ['Vietnamese Conversation Dataset', 'E-commerce FAQ'],
        procedure: [
          'Collect và curate Vietnamese conversation data',
          'Fine-tune language model cho Vietnamese cultural context',
          'Implement intent recognition và entity extraction',
          'Build dialogue management system',
          'Integrate với e-commerce platforms',
          'Test với real Vietnamese customers',
        ],
        expectedResults: 'Conversational AI với 90%+ intent accuracy và natural Vietnamese responses',
        solution: 'Combine rule-based systems với neural approaches và cultural awareness',
      },
    ],
    realWorldApplications: [
      'Government document digitization và analysis',
      'E-commerce customer service automation',
      'Educational content generation cho Vietnamese students',
      'News summarization và content curation',
      'Social media sentiment analysis cho Vietnamese brands',
    ],
    caseStudies: [
      {
        title: 'Zalo AI - Vietnamese Conversational AI',
        organization: 'VNG Corporation',
        problem: 'Create intelligent Vietnamese chatbot cho millions of Zalo users',
        solution: 'Develop multilingual conversational AI với Vietnamese cultural understanding',
        impact: 'Handle 80% of customer queries automatically với high satisfaction',
        innovations: ['NLP', 'Conversational AI', 'Vietnamese Language Models', 'Deep Learning'],
      },
    ],
    resources: [
      {
        title: 'Vietnamese NLP Resources',
        url: 'https://github.com/VinAIResearch',
        type: 'Open Source Tools',
      },
    ],
    frameworks: ['Transformers', 'spaCy', 'NLTK', 'LangChain', 'OpenAI API'],
    vietnamContext: {
      title: 'Thách thức và Cơ hội của NLP cho Tiếng Việt',
      content: [
        'Tiếng Việt là ngôn ngữ đơn âm tiết, có thanh điệu và cấu trúc ngữ pháp phức tạp, tạo ra thách thức lớn cho các mô hình NLP.',
        'Các mô hình như PhoBERT (của VinAI) và VietBERT (của FPT) là những nỗ lực quan trọng để xây dựng các mô hình ngôn ngữ lớn dành riêng cho tiếng Việt.',
        'Trợ lý ảo "Kiki" của Zalo là một ứng dụng NLP thành công, được tích hợp trên ô tô, loa thông minh và có khả năng hiểu và phản hồi giọng nói ba miền Bắc, Trung, Nam.',
      ],
    },
    careerConnect: {
      name: 'Châu Thành Đức',
      title: 'Giám đốc sản phẩm Kiki',
      company: 'Zalo AI',
      imageUrl: 'https://i.pravatar.cc/150?u=chauthanhduc',
      quote:
        'Làm NLP cho tiếng Việt không chỉ là bài toán kỹ thuật, mà còn là bài toán về văn hóa. Để AI nói chuyện tự nhiên như người Việt, nó phải "sống" trong văn hóa Việt.',
    },
    quizzes: [
      {
        question: 'Mô hình PhoBERT được phát triển dựa trên kiến trúc của mô hình nào?',
        options: ['GPT-3', 'BERT', 'T5', 'LSTM'],
        correctAnswerIndex: 1,
        explanation:
          'PhoBERT được xây dựng dựa trên kiến trúc BERT (Bidirectional Encoder Representations from Transformers) của Google và được huấn luyện trước trên một tập dữ liệu tiếng Việt khổng lồ.',
      },
    ],
    faqs: [
      {
        question: 'Large Language Model (LLM) là gì?',
        answer:
          'LLM là một mô hình Deep Learning cực lớn, được huấn luyện trên một kho dữ liệu văn bản khổng lồ. Nhờ đó, nó có khả năng hiểu, tạo và xử lý ngôn ngữ tự nhiên ở mức độ rất phức tạp, thực hiện các tác vụ như dịch thuật, tóm tắt, trả lời câu hỏi, và viết văn bản một cách mạch lạc.',
      },
      {
        question: '"Fine-tuning" một LLM có nghĩa là gì?',
        answer:
          'Fine-tuning là quá trình tiếp tục huấn luyện một LLM đã được huấn luyện trước (pre-trained) trên một tập dữ liệu nhỏ hơn, chuyên biệt hơn. Quá trình này giúp mô hình "thích nghi" với một nhiệm vụ hoặc một lĩnh vực cụ thể, ví dụ như fine-tuning trên dữ liệu pháp lý để nó hiểu và phân tích văn bản luật tốt hơn.',
      },
    ],
  },
  {
    id: 'reinforcement-learning-systems',
    title: 'Reinforcement Learning & Autonomous Systems',
    description:
      'Advanced reinforcement learning algorithms và applications trong autonomous systems, robotics, và game AI với practical Vietnamese applications.',
    duration: '190 phút',
    videoUrl: 'https://www.youtube.com/watch?v=nIgIv4IfJ6s',
    difficulty: 'Nâng cao',
    aiDomain: 'Reinforcement Learning',
    objectives: [
      'Master RL algorithms: Q-learning, Policy Gradient, Actor-Critic',
      'Implement deep reinforcement learning với neural networks',
      'Design reward systems cho complex real-world problems',
      'Deploy RL systems trong autonomous vehicles và robotics',
    ],
    prerequisites: [
      'Strong programming skills trong Python',
      'Understanding của probability và statistics',
      'Machine learning experience',
      'Basic control theory knowledge',
    ],
    exercises: [
      {
        title: 'Autonomous Drone Navigation trong Vietnamese Cities',
        description: 'Train RL agent để navigate drone safely through Vietnamese urban environments.',
        difficulty: 'Nâng cao',
        tools: ['OpenAI Gym', 'Stable Baselines3', 'Unity ML-Agents', 'Drone Simulation'],
        datasets: ['Vietnamese City Maps', 'Drone Flight Data'],
        procedure: [
          'Set up realistic Vietnamese city simulation environment',
          'Define reward function cho safe navigation',
          'Implement PPO algorithm cho continuous control',
          'Train agent trong simulated Vietnamese weather conditions',
          'Test robustness với various scenarios',
          'Deploy trên real drone với safety measures',
        ],
        expectedResults: 'Autonomous drone capable of safe navigation trong complex Vietnamese urban areas',
        solution: 'Use hierarchical RL với safety constraints và environmental awareness',
      },
      {
        title: 'Traffic Light Optimization cho Vietnamese Cities',
        description: 'Develop RL system để optimize traffic light timing based on real Vietnamese traffic patterns.',
        difficulty: 'Nâng cao',
        tools: ['SUMO Traffic Simulator', 'Deep Q-Network', 'Multi-Agent RL'],
        datasets: ['Vietnamese Traffic Flow Data', 'City Infrastructure Maps'],
        procedure: [
          'Model Vietnamese traffic patterns trong SUMO simulator',
          'Design multi-agent RL system cho coordinated traffic lights',
          'Implement reward function based on traffic flow efficiency',
          'Train agents using real Vietnamese traffic data',
          'Validate improvements trong traffic congestion',
          'Prepare system cho real-world deployment',
        ],
        expectedResults: '30% reduction trong average waiting time và improved traffic flow',
        solution: 'Use multi-agent deep Q-learning với coordination mechanisms',
      },
    ],
    realWorldApplications: [
      'Autonomous vehicle development cho Vietnamese roads',
      'Smart traffic management trong Vietnamese cities',
      'Agricultural automation trong Vietnamese farms',
      'Industrial robotics trong Vietnamese manufacturing',
      'Energy optimization trong smart buildings',
    ],
    caseStudies: [
      {
        title: 'VinFast - Autonomous Vehicle Development',
        organization: 'VinFast',
        problem: 'Develop autonomous driving capabilities cho Vietnamese traffic conditions',
        solution: 'Use reinforcement learning để adapt to chaotic Vietnamese traffic patterns',
        impact: 'Progress toward Level 3 autonomy với Vietnamese-specific training',
        innovations: ['Reinforcement Learning', 'Computer Vision', 'Sensor Fusion', 'Edge Computing'],
      },
    ],
    resources: [
      {
        title: 'OpenAI Gym Environments',
        url: 'https://gym.openai.com/',
        type: 'Development Platform',
      },
    ],
    frameworks: ['OpenAI Gym', 'Stable Baselines3', 'Ray RLLib', 'Unity ML-Agents', 'TensorFlow Agents'],
    vietnamContext: {
      title: 'Học tăng cường (RL) và Hệ thống tự hành tại Việt Nam',
      content: [
        'VinFast đang đầu tư mạnh vào xe tự lái, trong đó RL được kỳ vọng sẽ giúp xe thích ứng với điều kiện giao thông phức tạp và khó lường của Việt Nam.',
        'Trong công nghiệp, các nhà máy thông minh của Vinamilk, TH True Milk sử dụng robot tự hành (AGV) được tối ưu hóa bằng RL để vận chuyển hàng hóa trong kho.',
        'Lĩnh vực logistics (Giao Hàng Nhanh, Giao Hàng Tiết Kiệm) có tiềm năng lớn ứng dụng RL để tối ưu hóa lộ trình giao hàng trong các thành phố đông đúc.',
      ],
    },
    careerConnect: {
      name: 'Lương Anh Tuấn',
      title: 'Kỹ sư trưởng Xe tự hành',
      company: 'VinFast',
      imageUrl: 'https://i.pravatar.cc/150?u=luonganhtuan',
      quote:
        'Dạy cho một chiếc xe tự lái ở Việt Nam khó hơn ở Mỹ rất nhiều. Học tăng cường cho phép chiếc xe "học" từ những tình huống bất ngờ nhất trên đường phố, điều mà lập trình quy tắc không thể bao quát hết.',
    },
    quizzes: [
      {
        question: 'Trong học tăng cường, "reward function" (hàm thưởng) có vai trò gì?',
        options: [
          'Xác định hành động tiếp theo của tác tử (agent)',
          'Định nghĩa mục tiêu của tác tử, cho biết hành động nào là tốt hay xấu',
          'Mô tả môi trường xung quanh tác tử',
          'Lưu trữ kinh nghiệm của tác tử',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Hàm thưởng là tín hiệu quan trọng nhất trong RL, nó định hướng quá trình học của tác tử. Việc thiết kế một hàm thưởng tốt là yếu tố then chốt để tác tử học được hành vi mong muốn.',
      },
    ],
    faqs: [
      {
        question: 'Học tăng cường (Reinforcement Learning) khác gì so với học có giám sát (Supervised Learning)?',
        answer:
          'Trong học có giám sát, mô hình học từ dữ liệu đã được gán nhãn sẵn (ví dụ: ảnh con mèo được gán nhãn "mèo"). Trong học tăng cường, tác giả (agent) không có câu trả lời đúng cho trước. Nó phải tự khám phá môi trường, thực hiện hành động và học hỏi từ "phần thưởng" hoặc "hình phạt" nhận được để tối đa hóa phần thưởng tích lũy theo thời gian.',
      },
      {
        question: 'Tại sao mô phỏng (simulation) lại quan trọng trong việc huấn luyện các hệ thống RL?',
        answer:
          'Nhiều hệ thống RL, đặc biệt là trong robotics hay xe tự lái, quá nguy hiểm hoặc tốn kém để huấn luyện trực tiếp trong thế giới thực. Môi trường mô phỏng cho phép tác giả "thất bại" hàng triệu lần một cách an toàn và nhanh chóng, giúp nó học được các chiến lược hiệu quả trước khi triển khai ra thực tế.',
      },
    ],
  },
  {
    id: 'ai-ethics-deployment',
    title: 'AI Ethics, Bias & Production Deployment',
    description:
      'Critical understanding về AI ethics, bias detection, fairness, và responsible AI deployment trong Vietnamese context với focus trên cultural sensitivity.',
    duration: '170 phút',
    difficulty: 'Nâng cao',
    aiDomain: 'AI Ethics',
    objectives: [
      'Understand AI bias sources và detection methods',
      'Implement fairness metrics và bias mitigation techniques',
      'Design responsible AI systems với cultural sensitivity',
      'Master production deployment với MLOps best practices',
    ],
    prerequisites: [
      'Machine learning experience',
      'Understanding của Vietnamese cultural context',
      'Software engineering principles',
      'Ethics và social responsibility awareness',
    ],
    exercises: [
      {
        title: 'Bias Detection trong Vietnamese Hiring AI',
        description: 'Analyze và mitigate bias trong AI recruitment system cho Vietnamese companies.',
        difficulty: 'Nâng cao',
        tools: ['Fairlearn', 'AI Fairness 360', 'Python', 'Statistical Analysis'],
        datasets: ['Vietnamese Resume Dataset', 'Hiring Decision Data'],
        procedure: [
          'Analyze historical hiring data cho bias patterns',
          'Implement bias detection metrics cho gender, age, regional bias',
          'Test AI recruitment model cho fairness across Vietnamese demographics',
          'Develop bias mitigation strategies',
          'Create monitoring system cho ongoing bias detection',
          'Document ethical guidelines cho AI hiring systems',
        ],
        expectedResults: 'Demonstrably fair AI hiring system với reduced bias across protected groups',
        solution: 'Use adversarial debiasing, fairness constraints, và continuous monitoring',
      },
      {
        title: 'Culturally-Aware AI System cho Vietnamese Market',
        description: 'Design AI recommendation system that respects Vietnamese cultural values và social norms.',
        difficulty: 'Nâng cao',
        tools: ['Cultural AI Frameworks', 'Recommendation Systems', 'A/B Testing'],
        datasets: ['Vietnamese Cultural Survey Data', 'User Preference Data'],
        procedure: [
          'Research Vietnamese cultural values và social norms',
          'Design recommendation algorithm với cultural awareness',
          'Implement content filtering cho cultural appropriateness',
          'Test system với diverse Vietnamese user groups',
          'Measure cultural sensitivity metrics',
          'Deploy với cultural advisory board oversight',
        ],
        expectedResults: 'AI system that enhances user experience while respecting Vietnamese cultural values',
        solution: 'Integrate cultural knowledge graphs với collaborative filtering và expert validation',
      },
    ],
    realWorldApplications: [
      'Fair lending systems trong Vietnamese banking',
      'Unbiased healthcare AI trong diverse Vietnamese populations',
      'Ethical content moderation cho Vietnamese social media',
      'Responsible AI trong Vietnamese government services',
      'Cultural preservation AI cho Vietnamese heritage',
    ],
    caseStudies: [
      {
        title: 'Vietnamese Government AI Ethics Framework',
        organization: 'Ministry of Science and Technology',
        problem: 'Establish national guidelines cho responsible AI development trong Vietnam',
        solution: 'Create comprehensive AI ethics framework với Vietnamese cultural considerations',
        impact: 'National standard cho ethical AI development protecting Vietnamese citizens',
        innovations: ['Policy Framework', 'Ethics Guidelines', 'Cultural Assessment', 'Public Consultation'],
      },
    ],
    resources: [
      {
        title: 'Partnership on AI - Ethical Guidelines',
        url: 'https://partnershiponai.org/',
        type: 'Ethics Framework',
      },
    ],
    frameworks: ['Fairlearn', 'AI Fairness 360', 'MLFlow', 'TensorBoard', 'Weights & Biases'],
    vietnamContext: {
      title: 'Đạo đức AI và Triển khai có trách nhiệm tại Việt Nam',
      content: [
        'Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân đã đặt ra khung pháp lý quan trọng cho việc thu thập và xử lý dữ liệu, ảnh hưởng trực tiếp đến các ứng dụng AI.',
        'Bài toán thiên vị (bias) trong AI tại Việt Nam rất phức tạp, không chỉ về giới tính, độ tuổi mà còn về vùng miền (ví dụ: giọng nói, văn hóa).',
        'Chính phủ Việt Nam đang xây dựng "Chiến lược quốc gia về nghiên cứu, phát triển và ứng dụng Trí tuệ nhân tạo", trong đó nhấn mạnh yếu tố đạo đức và an toàn.',
      ],
    },
    careerConnect: {
      name: 'Phạm Thị Thu Hiền',
      title: 'Chuyên gia Chính sách Công nghệ',
      company: 'Chương trình Phát triển Liên Hợp Quốc (UNDP) tại Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=phamthithuhien',
      quote:
        'Phát triển AI phải đi đôi với trách nhiệm. Tại Việt Nam, chúng ta cần đảm bảo AI phục vụ sự phát triển bao trùm, không để ai bị bỏ lại phía sau và tôn trọng các giá trị văn hóa độc đáo của dân tộc.',
    },
    quizzes: [
      {
        question: 'Thiên vị (bias) trong một mô hình AI thường xuất phát từ đâu?',
        options: [
          'Thuật toán quá phức tạp',
          'Dữ liệu huấn luyện không đại diện hoặc phản ánh định kiến xã hội',
          'Phần cứng không đủ mạnh',
          'Lỗi trong thư viện machine learning',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Nguồn gốc phổ biến nhất của bias là từ dữ liệu. Nếu dữ liệu huấn luyện chứa đựng những định kiến có sẵn (ví dụ: nam giới thường làm kỹ sư), mô hình AI sẽ học và khuếch đại những định kiến đó.',
      },
    ],
    faqs: [
      {
        question: '"AI có trách nhiệm" (Responsible AI) nghĩa là gì?',
        answer:
          'Responsible AI là một khuôn khổ để phát triển và triển khai các hệ thống AI một cách an toàn, đáng tin cậy và có đạo đức. Nó bao gồm các nguyên tắc như công bằng (fairness), minh bạch (transparency), giải trình được (accountability), bảo mật (privacy), và an toàn (safety), đảm bảo công nghệ AI mang lại lợi ích và giảm thiểu tác hại cho xã hội.',
      },
      {
        question: 'MLOps là gì và tại sao nó quan trọng cho việc triển khai AI?',
        answer:
          'MLOps (Machine Learning Operations) là tập hợp các quy trình và công cụ nhằm tự động hóa và quản lý vòng đời của các mô hình machine learning trong môi trường sản xuất. Nó giúp đảm bảo các mô hình được triển khai một cách đáng tin cậy, có thể giám sát, cập nhật và duy trì hiệu suất theo thời gian, thay vì chỉ là một thử nghiệm trong phòng thí nghiệm.',
      },
    ],
  },
];
