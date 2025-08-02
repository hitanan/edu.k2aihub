import { mentalHealthLessons } from '@/data/mental-health-tech';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PageProps } from '@/types';

export async function generateStaticParams() {
  return mentalHealthLessons.map((lesson) => ({
    lessonId: lesson.id,
  }))
}

export default async function MentalHealthLessonPage({ params }: PageProps) {
  const { lessonId } = await params;
  const lesson = mentalHealthLessons.find(l => l.id === lessonId);
  
  if (!lesson) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-emerald-600">Home</Link>
          <span>/</span>
          <Link href="/learning" className="hover:text-emerald-600">Learning</Link>
          <span>/</span>
          <Link href="/learning/mental-health-tech" className="hover:text-emerald-600">Mental Health Tech</Link>
          <span>/</span>
          <span className="text-emerald-600">{lesson.title}</span>
        </nav>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="relative h-64 md:h-80">
            <Image
              src={lesson.imageUrl || 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop'}
              alt={lesson.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/80 to-teal-600/80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{lesson.title}</h1>
                <p className="text-xl opacity-90 max-w-3xl">{lesson.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lesson Info */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold text-gray-800">Duration</span>
            </div>
            <p className="text-gray-600">{lesson.duration}</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="font-semibold text-gray-800">Difficulty</span>
            </div>
            <p className="text-gray-600">{lesson.difficulty}</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="font-semibold text-gray-800">Wellness Impact</span>
            </div>
            <p className="text-gray-600">{lesson.wellnessImpact}</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold text-gray-800">Applications</span>
            </div>
            <p className="text-gray-600">{lesson.realWorldApplications.length}+ Use Cases</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Video */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Video Tutorial</h2>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src={lesson.videoUrl.replace('watch?v=', 'embed/')}
                  title={lesson.title}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Learning Objectives */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Learning Objectives</h2>
              <ul className="space-y-3">
                {lesson.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <span className="text-emerald-600 text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exercises */}
            {lesson.exercises.map((exercise, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">{exercise.title}</h2>
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                    {exercise.difficulty}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6">{exercise.description}</p>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Requirements:</h3>
                  <ul className="space-y-2">
                    {exercise.requirements.map((req, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Implementation Guide:</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <pre className="whitespace-pre-wrap text-sm text-gray-700 overflow-x-auto">
                      {exercise.solution}
                    </pre>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-semibold text-gray-800 mb-3">Expected Outcome:</h3>
                  <p className="text-gray-600">{exercise.expectedOutput}</p>
                </div>
              </div>
            ))}

            {/* Case Studies */}
            {lesson.caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Case Study: {caseStudy.title}</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Participant</h3>
                    <p className="text-gray-600 mb-4">{caseStudy.participant}</p>
                    
                    <h3 className="font-semibold text-gray-800 mb-2">Challenge</h3>
                    <p className="text-gray-600 mb-4">{caseStudy.challenge}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Solution</h3>
                    <p className="text-gray-600 mb-4">{caseStudy.solution}</p>
                    
                    <h3 className="font-semibold text-gray-800 mb-2">Results</h3>
                    <p className="text-gray-600">{caseStudy.results}</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold text-gray-800 mb-3">Key Insights</h3>
                  <ul className="space-y-2">
                    {caseStudy.insights.map((insight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-emerald-500 mr-2">💡</span>
                        <span className="text-gray-600">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Technologies Used</h3>
              <div className="space-y-2">
                {lesson.technologies.map((tech) => (
                  <div key={tech} className="bg-emerald-50 text-emerald-700 px-3 py-2 rounded-lg text-sm">
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Prerequisites */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Prerequisites</h3>
              <ul className="space-y-2">
                {lesson.prerequisites.map((prereq, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-emerald-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600 text-sm">{prereq}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Real-world Applications */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Real-world Applications</h3>
              <ul className="space-y-2">
                {lesson.realWorldApplications.map((application, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-teal-500 mr-2 mt-1">🌟</span>
                    <span className="text-gray-600 text-sm">{application}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Additional Resources</h3>
              <div className="space-y-3">
                {lesson.resources.map((resource, index) => (
                  <a 
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 border border-gray-200 rounded-lg hover:border-emerald-300 hover:bg-emerald-50 transition-colors"
                  >
                    <div className="font-medium text-gray-800">{resource.title}</div>
                    <div className="text-sm text-gray-600">{resource.description}</div>
                    <div className="text-xs text-emerald-600 mt-1 capitalize">{resource.type}</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Course Navigation</h3>
              <div className="space-y-3">
                {mentalHealthLessons.map((navLesson, index) => (
                  <Link
                    key={navLesson.id}
                    href={`/learning/mental-health-tech/${navLesson.id}`}
                    className={`block p-3 rounded-lg transition-colors ${
                      navLesson.id === lesson.id
                        ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                        : 'hover:bg-gray-50 text-gray-600'
                    }`}
                  >
                    <div className="font-medium">Bài {index + 1}</div>
                    <div className="text-sm">{navLesson.title.replace(/^Bài \d+: /, '')}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
