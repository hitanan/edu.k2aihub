import React, { useState, useEffect } from 'react';

interface Mission {
  name: string;
  objective: string;
  targetSamples: number;
  environment: string;
}

interface Position {
  x: number;
  y: number;
}

interface SpaceExplorationGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

export function SpaceExplorationGame({ onComplete, timeLeft, onRestart }: SpaceExplorationGameProps) {
  const [currentMission, setCurrentMission] = useState(0);
  const [fuel, setFuel] = useState(100);
  const [oxygen, setOxygen] = useState(100);
  const [samples, setSamples] = useState(0);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [score, setScore] = useState(0);

  const missions: Mission[] = [
    {
      name: 'Mars Sample Collection',
      objective: 'Collect 3 soil samples from different locations',
      targetSamples: 3,
      environment: 'Mars Surface',
    },
    {
      name: 'Asteroid Mining',
      objective: 'Extract valuable minerals from asteroid belt',
      targetSamples: 2,
      environment: 'Asteroid Belt',
    },
  ];

  const currentMissionData = missions[currentMission];

  const moveSpacecraft = (direction: string) => {
    if (fuel <= 0) return;

    const newPos = { ...position };
    switch (direction) {
      case 'up':
        newPos.y = Math.max(-3, newPos.y - 1);
        break;
      case 'down':
        newPos.y = Math.min(3, newPos.y + 1);
        break;
      case 'left':
        newPos.x = Math.max(-3, newPos.x - 1);
        break;
      case 'right':
        newPos.x = Math.min(3, newPos.x + 1);
        break;
    }

    setPosition(newPos);
    setFuel((prev) => Math.max(0, prev - 5));
    setOxygen((prev) => Math.max(0, prev - 2));
  };

  const collectSample = () => {
    if (position.x !== 0 || position.y !== 0) {
      setSamples((prev) => prev + 1);
      setScore((prev) => prev + 25);
    }
  };

  const refuel = () => {
    setFuel(100);
    setOxygen(100);
    setScore((prev) => Math.max(0, prev - 10));
  };

  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);

  useEffect(() => {
    if (samples >= currentMissionData.targetSamples) {
      if (currentMission < missions.length - 1) {
        setCurrentMission((prev) => prev + 1);
        setSamples(0);
        setPosition({ x: 0, y: 0 });
      } else {
        onComplete(true, score + 100);
      }
    }
  }, [samples, currentMissionData.targetSamples, currentMission, missions.length, score, onComplete]);

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">🚀 {currentMissionData.name}</h3>
        <p className="text-gray-300 text-sm">{currentMissionData.objective}</p>
        <div className="text-purple-400 font-medium">Điểm: {score}</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-white font-medium mb-3">Không gian: {currentMissionData.environment}</h4>
          <div
            className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-lg p-4 relative"
            style={{ height: '200px' }}
          >
            {/* Grid representation */}
            {Array.from({ length: 7 }, (_, i) =>
              Array.from({ length: 7 }, (_, j) => {
                const x = j - 3;
                const y = i - 3;
                const isSpacecraft = position.x === x && position.y === y;
                const isHome = x === 0 && y === 0;
                return (
                  <div
                    key={`${i}-${j}`}
                    className={`absolute border border-gray-600/30 ${
                      isSpacecraft ? 'bg-cyan-400' : isHome ? 'bg-green-400/50' : 'bg-gray-800/20'
                    }`}
                    style={{
                      width: '20px',
                      height: '20px',
                      left: `${j * 22 + 10}px`,
                      top: `${i * 22 + 10}px`,
                    }}
                  >
                    {isSpacecraft && <span className="text-xs">🚀</span>}
                    {isHome && <span className="text-xs">🏠</span>}
                  </div>
                );
              }),
            )}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            <div></div>
            <button
              onClick={() => moveSpacecraft('up')}
              disabled={fuel <= 0}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded disabled:opacity-50"
            >
              ⬆️
            </button>
            <div></div>
            <button
              onClick={() => moveSpacecraft('left')}
              disabled={fuel <= 0}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded disabled:opacity-50"
            >
              ⬅️
            </button>
            <button
              onClick={collectSample}
              disabled={position.x === 0 && position.y === 0}
              className="bg-yellow-600 hover:bg-yellow-700 text-white p-2 rounded text-sm disabled:opacity-50"
            >
              📦 Collect
            </button>
            <button
              onClick={() => moveSpacecraft('right')}
              disabled={fuel <= 0}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded disabled:opacity-50"
            >
              ➡️
            </button>
            <div></div>
            <button
              onClick={() => moveSpacecraft('down')}
              disabled={fuel <= 0}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded disabled:opacity-50"
            >
              ⬇️
            </button>
            <div></div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Spacecraft Status:</h4>
          <div className="space-y-3">
            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">Fuel:</span>
                <span className={fuel > 20 ? 'text-green-400' : 'text-red-400'}>{fuel}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${fuel > 20 ? 'bg-green-500' : 'bg-red-500'}`}
                  style={{ width: `${fuel}%` }}
                />
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">Oxygen:</span>
                <span className={oxygen > 20 ? 'text-blue-400' : 'text-red-400'}>{oxygen}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${oxygen > 20 ? 'bg-blue-500' : 'bg-red-500'}`}
                  style={{ width: `${oxygen}%` }}
                />
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Samples Collected:</span>
                <span className="text-yellow-400">
                  {samples}/{currentMissionData.targetSamples}
                </span>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Position:</span>
                <span className="text-cyan-400">
                  ({position.x}, {position.y})
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={refuel}
            className="w-full mt-4 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-200"
          >
            🔋 Emergency Refuel (-10 pts)
          </button>
        </div>
      </div>
    </div>
  );
}
