'use client';
import React, { useState, useEffect } from 'react';
import { climateModelingGame } from '@/data/climateModelingGame';
import { Clock, ThermometerSun, Waves, TreePine, Factory, Zap, Award, RotateCcw } from 'lucide-react';

interface ClimateState {
  year: number;
  co2Level: number;
  temperature: number;
  seaLevel: number;
  airQuality: number;
  biodiversity: number;
  renewableEnergy: number;
  score: number;
}

interface GameAction {
  id: string;
  name: string;
  cost: number;
  co2Impact: number;
  tempImpact: number;
  renewableBoost: number;
  description: string;
  icon: React.ReactNode;
}

const gameActions: GameAction[] = [
  {
    id: 'solar-farm',
    name: 'Xây dựng Farm Năng lượng Mặt trời',
    cost: 50,
    co2Impact: -15,
    tempImpact: -0.1,
    renewableBoost: 10,
    description: 'Đầu tư vào trang trại năng lượng mặt trời để giảm phụ thuộc fossil fuels',
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: 'reforestation',
    name: 'Chương trình Trồng rừng',
    cost: 30,
    co2Impact: -10,
    tempImpact: -0.05,
    renewableBoost: 0,
    description: 'Trồng cây để hấp thụ CO2 và cải thiện hệ sinh thái',
    icon: <TreePine className="w-5 h-5" />,
  },
  {
    id: 'ev-incentives',
    name: 'Khuyến khích Xe điện',
    cost: 40,
    co2Impact: -8,
    tempImpact: -0.03,
    renewableBoost: 5,
    description: 'Chính sách hỗ trợ chuyển đổi sang xe điện',
    icon: <Factory className="w-5 h-5" />,
  },
  {
    id: 'carbon-tax',
    name: 'Thuế Carbon',
    cost: 20,
    co2Impact: -12,
    tempImpact: -0.08,
    renewableBoost: 8,
    description: 'Áp thuế carbon để khuyến khích giảm phát thải',
    icon: <ThermometerSun className="w-5 h-5" />,
  },
];

