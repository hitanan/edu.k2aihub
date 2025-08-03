import ModulePageTemplate, { ModuleData } from '@/components/learning/ModulePageTemplate'
import { semiconductorLessons, SemiconductorLesson } from '@/data/semiconductor-technology'
import { BaseLessonData } from '@/components/learning/LessonPageTemplate'
import { createTitle, createDescription, createKeywords } from '@/utils/seo'
import type { Metadata } from "next";
import { K2Module } from '@/data/moduleNavigation';

export const metadata: Metadata = {
  title: createTitle("Semiconductor Technology & Microchip Design - Công nghệ Bán dẫn"),
  description: createDescription("Khóa học Semiconductor Technology chuyên sâu từ cơ bản đến nâng cao. Học thiết kế chip, VLSI, fabrication process và career opportunities tại Samsung, Intel Vietnam"),
  keywords: createKeywords(["semiconductor", "microchip design", "VLSI", "IC design", "chip fabrication", "samsung vietnam", "intel vietnam", "bán dẫn", "thiết kế chip"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Semiconductor Technology & Microchip Design - K2AiHub"),
    description: createDescription("Master công nghệ bán dẫn và thiết kế microchip với industry standards từ Samsung, Intel Vietnam"),
    type: "website",
  },
};

// Convert SemiconductorLesson to BaseLessonData interface
function convertToLesson(semiconductorLesson: SemiconductorLesson): BaseLessonData {
  return {
    id: semiconductorLesson.id,
    title: semiconductorLesson.title,
    description: semiconductorLesson.description,
    duration: semiconductorLesson.duration,
    difficulty: semiconductorLesson.difficulty,
    category: semiconductorLesson.chipType || 'Semiconductor Technology',
    imageUrl: semiconductorLesson.imageUrl || '/default-lesson.jpg',
    videoUrl: semiconductorLesson.videoUrl,
    objectives: semiconductorLesson.objectives,
    prerequisites: semiconductorLesson.prerequisites || ['Basic physics', 'Mathematics', 'Interest in electronics'],
    exercises: semiconductorLesson.exercises?.map(ex => ({
      title: ex.title,
      description: ex.description,
      difficulty: ex.difficulty,
      materials: ex.requirements || [],
      procedure: ex.hints || [ex.description],
      expectedResults: ex.expectedOutput || 'Successful completion of semiconductor experiment',
      solution: ex.solution || 'Follow industry best practices'
    })) || [],
    resources: semiconductorLesson.resources || [],
    tools: semiconductorLesson.labTechniques || ['EDA Tools', 'Simulation Software', 'Lab Equipment'],
    realWorldApplications: semiconductorLesson.realWorldApplications || [],
    caseStudies: semiconductorLesson.caseStudies?.map(cs => ({
      title: cs.title,
      organization: cs.company,
      problem: cs.challenge,
      solution: cs.solution,
      impact: cs.results,
      innovations: cs.insights || []
    })) || []
  }
}

export default function SemiconductorTechnologyPage() {
  // Convert lessons to base interface
  const convertedLessons = semiconductorLessons.map(convertToLesson);

  const moduleConfig: ModuleData = {
    title: 'Semiconductor Technology & Microchip Design',
    subtitle: 'Công nghệ Bán dẫn & Thiết kế Vi mạch',
    description: 'Khóa học chuyên sâu về công nghệ bán dẫn từ cơ bản đến nâng cao. Học thiết kế IC, VLSI technology, fabrication process và career opportunities tại các công ty hàng đầu như Samsung, Intel Vietnam. Tỉ lệ chọi ngành: 1:50-100.',
    primaryColor: 'blue',
    gradientColors: 'from-slate-900 via-blue-900 to-purple-900',
    basePath: '/learning/semiconductor-technology',
    heroImageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2e79?w=1200&h=600&fit=crop',
    statsConfig: {
      lessons: `${semiconductorLessons.length}+ bài`,
      duration: '25-30 giờ',
      level: 'Cơ bản → Nâng cao',
      projects: '8+ dự án thực hành'
    },
    marketData: {
      marketSize: '$574 Billion',
      marketNote: 'Global semiconductor market by 2025',
      jobGrowth: '85% Growth',
      jobNote: 'Vietnam semiconductor jobs 2024-2028',
      reduction: '50% Cost',
      reductionNote: 'Manufacturing cost advantage in Vietnam',
      startups: '15+ Companies',
      startupsNote: 'Major semiconductor companies in Vietnam'
    },
    careerPaths: [
      'IC Design Engineer (25-60 triệu VNĐ)',
      'Process Engineer (22-45 triệu VNĐ)', 
      'Verification Engineer (28-55 triệu VNĐ)',
      'Applications Engineer (20-40 triệu VNĐ)',
      'Product Manager (35-70 triệu VNĐ)',
      'Research Scientist (30-65 triệu VNĐ)'
    ],
    technicalHighlights: [
      {
        title: 'Semiconductor Physics',
        icon: '⚛️',
        items: ['Silicon Crystal Structure', 'P-N Junction', 'Doping Process', 'Transistor Operation']
      },
      {
        title: 'IC Design & VLSI',
        icon: '🔬',
        items: ['Verilog HDL', 'Logic Synthesis', 'Place & Route', 'Timing Analysis']
      },
      {
        title: 'Fabrication Process',
        icon: '🏭',
        items: ['Photolithography', 'Etching', 'Deposition', 'Clean Room Technology']
      },
      {
        title: 'Advanced Nodes',
        icon: '🚀',
        items: ['3nm Technology', '5nm Process', 'FinFET Structure', 'EUV Lithography']
      },
      {
        title: 'AI Chips',
        icon: '🧠',
        items: ['Neural Accelerators', 'TPU Architecture', 'Edge AI Chips', 'Neuromorphic Computing']
      },
      {
        title: 'Industry Practice',
        icon: '🏢',
        items: ['Samsung Vietnam', 'Intel Design Center', 'TSMC Partnership', 'Career Development']
      }
    ],
    relatedModules: [ K2Module.Python, K2Module.Arduino, K2Module.AIArtCreativeTech ]
  }

  return <ModulePageTemplate moduleData={moduleConfig} lessons={convertedLessons} />
}
