import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig, BaseLessonData } from '@/components/learning/LessonPageTemplate'
import { greenTechLessons, GreenTechLesson } from '@/data/green-technology'
import { PageProps } from '@/types'
import { Palette } from 'lucide-react'

// Convert GreenTechLesson to BaseLessonData interface
function convertToLesson(gtLesson: GreenTechLesson): BaseLessonData {
  return {
    id: gtLesson.id,
    title: gtLesson.title,
    description: gtLesson.description,
    duration: gtLesson.duration,
    difficulty: gtLesson.difficulty,
    imageUrl: gtLesson.imageUrl || '/default-lesson.jpg',
    videoUrl: gtLesson.videoUrl,
    objectives: gtLesson.objectives,
    prerequisites: gtLesson.prerequisites || [],
    exercises: (gtLesson.exercises || []).map(ex => ({
      title: ex.title,
      description: ex.description,
      difficulty: ex.difficulty,
      materials: [],
      procedure: [],
      expectedResults:  '',
      solution: ex.solution || ''
    })),
    resources: (gtLesson.resources || []).map(res => ({
      title: res.title || 'Resource',
      url: res.url || '#',
      type: res.type || 'external'
    })),
    realWorldApplications: gtLesson.realWorldApplications || [],
    caseStudies: (gtLesson.caseStudies || []).map(cs => ({
      title: cs.title,
      organization: cs.company || 'Unknown Organization',
      problem: cs.challenge || 'Challenge not specified',
      solution: cs.solution,
      impact: cs.results || 'Impact not specified',
      innovations: cs.insights || []
    }))
  }
}

// Generate static params
export async function generateStaticParams() {
  const convertedLessons = greenTechLessons.map(convertToLesson)
  return generateLessonStaticParams(convertedLessons)
}

// Generate metadata
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  const convertedLessons = greenTechLessons.map(convertToLesson)
  return generateLessonMetadata(lessonId, convertedLessons)
}

// Page component
export default async function GreenTechnologyLessonPage({ params }: PageProps) {
  const { lessonId } = await params;
  // Convert lessons to base interface
  const convertedLessons = greenTechLessons.map(convertToLesson)
  const config: LessonPageConfig<BaseLessonData> = {
    moduleName: 'green-technology',
    moduleTitle: 'Green Technology & Sustainability', 
    modulePath: '/learning/green-technology',
    lessons: convertedLessons,
    primaryColor: 'emerald',
    secondaryColor: 'green', 
    gradientColors: 'from-green-900 via-emerald-900 to-teal-900',
    getFieldIcon: (field: string) => {
      switch (field) {
        case 'category': return <span className="w-5 h-5">🌱</span>
        case 'duration': return <span className="w-5 h-5">⏱️</span>
        case 'difficulty': return <span className="w-5 h-5">🎯</span>
        case 'tools': return <span className="w-5 h-5">🛠️</span>
        case 'environmentalImpact': return <span className="w-5 h-5">🌍</span>
        default: return <span className="w-5 h-5">🌿</span>
      }
    },
    getFieldValue: () => {
      // Return a generic field value for green technology
      return 'Sustainable Impact'
    },
    sidebarContent: (lesson) => (
      <div className="space-y-6">
        {/* Environmental Impact */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <h3 className="text-white font-semibold mb-3 flex items-center">
            🌍 Environmental Impact
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">CO2 Reduction</span>
              <span className="text-green-400 font-semibold">
                {Math.floor(Math.random() * 40 + 10)}%
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Energy Efficiency</span>
              <span className="text-emerald-400 font-semibold">
                +{Math.floor(Math.random() * 30 + 20)}%
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Cost Savings</span>
              <span className="text-teal-400 font-semibold">
                ${Math.floor(Math.random() * 5000 + 1000)}/year
              </span>
            </div>
          </div>
        </div>

         {/* Tools & Technologies */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Palette className="w-5 h-5 text-purple-400 mr-2" />
            Công cụ cần thiết
            </h3>
            <ul className="space-y-2">
            {lesson.tools?.map((tool, index) => (
                <li key={index} className="text-gray-300 text-sm">• {tool}</li>
            ))}
            </ul>
        </div>

        {/* Green Tech Metrics */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <h3 className="text-white font-semibold mb-3 flex items-center">
            📊 Green Metrics
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Market Growth</span>
              <span className="text-green-400 font-semibold">+15%/year</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Job Creation</span>
              <span className="text-emerald-400 font-semibold">42M by 2030</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Investment ROI</span>
              <span className="text-teal-400 font-semibold">300%+</span>
            </div>
          </div>
        </div>

        {/* Renewable Energy Tools */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <h3 className="text-white font-semibold mb-3 flex items-center">
            ⚡ Renewable Tools
          </h3>
          <div className="space-y-2">
            <div className="flex items-center text-sm">
              <span className="text-green-400 mr-2">☀️</span>
              <span className="text-gray-300">Solar Calculators</span>
            </div>
            <div className="flex items-center text-sm">
              <span className="text-emerald-400 mr-2">💨</span>
              <span className="text-gray-300">Wind Modeling</span>
            </div>
            <div className="flex items-center text-sm">
              <span className="text-teal-400 mr-2">🔋</span>
              <span className="text-gray-300">Energy Storage</span>
            </div>
            <div className="flex items-center text-sm">
              <span className="text-blue-400 mr-2">🌊</span>
              <span className="text-gray-300">Hydro Systems</span>
            </div>
          </div>
        </div>

        {/* Sustainability Tips */}
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-4 border border-green-500/20">
          <h3 className="text-green-300 font-semibold mb-3 flex items-center">
            💡 Sustainability Tips
          </h3>
          <div className="space-y-2 text-sm text-gray-300">
            <p>• Optimize energy consumption patterns</p>
            <p>• Implement smart grid integration</p>
            <p>• Use lifecycle assessment tools</p>
            <p>• Monitor carbon footprint</p>
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl p-4 border border-emerald-500/20">
          <h3 className="text-emerald-300 font-semibold mb-3 flex items-center">
            🚀 Career Growth
          </h3>
          <div className="space-y-2 text-sm text-gray-300">
            <p>• CleanTech industry booming</p>
            <p>• $2.5T market by 2030</p>
            <p>• High-demand green jobs</p>
            <p>• Sustainable innovation focus</p>
          </div>
        </div>
      </div>
    )
  }

  return <LessonPageTemplate lessonId={lessonId} config={config} />
}
