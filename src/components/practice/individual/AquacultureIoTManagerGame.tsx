import React, { useState, useEffect } from 'react';
import { Thermometer, Droplets, Zap, Fish, TrendingUp } from 'lucide-react';

interface AquacultureIoTManagerProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface PoolData {
  id: string;
  name: string;
  temperature: number;
  oxygen: number;
  ph: number;
  turbidity: number;
  shrimpCount: number;
  health: number;
  feeding: number;
}

interface Alert {
  id: string;
  pool: string;
  type: 'critical' | 'warning' | 'info';
  message: string;
  timestamp: number;
}

export default function AquacultureIoTManager({ 
  onComplete, 
  timeLeft, 
  onRestart 
}: AquacultureIoTManagerProps) {
  const [score, setScore] = useState(0);
  const [day, setDay] = useState(1);
  const [pools, setPools] = useState<PoolData[]>([
    {
      id: 'pool1',
      name: 'Ao Tôm A',
      temperature: 28,
      oxygen: 6.5,
      ph: 7.8,
      turbidity: 25,
      shrimpCount: 1000,
      health: 95,
      feeding: 100
    },
    {
      id: 'pool2', 
      name: 'Ao Tôm B',
      temperature: 27,
      oxygen: 7.2,
      ph: 8.1,
      turbidity: 30,
      shrimpCount: 1200,
      health: 90,
      feeding: 85
    }
  ]);
  
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [selectedPool, setSelectedPool] = useState<string>('pool1');
  const [autoMode, setAutoMode] = useState<Record<string, boolean>>({});

  // Optimal ranges
  const optimal = {
    temperature: { min: 26, max: 30 },
    oxygen: { min: 5.0, max: 8.0 },
    ph: { min: 7.5, max: 8.5 },
    turbidity: { min: 20, max: 40 }
  };

  const adjustParameter = (poolId: string, parameter: keyof PoolData, delta: number) => {
    setPools(prev => prev.map(pool => {
      if (pool.id === poolId) {
        const newValue = Math.max(0, (pool[parameter] as number) + delta);
        return { ...pool, [parameter]: newValue };
      }
      return pool;
    }));
    setScore(prev => prev + 5);
  };

  const feedShrimp = (poolId: string) => {
    setPools(prev => prev.map(pool => {
      if (pool.id === poolId && pool.feeding < 100) {
        return { 
          ...pool, 
          feeding: Math.min(100, pool.feeding + 20),
          health: Math.min(100, pool.health + 2)
        };
      }
      return pool;
    }));
    setScore(prev => prev + 10);
  };

  const simulateDay = () => {
    setPools(prev => prev.map(pool => {
      // Natural parameter changes
      const tempChange = (Math.random() - 0.5) * 2;
      const oxygenChange = (Math.random() - 0.5) * 0.5;
      const phChange = (Math.random() - 0.5) * 0.2;
      const turbidityChange = (Math.random() - 0.5) * 5;

      const newPool = {
        ...pool,
        temperature: Math.max(20, Math.min(35, pool.temperature + tempChange)),
        oxygen: Math.max(3, Math.min(10, pool.oxygen + oxygenChange)),
        ph: Math.max(6, Math.min(9, pool.ph + phChange)),
        turbidity: Math.max(10, Math.min(60, pool.turbidity + turbidityChange)),
        feeding: Math.max(0, pool.feeding - 15) // Feeding decreases daily
      };

      // Calculate health based on parameters
      let healthChange = 0;
      
      // Temperature check
      if (newPool.temperature < optimal.temperature.min || newPool.temperature > optimal.temperature.max) {
        healthChange -= 5;
      } else {
        healthChange += 1;
      }

      // Oxygen check
      if (newPool.oxygen < optimal.oxygen.min) {
        healthChange -= 8;
      } else if (newPool.oxygen > optimal.oxygen.max) {
        healthChange -= 3;
      } else {
        healthChange += 2;
      }

      // pH check
      if (newPool.ph < optimal.ph.min || newPool.ph > optimal.ph.max) {
        healthChange -= 4;
      } else {
        healthChange += 1;
      }

      // Feeding check
      if (newPool.feeding < 50) {
        healthChange -= 6;
      } else {
        healthChange += 1;
      }

      newPool.health = Math.max(0, Math.min(100, pool.health + healthChange));

      // Auto-adjustments if enabled
      if (autoMode[pool.id]) {
        if (newPool.temperature > optimal.temperature.max) {
          newPool.temperature = Math.max(optimal.temperature.max, newPool.temperature - 1);
        } else if (newPool.temperature < optimal.temperature.min) {
          newPool.temperature = Math.min(optimal.temperature.min, newPool.temperature + 1);
        }

        if (newPool.oxygen < optimal.oxygen.min) {
          newPool.oxygen = Math.min(optimal.oxygen.max, newPool.oxygen + 0.5);
        }

        if (newPool.feeding < 70) {
          newPool.feeding = Math.min(100, newPool.feeding + 20);
        }
      }

      return newPool;
    }));

    setDay(prev => prev + 1);
    checkAlerts();
    setScore(prev => prev + 15);

    if (day >= 15) {
      const avgHealth = pools.reduce((sum, pool) => sum + pool.health, 0) / pools.length;
      const finalScore = Math.floor(score + avgHealth * 2);
      setScore(finalScore);
      onComplete(avgHealth > 80, finalScore);
    }
  };

  const checkAlerts = () => {
    const newAlerts: Alert[] = [];
    
    pools.forEach(pool => {
      if (pool.temperature > optimal.temperature.max + 2) {
        newAlerts.push({
          id: `temp-${pool.id}-${Date.now()}`,
          pool: pool.name,
          type: 'critical',
          message: `Nhiệt độ quá cao: ${pool.temperature.toFixed(1)}°C`,
          timestamp: Date.now()
        });
      }

      if (pool.oxygen < optimal.oxygen.min) {
        newAlerts.push({
          id: `oxygen-${pool.id}-${Date.now()}`,
          pool: pool.name,
          type: 'critical',
          message: `Thiếu oxy: ${pool.oxygen.toFixed(1)} mg/L`,
          timestamp: Date.now()
        });
      }

      if (pool.feeding < 30) {
        newAlerts.push({
          id: `feeding-${pool.id}-${Date.now()}`,
          pool: pool.name,
          type: 'warning',
          message: `Cần cho ăn: ${pool.feeding}%`,
          timestamp: Date.now()
        });
      }

      if (pool.health < 70) {
        newAlerts.push({
          id: `health-${pool.id}-${Date.now()}`,
          pool: pool.name,
          type: 'critical',
          message: `Sức khỏe tôm giảm: ${pool.health}%`,
          timestamp: Date.now()
        });
      }
    });

    setAlerts(prev => [...prev.slice(-10), ...newAlerts]);
  };

  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);

  const getParameterColor = (value: number, parameter: keyof typeof optimal) => {
    const range = optimal[parameter];
    if (value >= range.min && value <= range.max) return 'text-green-400';
    if (value < range.min - 1 || value > range.max + 1) return 'text-red-400';
    return 'text-yellow-400';
  };

  const currentPool = pools.find(p => p.id === selectedPool);

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2 flex items-center">
          <Fish className="w-6 h-6 mr-2" />
          Quản Lý Nuôi Trồng IoT - Ngày {day}
        </h3>
        <div className="text-cyan-400 font-medium">Điểm: {score}</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pool Selection & Overview */}
        <div>
          <h4 className="text-white font-medium mb-3">Danh sách Ao nuôi:</h4>
          {pools.map((pool) => (
            <button
              key={pool.id}
              onClick={() => setSelectedPool(pool.id)}
              className={`w-full mb-2 p-3 rounded-lg border text-left transition-all ${
                selectedPool === pool.id
                  ? 'bg-cyan-500/20 border-cyan-500/50'
                  : 'bg-gray-800/50 border-gray-600 hover:bg-gray-700/50'
              }`}
            >
              <div className="text-white font-medium">{pool.name}</div>
              <div className="text-gray-400 text-sm">
                Tôm: {pool.shrimpCount} | Health: {pool.health}%
              </div>
              <div className={`text-sm ${pool.health > 80 ? 'text-green-400' : pool.health > 60 ? 'text-yellow-400' : 'text-red-400'}`}>
                {pool.health > 80 ? '✓ Tốt' : pool.health > 60 ? '⚠ Cần chú ý' : '❌ Nguy hiểm'}
              </div>
            </button>
          ))}

          {/* Alerts */}
          <div className="mt-4">
            <h4 className="text-white font-medium mb-2">🚨 Cảnh báo:</h4>
            <div className="space-y-1 max-h-32 overflow-y-auto">
              {alerts.slice(-5).map((alert) => (
                <div
                  key={alert.id}
                  className={`p-2 rounded text-xs ${
                    alert.type === 'critical' ? 'bg-red-500/20 text-red-300' :
                    alert.type === 'warning' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-blue-500/20 text-blue-300'
                  }`}
                >
                  <div className="font-medium">{alert.pool}</div>
                  <div>{alert.message}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pool Details & Controls */}
        <div className="lg:col-span-2">
          {currentPool && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="text-white font-medium text-lg">{currentPool.name}</h4>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={autoMode[currentPool.id] || false}
                    onChange={(e) => setAutoMode(prev => ({ ...prev, [currentPool.id]: e.target.checked }))}
                    className="mr-2"
                  />
                  <span className="text-gray-300 text-sm">Auto Mode</span>
                </label>
              </div>

              {/* Parameters Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Temperature */}
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="flex items-center mb-2">
                    <Thermometer className="w-4 h-4 mr-2 text-orange-400" />
                    <span className="text-gray-300 text-sm">Nhiệt độ</span>
                  </div>
                  <div className={`text-lg font-bold ${getParameterColor(currentPool.temperature, 'temperature')}`}>
                    {currentPool.temperature.toFixed(1)}°C
                  </div>
                  <div className="flex gap-1 mt-2">
                    <button
                      onClick={() => adjustParameter(currentPool.id, 'temperature', -1)}
                      className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600"
                    >
                      -1°
                    </button>
                    <button
                      onClick={() => adjustParameter(currentPool.id, 'temperature', 1)}
                      className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
                    >
                      +1°
                    </button>
                  </div>
                </div>

                {/* Oxygen */}
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="flex items-center mb-2">
                    <Zap className="w-4 h-4 mr-2 text-cyan-400" />
                    <span className="text-gray-300 text-sm">Oxy</span>
                  </div>
                  <div className={`text-lg font-bold ${getParameterColor(currentPool.oxygen, 'oxygen')}`}>
                    {currentPool.oxygen.toFixed(1)} mg/L
                  </div>
                  <div className="flex gap-1 mt-2">
                    <button
                      onClick={() => adjustParameter(currentPool.id, 'oxygen', -0.2)}
                      className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
                    >
                      -0.2
                    </button>
                    <button
                      onClick={() => adjustParameter(currentPool.id, 'oxygen', 0.3)}
                      className="bg-green-500 text-white px-2 py-1 rounded text-xs hover:bg-green-600"
                    >
                      +0.3
                    </button>
                  </div>
                </div>

                {/* pH */}
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="flex items-center mb-2">
                    <Droplets className="w-4 h-4 mr-2 text-purple-400" />
                    <span className="text-gray-300 text-sm">pH</span>
                  </div>
                  <div className={`text-lg font-bold ${getParameterColor(currentPool.ph, 'ph')}`}>
                    {currentPool.ph.toFixed(1)}
                  </div>
                  <div className="flex gap-1 mt-2">
                    <button
                      onClick={() => adjustParameter(currentPool.id, 'ph', -0.1)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded text-xs hover:bg-yellow-600"
                    >
                      -0.1
                    </button>
                    <button
                      onClick={() => adjustParameter(currentPool.id, 'ph', 0.1)}
                      className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600"
                    >
                      +0.1
                    </button>
                  </div>
                </div>

                {/* Feeding */}
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="flex items-center mb-2">
                    <Fish className="w-4 h-4 mr-2 text-green-400" />
                    <span className="text-gray-300 text-sm">Thức ăn</span>
                  </div>
                  <div className={`text-lg font-bold ${currentPool.feeding > 70 ? 'text-green-400' : currentPool.feeding > 30 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {currentPool.feeding}%
                  </div>
                  <button
                    onClick={() => feedShrimp(currentPool.id)}
                    disabled={currentPool.feeding >= 100}
                    className="w-full mt-2 bg-green-500 text-white py-1 rounded text-xs hover:bg-green-600 disabled:opacity-50"
                  >
                    Cho ăn
                  </button>
                </div>
              </div>

              {/* Health Status */}
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h5 className="text-white font-medium mb-2 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Tình trạng Sức khỏe
                </h5>
                <div className="flex items-center justify-between">
                  <div>
                    <div className={`text-2xl font-bold ${currentPool.health > 80 ? 'text-green-400' : currentPool.health > 60 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {currentPool.health}%
                    </div>
                    <div className="text-gray-400 text-sm">
                      {currentPool.shrimpCount} con tôm
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-300 text-sm">Độ đục: {currentPool.turbidity} NTU</div>
                    <div className={`text-xs ${getParameterColor(currentPool.turbidity, 'turbidity')}`}>
                      {currentPool.turbidity >= optimal.turbidity.min && currentPool.turbidity <= optimal.turbidity.max ? 'Tối ưu' : 'Cần điều chỉnh'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Daily Controls */}
              <div className="flex gap-3">
                <button
                  onClick={simulateDay}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                >
                  Tiến sang Ngày tiếp theo →
                </button>
              </div>

              <div className="text-center text-gray-400 text-sm">
                Mục tiêu: Duy trì sức khỏe tôm {'>'}80% trong 15 ngày
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
