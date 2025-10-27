import React, { useState, useEffect, useRef } from 'react';
import { Drone, Camera, MapPin, AlertTriangle, CheckCircle, RotateCcw, TrendingUp } from 'lucide-react';

interface GameProps {
  onComplete: (success: boolean) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface DronePosition {
  x: number;
  y: number;
}

interface CropField {
  id: string;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  health: number; // 0-100
  status: 'healthy' | 'stressed' | 'diseased' | 'pest';
  coverage: number; // 0-100 scanned
  lastScanned: number;
}

interface ScanResult {
  fieldId: string;
  ndvi: number; // 0-1 vegetation index
  disease: boolean;
  pest: boolean;
  stress: boolean;
  recommendation: string;
}

const DroneCropMonitoringGame: React.FC<GameProps> = ({ onComplete, onRestart }) => {
  const [gamePhase, setGamePhase] = useState<'setup' | 'flying' | 'analysis' | 'results'>('setup');
  const [score, setScore] = useState(0);
  const [dronePosition, setDronePosition] = useState<DronePosition>({ x: 50, y: 50 });
  const [battery, setBattery] = useState(100);
  const [flightTime, setFlightTime] = useState(0);
  const [totalFlightTime] = useState(300); // 5 minutes
  const [isScanning, setIsScanning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [fields, setFields] = useState<CropField[]>([
    {
      id: 'rice-field-1',
      name: 'Ruộng lúa A',
      x: 10,
      y: 10,
      width: 25,
      height: 20,
      health: 85,
      status: 'healthy',
      coverage: 0,
      lastScanned: 0
    },
    {
      id: 'rice-field-2',
      name: 'Ruộng lúa B',
      x: 40,
      y: 15,
      width: 30,
      height: 25,
      health: 65,
      status: 'diseased',
      coverage: 0,
      lastScanned: 0
    },
    {
      id: 'vegetable-field',
      name: 'Vườn rau',
      x: 15,
      y: 45,
      width: 20,
      height: 15,
      health: 90,
      status: 'healthy',
      coverage: 0,
      lastScanned: 0
    },
    {
      id: 'fruit-orchard',
      name: 'Vườn cây ăn quả',
      x: 50,
      y: 50,
      width: 35,
      height: 30,
      health: 70,
      status: 'pest',
      coverage: 0,
      lastScanned: 0
    },
    {
      id: 'corn-field',
      name: 'Ruộng ngô',
      x: 10,
      y: 70,
      width: 25,
      height: 20,
      health: 40,
      status: 'stressed',
      coverage: 0,
      lastScanned: 0
    }
  ]);

  const [scanResults, setScanResults] = useState<ScanResult[]>([]);

  useEffect(() => {
    if (gamePhase === 'flying') {
      intervalRef.current = setInterval(() => {
        setFlightTime(prev => {
          const newTime = prev + 1;
          if (newTime >= totalFlightTime) {
            setGamePhase('analysis');
            return prev;
          }
          return newTime;
        });

        setBattery(prev => Math.max(0, prev - 0.3));
        
        if (isScanning) {
          performScan();
        }
      }, 1000);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [gamePhase, isScanning]); // eslint-disable-line react-hooks/exhaustive-deps

  const moveDrone = (direction: 'up' | 'down' | 'left' | 'right') => {
    // Không thể di chuyển khi hết pin
    if (battery <= 0) {
      return;
    }

    setDronePosition(prev => {
      const step = 5;
      let newX = prev.x;
      let newY = prev.y;

      switch (direction) {
        case 'up':
          newY = Math.max(0, prev.y - step);
          break;
        case 'down':
          newY = Math.min(100, prev.y + step);
          break;
        case 'left':
          newX = Math.max(0, prev.x - step);
          break;
        case 'right':
          newX = Math.min(100, prev.x + step);
          break;
      }

      setBattery(prev => Math.max(0, prev - 0.5));
      return { x: newX, y: newY };
    });
  };

  const performScan = () => {
    const currentField = fields.find(field => 
      dronePosition.x >= field.x && 
      dronePosition.x <= field.x + field.width &&
      dronePosition.y >= field.y &&
      dronePosition.y <= field.y + field.height
    );

    if (currentField) {
      setFields(prev => prev.map(field => {
        if (field.id === currentField.id) {
          const newCoverage = Math.min(100, field.coverage + 5);
          return {
            ...field,
            coverage: newCoverage,
            lastScanned: flightTime
          };
        }
        return field;
      }));

      // Generate scan result
      if (Math.random() > 0.7) { // 30% chance to detect issue
        const result: ScanResult = {
          fieldId: currentField.id,
          ndvi: 0.3 + Math.random() * 0.6,
          disease: currentField.status === 'diseased',
          pest: currentField.status === 'pest',
          stress: currentField.status === 'stressed',
          recommendation: generateRecommendation(currentField.status)
        };

        setScanResults(prev => {
          const existing = prev.find(r => r.fieldId === currentField.id);
          if (existing) {
            return prev.map(r => r.fieldId === currentField.id ? result : r);
          }
          return [...prev, result];
        });

        setScore(prev => prev + 150);
      }

      setBattery(prev => Math.max(0, prev - 2));
    }
  };

  const generateRecommendation = (status: string): string => {
    switch (status) {
      case 'diseased':
        return 'Phát hiện dấu hiệu bệnh đạo ôn. Khuyến nghị phun thuốc fungicide trong 24h.';
      case 'pest':
        return 'Phát hiện sâu bệnh. Cần sử dụng thuốc trừ sâu sinh học ngay lập tức.';
      case 'stressed':
        return 'Cây bị stress thiếu nước. Tăng cường tưới tiêu và bón phân kali.';
      default:
        return 'Cây trồng phát triển tốt. Duy trì chế độ chăm sóc hiện tại.';
    }
  };

  const startFlying = () => {
    setGamePhase('flying');
  };

  const toggleScan = () => {
    // Không thể bắt đầu scan khi hết pin
    if (battery <= 0 && !isScanning) {
      return;
    }
    
    setIsScanning(!isScanning);
  };

  const completeAnalysis = () => {
    const totalCoverage = fields.reduce((sum, field) => sum + field.coverage, 0) / fields.length;
    const issuesDetected = scanResults.filter(r => r.disease || r.pest || r.stress).length;
    
    const finalScore = Math.round(
      totalCoverage * 2 +
      issuesDetected * 300 +
      (battery > 20 ? 200 : 0) +
      (flightTime < totalFlightTime * 0.8 ? 100 : 0)
    );

    setScore(finalScore);
    setGamePhase('results');

    setTimeout(() => {
      onComplete(totalCoverage > 70 && issuesDetected >= 2);
    }, 2000);
  };

  const getFieldColor = (field: CropField) => {
    if (field.coverage === 0) return 'bg-gray-600';
    
    switch (field.status) {
      case 'healthy':
        return 'bg-green-500';
      case 'diseased':
        return 'bg-red-500';
      case 'pest':
        return 'bg-orange-500';
      case 'stressed':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  if (gamePhase === 'setup') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-2xl w-full border border-blue-500/20">
          <div className="text-center mb-8">
            <Drone className="w-16 h-16 mx-auto mb-4 text-blue-400" />
            <h1 className="text-3xl font-bold text-white mb-2">🚁 Drone Crop Monitoring</h1>
            <p className="text-gray-300">Giám sát cây trồng bằng drone và AI</p>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
              <h3 className="font-semibold text-blue-400 mb-4">📋 Nhiệm vụ</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Điều khiển drone bay khảo sát 5 khu vực canh tác</li>
                <li>• Sử dụng camera multispectral để phát hiện bệnh và sâu hại</li>
                <li>• Tối ưu hóa đường bay để tiết kiệm pin (100% → 20%)</li>
                <li>• Hoàn thành trong 5 phút và phân tích kết quả</li>
                <li>• Đạt được ít nhất 70% coverage và phát hiện 2+ vấn đề</li>
              </ul>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="font-semibold text-green-400 mb-2">🎯 Mục tiêu học tập</h3>
              <div className="space-y-1 text-sm text-gray-300">
                <p>• Hiểu cách drone ứng dụng trong nông nghiệp precision farming</p>
                <p>• Học cách phân tích hình ảnh NDVI và multispectral</p>
                <p>• Thực hành lập kế hoạch bay tối ưu cho khảo sát nông nghiệp</p>
              </div>
            </div>

            <button
              onClick={startFlying}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 px-6 rounded-xl font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 flex items-center justify-center"
            >
              <Drone className="w-5 h-5 mr-2" />
              Khởi động Drone
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'flying') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 p-4">
        <div className="max-w-7xl mx-auto space-y-4">
          {/* Header */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-xl font-bold text-white flex items-center">
                  <Drone className="w-6 h-6 mr-2 text-blue-400" />
                  Drone Control Center
                </h1>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-white">Pin: {battery.toFixed(0)}%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                  <span className="text-white">Thời gian: {flightTime}s</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                  <span className="text-white">Điểm: {score}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Battery Warning */}
          {battery <= 0 && (
            <div className="bg-red-500/20 border border-red-500/40 rounded-2xl p-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-red-400 font-medium">⚠️ Hết pin! Drone không thể di chuyển hoặc scan.</span>
              </div>
            </div>
          )}
          {battery > 0 && battery <= 20 && (
            <div className="bg-yellow-500/20 border border-yellow-500/40 rounded-2xl p-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-yellow-400 font-medium">⚠️ Pin yếu! Hãy hoàn thành nhiệm vụ nhanh chóng.</span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Map View */}
            <div className="lg:col-span-2 bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/20">
              <h3 className="font-semibold text-white mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                Bản đồ Nông trại
              </h3>
              <div className="relative bg-green-800/30 rounded-lg overflow-hidden" style={{ height: '400px' }}>
                {/* Fields */}
                {fields.map(field => (
                  <div
                    key={field.id}
                    className={`absolute border-2 border-white/20 ${getFieldColor(field)} opacity-70 rounded`}
                    style={{
                      left: `${field.x}%`,
                      top: `${field.y}%`,
                      width: `${field.width}%`,
                      height: `${field.height}%`
                    }}
                  >
                    <div className="p-1 text-xs text-white font-medium">
                      {field.name}
                    </div>
                    <div className="absolute bottom-1 right-1 text-xs text-white bg-black/50 px-1 rounded">
                      {field.coverage.toFixed(0)}%
                    </div>
                  </div>
                ))}

                {/* Drone */}
                <div
                  className="absolute w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 z-10"
                  style={{
                    left: `${dronePosition.x - 3}%`,
                    top: `${dronePosition.y - 3}%`
                  }}
                >
                  <Drone className="w-4 h-4 text-white" />
                </div>

                {/* Scanning indicator */}
                {isScanning && (
                  <div
                    className="absolute w-12 h-12 border-4 border-blue-400 rounded-full animate-ping"
                    style={{
                      left: `${dronePosition.x - 6}%`,
                      top: `${dronePosition.y - 6}%`
                    }}
                  />
                )}
              </div>
            </div>

            {/* Controls */}
            <div className="space-y-4">
              {/* Movement Controls */}
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/20">
                <h3 className="font-semibold text-white mb-4">🕹️ Điều khiển</h3>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div></div>
                  <button
                    onClick={() => moveDrone('up')}
                    disabled={battery <= 0}
                    className={`text-white p-3 rounded-lg border transition-all duration-200 ${
                      battery <= 0 
                        ? 'bg-gray-500/20 border-gray-500/20 text-gray-500 cursor-not-allowed' 
                        : 'bg-blue-500/20 hover:bg-blue-500/40 border-blue-500/20'
                    }`}
                  >
                    ↑
                  </button>
                  <div></div>
                  <button
                    onClick={() => moveDrone('left')}
                    disabled={battery <= 0}
                    className={`text-white p-3 rounded-lg border transition-all duration-200 ${
                      battery <= 0 
                        ? 'bg-gray-500/20 border-gray-500/20 text-gray-500 cursor-not-allowed' 
                        : 'bg-blue-500/20 hover:bg-blue-500/40 border-blue-500/20'
                    }`}
                  >
                    ←
                  </button>
                  <button
                    onClick={toggleScan}
                    disabled={battery <= 0 && !isScanning}
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      battery <= 0 && !isScanning
                        ? 'bg-gray-500/20 border-gray-500/20 text-gray-500 cursor-not-allowed'
                        : isScanning
                        ? 'bg-red-500/20 border-red-500/20 text-red-400'
                        : 'bg-green-500/20 border-green-500/20 text-green-400'
                    }`}
                  >
                    <Camera className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => moveDrone('right')}
                    disabled={battery <= 0}
                    className={`text-white p-3 rounded-lg border transition-all duration-200 ${
                      battery <= 0 
                        ? 'bg-gray-500/20 border-gray-500/20 text-gray-500 cursor-not-allowed' 
                        : 'bg-blue-500/20 hover:bg-blue-500/40 border-blue-500/20'
                    }`}
                  >
                    →
                  </button>
                  <div></div>
                  <button
                    onClick={() => moveDrone('down')}
                    disabled={battery <= 0}
                    className={`text-white p-3 rounded-lg border transition-all duration-200 ${
                      battery <= 0 
                        ? 'bg-gray-500/20 border-gray-500/20 text-gray-500 cursor-not-allowed' 
                        : 'bg-blue-500/20 hover:bg-blue-500/40 border-blue-500/20'
                    }`}
                  >
                    ↓
                  </button>
                  <div></div>
                </div>
                <div className="text-center">
                  <button
                    onClick={toggleScan}
                    disabled={battery <= 0 && !isScanning}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                      battery <= 0 && !isScanning
                        ? 'bg-gray-500/20 border border-gray-500/20 text-gray-500 cursor-not-allowed'
                        : isScanning
                        ? 'bg-red-500/20 border border-red-500/20 text-red-400'
                        : 'bg-green-500/20 border border-green-500/20 text-green-400'
                    }`}
                  >
                    {isScanning ? 'Dừng Scan' : 'Bắt đầu Scan'}
                  </button>
                </div>
              </div>

              {/* Field Status */}
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/20">
                <h3 className="font-semibold text-white mb-4">📊 Trạng thái Ruộng</h3>
                <div className="space-y-2 text-sm">
                  {fields.map(field => (
                    <div key={field.id} className="flex justify-between items-center">
                      <span className="text-gray-300">{field.name}:</span>
                      <span className="text-blue-400">{field.coverage.toFixed(0)}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scan Results */}
              {scanResults.length > 0 && (
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-yellow-500/20">
                  <h3 className="font-semibold text-yellow-400 mb-2 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Phát hiện Vấn đề
                  </h3>
                  <div className="space-y-2 text-sm">
                    {scanResults.slice(-3).map((result, index) => (
                      <div key={index} className="text-gray-300">
                        <div className="font-medium">{fields.find(f => f.id === result.fieldId)?.name}</div>
                        <div className="text-xs text-gray-400">{result.recommendation}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'analysis') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-blue-500/20">
          <div className="text-center mb-8">
            <TrendingUp className="w-16 h-16 mx-auto mb-4 text-blue-400" />
            <h2 className="text-3xl font-bold text-white mb-2">📊 Phân tích Dữ liệu</h2>
            <p className="text-gray-300">Kết quả khảo sát drone nông nghiệp</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Coverage Summary */}
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
              <h3 className="font-semibold text-green-400 mb-4">📈 Tổng quan Coverage</h3>
              <div className="space-y-3">
                {fields.map(field => (
                  <div key={field.id} className="flex justify-between items-center">
                    <span className="text-gray-300">{field.name}</span>
                    <div className="flex items-center">
                      <div className="w-20 bg-gray-700 rounded-full h-2 mr-2">
                        <div 
                          className="bg-green-400 h-2 rounded-full" 
                          style={{ width: `${field.coverage}%` }}
                        />
                      </div>
                      <span className="text-green-400 text-sm">{field.coverage.toFixed(0)}%</span>
                    </div>
                  </div>
                ))}
                <div className="border-t border-gray-700 pt-2 mt-4">
                  <div className="flex justify-between items-center font-medium">
                    <span className="text-white">Trung bình:</span>
                    <span className="text-green-400">
                      {(fields.reduce((sum, field) => sum + field.coverage, 0) / fields.length).toFixed(0)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Issues Detected */}
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
              <h3 className="font-semibold text-red-400 mb-4">⚠️ Vấn đề Phát hiện</h3>
              <div className="space-y-3">
                {scanResults.length > 0 ? (
                  scanResults.map((result, index) => (
                    <div key={index} className="border border-gray-700 rounded p-3">
                      <div className="font-medium text-white mb-1">
                        {fields.find(f => f.id === result.fieldId)?.name}
                      </div>
                      <div className="text-sm text-gray-300 mb-2">
                        NDVI: {result.ndvi.toFixed(2)} • 
                        {result.disease && ' Bệnh'} 
                        {result.pest && ' Sâu hại'} 
                        {result.stress && ' Stress'}
                      </div>
                      <div className="text-xs text-gray-400">
                        {result.recommendation}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 text-center">Không phát hiện vấn đề nào</p>
                )}
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={completeAnalysis}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-8 rounded-xl font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 flex items-center justify-center mx-auto"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Hoàn thành Phân tích
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Results phase
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 flex items-center justify-center p-4">
      <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-2xl w-full border border-blue-500/20">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 mx-auto mb-4 text-blue-400" />
          <h2 className="text-3xl font-bold text-white mb-2">🎯 Nhiệm vụ Hoàn thành!</h2>
          <p className="text-gray-300 mb-6">Kết quả khảo sát drone của bạn</p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h3 className="font-semibold text-blue-400 mb-2">📊 Coverage</h3>
              <div className="text-2xl font-bold text-white">
                {(fields.reduce((sum, field) => sum + field.coverage, 0) / fields.length).toFixed(0)}%
              </div>
              <div className="text-sm text-gray-400">Diện tích khảo sát</div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-400 mb-2">🔍 Phát hiện</h3>
              <div className="text-2xl font-bold text-white">{scanResults.length}</div>
              <div className="text-sm text-gray-400">Vấn đề cây trồng</div>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="font-semibold text-green-400 mb-2">🔋 Pin còn lại</h3>
              <div className="text-2xl font-bold text-white">{battery.toFixed(0)}%</div>
              <div className="text-sm text-gray-400">Hiệu quả bay</div>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
              <h3 className="font-semibold text-purple-400 mb-2">🏆 Điểm số</h3>
              <div className="text-2xl font-bold text-white">{score}</div>
              <div className="text-sm text-gray-400">Drone Pilot Score</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-blue-400 mb-3">💡 Đánh giá Kỹ năng</h3>
            <div className="space-y-2 text-left text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Flight Planning:</span>
                <span className="text-blue-400">
                  {battery > 20 ? 'Xuất sắc' : battery > 10 ? 'Tốt' : 'Cần cải thiện'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Coverage Efficiency:</span>
                <span className="text-blue-400">
                  {(fields.reduce((sum, field) => sum + field.coverage, 0) / fields.length) > 70 ? 'Xuất sắc' : 'Tốt'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Problem Detection:</span>
                <span className="text-blue-400">
                  {scanResults.length >= 2 ? 'Xuất sắc' : scanResults.length >= 1 ? 'Tốt' : 'Cần cải thiện'}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={onRestart}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 flex items-center justify-center"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Bay lại
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

export default DroneCropMonitoringGame;
