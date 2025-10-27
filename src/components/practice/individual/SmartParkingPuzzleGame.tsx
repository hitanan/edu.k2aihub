'use client';
import { useState, useEffect, useCallback } from 'react';
import { Car, MapPin, Clock, CheckCircle, AlertTriangle, RotateCcw } from 'lucide-react';

interface ParkingSpot {
  id: string;
  x: number;
  y: number;
  type: 'regular' | 'electric' | 'disabled' | 'motorcycle';
  occupied: boolean;
  reserved: boolean;
  vehicle?: Vehicle;
}

interface Vehicle {
  id: string;
  type: 'car' | 'electric' | 'motorcycle' | 'disabled';
  arrivalTime: number;
  priority: number;
  parked: boolean;
}

interface SmartParkingPuzzleGameProps {
  onComplete: (success: boolean) => void;
}

const PARKING_SPOTS_DATA: ParkingSpot[] = [
  // Row 1
  { id: 'A1', x: 10, y: 20, type: 'regular', occupied: false, reserved: false },
  { id: 'A2', x: 25, y: 20, type: 'regular', occupied: false, reserved: false },
  { id: 'A3', x: 40, y: 20, type: 'electric', occupied: false, reserved: false },
  { id: 'A4', x: 55, y: 20, type: 'disabled', occupied: false, reserved: false },
  { id: 'A5', x: 70, y: 20, type: 'regular', occupied: false, reserved: false },
  { id: 'A6', x: 85, y: 20, type: 'motorcycle', occupied: false, reserved: false },
  
  // Row 2
  { id: 'B1', x: 10, y: 40, type: 'regular', occupied: false, reserved: false },
  { id: 'B2', x: 25, y: 40, type: 'electric', occupied: false, reserved: false },
  { id: 'B3', x: 40, y: 40, type: 'regular', occupied: false, reserved: false },
  { id: 'B4', x: 55, y: 40, type: 'regular', occupied: false, reserved: false },
  { id: 'B5', x: 70, y: 40, type: 'disabled', occupied: false, reserved: false },
  { id: 'B6', x: 85, y: 40, type: 'motorcycle', occupied: false, reserved: false },
  
  // Row 3
  { id: 'C1', x: 10, y: 60, type: 'electric', occupied: false, reserved: false },
  { id: 'C2', x: 25, y: 60, type: 'regular', occupied: false, reserved: false },
  { id: 'C3', x: 40, y: 60, type: 'regular', occupied: false, reserved: false },
  { id: 'C4', x: 55, y: 60, type: 'electric', occupied: false, reserved: false },
  { id: 'C5', x: 70, y: 60, type: 'regular', occupied: false, reserved: false },
  { id: 'C6', x: 85, y: 60, type: 'regular', occupied: false, reserved: false },
];

const VEHICLE_QUEUE_DATA: Vehicle[] = [
  { id: 'V1', type: 'car', arrivalTime: 0, priority: 1, parked: false },
  { id: 'V2', type: 'electric', arrivalTime: 3, priority: 2, parked: false },
  { id: 'V3', type: 'disabled', arrivalTime: 8, priority: 5, parked: false },
  { id: 'V4', type: 'motorcycle', arrivalTime: 12, priority: 1, parked: false },
  { id: 'V5', type: 'car', arrivalTime: 16, priority: 1, parked: false },
  { id: 'V6', type: 'electric', arrivalTime: 20, priority: 3, parked: false },
  { id: 'V7', type: 'car', arrivalTime: 25, priority: 1, parked: false },
  { id: 'V8', type: 'disabled', arrivalTime: 30, priority: 5, parked: false },
];

