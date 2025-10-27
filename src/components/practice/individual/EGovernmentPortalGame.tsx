'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Building2, Users, Shield, CheckCircle, Clock, Star, Zap, Database } from 'lucide-react';

interface GameProps {
  onComplete: (_: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface Service {
  id: string;
  name: string;
  category: string;
  users: number;
  complexity: number;
  priority: 'High' | 'Medium' | 'Low';
  requirements: string[];
  cost: number;
  expectedBenefit: number;
}

interface SystemFeature {
  id: string;
  name: string;
  description: string;
  cost: number;
  securityLevel: number;
  userExperience: number;
  performance: number;
}

const GOVERNMENT_SERVICES: Service[] = [
  {
    id: 'citizen-id',
    name: 'Căn cước công dân điện tử',
    category: 'Identification',
    users: 1000000,
    complexity: 9,
    priority: 'High',
    requirements: ['Bảo mật cao', 'Tích hợp biometric', 'Đồng bộ dữ liệu'],
    cost: 50,
    expectedBenefit: 95,
  },
  {
    id: 'business-license',
    name: 'Giấy phép kinh doanh trực tuyến',
    category: 'Business',
    users: 500000,
    complexity: 7,
    priority: 'High',
    requirements: ['Quy trình tự động', 'Thanh toán online', 'Xác thực điện tử'],
    cost: 30,
    expectedBenefit: 80,
  },
  {
    id: 'tax-declaration',
    name: 'Khai báo thuế điện tử',
    category: 'Finance',
    users: 800000,
    complexity: 8,
    priority: 'High',
    requirements: ['Tích hợp ngân hàng', 'Báo cáo tự động', 'Kiểm tra AI'],
    cost: 40,
    expectedBenefit: 90,
  },
  {
    id: 'property-registration',
    name: 'Đăng ký bất động sản',
    category: 'Property',
    users: 300000,
    complexity: 6,
    priority: 'Medium',
    requirements: ['GIS mapping', 'Document scan', 'Blockchain verify'],
    cost: 25,
    expectedBenefit: 70,
  },
  {
    id: 'healthcare-appointment',
    name: 'Đặt lịch khám bệnh',
    category: 'Healthcare',
    users: 600000,
    complexity: 5,
    priority: 'Medium',
    requirements: ['Real-time booking', 'SMS notification', 'Health records'],
    cost: 20,
    expectedBenefit: 75,
  },
  {
    id: 'education-enrollment',
    name: 'Đăng ký học bạ điện tử',
    category: 'Education',
    users: 400000,
    complexity: 4,
    priority: 'Medium',
    requirements: ['Academic sync', 'Parent portal', 'Mobile app'],
    cost: 15,
    expectedBenefit: 65,
  },
  {
    id: 'social-services',
    name: 'Dịch vụ xã hội trực tuyến',
    category: 'Social',
    users: 200000,
    complexity: 3,
    priority: 'Low',
    requirements: ['Case management', 'Document upload', 'Status tracking'],
    cost: 10,
    expectedBenefit: 60,
  },
];

const SYSTEM_FEATURES: SystemFeature[] = [
  {
    id: 'ai-chatbot',
    name: 'AI Chatbot hỗ trợ 24/7',
    description: 'Trợ lý ảo thông minh trả lời câu hỏi citizen',
    cost: 25,
    securityLevel: 7,
    userExperience: 9,
    performance: 8,
  },
  {
    id: 'blockchain-auth',
    name: 'Xác thực Blockchain',
    description: 'Hệ thống xác thực không thể giả mạo',
    cost: 35,
    securityLevel: 10,
    userExperience: 6,
    performance: 7,
  },
  {
    id: 'biometric-login',
    name: 'Đăng nhập sinh trắc học',
    description: 'Vân tay, nhận diện khuôn mặt an toàn',
    cost: 30,
    securityLevel: 9,
    userExperience: 8,
    performance: 8,
  },
  {
    id: 'mobile-first-ui',
    name: 'Giao diện Mobile-First',
    description: 'Thiết kế tối ưu cho điện thoại thông minh',
    cost: 20,
    securityLevel: 6,
    userExperience: 10,
    performance: 9,
  },
  {
    id: 'real-time-sync',
    name: 'Đồng bộ thời gian thực',
    description: 'Cập nhật dữ liệu tức thì across agencies',
    cost: 40,
    securityLevel: 8,
    userExperience: 7,
    performance: 10,
  },
  {
    id: 'multilingual-support',
    name: 'Hỗ trợ đa ngôn ngữ',
    description: 'Tiếng Việt, English, ethnic languages',
    cost: 15,
    securityLevel: 5,
    userExperience: 9,
    performance: 7,
  },
];

const EGovernmentPortalGame: React.FC<GameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [gamePhase, setGamePhase] = useState<'briefing' | 'planning' | 'implementation' | 'results'>('briefing');
  const [budget] = useState(200); // 200 million VND budget
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<SystemFeature[]>([]);
  const [spentBudget, setSpentBudget] = useState(0);
  const [citizenSatisfaction, setCitizenSatisfaction] = useState(0);
  const [systemSecurity, setSystemSecurity] = useState(0);
  const [operationalEfficiency, setOperationalEfficiency] = useState(0);
  const [digitalTransformationScore, setDigitalTransformationScore] = useState(0);

  const calculateResults = useCallback(() => {
    // Calculate citizen satisfaction (based on services and UX features)
    const serviceScore =
      selectedServices.reduce((sum, service) => sum + service.expectedBenefit, 0) /
      Math.max(selectedServices.length, 1);
    const uxScore =
      selectedFeatures.reduce((sum, feature) => sum + feature.userExperience, 0) / Math.max(selectedFeatures.length, 1);
    const satisfaction = Math.min(100, serviceScore * 0.6 + uxScore * 0.4);

    // Calculate system security
    const securityScore =
      selectedFeatures.reduce((sum, feature) => sum + feature.securityLevel, 0) / Math.max(selectedFeatures.length, 1);
    const security = Math.min(100, securityScore * 10);

    // Calculate operational efficiency (performance + service coverage)
    const performanceScore =
      selectedFeatures.reduce((sum, feature) => sum + feature.performance, 0) / Math.max(selectedFeatures.length, 1);
    const serviceCoverage = (selectedServices.length / GOVERNMENT_SERVICES.length) * 100;
    const efficiency = Math.min(100, performanceScore * 10 * 0.6 + serviceCoverage * 0.4);

    // Calculate digital transformation score
    const budgetUtilization = (spentBudget / budget) * 100;
    // const featureComplexity = selectedFeatures.length / SYSTEM_FEATURES.length * 100;
    const transformationScore = Math.min(
      100,
      satisfaction * 0.3 + security * 0.25 + efficiency * 0.25 + Math.min(budgetUtilization, 100) * 0.2,
    );

    setCitizenSatisfaction(Math.round(satisfaction));
    setSystemSecurity(Math.round(security));
    setOperationalEfficiency(Math.round(efficiency));
    setDigitalTransformationScore(Math.round(transformationScore));

    setGamePhase('results');
    onComplete(true, transformationScore);
  }, [selectedServices, selectedFeatures, spentBudget, budget, onComplete]);

  useEffect(() => {
    if (timeLeft <= 0 && gamePhase !== 'results') {
      calculateResults();
    }
  }, [timeLeft, gamePhase, calculateResults]);

  const handleServiceSelect = (service: Service) => {
    const newCost = spentBudget + service.cost;
    if (newCost <= budget && !selectedServices.find((s) => s.id === service.id)) {
      setSelectedServices([...selectedServices, service]);
      setSpentBudget(newCost);
    }
  };

  const handleFeatureSelect = (feature: SystemFeature) => {
    const newCost = spentBudget + feature.cost;
    if (newCost <= budget && !selectedFeatures.find((f) => f.id === feature.id)) {
      setSelectedFeatures([...selectedFeatures, feature]);
      setSpentBudget(newCost);
    }
  };

  const removeService = (serviceId: string) => {
    const service = selectedServices.find((s) => s.id === serviceId);
    if (service) {
      setSelectedServices(selectedServices.filter((s) => s.id !== serviceId));
      setSpentBudget(spentBudget - service.cost);
    }
  };

  const removeFeature = (featureId: string) => {
    const feature = selectedFeatures.find((f) => f.id === featureId);
    if (feature) {
      setSelectedFeatures(selectedFeatures.filter((f) => f.id !== featureId));
      setSpentBudget(spentBudget - feature.cost);
    }
  };

  if (gamePhase === 'briefing') {
    return (
      <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 p-8 rounded-lg text-white max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Building2 className="w-16 h-16 mx-auto mb-4 text-blue-400" />
          <h2 className="text-3xl font-bold mb-4">E-Government Portal Design Challenge</h2>
          <p className="text-xl text-blue-200">Thiết kế hệ thống chính phủ điện tử hiện đại cho Việt Nam</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Users className="w-6 h-6 mr-2 text-green-400" />
              Mục tiêu dự án
            </h3>
            <ul className="space-y-2 text-blue-100">
              <li>• Số hóa các dịch vụ công thiết yếu</li>
              <li>• Nâng cao trải nghiệm người dân</li>
              <li>• Đảm bảo bảo mật và minh bạch</li>
              <li>• Tối ưu hóa quy trình hành chính</li>
              <li>• Thúc đẩy chuyển đổi số quốc gia</li>
            </ul>
          </div>

          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-2 text-yellow-400" />
              Thách thức cần giải quyết
            </h3>
            <ul className="space-y-2 text-blue-100">
              <li>• Bảo mật thông tin người dân tuyệt đối</li>
              <li>• Tích hợp đa cơ quan liên thông</li>
              <li>• Hỗ trợ người dùng công nghệ hạn chế</li>
              <li>• Hiệu suất xử lý lượng truy cập lớn</li>
              <li>• Tuân thủ pháp luật và quy định</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/10 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Zap className="w-6 h-6 mr-2 text-orange-400" />
            Ngân sách và Yêu cầu
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-blue-600/50 p-4 rounded">
              <div className="text-2xl font-bold text-blue-200">200</div>
              <div className="text-sm text-blue-300">Triệu VNĐ ngân sách</div>
            </div>
            <div className="bg-green-600/50 p-4 rounded">
              <div className="text-2xl font-bold text-green-200">7</div>
              <div className="text-sm text-green-300">Dịch vụ công ưu tiên</div>
            </div>
            <div className="bg-purple-600/50 p-4 rounded">
              <div className="text-2xl font-bold text-purple-200">6</div>
              <div className="text-sm text-purple-300">Tính năng hệ thống</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => setGamePhase('planning')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-bold text-lg transition-all duration-200"
          >
            Bắt đầu thiết kế hệ thống
          </button>
        </div>
      </div>
    );
  }

  if (gamePhase === 'planning') {
    return (
      <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 p-6 rounded-lg text-white max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Thiết kế E-Government Portal</h2>
          <div className="flex items-center space-x-4">
            <div className="bg-green-600/50 px-4 py-2 rounded">
              <span className="text-sm">
                Ngân sách: {budget - spentBudget}/{budget} triệu VNĐ
              </span>
            </div>
            <div className="bg-blue-600/50 px-4 py-2 rounded flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span className="text-sm">
                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Government Services Selection */}
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Building2 className="w-5 h-5 mr-2 text-blue-400" />
              Dịch vụ công (Chọn tối đa 5)
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {GOVERNMENT_SERVICES.map((service) => {
                const isSelected = selectedServices.find((s) => s.id === service.id);
                const canAfford = spentBudget + service.cost <= budget;
                const canSelect = selectedServices.length < 5;

                return (
                  <div
                    key={service.id}
                    className={`p-3 rounded border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'border-green-400 bg-green-500/20'
                        : canAfford && canSelect
                          ? 'border-blue-400 bg-blue-500/10 hover:bg-blue-500/20'
                          : 'border-gray-500 bg-gray-500/10 opacity-50'
                    }`}
                    onClick={() => {
                      if (isSelected) {
                        removeService(service.id);
                      } else if (canAfford && canSelect) {
                        handleServiceSelect(service);
                      }
                    }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-sm">{service.name}</h4>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          service.priority === 'High'
                            ? 'bg-red-500'
                            : service.priority === 'Medium'
                              ? 'bg-yellow-500'
                              : 'bg-green-500'
                        }`}
                      >
                        {service.priority}
                      </span>
                    </div>
                    <div className="text-xs text-gray-300 mb-2">
                      {service.users.toLocaleString()} người dùng • Phức tạp: {service.complexity}/10
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-blue-200">{service.cost} triệu VNĐ</span>
                      <span className="text-xs text-green-200">ROI: {service.expectedBenefit}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* System Features Selection */}
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-yellow-400" />
              Tính năng hệ thống (Chọn tối đa 4)
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {SYSTEM_FEATURES.map((feature) => {
                const isSelected = selectedFeatures.find((f) => f.id === feature.id);
                const canAfford = spentBudget + feature.cost <= budget;
                const canSelect = selectedFeatures.length < 4;

                return (
                  <div
                    key={feature.id}
                    className={`p-3 rounded border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'border-green-400 bg-green-500/20'
                        : canAfford && canSelect
                          ? 'border-yellow-400 bg-yellow-500/10 hover:bg-yellow-500/20'
                          : 'border-gray-500 bg-gray-500/10 opacity-50'
                    }`}
                    onClick={() => {
                      if (isSelected) {
                        removeFeature(feature.id);
                      } else if (canAfford && canSelect) {
                        handleFeatureSelect(feature);
                      }
                    }}
                  >
                    <h4 className="font-semibold text-sm mb-2">{feature.name}</h4>
                    <p className="text-xs text-gray-300 mb-3">{feature.description}</p>
                    <div className="grid grid-cols-3 gap-1 text-xs mb-2">
                      <div className="text-center">
                        <div className="text-red-300">Security</div>
                        <div className="font-bold">{feature.securityLevel}/10</div>
                      </div>
                      <div className="text-center">
                        <div className="text-blue-300">UX</div>
                        <div className="font-bold">{feature.userExperience}/10</div>
                      </div>
                      <div className="text-center">
                        <div className="text-green-300">Performance</div>
                        <div className="font-bold">{feature.performance}/10</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="text-yellow-200 font-semibold">{feature.cost} triệu VNĐ</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Selection Summary */}
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
              Tổng quan dự án
            </h3>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Dịch vụ đã chọn ({selectedServices.length}/5):</h4>
              <div className="space-y-1 max-h-32 overflow-y-auto">
                {selectedServices.map((service) => (
                  <div
                    key={service.id}
                    className="text-sm flex justify-between items-center bg-blue-500/20 p-2 rounded"
                  >
                    <span>{service.name}</span>
                    <span className="text-blue-200">{service.cost}M</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Tính năng đã chọn ({selectedFeatures.length}/4):</h4>
              <div className="space-y-1 max-h-32 overflow-y-auto">
                {selectedFeatures.map((feature) => (
                  <div
                    key={feature.id}
                    className="text-sm flex justify-between items-center bg-yellow-500/20 p-2 rounded"
                  >
                    <span>{feature.name}</span>
                    <span className="text-yellow-200">{feature.cost}M</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/20 pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Tổng chi phí:</span>
                <span className="text-xl font-bold text-green-300">
                  {spentBudget}/{budget} triệu VNĐ
                </span>
              </div>

              <button
                onClick={() => setGamePhase('implementation')}
                disabled={selectedServices.length === 0 && selectedFeatures.length === 0}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 px-6 py-3 rounded-lg font-bold transition-all duration-200"
              >
                Bắt đầu triển khai
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'implementation') {
    return (
      <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 p-8 rounded-lg text-white max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Database className="w-16 h-16 mx-auto mb-4 text-blue-400 animate-pulse" />
          <h2 className="text-3xl font-bold mb-4">Đang triển khai E-Government Portal...</h2>
          <p className="text-xl text-blue-200">Hệ thống đang được xây dựng và tích hợp</p>
        </div>

        <div className="space-y-6 mb-8">
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Tiến độ triển khai:</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                <span>Thiết kế kiến trúc hệ thống</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                <span>Cài đặt cơ sở hạ tầng cloud</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                <span>Phát triển API và microservices</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-yellow-400" />
                <span>Tích hợp dịch vụ và tính năng</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-yellow-400" />
                <span>Testing và đảm bảo chất lượng</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-lg">
              <h4 className="font-bold mb-3">Dịch vụ được triển khai:</h4>
              <div className="space-y-2">
                {selectedServices.map((service) => (
                  <div key={service.id} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    <span>{service.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 p-6 rounded-lg">
              <h4 className="font-bold mb-3">Tính năng được tích hợp:</h4>
              <div className="space-y-2">
                {selectedFeatures.map((feature) => (
                  <div key={feature.id} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-2 text-blue-400" />
                    <span>{feature.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={calculateResults}
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-8 py-3 rounded-lg font-bold text-lg transition-all duration-200"
          >
            Hoàn thành và đánh giá kết quả
          </button>
        </div>
      </div>
    );
  }

  if (gamePhase === 'results') {
    const getPerformanceLevel = (score: number) => {
      if (score >= 90) return { level: 'Xuất sắc', color: 'text-green-400', icon: '🏆' };
      if (score >= 80) return { level: 'Tốt', color: 'text-blue-400', icon: '⭐' };
      if (score >= 70) return { level: 'Khá', color: 'text-yellow-400', icon: '👍' };
      if (score >= 60) return { level: 'Trung bình', color: 'text-orange-400', icon: '📈' };
      return { level: 'Cần cải thiện', color: 'text-red-400', icon: '🔧' };
    };

    const overallPerformance = getPerformanceLevel(digitalTransformationScore);

    return (
      <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 p-8 rounded-lg text-white max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{overallPerformance.icon}</div>
          <h2 className="text-3xl font-bold mb-4">Kết quả E-Government Portal</h2>
          <p className={`text-2xl font-bold ${overallPerformance.color}`}>
            {overallPerformance.level} - {digitalTransformationScore}/100 điểm
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Chỉ số hiệu suất:</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-400" />
                  Hài lòng người dân
                </span>
                <span className="font-bold text-blue-300">{citizenSatisfaction}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-red-400" />
                  Bảo mật hệ thống
                </span>
                <span className="font-bold text-red-300">{systemSecurity}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                  Hiệu quả vận hành
                </span>
                <span className="font-bold text-yellow-300">{operationalEfficiency}%</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Thông tin dự án:</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Dịch vụ triển khai:</span>
                <span className="font-bold">{selectedServices.length}/7</span>
              </div>
              <div className="flex justify-between">
                <span>Tính năng tích hợp:</span>
                <span className="font-bold">{selectedFeatures.length}/6</span>
              </div>
              <div className="flex justify-between">
                <span>Ngân sách sử dụng:</span>
                <span className="font-bold">{spentBudget}/200 triệu VNĐ</span>
              </div>
              <div className="flex justify-between">
                <span>Hiệu quả chi phí:</span>
                <span className="font-bold">{Math.round((digitalTransformationScore / spentBudget) * 10)}/10</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Star className="w-6 h-6 mr-2 text-yellow-400" />
            Đánh giá chuyên gia
          </h3>
          <div className="text-gray-300 leading-relaxed">
            {digitalTransformationScore >= 90 && (
              <p>
                🎉 <strong>Xuất sắc!</strong> Portal e-government của bạn đạt tiêu chuẩn quốc tế với hệ thống bảo mật
                mạnh mẽ, trải nghiệm người dùng tuyệt vời và hiệu quả vận hành cao. Dự án này sẽ thúc đẩy mạnh mẽ quá
                trình chuyển đổi số quốc gia và nâng cao chất lượng dịch vụ công.
              </p>
            )}
            {digitalTransformationScore >= 80 && digitalTransformationScore < 90 && (
              <p>
                ⭐ <strong>Tốt!</strong> Hệ thống e-government được thiết kế khá hoàn thiện với các dịch vụ thiết yếu và
                tính năng hiện đại. Một số cải tiến về bảo mật hoặc trải nghiệm người dùng sẽ giúp đạt được hiệu quả tối
                ưu.
              </p>
            )}
            {digitalTransformationScore >= 70 && digitalTransformationScore < 80 && (
              <p>
                👍 <strong>Khá!</strong> Portal có nền tảng tốt với các dịch vụ cơ bản được triển khai. Cần đầu tư thêm
                vào bảo mật, tối ưu hiệu suất và mở rộng thêm dịch vụ để đáp ứng nhu cầu người dân.
              </p>
            )}
            {digitalTransformationScore >= 60 && digitalTransformationScore < 70 && (
              <p>
                📈 <strong>Trung bình.</strong> Hệ thống đáp ứng được nhu cầu cơ bản nhưng cần cải thiện đáng kể về bảo
                mật, hiệu suất và trải nghiệm người dùng để thực sự hiệu quả.
              </p>
            )}
            {digitalTransformationScore < 60 && (
              <p>
                🔧 <strong>Cần cải thiện.</strong> Portal cần được đầu tư và phát triển thêm về mặt kỹ thuật, bảo mật và
                dịch vụ để đáp ứng kỳ vọng của người dân và các cơ quan nhà nước.
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={onRestart}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-lg font-bold transition-all duration-200"
          >
            Thiết kế lại
          </button>
          <button
            onClick={() => onComplete(true, digitalTransformationScore)}
            className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 px-6 py-3 rounded-lg font-bold transition-all duration-200"
          >
            Hoàn thành
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default EGovernmentPortalGame;
