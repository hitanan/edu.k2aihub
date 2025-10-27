import React, { useState, useEffect } from 'react';

interface QuantumConcept {
  name: string;
  description: string;
  states: string[];
  quiz: {
    question: string;
    options: string[];
    correct: number;
    explanation: string;
  };
}

interface QuantumBasicsGameProps {
  gameData: {
    concepts: QuantumConcept[];
  };
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

export default function QuantumBasicsGame({ gameData, onComplete, timeLeft, onRestart }: QuantumBasicsGameProps) {
  const [currentConcept, setCurrentConcept] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const concept = gameData.concepts[currentConcept];

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    const isCorrect = answerIndex === concept.quiz.correct;
    const points = isCorrect ? 35 : 0;
    setScore((prev) => prev + points);

    setTimeout(() => {
      if (currentConcept < gameData.concepts.length - 1) {
        setCurrentConcept((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        onComplete(true, score + points);
      }
    }, 2000);
  };

  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">Lượng tử cơ bản</h3>
        <div className="text-purple-400 font-medium">Điểm: {score}</div>
      </div>

      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-6 mb-6">
        <h4 className="text-white font-bold text-lg mb-2">{concept.name}</h4>
        <p className="text-gray-300 mb-4">{concept.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {concept.states.map((state: string, index: number) => (
            <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
              {state}
            </span>
          ))}
        </div>

        <div className="bg-white/5 rounded-lg p-4">
          <h5 className="text-white font-medium mb-3">{concept.quiz.question}</h5>
          <div className="space-y-2">
            {concept.quiz.options.map((option: string, index: number) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                className={`w-full p-3 rounded-lg text-left transition-all duration-200 ${
                  selectedAnswer === index
                    ? index === concept.quiz.correct
                      ? 'bg-green-500/20 border-green-500/50 text-green-300'
                      : 'bg-red-500/20 border-red-500/50 text-red-300'
                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {selectedAnswer !== null && (
            <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-gray-300">{concept.quiz.explanation}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
