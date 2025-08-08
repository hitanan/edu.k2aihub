export interface VietnameseLangTechLesson {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  duration: string;
  objectives: string[];
  prerequisites: string[];
  exercises: Exercise[];
  realWorldApplications: string[];
  videoUrl: string;
  imageUrl?: string;
  technologies: string[];
  languageFeatures: string[];
  resources: Resource[];
  caseStudies: CaseStudy[];
}

interface Exercise {
  title: string;
  description: string;
  difficulty: string;
  solution: string;
  requirements: string[];
  hints: string[];
  expectedOutput: string;
}

interface Resource {
  title: string;
  url: string;
  type: 'library' | 'tool' | 'dataset' | 'research' | 'tutorial';
  description: string;
}

interface CaseStudy {
  title: string;
  organization: string;
  challenge: string;
  solution: string;
  results: string;
  insights: string[];
}

export const vietnameseLangTechLessons: VietnameseLangTechLesson[] = [
  {
    id: 'vietnamese-nlp-fundamentals',
    title: 'Bài 1: Cơ bản về Vietnamese NLP và Text Processing',
    description:
      'Tìm hiểu đặc điểm của tiếng Việt trong xử lý ngôn ngữ tự nhiên. Học cách tokenization, word segmentation và các thách thức riêng của tiếng Việt.',
    videoUrl: 'https://www.youtube.com/watch?v=kEMJRjEdNzM',
    imageUrl:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop',
    difficulty: 'Cơ bản',
    duration: '120 phút',
    languageFeatures: [
      'Dấu thanh',
      'Từ ghép',
      'Ngữ pháp isolating',
      'Không có dấu cách từ',
    ],
    objectives: [
      'Hiểu đặc điểm ngôn ngữ học của tiếng Việt trong NLP',
      'Thực hiện word segmentation và tokenization cho tiếng Việt',
      'Xử lý dấu thanh và chuẩn hóa text tiếng Việt',
      'Build basic text processing pipeline cho Vietnamese text',
    ],
    prerequisites: [
      'Kiến thức Python cơ bản',
      'Hiểu biết về regular expressions',
      'Kiến thức cơ bản về NLP',
    ],
    technologies: [
      'Python',
      'PyVi',
      'VnCoreNLP',
      'spaCy',
      'NLTK',
      'Underthesea',
    ],
    exercises: [
      {
        title: 'Vietnamese Text Normalization',
        description:
          'Implement text normalization cho tiếng Việt bao gồm dấu thanh và ký tự đặc biệt',
        difficulty: 'Cơ bản',
        requirements: ['Python', 'PyVi library', 'Unicode handling'],
        hints: [
          'Sử dụng Unicode normalization cho dấu thanh',
          'Handle các trường hợp dấu thanh kết hợp và riêng biệt',
          'Test với các văn bản có nhiều loại dấu thanh khác nhau',
        ],
        expectedOutput:
          'Function chuẩn hóa text tiếng Việt với độ chính xác > 95%',
        solution:
          'Implement using unicodedata.normalize() và custom rules cho Vietnamese',
      },
    ],
    realWorldApplications: [
      'Chatbot tiếng Việt cho customer service',
      'Vietnamese document analysis và classification',
      'Social media monitoring và sentiment analysis',
      'Voice-to-text applications cho tiếng Việt',
    ],
    caseStudies: [
      {
        title: 'Zalo AI Vietnamese Language Model',
        organization: 'VNG Corporation',
        challenge: 'Phát triển NLP model cho 60+ triệu người dùng Vietnamese',
        solution: 'Custom Vietnamese NLP pipeline với advanced tokenization',
        results:
          '40% improvement in Vietnamese text understanding, 25% faster processing',
        insights: [
          'Vietnamese tone marks require special handling',
          'Context is crucial for word segmentation',
          'Domain-specific vocabulary needs custom training',
        ],
      },
    ],
    resources: [
      {
        title: 'PyVi - Vietnamese Text Processing',
        url: 'https://github.com/trungtv/pyvi',
        type: 'library',
        description: 'Python library for Vietnamese NLP tasks',
      },
      {
        title: 'VnCoreNLP',
        url: 'https://github.com/vncorenlp/VnCoreNLP',
        type: 'tool',
        description: 'Fast Vietnamese NLP annotation pipeline',
      },
    ],
  },
  {
    id: 'vietnamese-ai-chatbot',
    title: 'Bài 2: Xây dựng AI Chatbot tiếng Việt thông minh',
    description:
      'Phát triển chatbot AI hiểu và trả lời tiếng Việt tự nhiên. Học intent recognition, entity extraction và conversation management cho tiếng Việt.',
    videoUrl: 'https://www.youtube.com/watch?v=QhPnTb_dUH4',
    imageUrl:
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=400&fit=crop',
    difficulty: 'Trung bình',
    duration: '180 phút',
    languageFeatures: [
      'Intent classification',
      'Entity recognition',
      'Context understanding',
      'Vietnamese grammar',
    ],
    objectives: [
      'Thiết kế conversation flow cho Vietnamese chatbot',
      'Implement intent recognition cho câu hỏi tiếng Việt',
      'Build entity extraction system cho Vietnamese entities',
      'Deploy chatbot integration với popular Vietnamese platforms',
    ],
    prerequisites: [
      'Hoàn thành Vietnamese NLP Fundamentals',
      'Kiến thức về machine learning cơ bản',
      'Quen thuộc với API development',
    ],
    technologies: [
      'Rasa',
      'spaCy',
      'Transformers',
      'FastAPI',
      'Zalo API',
      'Facebook Messenger',
    ],
    exercises: [
      {
        title: 'Vietnamese Intent Classification',
        description:
          'Build intent classifier cho common Vietnamese customer service queries',
        difficulty: 'Trung bình',
        requirements: [
          'Rasa framework',
          'Vietnamese training data',
          'Classification metrics',
        ],
        hints: [
          'Collect diverse Vietnamese conversation data',
          'Use pre-trained Vietnamese embeddings',
          'Handle informal Vietnamese (teen speak, abbreviations)',
        ],
        expectedOutput:
          'Intent classifier với accuracy > 85% trên Vietnamese test set',
        solution:
          'Fine-tune PhoBERT model cho intent classification với Vietnamese data',
      },
    ],
    realWorldApplications: [
      'Customer service automation cho Vietnamese businesses',
      'E-commerce product recommendation',
      'Banking và financial services chatbots',
      'Educational support chatbots cho học sinh',
    ],
    caseStudies: [
      {
        title: 'Vietcombank AI Customer Service',
        organization: 'Vietcombank',
        challenge: 'Automate 70% of customer inquiries in Vietnamese',
        solution: 'Multi-turn conversation AI với Vietnamese NLU',
        results: '65% automation rate, 30% reduction in call center load',
        insights: [
          'Vietnamese customers prefer formal language in banking',
          'Regional dialects need special handling',
          'Financial terminology requires domain expertise',
        ],
      },
    ],
    resources: [
      {
        title: 'PhoBERT Vietnamese Language Model',
        url: 'https://github.com/VinAIResearch/PhoBERT',
        type: 'library',
        description: 'Pre-trained Vietnamese BERT model',
      },
    ],
  },
  {
    id: 'vietnamese-voice-ai',
    title: 'Bài 3: AI Voice Technology cho tiếng Việt',
    description:
      'Phát triển ứng dụng voice AI cho tiếng Việt: speech-to-text, text-to-speech và voice assistant. Học cách handle Vietnamese pronunciation và tone.',
    videoUrl: 'https://www.youtube.com/watch?v=mYUyaKmvu6Y',
    imageUrl:
      'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=400&fit=crop',
    difficulty: 'Nâng cao',
    duration: '150 phút',
    languageFeatures: [
      'Tonal pronunciation',
      'Regional accents',
      'Speech patterns',
      'Voice synthesis',
    ],
    objectives: [
      'Implement Vietnamese speech recognition với high accuracy',
      'Build natural Vietnamese text-to-speech system',
      'Create voice assistant hiểu lệnh tiếng Việt',
      'Optimize cho Vietnamese pronunciation và accents',
    ],
    prerequisites: [
      'Hoàn thành Vietnamese NLP và Chatbot lessons',
      'Kiến thức về signal processing',
      'Experience với audio processing libraries',
    ],
    technologies: [
      'Wav2Vec2',
      'Transformers',
      'TTS',
      'PyAudio',
      'Librosa',
      'FastSpeech2',
    ],
    exercises: [
      {
        title: 'Vietnamese Speech Recognition',
        description:
          'Build STT system cho Vietnamese với support cho regional accents',
        difficulty: 'Nâng cao',
        requirements: [
          'Wav2Vec2 model',
          'Vietnamese audio dataset',
          'Audio preprocessing',
        ],
        hints: [
          'Use Vietnamese pre-trained Wav2Vec2 model',
          'Handle different Vietnamese regional accents',
          'Implement noise reduction for better accuracy',
        ],
        expectedOutput: 'STT system với WER < 15% trên Vietnamese speech',
        solution:
          'Fine-tune Wav2Vec2-vietnamese model với domain-specific data',
      },
    ],
    realWorldApplications: [
      'Vietnamese voice assistants cho smart homes',
      'Voice navigation cho Vietnamese drivers',
      'Accessibility tools cho Vietnamese users',
      'Language learning applications',
    ],
    caseStudies: [
      {
        title: 'VinFast Vietnamese Voice Assistant',
        organization: 'VinFast',
        challenge: 'Integrate Vietnamese voice control in cars',
        solution:
          'Custom Vietnamese STT/TTS system optimized for car environment',
        results: '90% accuracy in noisy car environment, 200ms response time',
        insights: [
          'Car noise requires specialized acoustic models',
          'Vietnamese tone recognition is crucial for accuracy',
          'Local traffic and location names need special handling',
        ],
      },
    ],
    resources: [
      {
        title: 'Vietnamese Self-Supervised Learning Wav2Vec2 model',
        url: 'https://github.com/nguyenvulebinh/vietnamese-wav2vec2',
        type: 'tool',
        description: `self-supervised model is pre-trained on a massive audio set of 13k hours of Vietnamese youtube audio, which includes:
- Clean audio
- Noise audio
- Conversation
- Multi-gender and dialects`,
      },
    ],
  },
];
