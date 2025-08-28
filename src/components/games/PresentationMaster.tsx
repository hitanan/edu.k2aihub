import React, { useState, useEffect, useRef } from 'react';

interface PresentationSlide {
  id: string;
  title: string;
  content: string;
  visualType: 'text' | 'chart' | 'image' | 'bullet';
  designIssues: string[];
  improvements: string[];
  score: number;
}

interface PresentationChallenge {
  id: string;
  topic: string;
  audience: string;
  duration: string;
  context: string;
  slides: PresentationSlide[];
  learningObjectives: string[];
}

// Component props
interface PresentationMasterProps {
  onComplete?: (success: boolean, rawScore?: number) => void;
  timeLeft?: number;
  onRestart?: () => void;
}

const PresentationMaster: React.FC<PresentationMasterProps> = ({ 
  onComplete, 
  timeLeft: gameTimeLeft, 
  onRestart 
}) => {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImprovements, setSelectedImprovements] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<string>('');
  const [gameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes per challenge
  const [showTips, setShowTips] = useState(false);
  const [shuffledImprovements, setShuffledImprovements] = useState<string[]>([]);
  const [completedSlides, setCompletedSlides] = useState<number[]>([]);

  const challenges: PresentationChallenge[] = [
    {
      id: 'startup-pitch',
      topic: 'Thuyết Trình Startup Idea',
      audience: 'Nhà đầu tư và mentor',
      duration: '5 phút',
      context: 'Shark Tank Vietnam audition',
      learningObjectives: [
        'Tạo câu hook mở đầu ấn tượng',
        'Trình bày problem-solution một cách rõ ràng',
        'Sử dụng visual aids hiệu quả',
        'Kết thúc với call-to-action mạnh mẽ'
      ],
      slides: [
        {
          id: 'opening-slide',
          title: 'Slide Mở Đầu',
          content: 'Xin chào, tôi là Nguyễn Văn A. Hôm nay tôi sẽ trình bày về ứng dụng của tôi. Ứng dụng này rất tốt và sẽ thành công.',
          visualType: 'text',
          designIssues: [
            'Không có hook để thu hút attention',
            'Quá generic và không specific',
            'Thiếu thống kê hoặc facts ấn tượng',
            'Không create urgency hoặc curiosity'
          ],
          improvements: [
            'Bắt đầu với statistic shock: "85% sinh viên Việt Nam gặp khó khăn trong việc tìm kiếm thông tin học tập"',
            'Sử dụng storytelling: "Câu chuyện bắt đầu khi tôi thấy bạn tôi stress vì deadline assignment..."',
            'Đặt câu hỏi provocative: "Các bạn có biết việc tìm kiếm thông tin học tập đang lãng phí 3 giờ mỗi ngày?"',
            'Add personal credibility: "Với experience 2 năm develop mobile apps và background Computer Science..."'
          ],
          score: 25
        },
        {
          id: 'problem-slide', 
          title: 'Slide Vấn Đề',
          content: 'Có rất nhiều vấn đề trong giáo dục. Học sinh gặp khó khăn. Thông tin rất nhiều nhưng không organized.',
          visualType: 'text',
          designIssues: [
            'Vấn đề được describe quá vague',
            'Không có data support the claims',
            'Thiếu visual representation của problem',
            'Không quantify the impact'
          ],
          improvements: [
            'Sử dụng specific numbers: "68% học sinh spend 2+ giờ mỗi ngày để tìm materials"',
            'Visual infographic showing pain points',
            'Add testimonials hoặc quotes từ target users',
            'Showcase the cost của problem: time, money, stress levels'
          ],
          score: 25
        },
        {
          id: 'solution-slide',
          title: 'Slide Giải Pháp',
          content: 'Ứng dụng của chúng tôi sẽ giải quyết tất cả vấn đề. Nó có AI và machine learning. Rất dễ sử dụng.',
          visualType: 'text',
          designIssues: [
            'Quá technical jargon mà không explain benefits',
            'Claims quá broad ("giải quyết tất cả")',
            'Thiếu demo hoặc prototype visualization',
            'Không differentiate from existing solutions'
          ],
          improvements: [
            'Focus on key benefits: "Giảm 70% thời gian search, increase 40% learning efficiency"',
            'Include app mockup hoặc user journey visualization',
            'Explain AI features in simple terms với concrete examples',
            'Add competitive advantage: "Duy nhất ở VN với Vietnamese content optimization"'
          ],
          score: 25
        },
        {
          id: 'business-model-slide',
          title: 'Slide Mô Hình Kinh Doanh',
          content: 'Chúng tôi sẽ làm freemium. User miễn phí và premium user trả tiền. Sẽ có advertisement.',
          visualType: 'text',
          designIssues: [
            'Business model không được explain clearly',
            'Thiếu revenue projections',
            'Không có market size analysis',
            'Ad model có thể conflict với user experience'
          ],
          improvements: [
            'Visual revenue stream diagram với projected numbers',
            'Market sizing: "2.3 triệu học sinh THPT tại VN, potential market 50 tỷ VNĐ"',
            'Clear pricing strategy với value justification',
            'Show traction metrics nếu có: downloads, user feedback, pilot results'
          ],
          score: 25
        }
      ]
    },
    {
      id: 'academic-presentation',
      topic: 'Thuyết Trình Nghiên Cứu Khoa Học',
      audience: 'Giáo viên và bạn học',
      duration: '10 phút',
      context: 'Presentation cuối kỳ môn Nghiên Cứu Khoa Học',
      learningObjectives: [
        'Structure logical flow of research presentation',
        'Present methodology và findings effectively',
        'Use appropriate academic language',
        'Engage audience với interactive elements'
      ],
      slides: [
        {
          id: 'research-intro',
          title: 'Slide Giới Thiệu Nghiên Cứu',
          content: 'Nghiên cứu của tôi về tác động của mạng xã hội đến học sinh. Đây là topic rất important và interesting.',
          visualType: 'text',
          designIssues: [
            'Research question không được formulated clearly',
            'Thiếu literature review context',
            'Không establish significance của research',
            'Missing research objectives'
          ],
          improvements: [
            'Clear research question: "Mạng xã hội ảnh hưởng như thế nào đến academic performance của học sinh THPT?"',
            'Add literature gap: "Các nghiên cứu trước focus on college students, ít nghiên cứu về THPT tại VN"',
            'Establish significance: "With 89% học sinh sử dụng social media daily, understanding impact is crucial"',
            'Include hypothesis và research objectives'
          ],
          score: 20
        }
      ]
    }
  ];

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, gameStarted]);

  // Create stable shuffled improvements when slide changes
  useEffect(() => {
    if (gameStarted && challenges[currentChallenge] && challenges[currentChallenge].slides[currentSlide]) {
      const slide = challenges[currentChallenge].slides[currentSlide];
      const allOptions = [
        ...slide.improvements, 
        ...slide.designIssues.map(issue => `Incorrect: ${issue.substring(0, 30)}...`)
      ];
      const shuffled = [...allOptions].sort(() => Math.random() - 0.5).slice(0, 6);
      setShuffledImprovements(shuffled);
    }
  }, [currentChallenge, currentSlide, gameStarted]);

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setCurrentChallenge(0);
    setCurrentSlide(0);
    setSelectedImprovements([]);
    setCompletedSlides([]);
    setFeedback('');
    setTimeLeft(300);
  };

  const selectImprovement = (improvement: string) => {
    if (selectedImprovements.includes(improvement)) {
      setSelectedImprovements(selectedImprovements.filter(imp => imp !== improvement));
    } else {
      setSelectedImprovements([...selectedImprovements, improvement]);
    }
  };

  const submitSlideAnalysis = () => {
    const slide = challenges[currentChallenge].slides[currentSlide];
    const correctImprovements = slide.improvements.length;
    const selectedCount = selectedImprovements.length;
    
    // Calculate accuracy
    const correctlySelected = selectedImprovements.filter(imp => 
      slide.improvements.includes(imp)
    ).length;
    
    const slideScore = Math.round((correctlySelected / correctImprovements) * slide.score);
    setScore(score + slideScore);
    
    setFeedback(
      `Bạn đã chọn ${correctlySelected}/${correctImprovements} improvements chính xác! +${slideScore} điểm`
    );
    
    setCompletedSlides([...completedSlides, currentSlide]);
    
    setTimeout(() => {
      if (currentSlide < challenges[currentChallenge].slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
        setSelectedImprovements([]);
        setFeedback('');
      } else if (currentChallenge < challenges.length - 1) {
        setCurrentChallenge(currentChallenge + 1);
        setCurrentSlide(0);
        setSelectedImprovements([]);
        setCompletedSlides([]);
        setFeedback('');
        setTimeLeft(300);
      } else {
        endGame();
      }
    }, 3000);
  };

  const endGame = () => {
    setGameStarted(false);
    const totalPossible = challenges.reduce((sum, challenge) => 
      sum + challenge.slides.reduce((slideSum, slide) => slideSum + slide.score, 0), 0
    );
    setFeedback(`🎉 Hoàn thành! Điểm số cuối: ${score}/${totalPossible} (${Math.round(score/totalPossible*100)}%)`);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!gameStarted) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl border border-blue-500/30">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-blue-300 mb-4">
            🎤 Presentation Master
          </h2>
          <p className="text-gray-300 text-lg">
            Phát triển kỹ năng thuyết trình và presentation design bằng cách phân tích và cải thiện slides.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 my-8">
            <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-400/20">
              <h3 className="font-semibold text-blue-200 mb-2">🎯 Mục tiêu</h3>
              <p className="text-sm text-gray-300">Nhận biết design issues và suggest improvements</p>
            </div>
            <div className="bg-cyan-900/30 rounded-lg p-4 border border-cyan-400/20">
              <h3 className="font-semibold text-cyan-200 mb-2">⏱️ Thời gian</h3>
              <p className="text-sm text-gray-300">5 phút cho mỗi challenge</p>
            </div>
            <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-400/20">
              <h3 className="font-semibold text-blue-200 mb-2">🏆 Điểm số</h3>
              <p className="text-sm text-gray-300">Dựa trên độ chính xác phân tích</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-800/20 to-cyan-800/20 rounded-lg p-6 border border-blue-400/30">
            <h3 className="font-semibold text-blue-200 mb-4">Challenges bạn sẽ gặp:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {challenges.map((challenge, index) => (
                <div key={challenge.id} className="border-l-2 border-blue-400 pl-4">
                  <h4 className="font-medium text-cyan-300">{challenge.topic}</h4>
                  <p className="text-sm text-gray-400">👥 {challenge.audience}</p>
                  <p className="text-sm text-gray-400">📍 {challenge.context}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={startGame}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
          >
            🚀 Bắt đầu thuyết trình
          </button>
        </div>
      </div>
    );
  }

  const challenge = challenges[currentChallenge];
  const slide = challenge.slides[currentSlide];

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl border border-blue-500/30">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-blue-300">
            🎤 Presentation Master
          </h2>
          <p className="text-gray-400">
            {challenge.topic} - Slide {currentSlide + 1}/{challenge.slides.length}
          </p>
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold text-cyan-300">
            ⏱️ {formatTime(timeLeft)}
          </div>
          <div className="text-blue-300">
            🏆 {score} điểm
          </div>
        </div>
      </div>

      {/* Challenge Info */}
      <div className="bg-gradient-to-r from-blue-800/20 to-cyan-800/20 rounded-lg p-4 mb-6 border border-blue-400/20">
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="text-blue-200">👥 Audience:</span>
            <p className="text-gray-300">{challenge.audience}</p>
          </div>
          <div>
            <span className="text-cyan-200">⏱️ Duration:</span>
            <p className="text-gray-300">{challenge.duration}</p>
          </div>
          <div>
            <span className="text-blue-200">📍 Context:</span>
            <p className="text-gray-300">{challenge.context}</p>
          </div>
        </div>
      </div>

      {/* Current Slide */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Slide Preview */}
        <div className="bg-white rounded-lg p-6 border border-gray-300">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center border-b pb-2">
            {slide.title}
          </h3>
          <div className="text-gray-700 space-y-3">
            {slide.content.split('. ').map((sentence, index) => (
              <p key={index} className="text-sm">
                {sentence}{sentence.endsWith('.') ? '' : '.'}
              </p>
            ))}
          </div>
          
          <div className="mt-4 flex justify-center">
            <span className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-xs">
              {slide.visualType === 'text' ? '📝 Text Only' :
               slide.visualType === 'chart' ? '📊 Chart' :
               slide.visualType === 'image' ? '🖼️ Image' : '• Bullet Points'}
            </span>
          </div>
        </div>

        {/* Analysis Panel */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-cyan-300">
            🔍 Design Issues Identified:
          </h4>
          <div className="bg-red-900/20 rounded-lg p-4 border border-red-400/30">
            <ul className="space-y-2">
              {slide.designIssues.map((issue, index) => (
                <li key={index} className="text-sm text-red-300 flex items-start gap-2">
                  <span>❌</span>
                  <span>{issue}</span>
                </li>
              ))}
            </ul>
          </div>

          <h4 className="text-lg font-semibold text-green-300 mt-6">
            ✨ Chọn improvements tốt nhất:
          </h4>
          <div className="space-y-2">
            {shuffledImprovements.map((improvement, index) => (
              <button
                key={index}
                onClick={() => selectImprovement(improvement)}
                className={`w-full text-left p-3 rounded-lg border text-sm transition-all flex items-start gap-3 ${
                  selectedImprovements.includes(improvement)
                    ? 'bg-green-900/30 border-green-400/50 text-green-300'
                    : 'bg-blue-800/20 border-blue-400/30 text-gray-300 hover:bg-blue-700/30'
                }`}
              >
                <div className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center ${
                  selectedImprovements.includes(improvement)
                    ? 'bg-green-500 border-green-500'
                    : 'border-gray-400 bg-transparent'
                }`}>
                  {selectedImprovements.includes(improvement) && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className="flex-1">{improvement}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => setShowTips(!showTips)}
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          💡 {showTips ? 'Ẩn' : 'Hiện'} Tips
        </button>

        <button
          onClick={submitSlideAnalysis}
          disabled={selectedImprovements.length === 0}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all"
        >
          📝 Submit Analysis
        </button>
      </div>

      {/* Tips Panel */}
      {showTips && (
        <div className="mt-6 bg-gradient-to-r from-yellow-800/20 to-orange-800/20 rounded-lg p-4 border border-yellow-400/30">
          <h4 className="font-semibold text-yellow-300 mb-3">💡 Presentation Tips:</h4>
          <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-300">
            <li>• Hook audience với surprising statistics</li>
            <li>• Use storytelling để create emotional connection</li>
            <li>• Quantify problems và solutions với numbers</li>
            <li>• Include visuals để support key messages</li>
            <li>• End với clear call-to-action</li>
            <li>• Keep text minimal, focus on key points</li>
          </ul>
        </div>
      )}

      {/* Feedback */}
      {feedback && (
        <div className="mt-6 bg-gradient-to-r from-purple-800/20 to-blue-800/20 rounded-lg p-4 border border-purple-400/30">
          <p className="text-purple-200 font-medium">{feedback}</p>
        </div>
      )}
    </div>
  );
};

export default PresentationMaster;