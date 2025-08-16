'use client';

import React, { useState, useEffect } from 'react';
import { Trophy, Video, Clock, Camera, Mic, Eye, Users, TrendingUp, Heart } from 'lucide-react';

interface GameProps {
  onComplete: (_: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface ContentNiche {
  id: string;
  name: string;
  category: 'education' | 'entertainment' | 'lifestyle' | 'tech' | 'gaming' | 'business';
  market_size: number;
  competition_level: number;
  monetization_potential: number;
  content_difficulty: number;
  audience_engagement: number;
  description: string;
}

interface Equipment {
  id: string;
  name: string;
  type: 'camera' | 'audio' | 'lighting' | 'editing' | 'streaming';
  quality_boost: number;
  cost: number;
  ease_of_use: number;
  professional_look: number;
  description: string;
}

interface Platform {
  id: string;
  name: string;
  type: 'video' | 'social' | 'blog' | 'podcast' | 'live';
  audience_reach: number;
  monetization_rate: number;
  algorithm_difficulty: number;
  content_requirements: number;
  cost: number;
  description: string;
}

const CONTENT_NICHES: ContentNiche[] = [
  {
    id: 'vietnamese-cooking',
    name: 'Ẩm thực Việt Nam',
    category: 'lifestyle',
    market_size: 85,
    competition_level: 70,
    monetization_potential: 80,
    content_difficulty: 60,
    audience_engagement: 90,
    description: 'Dạy nấu ăn các món Việt truyền thống và hiện đại'
  },
  {
    id: 'programming-tutorials',
    name: 'Lập trình & Công nghệ',
    category: 'education',
    market_size: 90,
    competition_level: 95,
    monetization_potential: 95,
    content_difficulty: 85,
    audience_engagement: 75,
    description: 'Hướng dẫn lập trình Python, JavaScript, AI cho người Việt'
  },
  {
    id: 'travel-vietnam',
    name: 'Du lịch Việt Nam',
    category: 'lifestyle',
    market_size: 80,
    competition_level: 75,
    monetization_potential: 85,
    content_difficulty: 50,
    audience_engagement: 85,
    description: 'Khám phá các địa điểm du lịch trong nước và quốc tế'
  },
  {
    id: 'personal-finance',
    name: 'Tài chính cá nhân',
    category: 'business',
    market_size: 70,
    competition_level: 60,
    monetization_potential: 90,
    content_difficulty: 70,
    audience_engagement: 70,
    description: 'Hướng dẫn tiết kiệm, đầu tư, quản lý tài chính cá nhân'
  },
  {
    id: 'gaming-vietnam',
    name: 'Gaming & Esports',
    category: 'gaming',
    market_size: 95,
    competition_level: 90,
    monetization_potential: 80,
    content_difficulty: 40,
    audience_engagement: 95,
    description: 'Stream game, review game mới, tips và tricks gaming'
  },
  {
    id: 'diy-crafts',
    name: 'DIY & Handmade',
    category: 'lifestyle',
    market_size: 60,
    competition_level: 50,
    monetization_potential: 70,
    content_difficulty: 55,
    audience_engagement: 80,
    description: 'Hướng dẫn làm đồ handmade, trang trí, sửa chữa'
  }
];

const EQUIPMENT_LIST: Equipment[] = [
  {
    id: 'sony-a7s3',
    name: 'Sony A7S III Camera',
    type: 'camera',
    quality_boost: 95,
    cost: 150,
    ease_of_use: 70,
    professional_look: 95,
    description: 'Camera chuyên nghiệp cho video 4K chất lượng cao'
  },
  {
    id: 'iphone-pro',
    name: 'iPhone 15 Pro Max',
    type: 'camera',
    quality_boost: 80,
    cost: 60,
    ease_of_use: 95,
    professional_look: 75,
    description: 'Smartphone camera tiện lợi với chất lượng tốt'
  },
  {
    id: 'rode-podmic',
    name: 'Rode PodMic USB',
    type: 'audio',
    quality_boost: 90,
    cost: 40,
    ease_of_use: 85,
    professional_look: 80,
    description: 'Mic chuyên nghiệp cho podcast và streaming'
  },
  {
    id: 'godox-lights',
    name: 'Godox LED Panel Kit',
    type: 'lighting',
    quality_boost: 85,
    cost: 50,
    ease_of_use: 80,
    professional_look: 90,
    description: 'Bộ đèn LED chuyên nghiệp với nhiều màu sắc'
  },
  {
    id: 'macbook-pro',
    name: 'MacBook Pro M3 Max',
    type: 'editing',
    quality_boost: 90,
    cost: 120,
    ease_of_use: 85,
    professional_look: 85,
    description: 'Laptop mạnh mẽ cho editing video 4K và live streaming'
  },
  {
    id: 'elgato-stream-deck',
    name: 'Elgato Stream Deck',
    type: 'streaming',
    quality_boost: 70,
    cost: 30,
    ease_of_use: 90,
    professional_look: 80,
    description: 'Bộ điều khiển chuyên nghiệp cho live streaming'
  },
  {
    id: 'basic-smartphone',
    name: 'Smartphone cơ bản + Tripod',
    type: 'camera',
    quality_boost: 60,
    cost: 20,
    ease_of_use: 95,
    professional_look: 50,
    description: 'Setup cơ bản cho người mới bắt đầu'
  }
];

const PLATFORMS: Platform[] = [
  {
    id: 'youtube',
    name: 'YouTube',
    type: 'video',
    audience_reach: 95,
    monetization_rate: 90,
    algorithm_difficulty: 85,
    content_requirements: 80,
    cost: 0,
    description: 'Platform video lớn nhất với monetization tốt'
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    type: 'video',
    audience_reach: 90,
    monetization_rate: 70,
    algorithm_difficulty: 70,
    content_requirements: 60,
    cost: 0,
    description: 'Platform ngắn hạn với audience trẻ và viral potential'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    type: 'social',
    audience_reach: 85,
    monetization_rate: 75,
    algorithm_difficulty: 80,
    content_requirements: 70,
    cost: 20,
    description: 'Mạng xã hội lớn với audience đa dạng ở Việt Nam'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    type: 'social',
    audience_reach: 80,
    monetization_rate: 80,
    algorithm_difficulty: 75,
    content_requirements: 85,
    cost: 0,
    description: 'Platform visual với engagement cao và influencer marketing'
  },
  {
    id: 'twitch',
    name: 'Twitch',
    type: 'live',
    audience_reach: 60,
    monetization_rate: 85,
    algorithm_difficulty: 60,
    content_requirements: 50,
    cost: 0,
    description: 'Platform streaming chuyên nghiệp cho gaming và IRL'
  },
  {
    id: 'personal-website',
    name: 'Website cá nhân + Blog',
    type: 'blog',
    audience_reach: 40,
    monetization_rate: 95,
    algorithm_difficulty: 30,
    content_requirements: 90,
    cost: 50,
    description: 'Tự build audience và monetize qua affiliate, course, ads'
  }
];

const ContentCreatorStudioGame: React.FC<GameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [gamePhase, setGamePhase] = useState<'briefing' | 'niche-selection' | 'equipment-selection' | 'platform-selection' | 'content-creation' | 'results'>('briefing');
  const [selectedNiche, setSelectedNiche] = useState<ContentNiche | null>(null);
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>([]);
  const [budget, setBudget] = useState(300);
  const [creationProgress, setCreationProgress] = useState(0);
  const [isCreating, setIsCreating] = useState(false);

  // Content metrics
  const [contentQuality, setContentQuality] = useState(0);
  const [audienceReach, setAudienceReach] = useState(0);
  const [monetizationPotential, setMonetizationPotential] = useState(0);

  // Reset game state when restart is called
  const resetGameState = () => {
    setGamePhase('briefing');
    setSelectedNiche(null);
    setSelectedEquipment([]);
    setSelectedPlatforms([]);
    setBudget(300);
    setCreationProgress(0);
    setIsCreating(false);
    setContentQuality(0);
    setAudienceReach(0);
    setMonetizationPotential(0);
  };

  const handleRestart = () => {
    resetGameState();
    onRestart(); // Call parent restart function
  };

  const totalCost = selectedEquipment.reduce((sum, e) => sum + e.cost, 0) + 
    selectedPlatforms.reduce((sum, p) => sum + p.cost, 0);

  const canAfford = totalCost <= budget;

  const calculateContentScore = () => {
    if (!selectedNiche || selectedEquipment.length === 0 || selectedPlatforms.length === 0) {
      return { quality: 0, reach: 0, monetization: 0 };
    }
    
    // Content quality score
    const equipmentQuality = selectedEquipment.reduce((sum, e) => sum + e.quality_boost, 0) / selectedEquipment.length;
    const easeOfUse = selectedEquipment.reduce((sum, e) => sum + e.ease_of_use, 0) / selectedEquipment.length;
    const nicheEngagement = selectedNiche.audience_engagement;
    const qualityScore = Math.round((equipmentQuality * 0.5 + easeOfUse * 0.2 + nicheEngagement * 0.3));
    
    // Audience reach
    const platformReach = selectedPlatforms.reduce((sum, p) => sum + p.audience_reach, 0) / selectedPlatforms.length;
    const nicheMarketSize = selectedNiche.market_size;
    const competitionPenalty = selectedNiche.competition_level / 100 * 20;
    const reachScore = Math.round((platformReach * 0.6 + nicheMarketSize * 0.4) - competitionPenalty);
    
    // Monetization potential
    const platformMonetization = selectedPlatforms.reduce((sum, p) => sum + p.monetization_rate, 0) / selectedPlatforms.length;
    const nicheMonetization = selectedNiche.monetization_potential;
    const professionalLook = selectedEquipment.reduce((sum, e) => sum + e.professional_look, 0) / selectedEquipment.length;
    const monetizationScore = Math.round((platformMonetization * 0.4 + nicheMonetization * 0.4 + professionalLook * 0.2));
    
    return {
      quality: Math.min(100, qualityScore),
      reach: Math.max(0, Math.min(100, reachScore)),
      monetization: Math.min(100, monetizationScore)
    };
  };

  const startContentCreation = () => {
    if (!selectedNiche || selectedEquipment.length === 0 || selectedPlatforms.length === 0 || !canAfford) {
      onComplete(false, 0);
      return;
    }

    setGamePhase('content-creation');
    setIsCreating(true);
    
    const contentResults = calculateContentScore();
    setContentQuality(contentResults.quality);
    setAudienceReach(contentResults.reach);
    setMonetizationPotential(contentResults.monetization);
    
    const totalComplexity = selectedNiche.content_difficulty + 
      selectedPlatforms.reduce((sum, p) => sum + p.content_requirements, 0);
    
    const interval = setInterval(() => {
      setCreationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsCreating(false);
          setGamePhase('results');
          return 100;
        }
        return prev + Math.max(1, (100 / totalComplexity) * 4);
      });
    }, 200);
  };

  const getOverallScore = () => {
    const contentResults = calculateContentScore();
    const costEfficiency = Math.round((budget - totalCost) / budget * 100);
    const platformDiversity = selectedPlatforms.length >= 2 ? 10 : 0;
    
    return Math.round(
      contentResults.quality * 0.3 + 
      contentResults.reach * 0.3 + 
      contentResults.monetization * 0.3 + 
      costEfficiency * 0.05 + 
      platformDiversity * 0.05
    );
  };

  useEffect(() => {
    if (timeLeft <= 0 && gamePhase !== 'results') {
      onComplete(false, 0);
    }
  }, [timeLeft, gamePhase, onComplete]);

  if (gamePhase === 'briefing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-slate-900 to-purple-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-pink-500/20">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Video className="w-16 h-16 text-pink-400" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Content Creator Studio</h1>
            <p className="text-xl text-gray-300 mb-6">
              Xây dựng kênh content thành công và kiếm tiền từ đam mê!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Camera className="w-6 h-6 mr-2 text-pink-400" />
                Quy trình phát triển
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Chọn niche content phù hợp</li>
                <li>• Đầu tư thiết bị phù hợp ngân sách</li>
                <li>• Lựa chọn platforms hiệu quả</li>
                <li>• Quản lý ngân sách 300 triệu VNĐ</li>
                <li>• Tối ưu hóa quality và monetization</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-purple-400" />
                Tiêu chí thành công
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• <span className="text-pink-400">Content Quality (30%)</span> - Chất lượng và engagement</li>
                <li>• <span className="text-blue-400">Audience Reach (30%)</span> - Tầm với và phủ sóng</li>
                <li>• <span className="text-green-400">Monetization (30%)</span> - Khả năng kiếm tiền</li>
                <li>• <span className="text-yellow-400">Hiệu quả (10%)</span> - Chi phí và đa dạng platform</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('niche-selection')}
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Bắt đầu làm content
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'niche-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-slate-900 to-purple-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn niche content</h2>
            <p className="text-gray-300">Ngân sách: {budget} triệu VNĐ</p>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {CONTENT_NICHES.map((niche) => {
              const isSelected = selectedNiche?.id === niche.id;
              
              return (
                <div
                  key={niche.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-pink-500 bg-pink-500/20'
                      : 'border-white/20 hover:border-pink-400/50'
                  }`}
                  onClick={() => setSelectedNiche(niche)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Video className="w-8 h-8 text-pink-400" />
                    <span className={`text-xs px-2 py-1 rounded ${
                      niche.category === 'education' ? 'bg-blue-500/20 text-blue-400' :
                      niche.category === 'entertainment' ? 'bg-red-500/20 text-red-400' :
                      niche.category === 'lifestyle' ? 'bg-green-500/20 text-green-400' :
                      niche.category === 'tech' ? 'bg-purple-500/20 text-purple-400' :
                      niche.category === 'gaming' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-orange-500/20 text-orange-400'
                    }`}>
                      {niche.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{niche.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{niche.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Thị trường:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{width: `${niche.market_size}%`}}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Cạnh tranh:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div 
                          className="bg-red-500 h-2 rounded-full" 
                          style={{width: `${niche.competition_level}%`}}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Monetization:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div 
                          className="bg-yellow-500 h-2 rounded-full" 
                          style={{width: `${niche.monetization_potential}%`}}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Engagement:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{width: `${niche.audience_engagement}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  {isSelected && (
                    <div className="mt-4 text-center">
                      <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm">Đã chọn</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('equipment-selection')}
              disabled={!selectedNiche}
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Tiếp tục chọn thiết bị
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'equipment-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-slate-900 to-purple-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn thiết bị (tối đa 4)</h2>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <span>Niche: {selectedNiche?.name}</span>
              <span>Đã chọn: {selectedEquipment.length}/4</span>
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {EQUIPMENT_LIST.map((equipment) => {
              const isSelected = selectedEquipment.some(e => e.id === equipment.id);
              const canSelect = selectedEquipment.length < 4 && 
                (totalCost + equipment.cost - (isSelected ? equipment.cost : 0)) <= budget;
              
              return (
                <div
                  key={equipment.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-blue-500 bg-blue-500/20'
                      : !canSelect && !isSelected
                      ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                      : 'border-white/20 hover:border-blue-400/50'
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedEquipment(prev => prev.filter(e => e.id !== equipment.id));
                    } else if (canSelect) {
                      setSelectedEquipment(prev => [...prev, equipment]);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      {equipment.type === 'camera' && <Camera className="w-6 h-6 text-blue-400" />}
                      {equipment.type === 'audio' && <Mic className="w-6 h-6 text-green-400" />}
                      {equipment.type === 'lighting' && <Eye className="w-6 h-6 text-yellow-400" />}
                      {equipment.type === 'editing' && <Video className="w-6 h-6 text-purple-400" />}
                      {equipment.type === 'streaming' && <TrendingUp className="w-6 h-6 text-red-400" />}
                    </div>
                    <span className="text-yellow-400 font-bold text-sm">{equipment.cost}M</span>
                  </div>
                  
                  <h3 className="text-sm font-bold text-white mb-2">{equipment.name}</h3>
                  <p className="text-gray-300 text-xs mb-3">{equipment.description}</p>
                  
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div>
                      <span className="text-gray-400">Quality:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div 
                          className="bg-green-500 h-1 rounded-full" 
                          style={{width: `${equipment.quality_boost}%`}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Ease:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div 
                          className="bg-blue-500 h-1 rounded-full" 
                          style={{width: `${equipment.ease_of_use}%`}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Professional:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div 
                          className="bg-purple-500 h-1 rounded-full" 
                          style={{width: `${equipment.professional_look}%`}}
                        ></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <span className={`text-xs px-1 py-0.5 rounded ${
                        equipment.type === 'camera' ? 'bg-blue-500/20 text-blue-400' :
                        equipment.type === 'audio' ? 'bg-green-500/20 text-green-400' :
                        equipment.type === 'lighting' ? 'bg-yellow-500/20 text-yellow-400' :
                        equipment.type === 'editing' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {equipment.type}
                      </span>
                    </div>
                  </div>
                  
                  {isSelected && (
                    <div className="mt-3 text-center">
                      <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">Đã chọn</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('platform-selection')}
              disabled={selectedEquipment.length === 0}
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Tiếp tục chọn platform
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'platform-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-slate-900 to-purple-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn platforms (tối đa 3)</h2>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <span>Ngân sách còn lại: {budget - selectedEquipment.reduce((sum, e) => sum + e.cost, 0)} triệu VNĐ</span>
              <span>Đã chọn: {selectedPlatforms.length}/3</span>
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {PLATFORMS.map((platform) => {
              const isSelected = selectedPlatforms.some(p => p.id === platform.id);
              const currentCostWithoutPlatform = selectedEquipment.reduce((sum, e) => sum + e.cost, 0) +
                selectedPlatforms.filter(p => p.id !== platform.id).reduce((sum, p) => sum + p.cost, 0);
              const canSelect = selectedPlatforms.length < 3 && 
                (currentCostWithoutPlatform + platform.cost) <= budget;
              
              return (
                <div
                  key={platform.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-green-500 bg-green-500/20'
                      : !canSelect && !isSelected
                      ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                      : 'border-white/20 hover:border-green-400/50'
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedPlatforms(prev => prev.filter(p => p.id !== platform.id));
                    } else if (canSelect) {
                      setSelectedPlatforms(prev => [...prev, platform]);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Users className="w-8 h-8 text-green-400" />
                    <div className="text-right">
                      <span className="text-yellow-400 font-bold">{platform.cost}M VNĐ</span>
                      <div className={`text-xs px-2 py-1 rounded mt-1 ${
                        platform.type === 'video' ? 'bg-red-500/20 text-red-400' :
                        platform.type === 'social' ? 'bg-blue-500/20 text-blue-400' :
                        platform.type === 'blog' ? 'bg-green-500/20 text-green-400' :
                        platform.type === 'podcast' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {platform.type}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{platform.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{platform.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-400">Reach:</span>
                      <div className="bg-gray-700 rounded-full h-2 mt-1">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{width: `${platform.audience_reach}%`}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Monetization:</span>
                      <div className="bg-gray-700 rounded-full h-2 mt-1">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{width: `${platform.monetization_rate}%`}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Algorithm:</span>
                      <div className="bg-gray-700 rounded-full h-2 mt-1">
                        <div 
                          className="bg-red-500 h-2 rounded-full" 
                          style={{width: `${platform.algorithm_difficulty}%`}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Content Req:</span>
                      <div className="bg-gray-700 rounded-full h-2 mt-1">
                        <div 
                          className="bg-orange-500 h-2 rounded-full" 
                          style={{width: `${platform.content_requirements}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  {isSelected && (
                    <div className="mt-4 text-center">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Đã chọn</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-white/10 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Tóm tắt creator setup</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="text-lg font-semibold text-pink-400 mb-2">Niche</h4>
                <p className="text-gray-300 text-sm">{selectedNiche?.name}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Thiết bị ({selectedEquipment.length})</h4>
                {selectedEquipment.map(equipment => (
                  <p key={equipment.id} className="text-gray-300 text-sm">{equipment.name.split(' ')[0]}</p>
                ))}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-2">Platforms ({selectedPlatforms.length})</h4>
                {selectedPlatforms.map(platform => (
                  <p key={platform.id} className="text-gray-300 text-sm">{platform.name}</p>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-white">Tổng chi phí: {totalCost} triệu VNĐ</span>
                <span className={`text-lg font-semibold ${canAfford ? 'text-green-400' : 'text-red-400'}`}>
                  {canAfford ? '✅ Trong ngân sách' : '❌ Vượt ngân sách'}
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={startContentCreation}
              disabled={!canAfford || selectedPlatforms.length === 0}
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Bắt đầu tạo content
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'content-creation') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-slate-900 to-purple-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-pink-500/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Đang tạo content...</h2>
            <p className="text-gray-300">Recording, editing và publishing</p>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <div className="flex justify-between text-white mb-2">
                <span>Tiến độ tạo content</span>
                <span>{Math.round(creationProgress)}%</span>
              </div>
              <div className="bg-gray-700 rounded-full h-6">
                <div 
                  className="bg-gradient-to-r from-pink-500 to-purple-500 h-6 rounded-full transition-all duration-300" 
                  style={{width: `${creationProgress}%`}}
                ></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-pink-400">Content Quality</span>
                  <span className="text-white font-bold">{contentQuality}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-pink-500 h-3 rounded-full transition-all duration-300" 
                    style={{width: `${contentQuality}%`}}
                  ></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-400">Audience Reach</span>
                  <span className="text-white font-bold">{audienceReach}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-blue-500 h-3 rounded-full transition-all duration-300" 
                    style={{width: `${audienceReach}%`}}
                  ></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-400">Monetization</span>
                  <span className="text-white font-bold">{monetizationPotential}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-green-500 h-3 rounded-full transition-all duration-300" 
                    style={{width: `${monetizationPotential}%`}}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center space-x-4 text-gray-300">
              <Video className="w-6 h-6 text-pink-400 animate-pulse" />
              <span>Đang upload lên {selectedPlatforms.length} platforms...</span>
              <Heart className="w-6 h-6 text-red-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'results') {
    const contentResults = calculateContentScore();
    const contentScore = getOverallScore();

    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-slate-900 to-purple-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-pink-500/20">
          <div className="text-center mb-8">
            <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">Kênh creator thành công!</h2>
            <p className="text-2xl text-gray-300 mb-2">{selectedNiche?.name} Content</p>
            <div className="text-6xl font-bold text-white mb-4">{contentScore} điểm</div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Thành tích creator</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-pink-400">Content quality:</span>
                  <span className="text-white font-bold">{contentResults.quality}/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-400">Audience reach:</span>
                  <span className="text-white font-bold">{contentResults.reach}/100</span>
                </div>
                <div className="flex justify-between border-t border-white/20 pt-2">
                  <span className="text-green-400">Monetization potential:</span>
                  <span className="text-white font-bold">{contentResults.monetization}/100</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Đánh giá</h3>
              <div className="space-y-2 text-gray-300">
                {contentScore >= 90 && <p>🏆 Creator huyền thoại! Có thể trở thành top influencer Việt Nam.</p>}
                {contentScore >= 80 && contentScore < 90 && <p>🌟 Creator xuất sắc! Kênh có tiềm năng viral và kiếm tiền tốt.</p>}
                {contentScore >= 70 && contentScore < 80 && <p>✅ Creator tốt! Cần cải thiện content và engagement.</p>}
                {contentScore >= 60 && contentScore < 70 && <p>⚠️ Creator mới! Cần nâng cấp thiết bị và chiến lược.</p>}
                {contentScore < 60 && <p>❌ Cần cải thiện nhiều để cạnh tranh trong thị trường content.</p>}
                
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-sm">
                    <strong>Lưu ý:</strong> Thành công content creator cần kiên trì, 
                    consistency và hiểu rõ audience của mình.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-x-4">
            <button
              onClick={handleRestart}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Tạo kênh mới
            </button>
            <button
              onClick={() => onComplete(true, contentScore)}
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Hoàn thành
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default ContentCreatorStudioGame;
