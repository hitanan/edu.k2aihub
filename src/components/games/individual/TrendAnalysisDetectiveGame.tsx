'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { TrendingUp, BarChart, Target, CheckCircle, Star, Eye, Users, Calendar } from 'lucide-react';

interface TrendAnalysisDetectiveGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface TrendCase {
  id: string;
  title: string;
  description: string;
  category: 'technology' | 'social' | 'economic' | 'cultural';
  timeframe: string;
  dataPoints: Array<{
    date: string;
    value: number;
    context: string;
  }>;
  clues: string[];
  patterns: Array<{
    type: 'growth' | 'decline' | 'seasonal' | 'spike' | 'plateau';
    description: string;
    confidence: number;
  }>;
  correctAnalysis: string[];
  points: number;
}

const trendCases: TrendCase[] = [
  {
    id: 'remote-work-2020',
    title: 'The Great Remote Work Shift',
    description: 'Analyze the dramatic change in remote work adoption during 2020-2022',
    category: 'social',
    timeframe: '2020-2022',
    dataPoints: [
      { date: '2020-01', value: 15, context: 'Pre-pandemic baseline' },
      { date: '2020-03', value: 45, context: 'Initial pandemic response' },
      { date: '2020-06', value: 65, context: 'Peak lockdown period' },
      { date: '2021-03', value: 55, context: 'Vaccine rollout begins' },
      { date: '2022-01', value: 40, context: 'Return to office initiatives' },
      { date: '2022-12', value: 35, context: 'New equilibrium' }
    ],
    clues: [
      'Global health crisis event',
      'Technology adoption acceleration',
      'Corporate policy changes',
      'Employee preference shifts',
      'Productivity metrics stable'
    ],
    patterns: [
      { type: 'spike', description: 'Sudden 200% increase in Q1 2020', confidence: 95 },
      { type: 'plateau', description: 'Stabilization around 60-65% for 12 months', confidence: 90 },
      { type: 'decline', description: 'Gradual decrease as restrictions lifted', confidence: 80 }
    ],
    correctAnalysis: [
      'External crisis driving adoption',
      'Technology readiness enabled shift',
      'Long-term behavior change established'
    ],
    points: 30
  },
  {
    id: 'ecommerce-growth',
    title: 'E-commerce Explosion',
    description: 'Investigate the accelerated growth of online shopping in Vietnam',
    category: 'economic',
    timeframe: '2019-2023',
    dataPoints: [
      { date: '2019-12', value: 8, context: 'Traditional retail dominance' },
      { date: '2020-03', value: 12, context: 'Pandemic begins' },
      { date: '2020-08', value: 25, context: 'Lockdown shopping surge' },
      { date: '2021-06', value: 35, context: 'Digital payment adoption' },
      { date: '2022-01', value: 45, context: 'Platform competition intensifies' },
      { date: '2023-01', value: 55, context: 'Mobile commerce maturity' }
    ],
    clues: [
      'Mobile phone penetration at 95%',
      'Digital payment infrastructure growth',
      'Social commerce integration',
      'Logistics network expansion',
      'Generation Z consumer behavior'
    ],
    patterns: [
      { type: 'growth', description: 'Consistent upward trend over 4 years', confidence: 98 },
      { type: 'spike', description: 'Acceleration during 2020-2021', confidence: 92 },
      { type: 'growth', description: 'Sustained momentum through 2023', confidence: 88 }
    ],
    correctAnalysis: [
      'Infrastructure readiness critical',
      'Consumer behavior permanently shifted',
      'Multi-platform strategy essential'
    ],
    points: 40
  },
  {
    id: 'ai-tool-adoption',
    title: 'AI Tools Go Mainstream',
    description: 'Track the viral adoption of AI tools like ChatGPT in professional settings',
    category: 'technology',
    timeframe: '2022-2024',
    dataPoints: [
      { date: '2022-10', value: 2, context: 'Beta testing phase' },
      { date: '2022-12', value: 15, context: 'Public launch buzz' },
      { date: '2023-02', value: 60, context: 'Viral social media spread' },
      { date: '2023-06', value: 75, context: 'Enterprise adoption begins' },
      { date: '2023-12', value: 85, context: 'Integration into workflows' },
      { date: '2024-03', value: 90, context: 'New normal established' }
    ],
    clues: [
      'Social media amplification',
      'Early adopter evangelism',
      'Media coverage explosion',
      'Enterprise pilot programs',
      'Competitive AI tool launches'
    ],
    patterns: [
      { type: 'spike', description: 'Exponential growth in Q1 2023', confidence: 95 },
      { type: 'plateau', description: 'Market saturation approaching', confidence: 85 },
      { type: 'growth', description: 'Still expanding into new use cases', confidence: 78 }
    ],
    correctAnalysis: [
      'Network effects drove viral adoption',
      'Utility value exceeded hype',
      'Market consolidation beginning'
    ],
    points: 50
  }
];

