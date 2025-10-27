import React, { useState, useEffect } from 'react';
import { climatePolicyOptions } from '@/data/practice/climateData';

interface ClimateModelingGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

export default function ClimateModelingGame({ onComplete, timeLeft, onRestart }: ClimateModelingGameProps) {
  const [currentYear, setCurrentYear] = useState(2020);
  const [co2Level, setCo2Level] = useState(415);
  const [temperature, setTemperature] = useState(1.1);
  const [policies, setPolicies] = useState<string[]>([]);
  const [score, setScore] = useState(0);

  const policyOptions = climatePolicyOptions;

  const advanceYear = () => {
    let newCo2 = co2Level + 2; // Base increase
    let newTemp = temperature + 0.02; // Base increase

    policies.forEach((policyId) => {
      const policy = policyOptions.find((p) => p.id === policyId);
      if (policy) {
        newCo2 += policy.impact.co2;
        newTemp += policy.impact.temp;
      }
    });

    setCo2Level(Math.max(350, newCo2));
    setTemperature(Math.max(0.5, newTemp));
    setCurrentYear((prev) => prev + 1);

    // Calculate score based on climate improvement
    const climateScore = Math.max(0, 500 - (newCo2 - 350) - (newTemp - 0.5) * 100);
    setScore(climateScore);

    if (currentYear >= 2030) {
      const finalScore = climateScore + (newTemp < 1.5 ? 100 : 0); // Paris Agreement bonus
      onComplete(true, finalScore);
    }
  };

  const togglePolicy = (policyId: string) => {
    setPolicies((prev) => (prev.includes(policyId) ? prev.filter((p) => p !== policyId) : [...prev, policyId]));
  };

  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">🌍 Mô hình khí hậu - Năm {currentYear}</h3>
        <div className="text-green-400 font-medium">Điểm: {score}</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-white font-medium mb-3">Chỉ số khí hậu:</h4>
          <div className="space-y-4">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">CO₂ (ppm):</span>
                <span
                  className={`font-bold ${co2Level > 450 ? 'text-red-400' : co2Level > 400 ? 'text-yellow-400' : 'text-green-400'}`}
                >
                  {co2Level.toFixed(1)}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${co2Level > 450 ? 'bg-red-500' : co2Level > 400 ? 'bg-yellow-500' : 'bg-green-500'}`}
                  style={{ width: `${Math.min(100, (co2Level - 300) / 2)}%` }}
                />
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Nhiệt độ (°C):</span>
                <span
                  className={`font-bold ${temperature > 2 ? 'text-red-400' : temperature > 1.5 ? 'text-yellow-400' : 'text-green-400'}`}
                >
                  +{temperature.toFixed(2)}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${temperature > 2 ? 'bg-red-500' : temperature > 1.5 ? 'bg-yellow-500' : 'bg-green-500'}`}
                  style={{ width: `${Math.min(100, temperature * 25)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Chính sách khí hậu:</h4>
          <div className="space-y-2">
            {policyOptions.map((policy) => (
              <div
                key={policy.id}
                className={`p-3 rounded-lg border cursor-pointer transition-all ${
                  policies.includes(policy.id)
                    ? 'bg-green-500/20 border-green-500/50'
                    : 'bg-gray-800/50 border-gray-600 hover:bg-gray-700/50'
                }`}
                onClick={() => togglePolicy(policy.id)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-medium">{policy.name}</div>
                    <div className="text-gray-400 text-sm">
                      CO₂: {policy.impact.co2} ppm | Temp: {policy.impact.temp}
                      °C
                    </div>
                    <div className="text-yellow-400 text-sm">Chi phí: ${policy.cost}B</div>
                  </div>
                  {policies.includes(policy.id) && <span className="text-green-400">✓</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={advanceYear}
        className="w-full mt-6 bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 px-6 rounded-lg font-medium hover:from-green-600 hover:to-teal-600 transition-all duration-200"
      >
        Tiến tới năm {currentYear + 1} →
      </button>
    </div>
  );
}
