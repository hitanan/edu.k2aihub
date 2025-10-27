'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Play, Pause, RotateCcw, Wind, AlertTriangle, CheckCircle } from 'lucide-react';

interface GameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface WindTurbine {
  id: string;
  x: number;
  y: number;
  isActive: boolean;
  efficiency: number;
  maintenanceNeeded: boolean;
  powerOutput: number; // MW
  cost: number;
}

interface WeatherCondition {
  windSpeed: number; // m/s
  windDirection: number; // degrees
  seaState: number; // 1-7 scale
  visibility: number; // km
}

interface EnvironmentalFactor {
  marinaLife: number; // impact score 0-100
  migrationRoutes: number; // impact score 0-100
  shippingLanes: number; // conflict score 0-100
  fishingAreas: number; // conflict score 0-100
}

export function OffshoreWindPlannerGame({ onComplete, timeLeft, onRestart }: GameProps) {
  const [gameState, setGameState] = useState<'setup' | 'running' | 'paused' | 'completed'>('setup');
  const [score, setScore] = useState(0);
  const [totalPower, setTotalPower] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [environmentalScore, setEnvironmentalScore] = useState(100);
  
  const [windTurbines, setWindTurbines] = useState<WindTurbine[]>([]);
  const [budget, setBudget] = useState(10000000); // $10M budget
  
  const [weather, setWeather] = useState<WeatherCondition>({
    windSpeed: 12,
    windDirection: 270,
    seaState: 3,
    visibility: 15,
  });

  const [environmental] = useState<EnvironmentalFactor>({
    marinaLife: 85,
    migrationRoutes: 90,
    shippingLanes: 75,
    fishingAreas: 80,
  });

  const turbineCost = 2000000; // $2M per turbine
  const maxTurbines = 20;
  const gridSize = 10;

  // Weather simulation
  useEffect(() => {
    if (gameState !== 'running') return;

    const weatherInterval = setInterval(() => {
      setWeather(prev => ({
        windSpeed: Math.max(5, Math.min(25, prev.windSpeed + (Math.random() - 0.5) * 4)),
        windDirection: (prev.windDirection + (Math.random() - 0.5) * 30) % 360,
        seaState: Math.max(1, Math.min(7, prev.seaState + (Math.random() - 0.5) * 2)),
        visibility: Math.max(5, Math.min(30, prev.visibility + (Math.random() - 0.5) * 10)),
      }));
    }, 3000);

    return () => clearInterval(weatherInterval);
  }, [gameState]);

  // Turbine simulation
  useEffect(() => {
    if (gameState !== 'running') return;

    const turbineInterval = setInterval(() => {
      setWindTurbines(prevTurbines => {
        return prevTurbines.map(turbine => {
          if (!turbine.isActive) return turbine;

          // Calculate efficiency based on weather
          let efficiency = 100;
          
          // Wind speed optimal range: 12-15 m/s
          if (weather.windSpeed < 8) efficiency *= 0.3;
          else if (weather.windSpeed < 12) efficiency *= 0.6 + (weather.windSpeed - 8) * 0.1;
          else if (weather.windSpeed <= 15) efficiency *= 1.0;
          else if (weather.windSpeed <= 20) efficiency *= 0.9;
          else efficiency *= 0.5;

          // Sea state affects maintenance
          if (weather.seaState > 5) efficiency *= 0.7;
          else if (weather.seaState > 3) efficiency *= 0.9;

          // Random maintenance needs
          const maintenanceNeeded = Math.random() < 0.002; // 0.2% chance per tick

          // Power output calculation (3MW max per turbine)
          const powerOutput = (efficiency / 100) * 3;

          return {
            ...turbine,
            efficiency: Math.round(efficiency),
            maintenanceNeeded: turbine.maintenanceNeeded || maintenanceNeeded,
            powerOutput: turbine.maintenanceNeeded ? 0 : powerOutput,
          };
        });
      });
    }, 1000);

    return () => clearInterval(turbineInterval);
  }, [gameState, weather]);

  // Score calculation
  useEffect(() => {
    const activeTurbines = windTurbines.filter(t => t.isActive && !t.maintenanceNeeded);
    const currentPower = activeTurbines.reduce((sum, t) => sum + t.powerOutput, 0);
    setTotalPower(currentPower);

    // Environmental impact
    let envScore = 100;
    const turbineCount = windTurbines.length;
    
    // More turbines = more impact
    envScore -= turbineCount * 2;
    
    // Check placement near sensitive areas
    windTurbines.forEach(turbine => {
      // Simulate sensitive areas (simplified)
      if (turbine.x < 3 || turbine.y < 3) envScore -= 5; // Near shore
      if (turbine.x > 7 && turbine.y > 7) envScore -= 3; // Deep water shipping
    });

    setEnvironmentalScore(Math.max(0, envScore));

    // Score calculation
    const powerScore = currentPower * 10;
    const efficiencyScore = activeTurbines.reduce((sum, t) => sum + t.efficiency, 0) / Math.max(1, activeTurbines.length);
    const costEfficiency = budget > 0 ? (10000000 - totalCost) / 100000 : 0;
    const envBonus = environmentalScore > 80 ? 50 : environmentalScore > 60 ? 25 : 0;
    
    setScore(Math.round(powerScore + efficiencyScore + costEfficiency + envBonus));
  }, [windTurbines, totalCost, budget, environmentalScore]);

  // Auto-complete game
  useEffect(() => {
    if (timeLeft <= 0 && gameState === 'running') {
      const success = score >= 500 && totalPower >= 20 && environmentalScore >= 60;
      setGameState('completed');
      onComplete(success, score);
    }
  }, [timeLeft, score, totalPower, environmentalScore, gameState, onComplete]);

  const placeTurbine = useCallback((x: number, y: number) => {
    if (budget < turbineCost || windTurbines.length >= maxTurbines) {
      alert('Không đủ ngân sách hoặc đã đạt giới hạn turbine!');
      return;
    }

    // Check minimum distance (2 grid units)
    const tooClose = windTurbines.some(turbine => {
      const distance = Math.sqrt(Math.pow(turbine.x - x, 2) + Math.pow(turbine.y - y, 2));
      return distance < 2;
    });

    if (tooClose) {
      alert('Turbine quá gần nhau! Cần khoảng cách tối thiểu 2 ô.');
      return;
    }

    const newTurbine: WindTurbine = {
      id: `turbine-${Date.now()}`,
      x,
      y,
      isActive: true,
      efficiency: 100,
      maintenanceNeeded: false,
      powerOutput: 3,
      cost: turbineCost,
    };

    setWindTurbines(prev => [...prev, newTurbine]);
    setTotalCost(prev => prev + turbineCost);
    setBudget(prev => prev - turbineCost);
  }, [budget, windTurbines, turbineCost]);

  const performMaintenance = useCallback((turbineId: string) => {
    setWindTurbines(prev => prev.map(turbine => 
      turbine.id === turbineId ? { 
        ...turbine, 
        maintenanceNeeded: false,
        efficiency: 100 
      } : turbine
    ));
    
    // Maintenance cost
    const maintenanceCost = 50000;
    setBudget(prev => Math.max(0, prev - maintenanceCost));
    setScore(prev => prev + 20); // Bonus for maintenance
  }, []);

  const removeTurbine = useCallback((turbineId: string) => {
    const turbine = windTurbines.find(t => t.id === turbineId);
    if (turbine) {
      setWindTurbines(prev => prev.filter(t => t.id !== turbineId));
      setBudget(prev => prev + turbine.cost * 0.7); // Recover 70% of cost
      setTotalCost(prev => prev - turbine.cost);
    }
  }, [windTurbines]);

  const getWeatherIcon = () => {
    if (weather.windSpeed < 8) return '😴';
    if (weather.windSpeed < 12) return '🌬️';
    if (weather.windSpeed < 20) return '💨';
    return '🌪️';
  };

  const startGame = () => setGameState('running');
  const pauseGame = () => setGameState('paused');
  const resumeGame = () => setGameState('running');

  if (gameState === 'completed') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full border border-blue-500/20 text-center">
          <Wind className="w-16 h-16 mx-auto mb-4 text-blue-400" />
          <h2 className="text-2xl font-bold text-white mb-4">Hoàn thành!</h2>
          <div className="space-y-2 mb-6">
            <p className="text-gray-300">Điểm số: <span className="text-blue-400 font-bold">{score}</span></p>
            <p className="text-gray-300">Công suất: <span className="text-green-400 font-bold">{totalPower.toFixed(1)} MW</span></p>
            <p className="text-gray-300">Chi phí: <span className="text-red-400 font-bold">${(totalCost/1000000).toFixed(1)}M</span></p>
            <p className="text-gray-300">Môi trường: <span className="text-emerald-400 font-bold">{environmentalScore}%</span></p>
          </div>
          <button onClick={onRestart} className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-xl">
            Practice again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <Wind className="w-8 h-8 text-blue-400" />
          <h1 className="text-2xl font-bold text-white">Quy Hoạch Trang Trại Gió Ngoài Khơi</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-white">Thời gian: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</div>
          <div className="text-blue-400 font-bold">Điểm: {score}</div>
        </div>
      </div>

      {/* Game Controls */}
      <div className="mb-6 flex space-x-4">
        {gameState === 'setup' && (
          <button onClick={startGame} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg flex items-center">
            <Play className="w-4 h-4 mr-2" />
            Bắt đầu
          </button>
        )}
        {gameState === 'running' && (
          <button onClick={pauseGame} className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg flex items-center">
            <Pause className="w-4 h-4 mr-2" />
            Tạm dừng
          </button>
        )}
        {gameState === 'paused' && (
          <button onClick={resumeGame} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg flex items-center">
            <Play className="w-4 h-4 mr-2" />
            Tiếp tục
          </button>
        )}
        <button onClick={onRestart} className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg flex items-center">
          <RotateCcw className="w-4 h-4 mr-2" />
          Khởi động lại
        </button>
      </div>

      {/* Main Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Wind Farm Grid */}
        <div className="lg:col-span-3 bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Khu vực biển - Đặt turbine gió</h2>
          
          <div className="grid grid-cols-10 gap-1 bg-blue-900/30 p-4 rounded-lg" style={{ aspectRatio: '1' }}>
            {Array.from({ length: 100 }, (_, i) => {
              const x = i % gridSize;
              const y = Math.floor(i / gridSize);
              const turbine = windTurbines.find(t => t.x === x && t.y === y);
              
              return (
                <div
                  key={i}
                  className={`aspect-square border border-blue-700/50 cursor-pointer transition-all hover:bg-blue-600/30 flex items-center justify-center relative ${
                    turbine ? 'bg-blue-500/50' : 'bg-blue-800/20'
                  }`}
                  onClick={() => !turbine && placeTurbine(x, y)}
                >
                  {turbine && (
                    <div className="relative group">
                      <Wind 
                        className={`w-6 h-6 ${
                          turbine.maintenanceNeeded ? 'text-red-400' : 
                          turbine.powerOutput > 2 ? 'text-green-400' : 
                          turbine.powerOutput > 1 ? 'text-yellow-400' : 'text-gray-400'
                        }`}
                      />
                      {turbine.maintenanceNeeded && (
                        <AlertTriangle className="w-3 h-3 text-red-400 absolute -top-1 -right-1" />
                      )}
                      
                      {/* Turbine Info Tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black/80 text-white text-xs p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 min-w-max">
                        <div>Hiệu suất: {turbine.efficiency}%</div>
                        <div>Công suất: {turbine.powerOutput.toFixed(1)} MW</div>
                        {turbine.maintenanceNeeded && (
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              performMaintenance(turbine.id);
                            }}
                            className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs mt-1"
                          >
                            Bảo trì
                          </button>
                        )}
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            removeTurbine(turbine.id);
                          }}
                          className="bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs mt-1 ml-1"
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {/* Depth indicators */}
                  <div className={`absolute inset-0 ${
                    x < 3 ? 'bg-yellow-500/10' : // Shallow water
                    x > 7 ? 'bg-red-500/10' : // Deep water
                    'bg-green-500/10' // Optimal depth
                  }`} />
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500/30 border border-yellow-500 mr-2"></div>
                <span className="text-gray-300">Nước nông (dễ lắp đặt)</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500/30 border border-green-500 mr-2"></div>
                <span className="text-gray-300">Độ sâu tối ưu</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500/30 border border-red-500 mr-2"></div>
                <span className="text-gray-300">Nước sâu (khó khăn)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="space-y-6">
          {/* Statistics */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">Thống kê</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Công suất:</span>
                <span className="text-green-400 font-bold">{totalPower.toFixed(1)} MW</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Turbines:</span>
                <span className="text-blue-400 font-bold">{windTurbines.length}/{maxTurbines}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Ngân sách:</span>
                <span className="text-yellow-400 font-bold">${(budget/1000000).toFixed(1)}M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Chi phí:</span>
                <span className="text-red-400 font-bold">${(totalCost/1000000).toFixed(1)}M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Môi trường:</span>
                <span className="text-emerald-400 font-bold">{environmentalScore}%</span>
              </div>
            </div>
          </div>

          {/* Weather Conditions */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <span className="mr-2">{getWeatherIcon()}</span>
              Điều kiện thời tiết
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Tốc độ gió:</span>
                <span className="text-blue-400 font-bold">{weather.windSpeed.toFixed(1)} m/s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Hướng gió:</span>
                <span className="text-blue-400 font-bold">{weather.windDirection.toFixed(0)}°</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Sóng biển:</span>
                <span className="text-blue-400 font-bold">Cấp {weather.seaState}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Tầm nhìn:</span>
                <span className="text-blue-400 font-bold">{weather.visibility.toFixed(1)} km</span>
              </div>
            </div>
          </div>

          {/* Turbine Status */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">Trạng thái turbine</h3>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {windTurbines.map(turbine => (
                <div key={turbine.id} className="text-sm bg-slate-800 rounded p-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white">({turbine.x},{turbine.y})</span>
                    <div className="flex items-center space-x-1">
                      {turbine.maintenanceNeeded ? (
                        <AlertTriangle className="w-4 h-4 text-red-400" />
                      ) : (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      )}
                      <span className="text-gray-300">{turbine.powerOutput.toFixed(1)}MW</span>
                    </div>
                  </div>
                </div>
              ))}
              {windTurbines.length === 0 && (
                <div className="text-gray-400 text-center py-4">
                  Chưa có turbine nào
                </div>
              )}
            </div>
          </div>

          {/* Environmental Impact */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">Tác động môi trường</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Sinh vật biển:</span>
                <span className="text-emerald-400">{environmental.marinaLife}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Tuyến di cư:</span>
                <span className="text-emerald-400">{environmental.migrationRoutes}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Tuyến vận tải:</span>
                <span className="text-yellow-400">{environmental.shippingLanes}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Khu đánh cá:</span>
                <span className="text-yellow-400">{environmental.fishingAreas}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-6 bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-white/10">
        <h3 className="text-white font-semibold mb-2">Hướng dẫn:</h3>
        <p className="text-gray-300 text-sm">
          🎯 Đặt turbine gió ngoài khơi để tối đa hóa công suất. 
          💡 Chú ý điều kiện thời tiết và khoảng cách giữa các turbine. 
          🌊 Cân bằng giữa hiệu quả kinh tế và tác động môi trường!
        </p>
      </div>
    </div>
  );
}
