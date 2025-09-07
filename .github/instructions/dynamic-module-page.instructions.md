---
applyTo: '**'
---

# Dynamic Module Page Template System Instructions

## 🎯 Overview

This instruction guide provides comprehensive guidance for creating standardized, dynamic module pages using the K2AiHub template system. All learning modules MUST follow this architecture for consistency, maintainability, and optimal user experience.

### 📺 Default Media Resources

**Youtube VideoUrl Generation**

- Try to search youtube to find the best VideoUrl for each lesson, use some of Key `YOUR_API_KEY` in [.envy](../../.envy) file, and the search query should include the lesson title and relevant keywords.
- If you need to determine a Youtube VideoUrl for an existing lesson, first check the video VIDEO_ID is available by check the response of https://www.googleapis.com/youtube/v3/videos?part=id&id=VIDEO_ID&key=YOUR_API_KEY, if the response for {pageInfo {totalResults :0}} is returned, it means that the video is not available, please find another VIDEO_ID

**Default YouTube Video**: `https://www.youtube.com/watch?v=vd2dtkMINIw` (Learning How to Learn by Barbara Oakley)

- Use this video as default for all new lessons if no specific video is provided or no video can be found
- This video is educational, widely applicable, and safe for all age groups
- Content: Introduction to effective learning techniques and strategies

**Default Hero Image**: `https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop`

- Use this image as default heroImageUrl for all modules if not specified
- Professional education/technology themed image
- High quality and royalty-free from Unsplash

## 📚 Template Architecture

### Core Template Components

#### 1. **ModulePageTemplate.tsx**

Location: `src/components/learning/ModulePageTemplate.tsx`

**Purpose**: Creates the main module overview page with comprehensive information display.

**Key Features**:

- Hero section with module statistics
- Learning objectives and prerequisites display
- Career opportunities and market demand
- Interactive lesson grid with difficulty indicators
- Industry applications showcase
- Call-to-action sections
- Related modules showcase

**Required Props**:

```typescript
interface ModulePageTemplateProps {
  moduleData: ModuleData;
  lessons: Lesson[];
  additionalStats?: Array<{
    label: string;
    value: string;
    icon: React.ReactNode;
  }>;
  specialSections?: React.ReactNode[];
}
```

#### 2. **LessonPageTemplate.tsx**

Location: `src/components/learning/LessonPageTemplate.tsx`

**Purpose**: Creates individual lesson pages with comprehensive learning content.

**Key Features**:

- Lesson navigation header with breadcrumbs
- Learning objectives and prerequisites
- Interactive exercises with step-by-step procedures
- Real-world applications and case studies
- Progress tracking sidebar
- Previous/Next lesson navigation

**Required Interface**:

```typescript
export interface BaseLessonData {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  videoUrl?: string;
  imageUrl?: string;
  objectives: string[];
  prerequisites: string[];
  exercises: Array<{
    title: string;
    description: string;
    difficulty: string;
    materials?: string[];
    procedure?: string[];
    expectedResults?: string;
    solution?: string;
  }>;
  realWorldApplications: string[];
  caseStudies?: Array<{
    title: string;
    organization: string;
    problem: string;
    solution: string;
    impact: string;
    innovations: string[];
  }>;
  resources?: Array<{
    title: string;
    url: string;
    type: string;
  }>;
}
```

## 🛠 Implementation Standards

### Module Main Page Structure

**File Location**: `/src/app/learning/[module-name]/page.tsx`

**Standard Implementation**:

```typescript
import { Metadata } from 'next';
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { [moduleName]Lessons } from '@/data/[module-name]';
import { [moduleName]ModuleData } from '@/data/[module-name]-module';
import { createModuleMetadata } from '@/utils/seo';


// Generate metadata
export const metadata: Metadata = createModuleMetadata(
  [moduleName]ModuleData.title,
  [moduleName]ModuleData.description,
  ['vật lý', 'thể thao', 'khoa học thể thao', 'cơ học', 'K2AI'],
  [moduleName]ModuleData.id
);

export default function [ModuleName]Page() {
  return (
    <ModulePageTemplate
      moduleData={[moduleName]ModuleData}
      lessons={[moduleName]Lessons}
    />
  );
}
```

