import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { DataScienceLessons } from '@/data/data-science';
import { createTitle, createDescription } from '@/utils/seo';

// Generate metadata
export async function generateMetadata() {
  return {
    title: createTitle('Data Science - Khoa học dữ liệu toàn diện'),
    description: createDescription(
      'Khóa học Data Science chuyên sâu từ cơ bản đến nâng cao. Học Machine Learning, Big Data Analytics, Data Visualization và ứng dụng thực tế trong doanh nghiệp.',
    ),
    keywords: [
      'data science',
      'khoa học dữ liệu',
      'machine learning',
      'big data',
      'data analytics',
      'python',
      'AI',
      'K2AI',
    ],
    openGraph: {
      title: 'Data Science - Khoa học dữ liệu toàn diện | K2AiHub',
      description:
        'Khóa học Data Science chuyên sâu từ cơ bản đến nâng cao với Machine Learning, Big Data và ứng dụng thực tế.',
      type: 'website',
    },
  };
}

export default function DataScienceMainPage() {
  const moduleData = {
    id: 'data-science',
    title: 'Data Science - Khoa học dữ liệu',
    subtitle: 'Từ dữ liệu thô đến thông tin có giá trị',
    description:
      'Khóa học Data Science toàn diện giúp bạn thành thạo quy trình CRISP-DM, Machine Learning algorithms, Big Data processing và Data Storytelling. Phát triển kỹ năng phân tích dữ liệu chuyên nghiệp cho thời đại số.',
    level: 'Trung bình',
    duration: '25-30 giờ',
    category: 'Data & Analytics',
    features: [
      'CRISP-DM methodology và quy trình Data Science hoàn chỉnh',
      'Machine Learning algorithms từ cơ bản đến nâng cao',
      'Big Data processing với Apache Spark và cloud platforms',
      'Data visualization và storytelling chuyên nghiệp',
      'Hands-on projects với real-world datasets',
      'Business intelligence và decision support systems',
    ],
    icon: '📊',
    color: 'from-blue-600 to-cyan-600',
    objectives: [
      'Thành thạo quy trình Data Science lifecycle (CRISP-DM)',
      'Xây dựng và đánh giá Machine Learning models',
      'Xử lý và phân tích Big Data với distributed systems',
      'Tạo data visualizations và insights có ý nghĩa',
      'Áp dụng Data Science cho business problems thực tế',
    ],
    prerequisites: [
      'Toán học cơ bản (thống kê, đại số tuyến tính)',
      'Lập trình Python hoặc R',
      'Hiểu biết về SQL và databases',
      'Tư duy phân tích và logic',
    ],
    careerOutcomes: [
      'Data Scientist',
      'Machine Learning Engineer',
      'Data Analyst',
      'Business Intelligence Developer',
      'Research Scientist',
      'AI Product Manager',
    ],
    industryApplications: [
      'Financial services - Risk assessment và fraud detection',
      'Healthcare - Medical diagnosis và drug discovery',
      'E-commerce - Recommendation systems và customer analytics',
      'Manufacturing - Predictive maintenance và quality control',
      'Marketing - Customer segmentation và campaign optimization',
      'Government - Policy analysis và public health insights',
    ],
    marketDemand: {
      averageSalary: '25-50 triệu VNĐ',
      jobGrowth: '+35%',
      hireDemand: 'Rất cao',
    },
    relatedModules: [],
  };

  return <ModulePageTemplate moduleData={moduleData} lessons={DataScienceLessons} />;
}
