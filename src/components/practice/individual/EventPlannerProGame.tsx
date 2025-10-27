'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Users, DollarSign, Clock, Target, RotateCcw, Star, CheckCircle2, AlertCircle } from 'lucide-react';

interface EventPlannerProGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface Event {
  id: string;
  title: string;
  type: 'corporate' | 'wedding' | 'conference' | 'party' | 'exhibition';
  budget: number;
  attendees: number;
  duration: number; // days
  requirements: string[];
  challenges: string[];
  deadline: number; // days from now
  difficulty: 'beginner' | 'intermediate' | 'expert';
  points: number;
  completed: boolean;
}

interface Task {
  id: string;
  name: string;
  category: 'venue' | 'catering' | 'entertainment' | 'marketing' | 'logistics';
  cost: number;
  time: number; // hours
  quality: number; // 1-5 stars
  completed: boolean;
}

interface Resource {
  budget: number;
  time: number; // hours available
  team: number; // team members
  reputation: number; // 1-100
}

const EventPlannerProGame: React.FC<EventPlannerProGameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'menu' | 'planning' | 'execution' | 'completed'>('menu');
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null);
  const [resources, setResources] = useState<Resource>({
    budget: 50000,
    time: 200,
    team: 5,
    reputation: 75,
  });
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTasks, setSelectedTasks] = useState<Task[]>([]);
  const [, setEventProgress] = useState(0);

  const [events, setEvents] = useState<Event[]>([
    {
      id: 'tech-conference',
      title: 'Hội nghị Công nghệ 2025',
      type: 'conference',
      budget: 100000,
      attendees: 500,
      duration: 2,
      requirements: ['Âm thanh chuyên nghiệp', 'Live streaming', 'Networking area', 'Catering cho 500 người'],
      challenges: ['Nhiều diễn giả quốc tế', 'Yêu cầu kỹ thuật cao', 'Thời gian chuẩn bị ngắn'],
      deadline: 30,
      difficulty: 'expert',
      points: 150,
      completed: false,
    },
    {
      id: 'wedding-ceremony',
      title: 'Đám cưới Sang Trọng',
      type: 'wedding',
      budget: 80000,
      attendees: 200,
      duration: 1,
      requirements: ['Trang trí hoa tươi', 'Nhiếp ảnh chuyên nghiệp', 'Tiệc cưới 10 món', 'Ban nhạc'],
      challenges: ['Thời tiết không ổn định', 'Yêu cầu đặc biệt từ gia đình', 'Địa điểm ngoài trời'],
      deadline: 45,
      difficulty: 'intermediate',
      points: 120,
      completed: false,
    },
    {
      id: 'product-launch',
      title: 'Ra mắt Sản phẩm Mới',
      type: 'corporate',
      budget: 60000,
      attendees: 300,
      duration: 1,
      requirements: ['Booth trưng bày', 'Presentation screen lớn', 'Welcome drinks', 'Quà tặng branded'],
      challenges: ['Cạnh tranh truyền thông', 'KOL và báo chí tham dự', 'Deadline gấp'],
      deadline: 20,
      difficulty: 'intermediate',
      points: 100,
      completed: false,
    },
    {
      id: 'birthday-party',
      title: 'Sinh nhật Trẻ em',
      type: 'party',
      budget: 15000,
      attendees: 50,
      duration: 1,
      requirements: [
        'Trang trí chủ đề hoạt hình',
        'Bánh sinh nhật đặc biệt',
        'Game và hoạt động',
        'Đồ ăn kid-friendly',
      ],
      challenges: ['Trẻ em khó tính', 'An toàn tuyệt đối', 'Thời tiết mưa'],
      deadline: 15,
      difficulty: 'beginner',
      points: 80,
      completed: false,
    },
    {
      id: 'trade-show',
      title: 'Triển lãm Thương mại',
      type: 'exhibition',
      budget: 120000,
      attendees: 1000,
      duration: 3,
      requirements: ['Booth lớn', 'Hệ thống âm thanh toàn sảnh', 'Catalog và brochure', 'Demo station'],
      challenges: ['Nhiều đối thủ cạnh tranh', 'Logistics phức tạp', 'Quản lý đông người'],
      deadline: 60,
      difficulty: 'expert',
      points: 200,
      completed: false,
    },
  ]);

  const generateTasksForEvent = (event: Event): Task[] => {
    const baseTasks: Task[] = [
      // Venue
      {
        id: 'venue-premium',
        name: 'Thuê venue cao cấp',
        category: 'venue',
        cost: event.budget * 0.3,
        time: 20,
        quality: 5,
        completed: false,
      },
      {
        id: 'venue-standard',
        name: 'Thuê venue tiêu chuẩn',
        category: 'venue',
        cost: event.budget * 0.2,
        time: 10,
        quality: 3,
        completed: false,
      },
      {
        id: 'venue-budget',
        name: 'Thuê venue tiết kiệm',
        category: 'venue',
        cost: event.budget * 0.15,
        time: 5,
        quality: 2,
        completed: false,
      },

      // Catering
      {
        id: 'catering-luxury',
        name: 'Catering sang trọng',
        category: 'catering',
        cost: event.attendees * 200,
        time: 30,
        quality: 5,
        completed: false,
      },
      {
        id: 'catering-standard',
        name: 'Catering tiêu chuẩn',
        category: 'catering',
        cost: event.attendees * 120,
        time: 20,
        quality: 3,
        completed: false,
      },
      {
        id: 'catering-basic',
        name: 'Catering cơ bản',
        category: 'catering',
        cost: event.attendees * 80,
        time: 10,
        quality: 2,
        completed: false,
      },

      // Entertainment
      {
        id: 'entertainment-band',
        name: 'Thuê ban nhạc nổi tiếng',
        category: 'entertainment',
        cost: 25000,
        time: 15,
        quality: 5,
        completed: false,
      },
      {
        id: 'entertainment-dj',
        name: 'Thuê DJ chuyên nghiệp',
        category: 'entertainment',
        cost: 8000,
        time: 10,
        quality: 3,
        completed: false,
      },

      // Marketing
      {
        id: 'marketing-full',
        name: 'Chiến dịch marketing toàn diện',
        category: 'marketing',
        cost: 20000,
        time: 40,
        quality: 5,
        completed: false,
      },
      {
        id: 'marketing-social',
        name: 'Marketing social media',
        category: 'marketing',
        cost: 8000,
        time: 25,
        quality: 3,
        completed: false,
      },

      // Logistics
      {
        id: 'logistics-premium',
        name: 'Dịch vụ logistics cao cấp',
        category: 'logistics',
        cost: 15000,
        time: 35,
        quality: 5,
        completed: false,
      },
      {
        id: 'logistics-basic',
        name: 'Logistics cơ bản',
        category: 'logistics',
        cost: 8000,
        time: 20,
        quality: 3,
        completed: false,
      },
    ];

    return baseTasks;
  };

  const startEventPlanning = (event: Event) => {
    setCurrentEvent(event);
    setTasks(generateTasksForEvent(event));
    setSelectedTasks([]);
    setEventProgress(0);
    setGameState('planning');
  };

  const selectTask = (task: Task) => {
    if (selectedTasks.find((t) => t.id === task.id)) return;

    // Check if we can afford it
    const totalCost = selectedTasks.reduce((sum, t) => sum + t.cost, 0) + task.cost;
    const totalTime = selectedTasks.reduce((sum, t) => sum + t.time, 0) + task.time;

    if (totalCost <= resources.budget && totalTime <= resources.time) {
      // Check category conflicts (can only select one per category)
      const existingCategoryTask = selectedTasks.find((t) => t.category === task.category);
      if (existingCategoryTask) {
        // Replace the existing task
        setSelectedTasks((prev) => prev.map((t) => (t.category === task.category ? task : t)));
      } else {
        setSelectedTasks((prev) => [...prev, task]);
      }
    }
  };

  const removeTask = (taskId: string) => {
    setSelectedTasks((prev) => prev.filter((t) => t.id !== taskId));
  };

  const executeEvent = () => {
    if (!currentEvent || selectedTasks.length === 0) return;

    const totalCost = selectedTasks.reduce((sum, t) => sum + t.cost, 0);
    const totalQuality = selectedTasks.reduce((sum, t) => sum + t.quality, 0) / selectedTasks.length;
    const totalTime = selectedTasks.reduce((sum, t) => sum + t.time, 0);

    // Calculate success based on requirements coverage and quality
    const requiredCategories: Array<'venue' | 'catering' | 'marketing' | 'logistics' | 'entertainment'> = [
      'venue',
      'catering',
      'marketing',
    ];
    const coveredCategories = selectedTasks.map((t) => t.category);
    const coverageScore =
      requiredCategories.filter((cat) => coveredCategories.includes(cat)).length / requiredCategories.length;

    const qualityScore = totalQuality / 5;
    const budgetScore = totalCost <= currentEvent.budget ? 1 : 0.5;
    const timeScore = totalTime <= resources.time ? 1 : 0.7;

    const finalScore = Math.round(
      (coverageScore * 0.4 + qualityScore * 0.3 + budgetScore * 0.2 + timeScore * 0.1) * currentEvent.points,
    );

    setScore((prev) => prev + finalScore);
    setEventProgress(coverageScore * 100);

    // Update reputation based on quality
    setResources((prev) => ({
      ...prev,
      budget: prev.budget - totalCost,
      time: prev.time - totalTime,
      reputation: Math.min(100, prev.reputation + (qualityScore > 0.8 ? 10 : qualityScore > 0.6 ? 5 : -5)),
    }));

    // Mark event as completed if score is good
    if (finalScore > currentEvent.points * 0.7) {
      setEvents((prev) => prev.map((e) => (e.id === currentEvent.id ? { ...e, completed: true } : e)));
    }

    setTimeout(() => {
      setGameState('menu');
      setCurrentEvent(null);
    }, 3000);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-900/30 text-green-400 border-green-700';
      case 'intermediate':
        return 'bg-yellow-900/30 text-yellow-400 border-yellow-700';
      case 'expert':
        return 'bg-red-900/30 text-red-400 border-red-700';
      default:
        return 'bg-gray-900/30 text-gray-400 border-gray-700';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'venue':
        return '🏢';
      case 'catering':
        return '🍽️';
      case 'entertainment':
        return '🎵';
      case 'marketing':
        return '📢';
      case 'logistics':
        return '📦';
      default:
        return '⭐';
    }
  };

  // Game completion check
  useEffect(() => {
    const completedCount = events.filter((e) => e.completed).length;
    if (completedCount >= events.length * 0.6) {
      setGameState('completed');
      onComplete(true, score);
    }
  }, [events, score, onComplete]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete(false, score);
    }
  }, [timeLeft, onComplete, score]);

  if (gameState === 'menu') {
    return (
      <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 text-white p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center mb-4">
              <Calendar className="w-12 h-12 text-purple-400 mr-4" />
              <div>
                <h2 className="text-3xl font-bold">Event Planner Professional</h2>
                <p className="text-lg text-gray-300">Tổ chức sự kiện đẳng cấp thế giới</p>
              </div>
            </div>

            <div className="flex justify-center items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-green-400" />
                <span className="font-semibold">{score} điểm</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">${resources.budget.toLocaleString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-blue-400" />
                <span className="font-semibold">Uy tín: {resources.reputation}/100</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-red-400" />
                <span className="font-semibold">{Math.max(0, timeLeft)}s</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Events List */}
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-semibold mb-6">Dự Án Sự Kiện</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className={`bg-black/30 backdrop-blur-sm rounded-lg p-6 border-2 transition-all cursor-pointer hover:scale-105 ${
                      event.completed ? 'border-green-500 bg-green-900/20' : 'border-purple-500 hover:border-purple-400'
                    }`}
                    onClick={() => !event.completed && startEventPlanning(event)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="text-2xl">
                          {event.type === 'conference'
                            ? '🎯'
                            : event.type === 'wedding'
                              ? '💒'
                              : event.type === 'corporate'
                                ? '🏢'
                                : event.type === 'party'
                                  ? '🎉'
                                  : '🏪'}
                        </div>
                        <div className={`text-xs px-2 py-1 rounded border ${getDifficultyColor(event.difficulty)}`}>
                          {event.difficulty.toUpperCase()}
                        </div>
                      </div>
                      {event.completed && <CheckCircle2 className="w-6 h-6 text-green-400" />}
                    </div>

                    <h4 className="font-bold text-xl mb-3">{event.title}</h4>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-green-400" />
                        <span>${event.budget.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-blue-400" />
                        <span>{event.attendees} người</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        <span>{event.duration} ngày</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-red-400" />
                        <span>{event.deadline} ngày</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-300 mb-2">Yêu cầu chính:</h5>
                      <div className="flex flex-wrap gap-1">
                        {event.requirements.slice(0, 2).map((req, index) => (
                          <span key={index} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">
                            {req}
                          </span>
                        ))}
                        {event.requirements.length > 2 && (
                          <span className="text-xs text-gray-400">+{event.requirements.length - 2} more</span>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-yellow-400 font-semibold">+{event.points} điểm</span>
                      <span className="text-xs text-gray-400 capitalize">{event.type.replace('-', ' ')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources Panel */}
            <div className="space-y-6">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-400" />
                  Tài Nguyên
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-2 text-green-400" />
                      Ngân sách
                    </span>
                    <span className="font-semibold">${resources.budget.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-blue-400" />
                      Thời gian
                    </span>
                    <span className="font-semibold">{resources.time}h</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-purple-400" />
                      Team
                    </span>
                    <span className="font-semibold">{resources.team} người</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center">
                        <Star className="w-4 h-4 mr-2 text-yellow-400" />
                        Uy tín
                      </span>
                      <span className="font-semibold">{resources.reputation}/100</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${
                          resources.reputation >= 80
                            ? 'bg-green-500'
                            : resources.reputation >= 60
                              ? 'bg-yellow-500'
                              : resources.reputation >= 40
                                ? 'bg-orange-500'
                                : 'bg-red-500'
                        }`}
                        style={{ width: `${resources.reputation}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Thành Tích</h3>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-purple-400">
                    {events.filter((e) => e.completed).length}/{events.length}
                  </div>
                  <div className="text-sm text-gray-400">Sự kiện thành công</div>

                  <div className="text-lg font-bold text-yellow-400 mt-4">{score.toLocaleString()}</div>
                  <div className="text-xs text-gray-400">Điểm tổng</div>
                </div>
              </div>

              <button
                onClick={onRestart}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Khởi Nghiệp Mới
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'planning' && currentEvent) {
    const totalCost = selectedTasks.reduce((sum, t) => sum + t.cost, 0);
    const totalTime = selectedTasks.reduce((sum, t) => sum + t.time, 0);
    const averageQuality =
      selectedTasks.length > 0 ? selectedTasks.reduce((sum, t) => sum + t.quality, 0) / selectedTasks.length : 0;

    return (
      <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 text-white p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">{currentEvent.title}</h2>
              <p className="text-gray-300">Lên kế hoạch và chọn dịch vụ tốt nhất</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right text-sm">
                <div>
                  Còn lại: <span className="text-yellow-400">${(resources.budget - totalCost).toLocaleString()}</span>
                </div>
                <div>
                  Thời gian: <span className="text-blue-400">{resources.time - totalTime}h</span>
                </div>
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
            {/* Available Tasks */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold mb-4">Dịch Vụ Có Sẵn</h3>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {Object.entries(
                  tasks.reduce(
                    (acc, task) => {
                      if (!acc[task.category]) acc[task.category] = [];
                      acc[task.category].push(task);
                      return acc;
                    },
                    {} as Record<string, Task[]>,
                  ),
                ).map(([category, categoryTasks]) => (
                  <div key={category} className="bg-black/30 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <span className="text-2xl mr-2">{getCategoryIcon(category)}</span>
                      <span className="capitalize">
                        {category === 'venue'
                          ? 'Địa điểm'
                          : category === 'catering'
                            ? 'Catering'
                            : category === 'entertainment'
                              ? 'Giải trí'
                              : category === 'marketing'
                                ? 'Marketing'
                                : 'Logistics'}
                      </span>
                    </h4>
                    <div className="space-y-2">
                      {categoryTasks.map((task) => {
                        const isSelected = selectedTasks.find((t) => t.id === task.id);
                        const canAfford =
                          totalCost + task.cost <= resources.budget && totalTime + task.time <= resources.time;

                        return (
                          <div
                            key={task.id}
                            className={`p-3 rounded border-2 transition-all cursor-pointer ${
                              isSelected
                                ? 'border-green-500 bg-green-900/20'
                                : canAfford
                                  ? 'border-gray-600 hover:border-purple-400'
                                  : 'border-red-500 opacity-50'
                            }`}
                            onClick={() => canAfford && selectTask(task)}
                          >
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium">{task.name}</span>
                              <div className="flex items-center space-x-1">
                                {Array.from({ length: task.quality }).map((_, i) => (
                                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                                ))}
                              </div>
                            </div>
                            <div className="flex justify-between text-sm text-gray-400">
                              <span>${task.cost.toLocaleString()}</span>
                              <span>{task.time}h</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Planning Summary */}
            <div className="space-y-6">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Kế Hoạch Hiện Tại</h3>

                {selectedTasks.length === 0 ? (
                  <p className="text-gray-400 text-center py-4">Chưa chọn dịch vụ nào</p>
                ) : (
                  <div className="space-y-3">
                    {selectedTasks.map((task) => (
                      <div key={task.id} className="flex justify-between items-center p-2 bg-black/20 rounded">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm">{getCategoryIcon(task.category)}</span>
                          <span className="text-sm font-medium">{task.name}</span>
                        </div>
                        <button onClick={() => removeTask(task.id)} className="text-red-400 hover:text-red-300">
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6 space-y-3 border-t border-gray-600 pt-4">
                  <div className="flex justify-between">
                    <span>Tổng chi phí:</span>
                    <span className="font-semibold">${totalCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tổng thời gian:</span>
                    <span className="font-semibold">{totalTime}h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chất lượng TB:</span>
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: Math.round(averageQuality) }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Yêu Cầu Sự Kiện</h3>
                <div className="space-y-2 text-sm">
                  {currentEvent.requirements.map((req, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>{req}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold mb-2 text-yellow-400">Thách thức:</h4>
                  <div className="space-y-1 text-sm text-gray-300">
                    {currentEvent.challenges.map((challenge, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <AlertCircle className="w-3 h-3 text-red-400" />
                        <span>{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={executeEvent}
                disabled={selectedTasks.length === 0}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <CheckCircle2 className="w-5 h-5 mr-2" />
                Thực Hiện Sự Kiện
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'completed') {
    return (
      <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 text-white flex items-center justify-center">
        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl text-center max-w-md mx-4">
          <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-10 h-10 text-purple-900" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Event Planner Xuất Sắc!</h2>
          <p className="text-lg mb-4">Bạn đã trở thành nhà tổ chức sự kiện chuyên nghiệp!</p>
          <div className="text-purple-200 space-y-1 mb-6">
            <div>Điểm cuối: {score.toLocaleString()}</div>
            <div>Uy tín: {resources.reputation}/100</div>
            <div>
              Sự kiện thành công: {events.filter((e) => e.completed).length}/{events.length}
            </div>
          </div>
          <button
            onClick={onRestart}
            className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Tạo Công Ty Mới
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default EventPlannerProGame;
