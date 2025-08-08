import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface CybersecurityLessonData extends BaseLessonData {
  securityDomains?: string[];
  threats?: string[];
  tools?: Array<{
    name: string;
    category: string;
    description: string;
    difficulty: string;
  }>;
}

export const CybersecurityLessons: CybersecurityLessonData[] = [
  {
    id: 'cybersecurity-fundamentals',
    title: 'Cơ bản về An toàn Thông tin',
    description:
      'Tìm hiểu các nguyên tắc cơ bản của an toàn thông tin và cybersecurity trong thế giới số.',
    duration: '130 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://youtube.com/watch?v=inWWhr5tnEA',
    imageUrl: '/images/cybersecurity-fundamentals.jpg',
    objectives: [
      'Hiểu CIA Triad: Confidentiality, Integrity, Availability',
      'Nắm vững các loại threats và vulnerabilities',
      'Tìm hiểu defense-in-depth strategy',
      'Biết cách đánh giá rủi ro bảo mật',
    ],
    prerequisites: [
      'Kiến thức máy tính cơ bản',
      'Hiểu biết về mạng internet',
      'Operating systems basics',
    ],
    exercises: [
      {
        title: 'Security Risk Assessment',
        description:
          'Thực hiện đánh giá rủi ro bảo mật cho một hệ thống IT nhỏ',
        difficulty: 'Cơ bản',
        materials: [
          'Risk assessment framework',
          'Vulnerability checklist',
          'Documentation tools',
        ],
        procedure: [
          'Identify và catalog tất cả assets trong hệ thống',
          'Determine asset values và criticality levels',
          'Identify potential threats cho từng asset',
          'Assess vulnerabilities và likelihood of exploitation',
          'Calculate risk scores (Impact × Likelihood)',
          'Prioritize risks theo severity',
          'Develop mitigation strategies cho high-risk items',
          'Create risk register và monitoring plan',
        ],
        expectedResults:
          'Comprehensive risk assessment với prioritized action plan',
        solution:
          '# Cybersecurity Risk Assessment Framework\\nimport pandas as pd\\nimport numpy as np\\nimport matplotlib.pyplot as plt\\nimport seaborn as sns\\n\\nclass SecurityRiskAssessment:\\n    def __init__(self):\\n        self.assets = []\\n        self.threats = []\\n        self.vulnerabilities = []\\n        self.risk_matrix = None\\n    \\n    def add_asset(self, name, category, value, criticality):\\n        """Add asset to assessment\\n        \\n        Args:\\n            name: Asset name\\n            category: Type (Server, Database, Network, etc.)\\n            value: Business value (1-5 scale)\\n            criticality: Impact if compromised (1-5 scale)\\n        """\\n        self.assets.append({\\n            "name": name,\\n            "category": category,\\n            "value": value,\\n            "criticality": criticality\\n        })\\n    \\n    def calculate_risk_scores(self):\\n        """Calculate risk scores for all asset-threat combinations"""\\n        risk_data = []\\n        \\n        for asset in self.assets:\\n            for threat in self.threats:\\n                # Calculate impact and likelihood\\n                impact = threat["impact"] * asset["criticality"]\\n                likelihood = threat["likelihood"]\\n                risk_score = impact * likelihood\\n                \\n                risk_data.append({\\n                    "asset": asset["name"],\\n                    "threat": threat["name"],\\n                    "impact": impact,\\n                    "likelihood": likelihood,\\n                    "risk_score": risk_score,\\n                    "risk_level": self._categorize_risk(risk_score)\\n                })\\n        \\n        self.risk_matrix = pd.DataFrame(risk_data)\\n        return self.risk_matrix',
      },
    ],
    realWorldApplications: [
      'Corporate security policies development',
      'Incident response team establishment',
      'Security awareness training programs',
      'Penetration testing và red team exercises',
      'Compliance với regulations (GDPR, SOX, etc.)',
    ],
    caseStudies: [
      {
        title: 'Equifax Data Breach Response',
        organization: 'Equifax Inc.',
        problem: 'Massive data breach exposing 147 million consumers',
        solution: 'Comprehensive incident response và system overhaul',
        impact: '$700M+ costs, regulatory changes, improved industry standards',
        innovations: [
          'Zero-trust architecture',
          'Enhanced monitoring',
          'Rapid response protocols',
        ],
      },
    ],
    securityDomains: [
      'Network Security',
      'Application Security',
      'Data Protection',
      'Identity Management',
      'Incident Response',
    ],
    threats: ['Malware', 'Phishing', 'Ransomware', 'DDoS', 'Insider Threats'],
  },
  {
    id: 'ethical-hacking-pentesting',
    title: 'Ethical Hacking và Penetration Testing',
    description:
      'Học cách thực hiện kiểm tra bảo mật có đạo đức để phát hiện và khắc phục lỗ hổng.',
    duration: '200 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://youtube.com/watch?v=3Kq1MIfTWCE',
    objectives: [
      'Nắm vững penetration testing methodology',
      'Học cách sử dụng Kali Linux và security tools',
      'Thực hành web application security testing',
      'Hiểu legal và ethical aspects của hacking',
    ],
    prerequisites: [
      'Cybersecurity fundamentals',
      'Linux command line',
      'Networking concepts',
      'Web technologies',
    ],
    exercises: [
      {
        title: 'Web Application Penetration Test',
        description:
          'Thực hiện pentest hoàn chỉnh trên DVWA (Damn Vulnerable Web Application)',
        difficulty: 'Nâng cao',
        materials: [
          'Kali Linux',
          'DVWA',
          'Burp Suite',
          'OWASP ZAP',
          'Metasploit',
        ],
        procedure: [
          'Setup testing environment với DVWA',
          'Reconnaissance và information gathering',
          'Vulnerability scanning với Nmap, Nikto',
          'Manual testing cho OWASP Top 10',
          'SQL Injection exploitation',
          'XSS (Cross-Site Scripting) testing',
          'File upload vulnerabilities',
          'Session management testing',
          'Document findings với evidence',
          'Create executive summary report',
        ],
        expectedResults:
          'Comprehensive penetration test report với exploits và remediation',
        solution:
          '# Web Application Penetration Testing\\n\\n# Reconnaissance Phase\\nnmap -sS -sV -O target.com\\nnikto -h http://target.com\\n\\n# SQL Injection Testing\\nsqlmap -u "http://target.com/page.php?id=1" --dbs\\n\\n# XSS Testing\\n<script>alert("XSS")</script>\\n<img src=x onerror=alert("XSS")>\\n\\n# Comprehensive vulnerability assessment và exploitation',
      },
    ],
    realWorldApplications: [
      'Corporate penetration testing services',
      'Bug bounty hunting programs',
      'Security consulting and auditing',
      'Red team operations',
      'Vulnerability research',
    ],
    tools: [
      {
        name: 'Nmap',
        category: 'Network Scanning',
        description: 'Network discovery and security auditing tool',
        difficulty: 'Trung bình',
      },
      {
        name: 'Burp Suite',
        category: 'Web Application',
        description: 'Integrated platform for web application security testing',
        difficulty: 'Nâng cao',
      },
      {
        name: 'Metasploit',
        category: 'Exploitation',
        description: 'Framework for developing and executing exploit code',
        difficulty: 'Nâng cao',
      },
    ],
  },
  {
    id: 'incident-response-forensics',
    title: 'Incident Response và Digital Forensics',
    description:
      'Học cách ứng phó với các sự cố bảo mật và thu thập bằng chứng kỹ thuật số.',
    duration: '170 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Nắm vững incident response lifecycle',
      'Hiểu digital forensics procedures',
      'Thực hành malware analysis cơ bản',
      'Biết cách preserve và analyze evidence',
    ],
    prerequisites: [
      'Cybersecurity fundamentals',
      'Operating systems internals',
      'Network protocols',
      'Legal understanding',
    ],
    exercises: [
      {
        title: 'Incident Response Simulation',
        description: 'Mô phỏng và xử lý một incident ransomware attack',
        difficulty: 'Nâng cao',
        procedure: [
          'Detect và identify potential ransomware infection',
          'Contain affected systems để prevent spread',
          'Assess scope và impact of infection',
          'Collect forensic evidence từ affected systems',
          'Analyze malware samples và IOCs',
          'Develop eradication strategy',
          'Restore systems từ clean backups',
          'Document lessons learned và improve defenses',
        ],
      },
    ],
    realWorldApplications: [
      'Corporate incident response teams',
      'Law enforcement digital forensics',
      'Malware analysis laboratories',
      'Cybersecurity consulting',
      'Insurance claim investigations',
    ],
  },
  {
    id: 'security-architecture-governance',
    title: 'Security Architecture và Governance',
    description:
      'Thiết kế và quản lý kiến trúc bảo mật tổng thể cho doanh nghiệp.',
    duration: '140 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Hiểu enterprise security architecture',
      'Nắm vững security governance frameworks',
      'Biết cách implement security controls',
      'Đánh giá compliance với standards',
    ],
    prerequisites: [
      'Cybersecurity experience',
      'Enterprise IT architecture',
      'Risk management',
      'Regulatory knowledge',
    ],
    exercises: [
      {
        title: 'Design Zero-Trust Architecture',
        description: 'Thiết kế kiến trúc zero-trust cho một tổ chức lớn',
        difficulty: 'Nâng cao',
        procedure: [
          'Assess current security architecture',
          'Define zero-trust principles và requirements',
          'Design identity và access management',
          'Plan network segmentation strategy',
          'Implement continuous monitoring',
          'Develop migration roadmap',
          'Create governance framework',
        ],
      },
    ],
    realWorldApplications: [
      'Enterprise security strategy',
      'Cloud security architecture',
      'Regulatory compliance programs',
      'Security policy development',
      'Security awareness training',
    ],
  },
];
