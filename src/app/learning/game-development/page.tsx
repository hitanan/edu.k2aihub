import { gameDevLessons } from '@/data/game-development';
import Link from 'next/link';
import Image from 'next/image';

export default function GameDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-purple-100 rounded-full">
              <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9-2h10a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2a2 2 0 012-2z" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Game Development & Interactive Media</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Khám phá thế giới game development từ concept đến production. Học Unity, Unreal Engine, game design principles, 
            và interactive media technology để tạo ra những trải nghiệm gaming đỉnh cao.
          </p>
        </div>

        {/* Course Overview Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-purple-500">
            <div className="text-3xl font-bold text-purple-600 mb-2">{gameDevLessons.length}</div>
            <div className="text-gray-600">Game Lessons</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-indigo-500">
            <div className="text-3xl font-bold text-indigo-600 mb-2">5+</div>
            <div className="text-gray-600">Game Engines</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-pink-500">
            <div className="text-3xl font-bold text-pink-600 mb-2">15+</div>
            <div className="text-gray-600">Projects Built</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-violet-500">
            <div className="text-3xl font-bold text-violet-600 mb-2">Industry</div>
            <div className="text-gray-600">Ready Skills</div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Tại sao học Game Development?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Creative Expression</h3>
              <p className="text-gray-600">
                Transform ideas thành interactive experiences và build immersive digital worlds.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Skills</h3>
              <p className="text-gray-600">
                Master programming, 3D graphics, physics simulation, và advanced game engine development.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Industry Opportunities</h3>
              <p className="text-gray-600">
                Access lucrative careers trong gaming, VR/AR, simulation, và entertainment technology.
              </p>
            </div>
          </div>
        </div>

        {/* Game Engines & Tools */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl shadow-xl p-8 mb-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Game Engines & Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="font-semibold mb-3">Unity Engine</h3>
              <ul className="space-y-2 text-sm">
                <li>• 2D/3D Game Development</li>
                <li>• Cross-platform Publishing</li>
                <li>• Visual Scripting</li>
                <li>• Asset Store Integration</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="font-semibold mb-3">Unreal Engine</h3>
              <ul className="space-y-2 text-sm">
                <li>• AAA Game Production</li>
                <li>• Blueprint Visual Scripting</li>
                <li>• Advanced Graphics</li>
                <li>• VR/AR Development</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="font-semibold mb-3">Design Tools</h3>
              <ul className="space-y-2 text-sm">
                <li>• Blender 3D Modeling</li>
                <li>• Photoshop Texturing</li>
                <li>• Maya Animation</li>
                <li>• Substance Painter</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="font-semibold mb-3">Programming</h3>
              <ul className="space-y-2 text-sm">
                <li>• C# (Unity)</li>
                <li>• C++ (Unreal/Custom)</li>
                <li>• JavaScript (Web Games)</li>
                <li>• Python (Tools/AI)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Course Curriculum</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {gameDevLessons.map((lesson, index) => (
              <div key={lesson.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={lesson.imageUrl || 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=400&fit=crop'}
                    alt={lesson.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9-2h10a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2a2 2 0 012-2z" />
                      </svg>
                      <span className="flex flex-wrap gap-1 mb-4">
                        {lesson.gameGenres.map((topic, topicIndex) => (
                            <span key={topicIndex} className="bg-purple-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                            {topic}
                            </span>
                        ))}
                    </span>
                    </span>
                    
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{lesson.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{lesson.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {lesson.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {lesson.technologies.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          +{lesson.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Learning Outcomes:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {lesson.objectives.slice(0, 2).map((objective, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href={`/learning/game-development/${lesson.id}`}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-200 font-medium"
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
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Amazing Games?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands của developers creating next-generation games và interactive experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/learning/game-development/game-design-fundamentals"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
            >
              Start Learning Now
            </Link>
            <Link
              href="/projects"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors duration-200 font-semibold"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
