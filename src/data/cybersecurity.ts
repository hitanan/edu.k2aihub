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
  mainContent: {
    introduction: string;
    keyConcepts: Array<{
      title: string;
      description: string;
      examples: string[];
    }>;
    practicalApplications: Array<{
      area: string;
      description: string;
    }>;
    conclusion: string;
  };
  relatedGames: Array<{
    id: string;
    name: string;
    description: string;
  }>;
}

export const CybersecurityLessons: CybersecurityLessonData[] = [
  {
    id: 'cybersecurity-fundamentals',
    title: 'Cơ bản về An toàn Thông tin',
    description: 'Tìm hiểu các nguyên tắc cơ bản của an toàn thông tin và cybersecurity trong thế giới số.',
    duration: '130 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://youtube.com/watch?v=inWWhr5tnEA',
    imageUrl: '/images/cybersecurity-fundamentals.jpg',
    mainContent: {
      introduction:
        'Trong thế giới số hóa, dữ liệu là tài sản quý giá nhất và an ninh mạng là người vệ sĩ bảo vệ tài sản đó. Bài học này sẽ trang bị cho bạn những kiến thức nền tảng nhất về an ninh mạng, từ việc hiểu các nguyên tắc cốt lõi, nhận diện các mối đe dọa, đến việc xây dựng một tư duy phòng thủ vững chắc để bảo vệ bản thân và tổ chức trong không gian mạng.',
      keyConcepts: [
        {
          title: 'Bộ ba CIA (Confidentiality, Integrity, Availability)',
          description:
            'Đây là ba trụ cột của an ninh thông tin. Confidentiality (Bảo mật) đảm bảo dữ liệu không bị truy cập trái phép. Integrity (Toàn vẹn) đảm bảo dữ liệu không bị thay đổi trái phép. Availability (Sẵn sàng) đảm bảo hệ thống và dữ liệu luôn sẵn sàng khi cần.',
          examples: [
            'Mã hóa email để đảm bảo tính bảo mật.',
            'Sử dụng chữ ký số để đảm bảo tính toàn vẹn của tài liệu.',
            'Hệ thống chống tấn công DDoS để đảm bảo tính sẵn sàng của website.',
          ],
        },
        {
          title: 'Mối đe dọa và Lỗ hổng (Threats and Vulnerabilities)',
          description:
            'Lỗ hổng là một điểm yếu trong hệ thống. Mối đe dọa là bất cứ thứ gì có thể khai thác lỗ hổng đó để gây hại. Hiểu rõ sự khác biệt này là chìa khóa để đánh giá và quản lý rủi ro.',
          examples: [
            'Lỗ hổng: Phần mềm chưa được cập nhật. Mối đe dọa: Một hacker sử dụng mã khai thác (exploit) nhắm vào lỗ hổng đó.',
          ],
        },
        {
          title: 'Phòng thủ theo chiều sâu (Defense-in-Depth)',
          description:
            'Đây là chiến lược xây dựng nhiều lớp phòng thủ, giống như một lâu đài có nhiều lớp tường thành. Nếu một lớp phòng thủ bị xuyên thủng, các lớp khác vẫn còn đó để bảo vệ. Điều này tạo ra một hệ thống an ninh kiên cố và linh hoạt.',
          examples: [
            'Kết hợp tường lửa (firewall), hệ thống phát hiện xâm nhập (IDS), phần mềm diệt virus, và đào tạo nhận thức cho người dùng.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Bảo vệ thông tin cá nhân',
          description:
            'Áp dụng các nguyên tắc an ninh mạng để bảo vệ tài khoản mạng xã hội, email, và dữ liệu tài chính cá nhân khỏi bị đánh cắp.',
        },
        {
          area: 'An ninh cho doanh nghiệp nhỏ',
          description:
            'Xây dựng các chính sách và biện pháp bảo mật cơ bản để bảo vệ dữ liệu khách hàng và thông tin kinh doanh của công ty.',
        },
        {
          area: 'Phát triển phần mềm an toàn',
          description:
            'Các lập trình viên cần có tư duy về an ninh để viết ra những đoạn mã ít lỗ hổng và chống lại các cuộc tấn công phổ biến.',
        },
      ],
      conclusion:
        'An ninh mạng không phải là một sản phẩm, mà là một quá trình. Nó đòi hỏi sự cảnh giác liên tục và học hỏi không ngừng. Với những kiến thức nền tảng từ bài học này, bạn đã có trong tay chiếc la bàn để bắt đầu hành trình khám phá lĩnh vực quan trọng và đầy thách thức này.',
    },
    relatedGames: [
      {
        id: 'cyber-defender-3d',
        name: 'Cyber Defender 3D',
        description:
          'Defend networks from real-time cyber attacks in a 3D environment, learning cybersecurity principles',
      },
    ],
    objectives: [
      'Hiểu CIA Triad: Confidentiality, Integrity, Availability',
      'Nắm vững các loại threats và vulnerabilities',
      'Tìm hiểu defense-in-depth strategy',
      'Biết cách đánh giá rủi ro bảo mật',
    ],
    prerequisites: ['Kiến thức máy tính cơ bản', 'Hiểu biết về mạng internet', 'Operating systems basics'],
    exercises: [
      {
        title: 'Security Risk Assessment',
        description: 'Thực hiện đánh giá rủi ro bảo mật cho một hệ thống IT nhỏ',
        difficulty: 'Cơ bản',
        materials: ['Risk assessment framework', 'Vulnerability checklist', 'Documentation tools'],
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
        expectedResults: 'Comprehensive risk assessment với prioritized action plan',
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
        innovations: ['Zero-trust architecture', 'Enhanced monitoring', 'Rapid response protocols'],
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
    description: 'Học cách thực hiện kiểm tra bảo mật có đạo đức để phát hiện và khắc phục lỗ hổng.',
    duration: '200 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=fI5NcGvzQCw',
    mainContent: {
      introduction:
        'Để bắt được kẻ trộm, bạn phải suy nghĩ như một kẻ trộm. Ethical Hacking (Hacking có đạo đức) hay Penetration Testing (Kiểm thử xâm nhập) chính là nghệ thuật sử dụng các công cụ và tư duy của hacker để tìm ra các lỗ hổng bảo mật trong một hệ thống, nhưng với mục đích tốt là để vá chúng lại trước khi kẻ xấu kịp khai thác. Đây là một trong những lĩnh vực hấp dẫn và được săn đón nhất trong ngành an ninh mạng.',
      keyConcepts: [
        {
          title: 'Quy trình kiểm thử xâm nhập (Pentesting Methodology)',
          description:
            'Một cuộc pentest chuyên nghiệp tuân theo một quy trình nghiêm ngặt, thường bao gồm các giai đoạn: Reconnaissance (Trinh sát), Scanning (Quét), Gaining Access (Giành quyền truy cập), Maintaining Access (Duy trì truy cập), và Covering Tracks (Xóa dấu vết).',
          examples: [
            'Sử dụng Google Dorking để thu thập thông tin công khai (Reconnaissance).',
            'Dùng Nmap để quét các cổng đang mở (Scanning).',
            'Khai thác một lỗ hổng SQL Injection để vào cơ sở dữ liệu (Gaining Access).',
          ],
        },
        {
          title: 'OWASP Top 10',
          description:
            'Đây là một danh sách được cập nhật thường xuyên về 10 rủi ro bảo mật ứng dụng web nghiêm trọng nhất, do tổ chức phi lợi nhuận OWASP công bố. Việc nắm vững và kiểm tra theo danh sách này là yêu cầu cơ bản của mọi pentester.',
          examples: [
            'Kiểm tra lỗi SQL Injection (A03:2021).',
            'Kiểm tra lỗi xác thực không an toàn (A07:2021).',
            'Kiểm tra lỗi cấu hình sai bảo mật (A05:2021).',
          ],
        },
        {
          title: 'Hacking có đạo đức và Pháp lý (Ethics and Legality)',
          description:
            'Sự khác biệt duy nhất giữa một ethical hacker và một tội phạm mạng là sự cho phép. Mọi hoạt động pentest phải được thực hiện trong một khuôn khổ pháp lý rõ ràng, với một hợp đồng và phạm vi (scope) được xác định trước để tránh các rắc rối pháp lý.',
          examples: [
            'Luôn có văn bản cho phép (get-out-of-jail-free card) trước khi bắt đầu.',
            'Chỉ tấn công vào các hệ thống đã được xác định trong phạm vi hợp đồng.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Chuyên gia kiểm thử xâm nhập (Pentester)',
          description:
            'Làm việc cho các công ty tư vấn bảo mật, thực hiện các cuộc pentest cho khách hàng để đánh giá và cải thiện hệ thống an ninh của họ.',
        },
        {
          area: 'Thợ săn tiền thưởng lỗi (Bug Bounty Hunter)',
          description:
            'Tham gia vào các chương trình bug bounty của các công ty lớn như Google, Facebook, tìm ra lỗ hổng và nhận được những phần thưởng tài chính xứng đáng.',
        },
        {
          area: 'Đội Đỏ (Red Team)',
          description:
            'Làm việc trong một tổ chức, đóng vai trò là kẻ tấn công để liên tục kiểm tra và thử thách khả năng phòng thủ của chính tổ chức đó (Đội Xanh - Blue Team).',
        },
      ],
      conclusion:
        'Ethical Hacking là một vũ điệu giữa tấn công và phòng thủ. Bằng cách làm chủ các kỹ năng tấn công, bạn sẽ trở thành một chuyên gia phòng thủ tài ba hơn, có khả năng dự đoán và ngăn chặn các cuộc tấn công trước khi chúng xảy ra. Đây là một con đường sự nghiệp đầy thách thức, đòi hỏi sự sáng tạo, kiên trì và một la bàn đạo đức vững chắc.',
    },
    relatedGames: [
      {
        id: 'cyber-defender-3d',
        name: 'Cyber Defender 3D',
        description:
          'Defend networks from real-time cyber attacks in a 3D environment, learning cybersecurity principles',
      },
    ],
    objectives: [
      'Nắm vững penetration testing methodology',
      'Học cách sử dụng Kali Linux và security tools',
      'Thực hành web application security testing',
      'Hiểu legal và ethical aspects của hacking',
    ],
    prerequisites: ['Cybersecurity fundamentals', 'Linux command line', 'Networking concepts', 'Web technologies'],
    exercises: [
      {
        title: 'Web Application Penetration Test',
        description: 'Thực hiện pentest hoàn chỉnh trên DVWA (Damn Vulnerable Web Application)',
        difficulty: 'Nâng cao',
        materials: ['Kali Linux', 'DVWA', 'Burp Suite', 'OWASP ZAP', 'Metasploit'],
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
        expectedResults: 'Comprehensive penetration test report với exploits và remediation',
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
    description: 'Học cách ứng phó với các sự cố bảo mật và thu thập bằng chứng kỹ thuật số.',
    duration: '170 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=gqsE2coucjg',
    imageUrl: 'https://i.ytimg.com/vi/gqsE2coucjg/hqdefault.jpg',
    mainContent: {
      introduction:
        'Khi một cuộc tấn công mạng xảy ra, đó không phải là lúc hoảng loạn, mà là lúc hành động một cách có phương pháp. Ứng phó sự cố (Incident Response) là quy trình để xử lý một cuộc tấn công, trong khi Điều tra số (Digital Forensics) là khoa học thu thập và phân tích bằng chứng điện tử. Bài học này sẽ biến bạn thành một "lính cứu hỏa" và một "thám tử" của thế giới số.',
      keyConcepts: [
        {
          title: 'Vòng đời ứng phó sự cố (Incident Response Lifecycle)',
          description:
            'Một quy trình ứng phó hiệu quả thường bao gồm 6 giai đoạn: Preparation (Chuẩn bị), Identification (Nhận diện), Containment (Ngăn chặn), Eradication (Loại bỏ), Recovery (Phục hồi), và Lessons Learned (Rút kinh nghiệm).',
          examples: [
            'Chuẩn bị các kịch bản ứng phó (Preparation).',
            'Phát hiện mã độc đang hoạt động (Identification).',
            'Ngắt kết nối máy bị nhiễm khỏi mạng (Containment).',
            'Khôi phục hệ thống từ bản sao lưu sạch (Recovery).',
          ],
        },
        {
          title: 'Chuỗi hành trình của bằng chứng (Chain of Custody)',
          description:
            'Đây là một nguyên tắc tối quan trọng trong điều tra số. Nó là một bản ghi chép chi tiết về việc ai đã thu thập, xử lý, và lưu trữ bằng chứng kỹ thuật số. Việc duy trì chuỗi hành trình này đảm bảo tính toàn vẹn và pháp lý của bằng chứng khi đưa ra tòa.',
          examples: [
            'Ghi lại thời gian, địa điểm, và người thực hiện khi tạo một bản sao pháp lý (forensic image) của một ổ cứng.',
          ],
        },
        {
          title: 'Điều tra biến động và tĩnh (Volatile vs. Non-volatile Forensics)',
          description:
            'Dữ liệu biến động là dữ liệu sẽ mất đi khi máy tính tắt nguồn (ví dụ: nội dung RAM, các kết nối mạng đang hoạt động). Dữ liệu tĩnh là dữ liệu được lưu trữ trên ổ cứng. Một nhà điều tra giỏi phải biết cách thu thập dữ liệu biến động trước tiên.',
          examples: [
            'Thu thập nội dung RAM bằng công cụ như Volatility Framework.',
            'Tạo bản sao của ổ cứng bằng công cụ như FTK Imager.',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Chuyên gia ứng phó sự cố (Incident Responder)',
          description:
            'Là người đầu tiên có mặt tại "hiện trường" của một cuộc tấn công mạng, chịu trách nhiệm ngăn chặn thiệt hại và phục hồi hệ thống.',
        },
        {
          area: 'Chuyên gia điều tra số (Forensic Analyst)',
          description:
            'Làm việc cho các cơ quan thực thi pháp luật hoặc các công ty tư nhân, phân tích các thiết bị kỹ thuật số để tìm bằng chứng cho các vụ án hình sự hoặc các cuộc điều tra nội bộ.',
        },
        {
          area: 'Phân tích mã độc (Malware Analyst)',
          description:
            'Mổ xẻ các mẫu mã độc để hiểu cách chúng hoạt động, nguồn gốc và mục đích, từ đó xây dựng các biện pháp phòng chống.',
        },
      ],
      conclusion:
        'Trong một thế giới mà các cuộc tấn công mạng là không thể tránh khỏi, khả năng ứng phó và điều tra hiệu quả trở nên vô giá. Lĩnh vực này đòi hỏi sự tỉ mỉ, kiến thức sâu rộng về hệ thống, và một cái đầu lạnh dưới áp lực. Bằng cách làm chủ các kỹ năng này, bạn sẽ đóng vai trò then chốt trong việc bảo vệ và phục hồi thế giới số sau các cuộc khủng hoảng.',
    },
    relatedGames: [
      {
        id: 'cyber-defender-3d',
        name: 'Cyber Defender 3D',
        description:
          'Defend networks from real-time cyber attacks in a 3D environment, learning cybersecurity principles',
      },
    ],
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
    description: 'Thiết kế và quản lý kiến trúc bảo mật tổng thể cho doanh nghiệp.',
    duration: '140 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=7vKf-OwDcrs',
    imageUrl: 'https://i.ytimg.com/vi/7vKf-OwDcrs/hqdefault.jpg',
    mainContent: {
      introduction:
        'Nếu pentesting và incident response là những trận chiến, thì kiến trúc và quản trị an ninh là việc xây dựng cả một quốc gia phòng thủ. Đây là lĩnh vực ở tầm chiến lược, nơi bạn không chỉ đối phó với các cuộc tấn-công-riêng-lẻ mà còn thiết kế cả một hệ thống phòng thủ toàn diện, xây dựng các chính sách và quy trình để đảm bảo an ninh là một phần văn hóa của tổ chức.',
      keyConcepts: [
        {
          title: 'Kiến trúc Zero Trust (Zero Trust Architecture)',
          description:
            'Đây là một mô hình an ninh hiện đại dựa trên triết lý "Never trust, always verify" (Không bao giờ tin tưởng, luôn luôn xác minh). Thay vì tin tưởng bất cứ ai ở bên trong vành đai mạng, Zero Trust yêu cầu xác thực nghiêm ngặt đối với mọi người và mọi thiết bị, bất kể vị trí của họ.',
          examples: [
            'Yêu cầu xác thực đa yếu tố (MFA) cho mọi lần đăng nhập.',
            'Phân đoạn mạng (network segmentation) để hạn chế sự lây lan nếu một khu vực bị xâm nhập.',
          ],
        },
        {
          title: 'Khung quản trị an ninh (Security Governance Frameworks)',
          description:
            'Đây là các bộ quy tắc, tiêu chuẩn và quy trình đã được chuẩn hóa để giúp các tổ chức quản lý rủi ro và an ninh một cách có hệ thống. Việc áp dụng các khung này giúp đảm bảo sự tuân thủ và hiệu quả.',
          examples: [
            'NIST Cybersecurity Framework: Một bộ khung phổ biến được phát triển bởi Viện Tiêu chuẩn và Công nghệ Quốc gia Hoa Kỳ.',
            'ISO/IEC 27001: Một tiêu chuẩn quốc tế về hệ thống quản lý an toàn thông tin.',
          ],
        },
        {
          title: 'Quản trị, Rủi ro và Tuân thủ (Governance, Risk, and Compliance - GRC)',
          description:
            'GRC là sự kết hợp của ba lĩnh vực để đảm bảo một tổ chức hoạt động một cách có đạo đức và tuân thủ các quy định. Governance là cách tổ chức được điều hành, Risk là việc quản lý các mối nguy, và Compliance là việc tuân thủ các luật lệ và tiêu chuẩn.',
          examples: [
            'Xây dựng một chính sách bảo mật (Governance).',
            'Thực hiện đánh giá rủi ro hàng năm (Risk).',
            'Đảm bảo tuân thủ quy định bảo vệ dữ liệu GDPR (Compliance).',
          ],
        },
      ],
      practicalApplications: [
        {
          area: 'Kiến trúc sư an ninh (Security Architect)',
          description:
            'Là người chịu trách nhiệm thiết kế và xây dựng hệ thống phòng thủ an ninh cho toàn bộ doanh nghiệp, từ mạng lưới, đám mây đến các ứng dụng.',
        },
        {
          area: 'Giám đốc an toàn thông tin (Chief Information Security Officer - CISO)',
          description:
            'Là vị trí lãnh đạo cao nhất về an ninh mạng trong một tổ chức, chịu trách nhiệm về chiến lược, ngân sách và báo cáo cho ban lãnh đạo.',
        },
        {
          area: 'Chuyên gia GRC',
          description:
            'Làm việc để đảm bảo tổ chức tuân thủ các quy định của ngành và pháp luật, quản lý rủi ro và xây dựng các chính sách an ninh hiệu quả.',
        },
      ],
      conclusion:
        'Kiến trúc và quản trị an ninh là bộ não của hệ thống phòng thủ. Đây là lĩnh vực dành cho những người có tư duy chiến lược, khả năng nhìn xa trông rộng và kỹ năng giao tiếp để thuyết phục toàn bộ tổ chức cùng tham gia vào sứ mệnh bảo vệ tài sản số. Bằng cách xây dựng một nền tảng an ninh vững chắc, bạn đang tạo ra một lợi thế cạnh tranh bền vững cho doanh nghiệp trong kỷ nguyên số.',
    },
    relatedGames: [
      {
        id: 'cyber-defender-3d',
        name: 'Cyber Defender 3D',
        description:
          'Defend networks from real-time cyber attacks in a 3D environment, learning cybersecurity principles',
      },
    ],
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
