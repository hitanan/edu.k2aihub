import type { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { dataScienceModuleData } from '@/data/modules/data-science';
import { createModuleMetadata } from '@/utils/seo';

// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  'Data Science - Khoa học dữ liệu toàn diện',
  'Khóa học Data Science chuyên sâu từ cơ bản đến nâng cao. Học Machine Learning, Big Data Analytics, Data Visualization và ứng dụng thực tế trong doanh nghiệp.',
  ['data science', 'khoa học dữ liệu', 'machine learning', 'big data', 'data analytics', 'python', 'AI', 'K2AI'],
  'data-science'
);

export default function DataScienceMainPage() {
  return <ModulePageTemplate moduleData={dataScienceModuleData} lessons={dataScienceModuleData.lessons || []} />;
}
