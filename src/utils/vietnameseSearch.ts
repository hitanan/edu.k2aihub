/**
 * Vietnamese text processing utilities for search functionality
 * Supports Vietnamese diacritics removal and normalization
 */

// Vietnamese character mapping for diacritics removal
const vietnameseCharMap: { [key: string]: string } = {
  // Vowels with diacritics
  'à': 'a', 'á': 'a', 'ạ': 'a', 'ả': 'a', 'ã': 'a',
  'ằ': 'a', 'ắ': 'a', 'ặ': 'a', 'ẳ': 'a', 'ẵ': 'a',
  'ầ': 'a', 'ấ': 'a', 'ậ': 'a', 'ẩ': 'a', 'ẫ': 'a',
  'è': 'e', 'é': 'e', 'ẹ': 'e', 'ẻ': 'e', 'ẽ': 'e',
  'ề': 'e', 'ế': 'e', 'ệ': 'e', 'ể': 'e', 'ễ': 'e',
  'ì': 'i', 'í': 'i', 'ị': 'i', 'ỉ': 'i', 'ĩ': 'i',
  'ò': 'o', 'ó': 'o', 'ọ': 'o', 'ỏ': 'o', 'õ': 'o',
  'ồ': 'o', 'ố': 'o', 'ộ': 'o', 'ổ': 'o', 'ỗ': 'o',
  'ờ': 'o', 'ớ': 'o', 'ợ': 'o', 'ở': 'o', 'ỡ': 'o',
  'ù': 'u', 'ú': 'u', 'ụ': 'u', 'ủ': 'u', 'ũ': 'u',
  'ừ': 'u', 'ứ': 'u', 'ự': 'u', 'ử': 'u', 'ữ': 'u',
  'ỳ': 'y', 'ý': 'y', 'ỵ': 'y', 'ỷ': 'y', 'ỹ': 'y',
  
  // Uppercase vowels
  'À': 'A', 'Á': 'A', 'Ạ': 'A', 'Ả': 'A', 'Ã': 'A',
  'Ằ': 'A', 'Ắ': 'A', 'Ặ': 'A', 'Ẳ': 'A', 'Ẵ': 'A',
  'Ầ': 'A', 'Ấ': 'A', 'Ậ': 'A', 'Ẩ': 'A', 'Ẫ': 'A',
  'È': 'E', 'É': 'E', 'Ẹ': 'E', 'Ẻ': 'E', 'Ẽ': 'E',
  'Ề': 'E', 'Ế': 'E', 'Ệ': 'E', 'Ể': 'E', 'Ễ': 'E',
  'Ì': 'I', 'Í': 'I', 'Ị': 'I', 'Ỉ': 'I', 'Ĩ': 'I',
  'Ò': 'O', 'Ó': 'O', 'Ọ': 'O', 'Ỏ': 'O', 'Õ': 'O',
  'Ồ': 'O', 'Ố': 'O', 'Ộ': 'O', 'Ổ': 'O', 'Ỗ': 'O',
  'Ờ': 'O', 'Ớ': 'O', 'Ợ': 'O', 'Ở': 'O', 'Ỡ': 'O',
  'Ù': 'U', 'Ú': 'U', 'Ụ': 'U', 'Ủ': 'U', 'Ũ': 'U',
  'Ừ': 'U', 'Ứ': 'U', 'Ự': 'U', 'Ử': 'U', 'Ữ': 'U',
  'Ỳ': 'Y', 'Ý': 'Y', 'Ỵ': 'Y', 'Ỷ': 'Y', 'Ỹ': 'Y',
  
  // Special consonants
  'đ': 'd', 'Đ': 'D'
};

