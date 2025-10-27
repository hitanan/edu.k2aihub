'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { Lightbulb, Target, Clock, CheckCircle, Star, Zap, RotateCcw, BookOpen } from 'lucide-react';

interface FutureScenarioBuilder3DGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface Scenario {
  id: string;
  title: string;
  description: string;
  category: 'technology' | 'society' | 'environment' | 'economy';
  year: number;
  factors: string[];
  challenges: string[];
  points: number;
}

const scenarios: Scenario[] = [
  {
    id: 'smart-city-2030',
    title: 'Smart City 2030',
    description: 'Thiết kế một thành phố thông minh với IoT và AI',
    category: 'technology',
    year: 2030,
    factors: ['IoT sensors', 'AI traffic control', 'Smart energy', 'Digital citizens'],
    challenges: ['Privacy concerns', 'Digital divide', 'Infrastructure cost', 'Cyber security'],
    points: 25,
  },
  {
    id: 'climate-adaptation-2040',
    title: 'Climate Adaptation 2040',
    description: 'Xây dựng giải pháp thích ứng với biến đổi khí hậu',
    category: 'environment',
    year: 2040,
    factors: ['Rising sea levels', 'Extreme weather', 'Food security', 'Water scarcity'],
    challenges: ['Economic burden', 'Population displacement', 'Resource competition', 'Technology gaps'],
    points: 30,
  },
  {
    id: 'digital-economy-2035',
    title: 'Digital Economy 2035',
    description: 'Mô hình kinh tế số với cryptocurrency và AI',
    category: 'economy',
    year: 2035,
    factors: ['Digital currency', 'AI automation', 'Remote work', 'Global connectivity'],
    challenges: ['Job displacement', 'Wealth inequality', 'Regulation gaps', 'Skills mismatch'],
    points: 35,
  },
];

const solutionTypes = [
  {
    id: 'technology',
    name: 'Technology Innovation',
    description: 'Giải pháp công nghệ tiên tiến',
    icon: '💻',
    multiplier: 1.2,
  },
  {
    id: 'policy',
    name: 'Policy Framework',
    description: 'Khung chính sách và quy định',
    icon: '📋',
    multiplier: 1.1,
  },
  {
    id: 'social',
    name: 'Social Innovation',
    description: 'Đổi mới xã hội và văn hóa',
    icon: '👥',
    multiplier: 1.0,
  },
  {
    id: 'economic',
    name: 'Economic Model',
    description: 'Mô hình kinh tế bền vững',
    icon: '💰',
    multiplier: 1.15,
  },
];

