import React, { useState, useEffect } from 'react';

interface PythonCodingGameProps {
  gameData: {
    challenges: Array<{
      title: string;
      description: string;
      difficulty: string;
      estimatedTime: string;
      hint: string;
      solution: string;
      testCases: Array<{
        input: any; // eslint-disable-line @typescript-eslint/no-explicit-any
        output: any; // eslint-disable-line @typescript-eslint/no-explicit-any
        description?: string;
      }>;
      functionName: string;
      parameters: Array<{
        name: string;
        type: string;
        description: string;
      }>;
      returnType: string;
      codeTemplate: string;
      validationRules: {
        forbiddenKeywords?: string[];
        requiredKeywords?: string[];
        maxLines?: number;
        allowBuiltins?: boolean;
      };
      explanation: string;
      tips: string[];
    }>;
  };
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

export function PythonCodingGame({ gameData, onComplete, timeLeft, onRestart }: PythonCodingGameProps) {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [userCode, setUserCode] = useState('');
  const [showSolution, setShowSolution] = useState(false);
  const [score, setScore] = useState(0);

  const challenge = gameData.challenges[currentChallenge];

  const checkSolution = () => {
    // Simple check if user code contains key elements
    const solutionKeywords = challenge.solution.toLowerCase().split(/\s+/);
    const userKeywords = userCode.toLowerCase().split(/\s+/);

    let matches = 0;
    solutionKeywords.forEach((keyword: string) => {
      if (userKeywords.includes(keyword)) matches++;
    });

    const accuracy = matches / solutionKeywords.length;

    if (accuracy > 0.6) {
      setScore((prev) => prev + 30);
      setTimeout(() => {
        if (currentChallenge < gameData.challenges.length - 1) {
          setCurrentChallenge((prev) => prev + 1);
          setUserCode('');
          setShowSolution(false);
        } else {
          onComplete(true, score + 30);
        }
      }, 2000);
    } else {
      setShowSolution(true);
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
        <h3 className="text-xl font-bold text-white mb-2">{challenge.title}</h3>
        <p className="text-gray-300 mb-2">{challenge.description}</p>
        <p className="text-yellow-300 text-sm">💡 {challenge.hint}</p>
      </div>

      <div className="mb-6">
        <h4 className="text-white font-medium mb-2">Viết code Python:</h4>
        <textarea
          value={userCode}
          onChange={(e) => setUserCode(e.target.value)}
          className="w-full h-32 bg-gray-800 text-green-400 p-3 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none font-mono text-sm"
          placeholder="# Viết code của bạn ở đây..."
        />
      </div>

      <div className="mb-6">
        <h4 className="text-white font-medium mb-2">Test cases:</h4>
        {challenge.testCases.map(
          (
            testCase: { input: any; output: any; description?: string }, // eslint-disable-line @typescript-eslint/no-explicit-any
            index: number,
          ) => (
            <div key={index} className="bg-gray-800 p-2 rounded mb-2 text-sm">
              <span className="text-blue-300">Input: {JSON.stringify(testCase.input)}</span>
              <span className="text-green-300 ml-4">Output: {JSON.stringify(testCase.output)}</span>
            </div>
          ),
        )}
      </div>

      {!showSolution && (
        <button
          onClick={checkSolution}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-xl font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
        >
          Kiểm tra
        </button>
      )}

      {showSolution && (
        <div className="mt-4 p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg">
          <p className="text-blue-300 font-medium mb-2">Đáp án:</p>
          <pre className="bg-gray-800 p-3 rounded text-green-400 text-sm overflow-x-auto">{challenge.solution}</pre>
        </div>
      )}
    </div>
  );
}
