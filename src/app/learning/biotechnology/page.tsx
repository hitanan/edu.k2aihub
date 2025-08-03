import type { Metadata } from "next";
import ModulePageTemplate, { type ModuleData } from '@/components/learning/ModulePageTemplate';
import { type BaseLessonData } from '@/components/learning/LessonPageTemplate';
import { biotechnologyLessons, type BiotechnologyLesson } from '@/data/biotechnology';
import { K2Module } from '@/data/moduleNavigation';
import { createTitle, createDescription } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle("Biotechnology & Life Sciences - Công Nghệ Sinh Học"),
  description: createDescription("Khóa học Biotechnology và Life Sciences chuyên sâu. Từ gene editing đến medical applications, khám phá tương lai của sinh học và y học"),
  keywords: ["biotechnology", "gene editing", "crispr", "medical technology", "life sciences", "genetic engineering", "k2aihub"],
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: "Biotechnology & Life Sciences",
    description: "Khám phá công nghệ sinh học hiện đại và ứng dụng trong y học với K2AiHub",
    type: "website",
  },
};

// Convert BiotechnologyLesson to BaseLessonData interface
function convertToLesson(biotechnologyLesson: BiotechnologyLesson): BaseLessonData {
  return {
    id: biotechnologyLesson.id,
    title: biotechnologyLesson.title,
    description: biotechnologyLesson.description,
    duration: biotechnologyLesson.duration,
    difficulty: biotechnologyLesson.difficulty,
    category: biotechnologyLesson.biotechField || 'Biotechnology',
    imageUrl: biotechnologyLesson.imageUrl || '/default-lesson.jpg',
    videoUrl: biotechnologyLesson.videoUrl,
    objectives: biotechnologyLesson.objectives,
    prerequisites: biotechnologyLesson.prerequisites || ['Basic biology', 'Chemistry knowledge'],
    exercises: biotechnologyLesson.exercises?.map(ex => ({
      title: ex.title,
      description: ex.description,
      difficulty: ex.difficulty,
      materials: ex.materials || [],
      procedure: ex.procedure || [ex.description],
      expectedResults: ex.expectedResults || 'Successful biotech experiment',
      solution: ex.solution || 'Follow laboratory protocols'
    })) || [],
    resources: biotechnologyLesson.resources || [],
    tools: biotechnologyLesson.labTechniques || ['PCR', 'Gene Sequencing', 'Cell Culture', 'Microscopy'],
    realWorldApplications: biotechnologyLesson.realWorldApplications || [],
    caseStudies: biotechnologyLesson.caseStudies?.map(cs => ({
      title: cs.title,
      organization: cs.organization,
      problem: cs.problem,
      solution: cs.biotechSolution,
      impact: cs.impact,
      innovations: cs.innovations || []
    })) || []
  }
}

