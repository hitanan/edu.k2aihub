instructions# Interactive Information Platform for Vietnamese Education

# K2AiHub - Interactive Educational Platform for Vietnamese Learners

The project called "K2AI - Nền tảng học tập thông minh, Công nghệ AI dẫn lối" is a modern, professional Next.js educational platform featuring three comprehensive modules: **Vietnam Geography**, **AI Của Tôi** (Practical AI Guide), and **STEM Education** (Science, Technology, Engineering, Arts & Mathematics).

K2AI - "Nền tảng học tập thông minh, Công nghệ AI dẫn lối" is a Next.js 15 educational platform with **60+ comprehensive learning modules** spanning from geography and AI to biotechnology and quantum computing, plus **100+ interactive educational games** with 3D simulations.

## 🌏 CRITICAL LANGUAGE REQUIREMENTS

## 🎯 Core Architecture Understanding

**ALL content, metadata, titles, and user-facing text MUST be in Vietnamese language.**

### Platform Scale & Structure

- **60+ Learning Modules**: From basic geography to advanced biotechnology, all using standardized template system- **Application Title**: ALWAYS use "K2AI - Nền tảng học tập thông minh, Công nghệ AI dẫn lối" (NEVER translate to English)

- **100+ Educational Games**: Including 19+ 3D games with A\* pathfinding, physics simulations, and cross-curricular connections - **Module Names**:

- **Static Site Generation**: 650+ pre-built pages for GitHub Pages deployment with <3s load times - "Địa Lý Việt Nam" (Vietnam Geography)

- **Template-Driven**: All modules use `ModulePageTemplate.tsx` and `LessonPageTemplate.tsx` for consistency - "AI Của Tôi" (My AI Guide)

- **All UI Text**: Buttons, labels, navigation, error messages in Vietnamese

### Critical Data Flow Patterns- **SEO Metadata**: Vietnamese titles, descriptions, keywords only

- **Content**: All descriptions, help text, and user documentation in Vietnamese

- **Primary Documentation**: [**K2AiHub.md**](../docs/K2AiHub.md) - The comprehensive source of truth for all features, technical specifications, and development guidelines.

### Vietnamese Language Requirements (CRITICAL)

- **ALL user content in Vietnamese**: UI text, metadata, error messages, navigation**Template Features:**

- **Application Title**: Always "K2AI - Nền tảng học tập thông minh, Công nghệ AI dẫn lối"

- **SEO Optimization**: Vietnamese-first for local search dominance- **Standardized Layout**: Consistent UI across all modules

- **Technical docs**: English OK for developer clarity- **Vietnamese Language**: All text in Vietnamese

- **Dynamic Navigation**: Previous/Next lesson navigation

## 🛠 Essential Development Patterns- **Responsive Design**: Mobile-optimized layout

- **SEO Optimization**: Proper metadata generation

### Dynamic Module Page Template System- **Customizable**: Module-specific icons, colors, and sidebar content

**ALL new learning modules MUST follow this standardized architecture:**- **Auto-generated Static Params**: For optimal performance

**Build Performance**: Build generates 650+ static pages. Monitor memory usage and wait for completion. - Document summarization

### Static Export Configuration4. **📈 Business & Marketing** (`/ai/business-marketing`)

### SEO Utility Functions (src/utils/seo.ts) - Health and fitness

### Game-to-Curriculum Connections

Every game MUST have `relatedLessons` array connecting to learning modules:#### Technical Implementation:

```typescript

relatedLessons: [- **Architecture**: Server/Client component separation for Next.js App Router

  {- **SEO**: Individual metadata for each AI category

    moduleId: 'python', lessonId: 'ai-libraries', - **Interactive Content**: Section-based navigation with state management

    title: 'AI Libraries', connection: 'Applies ML concepts in game logic'- **Performance**: Code splitting and lazy loading

  }

]### Module 3: STEM Education - Science, Technology, Engineering, Arts & Mathematics

```

A comprehensive educational module covering STEM/STEAM disciplines through interactive, hands-on learning experiences.

## 📊 Performance & SEO Standards - Understanding forces, motion, and energy

### Performance Targets (MUST ACHIEVE)3. **💻 Coding for Kids** (`/stem/coding-for-kids`)

