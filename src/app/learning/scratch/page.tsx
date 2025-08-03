import ModulePageTemplate, { type ModuleData } from '@/components/learning/ModulePageTemplate';
import { type BaseLessonData } from '@/components/learning/LessonPageTemplate';
import { scratchLessons, type ScratchLesson } from '@/data/scratch';

// Convert ScratchLesson to BaseLessonData interface
function convertToLesson(scratchLesson: ScratchLesson): BaseLessonData {
  return {
    id: scratchLesson.id,
    title: scratchLesson.title,
    description: scratchLesson.description,
    duration: scratchLesson.duration,
    difficulty: scratchLesson.difficulty,
    category: 'Visual Programming',
    imageUrl: scratchLesson.imageUrl || '/default-lesson.jpg',
    videoUrl: scratchLesson.videoUrl,
    objectives: scratchLesson.objectives,
    prerequisites: ['Computer basics', 'Mouse and keyboard skills'],
    exercises: scratchLesson.exercises?.map(ex => ({
      title: ex.title,
      description: ex.description,
      difficulty: ex.difficulty,
      materials: scratchLesson.materials || [],
      procedure: ex.steps || [ex.description],
      expectedResults: ex.expectedBehavior || 'Project hoạt động như mong đợi',
      solution: ex.scratchUrl || 'Solution provided in lesson'
    })) || [],
    resources: [],
    tools: scratchLesson.codeBlocks || ['Scratch Blocks', 'Motion', 'Looks', 'Events'],
    realWorldApplications: scratchLesson.realWorldApplications || [],
    caseStudies: []
  }
}

export default function ScratchPage() {
  // Convert lessons to base interface
  const convertedLessons = scratchLessons.map(convertToLesson);

  const moduleConfig: ModuleData = {
    title: 'Scratch Programming',
    subtitle: 'Lập Trình Trực Quan Cho Trẻ Em',
    description: 'Khám phá thế giới lập trình với Scratch - ngôn ngữ lập trình trực quan hoàn hảo cho trẻ em và người mới bắt đầu. Tạo game, animation và ứng dụng tương tác một cách thú vị.',
    primaryColor: 'orange',
    gradientColors: 'from-slate-900 via-orange-900 to-slate-900',
    basePath: '/learning/scratch',
    statsConfig: {
      lessons: `${scratchLessons.length}+ bài`,
      duration: '15-20 giờ',
      level: 'Dành cho trẻ em',
      projects: '10+ dự án thú vị'
    },
    marketData: {
      marketSize: '70 Million',
      marketNote: 'Active Scratch users worldwide',
      jobGrowth: '22% Growth',
      jobNote: 'Programming jobs by 2030',
      reduction: '90% Easier',
      reductionNote: 'Learning programming with visual blocks',
      startups: '1000+ Schools',
      startupsNote: 'Teaching Scratch globally'
    },
    careerPaths: [
      'Game Developer',
      'Animation Artist',
      'Programming Teacher',
      'Software Engineer',
      'UX/UI Designer',
      'Creative Technologist'
    ],
    technicalHighlights: [
      {
        title: 'Visual Programming',
        icon: '🧩',
        items: ['Drag & Drop Blocks', 'No Text Coding', 'Visual Logic', 'Color-coded Commands']
      },
      {
        title: 'Creative Projects',
        icon: '🎨',
        items: ['Games & Stories', 'Animation & Art', 'Interactive Music', 'Digital Storytelling']
      },
      {
        title: 'Programming Concepts',
        icon: '💻',
        items: ['Loops & Conditions', 'Variables & Events', 'Functions & Logic', 'Problem Solving']
      },
      {
        title: 'Sharing Platform',
        icon: '🌍',
        items: ['Global Community', 'Project Sharing', 'Remix & Learn', 'Collaborative Learning']
      },
      {
        title: 'Educational Benefits',
        icon: '📚',
        items: ['Computational Thinking', 'Creative Expression', 'Logical Reasoning', 'STEM Learning']
      },
      {
        title: 'Real Skills',
        icon: '🚀',
        items: ['Algorithm Design', 'Debugging Skills', 'Project Planning', 'Digital Literacy']
      }
    ],
    relatedModules: [
      {
        href: '/stem/coding-for-kids',
        icon: '🔬',
        title: 'STEM - Coding for Kids',
        description: 'Advanced Coding Concepts'
      },
      {
        href: '/learning/python',
        icon: '🐍',
        title: 'Python Programming',
        description: 'Next Level Programming'
      },
      {
        href: '/learning/game-development',
        icon: '🎮',
        title: 'Game Development',
        description: 'Professional Game Creation'
      }
    ]
  }

  return <ModulePageTemplate moduleData={moduleConfig} lessons={convertedLessons} />
}
