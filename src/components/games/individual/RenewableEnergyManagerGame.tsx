'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Wind, Zap, Droplets, TrendingUp, Target, Leaf, Factory, AlertCircle, Battery } from 'lucide-react';

interface EnergySource {
  id: string;
  name: string;
  type: 'solar' | 'wind' | 'hydro' | 'nuclear' | 'coal' | 'gas';
  capacity: number; // MW
  cost: number; // per MW
  efficiency: number; // 0-1
  carbonEmission: number; // tonnes CO2/MWh
  maintenanceCost: number; // per MW per turn
  icon: React.ReactNode;
  description: string;
  weatherDependency: boolean;
}

interface WeatherCondition {
  sunlight: number; // 0-1
  windSpeed: number; // 0-1
  rainfall: number; // 0-1
  description: string;
  icon: string;
}

interface EnergyGrid {
  sources: { [key: string]: number }; // sourceId -> number of units
  storage: number; // MWh
  maxStorage: number; // MWh
  demand: number; // MW
  price: number; // per MWh
}

const ENERGY_SOURCES: EnergySource[] = [
  {
    id: 'solar',
    name: 'Điện Mặt Trời',
    type: 'solar',
    capacity: 50,
    cost: 1000,
    efficiency: 0.85,
    carbonEmission: 0,
    maintenanceCost: 20,
    icon: <Sun className="w-6 h-6" />,
    description: 'Năng lượng từ ánh sáng mặt trời, phụ thuộc thời tiết',
    weatherDependency: true
  },
  {
    id: 'wind',
    name: 'Điện Gió',
    type: 'wind',
    capacity: 75,
    cost: 1200,
    efficiency: 0.8,
    carbonEmission: 0,
    maintenanceCost: 30,
    icon: <Wind className="w-6 h-6" />,
    description: 'Năng lượng từ sức gió, hiệu quả cao khi có gió mạnh',
    weatherDependency: true
  },
  {
    id: 'hydro',
    name: 'Thủy Điện',
    type: 'hydro',
    capacity: 100,
    cost: 2000,
    efficiency: 0.9,
    carbonEmission: 0.1,
    maintenanceCost: 15,
    icon: <Droplets className="w-6 h-6" />,
    description: 'Năng lượng từ nước, ổn định và lâu dài',
    weatherDependency: true
  },
  {
    id: 'nuclear',
    name: 'Điện Hạt Nhân',
    type: 'nuclear',
    capacity: 500,
    cost: 5000,
    efficiency: 0.95,
    carbonEmission: 0.05,
    maintenanceCost: 100,
    icon: <Zap className="w-6 h-6" />,
    description: 'Năng lượng hạt nhân, sạch nhưng chi phí cao',
    weatherDependency: false
  },
  {
    id: 'coal',
    name: 'Nhiệt Điện Than',
    type: 'coal',
    capacity: 200,
    cost: 800,
    efficiency: 0.7,
    carbonEmission: 0.9,
    maintenanceCost: 40,
    icon: <Factory className="w-6 h-6" />,
    description: 'Năng lượng từ than, rẻ nhưng gây ô nhiễm cao',
    weatherDependency: false
  },
  {
    id: 'gas',
    name: 'Nhiệt Điện Khí',
    type: 'gas',
    capacity: 150,
    cost: 600,
    efficiency: 0.75,
    carbonEmission: 0.5,
    maintenanceCost: 35,
    icon: <Factory className="w-6 h-6" />,
    description: 'Năng lượng từ khí tự nhiên, linh hoạt',
    weatherDependency: false
  }
];

const WEATHER_CONDITIONS: WeatherCondition[] = [
  { sunlight: 0.9, windSpeed: 0.3, rainfall: 0.2, description: 'Nắng to', icon: '☀️' },
  { sunlight: 0.7, windSpeed: 0.6, rainfall: 0.4, description: 'Có mây', icon: '⛅' },
  { sunlight: 0.3, windSpeed: 0.8, rainfall: 0.7, description: 'Mưa gió', icon: '🌧️' },
  { sunlight: 0.1, windSpeed: 0.9, rainfall: 0.9, description: 'Bão', icon: '⛈️' },
  { sunlight: 0.8, windSpeed: 0.7, rainfall: 0.3, description: 'Lý tưởng', icon: '🌤️' }
];

