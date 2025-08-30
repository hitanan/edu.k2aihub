import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate'
import { RealEstateTechnologyLessons, RealEstateTechLesson } from '@/data/real-estate-technology'
import { PageProps } from '@/types'
import { Building2, Users, Globe, TrendingUp } from 'lucide-react'

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(RealEstateTechnologyLessons)
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  return generateLessonMetadata((await params).lessonId, RealEstateTechnologyLessons, 'real-estate-technology')
}

// Custom sidebar content for Real Estate Technology lessons
function RealEstateTechSidebar({ lesson }: { lesson: RealEstateTechLesson }) {
  return (
    <div className="space-y-6">
      {/* Tech Focus */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
        <div className="flex items-center gap-2 mb-2">
          <Building2 className="w-5 h-5 text-blue-600" />
          <span className="font-semibold text-blue-900">Tech Focus</span>
        </div>
        <span className="text-blue-700 font-medium">{lesson.techFocus}</span>
      </div>

      {/* Target Market */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg border border-indigo-100">
        <div className="flex items-center gap-2 mb-2">
          <Users className="w-5 h-5 text-indigo-600" />
          <span className="font-semibold text-indigo-900">Target Market</span>
        </div>
        <span className="text-indigo-700 font-medium">{lesson.targetMarket}</span>
      </div>

      {/* Implementation Scale */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-100">
        <div className="flex items-center gap-2 mb-2">
          <Globe className="w-5 h-5 text-purple-600" />
          <span className="font-semibold text-purple-900">Implementation Scale</span>
        </div>
        <span className="text-purple-700 font-medium">{lesson.implementationScale}</span>
      </div>

      {/* Measurable ROI */}
      {lesson.measurableROI.length > 0 && (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="font-semibold text-green-900">Measurable ROI</span>
          </div>
          <ul className="space-y-2">
            {lesson.measurableROI.map((roi, index) => (
              <li key={index} className="text-sm text-green-700 flex items-start gap-2">
                <span className="text-green-500 mt-1">💰</span>
                <span>{roi}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

// Page component with standardized config
export default async function RealEstateTechnologyLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<RealEstateTechLesson> = {
    moduleName: 'real-estate-technology',
    moduleTitle: 'Công Nghệ Bất Động Sản',
    modulePath: '/learning/real-estate-technology',
    lessons: RealEstateTechnologyLessons,
    primaryColor: 'blue',
    secondaryColor: 'indigo',
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900',
    getFieldIcon: (field: string) => {
      switch (field) {
        case 'techFocus': return <Building2 className="w-5 h-5" />
        case 'targetMarket': return <Users className="w-5 h-5" />
        case 'implementationScale': return <Globe className="w-5 h-5" />
        default: return <Building2 className="w-5 h-5" />
      }
    },
    getFieldValue: (lesson) => lesson.techFocus,
    sidebarContent: (lesson) => <RealEstateTechSidebar lesson={lesson} />
  }
  
  const { lessonId } = await params
  return <LessonPageTemplate lessonId={lessonId} config={config} />
}