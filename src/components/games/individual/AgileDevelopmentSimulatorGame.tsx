'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { Code, Zap, Monitor, CheckCircle, Star, Target, GitBranch, Play } from 'lucide-react';

interface AgileDevelopmentSimulatorGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface Sprint {
  id: string;
  title: string;
  description: string;
  duration: number; // in days
  userStories: UserStory[];
  challenges: string[];
  points: number;
}

interface UserStory {
  id: string;
  title: string;
  description: string;
  storyPoints: number;
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'backlog' | 'in-progress' | 'testing' | 'done';
}

const sprints: Sprint[] = [
  {
    id: 'sprint-1',
    title: 'Sprint 1: User Authentication',
    description: 'Implement user login and registration system',
    duration: 14,
    userStories: [
      {
        id: 'auth-001',
        title: 'User Registration',
        description: 'As a user, I want to create an account',
        storyPoints: 5,
        priority: 'critical',
        status: 'backlog'
      },
      {
        id: 'auth-002',
        title: 'User Login',
        description: 'As a user, I want to log into my account',
        storyPoints: 3,
        priority: 'critical',
        status: 'backlog'
      },
      {
        id: 'auth-003',
        title: 'Password Reset',
        description: 'As a user, I want to reset my password',
        storyPoints: 3,
        priority: 'high',
        status: 'backlog'
      },
      {
        id: 'auth-004',
        title: 'Profile Management',
        description: 'As a user, I want to manage my profile',
        storyPoints: 2,
        priority: 'medium',
        status: 'backlog'
      }
    ],
    challenges: ['Security implementation', 'Database design', 'Testing coverage'],
    points: 25
  },
  {
    id: 'sprint-2',
    title: 'Sprint 2: Core Features',
    description: 'Build main application features',
    duration: 14,
    userStories: [
      {
        id: 'core-001',
        title: 'Dashboard',
        description: 'As a user, I want to see my dashboard',
        storyPoints: 8,
        priority: 'critical',
        status: 'backlog'
      },
      {
        id: 'core-002',
        title: 'Data Export',
        description: 'As a user, I want to export my data',
        storyPoints: 5,
        priority: 'high',
        status: 'backlog'
      },
      {
        id: 'core-003',
        title: 'Search Feature',
        description: 'As a user, I want to search content',
        storyPoints: 5,
        priority: 'medium',
        status: 'backlog'
      },
      {
        id: 'core-004',
        title: 'Notifications',
        description: 'As a user, I want to receive notifications',
        storyPoints: 3,
        priority: 'low',
        status: 'backlog'
      }
    ],
    challenges: ['Complex UI/UX', 'Performance optimization', 'API integration'],
    points: 35
  },
  {
    id: 'sprint-3',
    title: 'Sprint 3: Advanced Features',
    description: 'Implement advanced functionality and optimizations',
    duration: 14,
    userStories: [
      {
        id: 'adv-001',
        title: 'Real-time Updates',
        description: 'As a user, I want real-time data updates',
        storyPoints: 8,
        priority: 'high',
        status: 'backlog'
      },
      {
        id: 'adv-002',
        title: 'Mobile App',
        description: 'As a user, I want a mobile application',
        storyPoints: 13,
        priority: 'medium',
        status: 'backlog'
      },
      {
        id: 'adv-003',
        title: 'Analytics Dashboard',
        description: 'As an admin, I want to see analytics',
        storyPoints: 8,
        priority: 'medium',
        status: 'backlog'
      }
    ],
    challenges: ['WebSocket implementation', 'Cross-platform compatibility', 'Data visualization'],
    points: 45
  }
];

const agileEvents = [
  { name: 'Sprint Planning', description: 'Plan the sprint backlog', bonus: 5 },
  { name: 'Daily Standups', description: 'Daily progress meetings', bonus: 10 },
  { name: 'Sprint Review', description: 'Demo completed work', bonus: 8 },
  { name: 'Retrospective', description: 'Reflect and improve', bonus: 12 }
];

