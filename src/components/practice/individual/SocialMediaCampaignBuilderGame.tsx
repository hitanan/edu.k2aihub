import React, { useState, useEffect, useCallback } from 'react';
import { 
  Share2, 
  Users, 
  TrendingUp, 
  Heart, 
  Award,
  Play,
  RotateCcw,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  MessageSquare,
  Eye,
  Zap,
  CheckCircle,
  DollarSign
} from 'lucide-react';

interface SocialMediaCampaignBuilderGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface SocialPlatform {
  id: string;
  name: string;
  icon: React.ReactNode;
  audienceType: string;
  maxReach: number;
  costPerPost: number;
  engagementRate: number;
  bestContentTypes: string[];
  demographics: string;
  color: string;
}

interface CampaignContent {
  id: string;
  type: 'image' | 'video' | 'story' | 'carousel' | 'live' | 'reel';
  title: string;
  description: string;
  cost: number;
  baseEngagement: number;
  creationTime: number; // hours
  effectiveness: { [platform: string]: number };
  requirements: string[];
}

interface CampaignGoal {
  id: string;
  name: string;
  description: string;
  metrics: {
    reach: number;
    engagement: number;
    conversions: number;
  };
  budget: number;
  timeline: number; // days
  difficulty: 'easy' | 'medium' | 'hard';
}

interface CampaignResult {
  reach: number;
  engagement: number;
  conversions: number;
  cost: number;
  roi: number;
  brandAwareness: number;
}

const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    icon: <Instagram className="w-5 h-5" />,
    audienceType: 'Visual-focused, Young adults',
    maxReach: 100000,
    costPerPost: 50,
    engagementRate: 1.2,
    bestContentTypes: ['image', 'story', 'reel', 'carousel'],
    demographics: '18-34 tuổi, thời trang, lifestyle',
    color: 'from-pink-500 to-purple-600'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: <Facebook className="w-5 h-5" />,
    audienceType: 'Broad audience, All ages',
    maxReach: 200000,
    costPerPost: 30,
    engagementRate: 0.8,
    bestContentTypes: ['image', 'video', 'live'],
    demographics: '25-55 tuổi, đa dạng sở thích',
    color: 'from-blue-500 to-blue-700'
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    icon: <MessageSquare className="w-5 h-5" />,
    audienceType: 'Gen Z, Entertainment',
    maxReach: 150000,
    costPerPost: 40,
    engagementRate: 2.5,
    bestContentTypes: ['video', 'reel'],
    demographics: '16-24 tuổi, giải trí, xu hướng',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: <Youtube className="w-5 h-5" />,
    audienceType: 'Educational, Long-form',
    maxReach: 80000,
    costPerPost: 100,
    engagementRate: 0.6,
    bestContentTypes: ['video', 'live'],
    demographics: '18-45 tuổi, giáo dục, entertainment',
    color: 'from-red-500 to-red-700'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: <Users className="w-5 h-5" />,
    audienceType: 'Professional, B2B',
    maxReach: 50000,
    costPerPost: 60,
    engagementRate: 0.5,
    bestContentTypes: ['image', 'carousel', 'video'],
    demographics: '25-55 tuổi, chuyên nghiệp, B2B',
    color: 'from-blue-600 to-indigo-700'
  },
  {
    id: 'twitter',
    name: 'Twitter/X',
    icon: <Twitter className="w-5 h-5" />,
    audienceType: 'News, Real-time',
    maxReach: 120000,
    costPerPost: 25,
    engagementRate: 1.5,
    bestContentTypes: ['image'],
    demographics: '20-40 tuổi, tin tức, thảo luận',
    color: 'from-gray-600 to-gray-800'
  }
];

