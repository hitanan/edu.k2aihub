import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { youngEntrepreneurLessons, YoungEntrepreneurLessonData } from '@/data/young-entrepreneur';

import React from 'react';
import { notFound } from 'next/navigation';

// Generate static params for all Young Entrepreneur lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(youngEntrepreneurLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    return {};
  }
  return generateLessonMetadata(lessonId, youngEntrepreneurLessons, 'young-entrepreneur');
}

// Young Entrepreneur lesson page with specialized configuration
export default async function YoungEntrepreneurLessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  if (!lessonId) {
    notFound();
  }
  const config: LessonPageConfig<YoungEntrepreneurLessonData> = {
    moduleName: 'young-entrepreneur',
    moduleTitle: 'Khởi nghiệp cho người trẻ',
    modulePath: '/learning/young-entrepreneur',
    lessons: youngEntrepreneurLessons,
    primaryColor: 'orange',
    secondaryColor: 'red',
    gradientColors: 'from-slate-900 via-orange-900 to-slate-900',
    getFieldIcon: (field: string) => {
      const iconMap: Record<string, React.JSX.Element> = {
        businessTools: <span className="w-5 h-5">🛠️</span>,
        vietnameseMarketFocus: <span className="w-5 h-5">🇻🇳</span>,
        ageGroup: <span className="w-5 h-5">👥</span>,
        successMetrics: <span className="w-5 h-5">📊</span>,
      };
      return iconMap[field] || <span className="w-5 h-5">📌</span>;
    },
    getFieldValue: (lesson) => {
      if (lesson.businessTools) return lesson.businessTools.join(', ');
      if (lesson.vietnameseMarketFocus) return lesson.vietnameseMarketFocus.join(', ');
      if (lesson.ageGroup) return lesson.ageGroup;
      if (lesson.successMetrics) return lesson.successMetrics.join(', ');
      return '';
    },
    sidebarContent: (lesson) => (
      <div className="space-y-6">
        {/* Target Age Group */}
        <div className="bg-orange-500/10 p-4 rounded-lg border border-orange-500/20">
          <h3 className="text-orange-400 font-semibold mb-2 flex items-center gap-2">👥 Target Age Group</h3>
          <p className="text-gray-300 text-sm">{lesson.ageGroup}</p>
        </div>

        {/* Business Tools */}
        {lesson.businessTools && lesson.businessTools.length > 0 && (
          <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
            <h3 className="text-red-400 font-semibold mb-2 flex items-center gap-2">🛠️ Business Tools</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              {lesson.businessTools.map((tool, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">•</span>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Vietnamese Market Focus */}
        {lesson.vietnameseMarketFocus && lesson.vietnameseMarketFocus.length > 0 && (
          <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20">
            <h3 className="text-yellow-400 font-semibold mb-2 flex items-center gap-2">🇻🇳 Vietnamese Market Focus</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              {lesson.vietnameseMarketFocus.map((focus, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-0.5">•</span>
                  {focus}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Success Metrics */}
        {lesson.successMetrics && lesson.successMetrics.length > 0 && (
          <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
            <h3 className="text-green-400 font-semibold mb-2 flex items-center gap-2">📊 Success Metrics</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              {lesson.successMetrics.map((metric, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">•</span>
                  {metric}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Startup Resources */}
        <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
          <h3 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">🚀 Startup Resources</h3>
          <div className="text-gray-300 text-sm space-y-2">
            <a
              href="https://startup.gov.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-400 hover:text-blue-300 transition-colors"
            >
              Vietnam National Innovation Center
            </a>
            <a
              href="https://techfest.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-400 hover:text-blue-300 transition-colors"
            >
              Techfest Vietnam
            </a>
            <a
              href="https://500.co/vietnam"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-400 hover:text-blue-300 transition-colors"
            >
              500 Global Vietnam
            </a>
          </div>
        </div>
      </div>
    ),
  };

  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