export default function FutureScenarioBuilder3DGame({
  onComplete,
  timeLeft,
  onRestart,
}: FutureScenarioBuilder3DGameProps) {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>([]);
  const [customSolution, setCustomSolution] = useState('');
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [innovation, setInnovation] = useState(50);
  const [feasibility, setFeasibility] = useState(50);
  const [gameComplete, setGameComplete] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const currentScenarioData = scenarios[currentScenario];

  const handleSolutionToggle = useCallback(
    (solutionId: string) => {
      if (analysisComplete) return;
      setSelectedSolutions((prev) =>
        prev.includes(solutionId) ? prev.filter((s) => s !== solutionId) : [...prev, solutionId],
      );
    },
    [analysisComplete],
  );

  const handleAnalyze = useCallback(() => {
    if (selectedSolutions.length === 0) return;

    setAnalysisComplete(true);

    // Calculate scores based on selections
    const baseScore = currentScenarioData.points;
    const solutionBonus = selectedSolutions.length * 5;
    const customBonus = customSolution.trim() ? 20 : 0;
    const diversityBonus = selectedSolutions.length >= 3 ? 15 : 0;

    const scenarioScore = baseScore + solutionBonus + customBonus + diversityBonus;
    setTotalScore((prev) => prev + scenarioScore);

    // Update innovation and feasibility
    const innovationBoost = customSolution.trim() ? 15 : 10;
    const feasibilityBoost = selectedSolutions.length >= 2 ? 12 : 8;

    setInnovation((prev) => Math.min(100, prev + innovationBoost));
    setFeasibility((prev) => Math.min(100, prev + feasibilityBoost));

    setTimeout(() => setShowResults(true), 1000);
  }, [selectedSolutions, customSolution, currentScenarioData]);

  const handleNextScenario = useCallback(() => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario((prev) => prev + 1);
      setSelectedSolutions([]);
      setCustomSolution('');
      setAnalysisComplete(false);
      setShowResults(false);
    } else {
      setGameComplete(true);
      const finalScore = Math.max(0, Math.min(100, (totalScore / 150) * 100));
      onComplete(totalScore > 0, finalScore);
    }
  }, [currentScenario, totalScore, onComplete]);

  useEffect(() => {
    if (timeLeft <= 0 && !gameComplete) {
      const finalScore = Math.max(0, (totalScore / 150) * 100);
      onComplete(totalScore > 0, finalScore);
    }
  }, [timeLeft, gameComplete, totalScore, onComplete]);

  if (!isReady) {
    return (
      <div className="flex justify-center items-center h-full bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white rounded-xl">
        <p className="text-xl animate-pulse">Đang khởi tạo kịch bản tương lai...</p>
      </div>
    );
  }

  if (gameComplete) {
    const finalScore = Math.max(0, Math.min(100, (totalScore / 150) * 100));

    return (
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white rounded-xl">
        <div className="text-center mb-8">
          <Lightbulb className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
          <h2 className="text-3xl font-bold mb-2">Future Scenario Analysis Complete</h2>
          <div className="text-6xl font-bold text-yellow-400 mb-4">{Math.round(finalScore)}%</div>
          <p className="text-xl mb-6">
            Total Score: {totalScore} | Innovation: {innovation}/100 | Feasibility: {feasibility}/100
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-400" />
              Future Vision Achievements
            </h3>
            <ul className="space-y-2 text-sm">
              {finalScore >= 80 && <li>• Visionary Futurist - Exceptional scenario planning</li>}
              {innovation >= 80 && <li>• Innovation Leader - Creative solution thinking</li>}
              {feasibility >= 80 && <li>• Practical Planner - Realistic implementation focus</li>}
              {totalScore >= 100 && <li>• Systems Thinker - Comprehensive approach</li>}
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Target className="w-5 h-5 mr-2 text-blue-400" />
              Future Skills Development
            </h3>
            <ul className="space-y-2 text-sm">
              {finalScore < 80 && <li>• Study trend analysis and forecasting</li>}
              {innovation < 60 && <li>• Explore emerging technologies</li>}
              {feasibility < 60 && <li>• Learn project management principles</li>}
              <li>• Research scenario planning methodologies</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={onRestart}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            <RotateCcw className="w-4 h-4 inline mr-2" />
            Build New Scenarios
          </button>
          <button
            onClick={() => onComplete(true, finalScore)}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
          >
            <CheckCircle className="w-4 h-4 inline mr-2" />
            Complete Analysis
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white rounded-xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Lightbulb className="w-8 h-8 mr-3 text-yellow-400" />
          <div>
            <h2 className="text-2xl font-bold">Future Scenario Builder 3D</h2>
            <p className="text-blue-300">
              Scenario {currentScenario + 1}/{scenarios.length}
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-yellow-400">{totalScore} pts</div>
          <div className="text-sm text-gray-300 flex items-center">
            <Lightbulb className="w-4 h-4 mr-1" />
            Innovation: {innovation}/100
          </div>
          <div className="text-sm text-gray-300 flex items-center">
            <Target className="w-4 h-4 mr-1" />
            Feasibility: {feasibility}/100
          </div>
          <div className="text-sm text-gray-300">
            ⏱️ {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white/20 rounded-full h-2 mb-6">
        <div
          className="bg-gradient-to-r from-yellow-500 to-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentScenario + (showResults ? 1 : 0)) / scenarios.length) * 100}%` }}
        />
      </div>

      {/* Scenario Description */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          <div className="text-4xl mr-4">
            {currentScenarioData.category === 'technology' && '🚀'}
            {currentScenarioData.category === 'society' && '👥'}
            {currentScenarioData.category === 'environment' && '🌍'}
            {currentScenarioData.category === 'economy' && '💰'}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-yellow-300">
              {currentScenarioData.title} ({currentScenarioData.year})
            </h3>
            <p className="text-gray-200">{currentScenarioData.description}</p>
          </div>
        </div>

        {/* Key Factors */}
        <div className="mb-4">
          <h4 className="font-semibold text-green-300 mb-2">Key Factors:</h4>
          <div className="grid grid-cols-2 gap-2">
            {currentScenarioData.factors.map((factor) => (
              <div key={factor} className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                <span className="text-sm">{factor}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-4">
          <h4 className="font-semibold text-red-300 mb-2">Major Challenges:</h4>
          <div className="grid grid-cols-2 gap-2">
            {currentScenarioData.challenges.map((challenge) => (
              <div key={challenge} className="flex items-center">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-2" />
                <span className="text-sm">{challenge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solution Selection */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-purple-300">Select Solution Approaches:</h4>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {solutionTypes.map((solution) => (
            <button
              key={solution.id}
              onClick={() => handleSolutionToggle(solution.id)}
              disabled={analysisComplete}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                selectedSolutions.includes(solution.id)
                  ? 'border-purple-500 bg-purple-900/30'
                  : 'border-gray-600 bg-white/5 hover:bg-white/10'
              } ${analysisComplete ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className="flex items-start">
                <span className="text-2xl mr-3">{solution.icon}</span>
                <div>
                  <h5 className="font-semibold">{solution.name}</h5>
                  <p className="text-sm text-gray-300 mb-1">{solution.description}</p>
                  <span className="text-xs text-yellow-300">Multiplier: ×{solution.multiplier}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Custom Solution */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-blue-300">Custom Innovation (+20 points):</h4>
        <textarea
          value={customSolution}
          onChange={(e) => setCustomSolution(e.target.value)}
          placeholder="Describe your innovative solution or unique approach to this future scenario..."
          disabled={analysisComplete}
          className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 resize-none"
          rows={4}
        />
      </div>

      {/* Results Display */}
      {showResults && (
        <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-lg p-6 mb-6 border border-green-500">
          <h4 className="font-semibold text-green-300 mb-3 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" />
            Scenario Analysis Results:
          </h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">
                {currentScenarioData.points + selectedSolutions.length * 5 + (customSolution.trim() ? 20 : 0)}
              </div>
              <div className="text-sm text-gray-300">Points Earned</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{selectedSolutions.length}</div>
              <div className="text-sm text-gray-300">Solution Types</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{customSolution.trim() ? 'Yes' : 'No'}</div>
              <div className="text-sm text-gray-300">Custom Innovation</div>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        {!analysisComplete ? (
          <button
            onClick={handleAnalyze}
            disabled={selectedSolutions.length === 0}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              selectedSolutions.length > 0
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            <Zap className="w-4 h-4 inline mr-2" />
            Analyze Scenario
          </button>
        ) : (
          showResults && (
            <button
              onClick={handleNextScenario}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              {currentScenario < scenarios.length - 1 ? (
                <>
                  <Clock className="w-4 h-4 inline mr-2" />
                  Next Future Scenario
                </>
              ) : (
                <>
                  <BookOpen className="w-4 h-4 inline mr-2" />
                  Complete Analysis
                </>
              )}
            </button>
          )
        )}
      </div>
    </div>
  );
}
