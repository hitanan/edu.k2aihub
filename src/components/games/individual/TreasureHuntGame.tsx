'use client';
import React, { useState, useEffect, useCallback } from 'react';

interface Position {
  x: number;
  y: number;
}

interface Treasure {
  x: number;
  y: number;
  type: 'gold' | 'gem' | 'artifact' | 'key';
  value: number;
  collected: boolean;
}

interface Enemy {
  x: number;
  y: number;
  type: 'guard' | 'trap' | 'monster';
  damage: number;
  pattern?: string; // Movement pattern for guards
  defeated?: boolean; // Add defeated state
}

interface Level {
  id: number;
  name: string;
  description: string;
  dimensions: { width: number; height: number };
  playerStart: Position;
  exit: Position;
  treasures: Treasure[];
  enemies: Enemy[];
  walls: Position[];
  timeLimit: number;
  minTreasures: number; // Minimum treasures needed to unlock exit
  educational: {
    concept: string;
    skill: string;
    lesson: string;
  };
}

interface TreasureHuntGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart?: () => void;
}

// Generate 50 levels programmatically
const generateLevels = (): Level[] => {
  const generatedLevels: Level[] = [];

  for (let i = 1; i <= 50; i++) {
    const difficulty = Math.min(Math.floor(i / 10) + 1, 5); // Difficulty 1-5 based on level
    const baseWidth = Math.min(6 + Math.floor(i / 5), 15); // Gradually increase size
    const baseHeight = Math.min(5 + Math.floor(i / 8), 12);

    const width = baseWidth + (i % 3); // Add some variation
    const height = baseHeight + (i % 2);

    // Generate random positions with some logic
    const playerStart: Position = { x: 0, y: Math.floor(height / 2) };
    const exit: Position = { x: width - 1, y: Math.floor(height / 2) + (i % 2 === 0 ? 1 : -1) };

    // Generate treasures based on difficulty
    const numTreasures = Math.min(2 + Math.floor(i / 3), 8);
    const treasures: Treasure[] = [];
    const treasureTypes: Array<'gold' | 'gem' | 'artifact' | 'key'> = ['gold', 'gem', 'artifact', 'key'];
    const treasureValues = { gold: 20 + i * 2, gem: 30 + i * 3, artifact: 50 + i * 5, key: 40 + i * 4 };

    for (let j = 0; j < numTreasures; j++) {
      const type = treasureTypes[j % treasureTypes.length];
      treasures.push({
        x: Math.floor(1 + Math.random() * (width - 2)),
        y: Math.floor(1 + Math.random() * (height - 2)),
        type,
        value: treasureValues[type],
        collected: false,
      });
    }

    // Generate enemies based on difficulty
    const numEnemies = Math.min(1 + Math.floor(i / 4), 6);
    const enemies: Enemy[] = [];
    const enemyTypes: Array<'guard' | 'trap' | 'monster'> = ['guard', 'trap', 'monster'];
    const enemyPatterns = ['patrol', 'circle', 'random'];

    for (let j = 0; j < numEnemies; j++) {
      const type = enemyTypes[j % enemyTypes.length];
      const damage = 10 + difficulty * 3 + Math.floor(Math.random() * 10);
      enemies.push({
        x: Math.floor(1 + Math.random() * (width - 2)),
        y: Math.floor(1 + Math.random() * (height - 2)),
        type,
        damage,
        pattern: type === 'guard' ? enemyPatterns[j % enemyPatterns.length] : undefined,
        defeated: false,
      });
    }

    // Generate walls for maze complexity
    const numWalls = Math.min(Math.floor(width * height * 0.15) + Math.floor(i / 3), Math.floor(width * height * 0.3));
    const walls: Position[] = [];

    for (let j = 0; j < numWalls; j++) {
      const wallX = Math.floor(1 + Math.random() * (width - 2));
      const wallY = Math.floor(1 + Math.random() * (height - 2));

      // Avoid placing walls on critical positions
      if (
        (wallX !== playerStart.x || wallY !== playerStart.y) &&
        (wallX !== exit.x || wallY !== exit.y) &&
        !walls.some((w) => w.x === wallX && w.y === wallY)
      ) {
        walls.push({ x: wallX, y: wallY });
      }
    }

    // Educational concepts by level ranges
    const concepts = [
      {
        range: [1, 10],
        concept: 'Basic Navigation',
        skill: 'Di chuyển cơ bản',
        lesson: 'Học cách điều khiển nhân vật và thu thập kho báu',
      },
      {
        range: [11, 20],
        concept: 'Enemy Avoidance',
        skill: 'Tránh kẻ thù',
        lesson: 'Phát triển kỹ năng quan sát và tránh nguy hiểm',
      },
      {
        range: [21, 30],
        concept: 'Strategic Planning',
        skill: 'Lập kế hoạch chiến lược',
        lesson: 'Lên kế hoạch tối ưu cho đường đi và thu thập kho báu',
      },
      {
        range: [31, 40],
        concept: 'Risk Management',
        skill: 'Quản lý rủi ro',
        lesson: 'Đánh giá rủi ro và lợi ích của từng quyết định',
      },
      {
        range: [41, 50],
        concept: 'Master Explorer',
        skill: 'Thám hiểm chuyên nghiệp',
        lesson: 'Thành thạo tất cả kỹ năng và chinh phục thử thách khó nhất',
      },
    ];

    const educationalData = concepts.find((c) => i >= c.range[0] && i <= c.range[1]) || concepts[0];

    generatedLevels.push({
      id: i,
      name: `Thử thách ${i}${i <= 5 ? ' (Dễ)' : i <= 15 ? ' (Trung bình)' : i <= 30 ? ' (Khó)' : i <= 45 ? ' (Rất khó)' : ' (Cực khó)'}`,
      description: `Level ${i} - ${
        difficulty === 1
          ? 'Khởi đầu đơn giản'
          : difficulty === 2
            ? 'Thử thách nhẹ nhàng'
            : difficulty === 3
              ? 'Độ khó vừa phải'
              : difficulty === 4
                ? 'Thách thức cao'
                : 'Thử thách tối thượng'
      }`,
      dimensions: { width, height },
      playerStart,
      exit,
      treasures,
      enemies,
      walls,
      timeLimit: Math.min(60 + i * 10 + difficulty * 30, 600), // 60s to 10 minutes max
      minTreasures: Math.max(1, Math.floor(numTreasures * 0.6)), // Need to collect 60% of treasures
      educational: {
        concept: educationalData.concept,
        skill: educationalData.skill,
        lesson: educationalData.lesson,
      },
    });
  }

  return generatedLevels;
};

