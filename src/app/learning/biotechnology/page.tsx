import { biotechnologyLessons, biotechnologyModuleData } from '@/data/modules/biotechnology';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { createModuleMetadata } from '@/utils/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = createModuleMetadata(
  'Biotechnology & Life Sciences - Công Nghệ Sinh Học',
  'Khóa học Biotechnology và Life Sciences chuyên sâu. Từ gene editing đến medical applications, khám phá tương lai của sinh học và y học',
  ['biotechnology', 'gene editing', 'crispr', 'medical technology', 'life sciences', 'genetic engineering'],
  'biotechnology',
);

export default function BiotechnologyPage() {
  return <ModulePageTemplate moduleData={biotechnologyModuleData} lessons={biotechnologyLessons} />;
}
