import { ModuleData, ModuleNavigation } from '@/types';

export function isModuleData(item: ModuleData | ModuleNavigation): item is ModuleData {
  // A property that exists only on ModuleData, e.g., 'objectives'
  return (item as ModuleData).objectives !== undefined;
}

export function isModuleNavigation(item: ModuleData | ModuleNavigation): item is ModuleNavigation {
  // A property that exists only on ModuleNavigation, e.g., 'href' or 'coreModule'
  return (item as ModuleNavigation).href !== undefined || (item as ModuleNavigation).coreModule !== undefined;
}
