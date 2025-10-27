'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Play, Pause, RotateCcw, Settings, Zap, AlertTriangle, CheckCircle, Factory } from 'lucide-react';

interface GameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface ProductionLine {
  id: string;
  name: string;
  efficiency: number;
  quality: number;
  isRunning: boolean;
  temperature: number;
  pressure: number;
  hasIssue: boolean;
}

interface IoTSensor {
  id: string;
  type: 'temperature' | 'pressure' | 'quality' | 'efficiency';
  value: number;
  status: 'normal' | 'warning' | 'critical';
  lineId: string;
}

export function FactoryAutomationSimulatorGame({ onComplete, timeLeft, onRestart }: GameProps) {
  const [gameState, setGameState] = useState<'setup' | 'running' | 'paused' | 'completed'>('setup');
  const [score, setScore] = useState(0);
  const [totalProduction, setTotalProduction] = useState(0);
  const [qualityScore, setQualityScore] = useState(100);

  const [productionLines, setProductionLines] = useState<ProductionLine[]>([
    {
      id: 'line1',
      name: 'Dây chuyền lắp ráp A',
      efficiency: 75,
      quality: 85,
      isRunning: false,
      temperature: 25,
      pressure: 1.2,
      hasIssue: false,
    },
    {
      id: 'line2',
      name: 'Dây chuyền đóng gói B',
      efficiency: 60,
      quality: 90,
      isRunning: false,
      temperature: 22,
      pressure: 1.0,
      hasIssue: false,
    },
    {
      id: 'line3',
      name: 'Dây chuyền kiểm tra C',
      efficiency: 80,
      quality: 95,
      isRunning: false,
      temperature: 20,
      pressure: 0.8,
      hasIssue: false,
    },
  ]);

  const [sensors, setSensors] = useState<IoTSensor[]>([]);
  const [automationRules] = useState({
    autoStartOnOptimal: false,
    autoStopOnIssue: false,
    qualityThreshold: 80,
    efficiencyThreshold: 70,
  });

  // Initialize sensors
  useEffect(() => {
    const initialSensors: IoTSensor[] = [];
    productionLines.forEach((line) => {
      initialSensors.push(
        { id: `${line.id}-temp`, type: 'temperature', value: line.temperature, status: 'normal', lineId: line.id },
        { id: `${line.id}-pressure`, type: 'pressure', value: line.pressure, status: 'normal', lineId: line.id },
        { id: `${line.id}-quality`, type: 'quality', value: line.quality, status: 'normal', lineId: line.id },
        { id: `${line.id}-efficiency`, type: 'efficiency', value: line.efficiency, status: 'normal', lineId: line.id },
      );
    });
    setSensors(initialSensors);
  }, [productionLines]);

  // Game simulation
  useEffect(() => {
    if (gameState !== 'running') return;

    const interval = setInterval(() => {
      setProductionLines((prevLines) => {
        const newLines = prevLines.map((line) => {
          if (!line.isRunning) return line;

          // Simulate random variations
          const tempVariation = (Math.random() - 0.5) * 5;
          const pressureVariation = (Math.random() - 0.5) * 0.2;
          const efficiencyVariation = (Math.random() - 0.5) * 10;
          const qualityVariation = (Math.random() - 0.5) * 5;

          const newTemp = Math.max(15, Math.min(40, line.temperature + tempVariation));
          const newPressure = Math.max(0.5, Math.min(2.0, line.pressure + pressureVariation));
          const newEfficiency = Math.max(30, Math.min(100, line.efficiency + efficiencyVariation));
          const newQuality = Math.max(50, Math.min(100, line.quality + qualityVariation));

          // Check for issues
          const hasIssue = newTemp > 35 || newPressure > 1.8 || newEfficiency < 50 || newQuality < 70;

          return {
            ...line,
            temperature: newTemp,
            pressure: newPressure,
            efficiency: newEfficiency,
            quality: newQuality,
            hasIssue,
          };
        });

        // Update sensors
        setSensors((prevSensors) => {
          return prevSensors.map((sensor) => {
            const line = newLines.find((l) => l.id === sensor.lineId);
            if (!line) return sensor;

            let value = 0;
            switch (sensor.type) {
              case 'temperature':
                value = line.temperature;
                break;
              case 'pressure':
                value = line.pressure;
                break;
              case 'quality':
                value = line.quality;
                break;
              case 'efficiency':
                value = line.efficiency;
                break;
            }

            let status: 'normal' | 'warning' | 'critical' = 'normal';
            if (sensor.type === 'temperature' && value > 30) status = value > 35 ? 'critical' : 'warning';
            if (sensor.type === 'pressure' && value > 1.5) status = value > 1.8 ? 'critical' : 'warning';
            if (sensor.type === 'quality' && value < 80) status = value < 70 ? 'critical' : 'warning';
            if (sensor.type === 'efficiency' && value < 60) status = value < 50 ? 'critical' : 'warning';

            return { ...sensor, value, status };
          });
        });

        return newLines;
      });

      // Calculate production and score
      setTotalProduction((prev) => {
        const runningLines = productionLines.filter((line) => line.isRunning && !line.hasIssue);
        const production = runningLines.reduce((acc, line) => acc + line.efficiency / 100, 0);
        return prev + production;
      });

      setQualityScore((prev) => {
        const runningLines = productionLines.filter((line) => line.isRunning);
        if (runningLines.length === 0) return prev;
        const avgQuality = runningLines.reduce((acc, line) => acc + line.quality, 0) / runningLines.length;
        return Math.max(50, Math.min(100, avgQuality));
      });

      setScore((prev) => {
        const efficiencyBonus = productionLines.filter((line) => line.isRunning && line.efficiency > 80).length * 5;
        const qualityBonus = qualityScore > 90 ? 10 : qualityScore > 80 ? 5 : 0;
        const issuesPenalty = productionLines.filter((line) => line.hasIssue).length * 3;
        return prev + efficiencyBonus + qualityBonus - issuesPenalty;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [gameState, qualityScore, totalProduction, automationRules, productionLines]);

  // Auto-complete game
  useEffect(() => {
    if (timeLeft <= 0 && gameState === 'running') {
      const success = score >= 100 && qualityScore >= 75;
      setGameState('completed');
      onComplete(success, score);
    }
  }, [timeLeft, score, qualityScore, gameState, onComplete]);

  const toggleProductionLine = useCallback((lineId: string) => {
    setProductionLines((prev) =>
      prev.map((line) => (line.id === lineId ? { ...line, isRunning: !line.isRunning } : line)),
    );
  }, []);

  const fixIssue = useCallback((lineId: string) => {
    setProductionLines((prev) =>
      prev.map((line) =>
        line.id === lineId
          ? {
              ...line,
              hasIssue: false,
              temperature: 25,
              pressure: 1.0,
              efficiency: Math.min(100, line.efficiency + 10),
              quality: Math.min(100, line.quality + 5),
            }
          : line,
      ),
    );
    setScore((prev) => prev + 15); // Bonus for fixing issues
  }, []);

  const getSensorStatusColor = (status: IoTSensor['status']) => {
    switch (status) {
      case 'normal':
        return 'text-green-400';
      case 'warning':
        return 'text-yellow-400';
      case 'critical':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const startGame = () => setGameState('running');
  const pauseGame = () => setGameState('paused');
  const resumeGame = () => setGameState('running');

  if (gameState === 'completed') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full border border-blue-500/20 text-center">
          <Factory className="w-16 h-16 mx-auto mb-4 text-blue-400" />
          <h2 className="text-2xl font-bold text-white mb-4">Hoàn thành!</h2>
          <div className="space-y-2 mb-6">
            <p className="text-gray-300">
              Điểm số: <span className="text-blue-400 font-bold">{score}</span>
            </p>
            <p className="text-gray-300">
              Tổng sản lượng: <span className="text-green-400 font-bold">{totalProduction.toFixed(1)}</span>
            </p>
            <p className="text-gray-300">
              Chất lượng: <span className="text-yellow-400 font-bold">{qualityScore.toFixed(1)}%</span>
            </p>
          </div>
          <button
            onClick={onRestart}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-xl"
          >
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
          <Factory className="w-8 h-8 text-blue-400" />
          <h1 className="text-2xl font-bold text-white">Mô Phỏng Tự Động Hóa Nhà Máy</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-white">
            Thời gian: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </div>
          <div className="text-blue-400 font-bold">Điểm: {score}</div>
        </div>
      </div>

      {/* Game Controls */}
      <div className="mb-6 flex space-x-4">
        {gameState === 'setup' && (
          <button
            onClick={startGame}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg flex items-center"
          >
            <Play className="w-4 h-4 mr-2" />
            Bắt đầu
          </button>
        )}
        {gameState === 'running' && (
          <button
            onClick={pauseGame}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg flex items-center"
          >
            <Pause className="w-4 h-4 mr-2" />
            Tạm dừng
          </button>
        )}
        {gameState === 'paused' && (
          <button
            onClick={resumeGame}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg flex items-center"
          >
            <Play className="w-4 h-4 mr-2" />
            Tiếp tục
          </button>
        )}
        <button
          onClick={onRestart}
          className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg flex items-center"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Khởi động lại
        </button>
      </div>

      {/* Main Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Production Lines */}
        <div className="lg:col-span-2 bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <Factory className="w-5 h-5 mr-2" />
            Dây chuyền sản xuất
          </h2>
          <div className="space-y-4">
            {productionLines.map((line) => (
              <div
                key={line.id}
                className={`border rounded-lg p-4 ${line.hasIssue ? 'border-red-500 bg-red-500/10' : line.isRunning ? 'border-green-500 bg-green-500/10' : 'border-gray-500 bg-gray-500/10'}`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-white font-semibold">{line.name}</h3>
                  <div className="flex space-x-2">
                    {line.hasIssue && (
                      <button
                        onClick={() => fixIssue(line.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm flex items-center"
                      >
                        <Settings className="w-3 h-3 mr-1" />
                        Sửa chữa
                      </button>
                    )}
                    <button
                      onClick={() => toggleProductionLine(line.id)}
                      className={`px-3 py-1 rounded text-sm ${line.isRunning ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white`}
                    >
                      {line.isRunning ? 'Dừng' : 'Chạy'}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-gray-300">
                    Hiệu suất:{' '}
                    <span className={line.efficiency > 70 ? 'text-green-400' : 'text-yellow-400'}>
                      {line.efficiency.toFixed(1)}%
                    </span>
                  </div>
                  <div className="text-gray-300">
                    Chất lượng:{' '}
                    <span className={line.quality > 80 ? 'text-green-400' : 'text-yellow-400'}>
                      {line.quality.toFixed(1)}%
                    </span>
                  </div>
                  <div className="text-gray-300">
                    Nhiệt độ:{' '}
                    <span
                      className={
                        line.temperature > 35
                          ? 'text-red-400'
                          : line.temperature > 30
                            ? 'text-yellow-400'
                            : 'text-green-400'
                      }
                    >
                      {line.temperature.toFixed(1)}°C
                    </span>
                  </div>
                  <div className="text-gray-300">
                    Áp suất:{' '}
                    <span
                      className={
                        line.pressure > 1.8
                          ? 'text-red-400'
                          : line.pressure > 1.5
                            ? 'text-yellow-400'
                            : 'text-green-400'
                      }
                    >
                      {line.pressure.toFixed(1)} bar
                    </span>
                  </div>
                </div>

                <div className="mt-2 flex items-center">
                  {line.hasIssue ? (
                    <div className="flex items-center text-red-400">
                      <AlertTriangle className="w-4 h-4 mr-1" />
                      Cần bảo trì
                    </div>
                  ) : line.isRunning ? (
                    <div className="flex items-center text-green-400">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Đang hoạt động
                    </div>
                  ) : (
                    <div className="flex items-center text-gray-400">
                      <Pause className="w-4 h-4 mr-1" />
                      Dừng hoạt động
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sensors and Statistics */}
        <div className="space-y-6">
          {/* Statistics */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">Thống kê</h3>
            <div className="space-y-3">
              <div className="text-gray-300">
                Tổng sản lượng: <span className="text-green-400 font-bold">{totalProduction.toFixed(1)}</span>
              </div>
              <div className="text-gray-300">
                Chất lượng TB: <span className="text-yellow-400 font-bold">{qualityScore.toFixed(1)}%</span>
              </div>
              <div className="text-gray-300">
                Dây chuyền hoạt động:{' '}
                <span className="text-blue-400 font-bold">
                  {productionLines.filter((l) => l.isRunning).length}/{productionLines.length}
                </span>
              </div>
              <div className="text-gray-300">
                Sự cố:{' '}
                <span className="text-red-400 font-bold">{productionLines.filter((l) => l.hasIssue).length}</span>
              </div>
            </div>
          </div>

          {/* IoT Sensors */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Cảm biến IoT
            </h3>
            <div className="space-y-2 max-h-80 overflow-y-auto">
              {sensors.map((sensor) => (
                <div key={sensor.id} className="text-sm">
                  <span className="text-gray-400">{sensor.type}:</span>
                  <span className={`ml-2 font-mono ${getSensorStatusColor(sensor.status)}`}>
                    {sensor.value.toFixed(1)}
                    {sensor.type === 'temperature' ? '°C' : sensor.type === 'pressure' ? ' bar' : '%'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-6 bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-white/10">
        <h3 className="text-white font-semibold mb-2">Hướng dẫn:</h3>
        <p className="text-gray-300 text-sm">
          🎯 Quản lý dây chuyền sản xuất để tối ưu hiệu suất và chất lượng. 💡 Theo dõi cảm biến IoT và sửa chữa khi có
          sự cố. ⚡ Đạt điểm số cao nhất trong thời gian cho phép!
        </p>
      </div>
    </div>
  );
}
