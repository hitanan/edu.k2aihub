'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { Palette, Monitor, Users, CheckCircle, Star, Eye, MousePointer, Layers } from 'lucide-react';

interface UXDesignStudio3DGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface DesignProject {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'ar/vr' | 'iot';
  client: string;
  briefing: string;
  requirements: string[];
  constraints: string[];
  designPhases: Array<{
    id: string;
    name: string;
    description: string;
    tools: string[];
    deliverables: Array<{
      type: 'wireframe' | 'prototype' | 'mockup' | 'user-journey' | 'persona' | 'usability-test';
      description: string;
      qualityScore: number;
      userScore: number;
    }>;
  }>;
  successCriteria: {
    minUsability: number;
    minAccessibility: number;
    minInnovation: number;
    maxComplexity: number;
  };
  points: number;
}

const designProjects: DesignProject[] = [
  {
    id: 'mobile-banking-app',
    title: 'Mobile Banking App Redesign',
    category: 'mobile',
    client: 'VietBank Digital',
    briefing: 'Redesign the mobile banking app to improve user experience for Vietnamese customers, focusing on accessibility and security.',
    requirements: [
      'Accessible design for elderly users',
      'Biometric authentication integration',
      'Vietnamese language optimization',
      'Offline transaction history',
      'Quick payment shortcuts',
      'Multi-device synchronization'
    ],
    constraints: [
      'Must work on Android 8.0+',
      'Limited to 3 primary colors',
      'Maximum 4-step authentication',
      'Compliance with banking regulations',
      'Support for screen readers'
    ],
    designPhases: [
      {
        id: 'research',
        name: 'User Research & Analysis',
        description: 'Understand user needs, behaviors, and pain points',
        tools: ['User Interviews', 'Analytics', 'Surveys', 'Personas'],
        deliverables: [
          {
            type: 'persona',
            description: 'Primary user persona: 45-year-old office worker',
            qualityScore: 85,
            userScore: 0
          },
          {
            type: 'user-journey',
            description: 'Current banking app user journey mapping',
            qualityScore: 80,
            userScore: 0
          }
        ]
      },
      {
        id: 'design',
        name: 'Design & Prototyping',
        description: 'Create wireframes, mockups, and interactive prototypes',
        tools: ['Figma', 'Sketch', 'Adobe XD', 'Principle'],
        deliverables: [
          {
            type: 'wireframe',
            description: 'Low-fidelity wireframes for key screens',
            qualityScore: 75,
            userScore: 0
          },
          {
            type: 'prototype',
            description: 'High-fidelity interactive prototype',
            qualityScore: 90,
            userScore: 0
          }
        ]
      },
      {
        id: 'testing',
        name: 'Usability Testing',
        description: 'Validate design decisions through user testing',
        tools: ['UsabilityHub', 'Maze', 'Lookback', 'UserTesting'],
        deliverables: [
          {
            type: 'usability-test',
            description: 'A/B testing results and recommendations',
            qualityScore: 88,
            userScore: 0
          }
        ]
      }
    ],
    successCriteria: {
      minUsability: 80,
      minAccessibility: 85,
      minInnovation: 70,
      maxComplexity: 60
    },
    points: 40
  },
  {
    id: 'ar-shopping-experience',
    title: 'AR Shopping Experience',
    category: 'ar/vr',
    client: 'FashionForward Vietnam',
    briefing: 'Design an augmented reality shopping experience that allows customers to try on clothes virtually before purchasing.',
    requirements: [
      '3D garment visualization',
      'Real-time size adjustment',
      'Social sharing features',
      'Virtual fitting room',
      'Price comparison tools',
      'Vietnamese fashion preferences'
    ],
    constraints: [
      'Works on mid-range smartphones',
      'AR tracking without markers',
      'Loading time under 5 seconds',
      'Privacy-compliant data handling',
      'Cultural sensitivity in designs'
    ],
    designPhases: [
      {
        id: 'concept',
        name: 'Concept & Ideation',
        description: 'Explore AR shopping concepts and technical feasibility',
        tools: ['Miro', 'Brainstorming', 'Concept Testing', 'AR Prototyping'],
        deliverables: [
          {
            type: 'prototype',
            description: 'AR concept demonstration with basic tracking',
            qualityScore: 80,
            userScore: 0
          }
        ]
      },
      {
        id: 'experience',
        name: 'Experience Design',
        description: 'Design the 3D interaction patterns and user flows',
        tools: ['Unity', 'ARCore', 'Blender', 'Maya'],
        deliverables: [
          {
            type: 'prototype',
            description: '3D try-on experience with gesture controls',
            qualityScore: 92,
            userScore: 0
          },
          {
            type: 'user-journey',
            description: 'AR shopping journey with pain point solutions',
            qualityScore: 87,
            userScore: 0
          }
        ]
      },
      {
        id: 'validation',
        name: 'Experience Validation',
        description: 'Test AR experience with target users',
        tools: ['AR Testing Lab', 'Eye Tracking', 'Motion Analysis'],
        deliverables: [
          {
            type: 'usability-test',
            description: 'AR usability testing with motion capture data',
            qualityScore: 85,
            userScore: 0
          }
        ]
      }
    ],
    successCriteria: {
      minUsability: 75,
      minAccessibility: 70,
      minInnovation: 90,
      maxComplexity: 80
    },
    points: 60
  },
  {
    id: 'smart-city-dashboard',
    title: 'Smart City IoT Dashboard',
    category: 'iot',
    client: 'Ho Chi Minh City Smart Initiative',
    briefing: 'Create a comprehensive dashboard for city administrators to monitor and control IoT devices across the smart city infrastructure.',
    requirements: [
      'Real-time data visualization',
      'Multi-device responsive design',
      'Alert and notification system',
      'Historical data analysis',
      'Role-based access control',
      'Emergency response integration'
    ],
    constraints: [
      'Must handle 10,000+ data points',
      'Sub-second response time',
      'Works offline for critical functions',
      'Government security standards',
      'Multi-language support'
    ],
    designPhases: [
      {
        id: 'information',
        name: 'Information Architecture',
        description: 'Structure complex data and user workflows',
        tools: ['Card Sorting', 'Task Analysis', 'Data Modeling'],
        deliverables: [
          {
            type: 'wireframe',
            description: 'Dashboard information hierarchy wireframes',
            qualityScore: 82,
            userScore: 0
          }
        ]
      },
      {
        id: 'visualization',
        name: 'Data Visualization Design',
        description: 'Design clear and actionable data representations',
        tools: ['D3.js', 'Chart.js', 'Grafana', 'Tableau'],
        deliverables: [
          {
            type: 'prototype',
            description: 'Interactive data visualization prototypes',
            qualityScore: 95,
            userScore: 0
          },
          {
            type: 'mockup',
            description: 'High-fidelity dashboard mockups',
            qualityScore: 88,
            userScore: 0
          }
        ]
      },
      {
        id: 'interaction',
        name: 'Interaction Design',
        description: 'Design complex interactions for data manipulation',
        tools: ['Framer', 'Principle', 'After Effects'],
        deliverables: [
          {
            type: 'prototype',
            description: 'Advanced interaction prototypes with micro-animations',
            qualityScore: 90,
            userScore: 0
          }
        ]
      }
    ],
    successCriteria: {
      minUsability: 85,
      minAccessibility: 90,
      minInnovation: 80,
      maxComplexity: 70
    },
    points: 50
  }
];