export default function SmartParkingPuzzleGame({ onComplete }: SmartParkingPuzzleGameProps) {
  const [gamePhase, setGamePhase] = useState<'briefing' | 'playing' | 'results'>('briefing');
  const [parkingSpots, setParkingSpots] = useState<ParkingSpot[]>(PARKING_SPOTS_DATA);
  const [vehicleQueue, setVehicleQueue] = useState<Vehicle[]>(VEHICLE_QUEUE_DATA);
  const [currentTime, setCurrentTime] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [waitTime, setWaitTime] = useState(0);
  const [violations, setViolations] = useState(0);
  const [perfectMatches, setPerfectMatches] = useState(0);
  const [efficiency, setEfficiency] = useState(100);

  const startGame = () => {
    setGamePhase('playing');
    setParkingSpots(PARKING_SPOTS_DATA);
    setVehicleQueue(VEHICLE_QUEUE_DATA);
    setCurrentTime(0);
    setScore(0);
    setSelectedVehicle(null);
    setWaitTime(0);
    setViolations(0);
    setPerfectMatches(0);
    setEfficiency(100);
  };

  const resetGame = () => {
    setGamePhase('briefing');
  };

  const getSpotTypeColor = (type: string, occupied: boolean, reserved: boolean) => {
    if (occupied) return 'bg-red-500';
    if (reserved) return 'bg-yellow-500';
    
    switch (type) {
      case 'electric': return 'bg-green-500';
      case 'disabled': return 'bg-blue-500';
      case 'motorcycle': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getSpotTypeIcon = (type: string) => {
    switch (type) {
      case 'electric': return '⚡';
      case 'disabled': return '♿';
      case 'motorcycle': return '🏍️';
      default: return '🚗';
    }
  };

  const getVehicleIcon = (type: string) => {
    switch (type) {
      case 'electric': return '🔋';
      case 'disabled': return '♿';
      case 'motorcycle': return '🏍️';
      default: return '🚗';
    }
  };

  const getVehicleColor = (type: string) => {
    switch (type) {
      case 'electric': return 'bg-green-500/20 border-green-500';
      case 'disabled': return 'bg-blue-500/20 border-blue-500';
      case 'motorcycle': return 'bg-purple-500/20 border-purple-500';
      default: return 'bg-gray-500/20 border-gray-500';
    }
  };

  const canParkInSpot = (vehicle: Vehicle, spot: ParkingSpot): boolean => {
    if (spot.occupied || spot.reserved) return false;
    
    // Disabled vehicles can only park in disabled spots
    if (vehicle.type === 'disabled' && spot.type !== 'disabled') return false;
    
    // Motorcycles can park anywhere
    if (vehicle.type === 'motorcycle') return true;
    
    // Electric vehicles prefer electric spots but can use regular
    if (vehicle.type === 'electric' && spot.type === 'disabled') return false;
    
    // Regular cars can use regular spots and electric spots (if no electric vehicle waiting)
    if (vehicle.type === 'car' && spot.type === 'disabled') return false;
    
    return true;
  };

  const getParkingScore = (vehicle: Vehicle, spot: ParkingSpot): number => {
    let baseScore = 50;
    
    // Perfect match bonus
    if (vehicle.type === spot.type || 
        (vehicle.type === 'car' && spot.type === 'regular') ||
        (vehicle.type === 'electric' && spot.type === 'regular')) {
      baseScore += 30;
      if (vehicle.type === spot.type) {
        baseScore += 20; // Perfect type match
      }
    }
    
    // Priority bonus
    baseScore += vehicle.priority * 10;
    
    // Time penalty (waiting too long)
    const waitPenalty = Math.max(0, (currentTime - vehicle.arrivalTime) * 5);
    baseScore -= waitPenalty;
    
    return Math.max(10, baseScore);
  };

  const assignVehicleToSpot = (vehicleId: string, spotId: string) => {
    const vehicle = vehicleQueue.find(v => v.id === vehicleId);
    const spot = parkingSpots.find(s => s.id === spotId);
    
    if (!vehicle || !spot || !canParkInSpot(vehicle, spot)) {
      setViolations(prev => prev + 1);
      return;
    }
    
    const parkingScore = getParkingScore(vehicle, spot);
    setScore(prev => prev + parkingScore);
    
    // Check for perfect match
    if (vehicle.type === spot.type) {
      setPerfectMatches(prev => prev + 1);
    }
    
    // Update parking spots
    setParkingSpots(prev => prev.map(s => 
      s.id === spotId 
        ? { ...s, occupied: true, vehicle: vehicle }
        : s
    ));
    
    // Remove vehicle from queue
    setVehicleQueue(prev => prev.filter(v => v.id !== vehicleId));
    setSelectedVehicle(null);
  };

  const getCurrentVehicles = useCallback(() => {
    return vehicleQueue.filter(vehicle => 
      vehicle.arrivalTime <= currentTime && !vehicle.parked
    );
  }, [vehicleQueue, currentTime]);

  // Game timer
  useEffect(() => {
    if (gamePhase !== 'playing') return;

    const timer = setInterval(() => {
      setCurrentTime(prev => prev + 1);
      
      // Calculate wait time for vehicles
      const availableVehicles = getCurrentVehicles();
      const totalWait = availableVehicles.reduce((sum, vehicle) => 
        sum + (currentTime - vehicle.arrivalTime), 0
      );
      setWaitTime(totalWait);
      
      // Calculate efficiency
      const currentEfficiency = Math.max(0, 100 - violations * 15 - (totalWait / 10));
      setEfficiency(currentEfficiency);
      
      // End game conditions
      if (currentTime >= 60 || vehicleQueue.length === 0) {
        setGamePhase('results');
        const finalScore = Math.round(score + perfectMatches * 50 - violations * 25 + currentEfficiency);
        setScore(finalScore);
        setTimeout(() => onComplete(finalScore > 400), 2000);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [gamePhase, currentTime, getCurrentVehicles, parkingSpots, score, perfectMatches, violations, vehicleQueue.length, onComplete]);

  if (gamePhase === 'briefing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-slate-900 to-cyan-900 p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
              <Car className="w-8 h-8 mr-3 text-cyan-400" />
              Smart Parking Puzzle
            </h1>
            <p className="text-gray-300 text-lg">
              Quản lý bãi đỗ xe thông minh và tối ưu hóa không gian đỗ xe
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20">
              <h3 className="font-semibold text-cyan-400 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Mục tiêu Game
              </h3>
              <div className="space-y-3 text-gray-300">
                <p>• Sắp xếp xe vào đúng vị trí phù hợp</p>
                <p>• Ưu tiên xe khuyết tật và xe điện</p>
                <p>• Giảm thiểu thời gian chờ đợi</p>
                <p>• Tối ưu hóa sử dụng không gian</p>
                <p>• Tránh vi phạm quy tắc đỗ xe</p>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20">
              <h3 className="font-semibold text-green-400 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Quy tắc đỗ xe
              </h3>
              <div className="space-y-3 text-gray-300">
                <p>⚡ Xe điện: Ưu tiên chỗ sạc điện</p>
                <p>♿ Xe khuyết tật: Chỉ đỗ chỗ dành riêng</p>
                <p>🏍️ Xe máy: Có thể đỗ mọi nơi</p>
                <p>🚗 Xe thường: Chỗ thường hoặc điện</p>
                <p>🎯 Đỗ đúng loại: +50 điểm thưởng</p>
              </div>
            </div>
          </div>

          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
            <h3 className="font-semibold text-green-400 mb-2">🎯 Kiến thức học được</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <p>• Hệ thống đỗ xe thông minh với IoT</p>
                <p>• Thuật toán tối ưu hóa không gian</p>
                <p>• Cảm biến và theo dõi thời gian thực</p>
              </div>
              <div>
                <p>• Quản lý đô thị thông minh</p>
                <p>• Giải pháp giao thông bền vững</p>
                <p>• Phân tích dữ liệu và ra quyết định</p>
              </div>
            </div>
          </div>

          <button
            onClick={startGame}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 px-6 rounded-xl font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center"
          >
            <Car className="w-5 h-5 mr-2" />
            Bắt đầu quản lý bãi đỗ xe
          </button>
        </div>
      </div>
    );
  }

  if (gamePhase === 'results') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-slate-900 to-cyan-900 p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              🏆 Kết quả quản lý bãi đỗ xe
            </h1>
            <div className="text-6xl font-bold text-cyan-400 mb-4">
              {score}
            </div>
            <p className="text-gray-300 text-lg">
              {score > 400 ? 'Xuất sắc! Bạn là chuyên gia quản lý bãi đỗ xe!' : 
               score > 250 ? 'Tốt! Bạn đã quản lý khá hiệu quả!' :
               'Cần cải thiện! Hãy thử lại để đạt kết quả tốt hơn.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20">
              <h3 className="font-semibold text-cyan-400 mb-4">📊 Thống kê chi tiết</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Thời gian quản lý:</span>
                  <span className="text-blue-400 font-medium">{currentTime}s</span>
                </div>
                <div className="flex justify-between">
                  <span>Xe đỗ hoàn hảo:</span>
                  <span className="text-green-400 font-medium">{perfectMatches}</span>
                </div>
                <div className="flex justify-between">
                  <span>Vi phạm quy tắc:</span>
                  <span className="text-red-400 font-medium">{violations}</span>
                </div>
                <div className="flex justify-between">
                  <span>Hiệu quả:</span>
                  <span className="text-yellow-400 font-medium">{efficiency.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Thời gian chờ:</span>
                  <span className="text-orange-400 font-medium">{waitTime}s</span>
                </div>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20">
              <h3 className="font-semibold text-green-400 mb-4">🎓 Kiến thức đạt được</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>✅ Hiểu nguyên lý hoạt động của hệ thống đỗ xe thông minh</p>
                <p>✅ Học thuật toán tối ưu hóa không gian và tài nguyên</p>
                <p>✅ Áp dụng IoT trong quản lý đô thị thông minh</p>
                <p>✅ Phân tích dữ liệu và ra quyết định thời gian thực</p>
                <p>✅ Thiết kế giải pháp giao thông bền vững</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={resetGame}
              className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white py-3 px-6 rounded-xl font-medium hover:from-gray-700 hover:to-gray-800 transition-all duration-200 flex items-center justify-center"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Practice again
            </button>
            <button
              onClick={() => onComplete(score > 400)}
              className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-xl font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
            >
              Hoàn thành
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentVehicles = getCurrentVehicles();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-slate-900 to-cyan-900 p-4">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Header */}
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-cyan-500/20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-xl font-bold text-white flex items-center">
                <Car className="w-6 h-6 mr-2 text-cyan-400" />
                Smart Parking Control
              </h1>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-white">{currentTime}s</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                <span className="text-white">Perfect: {perfectMatches}</span>
              </div>
              <div className="flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2 text-red-400" />
                <span className="text-white">Vi phạm: {violations}</span>
              </div>
              <div className="flex items-center">
                <span className="text-cyan-400 font-medium">Điểm: {score}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Parking Lot */}
          <div className="lg:col-span-3 bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-cyan-500/20">
            <h3 className="font-semibold text-white mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-cyan-400" />
              Bãi đỗ xe thông minh
            </h3>
            <div className="relative bg-gray-800/50 rounded-lg p-4" style={{ height: '400px' }}>
              {/* Parking spots */}
              {parkingSpots.map(spot => (
                <button
                  key={spot.id}
                  onClick={() => selectedVehicle && assignVehicleToSpot(selectedVehicle, spot.id)}
                  disabled={!selectedVehicle || !canParkInSpot(vehicleQueue.find(v => v.id === selectedVehicle)!, spot)}
                  className={`absolute w-12 h-8 rounded border-2 transition-all duration-200 ${
                    selectedVehicle && canParkInSpot(vehicleQueue.find(v => v.id === selectedVehicle)!, spot)
                      ? 'border-yellow-400 hover:bg-yellow-400/20'
                      : 'border-white/20'
                  }`}
                  style={{
                    left: `${spot.x}%`,
                    top: `${spot.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className={`w-full h-full rounded flex items-center justify-center text-xs ${getSpotTypeColor(spot.type, spot.occupied, spot.reserved)}`}>
                    {spot.occupied ? (
                      getVehicleIcon(spot.vehicle?.type || 'car')
                    ) : (
                      <span className="text-white">{getSpotTypeIcon(spot.type)}</span>
                    )}
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-white">
                    {spot.id}
                  </div>
                </button>
              ))}
            </div>
            
            {/* Legend */}
            <div className="mt-4 grid grid-cols-4 gap-2 text-xs">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-500 rounded mr-2"></div>
                <span className="text-gray-300">Thường 🚗</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                <span className="text-gray-300">Điện ⚡</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                <span className="text-gray-300">Khuyết tật ♿</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-purple-500 rounded mr-2"></div>
                <span className="text-gray-300">Xe máy 🏍️</span>
              </div>
            </div>
          </div>

          {/* Vehicle Queue */}
          <div className="space-y-4">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-cyan-500/20">
              <h3 className="font-semibold text-white mb-4">🚗 Hàng đợi xe</h3>
              <div className="space-y-2 max-h-80 overflow-y-auto">
                {currentVehicles.map(vehicle => (
                  <button
                    key={vehicle.id}
                    onClick={() => setSelectedVehicle(selectedVehicle === vehicle.id ? null : vehicle.id)}
                    className={`w-full p-3 rounded-lg border-2 transition-all duration-200 ${
                      selectedVehicle === vehicle.id
                        ? 'border-yellow-400 bg-yellow-400/20'
                        : `${getVehicleColor(vehicle.type)} hover:bg-white/10`
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-xl mr-2">{getVehicleIcon(vehicle.type)}</span>
                        <div className="text-left">
                          <div className="text-white text-sm font-medium">{vehicle.id}</div>
                          <div className="text-gray-300 text-xs">
                            Ưu tiên: {vehicle.priority} | Chờ: {currentTime - vehicle.arrivalTime}s
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
                
                {currentVehicles.length === 0 && (
                  <div className="text-gray-400 text-center py-4">
                    Không có xe nào đang chờ
                  </div>
                )}
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-cyan-500/20">
              <h3 className="font-semibold text-white mb-4">📊 Thống kê</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>Hiệu quả:</span>
                  <span className="text-green-400">{efficiency.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Chờ tổng:</span>
                  <span className="text-yellow-400">{waitTime}s</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Chỗ trống:</span>
                  <span className="text-blue-400">{parkingSpots.filter(s => !s.occupied).length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
