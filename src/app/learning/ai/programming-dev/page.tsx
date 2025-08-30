import type { Metadata } from "next";
import React from 'react';
import ProgrammingDevClient from "./ProgrammingDevClient";
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  'AI cho Lập Trình & Phát Triển - Công Cụ AI Coding Tốt Nhất',
  'So sánh chi tiết GitHub Copilot, Cursor IDE, ChatGPT và các AI coding tools. Kỹ thuật nâng cao, workflow productivity và xu hướng AI programming 2024-2025',
  ['AI coding', 'GitHub Copilot', 'Cursor IDE', 'ChatGPT programming', 'AI tools comparison', 'prompt engineering', 'senior developer tools', 'AI workflow', 'coding productivity'],
  'ai/programming-dev'
);


export default function ProgrammingDevAI() {
  return <ProgrammingDevClient />;
}