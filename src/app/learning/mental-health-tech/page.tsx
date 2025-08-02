import { mentalHealthLessons } from '@/data/mental-health-tech';
import Link from 'next/link';
import Image from 'next/image';

export default function MentalHealthTechPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-emerald-100 rounded-full">
              <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Mental Health Technology</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Khám phá ứng dụng technology trong mental health care. Học cách sử dụng AI, digital wellness tools, 
            và therapeutic platforms để improve psychological wellbeing và support mental health recovery.
          </p>
        </div>

        {/* Course Overview Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-emerald-500">
            <div className="text-3xl font-bold text-emerald-600 mb-2">{mentalHealthLessons.length}</div>
            <div className="text-gray-600">Comprehensive Lessons</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-teal-500">
            <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
            <div className="text-gray-600">AI Support Available</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-cyan-500">
            <div className="text-3xl font-bold text-cyan-600 mb-2">120+</div>
            <div className="text-gray-600">Mental Health Tools</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-green-500">
            <div className="text-3xl font-bold text-green-600 mb-2">Clinical</div>
            <div className="text-gray-600">Evidence-Based</div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Tại sao học Mental Health Technology?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Wellbeing Enhancement</h3>
              <p className="text-gray-600">
                Improve personal mental health với evidence-based digital tools và AI-powered interventions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Professional Skills</h3>
              <p className="text-gray-600">
                Develop expertise trong digital mental health tools for healthcare, counseling, và wellness careers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Innovation Impact</h3>
              <p className="text-gray-600">
                Build cutting-edge mental health technologies making psychological care more accessible globally.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl shadow-xl p-8 mb-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Technology Stack & Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="font-semibold mb-3">AI & Machine Learning</h3>
              <ul className="space-y-2 text-sm">
                <li>• Natural Language Processing</li>
                <li>• Sentiment Analysis</li>
                <li>• Predictive Analytics</li>
                <li>• Computer Vision</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="font-semibold mb-3">Digital Wellness Apps</h3>
              <ul className="space-y-2 text-sm">
                <li>• Meditation Platforms</li>
                <li>• Mood Tracking</li>
                <li>• Sleep Monitoring</li>
                <li>• Stress Management</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="font-semibold mb-3">Therapy Platforms</h3>
              <ul className="space-y-2 text-sm">
                <li>• Online Counseling</li>
                <li>• Chatbot Therapy</li>
                <li>• VR Therapy</li>
                <li>• Group Support</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="font-semibold mb-3">Wearable Integration</h3>
              <ul className="space-y-2 text-sm">
                <li>• Heart Rate Variability</li>
                <li>• Activity Tracking</li>
                <li>• Sleep Analysis</li>
                <li>• Biometric Monitoring</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Course Curriculum</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {mentalHealthLessons.map((lesson, index) => (
              <div key={lesson.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={lesson.imageUrl || 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop'}
                    alt={lesson.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      {lesson.wellnessImpact}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{lesson.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{lesson.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {lesson.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs">
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
                          <span className="text-emerald-500 mr-2">•</span>
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href={`/learning/mental-health-tech/${lesson.id}`}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 font-medium"
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
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl shadow-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Mental Health Care?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands của professionals using technology để improve mental health outcomes worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/learning/mental-health-tech/digital-wellness-fundamentals"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
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
