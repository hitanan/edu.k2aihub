import { EducationalGame } from './educationalGames';

export interface GreenTechLesson {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  duration: number;
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
  relatedGames?: EducationalGame[];
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
    title: 'Cơ Bản về Năng Lượng Tái Tạo',
    description:
      'Tìm hiểu về năng lượng mặt trời, gió, nước và các công nghệ xanh hiện đại. Học cách tính toán hiệu quả và ROI của hệ thống năng lượng tái tạo.',
    videoUrl: 'https://www.youtube.com/watch?v=1kUE0BZtTRc',
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=400&fit=crop',
    difficulty: 'Cơ bản',
    duration: 90,
    environmentalImpact: 'Giảm 50-80% khí thải CO2 so với năng lượng hóa thạch',
    objectives: [
      'Hiểu nguyên lý hoạt động của năng lượng mặt trời và gió',
      'Tính toán công suất và hiệu quả hệ thống năng lượng tái tạo',
      'Phân tích chi phí đầu tư và thời gian hoàn vốn',
      'Thiết kế hệ thống năng lượng cho gia đình',
      'Đánh giá tác động môi trường và lợi ích kinh tế',
    ],
    prerequisites: ['Kiến thức vật lý cơ bản', 'Hiểu về điện năng'],
    technologies: [
      'Tấm pin mặt trời (Monocrystalline, Polycrystalline)',
      'Tuabin gió',
      'Hệ thống lưu trữ pin',
      'Công nghệ lưới điện thông minh',
      'Hệ thống quản lý năng lượng',
      'Thủy điện',
    ],
    exercises: [
      {
        title: 'Thiết kế hệ thống năng lượng mặt trời cho gia đình',
        description:
          'Tính toán và thiết kế một hệ thống năng lượng mặt trời hoàn chỉnh cho một gia đình 4 người ở TP.HCM',
        difficulty: 'Trung bình',
        solution: `# Thiết kế Hệ Thống Năng Lượng Mặt Trời - Gia Đình 4 Người

## 1. Phân Tích Nhu Cầu Điện Năng

### Thiết Bị Điện Chính:
- **Điều hòa:** 2 máy x 9000 BTU = 3.5kW x 8h = 28kWh/ngày
- **Tủ lạnh:** 200W x 24h = 4.8kWh/ngày  
- **Đèn LED:** 15 bóng x 10W x 6h = 0.9kWh/ngày
- **TV + Điện tử:** 300W x 6h = 1.8kWh/ngày
- **Máy giặt:** 800W x 1h = 0.8kWh/ngày
- **Khác:** 1.2kWh/ngày

**Tổng tiêu thụ:** 37.5kWh/ngày
**Tải đỉnh:** 4.5kW (điều hòa + tủ lạnh + đèn)

## 2. Thiết Kế Hệ Thống

### Tấm Pin Mặt Trời:
- **Công suất cần thiết:** 37.5kWh / 4.5h (giờ nắng) = 8.3kW
- **Lựa chọn tấm pin:** Monocrystalline 450W
- **Số lượng tấm pin:** 8.3kW / 450W = 19 tấm
- **Tổng công suất:** 19 x 450W = 8.55kW

### Hệ Thống Biến Tần:
- **Biến tần Hybrid:** 10kW (120% tải đỉnh)
- **Hiệu suất:** 97%
- **Tính năng:** Hòa lưới có dự phòng pin

### Lưu Trữ Pin:
- **Dung lượng cần thiết:** 37.5kWh x 1.5 (dự phòng) = 56.25kWh
- **Pin LiFePO4:** Mô-đun 48V 100Ah
- **Số lượng mô-đun:** 12 mô-đun (tổng 57.6kWh)
- **Thời gian dự phòng:** 1.5 ngày không có nắng

### Phụ Kiện & Lắp Đặt:
- **Hệ thống khung đỡ mái** cho 19 tấm pin
- **Hộp nối DC** có chống sét lan truyền
- **Hệ thống giám sát** qua wifi
- **Cầu dao an toàn** và aptomat

## 3. Phân Tích Tài Chính

### Chi Phí Đầu Tư:
- **Tấm pin mặt trời:** 19 x $250 = $4,750
- **Hệ thống biến tần:** $2,500
- **Hệ thống pin:** 12 x $800 = $9,600
- **Lắp đặt & phụ kiện:** $3,150
- **Tổng chi phí hệ thống:** $20,000

### Tiết Kiệm Hàng Năm:
- **Hóa đơn điện hiện tại:** 37.5kWh x 30 x $0.08 = $900/tháng
- **Sản lượng điện mặt trời:** 8.55kW x 4.5h x 30 = 1,154kWh/tháng
- **Giảm nhập lưới:** 90% = $810 tiết kiệm/tháng
- **Tiết kiệm hàng năm:** $9,720

### Phân Tích ROI:
- **Thời gian hoàn vốn:** $20,000 / $9,720 = 2.06 năm
- **Tiết kiệm trong 25 năm:** $243,000 - $20,000 = $223,000
- **Tỷ suất hoàn vốn nội bộ (IRR):** 48.6%

## 4. Lợi Ích Môi Trường

### Giảm Dấu Chân Carbon:
- **Giảm CO2 hàng năm:** 13.9 tấn
- **Giảm CO2 trong 25 năm:** 347.5 tấn
- **Tương đương:** Trồng 346 cây xanh

### Độc Lập Năng Lượng:
- **Phụ thuộc lưới điện:** Giảm từ 100% xuống 10%
- **Bảo vệ khi mất điện:** 1.5 ngày điện dự phòng
- **An ninh năng lượng:** Chi phí ổn định trong 25 năm

## 5. Lịch Trình Triển Khai

### Giai đoạn 1: Lập kế hoạch (Tuần 1-2)
- Khảo sát địa điểm và đánh giá kết cấu
- Xin giấy phép
- Yêu cầu kết nối lưới điện
- Mua sắm thiết bị

### Giai đoạn 2: Lắp đặt (Tuần 3-4)  
- Chuẩn bị và lắp đặt khung đỡ mái
- Lắp đặt tấm pin và đi dây DC
- Lắp đặt biến tần và pin
- Kết nối lưới và vận hành thử

### Giai đoạn 3: Giám sát (Liên tục)
- Giám sát hiệu suất hệ thống
- Lên lịch bảo trì
- Theo dõi ROI
- Đề xuất tối ưu hóa`,
        requirements: [
          'Phân tích chi tiết nhu cầu điện năng',
          'Lựa chọn thiết bị phù hợp với ngân sách',
          'Tính toán ROI và thời gian hoàn vốn',
          'Đánh giá tác động môi trường',
        ],
        hints: [
          'Sử dụng hóa đơn tiền điện cũ để ước tính mức tiêu thụ',
          'Xem xét tải đỉnh và tải trung bình khi chọn kích thước biến tần',
          'Tính đến sự suy giảm hiệu suất của pin và chi phí bảo trì',
        ],
        expectedOutput: 'Thiết kế hệ thống hoàn chỉnh với thông số kỹ thuật, chi phí và lịch trình triển khai',
      },
    ],
    realWorldApplications: [
      'Hệ thống năng lượng mặt trời cho gia đình và doanh nghiệp',
      'Trang trại năng lượng gió ngoài khơi và trên bờ',
      'Hệ thống lưới điện siêu nhỏ cho các cộng đồng vùng sâu vùng xa',
      'Tích hợp lưu trữ năng lượng với các nguồn tái tạo',
      'Công nghệ lưới điện thông minh và hệ thống phản ứng theo nhu cầu',
    ],
    resources: [
      {
        title: 'Chuyển đổi Năng lượng Toàn cầu của IRENA',
        url: 'https://www.irena.org/publications',
        type: 'research',
        description: 'Báo cáo về chuyển đổi năng lượng toàn cầu từ IRENA',
      },
      {
        title: 'Công cụ Tính toán Năng lượng Mặt trời',
        url: 'https://www.nrel.gov/analysis/tech-lcoe-documentation.html',
        type: 'tool',
        description: 'Công cụ tính toán của NREL để ước tính hiệu suất hệ thống năng lượng mặt trời',
      },
    ],
    caseStudies: [
      {
        title: 'Trang trại năng lượng mặt trời nổi lớn nhất của Sunseap tại Singapore',
        company: 'Sunseap Group',
        challenge:
          'Không gian đất hạn chế cho các công trình lắp đặt năng lượng mặt trời quy mô lớn trong môi trường đô thị dày đặc',
        solution: 'Phát triển trang trại năng lượng mặt trời nổi 60MW trên hồ chứa với công nghệ làm mát sáng tạo',
        results: 'Công suất 60MW, hiệu quả cao hơn 15% nhờ làm mát bằng nước, cung cấp điện cho 16,000 hộ gia đình',
        insights: [
          'Năng lượng mặt trời nổi giải quyết vấn đề khan hiếm đất đai ở các khu vực đô thị',
          'Làm mát bằng nước tăng hiệu quả tấm pin từ 10-15%',
          'Kỹ thuật sáng tạo cho phép năng lượng tái tạo trong các môi trường đầy thách thức',
        ],
      },
    ],
    relatedGames: [
      {
        id: 'renewable-energy-manager',
        title: 'Quản Lý Năng Lượng Tái Tạo',
        description: 'Xây dựng và quản lý hệ thống năng lượng sạch bền vững',
        category: 'simulation',
        difficulty: 'Trung bình',
        estimatedTime: '25-35 phút',
        skills: ['Công nghệ xanh', 'Quản lý tài nguyên', 'Bền vững', 'Môi trường'],
        moduleType: 'green-technology',
        isInternal: true,
        points: 120,
        icon: '🌱',
        color: 'from-green-500 to-teal-500',
      },
      {
        id: 'climate-modeling',
        title: 'Mô hình khí hậu',
        description: 'Mô phỏng tác động của biến đổi khí hậu',
        category: 'simulation',
        difficulty: 'Trung bình',
        estimatedTime: '15-20 phút',
        skills: ['Khí hậu', 'Môi trường', 'Mô hình hóa'],
        moduleType: 'environment',
        isInternal: true,
        points: 90,
        icon: '🌍',
        color: 'from-green-500 to-emerald-500',
      },
    ],
  },
  {
    id: 'smart-city-iot-solutions',
    title: 'Giải pháp IoT cho Thành phố Thông minh',
    description:
      'Xây dựng hệ thống thành phố thông minh với cảm biến IoT, phân tích dữ liệu và AI để giải quyết các vấn đề đô thị.',
    videoUrl: 'https://www.youtube.com/watch?v=pG0B3_XkPGA',
    imageUrl: 'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?w=400&h=400&fit=crop',
    difficulty: 'Nâng cao',
    duration: 120,
    environmentalImpact: 'Giảm 20-30% tiêu thụ năng lượng đô thị, cải thiện chất lượng không khí',
    objectives: [
      'Thiết kế mạng lưới cảm biến IoT cho các thành phố thông minh',
      'Phát triển hệ thống giám sát và phân tích thời gian thực',
      'Triển khai tối ưu hóa giao thông bằng AI',
      'Xây dựng các giải pháp giám sát môi trường',
      'Tạo nền tảng tương tác công dân',
    ],
    prerequisites: ['Kiến thức cơ bản về IoT', 'Kinh nghiệm lập trình', 'Kiến thức cơ bản về cơ sở dữ liệu'],
    technologies: [
      'Cảm biến IoT (Chất lượng không khí, Tiếng ồn, Giao thông)',
      'Mạng LoRaWAN',
      'Điện toán biên',
      'Học máy',
      'Phân tích thời gian thực',
      'Ứng dụng di động',
    ],
    exercises: [
      {
        title: 'Hệ thống Quản lý Giao thông Thông minh',
        description: 'Thiết kế một hệ thống quản lý giao thông thông minh cho một khu vực đô thị',
        difficulty: 'Nâng cao',
        solution: `# Thiết kế Hệ thống Quản lý Giao thông Thông minh

## 1. Kiến trúc Hệ thống

### Mạng lưới Cảm biến IoT:
- **Camera giao thông:** Thị giác máy tính để phát hiện phương tiện
- **Cảm biến vòng từ:** Đếm xe và phát hiện tốc độ  
- **Cảm biến chất lượng không khí:** Giám sát khí thải từ giao thông
- **Cảm biến mức độ tiếng ồn:** Giám sát ô nhiễm tiếng ồn
- **Cảm biến thời tiết:** Tác động đến điều kiện giao thông

### Cơ sở hạ tầng Truyền thông:
- **5G/LTE:** Truyền dữ liệu băng thông cao
- **LoRaWAN:** Mạng cảm biến năng lượng thấp
- **Nút điện toán biên:** Xử lý và ra quyết định tại chỗ
- **Nền tảng đám mây:** Phân tích và quản lý trung tâm

## 2. Tối ưu hóa Giao thông bằng AI

### Phân tích Luồng Giao thông Thời gian thực:
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
        # Kết hợp nhiều nguồn dữ liệu
        features = np.concatenate([
            historical_data,  # Giao thông 24 giờ qua
            weather_data,     # Điều kiện thời tiết hiện tại
            events_data       # Các sự kiện/sự cố đã lên lịch
        ], axis=1)
        
        # Dự đoán LSTM cho chuỗi thời gian
        lstm_pred = self.model.predict(features)
        
        # Random Forest để nhận dạng mẫu phức tạp
        rf_pred = self.rf_model.predict(features.reshape(features.shape[0], -1))
        
        # Dự đoán kết hợp
        final_prediction = 0.7 * lstm_pred + 0.3 * rf_pred
        return final_prediction

class TrafficLightOptimizer:
    def __init__(self):
        self.q_learning_agent = self.build_q_agent()
    
    def optimize_signal_timing(self, traffic_data, pedestrian_data):
        # Trạng thái hiện tại: [số xe Bắc, Nam, Đông, Tây, người đi bộ]
        state = np.array([
            traffic_data['north_count'],
            traffic_data['south_count'], 
            traffic_data['east_count'],
            traffic_data['west_count'],
            pedestrian_data['waiting_count']
        ])
        
        # Lựa chọn hành động Q-learning
        action = self.q_learning_agent.get_action(state)
        
        # Hành động: [thời gian xanh B-N, Đ-T, pha cho người đi bộ]
        signal_timing = {
            'north_south_green': max(30, min(120, action[0])),
            'east_west_green': max(30, min(120, action[1])),
            'pedestrian_phase': action[2] > 0.5,
            'adaptive_timing': True
        }
        
        return signal_timing
\`\`\`

### Tối ưu hóa Lộ trình Động:
\`\`\`python
class DynamicRouting:
    def __init__(self, road_network):
        self.network = road_network
        self.traffic_conditions = {}
    
    def calculate_optimal_route(self, origin, destination, current_time):
        # Xem xét nhiều yếu tố để định tuyến
        factors = {
            'distance': 0.3,
            'current_traffic': 0.4,
            'predicted_traffic': 0.2,
            'road_quality': 0.1
        }
        
        # Dijkstra với trọng số động
        route = self.dijkstra_dynamic(origin, destination, factors)
        
        # Các tuyến đường thay thế để cân bằng tải
        alternative_routes = self.generate_alternatives(origin, destination, 3)
        
        return {
            'primary_route': route,
            'alternatives': alternative_routes,
            'estimated_time': self.calculate_travel_time(route),
            'fuel_efficiency': self.calculate_fuel_usage(route),
            'environmental_impact': self.calculate_emissions(route)
        }
\`\`\`

## 3. Giám sát Tác động Môi trường

### Tích hợp Chất lượng Không khí:
- **Cảm biến PM2.5/PM10:** Bụi mịn từ khí thải xe
- **Cảm biến NO2/CO:** Các chất ô nhiễm khí từ quá trình đốt cháy
- **Giám sát Ozone:** Sự hình thành chất ô nhiễm thứ cấp
- **Tính toán AQI thời gian thực:** Cảnh báo sức khỏe cộng đồng

### Các Can thiệp Thông minh:
- **Định giá động:** Phí tắc nghẽn trong giờ ô nhiễm cao điểm
- **Khu vực phát thải thấp:** Hạn chế quyền truy cập đối với các phương tiện gây ô nhiễm cao
- **Tối ưu hóa giao thông công cộng:** Tăng tần suất trong thời gian ô nhiễm cao
- **Giao thức khẩn cấp:** Hạn chế giao thông trong các cảnh báo chất lượng không khí

## 4. Chiến lược Triển khai

### Giai đoạn 1: Triển khai Thí điểm (3 tháng)
- **Vị trí:** Khu vực trung tâm 2km x 2km
- **Cơ sở hạ tầng:** 50 cảm biến, 10 nút biên, 1 trung tâm điều khiển
- **Tính năng:** Giám sát giao thông cơ bản và tín hiệu thích ứng
- **Ngân sách:** $500,000

### Giai đoạn 2: Mở rộng Toàn thành phố (12 tháng)
- **Phạm vi:** Khu vực đô thị 50km x 50km
- **Cơ sở hạ tầng:** 2,000 cảm biến, 200 nút biên, trung tâm chỉ huy tích hợp
- **Tính năng:** Tối ưu hóa AI đầy đủ, giám sát môi trường, ứng dụng công dân
- **Ngân sách:** $15,000,000

### Giai đoạn 3: Tích hợp Khu vực (24 tháng)
- **Phạm vi:** Điều phối đa thành phố
- **Tính năng:** Điều phối giao thông liên tỉnh, quản lý chất lượng không khí khu vực
- **AI nâng cao:** Học tập liên kết giữa các thành phố
- **Ngân sách:** $50,000,000

## 5. Kết quả Dự kiến

### Hiệu quả Giao thông:
- **Giảm thời gian di chuyển:** 25-30%
- **Tiêu thụ nhiên liệu:** Giảm 20%
- **Giảm tai nạn:** Ít hơn 40% sự cố giao thông
- **Phản ứng khẩn cấp:** Phản ứng của xe cứu thương/cứu hỏa nhanh hơn 50%

### Lợi ích Môi trường:
- **Khí thải CO2:** Giảm 35% từ luồng giao thông được tối ưu hóa
- **Cải thiện chất lượng không khí:** Điểm AQI tốt hơn 25%
- **Ô nhiễm tiếng ồn:** Giảm 20% ở các khu vực đô thị
- **Hiệu quả năng lượng:** Ít hơn 30% năng lượng cho cơ sở hạ tầng giao thông

### Tác động Kinh tế:
- **Tiết kiệm chi phí:** 10 triệu USD hàng năm từ việc giảm tắc nghẽn
- **Lợi ích sức khỏe:** Tiết kiệm 5 triệu USD từ chất lượng không khí tốt hơn
- **Tăng năng suất:** 20 triệu USD từ việc giảm thời gian đi lại
- **Thúc đẩy du lịch:** Tăng 15% từ trải nghiệm thành phố tốt hơn`,
        requirements: [
          'Thiết kế mạng lưới cảm biến IoT toàn diện',
          'Triển khai các thuật toán tối ưu hóa giao thông bằng AI',
          'Bao gồm khả năng giám sát môi trường',
          'Lập kế hoạch chiến lược triển khai theo giai đoạn',
        ],
        hints: [
          'Xem xét khả năng tương tác giữa các loại cảm biến khác nhau',
          'Lập kế hoạch cho quyền riêng tư và bảo mật dữ liệu ngay từ đầu',
          'Bao gồm các tính năng tương tác công dân trong thiết kế hệ thống',
        ],
        expectedOutput:
          'Kiến trúc hệ thống thành phố thông minh hoàn chỉnh với các thông số kỹ thuật và lộ trình triển khai',
      },
    ],
    realWorldApplications: [
      'Hệ thống quản lý giao thông thông minh cho các thành phố lớn',
      'Mạng lưới giám sát môi trường',
      'Tối ưu hóa quản lý chất thải',
      'Giải pháp đỗ xe thông minh',
      'Hệ thống điều phối ứng phó khẩn cấp',
    ],
    resources: [
      {
        title: 'Hội đồng Thành phố Thông minh',
        url: 'https://smartcitiescouncil.com',
        type: 'article',
        description: 'Các thực tiễn tốt nhất và nghiên cứu điển hình cho việc triển khai thành phố thông minh',
      },
    ],
    caseStudies: [
      {
        title: 'Sáng kiến Quốc gia Thông minh của Singapore',
        company: 'Chính phủ Singapore',
        challenge: 'Biến toàn bộ quốc gia thành một thành phố thông minh với đất đai hạn chế và mật độ dân số cao',
        solution:
          'Triển khai IoT toàn diện, các dịch vụ được hỗ trợ bởi AI và các nền tảng kỹ thuật số lấy công dân làm trung tâm',
        results: 'Giảm 25% tắc nghẽn giao thông, cải thiện 30% chất lượng không khí, 95% sự hài lòng của công dân',
        insights: [
          'Sự hỗ trợ toàn diện của chính phủ là điều cần thiết cho sự thành công của thành phố thông minh quy mô lớn',
          'Sự tham gia của công dân và bảo vệ quyền riêng tư là rất quan trọng để được chấp nhận',
          'Các hệ thống có khả năng tương tác cho phép tạo ra sức mạnh tổng hợp giữa các chức năng khác nhau của thành phố',
        ],
      },
    ],
    relatedGames: [
      {
        id: 'iot-smart-city-builder-3d',
        title: 'IoT Smart City Builder 3D',
        description:
          'Build comprehensive smart city infrastructure với IoT systems, energy management, và citizen services trong 3D city environment',
        category: '3D',
        difficulty: 'Nâng cao',
        estimatedTime: '60-75 phút',
        skills: ['Smart City Planning', 'IoT Integration', 'Urban Technology', 'Energy Management', '3D City Design'],
        moduleType: 'iot',
        isInternal: true,
        points: 250,
        icon: '🏙️',
        color: 'from-blue-500 to-purple-500',
      },
      {
        id: 'climate-data-analyst',
        title: 'Chuyên Gia Phân Tích Dữ Liệu Khí Hậu',
        description: 'Phân tích dữ liệu môi trường và dự báo biến đổi khí hậu',
        category: 'simulation',
        difficulty: 'Nâng cao',
        estimatedTime: '35-40 phút',
        skills: ['Dữ liệu Môi trường', 'Phân tích', 'Dự báo Khí hậu'],
        moduleType: 'environmental-data-science',
        isInternal: true,
        points: 150,
        icon: '🌡️',
        color: 'from-green-600 to-teal-600',
      },
    ],
  },
];
