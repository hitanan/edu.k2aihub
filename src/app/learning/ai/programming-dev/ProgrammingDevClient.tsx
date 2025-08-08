'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ShareButton from '@/components/ShareButton';

export default function ProgrammingDevClient() {
  const [activeSection, setActiveSection] = useState('ai-tools-comparison');

  const sections = [
    {
      id: 'ai-tools-comparison',
      title: 'So Sánh Công Cụ AI Hàng Đầu',
      icon: '⚖️',
      content: {
        overview:
          'Phân tích chi tiết các công cụ AI coding phổ biến nhất, từ GitHub Copilot đến Cursor, giúp bạn chọn lựa phù hợp.',
        tools: [
          {
            name: 'GitHub Copilot',
            price: '$10/tháng (cá nhân), $19/tháng (business)',
            strengths: [
              'Tích hợp tốt với VS Code',
              'Context awareness mạnh',
              'Support đa ngôn ngữ',
              'Code completion thông minh',
            ],
            weaknesses: [
              'Đôi khi suggest code không tối ưu',
              'Cần internet liên tục',
              'Không free',
            ],
            bestFor: 'Developers làm việc trong team, dự án lớn',
            rating: '9/10',
          },
          {
            name: 'Claude 3.5 Sonnet (Anthropic)',
            price: '$20/tháng (Pro), API pricing riêng',
            strengths: [
              'Reasoning logic xuất sắc',
              'Code analysis chuyên sâu',
              'Artifact creation',
              'Safety-focused',
              'Context window 200K tokens',
            ],
            weaknesses: [
              'Không tích hợp trực tiếp IDE',
              'Cần copy-paste code',
              'Rate limit nghiêm ngặt',
            ],
            bestFor: 'Code review, architecture design, complex debugging',
            rating: '9.2/10',
          },
          {
            name: 'Cursor IDE',
            price: '$20/tháng (Pro)',
            strengths: [
              'AI native editor',
              'Chat với codebase',
              'Multi-file editing',
              'Codebase understanding',
              'Claude integration',
            ],
            weaknesses: ['Còn mới, ít stable', 'Learning curve cao', 'Giá cao'],
            bestFor: 'Senior developers, complex refactoring',
            rating: '8.5/10',
          },
          {
            name: 'ChatGPT o1 & GPT-4',
            price: '$20/tháng (Plus), API pricing riêng',
            strengths: [
              'Explain code rất tốt',
              'Debug assistance',
              'Architecture planning',
              'o1 reasoning mạnh',
            ],
            weaknesses: [
              'Không tích hợp trực tiếp IDE',
              'Context window giới hạn',
              'Không realtime',
            ],
            bestFor: 'Learning, debugging, code review, algorithm design',
            rating: '8.5/10',
          },
          {
            name: 'JetBrains AI Assistant',
            price: 'Tích hợp trong JetBrains IDEs subscription',
            strengths: [
              'Deep IDE integration',
              'Context từ project structure',
              'Multi-language support',
              'Refactoring suggestions',
            ],
            weaknesses: [
              'Chỉ cho JetBrains IDEs',
              'Còn beta',
              'Performance chưa ổn định',
            ],
            bestFor: 'JetBrains users, Java/Kotlin developers',
            rating: '7.8/10',
          },
          {
            name: 'Windsurf IDE (Codeium)',
            price: 'Free (cá nhân), $12/tháng (team)',
            strengths: [
              'AI-first flow',
              'Agentic coding',
              'Multi-file editing',
              'Free tier generous',
            ],
            weaknesses: [
              'Còn mới, ít tài liệu',
              'Community nhỏ',
              'Feature chưa đầy đủ',
            ],
            bestFor: 'Individual developers, experimental workflows',
            rating: '7.5/10',
          },
          {
            name: 'Amazon CodeWhisperer (Q Developer)',
            price: 'Free (cá nhân), Enterprise pricing',
            strengths: [
              'AWS integration mạnh',
              'Security scanning',
              'Free tier',
              'Multi-language',
            ],
            weaknesses: [
              'Suggestion quality thấp hơn Copilot',
              'Bias toward AWS services',
            ],
            bestFor: 'AWS developers, security-conscious teams',
            rating: '7.2/10',
          },
          {
            name: 'Replit Agent',
            price: 'Tích hợp trong Replit subscription',
            strengths: [
              'Full-stack development',
              'Deploy tự động',
              'Beginner-friendly',
              'Browser-based',
            ],
            weaknesses: [
              'Giới hạn trong Replit ecosystem',
              'Không suitable cho enterprise',
            ],
            bestFor: 'Prototyping, learning, quick demos',
            rating: '7.0/10',
          },
        ],
        comparison: {
          categories: [
            {
              name: 'Code Completion',
              scores: {
                'GitHub Copilot': 9,
                'Claude 3.5': 8,
                Cursor: 9,
                'ChatGPT o1': 7,
                'JetBrains AI': 8,
                Windsurf: 7,
                CodeWhisperer: 7,
                'Replit Agent': 6,
              },
            },
            {
              name: 'Context Understanding',
              scores: {
                'GitHub Copilot': 8,
                'Claude 3.5': 10,
                Cursor: 10,
                'ChatGPT o1': 9,
                'JetBrains AI': 8,
                Windsurf: 7,
                CodeWhisperer: 6,
                'Replit Agent': 6,
              },
            },
            {
              name: 'IDE Integration',
              scores: {
                'GitHub Copilot': 10,
                'Claude 3.5': 4,
                Cursor: 10,
                'ChatGPT o1': 5,
                'JetBrains AI': 10,
                Windsurf: 9,
                CodeWhisperer: 8,
                'Replit Agent': 10,
              },
            },
            {
              name: 'Price Value',
              scores: {
                'GitHub Copilot': 8,
                'Claude 3.5': 7,
                Cursor: 6,
                'ChatGPT o1': 8,
                'JetBrains AI': 8,
                Windsurf: 10,
                CodeWhisperer: 9,
                'Replit Agent': 8,
              },
            },
            {
              name: 'Code Quality',
              scores: {
                'GitHub Copilot': 8,
                'Claude 3.5': 9,
                Cursor: 8,
                'ChatGPT o1': 9,
                'JetBrains AI': 7,
                Windsurf: 7,
                CodeWhisperer: 7,
                'Replit Agent': 6,
              },
            },
          ],
        },
      },
    },
    {
      id: 'trending-research',
      title: 'Xu Hướng & Nghiên Cứu Mới',
      icon: '🔬',
      content: {
        overview:
          'Những chủ đề và công nghệ AI mà senior developers đang quan tâm và nghiên cứu nhất hiện nay.',
        trends: [
          {
            title: 'AI-Generated Architecture Patterns',
            description:
              'Sử dụng AI để thiết kế system architecture và microservices patterns',
            impact: 'High',
            timeline: '2024-2025',
            keyPlayers: ['OpenAI', 'Anthropic', 'GitHub'],
            resources: [
              'AI System Design Assistant patterns',
              'Automated architecture documentation',
              'Performance optimization suggestions',
            ],
          },
          {
            title: 'Code-to-Code Translation',
            description:
              'AI migration tools giữa các programming languages và frameworks',
            impact: 'Very High',
            timeline: '2024-2026',
            keyPlayers: ['Microsoft', 'JetBrains', 'Meta'],
            resources: [
              'Legacy system modernization',
              'Framework migration automation',
              'Cross-platform code generation',
            ],
          },
          {
            title: 'Autonomous Bug Fixing',
            description: 'AI systems tự động detect, diagnose và fix bugs',
            impact: 'Revolutionary',
            timeline: '2025-2027',
            keyPlayers: ['Google DeepMind', 'OpenAI', 'Amazon'],
            resources: [
              'Self-healing applications',
              'Predictive error prevention',
              'Automated testing generation',
            ],
          },
          {
            title: 'Natural Language to Infrastructure',
            description:
              'Tạo và quản lý infrastructure thông qua natural language',
            impact: 'High',
            timeline: '2024-2025',
            keyPlayers: ['AWS', 'Google Cloud', 'Azure'],
            resources: [
              'Infrastructure as Code generation',
              'Cloud resource optimization',
              'Deployment automation',
            ],
          },
        ],
      },
    },
    {
      id: 'advanced-techniques',
      title: 'Kỹ Thuật Nâng Cao',
      icon: '🚀',
      content: {
        overview:
          'Các phương pháp và pattern advanced mà senior developers sử dụng để maximize AI productivity.',
        techniques: [
          {
            category: 'Prompt Engineering for Code',
            methods: [
              {
                name: 'Context Injection Pattern',
                description:
                  'Cung cấp context về codebase, patterns, và conventions',
                example: `"Given this React TypeScript project structure:
- Uses Next.js 15 with App Router
- Tailwind CSS for styling  
- TypeScript strict mode
- Custom hooks pattern
- Component composition pattern

Create a reusable Modal component that..."`,
                useCase: 'Complex component generation',
              },
              {
                name: 'Test-Driven Prompting',
                description:
                  'Mô tả test cases trước khi yêu cầu implementation',
                example: `"I need a function that should pass these tests:
- parseEmail('john@domain.com') should return {user: 'john', domain: 'domain.com'}
- parseEmail('invalid') should throw ValidationError
- parseEmail('') should return null

Implement this function in TypeScript with proper error handling."`,
                useCase: 'Reliable code generation',
              },
              {
                name: 'Architecture-First Approach',
                description:
                  'Thiết kế architecture pattern trước khi implement details',
                example: `"Design a scalable event-driven architecture for:
- User registration system
- Email notifications
- Audit logging
- Real-time analytics

Use microservices pattern with message queues. Provide:
1. Service breakdown
2. API contracts
3. Database design
4. Message flow diagram"`,
                useCase: 'System design planning',
              },
            ],
          },
          {
            category: 'AI-Assisted Code Review',
            methods: [
              {
                name: 'Multi-Perspective Analysis',
                description: 'Yêu cầu AI review code từ nhiều góc độ khác nhau',
                example: `"Review this code from these perspectives:
1. Security vulnerabilities
2. Performance bottlenecks  
3. Code maintainability
4. Error handling robustness
5. Testing coverage gaps
6. Documentation needs

[paste code here]"`,
                useCase: 'Comprehensive code review',
              },
              {
                name: 'Anti-Pattern Detection',
                description: 'Tìm và sửa các anti-patterns trong codebase',
                example: `"Analyze this codebase for common anti-patterns:
- God objects/classes
- Circular dependencies
- Magic numbers/strings
- Copy-paste programming
- Inappropriate inheritance

Suggest refactoring strategies for each issue found."`,
                useCase: 'Code quality improvement',
              },
            ],
          },
        ],
      },
    },
    {
      id: 'productivity-workflows',
      title: 'Quy Trình Tăng Hiệu Suất',
      icon: '⚡',
      content: {
        overview:
          'Workflow và setup mà top developers sử dụng để tích hợp AI vào development process hiệu quả.',
        workflows: [
          {
            phase: 'Planning & Architecture',
            tools: ['ChatGPT-4', 'Claude 3.5 Sonnet', 'Cursor Chat'],
            techniques: [
              'AI-assisted requirement analysis',
              'Architecture pattern suggestions',
              'Technology stack recommendations',
              'Risk assessment và mitigation planning',
            ],
            timeframe: '10-20% faster planning',
            example: `Phase 1: Requirement Analysis with AI
1. Feed requirements document to AI
2. Ask for clarification questions
3. Generate user stories và acceptance criteria
4. Create technical architecture options
5. Risk assessment và timeline estimation`,
          },
          {
            phase: 'Development',
            tools: ['GitHub Copilot', 'Cursor IDE', 'Tabnine'],
            techniques: [
              'TDD with AI test generation',
              'Component scaffolding',
              'API endpoint generation',
              'Database schema creation',
            ],
            timeframe: '30-50% faster coding',
            example: `Development Workflow:
1. Write test specifications first
2. Use AI to generate test cases
3. Implement functionality with AI assistance  
4. Refactor with AI suggestions
5. Generate documentation automatically`,
          },
          {
            phase: 'Testing & QA',
            tools: ['ChatGPT Code Interpreter', 'GitHub Copilot'],
            techniques: [
              'Automated test case generation',
              'Edge case identification',
              'Performance test scenarios',
              'Security vulnerability scanning',
            ],
            timeframe: '40-60% better test coverage',
            example: `AI-Enhanced Testing:
1. Generate unit tests for all functions
2. Create integration test scenarios
3. AI-generated edge cases
4. Performance benchmark tests
5. Security penetration test cases`,
          },
          {
            phase: 'Code Review & Refactoring',
            tools: ['ChatGPT-4', 'Claude', 'GitHub Copilot'],
            techniques: [
              'Automated code review comments',
              'Refactoring suggestions',
              'Performance optimization',
              'Security audit assistance',
            ],
            timeframe: '25-35% faster reviews',
            example: `AI Code Review Process:
1. AI pre-review for common issues
2. Generate review checklist
3. Suggest improvements
4. Auto-fix simple issues
5. Documentation updates`,
          },
        ],
      },
    },
  ];

  const activeContent = sections.find((s) => s.id === activeSection);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Link
                href="/ai"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center text-white text-sm">
                  💻
                </div>
                <h1 className="text-xl font-bold text-gray-900">
                  AI cho Lập Trình & Phát Triển
                </h1>
              </Link>
              <nav className="hidden md:flex items-center gap-1 ml-6">
                <Link
                  href="/"
                  className="text-gray-500 hover:text-gray-700 text-sm"
                >
                  Trang Chủ
                </Link>
                <span className="text-gray-300 mx-2">/</span>
                <Link
                  href="/ai"
                  className="text-gray-500 hover:text-gray-700 text-sm"
                >
                  AI Của Tôi
                </Link>
                <span className="text-gray-300 mx-2">/</span>
                <span className="text-gray-900 text-sm font-medium">
                  Lập Trình & Phát Triển
                </span>
              </nav>
            </div>
            <ShareButton
              title="AI cho Lập Trình & Phát Triển | K2AiHub"
              description="So sánh GitHub Copilot, Cursor IDE, ChatGPT và các AI coding tools. Kỹ thuật nâng cao cho senior developers"
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
                        ? 'bg-gray-50 text-gray-900 border border-gray-300'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{section.icon}</span>
                      <span className="text-sm font-medium">
                        {section.title}
                      </span>
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
                    <h1 className="text-3xl font-bold text-gray-900">
                      {activeContent.title}
                    </h1>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {activeContent.content.overview}
                  </p>
                </div>

                {/* AI Tools Comparison */}
                {activeSection === 'ai-tools-comparison' && (
                  <>
                    {/* Tools Grid */}
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Top 5 AI Coding Tools
                      </h2>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {activeContent.content.tools?.map((tool, index) => (
                          <div
                            key={index}
                            className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                          >
                            <div className="flex items-start justify-between mb-4">
                              <h3 className="text-xl font-bold text-gray-900">
                                {tool.name}
                              </h3>
                              <div className="text-right">
                                <div className="text-sm font-semibold text-green-600">
                                  {tool.rating}
                                </div>
                                <div className="text-xs text-gray-500">
                                  Rating
                                </div>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">
                              {tool.price}
                            </p>

                            <div className="mb-4">
                              <h4 className="font-semibold text-green-700 mb-2">
                                ✅ Ưu điểm:
                              </h4>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {tool.strengths.map((strength, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2"
                                  >
                                    <span className="text-green-500 mt-1">
                                      •
                                    </span>
                                    <span>{strength}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="mb-4">
                              <h4 className="font-semibold text-red-700 mb-2">
                                ❌ Nhược điểm:
                              </h4>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {tool.weaknesses.map((weakness, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2"
                                  >
                                    <span className="text-red-500 mt-1">•</span>
                                    <span>{weakness}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="bg-blue-50 p-3 rounded-lg">
                              <h4 className="font-semibold text-blue-800 mb-1">
                                🎯 Phù hợp cho:
                              </h4>
                              <p className="text-sm text-blue-700">
                                {tool.bestFor}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Comparison Chart */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        So Sánh Chi Tiết
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm text-gray-900">
                          <thead>
                            <tr className="border-b border-gray-300">
                              <th className="text-left py-2 px-3">Tiêu chí</th>
                              {activeContent.content.comparison &&
                                Object.keys(
                                  activeContent.content.comparison.categories[0]
                                    .scores,
                                ).map((tool) => (
                                  <th
                                    key={tool}
                                    className="text-center py-2 px-3"
                                  >
                                    {tool}
                                  </th>
                                ))}
                            </tr>
                          </thead>
                          <tbody>
                            {activeContent.content.comparison &&
                              activeContent.content.comparison.categories.map(
                                (category, index) => (
                                  <tr
                                    key={index}
                                    className="border-b border-gray-200"
                                  >
                                    <td className="py-2 px-3 font-medium">
                                      {category.name}
                                    </td>
                                    {Object.entries(category.scores).map(
                                      ([tool, score]) => (
                                        <td
                                          key={tool}
                                          className="text-center py-2 px-3"
                                        >
                                          <div className="flex items-center justify-center">
                                            <div
                                              className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                                                score >= 9
                                                  ? 'bg-green-500'
                                                  : score >= 7
                                                    ? 'bg-yellow-500'
                                                    : 'bg-red-500'
                                              }`}
                                            >
                                              {score}
                                            </div>
                                          </div>
                                        </td>
                                      ),
                                    )}
                                  </tr>
                                ),
                              )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>
                )}

                {/* Trending Research */}
                {activeSection === 'trending-research' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      🔥 Hot Topics trong AI Programming
                    </h2>
                    {activeContent.content.trends &&
                      activeContent.content.trends.map((trend, index) => (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-lg p-6"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-bold text-gray-900">
                              {trend.title}
                            </h3>
                            <div className="flex items-center gap-2">
                              <span
                                className={`px-3 py-1 rounded-full text-sm font-medium ${
                                  trend.impact === 'Revolutionary'
                                    ? 'bg-red-100 text-red-800'
                                    : trend.impact === 'Very High'
                                      ? 'bg-orange-100 text-orange-800'
                                      : 'bg-blue-100 text-blue-800'
                                }`}
                              >
                                {trend.impact} Impact
                              </span>
                              <span className="text-sm text-gray-500">
                                {trend.timeline}
                              </span>
                            </div>
                          </div>

                          <p className="text-gray-600 mb-4">
                            {trend.description}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">
                                🏢 Key Players:
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {trend.keyPlayers.map((player, i) => (
                                  <span
                                    key={i}
                                    className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm"
                                  >
                                    {player}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">
                                🛠️ Applications:
                              </h4>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {trend.resources.map((resource, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2"
                                  >
                                    <span className="text-blue-500 mt-1">
                                      ▶
                                    </span>
                                    <span>{resource}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                )}

                {/* Advanced Techniques */}
                {activeSection === 'advanced-techniques' && (
                  <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      🚀 Advanced AI Programming Techniques
                    </h2>
                    {activeContent.content.techniques &&
                      activeContent.content.techniques.map(
                        (techCategory, index) => (
                          <div
                            key={index}
                            className="border border-gray-200 rounded-lg p-6"
                          >
                            <h3 className="text-xl font-bold text-gray-900 mb-6">
                              {techCategory.category}
                            </h3>

                            <div className="space-y-6">
                              {techCategory.methods.map(
                                (method, methodIndex) => (
                                  <div
                                    key={methodIndex}
                                    className="bg-gray-50 rounded-lg p-5"
                                  >
                                    <h4 className="text-lg font-semibold text-gray-800 mb-3">
                                      {method.name}
                                    </h4>
                                    <p className="text-gray-600 mb-4">
                                      {method.description}
                                    </p>

                                    <div className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-3">
                                      <div className="text-xs text-gray-400 mb-2">
                                        Example Prompt:
                                      </div>
                                      <pre className="text-sm whitespace-pre-wrap font-mono">
                                        {method.example}
                                      </pre>
                                    </div>

                                    <div className="bg-blue-50 p-3 rounded-lg">
                                      <span className="text-sm font-medium text-blue-800">
                                        💡 Best for:{' '}
                                      </span>
                                      <span className="text-sm text-blue-700">
                                        {method.useCase}
                                      </span>
                                    </div>
                                  </div>
                                ),
                              )}
                            </div>
                          </div>
                        ),
                      )}
                  </div>
                )}

                {/* Productivity Workflows */}
                {activeSection === 'productivity-workflows' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      ⚡ High-Performance AI Development Workflows
                    </h2>
                    {activeContent.content.workflows &&
                      activeContent.content.workflows.map((workflow, index) => (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-lg p-6"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-gray-900">
                              {workflow.phase}
                            </h3>
                            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                              {workflow.timeframe}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-3">
                                🛠️ Recommended Tools:
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {workflow.tools.map((tool, i) => (
                                  <span
                                    key={i}
                                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                                  >
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold text-gray-800 mb-3">
                                ⚡ Key Techniques:
                              </h4>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {workflow.techniques.map((technique, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2"
                                  >
                                    <span className="text-green-500 mt-1">
                                      ✓
                                    </span>
                                    <span>{technique}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="bg-indigo-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-indigo-800 mb-2">
                              📋 Workflow Example:
                            </h4>
                            <pre className="text-sm text-indigo-700 whitespace-pre-wrap">
                              {workflow.example}
                            </pre>
                          </div>
                        </div>
                      ))}
                  </div>
                )}

                {/* Tips Section */}
                <div className="bg-gray-50 border border-gray-300 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    💡 Pro Tips for AI-Enhanced Development
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-gray-600 mt-1">•</span>
                      <span>
                        Combine multiple AI tools để maximize productivity - use
                        Copilot for coding, ChatGPT for planning
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-gray-600 mt-1">•</span>
                      <span>
                        Always review và test AI-generated code thoroughly - AI
                        can make subtle mistakes
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-gray-600 mt-1">•</span>
                      <span>
                        Invest time in learning prompt engineering - better
                        prompts = better results
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-gray-600 mt-1">•</span>
                      <span>
                        Stay updated với AI tool updates - new features are
                        released frequently
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-gray-600 mt-1">•</span>
                      <span>
                        Join AI developer communities để share best practices và
                        learn new techniques
                      </span>
                    </li>
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
