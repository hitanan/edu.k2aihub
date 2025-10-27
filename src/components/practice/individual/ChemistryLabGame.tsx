'use client';

import { useState, useEffect } from 'react';

interface ChemistryLabGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

export function ChemistryLabGame({ onComplete, timeLeft, onRestart }: ChemistryLabGameProps) {
  const [currentExperiment, setCurrentExperiment] = useState(0);
  const [selectedCompounds, setSelectedCompounds] = useState<string[]>([]);
  const [temperature, setTemperature] = useState(25);
  const [experimentResult, setExperimentResult] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const experiments = [
    {
      name: 'Acid-Base Reaction',
      description: 'Mix acid and base to create salt and water',
      requiredCompounds: ['HCl', 'NaOH'],
      optimalTemp: 25,
      result: 'NaCl + H2O',
      points: 30,
    },
    {
      name: 'Combustion Reaction',
      description: 'Burn methane in oxygen',
      requiredCompounds: ['CH4', 'O2'],
      optimalTemp: 500,
      result: 'CO2 + H2O + Energy',
      points: 40,
    },
  ];

  const availableCompounds = ['HCl', 'NaOH', 'CH4', 'O2', 'H2O', 'NaCl', 'CO2'];
  const currentExp = experiments[currentExperiment];

  const selectCompound = (compound: string) => {
    if (!selectedCompounds.includes(compound)) {
      setSelectedCompounds((prev) => [...prev, compound]);
    }
  };

  const removeCompound = (compound: string) => {
    setSelectedCompounds((prev) => prev.filter((c) => c !== compound));
  };

  const runExperiment = () => {
    const hasRequiredCompounds = currentExp.requiredCompounds.every((comp) => selectedCompounds.includes(comp));
    const isOptimalTemp = Math.abs(temperature - currentExp.optimalTemp) < 50;

    if (hasRequiredCompounds && isOptimalTemp) {
      setExperimentResult(`Success! Produced: ${currentExp.result}`);
      setScore((prev) => prev + currentExp.points);

      setTimeout(() => {
        if (currentExperiment < experiments.length - 1) {
          setCurrentExperiment((prev) => prev + 1);
          setSelectedCompounds([]);
          setTemperature(25);
          setExperimentResult(null);
        } else {
          onComplete(true, score + currentExp.points);
        }
      }, 2000);
    } else {
      setExperimentResult('Experiment failed! Check compounds and temperature.');
    }
  };

  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">⚗️ {currentExp.name}</h3>
        <p className="text-gray-300 text-sm">{currentExp.description}</p>
        <div className="text-emerald-400 font-medium">Điểm: {score}</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-white font-medium mb-3">Available Compounds:</h4>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {availableCompounds.map((compound) => (
              <button
                key={compound}
                onClick={() => selectCompound(compound)}
                disabled={selectedCompounds.includes(compound)}
                className="p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white hover:bg-gray-700/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {compound}
              </button>
            ))}
          </div>

          <h4 className="text-white font-medium mb-3">Temperature Control:</h4>
          <div className="bg-gray-800/50 rounded-lg p-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">Temperature:</span>
              <span className="text-orange-400">{temperature}°C</span>
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              value={temperature}
              onChange={(e) => setTemperature(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>0°C</span>
              <span>500°C</span>
              <span>1000°C</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Reaction Chamber:</h4>
          <div className="bg-gradient-to-br from-emerald-900/50 to-cyan-900/50 rounded-lg p-4 min-h-32 border-2 border-dashed border-gray-600">
            <div className="text-center mb-4">
              <div className="text-gray-400 text-sm">Selected Compounds:</div>
              {selectedCompounds.length === 0 ? (
                <div className="text-gray-500 italic">No compounds selected</div>
              ) : (
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  {selectedCompounds.map((compound, index) => (
                    <span
                      key={index}
                      onClick={() => removeCompound(compound)}
                      className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-emerald-500/30 transition-colors"
                    >
                      {compound} ×
                    </span>
                  ))}
                </div>
              )}
            </div>

            {experimentResult && (
              <div
                className={`text-center p-3 rounded-lg ${
                  experimentResult.includes('Success') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}
              >
                {experimentResult}
              </div>
            )}
          </div>

          <div className="mt-4">
            <div className="text-white text-sm mb-2">Experiment Requirements:</div>
            <div className="bg-gray-800/50 rounded-lg p-3 text-sm">
              <div className="text-gray-300">Required: {currentExp.requiredCompounds.join(' + ')}</div>
              <div className="text-gray-300">Optimal temp: {currentExp.optimalTemp}°C</div>
              <div className="text-yellow-400">Expected: {currentExp.result}</div>
            </div>
          </div>

          <button
            onClick={runExperiment}
            disabled={selectedCompounds.length === 0}
            className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-3 px-4 rounded-lg font-medium hover:from-emerald-600 hover:to-cyan-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            🧪 Run Experiment
          </button>
        </div>
      </div>
    </div>
  );
}
