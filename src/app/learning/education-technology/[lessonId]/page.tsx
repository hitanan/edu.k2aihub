import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate'
import { EducationTechnologyLessons, EducationTechLesson } from '@/data/education-technology'
import { PageProps } from '@/types'
import { GraduationCap, Users, Building2, Globe } from 'lucide-react'

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(EducationTechnologyLessons)
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  return generateLessonMetadata((await params).lessonId, EducationTechnologyLessons, 'education-technology')
}

// Custom sidebar content for Education Technology lessons
function EducationTechSidebar({ lesson }: { lesson: EducationTechLesson }) {
  return (
    <div className="space-y-6">
      {/* Tech Focus */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg border border-indigo-100">
        <div className="flex items-center gap-2 mb-2">
          <GraduationCap className="w-5 h-5 text-indigo-600" />
          <span className="font-semibold text-indigo-900">Tech Focus</span>
        </div>
        <span className="text-indigo-700 font-medium">{lesson.techFocus}</span>
      </div>

      {/* Target Audience */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-100">
        <div className="flex items-center gap-2 mb-2">
          <Users className="w-5 h-5 text-purple-600" />
          <span className="font-semibold text-purple-900">Target Audience</span>
        </div>
        <span className="text-purple-700 font-medium">{lesson.targetAudience}</span>
      </div>

      {/* Implementation Level */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
        <div className="flex items-center gap-2 mb-2">
          <Building2 className="w-5 h-5 text-blue-600" />
          <span className="font-semibold text-blue-900">Implementation</span>
        </div>
        <span className="text-blue-700 font-medium">{lesson.implementationLevel}</span>
      </div>

      {/* Measurable Outcomes */}
      {lesson.measurableOutcomes.length > 0 && (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100">
          <div className="flex items-center gap-2 mb-3">
            <Globe className="w-5 h-5 text-green-600" />
            <span className="font-semibold text-green-900">Measurable Outcomes</span>
          </div>
          <ul className="space-y-2">
            {lesson.measurableOutcomes.map((outcome, index) => (
              <li key={index} className="text-sm text-green-700 flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

// Page component with standardized config
export default async function EducationTechnologyLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<EducationTechLesson> = {
    moduleName: 'education-technology',
    moduleTitle: 'Công Nghệ Giáo Dục',
    modulePath: '/learning/education-technology',
    lessons: EducationTechnologyLessons,
    primaryColor: 'indigo',
    secondaryColor: 'purple',
    gradientColors: 'from-slate-900 via-indigo-900 to-slate-900',
    getFieldIcon: (field: string) => {
      switch (field) {
        case 'techFocus': return <GraduationCap className="w-5 h-5" />
        case 'targetAudience': return <Users className="w-5 h-5" />
        case 'implementationLevel': return <Building2 className="w-5 h-5" />
        default: return <GraduationCap className="w-5 h-5" />
      }
    },
    getFieldValue: (lesson) => lesson.techFocus,
    sidebarContent: (lesson) => <EducationTechSidebar lesson={lesson} />
  }
  
  const { lessonId } = await params
  return <LessonPageTemplate lessonId={lessonId} config={config} />
}