- **First Load**: <3 seconds - Introduction to programming with Scratch

- **Navigation**: <500ms between pages - Visual programming concepts

- **Lighthouse SEO**: 95+ score - Creating games and animations

- **Mobile**: Touch-optimized interactions

4. **🏗️ Engineering Challenges** (`/stem/engineering-challenges`)

### SEO Implementation Checklist - Basic engineering principles

- ✅ Vietnamese metadata for all pages using `createTitle()`, `createDescription()` - Design thinking and problem solving

- ✅ JSON-LD structured data for education content - Building challenges and prototyping
  You can type your JSON-LD with TypeScript using community packages like schema-dts:

```ts
import { Product, WithContext } from 'schema-dts';

const jsonLd: WithContext<Product> = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'K2AI Sticker',
  image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=800&fit=crop',
  description: 'K2AI Dynamic at the speed of static.',
};
```

- ✅ OpenGraph + Twitter Cards for social sharing

- ✅ Proper canonical URLs and robots.txt5. **🔢 Math in Real Life** (`/stem/math-in-real-life`)
  - Practical mathematics applications

## 🔧 Component Architecture Patterns - Math in cooking, shopping, sports, and arts

- Making math relevant and fun

### Server vs Client Components

## 📝 Development Workflow Standards - Data processing and Serial communication

- Multi-sensor projects and data logging

### Before Any Module/Game Development

1. **Check moduleNavigation.ts**: Understand existing module structure5. **🌐 Communication & Networking** (`/arduino/arduino-communication`)

2. **Review template system**: Use `ModulePageTemplate.tsx` and `LessonPageTemplate.tsx` - Serial, I2C, and SPI communication protocols

3. **Examine similar modules**: Look at `src/data/` for patterns - WiFi and Bluetooth connectivity with ESP32

4. **Plan lesson connections**: How games connect to curriculum - Web server development and IoT dashboards
   - Cloud integration and remote monitoring

### Quality Gates

#### Technical Implementation:

### Documentation Requirements

- **Update K2AiHub.md**: All changes MUST be documented- **Architecture**: Progressive curriculum with hands-on projects

- **Module integration**: Update moduleNavigation.ts, homepage, sitemap- **Hardware Focus**: Real circuit diagrams and component guides

- **Vietnamese content**: All user-facing text in Vietnamese- **Code Examples**: Complete, tested Arduino sketches

- **Troubleshooting**: Common issues and debugging techniques

## 💡 Project-Specific Conventions- **Real-world Applications**: IoT projects and industry use cases

### File Organization### Global Features Implemented:

### Naming Conventions- ✅ Static generation for all pages (`force-static`)

- **Modules**: kebab-case URLs (`ai-art-creative-tech`)- ✅ Lazy loading with Suspense

- **Components**: PascalCase (`ModulePageTemplate.tsx`)- ✅ React.memo and useMemo for component optimization

- **Data files**: camelCase + module name (`digitalMarketing.ts`)- ✅ Critical resource preloading

- **Game IDs**: kebab-case with descriptive names- ✅ O(1) city lookups using Map data structure

### Error Handling Patterns#### SEO Excellence:

## Technical Architecture

### Technology Stack:

## 🎯 When NOT to Use Templates

- **Framework**: Next.js 15 with App Router, **Use alternative approaches for:**- **Language**: TypeScript for complete type safety

- Core modules (Geography `/city/`, AI Guide `/ai/`) - already established
- **Styling**: Tailwind CSS v4 with modern design system

- Simple informational pages without lesson structure - **Performance**: Static generation, memoization, lazy loading

- External integrations or standalone tools- **SEO**: Dynamic metadata, structured data, social sharing

- Landing pages that don't follow curriculum patterns- **State Management**: React hooks with performance optimizations

## Development Guidelines

### Component Architecture:

- **Server Components**: For SEO metadata and static content
- **Client Components**: For interactive features and state management
- **Performance**: Use React.memo, useMemo, and lazy loading
- **SEO**: Implement structured data and proper metadata

### Code Standards:

