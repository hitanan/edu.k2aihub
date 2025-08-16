'use client';
import { useState, useEffect, useCallback } from 'react';
import { Car, MapPin, Timer, AlertTriangle, CheckCircle, RotateCcw } from 'lucide-react';

interface Vehicle {
  id: string;
  x: number;
  y: number;
  direction: 'north' | 'south' | 'east' | 'west';
  speed: number;
  type: 'car' | 'truck' | 'emergency';
  waitTime: number;
  active: boolean;
}

interface TrafficLight {
  id: string;
  x: number;
  y: number;
  state: 'red' | 'yellow' | 'green';
  timer: number;
  maxTimer: number;
}

interface GameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

const INITIAL_VEHICLES: Vehicle[] = [
  { id: 'car1', x: 5, y: 45, direction: 'east', speed: 2, type: 'car', waitTime: 0, active: true },
  { id: 'car2', x: 45, y: 5, direction: 'south', speed: 1.5, type: 'car', waitTime: 0, active: true },
  { id: 'truck1', x: 95, y: 55, direction: 'west', speed: 1, type: 'truck', waitTime: 0, active: true },
  { id: 'emergency1', x: 25, y: 95, direction: 'north', speed: 3, type: 'emergency', waitTime: 0, active: true },
  { id: 'car3', x: 75, y: 95, direction: 'north', speed: 2, type: 'car', waitTime: 0, active: true },
  { id: 'car4', x: 5, y: 25, direction: 'east', speed: 2.5, type: 'car', waitTime: 0, active: true },
];

const INITIAL_TRAFFIC_LIGHTS: TrafficLight[] = [
  { id: 'light1', x: 30, y: 30, state: 'red', timer: 15, maxTimer: 30 },
  { id: 'light2', x: 70, y: 30, state: 'green', timer: 20, maxTimer: 25 },
  { id: 'light3', x: 30, y: 70, state: 'green', timer: 10, maxTimer: 20 },
  { id: 'light4', x: 70, y: 70, state: 'red', timer: 25, maxTimer: 35 },
];

