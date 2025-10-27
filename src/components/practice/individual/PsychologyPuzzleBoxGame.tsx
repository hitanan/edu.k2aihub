'use client';

import React, { useState, useEffect } from 'react';
import { Brain, Clock, Target, RotateCcw, Star, CheckCircle2 } from 'lucide-react';

interface PsychologyPuzzleBoxGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface Puzzle {
  id: string;
  type: 'memory' | 'attention' | 'problem-solving' | 'pattern' | 'logic';
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  completed: boolean;
}

interface MemoryPattern {
  sequence: number[];
  currentIndex: number;
  showPattern: boolean;
}

interface AttentionTask {
  targets: { x: number; y: number; id: number }[];
  distractors: { x: number; y: number; id: number }[];
  found: number[];
}

const PsychologyPuzzleBoxGame: React.FC<PsychologyPuzzleBoxGameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'completed'>('menu');
  const [currentPuzzle, setCurrentPuzzle] = useState<Puzzle | null>(null);
  const [streak, setStreak] = useState(0);

  // Memory game state
  const [memoryPattern, setMemoryPattern] = useState<MemoryPattern>({
    sequence: [],
    currentIndex: 0,
    showPattern: false,
  });

  // Attention task state
  const [attentionTask, setAttentionTask] = useState<AttentionTask>({
    targets: [],
    distractors: [],
    found: [],
  });

  // Pattern recognition state
  const [patternGrid, setPatternGrid] = useState<boolean[][]>([]);
  const [patternSolution, setPatternSolution] = useState<boolean[][]>([]);

  const [puzzles, setPuzzles] = useState<Puzzle[]>([
    {
      id: 'memory-1',
      type: 'memory',
      title: 'Nhớ Trình Tự',
      description: 'Ghi nhớ và lặp lại chuỗi số theo đúng thứ tự',
      difficulty: 'easy',
      points: 50,
      completed: false,
    },
    {
      id: 'attention-1',
      type: 'attention',
      title: 'Tìm Mục Tiêu',
      description: 'Tìm tất cả các mục tiêu trong làn mây phân tâm',
      difficulty: 'medium',
      points: 75,
      completed: false,
    },
    {
      id: 'pattern-1',
      type: 'pattern',
      title: 'Nhận Dạng Mẫu',
      description: 'Hoàn thành mẫu hình học thiếu',
      difficulty: 'medium',
      points: 80,
      completed: false,
    },
    {
      id: 'logic-1',
      type: 'logic',
      title: 'Suy Luận Logic',
      description: 'Giải quyết bài toán logic phức tạp',
      difficulty: 'hard',
      points: 100,
      completed: false,
    },
    {
      id: 'problem-1',
      type: 'problem-solving',
      title: 'Giải Quyết Vấn Đề',
      description: 'Tìm giải pháp sáng tạo cho tình huống khó khăn',
      difficulty: 'hard',
      points: 120,
      completed: false,
    },
  ]);

  const generateMemorySequence = (length: number) => {
    const sequence = Array.from({ length }, () => Math.floor(Math.random() * 9) + 1);
    setMemoryPattern({
      sequence,
      currentIndex: 0,
      showPattern: true,
    });

    // Hide pattern after showing
    setTimeout(
      () => {
        setMemoryPattern((prev) => ({ ...prev, showPattern: false }));
      },
      length * 800 + 1000,
    );
  };

  const generateAttentionTask = () => {
    const targets = Array.from({ length: 5 }, (_, i) => ({
      x: Math.random() * 400 + 50,
      y: Math.random() * 300 + 50,
      id: i,
    }));

    const distractors = Array.from({ length: 15 }, (_, i) => ({
      x: Math.random() * 400 + 50,
      y: Math.random() * 300 + 50,
      id: i + 100,
    }));

    setAttentionTask({
      targets,
      distractors,
      found: [],
    });
  };

  const generatePatternGrid = () => {
    const size = 4;
    const pattern = Array(size)
      .fill(null)
      .map(() => Array(size).fill(false));
    const solution = Array(size)
      .fill(null)
      .map(() => Array(size).fill(false));

    // Create a simple pattern (cross shape)
    for (let i = 0; i < size; i++) {
      solution[i][Math.floor(size / 2)] = true; // Vertical line
      solution[Math.floor(size / 2)][i] = true; // Horizontal line
    }

    // Remove some pieces to create puzzle
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        pattern[i][j] = solution[i][j] && Math.random() > 0.4;
      }
    }

    setPatternGrid(pattern);
    setPatternSolution(solution);
  };

  const startPuzzle = (puzzle: Puzzle) => {
    setCurrentPuzzle(puzzle);
    setGameState('playing');

    switch (puzzle.type) {
      case 'memory':
        generateMemorySequence(4 + Math.floor(Math.random() * 3));
        break;
      case 'attention':
        generateAttentionTask();
        break;
      case 'pattern':
        generatePatternGrid();
        break;
      default:
        break;
    }
  };

  const handleMemoryClick = (number: number) => {
    if (!currentPuzzle || currentPuzzle.type !== 'memory') return;

    const expectedNumber = memoryPattern.sequence[memoryPattern.currentIndex];
    if (number === expectedNumber) {
      const newIndex = memoryPattern.currentIndex + 1;
      if (newIndex === memoryPattern.sequence.length) {
        // Puzzle completed
        completePuzzle(true);
      } else {
        setMemoryPattern((prev) => ({ ...prev, currentIndex: newIndex }));
      }
    } else {
      completePuzzle(false);
    }
  };

  const handleAttentionClick = (x: number, y: number) => {
    if (!currentPuzzle || currentPuzzle.type !== 'attention') return;

    const target = attentionTask.targets.find((t) => Math.abs(t.x - x) < 25 && Math.abs(t.y - y) < 25);

    if (target && !attentionTask.found.includes(target.id)) {
      const newFound = [...attentionTask.found, target.id];
      setAttentionTask((prev) => ({ ...prev, found: newFound }));

      if (newFound.length === attentionTask.targets.length) {
        completePuzzle(true);
      }
    }
  };

  const handlePatternClick = (row: number, col: number) => {
    if (!currentPuzzle || currentPuzzle.type !== 'pattern') return;

    const newGrid = patternGrid.map((r, i) => r.map((c, j) => (i === row && j === col ? !c : c)));
    setPatternGrid(newGrid);

    // Check if pattern matches solution
    const matches = newGrid.every((r, i) => r.every((c, j) => c === patternSolution[i][j]));

    if (matches) {
      completePuzzle(true);
    }
  };

  const completePuzzle = (success: boolean) => {
    if (!currentPuzzle) return;

    if (success) {
      setScore((prev) => prev + currentPuzzle.points + streak * 10);
      setStreak((prev) => prev + 1);
      setPuzzles((prev) => prev.map((p) => (p.id === currentPuzzle.id ? { ...p, completed: true } : p)));
    } else {
      setStreak(0);
    }

    setTimeout(() => {
      setGameState('menu');
      setCurrentPuzzle(null);
    }, 2000);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'text-green-400 bg-green-900/30 border-green-700';
      case 'medium':
        return 'text-yellow-400 bg-yellow-900/30 border-yellow-700';
      case 'hard':
        return 'text-red-400 bg-red-900/30 border-red-700';
      default:
        return 'text-gray-400 bg-gray-900/30 border-gray-700';
    }
  };

  // Game completion check
  useEffect(() => {
    const completedCount = puzzles.filter((p) => p.completed).length;
    if (completedCount >= puzzles.length * 0.8) {
      setGameState('completed');
      onComplete(true, score);
    }
  }, [puzzles, score, onComplete]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete(false, score);
    }
  }, [timeLeft, onComplete, score]);

  if (gameState === 'menu') {
    return (
      <div className="w-full h-full bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center mb-4">
              <Brain className="w-12 h-12 text-purple-400 mr-4" />
              <div>
                <h2 className="text-3xl font-bold">Hộp Thách Thức Tâm Lý</h2>
                <p className="text-lg text-gray-300">Rèn luyện các kỹ năng nhận thức</p>
              </div>
            </div>

            <div className="flex justify-center items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-green-400" />
                <span className="font-semibold">{score} điểm</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">Streak: {streak}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-red-400" />
                <span className="font-semibold">{Math.max(0, timeLeft)}s</span>
              </div>
            </div>
          </div>

          {/* Puzzles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {puzzles.map((puzzle) => (
              <div
                key={puzzle.id}
                className={`bg-black/30 backdrop-blur-sm rounded-lg p-6 border-2 transition-all cursor-pointer hover:scale-105 ${
                  puzzle.completed ? 'border-green-500 bg-green-900/20' : 'border-purple-500 hover:border-purple-400'
                }`}
                onClick={() => !puzzle.completed && startPuzzle(puzzle)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        puzzle.type === 'memory'
                          ? 'bg-blue-600'
                          : puzzle.type === 'attention'
                            ? 'bg-green-600'
                            : puzzle.type === 'pattern'
                              ? 'bg-purple-600'
                              : puzzle.type === 'logic'
                                ? 'bg-red-600'
                                : 'bg-orange-600'
                      }`}
                    >
                      {puzzle.type === 'memory'
                        ? '🧠'
                        : puzzle.type === 'attention'
                          ? '👁️'
                          : puzzle.type === 'pattern'
                            ? '🔷'
                            : puzzle.type === 'logic'
                              ? '🤔'
                              : '💡'}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{puzzle.title}</h3>
                      <div className={`text-xs px-2 py-1 rounded border ${getDifficultyColor(puzzle.difficulty)}`}>
                        {puzzle.difficulty.toUpperCase()}
                      </div>
                    </div>
                  </div>

                  {puzzle.completed && <CheckCircle2 className="w-6 h-6 text-green-400" />}
                </div>

                <p className="text-sm text-gray-300 mb-4">{puzzle.description}</p>

                <div className="flex justify-between items-center">
                  <span className="text-yellow-400 font-semibold">+{puzzle.points} điểm</span>
                  <div className="text-xs text-gray-400">{puzzle.type.replace('-', ' ').toUpperCase()}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Restart Button */}
          <div className="text-center mt-8">
            <button
              onClick={onRestart}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-colors flex items-center mx-auto"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Làm Mới Thử Thách
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'playing' && currentPuzzle) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">{currentPuzzle.title}</h2>
              <p className="text-gray-300">{currentPuzzle.description}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-red-400" />
                <span className="font-semibold">{Math.max(0, timeLeft)}s</span>
              </div>
              <button
                onClick={() => setGameState('menu')}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition-colors"
              >
                ← Quay Lại
              </button>
            </div>
          </div>

          {/* Puzzle Content */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 min-h-96">
            {currentPuzzle.type === 'memory' && (
              <div className="text-center">
                <h3 className="text-xl mb-6">
                  {memoryPattern.showPattern ? 'Ghi nhớ chuỗi số:' : 'Nhấp theo thứ tự:'}
                </h3>

                {memoryPattern.showPattern ? (
                  <div className="flex justify-center space-x-2 mb-8">
                    {memoryPattern.sequence.map((num, index) => (
                      <div
                        key={index}
                        className={`w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-xl font-bold ${
                          index === memoryPattern.currentIndex ? 'ring-2 ring-yellow-400' : ''
                        }`}
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto">
                    {Array.from({ length: 9 }, (_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => handleMemoryClick(i + 1)}
                        className="w-16 h-16 bg-gray-700 hover:bg-gray-600 rounded-lg text-xl font-bold transition-colors"
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {currentPuzzle.type === 'attention' && (
              <div className="text-center">
                <h3 className="text-xl mb-4">Tìm tất cả các mục tiêu màu đỏ:</h3>
                <p className="text-sm text-gray-400 mb-6">
                  Đã tìm: {attentionTask.found.length}/{attentionTask.targets.length}
                </p>

                <div
                  className="relative bg-gray-800 rounded-lg h-96 mx-auto cursor-crosshair"
                  style={{ maxWidth: '500px' }}
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    handleAttentionClick(x, y);
                  }}
                >
                  {/* Targets */}
                  {attentionTask.targets.map((target) => (
                    <div
                      key={target.id}
                      className={`absolute w-6 h-6 rounded-full ${
                        attentionTask.found.includes(target.id) ? 'bg-green-400' : 'bg-red-500'
                      }`}
                      style={{
                        left: target.x,
                        top: target.y,
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                  ))}

                  {/* Distractors */}
                  {attentionTask.distractors.map((distractor) => (
                    <div
                      key={distractor.id}
                      className="absolute w-4 h-4 bg-blue-400 rounded-full"
                      style={{
                        left: distractor.x,
                        top: distractor.y,
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {currentPuzzle.type === 'pattern' && (
              <div className="text-center">
                <h3 className="text-xl mb-6">Hoàn thành mẫu hình (tạo hình thập tự):</h3>

                <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
                  {patternGrid.map((row, i) =>
                    row.map((cell, j) => (
                      <button
                        key={`${i}-${j}`}
                        onClick={() => handlePatternClick(i, j)}
                        className={`w-16 h-16 border-2 rounded-lg transition-all ${
                          cell ? 'bg-blue-500 border-blue-400' : 'bg-gray-700 border-gray-600'
                        } hover:border-white`}
                      />
                    )),
                  )}
                </div>
              </div>
            )}

            {(currentPuzzle.type === 'logic' || currentPuzzle.type === 'problem-solving') && (
              <div className="text-center">
                <h3 className="text-xl mb-6">
                  {currentPuzzle.type === 'logic' ? 'Bài Toán Logic' : 'Thách Thức Giải Quyết'}
                </h3>

                <div className="bg-gray-800 p-6 rounded-lg max-w-2xl mx-auto mb-6">
                  <p className="text-lg mb-4">
                    {currentPuzzle.type === 'logic'
                      ? 'Ba người A, B, C. A nói: "B luôn nói dối". B nói: "C luôn nói dối". C nói: "A và B đều nói dối". Ai nói thật?'
                      : 'Bạn có 3 chiếc cốc: 8 lít (đầy), 5 lít (trống), 3 lít (trống). Làm sao để có chính xác 4 lít nước?'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentPuzzle.type === 'logic' ? (
                    <>
                      <button
                        onClick={() => completePuzzle(false)}
                        className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg transition-colors"
                      >
                        A nói thật
                      </button>
                      <button
                        onClick={() => completePuzzle(false)}
                        className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg transition-colors"
                      >
                        B nói thật
                      </button>
                      <button
                        onClick={() => completePuzzle(true)}
                        className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-colors"
                      >
                        C nói thật
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => completePuzzle(false)}
                        className="bg-red-600 hover:bg-red-700 px-4 py-3 rounded-lg transition-colors text-sm"
                      >
                        8→5, 5→3, 3→8
                      </button>
                      <button
                        onClick={() => completePuzzle(true)}
                        className="bg-green-600 hover:bg-green-700 px-4 py-3 rounded-lg transition-colors text-sm"
                      >
                        8→5, 5→3, 8→3, 3→5, 8→5
                      </button>
                      <button
                        onClick={() => completePuzzle(false)}
                        className="bg-red-600 hover:bg-red-700 px-4 py-3 rounded-lg transition-colors text-sm"
                      >
                        8→3, 3→5, 5→8
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'completed') {
    return (
      <div className="w-full h-full bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white flex items-center justify-center">
        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl text-center max-w-md mx-4">
          <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Brain className="w-10 h-10 text-purple-900" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Xuất Sắc Về Nhận Thức!</h2>
          <p className="text-lg mb-4">Bạn đã hoàn thành các thách thức tâm lý!</p>
          <div className="text-purple-200 space-y-1 mb-6">
            <div>Điểm cuối: {score}</div>
            <div>Streak tối đa: {streak}</div>
            <div>
              Puzzle hoàn thành: {puzzles.filter((p) => p.completed).length}/{puzzles.length}
            </div>
          </div>
          <button
            onClick={onRestart}
            className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Practice again
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default PsychologyPuzzleBoxGame;
