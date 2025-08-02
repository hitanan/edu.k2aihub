import type { Metadata } from "next";
import Image from 'next/image';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { digitalMarketingLessons } from '@/data/digital-marketing';
import { getModuleNavigation, ModuleNavigation } from '@/utils/moduleNavigation';
import { defaultImage } from "@/utils/image";

export const metadata: Metadata = {
  title: createTitle("Content Marketing Strategy - Chiến Lược Content Marketing"),
  description: createDescription("Master content marketing: storytelling, SEO content, video marketing và content distribution strategies. Tạo nội dung viral và convert leads."),
  keywords: createKeywords(["content marketing", "storytelling", "SEO content", "video marketing", "content strategy", "lead generation"]),
};

const lesson = digitalMarketingLessons.find(l => l.id === 'content-marketing-strategy')!;
const imageUrl = defaultImage;

export default function ContentMarketingStrategyPage() {
  const navConfig = getModuleNavigation('digital-marketing', 'content-marketing-strategy')?? {} as ModuleNavigation;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
      {/* Navigation */}
      <div className="bg-black/20 sticky top-0 z-50 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <a href="/digital-marketing" className="text-orange-400 hover:text-orange-300 transition-colors">
                ← Digital Marketing
              </a>
              <span className="text-gray-500">/</span>
              <span className="text-white font-medium">{lesson.title}</span>
            </div>
            
            <div className="flex items-center space-x-4">
              {navConfig.previous && (
                <a 
                  href={navConfig.previous.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  ← {navConfig.previous.title}
                </a>
              )}
              {navConfig.next && (
                <a 
                  href={navConfig.next.href}
                  className="text-sm bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  {navConfig.next.title} →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">📝</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {lesson.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {lesson.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-orange-500/20 text-orange-200 px-4 py-2 rounded-full">
                ⏱️ {lesson.duration}
              </span>
              <span className="bg-red-500/20 text-red-200 px-4 py-2 rounded-full">
                🎯 {lesson.difficulty}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Learning Objectives */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">🎯 Mục Tiêu Học Tập</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lesson.objectives.map((objective, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <span className="text-orange-400 mr-3 mt-1">✓</span>
                  {objective}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content Image */}
        <div className="mb-12">
          <Image 
            src={imageUrl} 
            alt="Content Marketing Strategy Framework"
            width={800} 
            height={400}
            className="w-full h-64 md:h-80 object-cover rounded-2xl"
          />
        </div>

        {/* Content Marketing Framework */}
        <div className="space-y-12">
          {/* Section 1: Content Strategy Foundation */}
          <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              🎯 Content Strategy Foundation
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-orange-300 mb-4">Customer Journey Mapping</h3>
                <p className="text-gray-300 mb-4">
                  Content strategy phải align với customer journey để deliver right message at right time.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-blue-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-300 mb-3">🔍 Awareness</h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div><strong>Goal:</strong> Introduce brand</div>
                      <div><strong>Content Types:</strong></div>
                      <ul className="ml-4 space-y-1 text-xs">
                        <li>• Blog posts về industry trends</li>
                        <li>• Social media educational content</li>
                        <li>• Infographics và statistics</li>
                        <li>• Podcast appearances</li>
                      </ul>
                      <div><strong>KPIs:</strong> Reach, impressions, brand searches</div>
                    </div>
                  </div>
                  
                  <div className="bg-green-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-green-300 mb-3">🤔 Consideration</h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div><strong>Goal:</strong> Build trust & authority</div>
                      <div><strong>Content Types:</strong></div>
                      <ul className="ml-4 space-y-1 text-xs">
                        <li>• How-to guides và tutorials</li>
                        <li>• Case studies và success stories</li>
                        <li>• Webinars và expert interviews</li>
                        <li>• Comparison content</li>
                      </ul>
                      <div><strong>KPIs:</strong> Time on page, downloads, email signups</div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-300 mb-3">💰 Decision</h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div><strong>Goal:</strong> Convert to customer</div>
                      <div><strong>Content Types:</strong></div>
                      <ul className="ml-4 space-y-1 text-xs">
                        <li>• Product demos và trials</li>
                        <li>• Customer testimonials</li>
                        <li>• Pricing guides</li>
                        <li>• Free consultations</li>
                      </ul>
                      <div><strong>KPIs:</strong> Conversion rate, sales qualified leads</div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-300 mb-3">❤️ Retention</h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div><strong>Goal:</strong> Delight & retain</div>
                      <div><strong>Content Types:</strong></div>
                      <ul className="ml-4 space-y-1 text-xs">
                        <li>• Onboarding content</li>
                        <li>• Advanced tips & tricks</li>
                        <li>• Community building</li>
                        <li>• Loyalty programs</li>
                      </ul>
                      <div><strong>KPIs:</strong> Customer lifetime value, referrals</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-orange-300 mb-4">Content Audit & Gap Analysis</h3>
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-orange-400 font-mono mb-2">Content Audit Framework:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <div>
                      <strong className="text-yellow-400">Audit Criteria:</strong>
                      <ul className="ml-4 mt-1 space-y-1">
                        <li>• Content performance (traffic, engagement)</li>
                        <li>• SEO optimization level</li>
                        <li>• Brand alignment và messaging</li>
                        <li>• Customer journey mapping</li>
                        <li>• Competitor content analysis</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-blue-400">Gap Identification:</strong>
                      <ul className="ml-4 mt-1 space-y-1">
                        <li>• Missing content types</li>
                        <li>• Underperforming topics</li>
                        <li>• Seasonal content opportunities</li>
                        <li>• Format diversification needs</li>
                        <li>• Distribution channel gaps</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Storytelling & Brand Narrative */}
          <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              📖 Storytelling & Brand Narrative
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-orange-300 mb-4">The Hero&apos;s Journey Framework</h3>
                <p className="text-gray-300 mb-4">
                  Áp dụng storytelling framework để tạo emotional connection với audience.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-red-500/10 rounded-lg p-4">
                    <h4 className="text-red-300 font-semibold mb-3">📍 The Setup</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li>• <strong>Hero:</strong> Your customer</li>
                      <li>• <strong>Problem:</strong> Pain point they face</li>
                      <li>• <strong>Stakes:</strong> What happens if not solved</li>
                      <li>• <strong>Guide:</strong> Your brand as mentor</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-500/10 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-3">⚔️ The Conflict</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li>• <strong>Challenges:</strong> Obstacles to overcome</li>
                      <li>• <strong>Solutions:</strong> Your product/service</li>
                      <li>• <strong>Transformation:</strong> Before vs after</li>
                      <li>• <strong>Success:</strong> Achieved outcome</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-500/10 rounded-lg p-4">
                    <h4 className="text-green-300 font-semibold mb-3">🏆 The Resolution</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li>• <strong>Victory:</strong> Problem solved</li>
                      <li>• <strong>Wisdom:</strong> Lessons learned</li>
                      <li>• <strong>New Normal:</strong> Improved state</li>
                      <li>• <strong>Call to Action:</strong> Join the journey</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-orange-300 mb-4">Emotional Triggers in Content</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-purple-500/10 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-2">😱</div>
                    <h4 className="font-semibold text-purple-300 text-sm">Fear</h4>
                    <p className="text-xs text-gray-400 mt-1">FOMO, consequences</p>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-2">🚀</div>
                    <h4 className="font-semibold text-green-300 text-sm">Aspiration</h4>
                    <p className="text-xs text-gray-400 mt-1">Goals, success</p>
                  </div>
                  <div className="bg-blue-500/10 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-2">🤝</div>
                    <h4 className="font-semibold text-blue-300 text-sm">Belonging</h4>
                    <p className="text-xs text-gray-400 mt-1">Community, inclusion</p>
                  </div>
                  <div className="bg-yellow-500/10 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-2">😄</div>
                    <h4 className="font-semibold text-yellow-300 text-sm">Joy</h4>
                    <p className="text-xs text-gray-400 mt-1">Humor, surprise</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Content Distribution */}
          <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              📡 Content Distribution Strategy
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-orange-300 mb-4">PESO Model Framework</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-green-500/10 rounded-lg p-4">
                    <h4 className="text-green-300 font-semibold mb-3">💰 Paid Media</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li>• Social media ads</li>
                      <li>• Google Ads</li>
                      <li>• Sponsored content</li>
                      <li>• Influencer partnerships</li>
                      <li>• Native advertising</li>
                    </ul>
                    <div className="mt-3 p-2 bg-green-500/20 rounded text-xs text-green-200">
                      <strong>Best for:</strong> Quick reach, targeting specific audiences
                    </div>
                  </div>
                  
                  <div className="bg-blue-500/10 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-3">📺 Earned Media</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li>• Press coverage</li>
                      <li>• User-generated content</li>
                      <li>• Social shares</li>
                      <li>• Reviews & testimonials</li>
                      <li>• Word-of-mouth</li>
                    </ul>
                    <div className="mt-3 p-2 bg-blue-500/20 rounded text-xs text-blue-200">
                      <strong>Best for:</strong> Credibility, trust building
                    </div>
                  </div>
                  
                  <div className="bg-purple-500/10 rounded-lg p-4">
                    <h4 className="text-purple-300 font-semibold mb-3">📱 Shared Media</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li>• Social media posts</li>
                      <li>• Community engagement</li>
                      <li>• User interactions</li>
                      <li>• Brand mentions</li>
                      <li>• Hashtag campaigns</li>
                    </ul>
                    <div className="mt-3 p-2 bg-purple-500/20 rounded text-xs text-purple-200">
                      <strong>Best for:</strong> Engagement, community building
                    </div>
                  </div>
                  
                  <div className="bg-orange-500/10 rounded-lg p-4">
                    <h4 className="text-orange-300 font-semibold mb-3">🏠 Owned Media</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li>• Company blog</li>
                      <li>• Website content</li>
                      <li>• Email newsletters</li>
                      <li>• Podcasts</li>
                      <li>• YouTube channel</li>
                    </ul>
                    <div className="mt-3 p-2 bg-orange-500/20 rounded text-xs text-orange-200">
                      <strong>Best for:</strong> Full control, long-term value
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-orange-300 mb-4">Content Repurposing Strategy</h3>
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-orange-400 font-mono mb-2">1 Piece of Content → 10+ Formats:</h4>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div>
                      <strong className="text-yellow-400">Original: Blog Post (2000 words)</strong>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 ml-4">
                        <div>
                          <strong className="text-blue-400">Social Media:</strong>
                          <ul className="ml-4 space-y-1 text-xs">
                            <li>• 5 Instagram carousel posts</li>
                            <li>• 10 Twitter threads</li>
                            <li>• 3 LinkedIn articles</li>
                            <li>• TikTok educational series</li>
                          </ul>
                        </div>
                        <div>
                          <strong className="text-green-400">Other Formats:</strong>
                          <ul className="ml-4 space-y-1 text-xs">
                            <li>• Podcast episode script</li>
                            <li>• YouTube video outline</li>
                            <li>• Infographic design</li>
                            <li>• Email course material</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Practical Exercises */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">🛠️ Bài Tập Thực Hành</h2>
          <div className="space-y-6">
            {lesson.exercises.map((exercise, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-orange-300 mb-4">
                  Bài tập {index + 1}: {exercise.title}
                </h3>
                <p className="text-gray-300 mb-4">{exercise.description}</p>
                
                <div className="bg-blue-500/10 rounded-lg p-4 mb-4">
                  <h4 className="text-blue-300 font-medium mb-2">📝 Yêu cầu:</h4>
                  <ul className="text-gray-300 space-y-1">
                    {exercise.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <details className="bg-orange-500/10 rounded-lg p-4">
                  <summary className="text-orange-300 font-medium cursor-pointer mb-2">
                    💡 Gợi ý giải
                  </summary>
                  <div className="text-gray-300 mt-2 whitespace-pre-line">
                    {exercise.solution}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">📊 Case Studies</h2>
          <div className="space-y-6">
            {lesson.caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-orange-300 mb-4">{caseStudy.title}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-yellow-300 mb-2">🎯 Challenge:</h4>
                    <p className="text-gray-300 text-sm">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-300 mb-2">💡 Solution:</h4>
                    <p className="text-gray-300 text-sm">{caseStudy.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-300 mb-2">📈 Results:</h4>
                    <p className="text-gray-300 text-sm">{caseStudy.results}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-300 mb-2">🔍 Key Insights:</h4>
                    <ul className="space-y-1">
                      {caseStudy.insights.map((insight, insightIndex) => (
                        <li key={insightIndex} className="text-gray-300 text-sm flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl p-8 border border-orange-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">🎉 Hoàn thành bài học!</h2>
            <p className="text-gray-300 mb-6">
              Bạn đã master content marketing strategy. 
              Tiếp theo, học SEO & Search Marketing để tăng organic traffic và visibility.
            </p>
            {navConfig.next && (
              <a 
                href={navConfig.next.href}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {navConfig.next.title} →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