- **TypeScript**: Strict type checking enabled
- **Lint**: Strict linting rules enabled, code format enforced with Prettier
- **Performance**: Optimize bundle size and loading times
- **Accessibility**: WCAG compliance and keyboard navigation
- **Mobile-First**: Responsive design across all devices
- **SEO Optimization**: Implement dynamic metadata (createTitle, createDescription, createKeywords), structured data, and social sharing, external links must be _blank_ target and use rel="noopener noreferrer" for security
- **Next.js**: Follow best practices for routing and static generation and Next.js code standards, e.g. put all city components in the `src/components/city` directory.
- **Documentation**: All new features and changes MUST be documented in [K2AiHub.md](../docs/K2AiHub.md)
- **AI Agent utils scripts**: When AI agent create utilities to process on your request, ensure the script is efficient and follows best practices for performance and maintainability and can be reused. Put it under folder `src/utils` like `src/utils/add_urls.js` if you think if can be reused.
- **Code block**: Always ensure code blocks are WCAG compliant and support keyboard navigation for accessibility. All code blocks should be properly formatted and include language identifiers for syntax highlighting.
- **DRY Principle**: Avoid code duplication, use utility functions and components where possible

### Navigation:

- **Next.js Router**: Use `useRouter` for client-side navigation
- **Static Links**: Use Next.js `Link` component for optimal performance
- **SEO URLs**: Implement proper slug generation for dynamic pages
- **Breadcrumbs**: Implement breadcrumbs for better navigation and SEO
- **Navigation generation**: navigation should be generated dynamically based on the module structure, data in `src/data` for better user experience and SEO

## Test and quick check to see all the issue

When you run and build any comment below please wait until it complete, do not try to do the same another only after for a short time

```bash
npx tsc --noEmit # TypeScript type checking
npm run lint     # Code quality checks
npm run dev      # Development with turbopack
npm run build    # Production build with static generation
```

Do not try to `npm run build` and then `echo "Build completed - checking status"`, we have to wait the build until it has result, you can ask to run another task while waiting for build output and then back to check the build status

## Deployment Configuration

### GitHub Pages Setup:

- **Static Generation**: All pages pre-built for deployment
- **Export Configuration**: Next.js static export enabled
- **Asset Optimization**: Images and resources optimized for static hosting
- **Performance**: <3 second initial load time target

### Build Process:

```bash
npm run start    # Production server (for testing)
npm run dev      # Development with turbopack
npm run lint     # Code quality checks
npm run build    # Production build with static generation

```

## Quality Assurance

### Performance Targets:

- **First Load**: <3 seconds
- **Navigation**: <500ms between pages
- **Lighthouse Scores**: 95+ for SEO, Performance, Accessibility
- **Mobile Performance**: Optimized for touch interactions

### SEO Checklist:

- ✅ Dynamic metadata for all pages
- ✅ Structured data implementation
- ✅ Social media optimization
- ✅ Search engine indexing
- ✅ Mobile-first design

### Feature Completeness:

- ✅ All 34 cities with individual pages
- ✅ All 6 AI categories with comprehensive content
- ✅ All 7 STEM lessons with hands-on experiments
- ✅ Global feedback system
- ✅ Search functionality with historical name support
- ✅ Interactive map with performance optimization

## Instructions for Development

0. **Semantic SEO**: Structuring your content around topics and entities, not just keywords. This involves creating a web of interconnected content that fully covers a particular subject.
1. **Maintain Current Architecture**: Keep server/client component separation
2. **Performance First**: Always consider loading times and bundle size
3. **SEO Optimization**: Ensure all new pages have proper dynamic metadata (createTitle, createDescription, createKeywords)
4. **Mobile Experience**: Test all features on mobile devices
5. **Type Safety**: Use TypeScript for all new components
6. **Error Handling**: Implement proper error boundaries and fallbacks
7. **Vietnamese Language Requirements**:
   - **ALWAYS use Vietnamese for all user-facing content**
   - **Application title MUST be "K2AI - Nền tảng học tập thông minh, Công nghệ AI dẫn lối"**
   - **Module names: "Địa Lý Việt Nam", "AI Của Tôi", and other modules**
   - **All metadata, UI text, error messages in Vietnamese**
   - **SEO content must be in Vietnamese for local search optimization**
