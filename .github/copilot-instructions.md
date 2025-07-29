# Interactive Information Platform for Vietnamese Education

The project called "Nền Tảng Thông Tin Tương Tác K2AI" is a modern, professional Next.js educational platform featuring two comprehensive modules: **Vietnam Geography** and **AI Của Tôi** (Practical AI Guide).

## 🌏 CRITICAL LANGUAGE REQUIREMENTS

**ALL content, metadata, titles, and user-facing text MUST be in Vietnamese language.**

- **Application Title**: ALWAYS use "Nền Tảng Thông Tin Tương Tác K2AI" (NEVER translate to English)
- **Module Names**:
  - "Địa Lý Việt Nam" (Vietnam Geography)
  - "AI Của Tôi" (My AI Guide)
- **All UI Text**: Buttons, labels, navigation, error messages in Vietnamese
- **SEO Metadata**: Vietnamese titles, descriptions, keywords only
- **Content**: All descriptions, help text, and user documentation in Vietnamese

**Exception**: Technical code comments and developer documentation may be in English.

## 📚 Complete Documentation

**Primary Documentation**: [**K2AiHub.md**](../docs/K2AiHub.md) - The comprehensive source of truth for all features, technical specifications, and development guidelines.

## Project Overview

This is a complete educational web application with two main modules designed to provide interactive learning experiences using modern technology.

### Module 1: Vietnam Geography - 34 Provincial Administrative Units

An interactive educational tool covering Vietnam's administrative restructuring with 34 provincial-level units after the merger.

#### Core Features Implemented:

- ✅ Interactive SVG map of Vietnam with click/hover interactions
- ✅ Smart search supporting current and former province names (e.g., "Quang Nam" → "Đà Nẵng")
- ✅ Individual SEO-optimized city pages with structured data
- ✅ Comprehensive city information with statistics and historical data
- ✅ Share functionality for each city
- ✅ Mobile-responsive design with touch interactions
- ✅ Regional exploration pages (9 regions)
- ✅ FAQ system with structured data

#### Technical Implementation:

- **Map Component**: `src/components/VietnamMap.tsx` - Interactive SVG with state management
- **City Pages**: `src/app/city/[slug]/page.tsx` - Dynamic routing with static generation
- **Region Pages**: `src/app/region/[slug]/page.tsx` - Regional exploration and statistics
- **Search**: `src/components/Search.tsx` - Real-time filtering with auto-close functionality
- **Data**: `src/data/cities.ts` - Comprehensive city database with merger information, script to add more tourist attractions urls in `src/utils/add_urls.js`
- **Performance**: O(1) city lookups, lazy loading, memoization, static generation

### Module 2: AI Của Tôi - Practical AI Guide

A comprehensive guide for using AI tools effectively across 6 major life and work categories.

#### AI Categories Implemented:

1. **💼 Office & Work** (`/ai/office-work`)

   - ChatGPT for professional emails
   - Excel automation with AI
   - AI-powered presentations
   - Smart time management

2. **🎨 Creative & Design** (`/ai/creative-design`)

   - Midjourney for image generation
   - Canva AI Magic Studio
   - AI content writing
   - Photo editing with AI

3. **📚 Education & Learning** (`/ai/education-learning`)

   - AI tutoring and assistance
   - Research with AI tools
   - Language learning
   - Document summarization

4. **📈 Business & Marketing** (`/ai/business-marketing`)

   - Marketing automation
   - Data analysis with AI
   - Chatbot development
   - SEO optimization

5. **🌱 Daily Life** (`/ai/daily-life`)

   - Personal productivity
   - Health and fitness
   - Financial management
   - Entertainment

6. **💻 Programming & Development** (`/ai/programming-dev`)
   - GitHub Copilot mastery
   - Code review and debugging
   - Documentation generation
   - Testing with AI

#### Technical Implementation:

- **Architecture**: Server/Client component separation for Next.js App Router
- **SEO**: Individual metadata for each AI category
- **Interactive Content**: Section-based navigation with state management
- **Performance**: Code splitting and lazy loading

### Global Features Implemented:

#### Standalone Feedback System (`/feedback`)

- ✅ Moved outside city module for global accessibility
- ✅ Form validation with error handling
- ✅ Email integration (mailto:jobtimeseo@gmail.com)
- ✅ Accessible from all main modules

#### Performance Optimizations:

- ✅ Static generation for all pages (`force-static`)
- ✅ Lazy loading with Suspense
- ✅ React.memo and useMemo for component optimization
- ✅ Critical resource preloading
- ✅ O(1) city lookups using Map data structure

#### SEO Excellence:

- ✅ Dynamic metadata generation for all pages
- ✅ Structured data (JSON-LD) for search engines
- ✅ OpenGraph and Twitter Cards
- ✅ Proper canonical URLs and robots configuration

## Technical Architecture

### Technology Stack:

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript for complete type safety
- **Styling**: Tailwind CSS v4 with modern design system
- **Performance**: Static generation, memoization, lazy loading
- **SEO**: Dynamic metadata, structured data, social sharing
- **State Management**: React hooks with performance optimizations

### Project Structure:

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage with module selection
│   ├── city/              # Vietnam Geography Module
│   ├── ai/                # AI Guide Module
│   └── feedback/          # Global Feedback System
├── components/            # Reusable components
├── data/                  # Static data files
├── utils/                 # Utility functions
└── types/                 # TypeScript definitions
```

### Data Sources:

- **City Information**: `docs/34-cities.md` - Administrative units list
- **Economic Data**: `docs/34-cities-rank.md` - Rankings and statistics
- **City Database**: `src/data/cities.ts` - Complete city information

## Development Guidelines

### Component Architecture:

- **Server Components**: For SEO metadata and static content
- **Client Components**: For interactive features and state management
- **Performance**: Use React.memo, useMemo, and lazy loading
- **SEO**: Implement structured data and proper metadata

### Code Standards:

- **TypeScript**: Strict type checking enabled
- **Performance**: Optimize bundle size and loading times
- **Accessibility**: WCAG compliance and keyboard navigation
- **Mobile-First**: Responsive design across all devices
- **SEO Optimization**: Implement dynamic metadata (createTitle, createDescription, createKeywords), structured data, and social sharing
- **Next.js**: Follow best practices for routing and static generation and Next.js code standards, e.g. put all city components in the `src/components/city` directory.
- **Documentation**: All new features and changes MUST be documented in [K2AiHub.md](../docs/K2AiHub.md)
- **AI Agent utils scripts**: When AI agent create utilities to process on your request, ensure the script is efficient and follows best practices for performance and maintainability and can be reused. Put it under folder `src/utils` like `src/utils/add_urls.js` if you think if can be reused.

### Navigation:

- **Next.js Router**: Use `useRouter` for client-side navigation
- **Static Links**: Use Next.js `Link` component for optimal performance
- **SEO URLs**: Implement proper slug generation for dynamic pages

## Deployment Configuration

### GitHub Pages Setup:

- **Static Generation**: All pages pre-built for deployment
- **Export Configuration**: Next.js static export enabled
- **Asset Optimization**: Images and resources optimized for static hosting
- **Performance**: <3 second initial load time target

### Build Process:

```bash
npm run build    # Production build with static generation, must set NODE_ENV=production before running
npm run start    # Production server (for testing)
npm run dev      # Development with turbopack
npm run lint     # Code quality checks
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
- ✅ Global feedback system
- ✅ Search functionality with historical name support
- ✅ Interactive map with performance optimization

## Instructions for Development

1. **Maintain Current Architecture**: Keep server/client component separation
2. **Performance First**: Always consider loading times and bundle size
3. **SEO Optimization**: Ensure all new pages have proper dynamic metadata (createTitle, createDescription, createKeywords)
4. **Mobile Experience**: Test all features on mobile devices
5. **Type Safety**: Use TypeScript for all new components
6. **Error Handling**: Implement proper error boundaries and fallbacks
7. **Vietnamese Language Requirements**:
   - **ALWAYS use Vietnamese for all user-facing content**
   - **Application title MUST be "Nền Tảng Thông Tin Tương Tác K2AI"**
   - **Module names: "Địa Lý Việt Nam" and "AI Của Tôi"**
   - **All metadata, UI text, error messages in Vietnamese**
   - **SEO content must be in Vietnamese for local search optimization**
8. **Documentation Requirement**: **ALL new features, updates, or changes MUST be documented in [K2AiHub.md](../docs/K2AiHub.md) as the single source of truth. This includes technical specifications, implementation details, architectural decisions, and development guidelines.**

This is a production-ready application optimized for GitHub Pages deployment with comprehensive educational content, modern performance optimizations, and excellent SEO implementation.