export default function UXDesignStudio3DGame({
  onComplete,
  timeLeft,
  onRestart
}: UXDesignStudio3DGameProps) {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [currentDeliverable, setCurrentDeliverable] = useState(0);
  const [designMetrics, setDesignMetrics] = useState({
    usability: 60,
    accessibility: 60,
    innovation: 60,
    complexity: 40
  });
  const [completedDeliverables, setCompletedDeliverables] = useState<string[]>([]);
  const [showDesignResult, setShowDesignResult] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [designLevel, setDesignLevel] = useState(1);
  const [gameComplete, setGameComplete] = useState(false);

  const currentProjectData = designProjects[currentProject];
  const currentPhaseData = currentProjectData?.designPhases[currentPhase];
  const currentDeliverableData = currentPhaseData?.deliverables[currentDeliverable];

  const handleDeliverableComplete = useCallback((quality: number) => {
    if (!currentDeliverableData || showDesignResult) return;

    // Update metrics based on deliverable quality
    const improvement = Math.floor(quality / 10);
    setDesignMetrics(prev => ({
      usability: Math.min(100, prev.usability + improvement),
      accessibility: Math.min(100, prev.accessibility + improvement * 0.8),
      innovation: Math.min(100, prev.innovation + improvement * 1.2),
      complexity: Math.max(0, prev.complexity - improvement * 0.5)
    }));

    // Mark deliverable as completed
    const deliverableId = `${currentProject}-${currentPhase}-${currentDeliverable}`;
    setCompletedDeliverables(prev => [...prev, deliverableId]);

    // Add score based on quality
    const deliverableScore = Math.round((quality / 100) * 15);
    setTotalScore(prev => prev + deliverableScore);

    // Increase design level for high-quality work
    if (quality >= 85) {
      setDesignLevel(prev => Math.min(10, prev + 1));
    }

    setShowDesignResult(true);

    setTimeout(() => {
      setShowDesignResult(false);
      
      // Progress to next deliverable/phase/project
      if (currentDeliverable < currentPhaseData.deliverables.length - 1) {
        setCurrentDeliverable(prev => prev + 1);
      } else if (currentPhase < currentProjectData.designPhases.length - 1) {
        setCurrentPhase(prev => prev + 1);
        setCurrentDeliverable(0);
      } else {
        // Project complete
        evaluateProjectSuccess();
      }
    }, 3000);
  }, [currentProject, currentPhase, currentDeliverable, currentProjectData, currentPhaseData, showDesignResult]);

  const evaluateProjectSuccess = useCallback(() => {
    const projectSuccess = 
      designMetrics.usability >= currentProjectData.successCriteria.minUsability &&
      designMetrics.accessibility >= currentProjectData.successCriteria.minAccessibility &&
      designMetrics.innovation >= currentProjectData.successCriteria.minInnovation &&
      designMetrics.complexity <= currentProjectData.successCriteria.maxComplexity;

    const projectScore = projectSuccess ? currentProjectData.points : Math.floor(currentProjectData.points * 0.6);
    setTotalScore(prev => prev + projectScore);

    if (currentProject < designProjects.length - 1) {
      setCurrentProject(prev => prev + 1);
      setCurrentPhase(0);
      setCurrentDeliverable(0);
      setDesignMetrics({
        usability: 60,
        accessibility: 60,
        innovation: 60,
        complexity: 40
      });
    } else {
      setGameComplete(true);
      const finalScore = Math.max(0, Math.min(100, (totalScore / 150) * 100));
      onComplete(finalScore > 60, finalScore);
    }
  }, [currentProject, currentProjectData, designMetrics, totalScore, onComplete]);

  useEffect(() => {
    if (timeLeft <= 0 && !gameComplete) {
      const finalScore = Math.max(0, (totalScore / 150) * 100);
      onComplete(finalScore > 60, finalScore);
    }
  }, [timeLeft, gameComplete, totalScore, onComplete]);

  if (gameComplete) {
    const finalScore = Math.max(0, Math.min(100, (totalScore / 150) * 100));

    return (
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-pink-900 via-purple-900 to-blue-900 text-white rounded-xl">
        <div className="text-center mb-8">
          <Palette className="w-16 h-16 mx-auto mb-4 text-pink-400" />
          <h2 className="text-3xl font-bold mb-2">Design Studio Portfolio Complete</h2>
          <div className="text-6xl font-bold text-pink-400 mb-4">
            {Math.round(finalScore)}%
          </div>
          <p className="text-xl mb-6">
            Design Level: {designLevel}/10
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-pink-300">Design Achievements:</h3>
            <div className="space-y-2 text-sm">
              {finalScore >= 90 && <div className="text-green-300">• UX Design Master - Exceptional user experience</div>}
              {designLevel >= 8 && <div className="text-blue-300">• Innovation Leader - Creative problem solving</div>}
              {completedDeliverables.length >= 12 && <div className="text-purple-300">• Production Pro - High output quality</div>}
              {finalScore >= 70 && <div className="text-yellow-300">• Design Excellence - Professional standards</div>}
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-purple-300">Final Design Metrics:</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Usability:</span>
                <div className="flex items-center">
                  <div className="w-20 bg-gray-700 rounded-full h-2 mr-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${designMetrics.usability}%` }}
                    />
                  </div>
                  <span className="text-sm">{designMetrics.usability}%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Accessibility:</span>
                <div className="flex items-center">
                  <div className="w-20 bg-gray-700 rounded-full h-2 mr-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${designMetrics.accessibility}%` }}
                    />
                  </div>
                  <span className="text-sm">{designMetrics.accessibility}%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Innovation:</span>
                <div className="flex items-center">
                  <div className="w-20 bg-gray-700 rounded-full h-2 mr-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: `${designMetrics.innovation}%` }}
                    />
                  </div>
                  <span className="text-sm">{designMetrics.innovation}%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Complexity:</span>
                <div className="flex items-center">
                  <div className="w-20 bg-gray-700 rounded-full h-2 mr-2">
                    <div 
                      className="bg-red-500 h-2 rounded-full"
                      style={{ width: `${100 - designMetrics.complexity}%` }}
                    />
                  </div>
                  <span className="text-sm">{100 - designMetrics.complexity}% Simplified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={onRestart}
            className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-medium transition-colors"
          >
            <Palette className="w-4 h-4 inline mr-2" />
            New Project
          </button>
          <button
            onClick={() => onComplete(true, finalScore)}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
          >
            <CheckCircle className="w-4 h-4 inline mr-2" />
            Complete Portfolio
          </button>
        </div>
      </div>
    );
  }

  if (!currentProjectData || !currentPhaseData || !currentDeliverableData) {
    return (
      <div className="text-center p-8">
        <div className="text-red-400">Error loading design project data</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-pink-900 via-purple-900 to-blue-900 text-white rounded-xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Palette className="w-8 h-8 mr-3 text-pink-400" />
          <div>
            <h2 className="text-2xl font-bold">UX Design Studio 3D</h2>
            <p className="text-pink-300">
              Project {currentProject + 1}/{designProjects.length}: {currentProjectData.title}
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-pink-400">{totalScore} pts</div>
          <div className="text-sm text-gray-300 flex items-center">
            <Star className="w-4 h-4 mr-1" />
            Design Level: {designLevel}/10
          </div>
          <div className="text-sm text-gray-300">⏱️ {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white/20 rounded-full h-2 mb-6">
        <div 
          className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-300"
          style={{ 
            width: `${((currentProject + (currentPhase + 1) / currentProjectData.designPhases.length) / designProjects.length) * 100}%` 
          }}
        />
      </div>

      {/* Project Brief */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          <div className="text-3xl mr-4">
            {currentProjectData.category === 'web' && '🌐'}
            {currentProjectData.category === 'mobile' && '📱'}
            {currentProjectData.category === 'ar/vr' && '🥽'}
            {currentProjectData.category === 'iot' && '🔗'}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-yellow-300">
              {currentProjectData.client}
            </h3>
            <p className="text-gray-200">{currentProjectData.briefing}</p>
          </div>
        </div>
      </div>

      {/* Design Metrics Dashboard */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4 text-blue-300">Current Design Metrics:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{designMetrics.usability}%</div>
            <div className="text-sm text-gray-300">Usability</div>
            <div className="w-full bg-gray-700 rounded-full h-1 mt-1">
              <div 
                className="bg-green-500 h-1 rounded-full transition-all"
                style={{ width: `${designMetrics.usability}%` }}
              />
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{designMetrics.accessibility}%</div>
            <div className="text-sm text-gray-300">Accessibility</div>
            <div className="w-full bg-gray-700 rounded-full h-1 mt-1">
              <div 
                className="bg-blue-500 h-1 rounded-full transition-all"
                style={{ width: `${designMetrics.accessibility}%` }}
              />
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{designMetrics.innovation}%</div>
            <div className="text-sm text-gray-300">Innovation</div>
            <div className="w-full bg-gray-700 rounded-full h-1 mt-1">
              <div 
                className="bg-purple-500 h-1 rounded-full transition-all"
                style={{ width: `${designMetrics.innovation}%` }}
              />
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-400">{designMetrics.complexity}%</div>
            <div className="text-sm text-gray-300">Complexity</div>
            <div className="w-full bg-gray-700 rounded-full h-1 mt-1">
              <div 
                className="bg-red-500 h-1 rounded-full transition-all"
                style={{ width: `${designMetrics.complexity}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Current Phase */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-green-300 flex items-center">
          <Monitor className="w-5 h-5 mr-2" />
          Phase: {currentPhaseData.name}
        </h4>
        <p className="text-gray-200 mb-4">{currentPhaseData.description}</p>
        <div className="mb-4">
          <h5 className="font-medium text-yellow-300 mb-2">Available Tools:</h5>
          <div className="flex flex-wrap gap-2">
            {currentPhaseData.tools.map((tool, index) => (
              <span key={index} className="px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full text-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Current Deliverable */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-purple-300 flex items-center">
          <Layers className="w-5 h-5 mr-2" />
          Deliverable: {currentDeliverableData.type.replace('-', ' ').toUpperCase()}
        </h4>
        <p className="text-gray-200 mb-6">{currentDeliverableData.description}</p>

        {/* Quality Options */}
        <div className="grid gap-4">
          <button
            onClick={() => handleDeliverableComplete(95)}
            disabled={showDesignResult}
            className={`p-4 text-left rounded-lg border-2 transition-all ${
              showDesignResult 
                ? 'opacity-50 cursor-not-allowed border-gray-600 bg-white/5' 
                : 'border-gray-600 bg-white/5 hover:bg-white/10 hover:border-green-500 cursor-pointer'
            }`}
          >
            <div className="font-medium text-green-300 mb-2">Exceptional Quality (95%)</div>
            <div className="text-sm text-gray-300">
              • Exceeds expectations with innovative solutions
              • Perfect accessibility and usability standards
              • Advanced interactions and micro-animations
            </div>
          </button>
          
          <button
            onClick={() => handleDeliverableComplete(80)}
            disabled={showDesignResult}
            className={`p-4 text-left rounded-lg border-2 transition-all ${
              showDesignResult 
                ? 'opacity-50 cursor-not-allowed border-gray-600 bg-white/5' 
                : 'border-gray-600 bg-white/5 hover:bg-white/10 hover:border-blue-500 cursor-pointer'
            }`}
          >
            <div className="font-medium text-blue-300 mb-2">Professional Quality (80%)</div>
            <div className="text-sm text-gray-300">
              • Meets all requirements with good execution
              • Standard accessibility compliance
              • Clean and functional design
            </div>
          </button>

          <button
            onClick={() => handleDeliverableComplete(65)}
            disabled={showDesignResult}
            className={`p-4 text-left rounded-lg border-2 transition-all ${
              showDesignResult 
                ? 'opacity-50 cursor-not-allowed border-gray-600 bg-white/5' 
                : 'border-gray-600 bg-white/5 hover:bg-white/10 hover:border-yellow-500 cursor-pointer'
            }`}
          >
            <div className="font-medium text-yellow-300 mb-2">Basic Quality (65%)</div>
            <div className="text-sm text-gray-300">
              • Fulfills core requirements
              • Some accessibility considerations
              • Functional but minimal innovation
            </div>
          </button>
        </div>
      </div>

      {/* Design Result */}
      {showDesignResult && (
        <div className="bg-gradient-to-r from-green-900/50 to-purple-900/50 rounded-lg p-6 mb-6 border border-green-500">
          <h4 className="font-semibold text-green-300 mb-3 flex items-center">
            <Eye className="w-5 h-5 mr-2" />
            Design Deliverable Complete!
          </h4>
          <p className="text-gray-200 mb-4">
            Your {currentDeliverableData.type} has been added to the project deliverables.
          </p>
          <div className="bg-white/10 rounded-lg p-3">
            <div className="text-sm text-center text-gray-300">
              Processing design impact... 
              <span className="animate-pulse ml-2">🎨</span>
            </div>
          </div>
        </div>
      )}

      {/* Requirements & Constraints */}
      <div className="bg-white/10 rounded-lg p-4 mb-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-semibold text-green-300 mb-2 flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              Requirements:
            </h4>
            <ul className="text-xs space-y-1">
              {currentProjectData.requirements.slice(0, 3).map((req, index) => (
                <li key={index} className="text-gray-300">• {req}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-red-300 mb-2 flex items-center">
              <MousePointer className="w-4 h-4 mr-1" />
              Constraints:
            </h4>
            <ul className="text-xs space-y-1">
              {currentProjectData.constraints.slice(0, 3).map((constraint, index) => (
                <li key={index} className="text-gray-300">• {constraint}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Progress Info */}
      <div className="text-center text-sm text-gray-400">
        Deliverable {currentDeliverable + 1}/{currentPhaseData.deliverables.length} in {currentPhaseData.name}
      </div>
    </div>
  );
}