const TrafficManagementSimulatorGame: React.FC<GameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [gamePhase, setGamePhase] = useState<'briefing' | 'playing' | 'results'>('briefing');
  const [vehicles, setVehicles] = useState<Vehicle[]>(INITIAL_VEHICLES);
  const [trafficLights, setTrafficLights] = useState<TrafficLight[]>(INITIAL_TRAFFIC_LIGHTS);
  const [score, setScore] = useState(0);
  const [totalWaitTime, setTotalWaitTime] = useState(0);
  const [gameTime, setGameTime] = useState(0);
  const [completedVehicles, setCompletedVehicles] = useState(0);
  const [accidents, setAccidents] = useState(0);
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);

  const startGame = () => {
    setGamePhase('playing');
    setScore(0);
    setTotalWaitTime(0);
    setGameTime(0);
    setCompletedVehicles(0);
    setAccidents(0);
    setIsSimulationRunning(true);
    setVehicles([...INITIAL_VEHICLES]);
    setTrafficLights([...INITIAL_TRAFFIC_LIGHTS]);
  };

  const resetGame = () => {
    setGamePhase('briefing');
    setScore(0);
    setTotalWaitTime(0);
    setGameTime(0);
    setCompletedVehicles(0);
    setAccidents(0);
    setIsSimulationRunning(false);
    setVehicles([...INITIAL_VEHICLES]);
    setTrafficLights([...INITIAL_TRAFFIC_LIGHTS]);
    onRestart();
  };

  const toggleTrafficLight = (lightId: string) => {
    setTrafficLights(prev => prev.map(light => {
      if (light.id === lightId) {
        let newState: 'red' | 'yellow' | 'green' = 'red';
        if (light.state === 'red') newState = 'green';
        else if (light.state === 'green') newState = 'yellow';
        else newState = 'red';
        
        return { ...light, state: newState, timer: 30 };
      }
      return light;
    }));
  };

  const checkCollisions = useCallback((vehicles: Vehicle[]): boolean => {
    for (let i = 0; i < vehicles.length; i++) {
      for (let j = i + 1; j < vehicles.length; j++) {
        const dist = Math.sqrt(
          Math.pow(vehicles[i].x - vehicles[j].x, 2) + 
          Math.pow(vehicles[i].y - vehicles[j].y, 2)
        );
        if (dist < 8) {
          setAccidents(prev => prev + 1);
          return true;
        }
      }
    }
    return false;
  }, []);

  const canVehicleMove = useCallback((vehicle: Vehicle, lights: TrafficLight[]): boolean => {
    // Check if vehicle is at intersection
    const nearLight = lights.find(light => 
      Math.abs(vehicle.x - light.x) < 10 && Math.abs(vehicle.y - light.y) < 10
    );
    
    if (!nearLight) return true;
    
    // Emergency vehicles can always move
    if (vehicle.type === 'emergency') return true;
    
    // Check traffic light state
    return nearLight.state === 'green';
  }, []);

  const moveVehicles = useCallback(() => {
    setVehicles(prev => {
      const newVehicles = prev.map(vehicle => {
        if (!canVehicleMove(vehicle, trafficLights)) {
          return { ...vehicle, waitTime: vehicle.waitTime + 1 };
        }

        let newX = vehicle.x;
        let newY = vehicle.y;
        
        switch (vehicle.direction) {
          case 'north':
            newY = Math.max(0, vehicle.y - vehicle.speed);
            break;
          case 'south':
            newY = Math.min(100, vehicle.y + vehicle.speed);
            break;
          case 'east':
            newX = Math.min(100, vehicle.x + vehicle.speed);
            break;
          case 'west':
            newX = Math.max(0, vehicle.x - vehicle.speed);
            break;
        }

        return { ...vehicle, x: newX, y: newY, waitTime: 0 };
      });

      // Remove vehicles that reached the end
      const remainingVehicles = newVehicles.filter(vehicle => {
        const reachedEnd = vehicle.x <= 0 || vehicle.x >= 100 || vehicle.y <= 0 || vehicle.y >= 100;
        if (reachedEnd) {
          setCompletedVehicles(prev => prev + 1);
          setScore(prev => prev + (vehicle.type === 'emergency' ? 150 : 100));
        }
        return !reachedEnd;
      });

      checkCollisions(remainingVehicles);
      return remainingVehicles;
    });
  }, [trafficLights, canVehicleMove, checkCollisions]);

  // Game timer and vehicle movement
  useEffect(() => {
    if (gamePhase !== 'playing' || !isSimulationRunning) return;

    const timer = setInterval(() => {
      setGameTime(prev => {
        const newGameTime = prev + 1;
        
        // Update traffic light timers and cycle states
        setTrafficLights(prevLights => prevLights.map(light => {
          const newTimer = light.timer - 1;
          if (newTimer <= 0) {
            let newState: 'red' | 'yellow' | 'green' = 'red';
            if (light.state === 'red') newState = 'green';
            else if (light.state === 'green') newState = 'yellow';
            else newState = 'red';
            
            return { ...light, state: newState, timer: light.maxTimer };
          }
          return { ...light, timer: newTimer };
        }));
        
        // Move vehicles
        moveVehicles();
        
        // Update total wait time
        setTotalWaitTime(prevWaitTime => {
          const currentWait = vehicles.reduce((sum, vehicle) => sum + vehicle.waitTime, 0);
          return prevWaitTime + currentWait;
        });

        // Check end game conditions
        if (newGameTime >= 60 || (vehicles.length === 0 && completedVehicles > 0)) {
          setGamePhase('results');
          setIsSimulationRunning(false);
          setTotalWaitTime(currentTotalWait => {
            const efficiency = Math.max(0, 100 - (currentTotalWait / 10) - (accidents * 20));
            const finalScore = Math.round(score + efficiency);
            setScore(finalScore);
            setTimeout(() => onComplete(finalScore > 500, finalScore), 2000);
            return currentTotalWait;
          });
        }
        
        return newGameTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gamePhase, vehicles, completedVehicles, moveVehicles, score, accidents, onComplete, isSimulationRunning]);

  // Use timeLeft if provided
  useEffect(() => {
    if (timeLeft <= 0 && gamePhase === 'playing') {
      setGamePhase('results');
      setIsSimulationRunning(false);
      const efficiency = Math.max(0, 100 - (totalWaitTime / 10) - (accidents * 20));
      const finalScore = Math.round(score + efficiency);
      setScore(finalScore);
      setTimeout(() => onComplete(finalScore > 500, finalScore), 1000);
    }
  }, [timeLeft, gamePhase, totalWaitTime, accidents, score, onComplete]);

  const getVehicleIcon = (type: string) => {
    switch (type) {
      case 'emergency': return '🚑';
      case 'truck': return '🚚';
      default: return '🚗';
    }
  };

  const getLightColor = (state: string) => {
    switch (state) {
      case 'red': return 'bg-red-500';
      case 'yellow': return 'bg-yellow-500';
      case 'green': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  if (gamePhase === 'briefing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-900 p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
              <Car className="w-8 h-8 mr-3 text-blue-400" />
              Traffic Management Simulator
            </h1>
            <p className="text-gray-300 text-lg">
              Quản lý giao thông thông minh và tối ưu hóa luồng xe cộ
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
              <h3 className="font-semibold text-blue-400 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Mục tiêu Game
              </h3>
              <div className="space-y-3 text-gray-300">
                <p>• Điều khiển đèn tín hiệu giao thông</p>
                <p>• Giảm thiểu thời gian chờ đợi</p>
                <p>• Tránh tai nạn giao thông</p>
                <p>• Ưu tiên xe cứu thương</p>
                <p>• Tối ưu hóa luồng giao thông</p>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
              <h3 className="font-semibold text-green-400 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Cách chơi
              </h3>
              <div className="space-y-3 text-gray-300">
                <p>• Click vào đèn tín hiệu để thay đổi</p>
                <p>• 🚗 Xe thường: 100 điểm khi hoàn thành</p>
                <p>• 🚑 Xe cứu thương: 150 điểm</p>
                <p>• Tránh để xe chờ quá lâu</p>
                <p>• Ngăn chặn va chạm (-20 điểm)</p>
              </div>
            </div>
          </div>

          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
            <h3 className="font-semibold text-green-400 mb-2">🎯 Kiến thức học được</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <p>• Quản lý hệ thống giao thông thông minh</p>
                <p>• Tối ưu hóa luồng dữ liệu và xử lý</p>
                <p>• Thuật toán điều khiển thời gian thực</p>
              </div>
              <div>
                <p>• IoT trong quản lý đô thị</p>
                <p>• Phân tích dữ liệu giao thông</p>
                <p>• Hệ thống ra quyết định tự động</p>
              </div>
            </div>
          </div>

          <button
            onClick={startGame}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 px-6 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 flex items-center justify-center"
          >
            <Car className="w-5 h-5 mr-2" />
            Bắt đầu điều khiển giao thông
          </button>
        </div>
      </div>
    );
  }

  if (gamePhase === 'results') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-900 p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              🏆 Kết quả điều khiển giao thông
            </h1>
            <div className="text-6xl font-bold text-blue-400 mb-4">
              {score}
            </div>
            <p className="text-gray-300 text-lg">
              {score > 500 ? 'Xuất sắc! Bạn là chuyên gia quản lý giao thông!' : 
               score > 300 ? 'Tốt! Bạn đã quản lý giao thông khá hiệu quả!' :
               'Cần cải thiện! Hãy thử lại để đạt kết quả tốt hơn.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
              <h3 className="font-semibold text-blue-400 mb-4">📊 Thống kê chi tiết</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Xe hoàn thành:</span>
                  <span className="text-green-400 font-medium">{completedVehicles}</span>
                </div>
                <div className="flex justify-between">
                  <span>Thời gian chờ tổng:</span>
                  <span className="text-yellow-400 font-medium">{totalWaitTime}s</span>
                </div>
                <div className="flex justify-between">
                  <span>Tai nạn:</span>
                  <span className="text-red-400 font-medium">{accidents}</span>
                </div>
                <div className="flex justify-between">
                  <span>Thời gian game:</span>
                  <span className="text-blue-400 font-medium">{gameTime}s</span>
                </div>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
              <h3 className="font-semibold text-green-400 mb-4">🎓 Kiến thức đạt được</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>✅ Hiểu nguyên lý hoạt động của hệ thống giao thông thông minh</p>
                <p>✅ Học cách tối ưu hóa luồng dữ liệu trong hệ thống IoT</p>
                <p>✅ Áp dụng thuật toán ra quyết định thời gian thực</p>
                <p>✅ Phân tích và xử lý dữ liệu giao thông</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={resetGame}
              className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white py-3 px-6 rounded-xl font-medium hover:from-gray-700 hover:to-gray-800 transition-all duration-200 flex items-center justify-center"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Chơi lại
            </button>
            <button
              onClick={() => onComplete(score > 500, score)}
              className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-600 transition-all duration-200"
            >
              Hoàn thành
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-900 p-4">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Header */}
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-xl font-bold text-white flex items-center">
                <Car className="w-6 h-6 mr-2 text-blue-400" />
                Traffic Control Center
              </h1>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Timer className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-white">{gameTime}s</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                <span className="text-white">Hoàn thành: {completedVehicles}</span>
              </div>
              <div className="flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2 text-red-400" />
                <span className="text-white">Tai nạn: {accidents}</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-400 font-medium">Điểm: {score}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Traffic Management Area */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Traffic Map */}
          <div className="lg:col-span-3 bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/20">
            <h3 className="font-semibold text-white mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-blue-400" />
              Sơ đồ giao thông
            </h3>
            <div className="relative bg-gray-800/50 rounded-lg overflow-hidden" style={{ height: '500px' }}>
              {/* Roads */}
              <div className="absolute inset-0">
                {/* Horizontal roads */}
                <div className="absolute w-full bg-gray-600" style={{ top: '30%', height: '10%' }}></div>
                <div className="absolute w-full bg-gray-600" style={{ top: '60%', height: '10%' }}></div>
                {/* Vertical roads */}
                <div className="absolute h-full bg-gray-600" style={{ left: '30%', width: '10%' }}></div>
                <div className="absolute h-full bg-gray-600" style={{ left: '60%', width: '10%' }}></div>
              </div>

              {/* Traffic Lights */}
              {trafficLights.map(light => (
                <button
                  key={light.id}
                  onClick={() => toggleTrafficLight(light.id)}
                  className={`absolute w-6 h-6 rounded-full ${getLightColor(light.state)} border-2 border-white hover:scale-110 transition-transform duration-200 z-10`}
                  style={{
                    left: `${light.x}%`,
                    top: `${light.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  title={`Traffic Light: ${light.state} (${light.timer}s)`}
                >
                  <span className="text-xs text-white font-bold">{light.timer}</span>
                </button>
              ))}

              {/* Vehicles */}
              {vehicles.map(vehicle => (
                <div
                  key={vehicle.id}
                  className="absolute text-2xl z-20 transition-all duration-1000"
                  style={{
                    left: `${vehicle.x}%`,
                    top: `${vehicle.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  title={`${vehicle.type} - Wait: ${vehicle.waitTime}s`}
                >
                  {getVehicleIcon(vehicle.type)}
                  {vehicle.waitTime > 3 && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs px-1 rounded">
                      {vehicle.waitTime}s
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Control Panel */}
          <div className="space-y-4">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/20">
              <h3 className="font-semibold text-white mb-4">🚦 Điều khiển đèn</h3>
              <div className="space-y-3">
                {trafficLights.map(light => (
                  <div key={light.id} className="bg-gray-700/50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-sm">Đèn {light.id.slice(-1)}</span>
                      <div className={`w-4 h-4 rounded-full ${getLightColor(light.state)}`}></div>
                    </div>
                    <button
                      onClick={() => toggleTrafficLight(light.id)}
                      className="w-full bg-blue-500/20 hover:bg-blue-500/40 text-blue-400 py-1 px-2 rounded text-xs border border-blue-500/20 transition-all duration-200"
                    >
                      Chuyển đèn ({light.timer}s)
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/20">
              <h3 className="font-semibold text-white mb-4">📊 Thống kê</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>Xe chờ:</span>
                  <span className="text-yellow-400">{vehicles.filter(v => v.waitTime > 0).length}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Chờ tổng:</span>
                  <span className="text-red-400">{totalWaitTime}s</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Hiệu quả:</span>
                  <span className="text-green-400">
                    {Math.max(0, 100 - Math.floor(totalWaitTime / 10) - (accidents * 20))}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrafficManagementSimulatorGame;