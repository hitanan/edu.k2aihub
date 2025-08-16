---
applyTo: '**'
---

# Dynamic Module Page Template System Instructions

## 🎯 Overview

This instruction guide provides comprehensive guidance for creating standardized, dynamic module pages using the K2AiHub template system. All learning modules MUST follow this architecture for consistency, maintainability, and optimal user experience.

### 📺 Default Media Resources

**Default YouTube Video**: `https://www.youtube.com/watch?v=vd2dtkMINIw` (Learning How to Learn by Barbara Oakley)
- Use this video as default for all new lessons if no specific video is provided
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
import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { [MODULE_NAME]Lessons } from '@/data/[module-name]';
import { createTitle, createDescription } from '@/utils/seo';

// Generate metadata
export async function generateMetadata() {
  return {
    title: createTitle('Module Title in Vietnamese'),
    description: createDescription('Comprehensive module description in Vietnamese'),
    keywords: ['keyword1', 'keyword2', 'vietnamese-learning', 'K2AI'],
    openGraph: {
      title: 'Module Title in Vietnamese',
      description: 'Module description for social sharing',
      type: 'website',
    },
  };
}

export default function ModuleMainPage() {
  const moduleData = {
    id: 'module-name',
    title: 'Module Title in Vietnamese',
    subtitle: 'Brief compelling subtitle',
    description: 'Comprehensive description explaining value proposition',
    level: 'Trung bình', // Cơ bản | Trung bình | Nâng cao
    duration: '15-20 giờ',
    category: 'Professional Skills', // or appropriate category
    features: [
      'Feature 1 description',
      'Feature 2 description',
      'Feature 3 description',
      'Feature 4 description'
    ],
    icon: '📱', // Appropriate emoji icon
    color: 'from-blue-600 to-indigo-600', // Gradient colors
    objectives: [
      'Learning objective 1',
      'Learning objective 2',
      'Learning objective 3'
    ],
    prerequisites: [
      'Prerequisite 1',
      'Prerequisite 2'
    ],
    careerOutcomes: [
      'Career path 1',
      'Career path 2',
      'Career path 3'
    ],
    industryApplications: [
      'Industry application 1',
      'Industry application 2',
      'Industry application 3'
    ],
    marketDemand: {
      averageSalary: '15-30 triệu VNĐ',
      jobGrowth: '+25%',
      hireDemand: 'Cao'
    },
    relatedModules: [
      K2Module.Module1,
      K2Module.Module2,
      K2Module.Module3
    ]
  };

  return (
    <ModulePageTemplate
      moduleData={moduleData}
      lessons={[MODULE_NAME]Lessons}
      heroImageUrl="/path/to/hero-image.jpg" // Optional
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
  return generateLessonMetadata(params.lessonId, [MODULE_NAME]Lessons);
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
    imageUrl: '/images/lesson-image.jpg', // Optional
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
- Meta description under 160 characters
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
