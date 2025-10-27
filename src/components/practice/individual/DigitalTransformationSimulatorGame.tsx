'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { Globe, Monitor, CheckCircle, Star, Eye, Target } from 'lucide-react';

interface DigitalTransformationSimulatorGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface TransformationPhase {
  id: string;
  name: string;
  description: string;
  icon: string;
  challenges: Array<{
    id: string;
    title: string;
    description: string;
    options: Array<{
      text: string;
      impact: {
        efficiency: number;
        cost: number;
        userAdoption: number;
        riskLevel: number;
      };
      consequences: string;
    }>;
  }>;
  successCriteria: {
    minEfficiency: number;
    maxCost: number;
    minUserAdoption: number;
    maxRisk: number;
  };
}

const transformationPhases: TransformationPhase[] = [
  {
    id: 'assessment',
    name: 'Digital Assessment',
    description: 'Evaluate current digital maturity and identify transformation opportunities',
    icon: '🔍',
    challenges: [
      {
        id: 'current-state-analysis',
        title: 'Current State Analysis',
        description:
          'Your organization needs to assess its current digital capabilities before planning transformation.',
        options: [
          {
            text: 'Comprehensive digital audit with external consultants',
            impact: { efficiency: 20, cost: -30, userAdoption: 10, riskLevel: -10 },
            consequences: 'Thorough but expensive analysis provides solid foundation',
          },
          {
            text: 'Internal team assessment with existing resources',
            impact: { efficiency: 10, cost: -5, userAdoption: 5, riskLevel: 15 },
            consequences: 'Cost-effective but may miss critical insights',
          },
          {
            text: 'Hybrid approach with selective external expertise',
            impact: { efficiency: 15, cost: -15, userAdoption: 8, riskLevel: 5 },
            consequences: 'Balanced approach with moderate investment',
          },
        ],
      },
      {
        id: 'stakeholder-alignment',
        title: 'Stakeholder Alignment',
        description: 'Getting all departments and leadership aligned on digital transformation goals.',
        options: [
          {
            text: 'Executive mandate with top-down communication',
            impact: { efficiency: 15, cost: -10, userAdoption: -5, riskLevel: 20 },
            consequences: 'Fast implementation but potential resistance',
          },
          {
            text: 'Collaborative workshops with all stakeholders',
            impact: { efficiency: 5, cost: -20, userAdoption: 20, riskLevel: -15 },
            consequences: 'High buy-in but slower decision-making process',
          },
          {
            text: 'Phased alignment with key departments first',
            impact: { efficiency: 10, cost: -12, userAdoption: 12, riskLevel: 5 },
            consequences: 'Gradual alignment reduces resistance',
          },
        ],
      },
    ],
    successCriteria: {
      minEfficiency: 25,
      maxCost: -40,
      minUserAdoption: 15,
      maxRisk: 25,
    },
  },
  {
    id: 'planning',
    name: 'Strategic Planning',
    description: 'Develop comprehensive digital transformation roadmap and strategy',
    icon: '📋',
    challenges: [
      {
        id: 'technology-selection',
        title: 'Technology Platform Selection',
        description: 'Choose the right technology stack for your transformation initiative.',
        options: [
          {
            text: 'Cloud-first approach with modern SaaS solutions',
            impact: { efficiency: 25, cost: -25, userAdoption: 15, riskLevel: 10 },
            consequences: 'Scalable and flexible but requires change management',
          },
          {
            text: 'Hybrid cloud with existing system integration',
            impact: { efficiency: 15, cost: -15, userAdoption: 20, riskLevel: -5 },
            consequences: 'Preserves investment while enabling modernization',
          },
          {
            text: 'On-premise modernization with gradual cloud adoption',
            impact: { efficiency: 10, cost: -10, userAdoption: 25, riskLevel: -10 },
            consequences: 'Familiar approach but limited scalability',
          },
        ],
      },
      {
        id: 'implementation-timeline',
        title: 'Implementation Timeline',
        description: 'Decide on the pace and sequencing of your digital transformation.',
        options: [
          {
            text: 'Aggressive 12-month complete transformation',
            impact: { efficiency: 30, cost: -40, userAdoption: -10, riskLevel: 30 },
            consequences: 'Fast results but high stress and potential disruption',
          },
          {
            text: 'Phased 24-month gradual transformation',
            impact: { efficiency: 20, cost: -20, userAdoption: 20, riskLevel: -10 },
            consequences: 'Manageable change with better adoption',
          },
          {
            text: 'Conservative 36-month transformation with pilots',
            impact: { efficiency: 10, cost: -10, userAdoption: 30, riskLevel: -20 },
            consequences: 'Minimal risk but slow competitive advantage gain',
          },
        ],
      },
    ],
    successCriteria: {
      minEfficiency: 35,
      maxCost: -65,
      minUserAdoption: 35,
      maxRisk: 40,
    },
  },
  {
    id: 'implementation',
    name: 'Implementation & Rollout',
    description: 'Execute the digital transformation plan with proper change management',
    icon: '⚡',
    challenges: [
      {
        id: 'change-management',
        title: 'Employee Change Management',
        description: 'Help employees adapt to new digital tools and processes.',
        options: [
          {
            text: 'Comprehensive training program with digital champions',
            impact: { efficiency: 20, cost: -30, userAdoption: 30, riskLevel: -15 },
            consequences: 'High adoption but significant training investment',
          },
          {
            text: 'Just-in-time training with online resources',
            impact: { efficiency: 15, cost: -10, userAdoption: 15, riskLevel: 10 },
            consequences: 'Cost-effective but variable adoption rates',
          },
          {
            text: 'Peer-to-peer learning with internal mentors',
            impact: { efficiency: 10, cost: -5, userAdoption: 25, riskLevel: 5 },
            consequences: 'Organic adoption but inconsistent skill development',
          },
        ],
      },
      {
        id: 'data-migration',
        title: 'Data Migration Strategy',
        description: 'Safely move critical business data to new digital systems.',
        options: [
          {
            text: 'Big bang migration during planned downtime',
            impact: { efficiency: 25, cost: -20, userAdoption: 10, riskLevel: 25 },
            consequences: 'Fast transition but high risk of disruption',
          },
          {
            text: 'Phased migration with parallel systems',
            impact: { efficiency: 15, cost: -35, userAdoption: 20, riskLevel: -10 },
            consequences: 'Safer approach but higher costs and complexity',
          },
          {
            text: 'Gradual migration with data synchronization',
            impact: { efficiency: 10, cost: -25, userAdoption: 25, riskLevel: -15 },
            consequences: 'Minimal disruption but longer transition period',
          },
        ],
      },
    ],
    successCriteria: {
      minEfficiency: 60,
      maxCost: -120,
      minUserAdoption: 60,
      maxRisk: 55,
    },
  },
];

