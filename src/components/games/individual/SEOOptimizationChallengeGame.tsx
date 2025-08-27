'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { Search, TrendingUp, DollarSign, CheckCircle, Star, Target, BarChart3, ArrowUp } from 'lucide-react';

interface SEOOptimizationChallengeGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface SEOChallenge {
  id: string;
  title: string;
  description: string;
  website: string;
  currentMetrics: {
    ranking: number;
    traffic: number;
    conversionRate: number;
    pageSpeed: number;
  };
  targetMetrics: {
    ranking: number;
    traffic: number;
    conversionRate: number;
    pageSpeed: number;
  };
  points: number;
}

const seoTechniques = [
  {
    id: 'keyword-optimization',
    name: 'Keyword Optimization',
    description: 'Optimize title tags, meta descriptions, and content',
    impact: { ranking: 8, traffic: 12, conversion: 5, speed: 0 },
    cost: 10,
    difficulty: 'Medium'
  },
  {
    id: 'technical-seo',
    name: 'Technical SEO',
    description: 'Fix crawl errors, improve site structure, schema markup',
    impact: { ranking: 12, traffic: 8, conversion: 3, speed: 15 },
    cost: 20,
    difficulty: 'Hard'
  },
  {
    id: 'content-marketing',
    name: 'Content Marketing',
    description: 'Create high-quality, keyword-rich content',
    impact: { ranking: 10, traffic: 20, conversion: 8, speed: 0 },
    cost: 15,
    difficulty: 'Medium'
  },
  {
    id: 'link-building',
    name: 'Link Building',
    description: 'Acquire high-quality backlinks from authority sites',
    impact: { ranking: 15, traffic: 10, conversion: 2, speed: 0 },
    cost: 25,
    difficulty: 'Hard'
  },
  {
    id: 'page-speed',
    name: 'Page Speed Optimization',
    description: 'Optimize images, minify CSS/JS, improve hosting',
    impact: { ranking: 5, traffic: 8, conversion: 12, speed: 30 },
    cost: 15,
    difficulty: 'Medium'
  },
  {
    id: 'mobile-optimization',
    name: 'Mobile Optimization',
    description: 'Responsive design and mobile-first approach',
    impact: { ranking: 8, traffic: 15, conversion: 10, speed: 10 },
    cost: 20,
    difficulty: 'Medium'
  }
];

const challenges: SEOChallenge[] = [
  {
    id: 'local-restaurant',
    title: 'Local Restaurant SEO',
    description: 'Improve local search visibility for a Vietnamese restaurant',
    website: 'pho-saigon.com',
    currentMetrics: { ranking: 45, traffic: 500, conversionRate: 2.1, pageSpeed: 60 },
    targetMetrics: { ranking: 15, traffic: 1500, conversionRate: 4.0, pageSpeed: 85 },
    points: 30
  },
  {
    id: 'ecommerce-site',
    title: 'E-commerce Growth',
    description: 'Boost organic traffic for an online electronics store',
    website: 'tech-vietnam.com',
    currentMetrics: { ranking: 35, traffic: 2000, conversionRate: 1.8, pageSpeed: 55 },
    targetMetrics: { ranking: 10, traffic: 8000, conversionRate: 3.5, pageSpeed: 90 },
    points: 50
  },
  {
    id: 'saas-platform',
    title: 'SaaS Platform Optimization',
    description: 'Improve search visibility for a project management tool',
    website: 'projecthub-vn.com',
    currentMetrics: { ranking: 25, traffic: 1200, conversionRate: 3.2, pageSpeed: 70 },
    targetMetrics: { ranking: 5, traffic: 5000, conversionRate: 6.0, pageSpeed: 95 },
    points: 70
  }
];

