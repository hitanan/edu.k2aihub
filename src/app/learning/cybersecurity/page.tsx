import type { Metadata } from 'next';

import ModulePageTemplate, { type ModuleData } from '@/components/learning/ModulePageTemplate';
import { type BaseLessonData } from '@/components/learning/LessonPageTemplate';
import { CybersecurityLessonData, CybersecurityLessons } from '@/data/cybersecurity';
import { K2Module } from '@/data/k2-modules';
import { createModuleMetadata } from '@/utils/seo';

export const metadata: Metadata = createModuleMetadata(
  'Cybersecurity & Ethical Hacking - An Ninh Mạng',
  'Khóa học bảo mật mạng và ethical hacking toàn diện. Từ network security đến penetration testing',
  ['cybersecurity', 'ethical hacking', 'network security', 'penetration testing', 'malware analysis'],
  'cybersecurity',
);

// Convert CyberSecurityLesson to BaseLessonData interface
function convertToLesson(cyberSecurityLesson: CybersecurityLessonData): BaseLessonData {
  return {
    id: cyberSecurityLesson.id,
    title: cyberSecurityLesson.title,
    description: cyberSecurityLesson.description,
    duration: cyberSecurityLesson.duration,
    difficulty: cyberSecurityLesson.difficulty,
    imageUrl: cyberSecurityLesson.imageUrl || '/default-lesson.jpg',
    videoUrl: cyberSecurityLesson.videoUrl,
    objectives: cyberSecurityLesson.objectives,
    prerequisites: cyberSecurityLesson.prerequisites || ['Basic networking', 'Computer fundamentals'],
    exercises:
      cyberSecurityLesson.exercises?.map((ex) => ({
        title: ex.title,
        description: ex.description,
        difficulty: ex.difficulty,
        materials: ex.materials || [],
        procedure: ex.hints || [ex.description],
        expectedResults: ex.expectedResults || 'Security test completed successfully',
        solution: ex.solution || 'Follow security best practices',
      })) || [],
    resources: cyberSecurityLesson.resources || [],
    realWorldApplications: cyberSecurityLesson.realWorldApplications || [],
    caseStudies:
      cyberSecurityLesson.caseStudies?.map((cs) => ({
        title: cs.title,
        organization: cs.organization,
        problem: cs.problem,
        solution: cs.solution,
        impact: cs.impact,
        innovations: cs.innovations || [],
      })) || [],
  };
}

export default function CybersecurityPage() {
  // Convert lessons to base interface
  const convertedLessons = CybersecurityLessons.map(convertToLesson);

  const moduleData: ModuleData = {
    id: 'cybersecurity',
    title: 'Cybersecurity & Ethical Hacking',
    subtitle: 'An ninh mạng & Ethical Hacking',
    description:
      'Trở thành chuyên gia bảo mật thông tin với các kỹ thuật ethical hacking và cybersecurity hiện đại. Học cách bảo vệ hệ thống, phát hiện và ngăn chặn các cuộc tấn công mạng.',
    level: 'Trung bình đến Nâng cao',
    duration: '25-30 giờ',
    category: 'Security & Technology',
    primaryColor: 'red',
    gradientColors: 'from-slate-900 via-red-900 to-orange-900',
    basePath: '/learning/cybersecurity',
    heroImageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    features: [
      'Penetration Testing và Vulnerability Assessment',
      'Network Security và Firewall Configuration',
      'Incident Response và Digital Forensics',
      'Web Application Security Testing',
      'Social Engineering và Security Awareness',
      'Cryptography và Data Protection',
      'Security Operations Center (SOC)',
      'Compliance và Risk Management',
    ],
    icon: '🔒',
    statsConfig: {
      lessons: `${CybersecurityLessons.length}+ bài`,
      duration: '25-30 giờ',
      level: 'Trung bình đến Nâng cao',
      projects: '15+ bài lab thực hành',
    },
    marketData: {
      marketSize: '$345 Billion',
      marketNote: 'Global cybersecurity market by 2026',
      jobGrowth: '31% Growth',
      jobNote: 'Cybersecurity jobs by 2030',
      reduction: '95% Threat',
      reductionNote: 'Detection with proper security',
      startups: '3.5 Million',
      startupsNote: 'Unfilled cybersecurity jobs',
    },
    objectives: [
      'Thực hiện penetration testing và vulnerability assessment',
      'Thiết lập và quản lý hệ thống security operations',
      'Phân tích và respond to security incidents',
      'Áp dụng các phương pháp ethical hacking một cách có trách nhiệm',
      'Hiểu và implement các security frameworks và standards',
      'Phát triển kỹ năng digital forensics và malware analysis',
    ],
    prerequisites: [
      'Kiến thức cơ bản về networking và operating systems',
      'Hiểu biết về TCP/IP và các protocols mạng',
      'Kỹ năng sử dụng command line và scripting',
      'Tư duy logic và khả năng phân tích',
    ],
    careerPaths: [
      'Cybersecurity Analyst (18-35 triệu VNĐ)',
      'Penetration Tester (25-45 triệu VNĐ)',
      'Security Operations Center (SOC) Analyst (15-30 triệu VNĐ)',
      'Information Security Manager (30-55 triệu VNĐ)',
      'Digital Forensics Investigator (22-40 triệu VNĐ)',
      'Chief Information Security Officer (CISO) (60-150 triệu VNĐ)',
      'Security Consultant (28-50 triệu VNĐ)',
      'Incident Response Specialist (20-38 triệu VNĐ)',
    ],
    industryApplications: [
      'Banking và financial services',
      'Healthcare và medical systems',
      'Government và defense',
      'E-commerce và retail',
      'Cloud services và hosting',
      'Manufacturing và industrial control',
      'Education và research institutions',
      'Telecommunications',
      'Critical infrastructure',
      'Cybersecurity consulting firms',
    ],
    technicalHighlights: [
      {
        title: 'Penetration Testing',
        icon: '🎯',
        items: ['Web App Testing', 'Network Scanning', 'Vulnerability Assessment', 'Exploitation Techniques'],
      },
      {
        title: 'Security Tools',
        icon: '🛠️',
        items: ['Kali Linux', 'Metasploit', 'Burp Suite', 'Wireshark'],
      },
      {
        title: 'Incident Response',
        icon: '🚨',
        items: ['Threat Detection', 'Digital Forensics', 'Malware Analysis', 'Recovery Procedures'],
      },
      {
        title: 'Network Security',
        icon: '🌐',
        items: ['Firewall Configuration', 'IDS/IPS Systems', 'VPN Setup', 'Network Monitoring'],
      },
      {
        title: 'Cryptography',
        icon: '🔐',
        items: ['Encryption Algorithms', 'Digital Signatures', 'PKI Systems', 'Hash Functions'],
      },
      {
        title: 'Compliance',
        icon: '📋',
        items: ['ISO 27001', 'NIST Framework', 'GDPR Compliance', 'Risk Assessment'],
      },
    ],
    relatedModules: [K2Module.Python, K2Module.Arduino, K2Module.Biotechnology],
  };

  return <ModulePageTemplate moduleData={moduleData} lessons={convertedLessons} />;
}
