'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { Lock, Shield, Eye, EyeOff, CheckCircle, AlertTriangle, Users, Zap } from 'lucide-react';

interface PrivacyProtectionChallengeGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface PrivacyChallenge {
  id: string;
  title: string;
  scenario: string;
  threat: string;
  tools: {
    id: string;
    name: string;
    description: string;
    effectiveness: number;
    cost: number;
  }[];
  correctTool: string;
  explanation: string;
}

const privacyChallenges: PrivacyChallenge[] = [
  {
    id: 'social-media-privacy',
    title: 'Bảo Mật Mạng Xã Hội',
    scenario: 'Bạn muốn chia sẻ ảnh gia đình trên mạng xã hội nhưng lo ngại về quyền riêng tư',
    threat: 'Thông tin cá nhân có thể bị thu thập và sử dụng sai mục đích',
    tools: [
      {
        id: 'public-post',
        name: 'Đăng Công Khai',
        description: 'Chia sẻ với tất cả mọi người',
        effectiveness: 20,
        cost: 0
      },
      {
        id: 'privacy-settings',
        name: 'Cài Đặt Riêng Tư',
        description: 'Chỉ chia sẻ với bạn bè, tắt định vị',
        effectiveness: 80,
        cost: 10
      },
      {
        id: 'no-sharing',
        name: 'Không Chia Sẻ',
        description: 'Giữ ảnh riêng tư hoàn toàn',
        effectiveness: 95,
        cost: 20
      }
    ],
    correctTool: 'privacy-settings',
    explanation: 'Cài đặt riêng tư cho phép chia sẻ an toàn với những người bạn tin tưởng'
  },
  {
    id: 'password-security',
    title: 'Bảo Mật Mật Khẩu',
    scenario: 'Tài khoản email của bạn có nguy cơ bị hack do mật khẩu yếu',
    threat: 'Hacker có thể truy cập tài khoản và đánh cắp thông tin nhạy cảm',
    tools: [
      {
        id: 'simple-password',
        name: 'Mật Khẩu Đơn Giản',
        description: 'Sử dụng tên + năm sinh',
        effectiveness: 15,
        cost: 0
      },
      {
        id: 'complex-password',
        name: 'Mật Khẩu Phức Tạp',
        description: 'Kết hợp chữ, số, ký tự đặc biệt',
        effectiveness: 70,
        cost: 15
      },
      {
        id: 'password-manager',
        name: 'Trình Quản Lý Mật Khẩu',
        description: 'Tạo và lưu mật khẩu mạnh tự động',
        effectiveness: 95,
        cost: 25
      }
    ],
    correctTool: 'password-manager',
    explanation: 'Trình quản lý mật khẩu tạo mật khẩu mạnh và duy nhất cho mỗi tài khoản'
  },
  {
    id: 'public-wifi',
    title: 'WiFi Công Cộng An Toàn',
    scenario: 'Bạn cần làm việc tại quán cafe với WiFi miễn phí',
    threat: 'Dữ liệu có thể bị chặn và đánh cắp qua mạng không bảo mật',
    tools: [
      {
        id: 'direct-connection',
        name: 'Kết Nối Trực Tiếp',
        description: 'Sử dụng WiFi cafe trực tiếp',
        effectiveness: 25,
        cost: 0
      },
      {
        id: 'https-only',
        name: 'Chỉ Dùng HTTPS',
        description: 'Truy cập website có mã hóa SSL',
        effectiveness: 60,
        cost: 5
      },
      {
        id: 'vpn-protection',
        name: 'VPN Bảo Vệ',
        description: 'Mã hóa tất cả dữ liệu qua VPN',
        effectiveness: 90,
        cost: 20
      }
    ],
    correctTool: 'vpn-protection',
    explanation: 'VPN mã hóa toàn bộ kết nối internet, bảo vệ dữ liệu khỏi bị theo dõi'
  },
  {
    id: 'app-permissions',
    title: 'Quyền Ứng Dụng',
    scenario: 'Ứng dụng game mới yêu cầu quyền truy cập danh bạ và vị trí',
    threat: 'Ứng dụng có thể thu thập thông tin không cần thiết cho mục đích thương mại',
    tools: [
      {
        id: 'grant-all',
        name: 'Cấp Tất Cả Quyền',
        description: 'Cho phép mọi yêu cầu của ứng dụng',
        effectiveness: 10,
        cost: 0
      },
      {
        id: 'selective-permissions',
        name: 'Quyền Có Chọn Lọc',
        description: 'Chỉ cấp quyền cần thiết cho chức năng game',
        effectiveness: 80,
        cost: 15
      },
      {
        id: 'minimal-permissions',
        name: 'Quyền Tối Thiểu',
        description: 'Từ chối mọi quyền không cần thiết',
        effectiveness: 95,
        cost: 25
      }
    ],
    correctTool: 'minimal-permissions',
    explanation: 'Nguyên tắc quyền tối thiểu giúp giảm thiểu rủi ro thu thập dữ liệu không cần thiết'
  }
];

