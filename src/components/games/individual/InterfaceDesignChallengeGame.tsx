import React, { useState, useEffect, useCallback } from 'react';
import {
  Smartphone,
  Tablet,
  Monitor,
  Palette,
  Users,
  Star,
  Award,
  Play,
  RotateCcw,
  Layers,
  MousePointer,
  Grid,
} from 'lucide-react';

interface InterfaceDesignChallengeGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface DesignBrief {
  id: string;
  title: string;
  description: string;
  targetAudience: string;
  platform: 'mobile' | 'tablet' | 'desktop';
  requirements: string[];
  constraints: string[];
}

interface DesignElement {
  id: string;
  name: string;
  type: 'color' | 'typography' | 'layout' | 'interaction';
  icon: React.ReactNode;
  value: string;
  impact: {
    usability: number;
    accessibility: number;
    aesthetics: number;
    performance: number;
  };
}

const DESIGN_BRIEFS: DesignBrief[] = [
  {
    id: 'healthcare-app',
    title: 'Ứng Dụng Chăm Sóc Sức Khỏe',
    description: 'Thiết kế giao diện cho ứng dụng theo dõi sức khỏe cá nhân cho người cao tuổi',
    targetAudience: 'Người cao tuổi (55-75 tuổi)',
    platform: 'mobile',
    requirements: [
      'Giao diện đơn giản, dễ sử dụng',
      'Chữ cỡ lớn, dễ đọc',
      'Màu sắc tương phản cao',
      'Nút bấm lớn, dễ chạm',
      'Điều hướng trực quan',
    ],
    constraints: [
      'Không quá 3 màu chính',
      'Font chữ tối thiểu 16px',
      'Không sử dụng gesture phức tạp',
      'Thời gian phản hồi < 2 giây',
    ],
  },
  {
    id: 'ecommerce-tablet',
    title: 'Ứng Dụng Mua Sắm Trực Tuyến',
    description: 'Thiết kế giao diện tablet cho nền tảng thương mại điện tử thời trang',
    targetAudience: 'Phụ nữ trẻ (20-35 tuổi)',
    platform: 'tablet',
    requirements: [
      'Hiển thị sản phẩm hấp dẫn',
      'Tìm kiếm thông minh',
      'Giỏ hàng trực quan',
      'Thanh toán an toàn',
      'Đánh giá và review',
    ],
    constraints: [
      'Tải trang trong 3 giây',
      'Hỗ trợ landscape và portrait',
      'Tối ưu cho touchscreen',
      'Responsive design',
    ],
  },
  {
    id: 'productivity-desktop',
    title: 'Phần Mềm Quản Lý Dự Án',
    description: 'Thiết kế dashboard desktop cho tool quản lý dự án dành cho team',
    targetAudience: 'Project Manager (25-45 tuổi)',
    platform: 'desktop',
    requirements: [
      'Dashboard tổng quan',
      'Gantt chart trực quan',
      'Quản lý task hiệu quả',
      'Báo cáo và analytics',
      'Collaboration tools',
    ],
    constraints: [
      'Độ phân giải tối thiểu 1366x768',
      'Hỗ trợ multiple monitors',
      'Keyboard shortcuts',
      'Dark/Light theme',
    ],
  },
];

