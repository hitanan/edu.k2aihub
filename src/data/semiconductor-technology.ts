export interface SemiconductorLesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  chipType?: string;
  category?: string;
  imageUrl?: string;
  videoUrl?: string;
  objectives: string[];
  prerequisites: string[];
  exercises: Array<{
    title: string;
    description: string;
    difficulty: string;
    requirements?: string[];
    hints?: string[];
    solution?: string;
    expectedOutput?: string;
  }>;
  realWorldApplications: string[];
  caseStudies?: Array<{
    title: string;
    company: string;
    challenge: string;
    solution: string;
    results: string;
    insights?: string[];
  }>;
  resources?: Array<{
    title: string;
    url: string;
    type: string;
  }>;
  labTechniques?: string[];
}

export const semiconductorLessons: SemiconductorLesson[] = [
  {
    id: 'semiconductor-fundamentals',
    title: 'Cơ bản về Bán dẫn & Cấu trúc Chip',
    description:
      'Khám phá thế giới vi mô của bán dẫn - từ silicon crystal đến transistor. Hiểu cách electron di chuyển và tạo nên các chip computer hiện đại.',
    duration: '180 phút',
    difficulty: 'Cơ bản',
    chipType: 'Basic Semiconductor Physics',
    objectives: [
      'Hiểu cấu trúc atomic của silicon và các vật liệu bán dẫn',
      'Nắm vững nguyên lý hoạt động của p-n junction',
      'Phân biệt các loại doping: n-type và p-type',
      'Hiểu cách transistor được hình thành từ bán dẫn',
    ],
    prerequisites: [
      'Kiến thức vật lý cơ bản về electron và atom',
      'Toán học cấp 3: đại số và lượng giác',
      'Tư duy logic và khả năng tưởng tượng không gian',
    ],
    exercises: [
      {
        title: 'Mô phỏng Silicon Crystal Lattice',
        description:
          'Sử dụng phần mềm mô phỏng để quan sát cấu trúc silicon crystal và hiểu cách electron di chuyển trong mạng tinh thể.',
        difficulty: 'Cơ bản',
        requirements: ['Computer simulation software', 'Internet connection'],
        hints: [
          'Quan sát cách các atom silicon liên kết với nhau',
          'Chú ý vào electron valence và cách chúng được chia sẻ',
          'Thử thay đổi temperature để thấy electron movement',
        ],
        solution:
          'Học viên sẽ hiểu được silicon có 4 electron valence, tạo covalent bonds với 4 atom lân cận.',
        expectedOutput:
          'Hiểu được cấu trúc kim cương của silicon và electron behavior',
      },
      {
        title: 'Thí nghiệm Doping Process',
        description:
          'Mô phỏng quá trình doping silicon với boron (p-type) và phosphorus (n-type) để tạo ra các vùng dẫn điện khác nhau.',
        difficulty: 'Trung bình',
        requirements: [
          'Virtual lab environment',
          'Understanding of periodic table',
        ],
        hints: [
          'Boron có 3 electron valence → tạo holes',
          'Phosphorus có 5 electron valence → extra electron',
          'Concentration của dopant ảnh hưởng đến conductivity',
        ],
        solution:
          'P-type: thiếu electron (holes), N-type: thừa electron (free electrons)',
        expectedOutput: 'Nắm vững sự khác biệt giữa p-type và n-type doping',
      },
    ],
    realWorldApplications: [
      'CPU của Intel, AMD: hàng tỷ transistor trên 1 chip',
      'Memory chips (RAM, SSD): lưu trữ dữ liệu digital',
      'Solar panels: chuyển đổi ánh sáng thành điện năng',
      'LED displays: từ smartphone đến TV màn hình lớn',
      'Sensors trong ô tô: từ camera đến radar tự lái',
    ],
    caseStudies: [
      {
        title: 'Samsung Vietnam Semiconductor R&D',
        company: 'Samsung Electronics Vietnam',
        challenge:
          'Phát triển chip memory 3nm với performance cao và tiết kiệm năng lượng cho mobile devices',
        solution:
          'Áp dụng FinFET technology và AI-optimized layout design, kết hợp advanced lithography',
        results:
          '30% improvement trong speed, 50% reduction trong power consumption so với thế hệ trước',
        insights: [
          'Việt Nam đang trở thành hub quan trọng cho semiconductor R&D',
          'AI được sử dụng để optimize chip layout và predict performance',
          'Clean room technology đòi hỏi precision cực cao',
        ],
      },
    ],
    resources: [
      {
        title: 'MIT OpenCourseWare - Semiconductor Physics',
        url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/',
        type: 'Course',
      },
    ],
    labTechniques: [
      'Crystal Growth',
      'Doping Process',
      'Photolithography Basics',
      'Electrical Testing',
    ],
  },
  {
    id: 'ic-design-vlsi',
    title: 'IC Design & VLSI Technology',
    description:
      'Học cách thiết kế integrated circuits từ concept đến production. Sử dụng EDA tools professional để tạo ra chip layout thực tế.',
    duration: '240 phút',
    difficulty: 'Trung bình',
    chipType: 'VLSI Design',
    videoUrl: 'https://www.youtube.com/watch?v=9ZNi1YrCF5A',
    objectives: [
      'Master các bước trong IC design flow: specification → layout → verification',
      'Sử dụng thành thạo EDA tools như Cadence, Synopsys',
      'Hiểu về timing analysis và power optimization',
      'Thiết kế digital circuits với Verilog HDL',
    ],
    prerequisites: [
      'Hiểu về transistor và basic electronic circuits',
      'Kiến thức cơ bản về digital logic',
      'Kỹ năng sử dụng computer và software engineering tools',
    ],
    exercises: [
      {
        title: 'Thiết kế Simple Adder Circuit',
        description:
          'Sử dụng Verilog để thiết kế 4-bit adder, từ logic gates đến complete circuit layout.',
        difficulty: 'Trung bình',
        requirements: [
          'Verilog simulator',
          'EDA software access',
          'Digital logic knowledge',
        ],
        hints: [
          'Bắt đầu với full adder đơn lẻ',
          'Chain 4 full adders lại với nhau',
          'Test với các input combinations khác nhau',
          'Optimize cho speed và area',
        ],
        solution:
          'Complete 4-bit ripple carry adder với proper timing và verification',
        expectedOutput: 'Working adder circuit với simulation results đúng',
      },
      {
        title: 'Power Analysis & Optimization',
        description:
          'Phân tích power consumption của circuit design và áp dụng techniques để reduce power usage.',
        difficulty: 'Nâng cao',
        requirements: [
          'Power analysis tools',
          'Understanding of CMOS technology',
        ],
        hints: [
          'Dynamic power = switching activity × capacitance × voltage²',
          'Static power do leakage current',
          'Clock gating để reduce unnecessary switching',
          'Voltage scaling khi performance cho phép',
        ],
        solution:
          'Power-optimized design với 20-30% reduction trong total power',
        expectedOutput: 'Detailed power report và optimized circuit design',
      },
    ],
    realWorldApplications: [
      'Apple M-series chips: ARM-based processors cho MacBook',
      'NVIDIA GPU: parallel processing cho AI và gaming',
      'Qualcomm Snapdragon: mobile processors trong smartphone',
      'TSMC 3nm process: advanced manufacturing cho major brands',
      'Automotive chips: từ engine control đến autonomous driving',
    ],
    caseStudies: [
      {
        title: 'Intel Vietnam Design Center',
        company: 'Intel Corporation',
        challenge:
          'Thiết kế low-power processor cores cho IoT applications với strict power budget',
        solution:
          'Implement advanced power gating, adaptive voltage scaling và AI-based workload prediction',
        results:
          '40% power reduction while maintaining performance targets, enabling longer battery life',
        insights: [
          'Vietnam team đóng góp significant vào global Intel products',
          'AI/ML được integrate ngay trong hardware design process',
          'Co-design software/hardware critical cho optimal performance',
        ],
      },
    ],
    resources: [
      {
        title: 'Cadence Academic Network',
        url: 'https://www.cadence.com/en_US/home/training/academic-network.html',
        type: 'Tools & Training',
      },
    ],
    labTechniques: [
      'Verilog HDL',
      'Logic Synthesis',
      'Place & Route',
      'Timing Analysis',
      'Power Analysis',
    ],
  },
  {
    id: 'fabrication-cleanroom',
    title: 'Chip Fabrication & Clean Room Technology',
    description:
      'Khám phá quá trình sản xuất chip thực tế trong clean room. Từ wafer preparation đến final testing - hiểu mọi bước trong semiconductor manufacturing.',
    duration: '200 phút',
    difficulty: 'Trung bình',
    chipType: 'Manufacturing Process',
    videoUrl: 'https://www.youtube.com/watch?v=WKHKy89QaV0',
    objectives: [
      'Hiểu complete fabrication flow từ wafer đến packaged chip',
      'Nắm vững photolithography process và pattern transfer',
      'Học về etching, deposition và ion implantation',
      'Understand quality control và testing procedures',
    ],
    prerequisites: [
      'Kiến thức về semiconductor physics',
      'Hiểu về chemical processes cơ bản',
      'Awareness về precision manufacturing requirements',
    ],
    exercises: [
      {
        title: 'Virtual Clean Room Tour',
        description:
          'Tham quan virtual clean room facility và hiểu các safety protocols, contamination control measures.',
        difficulty: 'Cơ bản',
        requirements: ['VR headset hoặc computer', 'Internet connection'],
        hints: [
          'Chú ý đến air filtration systems',
          'Quan sát protective clothing requirements',
          'Hiểu particle count standards cho different clean room classes',
          'Learn về chemical handling procedures',
        ],
        solution:
          'Complete understanding của clean room protocols và safety measures',
        expectedOutput:
          'Có thể explain clean room requirements và contamination control',
      },
      {
        title: 'Photolithography Simulation',
        description:
          'Mô phỏng photolithography process để create circuit patterns trên wafer surface.',
        difficulty: 'Nâng cao',
        requirements: [
          'Lithography simulation software',
          'Understanding of optics',
        ],
        hints: [
          'UV light exposure time critical cho pattern quality',
          'Resist chemistry affects resolution',
          'Mask alignment precision determines feature size',
          'Development process removes exposed resist',
        ],
        solution: 'Successfully patterned wafer với desired circuit features',
        expectedOutput: 'High-quality circuit patterns với minimal defects',
      },
    ],
    realWorldApplications: [
      'TSMC Taiwan: world leader trong advanced node manufacturing',
      'Samsung Foundry: competitor trong 3nm và 5nm processes',
      'GlobalFoundries: specialized manufacturing cho automotive và IoT',
      'Vietnam semiconductor assembly facilities: packaging và testing',
      'Solar panel manufacturing: similar processes cho photovoltaic cells',
    ],
    caseStudies: [
      {
        title: 'Vietnam Semiconductor Packaging Investment',
        company: 'Multiple International Companies',
        challenge:
          'Establish cost-effective packaging và testing facilities trong Vietnam để serve Asian market',
        solution:
          'Investment trong state-of-art equipment, training local workforce, và establish quality standards',
        results:
          'Vietnam trở thành major hub cho semiconductor assembly với $15B+ investment',
        insights: [
          'Vietnam competitive advantage trong labor cost và proximity to China market',
          'Government support through special economic zones và tax incentives',
          'Focus trên high-value assembly rather than basic manufacturing',
        ],
      },
    ],
    resources: [
      {
        title: 'SEMI Vietnam Association',
        url: 'https://www.semi.org/en/regions/vietnam',
        type: 'Industry Association',
      },
    ],
    labTechniques: [
      'Photolithography',
      'Etching',
      'Chemical Vapor Deposition',
      'Ion Implantation',
      'Metrology',
    ],
  },
  {
    id: 'advanced-nodes-ai',
    title: 'Advanced Technology Nodes & AI Chips',
    description:
      'Dive deep vào cutting-edge 3nm, 2nm technology và specialized AI accelerator chips. Học cách design cho next-generation applications.',
    duration: '220 phút',
    difficulty: 'Nâng cao',
    chipType: 'Advanced Technology & AI',
    videoUrl: 'https://www.youtube.com/watch?v=LnfXBRZASUo',
    objectives: [
      'Hiểu challenges và solutions trong 3nm, 2nm nodes',
      'Learn về specialized AI accelerator architectures',
      'Master quantum effects và how to mitigate them',
      'Understand neuromorphic computing và future directions',
    ],
    prerequisites: [
      'Strong foundation trong semiconductor physics',
      'Understanding về machine learning basics',
      'Knowledge về advanced mathematics và statistics',
    ],
    exercises: [
      {
        title: 'AI Accelerator Architecture Design',
        description:
          'Thiết kế specialized chip architecture cho machine learning workloads, optimize cho matrix operations và parallel processing.',
        difficulty: 'Nâng cao',
        requirements: [
          'Advanced EDA tools',
          'ML framework knowledge',
          'Parallel computing understanding',
        ],
        hints: [
          'Matrix multiply units cần highly parallelized',
          'Memory bandwidth critical cho AI workloads',
          'Mixed-precision arithmetic (FP16, INT8) cho efficiency',
          'Dataflow optimization reduces energy consumption',
        ],
        solution:
          'Complete AI accelerator design với performance specifications met',
        expectedOutput:
          'Functional AI chip design với verified performance metrics',
      },
      {
        title: 'Quantum Effects Mitigation',
        description:
          'Analyze quantum tunneling và other effects trong advanced nodes, develop solutions để maintain reliable operation.',
        difficulty: 'Nâng cao',
        requirements: [
          'Quantum physics knowledge',
          'Simulation tools',
          'Advanced mathematics',
        ],
        hints: [
          'Tunneling current increases exponentially với barrier thinning',
          'Variability becomes major issue trong advanced nodes',
          'Error correction techniques needed',
          'Design margins must account cho process variations',
        ],
        solution: 'Robust circuit design với quantum effects properly managed',
        expectedOutput: 'Reliable circuit operation despite quantum challenges',
      },
    ],
    realWorldApplications: [
      'Apple Neural Engine: on-device AI processing trong iPhone',
      'Google TPU: specialized chips cho machine learning trong data centers',
      'Tesla FSD chip: autonomous driving AI acceleration',
      'NVIDIA H100: latest GPU cho AI training và inference',
      'Emerging Vietnamese AI startups: custom chip development',
    ],
    caseStudies: [
      {
        title: 'Vietnam AI Chip Startup Ecosystem',
        company: 'Vietnamese AI Hardware Startups',
        challenge:
          'Compete với global giants trong AI chip development với limited resources',
        solution:
          'Focus on specialized applications, leverage local talent, partner với international foundries',
        results:
          'Several successful startups với niche AI accelerator products',
        insights: [
          'Vietnam có strong software talent transitioning sang hardware',
          'Government support cho deep tech startups increasing',
          'Partnership với global foundries enables access to advanced nodes',
        ],
      },
    ],
    resources: [
      {
        title: 'IEEE Solid-State Circuits Society',
        url: 'https://sscs.ieee.org/',
        type: 'Professional Society',
      },
    ],
    labTechniques: [
      'Advanced TCAD Simulation',
      'Machine Learning Accelerator Design',
      'Quantum Effect Modeling',
      'AI Chip Verification',
    ],
  },
  {
    id: 'industry-career-pathways',
    title: 'Industry Careers & Vietnam Opportunities',
    description:
      'Khám phá career opportunities trong semiconductor industry tại Vietnam. Từ technical roles đến business development - hiểu job market và salary expectations.',
    duration: '150 phút',
    difficulty: 'Cơ bản',
    chipType: 'Career Development',
    videoUrl: 'https://www.youtube.com/watch?v=Vkmt5FWM18I',
    objectives: [
      'Understand different career paths trong semiconductor industry',
      'Learn về major companies và job opportunities tại Vietnam',
      'Develop professional skills cần thiết cho industry success',
      'Network với industry professionals và build connections',
    ],
    prerequisites: [
      'Interest trong semiconductor technology',
      'Basic communication skills',
      'Willingness to learn và adapt',
    ],
    exercises: [
      {
        title: 'Industry Company Research Project',
        description:
          'Research major semiconductor companies tại Vietnam, analyze their business models, job openings và growth prospects.',
        difficulty: 'Cơ bản',
        requirements: [
          'Internet access',
          'Research skills',
          'Report writing ability',
        ],
        hints: [
          'Focus on Samsung, Intel, Amkor, ASE Group trong Vietnam',
          'Check LinkedIn cho job postings và employee profiles',
          'Read company annual reports để understand business strategy',
          'Look for recent news về expansion plans',
        ],
        solution: 'Comprehensive report on Vietnam semiconductor landscape',
        expectedOutput: 'Detailed analysis của job market và opportunities',
      },
      {
        title: 'Professional Portfolio Development',
        description:
          'Build professional portfolio showcasing semiconductor knowledge và technical projects for job applications.',
        difficulty: 'Trung bình',
        requirements: [
          'Portfolio platform',
          'Project documentation',
          'Professional photos',
        ],
        hints: [
          'Include technical projects với clear explanations',
          'Show progression from basic to advanced concepts',
          'Add certifications và relevant coursework',
          'Professional LinkedIn profile với industry keywords',
        ],
        solution: 'Complete professional portfolio ready cho job applications',
        expectedOutput:
          'Attractive portfolio demonstrating semiconductor expertise',
      },
    ],
    realWorldApplications: [
      'Design Engineer tại Samsung Vietnam: 25-45 triệu VNĐ',
      'Process Engineer tại Intel: 22-40 triệu VNĐ',
      'Quality Engineer tại Amkor: 18-32 triệu VNĐ',
      'Applications Engineer: technical support cho customers',
      'Business Development: expand market presence trong region',
    ],
    caseStudies: [
      {
        title: 'Vietnamese Engineer Success Story',
        company: 'Various International Companies',
        challenge:
          'Local engineers advancing to senior positions trong global semiconductor companies',
        solution:
          'Continuous learning, international certification, cross-cultural communication skills',
        results:
          'Many Vietnamese engineers now lead major projects at top semiconductor companies',
        insights: [
          'Strong technical foundation từ Vietnamese universities',
          'English proficiency critical cho international collaboration',
          'Willingness to relocate opens more opportunities',
          'Advanced degrees significantly boost career prospects',
        ],
      },
    ],
    resources: [
      {
        title: 'Vietnam Semiconductor Industry Report',
        url: 'https://www.vietnam-briefing.com/news/vietnam-semiconductor-industry-overview.html/',
        type: 'Market Report',
      },
    ],
    labTechniques: [
      'Industry Analysis',
      'Professional Networking',
      'Technical Communication',
      'Career Planning',
    ],
  },
];
