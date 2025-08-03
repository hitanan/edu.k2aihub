import type { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface FoodTechnologyLesson extends BaseLessonData {
  foodSafetyStandards?: string[];
  processingMethods?: string[];
  vietnameseFoodFocus?: string[];
  nutritionalAnalysis?: {
    component: string;
    measurement: string;
    significance: string;
  }[];
}

export const foodTechnologyLessons: FoodTechnologyLesson[] = [
  {
    id: 'food-safety-quality-control',
    title: 'Food Safety & Quality Control Systems',
    description: 'Comprehensive food safety management using HACCP, ISO 22000, và Vietnamese food safety regulations. Focus trên Vietnamese food industry modernization và international export standards.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&auto=format',
    objectives: [
      'Master HACCP principles và implementation trong food manufacturing',
      'Understand Vietnamese food safety regulations và international standards',
      'Apply quality control systems trong traditional Vietnamese food production',
      'Implement traceability systems cho food supply chain management',
      'Design food safety training programs cho workers và management'
    ],
    prerequisites: [
      'Basic understanding của food science principles và microbiology',
      'Knowledge của manufacturing processes và quality management',
      'Familiarity với regulatory frameworks và compliance requirements',
      'Understanding của Vietnamese food industry landscape'
    ],
    exercises: [
      {
        title: 'HACCP Implementation for Vietnamese Fish Sauce Production',
        description: 'Develop complete HACCP plan cho traditional nuoc mam production facility với modern safety standards',
        difficulty: 'Trung bình',
        materials: [
          'HACCP guidelines và templates',
          'Vietnamese food safety regulations',
          'Fish sauce production process documentation',
          'Microbiology testing equipment specifications',
          'Quality control checklists'
        ],
        procedure: [
          'Analyze traditional nuoc mam production process để identify critical control points',
          'Conduct hazard analysis: biological, chemical, physical contamination risks',
          'Establish critical limits cho pH, salt concentration, fermentation temperature',
          'Design monitoring procedures và corrective actions',
          'Develop verification và record-keeping systems',
          'Create training program cho production workers'
        ],
        expectedResults: 'Complete HACCP plan meeting Vietnamese export standards và international requirements',
        solution: 'Systematic approach ensures traditional methods comply với modern safety standards while maintaining authentic flavor profiles'
      },
      {
        title: 'Quality Control Lab Setup for Vietnamese Food Export',
        description: 'Design comprehensive quality control laboratory cho Vietnamese food manufacturer targeting international markets',
        difficulty: 'Nâng cao',
        materials: [
          'Laboratory equipment specifications',
          'International testing standards',
          'Vietnamese export regulations',
          'Quality management software',
          'Certification requirements documentation'
        ],
        procedure: [
          'Assess testing requirements cho target export markets (EU, US, Japan)',
          'Design laboratory layout với proper workflow và contamination control',
          'Select equipment cho microbiological, chemical, và physical testing',
          'Develop standard operating procedures cho all test methods',
          'Implement quality management system với ISO/IEC 17025 compliance',
          'Create cost-effective testing schedule optimizing safety và efficiency'
        ],
        expectedResults: 'Fully functional QC lab capable của supporting international food exports',
        solution: 'Comprehensive lab design enables Vietnamese food companies to meet stringent international quality requirements'
      }
    ],
    realWorldApplications: [
      'Vietnamese seafood exporters: Quality assurance cho EU và US markets',
      'Traditional food manufacturers: Modernizing production while preserving authenticity',
      'Agricultural cooperatives: Value-added processing với safety compliance',
      'Restaurant chains: Standardized food safety across multiple locations',
      'Food import/export companies: Compliance với international standards'
    ],
    foodSafetyStandards: [
      'HACCP (Hazard Analysis Critical Control Points)',
      'ISO 22000 Food Safety Management Systems',
      'Vietnamese National Technical Regulation QCVN 8-1:2011/BYT',
      'FDA Food Safety Modernization Act (FSMA)',
      'EU Food Safety Regulations',
      'Codex Alimentarius international food standards'
    ],
    vietnameseFoodFocus: [
      'Traditional fermented foods: nuoc mam, tuong, com ruou',
      'Rice and noodle production: pho, bun, banh mi',
      'Seafood processing: export-quality shrimp, fish, crab',
      'Tropical fruit processing: dragon fruit, rambutan, longan',
      'Traditional medicine foods: bird nest, cordyceps'
    ],
    caseStudies: [
      {
        title: 'Kido Group Food Safety Transformation',
        organization: 'Kido Group - Leading Vietnamese Food Manufacturer',
        problem: 'Upgrading food safety systems để meet international export standards while maintaining traditional Vietnamese flavors',
        solution: 'Implemented comprehensive HACCP systems across all production facilities với modern technology integration',
        impact: 'Achieved FDA approval cho US market, increased exports by 150%, maintained authentic taste profiles',
        innovations: [
          'Automated monitoring systems with IoT sensors',
          'Blockchain-based traceability systems',
          'AI-powered quality control inspection',
          'Mobile training platforms for workers'
        ]
      },
      {
        title: 'Minh Phu Seafood Export Excellence',
        organization: 'Minh Phu Seafood Corporation',
        problem: 'Meeting stringent EU food safety requirements cho large-scale shrimp export operations',
        solution: 'Developed integrated quality management system từ farm to table với continuous monitoring',
        impact: 'Became largest Vietnamese seafood exporter to EU, achieved zero food safety incidents over 5 years',
        innovations: [
          'Integrated aquaculture monitoring systems',
          'Cold chain management technology',
          'Rapid testing laboratory networks',
          'Sustainable fishing practices certification'
        ]
      }
    ],
    resources: [
      {
        title: 'Vietnamese Food Administration Guidelines',
        url: 'http://vfa.gov.vn/',
        type: 'Government Regulation'
      },
      {
        title: 'Codex Alimentarius International Standards',
        url: 'https://www.fao.org/fao-who-codexalimentarius/',
        type: 'International Standard'
      },
      {
        title: 'HACCP Implementation Guide',
        url: 'https://www.fda.gov/food/hazard-analysis-critical-control-points-haccp',
        type: 'Technical Guide'
      }
    ]
  },
  {
    id: 'fermentation-biotechnology',
    title: 'Fermentation Technology & Food Biotechnology',
    description: 'Advanced fermentation processes cho traditional và modern food production. Cover Vietnamese fermented foods, probiotics, và biotechnology applications trong food industry.',
    duration: '195 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    imageUrl: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=800&h=600&fit=crop&auto=format',
    objectives: [
      'Master fermentation biochemistry và microbiology principles',
      'Understand traditional Vietnamese fermentation techniques và modernization approaches',
      'Apply biotechnology tools cho food production optimization',
      'Design fermentation processes cho probiotic và functional foods',
      'Implement quality control systems cho fermented products'
    ],
    prerequisites: [
      'Strong foundation trong microbiology và biochemistry',
      'Understanding của food science principles và enzymology',
      'Basic knowledge của process engineering và bioreactor design',
      'Familiarity với Vietnamese fermented food traditions'
    ],
    exercises: [
      {
        title: 'Modern Nuoc Mam Production Optimization',
        description: 'Optimize traditional fish sauce fermentation using controlled environment technology và microbial analysis',
        difficulty: 'Nâng cao',
        materials: [
          'Fermentation bioreactors với temperature control',
          'Microbial identification equipment',
          'pH, salinity, và amino acid analysis tools',
          'Traditional nuoc mam starter cultures',
          'Quality testing laboratories'
        ],
        procedure: [
          'Isolate và characterize beneficial microorganisms từ traditional nuoc mam',
          'Design controlled fermentation system với optimal temperature, pH, salinity',
          'Monitor fermentation progress using biochemical markers',
          'Compare flavor profiles: traditional vs. controlled fermentation',
          'Optimize fermentation time để achieve desired umami compounds',
          'Scale up process với quality consistency validation'
        ],
        expectedResults: 'Optimized fermentation process reducing production time by 30% while maintaining authentic flavor',
        solution: 'Scientific approach preserves traditional taste while improving efficiency và consistency của Vietnamese fish sauce production'
      },
      {
        title: 'Probiotic Vietnamese Yogurt Development',
        description: 'Develop probiotic yogurt using Vietnamese indigenous lactic acid bacteria với coconut milk base',
        difficulty: 'Nâng cao',
        materials: [
          'Indigenous LAB strains từ Vietnamese fermented foods',
          'Coconut milk và plant-based substrates',
          'Fermentation monitoring equipment',
          'Probiotic viability testing protocols',
          'Sensory evaluation panels'
        ],
        procedure: [
          'Screen Vietnamese LAB strains cho probiotic properties',
          'Optimize coconut milk fermentation conditions',
          'Evaluate probiotic survival during storage conditions',
          'Conduct sensory analysis với Vietnamese consumer preferences',
          'Develop packaging systems cho probiotic stability',
          'Validate health benefits through preliminary studies'
        ],
        expectedResults: 'Commercially viable probiotic yogurt với 10^8 CFU/mL viable probiotics after 21 days storage',
        solution: 'Innovation creates healthy, culturally appropriate probiotic food targeting Vietnamese market preferences'
      }
    ],
    realWorldApplications: [
      'Traditional food manufacturers: Modernizing fermentation processes',
      'Probiotic companies: Developing Vietnamese-specific products',
      'Agricultural cooperatives: Value-added fermented products',
      'Health food industry: Functional fermented foods',
      'Export companies: Standardizing traditional fermented foods'
    ],
    processingMethods: [
      'Controlled atmosphere fermentation systems',
      'Solid-state fermentation techniques',
      'Continuous fermentation processes',
      'Membrane bioreactor technology',
      'Freeze-drying và preservation methods'
    ],
    nutritionalAnalysis: [
      {
        component: 'Amino Acids',
        measurement: 'mg/100g product',
        significance: 'Protein quality và umami flavor development'
      },
      {
        component: 'Organic Acids',
        measurement: 'pH units, titratable acidity',
        significance: 'Preservation, flavor, và probiotic activity'
      },
      {
        component: 'Bioactive Compounds',
        measurement: 'μg/mL concentration',
        significance: 'Health benefits và functional properties'
      },
      {
        component: 'Probiotic Viability',
        measurement: 'CFU/g or CFU/mL',
        significance: 'Therapeutic efficacy và shelf life'
      }
    ],
    caseStudies: [
      {
        title: 'Vinamilk Probiotic Innovation Program',
        organization: 'Vietnam Dairy Products Joint Stock Company',
        problem: 'Developing probiotic dairy products specifically designed cho Vietnamese digestive health và taste preferences',
        solution: 'Combined traditional Vietnamese fermentation knowledge với modern biotechnology để create culturally appropriate products',
        impact: 'Launched successful probiotic line capturing 25% market share, improved digestive health outcomes trong Vietnamese population',
        innovations: [
          'Indigenous probiotic strain development',
          'Plant-based fermentation substrates',
          'Traditional flavor integration',
          'Extended shelf-life preservation technology'
        ]
      },
      {
        title: 'Masan Group Fermented Food Modernization',
        organization: 'Masan Consumer Holdings',
        problem: 'Scaling traditional fermented condiment production while maintaining authentic flavors và improving food safety',
        solution: 'Implemented controlled fermentation technology với traditional starter culture preservation',
        impact: 'Increased production capacity by 300%, maintained traditional taste profiles, achieved international export standards',
        innovations: [
          'Automated fermentation monitoring systems',
          'Traditional culture biobanking',
          'Quality prediction algorithms',
          'Sustainable packaging solutions'
        ]
      }
    ],
    resources: [
      {
        title: 'Food Biotechnology Research Institute Vietnam',
        url: 'https://firi.vast.vn/',
        type: 'Research Institution'
      },
      {
        title: 'International Journal of Food Microbiology',
        url: 'https://www.journals.elsevier.com/international-journal-of-food-microbiology',
        type: 'Scientific Publication'
      },
      {
        title: 'Traditional Fermented Foods Database',
        url: 'https://www.traditionalfermentedfoods.com/',
        type: 'Reference Database'
      }
    ]
  },
  {
    id: 'molecular-gastronomy',
    title: 'Molecular Gastronomy & Food Innovation',
    description: 'Cutting-edge culinary science techniques combining chemistry, physics, và creativity. Modernize Vietnamese cuisine using molecular gastronomy principles while preserving traditional flavors.',
    duration: '165 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop&auto=format',
    objectives: [
      'Master molecular gastronomy techniques và scientific principles',
      'Apply food chemistry knowledge cho innovative texture và flavor creation',
      'Modernize traditional Vietnamese dishes using molecular techniques',
      'Understand food physics: emulsification, gelification, spherification',
      'Design innovative food presentations maintaining nutritional value'
    ],
    prerequisites: [
      'Understanding của food chemistry và physical properties',
      'Basic culinary skills và food preparation techniques',
      'Knowledge của Vietnamese traditional cuisine và flavor profiles',
      'Familiarity với laboratory equipment và precision measurements'
    ],
    exercises: [
      {
        title: 'Molecular Pho Innovation',
        description: 'Transform traditional pho into molecular gastronomy experience while preserving authentic Vietnamese flavors',
        difficulty: 'Nâng cao',
        materials: [
          'Molecular gastronomy equipment: rotary evaporator, liquid nitrogen',
          'Hydrocolloids: agar, sodium alginate, calcium chloride',
          'Traditional pho ingredients: bones, herbs, spices',
          'Precision scales và temperature control equipment',
          'Specialized serving vessels'
        ],
        procedure: [
          'Extract pure flavor essences từ traditional pho broth using distillation',
          'Create pho broth spheres using spherification techniques',
          'Design edible noodle alternatives using gelification',
          'Develop herb và spice foams preserving aromatic compounds',
          'Plate innovative presentation maintaining pho essence',
          'Conduct sensory evaluation comparing traditional vs. molecular versions'
        ],
        expectedResults: 'Innovative pho presentation với concentrated flavors và surprising textures while maintaining authenticity',
        solution: 'Scientific approach creates memorable dining experience while honoring Vietnamese culinary traditions'
      },
      {
        title: 'Vietnamese Dessert Transformation',
        description: 'Modernize traditional Vietnamese desserts (che, banh flan) using molecular gastronomy techniques',
        difficulty: 'Trung bình',
        materials: [
          'Traditional dessert ingredients: coconut, tropical fruits, beans',
          'Molecular tools: syringes, spherification spoons, smoking guns',
          'Natural food coloring và flavor enhancers',
          'Temperature control equipment',
          'Creative plating tools'
        ],
        procedure: [
          'Analyze traditional che components để identify key flavors và textures',
          'Create coconut caviar using reverse spherification',
          'Design fruit glass sheets using agar và natural fruit juices',
          'Develop aromatic smoke effects using safe food-grade materials',
          'Combine traditional và modern elements trong innovative presentations',
          'Test consumer acceptance với Vietnamese diners'
        ],
        expectedResults: 'Modern Vietnamese dessert collection appealing to contemporary diners while respecting tradition',
        solution: 'Balance của innovation và tradition creates new market opportunities cho Vietnamese culinary arts'
      }
    ],
    realWorldApplications: [
      'High-end Vietnamese restaurants: Innovative dining experiences',
      'Culinary schools: Modern Vietnamese cuisine education',
      'Food product development: Novel texture và flavor innovations',
      'Catering companies: Unique event và wedding presentations',
      'Food tourism: Distinctive Vietnamese culinary attractions'
    ],
    processingMethods: [
      'Spherification: Creating liquid-filled spheres',
      'Gelification: Innovative gel textures using hydrocolloids',
      'Emulsification: Stable foams và unusual emulsions',
      'Crystallization: Controlled crystal formation',
      'Encapsulation: Flavor release systems'
    ],
    caseStudies: [
      {
        title: 'Madame Hiên Restaurant Innovation',
        organization: 'Madame Hiên - Premium Vietnamese Restaurant',
        problem: 'Attracting international diners while maintaining Vietnamese culinary authenticity trong competitive restaurant market',
        solution: 'Integrated molecular gastronomy techniques với traditional Vietnamese recipes creating unique fine dining experience',
        impact: 'Increased international customer base by 80%, achieved Michelin recognition, became model cho modern Vietnamese cuisine',
        innovations: [
          'Traditional flavor spherification techniques',
          'Edible art presentations',
          'Interactive dining elements',
          'Sustainable ingredient sourcing'
        ]
      },
      {
        title: 'Saigon Culinary Arts Institute Program',
        organization: 'Saigon Institute of Culinary Arts',
        problem: 'Training next generation của Vietnamese chefs trong modern culinary techniques while preserving cultural heritage',
        solution: 'Developed comprehensive molecular gastronomy curriculum integrating Vietnamese traditional knowledge',
        impact: 'Graduated 200+ certified molecular gastronomy chefs, established Vietnamese cuisine innovation network',
        innovations: [
          'Cultural preservation through innovation',
          'Industry partnership programs',
          'Research collaboration projects',
          'International exchange programs'
        ]
      }
    ],
    resources: [
      {
        title: 'Molecular Gastronomy Techniques Database',
        url: 'https://www.molecularrecipes.com/',
        type: 'Technique Reference'
      },
      {
        title: 'Food Science & Technology Journal',
        url: 'https://onlinelibrary.wiley.com/journal/13652621',
        type: 'Scientific Publication'
      },
      {
        title: 'International Culinary Innovation Platform',
        url: 'https://www.culinaryinnovation.org/',
        type: 'Industry Platform'
      }
    ]
  },
  {
    id: 'sustainable-food-production',
    title: 'Sustainable Food Production & Supply Chain',
    description: 'Sustainable food systems design, supply chain optimization, và environmental impact reduction. Focus trên Vietnamese agriculture modernization và circular economy principles.',
    duration: '150 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop&auto=format',
    objectives: [
      'Understand sustainable food production principles và circular economy concepts',
      'Design efficient food supply chains minimizing waste và environmental impact',
      'Apply Vietnamese traditional sustainable practices trong modern contexts',
      'Implement food waste reduction strategies across production chains',
      'Evaluate environmental footprint của food production systems'
    ],
    prerequisites: [
      'Basic understanding của food production systems và supply chain management',
      'Knowledge của environmental science và sustainability principles',
      'Familiarity với Vietnamese agricultural practices và challenges',
      'Understanding của logistics và quality management'
    ],
    exercises: [
      {
        title: 'Mekong Delta Rice Supply Chain Optimization',
        description: 'Design sustainable rice supply chain từ Mekong Delta farmers đến international markets minimizing environmental impact',
        difficulty: 'Trung bình',
        materials: [
          'Supply chain mapping software',
          'Environmental impact assessment tools',
          'Transportation cost calculators',
          'Quality monitoring equipment',
          'Blockchain traceability platforms'
        ],
        procedure: [
          'Map current rice supply chain từ farm to consumer',
          'Identify waste points và inefficiencies throughout chain',
          'Design optimized logistics network minimizing transportation emissions',
          'Implement quality preservation systems reducing post-harvest losses',
          'Develop traceability system enabling sustainable sourcing verification',
          'Calculate environmental và economic impacts của optimized system'
        ],
        expectedResults: 'Sustainable supply chain reducing waste by 25% và carbon footprint by 30%',
        solution: 'Integrated approach balances environmental sustainability với economic viability for Vietnamese rice industry'
      },
      {
        title: 'Urban Food Waste Reduction Program',
        description: 'Develop comprehensive food waste reduction program cho Ho Chi Minh City restaurants và food service industry',
        difficulty: 'Trung bình',
        materials: [
          'Food waste tracking applications',
          'Composting equipment specifications',
          'Food donation logistics platforms',
          'Staff training materials',
          'Economic impact calculators'
        ],
        procedure: [
          'Conduct food waste audit across different restaurant types',
          'Design waste reduction strategies: portion optimization, inventory management',
          'Implement food donation programs connecting với charity organizations',
          'Establish composting networks cho organic waste processing',
          'Create staff training programs promoting waste consciousness',
          'Measure environmental và economic benefits của reduction programs'
        ],
        expectedResults: 'City-wide food waste reduction program decreasing waste by 40% và creating economic value',
        solution: 'Comprehensive approach transforms waste từ cost center to value creation opportunity for urban food systems'
      }
    ],
    realWorldApplications: [
      'Vietnamese agricultural cooperatives: Sustainable farming practice implementation',
      'Food processing companies: Circular economy và waste minimization',
      'Logistics companies: Green transportation và cold chain optimization',
      'Government agencies: Policy development cho sustainable food systems',
      'International development: Sustainable agriculture project management'
    ],
    vietnameseFoodFocus: [
      'Rice production: Sustainable intensification trong Mekong Delta',
      'Aquaculture: Sustainable shrimp và fish farming practices',
      'Coffee cultivation: Environmental và social sustainability',
      'Fruit exports: Cold chain optimization và quality preservation',
      'Traditional processing: Modernizing sustainable practices'
    ],
    caseStudies: [
      {
        title: 'TH Group Sustainable Agriculture Initiative',
        organization: 'TH Group - Integrated Dairy & Agriculture',
        problem: 'Building sustainable agricultural ecosystem integrating dairy, crop production, và environmental protection',
        solution: 'Developed circular agriculture model với organic farming practices, renewable energy, và waste recycling',
        impact: 'Created 50,000 ha sustainable farm network, reduced environmental impact by 60%, improved farmer livelihoods',
        innovations: [
          'Integrated crop-livestock systems',
          'Biogas energy generation',
          'Organic fertilizer production',
          'Water conservation technologies'
        ]
      },
      {
        title: 'CP Vietnam Sustainable Aquaculture Program',
        organization: 'Charoen Pokphand Vietnam',
        problem: 'Implementing sustainable shrimp farming practices addressing environmental concerns trong Mekong Delta',
        solution: 'Developed integrated aquaculture systems với water recycling, organic feed, và ecosystem restoration',
        impact: 'Improved water quality by 70%, increased farmer incomes by 40%, achieved international sustainability certifications',
        innovations: [
          'Closed-loop aquaculture systems',
          'Biological water treatment',
          'Sustainable feed formulations',
          'Mangrove restoration programs'
        ]
      }
    ],
    resources: [
      {
        title: 'UN Sustainable Development Goals - Food Systems',
        url: 'https://sdgs.un.org/goals',
        type: 'International Framework'
      },
      {
        title: 'FAO Sustainable Agriculture Guidelines',
        url: 'https://www.fao.org/sustainability/',
        type: 'Technical Guidance'
      },
      {
        title: 'Vietnamese Ministry of Agriculture Sustainability Programs',
        url: 'https://www.mard.gov.vn/',
        type: 'Government Initiative'
      }
    ]
  }
];
