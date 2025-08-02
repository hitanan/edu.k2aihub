import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { digitalMarketingLessons } from '@/data/digital-marketing';
import YouTubePlayer from '@/components/YouTubePlayer';
import ModuleNavigation from '@/components/ModuleNavigation';
import { getModuleNavigation, getNavigationConfig } from '@/utils/moduleNavigation';

export const metadata: Metadata = {
  title: createTitle("Bài 1: Cơ Bản Digital Marketing - Digital Marketing & Creator Economy"),
  description: createDescription("Học nền tảng Digital Marketing từ cơ bản. Hiểu các kênh marketing, xây dựng buyer persona và customer journey map hiệu quả"),
  keywords: createKeywords(["digital marketing cơ bản", "buyer persona", "customer journey", "marketing strategy", "digital channels"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Bài 1: Cơ Bản Digital Marketing"),
    description: createDescription("Nền tảng Digital Marketing toàn diện từ zero đến hero với case studies thực tế"),
    type: "website",
  },
};

export default function DigitalMarketingFundamentalsLesson() {
  const lesson = digitalMarketingLessons.find(l => l.id === 'digital-marketing-fundamentals');
  
  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const navigation = getModuleNavigation('digital-marketing', 'digital-marketing-fundamentals');
  const navConfig = navigation ? getNavigationConfig(navigation, '/digital-marketing') : null;

  const lessonContent = {
    title: lesson.title,
    description: lesson.description,
    duration: lesson.duration,
    difficulty: lesson.difficulty,
    objectives: lesson.objectives,
    tools: lesson.tools,
    exercises: lesson.exercises,
    caseStudies: lesson.caseStudies
  };

  const marketingChannels = [
    {
      title: 'Search Engine Marketing',
      description: 'SEO và Google Ads để tăng visibility trên search engines',
      icon: '🔍',
      examples: ['Google Search Ads', 'SEO content optimization', 'Local search optimization']
    },
    {
      title: 'Social Media Marketing',
      description: 'Xây dựng community và engagement trên các nền tảng xã hội',
      icon: '📱',
      examples: ['Facebook Ads', 'Instagram Stories', 'TikTok campaigns', 'LinkedIn networking']
    },
    {
      title: 'Content Marketing',
      description: 'Tạo nội dung hữu ích để thu hút và giáo dục khách hàng',
      icon: '📝',
      examples: ['Blog posts', 'Video tutorials', 'Infographics', 'Podcasts']
    },
    {
      title: 'Email Marketing',
      description: 'Nurture leads và maintain customer relationships qua email',
      icon: '📧',
      examples: ['Newsletter campaigns', 'Automated sequences', 'Product announcements']
    },
    {
      title: 'Affiliate & Influencer',
      description: 'Leverage networks và partnerships để expand reach',
      icon: '🤝',
      examples: ['Influencer collaborations', 'Affiliate programs', 'Brand partnerships']
    },
    {
      title: 'Analytics & Optimization',
      description: 'Measure, analyze và optimize marketing performance',
      icon: '📊',
      examples: ['Google Analytics', 'A/B testing', 'Conversion tracking', 'ROI analysis']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/digital-marketing" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
              ← Quay lại Digital Marketing
            </Link>
          </div>
          
          <div className="text-center">
            {lesson.imageUrl && (
              <div className="mb-6">
                <Image 
                  src={lesson.imageUrl} 
                  alt={lesson.title}
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-2xl object-cover mx-auto shadow-lg border border-white/20"
                />
              </div>
            )}
            <div className="text-5xl mb-4">📱</div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {lessonContent.title}
            </h1>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              {lessonContent.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full">
                ⏱️ {lessonContent.duration}
              </span>
              <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full">
                🎯 {lessonContent.difficulty}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Objectives */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🎯 Mục Tiêu Bài Học
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lessonContent.objectives.map((objective, index) => (
              <li key={index} className="flex items-start text-gray-300">
                <span className="text-blue-400 mr-3 mt-1">✓</span>
                {objective}
              </li>
            ))}
          </ul>
        </div>

        {/* Video Tutorial */}
        {lesson.videoUrl && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              🎬 Video Hướng Dẫn
            </h2>
            <YouTubePlayer 
              videoUrl={lesson.videoUrl} 
              title={`${lesson.title} - Video Tutorial`}
            />
          </div>
        )}

        {/* Digital Marketing Channels */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            📊 Các Kênh Digital Marketing Chính
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingChannels.map((channel, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-4">{channel.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{channel.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-blue-300 font-semibold text-sm">Ví dụ:</h4>
                  <ul className="space-y-1">
                    {channel.examples.map((example, idx) => (
                      <li key={idx} className="text-gray-400 text-xs flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🛠️ Tools & Platforms Cần Thiết
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {lessonContent.tools.map((tool, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="text-lg font-medium text-white">{tool}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Practical Exercises */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🧩 Bài Tập Thực Hành
          </h2>
          
          <div className="space-y-6">
            {lessonContent.exercises.map((exercise, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-white">{exercise.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    exercise.difficulty === 'Cơ bản' ? 'bg-green-500/20 text-green-200' :
                    exercise.difficulty === 'Trung bình' ? 'bg-yellow-500/20 text-yellow-200' :
                    'bg-red-500/20 text-red-200'
                  }`}>
                    {exercise.difficulty}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{exercise.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-2">📋 Yêu cầu:</h4>
                    <ul className="space-y-1">
                      {exercise.requirements.map((req, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                    <h4 className="text-yellow-300 font-semibold mb-2">💡 Gợi ý:</h4>
                    <ul className="space-y-1">
                      {exercise.hints.map((hint, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <span className="text-yellow-400 mr-2">•</span>
                          {hint}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <h4 className="text-green-300 font-semibold mb-2">🎯 Kết quả mong đợi:</h4>
                  <p className="text-gray-300 text-sm">{exercise.expectedOutput}</p>
                </div>

                {/* Solution Preview */}
                <details className="mt-4">
                  <summary className="text-purple-300 cursor-pointer font-semibold hover:text-purple-200">
                    📋 Xem giải pháp mẫu →
                  </summary>
                  <div className="mt-4 bg-gray-900/50 rounded-xl overflow-hidden border border-gray-700">
                    <div className="bg-gray-800/50 px-4 py-2 border-b border-gray-700">
                      <span className="text-green-400 font-mono text-sm">{exercise.title.toLowerCase().replace(/ /g, '_')}.md</span>
                    </div>
                    <div className="p-4">
                      <pre className="text-gray-300 text-sm leading-relaxed overflow-x-auto whitespace-pre-wrap">
                        {exercise.solution}
                      </pre>
                    </div>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        {lessonContent.caseStudies && lessonContent.caseStudies.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
              🏆 Case Studies Thực Tế
            </h2>
            
            <div className="space-y-6">
              {lessonContent.caseStudies.map((caseStudy, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl p-6 border border-purple-500/20">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">{caseStudy.title}</h3>
                    <span className="text-purple-300 font-medium">{caseStudy.company}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="text-red-300 font-semibold mb-2">🎯 Thách thức:</h4>
                      <p className="text-gray-300 text-sm">{caseStudy.challenge}</p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="text-blue-300 font-semibold mb-2">💡 Giải pháp:</h4>
                      <p className="text-gray-300 text-sm">{caseStudy.solution}</p>
                    </div>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-4">
                    <h4 className="text-green-300 font-semibold mb-2">📈 Kết quả:</h4>
                    <p className="text-gray-300 text-sm">{caseStudy.results}</p>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                    <h4 className="text-yellow-300 font-semibold mb-2">🧠 Insights:</h4>
                    <ul className="space-y-1">
                      {caseStudy.insights.map((insight, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <span className="text-yellow-400 mr-2">•</span>
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Real World Applications */}
        {lesson.realWorldApplications && lesson.realWorldApplications.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
              🌟 Ứng Dụng Thực Tế
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lesson.realWorldApplications.map((application, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
                  <div className="text-3xl mb-3 text-center">🚀</div>
                  <h3 className="text-lg font-bold text-white mb-3 text-center">Ứng dụng {index + 1}</h3>
                  <p className="text-gray-300 text-sm text-center">{application}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        {navConfig && (
          <ModuleNavigation navConfig={navConfig} />
        )}
      </div>
    </div>
  );
}
