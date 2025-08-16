import type { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface EnvironmentalDataScienceLesson extends BaseLessonData {
  environmentalApplications?: string[];
  dataSourcesTypes?: string[];
  analyticalMethods?: string[];
  sustainabilityMetrics?: {
    name: string;
    description: string;
    measurement: string;
  }[];
}

export const environmentalDataScienceLessons: EnvironmentalDataScienceLesson[] = [
  {
    id: 'climate-data-analysis',
    title: 'Climate Data Analysis & Modeling',
    description:
      'Advanced techniques cho analyzing climate data, weather patterns, và environmental trends. Focus trên Vietnamese climate data, monsoon patterns, và climate change impacts trên agriculture và coastal areas.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    imageUrl: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?w=800&h=600&fit=crop&auto=format',
    objectives: [
      'Master climate data collection, processing, và analysis techniques',
      'Understand Vietnamese climate patterns và seasonal variations',
      'Apply statistical modeling cho weather prediction và climate forecasting',
      'Analyze climate change impacts trên Vietnamese agriculture và coastal regions',
      'Implement machine learning models cho environmental trend prediction',
    ],
    prerequisites: [
      'Strong foundation trong statistics và data analysis',
      'Programming skills trong Python, R, hoặc MATLAB',
      'Basic understanding của meteorology và climatology concepts',
      'Knowledge của GIS systems và spatial data analysis',
    ],
    exercises: [
      {
        title: 'Vietnamese Monsoon Pattern Analysis',
        description:
          'Analyze 30-year monsoon data để identify patterns và predict seasonal rainfall trong Mekong Delta region',
        difficulty: 'Trung bình',
        materials: [
          'Vietnamese meteorological data (1990-2020)',
          'Python với pandas, numpy, scikit-learn',
          'Climate data visualization libraries',
          'GIS mapping tools',
        ],
        procedure: [
          'Import và preprocess Vietnamese climate data từ meteorological stations',
          'Analyze seasonal patterns, rainfall distribution, temperature trends',
          'Identify monsoon onset, duration, và intensity variations',
          'Apply time series analysis để detect long-term climate trends',
          'Build predictive models cho seasonal rainfall forecasting',
          'Visualize results với interactive maps và trend graphs',
        ],
        expectedResults: 'Comprehensive monsoon analysis với 80%+ accuracy trong seasonal rainfall prediction',
        solution:
          'Advanced statistical analysis reveals clear monsoon patterns với actionable insights cho agricultural planning',
      },
      {
        title: 'Climate Change Impact Assessment',
        description:
          'Assess climate change impacts trên Vietnamese coastal cities using satellite data và sea level measurements',
        difficulty: 'Nâng cao',
        materials: [
          'Satellite imagery data (Landsat, Sentinel)',
          'Sea level measurement data',
          'Temperature và precipitation records',
          'Google Earth Engine platform',
          'Climate projection models',
        ],
        procedure: [
          'Collect satellite data cho Ho Chi Minh City và Da Nang coastal areas',
          'Analyze land use changes, urban heat island effects',
          'Process sea level rise data và coastal erosion patterns',
          'Correlate climate data với urban development trends',
          'Project future scenarios using climate models',
          'Create risk assessment maps cho policy makers',
        ],
        expectedResults: 'Detailed climate impact assessment với actionable recommendations cho urban planning',
        solution:
          'Comprehensive analysis provides evidence-based insights cho climate adaptation strategies trong Vietnamese coastal cities',
      },
    ],
    realWorldApplications: [
      'Vietnamese Meteorological Service: Enhanced weather forecasting capabilities',
      'Mekong Delta agriculture: Crop planning based trên climate predictions',
      'Coastal cities planning: Sea level rise adaptation strategies',
      'Renewable energy sector: Wind và solar resource assessment',
      'Insurance industry: Climate risk modeling cho agricultural policies',
    ],
    environmentalApplications: [
      'Agricultural planning: Crop selection based trên climate projections',
      'Water resource management: Drought và flood prediction systems',
      'Coastal protection: Sea level rise impact assessment',
      'Urban planning: Heat island mitigation strategies',
      'Renewable energy: Wind và solar resource optimization',
    ],
    dataSourcesTypes: [
      'Meteorological stations: Temperature, humidity, rainfall, wind data',
      'Satellite imagery: Land use, vegetation, temperature monitoring',
      'Ocean buoys: Sea surface temperature, wave height, salinity',
      'Weather radars: Precipitation intensity và storm tracking',
      'Climate models: Global circulation models, regional downscaling',
    ],
    caseStudies: [
      {
        title: 'Mekong Delta Climate Adaptation Project',
        organization: 'Vietnamese Institute of Meteorology và Climate Change',
        problem:
          'Developing climate adaptation strategies cho Mekong Delta agriculture facing saltwater intrusion và changing rainfall patterns',
        solution:
          'Implemented comprehensive climate monitoring network với predictive modeling cho agricultural decision support',
        impact:
          'Improved crop yields by 15%, reduced water usage by 20%, enhanced resilience of 50,000 farming households',
        innovations: [
          'Real-time climate monitoring networks',
          'Mobile apps cho farmers với weather alerts',
          'Integrated hydrological models',
          'Community-based adaptation programs',
        ],
      },
      {
        title: 'Ho Chi Minh City Heat Island Mitigation',
        organization: 'Ho Chi Minh City Department of Natural Resources',
        problem: 'Addressing urban heat island effects và extreme temperature events trong rapidly growing metropolis',
        solution:
          'Deployed sensor networks và satellite analysis để monitor urban temperatures và implement cooling strategies',
        impact:
          'Reduced urban temperatures by 2-3°C trong pilot areas, improved air quality, enhanced urban livability',
        innovations: [
          'IoT temperature sensor networks',
          'Green infrastructure planning tools',
          'Building energy efficiency programs',
          'Urban forest management systems',
        ],
      },
    ],
    resources: [
      {
        title: 'Vietnamese Institute of Meteorology Climate Data',
        url: 'http://vnclimate.vn/',
        type: 'Government Data',
      },
      {
        title: 'Google Earth Engine Climate Datasets',
        url: 'https://earthengine.google.com/',
        type: 'Satellite Data Platform',
      },
      {
        title: 'IPCC Climate Change Reports',
        url: 'https://www.ipcc.ch/',
        type: 'Scientific Publication',
      },
    ],
  },
  {
    id: 'air-water-quality-monitoring',
    title: 'Air & Water Quality Monitoring Systems',
    description:
      'Comprehensive environmental monitoring using IoT sensors, data analytics, và real-time reporting systems. Focus trên Vietnamese urban pollution, industrial waste monitoring, và water quality management.',
    duration: '165 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    imageUrl: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&h=600&fit=crop&auto=format',
    objectives: [
      'Design và deploy IoT sensor networks cho environmental monitoring',
      'Implement real-time data collection và analysis systems',
      'Understand Vietnamese environmental standards và compliance requirements',
      'Apply data visualization techniques cho environmental reporting',
      'Develop early warning systems cho pollution events',
    ],
    prerequisites: [
      'Understanding của environmental chemistry và pollutant types',
      'Basic electronics và sensor technology knowledge',
      'Programming skills trong Python, JavaScript, hoặc C++',
      'Knowledge của database systems và web development',
    ],
    exercises: [
      {
        title: 'Smart Air Quality Monitoring Network',
        description: 'Build IoT-based air quality monitoring system cho Ho Chi Minh City với real-time data dashboard',
        difficulty: 'Trung bình',
        materials: [
          'Arduino/Raspberry Pi với air quality sensors',
          'PM2.5, PM10, CO2, NO2 sensors',
          'WiFi modules và cloud connectivity',
          'Web dashboard framework',
          'Database system (MongoDB/PostgreSQL)',
        ],
        procedure: [
          'Assemble air quality sensor nodes với calibration procedures',
          'Develop data collection firmware với error handling',
          'Implement wireless data transmission với network redundancy',
          'Create real-time web dashboard với pollution mapping',
          'Set up alerting system cho pollution threshold violations',
          'Validate measurements against reference monitoring stations',
        ],
        expectedResults:
          'Functional air quality monitoring network với <5% measurement error compared to reference stations',
        solution:
          'Comprehensive IoT system provides real-time air quality data với automated alerting cho public health protection',
      },
      {
        title: 'Industrial Water Quality Assessment',
        description:
          'Develop water quality monitoring system cho industrial discharge compliance trong Vietnamese textile industry',
        difficulty: 'Nâng cao',
        materials: [
          'Water quality sensors (pH, dissolved oxygen, turbidity)',
          'Data logging equipment',
          'Laboratory analysis protocols',
          'GIS mapping software',
          'Regulatory compliance databases',
        ],
        procedure: [
          'Install sensor networks tại industrial discharge points',
          'Collect water samples cho laboratory validation',
          'Implement automated data quality control procedures',
          'Analyze pollution sources và contaminant pathways',
          'Create compliance reporting system theo Vietnamese standards',
          'Develop remediation recommendations based trên data analysis',
        ],
        expectedResults: 'Complete water quality assessment với regulatory compliance documentation',
        solution:
          'Integrated monitoring approach ensures industrial compliance while protecting Vietnamese water resources',
      },
    ],
    realWorldApplications: [
      'Ho Chi Minh City air quality management: Real-time pollution monitoring',
      'Industrial parks: Continuous emission monitoring systems',
      'Saigon River water quality: Pollution source identification',
      'Agricultural areas: Pesticide và fertilizer runoff monitoring',
      'Coastal areas: Marine pollution tracking và prevention',
    ],
    environmentalApplications: [
      'Urban air quality management và public health protection',
      'Industrial compliance monitoring và pollution prevention',
      'Water resource protection và quality assurance',
      'Environmental impact assessment cho development projects',
      'Public environmental awareness và education programs',
    ],
    caseStudies: [
      {
        title: 'Ho Chi Minh City Smart Environmental Monitoring',
        organization: 'HCMC Department of Natural Resources and Environment',
        problem:
          'Implementing comprehensive environmental monitoring trong rapidly industrializing city với limited monitoring infrastructure',
        solution:
          'Deployed network of 100+ smart sensors covering air, water, và noise pollution với real-time public reporting system',
        impact:
          'Improved environmental awareness, reduced pollution incidents by 30%, enhanced regulatory enforcement capabilities',
        innovations: [
          'Low-cost sensor network deployment',
          'Mobile environmental data apps',
          'Predictive pollution modeling',
          'Community engagement platforms',
        ],
      },
      {
        title: 'Dong Nai Industrial Zone Water Management',
        organization: 'Dong Nai Department of Natural Resources',
        problem:
          'Monitoring industrial wastewater discharge để ensure compliance với Vietnamese environmental standards',
        solution:
          'Implemented automated monitoring system với real-time data transmission và regulatory reporting capabilities',
        impact:
          'Achieved 95% compliance rate, reduced water pollution incidents, improved public trust trong industrial operations',
        innovations: [
          'Automated compliance reporting systems',
          'Real-time pollution alert mechanisms',
          'Industrial wastewater treatment optimization',
          'Stakeholder engagement platforms',
        ],
      },
    ],
    resources: [
      {
        title: 'Vietnamese Environmental Standards Database',
        url: 'https://monre.gov.vn/',
        type: 'Government Standards',
      },
      {
        title: 'Environmental Sensor Technologies Guide',
        url: 'https://www.epa.gov/air-sensor-toolbox',
        type: 'Technical Reference',
      },
      {
        title: 'IoT Environmental Monitoring Platforms',
        url: 'https://www.thingsboard.io/',
        type: 'Open Source Platform',
      },
    ],
  },
  {
    id: 'satellite-remote-sensing',
    title: 'Satellite Remote Sensing & GIS Applications',
    description:
      'Advanced satellite imagery analysis cho environmental monitoring, land use change detection, và natural resource management. Specialized focus trên Vietnamese geography, deforestation monitoring, và coastal changes.',
    duration: '210 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    imageUrl: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop&auto=format',
    objectives: [
      'Master satellite image processing techniques và analysis workflows',
      'Implement change detection algorithms cho environmental monitoring',
      'Apply GIS analysis cho natural resource management',
      'Understand Vietnamese land use patterns và environmental changes',
      'Develop automated monitoring systems using satellite data',
    ],
    prerequisites: [
      'Strong foundation trong GIS concepts và spatial analysis',
      'Programming experience trong Python, R, hoặc JavaScript',
      'Understanding của remote sensing principles và image processing',
      'Knowledge của environmental science và geography concepts',
    ],
    exercises: [
      {
        title: 'Deforestation Monitoring in Central Highlands',
        description:
          'Use Landsat và Sentinel imagery để monitor forest loss trong Central Highlands coffee growing regions',
        difficulty: 'Nâng cao',
        materials: [
          'Landsat 8/9 satellite imagery (2015-2024)',
          'Sentinel-2 high-resolution data',
          'Google Earth Engine platform',
          'QGIS hoặc ArcGIS software',
          'Forest cover reference data',
        ],
        procedure: [
          'Acquire multi-temporal satellite imagery cho study area',
          'Preprocess images: atmospheric correction, cloud masking',
          'Calculate vegetation indices (NDVI, EVI) cho forest detection',
          'Apply change detection algorithms để identify deforestation',
          'Quantify forest loss area và patterns over time',
          'Create detailed maps và reports cho conservation planning',
        ],
        expectedResults: 'Accurate deforestation mapping với 90%+ classification accuracy',
        solution:
          'Advanced remote sensing analysis provides actionable insights cho forest conservation và sustainable land management',
      },
      {
        title: 'Mekong Delta Coastal Change Analysis',
        description:
          'Monitor coastal erosion và sedimentation changes trong Mekong Delta using satellite time series data',
        difficulty: 'Nâng cao',
        materials: [
          'Landsat historical archive (1990-2024)',
          'Sentinel-1 SAR data cho water mapping',
          'Digital elevation models',
          'Coastal reference datasets',
          'Sea level rise projections',
        ],
        procedure: [
          'Compile 30+ year satellite image archive cho Mekong Delta coastline',
          'Extract shoreline positions using water classification algorithms',
          'Analyze temporal changes trong coastal morphology',
          'Correlate changes với human activities và climate factors',
          'Model future coastal changes under different scenarios',
          'Generate vulnerability maps cho coastal communities',
        ],
        expectedResults: 'Comprehensive coastal change assessment với future vulnerability projections',
        solution: 'Long-term satellite analysis reveals coastal dynamics enabling evidence-based adaptation planning',
      },
    ],
    realWorldApplications: [
      'Ministry of Natural Resources: National land use monitoring programs',
      'Forest Protection Agencies: Illegal logging detection systems',
      'Mekong Delta management: Coastal erosion monitoring',
      'Agricultural planning: Crop monitoring và yield prediction',
      'Disaster management: Flood mapping và damage assessment',
    ],
    environmentalApplications: [
      'Forest conservation: Deforestation monitoring và protection planning',
      'Agricultural management: Crop health assessment và irrigation optimization',
      'Water resources: Lake và reservoir monitoring',
      'Coastal management: Erosion tracking và protection strategies',
      'Urban planning: Land use change detection và growth monitoring',
    ],
    analyticalMethods: [
      'Spectral analysis: Vegetation indices, water indices, urban indices',
      'Change detection: Image differencing, classification comparison',
      'Time series analysis: Trend detection, seasonal pattern analysis',
      'Machine learning: Supervised classification, object detection',
      'Spatial analysis: Buffer analysis, proximity analysis, overlay operations',
    ],
    caseStudies: [
      {
        title: 'Vietnam Forest Monitoring System',
        organization: 'Forest Protection Department - MONRE',
        problem:
          'Implementing national-scale forest monitoring để combat illegal logging và track reforestation progress',
        solution:
          'Developed automated satellite monitoring system using Google Earth Engine với monthly forest change alerts',
        impact:
          'Reduced deforestation rates by 25%, improved law enforcement response time by 70%, enhanced forest conservation effectiveness',
        innovations: [
          'Real-time deforestation alert system',
          'Mobile apps cho forest rangers',
          'Community reporting platforms',
          'Predictive analytics cho high-risk areas',
        ],
      },
      {
        title: 'Mekong Delta Climate Adaptation Mapping',
        organization: 'Mekong Delta Development Research Institute',
        problem:
          'Understanding coastal vulnerabilities để develop climate adaptation strategies cho agricultural communities',
        solution:
          'Created comprehensive vulnerability mapping using satellite data, climate projections, và socio-economic indicators',
        impact:
          'Informed adaptation planning cho 500,000 residents, secured $50M trong climate funding, enhanced community resilience',
        innovations: [
          'Multi-hazard vulnerability assessment',
          'Community-based monitoring systems',
          'Early warning platforms',
          'Adaptive management frameworks',
        ],
      },
    ],
    resources: [
      {
        title: 'Google Earth Engine Documentation',
        url: 'https://earthengine.google.com/',
        type: 'Platform Documentation',
      },
      {
        title: 'Landsat Science Data Portal',
        url: 'https://landsat.gsfc.nasa.gov/',
        type: 'Satellite Data',
      },
      {
        title: 'QGIS Remote Sensing Tutorials',
        url: 'https://www.qgis.org/',
        type: 'Software Tutorial',
      },
    ],
  },
  {
    id: 'environmental-machine-learning',
    title: 'Environmental Machine Learning & Predictive Modeling',
    description:
      'Apply advanced machine learning techniques cho environmental prediction, ecological modeling, và sustainability optimization. Focus trên Vietnamese environmental challenges và data-driven solutions.',
    duration: '195 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&auto=format',
    objectives: [
      'Master machine learning applications trong environmental science',
      'Develop predictive models cho environmental processes',
      'Implement deep learning cho environmental pattern recognition',
      'Apply AI techniques cho sustainability optimization',
      'Create decision support systems cho environmental management',
    ],
    prerequisites: [
      'Strong foundation trong machine learning algorithms và statistics',
      'Programming proficiency trong Python với scikit-learn, TensorFlow',
      'Understanding của environmental science processes và data types',
      'Experience với data preprocessing và feature engineering',
    ],
    exercises: [
      {
        title: 'Air Pollution Prediction Model',
        description:
          'Build deep learning model để predict PM2.5 concentrations trong Ho Chi Minh City using meteorological và traffic data',
        difficulty: 'Nâng cao',
        materials: [
          'Historical air quality data (2018-2024)',
          'Meteorological data: temperature, humidity, wind',
          'Traffic volume và vehicle emission data',
          'TensorFlow/PyTorch frameworks',
          'Time series modeling libraries',
        ],
        procedure: [
          'Collect và preprocess multi-source environmental data',
          'Engineer features: lag variables, rolling averages, interaction terms',
          'Design neural network architecture cho time series prediction',
          'Train models với hyperparameter optimization',
          'Validate performance using cross-validation và real-time testing',
          'Deploy model với web interface cho public access',
        ],
        expectedResults: 'Air pollution prediction model với MAE <10 μg/m³ cho 24-hour forecasts',
        solution:
          'Advanced deep learning approach enables accurate pollution forecasting supporting public health protection measures',
      },
      {
        title: 'Biodiversity Conservation Optimization',
        description: 'Use reinforcement learning để optimize protected area management trong Vietnamese national parks',
        difficulty: 'Nâng cao',
        materials: [
          'Species occurrence data và habitat maps',
          'Human activity data: tourism, logging, agriculture',
          'Climate data và projections',
          'Reinforcement learning frameworks',
          'Conservation effectiveness metrics',
        ],
        procedure: [
          'Model ecosystem dynamics và species population changes',
          'Define conservation objectives và constraint functions',
          'Implement reinforcement learning agent cho management decisions',
          'Train agent using historical data và simulated scenarios',
          'Optimize resource allocation across protected areas',
          'Evaluate conservation outcomes using biodiversity metrics',
        ],
        expectedResults: 'Optimized conservation strategy improving biodiversity outcomes by 20-30%',
        solution: 'AI-driven conservation planning maximizes biodiversity protection within resource constraints',
      },
    ],
    realWorldApplications: [
      'Environmental protection agencies: Pollution prediction và early warning systems',
      'National parks: Wildlife management và conservation optimization',
      'Agricultural sector: Precision farming và sustainable practices',
      'Urban planning: Smart city environmental optimization',
      'Climate research: Long-term environmental trend prediction',
    ],
    environmentalApplications: [
      'Pollution forecasting: Air, water, và noise pollution prediction',
      'Ecosystem modeling: Species distribution và population dynamics',
      'Resource optimization: Water, energy, và waste management',
      'Climate adaptation: Risk assessment và adaptation planning',
      'Sustainability assessment: Environmental impact prediction',
    ],
    sustainabilityMetrics: [
      {
        name: 'Carbon Footprint Reduction',
        description: 'Quantify CO2 emission reductions through optimized processes',
        measurement: 'Tons CO2 equivalent saved per year',
      },
      {
        name: 'Resource Use Efficiency',
        description: 'Measure improvement trong water, energy, material usage',
        measurement: 'Percentage reduction trong resource consumption',
      },
      {
        name: 'Biodiversity Impact',
        description: 'Assess effects trên species diversity và ecosystem health',
        measurement: 'Species richness index, habitat quality scores',
      },
      {
        name: 'Pollution Reduction',
        description: 'Track reductions trong air, water, soil contamination',
        measurement: 'Pollutant concentration changes (μg/m³, ppm)',
      },
    ],
    caseStudies: [
      {
        title: 'Smart Environmental Management - Da Nang City',
        organization: 'Da Nang Smart City Initiative',
        problem:
          'Integrating multiple environmental data sources để create intelligent management system cho coastal city',
        solution:
          'Developed AI platform combining air quality, water quality, weather, và urban activity data với predictive analytics',
        impact:
          'Improved environmental response time by 50%, reduced pollution incidents by 40%, enhanced tourist satisfaction scores',
        innovations: [
          'Multi-modal environmental data fusion',
          'Predictive analytics dashboards',
          'Automated alert systems',
          'Citizen engagement platforms',
        ],
      },
      {
        title: 'Mekong Delta Agricultural Sustainability',
        organization: 'Can Tho University - Mekong Delta Development Institute',
        problem:
          'Optimizing rice production while minimizing environmental impact trong climate-sensitive delta region',
        solution: 'Applied machine learning cho precision agriculture với environmental constraint optimization',
        impact: 'Increased crop yields by 18%, reduced water usage by 25%, minimized fertilizer runoff by 35%',
        innovations: [
          'AI-powered irrigation scheduling',
          'Precision fertilizer application',
          'Climate-adaptive crop selection',
          'Environmental impact monitoring',
        ],
      },
    ],
    resources: [
      {
        title: 'Environmental Data Science Handbook',
        url: 'https://eds-book.github.io/',
        type: 'Educational Resource',
      },
      {
        title: 'TensorFlow Environmental Applications',
        url: 'https://www.tensorflow.org/resources/learn-ml',
        type: 'Technical Documentation',
      },
      {
        title: 'Environmental ML Research Papers',
        url: 'https://scholar.google.com/',
        type: 'Academic Research',
      },
    ],
  },
];
