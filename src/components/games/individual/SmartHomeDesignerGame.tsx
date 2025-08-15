'use client';

import React, { useState, useEffect } from 'react';
import { Trophy, Home, Clock, Wifi, Zap, Shield, Smartphone, Thermometer } from 'lucide-react';

interface GameProps {
  onComplete: (_: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface HomeType {
  id: string;
  name: string;
  size: 'small' | 'medium' | 'large' | 'villa';
  area: number;
  rooms: number;
  complexity: number;
  baseConnectivity: number;
  installationDifficulty: number;
  description: string;
}

interface SmartDevice {
  id: string;
  name: string;
  category: 'security' | 'climate' | 'lighting' | 'entertainment' | 'kitchen' | 'energy';
  intelligence_level: number;
  energy_efficiency: number;
  user_convenience: number;
  installation_cost: number;
  monthly_cost: number;
  compatibility: number;
  description: string;
}

interface AutomationScenario {
  id: string;
  name: string;
  type: 'security' | 'comfort' | 'energy' | 'lifestyle' | 'emergency';
  complexity: number;
  energy_impact: number;
  convenience_boost: number;
  security_enhancement: number;
  cost: number;
  required_devices: string[];
  description: string;
}

const HOME_TYPES: HomeType[] = [
  {
    id: 'apartment-studio',
    name: 'Căn hộ Studio',
    size: 'small',
    area: 35,
    rooms: 1,
    complexity: 20,
    baseConnectivity: 80,
    installationDifficulty: 30,
    description: 'Căn hộ nhỏ gọn, phù hợp cho người độc thân'
  },
  {
    id: 'apartment-2br',
    name: 'Căn hộ 2 phòng ngủ',
    size: 'medium',
    area: 75,
    rooms: 3,
    complexity: 50,
    baseConnectivity: 85,
    installationDifficulty: 50,
    description: 'Căn hộ tiêu chuẩn cho gia đình nhỏ'
  },
  {
    id: 'apartment-3br',
    name: 'Căn hộ 3 phòng ngủ',
    size: 'large',
    area: 120,
    rooms: 4,
    complexity: 70,
    baseConnectivity: 75,
    installationDifficulty: 65,
    description: 'Căn hộ rộng rãi cho gia đình đông thành viên'
  },
  {
    id: 'townhouse',
    name: 'Nhà phố 3 tầng',
    size: 'large',
    area: 200,
    rooms: 6,
    complexity: 85,
    baseConnectivity: 70,
    installationDifficulty: 80,
    description: 'Nhà phố đa tầng với không gian linh hoạt'
  },
  {
    id: 'villa',
    name: 'Biệt thự sân vườn',
    size: 'villa',
    area: 350,
    rooms: 8,
    complexity: 100,
    baseConnectivity: 60,
    installationDifficulty: 100,
    description: 'Biệt thự cao cấp với sân vườn rộng lớn'
  }
];

const SMART_DEVICES: SmartDevice[] = [
  {
    id: 'smart-lock',
    name: 'Khóa thông minh vân tay',
    category: 'security',
    intelligence_level: 85,
    energy_efficiency: 90,
    user_convenience: 95,
    installation_cost: 25,
    monthly_cost: 2,
    compatibility: 90,
    description: 'Khóa cửa với vân tay, thẻ từ và điều khiển từ xa'
  },
  {
    id: 'security-camera',
    name: 'Camera an ninh AI',
    category: 'security',
    intelligence_level: 95,
    energy_efficiency: 75,
    user_convenience: 90,
    installation_cost: 35,
    monthly_cost: 5,
    compatibility: 85,
    description: 'Camera nhận diện khuôn mặt và phát hiện bất thường'
  },
  {
    id: 'smart-thermostat',
    name: 'Điều hòa thông minh',
    category: 'climate',
    intelligence_level: 90,
    energy_efficiency: 95,
    user_convenience: 85,
    installation_cost: 40,
    monthly_cost: 8,
    compatibility: 80,
    description: 'Điều hòa tự động học thói quen và tiết kiệm năng lượng'
  },
  {
    id: 'smart-lighting',
    name: 'Hệ thống đèn thông minh',
    category: 'lighting',
    intelligence_level: 80,
    energy_efficiency: 90,
    user_convenience: 90,
    installation_cost: 30,
    monthly_cost: 3,
    compatibility: 95,
    description: 'Đèn LED có thể điều chỉnh màu sắc và độ sáng'
  },
  {
    id: 'smart-tv',
    name: 'TV thông minh 4K',
    category: 'entertainment',
    intelligence_level: 85,
    energy_efficiency: 80,
    user_convenience: 95,
    installation_cost: 50,
    monthly_cost: 10,
    compatibility: 85,
    description: 'TV với AI voice control và streaming thông minh'
  },
  {
    id: 'smart-speaker',
    name: 'Loa thông minh AI',
    category: 'entertainment',
    intelligence_level: 90,
    energy_efficiency: 85,
    user_convenience: 95,
    installation_cost: 15,
    monthly_cost: 1,
    compatibility: 100,
    description: 'Trợ lý ảo điều khiển toàn bộ nhà thông minh'
  },
  {
    id: 'smart-refrigerator',
    name: 'Tủ lạnh thông minh',
    category: 'kitchen',
    intelligence_level: 85,
    energy_efficiency: 90,
    user_convenience: 80,
    installation_cost: 80,
    monthly_cost: 15,
    compatibility: 75,
    description: 'Tủ lạnh quản lý thực phẩm và đề xuất món ăn'
  },
  {
    id: 'smart-washing-machine',
    name: 'Máy giặt thông minh',
    category: 'kitchen',
    intelligence_level: 80,
    energy_efficiency: 95,
    user_convenience: 85,
    installation_cost: 45,
    monthly_cost: 8,
    compatibility: 80,
    description: 'Máy giặt tự động chọn chế độ và báo bảo trì'
  },
  {
    id: 'solar-system',
    name: 'Hệ thống năng lượng mặt trời',
    category: 'energy',
    intelligence_level: 85,
    energy_efficiency: 100,
    user_convenience: 70,
    installation_cost: 120,
    monthly_cost: -20,
    compatibility: 70,
    description: 'Pin mặt trời với AI quản lý năng lượng thông minh'
  },
  {
    id: 'smart-meter',
    name: 'Đồng hồ điện thông minh',
    category: 'energy',
    intelligence_level: 75,
    energy_efficiency: 85,
    user_convenience: 75,
    installation_cost: 20,
    monthly_cost: 1,
    compatibility: 90,
    description: 'Theo dõi và tối ưu hóa việc sử dụng điện'
  }
];

const AUTOMATION_SCENARIOS: AutomationScenario[] = [
  {
    id: 'morning-routine',
    name: 'Thói quen buổi sáng',
    type: 'lifestyle',
    complexity: 60,
    energy_impact: 15,
    convenience_boost: 90,
    security_enhancement: 20,
    cost: 25,
    required_devices: ['smart-lighting', 'smart-thermostat', 'smart-speaker'],
    description: 'Tự động bật đèn, điều chỉnh nhiệt độ và phát nhạc khi thức dậy'
  },
  {
    id: 'security-mode',
    name: 'Chế độ bảo vệ',
    type: 'security',
    complexity: 80,
    energy_impact: 10,
    convenience_boost: 75,
    security_enhancement: 95,
    cost: 40,
    required_devices: ['smart-lock', 'security-camera', 'smart-lighting'],
    description: 'Kích hoạt toàn bộ hệ thống an ninh khi ra khỏi nhà'
  },
  {
    id: 'energy-saving',
    name: 'Tiết kiệm năng lượng',
    type: 'energy',
    complexity: 70,
    energy_impact: 90,
    convenience_boost: 60,
    security_enhancement: 30,
    cost: 30,
    required_devices: ['smart-thermostat', 'smart-lighting', 'smart-meter'],
    description: 'Tự động tắt thiết bị không dùng và tối ưu hóa năng lượng'
  },
  {
    id: 'entertainment-mode',
    name: 'Chế độ giải trí',
    type: 'lifestyle',
    complexity: 50,
    energy_impact: 5,
    convenience_boost: 95,
    security_enhancement: 10,
    cost: 20,
    required_devices: ['smart-tv', 'smart-speaker', 'smart-lighting'],
    description: 'Thiết lập môi trường hoàn hảo cho xem phim và nghe nhạc'
  },
  {
    id: 'emergency-alert',
    name: 'Cảnh báo khẩn cấp',
    type: 'emergency',
    complexity: 90,
    energy_impact: 20,
    convenience_boost: 70,
    security_enhancement: 100,
    cost: 50,
    required_devices: ['security-camera', 'smart-speaker', 'smart-lock'],
    description: 'Phát hiện và xử lý tình huống khẩn cấp tự động'
  },
  {
    id: 'guest-mode',
    name: 'Chế độ khách',
    type: 'comfort',
    complexity: 40,
    energy_impact: 10,
    convenience_boost: 85,
    security_enhancement: 40,
    cost: 15,
    required_devices: ['smart-lock', 'smart-lighting', 'smart-thermostat'],
    description: 'Tạo môi trường thoải mái và an toàn cho khách'
  }
];

const SmartHomeDesignerGame: React.FC<GameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [gamePhase, setGamePhase] = useState<'briefing' | 'home-selection' | 'device-selection' | 'automation-selection' | 'installation' | 'results'>('briefing');
  const [selectedHome, setSelectedHome] = useState<HomeType | null>(null);
  const [selectedDevices, setSelectedDevices] = useState<SmartDevice[]>([]);
  const [selectedScenarios, setSelectedScenarios] = useState<AutomationScenario[]>([]);
  const [budget, setBudget] = useState(500);
  const [installationProgress, setInstallationProgress] = useState(0);
  const [isInstalling, setIsInstalling] = useState(false);

  // Smart home metrics
  const [smartLevel, setSmartLevel] = useState(0);
  const [energyEfficiency, setEnergyEfficiency] = useState(0);
  const [userConvenience, setUserConvenience] = useState(0);

  const totalInstallationCost = selectedDevices.reduce((sum, d) => sum + d.installation_cost, 0) + 
    selectedScenarios.reduce((sum, s) => sum + s.cost, 0);
  const monthlyOperatingCost = selectedDevices.reduce((sum, d) => sum + d.monthly_cost, 0);

  const canAfford = totalInstallationCost <= budget;

  const calculateSmartHomeScore = () => {
    if (!selectedHome || selectedDevices.length === 0) {
      return { smart: 0, energy: 0, convenience: 0 };
    }
    
    // Smart level score
    const deviceIntelligence = selectedDevices.reduce((sum, d) => sum + d.intelligence_level, 0) / selectedDevices.length;
    const deviceCompatibility = selectedDevices.reduce((sum, d) => sum + d.compatibility, 0) / selectedDevices.length;
    const automationComplexity = selectedScenarios.reduce((sum, s) => sum + s.complexity, 0) / Math.max(selectedScenarios.length, 1);
    const smartScore = Math.round((deviceIntelligence * 0.5 + deviceCompatibility * 0.3 + automationComplexity * 0.2));
    
    // Energy efficiency
    const deviceEfficiency = selectedDevices.reduce((sum, d) => sum + d.energy_efficiency, 0) / selectedDevices.length;
    const energyAutomation = selectedScenarios.reduce((sum, s) => sum + s.energy_impact, 0) / Math.max(selectedScenarios.length, 1);
    const homeComplexity = selectedHome.complexity;
    const energyScore = Math.round((deviceEfficiency * 0.6 + energyAutomation * 0.3 + (100 - homeComplexity) * 0.1));
    
    // User convenience
    const deviceConvenience = selectedDevices.reduce((sum, d) => sum + d.user_convenience, 0) / selectedDevices.length;
    const scenarioConvenience = selectedScenarios.reduce((sum, s) => sum + s.convenience_boost, 0) / Math.max(selectedScenarios.length, 1);
    const installationEase = 100 - selectedHome.installationDifficulty;
    const convenienceScore = Math.round((deviceConvenience * 0.5 + scenarioConvenience * 0.4 + installationEase * 0.1));
    
    return {
      smart: Math.min(100, smartScore),
      energy: Math.min(100, energyScore),
      convenience: Math.min(100, convenienceScore)
    };
  };

  const startInstallation = () => {
    if (!selectedHome || selectedDevices.length === 0 || !canAfford) {
      onComplete(false, 0);
      return;
    }

    setGamePhase('installation');
    setIsInstalling(true);
    
    const smartHomeResults = calculateSmartHomeScore();
    setSmartLevel(smartHomeResults.smart);
    setEnergyEfficiency(smartHomeResults.energy);
    setUserConvenience(smartHomeResults.convenience);
    
    const totalComplexity = selectedHome.installationDifficulty + 
      selectedDevices.reduce((sum, d) => sum + d.installation_cost, 0) / 10;
    
    const interval = setInterval(() => {
      setInstallationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsInstalling(false);
          setGamePhase('results');
          return 100;
        }
        return prev + Math.max(1, (100 / totalComplexity) * 3);
      });
    }, 250);
  };

  const getOverallScore = () => {
    const smartHomeResults = calculateSmartHomeScore();
    const costEfficiency = Math.round((budget - totalInstallationCost) / budget * 100);
    const operatingEfficiency = monthlyOperatingCost <= 0 ? 20 : Math.max(0, 20 - monthlyOperatingCost);
    const deviceDiversity = Math.min(20, selectedDevices.length * 3);
    
    return Math.round(
      smartHomeResults.smart * 0.3 + 
      smartHomeResults.energy * 0.25 + 
      smartHomeResults.convenience * 0.25 + 
      costEfficiency * 0.1 + 
      (operatingEfficiency + deviceDiversity) * 0.1
    );
  };

  useEffect(() => {
    if (timeLeft <= 0 && gamePhase !== 'results') {
      onComplete(false, 0);
    }
  }, [timeLeft, gamePhase, onComplete]);

  if (gamePhase === 'briefing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-green-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-blue-500/20">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Home className="w-16 h-16 text-blue-400" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Smart Home Designer</h1>
            <p className="text-xl text-gray-300 mb-6">
              Thiết kế ngôi nhà thông minh hoàn hảo với công nghệ AI!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Smartphone className="w-6 h-6 mr-2 text-blue-400" />
                Tính năng thiết kế
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Chọn loại nhà và quy mô</li>
                <li>• Lựa chọn thiết bị IoT thông minh</li>
                <li>• Thiết kế kịch bản tự động hóa</li>
                <li>• Quản lý ngân sách 500 triệu VNĐ</li>
                <li>• Tối ưu hóa năng lượng và tiện nghi</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Zap className="w-6 h-6 mr-2 text-green-400" />
                Tiêu chí đánh giá
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• <span className="text-blue-400">Độ thông minh (30%)</span> - AI và tự động hóa</li>
                <li>• <span className="text-green-400">Tiết kiệm năng lượng (25%)</span> - Hiệu quả năng lượng</li>
                <li>• <span className="text-yellow-400">Tiện nghi (25%)</span> - Trải nghiệm người dùng</li>
                <li>• <span className="text-purple-400">Hiệu quả (20%)</span> - Chi phí và đa dạng</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('home-selection')}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Bắt đầu thiết kế
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'home-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-green-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn loại nhà</h2>
            <p className="text-gray-300">Ngân sách: {budget} triệu VNĐ</p>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {HOME_TYPES.map((home) => {
              const isSelected = selectedHome?.id === home.id;
              
              return (
                <div
                  key={home.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-blue-500 bg-blue-500/20'
                      : 'border-white/20 hover:border-blue-400/50'
                  }`}
                  onClick={() => setSelectedHome(home)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Home className="w-8 h-8 text-blue-400" />
                    <span className={`text-xs px-2 py-1 rounded ${
                      home.size === 'small' ? 'bg-green-500/20 text-green-400' :
                      home.size === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      home.size === 'large' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {home.size}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{home.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{home.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Diện tích:</span>
                      <span className="text-white">{home.area}m²</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Số phòng:</span>
                      <span className="text-white">{home.rooms}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Độ phức tạp:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div 
                          className="bg-red-500 h-2 rounded-full" 
                          style={{width: `${home.complexity}%`}}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Kết nối cơ bản:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{width: `${home.baseConnectivity}%`}}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Khó lắp đặt:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div 
                          className="bg-orange-500 h-2 rounded-full" 
                          style={{width: `${home.installationDifficulty}%`}}
                        ></div>
                      </div>
                    </div>
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
              onClick={() => setGamePhase('device-selection')}
              disabled={!selectedHome}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Tiếp tục chọn thiết bị
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'device-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-green-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn thiết bị thông minh (tối đa 6)</h2>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <span>Nhà: {selectedHome?.name}</span>
              <span>Đã chọn: {selectedDevices.length}/6</span>
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {SMART_DEVICES.map((device) => {
              const isSelected = selectedDevices.some(d => d.id === device.id);
              const canSelect = selectedDevices.length < 6;
              
              return (
                <div
                  key={device.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-green-500 bg-green-500/20'
                      : !canSelect && !isSelected
                      ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                      : 'border-white/20 hover:border-green-400/50'
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedDevices(prev => prev.filter(d => d.id !== device.id));
                    } else if (canSelect) {
                      setSelectedDevices(prev => [...prev, device]);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {device.category === 'security' && <Shield className="w-6 h-6 text-red-400" />}
                      {device.category === 'climate' && <Thermometer className="w-6 h-6 text-blue-400" />}
                      {device.category === 'lighting' && <Zap className="w-6 h-6 text-yellow-400" />}
                      {device.category === 'entertainment' && <Smartphone className="w-6 h-6 text-purple-400" />}
                      {device.category === 'kitchen' && <Home className="w-6 h-6 text-orange-400" />}
                      {device.category === 'energy' && <Wifi className="w-6 h-6 text-green-400" />}
                    </div>
                    <div className="text-right">
                      <span className="text-yellow-400 font-bold text-sm">{device.installation_cost}M</span>
                      <div className="text-xs text-gray-400">{device.monthly_cost > 0 ? `+${device.monthly_cost}M/tháng` : `${device.monthly_cost}M/tháng`}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{device.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{device.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-400">Thông minh:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div 
                          className="bg-blue-500 h-1 rounded-full" 
                          style={{width: `${device.intelligence_level}%`}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Hiệu suất:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div 
                          className="bg-green-500 h-1 rounded-full" 
                          style={{width: `${device.energy_efficiency}%`}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Tiện lợi:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div 
                          className="bg-yellow-500 h-1 rounded-full" 
                          style={{width: `${device.user_convenience}%`}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Tương thích:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div 
                          className="bg-purple-500 h-1 rounded-full" 
                          style={{width: `${device.compatibility}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <span className={`text-xs px-2 py-1 rounded ${
                      device.category === 'security' ? 'bg-red-500/20 text-red-400' :
                      device.category === 'climate' ? 'bg-blue-500/20 text-blue-400' :
                      device.category === 'lighting' ? 'bg-yellow-500/20 text-yellow-400' :
                      device.category === 'entertainment' ? 'bg-purple-500/20 text-purple-400' :
                      device.category === 'kitchen' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {device.category}
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

          <div className="text-center">
            <button
              onClick={() => setGamePhase('automation-selection')}
              disabled={selectedDevices.length === 0}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Tiếp tục thiết kế tự động hóa
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'automation-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-green-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Thiết kế kịch bản tự động hóa (tối đa 4)</h2>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <span>Chi phí hiện tại: {totalInstallationCost} triệu VNĐ</span>
              <span>Đã chọn: {selectedScenarios.length}/4</span>
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {AUTOMATION_SCENARIOS.map((scenario) => {
              const isSelected = selectedScenarios.some(s => s.id === scenario.id);
              const hasRequiredDevices = scenario.required_devices.every(deviceId =>
                selectedDevices.some(d => d.id === deviceId)
              );
              const currentCostWithoutScenario = selectedDevices.reduce((sum, d) => sum + d.installation_cost, 0) +
                selectedScenarios.filter(s => s.id !== scenario.id).reduce((sum, s) => sum + s.cost, 0);
              const canSelect = selectedScenarios.length < 4 && 
                hasRequiredDevices && 
                (currentCostWithoutScenario + scenario.cost) <= budget;
              
              return (
                <div
                  key={scenario.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-purple-500 bg-purple-500/20'
                      : !canSelect && !isSelected
                      ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                      : 'border-white/20 hover:border-purple-400/50'
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedScenarios(prev => prev.filter(s => s.id !== scenario.id));
                    } else if (canSelect) {
                      setSelectedScenarios(prev => [...prev, scenario]);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {scenario.type === 'security' && <Shield className="w-6 h-6 text-red-400" />}
                      {scenario.type === 'comfort' && <Home className="w-6 h-6 text-blue-400" />}
                      {scenario.type === 'energy' && <Zap className="w-6 h-6 text-green-400" />}
                      {scenario.type === 'lifestyle' && <Smartphone className="w-6 h-6 text-purple-400" />}
                      {scenario.type === 'emergency' && <Wifi className="w-6 h-6 text-orange-400" />}
                    </div>
                    <div className="text-right">
                      <span className="text-yellow-400 font-bold text-sm">{scenario.cost}M</span>
                      <div className={`text-xs px-1 py-0.5 rounded mt-1 ${
                        scenario.complexity <= 40 ? 'bg-green-500/20 text-green-400' :
                        scenario.complexity <= 70 ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {scenario.complexity <= 40 ? 'Dễ' : scenario.complexity <= 70 ? 'Trung bình' : 'Khó'}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{scenario.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{scenario.description}</p>
                  
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Tiết kiệm năng lượng:</span>
                      <div className="bg-gray-700 rounded-full h-1 w-12">
                        <div 
                          className="bg-green-500 h-1 rounded-full" 
                          style={{width: `${scenario.energy_impact}%`}}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Tiện lợi:</span>
                      <div className="bg-gray-700 rounded-full h-1 w-12">
                        <div 
                          className="bg-blue-500 h-1 rounded-full" 
                          style={{width: `${scenario.convenience_boost}%`}}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">An ninh:</span>
                      <div className="bg-gray-700 rounded-full h-1 w-12">
                        <div 
                          className="bg-red-500 h-1 rounded-full" 
                          style={{width: `${scenario.security_enhancement}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {!hasRequiredDevices && (
                    <div className="mt-3 p-2 bg-red-500/20 rounded text-xs">
                      <div className="text-red-400">Thiếu thiết bị cần thiết:</div>
                      <div className="text-gray-300">
                        {scenario.required_devices.filter(deviceId =>
                          !selectedDevices.some(d => d.id === deviceId)
                        ).map(deviceId => 
                          SMART_DEVICES.find(d => d.id === deviceId)?.name
                        ).join(', ')}
                      </div>
                    </div>
                  )}

                  <div className="mt-4 text-center">
                    <span className={`text-xs px-2 py-1 rounded ${
                      scenario.type === 'security' ? 'bg-red-500/20 text-red-400' :
                      scenario.type === 'comfort' ? 'bg-blue-500/20 text-blue-400' :
                      scenario.type === 'energy' ? 'bg-green-500/20 text-green-400' :
                      scenario.type === 'lifestyle' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-orange-500/20 text-orange-400'
                    }`}>
                      {scenario.type}
                    </span>
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

          <div className="bg-white/10 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Tóm tắt Smart Home</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Nhà ({selectedHome?.name})</h4>
                <p className="text-gray-300 text-sm">{selectedHome?.area}m² - {selectedHome?.rooms} phòng</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-2">Thiết bị ({selectedDevices.length})</h4>
                {selectedDevices.slice(0, 3).map(device => (
                  <p key={device.id} className="text-gray-300 text-sm">{device.name}</p>
                ))}
                {selectedDevices.length > 3 && <p className="text-gray-400 text-xs">+{selectedDevices.length - 3} khác</p>}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Tự động hóa ({selectedScenarios.length})</h4>
                {selectedScenarios.map(scenario => (
                  <p key={scenario.id} className="text-gray-300 text-sm">{scenario.name}</p>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-white">Chi phí lắp đặt:</span>
                  <span className="text-yellow-400 font-bold">{totalInstallationCost}M VNĐ</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-white">Chi phí hàng tháng:</span>
                  <span className={`font-bold ${monthlyOperatingCost <= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {monthlyOperatingCost > 0 ? '+' : ''}{monthlyOperatingCost}M VNĐ
                  </span>
                </div>
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
              onClick={startInstallation}
              disabled={!canAfford || selectedDevices.length === 0}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Bắt đầu lắp đặt
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'installation') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-green-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-blue-500/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Đang lắp đặt Smart Home...</h2>
            <p className="text-gray-300">Cấu hình thiết bị và thiết lập kịch bản tự động</p>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <div className="flex justify-between text-white mb-2">
                <span>Tiến độ lắp đặt</span>
                <span>{Math.round(installationProgress)}%</span>
              </div>
              <div className="bg-gray-700 rounded-full h-6">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-green-500 h-6 rounded-full transition-all duration-300" 
                  style={{width: `${installationProgress}%`}}
                ></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-400">Độ thông minh</span>
                  <span className="text-white font-bold">{smartLevel}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-blue-500 h-3 rounded-full transition-all duration-300" 
                    style={{width: `${smartLevel}%`}}
                  ></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-400">Hiệu suất năng lượng</span>
                  <span className="text-white font-bold">{energyEfficiency}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-green-500 h-3 rounded-full transition-all duration-300" 
                    style={{width: `${energyEfficiency}%`}}
                  ></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-yellow-400">Tiện nghi</span>
                  <span className="text-white font-bold">{userConvenience}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-yellow-500 h-3 rounded-full transition-all duration-300" 
                    style={{width: `${userConvenience}%`}}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center space-x-4 text-gray-300">
              <Home className="w-6 h-6 text-blue-400 animate-pulse" />
              <span>Đang kết nối {selectedDevices.length} thiết bị thông minh...</span>
              <Wifi className="w-6 h-6 text-green-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'results') {
    const smartHomeResults = calculateSmartHomeScore();
    const smartHomeScore = getOverallScore();

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-green-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-blue-500/20">
          <div className="text-center mb-8">
            <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">Smart Home hoàn thành!</h2>
            <p className="text-2xl text-gray-300 mb-2">{selectedHome?.name}</p>
            <div className="text-6xl font-bold text-white mb-4">{smartHomeScore} điểm</div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Hiệu suất Smart Home</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-blue-400">Độ thông minh:</span>
                  <span className="text-white font-bold">{smartHomeResults.smart}/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-400">Hiệu suất năng lượng:</span>
                  <span className="text-white font-bold">{smartHomeResults.energy}/100</span>
                </div>
                <div className="flex justify-between border-t border-white/20 pt-2">
                  <span className="text-yellow-400">Tiện nghi người dùng:</span>
                  <span className="text-white font-bold">{smartHomeResults.convenience}/100</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Đánh giá tổng thể</h3>
              <div className="space-y-2 text-gray-300">
                {smartHomeScore >= 90 && <p>🏆 Smart Home hoàn hảo! Đây là ngôi nhà thông minh trong mơ của mọi người.</p>}
                {smartHomeScore >= 80 && smartHomeScore < 90 && <p>🌟 Smart Home xuất sắc! Cuộc sống sẽ trở nên tiện nghi và hiệu quả.</p>}
                {smartHomeScore >= 70 && smartHomeScore < 80 && <p>✅ Smart Home tốt! Cần nâng cấp thêm một số tính năng.</p>}
                {smartHomeScore >= 60 && smartHomeScore < 70 && <p>⚠️ Smart Home cơ bản! Hãy đầu tư thêm thiết bị và tự động hóa.</p>}
                {smartHomeScore < 60 && <p>❌ Cần cải thiện đáng kể để đạt được sự thông minh và tiện nghi.</p>}
                
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-sm">
                    <strong>Chi phí vận hành:</strong> {monthlyOperatingCost > 0 ? `+${monthlyOperatingCost}` : monthlyOperatingCost} triệu VNĐ/tháng
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Lưu ý:</strong> Smart Home tốt cần cân bằng giữa công nghệ, tiện nghi và hiệu quả năng lượng.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-x-4">
            <button
              onClick={onRestart}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Thiết kế nhà mới
            </button>
            <button
              onClick={() => onComplete(true, smartHomeScore)}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
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

export default SmartHomeDesignerGame;