export default function ClimateModelingGameComponent() {
  const [gameState, setGameState] = useState<ClimateState>({
    year: 2024,
    co2Level: 420,
    temperature: 1.2,
    seaLevel: 3.5,
    airQuality: 60,
    biodiversity: 70,
    renewableEnergy: 12,
    score: 0,
  });

  const [budget, setBudget] = useState(100);
  const [gameYear, setGameYear] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [gameMessage, setGameMessage] = useState('');

  // Calculate final score function
  const calculateFinalScore = React.useCallback(() => {
    const tempScore = Math.max(0, 100 - (gameState.temperature - 1.2) * 50);
    const co2Score = Math.max(0, 100 - (gameState.co2Level - 350) * 0.5);
    const renewableScore = gameState.renewableEnergy;
    const finalScore = Math.round((tempScore + co2Score + renewableScore) / 3);

    setGameState((prev) => ({ ...prev, score: finalScore }));

    if (finalScore >= 80) {
      setGameMessage('🏆 Xuất sắc! Bạn đã cứu được hành tinh!');
    } else if (finalScore >= 60) {
      setGameMessage('👍 Tốt! Bạn đã tạo ra những thay đổi tích cực.');
    } else {
      setGameMessage('⚠️ Hãy thử lại với các strategy khác nhau!');
    }
  }, [gameState.temperature, gameState.co2Level, gameState.renewableEnergy]);

  // Natural climate progression simulation
  useEffect(() => {
    if (isGameRunning && gameYear < 20) {
      const timer = setTimeout(() => {
        setGameState((prev) => {
          // Natural CO2 increase if no action
          const naturalCO2Increase = 2;
          const newCO2 = Math.max(350, prev.co2Level + naturalCO2Increase);
          const newTemp = prev.temperature + (newCO2 - 350) * 0.002;
          const newSeaLevel = prev.seaLevel + newTemp * 0.1;

          // Air quality and biodiversity degradation
          const newAirQuality = Math.max(20, prev.airQuality - 1);
          const newBiodiversity = Math.max(30, prev.biodiversity - 0.5);

          return {
            ...prev,
            year: prev.year + 1,
            co2Level: newCO2,
            temperature: newTemp,
            seaLevel: newSeaLevel,
            airQuality: newAirQuality,
            biodiversity: newBiodiversity,
          };
        });

        setGameYear((prev) => prev + 1);
        setBudget((prev) => prev + 20); // Annual budget refresh

        if (gameYear === 19) {
          setIsGameRunning(false);
          calculateFinalScore();
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isGameRunning, gameYear, calculateFinalScore]);

  const executeAction = (action: GameAction) => {
    if (budget >= action.cost) {
      setBudget((prev) => prev - action.cost);

      setGameState((prev) => ({
        ...prev,
        co2Level: Math.max(350, prev.co2Level + action.co2Impact),
        temperature: Math.max(0, prev.temperature + action.tempImpact),
        renewableEnergy: Math.min(100, prev.renewableEnergy + action.renewableBoost),
        airQuality: Math.min(100, prev.airQuality + Math.abs(action.co2Impact) * 0.5),
        biodiversity: Math.min(100, prev.biodiversity + Math.abs(action.tempImpact) * 5),
        score: prev.score + 10,
      }));

      setGameMessage(`✅ ${action.name} đã được thực hiện!`);
      setTimeout(() => setGameMessage(''), 3000);
    } else {
      setGameMessage('❌ Không đủ budget cho hành động này!');
      setTimeout(() => setGameMessage(''), 3000);
    }
  };

  const startGame = () => {
    setIsGameRunning(true);
    setGameYear(0);
    setGameMessage('🌍 Simulation đã bắt đầu! Hãy thực hiện các hành động để cứu trái đất.');
  };

  const resetGame = () => {
    setIsGameRunning(false);
    setGameYear(0);
    setBudget(100);
    setGameState({
      year: 2024,
      co2Level: 420,
      temperature: 1.2,
      seaLevel: 3.5,
      airQuality: 60,
      biodiversity: 70,
      renewableEnergy: 12,
      score: 0,
    });
    setGameMessage('');
  };

  const getTemperatureColor = (temp: number) => {
    if (temp < 1.5) return 'text-green-400';
    if (temp < 2.0) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getCO2Color = (co2: number) => {
    if (co2 < 400) return 'text-green-400';
    if (co2 < 450) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Game Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">🌍 Climate Modeling Simulator</h1>
          <p className="text-gray-300 text-lg">
            Mô phỏng biến đổi khí hậu qua 20 năm. Thực hiện các hành động để cứu hành tinh!
          </p>
        </div>

        {/* Game Status Bar */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-300">Năm</span>
              </div>
              <div className="text-2xl font-bold text-blue-400">{gameState.year}</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <ThermometerSun className="w-5 h-5 text-red-400" />
                <span className="text-sm text-gray-300">Nhiệt độ</span>
              </div>
              <div className={`text-2xl font-bold ${getTemperatureColor(gameState.temperature)}`}>
                +{gameState.temperature.toFixed(1)}°C
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Factory className="w-5 h-5 text-orange-400" />
                <span className="text-sm text-gray-300">CO2</span>
              </div>
              <div className={`text-2xl font-bold ${getCO2Color(gameState.co2Level)}`}>
                {Math.round(gameState.co2Level)} ppm
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Waves className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-gray-300">Mực nước biển</span>
              </div>
              <div className="text-2xl font-bold text-cyan-400">+{gameState.seaLevel.toFixed(1)}mm/yr</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-300">Renewable</span>
              </div>
              <div className="text-2xl font-bold text-green-400">{Math.round(gameState.renewableEnergy)}%</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-gray-300">Budget</span>
              </div>
              <div className="text-2xl font-bold text-purple-400">${budget}</div>
            </div>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">Air Quality</span>
              <span className="text-sm font-semibold">{Math.round(gameState.airQuality)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-red-500 to-green-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${gameState.airQuality}%` }}
              />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">Biodiversity</span>
              <span className="text-sm font-semibold">{Math.round(gameState.biodiversity)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-red-500 to-green-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${gameState.biodiversity}%` }}
              />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">Climate Score</span>
              <span className="text-sm font-semibold">{gameState.score}/100</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${gameState.score}%` }}
              />
            </div>
          </div>
        </div>

        {/* Game Actions */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold mb-4">Climate Actions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {gameActions.map((action) => (
              <button
                key={action.id}
                onClick={() => executeAction(action)}
                disabled={budget < action.cost || !isGameRunning}
                className={`p-4 rounded-lg border transition-all duration-300 ${
                  budget >= action.cost && isGameRunning
                    ? 'bg-green-600/20 border-green-400 hover:bg-green-600/30 hover:scale-105'
                    : 'bg-gray-600/20 border-gray-500 cursor-not-allowed opacity-50'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  {action.icon}
                  <span className="font-semibold">{action.name}</span>
                </div>
                <p className="text-sm text-gray-300 mb-3">{action.description}</p>
                <div className="text-xs space-y-1">
                  <div>💰 Cost: ${action.cost}</div>
                  <div>🌱 CO2: {action.co2Impact} ppm</div>
                  <div>🌡️ Temp: {action.tempImpact}°C</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Game Controls */}
        <div className="text-center space-y-4">
          {gameMessage && (
            <div className="bg-blue-600/20 border border-blue-400 rounded-lg p-4 mb-4">
              <p className="text-blue-300">{gameMessage}</p>
            </div>
          )}

          <div className="flex justify-center gap-4">
            {!isGameRunning ? (
              <button
                onClick={startGame}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                🚀 Start Simulation
              </button>
            ) : (
              <div className="text-gray-300">Simulation running... Year {gameYear + 1}/20</div>
            )}

            <button
              onClick={resetGame}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Reset Game
            </button>
          </div>

          {gameState.score > 0 && !isGameRunning && (
            <div className="bg-purple-600/20 border border-purple-400 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Final Results</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-400">{gameState.score}</div>
                  <div className="text-sm text-gray-300">Climate Score</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">{Math.round(gameState.renewableEnergy)}%</div>
                  <div className="text-sm text-gray-300">Renewable Energy</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Educational Content */}
        <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-4">🎓 Learning Objectives</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-blue-400">Climate Factors</h4>
              <ul className="space-y-2 text-gray-300">
                {climateModelingGame.environmentalFactors.slice(0, 4).map((factor, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-green-400">Solutions</h4>
              <ul className="space-y-2 text-gray-300">
                {climateModelingGame.interventions.slice(0, 4).map((intervention, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>{intervention}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