export default function SEOOptimizationChallengeGame({
  onComplete,
  timeLeft,
  onRestart
}: SEOOptimizationChallengeGameProps) {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [selectedTechniques, setSelectedTechniques] = useState<string[]>([]);
  const [budget, setBudget] = useState(100);
  const [currentMetrics, setCurrentMetrics] = useState(challenges[0].currentMetrics);
  const [optimizationComplete, setOptimizationComplete] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [seoExpertise, setSeoExpertise] = useState(50);
  const [gameComplete, setGameComplete] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const currentChallengeData = challenges[currentChallenge];

  useEffect(() => {
    if (currentChallengeData) {
      setCurrentMetrics(currentChallengeData.currentMetrics);
      setBudget(100);
    }
  }, [currentChallengeData]);

  const handleTechniqueToggle = useCallback((techniqueId: string) => {
    if (optimizationComplete) return;
    
    const technique = seoTechniques.find(t => t.id === techniqueId);
    if (!technique) return;

    setSelectedTechniques(prev => {
      if (prev.includes(techniqueId)) {
        setBudget(b => b + technique.cost);
        return prev.filter(id => id !== techniqueId);
      } else {
        if (budget >= technique.cost) {
          setBudget(b => b - technique.cost);
          return [...prev, techniqueId];
        }
        return prev;
      }
    });
  }, [optimizationComplete, budget]);

  const calculateTotalCost = useCallback(() => {
    return selectedTechniques.reduce((total, techniqueId) => {
      const technique = seoTechniques.find(t => t.id === techniqueId);
      return total + (technique?.cost || 0);
    }, 0);
  }, [selectedTechniques]);

  const handleOptimize = useCallback(() => {
    if (selectedTechniques.length === 0) return;
    
    setOptimizationComplete(true);
    
    // Calculate improvements based on selected techniques
    const improvements = { ranking: 0, traffic: 0, conversion: 0, speed: 0 };
    
    selectedTechniques.forEach(techniqueId => {
      const technique = seoTechniques.find(t => t.id === techniqueId);
      if (technique) {
        improvements.ranking += technique.impact.ranking;
        improvements.traffic += technique.impact.traffic;
        improvements.conversion += technique.impact.conversion;
        improvements.speed += technique.impact.speed;
      }
    });
    
    // Apply improvements with some randomization
    const finalMetrics = {
      ranking: Math.max(1, Math.round(currentMetrics.ranking - improvements.ranking * (0.8 + Math.random() * 0.4))),
      traffic: Math.round(currentMetrics.traffic * (1 + improvements.traffic / 100 * (0.8 + Math.random() * 0.4))),
      conversionRate: Number((currentMetrics.conversionRate + improvements.conversion / 10 * (0.8 + Math.random() * 0.4)).toFixed(1)),
      pageSpeed: Math.min(100, Math.round(currentMetrics.pageSpeed + improvements.speed * (0.8 + Math.random() * 0.4)))
    };
    
    setCurrentMetrics(finalMetrics);
    
    // Calculate score based on target achievement
    const targets = currentChallengeData.targetMetrics;
    const rankingScore = Math.max(0, (targets.ranking - finalMetrics.ranking) / targets.ranking * 30);
    const trafficScore = Math.min(30, (finalMetrics.traffic - currentChallengeData.currentMetrics.traffic) / (targets.traffic - currentChallengeData.currentMetrics.traffic) * 30);
    const conversionScore = Math.min(20, (finalMetrics.conversionRate - currentChallengeData.currentMetrics.conversionRate) / (targets.conversionRate - currentChallengeData.currentMetrics.conversionRate) * 20);
    const speedScore = Math.min(20, (finalMetrics.pageSpeed - currentChallengeData.currentMetrics.pageSpeed) / (targets.pageSpeed - currentChallengeData.currentMetrics.pageSpeed) * 20);
    
    const challengeScore = Math.round(rankingScore + trafficScore + conversionScore + speedScore);
    const budgetBonus = Math.round((100 - calculateTotalCost()) / 2); // Unused budget bonus
    const techniqueBonus = selectedTechniques.length * 5; // Diversity bonus
    
    const finalChallengeScore = challengeScore + budgetBonus + techniqueBonus;
    setTotalScore(prev => prev + finalChallengeScore);
    
    // Update SEO expertise
    const expertiseGain = selectedTechniques.length * 3 + (challengeScore > 60 ? 10 : 5);
    setSeoExpertise(prev => Math.min(100, prev + expertiseGain));
    
    setTimeout(() => setShowResults(true), 2000);
  }, [selectedTechniques, currentMetrics, currentChallengeData, calculateTotalCost]);

  const handleNextChallenge = useCallback(() => {
    if (currentChallenge < challenges.length - 1) {
      setCurrentChallenge(prev => prev + 1);
      setSelectedTechniques([]);
      setOptimizationComplete(false);
      setShowResults(false);
    } else {
      setGameComplete(true);
      const finalScore = Math.max(0, Math.min(100, (totalScore / 200) * 100));
      onComplete(totalScore > 0, finalScore);
    }
  }, [currentChallenge, totalScore, onComplete]);

  useEffect(() => {
    if (timeLeft <= 0 && !gameComplete) {
      const finalScore = Math.max(0, (totalScore / 200) * 100);
      onComplete(totalScore > 0, finalScore);
    }
  }, [timeLeft, gameComplete, totalScore, onComplete]);

  if (gameComplete) {
    const finalScore = Math.max(0, Math.min(100, (totalScore / 200) * 100));

    return (
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-900 via-green-900 to-teal-900 text-white rounded-xl">
        <div className="text-center mb-8">
          <Search className="w-16 h-16 mx-auto mb-4 text-blue-400" />
          <h2 className="text-3xl font-bold mb-2">SEO Campaign Complete</h2>
          <div className="text-6xl font-bold text-blue-400 mb-4">
            {Math.round(finalScore)}%
          </div>
          <p className="text-xl mb-6">
            Total Score: {totalScore} | SEO Expertise: {seoExpertise}/100
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Star className="w-5 h-5 mr-2 text-blue-400" />
              SEO Achievements
            </h3>
            <ul className="space-y-2 text-sm">
              {finalScore >= 80 && <li>• SEO Expert - Outstanding optimization results</li>}
              {seoExpertise >= 80 && <li>• Technical Master - Advanced SEO knowledge</li>}
              {finalScore >= 60 && <li>• Digital Marketer - Solid SEO foundation</li>}
              {totalScore >= 150 && <li>• Strategy Specialist - Comprehensive approach</li>}
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Target className="w-5 h-5 mr-2 text-green-400" />
              Growth Areas
            </h3>
            <ul className="space-y-2 text-sm">
              {finalScore < 80 && <li>• Study advanced SEO techniques</li>}
              {seoExpertise < 70 && <li>• Learn technical SEO fundamentals</li>}
              <li>• Practice keyword research methods</li>
              <li>• Explore Google Analytics and Search Console</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={onRestart}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            <Search className="w-4 h-4 inline mr-2" />
            New SEO Campaign
          </button>
          <button
            onClick={() => onComplete(true, finalScore)}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
          >
            <CheckCircle className="w-4 h-4 inline mr-2" />
            Complete Campaign
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-900 via-green-900 to-teal-900 text-white rounded-xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Search className="w-8 h-8 mr-3 text-blue-400" />
          <div>
            <h2 className="text-2xl font-bold">SEO Optimization Challenge</h2>
            <p className="text-blue-300">Challenge {currentChallenge + 1}/{challenges.length}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-blue-400">{totalScore} pts</div>
          <div className="text-sm text-gray-300 flex items-center">
            <TrendingUp className="w-4 h-4 mr-1" />
            SEO Expertise: {seoExpertise}/100
          </div>
          <div className="text-sm text-gray-300 flex items-center">
            <DollarSign className="w-4 h-4 mr-1" />
            Budget: ${budget}
          </div>
          <div className="text-sm text-gray-300">⏱️ {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white/20 rounded-full h-2 mb-6">
        <div 
          className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentChallenge + (showResults ? 1 : 0)) / challenges.length) * 100}%` }}
        />
      </div>

      {/* Challenge Info */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold mb-3 text-yellow-300">
          {currentChallengeData.title}
        </h3>
        <p className="text-gray-200 mb-4">{currentChallengeData.description}</p>
        <div className="flex items-center space-x-6 mb-4">
          <div className="flex items-center">
            <span className="text-sm font-medium">Website: </span>
            <span className="text-sm text-blue-300 ml-1">{currentChallengeData.website}</span>
          </div>
          <div className="flex items-center">
            <Target className="w-4 h-4 mr-1 text-green-300" />
            <span className="text-sm">Base Points: {currentChallengeData.points}</span>
          </div>
        </div>
      </div>

      {/* Current Metrics */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-green-300 flex items-center">
          <BarChart3 className="w-5 h-5 mr-2" />
          Current vs Target Metrics:
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-400">#{currentMetrics.ranking}</div>
            <div className="text-xs text-gray-400">Current Ranking</div>
            <div className="text-sm text-green-400">Target: #{currentChallengeData.targetMetrics.ranking}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{currentMetrics.traffic.toLocaleString()}</div>
            <div className="text-xs text-gray-400">Monthly Traffic</div>
            <div className="text-sm text-green-400">Target: {currentChallengeData.targetMetrics.traffic.toLocaleString()}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{currentMetrics.conversionRate}%</div>
            <div className="text-xs text-gray-400">Conversion Rate</div>
            <div className="text-sm text-green-400">Target: {currentChallengeData.targetMetrics.conversionRate}%</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">{currentMetrics.pageSpeed}</div>
            <div className="text-xs text-gray-400">Page Speed Score</div>
            <div className="text-sm text-green-400">Target: {currentChallengeData.targetMetrics.pageSpeed}</div>
          </div>
        </div>
      </div>

      {/* SEO Techniques */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-purple-300">
          SEO Techniques - Budget: ${budget} (Cost: ${calculateTotalCost()}):
        </h4>
        <div className="grid gap-3">
          {seoTechniques.map((technique) => {
            const isSelected = selectedTechniques.includes(technique.id);
            const canAfford = budget >= technique.cost || isSelected;
            const difficultyColor = {
              'Easy': 'text-green-400',
              'Medium': 'text-yellow-400',
              'Hard': 'text-red-400'
            }[technique.difficulty] || 'text-gray-400';

            return (
              <button
                key={technique.id}
                onClick={() => handleTechniqueToggle(technique.id)}
                disabled={optimizationComplete || (!canAfford && !isSelected)}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  isSelected
                    ? 'border-purple-500 bg-purple-900/30'
                    : canAfford
                    ? 'border-gray-600 bg-white/5 hover:bg-white/10'
                    : 'border-red-600 bg-red-900/20 opacity-50'
                } ${optimizationComplete ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h5 className="font-semibold">{technique.name}</h5>
                      <span className={`ml-2 text-xs ${difficultyColor}`}>
                        {technique.difficulty}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 mb-2">{technique.description}</p>
                    <div className="flex items-center space-x-4 text-xs">
                      <span className="text-red-300">Rank: +{technique.impact.ranking}</span>
                      <span className="text-blue-300">Traffic: +{technique.impact.traffic}%</span>
                      <span className="text-purple-300">Conv: +{technique.impact.conversion / 10}%</span>
                      <span className="text-yellow-300">Speed: +{technique.impact.speed}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-green-400">${technique.cost}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Display */}
      {showResults && (
        <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-lg p-6 mb-6 border border-green-500">
          <h4 className="font-semibold text-green-300 mb-3 flex items-center">
            <ArrowUp className="w-5 h-5 mr-2" />
            Optimization Results:
          </h4>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-xl font-bold text-green-400">
                #{currentMetrics.ranking}
                <span className="text-sm ml-1">({currentChallengeData.currentMetrics.ranking - currentMetrics.ranking > 0 ? '+' : ''}{currentChallengeData.currentMetrics.ranking - currentMetrics.ranking})</span>
              </div>
              <div className="text-xs text-gray-300">Search Ranking</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-blue-400">
                {currentMetrics.traffic.toLocaleString()}
                <span className="text-sm ml-1">(+{Math.round((currentMetrics.traffic - currentChallengeData.currentMetrics.traffic) / currentChallengeData.currentMetrics.traffic * 100)}%)</span>
              </div>
              <div className="text-xs text-gray-300">Monthly Traffic</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-purple-400">
                {currentMetrics.conversionRate}%
                <span className="text-sm ml-1">(+{(currentMetrics.conversionRate - currentChallengeData.currentMetrics.conversionRate).toFixed(1)}%)</span>
              </div>
              <div className="text-xs text-gray-300">Conversion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-yellow-400">
                {currentMetrics.pageSpeed}
                <span className="text-sm ml-1">(+{currentMetrics.pageSpeed - currentChallengeData.currentMetrics.pageSpeed})</span>
              </div>
              <div className="text-xs text-gray-300">Page Speed</div>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        {!optimizationComplete ? (
          <button
            onClick={handleOptimize}
            disabled={selectedTechniques.length === 0}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              selectedTechniques.length > 0
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            <TrendingUp className="w-4 h-4 inline mr-2" />
            Optimize Website
          </button>
        ) : showResults ? (
          <button
            onClick={handleNextChallenge}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            {currentChallenge < challenges.length - 1 ? (
              <>
                <Search className="w-4 h-4 inline mr-2" />
                Next SEO Challenge
              </>
            ) : (
              <>
                <CheckCircle className="w-4 h-4 inline mr-2" />
                Complete Campaign
              </>
            )}
          </button>
        ) : (
          <div className="px-6 py-3 bg-yellow-600 text-white rounded-lg font-medium">
            <TrendingUp className="w-4 h-4 inline mr-2 animate-pulse" />
            Analyzing Results...
          </div>
        )}
      </div>
    </div>
  );
}