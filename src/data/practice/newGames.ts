import { EducationalGame } from '@/types';

export const NEW_GAMES_DATA: EducationalGame[] = [
  {
    id: 'global-marketplace-manager',
    title: 'Quản lý Sàn Thương mại Toàn cầu',
    description:
      'Quản lý Sàn Thương mại Toàn cầu là game mô phỏng kinh doanh e-commerce xuyên biên giới, đưa bạn vào vai chủ doanh nghiệp quản lý cửa hàng online trên nhiều nền tảng thương mại điện tử quốc tế như Amazon, Alibaba, Shopify, eBay, và Lazada, đồng thời tối ưu hóa logistics phức tạp và xử lý thanh toán quốc tế đa tiền tệ trong bối cảnh thương mại toàn cầu đầy cạnh tranh và cơ hội.\n\nTrong game, bạn xây dựng chiến lược multi-channel e-commerce: chọn sản phẩm phù hợp cho từng thị trường (electronics cho US, fashion cho EU, consumer goods cho Đông Nam Á), tạo product listings hấp dẫn với SEO optimization, thiết lập pricing strategies cạnh tranh (dynamic pricing, bundle offers, flash sales), và quản lý inventory across platforms. Bạn phải hiểu thuế quan import/export, compliance với regulations từng nước, và cultural differences ảnh hưởng consumer behavior.\n\nChallenges thực tế bạn đối mặt: chọn shipping methods (air freight nhanh nhưng đắt, sea freight chậm nhưng rẻ), deal với customs clearance delays, quản lý returns và refunds quốc tế, xử lý currency exchange fluctuations, và respond to negative reviews. Game mô phỏng payment gateways như Stripe, PayPal, Alipay với fees và fraud prevention. Bạn cũng phải marketing trên social media, chạy Google Ads, và build brand reputation.\n\nĐặc biệt, game dạy financial management: tính profit margins sau các chi phí (product cost, shipping, platform fees, marketing, returns), manage cash flow khi payment processing mất 7-14 ngày, và scale business bằng cách reinvest profits. Bạn expand sang new markets, negotiate với suppliers để lower costs, và optimize logistics với 3PL partners.\n\nGame phù hợp cho học sinh THPT/sinh viên muốn khởi nghiệp e-commerce, entrepreneurs đang làm hoặc muốn làm cross-border selling, và bất kỳ ai muốn hiểu global e-commerce ecosystem.',
    category: ['simulation', 'business'],
    difficulty: 'Trung bình',
    estimatedTime: '30-40 phút',
    skills: ['E-commerce', 'Logistics', 'Financial Management', 'Cultural Adaptation'],
    moduleType: 'cross-border-ecommerce',
    isInternal: true,
    points: 150,
    icon: '🌐',
    color: 'from-blue-500 to-teal-500',
    faqs: [
      {
        question: 'Tôi cần vốn bao nhiêu để bắt đầu cross-border e-commerce thực tế?',
        answer:
          'Game mô phỏng các levels: Beginner ($1,000-3,000 sourcing products từ AliExpress, Shopify store), Intermediate ($5,000-20,000 private label products, Amazon FBA), Advanced ($50,000+ own brand, multiple channels). Bạn học cách start small và scale up.',
      },
      {
        question: 'Platform nào tốt nhất cho người mới: Amazon, Shopify, hay Alibaba?',
        answer:
          'Game giải thích: Amazon FBA (dễ bắt đầu, nhiều traffic, fees cao 30-40%), Shopify (control nhiều, cần marketing riêng), Alibaba (B2B, wholesale, MOQ cao). Tùy model kinh doanh và nguồn vốn. Game cho bạn thử từng platform.',
      },
      {
        question: 'Làm sao xử lý logistics và shipping quốc tế?',
        answer:
          'Game dạy: (1) Tính delivered cost (product + shipping + duty + tax), (2) Chọn 3PL partners như DHL, FedEx, (3) Dùng fulfillment services (Amazon FBA, Shopee SLS), (4) Track shipments và handle lost packages, (5) Optimize packaging để lower costs.',
      },
      {
        question: 'Rủi ro lớn nhất của cross-border e-commerce là gì?',
        answer:
          'Game cho thấy: (1) Product quality issues (returns tốn kém), (2) Cash flow problems (vốn bị treo inventory), (3) Currency fluctuations (profit margin bị ăn mòn), (4) Platform policy changes (Amazon suspension), (5) Competition (race to bottom). Game dạy risk mitigation.',
      },
      {
        question: 'Có thể kiếm được bao nhiêu từ cross-border e-commerce?',
        answer:
          'Game mô phỏng realistic scenarios: Side hustle $500-2,000/tháng (part-time), Full-time business $5,000-20,000/tháng (với scale), Successful brand $100,000+/tháng (rare). Profit margins thường 15-30% sau all costs. Game dạy expectation management quan trọng!',
      },
    ],
    learningObjectives: [
      'Nắm vững quy trình complete e-commerce: sourcing, listing, marketing, fulfillment, customer service',
      'Hiểu logistics quốc tế: incoterms, customs, duties, shipping methods, 3PL services',
      'Phát triển kỹ năng financial management: pricing, profit calculation, cash flow, reinvestment',
      'Học cách adapt products và marketing strategies cho markets khác văn hóa',
      'Làm quen với các platforms lớn (Amazon, Shopify, Alibaba) và tools thực tế',
    ],
    relatedLessons: [
      {
        moduleId: 'cross-border-ecommerce',
        lessonId: 'ecommerce-fundamentals',
        title: 'Cơ bản Thương mại Điện tử Xuyên biên giới',
        connection: 'Áp dụng kiến thức về mô hình kinh doanh và chiến lược giá.',
      },
      {
        moduleId: 'cross-border-ecommerce',
        lessonId: 'international-platforms',
        title: 'Nền tảng Thương mại Quốc tế',
        connection: 'Thực hành quản lý cửa hàng trên Amazon, Alibaba, và Shopify.',
      },
      {
        moduleId: 'cross-border-ecommerce',
        lessonId: 'cross-border-logistics',
        title: 'Logistics và Vận chuyển Quốc tế',
        connection: 'Tối ưu hóa chuỗi cung ứng và lựa chọn đối tác vận chuyển.',
      },
    ],
  },
  {
    id: 'precision-farm-manager',
    title: 'Quản lý Nông trại Chính xác',
    description:
      'Quản lý Nông trại Chính xác là game mô phỏng nông nghiệp công nghệ cao (Agritech), đưa bạn vào vai nông dân hiện đại sử dụng drone mapping, IoT sensors thông minh, AI computer vision, và big data analytics để quản lý nông trại quy mô lớn, tối ưu hóa tưới tiêu precision irrigation, phát hiện sâu bệnh sớm, và tăng năng suất cây trồng lên 30-50% trong khi giảm sử dụng nước, phân bón, thuốc trừ sâu - đúng xu hướng sustainable agriculture đang cách mạng hóa ngành nông nghiệp toàn cầu.\n\nGame bắt đầu với variable rate technology (VRT): bạn deploy drone equipped với multispectral cameras bay trên cánh đồng, chụp NDVI images (Normalized Difference Vegetation Index) cho thấy plant health, soil moisture, và nutrient levels từng khu vực. AI phân tích data tạo prescription maps để tưới nước và bón phân chính xác theo nhu cầu từng mét vuông thay vì uniform application lãng phí. IoT soil sensors đo real-time moisture, pH, NPK levels gửi alerts khi cần intervention.\n\nHệ thống AI computer vision được train nhận diện 50+ loại sâu bệnh và weeds qua drone images hoặc smartphone photos, suggest targeted treatments thay vì spray toàn bộ đồng ruộng. Weather stations kết nối internet forecast rainfall, temperature, humidity giúp bạn schedule planting, irrigation, harvesting optimal. Automated tractors với GPS guidance plant seeds với precision spacing, save fuel và labor costs.\n\nGame mô phỏng challenges thực tế: initial investment cao ($50,000-200,000 cho drones, sensors, software), learning curve để operate tech, internet connectivity issues ở rural areas, và ROI calculations. Bạn track yields, costs, profits per hectare, compare organic vs conventional farming, và explore new markets (exports, farmer cooperatives).\n\nGame phù hợp cho học sinh nông thôn muốn modernize farming, sinh viên ngành Nông nghiệp/Công nghệ, và entrepreneurs quan tâm Agritech startups - ngành đang hot với funding tỷ đô.',
    category: ['simulation', 'tech'],
    difficulty: 'Nâng cao',
    estimatedTime: '35-45 phút',
    skills: ['Agritech', 'IoT', 'Drone Technology', 'AI in Agriculture', 'Data Analysis'],
    moduleType: 'agritech-precision-farming',
    isInternal: true,
    points: 180,
    icon: '🚜',
    color: 'from-green-500 to-lime-500',
    faqs: [
      {
        question: 'Chi phí đầu tư công nghệ precision farming có đáng không?',
        answer:
          'Game cho thấy ROI: Năm 1 break-even (investment $100K), Năm 2-5 profit tăng 20-40% nhờ save inputs (water -30%, fertilizer -25%, pesticide -40%) và yield tăng 15-30%. Farms >50 hectares thấy ROI nhanh nhất. Small farms (<10 ha) có thể thuê drone services thay vì mua.',
      },
      {
        question: 'Tôi cần kỹ năng công nghệ gì để làm precision farming?',
        answer:
          'Game dạy từ cơ bản: (1) Fly drones và đọc NDVI maps (1-2 tuần training), (2) Setup và read IoT sensors (basic), (3) Use farm management software (như John Deere Operations Center), (4) Interpret AI recommendations. Không cần coding! UI-friendly.',
      },
      {
        question: 'Công nghệ nào quan trọng nhất: drone, IoT, hay AI?',
        answer:
          'Game giải thích: (1) IoT sensors (foundation - real-time data), (2) Drones (regular monitoring + spraying), (3) AI (insights từ data). Bắt đầu với weather stations và soil sensors ($5K-10K), sau đó drones ($10K-50K), cuối cùng AI platforms ($2K-10K/year subscription).',
      },
      {
        question: 'Precision farming có áp dụng được cho nông nghiệp Việt Nam không?',
        answer:
          'Có! Game mô phỏng scenarios Việt Nam: lúa Delta Mekong (drone spray rice, IoT monitor water), cà phê Tây Nguyên (soil sensors optimize irrigation), rau VietGAP (traceability QR codes). Chính phủ có subsidies 30-50% cho smart farming tech. VinSmart, FPT đang develop solutions.',
      },
      {
        question: 'Nghề nghiệp nào liên quan precision farming?',
        answer:
          'Game giới thiệu careers: (1) Agricultural Engineer (thiết kế systems), (2) Drone Pilot/Analyst (agricultural drones certification), (3) Farm Data Analyst, (4) Agritech Sales/Support, (5) Agronomy Consultant. Salaries $40K-100K tùy experience. Agritech startups đang boom!',
      },
    ],
    learningObjectives: [
      'Nắm vững công nghệ precision agriculture: drones, IoT sensors, GPS, VRT, AI',
      'Phát triển kỹ năng data-driven decision making trong sản xuất nông nghiệp',
      'Hiểu cách tối ưu inputs (water, fertilizer, pesticide) để tăng sustainability',
      'Học cách calculate ROI và manage tech investments trong agriculture',
      'Khám phá cơ hội career và entrepreneurship trong Agritech ecosystem',
    ],
    relatedLessons: [
      {
        moduleId: 'agritech-precision-farming',
        lessonId: 'smart-farming-fundamentals',
        title: 'Cơ bản Nông nghiệp Thông minh',
        connection: 'Triển khai và quản lý hệ thống IoT trong nông nghiệp.',
      },
      {
        moduleId: 'agritech-precision-farming',
        lessonId: 'drone-crop-monitoring',
        title: 'Giám sát Cây trồng bằng Drone',
        connection: 'Phân tích dữ liệu từ drone để đưa ra quyết định.',
      },
      {
        moduleId: 'agritech-precision-farming',
        lessonId: 'ai-pest-disease-detection',
        title: 'AI Phát hiện Sâu bệnh Cây trồng',
        connection: 'Sử dụng mô hình AI để phát hiện và xử lý sâu bệnh.',
      },
    ],
  },
  {
    id: 'sustainable-aquaculture-sim',
    title: 'Mô phỏng Nuôi trồng Thủy sản Bền vững',
    description:
      'Sustainable Aquaculture Sim là game quản lý fish/shrimp farms balancing profit, environmental sustainability, và marine ecosystem health - addressing critical challenge: feeding world population (seafood provides 20% global protein) while protecting oceans! Game simulate real aquaculture operations: build ponds/cages, stock fingerlings/post-larvae, manage water quality (oxygen, pH, salinity, temperature, ammonia/nitrite toxicity), feed schedules (optimize FCR - Feed Conversion Ratio), monitor growth rates, harvest timing, và market sales. Technologies integrated: (1) IoT sensors (24/7 water quality monitoring, auto-alerts), (2) AI (predict disease outbreaks, optimize feeding), (3) Drones (aerial pond inspection), (4) Blockchain (seafood traceability - combat mislabeling). Challenges: disease management (white spot virus shrimp, ich fish), algal blooms (oxygen depletion at night!), weather impacts (typhoons, temperature swings), antibiotic resistance issues, và market price fluctuations. Sustainability mechanics: prevent mangrove destruction (shrimp farms historically destroyed 35% mangroves!), treat wastewater before discharge, use biofloc systems (recycle waste as feed), integrate with seaweed farming (absorb excess nutrients), và achieve certifications (BAP, ASC standards). Game compare methods: intensive (high density, high input, high risk) vs extensive (low density, eco-friendly, lower yields). Learn species: salmon, tilapia, shrimp, catfish, oysters - each unique requirements. Economic: capital investment (ponds, aerators, equipment $$$), operational costs (feed 60% expenses!), ROI calculations, insurance. Social: job creation, food security contributions, community impacts. Phù hợp agribusiness students, marine biology enthusiasts, sustainability advocates, và aspiring aquaculture entrepreneurs. Blue economy career pathway!',
    category: ['simulation', 'environment'],
    difficulty: 'Trung bình',
    estimatedTime: '30-40 phút',
    skills: ['Blue Economy', 'Sustainable Aquaculture', 'IoT', 'Marine Biology'],
    moduleType: 'blue-economy',
    isInternal: true,
    points: 160,
    icon: '🐠',
    color: 'from-cyan-500 to-blue-500',
    faqs: [
      {
        question: 'Nuôi trồng thủy sản có bền vững không? Nghe nói hủy hoại môi trường?',
        answer:
          'Depends on practices! Unsustainable: mangrove destruction, pollution, disease spread to wild fish. Sustainable (game teaches): biofloc systems recycle waste, integrated multi-trophic aquaculture (seaweed absorbs nutrients), certifications (ASC, BAP), no antibiotics overuse. Done right, aquaculture less environmental impact than beef/pork farming! Game show both good/bad practices.',
      },
      {
        question: 'Tại sao aquaculture quan trọng cho food security?',
        answer:
          'Wild fish stocks depleted (90% overfished!). Aquaculture provides 50% seafood consumed globally, growing fastest food production sector. By 2030, need aquaculture to feed 10 billion people. Game teach: balance production với sustainability - future of protein!',
      },
      {
        question: 'Game có dạy về disease management và antibiotics không?',
        answer:
          'Yes! Critical issue: diseases can wipe out entire farm overnight. Game teach: (1) Biosecurity (prevent pathogen entry), (2) Water quality management (stress → disease), (3) Probiotics (beneficial bacteria), (4) Vaccines (salmon, tilapia), (5) Responsible antibiotic use (last resort, not routine). Antibiotic resistance major concern - game emphasize prevention over treatment!',
      },
      {
        question: 'IoT và AI làm thay đổi aquaculture như thế nào?',
        answer:
          'Revolution! Game simulate: (1) Smart sensors - 24/7 monitoring oxygen, pH, temperature → auto-adjust aerators, (2) AI predict disease outbreaks from behavior patterns, (3) Computer vision count fish, estimate biomass, (4) Automated feeders optimize feeding (reduce waste), (5) Blockchain trace seafood farm to table. Precision aquaculture = higher yields + lower environmental impact!',
      },
      {
        question: 'Career opportunities trong aquaculture?',
        answer:
          'Booming field: (1) Aquaculture manager/technician ($50K-80K), (2) Aquatic veterinarian (fish health!), (3) Aquaculture engineer (system design), (4) Sustainability consultant (certifications), (5) Aquatech entrepreneur (startups innovating feeds, equipment). Global industry $250B+, growing 5-6%/year. Vietnam major exporter (shrimp, catfish) - strong domestic opportunities!',
      },
    ],
    learningObjectives: [
      'Understand aquaculture production systems: pond, cage, recirculating aquaculture systems (RAS)',
      'Master water quality management và disease prevention strategies',
      'Apply IoT, AI, và precision aquaculture technologies',
      'Balance economic profitability với environmental sustainability và social responsibility',
      'Learn sustainable practices: biofloc, IMTA, certification standards (ASC, BAP)',
    ],
    relatedLessons: [
      {
        moduleId: 'blue-economy',
        lessonId: 'smart-aquaculture',
        title: 'Nuôi trồng Thủy sản Thông minh',
        connection: 'Áp dụng công nghệ IoT để giám sát và quản lý trang trại.',
      },
      {
        moduleId: 'blue-economy',
        lessonId: 'marine-ecosystem-conservation',
        title: 'Bảo tồn Hệ sinh thái Biển',
        connection: 'Thực hành các phương pháp nuôi trồng bền vững.',
      },
    ],
  },
  {
    id: 'semiconductor-design-puzzle',
    title: 'Câu đố Thiết kế Vi mạch',
    description:
      'Semiconductor Design Puzzle là game logic designing integrated circuits (ICs) - the "brains" powering every electronic device from smartphones to supercomputers! Game teach digital logic fundamentals: arrange logic gates (AND, OR, NOT, NAND, NOR, XOR) to implement Boolean functions, build combinational circuits (adders, multiplexers, decoders), sequential circuits (flip-flops, registers, counters), và eventually design simple processors! Start basic: single gates performing operations, progress to complex: ALU (Arithmetic Logic Unit), memory cells, và control units. Game visualize electron flow, voltage levels (high=1, low=0), propagation delays, power consumption. Puzzles challenge: (1) Gate minimization (fewest gates = cheaper chips!), (2) Timing optimization (faster circuits), (3) Power efficiency (mobile devices!), (4) Area minimization (more circuits per die). Learn semiconductor fabrication basics: silicon wafers, photolithography (printing circuits với UV light!), doping (n-type/p-type), transistor formation (MOSFETs - building blocks of gates). Game có HDL (Hardware Description Language) mode: write Verilog/VHDL code, synthesize to gates - real chip design workflow! Understand Moore Law (transistors double every 2 years - slowing now at 3nm!), challenges at nanoscale (quantum tunneling, heat dissipation), và future: 3D stacking, quantum computing. Real-world context: CPU design (Intel, AMD, Apple M chips), GPU (NVIDIA AI dominance), memory (DRAM, NAND flash), application-specific ICs (ASICs - Bitcoin miners, AI accelerators). Phù hợp engineering students (EE, CS), tech enthusiasts curious về how computers work at hardware level, và aspiring chip designers. Semiconductor industry huge: $600B market, critical for AI/5G/EVs!',
    category: ['puzzle', 'tech'],
    difficulty: 'Nâng cao',
    estimatedTime: '25-35 phút',
    skills: ['Semiconductor Technology', 'Logic Design', 'Electronics', 'Problem Solving'],
    moduleType: 'semiconductor-technology',
    isInternal: true,
    points: 170,
    icon: '🔧',
    color: 'from-gray-500 to-slate-600',
    faqs: [
      {
        question: 'Có cần biết electronics trước khi chơi game không?',
        answer:
          'No! Game teach from zero: starts with simple gates (AND=both inputs true → output true), gradually builds complexity. Tutorials explain concepts before puzzles. By end, you understand CPU fundamentals! Background in CS logic (if-else, boolean algebra) helpful but not required.',
      },
      {
        question: 'Semiconductor design khác gì với software programming?',
        answer:
          'Software: sequential execution (step 1 → 2 → 3). Hardware: parallel operations (millions transistors work simultaneously!), timing critical (nanoseconds matter!), physical constraints (heat, power, area). Game show these differences. Many software engineers transition to hardware - complementary skills!',
      },
      {
        question: 'Tại sao semiconductor industry quan trọng đến vậy?',
        answer:
          'Chips power EVERYTHING modern: phones, cars (EVs have 3000+ chips!), AI (GPUs train ChatGPT), 5G, IoT, healthcare devices. Supply chain disruptions (2021 chip shortage) crippled industries. Geopolitical tensions over Taiwan (produces 90% advanced chips). Game explain why semiconductors = modern oil!',
      },
      {
        question: 'Game có dạy về chip fabrication process không?',
        answer:
          'Yes! Simplified overview: (1) Silicon ingot → wafer slicing, (2) Photolithography (UV light + photomask = circuit patterns), (3) Etching (remove unwanted material), (4) Doping (add impurities create transistors), (5) Deposition (add layers), (6) Testing (many chips fail!), (7) Packaging. $20 billion fabs! Game visualization amazing.',
      },
      {
        question: 'Career paths trong semiconductor industry?',
        answer:
          'Hot jobs: (1) IC Design Engineer (design chips, Verilog/VHDL, $100K-160K), (2) Verification Engineer (test designs work), (3) Physical Design Engineer (layout circuits on silicon), (4) Process Engineer (fabrication), (5) Application Engineer (customer support). Companies: Intel, AMD, NVIDIA, Qualcomm, TSMC. Massive talent shortage - learning opportunity!',
      },
    ],
    learningObjectives: [
      'Master digital logic: Boolean algebra, truth tables, logic gates (AND, OR, NOT, NAND, NOR, XOR)',
      'Design combinational circuits (adders, multiplexers) và sequential circuits (flip-flops, registers)',
      'Understand semiconductor fabrication: transistors, Moore Law, nanoscale challenges',
      'Optimize circuit designs: minimize gates, reduce power, improve speed',
      'Learn HDL basics (Verilog/VHDL) và chip design workflow',
    ],
    relatedLessons: [
      {
        moduleId: 'semiconductor-technology',
        lessonId: 'semiconductor-fundamentals',
        title: 'Cơ bản về Công nghệ Bán dẫn',
        connection: 'Hiểu về vật liệu và quy trình sản xuất bán dẫn.',
      },
      {
        moduleId: 'semiconductor-technology',
        lessonId: 'microchip-design-fabrication',
        title: 'Thiết kế và Chế tạo Vi mạch',
        connection: 'Áp dụng các nguyên tắc thiết kế vi mạch.',
      },
    ],
  },
  {
    id: 'factory-automation-simulator-3d',
    title: 'Quản lý Nhà máy Thông minh',
    description:
      'Factory Automation Simulator: transform traditional factory into Industry 4.0 smart manufacturing! Automate production: deploy industrial robots (welding, assembly, painting), install IoT sensors (monitor temperature, vibration, throughput real-time), implement AI quality control (computer vision detects defects faster than humans), optimize workflows (reduce bottlenecks, minimize downtime). Learn Manufacturing 4.0 concepts: (1) Digital twins (virtual factory replica for testing changes without risk), (2) Predictive maintenance (AI predicts machine failures before breakdown - saves millions!), (3) Just-in-time manufacturing (minimize inventory holding costs), (4) Flexible manufacturing (quickly switch products), (5) Real-time data analytics dashboards. Challenges: initial investment costs (robots expensive!), worker retraining (reskill from manual to robot supervision), cybersecurity (connected factories vulnerable to hacks), integration complexity (legacy machines incompatible with IoT). Game simulates: production KPIs (OEE - Overall Equipment Effectiveness, cycle time, defect rates, energy consumption), cost-benefit analysis (automation payback period typically 2-5 years), labor impact (job displacement vs upskilling opportunities). Real-world examples: Tesla Gigafactory (high automation), Siemens Amberg (digital factory benchmark), Adidas Speedfactory (mass customization). Phù hợp operations managers, industrial engineers, manufacturing students, automation enthusiasts!',
    category: ['simulation', 'business'],
    difficulty: 'Nâng cao',
    estimatedTime: '40-50 phút',
    skills: ['Smart Manufacturing', 'Robotics', 'IoT', 'AI', 'Supply Chain'],
    moduleType: 'smart-manufacturing',
    isInternal: true,
    points: 200,
    icon: '🏭',
    color: 'from-indigo-500 to-purple-500',
    faqs: [
      {
        question: 'Automation có eliminate factory jobs không?',
        answer:
          'Nuanced answer! Game shows: (1) Yes: repetitive manual jobs automated (assembly line), (2) No: new jobs created (robot technicians, data analysts, AI trainers), (3) Transformation: workers upskill (from operators to supervisors). Historical pattern: technology shifts jobs, not eliminates work entirely. Reskilling crucial!',
      },
      {
        question: 'ROI của factory automation bao lâu?',
        answer:
          'Game calculates realistic payback: (1) Small robots ($50K-100K) = 1-3 years, (2) Full line automation ($500K-2M) = 3-7 years, (3) Depends: labor costs (high = faster ROI), production volume (scale helps), uptime (24/7 ops), quality improvements (less waste). Best ROI: dangerous, repetitive, high-precision tasks!',
      },
      {
        question: 'SMEs (small businesses) có afford automation không?',
        answer:
          'Increasingly yes! Game shows options: (1) Collaborative robots (cobots $20K-50K, safe near humans), (2) Robot-as-a-Service (rent instead of buy), (3) Modular automation (start small, expand), (4) Government grants (many countries subsidize Industry 4.0). Don need full Tesla Gigafactory to start!',
      },
      {
        question: 'Cybersecurity risks trong smart factories?',
        answer:
          'Real threat! Game demonstrates: (1) Ransomware (hackers lock production, demand payment - Honda, Norsk Hydro hit!), (2) IP theft (steal designs via network), (3) Sabotage (change parameters cause defects), (4) Supply chain attacks (compromise vendors). Solutions: network segmentation, OT security, regular audits, employee training!',
      },
      {
        question: 'Career paths trong smart manufacturing?',
        answer:
          'Growing field! Roles: (1) Robotics engineer ($70K-120K), (2) IoT solution architect ($90K-140K), (3) Manufacturing data scientist ($80K-130K), (4) Automation technician ($50K-85K), (5) Industry 4.0 consultant ($80K-150K). Skills: mechatronics, programming (PLC, Python), data analytics, systems integration. Future-proof!',
      },
    ],
    learningObjectives: [
      'Understand Industry 4.0 technologies: robotics, IoT, AI, digital twins in manufacturing',
      'Optimize production: identify bottlenecks, reduce downtime, improve OEE (Overall Equipment Effectiveness)',
      'Implement predictive maintenance: use AI/ML to forecast failures, minimize unplanned stops',
      'Analyze manufacturing economics: automation ROI, cost-benefit, productivity gains',
      'Address workforce transformation: upskilling, new roles, human-robot collaboration',
    ],
    relatedLessons: [
      {
        moduleId: 'smart-manufacturing',
        lessonId: 'smart-factory-fundamentals',
        title: 'Cơ bản về Nhà máy Thông minh',
        connection: 'Triển khai các công nghệ 4.0 trong nhà máy.',
      },
      {
        moduleId: 'smart-manufacturing',
        lessonId: 'robotics-automation-manufacturing',
        title: 'Robot và Tự động hóa trong Sản xuất',
        connection: 'Sử dụng robot để tự động hóa các quy trình.',
      },
    ],
  },
  {
    id: 'logistics-network-sim',
    title: 'Mô phỏng Mạng lưới Logistics',
    description:
      'Logistics Network Simulator: optimize global supply chain operations! Manage: warehouses (locations, inventory levels, costs), transportation (trucks, ships, planes, drones), routes (shortest path, multi-stop optimization), last-mile delivery (urban challenges). AI-powered features: (1) Route optimization (AI calculates fastest routes avoiding traffic, weather, road closures), (2) Demand forecasting (ML predicts which products needed where), (3) Inventory optimization (just-enough stock minimizes holding costs), (4) Dynamic pricing (surge pricing for rush deliveries). Learn logistics concepts: hub-and-spoke networks (centralized vs distributed), cross-docking (transfer without storage), cold chain (temperature-controlled for food/pharma), reverse logistics (returns, recycling). Real-world tech: IoT tracking (GPS, RFID for real-time visibility), autonomous vehicles (self-driving trucks, delivery robots), drones (Amazon Prime Air, Zipline medical deliveries), warehouse automation (Amazon robots). Challenges: traffic congestion (urban delivery time-consuming), driver shortage (trucking industry crisis), fuel costs volatility, customer expectations (same-day delivery now norm!). KPIs: on-time delivery rate, cost per delivery, vehicle utilization, carbon emissions. Case studies: Amazon logistics excellence, FedEx hub operations, Maersk shipping, DHL global network. Phù hợp supply chain professionals, logistics students, e-commerce entrepreneurs!',
    category: ['simulation', 'business'],
    difficulty: 'Trung bình',
    estimatedTime: '30-40 phút',
    skills: ['Transportation Technology', 'Logistics', 'AI', 'Supply Chain'],
    moduleType: 'transportation-technology',
    isInternal: true,
    points: 160,
    icon: '🚚',
    color: 'from-orange-500 to-amber-500',
    faqs: [
      {
        question: 'Autonomous vehicles có revolutionize logistics không?',
        answer:
          'Gradually yes! Game shows: (1) Long-haul trucking (self-driving handles highways, human takes city), (2) Warehouse robots (Amazon 750K+ robots already!), (3) Delivery drones (Zipline delivers blood in Rwanda), (4) BUT: regulations slow (legal liability?), technology limits (edge cases hard), infrastructure needs (charging stations). Timeline: 5-15 years for widespread adoption!',
      },
      {
        question: 'Last-mile delivery tại sao expensive nhất?',
        answer:
          'Economics! Game demonstrates: last mile = 50%+ total delivery cost because (1) Low density (one package per stop vs truckload), (2) Traffic (urban congestion), (3) Failed deliveries (nobody home = retry), (4) Time-consuming (driver walks to door). Solutions: pickup lockers (Amazon Locker), delivery windows, route optimization AI, micro-fulfillment centers closer to customers!',
      },
      {
        question: 'Làm sao balance speed vs cost vs sustainability?',
        answer:
          'Eternal logistics tradeoff! Game scenarios: (1) Air freight fast but expensive + high carbon, (2) Sea freight slow but cheap + lower emissions, (3) Truck flexible but fuel costs, (4) Rail efficient for bulk but fixed routes. Optimize by: product value (diamonds fly, coal ships), urgency (medical emergency vs routine), customer willingness to pay, carbon goals!',
      },
      {
        question: 'E-commerce growth có sustainable với current logistics không?',
        answer:
          'Challenges ahead! Game shows: (1) Delivery vehicle congestion (NYC 1.5M packages daily!), (2) Packaging waste (cardboard boxes everywhere), (3) Returns epidemic (fashion 30-40% return rate), (4) Driver burnout (Amazon delivery quotas). Solutions needed: consolidation (combine shipments), sustainable packaging, electric vehicles, circular economy (repair not replace)!',
      },
      {
        question: 'Career paths trong logistics technology?',
        answer:
          'Hot field! Roles: (1) Supply chain analyst ($60K-100K), (2) Logistics engineer ($65K-110K), (3) Route optimization specialist ($70K-120K), (4) Warehouse automation engineer ($75K-125K), (5) Last-mile solutions manager ($80K-130K). Skills: data analytics, optimization algorithms, IoT, automation. E-commerce boom driving demand!',
      },
    ],
    learningObjectives: [
      'Optimize logistics networks: hub-and-spoke, route planning, inventory positioning',
      'Apply AI/ML: demand forecasting, route optimization, predictive analytics',
      'Understand transportation modes: trucks, ships, planes, drones - cost/speed/emissions trade-offs',
      'Manage last-mile delivery: urban challenges, customer expectations, cost optimization',
      'Evaluate emerging tech: autonomous vehicles, drones, warehouse robots, IoT tracking',
    ],
    relatedLessons: [
      {
        moduleId: 'transportation-technology',
        lessonId: 'smart-logistics-ai',
        title: 'Logistics Thông minh và AI',
        connection: 'Sử dụng AI để tối ưu hóa lộ trình và quản lý kho.',
      },
      {
        moduleId: 'transportation-technology',
        lessonId: 'autonomous-vehicles-drones',
        title: 'Xe tự hành và Drone trong Vận tải',
        connection: 'Áp dụng các phương tiện tự hành trong logistics.',
      },
    ],
  },
  {
    id: 'interstellar-explorer-3d',
    title: 'Nhà thám hiểm Không gian 3D',
    description:
      'Interstellar Explorer 3D: venture beyond solar system to discover alien worlds! Navigate interstellar space: stars light-years apart (Proxima Centauri 4.24 ly, Alpha Centauri 4.37 ly), nebulae (stellar nurseries beautiful but navigation hazards), black holes (extreme gravity warps space-time - avoid event horizon!), asteroid fields, rogue planets. Learn propulsion tech: (1) Chemical rockets (current tech, too slow for interstellar - centuries to nearest star!), (2) Ion drives (continuous low thrust, years acceleration), (3) Nuclear pulse (Project Orion concept), (4) Fusion ramjet (Bussard design - scoop interstellar hydrogen), (5) Antimatter engines (theoretical, immense power), (6) Light sails (Breakthrough Starshot - lasers push sail to 20% speed of light!). Time dilation effects: at near-light speeds, time slows relative to Earth (twin paradox)! Discover exoplanets: Hot Jupiters (gas giants close to stars), Super-Earths (rocky planets larger than Earth), Ocean worlds (subsurface seas like Europa), Tidally locked planets (one side always faces star). Life search: habitable zones (not too hot, not too cold), biosignatures (oxygen, methane combinations suggest life), technosignatures (SETI searches for alien civilizations). Challenges: radiation (cosmic rays, solar flares without magnetosphere protection), micrometeorites (space debris at high velocity = bullets!), long-duration missions (decades to centuries), communication delays (messages take years), resource scarcity (manufacture/repair everything). Phù hợp astronomy enthusiasts, sci-fi lovers, aspiring astrobiologists!',
    category: ['3D', 'adventure'],
    difficulty: 'Nâng cao',
    estimatedTime: '45-60 phút',
    skills: ['Space Exploration', '3D Navigation', 'Astrophysics', 'Problem Solving'],
    moduleType: 'space-exploration',
    isInternal: true,
    points: 220,
    icon: '🚀',
    color: 'from-purple-600 to-indigo-600',
    faqs: [
      {
        question: 'Interstellar travel có thật sự possible không hay chỉ sci-fi?',
        answer:
          'Possible but incredibly difficult! Game shows challenges: (1) Distance (nearest star = 100K years with current rockets!), (2) Energy (relativistic speeds need enormous energy), (3) Time (human lifespan too short), (4) Resources (closed-loop life support decades/centuries). Concepts exist (Breakthrough Starshot probe 20 years to Alpha Centauri) but human interstellar travel = centuries away minimum!',
      },
      {
        question: 'Tại sao faster-than-light travel impossible?',
        answer:
          'Einstein relativity: nothing with mass can reach light speed (infinite energy needed!). Game explains: as approach light speed, mass increases, time slows, length contracts. Wormholes, warp drives (Alcubierre) = theoretical but require exotic matter (negative energy) that may not exist. Current physics says FTL impossible. Future discoveries might change this!',
      },
      {
        question: 'Aliens có probable không based on science?',
        answer:
          'Drake Equation estimates! Game factors: (1) Stars in galaxy (100-400 billion), (2) Planets per star (exoplanet discoveries suggest average 1+), (3) Habitable zone planets (estimates 20-40 billion in Milky Way!), (4) Life origin probability (?), (5) Intelligent life (?). Fermi Paradox: if aliens common, where are they? Possible answers: rare, self-destruct, zoo hypothesis, communication limits!',
      },
      {
        question: 'Generation ships có viable cho interstellar colonization không?',
        answer:
          'Concept: multi-generational crew (born, live, die on ship, descendants arrive destination). Game shows challenges: (1) Closed ecosystems (recycle everything perfectly for centuries), (2) Social stability (prevent conflicts, maintain mission focus), (3) Genetic diversity (avoid inbreeding - need 500+ people), (4) Technology maintenance, (5) Motivation (why continue dead ancestors mission?). Fascinating thought experiment!',
      },
      {
        question: 'Career paths trong space exploration?',
        answer:
          'Growing field! Roles: (1) Astrobiologist ($60K-110K, search for life), (2) Aerospace engineer (spacecraft design), (3) Mission controller (NASA, SpaceX), (4) Planetary scientist ($70K-120K), (5) Astrophysicist (research, academia $80K-150K+), (6) Astronaut (extremely competitive but possible!). Private space industry (SpaceX, Blue Origin, Rocket Lab) creating new opportunities. Dream big!',
      },
    ],
    learningObjectives: [
      'Understand interstellar distances: light-years, time scales, propulsion challenges',
      'Learn propulsion concepts: ion drives, fusion, antimatter, light sails - theoretical/practical',
      'Explore exoplanets: types, habitability, detection methods, biosignatures',
      'Apply relativity: time dilation, mass-energy, speed of light limitations',
      'Evaluate life search: Drake Equation, Fermi Paradox, SETI, astrobiology principles',
    ],
    relatedLessons: [
      {
        moduleId: 'space-exploration',
        lessonId: 'interstellar-travel-propulsion',
        title: 'Du hành Liên sao và Hệ thống Đẩy',
        connection: 'Áp dụng các nguyên lý vật lý để điều khiển tàu vũ trụ.',
      },
      {
        moduleId: 'space-exploration',
        lessonId: 'exoplanet-discovery-analysis',
        title: 'Khám phá và Phân tích Ngoại hành tinh',
        connection: 'Sử dụng các công cụ để khám phá và phân tích các hành tinh mới.',
      },
    ],
  },
  {
    id: 'psychology-puzzle-box',
    title: 'Hộp câu đố Tâm lý học',
    description:
      'Psychology Puzzle Box là game giải puzzles dựa trên psychological principles: cognitive biases (thinking errors), heuristics (mental shortcuts), motivation, memory, perception, decision-making. Mỗi puzzle demonstrate: (1) Confirmation bias, (2) Anchoring effect, (3) Loss aversion, (4) Cognitive load, (5) Priming, (6) Social proof. Interactive activities: predict human behavior, identify biases, design "nudges" (behavioral economics), analyze optical illusions, solve memory challenges. Famous experiments: Milgram obedience, Pavlov dogs, Kahneman & Tversky biases. Applications: Marketing (scarcity tactics), UX design (reduce cognitive load), Personal decisions (avoid biases với checklists), Negotiations, Education (spaced repetition). Advanced topics: personality theories (Big Five), developmental psychology, mental health basics. Game empowers self-awareness: recognize biases, improve decisions, relationships. Phù hợp psychology students, marketers, UX designers, educators, HR professionals!',
    category: ['puzzle', 'education'],
    difficulty: 'Trung bình',
    estimatedTime: '20-30 phút',
    skills: ['Psychology', 'Behavioral Science', 'Critical Thinking', 'Problem Solving'],
    moduleType: 'psychology-behavioral-science',
    isInternal: true,
    points: 130,
    icon: '🧠',
    color: 'from-pink-500 to-rose-500',
    faqs: [
      {
        question: 'Psychology chỉ là "common sense" đúng không?',
        answer:
          'No! Research repeatedly shows common sense wrong: (1) Opposites attract? FALSE - similarity predicts relationship success, (2) Venting anger helps? FALSE - increases aggression, (3) We use only 10% brain? MYTH - we use all of it. Psychology science-based, not intuition. Game expose myths!',
      },
      {
        question: 'Cognitive biases có thể "fix" được không?',
        answer:
          'Difficult to eliminate (hardwired!), but can mitigate: (1) Awareness (know your biases), (2) Slow thinking (System 2 vs System 1 - Kahneman), (3) Checklists (aviation, surgery use these!), (4) Diverse perspectives (challenge groupthink), (5) Pre-mortems (imagine failure, plan). Game teach strategies!',
      },
      {
        question: 'Game có dạy về mental health không?',
        answer:
          'Introductory level: recognize symptoms (depression, anxiety, ADHD), reduce stigma, encourage professional help-seeking. NOT diagnostic tool! Game explain: neurotransmitters (serotonin, dopamine), stress responses, coping mechanisms, therapy types (CBT, DBT). Mental health = health, not weakness!',
      },
      {
        question: 'Behavioral economics khác gì với traditional economics?',
        answer:
          'Traditional: humans rational (maximize utility). Behavioral: humans irrational (biases, emotions)! Examples: Why people do not save for retirement (present bias), why free shipping works better than discounted shipping, default effects on organ donation rates. Game show nudges for good!',
      },
      {
        question: 'Career opportunities với psychology knowledge?',
        answer:
          'Broad applications: (1) Clinical psychologist (therapy, $80K-100K), (2) UX researcher (understand users, tech companies), (3) Marketing/consumer insights (behavior prediction), (4) HR (organizational psychology), (5) Behavioral economist, (6) Data scientist (predict behavior from data), (7) Educator (learning science). Transferable skills!',
      },
    ],
    learningObjectives: [
      'Identify cognitive biases (confirmation, anchoring, availability) và their impacts on decisions',
      'Understand behavioral economics principles và "nudges" for behavior change',
      'Learn memory, perception, và cognitive load principles for daily applications',
      'Recognize psychological influences in marketing, social media, và persuasion',
      'Apply psychology to improve personal decisions, relationships, và self-awareness',
    ],
    relatedLessons: [
      {
        moduleId: 'psychology-behavioral-science',
        lessonId: 'cognitive-psychology-biases',
        title: 'Tâm lý học Nhận thức và Thiên kiến',
        connection: 'Nhận biết và vượt qua các thiên kiến nhận thức.',
      },
      {
        moduleId: 'psychology-behavioral-science',
        lessonId: 'behavioral-economics-nudging',
        title: 'Kinh tế học Hành vi và Cú hích',
        connection: 'Áp dụng các nguyên tắc kinh tế học hành vi để giải quyết vấn đề.',
      },
    ],
  },
  {
    id: 'data-detective',
    title: 'Thám tử Dữ liệu',
    description:
      'Data Detective là game investigative data analysis: solve mysteries bằng cách analyze datasets, uncover patterns, identify anomalies, connect dots across multiple data sources. Play as forensic data analyst investigating: fraud (credit card patterns, insurance claims), cybercrime (network logs, suspicious IPs), business intelligence (sales anomalies, customer churn), scientific research (outliers in experiments), journalism (leaked documents analysis). Game teach data cleaning (handle missing values, duplicates, errors), exploratory data analysis (summary statistics, distributions, correlations), SQL queries (filter, join, aggregate tables), statistical tests (significance, hypothesis testing), data visualization (spot trends visually). Tools simulated: Excel/Google Sheets, SQL databases, Python pandas, Tableau. Cases progress: beginner (find max/min, basic sorting) to advanced (multi-table joins, time-series anomalies, regression predictions). Learn detective thinking: ask right questions, form hypotheses, test with data, iterate. Real cases inspired: Enron emails analysis, Panama Papers leaks, COVID data forensics. Phù hợp data analysts, journalists, fraud investigators, business analysts, students learning data science!',
    category: ['puzzle', 'education'],
    difficulty: 'Trung bình',
    estimatedTime: '25-35 phút',
    skills: ['Data Analysis', 'Data Visualization', 'Critical Thinking', 'Problem Solving'],
    moduleType: 'data-science-analytics',
    isInternal: true,
    points: 140,
    icon: '📊',
    color: 'from-indigo-500 to-blue-500',
    faqs: [
      {
        question: 'Có cần coding skills (Python, SQL) không?',
        answer:
          'Game có 2 modes: (1) No-code (point-click interface giống Excel), (2) Code mode (write SQL queries, Python pandas). Beginners start no-code, gradually learn code. Game teach SQL basics: SELECT, WHERE, JOIN, GROUP BY - enough cho 80% analysis!',
      },
      {
        question: 'Data detective skills có practical applications không?',
        answer:
          'Extremely practical! (1) Business: identify fraud, optimize operations, (2) Journalism: investigate corruption from leaks, (3) Healthcare: detect billing fraud, (4) Cybersecurity: analyze attack patterns, (5) Marketing: find customer segments. Every data-driven field needs detective skills!',
      },
      {
        question: 'Làm sao learn to "ask right questions" với data?',
        answer:
          'Game teach framework: (1) Who (actors involved?), (2) What (metrics matter?), (3) When (time patterns?), (4) Where (geographic patterns?), (5) Why (correlations/causes?), (6) How much (quantify impact?). Practice với guided cases builds intuition!',
      },
      {
        question: 'Có dạy về data ethics và privacy không?',
        answer:
          'Yes! Game show: (1) Anonymization (remove PII), (2) Aggregation (report groups not individuals), (3) Consent (data usage permissions), (4) Bias (sampling issues, representativeness). Learn responsible data handling - crucial for trust!',
      },
      {
        question: 'Career paths cho data detectives?',
        answer:
          'Hot roles: (1) Fraud analyst (banks, insurance, $60K-90K), (2) Data journalist (investigative reporting), (3) Business intelligence analyst, (4) Cybersecurity analyst (threat hunting), (5) Forensic accountant. Demand high - data growing exponentially!',
      },
    ],
    learningObjectives: [
      'Master data analysis techniques: cleaning, exploration, statistical testing',
      'Learn SQL queries và database operations for data investigation',
      'Develop critical thinking: form hypotheses, test with data, draw conclusions',
      'Understand data visualization best practices for uncovering patterns',
      'Apply data ethics principles: privacy, anonymization, responsible reporting',
    ],
    relatedLessons: [
      {
        moduleId: 'data-science-analytics',
        lessonId: 'data-analysis-fundamentals',
        title: 'Cơ bản về Phân tích Dữ liệu',
        connection: 'Sử dụng các công cụ để làm sạch và phân tích dữ liệu.',
      },
      {
        moduleId: 'data-science-analytics',
        lessonId: 'data-visualization-storytelling',
        title: 'Trực quan hóa và Kể chuyện bằng Dữ liệu',
        connection: 'Trình bày kết quả phân tích một cách hiệu quả.',
      },
    ],
  },
  {
    id: 'ux-ui-design-challenge',
    title: 'Thử thách Thiết kế UX/UI',
    description:
      'UX/UI Design Challenge là game thiết kế user interfaces solving real design problems: e-commerce checkout (reduce cart abandonment), healthcare app (elderly-friendly), fintech dashboard (complex data simple), education platform (engagement), social app (safety features). Game teach user-centered design process: (1) Research (user interviews, surveys, personas, journey maps), (2) Ideate (sketches, brainstorming), (3) Wireframe (low-fidelity layouts), (4) Prototype (interactive mockups với Figma-style tools), (5) Test (usability testing, iterate). Learn UX principles: accessibility (WCAG standards - colorblind, screen readers), cognitive load reduction (Miller 7±2 items), visual hierarchy (F-pattern, Z-pattern eye tracking), consistency (design systems), feedback (loading states, error messages). Game evaluate designs: task completion rate, time-on-task, error rate, satisfaction scores. Common mistakes highlighted: hidden navigation, inconsistent buttons, poor contrast, no mobile optimization. Study famous examples: Airbnb redesign success, Google Material Design, Apple Human Interface Guidelines. Advanced: A/B testing (which button color converts better?), analytics interpretation, design systems creation. Phù hợp aspiring UX designers, developers learning frontend, product managers, entrepreneurs building apps!',
    category: ['puzzle', 'creative'],
    difficulty: 'Trung bình',
    estimatedTime: '25-35 phút',
    skills: ['UX/UI Design', 'User-Centered Design', 'Prototyping', 'Problem Solving'],
    moduleType: 'ux-ui-design-fundamentals',
    isInternal: true,
    points: 130,
    icon: '🎨',
    color: 'from-purple-500 to-pink-500',
    faqs: [
      {
        question: 'Có cần biết code (HTML/CSS) để làm UX/UI designer không?',
        answer:
          'Not required but helpful! Many designers use no-code tools: Figma, Adobe XD, Sketch. Code knowledge helps: (1) Communicate với developers, (2) Understand technical constraints, (3) Build interactive prototypes. Game focus design thinking, tools secondary!',
      },
      {
        question: 'UX và UI khác nhau như thế nào?',
        answer:
          'UX (User Experience) = how it works (flow, usability, problem-solving). UI (User Interface) = how it looks (colors, typography, visual design). Analogy: UX = car engine/controls, UI = car paint/interior. Both crucial! Game teach both: UX research + UI visual design.',
      },
      {
        question: 'Làm sao validate design decisions không chỉ dựa opinions?',
        answer:
          'Game teach data-driven design: (1) Usability testing (watch users struggle!), (2) Analytics (heatmaps, click tracking), (3) A/B testing (variant A vs B), (4) Surveys (satisfaction scores), (5) Accessibility testing (screen readers, keyboard navigation). Data > opinions!',
      },
      {
        question: 'Career transition từ graphic design sang UX/UI dễ không?',
        answer:
          'Common transition! Graphic designers have visual skills (color, typography, composition). Need add: (1) User research methods, (2) Interaction design (flows, states), (3) Prototyping tools, (4) Usability testing. Game bridges gap - teaches UX thinking to visual designers!',
      },
      {
        question: 'UX/UI designer salary và job prospects?',
        answer:
          'Strong demand! Salaries: (1) Junior UX designer $50K-70K, (2) Mid-level $80K-110K, (3) Senior/Lead $120K-160K, (4) Freelance $50-150/hour. Every app/website needs design. Remote-friendly. Growing field as companies realize good UX = competitive advantage!',
      },
    ],
    learningObjectives: [
      'Master user-centered design process: research, ideate, wireframe, prototype, test',
      'Apply UX principles: accessibility, cognitive load, visual hierarchy, consistency',
      'Learn prototyping tools và interactive mockup creation (Figma concepts)',
      'Conduct usability testing và iterate based on user feedback',
      'Understand design systems, A/B testing, và data-driven design decisions',
    ],
    relatedLessons: [
      {
        moduleId: 'ux-ui-design-fundamentals',
        lessonId: 'ux-research-user-personas',
        title: 'Nghiên cứu UX và Xây dựng Chân dung Người dùng',
        connection: 'Áp dụng các phương pháp nghiên cứu người dùng.',
      },
      {
        moduleId: 'ux-ui-design-fundamentals',
        lessonId: 'wireframing-prototyping-tools',
        title: 'Wireframing và Công cụ Prototyping',
        connection: 'Tạo wireframe và prototype cho ứng dụng.',
      },
    ],
  },
  {
    id: 'soft-skills-scenario',
    title: 'Tình huống Kỹ năng mềm',
    description:
      'Soft Skills Scenario là game practice workplace communication, teamwork, leadership qua realistic situations: difficult conversations (giving feedback, salary negotiation), conflict resolution (team disagreements), presentations (pitch ideas), networking (conferences), time management (prioritize tasks), emotional intelligence (read social cues). Branching narratives: your choices affect relationships, project outcomes, career progression. Game teach: active listening (paraphrase, ask clarifying questions), assertive communication (not aggressive/passive), empathy (perspective-taking), adaptability (handle change), growth mindset (learn from failures). Scenarios: entry-level (email etiquette, meeting participation) to leadership (motivate teams, strategic decisions, stakeholder management). Instant feedback: see how colleagues react, what worked/failed, better alternatives. Based on research: Dale Carnegie principles, crucial conversations framework, emotional intelligence (Goleman). Career applications: interviews (STAR method answers), promotions (executive presence), entrepreneurship (pitch investors, build teams). Phù hợp students entering workforce, professionals upskilling, managers, entrepreneurs!',
    category: ['strategy', 'education'],
    difficulty: 'Cơ bản',
    estimatedTime: '20-30 phút',
    skills: ['Communication', 'Teamwork', 'Leadership', 'Problem Solving'],
    moduleType: 'soft-skills',
    isInternal: true,
    points: 120,
    icon: '🤝',
    color: 'from-blue-500 to-cyan-500',
    faqs: [
      {
        question: 'Soft skills có thực sự quan trọng hơn technical skills không?',
        answer:
          'Both crucial! Technical gets you hired, soft skills get you promoted. Studies show: 85% job success from soft skills, 15% technical (Carnegie Foundation). AI can replace technical tasks, not human connection, leadership, creativity. Game shows why!',
      },
      {
        question: 'Có thể "learn" soft skills hay chỉ có người naturally talented?',
        answer:
          'Absolutely learnable! Like muscle training: practice → feedback → improve. Game provides safe practice environment (no real consequences!). Research proves: emotional intelligence, communication trainable. Growth mindset key!',
      },
      {
        question: 'Làm sao give negative feedback without hurting feelings?',
        answer:
          'Game teach frameworks: (1) SBI model (Situation-Behavior-Impact), (2) Feedback sandwich (positive-negative-positive), (3) Focus on behavior not person, (4) Ask questions (coaching approach), (5) Collaborative solutions. Practice scenarios build confidence!',
      },
      {
        question: 'Remote work có change soft skills needed không?',
        answer:
          'Yes! New priorities: (1) Written communication (clear emails/docs), (2) Video presence (camera on, engaging), (3) Asynchronous collaboration (respect timezones), (4) Proactive communication (over-communicate remotely), (5) Digital empathy. Game includes remote scenarios!',
      },
      {
        question: 'Soft skills có measure/prove được không (for resume)?',
        answer:
          'Tricky but possible: (1) Leadership (led X-person team, achieved Y result), (2) Communication (presented to 100+ audience), (3) Conflict resolution (mediated disputes, maintained team cohesion), (4) Teamwork (cross-functional projects). Use STAR stories (Situation-Task-Action-Result)!',
      },
    ],
    learningObjectives: [
      'Develop effective communication: active listening, assertiveness, clarity',
      'Master conflict resolution và difficult conversations using proven frameworks',
      'Build emotional intelligence: self-awareness, empathy, social skills',
      'Learn leadership skills: motivation, delegation, decision-making',
      'Practice professional scenarios: interviews, presentations, negotiations, networking',
    ],
    relatedLessons: [
      {
        moduleId: 'soft-skills',
        lessonId: 'effective-communication',
        title: 'Giao tiếp Hiệu quả',
        connection: 'Thực hành kỹ năng lắng nghe và trình bày.',
      },
      {
        moduleId: 'soft-skills',
        lessonId: 'teamwork-collaboration',
        title: 'Làm việc nhóm và Hợp tác',
        connection: 'Giải quyết xung đột và làm việc hiệu quả trong nhóm.',
      },
    ],
  },
  {
    id: 'future-scenario-planner',
    title: 'Hoạch định Tương lai',
    description:
      'Future Scenario Planner là game strategic foresight: analyze trends (AI, climate, demographics, geopolitics) to build plausible future scenarios (2030-2050) and plan organizational strategies. Used by governments (Singapore, UAE), corporations (Shell pioneered!), think tanks. Game teach: (1) Horizon scanning (identify weak signals), (2) STEEP analysis (Social, Technological, Economic, Environmental, Political trends), (3) Scenario matrix (2x2 high impact/uncertainty), (4) Narrative building (compelling future stories), (5) Backcasting (work backwards from future to present actions). Create 4 scenarios: optimistic (best case), pessimistic (worst case), transformational (disruptive change), baseline (continuity). Applications: climate adaptation planning, technology disruption response, career planning (future-proof skills), business strategy (pivot before crisis). Case studies: COVID-19 scenarios (who prepared?), energy transition scenarios, AI regulation futures. Advanced: Monte Carlo simulations, Delphi method (expert consensus), cross-impact analysis. Develop anti-fragile thinking: thrive in uncertainty! Phù hợp strategists, policymakers, entrepreneurs, students planning careers!',
    category: ['strategy', 'business'],
    difficulty: 'Nâng cao',
    estimatedTime: '35-45 phút',
    skills: ['Future Thinking', 'Scenario Planning', 'Strategic Foresight', 'Risk Management'],
    moduleType: 'future-thinking-scenario-planning',
    isInternal: true,
    points: 180,
    icon: '🔮',
    color: 'from-purple-600 to-indigo-600',
    faqs: [
      {
        question: 'Làm sao "predict" future khi không ai biết chuyện gì xảy ra?',
        answer:
          'Not prediction - preparation! Scenario planning creates MULTIPLE plausible futures (not one forecast). Goal: identify robust strategies working across scenarios + early warning signals. Shell used scenarios to prepare for oil shocks - survived when competitors collapsed!',
      },
      {
        question: 'Scenarios có practical value hay chỉ là theoretical exercise?',
        answer:
          'Extremely practical! Benefits: (1) Challenge assumptions (mental models), (2) Spot opportunities/threats early, (3) Build organizational agility, (4) Align stakeholders (shared vision), (5) Reduce surprise (rehearse responses). Singapore credits scenario planning for development success!',
      },
      {
        question: 'Tôi nên plan cho bao nhiêu years ahead?',
        answer:
          'Depends on context: (1) Personal career: 3-5 years (skills changes), (2) Business strategy: 5-10 years (market shifts), (3) Infrastructure: 20-30 years (long build times), (4) Climate: 30-100 years (planetary timescales). Game practice different horizons!',
      },
      {
        question: 'Black swan events (COVID, 9/11) có thể anticipate được không?',
        answer:
          'Specific events no, but categories yes! Scenario planning explores: pandemics (not COVID specifically but health crises), terrorism (not 9/11 but security threats), financial crashes. Prepare for types of risk, not exact manifestations. Build resilience!',
      },
      {
        question: 'Career opportunities trong futures/foresight?',
        answer:
          'Growing field: (1) Strategic foresight consultant (corporations, governments), (2) Futurist/trend analyst, (3) Innovation strategist, (4) Risk manager (scenarios for planning), (5) Think tank researcher. Pay $80K-150K+. Demand rising - uncertainty increasing!',
      },
    ],
    learningObjectives: [
      'Master scenario planning methodology: horizon scanning, STEEP analysis, scenario matrix',
      'Identify trends và weak signals shaping future possibilities',
      'Build plausible future narratives và test strategies against scenarios',
      'Develop strategic foresight: think long-term, challenge assumptions, embrace uncertainty',
      'Apply backcasting: work backwards from desired future to present actions',
    ],
    relatedLessons: [
      {
        moduleId: 'future-thinking-scenario-planning',
        lessonId: 'introduction-to-futurology',
        title: 'Giới thiệu về Tương lai học',
        connection: 'Hiểu các phương pháp nghiên cứu tương lai.',
      },
      {
        moduleId: 'future-thinking-scenario-planning',
        lessonId: 'scenario-planning-wargaming',
        title: 'Hoạch định Kịch bản và "War Gaming"',
        connection: 'Xây dựng và phân tích các kịch bản tương lai.',
      },
    ],
  },
  {
    id: 'digital-citizen-dilemma',
    title: 'Tình huống Công dân số',
    description:
      'Digital Citizen Dilemma là game navigate ethical challenges của digital age: deepfakes (detect fake videos), misinformation (fact-check viral posts), privacy trade-offs (convenience vs data sharing), AI bias (facial recognition errors), online harassment (cyberbullying responses), digital addiction (social media algorithms), surveillance (government vs freedom). Scenarios force tough choices: share personal data for pandemic tracking? Report friend spreading fake news? Use AI hiring tool with bias? Each decision shows consequences: individual, societal, long-term impacts. Game teach digital literacy: (1) Verify sources (lateral reading, check domains), (2) Understand algorithms (filter bubbles, echo chambers), (3) Protect privacy (VPNs, encrypted messaging, data rights), (4) Recognize manipulation (dark patterns, A/B testing, engagement hacking), (5) Practice digital wellbeing (screen time, mindful consumption). Based on real cases: Cambridge Analytica, TikTok data concerns, deepfake politics, cancel culture. Learn frameworks: UNESCO digital citizenship, Common Sense Media guidelines. Phù hợp teens entering social media, parents, educators, policymakers, everyone online!',
    category: ['strategy', 'education'],
    difficulty: 'Trung bình',
    estimatedTime: '25-35 phút',
    skills: ['Digital Citizenship', 'AI Ethics', 'Media Literacy', 'Critical Thinking'],
    moduleType: 'digital-citizenship-ai-ethics',
    isInternal: true,
    points: 140,
    icon: '🛡️',
    color: 'from-teal-500 to-cyan-600',
    faqs: [
      {
        question: 'Làm sao phân biệt real news vs fake news nhanh?',
        answer:
          'Game teach checklist: (1) Check source (reputable media? unknown blog?), (2) Author credentials (expert? anonymous?), (3) Date (old story recycled?), (4) Evidence (cited sources? just claims?), (5) Bias (emotional language? clickbait?), (6) Cross-check (other outlets reporting?). Use fact-checkers: Snopes, PolitiFact!',
      },
      {
        question: 'Social media algorithms có manipulate users như thế nào?',
        answer:
          'Game reveal tricks: (1) Infinite scroll (no natural stop), (2) Notifications (intermittent rewards = addiction), (3) Autoplay videos, (4) Recommended content (rabbit holes), (5) Likes/hearts (dopamine hits). Goal: maximize engagement (time on platform) for ad revenue. Understanding = resistance!',
      },
      {
        question: 'Privacy đã "dead" trong digital age chưa?',
        answer:
          'Not dead but threatened! Game teach defense: (1) Use privacy-focused tools (Signal, DuckDuckGo, Brave), (2) Read privacy policies (TL;DR tools!), (3) Limit data sharing, (4) Understand rights (GDPR in EU, CCPA in California), (5) Advocate for regulation. Privacy = power - worth fighting for!',
      },
      {
        question: 'Deepfakes có dangerous đến mức nào?',
        answer:
          'Very! Risks: (1) Political manipulation (fake politician speeches), (2) Fraud (fake CEO voice = wire transfer scam), (3) Harassment (fake intimate videos), (4) Erode trust (nothing believable!). Detection improving but arms race. Game teach: skepticism, verify before sharing, demand authentication!',
      },
      {
        question: 'Tôi có thể làm gì as individual digital citizen?',
        answer:
          'Lots! (1) Model good behavior (verify before sharing), (2) Support quality journalism (subscriptions), (3) Teach others (especially elderly, kids), (4) Report harmful content, (5) Advocate for regulation, (6) Use privacy tools, (7) Practice mindful consumption. Collective action works!',
      },
    ],
    learningObjectives: [
      'Develop media literacy: fact-check, identify misinformation, evaluate sources critically',
      'Understand digital privacy: protect personal data, know rights (GDPR, CCPA)',
      'Recognize algorithmic manipulation: filter bubbles, engagement hacking, dark patterns',
      'Navigate AI ethics dilemmas: bias, surveillance, deepfakes, automation impacts',
      'Practice responsible digital citizenship: verify, report, protect, advocate',
    ],
    relatedLessons: [
      {
        moduleId: 'digital-citizenship-ai-ethics',
        lessonId: 'digital-identity-footprint',
        title: 'Danh tính và Dấu chân số',
        connection: 'Quản lý danh tính và thông tin cá nhân trên mạng.',
      },
      {
        moduleId: 'digital-citizenship-ai-ethics',
        lessonId: 'ai-ethics-responsible-use',
        title: 'Đạo đức AI và Sử dụng có Trách nhiệm',
        connection: 'Phân tích các vấn đề đạo đức của AI.',
      },
    ],
  },
  {
    id: 'cross-cultural-negotiation',
    title: 'Đàm phán Đa văn hóa',
    description:
      'Cross-Cultural Negotiation là game practice negotiating across cultures: business deals (China guanxi, Arab hospitality, German directness), diplomatic negotiations, international partnerships, expat management. Game teach cultural dimensions: (1) Hofstede (individualism vs collectivism, power distance, uncertainty avoidance), (2) Hall (high-context vs low-context communication), (3) Lewis Model (linear-active, multi-active, reactive cultures). Scenarios show cultural differences: eye contact (confident in US, disrespectful in Japan), silence (awkward in US, thoughtful in Finland), gifts (polite in Asia, bribery concerns in West), punctuality (strict in Switzerland, flexible in Latin America), hierarchy (flat in Scandinavia, hierarchical in India). Learn negotiation styles: competitive (win-lose), collaborative (win-win), accommodating, avoiding, compromising. Practice active listening, patience, asking questions (not assuming). Mistakes highlighted: cultural stereotypes, ethnocentrism, insensitivity. Build cultural intelligence (CQ): knowledge + mindfulness + adaptability. Applications: global business, diplomacy, development work, tourism, education. Phù hợp international business professionals, diplomats, expats, multicultural teams, travelers!',
    category: ['strategy', 'business'],
    difficulty: 'Trung bình',
    estimatedTime: '30-40 phút',
    skills: ['Cross-Cultural Communication', 'Negotiation', 'Cultural Intelligence', 'Problem Solving'],
    moduleType: 'cross-cultural-intelligence',
    isInternal: true,
    points: 150,
    icon: '🌍',
    color: 'from-purple-500 to-pink-500',
    faqs: [
      {
        question: 'Học về cultures có dẫn đến stereotyping không?',
        answer:
          'Risk exists! Game emphasizes: (1) Cultural dimensions = tendencies not absolutes (variation within cultures huge!), (2) Individuals differ, (3) Use knowledge as starting point, adjust based on person, (4) Ask questions rather than assume, (5) Avoid generalizations. Cultural awareness ≠ stereotyping when done right!',
      },
      {
        question: 'Tại sao cultural intelligence quan trọng trong business?',
        answer:
          'Money talks! Failed negotiations cost millions (Disney Paris cultural mistakes = losses), successful partnerships create value (Renault-Nissan despite French-Japanese differences). Multicultural teams more innovative IF managed well. Global economy demands CQ. Game shows ROI of cultural competence!',
      },
      {
        question: 'Làm sao prepare cho negotiation với unfamiliar culture?',
        answer:
          'Game teach prep: (1) Research cultural dimensions (Hofstede data), (2) Study business etiquette (gifts, greetings, dress), (3) Learn key phrases (respect!), (4) Identify local partners/advisors, (5) Plan flexibility (adapt strategies), (6) Practice patience. Preparation ≠ mastery but shows respect!',
      },
      {
        question: 'Virtual negotiations có change cultural dynamics không?',
        answer:
          'Yes! New considerations: (1) Technology comfort (varies by country), (2) Time zones (who accommodates?), (3) Lost non-verbal cues (body language), (4) Home backgrounds visible (privacy cultures), (5) Language barriers amplified. Game includes virtual scenarios - growing need!',
      },
      {
        question: 'Career benefits của cultural intelligence?',
        answer:
          'Huge! High CQ individuals: (1) Get international assignments (premiums 15-30% salary), (2) Lead multicultural teams, (3) Close global deals, (4) Adapt to expat life successfully, (5) Access diverse networks. Competitive advantage in globalized economy. Measurable skill (CQ assessments exist)!',
      },
    ],
    learningObjectives: [
      'Understand cultural dimensions frameworks: Hofstede, Hall, Lewis Model',
      'Recognize cultural differences in communication, negotiation, business etiquette',
      'Develop cultural intelligence (CQ): knowledge, mindfulness, behavioral flexibility',
      'Master cross-cultural negotiation strategies: win-win, patience, active listening',
      'Avoid cultural mistakes: stereotyping, ethnocentrism, insensitive behaviors',
    ],
    relatedLessons: [
      {
        moduleId: 'cross-cultural-intelligence',
        lessonId: 'cultural-dimensions-frameworks',
        title: 'Các Khung lý thuyết về Chiều văn hóa',
        connection: 'Hiểu các mô hình văn hóa khác nhau.',
      },
      {
        moduleId: 'cross-cultural-intelligence',
        lessonId: 'cross-cultural-communication-strategies',
        title: 'Chiến lược Giao tiếp Đa văn hóa',
        connection: 'Áp dụng các chiến lược giao tiếp hiệu quả.',
      },
    ],
  },
  {
    id: 'personal-energy-manager',
    title: 'Quản lý Năng lượng Cá nhân',
    description:
      'Personal Energy Manager game teach holistic performance optimization: không chỉ time management mà energy management! Game dựa trên research: physical energy (body), emotional energy (feelings), mental energy (focus), spiritual energy (purpose). Scenarios mô phỏng typical day: morning sluggishness, afternoon slump, evening exhaustion, weekend burnout. Bạn track energy levels, identify drains và renewers, optimize routines. Physical energy: sleep quality (7-9h, consistent schedule, sleep hygiene), nutrition (complex carbs for sustained energy, avoid sugar crashes, hydration 8 cups/day, meal timing), exercise (cardio boosts energy, strength builds capacity, even 10-min walks help!). Mental energy: focus blocks (Pomodoro 25-min, deep work morning when alert), minimize distractions (notifications off, single-tasking), strategic breaks (nature walks restore attention, switching tasks counts as break). Emotional energy: positive relationships (energizing vs draining people), gratitude practice, set boundaries (say no to energy vampires), process emotions (journaling, therapy). Spiritual energy: purpose clarity (why matters?), values alignment, meaningful work. Game show trade-offs: late-night Netflix fun NOW but zombie tomorrow. Learn circadian rhythms: morning peak for analytical work, afternoon dip for routine tasks, evening for creative thinking. Teaches recovery rituals: after work (exercise, hobbies), weekends (recharge not catch up on work!), vacations (truly disconnect). Applications: students (study stamina), professionals (prevent burnout), athletes (peak performance), parents (juggling demands). Game phù hợp anyone feeling tired despite sleeping, wanting sustainable high performance!',
    category: ['simulation', 'education'],
    difficulty: 'Cơ bản',
    estimatedTime: '20-30 phút',
    skills: ['Personal Performance', 'Energy Management', 'Mindfulness', 'Productivity'],
    moduleType: 'personal-energy-performance-management',
    isInternal: true,
    points: 120,
    icon: '⚡',
    color: 'from-yellow-500 to-orange-500',
    faqs: [
      {
        question: 'Energy management có thật sự khác time management không?',
        answer:
          'Huge difference! Time management = schedule tasks efficiently. Energy management = match task demands to your energy levels. Example: difficult negotiations morning (high energy), emails afternoon (low focus OK), creative brainstorming evening (relaxed mind). Same hours worked but better results!',
      },
      {
        question: 'Tôi không thể control work schedule - làm sao áp dụng được?',
        answer:
          'Still options: (1) Negotiate flexible hours if possible, (2) Optimize what you CAN control (sleep, diet, breaks), (3) Strategic caffeine use (not all day!), (4) Micro-breaks (2-min breathing), (5) Weekend recovery rituals. Even small optimizations compound!',
      },
      {
        question: 'Physical exercise có thật sự boost mental energy không?',
        answer:
          'Science says YES! Exercise increases: (1) Blood flow to brain (oxygen, nutrients), (2) BDNF (brain growth protein), (3) Neurotransmitters (serotonin, dopamine), (4) Mitochondria (cellular energy). Even 10-min walk improves mood and focus for 2 hours. Best ROI investment!',
      },
      {
        question: 'Làm sao biết activity nào drains vs renews energy?',
        answer:
          'Game teach tracking: After each activity, rate energy (-3 to +3). Patterns emerge: Social events might drain introverts but renew extroverts. Admin work drains everyone (batch it!). Nature walks universally renewing. Your patterns unique - experiment and track!',
      },
      {
        question: 'Energy management có scientific evidence không?',
        answer:
          'Lots! Research: (1) Baumeister ego depletion (willpower finite resource), (2) Circadian rhythms documented (Nobel Prize 2017!), (3) Exercise-cognition link proven, (4) Sleep deprivation = drunk-level impairment, (5) Corporate Energy Project (Loehr & Schwartz) improved performance 30%. Solid science!',
      },
    ],
    learningObjectives: [
      'Understand four energy dimensions: physical, mental, emotional, spiritual',
      'Optimize physical energy: sleep hygiene, nutrition timing, strategic exercise',
      'Manage mental energy: focus blocks, minimize distractions, strategic breaks',
      'Cultivate emotional energy: positive relationships, boundaries, emotional processing',
      'Align with spiritual energy: clarify purpose, values-driven decisions, meaningful work',
    ],
    relatedLessons: [
      {
        moduleId: 'personal-energy-performance-management',
        lessonId: 'physical-energy-optimization',
        title: 'Tối ưu hóa Năng lượng Thể chất',
        connection: 'Quản lý giấc ngủ, dinh dưỡng và tập luyện.',
      },
      {
        moduleId: 'personal-energy-performance-management',
        lessonId: 'mental-emotional-energy',
        title: 'Năng lượng Tinh thần và Cảm xúc',
        connection: 'Thực hành mindfulness và quản lý cảm xúc.',
      },
    ],
  },
  {
    id: 'event-planner-pro',
    title: 'Nhà tổ chức Sự kiện Chuyên nghiệp',
    description:
      'Nhà tổ chức Sự kiện Chuyên nghiệp là game mô phỏng event management toàn diện, đưa bạn vào vai event planner điều phối các sự kiện từ small-scale (workshops 50 người, birthday parties) đến mega-events (conferences 5,000 attendees, music festivals, corporate galas), quản lý mọi khía cạnh phức tạp: budgeting chi tiết, vendor negotiations, venue selection, marketing campaigns, risk management, và on-site execution - giống như làm việc tại các công ty event lớn hoặc run agency riêng.\n\nGame bắt đầu với event brief: client muốn gì (product launch, wedding, tech conference), budget bao nhiêu, timeline ra sao, và success metrics. Bạn develop event concept với theme, visual identity, và attendee journey map. Phase planning critical: pre-event (venue booking 6-12 tháng trước, speaker confirmations, sponsorship packages), production week (setup, rehearsals, troubleshooting), event day (minute-by-minute rundowns, crisis management), và post-event (debrief, ROI reports).\n\nBudgeting là challenge lớn: allocate chi phí cho venue (30-40% budget), F&B (20-25%), A/V equipment và production (15-20%), marketing (10-15%), staffing, insurance, contingency fund 10%. Bạn negotiate với vendors để best prices, manage purchase orders, track invoices, handle last-minute cost overruns. Game dạy profit margin calculations nếu bạn là agency (15-20% industry standard).\n\nMarketing mix: create event website với registration system, email campaigns với segmented messaging, social media teasers và influencer partnerships, paid ads targeting right demographics, và partnerships with media sponsors. Bạn track registrations real-time, send reminders, handle waitlists. Risk management scenarios: bad weather backup plans, speaker cancellations, technical failures, security issues - bạn prepare contingency plans.\n\nGame phù hợp cho học sinh yêu organizing, sinh viên ngành Hospitality/Marketing/Communications, và aspiring entrepreneurs muốn start event planning business - ngành flexible, creative, và potentially lucrative ($50K-150K/year cho experienced planners).',
    category: ['simulation', 'business'],
    difficulty: 'Trung bình',
    estimatedTime: '30-40 phút',
    skills: ['Event Management', 'Project Management', 'Budgeting', 'Risk Management'],
    moduleType: 'event-management',
    isInternal: true,
    points: 140,
    icon: '🎉',
    color: 'from-pink-500 to-rose-500',
    faqs: [
      {
        question: 'Làm sao bắt đầu career event planning không có experience?',
        answer:
          'Game suggest path: (1) Volunteer cho events (churches, schools, nonprofits) để build portfolio, (2) Internship tại event agencies, (3) Start small - plan events cho friends/family (birthdays, baby showers), (4) Get certified (CMP - Certified Meeting Professional), (5) Build network với vendors. First paid gig thường $500-2,000.',
      },
      {
        question: 'Cần budget bao nhiêu để tổ chức một event tốt?',
        answer:
          'Game mô phỏng realistic budgets: Workshop (50 ppl) $2,000-5,000, Wedding (150 ppl) $15,000-50,000, Corporate conference (500 ppl) $100,000-500,000, Music festival (5,000 ppl) $500K-2M. Per-person cost: $40-100 (basic), $100-300 (mid-tier), $300+ (luxury).',
      },
      {
        question: 'Rủi ro lớn nhất khi tổ chức events là gì?',
        answer:
          'Game dạy top risks: (1) Low attendance (marketing fail or weather), (2) Vendor no-shows (caterer, AV team), (3) Technical failures (sound, slides), (4) Budget overruns (hidden costs), (5) Safety issues (injuries, emergencies). Always có Plan B và insurance!',
      },
      {
        question: 'Event planner kiếm được bao nhiêu?',
        answer:
          'Game show income models: Employee ($40K-80K/year salary + bonuses), Freelancer ($50-150/hour = $50K-150K/year), Agency owner (15-20% profit margin trên events = $100K-500K/year nếu scale). Wedding planners: $2,000-10,000 per wedding (10-20% of wedding budget).',
      },
      {
        question: 'Công nghệ nào event planners cần biết?',
        answer:
          'Game giới thiệu essential tools: (1) Event management software (Cvent, Eventbrite), (2) Project management (Asana, Monday.com), (3) Budget tracking (Excel, QuickBooks), (4) Design tools (Canva cho marketing materials), (5) CRM (HubSpot cho client management). Most are user-friendly!',
      },
    ],
    learningObjectives: [
      'Nắm vững full event lifecycle: concept, planning, execution, post-event evaluation',
      'Phát triển kỹ năng budgeting chi tiết và vendor negotiation',
      'Học cách marketing events và drive attendee registrations',
      'Hiểu risk management và crisis response cho live events',
      'Làm quen với event tech platforms và project management tools',
    ],
    relatedLessons: [
      {
        moduleId: 'event-management',
        lessonId: 'event-planning-lifecycle',
        title: 'Vòng đời Kế hoạch Sự kiện',
        connection: 'Lập kế hoạch chi tiết cho một sự kiện.',
      },
      {
        moduleId: 'event-management',
        lessonId: 'event-marketing-promotion',
        title: 'Marketing và Quảng bá Sự kiện',
        connection: 'Thực hiện các chiến dịch marketing cho sự kiện.',
      },
    ],
  },
  {
    id: 'gov-tech-service-designer',
    title: 'Thiết kế Dịch vụ Công nghệ Chính phủ',
    description:
      'GovTech Service Designer game mô phỏng: design citizen-centric digital government services! Play as service designer in digital government agency, redesign clunky processes: business license applications (weeks → minutes!), public housing applications, tax filing, healthcare appointments, police reports, public feedback systems. Challenge: government services MUST serve everyone (elderly not tech-savvy, disabled, non-native speakers, rural low-bandwidth). Learn service design thinking: (1) Research (user interviews, journey mapping with actual citizens), (2) Ideate (co-design workshops with civil servants AND citizens), (3) Prototype (clickable mockups, paper prototypes), (4) Test (usability testing, accessibility checks), (5) Iterate (continuous improvement). Design principles: radical simplicity (jargon-free language, one-question-per-page), mobile-first (60% access via phones), omnichannel (online + physical counters for digital divide), proactive (government reminds YOU, not vice versa), transparent (status tracking, estimated wait times). Accessibility requirements: WCAG 2.1 AA standard (screen reader compatible, keyboard navigation, color contrast, alt text). Security critical: data protection, privacy by design, authentication. Real-world inspirations: Estonia (e-Residency, digital ID), Singapore (Singpass, LifeSG app), UK Gov.uk (design system), Taiwan (g0v civic tech). Game show constraints: legacy systems integration, procurement bureaucracy, stakeholder resistance, budget limits. Phù hợp aspiring GovTech professionals, UX designers, public policy students, civic tech enthusiasts!',
    category: ['simulation', 'education'],
    difficulty: 'Trung bình',
    estimatedTime: '30-40 phút',
    skills: ['Government Technology', 'Service Design', 'UX/UI', 'Public Policy'],
    moduleType: 'government-technology',
    isInternal: true,
    points: 150,
    icon: '🏛️',
    color: 'from-indigo-500 to-blue-500',
    faqs: [
      {
        question: 'Tại sao government services thường tệ hơn private sector apps?',
        answer:
          'Multiple reasons: (1) Legacy systems (decades old!), (2) Procurement slow (RFP process years), (3) Risk-averse culture (mistakes = headlines), (4) Must serve EVERYONE (not just young tech-savvy), (5) Budget constraints. BUT improving! Singapore, Estonia show government CAN do great digital services!',
      },
      {
        question: 'Career trong GovTech có ổn định và pay well không?',
        answer:
          'Growing field! Roles: Service designer ($70K-110K), UX researcher ($65K-100K), Product manager ($90K-140K), Policy advisor ($60K-95K). Job security excellent (government stable), meaningful work (impact millions), BUT slower pace than startups, lower pay than Big Tech. Trade-offs!',
      },
      {
        question: 'Làm sao balance accessibility với modern design?',
        answer:
          'Not trade-off but synergy! Game show: (1) Clean simple design helps EVERYONE (not just disabled), (2) Clear language benefits native speakers too, (3) Mobile-first responsive = works everywhere, (4) Keyboard navigation faster for power users. Good accessibility = good UX!',
      },
      {
        question: 'GovTech có đủ innovative hay boring?',
        answer:
          'Can be very innovative! Examples: (1) Estonia blockchain voting, (2) Singapore GovTech APIs (developers build on top), (3) Taiwan civic tech (g0v community), (4) UK Gov.uk design system (open source, adopted globally). Constraints spark creativity. Plus: impact at scale - millions of users!',
      },
      {
        question: 'Cần technical skills gì để làm GovTech?',
        answer:
          'Depends on role: Designers (Figma, prototyping, user research), Product Managers (agile, stakeholder management, data analysis), Developers (APIs, security, cloud infrastructure). BUT domain knowledge critical: understand government processes, policy constraints, public sector culture. Bootcamps + internships = pathway in!',
      },
    ],
    learningObjectives: [
      'Apply service design thinking: research, ideate, prototype, test, iterate',
      'Design for accessibility: WCAG standards, inclusive design, digital divide solutions',
      'Understand citizen-centric principles: simplicity, proactive, omnichannel, transparent',
      'Navigate government constraints: legacy systems, procurement, stakeholder management',
      'Learn from global best practices: Estonia e-government, Singapore Singpass, UK Gov.uk',
    ],
    relatedLessons: [
      {
        moduleId: 'government-technology',
        lessonId: 'digital-transformation-public-sector',
        title: 'Chuyển đổi số trong Khu vực công',
        connection: 'Hiểu về quá trình chuyển đổi số của chính phủ.',
      },
      {
        moduleId: 'government-technology',
        lessonId: 'citizen-centric-service-design',
        title: 'Thiết kế Dịch vụ lấy Người dân làm Trung tâm',
        connection: 'Áp dụng các nguyên tắc thiết kế dịch vụ công.',
      },
    ],
  },
  {
    id: 'international-business-sim',
    title: 'Mô phỏng Kinh doanh Quốc tế',
    description:
      'International Business Simulation: run multinational corporation across multiple countries! Start with successful domestic company, decide: expand to which markets (China huge but complex, India growing middle class, Africa untapped potential, Europe mature but stable, Latin America high growth high risk)? Choose entry strategy: (1) Exporting (low risk, low control, tariffs?), (2) Licensing (royalties, lose IP control), (3) Joint venture (local partner knowledge, conflict risk), (4) Wholly-owned subsidiary (full control, high investment). Game mô phỏng challenges: Cultural (hiring practices, management styles, negotiation approaches vary by country), Political (regulations change, corruption risks, trade disputes, sanctions), Economic (currency fluctuations destroy margins!, inflation, payment delays). Learn PESTEL analysis: Political (stability, trade policies), Economic (GDP growth, exchange rates), Social (demographics, consumer behavior), Technological (infrastructure, digital adoption), Environmental (regulations, sustainability demands), Legal (contract enforcement, IP protection). Supply chain complexity: source from Vietnam (low cost), manufacture in Mexico (near US market), R&D in Israel (innovation), sales in Europe (regulations!). Manage global teams: time zones, communication styles, motivation differs (US bonus-driven, Scandinavia work-life balance). Crisis scenarios: pandemic disrupts supply chain, trade war tariffs, local competitor government-backed, bribery demands. Real cases: IKEA adapts products per market, Netflix content localization, Starbucks China tea offerings. Game phù hợp business students, international trade professionals, aspiring global entrepreneurs!',
    category: ['simulation', 'business'],
    difficulty: 'Nâng cao',
    estimatedTime: '40-50 phút',
    skills: ['International Business', 'Global Strategy', 'Cross-Cultural Management', 'Risk Management'],
    moduleType: 'international-business',
    isInternal: true,
    points: 190,
    icon: '🌍',
    color: 'from-blue-600 to-teal-600',
    faqs: [
      {
        question: 'Entry strategy nào best cho company nhỏ muốn go global?',
        answer:
          'Game recommend staged approach: (1) Start exporting (test market, low risk, use distributors), (2) E-commerce (Shopify global, Amazon international), (3) Licensing if IP-based product, (4) Later JV or subsidiary when proven. Avoid: jumping to full subsidiary = burn cash fast! Learn from Airbnb: platform model scaled globally without owning assets.',
      },
      {
        question: 'Làm sao protect against currency risks?',
        answer:
          'Game teach hedging strategies: (1) Natural hedge (revenues and costs in same currency), (2) Forward contracts (lock exchange rate), (3) Currency diversification (multiple markets offset), (4) Pricing in strong currencies (USD, EUR), (5) Financial hedging (options, swaps). Example: European company earns USD but costs in EUR - USD strengthens = profit boost!',
      },
      {
        question: 'Bribery và corruption rampant ở emerging markets - phải làm sao?',
        answer:
          'Game show ethical approaches: (1) FCPA (US Foreign Corrupt Practices Act) - violations = huge fines, jail, (2) Build compliance culture, (3) Use local partners for government relations (but audit them!), (4) Grease payments small but slippery slope, (5) Sometimes walk away - reputation > short-term gain. Walmart Mexico bribery scandal cost billions in fines + reputation damage!',
      },
      {
        question: 'Global business có sustainable với climate concerns không?',
        answer:
          'Tension exists BUT opportunities: (1) Regional production reduces shipping emissions, (2) Circular economy models (repair, reuse), (3) Green premium in EU markets, (4) Carbon border taxes coming (EU CBAM). Game show: sustainability = competitive advantage for forward-thinking companies. Patagonia, Unilever examples!',
      },
      {
        question: 'Career paths trong international business?',
        answer:
          'Many roles: (1) International marketing manager ($70K-120K), (2) Global supply chain analyst ($65K-110K), (3) Export manager ($60K-100K), (4) Country manager ($100K-200K+), (5) Trade compliance specialist ($55K-90K). Often requires: travel (20-50%), language skills (bonus!), cultural adaptability. MBAs with international experience valued!',
      },
    ],
    learningObjectives: [
      'Analyze global markets: PESTEL framework, market attractiveness, competitive landscape',
      'Choose entry strategies: exporting, licensing, JV, subsidiary - trade-offs analysis',
      'Manage cross-cultural challenges: leadership styles, communication, negotiation adaptation',
      'Navigate political and economic risks: currency hedging, compliance, geopolitical scenarios',
      'Build resilient global supply chains: multi-country sourcing, logistics optimization, crisis management',
    ],
    relatedLessons: [
      {
        moduleId: 'international-business',
        lessonId: 'global-market-entry-strategies',
        title: 'Chiến lược Thâm nhập Thị trường Toàn cầu',
        connection: 'Lựa chọn và thực hiện chiến lược thâm nhập thị trường.',
      },
      {
        moduleId: 'international-business',
        lessonId: 'managing-multinational-enterprise',
        title: 'Quản lý Doanh nghiệp Đa quốc gia',
        connection: 'Quản lý các hoạt động của công ty trên toàn cầu.',
      },
    ],
  },
  {
    id: 'supply-chain-manager',
    title: 'Quản lý Chuỗi cung ứng',
    description:
      'Quản lý Chuỗi cung ứng là game mô phỏng supply chain management (SCM) toàn diện, đưa bạn vào vai supply chain director điều phối network phức tạp từ raw material suppliers, manufacturers, warehouses, distribution centers đến retailers và end customers, tối ưu hóa flow of goods để minimize costs trong khi maximize service levels, đồng thời đối mặt với disruptions thực tế như port congestion, supplier bankruptcies, demand spikes, và geopolitical risks - giống như managing logistics cho Amazon, Walmart, hoặc manufacturing giants.\n\nGame bắt đầu với supply chain mapping: identify tất cả nodes (suppliers tier 1, 2, 3, production facilities multiple countries, regional warehouses, last-mile delivery), analyze lead times từng stage, calculate total landed costs, và spot bottlenecks. Bạn decide: single-source hay multi-source suppliers (reliability vs cost), make vs buy decisions, domestic vs offshore manufacturing, centralized vs distributed warehouses.\n\nInventory management critical: bạn implement just-in-time (JIT) để minimize inventory holding costs, set safety stock levels để handle demand variability, use ABC analysis prioritize high-value items, và calculate economic order quantities (EOQ). Game mô phỏng bullwhip effect - demand fluctuations amplify upstream supply chain causing overproduction hoặc stockouts. Bạn deploy demand forecasting AI to smooth này.\n\nDisruption scenarios test skills: Suez Canal blocked (reroute ships, airfreight premium items, negotiate expedited customs), chip shortage (allocate scarce components, prioritize high-margin products), port strike (stockpile inventory pre-strike, diversify ports), COVID-19 lockdowns (shift to alternative suppliers, reshore production). Game dạy building resilient supply chains với redundancy và flexibility.\n\nSustainability goals add complexity: reduce carbon footprint (optimize shipping routes, use rail vs truck, electric vehicles), ethical sourcing (audit suppliers labor practices), circular economy (reverse logistics for returns và recycling). Game tracks KPIs: on-time delivery %, inventory turnover, cash-to-cash cycle time, supply chain costs as % of revenue.\n\nGame phù hợp cho sinh viên ngành Logistics/Operations/Business, supply chain professionals muốn upskill, và entrepreneurs building product businesses cần hiểu fulfillment.',
    category: ['simulation', 'business'],
    difficulty: 'Trung bình',
    estimatedTime: '30-40 phút',
    skills: ['Supply Chain Management', 'Logistics', 'Risk Management', 'Optimization'],
    moduleType: 'supply-chain-logistics',
    isInternal: true,
    points: 160,
    icon: '📦',
    color: 'from-amber-500 to-orange-500',
    faqs: [
      {
        question: 'Supply chain management khác logistics như thế nào?',
        answer:
          'Game giải thích: Logistics = execution (transportation, warehousing, delivery). Supply Chain Management = strategy (supplier selection, inventory optimization, demand planning, risk management). SCM bao gồm logistics + procurement + operations + planning. Logistics là subset của SCM.',
      },
      {
        question: 'Công nghệ nào quan trọng nhất trong SCM hiện đại?',
        answer:
          'Game dạy essential tech stack: (1) ERP systems (SAP, Oracle) integrate all data, (2) TMS (Transportation Management System) optimize shipping, (3) WMS (Warehouse Management System) automate fulfillment, (4) AI demand forecasting, (5) Blockchain cho traceability, (6) IoT sensors track shipments real-time.',
      },
      {
        question: 'Chi phí supply chain thường chiếm bao nhiêu % doanh thu?',
        answer:
          'Game mô phỏng industry benchmarks: Retail 6-8%, Manufacturing 10-15%, E-commerce 15-20%, Food/Beverage 20-30%. Breakdown: Transportation 40-50%, Warehousing 25-30%, Inventory carrying costs 15-20%, Admin 5-10%. Optimization có thể save 2-5% revenue!',
      },
      {
        question: 'Làm sao xây dựng supply chain resilient (chống chịu)?',
        answer:
          'Game strategies: (1) Diversify suppliers (không depend 1 nguồn), (2) Multi-source critical components, (3) Buffer inventory cho high-demand items, (4) Nearshoring/reshoring (shorter supply chains), (5) Supplier relationship management (partnerships), (6) Scenario planning và stress testing, (7) Real-time visibility tools.',
      },
      {
        question: 'Career path supply chain có triển vọng không?',
        answer:
          'Rất hot! Game show roles: Supply Chain Analyst ($55K-75K), Supply Chain Planner ($65K-90K), Supply Chain Manager ($90K-130K), Director of Supply Chain ($130K-200K+). E-commerce boom + globalization + sustainability focus = demand cao. Skills: data analytics, ERP systems, negotiation, problem-solving.',
      },
    ],
    learningObjectives: [
      'Nắm vững end-to-end supply chain operations từ suppliers đến customers',
      'Phát triển kỹ năng optimization: inventory levels, transportation routes, costs',
      'Học cách manage disruptions và build resilient supply chains',
      'Hiểu các KPIs quan trọng và cách measure supply chain performance',
      'Làm quen với SCM technology platforms (ERP, TMS, WMS, forecasting AI)',
    ],
    relatedLessons: [
      {
        moduleId: 'supply-chain-logistics',
        lessonId: 'supply-chain-fundamentals',
        title: 'Cơ bản về Chuỗi cung ứng',
        connection: 'Hiểu về các thành phần của chuỗi cung ứng.',
      },
      {
        moduleId: 'supply-chain-logistics',
        lessonId: 'supply-chain-risk-management',
        title: 'Quản lý Rủi ro Chuỗi cung ứng',
        connection: 'Xác định và giảm thiểu rủi ro trong chuỗi cung ứng.',
      },
    ],
  },
  {
    id: 'sustainable-farm-sim',
    title: 'Mô phỏng Nông trại Bền vững',
    description:
      'Sustainable Farm Simulator: transform conventional farm into regenerative agriculture model! Manage: soil health (the foundation - healthy soil = healthy crops), water conservation, biodiversity, carbon sequestration, profitability. Learn regenerative practices: (1) Cover cropping (protect soil, nitrogen fixation, biomass), (2) Crop rotation (break pest/disease cycles, balance nutrients), (3) No-till farming (preserve soil structure, carbon storage, microbiome), (4) Composting (close nutrient loop, organic matter), (5) Agroforestry (trees + crops, shade, windbreaks, diversity), (6) Integrated pest management (beneficial insects, not chemicals). Contrast with industrial ag: monocultures (efficient but fragile, pest/disease vulnerable), heavy chemicals (short-term yields but soil degradation), till farming (erosion, carbon release). Organic certification: standards (no synthetic pesticides/fertilizers, non-GMO), costs (transition period 3 years, lower yields initially, premium prices compensate). Regenerative beyond organic: focus soil health improvement, carbon drawdown (climate solution!), ecosystem restoration. Economics: lower input costs (no expensive chemicals), higher prices (organic premium 20-40%+), ecosystem services (pollination, erosion prevention, water filtration). Case studies: Gabe Brown (North Dakota regenerative pioneer), Kiss the Ground documentary, Polyface Farms (Joel Salatin). Climate impact: agriculture currently 25% emissions, but regenerative can sequester carbon (net negative!). Phù hợp farmers transitioning, environmental students, foodies wanting understand food systems!',
    category: ['simulation', 'environment'],
    difficulty: 'Trung bình',
    estimatedTime: '30-40 phút',
    skills: ['Sustainable Agriculture', 'Organic Farming', 'Regenerative Agriculture', 'Resource Management'],
    moduleType: 'sustainable-agriculture',
    isInternal: true,
    points: 150,
    icon: '🌿',
    color: 'from-green-600 to-lime-600',
    faqs: [
      {
        question: 'Organic farming có thể feed the world không?',
        answer:
          'Debated! Concerns: (1) Lower yields (10-20% less than conventional initially), (2) More land needed, (3) Labor intensive. BUT: (1) Regenerative practices improve yields over time, (2) Current system wastes 30-40% food (fix waste = enough for all!), (3) Industrial ag degrades soil (unsustainable long-term), (4) Nutrition quality higher. Game show: sustainable + waste reduction + local systems = viable!',
      },
      {
        question: 'Tại sao organic food expensive hơn?',
        answer:
          'Multiple factors: (1) Labor intensive (hand weeding vs herbicides), (2) Certification costs, (3) Lower yields = fixed costs spread over less output, (4) Smaller scale (no industrial efficiencies yet), (5) Transition period losses (3 years no premium before certification). As scale increases, prices dropping. Regenerative long-term cheaper (no chemical inputs, healthier soil)!',
      },
      {
        question: 'No-till farming có thật sự better cho soil không?',
        answer:
          'Science says yes! Game demonstrates: Tilling (1) Destroys soil structure (aggregates broken), (2) Releases stored carbon (climate impact), (3) Disrupts microbiome (fungi, bacteria networks), (4) Causes erosion (wind/water carry topsoil). No-till: preserves structure, builds organic matter, increases water retention, sequesters carbon. Gabe Brown proof: 1% to 11% soil organic matter in 20 years!',
      },
      {
        question: 'Regenerative agriculture có profitable không hay idealistic?',
        answer:
          'Can be very profitable! Game economics: (1) Lower costs (no fertilizers/pesticides = savings), (2) Premium prices (organic/grassfed market), (3) Resilience (diverse systems less affected by single commodity price crashes), (4) Ecosystem services (government payments for carbon sequestration?). Examples: Gabe Brown, White Oak Pastures profitable. Transition period challenging (3-5 years), long-term attractive!',
      },
      {
        question: 'Career opportunities trong sustainable agriculture?',
        answer:
          'Growing demand! Paths: (1) Regenerative farmer (own farm or manage), (2) Organic inspector/certifier ($45K-75K), (3) Sustainable agriculture consultant ($60K-100K), (4) Agroecology researcher (universities, NGOs), (5) Food systems coordinator (supply chain), (6) Permaculture designer ($50K-90K). Consumer demand + climate urgency = opportunity!',
      },
    ],
    learningObjectives: [
      'Master regenerative practices: cover cropping, no-till, crop rotation, composting, agroforestry',
      'Understand soil health: microbiome, organic matter, structure, carbon sequestration',
      'Balance ecology and economics: profitability while improving ecosystem health',
      'Compare farming systems: industrial monoculture vs organic vs regenerative trade-offs',
      'Apply climate solutions: agriculture as carbon sink, emission reduction strategies',
    ],
    relatedLessons: [
      {
        moduleId: 'sustainable-agriculture',
        lessonId: 'principles-of-sustainable-agriculture',
        title: 'Nguyên tắc Nông nghiệp Bền vững',
        connection: 'Áp dụng các nguyên tắc nông nghiệp bền vững.',
      },
      {
        moduleId: 'sustainable-agriculture',
        lessonId: 'organic-regenerative-farming',
        title: 'Nông nghiệp Hữu cơ và Tái tạo',
        connection: 'Thực hành các phương pháp nông nghiệp hữu cơ và tái tạo.',
      },
    ],
  },
];