export default function DigitalTransformationSimulatorGame({
  onComplete,
  timeLeft,
  onRestart,
}: DigitalTransformationSimulatorGameProps) {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [gameMetrics, setGameMetrics] = useState({
    efficiency: 0,
    cost: 0,
    userAdoption: 0,
    riskLevel: 0,
  });
  const [phaseResults, setPhaseResults] = useState<Array<{ phase: string; success: boolean; score: number }>>([]);
  const [showDecisionResult, setShowDecisionResult] = useState(false);
  const [lastDecision, setLastDecision] = useState<string>('');
  const [gameComplete, setGameComplete] = useState(false);
  const [transformationLevel, setTransformationLevel] = useState(1);

  const currentPhaseData = transformationPhases[currentPhase];
  const currentChallengeData = currentPhaseData?.challenges[currentChallenge];

  const handleDecision = useCallback(
    (optionIndex: number) => {
      if (showDecisionResult) return;

      const selectedOption = currentChallengeData.options[optionIndex];

      // Apply decision impact to metrics
      setGameMetrics((prev) => ({
        efficiency: Math.max(0, Math.min(100, prev.efficiency + selectedOption.impact.efficiency)),
        cost: Math.max(-200, prev.cost + selectedOption.impact.cost),
        userAdoption: Math.max(0, Math.min(100, prev.userAdoption + selectedOption.impact.userAdoption)),
        riskLevel: Math.max(0, Math.min(100, prev.riskLevel + selectedOption.impact.riskLevel)),
      }));

      setLastDecision(selectedOption.consequences);
      setShowDecisionResult(true);

      // Progress transformation level based on good decisions
      if (selectedOption.impact.efficiency > 15 || selectedOption.impact.userAdoption > 20) {
        setTransformationLevel((prev) => Math.min(10, prev + 1));
      }

      setTimeout(() => {
        setShowDecisionResult(false);

        if (currentChallenge < currentPhaseData.challenges.length - 1) {
          setCurrentChallenge((prev) => prev + 1);
        } else {
          // Evaluate phase completion
          const phaseSuccess =
            gameMetrics.efficiency >= currentPhaseData.successCriteria.minEfficiency &&
            gameMetrics.cost >= currentPhaseData.successCriteria.maxCost &&
            gameMetrics.userAdoption >= currentPhaseData.successCriteria.minUserAdoption &&
            gameMetrics.riskLevel <= currentPhaseData.successCriteria.maxRisk;

          const phaseScore = Math.max(
            0,
            Math.min(
              100,
              (gameMetrics.efficiency +
                gameMetrics.userAdoption -
                gameMetrics.riskLevel +
                Math.abs(gameMetrics.cost / 2)) /
                3,
            ),
          );

          setPhaseResults((prev) => [
            ...prev,
            {
              phase: currentPhaseData.name,
              success: phaseSuccess,
              score: phaseScore,
            },
          ]);

          if (currentPhase < transformationPhases.length - 1) {
            setCurrentPhase((prev) => prev + 1);
            setCurrentChallenge(0);
          } else {
            setGameComplete(true);
            const finalScore = Math.max(
              0,
              Math.min(
                100,
                (gameMetrics.efficiency +
                  gameMetrics.userAdoption -
                  gameMetrics.riskLevel / 2 +
                  Math.abs(gameMetrics.cost / 3)) /
                  3,
              ),
            );
            onComplete(finalScore > 50, finalScore);
          }
        }
      }, 3000);
    },
    [
      currentPhaseData,
      currentChallengeData,
      currentChallenge,
      currentPhase,
      gameMetrics,
      showDecisionResult,
      onComplete,
    ],
  );

  useEffect(() => {
    if (timeLeft <= 0 && !gameComplete) {
      const finalScore = Math.max(0, (gameMetrics.efficiency + gameMetrics.userAdoption) / 2);
      onComplete(finalScore > 50, finalScore);
    }
  }, [timeLeft, gameComplete, gameMetrics, onComplete]);

  if (gameComplete) {
    const finalScore = Math.max(
      0,
      Math.min(
        100,
        (gameMetrics.efficiency +
          gameMetrics.userAdoption -
          gameMetrics.riskLevel / 2 +
          Math.abs(gameMetrics.cost / 3)) /
          3,
      ),
    );

    return (
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white rounded-xl">
        <div className="text-center mb-8">
          <Globe className="w-16 h-16 mx-auto mb-4 text-blue-400" />
          <h2 className="text-3xl font-bold mb-2">Digital Transformation Complete</h2>
          <div className="text-6xl font-bold text-blue-400 mb-4">{Math.round(finalScore)}%</div>
          <p className="text-xl mb-6">Transformation Level: {transformationLevel}/10</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Final Metrics */}
          <div className="bg-white/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-300">Final Transformation Metrics:</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-green-300">Efficiency:</span>
                <div className="flex items-center">
                  <div className="w-24 bg-gray-700 rounded-full h-2 mr-3">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: `${gameMetrics.efficiency}%` }} />
                  </div>
                  <span className="text-sm font-semibold">{gameMetrics.efficiency}%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-300">User Adoption:</span>
                <div className="flex items-center">
                  <div className="w-24 bg-gray-700 rounded-full h-2 mr-3">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${gameMetrics.userAdoption}%` }} />
                  </div>
                  <span className="text-sm font-semibold">{gameMetrics.userAdoption}%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-red-300">Risk Level:</span>
                <div className="flex items-center">
                  <div className="w-24 bg-gray-700 rounded-full h-2 mr-3">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: `${gameMetrics.riskLevel}%` }} />
                  </div>
                  <span className="text-sm font-semibold">{gameMetrics.riskLevel}%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-yellow-300">Cost Impact:</span>
                <div className="flex items-center">
                  <span className="text-sm font-semibold">{gameMetrics.cost} points</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phase Results */}
          <div className="bg-white/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-purple-300">Phase Results:</h3>
            <div className="space-y-3">
              {phaseResults.map((result, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center p-3 rounded-lg ${
                    result.success ? 'bg-green-900/30 border border-green-500' : 'bg-red-900/30 border border-red-500'
                  }`}
                >
                  <span className="font-medium">{result.phase}</span>
                  <div className="flex items-center">
                    <span className="text-sm mr-2">{Math.round(result.score)}%</span>
                    {result.success ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                      <Target className="w-4 h-4 text-red-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white/10 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold mb-3 text-yellow-300 flex items-center">
            <Star className="w-5 h-5 mr-2" />
            Transformation Achievements:
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              {finalScore >= 80 && <div className="text-sm text-green-300 mb-1">• Digital Excellence Leader</div>}
              {gameMetrics.efficiency >= 80 && <div className="text-sm text-blue-300 mb-1">• Efficiency Master</div>}
              {gameMetrics.userAdoption >= 80 && <div className="text-sm text-purple-300 mb-1">• Change Champion</div>}
              {gameMetrics.riskLevel <= 20 && (
                <div className="text-sm text-yellow-300 mb-1">• Risk Management Expert</div>
              )}
            </div>
            <div>
              {transformationLevel >= 8 && <div className="text-sm text-indigo-300 mb-1">• Strategic Visionary</div>}
              {finalScore >= 70 && <div className="text-sm text-teal-300 mb-1">• Digital Transformation Pro</div>}
              {phaseResults.filter((r) => r.success).length === 3 && (
                <div className="text-sm text-orange-300 mb-1">• Perfect Execution</div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={onRestart}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            <Globe className="w-4 h-4 inline mr-2" />
            New Transformation
          </button>
          <button
            onClick={() => onComplete(true, finalScore)}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
          >
            <CheckCircle className="w-4 h-4 inline mr-2" />
            Complete Project
          </button>
        </div>
      </div>
    );
  }

  if (!currentPhaseData || !currentChallengeData) {
    return (
      <div className="text-center p-8">
        <div className="text-red-400">Error loading transformation data</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white rounded-xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Globe className="w-8 h-8 mr-3 text-blue-400" />
          <div>
            <h2 className="text-2xl font-bold">Digital Transformation Simulator</h2>
            <p className="text-blue-300">
              Phase {currentPhase + 1}/{transformationPhases.length}: {currentPhaseData.name}
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-300 flex items-center mb-1">
            <Star className="w-4 h-4 mr-1" />
            Level: {transformationLevel}/10
          </div>
          <div className="text-sm text-gray-300">
            ⏱️ {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white/20 rounded-full h-2 mb-6">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
          style={{
            width: `${((currentPhase + (currentChallenge + 1) / currentPhaseData.challenges.length) / transformationPhases.length) * 100}%`,
          }}
        />
      </div>

      {/* Current Metrics Dashboard */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4 text-blue-300">Current Transformation Metrics:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{gameMetrics.efficiency}%</div>
            <div className="text-sm text-gray-300">Efficiency</div>
            <div className="w-full bg-gray-700 rounded-full h-1 mt-1">
              <div
                className="bg-green-500 h-1 rounded-full transition-all"
                style={{ width: `${gameMetrics.efficiency}%` }}
              />
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{gameMetrics.userAdoption}%</div>
            <div className="text-sm text-gray-300">User Adoption</div>
            <div className="w-full bg-gray-700 rounded-full h-1 mt-1">
              <div
                className="bg-blue-500 h-1 rounded-full transition-all"
                style={{ width: `${gameMetrics.userAdoption}%` }}
              />
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-400">{gameMetrics.riskLevel}%</div>
            <div className="text-sm text-gray-300">Risk Level</div>
            <div className="w-full bg-gray-700 rounded-full h-1 mt-1">
              <div
                className="bg-red-500 h-1 rounded-full transition-all"
                style={{ width: `${gameMetrics.riskLevel}%` }}
              />
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">{gameMetrics.cost}</div>
            <div className="text-sm text-gray-300">Cost Impact</div>
            <div className="text-xs text-gray-400 mt-1">Budget Points</div>
          </div>
        </div>
      </div>

      {/* Phase Description */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          <div className="text-4xl mr-4">{currentPhaseData.icon}</div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-yellow-300">{currentPhaseData.name}</h3>
            <p className="text-gray-200">{currentPhaseData.description}</p>
          </div>
        </div>
      </div>

      {/* Current Challenge */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-green-300 flex items-center">
          <Monitor className="w-5 h-5 mr-2" />
          Challenge: {currentChallengeData.title}
        </h4>
        <p className="text-gray-200 mb-6">{currentChallengeData.description}</p>

        {/* Decision Options */}
        <div className="grid gap-4">
          {currentChallengeData.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleDecision(index)}
              disabled={showDecisionResult}
              className={`p-4 text-left rounded-lg border-2 transition-all ${
                showDecisionResult
                  ? 'opacity-50 cursor-not-allowed border-gray-600 bg-white/5'
                  : 'border-gray-600 bg-white/5 hover:bg-white/10 hover:border-blue-500 cursor-pointer'
              }`}
            >
              <div className="font-medium text-white mb-2">{option.text}</div>
              <div className="text-sm text-gray-300 mb-3">Impact Preview:</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                <div
                  className={`${option.impact.efficiency > 0 ? 'text-green-400' : option.impact.efficiency < 0 ? 'text-red-400' : 'text-gray-400'}`}
                >
                  Efficiency: {option.impact.efficiency > 0 ? '+' : ''}
                  {option.impact.efficiency}%
                </div>
                <div
                  className={`${option.impact.userAdoption > 0 ? 'text-green-400' : option.impact.userAdoption < 0 ? 'text-red-400' : 'text-gray-400'}`}
                >
                  Adoption: {option.impact.userAdoption > 0 ? '+' : ''}
                  {option.impact.userAdoption}%
                </div>
                <div
                  className={`${option.impact.riskLevel < 0 ? 'text-green-400' : option.impact.riskLevel > 0 ? 'text-red-400' : 'text-gray-400'}`}
                >
                  Risk: {option.impact.riskLevel > 0 ? '+' : ''}
                  {option.impact.riskLevel}%
                </div>
                <div className="text-yellow-400">Cost: {option.impact.cost} pts</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Decision Result */}
      {showDecisionResult && (
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg p-6 mb-6 border border-blue-500">
          <h4 className="font-semibold text-blue-300 mb-3 flex items-center">
            <Eye className="w-5 h-5 mr-2" />
            Decision Impact:
          </h4>
          <p className="text-gray-200 mb-4">{lastDecision}</p>
          <div className="bg-white/10 rounded-lg p-3">
            <div className="text-sm text-center text-gray-300">
              Analyzing transformation impact...
              <span className="animate-pulse ml-2">⚡</span>
            </div>
          </div>
        </div>
      )}

      {/* Phase Success Criteria */}
      <div className="bg-white/10 rounded-lg p-4 mb-6">
        <h4 className="text-sm font-semibold text-purple-300 mb-3 flex items-center">
          <Target className="w-4 h-4 mr-2" />
          Phase Success Criteria:
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
          <div
            className={`${gameMetrics.efficiency >= currentPhaseData.successCriteria.minEfficiency ? 'text-green-300' : 'text-red-300'}`}
          >
            Efficiency ≥ {currentPhaseData.successCriteria.minEfficiency}%
          </div>
          <div
            className={`${gameMetrics.userAdoption >= currentPhaseData.successCriteria.minUserAdoption ? 'text-green-300' : 'text-red-300'}`}
          >
            Adoption ≥ {currentPhaseData.successCriteria.minUserAdoption}%
          </div>
          <div
            className={`${gameMetrics.riskLevel <= currentPhaseData.successCriteria.maxRisk ? 'text-green-300' : 'text-red-300'}`}
          >
            Risk ≤ {currentPhaseData.successCriteria.maxRisk}%
          </div>
          <div
            className={`${gameMetrics.cost >= currentPhaseData.successCriteria.maxCost ? 'text-green-300' : 'text-red-300'}`}
          >
            Budget ≥ {currentPhaseData.successCriteria.maxCost} pts
          </div>
        </div>
      </div>

      {/* Progress Info */}
      <div className="text-center text-sm text-gray-400">
        Challenge {currentChallenge + 1}/{currentPhaseData.challenges.length} in {currentPhaseData.name}
      </div>
    </div>
  );
}
