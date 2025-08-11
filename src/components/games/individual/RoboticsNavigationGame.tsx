'use client';
import React, { useState, useEffect, useCallback } from 'react';

interface RoboticsNavigationGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

export default function RoboticsNavigationGame({
  onComplete,
  timeLeft,
  onRestart,
}: RoboticsNavigationGameProps) {
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
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<
    'A*' | 'Dijkstra' | 'BFS'
  >('A*');
  const [movingObstacles, setMovingObstacles] = useState<
    Array<{
      position: [number, number];
      originalPos: [number, number];
      pattern: string;
      speed: number;
    }>
  >([]);
  const [levelStartTime, setLevelStartTime] = useState(Date.now());

  // Import robotics levels data
  const ROBOTICS_LEVELS = [
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
        ].forEach(([x, y]) => (grid[x][y] = 1));
        return grid;
      })(),
      start: [0, 0],
      end: [5, 5],
      timeLimit: 90,
      minMoves: 10,
      description: 'Tránh khối vật cản 2x2 ở giữa',
      tips: ['Đi vòng quanh vật cản', 'Lập kế hoạch trước khi di chuyển'],
      pointValue: 15,
    },
    {
      id: 3,
      name: 'Hành lang hẹp',
      difficulty: 'Dễ',
      algorithm: 'BFS',
      grid: (() => {
        const grid = Array(7)
          .fill(null)
          .map(() => Array(7).fill(0));
        [
          [1, 1],
          [1, 2],
          [1, 4],
          [1, 5],
          [2, 1],
          [2, 5],
          [3, 1],
          [3, 5],
          [4, 1],
          [4, 5],
          [5, 1],
          [5, 2],
          [5, 4],
          [5, 5],
        ].forEach(([x, y]) => (grid[x][y] = 1));
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

  // Add more levels up to 100 with increasing difficulty
  for (let i = 4; i <= 100; i++) {
    const size = Math.min(6 + Math.floor(i / 10), 20);
    const difficulty =
      i <= 10 ? 'Dễ' : i <= 30 ? 'Trung bình' : i <= 70 ? 'Khó' : 'Chuyên gia';
    const algorithm = ['A*', 'Dijkstra', 'BFS'][i % 3] as
      | 'A*'
      | 'Dijkstra'
      | 'BFS';

    const grid = Array(size)
      .fill(null)
      .map(() => Array(size).fill(0));
    const wallCount = Math.floor(size * size * (0.15 + (i / 100) * 0.25));

    // Generate random walls
    for (let w = 0; w < wallCount; w++) {
      const x = Math.floor(Math.random() * size);
      const y = Math.floor(Math.random() * size);
      if ((x !== 0 || y !== 0) && (x !== size - 1 || y !== size - 1)) {
        grid[x][y] = 1;
      }
    }

    ROBOTICS_LEVELS.push({
      id: i,
      name: `Thử thách ${i}`,
      difficulty: difficulty as any,
      algorithm,
      grid,
      start: [0, 0],
      end: [size - 1, size - 1],
      timeLimit: 60 + i * 5,
      minMoves: Math.floor(size * 1.5),
      description: `Level ${i} - ${difficulty}`,
      tips: ['Sử dụng thuật toán phù hợp', 'Lập kế hoạch cẩn thận'],
      pointValue: 10 + i * 2,
    });
  }

  const currentLevelData = ROBOTICS_LEVELS[currentLevel];
  const maze = {
    grid: currentLevelData.grid,
    start: currentLevelData.start,
    end: currentLevelData.end,
  };

  // A* Algorithm implementation
  const calculateAStar = (start: [number, number], end: [number, number]) => {
    const openSet: Array<{
      pos: [number, number];
      f: number;
      g: number;
      h: number;
      parent: [number, number] | null;
    }> = [];
    const closedSet: [number, number][] = [];
    const visited = new Set<string>();

    const heuristic = (a: [number, number], b: [number, number]) =>
      Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);

    openSet.push({
      pos: start,
      f: heuristic(start, end),
      g: 0,
      h: heuristic(start, end),
      parent: null,
    });

    const steps = [];

    while (openSet.length > 0) {
      openSet.sort((a, b) => a.f - b.f);
      const current = openSet.shift()!;

      steps.push({
        openSet: openSet.map((n) => n.pos),
        closedSet: [...closedSet],
        current: current.pos,
      });

      if (current.pos[0] === end[0] && current.pos[1] === end[1]) {
        const path: [number, number][] = [];
        let node: any = current;
        const parentMap = new Map();

        // Build parent map
        steps.forEach((step) => {
          const curr = step.current;
          openSet.forEach((n) => {
            if (n.parent) {
              parentMap.set(`${n.pos[0]},${n.pos[1]}`, n.parent);
            }
          });
        });

        // Reconstruct path
        while (node) {
          path.unshift(node.pos);
          const parentKey = `${node.pos[0]},${node.pos[1]}`;
          const parent = parentMap.get(parentKey);
          if (!parent) break;
          node = { pos: parent };
        }

        return { steps, path, algorithm: 'A*' };
      }

      closedSet.push(current.pos);
      visited.add(`${current.pos[0]},${current.pos[1]}`);

      const neighbors = [
        [current.pos[0] - 1, current.pos[1]],
        [current.pos[0] + 1, current.pos[1]],
        [current.pos[0], current.pos[1] - 1],
        [current.pos[0], current.pos[1] + 1],
      ] as [number, number][];

      for (const neighbor of neighbors) {
        const [x, y] = neighbor;

        if (x < 0 || x >= maze.grid.length || y < 0 || y >= maze.grid[0].length)
          continue;
        if (maze.grid[x][y] === 1) continue;
        if (visited.has(`${x},${y}`)) continue;

        const g = current.g + 1;
        const h = heuristic(neighbor, end);
        const f = g + h;

        const existingNode = openSet.find(
          (n) => n.pos[0] === x && n.pos[1] === y,
        );
        if (!existingNode || g < existingNode.g) {
          if (existingNode) {
            existingNode.g = g;
            existingNode.f = f;
            existingNode.parent = current.pos;
          } else {
            openSet.push({
              pos: neighbor,
              f,
              g,
              h,
              parent: current.pos,
            });
          }
        }
      }
    }

    return { steps, path: [], algorithm: 'A*' };
  };

  // Dijkstra Algorithm implementation
  const calculateDijkstra = (
    start: [number, number],
    end: [number, number],
  ) => {
    const distances = new Map<string, number>();
    const previous = new Map<string, [number, number] | null>();
    const unvisited = new Set<string>();
    const steps = [];

    // Initialize distances
    for (let i = 0; i < maze.grid.length; i++) {
      for (let j = 0; j < maze.grid[0].length; j++) {
        if (maze.grid[i][j] === 0) {
          const key = `${i},${j}`;
          distances.set(key, i === start[0] && j === start[1] ? 0 : Infinity);
          previous.set(key, null);
          unvisited.add(key);
        }
      }
    }

    while (unvisited.size > 0) {
      // Find unvisited node with minimum distance
      let currentKey = '';
      let minDistance = Infinity;

      for (const key of unvisited) {
        const dist = distances.get(key) || Infinity;
        if (dist < minDistance) {
          minDistance = dist;
          currentKey = key;
        }
      }

      if (currentKey === '' || minDistance === Infinity) break;

      const [currentX, currentY] = currentKey.split(',').map(Number) as [
        number,
        number,
      ];
      unvisited.delete(currentKey);

      steps.push({
        current: [currentX, currentY] as [number, number],
        visited: Array.from(distances.keys())
          .filter((k) => !unvisited.has(k))
          .map((k) => k.split(',').map(Number) as [number, number]),
        distances: new Map(distances),
      });

      if (currentX === end[0] && currentY === end[1]) {
        // Reconstruct path
        const path: [number, number][] = [];
        let current: [number, number] | null = [currentX, currentY];

        while (current) {
          path.unshift(current);
          current = previous.get(`${current[0]},${current[1]}`) || null;
        }

        return { steps, path, algorithm: 'Dijkstra' };
      }

      // Check neighbors
      const neighbors = [
        [currentX - 1, currentY],
        [currentX + 1, currentY],
        [currentX, currentY - 1],
        [currentX, currentY + 1],
      ] as [number, number][];

      for (const [nx, ny] of neighbors) {
        const neighborKey = `${nx},${ny}`;

        if (
          nx >= 0 &&
          nx < maze.grid.length &&
          ny >= 0 &&
          ny < maze.grid[0].length &&
          maze.grid[nx][ny] === 0 &&
          unvisited.has(neighborKey)
        ) {
          const altDistance = minDistance + 1;
          const currentDistance = distances.get(neighborKey) || Infinity;

          if (altDistance < currentDistance) {
            distances.set(neighborKey, altDistance);
            previous.set(neighborKey, [currentX, currentY]);
          }
        }
      }
    }

    return { steps, path: [], algorithm: 'Dijkstra' };
  };

  // BFS Algorithm implementation
  const calculateBFS = (start: [number, number], end: [number, number]) => {
    const queue: Array<{ pos: [number, number]; path: [number, number][] }> =
      [];
    const visited = new Set<string>();
    const steps = [];

    queue.push({ pos: start, path: [start] });
    visited.add(`${start[0]},${start[1]}`);

    while (queue.length > 0) {
      const current = queue.shift()!;
      const [x, y] = current.pos;

      steps.push({
        current: current.pos,
        queue: queue.map((q) => q.pos),
        visited: Array.from(visited).map(
          (v) => v.split(',').map(Number) as [number, number],
        ),
        currentPath: current.path,
      });

      if (x === end[0] && y === end[1]) {
        return { steps, path: current.path, algorithm: 'BFS' };
      }

      const neighbors = [
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1],
      ] as [number, number][];

      for (const [nx, ny] of neighbors) {
        const neighborKey = `${nx},${ny}`;

        if (
          nx >= 0 &&
          nx < maze.grid.length &&
          ny >= 0 &&
          ny < maze.grid[0].length &&
          maze.grid[nx][ny] === 0 &&
          !visited.has(neighborKey)
        ) {
          visited.add(neighborKey);
          queue.push({
            pos: [nx, ny],
            path: [...current.path, [nx, ny]],
          });
        }
      }
    }

    return { steps, path: [], algorithm: 'BFS' };
  };

  // Execute selected algorithm
  const executePathfinding = () => {
    const start = robotPosition;
    const end = [maze.end[0], maze.end[1]] as [number, number];

    let result;
    switch (selectedAlgorithm) {
      case 'A*':
        result = calculateAStar(start, end);
        break;
      case 'Dijkstra':
        result = calculateDijkstra(start, end);
        break;
      case 'BFS':
        result = calculateBFS(start, end);
        break;
      default:
        result = calculateAStar(start, end);
    }

    if (result.path.length > 0) {
      setAlgorithmVisualization({
        openSet: [],
        closedSet:
          result.steps.length > 0
            ? (result.steps[result.steps.length - 1] as any).visited || []
            : [],
        path: result.path,
      });
      setShowAlgorithm(true);

      // Auto-execute the found path
      setTimeout(() => {
        executeAutoPath(result.path);
      }, 1000);
    }
  };

  const executeAutoPath = (path: [number, number][]) => {
    if (path.length < 2) return;

    setIsRunning(true);
    let currentIndex = 0;

    const executeNextMove = () => {
      if (currentIndex < path.length - 1) {
        const nextPos = path[currentIndex + 1];

        setRobotPosition(nextPos);
        setPathHistory((prev) => [...prev, nextPos]);

        currentIndex++;
        setTimeout(executeNextMove, 300);
      } else {
        setIsRunning(false);
        checkLevelComplete();
      }
    };

    executeNextMove();
  };

  const checkLevelComplete = () => {
    const [endX] = maze.end;
    const [robotX, robotY] = robotPosition;

    if (robotX === endX && robotY === maze.end[1]) {
      const timeUsed = Date.now() - levelStartTime;
      const timeBonus = Math.max(
        0,
        (currentLevelData.timeLimit * 1000 - timeUsed) / 1000,
      );
      const moveBonus = Math.max(
        0,
        (currentLevelData.minMoves - commands.length) * 5,
      );
      const levelScore =
        currentLevelData.pointValue + Math.floor(timeBonus) + moveBonus;

      setScore(levelScore);
      setTotalScore((prev) => prev + levelScore);

      if (currentLevel < ROBOTICS_LEVELS.length - 1) {
        setTimeout(() => {
          setCurrentLevel((prev) => prev + 1);
          setScore(0);
        }, 2000);
      } else {
        // Game complete
        onComplete(true, totalScore + levelScore);
      }
    }
  };

  const resetLevel = () => {
    setRobotPosition([currentLevelData.start[0], currentLevelData.start[1]]);
    setCommands([]);
    setPathHistory([]);
    setIsRunning(false);
    setAlgorithmVisualization({ openSet: [], closedSet: [], path: [] });
    setShowAlgorithm(false);
    setLevelStartTime(Date.now());
  };

  const skipToLevel = (levelId: number) => {
    if (levelId >= 0 && levelId < ROBOTICS_LEVELS.length) {
      setCurrentLevel(levelId);
    }
  };

  const getLevelColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Dễ':
        return 'text-green-400';
      case 'Trung bình':
        return 'text-yellow-400';
      case 'Khó':
        return 'text-orange-400';
      case 'Chuyên gia':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const addCommand = (command: string) => {
    if (!isRunning) {
      setCommands((prev) => [...prev, command]);
    }
  };

  const runCommands = () => {
    setIsRunning(true);
    let currentPos: [number, number] = [maze.start[0], maze.start[1]];
    const newPathHistory: [number, number][] = [currentPos];

    commands.forEach((command, index) => {
      setTimeout(() => {
        let newPos: [number, number] = [...currentPos];

        // Enhanced command processing with emoji support
        switch (command) {
          case '⬆️ Lên':
          case 'UP':
            if (
              currentPos[0] > 0 &&
              maze.grid[currentPos[0] - 1][currentPos[1]] !== 1
            ) {
              newPos[0]--;
            }
            break;
          case '⬇️ Xuống':
          case 'DOWN':
            if (
              currentPos[0] < maze.grid.length - 1 &&
              maze.grid[currentPos[0] + 1][currentPos[1]] !== 1
            ) {
              newPos[0]++;
            }
            break;
          case '⬅️ Trái':
          case 'LEFT':
            if (
              currentPos[1] > 0 &&
              maze.grid[currentPos[0]][currentPos[1] - 1] !== 1
            ) {
              newPos[1]--;
            }
            break;
          case '➡️ Phải':
          case 'RIGHT':
            if (
              currentPos[1] < maze.grid[0].length - 1 &&
              maze.grid[currentPos[0]][currentPos[1] + 1] !== 1
            ) {
              newPos[1]++;
            }
            break;
          case '🔍 Tìm đường':
          case '🤖 A* Algorithm':
            const result = calculateAStar(currentPos, [
              maze.end[0],
              maze.end[1],
            ]);
            if (result.path.length > 0) {
              newPos = result.path[1] || newPos; // Move to next step in optimal path
              setAlgorithmVisualization({
                openSet: result.steps[result.steps.length - 1]?.openSet || [],
                closedSet:
                  result.steps[result.steps.length - 1]?.closedSet || [],
                path: result.path,
              });
              setShowAlgorithm(true);
            }
            break;
        }

        currentPos = newPos;
        newPathHistory.push(newPos);
        setRobotPosition(newPos);
        setPathHistory([...newPathHistory]);

        if (index === commands.length - 1) {
          setIsRunning(false);

          // Check if reached the goal
          if (newPos[0] === maze.end[0] && newPos[1] === maze.end[1]) {
            const levelScore = Math.max(100 - commands.length * 5, 20); // Reward efficient solutions
            setScore((prev) => prev + levelScore);

            if (currentLevel < ROBOTICS_LEVELS.length - 1) {
              setTimeout(() => {
                setCurrentLevel((prev) => prev + 1);
                resetRobot();
                alert(
                  `🎉 Hoàn thành cấp độ ${currentLevel + 1}! Điểm: ${levelScore}. Tiến tới cấp độ ${currentLevel + 2}!`,
                );
              }, 1000);
            } else {
              onComplete(true, score + levelScore);
            }
          }
        }
      }, index * 800);
    });
  };

  const resetRobot = useCallback(() => {
    setRobotPosition([maze.start[0], maze.start[1]]);
    setCommands([]);
    setIsRunning(false);
    setPathHistory([]);
    setAlgorithmVisualization({ openSet: [], closedSet: [], path: [] });
    setShowAlgorithm(false);
  }, [maze]);

  useEffect(() => {
    resetRobot();
  }, [currentLevel, resetRobot]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onRestart();
    }
  }, [timeLeft, onRestart]);

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
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">
              🤖 Level {currentLevel + 1}: {currentLevelData.name}
            </h3>
            <div className="flex items-center gap-4 mt-2">
              <span
                className={`font-medium ${getLevelColor(currentLevelData.difficulty)}`}
              >
                {currentLevelData.difficulty}
              </span>
              <span className="text-blue-400">
                Algorithm: {currentLevelData.algorithm}
              </span>
              <span className="text-purple-400">
                Score: {totalScore + score}
              </span>
            </div>
          </div>

          <div className="text-right">
            <div className="text-gray-300 text-sm">
              Thời gian:{' '}
              {Math.max(
                0,
                Math.floor(
                  currentLevelData.timeLimit -
                    (Date.now() - levelStartTime) / 1000,
                ),
              )}
              s
            </div>
            <div className="text-gray-300 text-sm">
              Moves: {commands.length}/{currentLevelData.minMoves}
            </div>
          </div>
        </div>

        <p className="text-gray-300 text-sm mb-2">
          {currentLevelData.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {currentLevelData.tips.map((tip, index) => (
            <span
              key={index}
              className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded"
            >
              💡 {tip}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-white font-medium mb-3">Maze Navigation:</h4>
          <div className="bg-gray-900/50 rounded-lg p-4 mb-4">
            <div
              className="grid gap-1"
              style={{
                gridTemplateColumns: `repeat(${maze.grid[0]?.length || 1}, 1fr)`,
                maxWidth: '300px',
                aspectRatio: '1',
              }}
            >
              {maze.grid.map((row, i) =>
                row.map((cell, j) => {
                  const isStart = i === maze.start[0] && j === maze.start[1];
                  const isEnd = i === maze.end[0] && j === maze.end[1];
                  const isRobot =
                    i === robotPosition[0] && j === robotPosition[1];
                  const isPath = pathHistory.some(
                    ([x, y]) => x === i && y === j,
                  );
                  const isAlgorithmPath =
                    showAlgorithm &&
                    algorithmVisualization.path.some(
                      ([x, y]) => x === i && y === j,
                    );
                  const isOpenSet =
                    showAlgorithm &&
                    algorithmVisualization.openSet.some(
                      ([x, y]) => x === i && y === j,
                    );
                  const isClosedSet =
                    showAlgorithm &&
                    algorithmVisualization.closedSet.some(
                      ([x, y]) => x === i && y === j,
                    );

                  let bgColor = 'bg-gray-800';
                  if (cell === 1) bgColor = 'bg-gray-600'; // Wall
                  if (isStart) bgColor = 'bg-green-500';
                  if (isEnd) bgColor = 'bg-red-500';
                  if (isOpenSet) bgColor = 'bg-yellow-400/50';
                  if (isClosedSet) bgColor = 'bg-blue-400/50';
                  if (isAlgorithmPath) bgColor = 'bg-purple-500/70';
                  if (isPath) bgColor = 'bg-cyan-400/70';
                  if (isRobot) bgColor = 'bg-orange-500';

                  return (
                    <div
                      key={`${i}-${j}`}
                      className={`${bgColor} border border-gray-700 flex items-center justify-center text-xs font-bold`}
                      style={{ aspectRatio: '1' }}
                    >
                      {isRobot && '🤖'}
                      {isStart && !isRobot && '🟢'}
                      {isEnd && !isRobot && '🎯'}
                    </div>
                  );
                }),
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <button
              onClick={() => addCommand('⬆️ Lên')}
              disabled={isRunning}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-medium disabled:opacity-50"
            >
              ⬆️ Lên
            </button>
            <button
              onClick={() => addCommand('⬇️ Xuống')}
              disabled={isRunning}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-medium disabled:opacity-50"
            >
              ⬇️ Xuống
            </button>
            <button
              onClick={() => addCommand('⬅️ Trái')}
              disabled={isRunning}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-medium disabled:opacity-50"
            >
              ⬅️ Trái
            </button>
            <button
              onClick={() => addCommand('➡️ Phải')}
              disabled={isRunning}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-medium disabled:opacity-50"
            >
              ➡️ Phải
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Algorithm Control:</h4>

          <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
            <div className="mb-3">
              <label className="text-white text-sm mb-2 block">
                Select Algorithm:
              </label>
              <select
                value={selectedAlgorithm}
                onChange={(e) => setSelectedAlgorithm(e.target.value as any)}
                className="w-full bg-gray-700 text-white rounded px-3 py-2"
                disabled={isRunning}
              >
                <option value="A*">A* - Optimal + Fast</option>
                <option value="Dijkstra">Dijkstra - Guaranteed Optimal</option>
                <option value="BFS">BFS - Shortest Path</option>
              </select>
            </div>

            <button
              onClick={executePathfinding}
              disabled={isRunning}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded font-medium mb-2 disabled:opacity-50"
            >
              🔍 Find Path ({selectedAlgorithm})
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={runCommands}
                disabled={isRunning || commands.length === 0}
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded font-medium disabled:opacity-50"
              >
                ▶️ Run
              </button>
              <button
                onClick={resetLevel}
                disabled={isRunning}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded font-medium disabled:opacity-50"
              >
                🔄 Reset
              </button>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
            <h5 className="text-white font-medium mb-2">Commands Queue:</h5>
            <div className="bg-gray-900/50 rounded p-2 min-h-16 max-h-24 overflow-y-auto">
              {commands.length === 0 ? (
                <p className="text-gray-400 text-sm">No commands yet</p>
              ) : (
                <div className="flex flex-wrap gap-1">
                  {commands.map((cmd, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs"
                    >
                      {cmd}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4">
            <h5 className="text-white font-medium mb-2">Level Progress:</h5>
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-300">Current Level:</span>
                <span className="text-white">{currentLevel + 1}/100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Difficulty:</span>
                <span className={getLevelColor(currentLevelData.difficulty)}>
                  {currentLevelData.difficulty}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Points Available:</span>
                <span className="text-yellow-400">
                  {currentLevelData.pointValue}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentLevel + 1) / 100) * 100}%` }}
                />
              </div>
            </div>

            {currentLevel < 10 && (
              <div className="mt-3">
                <label className="text-white text-sm mb-2 block">
                  Quick Level Select (1-10):
                </label>
                <div className="grid grid-cols-5 gap-1">
                  {Array.from({ length: 10 }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => skipToLevel(i)}
                      className={`px-2 py-1 rounded text-xs ${
                        currentLevel === i
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-600 hover:bg-gray-500 text-gray-300'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
