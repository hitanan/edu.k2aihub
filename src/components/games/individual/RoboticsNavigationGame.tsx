'use client';
import React, { useState, useEffect, useCallback, useMemo } from 'react';

interface RoboticsNavigationGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
}

// Move ROBOTICS_LEVELS outside component to prevent recreation
const ROBOTICS_LEVELS = (() => {
  const levels = [
    {
      id: 1,
      name: 'Bước đầu tiên',
      difficulty: 'Dễ',
      algorithm: 'BFS',
      grid: Array(5)
        .fill(null)
        .map(() => Array(5).fill(0)),
      start: [0, 0],
      end: [4, 4],
      timeLimit: 60,
      minMoves: 8,
      description: 'Di chuyển robot từ góc trái trên xuống góc phải dưới',
      tips: ['Sử dụng các mũi tên để điều khiển', 'BFS tìm đường ngắn nhất'],
      pointValue: 10,
    },
    {
      id: 2,
      name: 'Tránh vật cản đơn giản',
      difficulty: 'Dễ',
      algorithm: 'BFS',
      grid: (() => {
        const grid = Array(6)
          .fill(null)
          .map(() => Array(6).fill(0));
        [
          [2, 2],
          [2, 3],
          [3, 2],
          [3, 3],
        ].forEach(([r, c]) => {
          grid[r][c] = 1; // obstacles
        });
        return grid;
      })(),
      start: [0, 0],
      end: [5, 5],
      timeLimit: 90,
      minMoves: 10,
      description: 'Tránh vật cản đơn giản để đến đích',
      tips: ['Tránh ô màu đen', 'Tìm đường vòng'],
      pointValue: 15,
    },
    {
      id: 3,
      name: 'Hành lang hẹp',
      difficulty: 'Trung bình',
      algorithm: 'A*',
      grid: (() => {
        const grid = Array(7)
          .fill(null)
          .map(() => Array(7).fill(1));
        // Create narrow corridor
        for (let i = 0; i < 7; i++) {
          grid[3][i] = 0;
        }
        return grid;
      })(),
      start: [0, 3],
      end: [6, 3],
      timeLimit: 120,
      minMoves: 12,
      description: 'Di chuyển qua hành lang hẹp',
      tips: ['Giữ đúng hướng trong hành lang', 'Không thể quay đầu'],
      pointValue: 20,
    },
  ];

  // Add more levels up to 10 to reduce complexity
  for (let i = 4; i <= 10; i++) {
    const size = Math.min(6 + Math.floor(i / 2), 12);
    const difficulty = i <= 5 ? 'Dễ' : i <= 8 ? 'Trung bình' : 'Khó';
    const algorithm = ['A*', 'Dijkstra', 'BFS'][i % 3] as 'A*' | 'Dijkstra' | 'BFS';

    const grid = Array(size)
      .fill(null)
      .map(() => Array(size).fill(0));

    // Add random obstacles (more for higher levels)
    const obstacleCount = Math.floor((size * size) * (0.1 + (i / 10) * 0.2));
    for (let j = 0; j < obstacleCount; j++) {
      const row = Math.floor(Math.random() * size);
      const col = Math.floor(Math.random() * size);
      if ((row !== 0 || col !== 0) && (row !== size - 1 || col !== size - 1)) {
        grid[row][col] = 1;
      }
    }

    levels.push({
      id: i,
      name: `Level ${i}`,
      difficulty,
      algorithm,
      grid,
      start: [0, 0],
      end: [size - 1, size - 1],
      timeLimit: 60 + i * 5,
      minMoves: Math.floor(size * 1.5),
      description: `Thử thách ${difficulty.toLowerCase()} với ${algorithm}`,
      tips: [`Sử dụng thuật toán ${algorithm}`, 'Tối ưu hóa đường đi'],
      pointValue: 10 + i * 2,
    });
  }

  return levels;
})();

