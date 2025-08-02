export interface GreenTechLesson {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  duration: string;
  objectives: string[];
  prerequisites: string[];
  exercises: Exercise[];
  realWorldApplications: string[];
  videoUrl: string;
  imageUrl?: string;
  technologies: string[];
  environmentalImpact: string;
  resources: Resource[];
  caseStudies: CaseStudy[];
}

interface Exercise {
  title: string;
  description: string;
  difficulty: string;
  solution: string;
  requirements: string[];
  hints: string[];
  expectedOutput: string;
}

interface Resource {
  title: string;
  url: string;
  type: 'article' | 'tool' | 'video' | 'research';
  description: string;
}

interface CaseStudy {
  title: string;
  company: string;
  challenge: string;
  solution: string;
  results: string;
  insights: string[];
}

export const greenTechLessons: GreenTechLesson[] = [
  {
    id: 'renewable-energy-basics',
    title: 'Bài 1: Cơ Bản Năng Lượng Tái Tạo',
    description: 'Tìm hiểu về năng lượng mặt trời, gió, nước và các công nghệ xanh hiện đại. Học cách tính toán hiệu quả và ROI của hệ thống năng lượng tái tạo.',
    videoUrl: 'https://www.youtube.com/watch?v=eJcgPi6ZZIM',
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=400&fit=crop',
    difficulty: 'Cơ bản',
    duration: '90 phút',
    environmentalImpact: 'Giảm 50-80% khí thải CO2 so với năng lượng hóa thạch',
    objectives: [
      'Hiểu nguyên lý hoạt động của năng lượng mặt trời và gió',
      'Tính toán công suất và hiệu quả hệ thống năng lượng tái tạo',
      'Phân tích chi phí đầu tư và thời gian hoàn vốn',
      'Thiết kế hệ thống năng lượng cho gia đình',
      'Đánh giá tác động môi trường và lợi ích kinh tế'
    ],
    prerequisites: ['Kiến thức vật lý cơ bản', 'Hiểu về điện năng'],
    technologies: [
      'Solar Panels (Monocrystalline, Polycrystalline)',
      'Wind Turbines',
      'Battery Storage Systems',
      'Smart Grid Technology',
      'Energy Management Systems',
      'Hydroelectric Power'
    ],
    exercises: [
      {
        title: 'Thiết kế hệ thống năng lượng mặt trời cho gia đình',
        description: 'Tính toán và thiết kế complete solar system cho một gia đình 4 người ở TP.HCM',
        difficulty: 'Trung bình',
        solution: `# Thiết kế Hệ Thống Năng Lượng Mặt Trời - Gia Đình 4 Người

## 1. Phân Tích Nhu Cầu Điện Năng

### Thiết Bị Điện Chính:
- **Điều hòa:** 2 máy x 9000 BTU = 3.5kW x 8h = 28kWh/ngày
- **Tủ lạnh:** 200W x 24h = 4.8kWh/ngày  
- **Đèn LED:** 15 bóng x 10W x 6h = 0.9kWh/ngày
- **TV + Electronics:** 300W x 6h = 1.8kWh/ngày
- **Máy giặt:** 800W x 1h = 0.8kWh/ngày
- **Khác:** 1.2kWh/ngày

**Tổng tiêu thụ:** 37.5kWh/ngày
**Peak load:** 4.5kW (điều hòa + tủ lạnh + đèn)

## 2. Thiết Kế Hệ Thống

### Solar Panels:
- **Công suất cần thiết:** 37.5kWh / 4.5h (sunshine hours) = 8.3kW
- **Panel selection:** Monocrystalline 450W
- **Số lượng panels:** 8.3kW / 450W = 19 panels
- **Tổng công suất:** 19 x 450W = 8.55kW

### Inverter System:
- **Hybrid Inverter:** 10kW (120% của peak load)
- **Efficiency:** 97%
- **Features:** Grid-tie với battery backup

### Battery Storage:
- **Capacity needed:** 37.5kWh x 1.5 (backup) = 56.25kWh
- **LiFePO4 Battery:** 48V 100Ah modules
- **Number of modules:** 12 modules (57.6kWh total)
- **Backup time:** 1.5 ngày không có nắng

### Mounting & Accessories:
- **Roof mounting system** cho 19 panels
- **DC combiner box** với surge protection
- **Monitoring system** wifi-enabled
- **Safety disconnects** và breakers

## 3. Phân Tích Tài Chính

### Chi Phí Đầu Tư:
- **Solar panels:** 19 x $250 = $4,750
- **Inverter system:** $2,500
- **Battery system:** 12 x $800 = $9,600
- **Installation & accessories:** $3,150
- **Total system cost:** $20,000

### Tiết Kiệm Hàng Năm:
- **Electricity bill hiện tại:** 37.5kWh x 30 x $0.08 = $900/tháng
- **Solar generation:** 8.55kW x 4.5h x 30 = 1,154kWh/tháng
- **Grid import reduction:** 90% = $810 tiết kiệm/tháng
- **Annual savings:** $9,720

### ROI Analysis:
- **Payback period:** $20,000 / $9,720 = 2.06 năm
- **25-year savings:** $243,000 - $20,000 = $223,000
- **IRR:** 48.6%

## 4. Lợi Ích Môi Trường

### Carbon Footprint Reduction:
- **Annual CO2 reduction:** 13.9 tons
- **25-year CO2 reduction:** 347.5 tons
- **Equivalent:** Trồng 346 cây xanh

### Energy Independence:
- **Grid dependency:** Giảm từ 100% xuống 10%
- **Blackout protection:** 1.5 ngày backup power
- **Energy security:** Stable costs cho 25 năm

## 5. Implementation Timeline

### Phase 1: Planning (Tuần 1-2)
- Site survey và structural assessment
- Permit applications
- Utility interconnection request
- Equipment procurement

### Phase 2: Installation (Tuần 3-4)  
- Roof preparation và mounting
- Panel installation và DC wiring
- Inverter và battery installation
- Grid connection và commissioning

### Phase 3: Monitoring (Ongoing)
- System performance monitoring
- Maintenance scheduling
- ROI tracking
- Optimization recommendations`,
        requirements: [
          'Phân tích nhu cầu điện năng chi tiết',
          'Lựa chọn thiết bị phù hợp với budget',
          'Tính toán ROI và payback period',
          'Đánh giá tác động môi trường'
        ],
        hints: [
          'Sử dụng historical electricity bills để estimate consumption',
          'Consider peak vs average loads khi sizing inverter',
          'Factor in battery degradation và maintenance costs'
        ],
        expectedOutput: 'Complete system design với specifications, costs, và timeline implementation'
      }
    ],
    realWorldApplications: [
      'Hệ thống năng lượng mặt trời cho gia đình và doanh nghiệp',
      'Trang trại năng lượng gió offshore và onshore',
      'Micro-grid systems cho remote communities',
      'Energy storage integration với renewable sources',
      'Smart grid technology và demand response systems'
    ],
    resources: [
      {
        title: 'IRENA Global Energy Transformation',
        url: 'https://www.irena.org/publications',
        type: 'research',
        description: 'Báo cáo chuyển đổi năng lượng toàn cầu từ IRENA'
      },
      {
        title: 'Solar Power Calculator',
        url: 'https://www.nrel.gov/analysis/tech-lcoe-documentation.html',
        type: 'tool',
        description: 'NREL calculator để estimate solar system performance'
      }
    ],
    caseStudies: [
      {
        title: 'Sunseap largest floating solar farm ở Singapore',
        company: 'Sunseap Group',
        challenge: 'Limited land space cho large-scale solar installations trong dense urban environment',
        solution: 'Developed 60MW floating solar farm trên reservoir với innovative cooling technology',
        results: '60MW capacity, 15% higher efficiency due to water cooling, powers 16,000 homes',
        insights: [
          'Floating solar addresses land scarcity issues trong urban areas',
          'Water cooling increases panel efficiency by 10-15%',
          'Innovative engineering enables renewable energy trong challenging environments'
        ]
      }
    ]
  },
  {
    id: 'smart-city-iot',
    title: 'Bài 2: Smart City & IoT Solutions',
    description: 'Xây dựng hệ thống thành phố thông minh với IoT sensors, data analytics và AI để giải quyết các vấn đề đô thị.',
    videoUrl: 'https://www.youtube.com/watch?v=QXRLi_W3L8Q',
    imageUrl: 'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?w=400&h=400&fit=crop',
    difficulty: 'Nâng cao',
    duration: '120 phút',
    environmentalImpact: 'Giảm 20-30% tiêu thụ năng lượng đô thị, cải thiện chất lượng không khí',
    objectives: [
      'Thiết kế IoT sensor networks cho smart cities',
      'Phát triển real-time monitoring và analytics systems',
      'Implement AI-powered traffic optimization',
      'Xây dựng environmental monitoring solutions',
      'Tạo citizen engagement platforms'
    ],
    prerequisites: ['Kiến thức IoT cơ bản', 'Programming experience', 'Database fundamentals'],
    technologies: [
      'IoT Sensors (Air Quality, Noise, Traffic)',
      'LoRaWAN Networks',
      'Edge Computing',
      'Machine Learning',
      'Real-time Analytics',
      'Mobile Applications'
    ],
    exercises: [
      {
        title: 'Smart Traffic Management System',
        description: 'Thiết kế hệ thống quản lý giao thông thông minh cho một khu vực đô thị',
        difficulty: 'Nâng cao',
        solution: `# Smart Traffic Management System Design

## 1. System Architecture

### IoT Sensor Network:
- **Traffic cameras:** Computer vision để detect vehicles
- **Inductive loop sensors:** Vehicle counting và speed detection  
- **Air quality sensors:** Monitor emissions từ traffic
- **Noise level sensors:** Acoustic pollution monitoring
- **Weather sensors:** Impact on traffic conditions

### Communication Infrastructure:
- **5G/LTE:** High-bandwidth data transmission
- **LoRaWAN:** Low-power sensor networks
- **Edge computing nodes:** Local processing và decision making
- **Cloud platform:** Central analytics và management

## 2. AI Traffic Optimization

### Real-time Traffic Flow Analysis:
\`\`\`python
import numpy as np
import tensorflow as tf
from sklearn.ensemble import RandomForestRegressor

class TrafficFlowPredictor:
    def __init__(self):
        self.model = self.build_lstm_model()
        self.rf_model = RandomForestRegressor(n_estimators=100)
    
    def build_lstm_model(self):
        model = tf.keras.Sequential([
            tf.keras.layers.LSTM(64, return_sequences=True, input_shape=(24, 10)),
            tf.keras.layers.LSTM(32),
            tf.keras.layers.Dense(16, activation='relu'),
            tf.keras.layers.Dense(1, activation='linear')
        ])
        model.compile(optimizer='adam', loss='mse', metrics=['mae'])
        return model
    
    def predict_traffic_volume(self, historical_data, weather_data, events_data):
        # Combine multiple data sources
        features = np.concatenate([
            historical_data,  # Past 24 hours traffic
            weather_data,     # Current weather conditions
            events_data       # Scheduled events/incidents
        ], axis=1)
        
        # LSTM prediction for time series
        lstm_pred = self.model.predict(features)
        
        # Random Forest for complex pattern recognition
        rf_pred = self.rf_model.predict(features.reshape(features.shape[0], -1))
        
        # Ensemble prediction
        final_prediction = 0.7 * lstm_pred + 0.3 * rf_pred
        return final_prediction

class TrafficLightOptimizer:
    def __init__(self):
        self.q_learning_agent = self.build_q_agent()
    
    def optimize_signal_timing(self, traffic_data, pedestrian_data):
        # Current state: [N_vehicles, S_vehicles, E_vehicles, W_vehicles, pedestrians]
        state = np.array([
            traffic_data['north_count'],
            traffic_data['south_count'], 
            traffic_data['east_count'],
            traffic_data['west_count'],
            pedestrian_data['waiting_count']
        ])
        
        # Q-learning action selection
        action = self.q_learning_agent.get_action(state)
        
        # Actions: [green_time_NS, green_time_EW, pedestrian_phase]
        signal_timing = {
            'north_south_green': max(30, min(120, action[0])),
            'east_west_green': max(30, min(120, action[1])),
            'pedestrian_phase': action[2] > 0.5,
            'adaptive_timing': True
        }
        
        return signal_timing
\`\`\`

### Dynamic Route Optimization:
\`\`\`python
class DynamicRouting:
    def __init__(self, road_network):
        self.network = road_network
        self.traffic_conditions = {}
    
    def calculate_optimal_route(self, origin, destination, current_time):
        # Consider multiple factors for routing
        factors = {
            'distance': 0.3,
            'current_traffic': 0.4,
            'predicted_traffic': 0.2,
            'road_quality': 0.1
        }
        
        # Dijkstra with dynamic weights
        route = self.dijkstra_dynamic(origin, destination, factors)
        
        # Alternative routes for load balancing
        alternative_routes = self.generate_alternatives(origin, destination, 3)
        
        return {
            'primary_route': route,
            'alternatives': alternative_routes,
            'estimated_time': self.calculate_travel_time(route),
            'fuel_efficiency': self.calculate_fuel_usage(route),
            'environmental_impact': self.calculate_emissions(route)
        }
\`\`\`

## 3. Environmental Impact Monitoring

### Air Quality Integration:
- **PM2.5/PM10 sensors:** Particulate matter từ vehicle emissions
- **NO2/CO sensors:** Gas pollutants from combustion
- **Ozone monitoring:** Secondary pollutant formation
- **Real-time AQI calculation:** Public health alerts

### Smart Interventions:
- **Dynamic pricing:** Congestion charges during peak pollution
- **Low emission zones:** Restrict access cho high-polluting vehicles
- **Public transport optimization:** Increase frequency during high pollution
- **Emergency protocols:** Traffic restrictions during air quality alerts

## 4. Implementation Strategy

### Phase 1: Pilot Deployment (3 tháng)
- **Location:** 2km x 2km downtown area
- **Infrastructure:** 50 sensors, 10 edge nodes, 1 control center
- **Features:** Basic traffic monitoring và adaptive signals
- **Budget:** $500,000

### Phase 2: City-wide Expansion (12 tháng)
- **Coverage:** 50km x 50km metro area
- **Infrastructure:** 2,000 sensors, 200 edge nodes, integrated command center
- **Features:** Full AI optimization, environmental monitoring, citizen app
- **Budget:** $15,000,000

### Phase 3: Regional Integration (24 tháng)
- **Coverage:** Multi-city coordination
- **Features:** Inter-city traffic coordination, regional air quality management
- **Advanced AI:** Federated learning across cities
- **Budget:** $50,000,000

## 5. Expected Outcomes

### Traffic Efficiency:
- **Travel time reduction:** 25-30%
- **Fuel consumption:** 20% decrease
- **Accident reduction:** 40% fewer traffic incidents
- **Emergency response:** 50% faster ambulance/fire response

### Environmental Benefits:
- **CO2 emissions:** 35% reduction từ optimized traffic flow
- **Air quality improvement:** 25% better AQI scores
- **Noise pollution:** 20% reduction trong urban areas
- **Energy efficiency:** 30% less energy for traffic infrastructure

### Economic Impact:
- **Cost savings:** $10M annually từ reduced congestion
- **Health benefits:** $5M saved từ better air quality
- **Productivity gains:** $20M từ reduced commute times
- **Tourism boost:** 15% increase từ better city experience`,
        requirements: [
          'Design comprehensive IoT sensor network',
          'Implement AI-powered traffic optimization algorithms',
          'Include environmental monitoring capabilities',
          'Plan phased implementation strategy'
        ],
        hints: [
          'Consider interoperability between different sensor types',
          'Plan for data privacy và security from the start',
          'Include citizen engagement features trong system design'
        ],
        expectedOutput: 'Complete smart city system architecture với technical specifications và implementation roadmap'
      }
    ],
    realWorldApplications: [
      'Smart traffic management systems cho major cities',
      'Environmental monitoring networks',
      'Waste management optimization',
      'Smart parking solutions',
      'Emergency response coordination systems'
    ],
    resources: [
      {
        title: 'Smart Cities Council',
        url: 'https://smartcitiescouncil.com',
        type: 'article',
        description: 'Best practices và case studies cho smart city implementations'
      }
    ],
    caseStudies: [
      {
        title: 'Singapore Smart Nation initiative',
        company: 'Singapore Government',
        challenge: 'Transform entire nation into smart city với limited land và high population density',
        solution: 'Comprehensive IoT deployment, AI-powered services, và citizen-centric digital platforms',
        results: '25% reduction in traffic congestion, 30% improvement in air quality, 95% citizen satisfaction',
        insights: [
          'Comprehensive government support essential cho large-scale smart city success',
          'Citizen engagement và privacy protection crucial cho acceptance',
          'Interoperable systems enable synergies across different city functions'
        ]
      }
    ]
  }
];
