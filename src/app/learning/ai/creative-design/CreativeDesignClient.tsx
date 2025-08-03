'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ShareButton from '@/components/ShareButton';

export default function CreativeDesignClient() {
  const [activeSection, setActiveSection] = useState('midjourney-basics');

  const sections = [
    {
      id: 'midjourney-basics',
      title: 'Midjourney cho Người Mới Bắt Đầu',
      icon: '🎨',
      content: {
        overview: 'Học cách tạo hình ảnh chuyên nghiệp với Midjourney từ cơ bản đến nâng cao',
        steps: [
          {
            title: 'Thiết lập và bắt đầu',
            content: `Bước 1: Join Discord server của Midjourney
Bước 2: Subscribe plan phù hợp (/subscribe)
Bước 3: Sử dụng lệnh /imagine [prompt]
Ví dụ: /imagine beautiful landscape with mountains and lake, golden hour lighting --ar 16:9`
          },
          {
            title: 'Cấu trúc prompt hiệu quả',
            content: `Format: [Subject] + [Style] + [Composition] + [Lighting] + [Parameters]
Ví dụ: "Portrait of a professional businesswoman, corporate headshot style, clean background, soft natural lighting, high resolution --ar 3:4 --q 2"`
          },
          {
            title: 'Parameters quan trọng',
            content: `--ar (aspect ratio): 16:9, 4:3, 1:1, 3:4
--q (quality): 0.25, 0.5, 1, 2
--s (stylize): 0-1000 (mức độ artistic)
--c (chaos): 0-100 (mức độ ngẫu nhiên)
--seed: để tái tạo kết quả tương tự`
          },
          {
            title: 'Prompt cho business graphics',
            content: `"Modern office workspace, minimalist design, professional atmosphere, clean lines, neutral colors, natural lighting --ar 16:9 --q 2"
"Infographic style illustration, data visualization, clean modern design, blue and white color scheme --ar 1:1"`
          }
        ],
        tips: [
          'Bắt đầu với prompt đơn giản, từ từ thêm chi tiết',
          'Sử dụng reference images để có kết quả tốt hơn',
          'Lưu lại prompt của những hình ảnh ưng ý',
          'Thử nghiệm với các style artists nổi tiếng'
        ]
      }
    },
    {
      id: 'canva-ai',
      title: 'Canva AI Magic Studio',
      icon: '✨',
      content: {
        overview: 'Tận dụng các công cụ AI trong Canva để thiết kế nhanh và chuyên nghiệp',
        steps: [
          {
            title: 'Magic Design - Tạo design tự động',
            content: `1. Chọn loại design (presentation, social post, etc.)
2. Upload ảnh hoặc nhập text mô tả
3. Canva sẽ tạo multiple design options
4. Customize theo brand colors và fonts
Ví dụ: "Create Instagram post for coffee shop promotion, warm colors, modern style"`
          },
          {
            title: 'Background Remover AI',
            content: `1. Upload ảnh cần xóa background
2. Click "Remove background" (tự động với AI)
3. Fine-tune edges nếu cần
4. Add new background hoặc keep transparent
Tip: Chụp ảnh với background tương phản để AI work tốt hơn`
          },
          {
            title: 'Magic Write - Content generation',
            content: `1. Trong text editor, type "/" để mở Magic Write
2. Nhập prompt: "Write Instagram caption for new product launch"
3. Choose tone: professional, casual, funny, etc.
4. Edit và customize content
Ví dụ prompts: "Blog intro about digital marketing trends 2025"`
          },
          {
            title: 'Brand Kit với AI',
            content: `1. Upload logo để AI extract brand colors
2. AI suggest fonts phù hợp với brand
3. Create brand templates với AI
4. Maintain consistency across designs
Magic Resize: Tự động resize design cho multiple platforms`
          }
        ],
        tips: [
          'Set up Brand Kit trước khi bắt đầu design',
          'Sử dụng Magic Resize để save time',
          'Combine AI tools với manual editing',
          'Keep design elements consistent với brand'
        ]
      }
    },
    {
      id: 'content-writing',
      title: 'Viết Nội Dung Sáng Tạo với AI',
      icon: '✍️',
      content: {
        overview: 'Sử dụng AI để tạo content marketing, copywriting và creative writing hiệu quả',
        steps: [
          {
            title: 'Blog post structure với AI',
            content: `Prompt: "Create blog post outline about 'Remote Work Productivity Tips' for 1500 words:
- Target audience: remote workers
- Include: introduction, 5 main tips, conclusion
- SEO keywords: remote work, productivity, work from home"
Follow up: "Write engaging introduction paragraph for this blog post"`
          },
          {
            title: 'Social media content calendar',
            content: `"Create 1-week social media content calendar for fitness brand:
- 3 motivational posts
- 2 workout tips  
- 1 nutrition advice
- 1 client success story
Include captions, hashtags, and best posting times"`
          },
          {
            title: 'Email marketing campaigns',
            content: `"Write email sequence for new subscriber welcome series (3 emails):
Email 1: Welcome + brand story
Email 2: Best resources/tips
Email 3: Special offer
Tone: friendly but professional, include CTAs"`
          },
          {
            title: 'Product descriptions that sell',
            content: `"Write compelling product description for wireless headphones:
- Target: young professionals
- Key features: noise-canceling, 24h battery, premium sound
- Length: 100-150 words
- Include emotional benefits and technical specs"`
          }
        ],
        tips: [
          'Luôn specify target audience và tone',
          'Break down dài content thành nhiều prompts nhỏ',
          'Edit và personalize AI output',
          'A/B test different versions'
        ]
      }
    },
    {
      id: 'photo-editing',
      title: 'Chỉnh Sửa Ảnh với AI',
      icon: '📸',
      content: {
        overview: 'Sử dụng các công cụ AI để enhance, retouch và transform ảnh một cách chuyên nghiệp',
        steps: [
          {
            title: 'Upscale và enhance quality',
            content: `Tools: Upscale.media, Waifu2x, Real-ESRGAN
Process:
1. Upload ảnh resolution thấp
2. Chọn mức upscale (2x, 4x, 8x)
3. Chọn model phù hợp (photo, anime, art)
4. Download ảnh đã enhance
Best for: product photos, old photos, web images`
          },
          {
            title: 'Portrait retouching tự động',
            content: `Tools: PortraitPro, FaceApp, Remini
Features:
- Skin smoothing và blemish removal
- Eye enhancement và teeth whitening  
- Hair retouching
- Makeup application
- Age progression/regression
Tip: Giữ natural look, avoid over-processing`
          },
          {
            title: 'Background replacement AI',
            content: `Tools: Remove.bg, PhotoRoom, Canva
Steps:
1. Remove background automatically
2. Choose new background (studio, outdoor, abstract)
3. Adjust lighting và shadows để match
4. Fine-tune edges và reflections
Use cases: product photography, portraits, social media`
          },
          {
            title: 'Style transfer và artistic effects',
            content: `Tools: Prisma, DeepArt, RunwayML
Process:
1. Upload source image
2. Choose artistic style (Van Gogh, Picasso, modern art)
3. Adjust intensity và blend settings
4. Apply style transfer
5. Fine-tune final result
Creative applications: social media, presentations, marketing`
          }
        ],
        tips: [
          'Always keep original files as backup',
          'Batch process multiple images với same settings',
          'Learn basic photo editing principles',
          'Combine AI tools với manual editing'
        ]
      }
    }
  ];

  const activeContent = sections.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Link href="/ai" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white text-sm">
                  🎨
                </div>
                <h1 className="text-xl font-bold text-gray-900">
                  AI cho Sáng Tạo & Thiết Kế
                </h1>
              </Link>
              <nav className="hidden md:flex items-center gap-1 ml-6">
                <Link href="/" className="text-gray-500 hover:text-gray-700 text-sm">
                  Trang Chủ
                </Link>
                <span className="text-gray-300 mx-2">/</span>
                <Link href="/ai" className="text-gray-500 hover:text-gray-700 text-sm">
                  AI Của Tôi
                </Link>
                <span className="text-gray-300 mx-2">/</span>
                <span className="text-gray-900 text-sm font-medium">
                  Sáng Tạo & Thiết Kế
                </span>
              </nav>
            </div>
            <ShareButton 
              title="AI cho Sáng Tạo & Thiết Kế | K2AiHub"
              description="Midjourney cho image generation, Canva AI Magic Studio, AI content writing và photo editing với AI"
            />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-8">
              <h3 className="font-semibold text-gray-900 mb-4">Nội Dung</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                      activeSection === section.id
                        ? 'bg-purple-50 text-purple-700 border border-purple-200'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{section.icon}</span>
                      <span className="text-sm font-medium">{section.title}</span>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeContent && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{activeContent.icon}</span>
                    <h1 className="text-3xl font-bold text-gray-900">{activeContent.title}</h1>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {activeContent.content.overview}
                  </p>
                </div>

                {/* Steps */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Hướng Dẫn Chi Tiết</h2>
                  <div className="space-y-6">
                    {activeContent.content.steps.map((step, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                              {step.title}
                            </h3>
                            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-purple-500">
                              <pre className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap font-sans">
                                {step.content}
                              </pre>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tips */}
                <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-pink-800 mb-4 flex items-center gap-2">
                    💡 Mẹo Quan Trọng
                  </h3>
                  <ul className="space-y-2">
                    {activeContent.content.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-pink-700">
                        <span className="text-pink-600 mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
