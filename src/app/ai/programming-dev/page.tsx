'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ProgrammingDevAI() {
  const [activeSection, setActiveSection] = useState('code-assistant');

  const sections = [
    {
      id: 'code-assistant',
      title: 'AI Code Assistant',
      icon: '💻',
      content: {
        overview: 'Sử dụng AI như GitHub Copilot, ChatGPT để viết code hiệu quả và debug nhanh chóng',
        steps: [
          {
            title: 'Code generation với context',
            content: `"Write [language] function that [specific task]:
- Input: [describe input parameters and types]
- Output: [describe expected output]
- Requirements: [performance, error handling, edge cases]
- Style: [coding standards, naming conventions]

Example: 'Write Python function that calculates compound interest:
- Input: principal (float), rate (float), time (int), compound_frequency (int)
- Output: final amount (float)
- Requirements: handle negative inputs, round to 2 decimals
- Style: use type hints, docstrings, follow PEP 8'"`
          },
          {
            title: 'Code review và optimization',
            content: `"Review and optimize this code:
[paste your code]

Please analyze:
1. Code quality and readability
2. Performance optimization opportunities
3. Security vulnerabilities
4. Best practices compliance
5. Error handling improvements
6. Memory usage optimization
7. Potential edge cases not handled

Provide specific suggestions with improved code examples."`
          },
          {
            title: 'Debug assistance',
            content: `"Help debug this issue:
- Programming language: [language]
- Error message: [exact error text]
- Code snippet: [paste problematic code]
- Expected behavior: [what should happen]
- Actual behavior: [what's happening instead]
- Environment: [OS, version, dependencies]

Walk through:
1. Likely causes of the error
2. Step-by-step debugging approach
3. Fixed code with explanations
4. Prevention strategies for similar issues"`
          },
          {
            title: 'Architecture planning',
            content: `"Design software architecture for [project type]:
- Requirements: [functional requirements]
- Scale: [expected users, data volume, traffic]
- Technology constraints: [required technologies, legacy systems]
- Team size: [number of developers]
- Timeline: [development timeline]

Provide:
1. High-level system architecture diagram description
2. Technology stack recommendations
3. Database design considerations
4. API design patterns
5. Security considerations
6. Scalability planning
7. Development workflow and deployment strategy"`
          }
        ],
        tips: [
          'Provide specific context và requirements cho accurate code generation',
          'Always review và test AI-generated code before using',
          'Use AI để learn new programming patterns và best practices',
          'Combine AI assistance với human code review'
        ]
      }
    },
    {
      id: 'learning-programming',
      title: 'Học Lập Trình với AI',
      icon: '🎓',
      content: {
        overview: 'Tận dụng AI để học lập trình hiệu quả từ cơ bản đến nâng cao',
        steps: [
          {
            title: 'Personalized learning path',
            content: `"Create programming learning path for me:
- Current level: [absolute beginner/some experience/intermediate]
- Programming language: [Python/JavaScript/Java/etc.]
- Goals: [web development/data science/mobile apps/game dev]
- Time available: [hours per week]
- Learning style: [hands-on projects/theory first/mixed]
- Background: [math/engineering/business/no tech background]

Design:
1. Week-by-week curriculum with topics
2. Hands-on projects for each milestone
3. Practice exercises and coding challenges
4. Resource recommendations (books, tutorials, platforms)
5. Assessment checkpoints
6. Real-world project portfolio suggestions"`
          },
          {
            title: 'Concept explanation với examples',
            content: `"Explain [programming concept] in [language]:
- My level: [beginner/intermediate/advanced]
- Learning goal: [understand for project/exam/job interview]
- Preferred explanation style: [simple analogies/technical detail/visual examples]

Include:
1. Simple explanation with real-world analogy
2. Code examples from basic to complex
3. Common use cases and applications
4. Best practices and anti-patterns
5. Related concepts to learn next
6. Practice exercises to reinforce learning
7. Common mistakes and how to avoid them"`
          },
          {
            title: 'Project-based learning',
            content: `"Suggest programming project for [skill level] in [language]:
- Interests: [web apps/games/automation/data analysis]
- Time commitment: [weekend project/2 weeks/1 month]
- Skills to practice: [specific skills you want to develop]
- Complexity level: [beginner/intermediate/advanced]

Project should include:
1. Clear project description and goals
2. Feature breakdown and implementation order
3. Technologies and tools to use
4. Step-by-step development phases
5. Learning resources for each phase
6. Challenge extensions for skill building
7. Portfolio presentation suggestions"`
          },
          {
            title: 'Interview preparation',
            content: `"Prepare for [programming job type] interview:
- Role level: [junior/mid/senior developer]
- Company type: [startup/big tech/consulting]
- Focus areas: [algorithms/system design/domain knowledge]
- Timeline: [preparation time available]

Cover:
1. Technical concepts to review
2. Coding challenge practice problems
3. System design scenarios (for mid/senior roles)
4. Behavioral questions with STAR method examples
5. Company research and role-specific preparation
6. Mock interview practice setup
7. Portfolio and project presentation tips"`
          }
        ],
        tips: [
          'Practice coding daily, even nếu chỉ 15-30 minutes',
          'Build projects that interest you để maintain motivation',
          'Join programming communities để ask questions và get feedback',
          'Learn debugging skills early - it\'s as important as writing code'
        ]
      }
    },
    {
      id: 'automation-scripting',
      title: 'Automation & Scripting',
      icon: '⚙️',
      content: {
        overview: 'Tạo scripts và automation để tiết kiệm thời gian trong công việc hàng ngày',
        steps: [
          {
            title: 'File management automation',
            content: `"Create automation script for file management:
- Task: [organize downloads/backup files/clean temp files]
- Operating system: [Windows/Mac/Linux]
- Programming language: [Python/PowerShell/Bash]
- Frequency: [daily/weekly/triggered by event]
- File types: [documents/images/videos/all files]

Script should:
1. Scan specified directories for files
2. Organize by date, type, or custom criteria
3. Handle duplicate files appropriately
4. Create organized folder structure
5. Log all actions taken
6. Include error handling
7. Provide summary report of actions"`
          },
          {
            title: 'Data processing automation',
            content: `"Automate data processing task:
- Data source: [CSV files/Excel/database/API]
- Processing needed: [clean/transform/analyze/report]
- Output format: [Excel/PDF/dashboard/email]
- Schedule: [real-time/daily/weekly/monthly]
- Data volume: [small/medium/large datasets]

Create script to:
1. Read data from multiple sources
2. Clean and validate data
3. Perform calculations or transformations
4. Generate reports or visualizations
5. Handle missing or invalid data
6. Email results to stakeholders
7. Archive processed data with timestamps"`
          },
          {
            title: 'Web scraping và API automation',
            content: `"Build web scraping/API automation:
- Target website/API: [specify source]
- Data to extract: [products/news/prices/social media]
- Frequency: [once/daily/hourly/real-time monitoring]
- Data storage: [CSV/database/cloud storage]
- Notification needs: [email alerts/dashboard updates]

Implementation:
1. Respectful scraping with proper delays
2. Handle dynamic content and JavaScript
3. Parse and clean extracted data
4. Store data in structured format
5. Monitor for changes and alert on updates
6. Handle rate limits and errors gracefully
7. Include data validation and quality checks"`
          },
          {
            title: 'System monitoring automation',
            content: `"Create system monitoring automation:
- Systems to monitor: [servers/websites/services/applications]
- Metrics: [uptime/performance/disk space/memory]
- Alert thresholds: [specify warning and critical levels]
- Notification methods: [email/SMS/Slack/dashboard]
- Monitoring frequency: [continuous/intervals]

Monitor script features:
1. Check system health metrics
2. Test service availability and response times
3. Monitor resource usage (CPU, memory, disk)
4. Alert on threshold breaches
5. Generate daily/weekly health reports
6. Automatically restart failed services
7. Log all monitoring activities and incidents"`
          }
        ],
        tips: [
          'Start với simple scripts và gradually add complexity',
          'Always test automation thoroughly before deploying',
          'Include logging và error handling để troubleshoot issues',
          'Document your scripts với clear comments và usage instructions'
        ]
      }
    },
    {
      id: 'api-integration',
      title: 'API Integration & Development',
      icon: '🔌',
      content: {
        overview: 'Tích hợp và phát triển APIs hiệu quả cho ứng dụng và hệ thống',
        steps: [
          {
            title: 'REST API development',
            content: `"Design REST API for [application type]:
- Functionality: [user management/e-commerce/content management]
- Framework: [Express.js/Django/Spring Boot/FastAPI]
- Database: [PostgreSQL/MongoDB/MySQL]
- Authentication: [JWT/OAuth/API keys]
- Expected load: [concurrent users/requests per minute]

API design includes:
1. Resource modeling and URL structure
2. HTTP methods and status codes
3. Request/response format (JSON schema)
4. Authentication and authorization
5. Input validation and error handling
6. Rate limiting and security measures
7. API documentation with examples"`
          },
          {
            title: 'Third-party API integration',
            content: `"Integrate [API name] into [application type]:
- API purpose: [payment/social media/email/analytics]
- Programming language: [your development language]
- Framework: [if applicable]
- Required features: [specific API endpoints needed]
- Error handling: [retry logic/fallback options]

Integration steps:
1. API authentication setup and key management
2. HTTP client configuration with proper headers
3. Request/response handling with data mapping
4. Error handling and retry mechanisms
5. Rate limiting and quota management
6. Caching strategy for performance
7. Testing with mock data and live API"`
          },
          {
            title: 'API testing và documentation',
            content: `"Create comprehensive API testing suite:
- API type: [REST/GraphQL/SOAP]
- Testing framework: [Postman/Jest/PyTest/JUnit]
- Coverage needs: [unit/integration/load testing]
- Documentation format: [OpenAPI/Swagger/custom]

Testing strategy:
1. Unit tests for individual endpoints
2. Integration tests for workflow scenarios
3. Authentication and authorization tests
4. Input validation and error response tests
5. Performance and load testing
6. Security testing (SQL injection, XSS)
7. Automated testing in CI/CD pipeline

Documentation includes:
- Interactive API explorer
- Code examples in multiple languages
- Error codes and troubleshooting guide"`
          },
          {
            title: 'Microservices architecture',
            content: `"Design microservices architecture for [application]:
- Business domains: [user/order/payment/inventory/etc.]
- Technology stack: [containerization/orchestration preferences]
- Communication: [REST/GraphQL/message queues]
- Data management: [database per service/shared databases]
- Deployment: [cloud provider/on-premise]

Architecture design:
1. Service decomposition by business capability
2. API gateway for routing and cross-cutting concerns
3. Service-to-service communication patterns
4. Data consistency and transaction management
5. Service discovery and load balancing
6. Monitoring, logging, and distributed tracing
7. CI/CD pipeline for independent deployments"`
          }
        ],
        tips: [
          'Always version your APIs để maintain backward compatibility',
          'Implement comprehensive error handling và meaningful error messages',
          'Use API documentation tools để keep docs up-to-date',
          'Monitor API performance và usage patterns regularly'
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
                <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center text-white text-sm">
                  💻
                </div>
                <h1 className="text-xl font-bold text-gray-900">
                  AI cho Lập Trình & Phát Triển
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
                  Lập Trình & Phát Triển
                </span>
              </nav>
            </div>
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
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                              {step.title}
                            </h3>
                            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-800">
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
                <div className="bg-gray-50 border border-gray-300 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    💡 Mẹo Quan Trọng
                  </h3>
                  <ul className="space-y-2">
                    {activeContent.content.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-gray-600 mt-1">•</span>
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
