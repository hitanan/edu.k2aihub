'use client';

import React, { useState, useEffect } from 'react';
import { Search, BarChart3, Eye, Clock, Target, RotateCcw, TrendingUp, AlertTriangle } from 'lucide-react';

interface DataDetectiveGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface Dataset {
  id: string;
  name: string;
  data: Array<{
    category: string;
    value: number;
    trend: 'up' | 'down' | 'stable';
    anomaly?: boolean;
  }>;
  insight: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

interface Investigation {
  id: string;
  title: string;
  question: string;
  dataset: Dataset;
  correctAnswer: string;
  options: string[];
  points: number;
  completed: boolean;
}

const DataDetectiveGame: React.FC<DataDetectiveGameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'menu' | 'investigating' | 'completed'>('menu');
  const [currentInvestigation, setCurrentInvestigation] = useState<Investigation | null>(null);
  const [selectedChart, setSelectedChart] = useState<'bar' | 'line' | 'pie'>('bar');
  const [findings, setFindings] = useState<string[]>([]);
  const [accuracy, setAccuracy] = useState(100);

  const [investigations, setInvestigations] = useState<Investigation[]>([
    {
      id: 'sales-analysis',
      title: 'Phân Tích Doanh Thu',
      question: 'Tháng nào có doanh thu bất thường?',
      dataset: {
        id: 'sales-data',
        name: 'Doanh Thu Theo Tháng',
        data: [
          { category: 'T1', value: 120, trend: 'stable' },
          { category: 'T2', value: 135, trend: 'up' },
          { category: 'T3', value: 125, trend: 'down' },
          { category: 'T4', value: 180, trend: 'up', anomaly: true }, // Anomaly
          { category: 'T5', value: 130, trend: 'down' },
          { category: 'T6', value: 140, trend: 'up' },
        ],
        insight: 'Tháng 4 có sự tăng trưởng bất thường do campaign marketing đặc biệt',
        difficulty: 'easy',
      },
      correctAnswer: 'Tháng 4',
      options: ['Tháng 2', 'Tháng 4', 'Tháng 6', 'Tháng 1'],
      points: 50,
      completed: false,
    },
    {
      id: 'user-behavior',
      title: 'Hành Vi Người Dùng',
      question: 'Thời gian nào trong ngày có lưu lượng truy cập cao nhất?',
      dataset: {
        id: 'traffic-data',
        name: 'Lưu Lượng Theo Giờ',
        data: [
          { category: '0-6h', value: 45, trend: 'stable' },
          { category: '6-12h', value: 120, trend: 'up' },
          { category: '12-18h', value: 200, trend: 'up', anomaly: true },
          { category: '18-24h', value: 180, trend: 'down' },
        ],
        insight: 'Giờ cao điểm từ 12-18h khi người dùng làm việc và nghỉ trưa',
        difficulty: 'medium',
      },
      correctAnswer: '12-18h',
      options: ['0-6h', '6-12h', '12-18h', '18-24h'],
      points: 75,
      completed: false,
    },
    {
      id: 'performance-metrics',
      title: 'Hiệu Suất Hệ Thống',
      question: 'Metric nào cho thấy vấn đề về hiệu suất?',
      dataset: {
        id: 'performance-data',
        name: 'Metrics Hiệu Suất',
        data: [
          { category: 'CPU', value: 65, trend: 'stable' },
          { category: 'RAM', value: 78, trend: 'up' },
          { category: 'Disk I/O', value: 95, trend: 'up', anomaly: true }, // Problem
          { category: 'Network', value: 55, trend: 'down' },
        ],
        insight: 'Disk I/O cao có thể gây chậm toàn hệ thống',
        difficulty: 'medium',
      },
      correctAnswer: 'Disk I/O',
      options: ['CPU', 'RAM', 'Disk I/O', 'Network'],
      points: 80,
      completed: false,
    },
    {
      id: 'financial-trend',
      title: 'Xu Hướng Tài Chính',
      question: 'Dựa vào xu hướng, quý nào có khả năng tăng trưởng mạnh nhất?',
      dataset: {
        id: 'quarterly-data',
        name: 'Tăng Trưởng Theo Quý',
        data: [
          { category: 'Q1', value: 100, trend: 'stable' },
          { category: 'Q2', value: 125, trend: 'up' },
          { category: 'Q3', value: 160, trend: 'up' },
          { category: 'Q4', value: 220, trend: 'up', anomaly: true },
        ],
        insight: 'Q4 thường có tăng trưởng mạnh do mùa mua sắm cuối năm',
        difficulty: 'hard',
      },
      correctAnswer: 'Q4',
      options: ['Q1', 'Q2', 'Q3', 'Q4'],
      points: 100,
      completed: false,
    },
    {
      id: 'correlation-analysis',
      title: 'Phân Tích Tương Quan',
      question: 'Yếu tố nào có tương quan mạnh nhất với doanh thu?',
      dataset: {
        id: 'correlation-data',
        name: 'Các Yếu Tố Ảnh Hưởng',
        data: [
          { category: 'Quảng cáo', value: 85, trend: 'up', anomaly: true },
          { category: 'Giá cả', value: 45, trend: 'down' },
          { category: 'Chất lượng', value: 70, trend: 'up' },
          { category: 'Thời tiết', value: 25, trend: 'stable' },
        ],
        insight: 'Chi phí quảng cáo có mối tương quan mạnh với doanh thu',
        difficulty: 'hard',
      },
      correctAnswer: 'Quảng cáo',
      options: ['Quảng cáo', 'Giá cả', 'Chất lượng', 'Thời tiết'],
      points: 120,
      completed: false,
    },
  ]);