export default function AgileDevelopmentSimulatorGame({
  onComplete,
  timeLeft,
  onRestart
}: AgileDevelopmentSimulatorGameProps) {
  const [currentSprint, setCurrentSprint] = useState(0);
  const [userStories, setUserStories] = useState<UserStory[]>([]);
  const [selectedStories, setSelectedStories] = useState<string[]>([]);
  const [completedEvents, setCompletedEvents] = useState<string[]>([]);
  const [sprintStarted, setSprintStarted] = useState(false);
  const [sprintComplete, setSprintComplete] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [teamMorale, setTeamMorale] = useState(75);
  const [gameComplete, setGameComplete] = useState(false);

  const currentSprintData = sprints[currentSprint];

  useEffect(() => {
    if (currentSprintData) {
      setUserStories(currentSprintData.userStories.map(story => ({ ...story })));
    }
  }, [currentSprintData]);

  const handleStoryToggle = useCallback((storyId: string) => {
    if (sprintStarted) return;
    setSelectedStories(prev => 
      prev.includes(storyId) 
        ? prev.filter(id => id !== storyId)
        : [...prev, storyId]
    );
  }, [sprintStarted]);

  const handleEventToggle = useCallback((eventName: string) => {
    if (sprintComplete) return;
    setCompletedEvents(prev => 
      prev.includes(eventName) 
        ? prev.filter(name => name !== eventName)
        : [...prev, eventName]
    );
  }, [sprintComplete]);

  const calculateStoryPoints = useCallback(() => {
    return selectedStories.reduce((total, storyId) => {
      const story = userStories.find(s => s.id === storyId);
      return total + (story?.storyPoints || 0);
    }, 0);
  }, [selectedStories, userStories]);

  const handleStartSprint = useCallback(() => {
    if (selectedStories.length === 0) return;
    setSprintStarted(true);
    
    // Simulate sprint progress
    setTimeout(() => {
      // Update story statuses based on complexity and team capacity
      const updatedStories = userStories.map(story => {
        if (selectedStories.includes(story.id)) {
          // Higher story points have higher chance of delays
          const completionChance = Math.max(0.6, 1 - (story.storyPoints / 15));
          const random = Math.random();
          
          if (random < completionChance) {
            return { ...story, status: 'done' as const };
          } else if (random < completionChance + 0.2) {
            return { ...story, status: 'testing' as const };
          } else {
            return { ...story, status: 'in-progress' as const };
          }
        }
        return story;
      });
      
      setUserStories(updatedStories);
      setSprintComplete(true);
      
      // Calculate sprint results
      const completedStories = updatedStories.filter(story => 
        selectedStories.includes(story.id) && story.status === 'done'
      );
      const completedPoints = completedStories.reduce((sum, story) => sum + story.storyPoints, 0);
      
      // Calculate bonuses
      const eventBonus = completedEvents.reduce((sum, eventName) => {
        const event = agileEvents.find(e => e.name === eventName);
        return sum + (event?.bonus || 0);
      }, 0);
      
      const sprintScore = currentSprintData.points + eventBonus + (completedPoints * 5);
      setTotalScore(prev => prev + sprintScore);
      setVelocity(completedPoints);
      
      // Adjust team morale based on performance
      const targetPoints = selectedStories.reduce((sum, storyId) => {
        const story = userStories.find(s => s.id === storyId);
        return sum + (story?.storyPoints || 0);
      }, 0);
      
      const completionRate = completedPoints / targetPoints;
      const moraleChange = completionRate >= 0.8 ? 10 : completionRate >= 0.6 ? 5 : -5;
      setTeamMorale(prev => Math.max(0, Math.min(100, prev + moraleChange)));
      
    }, 3000);
  }, [selectedStories, userStories, completedEvents, currentSprintData]);

  const handleNextSprint = useCallback(() => {
    if (currentSprint < sprints.length - 1) {
      setCurrentSprint(prev => prev + 1);
      setSelectedStories([]);
      setCompletedEvents([]);
      setSprintStarted(false);
      setSprintComplete(false);
    } else {
      setGameComplete(true);
      const finalScore = Math.max(0, Math.min(100, (totalScore / 300) * 100));
      onComplete(totalScore > 0, finalScore);
    }
  }, [currentSprint, totalScore, onComplete]);

  useEffect(() => {
    if (timeLeft <= 0 && !gameComplete) {
      const finalScore = Math.max(0, (totalScore / 300) * 100);
      onComplete(totalScore > 0, finalScore);
    }
  }, [timeLeft, gameComplete, totalScore, onComplete]);

  if (gameComplete) {
    const finalScore = Math.max(0, Math.min(100, (totalScore / 300) * 100));

    return (
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white rounded-xl">
        <div className="text-center mb-8">
          <Code className="w-16 h-16 mx-auto mb-4 text-green-400" />
          <h2 className="text-3xl font-bold mb-2">Agile Project Complete</h2>
          <div className="text-6xl font-bold text-green-400 mb-4">
            {Math.round(finalScore)}%
          </div>
          <p className="text-xl mb-6">
            Total Score: {totalScore} | Final Velocity: {velocity} | Team Morale: {teamMorale}%
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Star className="w-5 h-5 mr-2 text-green-400" />
              Agile Achievements
            </h3>
            <ul className="space-y-2 text-sm">
              {finalScore >= 80 && <li>• Agile Master - Exceptional project delivery</li>}
              {teamMorale >= 80 && <li>• Team Leader - High team motivation</li>}
              {velocity >= 20 && <li>• High Velocity - Efficient story completion</li>}
              {totalScore >= 200 && <li>• Process Expert - Great event execution</li>}
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Target className="w-5 h-5 mr-2 text-blue-400" />
              Growth Opportunities
            </h3>
            <ul className="space-y-2 text-sm">
              {finalScore < 80 && <li>• Study advanced agile practices</li>}
              {teamMorale < 70 && <li>• Focus on team building and communication</li>}
              {velocity < 15 && <li>• Learn better estimation techniques</li>}
              <li>• Explore DevOps and continuous delivery</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={onRestart}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
          >
            <GitBranch className="w-4 h-4 inline mr-2" />
            Start New Project
          </button>
          <button
            onClick={() => onComplete(true, finalScore)}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            <CheckCircle className="w-4 h-4 inline mr-2" />
            Complete Project
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white rounded-xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Code className="w-8 h-8 mr-3 text-green-400" />
          <div>
            <h2 className="text-2xl font-bold">Agile Development Simulator</h2>
            <p className="text-blue-300">{currentSprintData.title}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-green-400">{totalScore} pts</div>
          <div className="text-sm text-gray-300 flex items-center">
            <Zap className="w-4 h-4 mr-1" />
            Velocity: {velocity} pts
          </div>
          <div className="text-sm text-gray-300 flex items-center">
            <Star className="w-4 h-4 mr-1" />
            Team Morale: {teamMorale}%
          </div>
          <div className="text-sm text-gray-300">⏱️ {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white/20 rounded-full h-2 mb-6">
        <div 
          className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentSprint + (sprintComplete ? 1 : 0)) / sprints.length) * 100}%` }}
        />
      </div>

      {/* Sprint Info */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold mb-3 text-yellow-300">
          {currentSprintData.title}
        </h3>
        <p className="text-gray-200 mb-4">{currentSprintData.description}</p>
        <div className="flex items-center space-x-6 mb-4">
          <div className="flex items-center">
            <Monitor className="w-4 h-4 mr-1 text-blue-300" />
            <span className="text-sm">Duration: {currentSprintData.duration} days</span>
          </div>
          <div className="flex items-center">
            <Target className="w-4 h-4 mr-1 text-green-300" />
            <span className="text-sm">Base Points: {currentSprintData.points}</span>
          </div>
        </div>

        {/* Challenges */}
        <div>
          <p className="text-sm text-gray-400 mb-2">Sprint Challenges:</p>
          <div className="flex flex-wrap gap-2">
            {currentSprintData.challenges.map((challenge) => (
              <span key={challenge} className="px-2 py-1 bg-red-900/50 text-red-300 rounded text-sm">
                {challenge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* User Stories */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-purple-300">
          User Stories - Select for Sprint ({calculateStoryPoints()} story points selected):
        </h4>
        <div className="grid gap-3">
          {userStories.map((story) => {
            const isSelected = selectedStories.includes(story.id);
            const priorityColor = {
              critical: 'border-red-500 bg-red-900/20',
              high: 'border-orange-500 bg-orange-900/20',
              medium: 'border-yellow-500 bg-yellow-900/20',
              low: 'border-green-500 bg-green-900/20'
            }[story.priority];

            const statusColor = {
              backlog: 'text-gray-400',
              'in-progress': 'text-yellow-400',
              testing: 'text-blue-400',
              done: 'text-green-400'
            }[story.status];

            return (
              <button
                key={story.id}
                onClick={() => handleStoryToggle(story.id)}
                disabled={sprintStarted}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  isSelected
                    ? 'border-purple-500 bg-purple-900/30'
                    : `border-gray-600 bg-white/5 hover:bg-white/10 ${priorityColor}`
                } ${sprintStarted ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h5 className="font-semibold">{story.title}</h5>
                      <span className="ml-2 px-2 py-1 bg-gray-700 text-xs rounded">
                        {story.priority.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 mb-2">{story.description}</p>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-blue-300">Points: {story.storyPoints}</span>
                      <span className={`text-sm ${statusColor}`}>Status: {story.status}</span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Agile Events */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-green-300">Agile Events (Bonus Points):</h4>
        <div className="grid grid-cols-2 gap-3">
          {agileEvents.map((event) => (
            <button
              key={event.name}
              onClick={() => handleEventToggle(event.name)}
              disabled={sprintComplete}
              className={`p-3 rounded-lg border-2 text-left transition-all ${
                completedEvents.includes(event.name)
                  ? 'border-green-500 bg-green-900/30'
                  : 'border-gray-600 bg-white/5 hover:bg-white/10'
              } ${sprintComplete ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h5 className="font-semibold text-sm">{event.name}</h5>
                  <p className="text-xs text-gray-300">{event.description}</p>
                </div>
                <span className="text-xs text-yellow-300">+{event.bonus}pt</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        {!sprintStarted ? (
          <button
            onClick={handleStartSprint}
            disabled={selectedStories.length === 0}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              selectedStories.length > 0
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            <Play className="w-4 h-4 inline mr-2" />
            Start Sprint
          </button>
        ) : !sprintComplete ? (
          <div className="px-6 py-3 bg-yellow-600 text-white rounded-lg font-medium">
            <Zap className="w-4 h-4 inline mr-2 animate-pulse" />
            Sprint in Progress...
          </div>
        ) : (
          <button
            onClick={handleNextSprint}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            {currentSprint < sprints.length - 1 ? (
              <>
                <GitBranch className="w-4 h-4 inline mr-2" />
                Next Sprint
              </>
            ) : (
              <>
                <CheckCircle className="w-4 h-4 inline mr-2" />
                Complete Project
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}