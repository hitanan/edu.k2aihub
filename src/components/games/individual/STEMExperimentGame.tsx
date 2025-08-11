import React, { useState, useEffect } from 'react';
import { STEMExperimentLabGameData } from '@/data/games/gameData';

interface STEMExperimentGameProps {
  gameData: STEMExperimentLabGameData;
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

export default function STEMExperimentGame({
  gameData,
  onComplete,
  timeLeft,
  onRestart,
}: STEMExperimentGameProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [experimentComplete, setExperimentComplete] = useState(false);
  const [score, setScore] = useState(0);

  const experiment = gameData.experiments[0];

  const nextStep = () => {
    if (currentStep < experiment.procedure.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setExperimentComplete(true);
    }
  };

  const answerQuiz = (answerIndex: number) => {
    if (answerIndex === experiment.quiz.correct) {
      setScore((prev) => prev + 40);
      onComplete(true, score + 40);
    } else {
      setTimeout(() => onRestart(), 1000);
    }
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      onRestart();
    }
  }, [timeLeft, onRestart]);

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{experiment.name}</h3>

        <div className="mb-4">
          <h4 className="text-white font-medium mb-2">Vật liệu cần thiết:</h4>
          <div className="flex flex-wrap gap-2">
            {experiment.materials.map((material: string, index: number) => (
              <span
                key={index}
                className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
              >
                {material}
              </span>
            ))}
          </div>
        </div>
      </div>

      {!experimentComplete ? (
        <div>
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>
                Bước {currentStep + 1}/{experiment.procedure.length}
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentStep + 1) / experiment.procedure.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-white font-medium mb-2">
              Bước {currentStep + 1}:
            </h4>
            <p className="text-gray-300 text-lg">
              {experiment.procedure[currentStep]}
            </p>
          </div>

          <button
            onClick={nextStep}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
          >
            {currentStep < experiment.procedure.length - 1
              ? 'Bước tiếp theo'
              : 'Hoàn thành thí nghiệm'}
          </button>
        </div>
      ) : (
        <div>
          <div className="mb-6">
            <h4 className="text-white font-medium mb-2">Quan sát:</h4>
            <p className="text-gray-300 mb-4">{experiment.observation}</p>

            <h4 className="text-white font-medium mb-2">Giải thích:</h4>
            <p className="text-gray-300 mb-6">{experiment.explanation}</p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3">
              {experiment.quiz.question}
            </h4>
            <div className="space-y-3">
              {experiment.quiz.options.map((option: string, index: number) => (
                <button
                  key={index}
                  onClick={() => answerQuiz(index)}
                  className="w-full p-4 text-left rounded-lg border bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/30 transition-all duration-200"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
