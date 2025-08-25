import { City } from '@/types';

export function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/thành phố /g, '')
    .replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, 'a')
    .replace(/[èéẹẻẽêềếệểễ]/g, 'e')
    .replace(/[ìíịỉĩ]/g, 'i')
    .replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, 'o')
    .replace(/[ùúụủũưừứựửữ]/g, 'u')
    .replace(/[ỳýỵỷỹ]/g, 'y')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Create a Map for O(1) city lookups by slug
let citySlugMap: Map<string, City> | null = null;

function initializeCitySlugMap(cities: City[]): Map<string, City> {
  if (!citySlugMap) {
    citySlugMap = new Map();
    cities.forEach((city) => {
      citySlugMap!.set(city.slug, city);
    });
  }
  return citySlugMap;
}

export function findCityBySlug(cities: City[], slug: string): City | undefined {
  // Use Map for O(1) lookup instead of O(n) array.find()
  const map = initializeCitySlugMap(cities);
  return map.get(slug);
}

// Reset the map when needed (e.g., in development)
export function resetCitySlugMap(): void {
  citySlugMap = null;
}

// Create region slug from region name
export function createRegionSlug(regionName: string): string {
  return regionName
    .toLowerCase()
    .replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, 'a')
    .replace(/[èéẹẻẽêềếệểễ]/g, 'e')
    .replace(/[ìíịỉĩ]/g, 'i')
    .replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, 'o')
    .replace(/[ùúụủũưừứựửữ]/g, 'u')
    .replace(/[ỳýỵỷỹ]/g, 'y')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Create blog category slug
export function createCategorySlug(category: string): string {
  return category
    .toLowerCase()
    .replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, 'a')
    .replace(/[èéẹẻẽêềếệểễ]/g, 'e')
    .replace(/[ìíịỉĩ]/g, 'i')
    .replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, 'o')
    .replace(/[ùúụủũưừứựửữ]/g, 'u')
    .replace(/[ỳýỵỷỹ]/g, 'y')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Create blog tag slug
export function createTagSlug(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, 'a')
    .replace(/[èéẹẻẽêềếệểễ]/g, 'e')
    .replace(/[ìíịỉĩ]/g, 'i')
    .replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, 'o')
    .replace(/[ùúụủũưừứựửữ]/g, 'u')
    .replace(/[ỳýỵỷỹ]/g, 'y')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Reverse lookup functions
export function getCategoryFromSlug(slug: string): string {
  const categoryMap: { [key: string]: string } = {
    'giao-duc': 'Giáo Dục',
    'cong-nghe': 'Công Nghệ',
    'phan-tich': 'Phân Tích',
    'nghien-cuu': 'Nghiên Cứu',
    'tro-choi': 'Trò Chơi',
    'xu-huong': 'Xu Hướng',
    'k2aihub': 'K2AiHub',
    'trien-khai': 'Triển Khai',
    'tong-hop': 'Tổng Hợp'
  };
  return categoryMap[slug] || slug;
}

export function getTagFromSlug(slug: string): string {
  // This is a simplified version - in a real app you might want to store this mapping
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
