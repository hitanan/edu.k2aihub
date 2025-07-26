'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function OfficeWorkAI() {
  const [activeSection, setActiveSection] = useState('chatgpt-email');

  const sections = [
    {
      id: 'chatgpt-email',
      title: 'ChatGPT cho Email Chuyên Nghiệp',
      icon: '📧',
      content: {
        overview: 'Học cách viết email chuyên nghiệp, hiệu quả và lịch sự bằng ChatGPT',
        steps: [
          {
            title: 'Thiết lập Prompt cơ bản',
            content: `Prompt mẫu: "Hãy viết email chuyên nghiệp về [chủ đề] gửi cho [đối tượng] với tone [formal/friendly]. Nội dung chính: [mô tả ngắn gọn]"`
          },
          {
            title: 'Email xin nghỉ phép',
            content: `"Viết email xin nghỉ phép 2 ngày (15-16/01) gửi quản lý trực tiếp với lý do cần giải quyết việc cá nhân. Tone lịch sự và chuyên nghiệp."`
          },
          {
            title: 'Email follow-up dự án',
            content: `"Viết email follow-up về tiến độ dự án ABC gửi team, hỏi về deadline và các vấn đề cần hỗ trợ. Tone friendly nhưng professional."`
          },
          {
            title: 'Email từ chối lịch họp',
            content: `"Viết email từ chối lịch họp vào thứ 3 vì xung đột lịch, đề xuất thời gian thay thế. Tone lịch sự và xin lỗi."`
          }
        ],
        tips: [
          'Luôn cung cấp context cụ thể cho ChatGPT',
          'Đặc tả tone và độ formal mong muốn',
          'Review và chỉnh sửa output cho phù hợp',
          'Lưu các prompt tốt để tái sử dụng'
        ]
      }
    },
    {
      id: 'excel-automation',
      title: 'Tự Động Hóa Excel với AI',
      icon: '📊',
      content: {
        overview: 'Sử dụng AI để tạo công thức, phân tích dữ liệu và tự động hóa Excel',
        steps: [
          {
            title: 'Tạo công thức phức tạp',
            content: `Prompt: "Tạo công thức Excel để tính tổng doanh thu theo tháng từ bảng dữ liệu có cột Date (A), Revenue (B), chỉ lấy những dòng có tháng = 12"`
          },
          {
            title: 'Phân tích dữ liệu với Pivot',
            content: `"Hướng dẫn tạo Pivot Table để phân tích doanh số bán hàng theo sản phẩm và khu vực từ dữ liệu có cột: Product, Region, Sales, Date"`
          },
          {
            title: 'Macro tự động hóa',
            content: `"Viết macro VBA để tự động format bảng dữ liệu: border cho tất cả cell, header màu xanh, số liệu format currency"`
          },
          {
            title: 'Tạo dashboard đơn giản',
            content: `"Hướng dẫn tạo dashboard Excel với chart hiển thị doanh thu theo tháng và top 5 sản phẩm bán chạy"`
          }
        ],
        tips: [
          'Mô tả cấu trúc dữ liệu của bạn',
          'Yêu cầu giải thích từng bước',
          'Test công thức với dữ liệu mẫu trước',
          'Backup file trước khi chạy macro'
        ]
      }
    },
    {
      id: 'presentation-ai',
      title: 'Trình Bày Với AI',
      icon: '📽️',
      content: {
        overview: 'Tạo slide thuyết trình chuyên nghiệp và content hấp dẫn bằng AI',
        steps: [
          {
            title: 'Outline cho presentation',
            content: `"Tạo outline cho presentation 20 phút về 'Digital Marketing Strategy cho SME' gồm 10-12 slide, audience là chủ doanh nghiệp nhỏ"`
          },
          {
            title: 'Content cho từng slide',
            content: `"Viết content cho slide 'Benefits of Social Media Marketing' bao gồm 3 điểm chính, mỗi điểm 1-2 câu ngắn gọn"`
          },
          {
            title: 'Speaker notes',
            content: `"Tạo speaker notes cho slide về 'ROI of Digital Marketing' với thời gian nói 3 phút, bao gồm ví dụ cụ thể"`
          },
          {
            title: 'Opening và closing mạnh mẽ',
            content: `"Viết opening hook để bắt đầu presentation về AI trong giáo dục, và closing call-to-action thuyết phục"`
          }
        ],
        tips: [
          'Xác định rõ audience và mục tiêu',
          'Chia nhỏ presentation thành từng phần',
          'Yêu cầu AI gợi ý visual và examples',
          'Practice với nội dung AI tạo ra'
        ]
      }
    },
    {
      id: 'time-management',
      title: 'Quản Lý Thời Gian Thông Minh',
      icon: '⏰',
      content: {
        overview: 'Sử dụng AI để lập kế hoạch, ưu tiên công việc và tối ưu hóa thời gian',
        steps: [
          {
            title: 'Lập kế hoạch tuần',
            content: `"Tạo kế hoạch tuần cho Marketing Manager có 8 task: [list tasks], mỗi task estimate [thời gian], priority [High/Medium/Low]. Sắp xếp theo urgency-importance matrix"`
          },
          {
            title: 'Time blocking hiệu quả',
            content: `"Tạo time blocking schedule cho ngày làm việc 8h, bao gồm: 2h deep work, 3 cuộc họp 1h, email check, break time. Tối ưu cho productivity"`
          },
          {
            title: 'Xử lý multitasking',
            content: `"Đưa ra chiến lược để handle 5 dự án song song với deadline khác nhau. Suggest cách chia nhỏ task và milestone tracking"`
          },
          {
            title: 'Đánh giá và cải thiện',
            content: `"Analyze productivity pattern: sáng focus tốt, chiều hay bị distract, suggest cách redistribute task để maximize efficiency"`
          }
        ],
        tips: [
          'Cung cấp thông tin về working style của bạn',
          'Estimate thời gian thực tế cho từng task',
          'Review và adjust plan theo feedback',
          'Sử dụng AI để track progress'
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
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm">
                  💼
                </div>
                <h1 className="text-xl font-bold text-gray-900">
                  AI cho Văn Phòng & Công Việc
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
                  Văn Phòng & Công Việc
                </span>
              </nav>
            </div>
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
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
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
                          <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                              {step.title}
                            </h3>
                            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
                              <p className="text-gray-700 font-mono text-sm leading-relaxed">
                                {step.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tips */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center gap-2">
                    💡 Mẹo Quan Trọng
                  </h3>
                  <ul className="space-y-2">
                    {activeContent.content.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-yellow-700">
                        <span className="text-yellow-600 mt-1">•</span>
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
