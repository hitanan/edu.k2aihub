import ModulePageTemplate from '@/components/learning/ModulePageTemplate';
import { MCPLessons } from '@/data/mcp';
import { createTitle, createDescription } from '@/utils/seo';
import { K2Module } from '@/data/moduleNavigation';

export async function generateMetadata() {
  return {
    title: createTitle('MCP - Model Context Protocol'),
    description: createDescription(
      'Học cách tích hợp AI tools với Atlassian qua Model Context Protocol. Setup Jira automation, VS Code integration, và office productivity workflows với MCP.',
    ),
    keywords: [
      'MCP',
      'Model Context Protocol',
      'Atlassian integration',
      'Jira automation',
      'VS Code AI',
      'Cursor IDE',
      'Office productivity',
      'AI workflows',
      'K2AI',
    ],
    openGraph: {
      title: 'MCP - Model Context Protocol | K2AiHub',
      description:
        'Master Model Context Protocol để tích hợp AI tools với Atlassian Jira, VS Code, và office productivity platforms.',
      type: 'website',
    },
  };
}

export default function MCPMainPage() {
  const moduleData = {
    id: 'mcp',
    title: 'MCP - Model Context Protocol',
    subtitle: 'Tích hợp AI Tools với Enterprise Systems',
    description:
      'Học cách sử dụng Model Context Protocol để kết nối AI assistants như Claude, ChatGPT với enterprise systems như Atlassian Jira, Confluence. Tối ưu hóa productivity workflows cho developers và office users qua automated integrations.',
    level: 'Trung bình',
    duration: '12-15 giờ',
    category: 'Professional Skills',
    features: [
      'Atlassian Remote MCP Server integration với Jira và Confluence',
      'VS Code và Cursor IDE setup cho AI-enhanced development',
      'Office productivity automation với Microsoft 365 và Notion',
      'Enterprise-grade security implementation và best practices',
      'Custom MCP client development cho specialized business needs',
    ],
    icon: '🔗',
    color: 'from-indigo-600 to-purple-600',
    objectives: [
      'Master Model Context Protocol architecture và implementation',
      'Setup seamless integration giữa AI tools và Atlassian products',
      'Automate development workflows trong VS Code và Cursor IDE',
      'Implement office productivity solutions với MCP bridges',
      'Develop enterprise-grade security practices cho MCP deployments',
    ],
    prerequisites: [
      'Kinh nghiệm với Atlassian Jira và Confluence',
      'Basic programming knowledge (JavaScript/Node.js)',
      'Understanding của API và OAuth authentication',
      'Familiarity với AI tools như Claude hoặc ChatGPT',
    ],
    careerOutcomes: [
      'MCP Integration Specialist',
      'Enterprise AI Automation Engineer',
      'DevOps Productivity Consultant',
      'Atlassian Solutions Architect',
      'AI Workflow Optimization Expert',
    ],
    industryApplications: [
      'Enterprise software development teams sử dụng Atlassian suite',
      'Office productivity automation cho large organizations',
      'DevOps teams implementing AI-enhanced workflows',
      'IT consulting firms building custom MCP solutions',
      'Business process automation với AI integration',
    ],
    marketDemand: {
      averageSalary: '25-45 triệu VNĐ',
      jobGrowth: '+40%',
      hireDemand: 'Rất cao',
    },
    relatedModules: [K2Module.Python, K2Module.AIArtCreativeTech, K2Module.Cybersecurity, K2Module.DigitalMarketing],
    heroImageUrl: '/images/mcp-hero.jpg',
  };

  return <ModulePageTemplate moduleData={moduleData} lessons={MCPLessons} />;
}
