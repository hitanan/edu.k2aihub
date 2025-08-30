---
mode: agent
---

# Hướng Dẫn Tối Ưu Metadata cho K2AiHub

## 🎮 Tạo Metadata cho Game Pages

### Sử dụng createGameMetadata() function

**Cách thực hiện:**

```typescript
import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';

export const metadata: Metadata = createGameMetadata('biotech-lab-simulation-3d');
```

**Function tự động xử lý:**

- ✅ Lấy title, description từ EDUCATIONAL_GAMES_DATA
- ✅ Map skills thành keywords
- ✅ Tạo OpenGraph tags với Unsplash image
- ✅ Twitter Cards optimization
- ✅ Structured data và canonical URL

**Ví dụ game data structure:**

```typescript
{
  id: 'biotech-lab-simulation-3d',
  title: 'Biotech Lab Simulation 3D',
  description: 'Immersive 3D biotechnology laboratory với real-time experiments',
  skills: ['Biotechnology', '3D Simulation', 'Lab Safety', 'Scientific Method'],
  // Function sẽ tự động convert skills -> keywords
}
```

## 📚 Tạo Metadata cho Module Pages

### Sử dụng createModuleMetadata() function

**Migration từ manual metadata:**

```typescript
// CŨ (manual - cần thay thế):
export const metadata: Metadata = {
  title: createTitle('Biotechnology & Life Sciences'),
  description: createDescription('Khóa học Biotechnology chuyên sâu'),
  keywords: ['biotechnology', 'gene editing', 'crispr'],
  openGraph: {
    /* manual config */
  },
  twitter: {
    /* manual config */
  },
};

// MỚI (optimized - khuyến nghị):
export const metadata: Metadata = createModuleMetadata(
  'Biotechnology & Life Sciences - Công Nghệ Sinh Học',
  'Khóa học Biotechnology và Life Sciences chuyên sâu. Từ gene editing đến medical applications',
  ['biotechnology', 'gene editing', 'crispr', 'medical technology'],
);
```

**Function tự động xử lý:**

- ✅ Consistent title formatting với K2AiHub branding
- ✅ Description optimization với site branding
- ✅ Keywords combination với common SEO keywords
- ✅ Social media metadata với educational theme
- ✅ Canonical URLs và robots configuration

## 📖 Tạo Metadata cho Lesson Pages (Dynamic Routes)

### Sử dụng createLessonMetadata() function

**Cho dynamic lesson pages (`[lessonId]/page.tsx`):**

```typescript
import { createLessonMetadata } from '@/utils/seo';
import { PageProps } from '@/types';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lessonId } = await params;

  // Tìm lesson data từ module lessons array
  const lesson = biotechnologyLessons.find((l) => l.id === lessonId);

  if (!lesson) {
    return createLessonMetadata('Lesson Not Found', 'Lesson không tồn tại', 'biotechnology', lessonId);
  }

  return createLessonMetadata(
    lesson.title,
    lesson.description,
    'biotechnology', // moduleType
    lessonId,
    lesson.objectives, // converted to keywords
  );
}
```

**Function tự động xử lý:**

- ✅ Lesson-specific social media optimization
- ✅ Module context trong metadata
- ✅ Canonical URL với module/lesson path
- ✅ Article-type structured data cho SEO

## 🔧 Implementation Guidelines

### 1. Priority Migration Order:

1. **Game Pages** (đơn giản nhất) - chỉ cần gameId
2. **Module Pages** - 3 parameters: title, description, keywords
3. **Lesson Pages** - dynamic metadata generation

### 2. Yêu Cầu Quan Trọng:

- ✅ **Giữ nguyên nội dung page** - chỉ thay đổi metadata export
- ✅ **Preserve existing title/description** - dùng làm input cho functions
- ✅ **Keep manual keywords** - pass vào functions như parameters
- ✅ **Test social sharing** - verify OpenGraph và Twitter Cards

### 3. Quality Assurance:

- ✅ Build success sau khi migration
- ✅ Social media preview working
- ✅ SEO metadata complete và consistent
- ✅ Performance không bị impact

## 🎯 Expected Results

**Before Migration:**

- Manual metadata với inconsistent formatting
- Missing social media optimization
- No structured data
- Incomplete SEO coverage

**After Migration:**

- Consistent K2AiHub branding across all pages
- Complete social media integration (Facebook, Twitter)
- Automated Unsplash image generation
- Structured data cho better search results
- Canonical URLs và proper robots configuration

## 📋 Migration Checklist

### Per Game Page:

- [ ] Replace manual metadata with `createGameMetadata(gameId)`
- [ ] Verify gameId exists trong EDUCATIONAL_GAMES_DATA
- [ ] Test social media preview

### Per Module Page:

- [ ] Extract existing title, description, keywords
- [ ] Replace with `createModuleMetadata(title, description, keywords)`
- [ ] Verify social sharing works

### Per Lesson Dynamic Route:

- [ ] Implement `generateMetadata()` function
- [ ] Use `createLessonMetadata()` với lesson data
- [ ] Handle not-found cases properly
- [ ] Test dynamic routes generation

**🚀 Result: Comprehensive SEO optimization với minimal code changes!**