### 🛠 Dynamic Module Page Template System

```
src/app/learning/[module-name]/
├── page.tsx                    # Main module page
├── [lessonId]/
│   └── page.tsx               # Dynamic lesson pages
└── components/                # Module-specific components (optional)
```

**Core Modules (Special Cases):**

- Geography: `/city/` (not in learning folder)
- AI Guide: `/ai/` (not in learning folder)

### Dynamic Lesson Page Structure

**File Location**: `/src/app/learning/[module-name]/[lessonId]/page.tsx`

**Standard Implementation**:

```typescript
import { LessonPageTemplate, generateLessonMetadata, generateLessonStaticParams, LessonPageConfig } from '@/components/learning/LessonPageTemplate'
import { [MODULE_NAME]Lessons } from '@/data/[module-name]'
import { PageProps } from '@/types';

// Generate static params for all lessons
export async function generateStaticParams() {
  return generateLessonStaticParams([MODULE_NAME]Lessons);
}

// Generate metadata for each lesson
export async function generateMetadata({ params }: PageProps) {
  const { lessonId } = await params;
  return generateLessonMetadata(lessonId, convertedLessons, 'module-name');
}

// Page component with standardized config
export default async function ModuleLessonPage({ params }: PageProps) {
  const config: LessonPageConfig<ModuleLessonType> = {
    moduleName: 'module-name',
    moduleTitle: 'Module Title in Vietnamese',
    modulePath: '/learning/module-name',
    lessons: [MODULE_NAME]Lessons,
    primaryColor: 'blue', // Primary theme color
    secondaryColor: 'indigo', // Secondary theme color
    gradientColors: 'from-slate-900 via-blue-900 to-slate-900', // Background gradient
    getFieldIcon: (field: string) => <IconComponent className="w-5 h-5" />, // Optional
    getFieldValue: (lesson) => lesson.specificField, // Optional
    sidebarContent: (lesson) => <CustomSidebarContent lesson={lesson} /> // Optional
  }
  const { lessonId } = await params;
  return <LessonPageTemplate lessonId={lessonId} config={config} />;
}
```

## 📋 Data Structure Requirements

### Module Data File

**File Location**: `/src/data/[module-name].ts`

**Required Structure**:

```typescript
export interface ModuleLessonType extends BaseLessonData {
  // Add module-specific fields if needed
  specificField?: string;
  additionalData?: any;
}

export const [MODULE_NAME]Lessons: ModuleLessonType[] = [
  {
    id: 'lesson-id-kebab-case',
    title: 'Lesson Title in Vietnamese',
    description: 'Comprehensive lesson description explaining what students will learn',
    duration: '120 phút',
    difficulty: 'Cơ bản', // Cơ bản | Trung bình | Nâng cao
    videoUrl: 'https://youtube.com/watch?v=VIDEO_ID', // Optional
    imageUrl: 'https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg', // Optional
    objectives: [
      'Specific learning objective 1',
      'Specific learning objective 2',
      'Specific learning objective 3'
    ],
    prerequisites: [
      'Required knowledge 1',
      'Required knowledge 2'
    ],
    exercises: [
      {
        title: 'Exercise Title',
        description: 'What the exercise accomplishes',
        difficulty: 'Cơ bản',
        materials: ['Tool 1', 'Tool 2'], // Optional
        procedure: [
          'Step 1 detailed instruction',
          'Step 2 detailed instruction',
          'Step 3 detailed instruction'
        ],
        expectedResults: 'What students should achieve', // Optional
        solution: 'Detailed solution and explanation' // Optional
      }
    ],
    realWorldApplications: [
      'Real application 1',
      'Real application 2',
      'Real application 3'
    ],
    caseStudies: [ // Optional
      {
        title: 'Case Study Title',
        organization: 'Company/Organization Name',
        problem: 'Problem description',
        solution: 'Solution implemented',
        impact: 'Results and impact',
        innovations: ['Innovation 1', 'Innovation 2']
      }
    ],
    resources: [ // Optional
      {
        title: 'Resource Title',
        url: 'https://example.com',
        type: 'Documentation' // Documentation | Tutorial | Tool | Reference
      }
    ],
    vietnamContext: {
      title: 'Cảm biến trong Nông nghiệp và Đô thị Thông minh tại Việt Nam',
      content: [
        'Nông nghiệp công nghệ cao ở Việt Nam (ví dụ: các trang trại hoa ở Đà Lạt, rau sạch ở Vingroup) ứng dụng rộng rãi cảm biến để giám sát nhiệt độ, độ ẩm, ánh sáng, giúp tối ưu hóa năng suất.',
        'Các dự án "Thành phố Thông minh" tại Bình Dương, Đà Nẵng đang triển khai các trạm quan trắc môi trường sử dụng cảm biến để theo dõi chất lượng không khí và tiếng ồn.',
        'Cảm biến chuyển động PIR là thành phần không thể thiếu trong các hệ thống chống trộm phổ biến được lắp đặt tại các gia đình và cửa hàng ở Việt Nam.'
      ]
    },
    careerConnect: {
      name: 'Chị Võ Thị Sương',
      title: 'Kỹ sư Nông nghiệp Công nghệ cao',
      company: 'Dalat Hasfarm',
      imageUrl: 'https://i.pravatar.cc/150?u=vo-thi-suong',
      quote: 'Công việc của tôi là "lắng nghe" cây trồng nói chuyện qua các con số từ cảm biến. Dữ liệu về độ ẩm đất, nhiệt độ không khí cho chúng tôi biết chính xác khi nào cây cần nước, cần ánh sáng. Arduino và các cảm biến đã cách mạng hóa ngành nông nghiệp truyền thống.'
    },
    quizzes: [
      {
        question: 'Cảm biến DHT22 có thể đo được những đại lượng nào?',
        options: ['Chỉ nhiệt độ', 'Nhiệt độ và áp suất', 'Nhiệt độ và độ ẩm', 'Ánh sáng và âm thanh'],
        correctAnswerIndex: 2,
        explanation: 'DHT22 là một cảm biến phổ biến có khả năng đo đồng thời cả nhiệt độ và độ ẩm của môi trường xung quanh.'
      },
      {
        question: 'Cảm biến chuyển động PIR (Passive Infrared) hoạt động dựa trên nguyên tắc nào?',
        options: ['Phát ra sóng siêu âm', 'Đo sự thay đổi của ánh sáng', 'Phát hiện bức xạ hồng ngoại (thân nhiệt) từ các vật thể chuyển động', 'Đo khoảng cách'],
        correctAnswerIndex: 2,
        explanation: 'Cảm biến PIR hoạt động một cách thụ động bằng cách phát hiện sự thay đổi đột ngột của bức xạ hồng ngoại, vốn được phát ra từ các cơ thể sống như người và động vật.'
      }
    ]
  }
  // ... more lessons
]
```

## 🎨 Visual Design Standards

### Color Schemes by Category

**Professional Skills**:

- Primary: `blue` / Secondary: `indigo`
- Gradient: `from-blue-600 to-indigo-600`

**Creative Technology**:

- Primary: `purple` / Secondary: `pink`
- Gradient: `from-purple-600 to-pink-600`

**Programming & Development**:

- Primary: `green` / Secondary: `emerald`
- Gradient: `from-green-600 to-emerald-600`

**Science & Research**:

- Primary: `teal` / Secondary: `cyan`
- Gradient: `from-teal-600 to-cyan-600`

**Security & Technology**:

