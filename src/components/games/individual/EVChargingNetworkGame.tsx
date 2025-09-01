'use client';

import React, { useState, useEffect } from 'react';
import { Trophy, Zap, Clock, MapPin, Battery, Car, Plug, Target } from 'lucide-react';

interface GameProps {
  onComplete: (_: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface ChargingStation {
  id: string;
  name: string;
  type: 'fast' | 'standard' | 'slow' | 'ultra';
  power: number; // kW
  cost: number;
  installation_time: number;
  maintenance: number;
  efficiency: number;
  capacity: number; // số xe có thể sạc cùng lúc
  description: string;
}

interface Location {
  id: string;
  name: string;
  type: 'urban' | 'highway' | 'commercial' | 'residential';
  traffic: number;
  available_space: number;
  installation_cost_multiplier: number;
  demand_level: number;
  description: string;
}

interface Technology {
  id: string;
  name: string;
  type: 'software' | 'payment' | 'grid' | 'monitoring';
  efficiency_boost: number;
  user_experience: number;
  cost: number;
  maintenance_reduction: number;
  description: string;
}

const CHARGING_STATIONS: ChargingStation[] = [
  {
    id: 'ultra-fast',
    name: 'Trạm sạc siêu nhanh 350kW',
    type: 'ultra',
    power: 350,
    cost: 150,
    installation_time: 30,
    maintenance: 40,
    efficiency: 95,
    capacity: 4,
    description: 'Sạc đầy xe điện trong 15-20 phút',
  },
  {
    id: 'fast-charger',
    name: 'Trạm sạc nhanh 150kW',
    type: 'fast',
    power: 150,
    cost: 80,
    installation_time: 20,
    maintenance: 30,
    efficiency: 92,
    capacity: 6,
    description: 'Sạc đầy xe điện trong 30-45 phút',
  },
  {
    id: 'standard-charger',
    name: 'Trạm sạc tiêu chuẩn 50kW',
    type: 'standard',
    power: 50,
    cost: 40,
    installation_time: 15,
    maintenance: 20,
    efficiency: 88,
    capacity: 8,
    description: 'Sạc đầy xe điện trong 1-2 giờ',
  },
  {
    id: 'slow-charger',
    name: 'Trạm sạc chậm 22kW',
    type: 'slow',
    power: 22,
    cost: 20,
    installation_time: 10,
    maintenance: 10,
    efficiency: 85,
    capacity: 10,
    description: 'Sạc đầy xe điện trong 4-8 giờ',
  },
  {
    id: 'wireless-charger',
    name: 'Trạm sạc không dây 11kW',
    type: 'slow',
    power: 11,
    cost: 60,
    installation_time: 25,
    maintenance: 15,
    efficiency: 80,
    capacity: 6,
    description: 'Sạc không cần cắm dây, tiện lợi cao',
  },
];

const LOCATIONS: Location[] = [
  {
    id: 'shopping-mall',
    name: 'Trung tâm thương mại',
    type: 'commercial',
    traffic: 90,
    available_space: 60,
    installation_cost_multiplier: 1.2,
    demand_level: 85,
    description: 'Lưu lượng khách cao, thời gian đỗ xe trung bình',
  },
  {
    id: 'highway-rest',
    name: 'Trạm nghỉ cao tốc',
    type: 'highway',
    traffic: 95,
    available_space: 80,
    installation_cost_multiplier: 1.5,
    demand_level: 95,
    description: 'Nhu cầu sạc nhanh cao, khách hàng di chuyển xa',
  },
  {
    id: 'office-building',
    name: 'Tòa nhà văn phòng',
    type: 'commercial',
    traffic: 70,
    available_space: 40,
    installation_cost_multiplier: 1.0,
    demand_level: 70,
    description: 'Sạc trong giờ làm việc, thời gian đỗ dài',
  },
  {
    id: 'apartment-complex',
    name: 'Khu chung cư',
    type: 'residential',
    traffic: 50,
    available_space: 70,
    installation_cost_multiplier: 0.8,
    demand_level: 60,
    description: 'Sạc qua đêm, nhu cầu ổn định',
  },
  {
    id: 'city-center',
    name: 'Trung tâm thành phố',
    type: 'urban',
    traffic: 100,
    available_space: 30,
    installation_cost_multiplier: 2.0,
    demand_level: 90,
    description: 'Mật độ cao, không gian hạn chế, giá trị cao',
  },
  {
    id: 'gas-station',
    name: 'Cây xăng',
    type: 'highway',
    traffic: 80,
    available_space: 50,
    installation_cost_multiplier: 1.3,
    demand_level: 75,
    description: 'Cơ sở hạ tầng sẵn có, khách quen thuộc',
  },
];

const TECHNOLOGIES: Technology[] = [
  {
    id: 'smart-grid',
    name: 'Hệ thống lưới điện thông minh',
    type: 'grid',
    efficiency_boost: 15,
    user_experience: 10,
    cost: 50,
    maintenance_reduction: 20,
    description: 'Tối ưu hóa tải điện và giảm chi phí vận hành',
  },
  {
    id: 'mobile-app',
    name: 'Ứng dụng di động thông minh',
    type: 'software',
    efficiency_boost: 5,
    user_experience: 30,
    cost: 30,
    maintenance_reduction: 10,
    description: 'Đặt chỗ, thanh toán và theo dõi quá trình sạc',
  },
  {
    id: 'contactless-payment',
    name: 'Thanh toán không tiếp xúc',
    type: 'payment',
    efficiency_boost: 0,
    user_experience: 25,
    cost: 20,
    maintenance_reduction: 5,
    description: 'NFC, QR code và thanh toán di động',
  },
  {
    id: 'ai-monitoring',
    name: 'Giám sát AI & IoT',
    type: 'monitoring',
    efficiency_boost: 20,
    user_experience: 15,
    cost: 40,
    maintenance_reduction: 30,
    description: 'Phát hiện sớm sự cố và bảo trì dự báo',
  },
  {
    id: 'solar-integration',
    name: 'Tích hợp năng lượng mặt trời',
    type: 'grid',
    efficiency_boost: 25,
    user_experience: 5,
    cost: 60,
    maintenance_reduction: 0,
    description: 'Sử dụng năng lượng tái tạo và giảm chi phí điện',
  },
];

const EVChargingNetworkGame: React.FC<GameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [gamePhase, setGamePhase] = useState<
    'briefing' | 'location-selection' | 'station-selection' | 'technology-selection' | 'deployment' | 'results'
  >('briefing');
  const [selectedLocations, setSelectedLocations] = useState<Location[]>([]);
  const [selectedStations, setSelectedStations] = useState<{ location: Location; station: ChargingStation }[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);
  const [budget /* setBudget */] = useState(500);
  const [deploymentProgress, setDeploymentProgress] = useState(0);
  const [, /* isDeploying */ setIsDeploying] = useState(false);

  // Network metrics
  const [userSatisfaction, setUserSatisfaction] = useState(0);
  const [networkEfficiency, setNetworkEfficiency] = useState(0);
  const [marketCoverage, setMarketCoverage] = useState(0);

  const totalCost =
    selectedStations.reduce((sum, item) => sum + item.station.cost * item.location.installation_cost_multiplier, 0) +
    selectedTechnologies.reduce((sum, tech) => sum + tech.cost, 0);

  const canAfford = totalCost <= budget;

  const calculateNetworkValue = () => {
    if (selectedStations.length === 0) return { coverage: 0, efficiency: 0, satisfaction: 0 };

    // Coverage score based on location diversity and traffic
    const coverageScore =
      selectedStations.reduce((sum, item) => {
        return sum + (item.location.traffic * item.location.demand_level) / 100;
      }, 0) / selectedStations.length;

    // Efficiency score based on station types and technologies
    const stationEfficiency =
      selectedStations.reduce((sum, item) => {
        return sum + (item.station.efficiency * item.station.power) / 100;
      }, 0) / selectedStations.length;

    const techBonus = selectedTechnologies.reduce((sum, tech) => sum + tech.efficiency_boost, 0);

    const efficiency = Math.min(100, stationEfficiency + techBonus);

    // User experience score
    const userExp =
      selectedStations.reduce((sum, item) => {
        const stationExp =
          item.station.type === 'ultra'
            ? 95
            : item.station.type === 'fast'
              ? 85
              : item.station.type === 'standard'
                ? 70
                : 50;
        return sum + stationExp;
      }, 0) / selectedStations.length;

    const techExpBonus = selectedTechnologies.reduce((sum, tech) => sum + tech.user_experience, 0);

    const satisfaction = Math.min(100, userExp + techExpBonus);

    return {
      coverage: Math.round(coverageScore),
      efficiency: Math.round(efficiency),
      satisfaction: Math.round(satisfaction),
    };
  };

  const startDeployment = () => {
    if (selectedStations.length === 0 || !canAfford) {
      onComplete(false, 0);
      return;
    }

    setGamePhase('deployment');
    setIsDeploying(true);

    const networkValue = calculateNetworkValue();
    setMarketCoverage(networkValue.coverage);
    setNetworkEfficiency(networkValue.efficiency);
    setUserSatisfaction(networkValue.satisfaction);

    const totalInstallationTime = selectedStations.reduce((sum, item) => sum + item.station.installation_time, 0);

    const interval = setInterval(() => {
      setDeploymentProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDeploying(false);
          setGamePhase('results');
          return 100;
        }
        return prev + (100 / totalInstallationTime) * 2;
      });
    }, 200);
  };

  const getOverallScore = () => {
    const networkValue = calculateNetworkValue();
    const costEfficiency = Math.round(((budget - totalCost) / budget) * 100);
    const sustainability = selectedTechnologies.some((t) => t.id === 'solar-integration') ? 20 : 0;

    return Math.round(
      networkValue.coverage * 0.25 +
        networkValue.efficiency * 0.25 +
        networkValue.satisfaction * 0.25 +
        costEfficiency * 0.15 +
        sustainability * 0.1,
    );
  };

  useEffect(() => {
    if (timeLeft <= 0 && gamePhase !== 'results') {
      onComplete(false, 0);
    }
  }, [timeLeft, gamePhase, onComplete]);

  if (gamePhase === 'briefing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-slate-900 to-blue-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-green-500/20">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Zap className="w-16 h-16 text-green-400" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Mạng lưới sạc xe điện</h1>
            <p className="text-xl text-gray-300 mb-6">Xây dựng hệ thống sạc xe điện thông minh cho tương lai xanh!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Target className="w-6 h-6 mr-2 text-green-400" />
                Mục tiêu nhiệm vụ
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Chọn vị trí chiến lược cho trạm sạc</li>
                <li>• Lựa chọn loại trạm sạc phù hợp</li>
                <li>• Tích hợp công nghệ thông minh</li>
                <li>• Quản lý ngân sách 500 triệu VNĐ</li>
                <li>• Tối ưu hóa trải nghiệm người dùng</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Battery className="w-6 h-6 mr-2 text-blue-400" />
                Tiêu chí đánh giá
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>
                  • <span className="text-green-400">Phủ sóng thị trường (25%)</span> - Tiếp cận khách hàng
                </li>
                <li>
                  • <span className="text-blue-400">Hiệu quả mạng lưới (25%)</span> - Tối ưu vận hành
                </li>
                <li>
                  • <span className="text-yellow-400">Hài lòng người dùng (25%)</span> - Trải nghiệm sạc
                </li>
                <li>
                  • <span className="text-purple-400">Hiệu quả chi phí (15%)</span> - Tối ưu ngân sách
                </li>
                <li>
                  • <span className="text-emerald-400">Tính bền vững (10%)</span> - Năng lượng xanh
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('location-selection')}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Bắt đầu xây dựng mạng lưới
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'location-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-slate-900 to-blue-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn vị trí trạm sạc (tối đa 4)</h2>
            <p className="text-gray-300">Ngân sách: {budget} triệu VNĐ</p>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {LOCATIONS.map((location) => {
              const isSelected = selectedLocations.some((l) => l.id === location.id);

              return (
                <div
                  key={location.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-green-500 bg-green-500/20'
                      : selectedLocations.length >= 4 && !isSelected
                        ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                        : 'border-white/20 hover:border-green-400/50'
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedLocations((prev) => prev.filter((l) => l.id !== location.id));
                    } else if (selectedLocations.length < 4) {
                      setSelectedLocations((prev) => [...prev, location]);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <MapPin className="w-8 h-8 text-green-400" />
                    <span className="text-yellow-400 font-bold">×{location.installation_cost_multiplier}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{location.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{location.description}</p>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-400">Lưu lượng:</span>
                      <div className="bg-gray-700 rounded-full h-2 mt-1">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${location.traffic}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Nhu cầu:</span>
                      <div className="bg-gray-700 rounded-full h-2 mt-1">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${location.demand_level}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Không gian:</span>
                      <div className="bg-gray-700 rounded-full h-2 mt-1">
                        <div
                          className="bg-purple-500 h-2 rounded-full"
                          style={{ width: `${location.available_space}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <span
                        className={`text-sm px-2 py-1 rounded ${
                          location.type === 'urban'
                            ? 'bg-red-500/20 text-red-400'
                            : location.type === 'highway'
                              ? 'bg-blue-500/20 text-blue-400'
                              : location.type === 'commercial'
                                ? 'bg-yellow-500/20 text-yellow-400'
                                : 'bg-green-500/20 text-green-400'
                        }`}
                      >
                        {location.type}
                      </span>
                    </div>
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
              onClick={() => setGamePhase('station-selection')}
              disabled={selectedLocations.length === 0}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Tiếp tục chọn trạm sạc
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'station-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-slate-900 to-blue-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn loại trạm sạc cho từng vị trí</h2>
            <div className="text-gray-300">
              Đã chọn trạm cho: {selectedStations.length}/{selectedLocations.length} vị trí
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          {selectedLocations.map((location) => {
            const existingStation = selectedStations.find((s) => s.location.id === location.id);

            return (
              <div key={location.id} className="bg-white/10 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <MapPin className="w-6 h-6 mr-2 text-green-400" />
                  {location.name}
                  {existingStation && (
                    <span className="ml-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                      ✓ {existingStation.station.name}
                    </span>
                  )}
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {CHARGING_STATIONS.map((station) => {
                    const totalStationCost = station.cost * location.installation_cost_multiplier;
                    const currentTotalCost =
                      selectedStations
                        .filter((s) => s.location.id !== location.id)
                        .reduce(
                          (sum, item) => sum + item.station.cost * item.location.installation_cost_multiplier,
                          0,
                        ) +
                      totalStationCost +
                      selectedTechnologies.reduce((sum, tech) => sum + tech.cost, 0);

                    const canAffordThis = currentTotalCost <= budget;
                    const isSelected = existingStation?.station.id === station.id;

                    return (
                      <div
                        key={station.id}
                        className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 border cursor-pointer transition-all duration-200 hover:scale-105 ${
                          isSelected
                            ? 'border-blue-500 bg-blue-500/20'
                            : !canAffordThis
                              ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                              : 'border-white/10 hover:border-blue-400/50'
                        }`}
                        onClick={() => {
                          if (canAffordThis) {
                            setSelectedStations((prev) => {
                              const filtered = prev.filter((s) => s.location.id !== location.id);
                              return [...filtered, { location, station }];
                            });
                          }
                        }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            {station.type === 'ultra' && <Zap className="w-6 h-6 text-purple-400" />}
                            {station.type === 'fast' && <Battery className="w-6 h-6 text-blue-400" />}
                            {station.type === 'standard' && <Plug className="w-6 h-6 text-green-400" />}
                            {station.type === 'slow' && <Car className="w-6 h-6 text-yellow-400" />}
                            <span className="ml-2 text-sm text-gray-400">{station.power}kW</span>
                          </div>
                          <span className="text-yellow-400 font-bold">{Math.round(totalStationCost)}M</span>
                        </div>

                        <h4 className="text-sm font-bold text-white mb-1">{station.name}</h4>
                        <p className="text-gray-300 text-xs mb-2">{station.description}</p>

                        <div className="text-xs">
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-400">Hiệu suất:</span>
                            <span className="text-white">{station.efficiency}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Sức chứa:</span>
                            <span className="text-white">{station.capacity} xe</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="text-center">
            <button
              onClick={() => setGamePhase('technology-selection')}
              disabled={selectedStations.length !== selectedLocations.length}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
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
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-slate-900 to-blue-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn công nghệ hỗ trợ (tối đa 3)</h2>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <span>
                Ngân sách còn lại:{' '}
                {budget -
                  selectedStations.reduce(
                    (sum, item) => sum + item.station.cost * item.location.installation_cost_multiplier,
                    0,
                  )}{' '}
                triệu VNĐ
              </span>
              <span>Đã chọn: {selectedTechnologies.length}/3</span>
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {TECHNOLOGIES.map((tech) => {
              const isSelected = selectedTechnologies.some((t) => t.id === tech.id);
              const currentCostWithoutTech =
                selectedStations.reduce(
                  (sum, item) => sum + item.station.cost * item.location.installation_cost_multiplier,
                  0,
                ) + selectedTechnologies.filter((t) => t.id !== tech.id).reduce((sum, t) => sum + t.cost, 0);
              const canSelect = selectedTechnologies.length < 3 && currentCostWithoutTech + tech.cost <= budget;

              return (
                <div
                  key={tech.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-purple-500 bg-purple-500/20'
                      : !canSelect && !isSelected
                        ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                        : 'border-white/20 hover:border-purple-400/50'
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
                    <Zap className="w-8 h-8 text-purple-400" />
                    <span className="text-yellow-400 font-bold">{tech.cost}M VNĐ</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{tech.description}</p>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-400">Hiệu quả:</span>
                      <span className="text-green-400 ml-2">+{tech.efficiency_boost}%</span>
                    </div>
                    <div>
                      <span className="text-gray-400">UX:</span>
                      <span className="text-blue-400 ml-2">+{tech.user_experience}%</span>
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

          <div className="bg-white/10 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Tóm tắt mạng lưới sạc</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-2">Vị trí ({selectedStations.length})</h4>
                {selectedStations.map((item) => (
                  <p key={item.location.id} className="text-gray-300 text-sm">
                    {item.location.name} - {item.station.name}
                  </p>
                ))}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">
                  Công nghệ ({selectedTechnologies.length})
                </h4>
                {selectedTechnologies.map((tech) => (
                  <p key={tech.id} className="text-gray-300 text-sm">
                    {tech.name}
                  </p>
                ))}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-yellow-400 mb-2">Chi phí</h4>
                <p className="text-gray-300 text-sm">
                  Trạm sạc:{' '}
                  {selectedStations
                    .reduce((sum, item) => sum + item.station.cost * item.location.installation_cost_multiplier, 0)
                    .toFixed(0)}
                  M VNĐ
                </p>
                <p className="text-gray-300 text-sm">
                  Công nghệ: {selectedTechnologies.reduce((sum, tech) => sum + tech.cost, 0)}M VNĐ
                </p>
                <p className="text-white font-bold">Tổng: {totalCost.toFixed(0)}M VNĐ</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-white">Ngân sách: {budget} triệu VNĐ</span>
                <span className={`text-lg font-semibold ${canAfford ? 'text-green-400' : 'text-red-400'}`}>
                  {canAfford ? '✅ Trong ngân sách' : '❌ Vượt ngân sách'}
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={startDeployment}
              disabled={!canAfford || selectedStations.length === 0}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Triển khai mạng lưới
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'deployment') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-slate-900 to-blue-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-green-500/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Đang triển khai mạng lưới sạc...</h2>
            <p className="text-gray-300">Lắp đặt trạm sạc và tích hợp công nghệ</p>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <div className="flex justify-between text-white mb-2">
                <span>Tiến độ triển khai</span>
                <span>{Math.round(deploymentProgress)}%</span>
              </div>
              <div className="bg-gray-700 rounded-full h-6">
                <div
                  className="bg-gradient-to-r from-green-500 to-blue-500 h-6 rounded-full transition-all duration-300"
                  style={{ width: `${deploymentProgress}%` }}
                ></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-400">Phủ sóng thị trường</span>
                  <span className="text-white font-bold">{marketCoverage}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${marketCoverage}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-400">Hiệu quả mạng lưới</span>
                  <span className="text-white font-bold">{networkEfficiency}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${networkEfficiency}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-yellow-400">Hài lòng người dùng</span>
                  <span className="text-white font-bold">{userSatisfaction}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-yellow-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${userSatisfaction}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center space-x-4 text-gray-300">
              <Zap className="w-6 h-6 text-green-400 animate-pulse" />
              <span>Đang kết nối với lưới điện quốc gia...</span>
              <Zap className="w-6 h-6 text-green-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'results') {
    const networkValue = calculateNetworkValue();
    const networkScore = getOverallScore();

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-slate-900 to-blue-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-green-500/20">
          <div className="text-center mb-8">
            <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">Mạng lưới triển khai thành công!</h2>
            <p className="text-2xl text-gray-300 mb-2">{selectedStations.length} trạm sạc đã sẵn sàng</p>
            <div className="text-6xl font-bold text-white mb-4">{networkScore} điểm</div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Hiệu suất mạng lưới</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-green-400">Phủ sóng thị trường:</span>
                  <span className="text-white font-bold">{networkValue.coverage}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-400">Hiệu quả vận hành:</span>
                  <span className="text-white font-bold">{networkValue.efficiency}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-yellow-400">Hài lòng người dùng:</span>
                  <span className="text-white font-bold">{networkValue.satisfaction}%</span>
                </div>
                <div className="flex justify-between border-t border-white/20 pt-2">
                  <span className="text-purple-400">Ngân sách sử dụng:</span>
                  <span className="text-white font-bold">{totalCost.toFixed(0)}/500M VNĐ</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Đánh giá</h3>
              <div className="space-y-2 text-gray-300">
                {networkScore >= 90 && <p>🏆 Mạng lưới hoàn hảo! Sẽ dẫn đầu thị trường xe điện.</p>}
                {networkScore >= 80 && networkScore < 90 && (
                  <p>🌟 Mạng lưới xuất sắc! Phục vụ tốt nhu cầu người dùng.</p>
                )}
                {networkScore >= 70 && networkScore < 80 && <p>✅ Mạng lưới khá tốt! Cần mở rộng thêm một số điểm.</p>}
                {networkScore >= 60 && networkScore < 70 && (
                  <p>⚠️ Mạng lưới cơ bản! Cần cải thiện hiệu quả và phủ sóng.</p>
                )}
                {networkScore < 60 && <p>❌ Mạng lưới chưa tối ưu! Cần tái cấu trúc chiến lược.</p>}

                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-sm">
                    <strong>Tip:</strong> Mạng lưới sạc thành công cần cân bằng giữa vị trí chiến lược, công nghệ phù
                    hợp và trải nghiệm người dùng.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-x-4">
            <button
              onClick={onRestart}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Thiết kế lại mạng lưới
            </button>
            <button
              onClick={() => onComplete(true, networkScore)}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
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

export default EVChargingNetworkGame;