8. **Documentation Requirement**: ALL new features, updates, or major changes MUST be documented in /docs folder as an article for update announcement.
9. **Image Url**: incase you done have the image url, use import { defaultImage } from "@/utils/image"; to ensure all images are properly accessible.
10. **Module data**: when generate module pages, Prefer to create data and then to use it to create a dynamic pages with slug is `lessonId`. In ModuleMainPage function, moduledata must use ModuleData type the module metadata must follow below pattern
11. When add a blog page in /docs folder, ensure to add new category or tag to src/data/blogData.ts to ensure it can be used in category page or tag page

```typescript
export const metadata: Metadata = createModuleMetadata(
  'TikTok Shop & Social Commerce',
  'Học cách setup và optimize TikTok Shop, livestream selling strategies và social commerce cho maximized revenue.',
  ['tiktok shop', 'social commerce', 'livestream selling', 'e-commerce optimization', 'K2AI', 'học tập thông minh'],
  'tiktok-social-commerce',
);
```

11. **Module integration**: After module created, add it to all related part in application to moduleNavigation.ts, summary new module in /docs folder and Use data from moduleNavigation.ts to update Homepage, header navigation, footer, sitemap, ...
12. **Lesson and Game integration**: After lesson created, add it to all related part in gameData.ts, summary new module in /docs folder, when adding a game, ensure to link to the lessons accordingly by relatedLessons attribute.
13. **Blog Post Creation Standards 2025**: When creating file in /docs folder, ensure to follow these comprehensive standards:

### 📝 Blog Guide Content Standards 2025

**Target Length**: 80-120 dòng (1,500-3,000 từ) cho guide posts

- **Minimum viable**: 60 dòng (1,000 từ)
- **Comprehensive guides**: 100-150 dòng (2,000-4,000 từ)
- **Deep technical**: 150-200 dòng (4,000+ từ)

### Content Structure Framework

```markdown
---
title: 'Tiêu đề SEO-optimized với từ khóa chính (60-80 ký tự)'
description: 'Mô tả 140-160 ký tự với value proposition rõ ràng'
date: 'YYYY-MM-DD'
author: 'K2AiHub [Subject] Team'
category: 'Hướng Dẫn'
tags: ['tag1', 'tag2', 'tag3', 'K2AiHub']
featured: true/false
readingTime: 'X phút đọc'
---

## Giới Thiệu: Hook với Problem/Solution (200-300 từ)

- Vấn đề thực tế của người đọc
- Promise về giá trị sẽ nhận được
- Tại sao guide này khác biệt

## Bước 1-6: Implementation Steps (60-80% của nội dung)

- Mỗi bước 300-500 từ
- Code examples/screenshots khi cần
- Practical tips và best practices
- Common mistakes và cách tránh

## Kết Luận: Call-to-Action & Next Steps (150-200 từ)

- Tổng kết key takeaways
- Link đến related K2AiHub modules
- Encourage engagement/feedback
```

### 2025 Quality Standards

**Visual Elements:**

- Headers với emoji phù hợp (🎯, 🚀, 💡, ⚡, 📱)
- Code blocks với syntax highlighting khi cần
- Bold/italic cho emphasis
- Bullet points cho readability

**Engagement Features:**

- Interactive elements description
- Real-world Vietnamese examples
- Links to K2AiHub learning modules (/learning/module-name)
- Practical exercises/challenges

**SEO Requirements:**

- Primary keyword trong title & H1
- 3-5 semantic keywords naturally integrated
- Meta description với compelling CTA
- Internal links đến 3-5 K2AiHub pages
- External links đến authoritative sources (với rel="noopener noreferrer")

**Mobile Optimization:**

- Short paragraphs (2-3 sentences max)
- Scannable content structure
- Touch-friendly elements description

All blog post must be in Vietnamese language. Please also update src/lib/blog.ts to ensure it can be used in blog listing page, category page, tag page, ... Also ensure to add readingTime attribute to show how long it takes to read the post.

## Git strategy

- do not reset hard , just `git reset --soft` to keep changes in working directory in staged files

## Notes:

This is a production-ready application optimized for GitHub Pages deployment with comprehensive educational content, modern performance optimizations, and excellent SEO implementation.

Only do what needed, do not try to update page format or an other action not related in the request