- Primary: `red` / Secondary: `orange`
- Gradient: `from-red-600 to-orange-600`

### Typography Hierarchy

1. **Module Title**: `text-4xl md:text-6xl font-bold`
2. **Section Headers**: `text-3xl md:text-4xl font-bold`
3. **Lesson Titles**: `text-xl font-bold`
4. **Body Text**: `text-gray-300` with appropriate sizing
5. **Metadata**: `text-sm text-gray-400`

## 🔧 SEO and Performance Requirements

### Metadata Standards

**All pages MUST include**:

- Vietnamese title with K2AiHub branding
- Meta description in Vietnamese under 160 characters
- Appropriate keywords for Vietnamese market
- OpenGraph tags for social sharing
- Structured data (JSON-LD) for search engines

### Performance Standards

**Requirements**:

- Static generation for all pages (`generateStaticParams`)
- Lazy loading for images and heavy components
- Optimal bundle size through code splitting
- Mobile-first responsive design
- Accessibility compliance (WCAG AA)
- Follow Prettier and ESLint rules in the .prettierrc file (like 2 spaces indentation, single quotes, etc.)

## 🌐 Vietnamese Language Standards

### Content Requirements

**ALL user-facing content MUST be in Vietnamese**:

- Page titles and descriptions
- Navigation elements
- Button labels and calls-to-action
- Error messages and system feedback
- Learning objectives and prerequisites
- Exercise instructions and explanations

### SEO Localization

**Vietnamese-specific optimization**:

- Use Vietnamese keywords in metadata
- Implement proper Vietnamese text normalization
- Include local market context in descriptions
- Optimize for Vietnamese search behavior patterns

## 🚀 Implementation Checklist

### Module Creation Checklist

- [ ] **Data File**: Create `/src/data/[module-name].ts` with complete lesson data
- [ ] **Main Page**: Implement `/src/app/learning/[module-name]/page.tsx`
- [ ] **Lesson Pages**: Implement `/src/app/learning/[module-name]/[lessonId]/page.tsx`
- [ ] **Metadata**: Add proper Vietnamese SEO metadata
- [ ] **Navigation**: Update `/src/data/moduleNavigation.ts`
- [ ] **Sitemap**: Update `/src/utils/sitemapGenerator.ts`
- [ ] **Testing**: Verify all pages build and render correctly
- [ ] **Performance**: Check Lighthouse scores (95+ target)
- [ ] **Accessibility**: Verify WCAG AA compliance
- [ ] **Mobile**: Test responsive design on various devices

### Quality Assurance

**Before deploying any module**:

1. **Build Test**: `npm run build` completes without errors
2. **Link Validation**: All internal links work correctly
3. **Content Review**: All Vietnamese content is accurate and professional
4. **Design Consistency**: Visual design matches K2AiHub standards
5. **Performance**: Page load times under 3 seconds
6. **SEO**: Metadata and structured data properly implemented

## 📞 Support and Maintenance

### When to Use This System

**REQUIRED for all new learning modules**:

- Professional skills modules
- Creative technology modules
- Programming and development modules
- Science and research modules
- Any module with structured lesson content
- Update LessonPageTemplate components if the design (especially color ranges, icon, gradients) or layout from lesson fields was not existed
- Create a new LessonPageTemplate for specific Module lessons from the current LessonPageTemplate if you deeply think it is needed and cannot reuse existing components

### When NOT to Use This System

**Use alternative approaches for**:

- Core modules (Geography `/city/`, AI Guide `/ai/`)
- Simple informational pages
- Landing pages without lesson structure
- External integrations or tools

### Maintenance Guidelines

**Regular updates required**:

- Keep lesson content current and relevant
- Update market demand data quarterly
- Refresh case studies and real-world applications
- Monitor and improve performance metrics
- Update Vietnamese language content for clarity

---

**Last Updated**: August 2, 2025  
**Version**: 1.0  
**Maintainer**: K2AiHub Development Team
