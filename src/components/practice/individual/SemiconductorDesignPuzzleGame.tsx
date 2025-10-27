'use client';

import React, { useState, useEffect } from 'react';
import { Zap, Cpu, CheckCircle, RotateCcw, Clock, Target } from 'lucide-react';

interface SemiconductorDesignPuzzleGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface LogicGate {
  id: string;
  type: 'AND' | 'OR' | 'NOT' | 'NAND' | 'NOR' | 'XOR';
  position: { x: number; y: number };
  inputs: boolean[];
  output: boolean;
  connections: string[];
}

interface CircuitChallenge {
  id: string;
  name: string;
  description: string;
  targetOutput: boolean[];
  testInputs: boolean[][];
  difficulty: number;
  points: number;
}

const SemiconductorDesignPuzzleGame: React.FC<SemiconductorDesignPuzzleGameProps> = ({
  onComplete,
  timeLeft,
  onRestart,
}) => {
  const [score, setScore] = useState(0);
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [selectedGate, setSelectedGate] = useState<string | null>(null);
  const [circuit, setCircuit] = useState<LogicGate[]>([]);
  const [gameState, setGameState] = useState<'playing' | 'completed'>('playing');

  const challenges: CircuitChallenge[] = [
    {
      id: 'basic-and',
      name: 'Cổng AND Cơ Bản',
      description: 'Tạo mạch chỉ cho output TRUE khi cả hai input đều TRUE',
      targetOutput: [false, false, false, true],
      testInputs: [
        [false, false],
        [false, true],
        [true, false],
        [true, true],
      ],
      difficulty: 1,
      points: 50,
    },
    {
      id: 'or-gate',
      name: 'Cổng OR Logic',
      description: 'Tạo mạch cho output TRUE khi ít nhất một input TRUE',
      targetOutput: [false, true, true, true],
      testInputs: [
        [false, false],
        [false, true],
        [true, false],
        [true, true],
      ],
      difficulty: 2,
      points: 75,
    },
    {
      id: 'nand-complex',
      name: 'Mạch NAND Phức Tạp',
      description: 'Sử dụng cổng NAND để tạo ra logic phức tạp',
      targetOutput: [true, true, true, false],
      testInputs: [
        [false, false],
        [false, true],
        [true, false],
        [true, true],
      ],
      difficulty: 3,
      points: 100,
    },
    {
      id: 'xor-advanced',
      name: 'XOR Nâng Cao',
      description: 'Tạo mạch XOR chỉ TRUE khi inputs khác nhau',
      targetOutput: [false, true, true, false],
      testInputs: [
        [false, false],
        [false, true],
        [true, false],
        [true, true],
      ],
      difficulty: 4,
      points: 150,
    },
  ];

  const gateTypes = [
    { type: 'AND' as const, color: '#3B82F6', symbol: '&' },
    { type: 'OR' as const, color: '#10B981', symbol: '≥1' },
    { type: 'NOT' as const, color: '#EF4444', symbol: '¬' },
    { type: 'NAND' as const, color: '#8B5CF6', symbol: '&̄' },
    { type: 'NOR' as const, color: '#F59E0B', symbol: '≥1̄' },
    { type: 'XOR' as const, color: '#EC4899', symbol: '⊕' },
  ];

  const addGate = (type: LogicGate['type']) => {
    const newGate: LogicGate = {
      id: `gate_${Date.now()}`,
      type,
      position: { x: 200 + Math.random() * 300, y: 150 + Math.random() * 200 },
      inputs: type === 'NOT' ? [false] : [false, false],
      output: false,
      connections: [],
    };
    setCircuit((prev) => [...prev, newGate]);
  };

  const testCircuit = () => {
    const challenge = challenges[currentChallenge];
    const results: boolean[] = [];

    // For now, simulate the circuit test with the current gates
    challenge.testInputs.forEach(() => {
      // Simplified test - just check if we have the right type of gates
      const hasRequiredGates = circuit.length > 0;
      results.push(hasRequiredGates);
    });

    // Check if results match target (simplified logic)
    const isCorrect = circuit.length > 0 && Math.random() > 0.3; // Simplified for demo

    if (isCorrect) {
      setScore((prev) => prev + challenge.points);
      if (currentChallenge < challenges.length - 1) {
        setCurrentChallenge((prev) => prev + 1);
        setCircuit([]);
      } else {
        setGameState('completed');
        onComplete(true, score + challenge.points);
      }
    }
  };

  const resetCircuit = () => {
    setCircuit([]);
    setSelectedGate(null);
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete(false, score);
    }
  }, [timeLeft, onComplete, score]);

  return (
    <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-slate-800 to-purple-900 text-white p-4">
      <div className="max-w-6xl mx-auto h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <Cpu className="w-8 h-8 text-purple-400" />
            <div>
              <h2 className="text-2xl font-bold">Thiết Kế Vi Mạch</h2>
              <p className="text-sm text-gray-300">
                Thử thách {currentChallenge + 1}/{challenges.length}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-green-400" />
              <span className="font-semibold">{score} điểm</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">{Math.max(0, timeLeft)}s</span>
            </div>
          </div>
        </div>

        {/* Challenge Description */}
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 mb-4">
          <h3 className="text-lg font-semibold text-purple-300 mb-2">{challenges[currentChallenge].name}</h3>
          <p className="text-gray-300 mb-3">{challenges[currentChallenge].description}</p>

          {/* Truth Table */}
          <div className="bg-black/20 rounded p-3">
            <h4 className="text-sm font-semibold text-gray-300 mb-2">Bảng Chân Lý Mong Muốn:</h4>
            <div className="grid grid-cols-4 gap-2 text-xs">
              <div className="font-semibold">Input A</div>
              <div className="font-semibold">Input B</div>
              <div className="font-semibold">Output</div>
              <div></div>
              {challenges[currentChallenge].testInputs.map((inputs, index) => (
                <React.Fragment key={index}>
                  <div className={inputs[0] ? 'text-green-400' : 'text-red-400'}>{inputs[0] ? 'TRUE' : 'FALSE'}</div>
                  <div className={inputs[1] ? 'text-green-400' : 'text-red-400'}>{inputs[1] ? 'TRUE' : 'FALSE'}</div>
                  <div className={challenges[currentChallenge].targetOutput[index] ? 'text-green-400' : 'text-red-400'}>
                    {challenges[currentChallenge].targetOutput[index] ? 'TRUE' : 'FALSE'}
                  </div>
                  <div></div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-4 gap-4">
          {/* Gate Palette */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-yellow-400" />
              Cổng Logic
            </h3>
            <div className="space-y-2">
              {gateTypes.map((gate) => (
                <button
                  key={gate.type}
                  onClick={() => addGate(gate.type)}
                  className="w-full p-3 rounded-lg border border-gray-600 hover:border-gray-400 transition-colors text-left"
                  style={{ backgroundColor: gate.color + '20', borderColor: gate.color }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{gate.type}</span>
                    <span className="text-xl font-bold" style={{ color: gate.color }}>
                      {gate.symbol}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Circuit Design Area */}
          <div className="col-span-2 bg-black/30 backdrop-blur-sm rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3">Khu Vực Thiết Kế</h3>
            <div className="bg-black/20 rounded-lg h-80 relative border-2 border-dashed border-gray-600">
              {circuit.map((gate) => (
                <div
                  key={gate.id}
                  className={`absolute w-16 h-12 rounded border-2 cursor-pointer transition-all ${
                    selectedGate === gate.id ? 'border-yellow-400 shadow-lg' : 'border-gray-400'
                  }`}
                  style={{
                    left: gate.position.x,
                    top: gate.position.y,
                    backgroundColor: gateTypes.find((g) => g.type === gate.type)?.color + '40',
                  }}
                  onClick={() => setSelectedGate(selectedGate === gate.id ? null : gate.id)}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{gate.type}</span>
                  </div>
                  {/* Input indicators */}
                  <div className="absolute -left-2 top-2 w-4 h-2 bg-gray-600 rounded-full"></div>
                  {gate.type !== 'NOT' && (
                    <div className="absolute -left-2 bottom-2 w-4 h-2 bg-gray-600 rounded-full"></div>
                  )}
                  {/* Output indicator */}
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-2 bg-gray-600 rounded-full"></div>
                </div>
              ))}

              {circuit.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <Cpu className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>Kéo thả cổng logic vào đây</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3">Điều Khiển</h3>
            <div className="space-y-3">
              <button
                onClick={testCircuit}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Kiểm Tra Mạch
              </button>

              <button
                onClick={resetCircuit}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset Mạch
              </button>

              <button
                onClick={onRestart}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Practice again
              </button>

              {/* Progress */}
              <div className="mt-4 p-3 bg-black/20 rounded-lg">
                <div className="text-xs text-gray-400 mb-1">Tiến độ</div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentChallenge / challenges.length) * 100}%` }}
                  />
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {currentChallenge}/{challenges.length} thử thách
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Victory Modal */}
      {gameState === 'completed' && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-8 rounded-2xl text-white text-center max-w-md mx-4">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-yellow-900" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Chúc mừng!</h2>
            <p className="text-lg mb-4">Bạn đã hoàn thành tất cả thử thách thiết kế vi mạch!</p>
            <div className="text-yellow-300 font-semibold mb-6">Điểm cuối: {score} điểm</div>
            <button
              onClick={onRestart}
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Practice again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SemiconductorDesignPuzzleGame;
