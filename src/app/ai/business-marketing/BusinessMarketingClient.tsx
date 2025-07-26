'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function BusinessMarketingClient() {
  const [activeSection, setActiveSection] = useState('content-marketing');

  const sections = [
    {
      id: 'content-marketing',
      title: 'Content Marketing với AI',
      icon: '📈',
      content: {
        overview: 'Tạo nội dung marketing chất lượng cao và hiệu quả với sự hỗ trợ của AI',
        steps: [
          {
            title: 'Lập chiến lược content',
            content: `"Create content marketing strategy for [business type]:
- Target audience: [demographics, interests, pain points]
- Business goals: [brand awareness/lead generation/sales]
- Competitors: [list main competitors]
- Budget: [monthly budget range]
- Resources: [team size, skills available]

Include:
1. Content pillars and themes
2. Content calendar for 3 months
3. Platform-specific strategies
4. KPIs and success metrics
5. Content repurposing plan"`
          },
          {
            title: 'Blog posts chiến lược',
            content: `"Write SEO-optimized blog post about [topic]:
- Target keyword: [primary keyword]
- Search intent: [informational/commercial/transactional]
- Word count: [target length]
- Audience level: [beginner/intermediate/expert]

Structure:
- Compelling headline (include keyword)
- Meta description under 160 characters
- Introduction with hook
- H2/H3 subheadings with keywords
- Actionable tips and examples
- Strong call-to-action
- Internal/external link suggestions"`
          },
          {
            title: 'Social media campaigns',
            content: `"Create social media campaign for [product/service launch]:
- Platform: [Facebook/Instagram/LinkedIn/TikTok]
- Campaign duration: [timeframe]
- Budget: [amount]
- Target audience: [specific demographics]

Deliver:
1. Campaign theme and hashtag strategy
2. 10 post variations (images, videos, carousels)
3. Captions with CTAs
4. Posting schedule for maximum engagement
5. Paid advertising copy
6. Influencer outreach templates"`
          },
          {
            title: 'Email marketing sequences',
            content: `"Design email marketing funnel for [business goal]:
- Lead magnet: [what you're offering]
- Target customer: [ideal customer profile]
- Conversion goal: [specific action]
- Timeline: [follow-up sequence length]

Create:
1. Welcome email series (3-5 emails)
2. Nurture sequence (weekly for 2 months)
3. Promotional emails (product launches)
4. Re-engagement campaign
5. Customer retention series
Include subject lines, preview text, and CTAs"`
          }
        ],
        tips: [
          'Always define clear target audience trước khi tạo content',
          'A/B test headlines, CTAs, và send times',
          'Repurpose content across multiple platforms',
          'Track metrics và adjust strategy based on performance'
        ]
      }
    },
    {
      id: 'customer-service',
      title: 'AI Customer Service',
      icon: '🤝',
      content: {
        overview: 'Nâng cao chất lượng dịch vụ khách hàng với chatbot và AI automation',
        steps: [
          {
            title: 'Thiết kế chatbot responses',
            content: `"Create chatbot conversation flows for [business type]:
- Common inquiries: [list top 10 questions]
- Business hours: [availability]
- Escalation triggers: [when to transfer to human]
- Brand voice: [professional/friendly/casual]

Design flows for:
1. Product information requests
2. Order status and tracking
3. Return/refund processes
4. Technical support issues
5. Appointment scheduling
6. Lead qualification

Include fallback responses and handoff protocols."`
          },
          {
            title: 'FAQ optimization',
            content: `"Optimize FAQ section using customer data:
- Current FAQ performance: [metrics]
- Customer inquiry patterns: [common themes]
- Pain points: [frequent complaints]

Improve by:
1. Reorganizing questions by frequency
2. Adding video explanations for complex topics
3. Creating searchable knowledge base
4. Implementing smart suggestions
5. Regular updates based on new inquiries
6. Multi-language support if needed"`
          },
          {
            title: 'Complaint resolution templates',
            content: `"Create professional response templates for customer complaints:
- Complaint types: [billing/product/service/shipping]
- Resolution authority: [what can support team offer]
- Escalation procedures: [when to involve management]

Templates for:
1. Acknowledgment and apology
2. Investigation and follow-up
3. Resolution and compensation
4. Prevention and process improvement
5. Feedback request and relationship repair
Include empathetic language and clear next steps."`
          },
          {
            title: 'Customer feedback analysis',
            content: `"Analyze customer feedback for business insights:
[Paste customer reviews/feedback/survey responses]

Extract:
1. Sentiment analysis (positive/negative/neutral percentages)
2. Common themes and trending issues
3. Product/service improvement opportunities
4. Customer satisfaction drivers
5. Competitive advantages mentioned
6. Actionable recommendations for teams
7. Priority ranking for addressing issues"`
          }
        ],
        tips: [
          'Train AI responses với actual customer language',
          'Regular review và update automated responses',
          'Always provide option cho human support',
          'Use customer feedback để continuously improve AI'
        ]
      }
    },
    {
      id: 'market-research',
      title: 'Market Research & Analysis',
      icon: '📊',
      content: {
        overview: 'Nghiên cứu thị trường và phân tích đối thủ cạnh tranh một cách hiệu quả',
        steps: [
          {
            title: 'Competitor analysis framework',
            content: `"Analyze competitors for [industry/market]:
- Direct competitors: [list 3-5 main competitors]
- Indirect competitors: [alternative solutions]
- Market position: [where you fit]

Research areas:
1. Product/service offerings and pricing
2. Marketing strategies and messaging
3. Customer reviews and satisfaction
4. Social media presence and engagement
5. Website performance and SEO
6. Strengths, weaknesses, opportunities, threats
7. Market gaps and differentiation opportunities"`
          },
          {
            title: 'Target audience research',
            content: `"Define ideal customer persona for [product/service]:
- Industry: [business type]
- Current customers: [existing customer data]
- Market segment: [B2B/B2C/niche]

Develop personas including:
1. Demographics and psychographics
2. Pain points and challenges
3. Goals and motivations
4. Buying behavior and decision process
5. Preferred communication channels
6. Budget and price sensitivity
7. Objections and concerns
Create 2-3 detailed buyer personas with names and stories."`
          },
          {
            title: 'Market trends analysis',
            content: `"Research market trends for [industry] in [timeframe]:
- Current market size and growth rate
- Emerging technologies and innovations
- Consumer behavior shifts
- Regulatory changes and impacts
- Economic factors affecting market

Provide:
1. Trend analysis with supporting data
2. Opportunities and threats identification
3. Impact assessment on business
4. Strategic recommendations
5. Timeline for trend adoption
6. Investment priorities
7. Risk mitigation strategies"`
          },
          {
            title: 'SWOT analysis generation',
            content: `"Conduct comprehensive SWOT analysis for [business]:
- Business model: [description]
- Market position: [current status]
- Resources: [team, budget, assets]
- Recent performance: [key metrics]

Analyze:
Strengths: Internal advantages and unique capabilities
Weaknesses: Areas for improvement and limitations
Opportunities: External factors that could benefit business
Threats: External challenges and competitive pressures

Include strategic recommendations for each quadrant."`
          }
        ],
        tips: [
          'Use multiple sources để validate research findings',
          'Regular updates để track market changes',
          'Focus on actionable insights rather than data collection',
          'Combine quantitative data với qualitative insights'
        ]
      }
    },
    {
      id: 'sales-optimization',
      title: 'Sales & Lead Generation',
      icon: '💰',
      content: {
        overview: 'Tối ưu hóa quy trình bán hàng và tạo leads chất lượng cao',
        steps: [
          {
            title: 'Lead qualification framework',
            content: `"Create lead scoring system for [business type]:
- Sales cycle length: [average time]
- Average deal size: [value range]
- Decision makers: [who's involved]
- Success factors: [what makes deals close]

Scoring criteria:
1. Demographic fit (company size, industry, location)
2. Behavioral signals (website activity, content engagement)
3. BANT qualification (Budget, Authority, Need, Timeline)
4. Pain point alignment with solution
5. Competition and urgency factors
6. Previous interaction quality
Assign point values and qualification thresholds."`
          },
          {
            title: 'Sales email sequences',
            content: `"Design sales email sequence for [prospect type]:
- Product/service: [what you're selling]
- Target audience: [specific segment]
- Pain points: [main challenges they face]
- Unique value proposition: [key differentiator]

Create 7-email sequence:
1. Introduction and value proposition
2. Social proof and case studies
3. Pain point education
4. Solution demonstration
5. Objection handling
6. Urgency and scarcity
7. Final value reinforcement
Include subject lines, personalization, and clear CTAs."`
          },
          {
            title: 'Sales call scripts',
            content: `"Develop sales call framework for [sales situation]:
- Call purpose: [discovery/demo/closing]
- Prospect profile: [title, company, needs]
- Key obstacles: [common objections]
- Desired outcome: [next steps]

Script structure:
1. Opening and rapport building (2 minutes)
2. Discovery questions (15 minutes)
3. Needs assessment and pain exploration
4. Solution presentation (10 minutes)
5. Objection handling techniques
6. Trial close and next steps
7. Follow-up commitment
Include transition phrases and backup questions."`
          },
          {
            title: 'Proposal and contract templates',
            content: `"Create winning proposal template for [service type]:
- Project scope: [typical engagement]
- Client challenges: [common pain points]
- Pricing model: [hourly/project/retainer]
- Competition: [how others proposal]

Proposal sections:
1. Executive summary with clear value
2. Problem understanding and impact
3. Proposed solution and methodology
4. Timeline and milestones
5. Investment and ROI justification
6. Team credentials and case studies
7. Terms, conditions, and next steps
Include persuasive language and risk mitigation."`
          }
        ],
        tips: [
          'Personalize outreach based on research và prospect data',
          'Track và analyze response rates để optimize messaging',
          'Follow up consistently with value-added content',
          'Use social proof và testimonials throughout sales process'
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
                <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm">
                  📈
                </div>
                <h1 className="text-xl font-bold text-gray-900">
                  AI cho Kinh Doanh & Marketing
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
                  Kinh Doanh & Marketing
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
                        ? 'bg-green-50 text-green-700 border border-green-200'
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
                          <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                              {step.title}
                            </h3>
                            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-500">
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
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-teal-800 mb-4 flex items-center gap-2">
                    💡 Mẹo Quan Trọng
                  </h3>
                  <ul className="space-y-2">
                    {activeContent.content.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-teal-700">
                        <span className="text-teal-600 mt-1">•</span>
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
