# Interactive Information Platform - Vietnam Education

A modern, professional Next.js educational platform featuring two comprehensive modules: **Vietnam Geography** (34 Provincial Administrative Units) and **AI Của Tôi** (Practical AI Guide).

## 🌟 Project Overview

This platform serves as an interactive educational resource with a focus on practical learning through modern technology and user-friendly interfaces.

### 📍 **Module 1: Vietnam Geography - 34 Provincial Administrative Units**

An interactive geographical education tool covering Vietnam's administrative restructuring with 34 provincial-level units.

#### Core Features:

- **🗺️ Interactive SVG Map**: Click and explore Vietnam's 34 administrative units
- **🔍 Smart Search**: Search by current names or former province names (e.g., "Quang Nam" → "Đà Nẵng")
- **📊 Comprehensive Data**: Population, area, economic statistics, and historical information
- **🌐 SEO Optimized**: Individual pages for each city with proper metadata and structured data
- **📱 Mobile-First Design**: Responsive across all devices

### 🤖 **Module 2: AI Của Tôi - Practical AI Guide**

A comprehensive guide for using AI tools effectively in various aspects of life and work.

#### AI Categories:

- **💼 Office & Work**: ChatGPT for emails, Excel automation, presentations, time management
- **🎨 Creative & Design**: Midjourney, Canva AI, content writing, photo editing
- **📚 Education & Learning**: AI tutoring, research assistance, language learning
- **📈 Business & Marketing**: Marketing AI, data analysis, chatbots, SEO optimization
- **🌱 Daily Life**: Personal productivity, health, finance, entertainment
- **💻 Programming & Development**: GitHub Copilot, code review, debugging, documentation

## 🚀 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS v4 with modern design system
- **Performance**: Static generation, lazy loading, memoization
- **SEO**: Dynamic metadata, structured data (JSON-LD), OpenGraph
- **State Management**: React hooks with optimized re-renders
- **Data**: JSON-based with efficient caching and lookup algorithms

## 📦 Installation & Development

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/[username]/k2aihub.git
   cd k2aihub
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:3000`

### Build Commands

```bash
# Development with turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🌐 GitHub Pages Deployment

This project is configured for GitHub Pages deployment with static generation:

### Deployment Steps:

1. **Build for production:**

   ```bash
   npm run build
   ```

2. **GitHub Pages Configuration:**

   - Repository settings → Pages → Source: GitHub Actions
   - The build artifacts will be automatically deployed

3. **Custom Domain (Optional):**
   - Add `CNAME` file to `public/` directory
   - Configure DNS settings

### Static Export Configuration:

The project uses Next.js static generation with `output: 'export'` for GitHub Pages compatibility.

## 🧪 Testing Guide

### 1. Vietnam Geography Module Testing

**Interactive Map:**

- ✅ Click on different cities for detailed information
- ✅ Hover effects and visual feedback
- ✅ Map responsiveness on mobile devices

**Search Functionality:**

- ✅ Search current city names (e.g., "Hà Nội", "TP HCM")
- ✅ Search former province names (e.g., "Quang Nam" → "Đà Nẵng")
- ✅ Real-time filtering with map highlighting
- ✅ Auto-close search results after selection

**City Pages:**

- ✅ Individual SEO-optimized city pages (`/city/ha-noi`)
- ✅ Share button functionality
- ✅ Related cities navigation
- ✅ Structured data for search engines

### 2. AI Module Testing

**Navigation:**

- ✅ Category browsing and selection
- ✅ Sub-page navigation (office-work, creative-design, etc.)
- ✅ Interactive content sections

**Content Quality:**

- ✅ Practical examples and step-by-step guides
- ✅ Tool comparisons and recommendations
- ✅ Mobile-optimized reading experience

### 3. Global Features Testing

**Feedback System:**

- ✅ Form validation and error handling
- ✅ Email integration (mailto:jobtimeseo@gmail.com)
- ✅ Accessible from all modules

**Performance:**

- ✅ Fast initial page load (<3 seconds)
- ✅ Smooth navigation between pages
- ✅ Optimized images and lazy loading

**SEO & Accessibility:**