export default function PrivacyProtectionChallengeGame({
  onComplete,
  timeLeft,
  onRestart
}: PrivacyProtectionChallengeGameProps) {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [selectedTool, setSelectedTool] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [privacyPoints, setPrivacyPoints] = useState(100);
  const [gameComplete, setGameComplete] = useState(false);
  const [challengeResults, setChallengeResults] = useState<{ challengeId: string; correct: boolean; score: number }[]>([]);

  const handleToolSelect = useCallback((toolId: string) => {
    if (showResult) return;
    setSelectedTool(toolId);
  }, [showResult]);

  const handleImplementTool = useCallback(() => {
    if (!selectedTool) return;

    const challenge = privacyChallenges[currentChallenge];
    const tool = challenge.tools.find(t => t.id === selectedTool);
    
    if (tool) {
      const isCorrect = selectedTool === challenge.correctTool;
      const scoreGain = tool.effectiveness - tool.cost;
      const newScore = totalScore + scoreGain;
      const privacyCost = isCorrect ? 0 : 10;
      const newPrivacyPoints = Math.max(0, privacyPoints - privacyCost);
      
      setTotalScore(newScore);
      setPrivacyPoints(newPrivacyPoints);
      setChallengeResults(prev => [...prev, {
        challengeId: challenge.id,
        correct: isCorrect,
        score: scoreGain
      }]);
      setShowResult(true);
    }
  }, [selectedTool, currentChallenge, totalScore, privacyPoints]);

  const handleNextChallenge = useCallback(() => {
    if (currentChallenge < privacyChallenges.length - 1) {
      setCurrentChallenge(prev => prev + 1);
      setSelectedTool('');
      setShowResult(false);
    } else {
      setGameComplete(true);
      const finalScore = Math.max(0, Math.min(100, totalScore));
      onComplete(totalScore > 0, finalScore);
    }
  }, [currentChallenge, totalScore, onComplete]);

  useEffect(() => {
    if (timeLeft <= 0 && !gameComplete) {
      const finalScore = Math.max(0, totalScore);
      onComplete(totalScore > 0, finalScore);
    }
  }, [timeLeft, gameComplete, totalScore, onComplete]);

  const currentChallengeData = privacyChallenges[currentChallenge];
  const selectedToolData = currentChallengeData?.tools.find(t => t.id === selectedTool);

  if (gameComplete) {
    const finalScore = Math.max(0, Math.min(100, totalScore));
    const correctAnswers = challengeResults.filter(result => result.correct).length;

    return (
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white rounded-xl">
        <div className="text-center mb-8">
          <Lock className="w-16 h-16 mx-auto mb-4 text-green-400" />
          <h2 className="text-3xl font-bold mb-2">Kết Quả Privacy Protection</h2>
          <div className="text-6xl font-bold text-green-400 mb-4">
            {Math.round(finalScore)}
          </div>
          <p className="text-xl mb-6">
            Privacy Score: {privacyPoints}/100 | Correct: {correctAnswers}/{privacyChallenges.length}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-green-400" />
              Privacy Skills
            </h3>
            <ul className="space-y-2 text-sm">
              {finalScore >= 80 && <li>• Excellent privacy awareness</li>}
              {privacyPoints >= 80 && <li>• Strong data protection habits</li>}
              {finalScore >= 60 && <li>• Good security tool selection</li>}
              {correctAnswers >= 3 && <li>• Smart privacy decision making</li>}
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-orange-400" />
              Areas to Improve
            </h3>
            <ul className="space-y-2 text-sm">
              {finalScore < 60 && <li>• Learn more privacy tools</li>}
              {privacyPoints < 80 && <li>• Practice safer habits</li>}
              {correctAnswers < 2 && <li>• Review privacy fundamentals</li>}
              <li>• Stay updated on privacy threats</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={onRestart}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
          >
            <Zap className="w-4 h-4 inline mr-2" />
            Thử Lại
          </button>
          <button
            onClick={() => onComplete(true, finalScore)}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            <CheckCircle className="w-4 h-4 inline mr-2" />
            Hoàn Thành
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white rounded-xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Lock className="w-8 h-8 mr-3 text-green-400" />
          <div>
            <h2 className="text-2xl font-bold">Privacy Protection Challenge</h2>
            <p className="text-green-300">Challenge {currentChallenge + 1}/{privacyChallenges.length}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-green-400">{totalScore} pts</div>
          <div className="text-sm text-gray-300 flex items-center">
            <Shield className="w-4 h-4 mr-1" />
            Privacy: {privacyPoints}/100
          </div>
          <div className="text-sm text-gray-300">⏱️ {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white/20 rounded-full h-2 mb-6">
        <div 
          className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentChallenge + (showResult ? 1 : 0)) / privacyChallenges.length) * 100}%` }}
        />
      </div>

      {/* Challenge Content */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold mb-3 text-yellow-300">
          {currentChallengeData.title}
        </h3>
        
        <div className="bg-blue-900/30 rounded-lg p-4 mb-4">
          <div className="flex items-start mb-2">
            <Eye className="w-5 h-5 mr-2 text-blue-300 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-blue-100 mb-2"><strong>Tình huống:</strong> {currentChallengeData.scenario}</p>
            </div>
          </div>
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 mr-2 text-orange-300 flex-shrink-0 mt-0.5" />
            <p className="text-orange-100"><strong>Rủi ro:</strong> {currentChallengeData.threat}</p>
          </div>
        </div>

        {/* Privacy Tools */}
        <h4 className="text-lg font-semibold mb-4 text-green-300">Chọn công cụ bảo vệ:</h4>
        <div className="grid gap-4">
          {currentChallengeData.tools.map((tool) => (
            <div key={tool.id} className="relative">
              <button
                onClick={() => handleToolSelect(tool.id)}
                disabled={showResult}
                className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                  selectedTool === tool.id
                    ? showResult
                      ? tool.id === currentChallengeData.correctTool
                        ? 'border-green-500 bg-green-900/30'
                        : 'border-red-500 bg-red-900/30'
                      : 'border-green-500 bg-green-900/30'
                    : 'border-gray-600 bg-white/5 hover:bg-white/10'
                } ${showResult ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h5 className="font-semibold text-lg">{tool.name}</h5>
                    <p className="text-gray-300 text-sm mb-2">{tool.description}</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Shield className="w-4 h-4 mr-1 text-green-400" />
                        <span className="text-sm">Hiệu quả: {tool.effectiveness}%</span>
                      </div>
                      <div className="flex items-center">
                        <Zap className="w-4 h-4 mr-1 text-yellow-400" />
                        <span className="text-sm">Cost: {tool.cost}</span>
                      </div>
                    </div>
                  </div>
                  {showResult && selectedTool === tool.id && (
                    <div className="flex items-center ml-4">
                      {tool.id === currentChallengeData.correctTool ? (
                        <CheckCircle className="w-6 h-6 text-green-400" />
                      ) : (
                        <EyeOff className="w-6 h-6 text-red-400" />
                      )}
                    </div>
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Explanation */}
      {showResult && (
        <div className="bg-purple-900/30 border border-purple-500 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-purple-300 mb-2">💡 Giải thích:</h4>
          <p className="text-purple-100">{currentChallengeData.explanation}</p>
          {selectedToolData && (
            <p className="text-gray-300 mt-2 text-sm">
              Điểm số: {selectedToolData.effectiveness - selectedToolData.cost} 
              (Hiệu quả {selectedToolData.effectiveness}% - Chi phí {selectedToolData.cost})
            </p>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        {!showResult ? (
          <button
            onClick={handleImplementTool}
            disabled={!selectedTool}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              selectedTool
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            <Shield className="w-4 h-4 inline mr-2" />
            Triển Khai Bảo Vệ
          </button>
        ) : (
          <button
            onClick={handleNextChallenge}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
          >
            {currentChallenge < privacyChallenges.length - 1 ? (
              <>
                <Users className="w-4 h-4 inline mr-2" />
                Challenge Tiếp Theo
              </>
            ) : (
              <>
                <Lock className="w-4 h-4 inline mr-2" />
                Xem Kết Quả
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}