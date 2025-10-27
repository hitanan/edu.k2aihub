'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Trophy, Home, Clock, Camera, MapPin, Eye, Users, Star } from 'lucide-react';

interface GameProps {
  onComplete: (_: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface PropertyType {
  id: string;
  name: string;
  category: 'residential' | 'commercial' | 'luxury' | 'historical' | 'industrial';
  size: number;
  rooms: number;
  complexity: number;
  market_appeal: number;
  tech_requirements: number;
  budget_multiplier: number;
  description: string;
}

interface TourTechnology {
  id: string;
  name: string;
  type: '360_camera' | 'vr_equipment' | 'drone' | 'ai_assistant' | 'ar_features' | 'interactive';
  immersion_level: number;
  production_quality: number;
  user_engagement: number;
  cost: number;
  setup_time: number;
  tech_complexity: number;
  description: string;
}

interface TourFeature {
  id: string;
  name: string;
  category: 'visual' | 'interactive' | 'information' | 'social' | 'analytics';
  engagement_boost: number;
  production_complexity: number;
  market_impact: number;
  cost: number;
  required_tech: string[];
  description: string;
}

const PROPERTY_TYPES: PropertyType[] = [
  {
    id: 'apartment-modern',
    name: 'Căn hộ chung cư hiện đại',
    category: 'residential',
    size: 85,
    rooms: 3,
    complexity: 30,
    market_appeal: 80,
    tech_requirements: 40,
    budget_multiplier: 1.0,
    description: 'Căn hộ tiêu chuẩn trong khu chung cư cao cấp',
  },
  {
    id: 'villa-luxury',
    name: 'Biệt thự cao cấp',
    category: 'luxury',
    size: 350,
    rooms: 8,
    complexity: 85,
    market_appeal: 95,
    tech_requirements: 80,
    budget_multiplier: 2.5,
    description: 'Biệt thự sang trọng với sân vườn và tiện ích đầy đủ',
  },
  {
    id: 'office-building',
    name: 'Tòa nhà văn phòng',
    category: 'commercial',
    size: 1200,
    rooms: 20,
    complexity: 70,
    market_appeal: 75,
    tech_requirements: 90,
    budget_multiplier: 1.8,
    description: 'Tòa nhà văn phòng hiện đại cho doanh nghiệp',
  },
  {
    id: 'historic-mansion',
    name: 'Dinh thự cổ',
    category: 'historical',
    size: 500,
    rooms: 12,
    complexity: 95,
    market_appeal: 90,
    tech_requirements: 60,
    budget_multiplier: 2.0,
    description: 'Dinh thự cổ kính với giá trị lịch sử cao',
  },
  {
    id: 'retail-center',
    name: 'Trung tâm thương mại',
    category: 'commercial',
    size: 2000,
    rooms: 50,
    complexity: 80,
    market_appeal: 85,
    tech_requirements: 95,
    budget_multiplier: 2.2,
    description: 'Trung tâm mua sắm với nhiều cửa hàng và dịch vụ',
  },
  {
    id: 'warehouse-modern',
    name: 'Nhà kho thông minh',
    category: 'industrial',
    size: 800,
    rooms: 5,
    complexity: 50,
    market_appeal: 60,
    tech_requirements: 70,
    budget_multiplier: 1.3,
    description: 'Kho bãi hiện đại với hệ thống tự động hóa',
  },
];

const TOUR_TECHNOLOGIES: TourTechnology[] = [
  {
    id: '360-camera-pro',
    name: 'Camera 360° chuyên nghiệp',
    type: '360_camera',
    immersion_level: 85,
    production_quality: 90,
    user_engagement: 75,
    cost: 40,
    setup_time: 30,
    tech_complexity: 50,
    description: 'Camera 360° chất lượng 4K với ổn định hình ảnh',
  },
  {
    id: 'vr-headset-kit',
    name: 'Bộ kit VR cao cấp',
    type: 'vr_equipment',
    immersion_level: 95,
    production_quality: 85,
    user_engagement: 95,
    cost: 60,
    setup_time: 45,
    tech_complexity: 80,
    description: 'Trải nghiệm VR hoàn toàn với tương tác thực tế',
  },
  {
    id: 'drone-professional',
    name: 'Drone quay phim chuyên nghiệp',
    type: 'drone',
    immersion_level: 70,
    production_quality: 95,
    user_engagement: 80,
    cost: 50,
    setup_time: 40,
    tech_complexity: 70,
    description: 'Drone 4K với gimbal ổn định cho góc nhìn từ trên cao',
  },
  {
    id: 'ai-tour-guide',
    name: 'Hướng dẫn viên AI',
    type: 'ai_assistant',
    immersion_level: 75,
    production_quality: 80,
    user_engagement: 90,
    cost: 35,
    setup_time: 25,
    tech_complexity: 85,
    description: 'AI chatbot thông minh giải đáp thắc mắc và hướng dẫn',
  },
  {
    id: 'ar-furniture',
    name: 'AR nội thất thông minh',
    type: 'ar_features',
    immersion_level: 85,
    production_quality: 75,
    user_engagement: 85,
    cost: 45,
    setup_time: 35,
    tech_complexity: 75,
    description: 'Thử nghiệm nội thất thực tế ảo tăng cường',
  },
  {
    id: 'interactive-hotspot',
    name: 'Điểm tương tác thông minh',
    type: 'interactive',
    immersion_level: 70,
    production_quality: 70,
    user_engagement: 80,
    cost: 25,
    setup_time: 20,
    tech_complexity: 40,
    description: 'Các điểm click tương tác với thông tin chi tiết',
  },
  {
    id: 'live-streaming',
    name: 'Phát trực tiếp chất lượng cao',
    type: 'interactive',
    immersion_level: 60,
    production_quality: 85,
    user_engagement: 95,
    cost: 30,
    setup_time: 20,
    tech_complexity: 60,
    description: 'Tour trực tiếp với tương tác realtime',
  },
];

const TOUR_FEATURES: TourFeature[] = [
  {
    id: 'virtual-staging',
    name: 'Dàn dựng ảo',
    category: 'visual',
    engagement_boost: 85,
    production_complexity: 70,
    market_impact: 90,
    cost: 50,
    required_tech: ['360-camera-pro', 'ar-furniture'],
    description: 'Trang trí nội thất ảo để tăng tính hấp dẫn',
  },
  {
    id: 'multi-language',
    name: 'Đa ngôn ngữ',
    category: 'information',
    engagement_boost: 70,
    production_complexity: 40,
    market_impact: 80,
    cost: 25,
    required_tech: ['ai-tour-guide'],
    description: 'Hỗ trợ nhiều ngôn ngữ cho khách quốc tế',
  },
  {
    id: 'virtual-measurement',
    name: 'Đo đạc ảo',
    category: 'interactive',
    engagement_boost: 75,
    production_complexity: 60,
    market_impact: 85,
    cost: 35,
    required_tech: ['360-camera-pro', 'ar-furniture'],
    description: 'Đo kích thước phòng và vật dụng trực tiếp trong tour',
  },
  {
    id: 'group-tour',
    name: 'Tour nhóm trực tuyến',
    category: 'social',
    engagement_boost: 90,
    production_complexity: 80,
    market_impact: 85,
    cost: 40,
    required_tech: ['vr-headset-kit', 'live-streaming'],
    description: 'Nhiều người cùng tham gia tour và tương tác',
  },
  {
    id: 'behavior-analytics',
    name: 'Phân tích hành vi',
    category: 'analytics',
    engagement_boost: 60,
    production_complexity: 70,
    market_impact: 95,
    cost: 45,
    required_tech: ['ai-tour-guide', 'interactive-hotspot'],
    description: 'Theo dõi và phân tích hành vi khách hàng',
  },
  {
    id: 'weather-simulation',
    name: 'Mô phỏng thời tiết',
    category: 'visual',
    engagement_boost: 80,
    production_complexity: 85,
    market_impact: 75,
    cost: 55,
    required_tech: ['vr-headset-kit', '360-camera-pro'],
    description: 'Xem bất động sản trong các điều kiện thời tiết khác nhau',
  },
  {
    id: 'price-calculator',
    name: 'Máy tính giá thông minh',
    category: 'information',
    engagement_boost: 85,
    production_complexity: 50,
    market_impact: 90,
    cost: 30,
    required_tech: ['ai-tour-guide'],
    description: 'Tính toán giá và chi phí theo từng tùy chọn',
  },
];

const VirtualPropertyTourGame: React.FC<GameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [gamePhase, setGamePhase] = useState<
    'briefing' | 'property-selection' | 'technology-selection' | 'feature-selection' | 'production' | 'results'
  >('briefing');
  const [selectedProperty, setSelectedProperty] = useState<PropertyType | null>(null);
  const [selectedTechnologies, setSelectedTechnologies] = useState<TourTechnology[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<TourFeature[]>([]);
  const [budget] = useState(400);
  const [productionProgress, setProductionProgress] = useState(0);

  // Tour quality metrics
  const [immersionLevel, setImmersionLevel] = useState(0);
  const [productionQuality, setProductionQuality] = useState(0);
  const [userEngagement, setUserEngagement] = useState(0);

  const calculateTotalCost = useCallback(() => {
    if (!selectedProperty) return 0;

    const techCost = selectedTechnologies.reduce((sum, t) => sum + t.cost, 0);
    const featureCost = selectedFeatures.reduce((sum, f) => sum + f.cost, 0);
    return Math.round((techCost + featureCost) * selectedProperty.budget_multiplier);
  }, [selectedProperty, selectedTechnologies, selectedFeatures]);

  const canAfford = calculateTotalCost() <= budget;

  const calculateTourQuality = useCallback(() => {
    if (!selectedProperty || selectedTechnologies.length === 0) {
      return { immersion: 0, quality: 0, engagement: 0 };
    }

    // Immersion level
    const techImmersion =
      selectedTechnologies.reduce((sum, t) => sum + t.immersion_level, 0) / selectedTechnologies.length;
    const propertyComplexity = selectedProperty.complexity;
    const featureImmersion =
      selectedFeatures.reduce((sum, f) => sum + f.engagement_boost, 0) / Math.max(selectedFeatures.length, 1);
    const immersionScore = Math.round(techImmersion * 0.6 + featureImmersion * 0.3 + (100 - propertyComplexity) * 0.1);

    // Production quality
    const techQuality =
      selectedTechnologies.reduce((sum, t) => sum + t.production_quality, 0) / selectedTechnologies.length;
    const featureComplexity =
      selectedFeatures.reduce((sum, f) => sum + (100 - f.production_complexity), 0) /
      Math.max(selectedFeatures.length, 1);
    const propertyAppeal = selectedProperty.market_appeal;
    const qualityScore = Math.round(techQuality * 0.5 + featureComplexity * 0.3 + propertyAppeal * 0.2);

    // User engagement
    const techEngagement =
      selectedTechnologies.reduce((sum, t) => sum + t.user_engagement, 0) / selectedTechnologies.length;
    const featureEngagement =
      selectedFeatures.reduce((sum, f) => sum + f.engagement_boost, 0) / Math.max(selectedFeatures.length, 1);
    const engagementScore = Math.round(techEngagement * 0.5 + featureEngagement * 0.5);

    return {
      immersion: Math.min(100, immersionScore),
      quality: Math.min(100, qualityScore),
      engagement: Math.min(100, engagementScore),
    };
  }, [selectedProperty, selectedTechnologies, selectedFeatures]);

  const startProduction = useCallback(() => {
    if (!selectedProperty || selectedTechnologies.length === 0 || !canAfford) {
      onComplete(false, 0);
      return;
    }

    setGamePhase('production');

    const tourResults = calculateTourQuality();
    setImmersionLevel(tourResults.immersion);
    setProductionQuality(tourResults.quality);
    setUserEngagement(tourResults.engagement);

    const totalComplexity =
      selectedProperty.complexity +
      selectedTechnologies.reduce((sum, t) => sum + t.setup_time, 0) / 10 +
      selectedFeatures.reduce((sum, f) => sum + f.production_complexity, 0) / 10;

    const interval = setInterval(() => {
      setProductionProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setGamePhase('results');
          return 100;
        }
        return prev + Math.max(1, (100 / totalComplexity) * 2);
      });
    }, 300);
  }, [selectedProperty, selectedTechnologies, selectedFeatures, canAfford, onComplete, calculateTourQuality]);

  const getOverallScore = useCallback(() => {
    const tourResults = calculateTourQuality();
    const costEfficiency = Math.round(((budget - calculateTotalCost()) / budget) * 100);
    const technologyDiversity = Math.min(20, selectedTechnologies.length * 4);
    const featureDiversity = Math.min(15, selectedFeatures.length * 3);
    const marketFit = selectedProperty?.market_appeal || 0;

    return Math.round(
      tourResults.immersion * 0.25 +
        tourResults.quality * 0.25 +
        tourResults.engagement * 0.25 +
        costEfficiency * 0.1 +
        (technologyDiversity + featureDiversity) * 0.1 +
        marketFit * 0.05,
    );
  }, [calculateTourQuality, selectedProperty, selectedTechnologies, selectedFeatures, budget, calculateTotalCost]);

  useEffect(() => {
    if (timeLeft <= 0 && gamePhase !== 'results') {
      onComplete(false, 0);
    }
  }, [timeLeft, gamePhase, onComplete]);

  if (gamePhase === 'briefing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-purple-500/20">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Eye className="w-16 h-16 text-purple-400" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Virtual Property Tour</h1>
            <p className="text-xl text-gray-300 mb-6">Tạo tour bất động sản ảo với công nghệ hiện đại!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Camera className="w-6 h-6 mr-2 text-purple-400" />
                Tính năng sản xuất
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Chọn loại bất động sản</li>
                <li>• Lựa chọn công nghệ quay phim</li>
                <li>• Thiết kế tính năng tương tác</li>
                <li>• Quản lý ngân sách 400 triệu VNĐ</li>
                <li>• Tối ưu hóa trải nghiệm khách hàng</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Star className="w-6 h-6 mr-2 text-yellow-400" />
                Tiêu chí đánh giá
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>
                  • <span className="text-purple-400">Độ nhập vai (25%)</span> - Trải nghiệm thực tế
                </li>
                <li>
                  • <span className="text-blue-400">Chất lượng (25%)</span> - Kỹ thuật sản xuất
                </li>
                <li>
                  • <span className="text-green-400">Tương tác (25%)</span> - Mức độ hấp dẫn
                </li>
                <li>
                  • <span className="text-yellow-400">Hiệu quả (25%)</span> - Chi phí và đa dạng
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('property-selection')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Bắt đầu sản xuất
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'property-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn loại bất động sản</h2>
            <p className="text-gray-300">Ngân sách: {budget} triệu VNĐ</p>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {PROPERTY_TYPES.map((property) => {
              const isSelected = selectedProperty?.id === property.id;

              return (
                <div
                  key={property.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected ? 'border-purple-500 bg-purple-500/20' : 'border-white/20 hover:border-purple-400/50'
                  }`}
                  onClick={() => setSelectedProperty(property)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Home className="w-8 h-8 text-purple-400" />
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        property.category === 'residential'
                          ? 'bg-blue-500/20 text-blue-400'
                          : property.category === 'commercial'
                            ? 'bg-green-500/20 text-green-400'
                            : property.category === 'luxury'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : property.category === 'historical'
                                ? 'bg-orange-500/20 text-orange-400'
                                : 'bg-gray-500/20 text-gray-400'
                      }`}
                    >
                      {property.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{property.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{property.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Diện tích:</span>
                      <span className="text-white">{property.size}m²</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Số phòng:</span>
                      <span className="text-white">{property.rooms}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Độ phức tạp:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: `${property.complexity}%` }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Hấp dẫn thị trường:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${property.market_appeal}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Yêu cầu công nghệ:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${property.tech_requirements}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Hệ số chi phí:</span>
                      <span className="text-yellow-400">x{property.budget_multiplier}</span>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="mt-4 text-center">
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">Đã chọn</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('technology-selection')}
              disabled={!selectedProperty}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Tiếp tục chọn công nghệ
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'technology-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn công nghệ quay phim (tối đa 5)</h2>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <span>BĐS: {selectedProperty?.name}</span>
              <span>Đã chọn: {selectedTechnologies.length}/5</span>
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {TOUR_TECHNOLOGIES.map((tech) => {
              const isSelected = selectedTechnologies.some((t) => t.id === tech.id);
              const canSelect = selectedTechnologies.length < 5;

              return (
                <div
                  key={tech.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-blue-500 bg-blue-500/20'
                      : !canSelect && !isSelected
                        ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                        : 'border-white/20 hover:border-blue-400/50'
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedTechnologies((prev) => prev.filter((t) => t.id !== tech.id));
                    } else if (canSelect) {
                      setSelectedTechnologies((prev) => [...prev, tech]);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {tech.type === '360_camera' && <Camera className="w-6 h-6 text-blue-400" />}
                      {tech.type === 'vr_equipment' && <Eye className="w-6 h-6 text-purple-400" />}
                      {tech.type === 'drone' && <MapPin className="w-6 h-6 text-green-400" />}
                      {tech.type === 'ai_assistant' && <Users className="w-6 h-6 text-yellow-400" />}
                      {tech.type === 'ar_features' && <Star className="w-6 h-6 text-pink-400" />}
                      {tech.type === 'interactive' && <Home className="w-6 h-6 text-orange-400" />}
                    </div>
                    <div className="text-right">
                      <span className="text-yellow-400 font-bold text-sm">{tech.cost}M</span>
                      <div className="text-xs text-gray-400">{tech.setup_time}min setup</div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{tech.description}</p>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-400">Nhập vai:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div
                          className="bg-purple-500 h-1 rounded-full"
                          style={{ width: `${tech.immersion_level}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Chất lượng:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div
                          className="bg-blue-500 h-1 rounded-full"
                          style={{ width: `${tech.production_quality}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Tương tác:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div
                          className="bg-green-500 h-1 rounded-full"
                          style={{ width: `${tech.user_engagement}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Độ khó:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div
                          className="bg-red-500 h-1 rounded-full"
                          style={{ width: `${tech.tech_complexity}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        tech.type === '360_camera'
                          ? 'bg-blue-500/20 text-blue-400'
                          : tech.type === 'vr_equipment'
                            ? 'bg-purple-500/20 text-purple-400'
                            : tech.type === 'drone'
                              ? 'bg-green-500/20 text-green-400'
                              : tech.type === 'ai_assistant'
                                ? 'bg-yellow-500/20 text-yellow-400'
                                : tech.type === 'ar_features'
                                  ? 'bg-pink-500/20 text-pink-400'
                                  : 'bg-orange-500/20 text-orange-400'
                      }`}
                    >
                      {tech.type.replace('_', ' ')}
                    </span>
                  </div>

                  {isSelected && (
                    <div className="mt-4 text-center">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Đã chọn</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('feature-selection')}
              disabled={selectedTechnologies.length === 0}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Tiếp tục chọn tính năng
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'feature-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn tính năng tour (tối đa 5)</h2>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <span>Chi phí hiện tại: {calculateTotalCost()} triệu VNĐ</span>
              <span>Đã chọn: {selectedFeatures.length}/5</span>
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {TOUR_FEATURES.map((feature) => {
              const isSelected = selectedFeatures.some((f) => f.id === feature.id);
              const hasRequiredTech = feature.required_tech.every((techId) =>
                selectedTechnologies.some((t) => t.id === techId),
              );
              const currentCostWithoutFeature =
                selectedTechnologies.reduce((sum, t) => sum + t.cost, 0) +
                selectedFeatures.filter((f) => f.id !== feature.id).reduce((sum, f) => sum + f.cost, 0);
              const totalCostWithFeature = selectedProperty
                ? (currentCostWithoutFeature + feature.cost) * selectedProperty.budget_multiplier
                : 0;
              const canSelect = selectedFeatures.length < 5 && hasRequiredTech && totalCostWithFeature <= budget;

              return (
                <div
                  key={feature.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-green-500 bg-green-500/20'
                      : !canSelect && !isSelected
                        ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                        : 'border-white/20 hover:border-green-400/50'
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedFeatures((prev) => prev.filter((f) => f.id !== feature.id));
                    } else if (canSelect) {
                      setSelectedFeatures((prev) => [...prev, feature]);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {feature.category === 'visual' && <Eye className="w-6 h-6 text-blue-400" />}
                      {feature.category === 'interactive' && <Users className="w-6 h-6 text-green-400" />}
                      {feature.category === 'information' && <Home className="w-6 h-6 text-yellow-400" />}
                      {feature.category === 'social' && <Star className="w-6 h-6 text-purple-400" />}
                      {feature.category === 'analytics' && <MapPin className="w-6 h-6 text-red-400" />}
                    </div>
                    <div className="text-right">
                      <span className="text-yellow-400 font-bold text-sm">{feature.cost}M</span>
                      <div
                        className={`text-xs px-1 py-0.5 rounded mt-1 ${
                          feature.production_complexity <= 40
                            ? 'bg-green-500/20 text-green-400'
                            : feature.production_complexity <= 70
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : 'bg-red-500/20 text-red-400'
                        }`}
                      >
                        {feature.production_complexity <= 40
                          ? 'Dễ'
                          : feature.production_complexity <= 70
                            ? 'TB'
                            : 'Khó'}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{feature.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{feature.description}</p>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Tăng tương tác:</span>
                      <div className="bg-gray-700 rounded-full h-1 w-12">
                        <div
                          className="bg-green-500 h-1 rounded-full"
                          style={{ width: `${feature.engagement_boost}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Tác động thị trường:</span>
                      <div className="bg-gray-700 rounded-full h-1 w-12">
                        <div
                          className="bg-blue-500 h-1 rounded-full"
                          style={{ width: `${feature.market_impact}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {!hasRequiredTech && (
                    <div className="mt-3 p-2 bg-red-500/20 rounded text-xs">
                      <div className="text-red-400">Thiếu công nghệ cần thiết:</div>
                      <div className="text-gray-300">
                        {feature.required_tech
                          .filter((techId) => !selectedTechnologies.some((t) => t.id === techId))
                          .map((techId) => TOUR_TECHNOLOGIES.find((t) => t.id === techId)?.name)
                          .join(', ')}
                      </div>
                    </div>
                  )}

                  <div className="mt-4 text-center">
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        feature.category === 'visual'
                          ? 'bg-blue-500/20 text-blue-400'
                          : feature.category === 'interactive'
                            ? 'bg-green-500/20 text-green-400'
                            : feature.category === 'information'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : feature.category === 'social'
                                ? 'bg-purple-500/20 text-purple-400'
                                : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {feature.category}
                    </span>
                  </div>

                  {isSelected && (
                    <div className="mt-4 text-center">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Đã chọn</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-white/10 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Tóm tắt Tour ảo</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">BĐS ({selectedProperty?.name})</h4>
                <p className="text-gray-300 text-sm">
                  {selectedProperty?.size}m² - {selectedProperty?.rooms} phòng
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Công nghệ ({selectedTechnologies.length})</h4>
                {selectedTechnologies.slice(0, 3).map((tech) => (
                  <p key={tech.id} className="text-gray-300 text-sm">
                    {tech.name}
                  </p>
                ))}
                {selectedTechnologies.length > 3 && (
                  <p className="text-gray-400 text-xs">+{selectedTechnologies.length - 3} khác</p>
                )}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-2">Tính năng ({selectedFeatures.length})</h4>
                {selectedFeatures.map((feature) => (
                  <p key={feature.id} className="text-gray-300 text-sm">
                    {feature.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-white">Tổng chi phí:</span>
                <span className="text-yellow-400 font-bold">{calculateTotalCost()}M VNĐ</span>
              </div>
              <div className="mt-2 flex justify-center">
                <span className={`text-lg font-semibold ${canAfford ? 'text-green-400' : 'text-red-400'}`}>
                  {canAfford ? '✅ Trong ngân sách' : '❌ Vượt ngân sách'}
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={startProduction}
              disabled={!canAfford || selectedTechnologies.length === 0}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Bắt đầu sản xuất
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'production') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-purple-500/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Đang sản xuất tour ảo...</h2>
            <p className="text-gray-300">Quay phim, dựng video và tích hợp tính năng</p>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <div className="flex justify-between text-white mb-2">
                <span>Tiến độ sản xuất</span>
                <span>{Math.round(productionProgress)}%</span>
              </div>
              <div className="bg-gray-700 rounded-full h-6">
                <div
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-6 rounded-full transition-all duration-300"
                  style={{ width: `${productionProgress}%` }}
                ></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-purple-400">Độ nhập vai</span>
                  <span className="text-white font-bold">{immersionLevel}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-purple-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${immersionLevel}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-400">Chất lượng sản xuất</span>
                  <span className="text-white font-bold">{productionQuality}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${productionQuality}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-400">Tương tác người dùng</span>
                  <span className="text-white font-bold">{userEngagement}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${userEngagement}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center space-x-4 text-gray-300">
              <Camera className="w-6 h-6 text-purple-400 animate-pulse" />
              <span>Đang xử lý {selectedTechnologies.length} công nghệ...</span>
              <Eye className="w-6 h-6 text-blue-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'results') {
    const tourResults = calculateTourQuality();
    const tourScore = getOverallScore();

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-purple-500/20">
          <div className="text-center mb-8">
            <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">Tour ảo hoàn thành!</h2>
            <p className="text-2xl text-gray-300 mb-2">{selectedProperty?.name}</p>
            <div className="text-6xl font-bold text-white mb-4">{tourScore} điểm</div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Chất lượng Tour ảo</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-purple-400">Độ nhập vai:</span>
                  <span className="text-white font-bold">{tourResults.immersion}/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-400">Chất lượng sản xuất:</span>
                  <span className="text-white font-bold">{tourResults.quality}/100</span>
                </div>
                <div className="flex justify-between border-t border-white/20 pt-2">
                  <span className="text-green-400">Tương tác người dùng:</span>
                  <span className="text-white font-bold">{tourResults.engagement}/100</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Đánh giá tổng thể</h3>
              <div className="space-y-2 text-gray-300">
                {tourScore >= 90 && (
                  <p>🏆 Tour ảo xuất sắc! Khách hàng sẽ có trải nghiệm tuyệt vời và quyết định mua ngay.</p>
                )}
                {tourScore >= 80 && tourScore < 90 && (
                  <p>🌟 Tour ảo chất lượng cao! Công nghệ hiện đại tạo ấn tượng mạnh.</p>
                )}
                {tourScore >= 70 && tourScore < 80 && <p>✅ Tour ảo tốt! Cần nâng cấp thêm tính năng để cạnh tranh.</p>}
                {tourScore >= 60 && tourScore < 70 && <p>⚠️ Tour ảo cơ bản! Hãy đầu tư thêm công nghệ và tính năng.</p>}
                {tourScore < 60 && <p>❌ Cần cải thiện đáng kể để thu hút khách hàng hiệu quả.</p>}

                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-sm">
                    <strong>Chi phí đầu tư:</strong> {calculateTotalCost()} triệu VNĐ
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Lưu ý:</strong> Tour ảo thành công cần cân bằng giữa công nghệ, tính năng và trải nghiệm
                    khách hàng.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-x-4">
            <button
              onClick={onRestart}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Sản xuất tour mới
            </button>
            <button
              onClick={() => onComplete(true, tourScore)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Hoàn thành
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default VirtualPropertyTourGame;
