import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Sprout, Droplet, Sun, ThermometerSun, Wifi, AlertTriangle, RotateCcw, CheckCircle } from 'lucide-react';

interface GameProps {
  onComplete: (success: boolean) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface CropData {
  name: string;
  stage: 'germination' | 'growing' | 'flowering' | 'fruiting' | 'harvest';
  growth: number; // 0-100
  waterLevel: number; // 0-100
  sunlightHours: number; // 0-12
  temperature: number; // 15-35 celsius
  nutrients: number; // 0-100
  health: number; // 0-100
  yield: number; // predicted kg/hectare
}

interface SensorData {
  soilMoisture: number;
  temperature: number;
  humidity: number;
  lightLevel: number;
  ph: number;
}

const OPTIMAL_RANGES = {
  soilMoisture: { min: 60, max: 80 },
  temperature: { min: 22, max: 28 },
  humidity: { min: 65, max: 75 },
  lightLevel: { min: 70, max: 90 },
  ph: { min: 6.0, max: 7.0 },
};

const SmartFarmingSimulatorGame: React.FC<GameProps> = ({ onComplete, onRestart }) => {
  const [gamePhase, setGamePhase] = useState<'setup' | 'monitoring' | 'results'>('setup');
  const [score, setScore] = useState(0);
  const [currentDay, setCurrentDay] = useState(1);
  const [totalDays] = useState(21); // 3 week simulation
  const [selectedCrop, setSelectedCrop] = useState<string>('');
  const [farmSize, setFarmSize] = useState<number>(5); // hectares
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [crops, setCrops] = useState<CropData[]>([
    {
      name: 'Cà chua Cherry',
      stage: 'germination',
      growth: 10,
      waterLevel: 70,
      sunlightHours: 8,
      temperature: 24,
      nutrients: 80,
      health: 90,
      yield: 0,
    },
    {
      name: 'Rau Xà lách',
      stage: 'germination',
      growth: 15,
      waterLevel: 65,
      sunlightHours: 6,
      temperature: 22,
      nutrients: 75,
      health: 85,
      yield: 0,
    },
    {
      name: 'Ớt Chuông',
      stage: 'germination',
      growth: 8,
      waterLevel: 72,
      sunlightHours: 9,
      temperature: 26,
      nutrients: 85,
      health: 88,
      yield: 0,
    },
  ]);

  const [sensorData, setSensorData] = useState<SensorData>({
    soilMoisture: 70,
    temperature: 24,
    humidity: 70,
    lightLevel: 80,
    ph: 6.5,
  });

  const [alerts, setAlerts] = useState<string[]>([]);
  const [actions, setActions] = useState<number>(0);
  const [budget, setBudget] = useState(100000); // VND thousands
  const [totalRevenue, setTotalRevenue] = useState(0);

  const calculateHealthFactor = useCallback((): number => {
    let score = 0;
    let factors = 0;

    Object.entries(OPTIMAL_RANGES).forEach(([key, range]) => {
      const value = sensorData[key as keyof SensorData];
      if (value >= range.min && value <= range.max) {
        score += 1;
      } else {
        score += Math.max(0, 1 - Math.abs(value - (range.min + range.max) / 2) / range.max);
      }
      factors += 1;
    });

    return score / factors;
  }, [sensorData]);

  const calculateYield = useCallback(
    (growth: number, health: number, cropName: string): number => {
      const baseYield = {
        'Cà chua Cherry': 2500,
        'Rau Xà lách': 1800,
        'Ớt Chuông': 2200,
      };

      const base = baseYield[cropName as keyof typeof baseYield] || 2000;
      return Math.round(base * (growth / 100) * (health / 100) * farmSize);
    },
    [farmSize],
  );

  const checkAlerts = useCallback(() => {
    const newAlerts: string[] = [];

    if (sensorData.soilMoisture < 50) {
      newAlerts.push('⚠️ Độ ẩm đất thấp - Cần tưới nước');
    }
    if (sensorData.temperature > 30) {
      newAlerts.push('🌡️ Nhiệt độ cao - Cần làm mát');
    }
    if (sensorData.ph < 6.0 || sensorData.ph > 7.2) {
      newAlerts.push('🧪 pH đất không tối ưu - Cần điều chỉnh');
    }
    if (sensorData.lightLevel < 60) {
      newAlerts.push('☀️ Ánh sáng thiếu - Cần bổ sung LED');
    }

    setAlerts(newAlerts);
  }, [sensorData]);

  const calculateFinalResults = useCallback(() => {
    const totalYield = crops.reduce((sum, crop) => sum + crop.yield, 0);
    const avgHealth = crops.reduce((sum, crop) => sum + crop.health, 0) / crops.length;

    // Revenue calculation (VND per kg)
    const pricePerKg = {
      'Cà chua Cherry': 25,
      'Rau Xà lách': 20,
      'Ớt Chuông': 30,
    };

    const revenue = crops.reduce((sum, crop) => {
      const price = pricePerKg[crop.name as keyof typeof pricePerKg] || 25;
      return sum + crop.yield * price;
    }, 0);

    setTotalRevenue(revenue);

    const finalScore = Math.round(
      avgHealth * 2 + totalYield / 100 + revenue / 1000 + actions * 10 - alerts.length * 50,
    );

    setScore(finalScore);

    // Complete game
    setTimeout(() => {
      onComplete(avgHealth > 70 && totalYield > 10000);
    }, 2000);
  }, [crops, actions, alerts, onComplete]);

  const simulateDay = useCallback(() => {
    setCurrentDay((prev) => {
      const newDay = prev + 1;

      if (newDay > totalDays) {
        setGamePhase('results');
        calculateFinalResults();
        return prev;
      }

      // Simulate environmental changes
      setSensorData((prev) => ({
        soilMoisture: Math.max(30, prev.soilMoisture - Math.random() * 10),
        temperature: 22 + Math.random() * 8,
        humidity: 60 + Math.random() * 20,
        lightLevel: 70 + Math.random() * 25,
        ph: 6.0 + Math.random() * 1.2,
      }));

      // Update crop growth
      setCrops((prev) =>
        prev.map((crop) => {
          const newGrowth = Math.min(100, crop.growth + Math.random() * 5);
          let newStage = crop.stage;

          if (newGrowth > 80) newStage = 'harvest';
          else if (newGrowth > 60) newStage = 'fruiting';
          else if (newGrowth > 40) newStage = 'flowering';
          else if (newGrowth > 20) newStage = 'growing';

          const healthFactor = calculateHealthFactor();
          const newHealth = Math.max(0, Math.min(100, crop.health + (healthFactor - 0.5) * 20));

          return {
            ...crop,
            growth: newGrowth,
            stage: newStage,
            health: newHealth,
            yield: calculateYield(newGrowth, newHealth, crop.name),
          };
        }),
      );

      // Check for alerts
      checkAlerts();

      return newDay;
    });
  }, [totalDays, calculateFinalResults, calculateHealthFactor, calculateYield, checkAlerts]);

  useEffect(() => {
    if (gamePhase === 'monitoring') {
      intervalRef.current = setInterval(() => {
        simulateDay();
      }, 3000); // 3 seconds per day

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [gamePhase, simulateDay]);

  const performAction = (actionType: string, cost: number) => {
    if (budget >= cost) {
      setBudget((prev) => prev - cost);
      setActions((prev) => prev + 1);

      switch (actionType) {
        case 'water':
          setSensorData((prev) => ({ ...prev, soilMoisture: Math.min(100, prev.soilMoisture + 20) }));
          break;
        case 'cool':
          setSensorData((prev) => ({ ...prev, temperature: Math.max(20, prev.temperature - 3) }));
          break;
        case 'fertilize':
          setCrops((prev) => prev.map((crop) => ({ ...crop, nutrients: Math.min(100, crop.nutrients + 15) })));
          break;
        case 'ph-adjust':
          setSensorData((prev) => ({ ...prev, ph: 6.5 }));
          break;
        case 'light':
          setSensorData((prev) => ({ ...prev, lightLevel: Math.min(100, prev.lightLevel + 15) }));
          break;
      }

      // Update score for good actions
      setScore((prev) => prev + 100);
    }
  };

  const startMonitoring = () => {
    if (selectedCrop && farmSize > 0) {
      setGamePhase('monitoring');
    }
  };

  const getSensorStatus = (value: number, range: { min: number; max: number }) => {
    if (value >= range.min && value <= range.max) return 'optimal';
    if (value < range.min * 0.8 || value > range.max * 1.2) return 'critical';
    return 'warning';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'optimal':
        return 'text-green-400';
      case 'warning':
        return 'text-yellow-400';
      case 'critical':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  if (gamePhase === 'setup') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-slate-900 to-green-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-2xl w-full border border-green-500/20">
          <div className="text-center mb-8">
            <Sprout className="w-16 h-16 mx-auto mb-4 text-green-400" />
            <h1 className="text-3xl font-bold text-white mb-2">🌱 Smart Farming Simulator</h1>
            <p className="text-gray-300">Quản lý nông trại thông minh với IoT và AI</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-3">Chọn cây trồng chính:</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {crops.map((crop, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCrop(crop.name)}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                      selectedCrop === crop.name
                        ? 'border-green-500 bg-green-500/10 text-green-400'
                        : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-green-400'
                    }`}
                  >
                    <div className="text-lg font-medium">{crop.name}</div>
                    <div className="text-sm opacity-75">Năng suất cao</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-3">Quy mô nông trại (hecta):</label>
              <input
                type="range"
                min="1"
                max="20"
                value={farmSize}
                onChange={(e) => setFarmSize(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-gray-400 text-sm mt-2">
                <span>1 ha</span>
                <span className="text-green-400 font-medium">{farmSize} hecta</span>
                <span>20 ha</span>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="font-semibold text-green-400 mb-2">📊 Dự báo đầu tư:</h3>
              <div className="space-y-1 text-sm">
                <p className="text-gray-300">
                  Chi phí IoT: <span className="text-green-400">{farmSize * 5000} nghìn VNĐ</span>
                </p>
                <p className="text-gray-300">
                  Chi phí vận hành: <span className="text-green-400">{farmSize * 2000} nghìn VNĐ</span>
                </p>
                <p className="text-gray-300">
                  Ngân sách khả dụng: <span className="text-green-400">{budget} nghìn VNĐ</span>
                </p>
              </div>
            </div>

            <button
              onClick={startMonitoring}
              disabled={!selectedCrop || farmSize === 0}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 px-6 rounded-xl font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <Wifi className="w-5 h-5 mr-2" />
              Bắt đầu Giám sát IoT
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'monitoring') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-slate-900 to-green-900 p-4">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold text-white flex items-center">
                  <Sprout className="w-8 h-8 mr-3 text-green-400" />
                  Smart Farm Dashboard
                </h1>
                <p className="text-gray-300">
                  Cây trồng: {selectedCrop} • Quy mô: {farmSize} hecta
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">Ngày {currentDay}</div>
                  <div className="text-sm text-gray-400">/ {totalDays} ngày</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-yellow-400">{budget.toLocaleString()}</div>
                  <div className="text-sm text-gray-400">nghìn VNĐ</div>
                </div>
              </div>
            </div>
          </div>

          {/* Alerts */}
          {alerts.length > 0 && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
              <h3 className="font-semibold text-red-400 mb-2 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Cảnh báo hệ thống
              </h3>
              <div className="space-y-1">
                {alerts.map((alert, index) => (
                  <p key={index} className="text-sm text-gray-300">
                    {alert}
                  </p>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sensor Data */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
              <h3 className="font-semibold text-white mb-4 flex items-center">
                <Wifi className="w-5 h-5 mr-2 text-green-400" />
                Dữ liệu Cảm biến IoT
              </h3>
              <div className="space-y-4">
                {Object.entries(sensorData).map(([key, value]) => {
                  const range = OPTIMAL_RANGES[key as keyof typeof OPTIMAL_RANGES];
                  const status = getSensorStatus(value, range);
                  return (
                    <div key={key} className="flex items-center justify-between">
                      <span className="text-gray-300 capitalize">
                        {key === 'soilMoisture'
                          ? 'Độ ẩm đất'
                          : key === 'temperature'
                            ? 'Nhiệt độ'
                            : key === 'humidity'
                              ? 'Độ ẩm không khí'
                              : key === 'lightLevel'
                                ? 'Cường độ ánh sáng'
                                : 'pH đất'}
                        :
                      </span>
                      <span className={`font-medium ${getStatusColor(status)}`}>
                        {typeof value === 'number' ? value.toFixed(1) : value}
                        {key === 'temperature'
                          ? '°C'
                          : key.includes('Level') || key.includes('Moisture') || key.includes('humidity')
                            ? '%'
                            : ''}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Crop Status */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
              <h3 className="font-semibold text-white mb-4 flex items-center">
                <Sprout className="w-5 h-5 mr-2 text-green-400" />
                Tình trạng Cây trồng
              </h3>
              <div className="space-y-4">
                {crops.map((crop, index) => (
                  <div key={index} className="border border-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-white">{crop.name}</h4>
                      <span className="text-sm text-gray-400 capitalize">{crop.stage}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Sinh trưởng:</span>
                        <span className="text-green-400 ml-2">{crop.growth.toFixed(0)}%</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Sức khỏe:</span>
                        <span className="text-blue-400 ml-2">{crop.health.toFixed(0)}%</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-gray-400">Năng suất dự kiến:</span>
                        <span className="text-yellow-400 ml-2">{crop.yield.toLocaleString()} kg</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20">
            <h3 className="font-semibold text-white mb-4">⚡ Hành động Khẩn cấp</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              <button
                onClick={() => performAction('water', 5000)}
                disabled={budget < 5000}
                className="flex flex-col items-center p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg hover:bg-blue-500/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Droplet className="w-6 h-6 text-blue-400 mb-1" />
                <span className="text-sm text-white">Tưới nước</span>
                <span className="text-xs text-gray-400">5k VNĐ</span>
              </button>

              <button
                onClick={() => performAction('cool', 8000)}
                disabled={budget < 8000}
                className="flex flex-col items-center p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-lg hover:bg-cyan-500/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ThermometerSun className="w-6 h-6 text-cyan-400 mb-1" />
                <span className="text-sm text-white">Làm mát</span>
                <span className="text-xs text-gray-400">8k VNĐ</span>
              </button>

              <button
                onClick={() => performAction('fertilize', 12000)}
                disabled={budget < 12000}
                className="flex flex-col items-center p-3 bg-green-500/10 border border-green-500/20 rounded-lg hover:bg-green-500/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Sprout className="w-6 h-6 text-green-400 mb-1" />
                <span className="text-sm text-white">Bón phân</span>
                <span className="text-xs text-gray-400">12k VNĐ</span>
              </button>

              <button
                onClick={() => performAction('ph-adjust', 6000)}
                disabled={budget < 6000}
                className="flex flex-col items-center p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg hover:bg-purple-500/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="text-lg mb-1">🧪</span>
                <span className="text-sm text-white">Điều chỉnh pH</span>
                <span className="text-xs text-gray-400">6k VNĐ</span>
              </button>

              <button
                onClick={() => performAction('light', 10000)}
                disabled={budget < 10000}
                className="flex flex-col items-center p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg hover:bg-yellow-500/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Sun className="w-6 h-6 text-yellow-400 mb-1" />
                <span className="text-sm text-white">Bổ sung LED</span>
                <span className="text-xs text-gray-400">10k VNĐ</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Results phase
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-slate-900 to-green-900 flex items-center justify-center p-4">
      <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-2xl w-full border border-green-500/20">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-400" />
          <h2 className="text-3xl font-bold text-white mb-2">Hoàn thành Mùa vụ!</h2>
          <p className="text-gray-300 mb-6">Kết quả nông trại thông minh của bạn</p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="font-semibold text-green-400 mb-2">📊 Tổng năng suất</h3>
              <div className="text-2xl font-bold text-white">
                {crops.reduce((sum, crop) => sum + crop.yield, 0).toLocaleString()} kg
              </div>
              <div className="text-sm text-gray-400">Trên {farmSize} hecta</div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h3 className="font-semibold text-blue-400 mb-2">💰 Doanh thu</h3>
              <div className="text-2xl font-bold text-white">{totalRevenue.toLocaleString()} VNĐ</div>
              <div className="text-sm text-gray-400">Lợi nhuận ước tính</div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-400 mb-2">🏆 Điểm số</h3>
              <div className="text-2xl font-bold text-white">{score}</div>
              <div className="text-sm text-gray-400">Smart Farming Score</div>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
              <h3 className="font-semibold text-purple-400 mb-2">⚡ Hành động</h3>
              <div className="text-2xl font-bold text-white">{actions}</div>
              <div className="text-sm text-gray-400">Can thiệp IoT</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-green-400 mb-3">🎯 Đánh giá hiệu quả</h3>
            <div className="space-y-2 text-left">
              {crops.map((crop, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-300">{crop.name}:</span>
                  <span className="text-green-400">{crop.health.toFixed(0)}% sức khỏe</span>
                </div>
              ))}
              <div className="border-t border-gray-700 pt-2 mt-2">
                <div className="flex justify-between items-center font-medium">
                  <span className="text-white">ROI ước tính:</span>
                  <span className="text-green-400">+{(((totalRevenue - 50000) / 50000) * 100).toFixed(0)}%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={onRestart}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-xl font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-200 flex items-center justify-center"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Mùa vụ mới
            </button>

            <button
              onClick={() => onComplete(true)}
              className="w-full bg-white/10 text-white py-3 px-6 rounded-xl font-medium hover:bg-white/20 transition-all duration-200"
            >
              Hoàn thành
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartFarmingSimulatorGame;