// Common Vietnamese to English keyword mapping for better search
const vietnameseToEnglishKeywords: { [key: string]: string[] } = {
  // Programming terms
  'lap trinh': ['programming', 'code', 'coding', 'development', 'dev'],
  'lập trình': ['programming', 'code', 'coding', 'development', 'dev'],
  'phat trien': ['development', 'develop', 'build', 'create'],
  'phát triển': ['development', 'develop', 'build', 'create'],
  'ung dung': ['application', 'app', 'software'],
  'ứng dụng': ['application', 'app', 'software'],
  'web': ['website', 'web development', 'frontend', 'backend'],
  'mobile': ['app', 'android', 'ios', 'react native'],
  
  // AI and technology
  'tri tue nhan tao': ['artificial intelligence', 'ai', 'machine learning', 'ml'],
  'trí tuệ nhân tạo': ['artificial intelligence', 'ai', 'machine learning', 'ml'],
  'hoc may': ['machine learning', 'ml', 'ai', 'deep learning'],
  'học máy': ['machine learning', 'ml', 'ai', 'deep learning'],
  'du lieu': ['data', 'data science', 'analytics', 'big data'],
  'dữ liệu': ['data', 'data science', 'analytics', 'big data'],
  'blockchain': ['crypto', 'cryptocurrency', 'bitcoin', 'defi', 'smart contract'],
  
  // Business and marketing
  'kinh doanh': ['business', 'entrepreneurship', 'startup', 'commerce'],
  'doanh nghiep': ['enterprise', 'business', 'company', 'corporation'],
  'doanh nghiệp': ['enterprise', 'business', 'company', 'corporation'],
  'marketing': ['quang cao', 'tiep thi', 'digital marketing', 'social media'],
  'quang cao': ['advertising', 'marketing', 'promotion', 'ads'],
  'quảng cáo': ['advertising', 'marketing', 'promotion', 'ads'],
  'tai chinh': ['finance', 'financial', 'fintech', 'money', 'investment'],
  'tài chính': ['finance', 'financial', 'fintech', 'money', 'investment'],
  'khoi nghiep': ['startup', 'entrepreneurship', 'business', 'venture'],
  'khởi nghiệp': ['startup', 'entrepreneurship', 'business', 'venture'],
  
  // Science and technology
  'khoa hoc': ['science', 'scientific', 'research', 'study'],
  'khoa học': ['science', 'scientific', 'research', 'study'],
  'cong nghe': ['technology', 'tech', 'engineering', 'innovation'],
  'công nghệ': ['technology', 'tech', 'engineering', 'innovation'],
  'an ninh': ['security', 'cybersecurity', 'safety', 'protection'],
  'bao mat': ['security', 'cybersecurity', 'protection', 'safety'],
  'bảo mật': ['security', 'cybersecurity', 'protection', 'safety'],
  'sinh hoc': ['biology', 'biotech', 'biotechnology', 'life science'],
  'sinh học': ['biology', 'biotech', 'biotechnology', 'life science'],
  'y te': ['healthcare', 'medical', 'health', 'medicine'],
  'y tế': ['healthcare', 'medical', 'health', 'medicine'],
  
  // Creative and design
  'thiet ke': ['design', 'ui', 'ux', 'graphic', 'visual'],
  'thiết kế': ['design', 'ui', 'ux', 'graphic', 'visual'],
  'sang tao': ['creative', 'creativity', 'art', 'design'],
  'sáng tạo': ['creative', 'creativity', 'art', 'design'],
  'game': ['gaming', 'game development', 'unity', 'unreal'],
  'noi dung': ['content', 'content creation', 'media', 'social media'],
  'nội dung': ['content', 'content creation', 'media', 'social media'],
  
  // Hardware and robotics
  'robot': ['robotics', 'automation', 'arduino', 'iot'],
  'dien tu': ['electronics', 'electronic', 'circuit', 'hardware'],
  'điện tử': ['electronics', 'electronic', 'circuit', 'hardware'],
  'phan cung': ['hardware', 'circuit', 'electronics', 'component'],
  'phần cứng': ['hardware', 'circuit', 'electronics', 'component'],
  'cam bien': ['sensor', 'sensing', 'detection', 'monitoring'],
  'cảm biến': ['sensor', 'sensing', 'detection', 'monitoring'],
  
  // Education and learning
  'giao duc': ['education', 'learning', 'teaching', 'school'],
  'giáo dục': ['education', 'learning', 'teaching', 'school'],
  'hoc tap': ['learning', 'study', 'education', 'training'],
  'học tập': ['learning', 'study', 'education', 'training'],
  'dao tao': ['training', 'education', 'learning', 'development'],
  'đào tạo': ['training', 'education', 'learning', 'development'],
  
  // Level and difficulty
  'co ban': ['basic', 'fundamental', 'beginner', 'entry'],
  'cơ bản': ['basic', 'fundamental', 'beginner', 'entry'],
  'trung binh': ['intermediate', 'medium', 'middle'],
  'trung bình': ['intermediate', 'medium', 'middle'],
  'nang cao': ['advanced', 'expert', 'professional', 'high'],
  'nâng cao': ['advanced', 'expert', 'professional', 'high'],
  
  // Environment and sustainability
  'moi truong': ['environment', 'environmental', 'ecology', 'green'],
  'môi trường': ['environment', 'environmental', 'ecology', 'green'],
  'ben vung': ['sustainable', 'sustainability', 'green', 'eco'],
  'bền vững': ['sustainable', 'sustainability', 'green', 'eco'],
  'xanh': ['green', 'eco', 'environmental', 'sustainable'],
  'nang luong': ['energy', 'power', 'renewable', 'solar'],
  'năng lượng': ['energy', 'power', 'renewable', 'solar']
};