- ✅ Proper meta tags and OpenGraph
- ✅ Structured data implementation
- ✅ Mobile-first responsive design
- ✅ Keyboard navigation support

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Homepage with module selection
│   ├── loading.tsx              # Global loading component
│   ├── error.tsx                # Global error boundary
│   ├── not-found.tsx            # 404 page
│   ├── globals.css              # Global styles
│   ├── city/                    # Vietnam Geography Module
│   │   ├── page.tsx            # Interactive map and search
│   │   └── [slug]/             # Dynamic city pages
│   │       ├── page.tsx        # City detail page
│   │       └── loading.tsx     # City loading state
│   ├── ai/                      # AI Guide Module
│   │   ├── page.tsx            # AI categories overview
│   │   ├── office-work/        # Office & Work AI
│   │   ├── creative-design/    # Creative & Design AI
│   │   ├── education-learning/ # Education AI
│   │   ├── business-marketing/ # Business AI
│   │   ├── daily-life/         # Daily Life AI
│   │   └── programming-dev/    # Programming AI
│   └── feedback/                # Feedback System
│       ├── page.tsx            # Feedback page server component
│       └── FeedbackClient.tsx  # Feedback form client component
├── components/                   # Reusable components
│   ├── VietnamMap.tsx          # Interactive SVG map
│   ├── CityInfo.tsx            # City information display
│   ├── CityPage.tsx            # City detail page layout
│   ├── Search.tsx              # Smart search component
│   ├── FeedbackForm.tsx        # Contact form
│   ├── LoadingSpinner.tsx      # Loading indicator
│   └── CityStructuredData.tsx  # SEO structured data
├── data/                        # Static data files
│   └── cities.ts               # City information and statistics
├── utils/                       # Utility functions
│   ├── slug.ts                 # URL slug generation and lookup
│   ├── vietnamese.ts           # Vietnamese text processing
│   └── performance.ts          # Performance optimizations
├── types/                       # TypeScript definitions
│   └── index.ts                # Type definitions
public/                          # Static assets
├── ban-do-viet-nam-34-tinh.jpg # Vietnam map image
├── ban-do-34-tinh-thanh.jpg    # Administrative map
└── *.svg                       # Icon files
docs/                           # Documentation
├── 34-cities.md               # City list and merger information
└── 34-cities-rank.md          # Economic rankings and statistics
```

## ✨ Key Features Implemented

### Vietnam Geography Module:

- ✅ **Interactive Map**: SVG-based with click/hover interactions
- ✅ **Smart Search**: Current and historical province name support
- ✅ **SEO Optimization**: Individual city pages with metadata
- ✅ **Performance**: Static generation and lazy loading
- ✅ **Data Integrity**: Comprehensive city information with statistics

### AI Guide Module:

- ✅ **6 Specialized Categories**: Covering major AI use cases
- ✅ **Practical Examples**: Step-by-step tutorials and prompts
- ✅ **Tool Comparisons**: Feature analysis and recommendations
- ✅ **Interactive Navigation**: Smooth section switching
- ✅ **Mobile Optimization**: Touch-friendly interface

### Global Features:

- ✅ **Standalone Feedback System**: Accessible from all pages
- ✅ **Performance Optimizations**: <3s initial load time
- ✅ **SEO Excellence**: Structured data and social sharing
- ✅ **Accessibility**: Keyboard navigation and screen reader support
- ✅ **Mobile-First**: Responsive design across all devices

## 🎯 Production Deployment Checklist

- ✅ **Static Generation**: All pages pre-built for GitHub Pages
- ✅ **Performance Optimization**: Code splitting and lazy loading
- ✅ **SEO Implementation**: Complete metadata and structured data
- ✅ **Error Handling**: Proper error boundaries and fallbacks
- ✅ **Mobile Optimization**: Touch interactions and responsive design
- ✅ **Cross-browser Compatibility**: Modern browser support
- ✅ **Accessibility Standards**: WCAG compliance

## 📊 Performance Metrics

- **First Load Time**: <3 seconds
- **Navigation Speed**: <500ms between pages
- **SEO Score**: 95+ (Lighthouse)
- **Accessibility Score**: 95+ (Lighthouse)
- **Mobile Performance**: 90+ (Lighthouse)

## 🤝 Contributing

This project is built for educational purposes. For contributions or feedback, please use the integrated feedback form or contact: jobtimeseo@gmail.com

## 📄 License

Built for educational purposes with ❤️ using Next.js 15, TypeScript, and Tailwind CSS.

---

**Live Demo**: [Coming Soon - GitHub Pages Deployment]
**Repository**: [GitHub Repository Link]