const CAMPAIGN_CONTENT: CampaignContent[] = [
  {
    id: 'product-photo',
    type: 'image',
    title: 'Ảnh Sản Phẩm Chuyên Nghiệp',
    description: 'Ảnh sản phẩm chất lượng cao với lighting và composition tốt',
    cost: 100,
    baseEngagement: 1000,
    creationTime: 4,
    effectiveness: { instagram: 9, facebook: 8, linkedin: 7, twitter: 6 },
    requirements: []
  },
  {
    id: 'viral-video',
    type: 'video',
    title: 'Video Viral Trend',
    description: 'Video ngắn theo xu hướng hiện tại, có khả năng viral',
    cost: 300,
    baseEngagement: 5000,
    creationTime: 12,
    effectiveness: { tiktok: 10, instagram: 9, facebook: 7, youtube: 6 },
    requirements: ['trend-research']
  },
  {
    id: 'educational-content',
    type: 'carousel',
    title: 'Nội Dung Giáo Dục',
    description: 'Carousel posts chia sẻ kiến thức và tips hữu ích',
    cost: 150,
    baseEngagement: 2000,
    creationTime: 6,
    effectiveness: { linkedin: 10, instagram: 8, facebook: 7 },
    requirements: ['expertise']
  },
  {
    id: 'user-story',
    type: 'story',
    title: 'User Generated Content',
    description: 'Stories từ khách hàng thực tế về trải nghiệm sản phẩm',
    cost: 80,
    baseEngagement: 800,
    creationTime: 3,
    effectiveness: { instagram: 8, facebook: 6, tiktok: 7 },
    requirements: ['customer-base']
  },
  {
    id: 'live-demo',
    type: 'live',
    title: 'Live Demo & Q&A',
    description: 'Livestream demo sản phẩm và tương tác trực tiếp với khách hàng',
    cost: 200,
    baseEngagement: 3000,
    creationTime: 8,
    effectiveness: { facebook: 9, instagram: 8, youtube: 10, linkedin: 6 },
    requirements: ['speaking-skills']
  },
  {
    id: 'behind-scenes',
    type: 'reel',
    title: 'Behind The Scenes',
    description: 'Video hậu trường cho thấy quá trình sản xuất/làm việc',
    cost: 120,
    baseEngagement: 1500,
    creationTime: 5,
    effectiveness: { instagram: 9, tiktok: 8, facebook: 6, youtube: 7 },
    requirements: []
  },
  {
    id: 'testimonial-video',
    type: 'video',
    title: 'Customer Testimonials',
    description: 'Video phỏng vấn khách hàng về trải nghiệm tích cực',
    cost: 250,
    baseEngagement: 2500,
    creationTime: 10,
    effectiveness: { facebook: 8, youtube: 9, linkedin: 8, instagram: 6 },
    requirements: ['satisfied-customers']
  },
  {
    id: 'contest-campaign',
    type: 'image',
    title: 'Contest & Giveaway',
    description: 'Chiến dịch contest với prizes hấp dẫn để tăng engagement',
    cost: 400,
    baseEngagement: 8000,
    creationTime: 15,
    effectiveness: { instagram: 10, facebook: 9, tiktok: 8, twitter: 7 },
    requirements: ['budget-prizes']
  }
];

const CAMPAIGN_GOALS: CampaignGoal[] = [
  {
    id: 'brand-awareness',
    name: 'Tăng Nhận Diện Thương Hiệu',
    description: 'Mục tiêu tăng độ nhận biết thương hiệu trong cộng đồng target',
    metrics: { reach: 100000, engagement: 5000, conversions: 100 },
    budget: 2000,
    timeline: 30,
    difficulty: 'easy'
  },
  {
    id: 'lead-generation',
    name: 'Tạo Leads Chất Lượng',
    description: 'Thu thập thông tin khách hàng tiềm năng quan tâm đến sản phẩm',
    metrics: { reach: 50000, engagement: 8000, conversions: 500 },
    budget: 3000,
    timeline: 45,
    difficulty: 'medium'
  },
  {
    id: 'sales-conversion',
    name: 'Tối Ưu Chuyển Đổi Bán Hàng',
    description: 'Tập trung vào việc chuyển đổi từ engagement thành doanh số',
    metrics: { reach: 30000, engagement: 10000, conversions: 1000 },
    budget: 4000,
    timeline: 60,
    difficulty: 'hard'
  }
];

