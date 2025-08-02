import { aiArtLessons } from '@/data/ai-art-creative-tech';
import Link from 'next/link';
import Image from 'next/image';

export default function AiArtCreativeTechPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-pink-100 rounded-full">
              <svg className="w-12 h-12 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">AI Art & Creative Technology</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Khám phá thế giới AI art generation với Midjourney, DALL-E, Stable Diffusion. Tạo stunning visuals, 
            videos, và creative content using cutting-edge artificial intelligence tools.
          </p>
        </div>

        {/* Course Overview Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-pink-500">
            <div className="text-3xl font-bold text-pink-600 mb-2">{aiArtLessons.length}</div>
            <div className="text-gray-600">Creative Lessons</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-purple-500">
            <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
            <div className="text-gray-600">AI Art Platforms</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-indigo-500">
            <div className="text-3xl font-bold text-indigo-600 mb-2">∞</div>
            <div className="text-gray-600">Creative Possibilities</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-violet-500">
            <div className="text-3xl font-bold text-violet-600 mb-2">Pro</div>
            <div className="text-gray-600">Artist Skills</div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Tại sao học AI Art?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Unlimited Creativity</h3>
              <p className="text-gray-600">
                Break creative boundaries với AI-powered art generation. Create anything you can imagine.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Rapid Production</h3>
              <p className="text-gray-600">
                Generate professional artwork trong minutes instead của hours. Scale creative output exponentially.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Commercial Value</h3>
              <p className="text-gray-600">
                Monetize AI art skills through freelancing, NFTs, marketing services, và creative entrepreneurship.
              </p>
            </div>
          </div>
        </div>

        {/* AI Art Tools & Platforms */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl shadow-xl p-8 mb-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">AI Art Tools & Platforms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="font-semibold mb-3">Image Generation</h3>
              <ul className="space-y-2 text-sm">
                <li>• Midjourney (Premium AI art)</li>
                <li>• DALL-E 3 (OpenAI)</li>
                <li>• Stable Diffusion (Open-source)</li>
                <li>• Adobe Firefly</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="font-semibold mb-3">Video Generation</h3>
              <ul className="space-y-2 text-sm">
                <li>• RunwayML (AI video)</li>
                <li>• Pika Labs (Text-to-video)</li>
                <li>• Stable Video Diffusion</li>
                <li>• Synthesia (AI avatars)</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="font-semibold mb-3">Design Tools</h3>
              <ul className="space-y-2 text-sm">
                <li>• Adobe Creative Suite</li>
                <li>• Figma AI integration</li>
                <li>• Canva Magic Studio</li>
                <li>• Photoshop AI features</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="font-semibold mb-3">3D & Animation</h3>
              <ul className="space-y-2 text-sm">
                <li>• Spline 3D AI</li>
                <li>• Blender AI add-ons</li>
                <li>• Luma AI (3D capture)</li>
                <li>• Kaedim (3D modeling)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Course Curriculum</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {aiArtLessons.map((lesson, index) => (
              <div key={lesson.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={lesson.imageUrl || 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=400&fit=crop'}
                    alt={lesson.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Bài {index + 1}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {lesson.difficulty}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="flex items-center text-gray-500 text-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {lesson.duration}
                    </span>
                    <span className="flex items-center text-gray-500 text-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                      </svg>
                      {lesson.artType}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{lesson.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{lesson.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">AI Tools:</h4>
                    <div className="flex flex-wrap gap-2">
                      {lesson.tools.slice(0, 3).map((tool) => (
                        <span key={tool} className="bg-pink-100 text-pink-700 px-2 py-1 rounded text-xs">
                          {tool}
                        </span>
                      ))}
                      {lesson.tools.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          +{lesson.tools.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Learning Outcomes:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {lesson.objectives.slice(0, 2).map((objective, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-pink-500 mr-2">•</span>
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href={`/learning/ai-art-creative-tech/${lesson.id}`}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 font-medium"
                  >
                    Bắt đầu học
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-pink-600 to-purple-700 rounded-2xl shadow-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create AI Masterpieces?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands của artists revolutionizing creative work với artificial intelligence tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/learning/ai-art-creative-tech/ai-image-generation-fundamentals"
              className="bg-white text-pink-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
            >
              Start Creating Now
            </Link>
            <Link
              href="/projects"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors duration-200 font-semibold"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
