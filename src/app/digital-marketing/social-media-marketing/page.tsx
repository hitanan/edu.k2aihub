import type { Metadata } from "next";
import Image from 'next/image';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { digitalMarketingLessons } from '@/data/digital-marketing';
import { getModuleNavigation } from '@/utils/moduleNavigation';

export const metadata: Metadata = {
  title: createTitle("Social Media Marketing - Chiến Lược Marketing Mạng Xã Hội"),
  description: createDescription("Master social media marketing: Facebook, Instagram, TikTok, LinkedIn strategies. Học cách tạo content viral và build community engagement."),
  keywords: createKeywords(["social media marketing", "Facebook ads", "Instagram marketing", "TikTok strategy", "LinkedIn business", "content creation"]),
};

const lesson = digitalMarketingLessons.find(l => l.id === 'social-media-marketing')!;
const imageUrl = "/api/placeholder/800/400";

export default function SocialMediaMarketingPage() {
  const navConfig = getModuleNavigation('digital-marketing', 'social-media-marketing');

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900">
      {/* Navigation */}
      <div className="bg-black/20 sticky top-0 z-50 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <a href="/digital-marketing" className="text-pink-400 hover:text-pink-300 transition-colors">
                ← Digital Marketing
              </a>
              <span className="text-gray-500">/</span>
              <span className="text-white font-medium">{lesson.title}</span>
            </div>
            
            <div className="flex items-center space-x-4">
              {navConfig.prev && (
                <a 
                  href={navConfig.prev.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  ← {navConfig.prev.title}
                </a>
              )}
              {navConfig.next && (
                <a 
                  href={navConfig.next.href}
                  className="text-sm bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  {navConfig.next.title} →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">📱</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {lesson.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {lesson.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-pink-500/20 text-pink-200 px-4 py-2 rounded-full">
                ⏱️ {lesson.duration}
              </span>
              <span className="bg-purple-500/20 text-purple-200 px-4 py-2 rounded-full">
                🎯 {lesson.difficulty}
              </span>
              <span className="bg-indigo-500/20 text-indigo-200 px-4 py-2 rounded-full">
                📊 {lesson.businessImpact}
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
                  <span className="text-pink-400 mr-3 mt-1">✓</span>
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
            alt="Social Media Marketing Strategy"
            width={800} 
            height={400}
            className="w-full h-64 md:h-80 object-cover rounded-2xl"
          />
        </div>

        {/* Prerequisites */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">📋 Kiến Thức Cần Thiết</h2>
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6">
            <ul className="space-y-2">
              {lesson.prerequisites.map((prereq, index) => (
                <li key={index} className="flex items-start text-yellow-200">
                  <span className="text-yellow-400 mr-3">•</span>
                  {prereq}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Core Content Sections */}
        <div className="space-y-12">
          {/* Section 1: Platform Strategies */}
          <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              📱 Platform-Specific Strategies
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-500/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
                  📘 Facebook Marketing
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• <strong>Audience:</strong> 25-54 tuổi, B2B và B2C</li>
                  <li>• <strong>Content Type:</strong> Video, carousel ads, events</li>
                  <li>• <strong>Best Practices:</strong> Community building, groups</li>
                  <li>• <strong>Ad Formats:</strong> Lead ads, conversion campaigns</li>
                  <li>• <strong>Targeting:</strong> Detailed demographics, interests</li>
                </ul>
                
                <div className="mt-4 p-3 bg-blue-500/20 rounded">
                  <h4 className="font-semibold text-blue-200 mb-2">💡 Pro Tips:</h4>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• Post khi 1-3pm và 7-9pm cho engagement cao nhất</li>
                    <li>• Use Facebook Pixel để retargeting</li>
                    <li>• Tạo lookalike audiences từ best customers</li>
                  </ul>
                </div>
              </div>

              <div className="bg-pink-500/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-pink-300 mb-4 flex items-center">
                  📷 Instagram Marketing
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• <strong>Audience:</strong> 18-34 tuổi, visual-focused</li>
                  <li>• <strong>Content Type:</strong> Stories, Reels, IGTV</li>
                  <li>• <strong>Best Practices:</strong> High-quality visuals, hashtags</li>
                  <li>• <strong>Features:</strong> Shopping tags, Instagram Shop</li>
                  <li>• <strong>Engagement:</strong> User-generated content, influencers</li>
                </ul>
                
                <div className="mt-4 p-3 bg-pink-500/20 rounded">
                  <h4 className="font-semibold text-pink-200 mb-2">💡 Pro Tips:</h4>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• Use 3-5 hashtags trong Stories, 5-10 trong posts</li>
                    <li>• Reels algorithm ưu tiên original content</li>
                    <li>• Instagram Shopping tăng conversion 30%</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-500/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-300 mb-4 flex items-center">
                  🎵 TikTok Strategy
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• <strong>Audience:</strong> Gen Z, 16-24 tuổi primarily</li>
                  <li>• <strong>Content Type:</strong> Short-form video, trending audio</li>
                  <li>• <strong>Algorithm:</strong> Completion rate, shares, comments</li>
                  <li>• <strong>Trends:</strong> Challenges, effects, sounds</li>
                  <li>• <strong>E-commerce:</strong> TikTok Shop, live selling</li>
                </ul>
                
                <div className="mt-4 p-3 bg-red-500/20 rounded">
                  <h4 className="font-semibold text-red-200 mb-2">💡 Pro Tips:</h4>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• Hook viewers trong first 3 seconds</li>
                    <li>• Use trending sounds và hashtags</li>
                    <li>• Post 1-4 times per day cho best reach</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-600/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
                  💼 LinkedIn B2B Marketing
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• <strong>Audience:</strong> Professionals, decision makers</li>
                  <li>• <strong>Content Type:</strong> Industry insights, thought leadership</li>
                  <li>• <strong>Features:</strong> LinkedIn Pages, Employee advocacy</li>
                  <li>• <strong>Lead Gen:</strong> LinkedIn Lead Gen Forms</li>
                  <li>• <strong>Networking:</strong> Personal branding, connections</li>
                </ul>
                
                <div className="mt-4 p-3 bg-blue-600/20 rounded">
                  <h4 className="font-semibold text-blue-200 mb-2">💡 Pro Tips:</h4>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• Post Tuesday-Thursday 8-10am</li>
                    <li>• Native video gets 5x more engagement</li>
                    <li>• Personal profiles outperform company pages</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Content Creation */}
          <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              🎨 Content Creation Framework
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-pink-300 mb-4">Content Pillars Strategy</h3>
                <p className="text-gray-300 mb-4">
                  Xây dựng content strategy dựa trên 4 pillars chính để maintain consistency và engagement.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-green-500/10 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🎓</div>
                    <h4 className="font-semibold text-green-300 mb-2">Educational</h4>
                    <p className="text-xs text-gray-400">Tips, tutorials, how-tos</p>
                    <div className="text-sm text-green-400 mt-2">40%</div>
                  </div>
                  <div className="bg-blue-500/10 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🎬</div>
                    <h4 className="font-semibold text-blue-300 mb-2">Entertainment</h4>
                    <p className="text-xs text-gray-400">Memes, behind-scenes, fun</p>
                    <div className="text-sm text-blue-400 mt-2">30%</div>
                  </div>
                  <div className="bg-purple-500/10 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">💼</div>
                    <h4 className="font-semibold text-purple-300 mb-2">Promotional</h4>
                    <p className="text-xs text-gray-400">Products, services, offers</p>
                    <div className="text-sm text-purple-400 mt-2">20%</div>
                  </div>
                  <div className="bg-orange-500/10 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">👥</div>
                    <h4 className="font-semibold text-orange-300 mb-2">Community</h4>
                    <p className="text-xs text-gray-400">User content, testimonials</p>
                    <div className="text-sm text-orange-400 mt-2">10%</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-pink-300 mb-4">Viral Content Formula</h3>
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-pink-400 font-mono mb-2">Viral Content = Hook + Value + Emotion + Call-to-Action</h4>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div>
                      <strong className="text-yellow-400">Hook (First 3 seconds):</strong>
                      <ul className="ml-4 mt-1 space-y-1">
                        <li>• &ldquo;You&rsquo;re doing [X] wrong&rdquo; approach</li>
                        <li>• &ldquo;Here&rsquo;s what nobody tells you about...&rdquo;</li>
                        <li>• Visual pattern interrupt</li>
                        <li>• Surprising statistics or facts</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-blue-400">Value (Educational component):</strong>
                      <ul className="ml-4 mt-1 space-y-1">
                        <li>• Actionable tips hoặc tutorials</li>
                        <li>• Industry insights không có elsewhere</li>
                        <li>• Problem-solving content</li>
                        <li>• Time-saving hacks</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-green-400">Emotion (Psychological triggers):</strong>
                      <ul className="ml-4 mt-1 space-y-1">
                        <li>• Fear of missing out (FOMO)</li>
                        <li>• Aspiration và inspiration</li>
                        <li>• Humor và entertainment</li>
                        <li>• Social proof và validation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Analytics & Optimization */}
          <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              📊 Analytics & Performance Optimization
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-pink-300 mb-4">Key Performance Indicators (KPIs)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-blue-500/10 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-3">📈 Awareness Metrics</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Reach:</strong> Unique users saw content</li>
                      <li>• <strong>Impressions:</strong> Total content views</li>
                      <li>• <strong>Brand mention:</strong> Organic brand discussions</li>
                      <li>• <strong>Share of voice:</strong> vs competitors</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-500/10 rounded-lg p-4">
                    <h4 className="text-green-300 font-semibold mb-3">💬 Engagement Metrics</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Engagement rate:</strong> (Likes+Comments+Shares)/Reach</li>
                      <li>• <strong>Comments quality:</strong> Meaningful interactions</li>
                      <li>• <strong>Save rate:</strong> Content bookmarked</li>
                      <li>• <strong>Share rate:</strong> Content redistribution</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-500/10 rounded-lg p-4">
                    <h4 className="text-purple-300 font-semibold mb-3">💰 Conversion Metrics</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Click-through rate:</strong> Link clicks/Impressions</li>
                      <li>• <strong>Conversion rate:</strong> Actions taken/Clicks</li>
                      <li>• <strong>Cost per acquisition:</strong> Ad spend/Conversions</li>
                      <li>• <strong>ROI:</strong> Revenue/Investment</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-pink-300 mb-4">A/B Testing Framework</h3>
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-pink-400 font-mono mb-2">Social Media A/B Testing Checklist:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <div>
                      <strong className="text-yellow-400">Content Variables:</strong>
                      <ul className="ml-4 mt-1 space-y-1">
                        <li>• Headlines và captions</li>
                        <li>• Visual formats (photo vs video vs carousel)</li>
                        <li>• Call-to-action buttons</li>
                        <li>• Hashtag strategies</li>
                        <li>• Posting times và frequency</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-blue-400">Testing Process:</strong>
                      <ul className="ml-4 mt-1 space-y-1">
                        <li>• Define hypothesis và success metrics</li>
                        <li>• Split audience randomly (50/50)</li>
                        <li>• Run test for statistical significance</li>
                        <li>• Analyze results và implement winner</li>
                        <li>• Document learnings for future tests</li>
                      </ul>
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
                <h3 className="text-xl font-semibold text-pink-300 mb-4">
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

                <details className="bg-pink-500/10 rounded-lg p-4">
                  <summary className="text-pink-300 font-medium cursor-pointer mb-2">
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
                <h3 className="text-xl font-semibold text-pink-300 mb-4">{caseStudy.title}</h3>
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

        {/* Tools & Resources */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">🛠️ Tools & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-pink-300 mb-4">📊 Analytics Tools</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• <strong>Native Analytics:</strong> Facebook Insights, Instagram Analytics</li>
                <li>• <strong>Third-party:</strong> Hootsuite, Sprout Social, Buffer</li>
                <li>• <strong>Advanced:</strong> Socialbakers, Brandwatch</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-pink-300 mb-4">🎨 Content Creation</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• <strong>Design:</strong> Canva, Adobe Creative Suite</li>
                <li>• <strong>Video:</strong> CapCut, InShot, Adobe Premiere</li>
                <li>• <strong>Planning:</strong> Later, Planoly, Creator Studio</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-2xl p-8 border border-pink-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">🎉 Hoàn thành bài học!</h2>
            <p className="text-gray-300 mb-6">
              Bạn đã master social media marketing strategies. 
              Tiếp theo, học Content Marketing để tạo nội dung có giá trị và thu hút khách hàng.
            </p>
            {navConfig.next && (
              <a 
                href={navConfig.next.href}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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