const SocialMediaCampaignBuilderGame: React.FC<SocialMediaCampaignBuilderGameProps> = ({
  onComplete,
  timeLeft,
  onRestart
}) => {
  const [selectedGoal, setSelectedGoal] = useState<CampaignGoal>(CAMPAIGN_GOALS[0]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<Set<string>>(new Set());
  const [selectedContent, setSelectedContent] = useState<Set<string>>(new Set());
  const [gamePhase, setGamePhase] = useState<'intro' | 'goal-selection' | 'platform-selection' | 'content-creation' | 'campaign-review' | 'results'>('intro');
  const [budget, setBudget] = useState(2000);
  const [timeline, setTimeline] = useState(30);
  const [campaignResult, setCampaignResult] = useState<CampaignResult | null>(null);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const calculateCampaignCost = useCallback(() => {
    let totalCost = 0;
    
    // Platform costs
    selectedPlatforms.forEach(platformId => {
      const platform = SOCIAL_PLATFORMS.find(p => p.id === platformId);
      if (platform) {
        totalCost += platform.costPerPost * Math.ceil(timeline / 7); // Weekly posts
      }
    });
    
    // Content creation costs
    selectedContent.forEach(contentId => {
      const content = CAMPAIGN_CONTENT.find(c => c.id === contentId);
      if (content) {
        totalCost += content.cost;
      }
    });
    
    return totalCost;
  }, [selectedPlatforms, selectedContent, timeline]);

  const simulateCampaignResults = useCallback(() => {
    let totalReach = 0;
    let totalEngagement = 0;
    let totalConversions = 0;
    const totalCost = calculateCampaignCost();
    
    selectedPlatforms.forEach(platformId => {
      const platform = SOCIAL_PLATFORMS.find(p => p.id === platformId);
      if (!platform) return;
      
      let platformReach = 0;
      let platformEngagement = 0;
      
      selectedContent.forEach(contentId => {
        const content = CAMPAIGN_CONTENT.find(c => c.id === contentId);
        if (!content) return;
        
        const effectiveness = content.effectiveness[platformId] || 1;
        const contentReach = (platform.maxReach * 0.1) * (effectiveness / 10);
        const contentEngagement = content.baseEngagement * (effectiveness / 10) * platform.engagementRate;
        
        platformReach += contentReach;
        platformEngagement += contentEngagement;
      });
      
      totalReach += platformReach;
      totalEngagement += platformEngagement;
    });
    
    // Calculate conversions based on engagement and goal difficulty
    const conversionRate = selectedGoal.difficulty === 'easy' ? 0.05 : 
                          selectedGoal.difficulty === 'medium' ? 0.08 : 0.12;
    totalConversions = totalEngagement * conversionRate;
    
    // Calculate ROI and brand awareness
    const roi = totalConversions > 0 ? ((totalConversions * 50) - totalCost) / totalCost * 100 : -100;
    const brandAwareness = Math.min(100, (totalReach / selectedGoal.metrics.reach) * 100);
    
    const result: CampaignResult = {
      reach: Math.round(totalReach),
      engagement: Math.round(totalEngagement),
      conversions: Math.round(totalConversions),
      cost: totalCost,
      roi: Math.round(roi),
      brandAwareness: Math.round(brandAwareness)
    };
    
    setCampaignResult(result);
    
    // Calculate score based on goal achievement
    const reachScore = Math.min(100, (result.reach / selectedGoal.metrics.reach) * 100);
    const engagementScore = Math.min(100, (result.engagement / selectedGoal.metrics.engagement) * 100);
    const conversionScore = Math.min(100, (result.conversions / selectedGoal.metrics.conversions) * 100);
    const budgetScore = Math.max(0, 100 - ((result.cost - selectedGoal.budget) / selectedGoal.budget * 100));
    
    const finalScore = (reachScore + engagementScore + conversionScore + budgetScore) / 4;
    setScore(finalScore);
    
    return result;
  }, [selectedPlatforms, selectedContent, selectedGoal, calculateCampaignCost]);

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev => {
      const newSet = new Set(prev);
      if (newSet.has(platformId)) {
        newSet.delete(platformId);
      } else {
        newSet.add(platformId);
      }
      return newSet;
    });
  };

  const toggleContent = (contentId: string) => {
    setSelectedContent(prev => {
      const newSet = new Set(prev);
      if (newSet.has(contentId)) {
        newSet.delete(contentId);
      } else {
        newSet.add(contentId);
      }
      return newSet;
    });
  };

  const startGame = () => {
    setIsPlaying(true);
    setGamePhase('intro');
    setSelectedGoal(CAMPAIGN_GOALS[0]);
    setSelectedPlatforms(new Set());
    setSelectedContent(new Set());
    setBudget(2000);
    setTimeline(30);
    setCampaignResult(null);
    setScore(0);
  };

  const nextPhase = () => {
    switch (gamePhase) {
      case 'intro':
        setGamePhase('goal-selection');
        break;
      case 'goal-selection':
        setBudget(selectedGoal.budget);
        setTimeline(selectedGoal.timeline);
        setGamePhase('platform-selection');
        break;
      case 'platform-selection':
        setGamePhase('content-creation');
        break;
      case 'content-creation':
        setGamePhase('campaign-review');
        break;
      case 'campaign-review':
        simulateCampaignResults();
        setGamePhase('results');
        break;
      case 'results':
        onComplete(score >= 75, score);
        break;
    }
  };

  const restartGame = () => {
    setSelectedGoal(CAMPAIGN_GOALS[0]);
    setSelectedPlatforms(new Set());
    setSelectedContent(new Set());
    setGamePhase('intro');
    setBudget(2000);
    setTimeline(30);
    setCampaignResult(null);
    setScore(0);
    setIsPlaying(false);
    onRestart();
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  useEffect(() => {
    if (timeLeft <= 0 && isPlaying) {
      onComplete(false, score);
    }
  }, [timeLeft, isPlaying, score, onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-purple-500/20 p-3 rounded-xl">
                <Share2 className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">📱 Social Media Campaign Builder</h1>
                <p className="text-purple-200">Xây dựng chiến dịch marketing hiệu quả</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-2xl font-bold text-purple-400">${budget}</div>
                <div className="text-sm text-purple-200">Budget</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-pink-400">{timeline}</div>
                <div className="text-sm text-purple-200">Days</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-cyan-400">{Math.round(score)}</div>
                <div className="text-sm text-purple-200">Score</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-yellow-400">{Math.ceil(timeLeft / 60)}</div>
                <div className="text-sm text-purple-200">Minutes</div>
              </div>
            </div>
          </div>
        </div>

        {!isPlaying ? (
          /* Start Screen */
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center">
            <div className="bg-purple-500/20 p-6 rounded-2xl w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <TrendingUp className="w-12 h-12 text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Trở Thành Social Media Strategist!</h2>
            <p className="text-purple-200 text-lg mb-8 max-w-2xl mx-auto">
              Thiết kế và thực hiện chiến dịch marketing trên social media để đạt được mục tiêu kinh doanh. 
              Chọn platforms phù hợp, tạo nội dung hấp dẫn và tối ưu hóa ngân sách để có ROI cao nhất.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="bg-blue-900/30 rounded-lg p-4 text-left">
                <h3 className="font-semibold text-blue-200 mb-2">🎯 Các Bước Chiến Dịch</h3>
                <ul className="text-blue-100 text-sm space-y-1">
                  <li>• Xác định mục tiêu marketing</li>
                  <li>• Chọn platforms phù hợp</li>
                  <li>• Tạo nội dung thu hút</li>
                  <li>• Theo dõi và tối ưu</li>
                </ul>
              </div>
              <div className="bg-pink-900/30 rounded-lg p-4 text-left">
                <h3 className="font-semibold text-pink-200 mb-2">🏆 Thành Công Khi</h3>
                <ul className="text-pink-100 text-sm space-y-1">
                  <li>• Đạt được KPIs đã đề ra</li>
                  <li>• ROI tích cực</li>
                  <li>• Tối ưu ngân sách</li>
                  <li>• Engagement cao</li>
                </ul>
              </div>
            </div>
            <button
              onClick={startGame}
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center gap-2 mx-auto"
            >
              <Play className="w-6 h-6" />
              Bắt Đầu Chiến Dịch
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-purple-200 capitalize">{gamePhase.replace('-', ' ')}</span>
                <span className="text-pink-300">Campaign Builder</span>
              </div>
              <div className="w-full bg-purple-900/50 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-400 h-2 rounded-full transition-all duration-500"
                  style={{ 
                    width: `${
                      gamePhase === 'intro' ? 0 :
                      gamePhase === 'goal-selection' ? 20 :
                      gamePhase === 'platform-selection' ? 40 :
                      gamePhase === 'content-creation' ? 60 :
                      gamePhase === 'campaign-review' ? 80 :
                      100
                    }%` 
                  }}
                ></div>
              </div>
            </div>

            {gamePhase === 'intro' && (
              /* Introduction */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-6">🚀 Social Media Marketing Strategy</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-purple-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-200 mb-3">📈 Marketing Funnel</h3>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white/10 rounded p-2 flex items-center gap-3">
                        <Eye className="w-4 h-4 text-blue-400" />
                        <div>
                          <div className="font-semibold text-white">Awareness</div>
                          <div className="text-gray-300">Tăng độ nhận biết thương hiệu</div>
                        </div>
                      </div>
                      <div className="bg-white/10 rounded p-2 flex items-center gap-3">
                        <Heart className="w-4 h-4 text-pink-400" />
                        <div>
                          <div className="font-semibold text-white">Engagement</div>
                          <div className="text-gray-300">Tương tác với target audience</div>
                        </div>
                      </div>
                      <div className="bg-white/10 rounded p-2 flex items-center gap-3">
                        <DollarSign className="w-4 h-4 text-green-400" />
                        <div>
                          <div className="font-semibold text-white">Conversion</div>
                          <div className="text-gray-300">Chuyển đổi thành khách hàng</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-200 mb-3">🎯 Key Metrics</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <strong className="text-white">Reach:</strong>
                        <p className="text-blue-100">Số người tiếp cận được nội dung</p>
                      </div>
                      <div>
                        <strong className="text-white">Engagement Rate:</strong>
                        <p className="text-blue-100">Tỷ lệ tương tác trên tổng reach</p>
                      </div>
                      <div>
                        <strong className="text-white">ROI:</strong>
                        <p className="text-blue-100">Return on Investment từ chiến dịch</p>
                      </div>
                      <div>
                        <strong className="text-white">Conversion Rate:</strong>
                        <p className="text-blue-100">Tỷ lệ chuyển đổi từ engagement</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-indigo-200 mb-3">💡 Pro Tips</h3>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white">Hiểu rõ target audience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white">Chọn platforms phù hợp</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white">Content quality {'>'}quantity</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white">Consistent branding</span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={nextPhase}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Xác Định Mục Tiêu
                </button>
              </div>
            )}

            {gamePhase === 'goal-selection' && (
              /* Goal Selection */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">🎯 Chọn Mục Tiêu Chiến Dịch</h2>
                <p className="text-purple-200 mb-6">
                  Mỗi mục tiêu có requirements và KPIs khác nhau. Chọn mục tiêu phù hợp với tình hình business.
                </p>
                
                <div className="grid gap-4 mb-6">
                  {CAMPAIGN_GOALS.map((goal) => (
                    <button
                      key={goal.id}
                      onClick={() => setSelectedGoal(goal)}
                      className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                        selectedGoal.id === goal.id
                          ? 'border-purple-400 bg-purple-500/20'
                          : 'border-gray-600 bg-gray-800/30 hover:border-gray-500'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-white text-lg">{goal.name}</h3>
                          <p className="text-gray-300 text-sm">{goal.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            goal.difficulty === 'easy' ? 'bg-green-500/20 text-green-300' :
                            goal.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                            'bg-red-500/20 text-red-300'
                          }`}>
                            {goal.difficulty}
                          </span>
                          {selectedGoal.id === goal.id && (
                            <CheckCircle className="w-5 h-5 text-purple-400" />
                          )}
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-4 gap-3 text-sm">
                        <div className="bg-blue-900/30 rounded p-2">
                          <div className="font-semibold text-blue-200">Target Reach</div>
                          <div className="text-white">{goal.metrics.reach.toLocaleString()}</div>
                        </div>
                        <div className="bg-purple-900/30 rounded p-2">
                          <div className="font-semibold text-purple-200">Engagement</div>
                          <div className="text-white">{goal.metrics.engagement.toLocaleString()}</div>
                        </div>
                        <div className="bg-green-900/30 rounded p-2">
                          <div className="font-semibold text-green-200">Conversions</div>
                          <div className="text-white">{goal.metrics.conversions.toLocaleString()}</div>
                        </div>
                        <div className="bg-yellow-900/30 rounded p-2">
                          <div className="font-semibold text-yellow-200">Budget</div>
                          <div className="text-white">${goal.budget}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={nextPhase}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Chọn Platforms
                </button>
              </div>
            )}

            {gamePhase === 'platform-selection' && (
              /* Platform Selection */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-white">📱 Chọn Social Media Platforms</h2>
                  <div className="text-sm text-purple-200">
                    Estimated Cost: <span className="text-yellow-400 font-semibold">${calculateCampaignCost()}</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {SOCIAL_PLATFORMS.map((platform) => {
                    const isSelected = selectedPlatforms.has(platform.id);
                    const weeklyCost = platform.costPerPost * Math.ceil(timeline / 7);
                    return (
                      <button
                        key={platform.id}
                        onClick={() => togglePlatform(platform.id)}
                        className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                          isSelected
                            ? 'border-purple-400 bg-purple-500/20'
                            : 'border-gray-600 bg-gray-800/30 hover:border-gray-500'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${platform.color}`}>
                            {platform.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-semibold text-white">{platform.name}</h3>
                              {isSelected && <CheckCircle className="w-4 h-4 text-purple-400" />}
                            </div>
                            <p className="text-gray-300 text-sm mb-2">{platform.audienceType}</p>
                            <p className="text-xs text-gray-400 mb-3">{platform.demographics}</p>
                            
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div>
                                <span className="text-blue-300">Max Reach:</span>
                                <div className="text-white">{platform.maxReach.toLocaleString()}</div>
                              </div>
                              <div>
                                <span className="text-green-300">Engagement:</span>
                                <div className="text-white">{platform.engagementRate}%</div>
                              </div>
                              <div>
                                <span className="text-yellow-300">Cost/Post:</span>
                                <div className="text-white">${platform.costPerPost}</div>
                              </div>
                              <div>
                                <span className="text-purple-300">Campaign Cost:</span>
                                <div className="text-white">${weeklyCost}</div>
                              </div>
                            </div>
                            
                            <div className="mt-2">
                              <span className="text-xs text-gray-400">Best for: </span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {platform.bestContentTypes.map(type => (
                                  <span key={type} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                                    {type}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
                
                <button
                  onClick={nextPhase}
                  disabled={selectedPlatforms.size === 0}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Tạo Nội Dung ({selectedPlatforms.size} platforms selected)
                </button>
              </div>
            )}

            {gamePhase === 'content-creation' && (
              /* Content Creation */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-white">✨ Tạo Nội Dung Campaign</h2>
                  <div className="text-sm text-purple-200">
                    Content Cost: <span className="text-yellow-400 font-semibold">${Array.from(selectedContent).reduce((sum, id) => sum + (CAMPAIGN_CONTENT.find(c => c.id === id)?.cost || 0), 0)}</span>
                  </div>
                </div>
                
                <div className="grid gap-4 mb-6">
                  {CAMPAIGN_CONTENT.map((content) => {
                    const isSelected = selectedContent.has(content.id);
                    
                    return (
                      <button
                        key={content.id}
                        onClick={() => toggleContent(content.id)}
                        className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                          isSelected
                            ? 'border-pink-400 bg-pink-500/20'
                            : 'border-gray-600 bg-gray-800/30 hover:border-gray-500'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-semibold text-white">{content.title}</h3>
                              <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                                {content.type}
                              </span>
                              {isSelected && <CheckCircle className="w-4 h-4 text-pink-400" />}
                            </div>
                            <p className="text-gray-300 text-sm mb-3">{content.description}</p>
                            
                            <div className="grid md:grid-cols-3 gap-3 text-xs mb-3">
                              <div>
                                <span className="text-yellow-300">Cost:</span>
                                <div className="text-white font-semibold">${content.cost}</div>
                              </div>
                              <div>
                                <span className="text-green-300">Base Engagement:</span>
                                <div className="text-white font-semibold">{content.baseEngagement.toLocaleString()}</div>
                              </div>
                              <div>
                                <span className="text-blue-300">Creation Time:</span>
                                <div className="text-white font-semibold">{content.creationTime}h</div>
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="text-xs text-gray-400">Platform Effectiveness:</div>
                              <div className="flex flex-wrap gap-2">
                                {Array.from(selectedPlatforms).map(platformId => {
                                  const platform = SOCIAL_PLATFORMS.find(p => p.id === platformId);
                                  const effectiveness = content.effectiveness[platformId] || 1;
                                  if (!platform) return null;
                                  return (
                                    <div key={platformId} className="flex items-center gap-1">
                                      <span className="text-gray-300 text-xs">{platform.name}:</span>
                                      <span className={`text-xs font-semibold ${
                                        effectiveness >= 8 ? 'text-green-400' :
                                        effectiveness >= 6 ? 'text-yellow-400' :
                                        'text-red-400'
                                      }`}>
                                        {effectiveness}/10
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
                
                <button
                  onClick={nextPhase}
                  disabled={selectedContent.size === 0}
                  className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Review Campaign ({selectedContent.size} content types)
                </button>
              </div>
            )}

            {gamePhase === 'campaign-review' && (
              /* Campaign Review */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-6">🔍 Review Campaign Strategy</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-200 mb-3">🎯 Campaign Goal</h3>
                    <div className="space-y-2">
                      <div className="text-white font-semibold">{selectedGoal.name}</div>
                      <div className="text-gray-300 text-sm">{selectedGoal.description}</div>
                      <div className="grid grid-cols-2 gap-2 text-xs mt-3">
                        <div>
                          <span className="text-blue-300">Target Reach:</span>
                          <div className="text-white">{selectedGoal.metrics.reach.toLocaleString()}</div>
                        </div>
                        <div>
                          <span className="text-purple-300">Engagement:</span>
                          <div className="text-white">{selectedGoal.metrics.engagement.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-200 mb-3">💰 Budget Breakdown</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Platform Costs:</span>
                        <span className="text-white">${Array.from(selectedPlatforms).reduce((sum, id) => {
                          const platform = SOCIAL_PLATFORMS.find(p => p.id === id);
                          return sum + (platform ? platform.costPerPost * Math.ceil(timeline / 7) : 0);
                        }, 0)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Content Creation:</span>
                        <span className="text-white">${Array.from(selectedContent).reduce((sum, id) => sum + (CAMPAIGN_CONTENT.find(c => c.id === id)?.cost || 0), 0)}</span>
                      </div>
                      <div className="border-t border-gray-600 pt-2 flex justify-between font-semibold">
                        <span className="text-white">Total Cost:</span>
                        <span className={`${calculateCampaignCost() > budget ? 'text-red-400' : 'text-green-400'}`}>
                          ${calculateCampaignCost()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Budget:</span>
                        <span className="text-yellow-400">${budget}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-indigo-900/30 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-indigo-200 mb-3">📱 Selected Platforms</h3>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(selectedPlatforms).map(platformId => {
                      const platform = SOCIAL_PLATFORMS.find(p => p.id === platformId);
                      if (!platform) return null;
                      return (
                        <div key={platformId} className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r ${platform.color}`}>
                          {platform.icon}
                          <span className="text-white font-semibold">{platform.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="bg-pink-900/30 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-pink-200 mb-3">✨ Content Strategy</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {Array.from(selectedContent).map(contentId => {
                      const content = CAMPAIGN_CONTENT.find(c => c.id === contentId);
                      if (!content) return null;
                      return (
                        <div key={contentId} className="bg-white/5 rounded p-3">
                          <div className="font-semibold text-white text-sm">{content.title}</div>
                          <div className="text-gray-300 text-xs">{content.type} - ${content.cost}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {calculateCampaignCost() > budget && (
                  <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 text-red-300 mb-2">
                      <Zap className="w-4 h-4" />
                      <span className="font-semibold">Budget Warning</span>
                    </div>
                    <p className="text-red-200 text-sm">
                      Campaign cost (${calculateCampaignCost()}) exceeds budget (${budget}). 
                      Consider reducing platforms or content to optimize costs.
                    </p>
                  </div>
                )}
                
                <button
                  onClick={nextPhase}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  🚀 Launch Campaign
                </button>
              </div>
            )}

            {gamePhase === 'results' && campaignResult && (
              /* Results */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-yellow-400" />
                  <h2 className="text-2xl font-bold text-white">📊 Campaign Results</h2>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6 mb-6">
                  <div className="bg-blue-900/30 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      {campaignResult.reach.toLocaleString()}
                    </div>
                    <div className="text-blue-200 font-semibold">Reach</div>
                    <div className="text-xs text-gray-300 mt-1">
                      Goal: {selectedGoal.metrics.reach.toLocaleString()}
                    </div>
                    <div className={`text-sm font-semibold mt-1 ${
                      campaignResult.reach >= selectedGoal.metrics.reach ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {Math.round((campaignResult.reach / selectedGoal.metrics.reach) * 100)}%
                    </div>
                  </div>
                  
                  <div className="bg-purple-900/30 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">
                      {campaignResult.engagement.toLocaleString()}
                    </div>
                    <div className="text-purple-200 font-semibold">Engagement</div>
                    <div className="text-xs text-gray-300 mt-1">
                      Goal: {selectedGoal.metrics.engagement.toLocaleString()}
                    </div>
                    <div className={`text-sm font-semibold mt-1 ${
                      campaignResult.engagement >= selectedGoal.metrics.engagement ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {Math.round((campaignResult.engagement / selectedGoal.metrics.engagement) * 100)}%
                    </div>
                  </div>
                  
                  <div className="bg-green-900/30 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">
                      {campaignResult.conversions.toLocaleString()}
                    </div>
                    <div className="text-green-200 font-semibold">Conversions</div>
                    <div className="text-xs text-gray-300 mt-1">
                      Goal: {selectedGoal.metrics.conversions.toLocaleString()}
                    </div>
                    <div className={`text-sm font-semibold mt-1 ${
                      campaignResult.conversions >= selectedGoal.metrics.conversions ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {Math.round((campaignResult.conversions / selectedGoal.metrics.conversions) * 100)}%
                    </div>
                  </div>
                  
                  <div className="bg-yellow-900/30 rounded-lg p-4 text-center">
                    <div className={`text-3xl font-bold mb-2 ${
                      campaignResult.roi > 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {campaignResult.roi > 0 ? '+' : ''}{campaignResult.roi}%
                    </div>
                    <div className="text-yellow-200 font-semibold">ROI</div>
                    <div className="text-xs text-gray-300 mt-1">
                      Cost: ${campaignResult.cost}
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-cyan-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-cyan-200 mb-3">📈 Performance Analysis</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300">Brand Awareness:</span>
                          <span className={getScoreColor(campaignResult.brandAwareness)}>{campaignResult.brandAwareness}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-cyan-400 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${campaignResult.brandAwareness}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300">Overall Score:</span>
                          <span className={getScoreColor(score)}>{Math.round(score)}/100</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all duration-1000 ${
                              score >= 80 ? 'bg-green-400' : score >= 60 ? 'bg-yellow-400' : 'bg-red-400'
                            }`}
                            style={{ width: `${score}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-900/30 rounded-lg p-4">
                    <h3 className="font-semibold text-indigo-200 mb-3">🎯 Key Insights</h3>
                    <div className="space-y-2 text-sm">
                      {campaignResult.reach >= selectedGoal.metrics.reach && (
                        <div className="flex items-center gap-2 text-green-300">
                          <CheckCircle className="w-4 h-4" />
                          <span>Đạt được target reach</span>
                        </div>
                      )}
                      {campaignResult.engagement >= selectedGoal.metrics.engagement && (
                        <div className="flex items-center gap-2 text-green-300">
                          <CheckCircle className="w-4 h-4" />
                          <span>Engagement vượt kỳ vọng</span>
                        </div>
                      )}
                      {campaignResult.roi > 0 && (
                        <div className="flex items-center gap-2 text-green-300">
                          <CheckCircle className="w-4 h-4" />
                          <span>ROI tích cực</span>
                        </div>
                      )}
                      {campaignResult.cost <= budget && (
                        <div className="flex items-center gap-2 text-green-300">
                          <CheckCircle className="w-4 h-4" />
                          <span>Trong ngân sách</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {score >= 80 ? '🌟 Marketing Master!' : 
                     score >= 60 ? '👍 Solid Campaign!' : 
                     '📈 Room for Improvement!'}
                  </h3>
                  <p className="text-purple-200">
                    {score >= 80 
                      ? 'Tuyệt vời! Chiến dịch của bạn đạt được tất cả KPIs và mang lại ROI cao.' 
                      : score >= 60 
                      ? 'Tốt lắm! Chiến dịch có hiệu quả, một số điều chỉnh nhỏ sẽ tối ưu hơn.' 
                      : 'Chiến dịch cần cải thiện. Hãy xem lại targeting và content strategy.'
                    }
                  </p>
                </div>
                
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={restartGame}
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Try Another Campaign
                  </button>
                  <button
                    onClick={() => onComplete(score >= 75, score)}
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
                  >
                    <Award className="w-5 h-5" />
                    Complete
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

export default SocialMediaCampaignBuilderGame;