  const startInvestigation = (investigation: Investigation) => {
    setCurrentInvestigation(investigation);
    setGameState('investigating');
    setFindings([]);
  };

  const submitAnswer = (selectedAnswer: string) => {
    if (!currentInvestigation) return;

    const isCorrect = selectedAnswer === currentInvestigation.correctAnswer;

    if (isCorrect) {
      setScore((prev) => prev + currentInvestigation.points);
      setFindings((prev) => [...prev, currentInvestigation.dataset.insight]);
      setInvestigations((prev) =>
        prev.map((inv) => (inv.id === currentInvestigation.id ? { ...inv, completed: true } : inv)),
      );
    } else {
      setAccuracy((prev) => Math.max(0, prev - 10));
    }

    setTimeout(() => {
      setGameState('menu');
      setCurrentInvestigation(null);
    }, 2000);
  };

  const renderChart = (data: Dataset['data'], type: 'bar' | 'line' | 'pie') => {
    const maxValue = Math.max(...data.map((d) => d.value));

    if (type === 'bar') {
      return (
        <div className="flex items-end space-x-4 h-64 p-4">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div
                className={`w-full rounded-t transition-all duration-1000 ${
                  item.anomaly
                    ? 'bg-red-500 animate-pulse'
                    : item.trend === 'up'
                      ? 'bg-green-500'
                      : item.trend === 'down'
                        ? 'bg-red-400'
                        : 'bg-blue-500'
                }`}
                style={{
                  height: `${(item.value / maxValue) * 200}px`,
                  transition: 'height 1s ease-in-out',
                }}
              />
              <div className="text-xs mt-2 text-center">
                <div className="font-semibold">{item.category}</div>
                <div className="text-gray-400">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (type === 'line') {
      return (
        <div className="relative h-64 p-4">
          <svg className="w-full h-full">
            {data.map((item, index) => {
              if (index === 0) return null;
              const prevItem = data[index - 1];
              const x1 = (index - 1) * (100 / (data.length - 1));
              const y1 = 100 - (prevItem.value / maxValue) * 80;
              const x2 = index * (100 / (data.length - 1));
              const y2 = 100 - (item.value / maxValue) * 80;

              return (
                <line
                  key={index}
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke={item.anomaly ? '#EF4444' : '#3B82F6'}
                  strokeWidth="3"
                  className={item.anomaly ? 'animate-pulse' : ''}
                />
              );
            })}
            {data.map((item, index) => (
              <circle
                key={index}
                cx={`${index * (100 / (data.length - 1))}%`}
                cy={`${100 - (item.value / maxValue) * 80}%`}
                r="4"
                fill={item.anomaly ? '#EF4444' : '#3B82F6'}
                className={item.anomaly ? 'animate-ping' : ''}
              />
            ))}
          </svg>
          <div className="flex justify-between mt-2 text-xs">
            {data.map((item, index) => (
              <div key={index} className="text-center">
                <div className="font-semibold">{item.category}</div>
                <div className="text-gray-400">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  // Game completion check
  useEffect(() => {
    const completedCount = investigations.filter((inv) => inv.completed).length;
    if (completedCount >= investigations.length * 0.8) {
      setGameState('completed');
      onComplete(true, score);
    }
  }, [investigations, score, onComplete]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete(false, score);
    }
  }, [timeLeft, onComplete, score]);

  if (gameState === 'menu') {
    return (
      <div className="w-full h-full bg-gradient-to-br from-teal-900 via-blue-900 to-indigo-900 text-white p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center mb-4">
              <Search className="w-12 h-12 text-teal-400 mr-4" />
              <div>
                <h2 className="text-3xl font-bold">Thám Tử Dữ Liệu</h2>
                <p className="text-lg text-gray-300">Khám phá bí mật ẩn trong dữ liệu</p>
              </div>
            </div>

            <div className="flex justify-center items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-green-400" />
                <span className="font-semibold">{score} điểm</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-5 h-5 text-blue-400" />
                <span className="font-semibold">Độ chính xác: {accuracy}%</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-red-400" />
                <span className="font-semibold">{Math.max(0, timeLeft)}s</span>
              </div>
            </div>
          </div>

          {/* Investigations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {investigations.map((investigation) => (
              <div
                key={investigation.id}
                className={`bg-black/30 backdrop-blur-sm rounded-lg p-6 border-2 transition-all cursor-pointer hover:scale-105 ${
                  investigation.completed ? 'border-green-500 bg-green-900/20' : 'border-teal-500 hover:border-teal-400'
                }`}
                onClick={() => !investigation.completed && startInvestigation(investigation)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        investigation.dataset.difficulty === 'easy'
                          ? 'bg-green-600'
                          : investigation.dataset.difficulty === 'medium'
                            ? 'bg-yellow-600'
                            : 'bg-red-600'
                      }`}
                    >
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{investigation.title}</h3>
                      <div
                        className={`text-xs px-2 py-1 rounded ${
                          investigation.dataset.difficulty === 'easy'
                            ? 'bg-green-900/50 text-green-400'
                            : investigation.dataset.difficulty === 'medium'
                              ? 'bg-yellow-900/50 text-yellow-400'
                              : 'bg-red-900/50 text-red-400'
                        }`}
                      >
                        {investigation.dataset.difficulty.toUpperCase()}
                      </div>
                    </div>
                  </div>

                  {investigation.completed && <div className="text-green-400">✓</div>}
                </div>

                <p className="text-sm text-gray-300 mb-4">{investigation.question}</p>

                {/* Mini chart preview */}
                <div className="bg-black/20 p-2 rounded mb-4">
                  <div className="flex items-end space-x-1 h-16">
                    {investigation.dataset.data.map((item, index) => (
                      <div
                        key={index}
                        className={`flex-1 rounded-t ${item.anomaly ? 'bg-red-400' : 'bg-teal-400'}`}
                        style={{
                          height: `${(item.value / Math.max(...investigation.dataset.data.map((d) => d.value))) * 60}px`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-yellow-400 font-semibold">+{investigation.points} điểm</span>
                  <div className="text-xs text-gray-400">{investigation.dataset.data.length} điểm dữ liệu</div>
                </div>
              </div>
            ))}
          </div>

          {/* Findings Section */}
          {findings.length > 0 && (
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
                Khám Phá Của Bạn
              </h3>
              <div className="space-y-2">
                {findings.map((finding, index) => (
                  <div key={index} className="bg-teal-900/30 p-3 rounded border-l-4 border-teal-400">
                    <p className="text-sm">{finding}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Restart Button */}
          <div className="text-center">
            <button
              onClick={onRestart}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg transition-colors flex items-center mx-auto"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Bắt Đầu Điều Tra Mới
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'investigating' && currentInvestigation) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-teal-900 via-blue-900 to-indigo-900 text-white p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">{currentInvestigation.title}</h2>
              <p className="text-gray-300">{currentInvestigation.question}</p>
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart Visualization */}
            <div className="lg:col-span-2 bg-black/30 backdrop-blur-sm rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">{currentInvestigation.dataset.name}</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedChart('bar')}
                    className={`px-3 py-1 rounded text-sm transition-colors ${
                      selectedChart === 'bar' ? 'bg-teal-600' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  >
                    Cột
                  </button>
                  <button
                    onClick={() => setSelectedChart('line')}
                    className={`px-3 py-1 rounded text-sm transition-colors ${
                      selectedChart === 'line' ? 'bg-teal-600' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  >
                    Đường
                  </button>
                </div>
              </div>

              <div className="bg-black/20 rounded-lg">
                {renderChart(currentInvestigation.dataset.data, selectedChart)}
              </div>

              {/* Data Table */}
              <div className="mt-4 bg-black/20 rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-teal-900/50">
                    <tr>
                      <th className="p-3 text-left">Danh mục</th>
                      <th className="p-3 text-left">Giá trị</th>
                      <th className="p-3 text-left">Xu hướng</th>
                      <th className="p-3 text-left">Bất thường</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentInvestigation.dataset.data.map((item, index) => (
                      <tr key={index} className={`border-b border-gray-700 ${item.anomaly ? 'bg-red-900/20' : ''}`}>
                        <td className="p-3 font-semibold">{item.category}</td>
                        <td className="p-3">{item.value}</td>
                        <td className="p-3">
                          <span
                            className={`inline-flex items-center ${
                              item.trend === 'up'
                                ? 'text-green-400'
                                : item.trend === 'down'
                                  ? 'text-red-400'
                                  : 'text-gray-400'
                            }`}
                          >
                            {item.trend === 'up' ? '↗' : item.trend === 'down' ? '↘' : '→'}
                            {item.trend}
                          </span>
                        </td>
                        <td className="p-3">{item.anomaly && <AlertTriangle className="w-4 h-4 text-red-400" />}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Investigation Panel */}
            <div className="space-y-6">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Phân Tích</h3>

                <div className="space-y-4">
                  <div className="bg-teal-900/30 p-4 rounded border border-teal-700">
                    <h4 className="font-semibold mb-2">Câu hỏi điều tra:</h4>
                    <p className="text-sm text-gray-300">{currentInvestigation.question}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Lựa chọn câu trả lời:</h4>
                    <div className="space-y-2">
                      {currentInvestigation.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => submitAnswer(option)}
                          className="w-full bg-gray-700 hover:bg-gray-600 text-white p-3 rounded transition-colors text-left"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-400" />
                  Gợi ý phân tích
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Tìm các điểm dữ liệu bất thường (màu đỏ)</li>
                  <li>• Quan sát xu hướng tăng/giảm</li>
                  <li>• So sánh giá trị giữa các danh mục</li>
                  <li>• Chú ý đến các giá trị cực đại/cực tiểu</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'completed') {
    return (
      <div className="w-full h-full bg-gradient-to-br from-teal-900 via-blue-900 to-indigo-900 text-white flex items-center justify-center">
        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl text-center max-w-md mx-4">
          <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-10 h-10 text-teal-900" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Thám Tử Xuất Sắc!</h2>
          <p className="text-lg mb-4">Bạn đã giải mã thành công các bí ẩn dữ liệu!</p>
          <div className="text-teal-200 space-y-1 mb-6">
            <div>Điểm cuối: {score}</div>
            <div>Độ chính xác: {accuracy}%</div>
            <div>Khám phá: {findings.length} insight</div>
          </div>
          <button
            onClick={onRestart}
            className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Điều Tra Mới
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default DataDetectiveGame;
