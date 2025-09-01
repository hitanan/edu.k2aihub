export interface BlockchainLesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  blockchainType?: string;
  technology?: string;
  imageUrl?: string;
  videoUrl?: string;
  objectives: string[];
  prerequisites: string[];
  exercises: Array<{
    title: string;
    description: string;
    difficulty: string;
    technologies?: string[];
    tools?: string[];
    procedure?: string[];
    expectedResults?: string;
    solution?: string;
  }>;
  realWorldApplications: string[];
  caseStudies?: Array<{
    title: string;
    organization: string;
    problem: string;
    solution: string;
    impact: string;
    technologies?: string[];
  }>;
  resources?: Array<{
    title: string;
    url: string;
    type: string;
  }>;
  frameworks?: string[];
}

export const blockchainLessons: BlockchainLesson[] = [
  {
    id: 'blockchain-fundamentals-cryptography',
    title: 'Blockchain Fundamentals & Cryptography',
    description:
      'Comprehensive understanding về blockchain technology, cryptographic principles, consensus mechanisms, và decentralized systems. Foundation cho all blockchain applications.',
    duration: '200 phút',
    difficulty: 'Trung bình',
    blockchainType: 'Fundamentals',
    videoUrl: 'https://www.youtube.com/watch?v=yubzJw0uiE4',
    objectives: [
      'Master blockchain architecture: blocks, transactions, merkle trees, hashing',
      'Understand cryptographic principles: public-key cryptography, digital signatures',
      'Learn consensus mechanisms: Proof of Work, Proof of Stake, practical applications',
      'Analyze decentralized vs centralized systems trong various use cases',
    ],
    prerequisites: [
      'Basic computer science knowledge',
      'Understanding của networking fundamentals',
      'Basic mathematics và algorithms',
      'Programming experience (any language)',
    ],
    exercises: [
      {
        title: 'Build Simple Blockchain từ Scratch',
        description: 'Implement basic blockchain với proof-of-work consensus trong Python.',
        difficulty: 'Trung bình',
        technologies: ['Python', 'SHA-256', 'JSON', 'Networking'],
        tools: ['Python IDE', 'Cryptography libraries', 'Network simulation'],
        procedure: [
          'Implement basic block structure với header và transaction data',
          'Create SHA-256 hashing functions cho block integrity',
          'Build merkle tree implementation cho transaction verification',
          'Implement proof-of-work mining algorithm',
          'Create simple peer-to-peer network simulation',
          'Add transaction validation và digital signature verification',
        ],
        expectedResults: 'Functional blockchain prototype với mining và transaction capabilities',
        solution: 'Modular Python implementation với clear separation of concerns và proper validation',
      },
      {
        title: 'Cryptocurrency Analysis cho Vietnamese Market',
        description: 'Analyze major cryptocurrencies và their suitability cho Vietnamese financial ecosystem.',
        difficulty: 'Trung bình',
        technologies: ['Market Analysis', 'Economic Modeling', 'Regulatory Framework'],
        tools: ['Data analysis tools', 'Market research platforms', 'Vietnamese financial data'],
        procedure: [
          'Research Vietnamese regulatory environment cho cryptocurrencies',
          'Analyze Bitcoin, Ethereum, và stablecoin characteristics',
          'Study remittance use cases cho Vietnamese overseas workers',
          'Evaluate energy consumption impacts cho environmental sustainability',
          'Create adoption scenarios cho different Vietnamese demographics',
          'Propose regulatory-compliant implementation strategies',
        ],
        expectedResults: 'Comprehensive analysis của cryptocurrency adoption potential trong Vietnam',
        solution: 'Focus on stablecoins và remittance use cases với phased regulatory compliance approach',
      },
    ],
    realWorldApplications: [
      'Cryptocurrency exchanges và digital wallets',
      'Cross-border remittances cho Vietnamese overseas workers',
      'Supply chain transparency trong Vietnamese agriculture',
      'Digital identity systems cho government services',
      'Academic credential verification systems',
    ],
    caseStudies: [
      {
        title: 'Vietnam Central Bank Digital Currency (CBDC) Research',
        organization: 'State Bank of Vietnam',
        problem: 'Explore digital currency options while maintaining monetary policy control',
        solution: 'Research hybrid CBDC model combining centralized control với digital convenience',
        impact: 'Foundation cho future Vietnamese digital currency implementation',
        technologies: ['CBDC Architecture', 'Digital Payments', 'Monetary Policy', 'Financial Inclusion'],
      },
    ],
    resources: [
      {
        title: 'Bitcoin Whitepaper',
        url: 'https://bitcoin.org/bitcoin.pdf',
        type: 'Foundational Document',
      },
    ],
    frameworks: ['Bitcoin', 'Ethereum', 'Hyperledger', 'Cryptography Libraries', 'Consensus Algorithms'],
  },
  {
    id: 'smart-contract-development',
    title: 'Smart Contract Development & Solidity Programming',
    description:
      'Advanced smart contract development using Solidity, testing frameworks, security best practices, và deployment strategies cho Ethereum và compatible blockchains.',
    duration: '220 phút',
    difficulty: 'Nâng cao',
    blockchainType: 'Smart Contracts',
    videoUrl: 'https://www.youtube.com/watch?v=-1GB6m39-rM',
    objectives: [
      'Master Solidity programming language và smart contract development',
      'Implement common design patterns: proxy, factory, access control',
      'Understanding smart contract security vulnerabilities và mitigation strategies',
      'Deploy và interact với smart contracts trên various blockchain networks',
    ],
    prerequisites: [
      'Programming experience trong object-oriented languages',
      'Understanding của blockchain fundamentals',
      'Basic knowledge của web development',
      'Familiarity với JavaScript/TypeScript',
    ],
    exercises: [
      {
        title: 'Vietnamese Remittance Smart Contract System',
        description: 'Build decentralized remittance system cho Vietnamese overseas workers.',
        difficulty: 'Nâng cao',
        technologies: ['Solidity', 'Web3.js', 'IPFS', 'Oracle Integration'],
        tools: ['Hardhat', 'MetaMask', 'Remix IDE', 'Testnet deployment'],
        procedure: [
          'Design multi-signature wallet system cho family remittances',
          'Implement exchange rate oracle integration',
          'Create escrow smart contract với dispute resolution',
          'Build user interface cho non-technical Vietnamese users',
          'Implement KYC/AML compliance features',
          'Deploy và test trên Polygon/BSC networks (lower fees)',
        ],
        expectedResults: 'Production-ready remittance dApp với Vietnamese language support',
        solution: 'Layer 2 solution với stablecoin integration và user-friendly Vietnamese interface',
      },
      {
        title: 'Agricultural Supply Chain Tracking',
        description: 'Create blockchain system tracking Vietnamese agricultural products từ farm đến consumer.',
        difficulty: 'Nâng cao',
        technologies: ['Solidity', 'IPFS', 'QR Codes', 'IoT Integration'],
        tools: ['Truffle', 'Web3 development stack', 'Mobile app development'],
        procedure: [
          'Design product tracking smart contracts',
          'Implement farmer registration và verification system',
          'Create quality certification và inspection workflows',
          'Build consumer verification app với QR code scanning',
          'Integrate IoT sensors cho environmental data',
          'Deploy pilot program với Vietnamese agricultural cooperatives',
        ],
        expectedResults: 'Transparent supply chain system improving Vietnamese agricultural exports',
        solution: 'Hybrid on-chain/off-chain architecture với IPFS storage và mobile-first design',
      },
    ],
    realWorldApplications: [
      'Decentralized finance (DeFi) protocols',
      'NFT marketplaces cho Vietnamese art và culture',
      'Voting systems cho transparent governance',
      'Insurance smart contracts cho agricultural risk',
      'Real estate tokenization cho property investment',
    ],
    caseStudies: [
      {
        title: 'VeChain Vietnam Supply Chain Partnership',
        organization: 'VeChain Foundation',
        problem: 'Improve transparency trong Vietnamese manufacturing và exports',
        solution: 'Blockchain-based product authentication và supply chain tracking',
        impact: 'Enhanced trust trong Vietnamese products trong global markets',
        technologies: ['VeChain Blockchain', 'IoT Sensors', 'Mobile Apps', 'QR Authentication'],
      },
    ],
    resources: [
      {
        title: 'Solidity Documentation',
        url: 'https://docs.soliditylang.org/',
        type: 'Technical Documentation',
      },
    ],
    frameworks: ['Solidity', 'Hardhat', 'Truffle', 'Web3.js', 'OpenZeppelin', 'IPFS'],
  },
  {
    id: 'defi-protocols-applications',
    title: 'DeFi Protocols & Decentralized Applications',
    description:
      'Comprehensive DeFi ecosystem understanding: DEXs, lending protocols, yield farming, liquidity mining, và advanced DeFi strategies cho investment và business applications.',
    duration: '190 phút',
    difficulty: 'Nâng cao',
    blockchainType: 'DeFi',
    videoUrl: 'https://www.youtube.com/watch?v=e9Eg0CmboFU',
    objectives: [
      'Understand DeFi primitives: AMMs, lending/borrowing, derivatives',
      'Analyze yield farming strategies và risk management',
      'Implement liquidity provision và market making strategies',
      'Design DeFi protocols tailored cho Vietnamese financial needs',
    ],
    prerequisites: [
      'Strong understanding của traditional finance',
      'Smart contract development experience',
      'Risk management principles',
      'Mathematical modeling skills',
    ],
    exercises: [
      {
        title: 'Vietnamese Stablecoin DeFi Platform',
        description: 'Build DeFi platform optimized cho Vietnamese users với VND-pegged stablecoin.',
        difficulty: 'Nâng cao',
        technologies: ['DeFi Protocols', 'Stablecoin Design', 'AMM Implementation'],
        tools: ['DeFi development frameworks', 'Price oracles', 'Liquidity management'],
        procedure: [
          'Design VND-pegged stablecoin với collateral management',
          'Implement automated market maker cho VND/crypto pairs',
          'Create lending protocol cho Vietnamese SMEs',
          'Build yield farming opportunities với sustainable tokenomics',
          'Integrate Vietnamese banking APIs cho fiat on/off ramps',
          'Implement regulatory compliance features',
        ],
        expectedResults: 'Complete DeFi ecosystem serving Vietnamese financial needs',
        solution: 'Multi-collateral stablecoin với community governance và sustainable yield generation',
      },
      {
        title: 'Cross-Border Trade Finance DeFi',
        description: 'Create DeFi solution cho Vietnamese import/export trade finance.',
        difficulty: 'Nâng cao',
        technologies: ['Trade Finance', 'Multi-chain Protocols', 'Institutional DeFi'],
        tools: ['Cross-chain bridges', 'Trade finance platforms', 'Compliance tools'],
        procedure: [
          'Design letter of credit smart contracts',
          'Implement multi-party escrow systems',
          'Create invoice factoring protocols',
          'Build supply chain financing solutions',
          'Integrate với international trade documentation systems',
          'Implement regulatory reporting features',
        ],
        expectedResults: 'Efficient trade finance platform reducing costs và processing time',
        solution: 'Institutional-grade DeFi với compliance features và traditional finance integration',
      },
    ],
    realWorldApplications: [
      'Decentralized exchanges cho cryptocurrency trading',
      'Peer-to-peer lending platforms',
      'Yield farming và liquidity mining programs',
      'Cross-border payment solutions',
      'Microfinance DeFi cho Vietnamese rural areas',
    ],
    caseStudies: [
      {
        title: 'MDEX Vietnam DeFi Expansion',
        organization: 'MDEX Protocol',
        problem: 'Bring DeFi services to Vietnamese cryptocurrency users',
        solution: 'Localized DeFi platform với Vietnamese language support và local partnerships',
        impact: 'Increased DeFi adoption among Vietnamese crypto community',
        technologies: ['AMM Protocols', 'Yield Farming', 'Cross-chain Technology', 'Mobile DeFi'],
      },
    ],
    resources: [
      {
        title: 'DeFi Pulse - Protocol Analytics',
        url: 'https://defipulse.com/',
        type: 'Market Data Platform',
      },
    ],
    frameworks: ['Uniswap', 'Compound', 'Aave', 'Curve', 'Yearn Finance', 'Chainlink Oracles'],
  },
  {
    id: 'nft-metaverse-development',
    title: 'NFT Technology & Metaverse Development',
    description:
      'Advanced NFT creation, marketplace development, metaverse applications, và cultural preservation using blockchain technology với focus trên Vietnamese digital culture.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    blockchainType: 'NFT/Metaverse',
    videoUrl: 'https://www.youtube.com/watch?v=NNQLJcJEzv0',
    objectives: [
      'Master NFT standards: ERC-721, ERC-1155, và advanced implementations',
      'Build NFT marketplaces với advanced features',
      'Understand metaverse architecture và virtual world development',
      'Implement cultural preservation projects using NFT technology',
    ],
    prerequisites: [
      'Smart contract development skills',
      'Web development experience',
      'Understanding của digital art và intellectual property',
      'Basic 3D modeling và game development knowledge',
    ],
    exercises: [
      {
        title: 'Vietnamese Cultural Heritage NFT Platform',
        description: 'Create NFT platform preserving Vietnamese cultural artifacts và traditional art.',
        difficulty: 'Trung bình',
        technologies: ['NFT Standards', 'IPFS Storage', 'Cultural Documentation'],
        tools: ['NFT development frameworks', 'Digital preservation tools', 'Metadata standards'],
        procedure: [
          'Partner với Vietnamese museums và cultural institutions',
          'Design NFT metadata standards cho cultural artifacts',
          'Implement provenance tracking và authenticity verification',
          'Create educational platform với NFT integration',
          'Build community governance cho cultural preservation decisions',
          'Implement revenue sharing với cultural institutions',
        ],
        expectedResults: 'Comprehensive platform preserving Vietnamese culture trong digital format',
        solution: 'Educational NFT platform với community governance và sustainable funding model',
      },
      {
        title: 'Vietnamese Artists NFT Marketplace',
        description: 'Build specialized NFT marketplace supporting Vietnamese artists và creative communities.',
        difficulty: 'Trung bình',
        technologies: ['NFT Marketplace', 'Artist Tools', 'Community Features'],
        tools: ['Marketplace development platforms', 'Artist creation tools', 'Social features'],
        procedure: [
          'Design artist onboarding và verification system',
          'Implement royalty distribution mechanisms',
          'Create Vietnamese language interface và support',
          'Build community features: galleries, artist profiles, events',
          'Integrate Vietnamese payment methods',
          'Implement marketing tools cho artist promotion',
        ],
        expectedResults: 'Thriving NFT marketplace supporting Vietnamese creative economy',
        solution: 'Artist-centric marketplace với low fees, community features, và Vietnamese market focus',
      },
    ],
    realWorldApplications: [
      'Digital art marketplaces cho Vietnamese artists',
      'Cultural heritage preservation initiatives',
      'Gaming assets và virtual world economies',
      'Music và entertainment industry applications',
      'Educational credentials và achievement systems',
    ],
    caseStudies: [
      {
        title: 'TomoChain NFT Ecosystem Development',
        organization: 'TomoChain (Vietnamese Blockchain)',
        problem: 'Build Vietnamese-focused NFT ecosystem với low transaction costs',
        solution: 'Develop comprehensive NFT infrastructure supporting Vietnamese creators',
        impact: 'Growing Vietnamese NFT community với local market focus',
        technologies: ['TomoChain Blockchain', 'NFT Standards', 'Creator Tools', 'Vietnamese Market'],
      },
    ],
    resources: [
      {
        title: 'OpenSea NFT Marketplace',
        url: 'https://opensea.io/',
        type: 'NFT Platform',
      },
    ],
    frameworks: ['ERC-721', 'ERC-1155', 'OpenZeppelin', 'IPFS', 'Moralis', 'Alchemy NFT API'],
  },
  {
    id: 'regulatory-compliance-security',
    title: 'Regulatory Compliance & Blockchain Security',
    description:
      'Comprehensive blockchain security practices, regulatory compliance frameworks, audit processes, và risk management cho enterprise blockchain applications.',
    duration: '170 phút',
    difficulty: 'Nâng cao',
    blockchainType: 'Security/Compliance',
    videoUrl: 'https://www.youtube.com/watch?v=M_hLYKYFS5w',
    objectives: [
      'Master blockchain security best practices và vulnerability assessment',
      'Understand regulatory frameworks: AML/KYC, securities law, tax implications',
      'Implement compliance systems cho Vietnamese legal requirements',
      'Design security audit processes và incident response procedures',
    ],
    prerequisites: [
      'Advanced blockchain development experience',
      'Understanding của cybersecurity principles',
      'Knowledge của financial regulations',
      'Legal awareness và compliance experience',
    ],
    exercises: [
      {
        title: 'Vietnamese Crypto Exchange Compliance System',
        description: 'Design comprehensive compliance framework cho cryptocurrency exchange operating trong Vietnam.',
        difficulty: 'Nâng cao',
        technologies: ['Compliance Frameworks', 'KYC/AML Systems', 'Security Auditing'],
        tools: ['Compliance platforms', 'Security testing tools', 'Regulatory reporting systems'],
        procedure: [
          'Research Vietnamese cryptocurrency regulations và draft laws',
          'Implement KYC/AML verification systems',
          'Design transaction monitoring và suspicious activity reporting',
          'Create customer fund protection mechanisms',
          'Implement data protection compliance (Vietnamese data laws)',
          'Design regulatory reporting và audit trail systems',
        ],
        expectedResults: 'Regulatory-compliant exchange framework ready cho Vietnamese market',
        solution: 'Multi-layered compliance system với automated monitoring và regulatory reporting',
      },
      {
        title: 'Smart Contract Security Audit Framework',
        description: 'Create comprehensive security audit process cho Vietnamese blockchain projects.',
        difficulty: 'Nâng cao',
        technologies: ['Security Auditing', 'Vulnerability Assessment', 'Testing Frameworks'],
        tools: ['Static analysis tools', 'Fuzzing frameworks', 'Formal verification'],
        procedure: [
          'Develop automated vulnerability scanning tools',
          'Create manual code review checklists',
          'Implement formal verification processes',
          'Design penetration testing methodologies',
          'Create incident response procedures',
          'Build security training programs cho Vietnamese developers',
        ],
        expectedResults: 'Industry-standard security audit framework cho Vietnamese blockchain ecosystem',
        solution: 'Comprehensive security framework với Vietnamese regulatory compliance integration',
      },
    ],
    realWorldApplications: [
      'Enterprise blockchain security implementations',
      'Cryptocurrency exchange regulatory compliance',
      'DeFi protocol security auditing',
      'Government blockchain project security',
      'Cross-border payment compliance systems',
    ],
    caseStudies: [
      {
        title: 'Vietnamese Blockchain Association Security Standards',
        organization: 'Vietnam Blockchain Association',
        problem: 'Establish security và compliance standards cho Vietnamese blockchain industry',
        solution: 'Develop industry-wide security frameworks và best practices',
        impact: 'Improved security posture across Vietnamese blockchain ecosystem',
        technologies: ['Security Standards', 'Industry Guidelines', 'Best Practices', 'Regulatory Framework'],
      },
    ],
    resources: [
      {
        title: 'ConsenSys Security Best Practices',
        url: 'https://consensys.github.io/smart-contract-best-practices/',
        type: 'Security Guidelines',
      },
    ],
    frameworks: ['MythX', 'Slither', 'Echidna', 'Certora', 'OpenZeppelin Security', 'Chainlink Security'],
  },
];
