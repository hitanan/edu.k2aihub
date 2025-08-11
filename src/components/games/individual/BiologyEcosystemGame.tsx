'use client';

import { useState, useEffect } from 'react';

interface BiologyEcosystemGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

export function BiologyEcosystemGame({ 
  onComplete, 
  timeLeft, 
  onRestart
}: BiologyEcosystemGameProps) {
  const [ecosystem, setEcosystem] = useState({
    plants: 50,
    herbivores: 30,
    carnivores: 10,
    decomposers: 20,
  });
  const [events, setEvents] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [year, setYear] = useState(1);

  const addOrganism = (type: keyof typeof ecosystem) => {
    setEcosystem((prev) => ({
      ...prev,
      [type]: prev[type] + 5,
    }));
  };

  const simulateYear = () => {
    const newEcosystem = { ...ecosystem };
    const eventLog: string[] = [];

    // Natural growth and interactions
    if (newEcosystem.plants > 30) {
      newEcosystem.herbivores = Math.min(60, newEcosystem.herbivores + 2);
      eventLog.push('🌿 Abundant plants support herbivore growth');
    }

    if (newEcosystem.herbivores > 40) {
      newEcosystem.carnivores = Math.min(30, newEcosystem.carnivores + 1);
      eventLog.push('🐰 Herbivore abundance attracts carnivores');
    }

    if (newEcosystem.carnivores > 20) {
      newEcosystem.herbivores = Math.max(10, newEcosystem.herbivores - 3);
      eventLog.push('🦅 Carnivores reduce herbivore population');
    }

    // Random events
    const randomEvent = Math.random();
    if (randomEvent < 0.3) {
      newEcosystem.plants = Math.max(20, newEcosystem.plants - 10);
      eventLog.push('🌪️ Natural disaster affects plant population');
    } else if (randomEvent < 0.6) {
      newEcosystem.decomposers = Math.min(40, newEcosystem.decomposers + 5);
      eventLog.push('🍄 Favorable conditions boost decomposer growth');
    }

    // Calculate balance score
    const total = Object.values(newEcosystem).reduce((a, b) => a + b, 0);
    const balance =
      1 -
      Math.abs(0.5 - newEcosystem.plants / total) -
      Math.abs(0.3 - newEcosystem.herbivores / total) -
      Math.abs(0.1 - newEcosystem.carnivores / total) -
      Math.abs(0.1 - newEcosystem.decomposers / total);

    setScore((prev) => prev + Math.floor(balance * 50));
    setEcosystem(newEcosystem);
    setEvents(eventLog);
    setYear((prev) => prev + 1);

    if (year >= 10) {
      onComplete(true, score + Math.floor(balance * 50));
    }
  };

  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);

  const total = Object.values(ecosystem).reduce((a, b) => a + b, 0);

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">
          🌿 Ecosystem Simulation - Year {year}
        </h3>
        <div className="text-lime-400 font-medium">Balance Score: {score}</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-white font-medium mb-3">Population Control:</h4>
          <div className="space-y-3">
            {Object.entries(ecosystem).map(([type, count]) => (
              <div key={type} className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white capitalize">{type}:</span>
                  <span className="text-green-400 font-bold">{count}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-full bg-gray-700 rounded-full h-2 mr-3">
                    <div
                      className="bg-gradient-to-r from-green-400 to-lime-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(count / total) * 100}%` }}
                    />
                  </div>
                  <button
                    onClick={() => addOrganism(type as keyof typeof ecosystem)}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
                  >
                    +5
                  </button>
                </div>
                <div className="text-gray-400 text-xs mt-1">
                  {((count / total) * 100).toFixed(1)}% of ecosystem
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Ecosystem Status:</h4>
          <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🌍</div>
              <div className="text-white">Total Population: {total}</div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">🌿 Plants:</span>
                <span className="text-green-400">
                  {ecosystem.plants} (
                  {((ecosystem.plants / total) * 100).toFixed(1)}%)
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">🐰 Herbivores:</span>
                <span className="text-yellow-400">
                  {ecosystem.herbivores} (
                  {((ecosystem.herbivores / total) * 100).toFixed(1)}%)
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">🦅 Carnivores:</span>
                <span className="text-red-400">
                  {ecosystem.carnivores} (
                  {((ecosystem.carnivores / total) * 100).toFixed(1)}%)
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">🍄 Decomposers:</span>
                <span className="text-orange-400">
                  {ecosystem.decomposers} (
                  {((ecosystem.decomposers / total) * 100).toFixed(1)}%)
                </span>
              </div>
            </div>
          </div>

          {events.length > 0 && (
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-4">
              <h5 className="text-blue-400 font-medium mb-2">Recent Events:</h5>
              <div className="space-y-1">
                {events.map((event, index) => (
                  <div key={index} className="text-gray-300 text-sm">
                    {event}
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={simulateYear}
            disabled={year >= 10}
            className="w-full bg-gradient-to-r from-lime-500 to-green-500 text-white py-3 px-4 rounded-lg font-medium hover:from-lime-600 hover:to-green-600 transition-all duration-200 disabled:opacity-50"
          >
            {year < 10
              ? `⏭️ Advance to Year ${year + 1}`
              : '🎯 Simulation Complete'}
          </button>
        </div>
      </div>
    </div>
  );
}
