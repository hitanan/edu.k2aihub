import { BaseLessonData } from '@/types/lesson-base';

export interface BlockchainTechnologyLesson extends BaseLessonData {
  blockchainConcepts?: string[];
  cryptocurrencies?: string[];
  practicalProjects?: {
    title: string;
    description: string;
    technology: string[];
    complexity: string;
  }[];
  vietnamContext?: {
    title: string;
    content: string[];
  };
  careerConnect?: {
    name: string;
    title: string;
    company: string;
    imageUrl: string;
    quote: string;
  };
}

export const BlockchainLessons: BlockchainTechnologyLesson[] = [
  {
    id: 'blockchain-fundamentals',
    title: 'Cơ bản về Blockchain và Cryptocurrency',
    description:
      'Tìm hiểu công nghệ blockchain từ cơ bản đến nâng cao, bao gồm Bitcoin, Ethereum và các ứng dụng thực tế.',
    duration: '150 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=yubzJw0uiE4', // Blockchain In 7 Minutes - Simplilearn
    imageUrl: '/images/blockchain-fundamentals.jpg',
    objectives: [
      'Hiểu cấu trúc và hoạt động của blockchain',
      'Nắm vững khái niệm cryptocurrency và mining',
      'Phân biệt các loại blockchain: public, private, consortium',
      'Tìm hiểu consensus mechanisms: PoW, PoS, DPoS',
    ],
    prerequisites: ['Kiến thức máy tính cơ bản', 'Hiểu biết về mạng internet', 'Toán học cơ bản và cryptography'],
    exercises: [
      {
        title: 'Xây dựng Blockchain đơn giản với Python',
        description: 'Tạo blockchain cơ bản để hiểu cách block được tạo và liên kết',
        difficulty: 'Cơ bản',
        materials: ['Python', 'hashlib', 'json', 'time'],
        procedure: [
          'Tạo class Block với timestamp, data, previous_hash, nonce',
          'Implement hashing function với SHA-256',
          'Tạo class Blockchain với genesis block',
          'Implement proof-of-work mining algorithm',
          'Tạo method add_block() với validation',
          'Implement blockchain validation',
          'Test với sample transactions',
        ],
        expectedResults: 'Blockchain đơn giản có thể add blocks và validate chain integrity',
        solution:
          '# Simple Blockchain Implementation\nimport hashlib\nimport json\nimport time\n\nclass Block:\n    def __init__(self, index, timestamp, data, previous_hash):\n        self.index = index\n        self.timestamp = timestamp\n        self.data = data\n        self.previous_hash = previous_hash\n        self.nonce = 0\n        self.hash = self.calculate_hash()\n    \n    def calculate_hash(self):\n        block_string = json.dumps({\n            "index": self.index,\n            "timestamp": self.timestamp,\n            "data": self.data,\n            "previous_hash": self.previous_hash,\n            "nonce": self.nonce\n        }, sort_keys=True)\n        return hashlib.sha256(block_string.encode()).hexdigest()\n    \n    def mine_block(self, difficulty):\n        target = "0" * difficulty\n        while self.hash[:difficulty] != target:\n            self.nonce += 1\n            self.hash = self.calculate_hash()\n        print(f"Block mined: {self.hash}")\n\nclass Blockchain:\n    def __init__(self):\n        self.chain = [self.create_genesis_block()]\n        self.difficulty = 2\n    \n    def create_genesis_block(self):\n        return Block(0, time.time(), "Genesis Block", "0")\n    \n    def get_latest_block(self):\n        return self.chain[-1]\n    \n    def add_block(self, new_block):\n        new_block.previous_hash = self.get_latest_block().hash\n        new_block.mine_block(self.difficulty)\n        self.chain.append(new_block)\n    \n    def is_chain_valid(self):\n        for i in range(1, len(self.chain)):\n            current_block = self.chain[i]\n            previous_block = self.chain[i-1]\n            \n            if current_block.hash != current_block.calculate_hash():\n                return False\n            \n            if current_block.previous_hash != previous_block.hash:\n                return False\n        \n        return True\n\n# Test blockchain\nmy_blockchain = Blockchain()\nmy_blockchain.add_block(Block(1, time.time(), "Transaction 1", ""))\nmy_blockchain.add_block(Block(2, time.time(), "Transaction 2", ""))\n\nprint("Blockchain valid:", my_blockchain.is_chain_valid())',
      },
    ],
    realWorldApplications: [
      'Bitcoin - Peer-to-peer digital currency',
      'Supply chain tracking (Walmart, Maersk)',
      'Digital identity verification',
      'Smart contracts automation',
      'NFT art và collectibles marketplace',
    ],
    caseStudies: [
      {
        title: 'Walmart Food Traceability System',
        organization: 'Walmart + IBM Food Trust',
        problem: 'Tracking contaminated food sources takes weeks',
        solution: 'Blockchain-based supply chain tracing system',
        impact: 'Reduced tracing time from weeks to seconds',
        innovations: ['Hyperledger Fabric', 'IoT sensors integration', 'Real-time tracking'],
      },
    ],
    blockchainConcepts: [
      'Distributed Ledger',
      'Cryptographic Hashing',
      'Merkle Trees',
      'Digital Signatures',
      'Consensus Mechanisms',
    ],
    cryptocurrencies: ['Bitcoin (BTC)', 'Ethereum (ETH)', 'Binance Coin (BNB)', 'Cardano (ADA)', 'Solana (SOL)'],
    vietnamContext: {
      title: 'Bối cảnh Blockchain tại Việt Nam',
      content: [
        'Việt Nam là một trong những quốc gia có tỷ lệ chấp nhận tiền điện tử cao nhất thế giới.',
        'Chính phủ Việt Nam đang trong quá trình xây dựng khung pháp lý cho tài sản kỹ thuật số.',
        'Nhiều dự án blockchain của Việt Nam đã thành công trên trường quốc tế như Axie Infinity, TomoChain.',
      ],
    },
    careerConnect: {
      name: 'Anh Trịnh Công Duy',
      title: 'Kỹ sư Blockchain',
      company: 'TomoChain',
      imageUrl: 'https://i.pravatar.cc/150?u=trinh-cong-duy',
      quote:
        'Blockchain không chỉ là về tiền điện tử, nó là công nghệ của niềm tin. Làm việc trong ngành này tại Việt Nam là cơ hội để đi đầu trong một cuộc cách mạng công nghệ.',
    },
    quizzes: [
      {
        question: 'Proof of Work (PoW) là gì?',
        options: [
          'Một thuật toán đồng thuận yêu cầu giải bài toán phức tạp',
          'Một loại tiền điện tử',
          'Một loại hợp đồng thông minh',
          'Một cách để lưu trữ dữ liệu',
        ],
        correctAnswerIndex: 0,
        explanation:
          'PoW là cơ chế đồng thuận đầu tiên và phổ biến nhất, được sử dụng bởi Bitcoin. Nó yêu cầu các "thợ đào" (miners) phải giải một bài toán tính toán phức tạp để có quyền thêm block mới vào chuỗi.',
      },
    ],
  },
  {
    id: 'smart-contracts-dapps',
    title: 'Smart Contracts và DApps Development',
    description: 'Học cách phát triển smart contracts và ứng dụng phi tập trung (DApps) trên Ethereum.',
    duration: '200 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=9_uXrKPM4Qs',
    objectives: [
      'Nắm vững ngôn ngữ Solidity cho smart contracts',
      'Hiểu Ethereum Virtual Machine (EVM)',
      'Phát triển và deploy smart contracts',
      'Xây dựng frontend DApp với Web3.js',
    ],
    prerequisites: [
      'Blockchain fundamentals',
      'JavaScript programming',
      'Web development basics',
      'Understanding of Ethereum',
    ],
    exercises: [
      {
        title: 'Phát triển Voting DApp',
        description: 'Tạo ứng dụng bỏ phiếu phi tập trung với smart contract',
        difficulty: 'Nâng cao',
        materials: ['Solidity', 'Truffle/Hardhat', 'Web3.js', 'React', 'MetaMask'],
        procedure: [
          'Setup development environment: Node.js, Truffle, Ganache',
          'Viết smart contract Voting.sol với candidates, voters',
          'Implement voting logic với access control',
          'Compile và test smart contract với Mocha',
          'Deploy lên Ganache test network',
          'Tạo React frontend với Web3 integration',
          'Connect MetaMask wallet để interact',
          'Test end-to-end voting process',
        ],
        expectedResults: 'Functional voting DApp với transparent, immutable voting records',
        solution:
          '// Voting Smart Contract\npragma solidity ^0.8.0;\n\ncontract Voting {\n    struct Candidate {\n        uint id;\n        string name;\n        uint voteCount;\n    }\n    \n    mapping(uint => Candidate) public candidates;\n    mapping(address => bool) public voters;\n    uint public candidatesCount;\n    \n    event VotedEvent(uint indexed candidateId);\n    \n    constructor() {\n        addCandidate("Alice");\n        addCandidate("Bob");\n    }\n    \n    function addCandidate(string memory _name) private {\n        candidatesCount++;\n        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);\n    }\n    \n    function vote(uint _candidateId) public {\n        require(!voters[msg.sender], "Already voted");\n        require(_candidateId > 0 && _candidateId <= candidatesCount, "Invalid candidate");\n        \n        voters[msg.sender] = true;\n        candidates[_candidateId].voteCount++;\n        \n        emit VotedEvent(_candidateId);\n    }\n}\n\n// Web3.js Integration\nconst Web3 = require("web3");\nconst contract = require("../build/contracts/Voting.json");\n\nclass VotingService {\n    constructor() {\n        this.web3 = new Web3(Web3.givenProvider || "http://localhost:7545");\n        this.contract = null;\n        this.account = null;\n    }\n    \n    async init() {\n        const networkId = await this.web3.eth.net.getId();\n        const deployedNetwork = contract.networks[networkId];\n        this.contract = new this.web3.eth.Contract(\n            contract.abi,\n            deployedNetwork && deployedNetwork.address\n        );\n        \n        const accounts = await this.web3.eth.getAccounts();\n        this.account = accounts[0];\n    }\n    \n    async vote(candidateId) {\n        return await this.contract.methods.vote(candidateId)\n            .send({ from: this.account });\n    }\n    \n    async getCandidates() {\n        const candidatesCount = await this.contract.methods.candidatesCount().call();\n        const candidates = [];\n        \n        for (let i = 1; i <= candidatesCount; i++) {\n            const candidate = await this.contract.methods.candidates(i).call();\n            candidates.push(candidate);\n        }\n        \n        return candidates;\n    }\n}',
      },
    ],
    realWorldApplications: [
      'DeFi protocols (Uniswap, Compound)',
      'NFT marketplaces (OpenSea, Rarible)',
      'DAO governance systems',
      'Decentralized insurance platforms',
      'Gaming và metaverse applications',
    ],
    practicalProjects: [
      {
        title: 'ERC-20 Token Creator',
        description: 'Tạo và deploy custom cryptocurrency token',
        technology: ['Solidity', 'OpenZeppelin', 'Remix IDE'],
        complexity: 'Trung bình',
      },
      {
        title: 'NFT Marketplace',
        description: 'Platform mua bán NFT với auction features',
        technology: ['Solidity', 'IPFS', 'React', 'Web3.js'],
        complexity: 'Nâng cao',
      },
    ],
    vietnamContext: {
      title: 'Phát triển DApp tại Việt Nam',
      content: [
        'Cộng đồng lập trình viên blockchain tại Việt Nam rất năng động và sáng tạo.',
        'Nhiều DApp "Made in Vietnam" đã gây được tiếng vang lớn trên toàn cầu.',
        'Các cuộc thi hackathon về blockchain thường xuyên được tổ chức, thu hút nhiều tài năng trẻ.',
      ],
    },
    careerConnect: {
      name: 'Chị Lê Mỹ An',
      title: 'Solidity Developer',
      company: 'Kyber Network',
      imageUrl: 'https://i.pravatar.cc/150?u=le-my-an',
      quote:
        'Phát triển smart contract giống như xây dựng những cỗ máy tự động trên internet. Nó đòi hỏi sự chính xác tuyệt đối và tư duy logic sắc bén. Đây là một lĩnh vực đầy thử thách nhưng cũng vô cùng thú vị.',
    },
    quizzes: [
      {
        question: 'Solidity là ngôn ngữ lập trình cho nền tảng nào?',
        options: ['Bitcoin', 'Ethereum', 'Ripple', 'Cardano'],
        correctAnswerIndex: 1,
        explanation:
          'Solidity là ngôn ngữ lập trình chính để viết smart contract trên Ethereum và các blockchain tương thích EVM.',
      },
    ],
  },
  {
    id: 'defi-protocols',
    title: 'DeFi và Decentralized Finance',
    description: 'Khám phá hệ sinh thái tài chính phi tập trung và các protocol DeFi phổ biến.',
    duration: '160 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Hiểu các protocol DeFi: DEX, lending, yield farming',
      'Nắm vững automated market makers (AMM)',
      'Tìm hiểu liquidity mining và staking',
      'Phân tích rủi ro và security trong DeFi',
    ],
    prerequisites: ['Smart contracts development', 'Ethereum ecosystem knowledge', 'Finance và investment basics'],
    exercises: [
      {
        title: 'Analyze DeFi Protocol Economics',
        description: 'Phân tích tokenomics và yield strategies của major DeFi protocols',
        difficulty: 'Nâng cao',
        procedure: [
          'Research Uniswap V3 liquidity provision',
          'Calculate impermanent loss scenarios',
          'Analyze Compound lending rates',
          'Study Aave flash loan mechanics',
          'Compare yield farming opportunities',
          'Assess smart contract risks',
          'Create DeFi investment strategy',
        ],
      },
    ],
    realWorldApplications: [
      'Decentralized exchanges (Uniswap, PancakeSwap)',
      'Lending protocols (Aave, Compound)',
      'Synthetic assets (Synthetix)',
      'Insurance protocols (Nexus Mutual)',
      'Cross-chain bridges',
    ],
    vietnamContext: {
      title: 'DeFi tại Việt Nam',
      content: [
        'Việt Nam là một trong những thị trường DeFi tiềm năng nhất Đông Nam Á.',
        'Nhiều người dùng Việt Nam tham gia yield farming và liquidity mining để tìm kiếm lợi nhuận.',
        'Các dự án DeFi Việt Nam đang dần khẳng định được vị thế trên bản đồ thế giới.',
      ],
    },
    careerConnect: {
      name: 'Anh Trần Văn Hùng',
      title: 'Chuyên gia DeFi',
      company: 'Coin98 Finance',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-van-hung',
      quote:
        'DeFi đang định hình lại toàn bộ ngành tài chính. Đây là cơ hội để xây dựng một hệ thống tài chính cởi mở, minh bạch và dễ tiếp cận hơn cho tất cả mọi người.',
    },
    quizzes: [
      {
        question: 'AMM là viết tắt của từ gì?',
        options: [
          'Automated Money Maker',
          'Automated Market Maker',
          'Advanced Market Maker',
          'Automated aRithmetic Model',
        ],
        correctAnswerIndex: 1,
        explanation:
          'AMM (Automated Market Maker) là cơ chế cốt lõi của các sàn giao dịch phi tập trung (DEX), cho phép giao dịch tự động thông qua các liquidity pool.',
      },
    ],
  },
  {
    id: 'blockchain-enterprise',
    title: 'Blockchain cho Doanh nghiệp',
    description: 'Ứng dụng blockchain trong môi trường doanh nghiệp và các use cases thực tế.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Hiểu enterprise blockchain platforms',
      'Nắm vững permissioned vs permissionless networks',
      'Tìm hiểu Hyperledger Fabric, R3 Corda',
      'Đánh giá ROI và implementation challenges',
    ],
    prerequisites: ['Blockchain fundamentals', 'Business process understanding', 'Enterprise architecture knowledge'],
    exercises: [
      {
        title: 'Design Supply Chain Blockchain Solution',
        description: 'Thiết kế giải pháp blockchain cho supply chain management',
        difficulty: 'Trung bình',
        procedure: [
          'Identify supply chain pain points',
          'Design blockchain architecture',
          'Define participant roles và permissions',
          'Create data models for tracking',
          'Design consensus mechanism',
          'Plan integration với existing systems',
          'Estimate implementation costs và benefits',
        ],
      },
    ],
    realWorldApplications: [
      'Supply chain traceability',
      'Digital identity management',
      'Healthcare records management',
      'Real estate transactions',
      'Carbon credit trading',
    ],
    vietnamContext: {
      title: 'Blockchain cho Doanh nghiệp tại Việt Nam',
      content: [
        'Nhiều doanh nghiệp lớn tại Việt Nam đang thử nghiệm và ứng dụng blockchain để tăng cường minh bạch và hiệu quả.',
        'Truy xuất nguồn gốc nông sản là một trong những ứng dụng blockchain thành công nhất tại Việt Nam.',
        'Chính phủ cũng đang nghiên cứu ứng dụng blockchain trong quản lý công và dịch vụ công.',
      ],
    },
    careerConnect: {
      name: 'Chị Nguyễn Thị Lan',
      title: 'Giám đốc tư vấn chuyển đổi số',
      company: 'FPT Digital',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-thi-lan',
      quote:
        'Blockchain là một công cụ mạnh mẽ để giải quyết các bài toán về niềm tin và minh bạch trong doanh nghiệp. Việc ứng dụng thành công công nghệ này sẽ tạo ra lợi thế cạnh tranh rất lớn.',
    },
    quizzes: [
      {
        question: 'Hyperledger Fabric là một ví dụ của loại blockchain nào?',
        options: ['Public', 'Private', 'Permissioned', 'Permissionless'],
        correctAnswerIndex: 2,
        explanation:
          'Hyperledger Fabric là một nền tảng blockchain dành cho doanh nghiệp, thuộc loại permissioned (có sự cho phép), nơi các thành viên tham gia mạng lưới phải được xác thực.',
      },
    ],
  },
];