// English to Vietnamese mapping (reverse)
const englishToVietnameseKeywords: { [key: string]: string[] } = {};
Object.entries(vietnameseToEnglishKeywords).forEach(([vn, enList]) => {
  enList.forEach(en => {
    if (!englishToVietnameseKeywords[en]) {
      englishToVietnameseKeywords[en] = [];
    }
    englishToVietnameseKeywords[en].push(vn);
  });
});

/**
 * Remove Vietnamese diacritics from text
 * @param text - Input text with Vietnamese diacritics
 * @returns Text with diacritics removed
 */
export function removeVietnameseDiacritics(text: string): string {
  if (!text) return '';
  
  return text
    .split('')
    .map(char => vietnameseCharMap[char] || char)
    .join('');
}

/**
 * Normalize Vietnamese text for search
 * @param text - Input text
 * @returns Normalized text (lowercase, no diacritics, trimmed)
 */
export function normalizeVietnameseText(text: string): string {
  if (!text) return '';
  
  return removeVietnameseDiacritics(text.toLowerCase().trim());
}

/**
 * Check if search term matches text with Vietnamese support
 * @param searchTerm - Search term
 * @param targetText - Text to search in
 * @returns Boolean indicating if there's a match
 */
export function vietnameseTextMatch(searchTerm: string, targetText: string): boolean {
  if (!searchTerm || !targetText) return false;
  
  const normalizedSearch = normalizeVietnameseText(searchTerm);
  const normalizedTarget = normalizeVietnameseText(targetText);
  
  return normalizedTarget.includes(normalizedSearch);
}

/**
 * Enhanced Vietnamese keyword search
 * @param searchTerm - Search term
 * @param targetText - Text to search in
 * @returns Boolean indicating if there's a match (including keyword translation)
 */
