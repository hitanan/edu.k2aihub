import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { dataScienceLessons } from '@/data/data-science-analytics';
import { createTitle, createDescription } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';

// Generate metadata
export async function generateMetadata() {
  return {
    title: createTitle('Data Science & Big Data Analytics'),
    description: createDescription('Master data science fundamentals với Python, big data processing, machine learning applications và business intelligence.'),
    keywords: ['data science', 'machine learning', 'big data', 'business intelligence', 'python', 'K2AI', 'học tập thông minh'],
    openGraph: {
      title: 'Data Science & Big Data Analytics | K2AiHub',
      description: 'Advanced data analysis & ML cho business intelligence và decision making',
      type: 'website',
    },
  };
}

export default function DataScienceAnalyticsPage() {
  const moduleData = {
    id: 'data-science-analytics',
    title: 'Data Science & Big Data Analytics',
    subtitle: 'Advanced data analysis & ML',
    description: 'Master data science fundamentals với Python, big data processing, machine learning applications và business intelligence. Course này sẽ teach complete data science pipeline từ data collection đến actionable insights.',
    level: 'Nâng cao',
    duration: '14-16 giờ',
    category: 'Data Science & Analytics',
    features: [
      'Python Data Science Mastery với pandas, numpy, scikit-learn',
      'Big Data Processing với Apache Spark và distributed computing',
      'Machine Learning Applications cho real-world business problems',
      'Business Intelligence & Data Storytelling cho executive decisions'
    ],
    icon: '📈',
    color: 'from-indigo-600 to-purple-600',
    objectives: [
      'Master Python data science stack cho efficient data manipulation',
      'Implement big data processing systems với scalable architecture',
      'Develop machine learning models cho predictive analytics',
      'Create compelling data stories cho business stakeholders'
    ],
    prerequisites: [
      'Basic Python programming knowledge và syntax familiarity',
      'Understanding of mathematics and statistics concepts',
      'Intermediate programming skills và problem-solving experience',
      'Database và cloud computing fundamental knowledge'
    ],
    careerOutcomes: [
      'Data Scientist với machine learning expertise',
      'Big Data Engineer specialized trong scalable systems',
      'Business Intelligence Analyst với advanced analytics skills',
      'Data Science Consultant cho enterprise solutions'
    ],
    industryApplications: [
      'Financial services cho risk analysis và fraud detection',
      'Healthcare organizations cho predictive diagnostics',
      'E-commerce platforms cho recommendation systems',
      'Manufacturing companies cho predictive maintenance'
    ],
    marketDemand: {
      averageSalary: '35-80 triệu VNĐ',
      jobGrowth: '+50%',
      hireDemand: 'Rất Cao'
    },
    relatedModules: [
      K2Module.Python,
      K2Module.DataDrivenAnalytics,
      K2Module.DigitalMarketing,
      K2Module.GreenTechnology
    ]
  };

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={dataScienceLessons}
    />
  );
}
