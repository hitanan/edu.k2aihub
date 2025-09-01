import React, { useState, useEffect } from 'react';
import { Gamepad2, Music, Users, Target, Play, RotateCcw, Award, Settings, Layers, Zap, Star } from 'lucide-react';

interface GameDesignStudio3DProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface GameElement {
  id: string;
  name: string;
  type: 'character' | 'environment' | 'mechanic' | 'story' | 'audio' | 'ui';
  complexity: number; // 1-10
  timeRequired: number; // seconds
  cost: number; // development points
  impact: {
    gameplay: number;
    visuals: number;
    audio: number;
    story: number;
  };
  icon: React.ReactNode;
  description: string;
}

interface GameProject {
  name: string;
  genre: string;
  targetAudience: string;
  platform: string;
  elements: GameElement[];
  totalScore: number;
  completionTime: number;
}

const GameDesignStudio3DGame: React.FC<GameDesignStudio3DProps> = ({ onComplete, timeLeft, onRestart }) => {
  // Game state
  const [gamePhase, setGamePhase] = useState<'setup' | 'designing' | 'testing' | 'results'>('setup');
  const [isStarted, setIsStarted] = useState(false);
  const [score, setScore] = useState(0);

  // Design state
  const [budget, setBudget] = useState(1000); // Development points
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [selectedAudience, setSelectedAudience] = useState<string>('');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');
  const [gameElements, setGameElements] = useState<GameElement[]>([]);
  const [selectedElement, setSelectedElement] = useState<GameElement | null>(null);

  // Project tracking
  const [currentProject, setCurrentProject] = useState<GameProject | null>(null);

  // Auto-initialize to prevent white screen
  useEffect(() => {
    if (!selectedGenre && !selectedAudience && !selectedPlatform) {
      // Auto-select first options to prevent blank state
      setSelectedGenre('action');
      setSelectedAudience('teens');
      setSelectedPlatform('pc');
    }
  }, [selectedGenre, selectedAudience, selectedPlatform]);

  // Available game elements
  const availableElements: GameElement[] = [
    // Characters
    {
      id: 'hero-character',
      name: 'Hero Character',
      type: 'character',
      complexity: 8,
      timeRequired: 15,
      cost: 200,
      impact: { gameplay: 9, visuals: 8, audio: 3, story: 9 },
      icon: <Users className="w-5 h-5" />,
      description: 'Main protagonist with unique abilities and backstory',
    },
    {
      id: 'npc-villagers',
      name: 'NPC Villagers',
      type: 'character',
      complexity: 5,
      timeRequired: 10,
      cost: 120,
      impact: { gameplay: 6, visuals: 6, audio: 2, story: 7 },
      icon: <Users className="w-5 h-5" />,
      description: 'Interactive non-player characters for world building',
    },
    {
      id: 'boss-enemy',
      name: 'Boss Enemy',
      type: 'character',
      complexity: 9,
      timeRequired: 20,
      cost: 250,
      impact: { gameplay: 10, visuals: 9, audio: 4, story: 6 },
      icon: <Users className="w-5 h-5" />,
      description: 'Challenging boss with complex AI and attack patterns',
    },

    // Environments
    {
      id: 'fantasy-world',
      name: 'Fantasy World',
      type: 'environment',
      complexity: 7,
      timeRequired: 12,
      cost: 180,
      impact: { gameplay: 5, visuals: 10, audio: 6, story: 8 },
      icon: <Layers className="w-5 h-5" />,
      description: 'Immersive 3D fantasy environment with multiple biomes',
    },
    {
      id: 'space-station',
      name: 'Space Station',
      type: 'environment',
      complexity: 8,
      timeRequired: 15,
      cost: 220,
      impact: { gameplay: 6, visuals: 9, audio: 5, story: 7 },
      icon: <Layers className="w-5 h-5" />,
      description: 'Futuristic space station with zero-gravity mechanics',
    },
    {
      id: 'dungeon-levels',
      name: 'Dungeon Levels',
      type: 'environment',
      complexity: 6,
      timeRequired: 10,
      cost: 150,
      impact: { gameplay: 8, visuals: 7, audio: 4, story: 5 },
      icon: <Layers className="w-5 h-5" />,
      description: 'Multi-level dungeons with puzzles and secrets',
    },

    // Mechanics
    {
      id: 'combat-system',
      name: 'Combat System',
      type: 'mechanic',
      complexity: 9,
      timeRequired: 18,
      cost: 280,
      impact: { gameplay: 10, visuals: 6, audio: 7, story: 3 },
      icon: <Zap className="w-5 h-5" />,
      description: 'Dynamic real-time combat with combos and special moves',
    },
    {
      id: 'puzzle-mechanics',
      name: 'Puzzle Mechanics',
      type: 'mechanic',
      complexity: 6,
      timeRequired: 12,
      cost: 160,
      impact: { gameplay: 8, visuals: 4, audio: 3, story: 6 },
      icon: <Settings className="w-5 h-5" />,
      description: 'Brain-teasing puzzles that unlock new areas',
    },
    {
      id: 'magic-system',
      name: 'Magic System',
      type: 'mechanic',
      complexity: 8,
      timeRequired: 16,
      cost: 240,
      impact: { gameplay: 9, visuals: 8, audio: 6, story: 7 },
      icon: <Star className="w-5 h-5" />,
      description: 'Spell-casting system with elemental combinations',
    },

    // Story
    {
      id: 'main-quest',
      name: 'Main Quest Line',
      type: 'story',
      complexity: 7,
      timeRequired: 14,
      cost: 200,
      impact: { gameplay: 7, visuals: 3, audio: 5, story: 10 },
      icon: <Target className="w-5 h-5" />,
      description: 'Epic storyline with multiple chapters and plot twists',
    },
    {
      id: 'side-quests',
      name: 'Side Quests',
      type: 'story',
      complexity: 5,
      timeRequired: 8,
      cost: 120,
      impact: { gameplay: 6, visuals: 2, audio: 3, story: 8 },
      icon: <Target className="w-5 h-5" />,
      description: 'Optional missions that expand the world lore',
    },

    // Audio
    {
      id: 'orchestral-soundtrack',
      name: 'Orchestral Soundtrack',
      type: 'audio',
      complexity: 6,
      timeRequired: 10,
      cost: 150,
      impact: { gameplay: 4, visuals: 2, audio: 10, story: 8 },
      icon: <Music className="w-5 h-5" />,
      description: 'Epic orchestral music that adapts to gameplay',
    },
    {
      id: 'voice-acting',
      name: 'Professional Voice Acting',
      type: 'audio',
      complexity: 7,
      timeRequired: 12,
      cost: 180,
      impact: { gameplay: 5, visuals: 1, audio: 9, story: 9 },
      icon: <Music className="w-5 h-5" />,
      description: 'High-quality voice performances for all characters',
    },
    {
      id: 'sound-effects',
      name: '3D Sound Effects',
      type: 'audio',
      complexity: 5,
      timeRequired: 8,
      cost: 100,
      impact: { gameplay: 6, visuals: 2, audio: 8, story: 2 },
      icon: <Music className="w-5 h-5" />,
      description: 'Immersive 3D positional audio effects',
    },

    // UI
    {
      id: 'hud-interface',
      name: 'HUD Interface',
      type: 'ui',
      complexity: 4,
      timeRequired: 6,
      cost: 80,
      impact: { gameplay: 7, visuals: 6, audio: 1, story: 1 },
      icon: <Settings className="w-5 h-5" />,
      description: 'Clean, intuitive heads-up display',
    },
    {
      id: 'menu-system',
      name: 'Advanced Menu System',
      type: 'ui',
      complexity: 5,
      timeRequired: 8,
      cost: 100,
      impact: { gameplay: 5, visuals: 7, audio: 2, story: 2 },
      icon: <Settings className="w-5 h-5" />,
      description: 'Comprehensive settings and inventory management',
    },
  ];

  // Game genres
  const gameGenres = [
    { id: 'rpg', name: 'RPG', description: 'Role-Playing Game with character progression' },
    { id: 'action', name: 'Action', description: 'Fast-paced action and combat' },
    { id: 'adventure', name: 'Adventure', description: 'Story-driven exploration' },
    { id: 'puzzle', name: 'Puzzle', description: 'Brain-teasing challenges' },
    { id: 'strategy', name: 'Strategy', description: 'Tactical planning and resource management' },
  ];

  // Target audiences
  const targetAudiences = [
    { id: 'casual', name: 'Casual Gamers', description: 'Easy to learn, fun for everyone' },
    { id: 'hardcore', name: 'Hardcore Gamers', description: 'Complex mechanics, high challenge' },
    { id: 'family', name: 'Family Friendly', description: 'Suitable for all ages' },
    { id: 'competitive', name: 'Competitive Players', description: 'Multiplayer focused, skill-based' },
  ];

  // Platforms
  const platforms = [
    { id: 'pc', name: 'PC', description: 'Windows, Mac, Linux desktop' },
    { id: 'console', name: 'Console', description: 'PlayStation, Xbox, Nintendo Switch' },
    { id: 'mobile', name: 'Mobile', description: 'iOS and Android devices' },
    { id: 'vr', name: 'VR', description: 'Virtual reality headsets' },
  ];

  // Add element to game
  const addElement = () => {
    if (!selectedElement || budget < selectedElement.cost) return;

    setGameElements((prev) => [...prev, selectedElement]);
    setBudget((prev) => prev - selectedElement.cost);
    setSelectedElement(null);
  };

  // Calculate game quality scores
  const calculateGameQuality = () => {
    if (!currentProject) return { overall: 0, breakdown: { gameplay: 0, visuals: 0, audio: 0, story: 0 } };

    const breakdown = gameElements.reduce(
      (acc, element) => {
        acc.gameplay += element.impact.gameplay;
        acc.visuals += element.impact.visuals;
        acc.audio += element.impact.audio;
        acc.story += element.impact.story;
        return acc;
      },
      { gameplay: 0, visuals: 0, audio: 0, story: 0 },
    );

    // Normalize scores (max theoretical per category is around 100)
    const normalizedBreakdown = {
      gameplay: Math.min(100, (breakdown.gameplay / gameElements.length) * 10),
      visuals: Math.min(100, (breakdown.visuals / gameElements.length) * 10),
      audio: Math.min(100, (breakdown.audio / gameElements.length) * 10),
      story: Math.min(100, (breakdown.story / gameElements.length) * 10),
    };

    const overall =
      (normalizedBreakdown.gameplay +
        normalizedBreakdown.visuals +
        normalizedBreakdown.audio +
        normalizedBreakdown.story) /
      4;

    return { overall, breakdown: normalizedBreakdown };
  };

  // Start game design
  const startDesign = () => {
    if (!selectedGenre || !selectedAudience || !selectedPlatform) return;

    const project: GameProject = {
      name: `${selectedGenre.toUpperCase()} Game`,
      genre: selectedGenre,
      targetAudience: selectedAudience,
      platform: selectedPlatform,
      elements: [],
      totalScore: 0,
      completionTime: 0,
    };

    setCurrentProject(project);
    setGamePhase('designing');
    setIsStarted(true);
  };

  // Move to testing phase
  const moveToTesting = () => {
    setGamePhase('testing');

    setTimeout(() => {
      const quality = calculateGameQuality();
      const timeBonus = timeLeft > 30 ? 200 : timeLeft > 10 ? 100 : 50;
      const budgetBonus = budget > 500 ? 150 : budget > 200 ? 100 : 50;
      const elementVarietyBonus = new Set(gameElements.map((e) => e.type)).size * 50;

      const finalScore = Math.max(
        0,
        Math.min(1000, quality.overall * 5 + timeBonus + budgetBonus + elementVarietyBonus),
      );

      setScore(finalScore);
      setGamePhase('results');

      setTimeout(() => {
        onComplete(true, finalScore);
      }, 3000);
    }, 4000);
  };

  // Render setup phase
  if (!isStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🎮</div>
            <h1 className="text-4xl font-bold text-white mb-4">Game Design Studio 3D</h1>
            <p className="text-xl text-purple-100 mb-8">Create your own 3D video game from concept to completion</p>
          </div>

          <div className="bg-black bg-opacity-30 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Target className="mr-3" />
              Design Process
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-lg font-semibold text-white mb-2">Concept Design</h3>
                <p className="text-purple-100">Choose genre, audience, and platform for your game</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">⚙️</div>
                <h3 className="text-lg font-semibold text-white mb-2">Development</h3>
                <p className="text-purple-100">Add characters, environments, mechanics, and features</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🧪</div>
                <h3 className="text-lg font-semibold text-white mb-2">Testing & Polish</h3>
                <p className="text-purple-100">Test gameplay and polish the final experience</p>
              </div>
            </div>
          </div>

          {/* Game Setup */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Genre Selection */}
            <div className="bg-black bg-opacity-30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Choose Genre</h3>
              <div className="space-y-3">
                {gameGenres.map((genre) => (
                  <div
                    key={genre.id}
                    onClick={() => setSelectedGenre(genre.id)}
                    className={`p-3 rounded-lg cursor-pointer transition-all ${
                      selectedGenre === genre.id
                        ? 'bg-purple-600 bg-opacity-50 border-2 border-purple-400'
                        : 'bg-white bg-opacity-10 hover:bg-opacity-20'
                    }`}
                  >
                    <h4 className="font-semibold text-white">{genre.name}</h4>
                    <p className="text-sm text-purple-100">{genre.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Audience Selection */}
            <div className="bg-black bg-opacity-30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Target Audience</h3>
              <div className="space-y-3">
                {targetAudiences.map((audience) => (
                  <div
                    key={audience.id}
                    onClick={() => setSelectedAudience(audience.id)}
                    className={`p-3 rounded-lg cursor-pointer transition-all ${
                      selectedAudience === audience.id
                        ? 'bg-pink-600 bg-opacity-50 border-2 border-pink-400'
                        : 'bg-white bg-opacity-10 hover:bg-opacity-20'
                    }`}
                  >
                    <h4 className="font-semibold text-white">{audience.name}</h4>
                    <p className="text-sm text-purple-100">{audience.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform Selection */}
            <div className="bg-black bg-opacity-30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Platform</h3>
              <div className="space-y-3">
                {platforms.map((platform) => (
                  <div
                    key={platform.id}
                    onClick={() => setSelectedPlatform(platform.id)}
                    className={`p-3 rounded-lg cursor-pointer transition-all ${
                      selectedPlatform === platform.id
                        ? 'bg-red-600 bg-opacity-50 border-2 border-red-400'
                        : 'bg-white bg-opacity-10 hover:bg-opacity-20'
                    }`}
                  >
                    <h4 className="font-semibold text-white">{platform.name}</h4>
                    <p className="text-sm text-purple-100">{platform.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={startDesign}
            disabled={!selectedGenre || !selectedAudience || !selectedPlatform}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center text-xl"
          >
            <Play className="mr-3" size={24} />
            Start Game Development
          </button>
        </div>
      </div>
    );
  }

  // Render designing phase
  if (gamePhase === 'designing') {
    const quality = calculateGameQuality();

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Development Dashboard */}
          <div className="bg-black bg-opacity-30 rounded-xl p-6 mb-6">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              <div className="text-center">
                <div className="text-xl font-bold text-white">{budget}</div>
                <div className="text-purple-100 text-sm">Dev Points</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">{gameElements.length}</div>
                <div className="text-purple-100 text-sm">Elements</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-400">{quality.overall.toFixed(0)}%</div>
                <div className="text-purple-100 text-sm">Quality</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-blue-400">{quality.breakdown.gameplay.toFixed(0)}</div>
                <div className="text-purple-100 text-sm">Gameplay</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-pink-400">{quality.breakdown.visuals.toFixed(0)}</div>
                <div className="text-purple-100 text-sm">Visuals</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-yellow-400">{quality.breakdown.audio.toFixed(0)}</div>
                <div className="text-purple-100 text-sm">Audio</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Available Elements */}
            <div className="bg-black bg-opacity-30 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Game Elements Library</h2>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {availableElements
                  .filter((element) => !gameElements.some((selected) => selected.id === element.id))
                  .map((element) => (
                    <div
                      key={element.id}
                      onClick={() => setSelectedElement(element)}
                      className={`p-4 rounded-lg cursor-pointer transition-all ${
                        selectedElement?.id === element.id
                          ? 'bg-purple-600 bg-opacity-50 border-2 border-purple-400'
                          : 'bg-white bg-opacity-10 hover:bg-opacity-20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-purple-400 mr-3">{element.icon}</div>
                          <div>
                            <h3 className="font-semibold text-white">{element.name}</h3>
                            <div className="text-sm text-purple-100 capitalize">{element.type}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-yellow-400 font-semibold">{element.cost} pts</div>
                          <div className="text-sm text-purple-100">Level {element.complexity}</div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {selectedElement && (
                <div className="mt-6 p-4 bg-purple-600 bg-opacity-20 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">{selectedElement.name}</h3>
                  <p className="text-purple-100 text-sm mb-4">{selectedElement.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-sm">
                      <div className="text-purple-100">Impact Scores:</div>
                      <div className="text-blue-400">Gameplay: {selectedElement.impact.gameplay}/10</div>
                      <div className="text-pink-400">Visuals: {selectedElement.impact.visuals}/10</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-purple-100">Development:</div>
                      <div className="text-yellow-400">Cost: {selectedElement.cost} points</div>
                      <div className="text-green-400">Time: {selectedElement.timeRequired}s</div>
                    </div>
                  </div>

                  <button
                    onClick={addElement}
                    disabled={budget < selectedElement.cost}
                    className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white rounded font-semibold transition-all"
                  >
                    Add to Game ({selectedElement.cost} pts)
                  </button>
                </div>
              )}
            </div>

            {/* Current Game */}
            <div className="bg-black bg-opacity-30 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Your Game Project</h2>

              {currentProject && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{currentProject.name}</h3>
                  <div className="text-purple-100 text-sm space-y-1">
                    <div>
                      Genre: <span className="text-white capitalize">{currentProject.genre}</span>
                    </div>
                    <div>
                      Audience: <span className="text-white capitalize">{currentProject.targetAudience}</span>
                    </div>
                    <div>
                      Platform: <span className="text-white capitalize">{currentProject.platform}</span>
                    </div>
                  </div>
                </div>
              )}

              {gameElements.length === 0 ? (
                <div className="text-center text-purple-100 py-8">
                  <Gamepad2 size={48} className="mx-auto mb-4 opacity-50" />
                  <p>No elements added yet. Start building your game!</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-80 overflow-y-auto mb-6">
                  {gameElements.map((element, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-white bg-opacity-10 rounded-lg p-3"
                    >
                      <div className="flex items-center">
                        <div className="text-purple-400 mr-3">{element.icon}</div>
                        <div>
                          <h4 className="font-semibold text-white text-sm">{element.name}</h4>
                          <div className="text-xs text-purple-100 capitalize">{element.type}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-yellow-400 text-sm">{element.cost} pts</div>
                        <div className="text-xs text-purple-100">Level {element.complexity}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white bg-opacity-10 rounded-lg">
                    <div className="text-lg font-bold text-blue-400">{quality.breakdown.gameplay.toFixed(0)}</div>
                    <div className="text-sm text-purple-100">Gameplay</div>
                  </div>
                  <div className="text-center p-3 bg-white bg-opacity-10 rounded-lg">
                    <div className="text-lg font-bold text-pink-400">{quality.breakdown.visuals.toFixed(0)}</div>
                    <div className="text-sm text-purple-100">Visuals</div>
                  </div>
                  <div className="text-center p-3 bg-white bg-opacity-10 rounded-lg">
                    <div className="text-lg font-bold text-yellow-400">{quality.breakdown.audio.toFixed(0)}</div>
                    <div className="text-sm text-purple-100">Audio</div>
                  </div>
                  <div className="text-center p-3 bg-white bg-opacity-10 rounded-lg">
                    <div className="text-lg font-bold text-green-400">{quality.breakdown.story.toFixed(0)}</div>
                    <div className="text-sm text-purple-100">Story</div>
                  </div>
                </div>

                <button
                  onClick={moveToTesting}
                  disabled={gameElements.length < 3}
                  className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white rounded-lg font-semibold transition-all"
                >
                  Move to Testing Phase
                </button>
                <div className="text-center text-sm text-purple-100">
                  {gameElements.length < 3
                    ? `Add at least ${3 - gameElements.length} more elements to continue`
                    : 'Ready to test your game!'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render testing phase
  if (gamePhase === 'testing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 p-6 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">🧪</div>
          <h1 className="text-4xl font-bold text-white mb-6">Game Testing</h1>
          <div className="bg-black bg-opacity-30 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Quality Assurance in Progress</h2>
            <p className="text-xl text-purple-100 mb-6">
              Testing gameplay mechanics, balancing difficulty, and optimizing performance...
            </p>
            <div className="flex items-center justify-center space-x-4 text-white">
              <div className="animate-spin">⚙️</div>
              <div>Running automated tests</div>
              <div className="animate-pulse">📊</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render results phase
  if (gamePhase === 'results') {
    const quality = calculateGameQuality();

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 p-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🏆</div>
          <h1 className="text-4xl font-bold text-white mb-8">Game Development Complete!</h1>

          <div className="bg-black bg-opacity-30 rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-white">{score.toFixed(0)}</div>
                <div className="text-purple-100">Development Score</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">{quality.overall.toFixed(0)}%</div>
                <div className="text-purple-100">Game Quality</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">{gameElements.length}</div>
                <div className="text-purple-100">Elements Created</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">{budget}</div>
                <div className="text-purple-100">Points Remaining</div>
              </div>
            </div>

            <div className="text-lg text-purple-100 mb-6">
              {score > 800
                ? '🌟 Masterpiece! Your game is ready for global release!'
                : score > 600
                  ? '🎮 Great game! Players will love this experience!'
                  : score > 400
                    ? '👍 Good effort! With some polish, this could be amazing!'
                    : '🛠️ Learning experience! Game development is challenging but rewarding!'}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Game Components</h3>
                <div className="space-y-2">
                  {['character', 'environment', 'mechanic', 'story', 'audio', 'ui'].map((type) => {
                    const count = gameElements.filter((e) => e.type === type).length;
                    return count > 0 ? (
                      <div key={type} className="flex justify-between items-center text-purple-100">
                        <span className="capitalize">{type}s:</span>
                        <span className="text-white">{count}</span>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Quality Scores</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-purple-100">Gameplay:</span>
                    <span className="text-blue-400 font-semibold">{quality.breakdown.gameplay.toFixed(0)}/100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-100">Visuals:</span>
                    <span className="text-pink-400 font-semibold">{quality.breakdown.visuals.toFixed(0)}/100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-100">Audio:</span>
                    <span className="text-yellow-400 font-semibold">{quality.breakdown.audio.toFixed(0)}/100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-100">Story:</span>
                    <span className="text-green-400 font-semibold">{quality.breakdown.story.toFixed(0)}/100</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Project Info</h3>
                {currentProject && (
                  <div className="space-y-2 text-purple-100">
                    <div>
                      Genre: <span className="text-white capitalize">{currentProject.genre}</span>
                    </div>
                    <div>
                      Audience: <span className="text-white capitalize">{currentProject.targetAudience}</span>
                    </div>
                    <div>
                      Platform: <span className="text-white capitalize">{currentProject.platform}</span>
                    </div>
                    <div>
                      Budget Used: <span className="text-white">{1000 - budget}/1000 pts</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={onRestart}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center"
            >
              <RotateCcw className="mr-2" size={20} />
              New Game Project
            </button>
            <button
              onClick={() => onComplete(true, score)}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center"
            >
              <Award className="mr-2" size={20} />
              Complete
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default GameDesignStudio3DGame;