const DESIGN_ELEMENTS: DesignElement[] = [
  // Color Elements
  {
    id: 'high-contrast',
    name: 'Màu Tương Phản Cao',
    type: 'color',
    icon: <Palette className="w-4 h-4" />,
    value: '#000000 / #FFFFFF',
    impact: { usability: 8, accessibility: 9, aesthetics: 6, performance: 8 },
  },
  {
    id: 'warm-palette',
    name: 'Bảng Màu Ấm',
    type: 'color',
    icon: <Palette className="w-4 h-4" />,
    value: '#FF6B6B / #4ECDC4',
    impact: { usability: 7, accessibility: 6, aesthetics: 9, performance: 8 },
  },
  {
    id: 'blue-gradient',
    name: 'Gradient Xanh Dương',
    type: 'color',
    icon: <Palette className="w-4 h-4" />,
    value: '#667eea / #764ba2',
    impact: { usability: 6, accessibility: 7, aesthetics: 8, performance: 6 },
  },

  // Typography Elements
  {
    id: 'large-font',
    name: 'Font Chữ Lớn (18px+)',
    type: 'typography',
    icon: <Grid className="w-4 h-4" />,
    value: 'Open Sans 18px',
    impact: { usability: 9, accessibility: 9, aesthetics: 7, performance: 8 },
  },
  {
    id: 'serif-elegant',
    name: 'Font Serif Thanh Lịch',
    type: 'typography',
    icon: <Grid className="w-4 h-4" />,
    value: 'Playfair Display',
    impact: { usability: 6, accessibility: 7, aesthetics: 9, performance: 7 },
  },
  {
    id: 'monospace-code',
    name: 'Font Monospace',
    type: 'typography',
    icon: <Grid className="w-4 h-4" />,
    value: 'Source Code Pro',
    impact: { usability: 8, accessibility: 8, aesthetics: 6, performance: 9 },
  },

  // Layout Elements
  {
    id: 'card-layout',
    name: 'Bố Cục Card',
    type: 'layout',
    icon: <Layers className="w-4 h-4" />,
    value: 'Grid Cards',
    impact: { usability: 8, accessibility: 7, aesthetics: 8, performance: 7 },
  },
  {
    id: 'sidebar-nav',
    name: 'Navigation Sidebar',
    type: 'layout',
    icon: <Layers className="w-4 h-4" />,
    value: 'Left Sidebar',
    impact: { usability: 9, accessibility: 8, aesthetics: 7, performance: 8 },
  },
  {
    id: 'fullscreen-focus',
    name: 'Bố Cục Toàn Màn Hình',
    type: 'layout',
    icon: <Layers className="w-4 h-4" />,
    value: 'Full Screen Layout',
    impact: { usability: 7, accessibility: 6, aesthetics: 8, performance: 9 },
  },

  // Interaction Elements
  {
    id: 'large-buttons',
    name: 'Nút Bấm Lớn',
    type: 'interaction',
    icon: <MousePointer className="w-4 h-4" />,
    value: '48px min touch target',
    impact: { usability: 9, accessibility: 9, aesthetics: 7, performance: 8 },
  },
  {
    id: 'hover-animations',
    name: 'Hiệu Ứng Hover',
    type: 'interaction',
    icon: <MousePointer className="w-4 h-4" />,
    value: 'CSS Transitions',
    impact: { usability: 7, accessibility: 6, aesthetics: 9, performance: 6 },
  },
  {
    id: 'swipe-gestures',
    name: 'Cử Chỉ Vuốt',
    type: 'interaction',
    icon: <MousePointer className="w-4 h-4" />,
    value: 'Touch Gestures',
    impact: { usability: 8, accessibility: 5, aesthetics: 8, performance: 7 },
  },
];

