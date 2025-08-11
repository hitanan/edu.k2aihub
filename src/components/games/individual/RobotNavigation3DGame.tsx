import React, { useState, useEffect, useCallback } from 'react';

interface Position3D {
  x: number;
  y: number;
  z: number;
}

interface Collectible {
  x: number;
  y: number;
  z: number;
  type: 'energy' | 'data' | 'coin';
}

interface Level {
  name: string;
  description: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  start: Position3D;
  goal: Position3D;
  obstacles: Position3D[];
  collectibles?: Collectible[];
  educational: {
    concept: string;
    algorithmFocus: string;
    learningGoal: string;
  };
}

interface GameData {
  levels: Level[];
}

interface RobotNavigation3DGameProps {
  gameData?: GameData;
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface PathNode {
  pos: Position3D;
  f: number;
  g: number;
  h: number;
  parent?: PathNode;
}

// Robot Navigation 3D Game Component
export function RobotNavigation3DGame({ gameData, onComplete, timeLeft, onRestart }: RobotNavigation3DGameProps) {
  // Default levels if no gameData provided
  const defaultGameData: GameData = {
    levels: [
      {
        name: 'Cấp độ cơ bản',
        description: 'Học cách điều hướng robot trong không gian 3D',
        dimensions: { width: 8, height: 3, depth: 8 },
        start: { x: 0, y: 0, z: 0 },
        goal: { x: 7, y: 0, z: 7 },
        obstacles: [
          { x: 2, y: 0, z: 2 },
          { x: 3, y: 0, z: 4 },
          { x: 5, y: 0, z: 3 },
        ],
        educational: {
          concept: 'Thuật toán A*',
          algorithmFocus: 'Pathfinding cơ bản',
          learningGoal: 'Hiểu cách robot tìm đường',
        },
      },
      {
        name: 'Cấp độ trung bình',
        description: 'Thử thách với nhiều chướng ngại vật hơn',
        dimensions: { width: 8, height: 3, depth: 8 },
        start: { x: 0, y: 0, z: 0 },
        goal: { x: 7, y: 2, z: 7 },
        obstacles: [
          { x: 1, y: 0, z: 1 },
          { x: 2, y: 0, z: 1 },
          { x: 3, y: 0, z: 2 },
          { x: 4, y: 0, z: 3 },
          { x: 5, y: 0, z: 4 },
          { x: 6, y: 0, z: 5 },
        ],
        educational: {
          concept: 'Pathfinding 3D',
          algorithmFocus: 'Tối ưu hóa đường đi',
          learningGoal: 'Xử lý không gian phức tạp',
        },
      },
    ],
  };

  const effectiveGameData = gameData || defaultGameData;

  const [currentLevel, setCurrentLevel] = useState(0);
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0, z: 0 });
  const [goalPosition, setGoalPosition] = useState({ x: 7, y: 0, z: 7 });
  const [isMoving, setIsMoving] = useState(false);
  const [score, setScore] = useState(0);
  const [collectedItems, setCollectedItems] = useState<Set<string>>(new Set());
  const [pathHistory, setPathHistory] = useState<Array<{ x: number; y: number; z: number }>>([]);
  const [showPath, setShowPath] = useState(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('astar');
  const [isCalculatingPath, setIsCalculatingPath] = useState(false);
  const [currentPath, setCurrentPath] = useState<Array<{ x: number; y: number; z: number }>>([]);

  const level = effectiveGameData?.levels?.[currentLevel];

  useEffect(() => {
    if (level) {
      setRobotPosition(level.start);
      setGoalPosition(level.goal);
      setCollectedItems(new Set());
      setPathHistory([level.start]);
      setCurrentPath([]);
    }
  }, [level, currentLevel]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onRestart();
    }
  }, [timeLeft, onRestart]);

  // A* pathfinding algorithm for 3D space
  const calculatePath = useCallback(
    (start: { x: number; y: number; z: number }, goal: { x: number; y: number; z: number }) => {
      if (!level) return [];

      setIsCalculatingPath(true);

      // A* implementation
      const openSet: PathNode[] = [];
      const closedSet: Set<string> = new Set();

      const heuristic = (a: Position3D, b: Position3D) => {
        return Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z);
      };

      const isObstacle = (pos: Position3D) => {
        return level.obstacles.some((obs: Position3D) => obs.x === pos.x && obs.y === pos.y && obs.z === pos.z);
      };

      const isInBounds = (pos: Position3D) => {
        return (
          pos.x >= 0 &&
          pos.x < level.dimensions.width &&
          pos.y >= 0 &&
          pos.y < level.dimensions.height &&
          pos.z >= 0 &&
          pos.z < level.dimensions.depth
        );
      };

      const startNode: PathNode = {
        pos: start,
        g: 0,
        h: heuristic(start, goal),
        f: 0,
      };
      startNode.f = startNode.g + startNode.h;
      openSet.push(startNode);

      while (openSet.length > 0) {
        // Find node with lowest f score
        const currentIndex = openSet.reduce(
          (minIndex, node, index) => (node.f < openSet[minIndex].f ? index : minIndex),
          0,
        );
        const current = openSet.splice(currentIndex, 1)[0];

        const currentKey = `${current.pos.x},${current.pos.y},${current.pos.z}`;
        closedSet.add(currentKey);

        // Check if we reached the goal
        if (current.pos.x === goal.x && current.pos.y === goal.y && current.pos.z === goal.z) {
          const path: Position3D[] = [];
          let node: PathNode | undefined = current;
          while (node) {
            path.unshift(node.pos);
            node = node.parent;
          }
          setIsCalculatingPath(false);
          return path;
        }

        // Check all 6 neighbors (3D movement)
        const neighbors = [
          { x: current.pos.x + 1, y: current.pos.y, z: current.pos.z },
          { x: current.pos.x - 1, y: current.pos.y, z: current.pos.z },
          { x: current.pos.x, y: current.pos.y + 1, z: current.pos.z },
          { x: current.pos.x, y: current.pos.y - 1, z: current.pos.z },
          { x: current.pos.x, y: current.pos.y, z: current.pos.z + 1 },
          { x: current.pos.x, y: current.pos.y, z: current.pos.z - 1 },
        ];

        for (const neighbor of neighbors) {
          const neighborKey = `${neighbor.x},${neighbor.y},${neighbor.z}`;

          if (!isInBounds(neighbor) || isObstacle(neighbor) || closedSet.has(neighborKey)) {
            continue;
          }

          const tentativeG = current.g + 1;

          const existingNode = openSet.find(
            (node) => node.pos.x === neighbor.x && node.pos.y === neighbor.y && node.pos.z === neighbor.z,
          );

          if (!existingNode) {
            const neighborNode: PathNode = {
              pos: neighbor,
              g: tentativeG,
              h: heuristic(neighbor, goal),
              f: 0,
              parent: current,
            };
            neighborNode.f = neighborNode.g + neighborNode.h;
            openSet.push(neighborNode);
          } else if (tentativeG < existingNode.g) {
            existingNode.g = tentativeG;
            existingNode.f = existingNode.g + existingNode.h;
            existingNode.parent = current;
          }
        }
      }

      setIsCalculatingPath(false);
      return []; // No path found
    },
    [level],
  );

  const moveRobot = (direction: 'x+' | 'x-' | 'y+' | 'y-' | 'z+' | 'z-') => {
    if (isMoving || !level) return;

    const newPos = { ...robotPosition };
    switch (direction) {
      case 'x+':
        newPos.x++;
        break;
      case 'x-':
        newPos.x--;
        break;
      case 'y+':
        newPos.y++;
        break;
      case 'y-':
        newPos.y--;
        break;
      case 'z+':
        newPos.z++;
        break;
      case 'z-':
        newPos.z--;
        break;
    }

    // Check bounds
    if (
      newPos.x < 0 ||
      newPos.x >= level.dimensions.width ||
      newPos.y < 0 ||
      newPos.y >= level.dimensions.height ||
      newPos.z < 0 ||
      newPos.z >= level.dimensions.depth
    ) {
      return;
    }

    // Check obstacles
    const isObstacle = level.obstacles.some(
      (obs: Position3D) => obs.x === newPos.x && obs.y === newPos.y && obs.z === newPos.z,
    );
    if (isObstacle) return;

    setIsMoving(true);
    setTimeout(() => {
      setRobotPosition(newPos);
      setPathHistory((prev) => [...prev, newPos]);

      // Check for collectibles
      const collectible = level.collectibles?.find(
        (item: Collectible) => item.x === newPos.x && item.y === newPos.y && item.z === newPos.z,
      );
      if (collectible) {
        const itemKey = `${newPos.x},${newPos.y},${newPos.z}`;
        if (!collectedItems.has(itemKey)) {
          setCollectedItems((prev) => new Set([...prev, itemKey]));
          setScore((prev) => prev + (collectible.type === 'energy' ? 50 : collectible.type === 'data' ? 30 : 10));
        }
      }

      // Check if reached goal
      if (newPos.x === goalPosition.x && newPos.y === goalPosition.y && newPos.z === goalPosition.z) {
        const timeBonus = Math.max(0, timeLeft * 2);
        const pathEfficiency = Math.max(0, 100 - pathHistory.length);
        const collectibleBonus = collectedItems.size * 20;
        const finalScore = score + timeBonus + pathEfficiency + collectibleBonus;

        if (currentLevel < effectiveGameData.levels.length - 1) {
          setCurrentLevel((prev) => prev + 1);
          setScore(finalScore);
        } else {
          onComplete(true, finalScore);
        }
      }

      setIsMoving(false);
    }, 300);
  };

  const autoNavigate = () => {
    const path = calculatePath(robotPosition, goalPosition);
    if (path.length > 1) {
      setCurrentPath(path);
      setShowPath(true);

      // Execute path step by step
      let stepIndex = 1; // Skip first position (current)
      const executeStep = () => {
        if (stepIndex < path.length) {
          const currentPos = path[stepIndex - 1];
          const nextPos = path[stepIndex];

          if (nextPos.x > currentPos.x) moveRobot('x+');
          else if (nextPos.x < currentPos.x) moveRobot('x-');
          else if (nextPos.y > currentPos.y) moveRobot('y+');
          else if (nextPos.y < currentPos.y) moveRobot('y-');
          else if (nextPos.z > currentPos.z) moveRobot('z+');
          else if (nextPos.z < currentPos.z) moveRobot('z-');

          stepIndex++;
          setTimeout(executeStep, 500);
        }
      };

      setTimeout(executeStep, 500);
    }
  };

  const resetLevel = () => {
    if (level) {
      setRobotPosition(level.start);
      setCollectedItems(new Set());
      setPathHistory([level.start]);
      setCurrentPath([]);
      setShowPath(false);
    }
  };

  if (!level) {
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
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{level.name}</h3>
            <p className="text-gray-300 text-sm">{level.description}</p>
          </div>
          <div className="text-right">
            <div className="text-cyan-400 font-bold">Cấp độ {currentLevel + 1}</div>
            <div className="text-yellow-400">Điểm: {score}</div>
          </div>
        </div>

        {/* Educational Info */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 mb-4">
          <h4 className="text-white font-semibold mb-2">📚 Kiến thức:</h4>
          <p className="text-gray-300 text-sm mb-1">
            <strong>Khái niệm:</strong> {level.educational.concept}
          </p>
          <p className="text-gray-300 text-sm mb-1">
            <strong>Thuật toán:</strong> {level.educational.algorithmFocus}
          </p>
          <p className="text-gray-300 text-sm">
            <strong>Mục tiêu:</strong> {level.educational.learningGoal}
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* 3D Visualization - Full Width */}
        <div>
          <h4 className="text-white font-medium mb-3">🎮 Môi trường 3D Robot Navigation:</h4>
          <div
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 relative overflow-hidden"
            style={{ height: '500px', perspective: '1200px' }}
          >
            {/* 3D Grid Visualization */}
            <div
              className="relative w-full h-full"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateX(45deg) rotateY(30deg)',
              }}
            >
              {/* Render 3D Grid */}
              {Array.from({ length: level.dimensions.depth }, (_, z) =>
                Array.from({ length: level.dimensions.width }, (_, x) =>
                  Array.from({ length: level.dimensions.height }, (_, y) => {
                    const isRobot = robotPosition.x === x && robotPosition.y === y && robotPosition.z === z;
                    const isGoal = goalPosition.x === x && goalPosition.y === y && goalPosition.z === z;
                    const isObstacle = level.obstacles.some(
                      (obs: Position3D) => obs.x === x && obs.y === y && obs.z === z,
                    );
                    const collectible = level.collectibles?.find(
                      (item: Collectible) => item.x === x && item.y === y && item.z === z,
                    );
                    const isCollected = collectedItems.has(`${x},${y},${z}`);
                    const isInPath = currentPath.some((pos) => pos.x === x && pos.y === y && pos.z === z);

                    let className = 'absolute border border-gray-600/30 transition-all duration-300 ';
                    let content = '';

                    if (isRobot) {
                      className += 'bg-cyan-500 border-cyan-300 shadow-lg shadow-cyan-500/50 ';
                      content = '🤖';
                    } else if (isGoal) {
                      className += 'bg-green-500 border-green-300 shadow-lg shadow-green-500/50 ';
                      content = '🎯';
                    } else if (isObstacle) {
                      className += 'bg-red-500 border-red-300 opacity-80 ';
                      content = '🧱';
                    } else if (collectible && !isCollected) {
                      className += 'bg-yellow-500 border-yellow-300 opacity-80 ';
                      content = collectible.type === 'energy' ? '⚡' : collectible.type === 'data' ? '💾' : '💰';
                    } else if (isInPath && showPath) {
                      className += 'bg-blue-400/50 border-blue-300 ';
                    } else {
                      className += 'bg-gray-700/20 ';
                    }

                    const scale = 30; // Optimized pixel size for better 3D visibility
                    const xOffset = x * scale;
                    const yOffset = y * scale;
                    const zOffset = z * scale;

                    return (
                      <div
                        key={`${x}-${y}-${z}`}
                        className={className}
                        style={{
                          width: `${scale}px`,
                          height: `${scale}px`,
                          transform: `translate3d(${xOffset + zOffset * 0.7}px, ${yOffset - zOffset * 0.7}px, ${zOffset}px)`,
                          transformOrigin: 'center center',
                          fontSize: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          zIndex: isRobot ? 100 : isGoal ? 90 : 10,
                          position: 'absolute',
                          boxShadow: isRobot || isGoal ? '0 4px 12px rgba(0,0,0,0.6)' : '0 2px 6px rgba(0,0,0,0.3)',
                        }}
                      >
                        {content}
                      </div>
                    );
                  }),
                ),
              )}
            </div>

            {/* Enhanced Controls Overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4">
                <div className="text-white text-sm mb-3 text-center font-medium">🕹️ Điều khiển Robot (Góc nhìn 3D)</div>

                {/* Y (Height) Controls - Corrected for 3D perspective */}
                <div className="grid grid-cols-3 gap-2 mb-2">
                  <div></div>
                  <button
                    onClick={() => moveRobot('y-')}
                    disabled={isMoving}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded text-sm disabled:opacity-50 font-medium"
                    title="Lên cao (từ góc nhìn 3D)"
                  >
                    ⬆️ Cao
                  </button>
                  <div></div>
                </div>

                {/* Z and X Controls */}
                <div className="grid grid-cols-3 gap-2 mb-2">
                  <button
                    onClick={() => moveRobot('z-')}
                    disabled={isMoving}
                    className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded text-sm disabled:opacity-50 font-medium"
                    title="Lui (Z-)"
                  >
                    🔺 Lui
                  </button>
                  <button
                    onClick={() => moveRobot('x-')}
                    disabled={isMoving}
                    className="bg-green-600 hover:bg-green-700 text-white p-2 rounded text-sm disabled:opacity-50 font-medium"
                    title="Trái (X-)"
                  >
                    ⬅️ Trái
                  </button>
                  <button
                    onClick={() => moveRobot('x+')}
                    disabled={isMoving}
                    className="bg-green-600 hover:bg-green-700 text-white p-2 rounded text-sm disabled:opacity-50 font-medium"
                    title="Phải (X+)"
                  >
                    ➡️ Phải
                  </button>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-3 gap-2">
                  <div></div>
                  <button
                    onClick={() => moveRobot('y+')}
                    disabled={isMoving}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded text-sm disabled:opacity-50 font-medium"
                    title="Xuống thấp (từ góc nhìn 3D)"
                  >
                    ⬇️ Thấp
                  </button>
                  <button
                    onClick={() => moveRobot('z+')}
                    disabled={isMoving}
                    className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded text-sm disabled:opacity-50 font-medium"
                    title="Tới (Z+)"
                  >
                    🔻 Tới
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls and Info - Full Width */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Algorithm Controls */}
          <div>
            <h4 className="text-white font-medium mb-3">🎛️ Điều khiển:</h4>

            {/* Algorithm Selection */}
            <div className="mb-4">
              <label className="text-white text-sm mb-2 block">Thuật toán:</label>
              <select
                value={selectedAlgorithm}
                onChange={(e) => setSelectedAlgorithm(e.target.value)}
                className="w-full bg-gray-800 text-white p-2 rounded border border-gray-600"
              >
                <option value="astar">A* (Tối ưu)</option>
                <option value="dijkstra">Dijkstra (Đảm bảo)</option>
                <option value="bfs">BFS (Đơn giản)</option>
              </select>
            </div>

            {/* Auto Navigation */}
            <div className="space-y-2">
              <button
                onClick={autoNavigate}
                disabled={isMoving || isCalculatingPath}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 disabled:opacity-50"
              >
                {isCalculatingPath ? 'Đang tính toán...' : '🤖 Tự động điều hướng'}
              </button>

              <button
                onClick={() => setShowPath(!showPath)}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                {showPath ? '👁️ Ẩn đường đi' : '👁️ Hiện đường đi'}
              </button>

              <button
                onClick={resetLevel}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-200"
              >
                🔄 Khởi động lại
              </button>
            </div>
          </div>

          {/* Game Stats */}
          <div>
            <h5 className="text-white font-medium mb-3">📊 Thống kê:</h5>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="space-y-1 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>Vị trí hiện tại:</span>
                  <span className="text-cyan-400">
                    ({robotPosition.x}, {robotPosition.y}, {robotPosition.z})
                  </span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Mục tiêu:</span>
                  <span className="text-green-400">
                    ({goalPosition.x}, {goalPosition.y}, {goalPosition.z})
                  </span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Số bước đã đi:</span>
                  <span className="text-yellow-400">{pathHistory.length - 1}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Vật phẩm thu thập:</span>
                  <span className="text-purple-400">
                    {collectedItems.size}/{level.collectibles?.length || 0}
                  </span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Thuật toán:</span>
                  <span className="text-blue-400 capitalize">{selectedAlgorithm}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div>
            <h5 className="text-white font-medium mb-3">🎯 Tiến độ:</h5>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="w-full bg-gray-700 rounded-full h-3 mb-3">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-400 h-3 rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentLevel + 1) / effectiveGameData.levels.length) * 100}%`,
                  }}
                />
              </div>
              <p className="text-gray-300 text-sm text-center">
                Cấp độ {currentLevel + 1} / {effectiveGameData.levels.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