export default function RenewableEnergyManagerGame() {
  const [grid, setGrid] = useState<EnergyGrid>({
    sources: {},
    storage: 0,
    maxStorage: 1000,
    demand: 500,
    price: 50
  });
  
  const [budget, setBudget] = useState(10000);
  const [currentWeather, setCurrentWeather] = useState<WeatherCondition>(WEATHER_CONDITIONS[0]);
  const [turn, setTurn] = useState(1);
  const [totalCarbonEmission, setTotalCarbonEmission] = useState(0);
  const [satisfactionLevel, setSatisfactionLevel] = useState(100);
  const [gameLog, setGameLog] = useState<string[]>([]);
  const [showTutorial, setShowTutorial] = useState(true);

  // Calculate current energy production
  const calculateProduction = () => {
    let totalProduction = 0;
    let totalEmission = 0;
    let totalMaintenance = 0;

    Object.entries(grid.sources).forEach(([sourceId, count]) => {
      const source = ENERGY_SOURCES.find(s => s.id === sourceId);
      if (source && count > 0) {
        let efficiency = source.efficiency;
        
        // Apply weather effects for renewable sources
        if (source.weatherDependency) {
          if (source.type === 'solar') {
            efficiency *= currentWeather.sunlight;
          } else if (source.type === 'wind') {
            efficiency *= currentWeather.windSpeed;
          } else if (source.type === 'hydro') {
            efficiency *= currentWeather.rainfall;
          }
        }
        
        const production = source.capacity * count * efficiency;
        totalProduction += production;
        totalEmission += production * source.carbonEmission;
        totalMaintenance += source.maintenanceCost * count;
      }
    });

    return { production: totalProduction, emission: totalEmission, maintenance: totalMaintenance };
  };

  const { production, emission, maintenance } = calculateProduction();
  const energyBalance = production - grid.demand;
  const renewableRatio = calculateRenewableRatio();

  function calculateRenewableRatio(): number {
    let renewableProduction = 0;
    let totalProduction = 0;

    Object.entries(grid.sources).forEach(([sourceId, count]) => {
      const source = ENERGY_SOURCES.find(s => s.id === sourceId);
      if (source && count > 0) {
        let efficiency = source.efficiency;
        
        if (source.weatherDependency && (source.type === 'solar' || source.type === 'wind' || source.type === 'hydro')) {
          if (source.type === 'solar') efficiency *= currentWeather.sunlight;
          else if (source.type === 'wind') efficiency *= currentWeather.windSpeed;
          else if (source.type === 'hydro') efficiency *= currentWeather.rainfall;
        }
        
        const production = source.capacity * count * efficiency;
        totalProduction += production;
        
        if (['solar', 'wind', 'hydro', 'nuclear'].includes(source.type)) {
          renewableProduction += production;
        }
      }
    });

    return totalProduction > 0 ? (renewableProduction / totalProduction) * 100 : 0;
  }

  const buyEnergySource = (sourceId: string) => {
    const source = ENERGY_SOURCES.find(s => s.id === sourceId);
    if (source && budget >= source.cost) {
      setBudget(prev => prev - source.cost);
      setGrid(prev => ({
        ...prev,
        sources: {
          ...prev.sources,
          [sourceId]: (prev.sources[sourceId] || 0) + 1
        }
      }));
      addToLog(`✅ Mua thêm 1 ${source.name} - Chi phí: ${source.cost.toLocaleString()} đồng`);
    } else {
      addToLog(`❌ Không đủ ngân sách để mua ${source?.name}`);
    }
  };

  const addToLog = (message: string) => {
    setGameLog(prev => [`Lượt ${turn}: ${message}`, ...prev.slice(0, 9)]);
  };

  const nextTurn = () => {
    // Random weather change
    const newWeather = WEATHER_CONDITIONS[Math.floor(Math.random() * WEATHER_CONDITIONS.length)];
    setCurrentWeather(newWeather);
    
    // Calculate income and costs
    const income = Math.max(0, production * grid.price);
    const costs = maintenance;
    const netIncome = income - costs;
    
    setBudget(prev => prev + netIncome);
    
    // Update carbon emission
    setTotalCarbonEmission(prev => prev + emission);
    
    // Calculate satisfaction based on renewable ratio and energy balance
    let newSatisfaction = satisfactionLevel;
    
    if (energyBalance < 0) {
      newSatisfaction -= 10; // Energy shortage
      addToLog(`⚠️ Thiếu hụt năng lượng: ${Math.abs(energyBalance).toFixed(0)} MW`);
    }
    
    if (renewableRatio > 80) {
      newSatisfaction += 5; // High renewable usage
    } else if (renewableRatio < 30) {
      newSatisfaction -= 5; // Low renewable usage
    }
    
    if (emission > 100) {
      newSatisfaction -= 3; // High emissions
    }
    
    setSatisfactionLevel(Math.max(0, Math.min(100, newSatisfaction)));
    
    // Random demand fluctuation
    setGrid(prev => ({
      ...prev,
      demand: Math.max(300, prev.demand + (Math.random() - 0.5) * 100)
    }));
    
    setTurn(prev => prev + 1);
    addToLog(`💰 Thu nhập: ${income.toLocaleString()} - Chi phí: ${costs.toLocaleString()} = ${netIncome.toLocaleString()} đồng`);
    addToLog(`🌡️ Thời tiết: ${newWeather.description}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-800 rounded-xl text-white">
      {/* Tutorial Modal */}
      {showTutorial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-xl max-w-2xl mx-4">
            <h2 className="text-2xl font-bold mb-4 text-green-400">🌱 Hướng Dẫn Năng Lượng Xanh</h2>
            <div className="space-y-4 text-gray-300">
              <p>• <strong>Mục tiêu:</strong> Xây dựng hệ thống năng lượng sạch và bền vững</p>
              <p>• <strong>Cân bằng:</strong> Đảm bảo sản xuất đủ để đáp ứng nhu cầu</p>
              <p>• <strong>Môi trường:</strong> Tối đa hóa năng lượng tái tạo, giảm phát thải</p>
              <p>• <strong>Thời tiết:</strong> Năng lượng tái tạo bị ảnh hưởng bởi điều kiện thời tiết</p>
              <p>• <strong>Hài lòng:</strong> Duy trì mức độ hài lòng của người dân {'>'} 50%</p>
            </div>
            <button 
              onClick={() => setShowTutorial(false)}
              className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-bold"
            >
              Bắt đầu xây dựng! 🚀
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          <Leaf className="w-8 h-8 text-green-400" />
          <h1 className="text-3xl font-bold">Quản Lý Năng Lượng Tái Tạo</h1>
          <Zap className="w-8 h-8 text-yellow-400" />
        </div>
      </div>

      {/* Dashboard */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
        <div className="bg-blue-900 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold">{budget.toLocaleString()}</div>
          <div className="text-sm text-gray-300">Ngân sách (đồng)</div>
        </div>
        
        <div className="bg-yellow-900 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold">{production.toFixed(0)} MW</div>
          <div className="text-sm text-gray-300">Sản xuất</div>
        </div>
        
        <div className="bg-red-900 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold">{grid.demand.toFixed(0)} MW</div>
          <div className="text-sm text-gray-300">Nhu cầu</div>
        </div>
        
        <div className={`p-4 rounded-lg text-center ${
          energyBalance >= 0 ? 'bg-green-900' : 'bg-red-900'
        }`}>
          <div className="text-2xl font-bold">
            {energyBalance >= 0 ? '+' : ''}{energyBalance.toFixed(0)} MW
          </div>
          <div className="text-sm text-gray-300">Cân bằng</div>
        </div>
        
        <div className="bg-purple-900 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold">{renewableRatio.toFixed(0)}%</div>
          <div className="text-sm text-gray-300">Tái tạo</div>
        </div>
        
        <div className={`p-4 rounded-lg text-center ${
          satisfactionLevel > 70 ? 'bg-green-900' : 
          satisfactionLevel > 40 ? 'bg-yellow-900' : 'bg-red-900'
        }`}>
          <div className="text-2xl font-bold">{satisfactionLevel}%</div>
          <div className="text-sm text-gray-300">Hài lòng</div>
        </div>
      </div>

      {/* Weather Info */}
      <div className="mb-6 p-4 bg-blue-900 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{currentWeather.icon}</span>
            <div>
              <h3 className="text-xl font-bold">Thời tiết: {currentWeather.description}</h3>
              <div className="text-sm text-gray-300">
                Ánh sáng: {(currentWeather.sunlight * 100).toFixed(0)}% | 
                Gió: {(currentWeather.windSpeed * 100).toFixed(0)}% | 
                Mưa: {(currentWeather.rainfall * 100).toFixed(0)}%
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-300">Lượt {turn}</div>
            <div className="text-sm text-gray-300">
              Phát thải: {emission.toFixed(1)} tCO₂/lượt
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Energy Sources Shop */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            🏪 Cửa Hàng Năng Lượng
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ENERGY_SOURCES.map((source) => {
              const count = grid.sources[source.id] || 0;
              const canAfford = budget >= source.cost;
              
              return (
                <div 
                  key={source.id}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    canAfford ? 'border-gray-600 bg-gray-700 hover:border-green-400' : 'border-gray-700 bg-gray-800'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      {source.icon}
                      <div>
                        <div className="font-bold">{source.name}</div>
                        <div className="text-xs text-gray-400">{source.description}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{source.cost.toLocaleString()}đ</div>
                      <div className="text-sm text-gray-400">{source.capacity} MW</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                    <div>Hiệu suất: {(source.efficiency * 100).toFixed(0)}%</div>
                    <div>Phát thải: {source.carbonEmission} tCO₂</div>
                    <div>Bảo trì: {source.maintenanceCost}đ/MW</div>
                    <div className={`${source.weatherDependency ? 'text-yellow-400' : 'text-green-400'}`}>
                      {source.weatherDependency ? '🌤️ Phụ thuộc thời tiết' : '⚡ Ổn định'}
                    </div>
                  </div>
                  
                  {count > 0 && (
                    <div className="mb-2 text-sm text-blue-300">
                      Sở hữu: {count} đơn vị
                    </div>
                  )}
                  
                  <button
                    onClick={() => buyEnergySource(source.id)}
                    disabled={!canAfford}
                    className={`w-full p-2 rounded font-bold transition-colors ${
                      canAfford 
                        ? 'bg-green-600 hover:bg-green-700 text-white' 
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {canAfford ? 'Mua' : 'Không đủ tiền'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Game Info & Controls */}
        <div className="space-y-6">
          {/* Environmental Impact */}
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              🌍 Tác Động Môi Trường
            </h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Tỷ lệ năng lượng tái tạo</span>
                  <span>{renewableRatio.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all"
                    style={{ width: `${Math.min(renewableRatio, 100)}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="text-sm mb-2">
                  Tổng phát thải CO₂: {totalCarbonEmission.toFixed(1)} tấn
                </div>
                <div className={`text-sm ${
                  totalCarbonEmission < 100 ? 'text-green-400' :
                  totalCarbonEmission < 500 ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {totalCarbonEmission < 100 ? '🟢 Rất sạch' :
                   totalCarbonEmission < 500 ? '🟡 Trung bình' : '🔴 Ô nhiễm cao'}
                </div>
              </div>
            </div>
          </div>

          {/* Game Log */}
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">📊 Nhật Ký Hoạt Động</h3>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {gameLog.map((log, index) => (
                <div key={index} className="text-sm text-gray-300 border-b border-gray-600 pb-1">
                  {log}
                </div>
              ))}
            </div>
          </div>

          {/* Next Turn */}
          <button
            onClick={nextTurn}
            className="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 rounded-lg font-bold text-lg transition-all"
          >
            Sang lượt tiếp theo ⏭️
          </button>

          {/* Game Status */}
          {satisfactionLevel <= 30 && (
            <div className="p-4 bg-red-900 border border-red-400 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-6 h-6 text-red-400" />
                <h3 className="font-bold text-red-300">Cảnh báo!</h3>
              </div>
              <p className="text-red-100">Người dân không hài lòng! Cần cải thiện hệ thống năng lượng.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
