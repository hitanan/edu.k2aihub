import type { Metadata } from "next";
import React from 'react';
import ProgrammingDevClient from "./ProgrammingDevClient";
import { createTitle, createDescription, createKeywords } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle("AI cho Lập Trình & Phát Triển - Công Cụ AI Coding Tốt Nhất"),
  description: createDescription("So sánh chi tiết GitHub Copilot, Cursor IDE, ChatGPT và các AI coding tools. Kỹ thuật nâng cao, workflow productivity và xu hướng AI programming 2024-2025"),
  keywords: createKeywords(["AI coding", "GitHub Copilot", "Cursor IDE", "ChatGPT programming", "AI tools comparison", "prompt engineering", "senior developer tools", "AI workflow", "coding productivity"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

    title: createTitle("AI cho Lập Trình & Phát Triển - So Sánh Công Cụ AI Coding"),
    description: createDescription("Hướng dẫn toàn diện về AI trong lập trình: từ GitHub Copilot đến advanced techniques mà senior developers đang sử dụng"),
    type: "article",
    url: '/ai/programming-dev',
    images: [
      {
        url: '/ai-programming-tools.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Programming Tools Comparison'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('AI cho Lập Trình & Phát Triển'),
    description: createDescription('So sánh GitHub Copilot, Cursor IDE và top AI coding tools. Advanced techniques cho senior developers'),
  }
};


export default function ProgrammingDevAI() {
  return <ProgrammingDevClient />;
}