export function enhancedVietnameseSearch(searchTerm: string, targetText: string): boolean {
  if (!searchTerm || !targetText) return false;
  
  // Basic Vietnamese text matching
  if (vietnameseTextMatch(searchTerm, targetText)) {
    return true;
  }
  
  const normalizedSearch = normalizeVietnameseText(searchTerm);
  const normalizedTarget = normalizeVietnameseText(targetText);
  
  // Check Vietnamese to English keyword mapping
  const englishKeywords = vietnameseToEnglishKeywords[normalizedSearch] || [];
  if (englishKeywords.some(keyword => normalizedTarget.includes(keyword))) {
    return true;
  }
  
  // Check English to Vietnamese keyword mapping
  const vietnameseKeywords = englishToVietnameseKeywords[normalizedSearch] || [];
  if (vietnameseKeywords.some(keyword => normalizedTarget.includes(normalizeVietnameseText(keyword)))) {
    return true;
  }
  
  // Check partial matches for compound terms
  const searchWords = normalizedSearch.split(' ').filter(word => word.length > 2);
  if (searchWords.length > 1) {
    return searchWords.some(word => {
      const keywords = vietnameseToEnglishKeywords[word] || [];
      return keywords.some(keyword => normalizedTarget.includes(keyword)) ||
             normalizedTarget.includes(word);
    });
  }
  
  return false;
}

/**
 * Get search suggestions based on input
 * @param input - Partial search input
 * @returns Array of search suggestions
 */
export function getVietnameseSearchSuggestions(input: string): string[] {
  if (!input || input.length < 2) return [];
  
  const normalizedInput = normalizeVietnameseText(input);
  const suggestions: string[] = [];
  
  // Find Vietnamese keywords that start with or contain the input
  Object.keys(vietnameseToEnglishKeywords).forEach(vn => {
    if (normalizeVietnameseText(vn).includes(normalizedInput)) {
      suggestions.push(vn);
    }
  });
  
  // Find English keywords and their Vietnamese equivalents
  Object.keys(englishToVietnameseKeywords).forEach(en => {
    if (en.toLowerCase().includes(normalizedInput)) {
      const vnEquivalents = englishToVietnameseKeywords[en];
      suggestions.push(...vnEquivalents);
    }
  });
  
  // Remove duplicates and limit results
  return Array.from(new Set(suggestions)).slice(0, 8);
}

/**
 * Search modules with enhanced Vietnamese support
 * @param modules - Array of modules to search
 * @param searchTerm - Search term
 * @returns Filtered modules matching the search term
 */
export function searchModulesVietnamese<T extends {
  title: string;
  description: string;
  subtitle?: string;
  features?: string[];
  tags?: string[];
}>(modules: T[], searchTerm: string): T[] {
  if (!searchTerm.trim()) return modules;
  
  return modules.filter(module => {
    // Search in title, description, subtitle
    if (enhancedVietnameseSearch(searchTerm, module.title) ||
        enhancedVietnameseSearch(searchTerm, module.description) ||
        (module.subtitle && enhancedVietnameseSearch(searchTerm, module.subtitle))) {
      return true;
    }
    
    // Search in features
    if (module.features?.some(feature => enhancedVietnameseSearch(searchTerm, feature))) {
      return true;
    }
    
    // Search in tags
    if (module.tags?.some(tag => enhancedVietnameseSearch(searchTerm, tag))) {
      return true;
    }
    
    return false;
  });
}

/**
 * Highlight search terms in text with Vietnamese support
 * @param text - Text to highlight
 * @param searchTerm - Search term to highlight
 * @returns Text with highlighted terms
 */
export function highlightVietnameseSearch(text: string, searchTerm: string): string {
  if (!searchTerm.trim() || !text) return text;
  
  const words = text.split(/(\s+)/);
  
  return words.map(word => {
    if (enhancedVietnameseSearch(searchTerm, word)) {
      return `<mark class="bg-yellow-200 text-yellow-900 px-1 rounded">${word}</mark>`;
    }
    return word;
  }).join('');
}

const vietnameseSearchUtils = {
  removeVietnameseDiacritics,
  normalizeVietnameseText,
  vietnameseTextMatch,
  enhancedVietnameseSearch,
  getVietnameseSearchSuggestions,
  searchModulesVietnamese,
  highlightVietnameseSearch
};

export default vietnameseSearchUtils;
