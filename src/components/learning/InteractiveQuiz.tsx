'use client';

import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { QuizQuestion } from '@/types/lesson-base';

interface InteractiveQuizProps {
  quiz: QuizQuestion;
  primaryColor: string;
}

export function InteractiveQuiz({ quiz, primaryColor }: InteractiveQuizProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionSelect = (index: number) => {
    if (!isAnswered) {
      setSelectedOption(index);
      setIsAnswered(true);
    }
  };

  return (
    <div className="bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10">
      <p className="font-semibold text-white mb-4 text-base sm:text-lg">{quiz.question}</p>
      <div className="space-y-3">
        {quiz.options.map((option: string, index: number) => {
          const isCorrect = index === quiz.correctAnswerIndex;
          const isSelected = selectedOption === index;
          let buttonClass = `w-full text-left p-3 rounded-lg border transition-all duration-300 flex items-center justify-between min-h-[44px] text-sm sm:text-base `;

          if (isAnswered) {
            if (isCorrect) {
              buttonClass += `bg-green-500/20 border-green-500/50 text-white`;
            } else if (isSelected) {
              buttonClass += `bg-red-500/20 border-red-500/50 text-white`;
            } else {
              buttonClass += `bg-white/5 border-white/10 text-gray-400`;
            }
          } else {
            buttonClass += `bg-white/10 border-white/20 hover:bg-${primaryColor}-500/20 hover:border-${primaryColor}-500/50 text-gray-300 hover:text-white`;
          }

          return (
            <button key={index} onClick={() => handleOptionSelect(index)} disabled={isAnswered} className={buttonClass}>
              <span>{option}</span>
              {isAnswered &&
                isSelected &&
                (isCorrect ? <Check className="w-5 h-5 text-green-400" /> : <X className="w-5 h-5 text-red-400" />)}
            </button>
          );
        })}
      </div>
      {isAnswered && (
        <div
          className={`mt-4 p-3 rounded-lg bg-${primaryColor}-500/10 border border-${primaryColor}-500/20 text-gray-300 text-sm sm:text-base`}
        >
          <strong>Giải thích:</strong> {quiz.explanation}
        </div>
      )}
    </div>
  );
}