export default function BiotechnologyPage() {
  // Convert lessons to base interface
  const convertedLessons = biotechnologyLessons.map(convertToLesson);

  const moduleData: ModuleData = {
    id: 'biotechnology',
    title: 'Biotechnology & Life Sciences',
    subtitle: 'Công nghệ sinh học & khoa học sự sống',
    description: 'Khám phá thế giới công nghệ sinh học hiện đại. Từ gene editing với CRISPR đến phát triển thuốc, học cách ứng dụng sinh học để giải quyết các thách thức y tế và môi trường.',
    level: 'Trung bình đến Nâng cao',
    duration: '20-25 giờ',
    category: 'Life Sciences & Technology',
    primaryColor: 'emerald',
    gradientColors: 'from-slate-900 via-emerald-900 to-teal-900',
    basePath: '/learning/biotechnology',
    heroImageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&h=600&fit=crop',
    features: [
      'CRISPR và Gene Editing techniques',
      'Phát triển thuốc và Medical Applications',
      'Synthetic Biology và Bioengineering',
      'Diagnostic Tools và Laboratory Skills',
      'Bioethics và Regulatory Compliance',
      'Entrepreneurship trong Biotech Industry',
      'Research Methods và Data Analysis',
      'Clinical Trials và Product Development'
    ],
    icon: '🧬',
    statsConfig: {
      lessons: `${biotechnologyLessons.length}+ bài`,
      duration: '20-25 giờ',
      level: 'Trung bình đến Nâng cao',
      projects: '12+ thí nghiệm thực tế'
    },
    marketData: {
      marketSize: '$2.4 Trillion',
      marketNote: 'Global biotechnology market by 2028',
      jobGrowth: '15% Growth',
      jobNote: 'Biotech jobs by 2030',
      reduction: '50% Faster',
      reductionNote: 'Drug development with AI',
      startups: '4000+ Companies',
      startupsNote: 'Biotech startups worldwide'
    },
    objectives: [
      'Hiểu và ứng dụng các kỹ thuật gene editing như CRISPR',
      'Phát triển kỹ năng laboratory và research methods',
      'Nắm vững quy trình phát triển thuốc từ lab đến thị trường',
      'Ứng dụng synthetic biology để tạo ra sản phẩm mới',
      'Hiểu về bioethics và regulatory requirements',
      'Phát triển tư duy entrepreneurship trong lĩnh vực biotech'
    ],
    prerequisites: [
      'Kiến thức cơ bản về sinh học và hóa học',
      'Hiểu biết về DNA, protein và cellular processes',
      'Kỹ năng toán học và thống kê cơ bản',
      'Tư duy phản biện và scientific reasoning'
    ],
    careerPaths: [
      'Biomedical Engineer (25-45 triệu VNĐ)',
      'Genetic Counselor (20-35 triệu VNĐ)',
      'Research Scientist (22-40 triệu VNĐ)',
      'Biotech Product Manager (30-55 triệu VNĐ)',
      'Clinical Research Coordinator (18-32 triệu VNĐ)',
      'Biotech Entrepreneur (50-200+ triệu VNĐ)',
      'Regulatory Affairs Specialist (25-42 triệu VNĐ)',
      'Bioinformatics Analyst (28-48 triệu VNĐ)'
    ],
    industryApplications: [
      'Pharmaceutical và drug development',
      'Medical devices và diagnostics',
      'Agricultural biotechnology',
      'Environmental biotechnology',
      'Industrial biotechnology',
      'Personalized medicine',
      'Gene therapy và regenerative medicine',
      'Vaccine development',
      'Biotech consulting',
      'Academic research institutions'
    ],
    technicalHighlights: [
      {
        title: 'Gene Editing',
        icon: '✂️',
        items: ['CRISPR-Cas9', 'Base Editing', 'Prime Editing', 'Gene Drives']
      },
      {
        title: 'Molecular Biology',
        icon: '🧬',
        items: ['PCR Techniques', 'DNA Sequencing', 'Protein Analysis', 'Cell Culture']
      },
      {
        title: 'Bioinformatics',
        icon: '💻',
        items: ['Genomic Analysis', 'Protein Modeling', 'Database Mining', 'AI Applications']
      },
      {
        title: 'Drug Development',
        icon: '💊',
        items: ['Target Identification', 'Lead Optimization', 'Clinical Trials', 'Regulatory Approval']
      },
      {
        title: 'Synthetic Biology',
        icon: '🔬',
        items: ['Metabolic Engineering', 'Biosynthesis', 'Biodesign', 'Living Materials']
      },
      {
        title: 'Medical Applications',
        icon: '🏥',
        items: ['Diagnostic Tools', 'Therapeutic Proteins', 'Cell Therapy', 'Tissue Engineering']
      }
    ],
    relatedModules: [
      K2Module.AIArtCreativeTech,
      K2Module.Cybersecurity,
      K2Module.STEM
    ]
  };

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={convertedLessons}
    />
  );
}
