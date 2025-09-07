import type { Metadata } from 'next';

import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { financialLiteracyLessons } from '@/data/financial-literacy';
import { createModuleMetadata } from '@/utils/seo';
import { financialLiteracyModuleData } from '@/data/financial-literacy-module';

export const metadata: Metadata = createModuleMetadata(
  'Financial Literacy - Kiến Thức Tài Chính',
  'Học kiến thức tài chính cá nhân và đầu tư thông minh. Từ budgeting đến investment strategies',
  ['financial literacy', 'personal finance', 'investment', 'budgeting', 'savings', 'financial planning'],
  'financial-literacy',
);

export default function FinancialLiteracyPage() {
  return <ModulePageTemplate moduleData={financialLiteracyModuleData} lessons={financialLiteracyLessons} />;
}
