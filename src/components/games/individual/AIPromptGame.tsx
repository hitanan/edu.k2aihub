import React, { useState, useEffect } from 'react';
import { Lightbulb } from 'lucide-react';

interface AIPromptGameProps {
  gameData: {
    scenarios: Array<{
      situation: string;
      hints: string[];
      targetPrompt: string;
      examples: string[];
      correct: number;
    }>;
  };
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

export function AIPromptGame({ 
  gameData, 
  onComplete, 
  timeLeft, 
  onRestart 
}: AIPromptGameProps) {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedPrompt, setSelectedPrompt] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showHints, setShowHints] = useState(false);

  const scenario = gameData.scenarios[currentScenario];

  const handlePromptSelect = (promptIndex: number) => {
    setSelectedPrompt(promptIndex);

    if (promptIndex === scenario.correct) {
      setScore((prev) => prev + 25);
    }

    setTimeout(() => {
      if (currentScenario < gameData.scenarios.length - 1) {
        setCurrentScenario((prev) => prev + 1);
        setSelectedPrompt(null);
        setShowHints(false);
      } else {
        onComplete(true, score + (promptIndex === scenario.correct ? 25 : 0));
      }
    }, 2000);
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      onRestart();
    }
  }, [timeLeft, onRestart]);

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">Tình huống:</h3>
        <p className="text-gray-300 text-lg">{scenario.situation}</p>
      </div>

      {!showHints && (
        <button
          onClick={() => setShowHints(true)}
          className="mb-4 text-yellow-400 hover:text-yellow-300 transition-colors flex items-center"
        >
          <Lightbulb className="w-4 h-4 mr-1" />
          Xem gợi ý
        </button>
      )}

      {showHints && (
        <div className="mb-6 p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
          <p className="text-yellow-300 font-medium mb-2">Gợi ý:</p>
          <ul className="text-gray-300 text-sm space-y-1">
            {scenario.hints.map((hint: string, index: number) => (
              <li key={index}>• {hint}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-6">
        <h4 className="text-white font-medium mb-3">Chọn prompt tốt nhất:</h4>
        <div className="space-y-3">
          {scenario.examples.map((example: string, index: number) => (
            <button
              key={index}
              onClick={() => handlePromptSelect(index)}
              disabled={selectedPrompt !== null}
              className={`w-full p-4 text-left rounded-lg border transition-all duration-200 ${
                selectedPrompt === index
                  ? index === scenario.correct
                    ? 'bg-green-500/20 border-green-500/50 text-green-300'
                    : 'bg-red-500/20 border-red-500/50 text-red-300'
                  : selectedPrompt !== null && index === scenario.correct
                    ? 'bg-green-500/20 border-green-500/50 text-green-300'
                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/30'
              }`}
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