const analysisOptions = [
  'External crisis driving adoption',
  'Technology readiness enabled shift',
  'Long-term behavior change established',
  'Infrastructure readiness critical',
  'Consumer behavior permanently shifted',
  'Multi-platform strategy essential',
  'Network effects drove viral adoption',
  'Utility value exceeded hype',
  'Market consolidation beginning',
  'Seasonal variation pattern',
  'Demographic shift influence',
  'Economic pressure factor',
  'Regulatory change impact',
  'Cultural acceptance milestone',
  'Competition intensity increase'
];

export default function TrendAnalysisDetectiveGame({
  onComplete,
  timeLeft,
  onRestart
}: TrendAnalysisDetectiveGameProps) {
  const [currentCase, setCurrentCase] = useState(0);
  const [selectedAnalysis, setSelectedAnalysis] = useState<string[]>([]);
  const [investigationComplete, setInvestigationComplete] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [detectiveLevel, setDetectiveLevel] = useState(1);
  const [accuracy, setAccuracy] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const currentCaseData = trendCases[currentCase];

  const handleAnalysisToggle = useCallback((analysis: string) => {
    if (investigationComplete) return;
    setSelectedAnalysis(prev => 
      prev.includes(analysis) 
        ? prev.filter(a => a !== analysis)
        : [...prev, analysis]
    );
  }, [investigationComplete]);

  const handleSubmitAnalysis = useCallback(() => {
    if (selectedAnalysis.length === 0) return;
    
    setInvestigationComplete(true);
    
    // Calculate accuracy based on correct matches
    const correctMatches = selectedAnalysis.filter(analysis => 
      currentCaseData.correctAnalysis.includes(analysis)
    ).length;
    
    const incorrectSelections = selectedAnalysis.filter(analysis => 
      !currentCaseData.correctAnalysis.includes(analysis)
    ).length;
    
    const missedCorrect = currentCaseData.correctAnalysis.filter(analysis => 
      !selectedAnalysis.includes(analysis)
    ).length;
    
    // Scoring formula: correct matches boost, wrong selections penalize
    const accuracyScore = Math.max(0, 
      (correctMatches * 100 / currentCaseData.correctAnalysis.length) - 
      (incorrectSelections * 20) - 
      (missedCorrect * 15)
    );
    
    const caseScore = Math.round((currentCaseData.points * accuracyScore) / 100);
    setTotalScore(prev => prev + caseScore);
    setAccuracy(accuracyScore);
    
    // Level up detective skills
    if (accuracyScore >= 80) {
      setDetectiveLevel(prev => Math.min(10, prev + 1));
    }
    
    setTimeout(() => setShowResults(true), 2000);
  }, [selectedAnalysis, currentCaseData]);

  const handleNextCase = useCallback(() => {
    if (currentCase < trendCases.length - 1) {
      setCurrentCase(prev => prev + 1);
      setSelectedAnalysis([]);
      setInvestigationComplete(false);
      setShowResults(false);
      setAccuracy(0);
    } else {
      setGameComplete(true);
      const finalScore = Math.max(0, Math.min(100, (totalScore / 120) * 100));
      onComplete(totalScore > 0, finalScore);
    }
  }, [currentCase, totalScore, onComplete]);

  useEffect(() => {
    if (timeLeft <= 0 && !gameComplete) {
      const finalScore = Math.max(0, (totalScore / 120) * 100);
      onComplete(totalScore > 0, finalScore);
    }
  }, [timeLeft, gameComplete, totalScore, onComplete]);

  if (gameComplete) {
    const finalScore = Math.max(0, Math.min(100, (totalScore / 120) * 100));

    return (
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white rounded-xl">
        <div className="text-center mb-8">
          <Eye className="w-16 h-16 mx-auto mb-4 text-indigo-400" />
          <h2 className="text-3xl font-bold mb-2">Case Files Closed</h2>
          <div className="text-6xl font-bold text-indigo-400 mb-4">
            {Math.round(finalScore)}%
          </div>
          <p className="text-xl mb-6">
            Total Score: {totalScore} | Detective Level: {detectiveLevel}/10
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Star className="w-5 h-5 mr-2 text-indigo-400" />
              Detective Achievements
            </h3>
            <ul className="space-y-2 text-sm">
              {finalScore >= 80 && <li>• Master Detective - Exceptional pattern recognition</li>}
              {detectiveLevel >= 8 && <li>• Trend Expert - Advanced analytical skills</li>}
              {finalScore >= 60 && <li>• Data Analyst - Solid investigation abilities</li>}
              {totalScore >= 80 && <li>• Insight Hunter - Great evidence synthesis</li>}
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Target className="w-5 h-5 mr-2 text-purple-400" />
              Skills Development
            </h3>
            <ul className="space-y-2 text-sm">
              {finalScore < 80 && <li>• Study data visualization techniques</li>}
              {detectiveLevel < 7 && <li>• Practice pattern recognition</li>}
              <li>• Learn statistical analysis methods</li>
              <li>• Explore trend forecasting tools</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={onRestart}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
          >
            <Eye className="w-4 h-4 inline mr-2" />
            New Investigation
          </button>
          <button
            onClick={() => onComplete(true, finalScore)}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
          >
            <CheckCircle className="w-4 h-4 inline mr-2" />
            Close Case Files
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white rounded-xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Eye className="w-8 h-8 mr-3 text-indigo-400" />
          <div>
            <h2 className="text-2xl font-bold">Trend Analysis Detective</h2>
            <p className="text-indigo-300">Case {currentCase + 1}/{trendCases.length}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-indigo-400">{totalScore} pts</div>
          <div className="text-sm text-gray-300 flex items-center">
            <Star className="w-4 h-4 mr-1" />
            Detective Level: {detectiveLevel}/10
          </div>
          <div className="text-sm text-gray-300">⏱️ {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white/20 rounded-full h-2 mb-6">
        <div 
          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentCase + (showResults ? 1 : 0)) / trendCases.length) * 100}%` }}
        />
      </div>

      {/* Case Brief */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          <div className="text-3xl mr-4">
            {currentCaseData.category === 'technology' && '💻'}
            {currentCaseData.category === 'social' && '👥'}
            {currentCaseData.category === 'economic' && '💰'}
            {currentCaseData.category === 'cultural' && '🎭'}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-yellow-300">
              {currentCaseData.title}
            </h3>
            <p className="text-gray-200">{currentCaseData.description}</p>
          </div>
        </div>

        <div className="flex items-center space-x-6 mb-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1 text-blue-300" />
            <span className="text-sm">Timeframe: {currentCaseData.timeframe}</span>
          </div>
          <div className="flex items-center">
            <Target className="w-4 h-4 mr-1 text-green-300" />
            <span className="text-sm">Potential Points: {currentCaseData.points}</span>
          </div>
        </div>
      </div>

      {/* Data Points Chart */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-green-300 flex items-center">
          <BarChart className="w-5 h-5 mr-2" />
          Trend Data Points:
        </h4>
        <div className="grid gap-3">
          {currentCaseData.dataPoints.map((point, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center">
                  <span className="font-semibold text-blue-300 mr-3">{point.date}</span>
                  <span className="text-2xl font-bold text-white">{point.value}%</span>
                </div>
                <p className="text-sm text-gray-300 mt-1">{point.context}</p>
              </div>
              <div className="w-32 bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all"
                  style={{ width: `${point.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Evidence Clues */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-yellow-300">Evidence Clues:</h4>
        <div className="grid grid-cols-2 gap-3">
          {currentCaseData.clues.map((clue, index) => (
            <div key={index} className="flex items-center p-3 bg-yellow-900/20 border border-yellow-600/30 rounded-lg">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3" />
              <span className="text-sm">{clue}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pattern Analysis */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-purple-300">Detected Patterns:</h4>
        <div className="grid gap-3">
          {currentCaseData.patterns.map((pattern, index) => (
            <div key={index} className="p-3 bg-purple-900/30 border border-purple-500/30 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-purple-300 capitalize">{pattern.type}</span>
                <span className="text-sm text-gray-400">Confidence: {pattern.confidence}%</span>
              </div>
              <p className="text-sm text-gray-200">{pattern.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Analysis Selection */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-blue-300">
          Your Analysis - Select the key factors (Choose 3):
        </h4>
        <div className="grid grid-cols-2 gap-3">
          {analysisOptions.map((option) => (
            <button
              key={option}
              onClick={() => handleAnalysisToggle(option)}
              disabled={investigationComplete}
              className={`p-3 rounded-lg border-2 text-left text-sm transition-all ${
                selectedAnalysis.includes(option)
                  ? 'border-blue-500 bg-blue-900/30 text-white'
                  : 'border-gray-600 bg-white/5 text-gray-300 hover:bg-white/10'
              } ${investigationComplete ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-400">
            Selected: {selectedAnalysis.length}/3 factors
          </span>
        </div>
      </div>

      {/* Results Display */}
      {showResults && (
        <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-lg p-6 mb-6 border border-green-500">
          <h4 className="font-semibold text-green-300 mb-3 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" />
            Investigation Results:
          </h4>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{Math.round(accuracy)}%</div>
              <div className="text-sm text-gray-300">Accuracy Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{Math.round((currentCaseData.points * accuracy) / 100)}</div>
              <div className="text-sm text-gray-300">Points Earned</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{detectiveLevel}</div>
              <div className="text-sm text-gray-300">Detective Level</div>
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-yellow-300 mb-2">Correct Analysis:</h5>
            <div className="grid gap-2">
              {currentCaseData.correctAnalysis.map((analysis, index) => (
                <div key={index} className={`p-2 rounded text-sm ${
                  selectedAnalysis.includes(analysis) 
                    ? 'bg-green-900/50 border border-green-500 text-green-300' 
                    : 'bg-red-900/50 border border-red-500 text-red-300'
                }`}>
                  {selectedAnalysis.includes(analysis) ? '✓ ' : '✗ '}{analysis}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        {!investigationComplete ? (
          <button
            onClick={handleSubmitAnalysis}
            disabled={selectedAnalysis.length === 0}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              selectedAnalysis.length > 0
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            <TrendingUp className="w-4 h-4 inline mr-2" />
            Submit Analysis
          </button>
        ) : showResults ? (
          <button
            onClick={handleNextCase}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            {currentCase < trendCases.length - 1 ? (
              <>
                <Users className="w-4 h-4 inline mr-2" />
                Next Case
              </>
            ) : (
              <>
                <CheckCircle className="w-4 h-4 inline mr-2" />
                Complete Investigation
              </>
            )}
          </button>
        ) : (
          <div className="px-6 py-3 bg-yellow-600 text-white rounded-lg font-medium">
            <BarChart className="w-4 h-4 inline mr-2 animate-pulse" />
            Analyzing Evidence...
          </div>
        )}
      </div>
    </div>
  );
}