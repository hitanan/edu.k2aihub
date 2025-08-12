import {
  LessonPageTemplate,
  generateLessonMetadata,
  generateLessonStaticParams,
  LessonPageConfig,
} from '@/components/learning/LessonPageTemplate';
import { MCPLessons, MCPLessonData } from '@/data/mcp';
import { PageProps } from '@/types';
import { Code, Server, Shield, Zap, Users } from 'lucide-react';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams(MCPLessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, MCPLessons);
}

// Custom icon mapping for MCP fields
function getMCPFieldIcon(field: string) {
  const iconMap: Record<string, React.ReactNode> = {
    mcpConcepts: <Code className="w-5 h-5" />,
    supportedClients: <Users className="w-5 h-5" />,
    integrationTools: <Server className="w-5 h-5" />,
    useCases: <Zap className="w-5 h-5" />,
    securityFeatures: <Shield className="w-5 h-5" />,
  };
  return iconMap[field] || <Code className="w-5 h-5" />;
}

// Custom sidebar content for MCP lessons
function MCPSidebarContent({ lesson }: { lesson: MCPLessonData }) {
  return (
    <div className="space-y-4">
      {lesson.mcpConcepts && lesson.mcpConcepts.length > 0 && (
        <div className="bg-indigo-900/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Code className="w-5 h-5 text-indigo-400" />
            <h4 className="font-semibold text-indigo-300">MCP Concepts</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-300">
            {lesson.mcpConcepts.map((concept, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-indigo-400 mt-1">•</span>
                <span>{concept}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {lesson.supportedClients && lesson.supportedClients.length > 0 && (
        <div className="bg-purple-900/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-5 h-5 text-purple-400" />
            <h4 className="font-semibold text-purple-300">Supported Clients</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-300">
            {lesson.supportedClients.map((client, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>{client}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {lesson.integrationTools && lesson.integrationTools.length > 0 && (
        <div className="bg-blue-900/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Server className="w-5 h-5 text-blue-400" />
            <h4 className="font-semibold text-blue-300">Integration Tools</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-300">
            {lesson.integrationTools.map((tool, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>{tool}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {lesson.useCases && lesson.useCases.length > 0 && (
        <div className="bg-green-900/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-green-400" />
            <h4 className="font-semibold text-green-300">Use Cases</h4>
          </div>
          <ul className="space-y-2 text-sm text-gray-300">
            {lesson.useCases.map((useCase, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span className="italic">&ldquo;{useCase}&rdquo;</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {lesson.securityFeatures && lesson.securityFeatures.length > 0 && (
        <div className="bg-red-900/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-red-400" />
            <h4 className="font-semibold text-red-300">Security Features</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-300">
            {lesson.securityFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// Page component with standardized config
export default async function MCPLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<MCPLessonData> = {
    moduleName: 'mcp',
    moduleTitle: 'MCP - Model Context Protocol',
    modulePath: '/learning/mcp',
    lessons: MCPLessons,
    primaryColor: 'indigo',
    secondaryColor: 'purple',
    gradientColors: 'from-slate-900 via-indigo-900 to-slate-900',
    getFieldIcon: getMCPFieldIcon,
    sidebarContent: (lesson) => <MCPSidebarContent lesson={lesson} />,
  };

  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
