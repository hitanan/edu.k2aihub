import Breadcrumb from '@/components/Breadcrumb';
import { moduleNavigation } from '@/data/moduleNavigation';
import { useMemo } from 'react';

interface DynamicBreadcrumbsProps {
  moduleId?: string;
  lessonId?: string;
  lessonTitle?: string;
}

const ROOT_LABEL = 'Trang chủ';
const LEARNING_LABEL = 'Học tập';

export default function DynamicBreadcrumbs({ moduleId, lessonId, lessonTitle }: DynamicBreadcrumbsProps) {
  // Find module data from navigation
  const moduleData = useMemo(() => {
    if (!moduleId) return undefined;
    return moduleNavigation.find((mod) => 'id' in mod && mod.id === moduleId);
  }, [moduleId]);

  // Build breadcrumb items
  const items = useMemo(() => {
    const arr = [
      { label: ROOT_LABEL, href: '/' },
      { label: LEARNING_LABEL, href: '/learning' },
    ];
    if (moduleData) {
      arr.push({ label: moduleData.title, href: `/learning/${moduleData.id}` });
    }
    if (lessonId && lessonTitle) {
      arr.push({ label: lessonTitle, href: `/learning/${moduleId}/${lessonId}` });
    }
    return arr;
  }, [moduleData, lessonId, lessonTitle, moduleId]);

  return <Breadcrumb items={items} />;
}