export default function RoboticsNavigationGame({ onComplete, timeLeft }: RoboticsNavigationGameProps) {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [robotPosition, setRobotPosition] = useState<[number, number]>([0, 0]);
  const [commands, setCommands] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [pathHistory, setPathHistory] = useState<[number, number][]>([]);
  const [algorithmVisualization, setAlgorithmVisualization] = useState<{
    openSet: [number, number][];
    closedSet: [number, number][];
    path: [number, number][];
  }>({ openSet: [], closedSet: [], path: [] });
  const [showAlgorithm, setShowAlgorithm] = useState(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<'A*' | 'Dijkstra' | 'BFS'>('A*');
  const [levelStartTime, setLevelStartTime] = useState(Date.now());
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load progress from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedProgress = localStorage.getItem('k2ai_robotics_progress');
      if (savedProgress) {
        try {
          const progress = JSON.parse(savedProgress);
          setCompletedLevels(progress.completedLevels || []);
          setCurrentLevel(progress.currentLevel || 0);
          setTotalScore(progress.totalScore || 0);
        } catch (error) {
          console.error('Error loading robotics progress:', error);
        }
      }
      setIsLoaded(true);
    }
  }, []);

  // Save progress to localStorage
  const saveProgress = useCallback((newCompletedLevels: number[], newCurrentLevel: number, newTotalScore: number) => {
    if (typeof window !== 'undefined') {
      const progress = {
        completedLevels: newCompletedLevels,
        currentLevel: newCurrentLevel,
        totalScore: newTotalScore,
        lastPlayed: Date.now(),
      };
      localStorage.setItem('k2ai_robotics_progress', JSON.stringify(progress));
    }
  }, []);

  const currentLevelData = useMemo(() => ROBOTICS_LEVELS[currentLevel] || ROBOTICS_LEVELS[0], [currentLevel]);
  const maze = useMemo(
    () => ({
      grid: currentLevelData.grid,
      start: currentLevelData.start as [number, number],
      end: currentLevelData.end as [number, number],
    }),
    [currentLevelData],
  );

  // Reset robot when level changes
  useEffect(() => {
    if (maze) {
      setRobotPosition([maze.start[0], maze.start[1]]);
      setCommands([]);
      setIsRunning(false);
      setPathHistory([]);
      setAlgorithmVisualization({ openSet: [], closedSet: [], path: [] });
      setShowAlgorithm(false);
    }
  }, [currentLevel, maze]);

  useEffect(() => {
    if (timeLeft <= 0) {
      // Reset game state directly
      const currentStart = currentLevelData.start as [number, number];
      setRobotPosition([currentStart[0], currentStart[1]]);
      setCommands([]);
      setIsRunning(false);
      setPathHistory([]);
      setAlgorithmVisualization({ openSet: [], closedSet: [], path: [] });
      setShowAlgorithm(false);
    }
  }, [timeLeft, currentLevelData]);

  const moveRobot = useCallback((direction: string) => {
    if (isRunning) return;

    const [x, y] = robotPosition;
    let newX = x, newY = y;

    switch (direction) {
      case 'up':
        newX = Math.max(0, x - 1);
        break;
      case 'down':
        newX = Math.min(maze.grid.length - 1, x + 1);
        break;
      case 'left':
        newY = Math.max(0, y - 1);
        break;
      case 'right':
        newY = Math.min(maze.grid[0].length - 1, y + 1);
        break;
    }

    // Check if new position is valid (not a wall)
    if (maze.grid[newX] && maze.grid[newX][newY] === 0) {
      setRobotPosition([newX, newY]);
      setCommands(prev => [...prev, direction]);
      setPathHistory(prev => [...prev, [newX, newY]]);

      // Check if reached goal
      if (newX === maze.end[0] && newY === maze.end[1]) {
        const timeBonus = Math.max(0, currentLevelData.timeLimit - Math.floor((Date.now() - levelStartTime) / 1000));
        const moveBonus = Math.max(0, (currentLevelData.minMoves - commands.length - 1) * 5);
        const levelScore = currentLevelData.pointValue + timeBonus + moveBonus;
        
        setScore(levelScore);
        const newTotalScore = totalScore + levelScore;
        setTotalScore(newTotalScore);

        // Mark level as completed and save progress
        const newCompletedLevels = [...new Set([...completedLevels, currentLevel])];
        setCompletedLevels(newCompletedLevels);
        saveProgress(newCompletedLevels, currentLevel, newTotalScore);
        
        onComplete(true, newTotalScore);
      }
    }
  }, [robotPosition, isRunning, maze, commands.length, currentLevelData, levelStartTime, onComplete, totalScore, completedLevels, currentLevel, saveProgress]);

  const resetLevel = () => {
    setRobotPosition([maze.start[0], maze.start[1]]);
    setCommands([]);
    setIsRunning(false);
    setPathHistory([]);
    setAlgorithmVisualization({ openSet: [], closedSet: [], path: [] });
    setShowAlgorithm(false);
    setLevelStartTime(Date.now());
  };

  const nextLevel = () => {
    if (currentLevel < ROBOTICS_LEVELS.length - 1) {
      setCurrentLevel(prev => prev + 1);
      setLevelStartTime(Date.now());
    }
  };

  const previousLevel = () => {
    if (currentLevel > 0) {
      setCurrentLevel(prev => prev - 1);
      setLevelStartTime(Date.now());
    }
  };

  if (!maze) {
    return (
      <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <div className="text-center text-white">
          <p>Đang tải dữ liệu game...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      {/* Game Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-white">🤖 Robot Navigation</h3>
          <div className="text-white text-sm">
            Level {currentLevel + 1}/{ROBOTICS_LEVELS.length}
          </div>
        </div>
        
        <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
          <h4 className="text-white font-semibold mb-2">
            {currentLevelData.name}
            {isLoaded && completedLevels.includes(currentLevel) && (
              <span className="ml-2 text-green-400 text-sm">✅ Đã hoàn thành</span>
            )}
          </h4>
          <p className="text-gray-300 text-sm mb-2">{currentLevelData.description}</p>
          <div className="flex gap-4 text-xs text-gray-400">
            <span>⏱️ {timeLeft}s</span>
            <span>🎯 Điểm: {totalScore}</span>
            <span>📏 Bước: {commands.length}</span>
            <span>🏆 Mục tiêu: {currentLevelData.minMoves} bước</span>
          </div>
        </div>
      </div>

      {/* Game Grid */}
      <div className="mb-6">
        <div className="grid gap-1 max-w-md mx-auto bg-gray-800/30 p-4 rounded-xl">
          {maze.grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`
                  w-8 h-8 rounded-sm flex items-center justify-center text-sm font-bold
                  ${cell === 1 ? 'bg-gray-600' : 'bg-gray-200/20'}
                  ${robotPosition[0] === rowIndex && robotPosition[1] === colIndex ? 'bg-blue-500 text-white' : ''}
                  ${maze.end[0] === rowIndex && maze.end[1] === colIndex ? 'bg-green-500 text-white' : ''}
                  ${pathHistory.some(([x, y]) => x === rowIndex && y === colIndex) ? 'bg-blue-300/50' : ''}
                `}
                style={{
                  gridColumn: colIndex + 1,
                  gridRow: rowIndex + 1,
                }}
              >
                {robotPosition[0] === rowIndex && robotPosition[1] === colIndex && '🤖'}
                {maze.end[0] === rowIndex && maze.end[1] === colIndex && robotPosition[0] !== rowIndex && '🎯'}
                {cell === 1 && '🧱'}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="space-y-4">
        {/* Direction Controls */}
        <div className="grid grid-cols-3 gap-2 max-w-48 mx-auto">
          <div></div>
          <button
            onClick={() => moveRobot('up')}
            disabled={isRunning}
            className="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors"
          >
            ↑
          </button>
          <div></div>
          <button
            onClick={() => moveRobot('left')}
            disabled={isRunning}
            className="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors"
          >
            ←
          </button>
          <button
            onClick={resetLevel}
            className="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded-lg transition-colors"
          >
            🔄
          </button>
          <button
            onClick={() => moveRobot('right')}
            disabled={isRunning}
            className="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors"
          >
            →
          </button>
          <div></div>
          <button
            onClick={() => moveRobot('down')}
            disabled={isRunning}
            className="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors"
          >
            ↓
          </button>
          <div></div>
        </div>

        {/* Level Navigation */}
        <div className="flex justify-center gap-2">
          <button
            onClick={previousLevel}
            disabled={currentLevel === 0}
            className="bg-gray-600 hover:bg-gray-500 disabled:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
          >
            ← Trước
          </button>
          <button
            onClick={nextLevel}
            disabled={currentLevel >= ROBOTICS_LEVELS.length - 1}
            className="bg-gray-600 hover:bg-gray-500 disabled:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
          >
            Tiếp →
          </button>
        </div>

        {/* Tips */}
        <div className="bg-blue-900/30 rounded-lg p-3">
          <p className="text-blue-200 text-sm">
            💡 <strong>Mẹo:</strong> {currentLevelData.tips.join('. ')}
          </p>
        </div>
      </div>
    </div>
  );
}