const levels: Level[] = generateLevels();

export function TreasureHuntGame({ onComplete, timeLeft, onRestart }: TreasureHuntGameProps) {
  // Load saved progress from localStorage
  const [currentLevel, setCurrentLevel] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('treasureHuntProgress');
      return saved ? Math.min(parseInt(saved, 10), 49) : 0; // Max level 49 (0-indexed)
    }
    return 0;
  });

  const [playerPosition, setPlayerPosition] = useState<Position>({ x: 0, y: 0 });
  const [playerHealth, setPlayerHealth] = useState(100);
  const [score, setScore] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('treasureHuntTotalScore');
      return saved ? parseInt(saved, 10) : 0;
    }
    return 0;
  });
  const [treasures, setTreasures] = useState<Treasure[]>([]);
  const [enemies, setEnemies] = useState<Enemy[]>([]);
  const [gameState, setGameState] = useState<'playing' | 'won' | 'lost'>('playing');
  const [moves, setMoves] = useState(0);
  const [message, setMessage] = useState('');
  const [isMoving, setIsMoving] = useState(false);

  const level = levels[currentLevel] || levels[0]; // Fallback to first level if currentLevel is invalid

  // Initialize level
  useEffect(() => {
    if (level) {
      setPlayerPosition(level.playerStart);
      setPlayerHealth(100);
      setTreasures(level.treasures.map((t) => ({ ...t, collected: false })));
      setEnemies(level.enemies.map((e) => ({ ...e, defeated: false })));
      setGameState('playing');
      setMoves(0);
      setMessage('Tìm kho báu và thoát khỏi mê cung! Space = tấn công');
    }
  }, [level]);

  // Check time limit
  useEffect(() => {
    if (timeLeft <= 0 && gameState === 'playing') {
      setGameState('lost');
      setMessage('Hết thời gian! Thử lại nhé.');
      setTimeout(() => {
        if (onRestart) onRestart();
        else onComplete(false, score);
      }, 2000);
    }
  }, [timeLeft, gameState, onComplete, onRestart, score]);

  // Check win condition
  useEffect(() => {
    if (gameState === 'won') {
      const levelBonus = (currentLevel + 1) * 50;
      const timeBonus = Math.max(0, timeLeft * 2);
      const healthBonus = Math.max(0, (playerHealth - 50) * 2);
      const finalScore = score + levelBonus + timeBonus + healthBonus;

      console.log('Level completed:', currentLevel + 1, 'of', levels.length);

      if (currentLevel < levels.length - 1) {
        setTimeout(() => {
          const nextLevel = currentLevel + 1;
          setCurrentLevel(nextLevel);
          setScore(finalScore);
          setGameState('playing'); // Reset game state for next level

          // Save progress to localStorage
          if (typeof window !== 'undefined') {
            localStorage.setItem('treasureHuntProgress', nextLevel.toString());
            localStorage.setItem('treasureHuntTotalScore', finalScore.toString());
          }
        }, 2000);
      } else {
        console.log('All levels completed! Calling onComplete with score:', finalScore);
        // Save completion to localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('treasureHuntProgress', '50'); // Mark as completed all 50 levels
          localStorage.setItem('treasureHuntTotalScore', finalScore.toString());
          localStorage.setItem('treasureHuntCompleted', 'true');
        }
        setTimeout(() => {
          onComplete(true, finalScore);
        }, 2000);
      }
    } else if (gameState === 'lost') {
      console.log('Game lost! Calling onComplete with score:', score);
      setTimeout(() => {
        onComplete(false, score);
      }, 1000);
    }
  }, [gameState, currentLevel, score, timeLeft, playerHealth, onComplete]);

  const isValidMove = useCallback(
    (newPos: Position) => {
      if (newPos.x < 0 || newPos.x >= level.dimensions.width || newPos.y < 0 || newPos.y >= level.dimensions.height) {
        return false;
      }

      // Check walls
      if (level.walls.some((wall) => wall.x === newPos.x && wall.y === newPos.y)) {
        return false;
      }

      return true;
    },
    [level],
  );

  const checkCollisions = useCallback(
    (pos: Position) => {
      // Check treasures
      const treasureIndex = treasures.findIndex((t) => !t.collected && t.x === pos.x && t.y === pos.y);

      if (treasureIndex >= 0) {
        setTreasures((prev) => {
          const newTreasures = [...prev];
          newTreasures[treasureIndex].collected = true;
          return newTreasures;
        });

        setScore((prev) => prev + treasures[treasureIndex].value);
        setMessage(`Tìm thấy ${treasures[treasureIndex].type}! +${treasures[treasureIndex].value} điểm`);

        setTimeout(() => setMessage(''), 2000);
      }

      // Check enemies
      const enemyIndex = enemies.findIndex((e) => !e.defeated && e.x === pos.x && e.y === pos.y);
      if (enemyIndex >= 0) {
        const enemy = enemies[enemyIndex];
        setPlayerHealth((prev) => {
          const newHealth = Math.max(0, prev - enemy.damage);
          if (newHealth <= 0) {
            setGameState('lost');
            setMessage('Bạn đã bị thua!');
            setTimeout(() => {
              if (onRestart) onRestart();
              else onComplete(false, score);
            }, 2000);
          } else {
            setMessage(`Bị tấn công bởi ${enemy.type}! -${enemy.damage} HP (Nhấn Space để chiến đấu)`);
            setTimeout(() => setMessage(''), 3000);
          }
          return newHealth;
        });
        return; // Stop further processing when hit by enemy
      }

      // Check exit
      if (pos.x === level.exit.x && pos.y === level.exit.y) {
        const collectedCount = treasures.filter((t) => t.collected).length;
        if (collectedCount >= level.minTreasures) {
          setGameState('won');
          setMessage('Hoàn thành level!');
        } else {
          setMessage(`Cần thu thập thêm ${level.minTreasures - collectedCount} kho báu để mở khóa lối ra!`);
          setTimeout(() => setMessage(''), 3000);
        }
      }
    },
    [treasures, enemies, level],
  );

  const attackEnemy = useCallback(() => {
    const { x, y } = playerPosition;
    const enemyIndex = enemies.findIndex((e) => !e.defeated && e.x === x && e.y === y);

    if (enemyIndex >= 0) {
      setEnemies((prev) => {
        const newEnemies = [...prev];
        newEnemies[enemyIndex].defeated = true;
        return newEnemies;
      });

      const enemy = enemies[enemyIndex];
      const points = enemy.type === 'monster' ? 50 : enemy.type === 'guard' ? 30 : 20;
      setScore((prev) => prev + points);
      setMessage(`Đánh bại ${enemy.type}! +${points} điểm`);
      setTimeout(() => setMessage(''), 2000);
    }
  }, [playerPosition, enemies]);

  const movePlayer = useCallback(
    (direction: 'up' | 'down' | 'left' | 'right') => {
      if (isMoving || gameState !== 'playing') return;

      setIsMoving(true);
      const { x, y } = playerPosition;
      const newPos = { x, y };

      switch (direction) {
        case 'up':
          newPos.y = Math.max(0, y - 1);
          break;
        case 'down':
          newPos.y = Math.min(level.dimensions.height - 1, y + 1);
          break;
        case 'left':
          newPos.x = Math.max(0, x - 1);
          break;
        case 'right':
          newPos.x = Math.min(level.dimensions.width - 1, x + 1);
          break;
      }

      if (isValidMove(newPos)) {
        setPlayerPosition(newPos);
        setMoves((prev) => prev + 1);
        checkCollisions(newPos);
      }

      setTimeout(() => setIsMoving(false), 200);
    },
    [playerPosition, isMoving, gameState, level, isValidMove, checkCollisions],
  );

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          e.preventDefault();
          movePlayer('up');
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          e.preventDefault();
          movePlayer('down');
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          e.preventDefault();
          movePlayer('left');
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          e.preventDefault();
          movePlayer('right');
          break;
        case ' ': // Space bar for attack
          e.preventDefault();
          attackEnemy();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [movePlayer, attackEnemy]);

  const getCellContent = (x: number, y: number) => {
    if (playerPosition.x === x && playerPosition.y === y) {
      return { content: '🧙‍♂️', className: 'bg-blue-500 animate-pulse' };
    }

    if (level.exit.x === x && level.exit.y === y) {
      const collectedCount = treasures.filter((t) => t.collected).length;
      const isUnlocked = collectedCount >= level.minTreasures;
      return {
        content: isUnlocked ? '🚪' : '🔒',
        className: isUnlocked ? 'bg-green-500 animate-bounce' : 'bg-gray-600',
      };
    }

    if (level.walls.some((wall) => wall.x === x && wall.y === y)) {
      return { content: '🧱', className: 'bg-gray-800' };
    }

    const treasure = treasures.find((t) => !t.collected && t.x === x && t.y === y);
    if (treasure) {
      const icons = { gold: '🪙', gem: '💎', artifact: '🏺', key: '🗝️' };
      return {
        content: icons[treasure.type],
        className: 'bg-yellow-400 animate-pulse',
      };
    }

    const enemy = enemies.find((e) => e.x === x && e.y === y);
    if (enemy) {
      if (enemy.defeated) {
        return {
          content: '💀',
          className: 'bg-gray-500/50',
        };
      } else {
        const icons = { guard: '⚔️', trap: '🕳️', monster: '👹' };
        return {
          content: icons[enemy.type],
          className: 'bg-red-500 animate-bounce',
        };
      }
    }

    return { content: '', className: 'bg-gray-200/20' };
  };

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-white">🗺️ Treasure Hunt Adventure</h3>
          <div className="text-white text-sm">
            Level {currentLevel + 1}/{levels.length}
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
          <h4 className="text-white font-semibold mb-2">{level.name}</h4>
          <p className="text-gray-300 text-sm mb-2">{level.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-gray-400">
            <span>⏱️ {timeLeft}s</span>
            <span>💖 {playerHealth} HP</span>
            <span>🎯 {score} điểm</span>
            <span>👟 {moves} bước</span>
          </div>
        </div>

        {/* Educational Info */}
        <div className="bg-purple-900/30 rounded-lg p-3 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
            <div>
              <span className="text-purple-200 font-medium">Khái niệm:</span>
              <div className="text-purple-100">{level.educational.concept}</div>
            </div>
            <div>
              <span className="text-purple-200 font-medium">Kỹ năng:</span>
              <div className="text-purple-100">{level.educational.skill}</div>
            </div>
            <div>
              <span className="text-purple-200 font-medium">Bài học:</span>
              <div className="text-purple-100">{level.educational.lesson}</div>
            </div>
          </div>
        </div>

        {/* Status and Message */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-4 text-sm">
            <span className="text-yellow-400">
              🏆 Thu thập: {treasures.filter((t) => t.collected).length}/{level.minTreasures}
            </span>
          </div>
          {message && (
            <div className="bg-blue-900/50 text-blue-200 px-3 py-1 rounded-lg text-sm animate-pulse">{message}</div>
          )}
        </div>
      </div>

      {/* Game Grid */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <div className="bg-gray-900/50 rounded-xl p-4 mb-4">
            <div
              className="grid gap-1"
              style={{
                gridTemplateColumns: `repeat(${level.dimensions.width}, minmax(0, 1fr))`,
              }}
            >
              {Array.from({ length: level.dimensions.height }, (_, y) =>
                Array.from({ length: level.dimensions.width }, (_, x) => {
                  const cellData = getCellContent(x, y);
                  return (
                    <div
                      key={`${x}-${y}`}
                      className={`
                        w-8 h-8 md:w-10 md:h-10 rounded-sm flex items-center justify-center text-sm font-bold
                        transition-all duration-200 border border-gray-600/30
                        ${cellData.className}
                      `}
                    >
                      {cellData.content}
                    </div>
                  );
                }),
              ).flat()}
            </div>
          </div>
        </div>

        {/* Controls and Legend */}
        <div className="w-full lg:w-80">
          {/* Controls */}
          <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
            <h4 className="text-white font-medium mb-3">Điều khiển</h4>
            <div className="grid grid-cols-3 gap-2 max-w-48 mx-auto">
              <div></div>
              <button
                onClick={() => movePlayer('up')}
                disabled={isMoving}
                className="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 text-white py-2 px-3 rounded-lg transition-colors"
              >
                ↑
              </button>
              <div></div>
              <button
                onClick={() => movePlayer('left')}
                disabled={isMoving}
                className="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 text-white py-2 px-3 rounded-lg transition-colors"
              >
                ←
              </button>
              <div className="flex items-center justify-center text-white text-xs">W,A,S,D</div>
              <button
                onClick={() => movePlayer('right')}
                disabled={isMoving}
                className="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 text-white py-2 px-3 rounded-lg transition-colors"
              >
                →
              </button>
              <div></div>
              <button
                onClick={() => movePlayer('down')}
                disabled={isMoving}
                className="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 text-white py-2 px-3 rounded-lg transition-colors"
              >
                ↓
              </button>
              <div></div>
            </div>
            <p className="text-gray-400 text-xs text-center mt-2">Hoặc sử dụng phím mũi tên / WASD</p>
          </div>

          {/* Legend */}
          <div className="bg-gray-800/50 rounded-xl p-4">
            <h4 className="text-white font-medium mb-2">Chú giải</h4>
            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-2">
                <span>🧙‍♂️</span>
                <span className="text-gray-300">Nhân vật (bạn)</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🚪</span>
                <span className="text-gray-300">Lối ra (mở khóa)</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🔒</span>
                <span className="text-gray-300">Lối ra (bị khóa)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">�</span>
                <span className="text-purple-400">�💎</span>
                <span className="text-orange-400">🏺</span>
                <span className="text-yellow-300">�</span>
                <span className="text-gray-300">Kho báu</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⚔️👹🕳️</span>
                <span className="text-gray-300">Kẻ thù/Bẫy</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🧱</span>
                <span className="text-gray-300">Tường</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
