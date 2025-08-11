import React, { useState, useEffect } from 'react';

interface ArduinoCircuitGameProps {
  gameData: {
    circuits: Array<{
      name: string;
      explanation: string;
      components: Array<
        | {
            id?: string;
            name?: string;
          }
        | string
      >;
      code?: string;
    }>;
  };
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

export function ArduinoCircuitGame({ gameData, onComplete, timeLeft, onRestart }: ArduinoCircuitGameProps) {
  const [currentCircuit, setCurrentCircuit] = useState(0);
  const [placedComponents, setPlacedComponents] = useState<Record<string, boolean>>({});
  const [score, setScore] = useState(0);

  const circuit = gameData?.circuits?.[currentCircuit];

  useEffect(() => {
    if (!circuit) {
      console.warn('Circuit data not available:', gameData);
    }
  }, [circuit, gameData]);

  const checkCircuit = () => {
    if (!circuit || !circuit.components) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const allPlaced = circuit.components.every((comp: any) => {
      const componentKey = comp.id || comp.name || comp;
      return placedComponents[componentKey];
    });
    if (allPlaced) {
      const completionBonus = 25;
      const finalScore = score + completionBonus;
      setScore(finalScore);

      setTimeout(() => {
        if (currentCircuit < (gameData?.circuits?.length || 0) - 1) {
          setCurrentCircuit((prev) => prev + 1);
          setPlacedComponents({});
        } else {
          onComplete(true, finalScore);
        }
      }, 2000);
    }
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      onRestart();
    }
  }, [timeLeft, onRestart]);

  if (!circuit) {
    return (
      <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <div className="text-center text-white">
          <p className="mb-4">Không thể tải dữ liệu mạch điện.</p>
          <button onClick={onRestart} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Thử lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{circuit.name}</h3>
        <p className="text-gray-300 mb-4">{circuit.explanation}</p>
        <div className="text-blue-400 font-medium">Điểm: {score}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-white font-medium mb-3">Linh kiện:</h4>
          <div className="space-y-2">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {circuit.components?.map((component: any, index: number) => {
              const componentKey = component.id || component.name || component;
              const componentName = component.name || component;
              return (
                <div
                  key={index}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    placedComponents[componentKey]
                      ? 'bg-green-500/20 border-green-500/50 text-green-300'
                      : 'bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600/50'
                  }`}
                  onClick={() => {
                    if (!placedComponents[componentKey]) {
                      setPlacedComponents((prev) => ({
                        ...prev,
                        [componentKey]: true,
                      }));
                      setScore((prev) => prev + 10);
                      checkCircuit();
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{componentName}</span>
                    {placedComponents[componentKey] && <span className="text-green-400">✓</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Workspace:</h4>
          <div className="bg-gray-800/50 rounded-lg p-4 min-h-48 border-2 border-dashed border-gray-600">
            <p className="text-gray-400 text-center mb-4">Nhấp vào linh kiện để đặt vào workspace</p>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(placedComponents).map(([key, placed]) =>
                placed ? (
                  <div
                    key={key}
                    className="bg-blue-500/20 border border-blue-400 rounded p-2 text-center text-xs text-blue-300"
                  >
                    {key}
                  </div>
                ) : null,
              )}
            </div>
          </div>
        </div>
      </div>

      {circuit.code && (
        <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
          <h4 className="text-white font-medium mb-3">Code Arduino:</h4>
          <pre className="bg-gray-900 p-4 rounded text-green-400 text-sm overflow-x-auto">{circuit.code}</pre>
        </div>
      )}
    </div>
  );
}
