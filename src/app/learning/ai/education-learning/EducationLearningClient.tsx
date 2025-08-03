'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ShareButton from '@/components/ShareButton';

export default function EducationLearningClient() {
  const [activeSection, setActiveSection] = useState('chatgpt-learning');

  const sections = [
    {
      id: 'chatgpt-learning',
      title: 'ChatGPT cho Học Tập',
      icon: '🤖',
      content: {
        overview: 'Sử dụng ChatGPT như một gia sư cá nhân để học hiệu quả mọi lĩnh vực',
        steps: [
          {
            title: 'Thiết lập ChatGPT làm gia sư',
            content: `Prompt setup: "You are an expert tutor in [subject]. Your role is to:
- Explain concepts clearly with examples
- Ask me questions to check understanding  
- Provide practice problems
- Give constructive feedback
- Adapt explanations to my level

I'm [your level] student learning [specific topic]. Start by assessing my current knowledge with 3 questions."`
          },
          {
            title: 'Giải thích khái niệm phức tạp',
            content: `"Explain [concept] to me like I'm [age/level]:
- Start with simple analogy
- Break down into smaller parts
- Show real-world examples
- Connect to things I already know

Example: 'Explain quantum physics like I'm 15 years old, using everyday objects as analogies'"`
          },
          {
            title: 'Tạo câu hỏi luyện tập',
            content: `"Create 10 practice questions about [topic] for [level]:
- Include multiple choice, short answer, and essay questions
- Range from basic to advanced difficulty
- Provide answer key with explanations
- Focus on [specific skills/concepts]

After I answer, give detailed feedback on each response."`
          },
          {
            title: 'Học ngoại ngữ hiệu quả',
            content: `"I want to practice [language] conversation about [topic]:
- Correct my grammar and pronunciation
- Suggest better vocabulary
- Ask follow-up questions
- Keep conversation natural and engaging
- Explain cultural context when relevant

Start with: 'Let's have a conversation about traveling in [country]'"`
          }
        ],
        tips: [
          'Specify your current level để AI điều chỉnh phù hợp',
          'Ask for examples và analogies để hiểu sâu hơn',
          'Request step-by-step breakdowns cho problems phức tạp',
          'Use AI để practice speaking và writing skills'
        ]
      }
    },
    {
      id: 'research-assistant',
      title: 'AI Research Assistant',
      icon: '🔍',
      content: {
        overview: 'Biến AI thành trợ lý nghiên cứu để thu thập, phân tích và tổng hợp thông tin hiệu quả',
        steps: [
          {
            title: 'Nghiên cứu chủ đề mới',
            content: `"I need to research [topic] for [purpose - essay/presentation/project]:

1. Provide overview of key concepts
2. Identify main subtopics to explore
3. Suggest reliable sources and authors
4. Create research outline with timeline
5. List potential challenges and how to address them

Make it suitable for [academic level] and [time constraint]."`
          },
          {
            title: 'Phân tích và tổng hợp nguồn',
            content: `"Analyze these sources about [topic]:
[paste your sources/quotes]

Help me:
- Identify common themes and patterns
- Compare different viewpoints
- Find gaps in current research
- Suggest connections between ideas
- Create synthesis for my argument

Format as structured outline for easy note-taking."`
          },
          {
            title: 'Tạo outline và structure',
            content: `"Create detailed outline for [type of paper] about [topic]:
- Target length: [word count]
- Academic level: [level]
- Key arguments: [your main points]
- Required sources: [number and types]

Include:
- Thesis statement options
- Main section headings
- Supporting points for each section
- Suggested evidence and examples"`
          },
          {
            title: 'Fact-checking và verification',
            content: `"Help me verify these claims about [topic]:
[list your facts/statistics]

For each claim:
- Assess reliability and recency
- Suggest authoritative sources
- Identify potential biases
- Flag any outdated information
- Recommend additional verification steps"`
          }
        ],
        tips: [
          'Always cross-reference AI information với reputable sources',
          'Ask cho multiple perspectives về controversial topics',
          'Use AI để brainstorm keywords cho database searches',
          'Request citations in proper academic format'
        ]
      }
    },
    {
      id: 'study-techniques',
      title: 'Kỹ Thuật Học Tập với AI',
      icon: '📚',
      content: {
        overview: 'Áp dụng các phương pháp học tập hiệu quả kết hợp với công nghệ AI',
        steps: [
          {
            title: 'Spaced Repetition với AI',
            content: `"Create spaced repetition schedule for [subject]:
- Material: [list topics/chapters]
- Timeline: [study period]
- Daily time available: [hours]

Generate:
1. Initial learning schedule
2. Review intervals (1 day, 3 days, 1 week, 2 weeks, 1 month)
3. Difficulty-based adjustments
4. Progress tracking checkpoints
5. Flashcard suggestions for key concepts"`
          },
          {
            title: 'Feynman Technique practice',
            content: `"I want to use Feynman Technique for [concept]:

1. Let me explain it in simple terms: [your explanation]
2. Identify gaps in my understanding
3. Suggest analogies to make it clearer
4. Create questions to test comprehension
5. Provide feedback on my explanation
6. Recommend resources for weak areas"`
          },
          {
            title: 'Active recall sessions',
            content: `"Create active recall session for [chapter/topic]:
- Generate questions without looking at notes
- Mix question types (definition, application, analysis)
- Include scenario-based problems
- Provide immediate feedback
- Track which areas need more review
- Suggest follow-up study actions"`
          },
          {
            title: 'Mind mapping với AI',
            content: `"Help me create comprehensive mind map for [subject]:
- Central topic: [main concept]
- Branch out to: major subtopics
- Include: key terms, formulas, examples
- Show connections between concepts
- Use colors and visual cues
- Format for digital mind mapping tools

Suggest best practices for visual organization."`
          }
        ],
        tips: [
          'Combine AI suggestions với personal learning style',
          'Regular review và adjust study plans based on progress',
          'Use AI để identify knowledge gaps early',
          'Practice explaining concepts to AI như teaching someone'
        ]
      }
    },
    {
      id: 'exam-preparation',
      title: 'Chuẩn Bị Thi Cử',
      icon: '📝',
      content: {
        overview: 'Tối ưu hóa việc ôn thi và kiểm tra với sự hỗ trợ của AI',
        steps: [
          {
            title: 'Lập kế hoạch ôn thi',
            content: `"Create exam preparation plan:
- Exam date: [date]
- Subjects/topics: [list]
- Current knowledge level: [self-assessment]
- Available study time: [hours per day]
- Learning style: [visual/auditory/kinesthetic]

Include:
- Daily study schedule
- Topic prioritization based on difficulty/importance
- Review cycles and practice test dates
- Stress management breaks
- Final week intensive review plan"`
          },
          {
            title: 'Mock tests và practice',
            content: `"Generate practice exam for [subject]:
- Format: [multiple choice/essay/mixed]
- Duration: [time limit]
- Difficulty: [match actual exam level]
- Topics coverage: [comprehensive/focused areas]

After completion:
- Provide detailed answer explanations
- Identify weak areas for more study
- Suggest time management improvements
- Create targeted practice for missed questions"`
          },
          {
            title: 'Stress management techniques',
            content: `"Help me manage exam anxiety:
- Current stress levels: [description]
- Main worry areas: [specific concerns]
- Previous experience: [what worked/didn't work]

Provide:
1. Breathing and relaxation techniques
2. Study schedule to reduce last-minute cramming
3. Positive self-talk strategies
4. Test-taking strategies for anxiety
5. Emergency calm-down techniques for exam day"`
          },
          {
            title: 'Last-minute review strategies',
            content: `"Create final review strategy for [exam] in [time remaining]:
- Most important topics to review
- Quick memorization techniques
- Formula/fact sheets for easy reference
- Common mistake patterns to avoid
- Test-taking strategies specific to exam format
- Time allocation for each section
- What NOT to study (to avoid confusion)"`
          }
        ],
        tips: [
          'Start exam prep early để avoid cramming stress',
          'Use AI để create realistic practice scenarios',
          'Track progress và adjust strategies based on practice results',
          'Focus on understanding concepts rather than memorization'
        ]
      }
    }
  ];

  const activeContent = sections.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Link href="/ai" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm">
                  📚
                </div>
                <h1 className="text-xl font-bold text-gray-900">
                  AI cho Giáo Dục & Học Tập
                </h1>
              </Link>
              <nav className="hidden md:flex items-center gap-1 ml-6">
                <Link href="/" className="text-gray-500 hover:text-gray-700 text-sm">
                  Trang Chủ
                </Link>
                <span className="text-gray-300 mx-2">/</span>
                <Link href="/ai" className="text-gray-500 hover:text-gray-700 text-sm">
                  AI Của Tôi
                </Link>
                <span className="text-gray-300 mx-2">/</span>
                <span className="text-gray-900 text-sm font-medium">
                  Giáo Dục & Học Tập
                </span>
              </nav>
            </div>
            <ShareButton 
              title="AI cho Giáo Dục & Học Tập | K2AiHub"
              description="ChatGPT làm gia sư cá nhân, AI research assistant, kỹ thuật học tập và chuẩn bị thi cử với AI"
            />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-8">
              <h3 className="font-semibold text-gray-900 mb-4">Nội Dung</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                      activeSection === section.id
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{section.icon}</span>
                      <span className="text-sm font-medium">{section.title}</span>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeContent && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{activeContent.icon}</span>
                    <h1 className="text-3xl font-bold text-gray-900">{activeContent.title}</h1>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {activeContent.content.overview}
                  </p>
                </div>

                {/* Steps */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Hướng Dẫn Chi Tiết</h2>
                  <div className="space-y-6">
                    {activeContent.content.steps.map((step, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                              {step.title}
                            </h3>
                            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
                              <pre className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap font-sans">
                                {step.content}
                              </pre>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tips */}
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-4 flex items-center gap-2">
                    💡 Mẹo Quan Trọng
                  </h3>
                  <ul className="space-y-2">
                    {activeContent.content.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-indigo-700">
                        <span className="text-indigo-600 mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