const InterfaceDesignChallengeGame: React.FC<InterfaceDesignChallengeGameProps> = ({
  onComplete,
  timeLeft,
  onRestart,
}) => {
  const [currentBrief, setCurrentBrief] = useState<DesignBrief>(DESIGN_BRIEFS[0]);
  const [selectedElements, setSelectedElements] = useState<DesignElement[]>([]);
  const [gamePhase, setGamePhase] = useState<'briefing' | 'designing' | 'review' | 'results'>('briefing');
  const [score, setScore] = useState(0);
  const [designScore, setDesignScore] = useState({
    usability: 0,
    accessibility: 0,
    aesthetics: 0,
    performance: 0,
  });
  const [feedback, setFeedback] = useState<string[]>([]);
  const [currentBriefIndex, setCurrentBriefIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'mobile':
        return <Smartphone className="w-5 h-5" />;
      case 'tablet':
        return <Tablet className="w-5 h-5" />;
      case 'desktop':
        return <Monitor className="w-5 h-5" />;
      default:
        return <Monitor className="w-5 h-5" />;
    }
  };

  const evaluateDesign = useCallback(() => {
    let totalScore = 0;
    const scores = { usability: 0, accessibility: 0, aesthetics: 0, performance: 0 };
    const newFeedback: string[] = [];

    // Calculate base scores from selected elements
    selectedElements.forEach((element) => {
      scores.usability += element.impact.usability;
      scores.accessibility += element.impact.accessibility;
      scores.aesthetics += element.impact.aesthetics;
      scores.performance += element.impact.performance;
    });

    // Platform-specific bonuses/penalties
    if (currentBrief.platform === 'mobile') {
      if (selectedElements.some((e) => e.id === 'large-buttons')) {
        scores.usability += 10;
        newFeedback.push('✓ Sử dụng nút bấm lớn phù hợp cho mobile');
      }
      if (selectedElements.some((e) => e.id === 'swipe-gestures')) {
        scores.usability += 5;
        newFeedback.push('✓ Tích hợp cử chỉ vuốt tốt cho mobile');
      }
    }

    // Audience-specific evaluation
    if (currentBrief.targetAudience.includes('cao tuổi')) {
      if (selectedElements.some((e) => e.id === 'large-font')) {
        scores.accessibility += 15;
        newFeedback.push('✓ Font chữ lớn phù hợp cho người cao tuổi');
      }
      if (selectedElements.some((e) => e.id === 'high-contrast')) {
        scores.accessibility += 10;
        newFeedback.push('✓ Màu tương phản cao dễ đọc');
      }
    }

    // Requirements checking
    let requirementsMet = 0;
    currentBrief.requirements.forEach((req) => {
      if (req.includes('đơn giản') && selectedElements.length <= 4) {
        requirementsMet++;
        newFeedback.push('✓ Thiết kế đơn giản, không phức tạp');
      }
      if (req.includes('chữ cỡ lớn') && selectedElements.some((e) => e.id === 'large-font')) {
        requirementsMet++;
      }
      if (req.includes('tương phản cao') && selectedElements.some((e) => e.id === 'high-contrast')) {
        requirementsMet++;
      }
    });

    // Bonus for meeting requirements
    const requirementBonus = (requirementsMet / currentBrief.requirements.length) * 50;

    // Calculate final scores (out of 100 each)
    Object.keys(scores).forEach((key) => {
      scores[key as keyof typeof scores] = Math.min(
        100,
        (scores[key as keyof typeof scores] / selectedElements.length) * 10 + requirementBonus / 4,
      );
    });

    // Overall score
    totalScore = (scores.usability + scores.accessibility + scores.aesthetics + scores.performance) / 4;

    // Additional feedback based on score
    if (totalScore >= 80) {
      newFeedback.push('🎉 Thiết kế xuất sắc! UI/UX chuyên nghiệp');
    } else if (totalScore >= 60) {
      newFeedback.push('👍 Thiết kế tốt, có thể cải thiện thêm');
    } else {
      newFeedback.push('📝 Cần xem xét lại các yêu cầu thiết kế');
    }

    setDesignScore(scores);
    setScore(Math.round(totalScore));
    setFeedback(newFeedback);
  }, [selectedElements, currentBrief]);

  const startGame = () => {
    setIsPlaying(true);
    setGamePhase('briefing');
    setSelectedElements([]);
    setScore(0);
    setFeedback([]);
  };

  const nextPhase = () => {
    switch (gamePhase) {
      case 'briefing':
        setGamePhase('designing');
        break;
      case 'designing':
        evaluateDesign();
        setGamePhase('review');
        break;
      case 'review':
        setGamePhase('results');
        break;
      case 'results':
        if (currentBriefIndex < DESIGN_BRIEFS.length - 1) {
          setCurrentBriefIndex((prev) => prev + 1);
          setCurrentBrief(DESIGN_BRIEFS[currentBriefIndex + 1]);
          setGamePhase('briefing');
          setSelectedElements([]);
        } else {
          onComplete(score >= 60, score);
        }
        break;
    }
  };

  const toggleElement = (element: DesignElement) => {
    setSelectedElements((prev) => {
      const exists = prev.find((e) => e.id === element.id);
      if (exists) {
        return prev.filter((e) => e.id !== element.id);
      } else {
        return [...prev, element];
      }
    });
  };

  const restartGame = () => {
    setCurrentBriefIndex(0);
    setCurrentBrief(DESIGN_BRIEFS[0]);
    setSelectedElements([]);
    setGamePhase('briefing');
    setScore(0);
    setDesignScore({ usability: 0, accessibility: 0, aesthetics: 0, performance: 0 });
    setFeedback([]);
    setIsPlaying(false);
    onRestart();
  };

  useEffect(() => {
    if (timeLeft <= 0 && isPlaying) {
      onComplete(false, score);
    }
  }, [timeLeft, isPlaying, score, onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-purple-500/20 p-3 rounded-xl">
                <Smartphone className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">📱 Thử Thách Thiết Kế Giao Diện</h1>
                <p className="text-blue-200">Tạo ra những giao diện người dùng hoàn hảo</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-2xl font-bold text-yellow-400">{Math.round(score)}</div>
                <div className="text-sm text-blue-200">Điểm số</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-400">{Math.ceil(timeLeft / 60)}</div>
                <div className="text-sm text-blue-200">Phút</div>
              </div>
            </div>
          </div>
        </div>

        {!isPlaying ? (
          /* Start Screen */
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center">
            <div className="bg-purple-500/20 p-6 rounded-2xl w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <Smartphone className="w-12 h-12 text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Chào Mừng Đến Thử Thách Thiết Kế!</h2>
            <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
              Hãy thể hiện kỹ năng thiết kế giao diện của bạn! Tạo ra những trải nghiệm người dùng tuyệt vời cho các ứng
              dụng khác nhau trên nhiều nền tảng.
            </p>
            <button
              onClick={startGame}
              className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center gap-2 mx-auto"
            >
              <Play className="w-6 h-6" />
              Bắt Đầu Thiết Kế
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-blue-200">
                  Dự án {currentBriefIndex + 1}/{DESIGN_BRIEFS.length}
                </span>
                <span className="text-purple-300 capitalize">{gamePhase}</span>
              </div>
              <div className="w-full bg-blue-900/50 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-blue-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(currentBriefIndex / DESIGN_BRIEFS.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {gamePhase === 'briefing' && (
              /* Design Brief Phase */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  {getPlatformIcon(currentBrief.platform)}
                  <h2 className="text-2xl font-bold text-white">{currentBrief.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-blue-900/30 rounded-lg p-4">
                      <h3 className="font-semibold text-blue-200 mb-2">📋 Mô Tả Dự Án</h3>
                      <p className="text-white">{currentBrief.description}</p>
                    </div>

                    <div className="bg-green-900/30 rounded-lg p-4">
                      <h3 className="font-semibold text-green-200 mb-2 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Đối Tượng Người Dùng
                      </h3>
                      <p className="text-white">{currentBrief.targetAudience}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-purple-900/30 rounded-lg p-4">
                      <h3 className="font-semibold text-purple-200 mb-2">✅ Yêu Cầu</h3>
                      <ul className="space-y-1">
                        {currentBrief.requirements.map((req, index) => (
                          <li key={index} className="text-white text-sm flex items-start gap-2">
                            <span className="text-green-400 mt-1">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-red-900/30 rounded-lg p-4">
                      <h3 className="font-semibold text-red-200 mb-2">⚠️ Ràng Buộc</h3>
                      <ul className="space-y-1">
                        {currentBrief.constraints.map((constraint, index) => (
                          <li key={index} className="text-white text-sm flex items-start gap-2">
                            <span className="text-yellow-400 mt-1">•</span>
                            {constraint}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <button
                  onClick={nextPhase}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold mt-6 transition-all duration-200"
                >
                  Bắt Đầu Thiết Kế
                </button>
              </div>
            )}

            {gamePhase === 'designing' && (
              /* Design Selection Phase */
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                  <h2 className="text-xl font-bold text-white mb-4">🎨 Chọn Các Yếu Tố Thiết Kế</h2>
                  <p className="text-blue-200 mb-6">
                    Chọn các thành phần thiết kế phù hợp với yêu cầu dự án. Hãy cân nhắc đối tượng người dùng và ràng
                    buộc kỹ thuật.
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
                    {DESIGN_ELEMENTS.map((element) => {
                      const isSelected = selectedElements.find((e) => e.id === element.id);
                      return (
                        <button
                          key={element.id}
                          onClick={() => toggleElement(element)}
                          className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                            isSelected
                              ? 'border-purple-400 bg-purple-500/20'
                              : 'border-gray-600 bg-gray-800/30 hover:border-gray-500'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            {element.icon}
                            <span className="font-semibold text-white text-sm">{element.name}</span>
                          </div>
                          <div className="text-xs text-gray-300 mb-3">{element.value}</div>
                          <div className="grid grid-cols-2 gap-1 text-xs">
                            <div className="flex justify-between">
                              <span className="text-blue-300">UX:</span>
                              <span className="text-blue-300">{element.impact.usability}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-green-300">A11y:</span>
                              <span className="text-green-300">{element.impact.accessibility}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-purple-300">UI:</span>
                              <span className="text-purple-300">{element.impact.aesthetics}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-yellow-300">Perf:</span>
                              <span className="text-yellow-300">{element.impact.performance}</span>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-blue-200">Đã chọn: {selectedElements.length} thành phần</div>
                    <button
                      onClick={nextPhase}
                      disabled={selectedElements.length === 0}
                      className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Hoàn Thành Thiết Kế
                    </button>
                  </div>
                </div>
              </div>
            )}

            {gamePhase === 'review' && (
              /* Design Review Phase */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <h2 className="text-2xl font-bold text-white">📊 Đánh Giá Thiết Kế</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div className="bg-blue-900/30 rounded-lg p-4">
                      <h3 className="font-semibold text-blue-200 mb-3">Điểm Số Chi Tiết</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-blue-300">Usability (UX)</span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 bg-gray-700 rounded-full h-2">
                              <div
                                className="bg-blue-400 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${designScore.usability}%` }}
                              ></div>
                            </div>
                            <span className="text-white font-semibold">{Math.round(designScore.usability)}</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-green-300">Accessibility</span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 bg-gray-700 rounded-full h-2">
                              <div
                                className="bg-green-400 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${designScore.accessibility}%` }}
                              ></div>
                            </div>
                            <span className="text-white font-semibold">{Math.round(designScore.accessibility)}</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-purple-300">Aesthetics</span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 bg-gray-700 rounded-full h-2">
                              <div
                                className="bg-purple-400 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${designScore.aesthetics}%` }}
                              ></div>
                            </div>
                            <span className="text-white font-semibold">{Math.round(designScore.aesthetics)}</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-yellow-300">Performance</span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 bg-gray-700 rounded-full h-2">
                              <div
                                className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${designScore.performance}%` }}
                              ></div>
                            </div>
                            <span className="text-white font-semibold">{Math.round(designScore.performance)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-200 mb-3">💬 Phản Hồi Chi Tiết</h3>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {feedback.map((comment, index) => (
                        <div key={index} className="text-white text-sm bg-white/10 rounded p-2">
                          {comment}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2">
                    {Math.round(score)}
                  </div>
                  <div className="text-xl text-blue-200 mb-6">Điểm tổng kết</div>
                </div>

                <button
                  onClick={nextPhase}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  {currentBriefIndex < DESIGN_BRIEFS.length - 1 ? 'Dự Án Tiếp Theo' : 'Hoàn Thành Thử Thách'}
                </button>
              </div>
            )}

            {gamePhase === 'results' && (
              /* Final Results */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-2xl w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Star className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">🎉 Chúc Mừng!</h2>
                <p className="text-blue-200 text-lg mb-8">
                  Bạn đã hoàn thành thử thách thiết kế giao diện! Khả năng UI/UX của bạn thật ấn tượng.
                </p>

                <div className="flex gap-4 justify-center">
                  <button
                    onClick={restartGame}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Thử Lại
                  </button>
                  <button
                    onClick={() => onComplete(score >= 60, score)}
                    className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
                  >
                    <Award className="w-5 h-5" />
                    Hoàn Thành
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InterfaceDesignChallengeGame;
