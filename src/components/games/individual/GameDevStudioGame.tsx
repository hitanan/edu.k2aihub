'use client';

import React, { useState, useEffect } from 'react';
import { Gamepad2, Users, Code, Paintbrush, Clock, Star, Zap, Target, TrendingUp, Cpu } from 'lucide-react';

interface GameProps {
  onComplete: (_: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface GameGenre {
  id: string;
  name: string;
  description: string;
  difficulty: number;
  marketDemand: number;
  developmentTime: number;
  cost: number;
  revenueMultiplier: number;
}

interface Technology {
  id: string;
  name: string;
  type: string;
  performance: number;
  learningCurve: number;
  cost: number;
  platforms: string[];
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  skill: number;
  experience: number;
  salary: number;
  specialties: string[];
}

const GAME_GENRES: GameGenre[] = [
  {
    id: 'mobile-puzzle',
    name: 'Mobile Puzzle Game',
    description: 'Game giải đố trên điện thoại',
    difficulty: 3,
    marketDemand: 8,
    developmentTime: 4,
    cost: 20,
    revenueMultiplier: 1.5
  },
  {
    id: 'mmorpg',
    name: 'MMORPG',
    description: 'Game nhập vai trực tuyến nhiều người chơi',
    difficulty: 10,
    marketDemand: 9,
    developmentTime: 12,
    cost: 100,
    revenueMultiplier: 5.0
  },
  {
    id: 'indie-platformer',
    name: 'Indie Platformer',
    description: 'Game platform độc lập',
    difficulty: 5,
    marketDemand: 6,
    developmentTime: 6,
    cost: 30,
    revenueMultiplier: 2.0
  },
  {
    id: 'vr-experience',
    name: 'VR Experience',
    description: 'Trải nghiệm thực tế ảo',
    difficulty: 8,
    marketDemand: 7,
    developmentTime: 8,
    cost: 60,
    revenueMultiplier: 3.0
  },
  {
    id: 'educational-game',
    name: 'Educational Game',
    description: 'Game giáo dục cho trẻ em',
    difficulty: 4,
    marketDemand: 7,
    developmentTime: 5,
    cost: 25,
    revenueMultiplier: 1.8
  },
  {
    id: 'battle-royale',
    name: 'Battle Royale',
    description: 'Game bắn súng sinh tồn',
    difficulty: 9,
    marketDemand: 9,
    developmentTime: 10,
    cost: 80,
    revenueMultiplier: 4.0
  }
];

const TECHNOLOGIES: Technology[] = [
  {
    id: 'unity',
    name: 'Unity Engine',
    type: 'Game Engine',
    performance: 8,
    learningCurve: 6,
    cost: 15,
    platforms: ['PC', 'Mobile', 'Console', 'VR']
  },
  {
    id: 'unreal',
    name: 'Unreal Engine',
    type: 'Game Engine',
    performance: 10,
    learningCurve: 8,
    cost: 25,
    platforms: ['PC', 'Console', 'VR']
  },
  {
    id: 'godot',
    name: 'Godot Engine',
    type: 'Game Engine',
    performance: 7,
    learningCurve: 4,
    cost: 0,
    platforms: ['PC', 'Mobile']
  },
  {
    id: 'custom-engine',
    name: 'Custom Engine',
    type: 'Game Engine',
    performance: 9,
    learningCurve: 10,
    cost: 50,
    platforms: ['PC', 'Console']
  },
  {
    id: 'photon-networking',
    name: 'Photon Networking',
    type: 'Multiplayer',
    performance: 9,
    learningCurve: 7,
    cost: 20,
    platforms: ['All']
  },
  {
    id: 'ai-middleware',
    name: 'AI Middleware',
    type: 'AI System',
    performance: 8,
    learningCurve: 6,
    cost: 18,
    platforms: ['PC', 'Console']
  }
];

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'senior-programmer',
    name: 'Nguyễn Văn Coder',
    role: 'Senior Programmer',
    skill: 9,
    experience: 8,
    salary: 35,
    specialties: ['Engine Development', 'Optimization', 'Architecture']
  },
  {
    id: 'game-designer',
    name: 'Trần Thị Design',
    role: 'Game Designer',
    skill: 8,
    experience: 6,
    salary: 25,
    specialties: ['Game Mechanics', 'Level Design', 'Balancing']
  },
  {
    id: 'artist',
    name: 'Lê Văn Art',
    role: '3D Artist',
    skill: 8,
    experience: 5,
    salary: 22,
    specialties: ['Character Modeling', 'Environment Art', 'Animation']
  },
  {
    id: 'ui-designer',
    name: 'Phạm Thị UI',
    role: 'UI/UX Designer',
    skill: 7,
    experience: 4,
    salary: 18,
    specialties: ['Interface Design', 'User Experience', 'Mobile UI']
  },
  {
    id: 'sound-designer',
    name: 'Hoàng Văn Sound',
    role: 'Sound Designer',
    skill: 7,
    experience: 5,
    salary: 20,
    specialties: ['Music Composition', 'Sound Effects', 'Audio Implementation']
  },
  {
    id: 'qa-tester',
    name: 'Vũ Thị Test',
    role: 'QA Tester',
    skill: 6,
    experience: 3,
    salary: 12,
    specialties: ['Bug Testing', 'Balance Testing', 'Platform Testing']
  },
  {
    id: 'junior-programmer',
    name: 'Đỗ Văn Junior',
    role: 'Junior Programmer',
    skill: 5,
    experience: 2,
    salary: 15,
    specialties: ['Scripting', 'Tools Development', 'Bug Fixing']
  }
];

const GameDevStudioGame: React.FC<GameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [gamePhase, setGamePhase] = useState<'briefing' | 'genre' | 'team' | 'technology' | 'development' | 'results'>('briefing');
  const [budget] = useState(250); // 250 million VND budget
  const [selectedGenre, setSelectedGenre] = useState<GameGenre | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<TeamMember[]>([]);
  const [selectedTech, setSelectedTech] = useState<Technology[]>([]);
  const [spentBudget, setSpentBudget] = useState(0);
  const [gameQuality, setGameQuality] = useState(0);
  const [marketSuccess, setMarketSuccess] = useState(0);
  const [technicalExcellence, setTechnicalExcellence] = useState(0);
  const [studioScore, setStudioScore] = useState(0);
  const [isDeveloping, setIsDeveloping] = useState(false);
  const [developmentProgress, setDevelopmentProgress] = useState(0);

  // Reset game state when restart is called
  const resetGameState = () => {
    setGamePhase('briefing');
    setSelectedGenre(null);
    setSelectedTeam([]);
    setSelectedTech([]);
    setSpentBudget(0);
    setGameQuality(0);
    setMarketSuccess(0);
    setTechnicalExcellence(0);
    setStudioScore(0);
    setIsDeveloping(false);
    setDevelopmentProgress(0);
  };

  const handleRestart = () => {
    resetGameState();
    onRestart(); // Call parent restart function
  };

  useEffect(() => {
    if (timeLeft <= 0 && gamePhase !== 'results') {
      calculateResults();
    }
  }, [timeLeft, gamePhase]);

  useEffect(() => {
    if (isDeveloping) {
      const interval = setInterval(() => {
        setDevelopmentProgress(prev => {
          if (prev >= 100) {
            setIsDeveloping(false);
            setGamePhase('results');
            return 100;
          }
          return prev + 3;
        });
      }, 300);
      return () => clearInterval(interval);
    }
  }, [isDeveloping]);

  const calculateResults = () => {
    if (!selectedGenre || selectedTeam.length === 0 || selectedTech.length === 0) {
      setStudioScore(0);
      setGamePhase('results');
      onComplete(false, 0);
      return;
    }

    // Calculate game quality based on team skills and genre difficulty
    const teamSkillAverage = selectedTeam.reduce((sum, member) => sum + member.skill, 0) / selectedTeam.length;
    const genreDifficultyPenalty = selectedGenre.difficulty * 5;
    const quality = Math.max(0, Math.min(100, (teamSkillAverage * 10) - genreDifficultyPenalty + 30));

    // Calculate technical excellence based on technology selection
    const techPerformanceAverage = selectedTech.reduce((sum, tech) => sum + tech.performance, 0) / selectedTech.length;
    const techExcellence = Math.min(100, techPerformanceAverage * 10);

    // Calculate market success based on genre demand and game quality
    const marketDemandScore = selectedGenre.marketDemand * 10;
    const qualityBonus = quality * 0.5;
    const market = Math.min(100, (marketDemandScore * 0.6 + qualityBonus * 0.4));

    // Calculate overall studio score
    const budgetEfficiency = Math.min(100, ((budget - spentBudget) / budget) * 100);
    const overall = (quality * 0.4 + techExcellence * 0.3 + market * 0.2 + budgetEfficiency * 0.1);

    setGameQuality(Math.round(quality));
    setTechnicalExcellence(Math.round(techExcellence));
    setMarketSuccess(Math.round(market));
    setStudioScore(Math.round(overall));
    
    setGamePhase('results');
    onComplete(true, overall);
  };

  const handleGenreSelect = (genre: GameGenre) => {
    setSelectedGenre(genre);
    setSpentBudget(genre.cost);
    setGamePhase('team');
  };

  const handleTeamSelect = (member: TeamMember) => {
    const newCost = spentBudget + member.salary;
    if (newCost <= budget && !selectedTeam.find(m => m.id === member.id) && selectedTeam.length < 6) {
      setSelectedTeam([...selectedTeam, member]);
      setSpentBudget(newCost);
    }
  };

  const removeTeamMember = (memberId: string) => {
    const member = selectedTeam.find(m => m.id === memberId);
    if (member) {
      setSelectedTeam(selectedTeam.filter(m => m.id !== memberId));
      setSpentBudget(spentBudget - member.salary);
    }
  };

  const handleTechSelect = (tech: Technology) => {
    const newCost = spentBudget + tech.cost;
    if (newCost <= budget && !selectedTech.find(t => t.id === tech.id) && selectedTech.length < 4) {
      setSelectedTech([...selectedTech, tech]);
      setSpentBudget(newCost);
    }
  };

  const removeTech = (techId: string) => {
    const tech = selectedTech.find(t => t.id === techId);
    if (tech) {
      setSelectedTech(selectedTech.filter(t => t.id !== techId));
      setSpentBudget(spentBudget - tech.cost);
    }
  };

  if (gamePhase === 'briefing') {
    return (
      <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-8 rounded-lg text-white max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Gamepad2 className="w-16 h-16 mx-auto mb-4 text-purple-400" />
          <h2 className="text-3xl font-bold mb-4">Game Development Studio Challenge</h2>
          <p className="text-xl text-purple-200">Xây dựng studio game và phát triển tựa game thành công</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Target className="w-6 h-6 mr-2 text-green-400" />
              Mục tiêu studio
            </h3>
            <ul className="space-y-2 text-purple-100">
              <li>• Chọn thể loại game phù hợp thị trường</li>
              <li>• Tuyển dụng team phát triển tài năng</li>
              <li>• Đầu tư công nghệ và công cụ hiện đại</li>
              <li>• Tạo ra game chất lượng cao</li>
              <li>• Đạt thành công thương mại</li>
            </ul>
          </div>

          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Zap className="w-6 h-6 mr-2 text-yellow-400" />
              Thách thức phát triển
            </h3>
            <ul className="space-y-2 text-purple-100">
              <li>• Cạnh tranh thị trường game khốc liệt</li>
              <li>• Quản lý ngân sách hiệu quả</li>
              <li>• Cân bằng chất lượng và thời gian</li>
              <li>• Học hỏi công nghệ mới liên tục</li>
              <li>• Hiểu nhu cầu người chơi</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/10 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Code className="w-6 h-6 mr-2 text-blue-400" />
            Quy trình phát triển game
          </h3>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="bg-blue-600/50 p-4 rounded">
              <div className="text-2xl font-bold text-blue-200">1</div>
              <div className="text-sm text-blue-300">Chọn thể loại</div>
            </div>
            <div className="bg-purple-600/50 p-4 rounded">
              <div className="text-2xl font-bold text-purple-200">2</div>
              <div className="text-sm text-purple-300">Xây dựng team</div>
            </div>
            <div className="bg-green-600/50 p-4 rounded">
              <div className="text-2xl font-bold text-green-200">3</div>
              <div className="text-sm text-green-300">Chọn công nghệ</div>
            </div>
            <div className="bg-yellow-600/50 p-4 rounded">
              <div className="text-2xl font-bold text-yellow-200">4</div>
              <div className="text-sm text-yellow-300">Phát triển game</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 p-4 rounded-lg mb-6">
            <div className="text-2xl font-bold text-green-300">250 triệu VNĐ</div>
            <div className="text-sm text-green-200">Ngân sách studio game</div>
          </div>
          <button
            onClick={() => setGamePhase('genre')}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 rounded-lg font-bold text-lg transition-all duration-200"
          >
            Khởi động Game Studio
          </button>
        </div>
      </div>
    );
  }

  if (gamePhase === 'genre') {
    return (
      <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-6 rounded-lg text-white max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Chọn thể loại game</h2>
          <div className="flex items-center space-x-4">
            <div className="bg-green-600/50 px-4 py-2 rounded">
              <span className="text-sm">Ngân sách: {budget - spentBudget}/{budget} triệu VNĐ</span>
            </div>
            <div className="bg-blue-600/50 px-4 py-2 rounded flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span className="text-sm">{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {GAME_GENRES.map((genre) => {
            const canAfford = genre.cost <= (budget - spentBudget + (selectedGenre?.cost || 0));
            
            return (
              <div
                key={genre.id}
                className={`p-6 rounded-lg border transition-all duration-200 cursor-pointer ${
                  selectedGenre?.id === genre.id
                    ? 'border-purple-400 bg-purple-500/20'
                    : canAfford
                    ? 'border-blue-400 bg-blue-500/10 hover:bg-blue-500/20'
                    : 'border-gray-500 bg-gray-500/10 opacity-50'
                }`}
                onClick={() => canAfford && handleGenreSelect(genre)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold">{genre.name}</h3>
                  <div className="text-right">
                    <div className="text-sm text-gray-300">Chi phí</div>
                    <div className="font-bold text-purple-300">{genre.cost}M VNĐ</div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-300 mb-4">{genre.description}</p>
                
                <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                  <div className="text-center bg-white/10 p-2 rounded">
                    <div className="text-red-300">Độ khó</div>
                    <div className="font-bold">{genre.difficulty}/10</div>
                  </div>
                  <div className="text-center bg-white/10 p-2 rounded">
                    <div className="text-green-300">Nhu cầu</div>
                    <div className="font-bold">{genre.marketDemand}/10</div>
                  </div>
                  <div className="text-center bg-white/10 p-2 rounded">
                    <div className="text-yellow-300">Thời gian</div>
                    <div className="font-bold">{genre.developmentTime} tháng</div>
                  </div>
                  <div className="text-center bg-white/10 p-2 rounded">
                    <div className="text-blue-300">Doanh thu</div>
                    <div className="font-bold">{genre.revenueMultiplier}x</div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    disabled={!canAfford}
                    className={`px-4 py-2 rounded font-bold transition-all duration-200 ${
                      canAfford
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                        : 'bg-gray-600 cursor-not-allowed'
                    }`}
                  >
                    {selectedGenre?.id === genre.id ? 'Đã chọn' : 'Chọn thể loại'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (gamePhase === 'team') {
    return (
      <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-6 rounded-lg text-white max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Tuyển dụng team phát triển (Tối đa 6 người)</h2>
          <div className="flex items-center space-x-4">
            <div className="bg-green-600/50 px-4 py-2 rounded">
              <span className="text-sm">Ngân sách: {budget - spentBudget}/{budget} triệu VNĐ</span>
            </div>
            <div className="bg-blue-600/50 px-4 py-2 rounded flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span className="text-sm">{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        {selectedGenre && (
          <div className="bg-white/10 p-4 rounded-lg mb-6">
            <h3 className="font-bold mb-2">Thể loại đã chọn:</h3>
            <div className="flex items-center justify-between">
              <span>{selectedGenre.name}</span>
              <span className="text-purple-300">Độ khó: {selectedGenre.difficulty}/10</span>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Nhân sự có sẵn:</h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {TEAM_MEMBERS.map((member) => {
                const isSelected = selectedTeam.find(m => m.id === member.id);
                const canAfford = spentBudget + member.salary <= budget;
                const canSelect = selectedTeam.length < 6;
                
                return (
                  <div
                    key={member.id}
                    className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'border-green-400 bg-green-500/20'
                        : canAfford && canSelect
                        ? 'border-purple-400 bg-purple-500/10 hover:bg-purple-500/20'
                        : 'border-gray-500 bg-gray-500/10 opacity-50'
                    }`}
                    onClick={() => {
                      if (isSelected) {
                        removeTeamMember(member.id);
                      } else if (canAfford && canSelect) {
                        handleTeamSelect(member);
                      }
                    }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{member.name}</h4>
                        <p className="text-sm text-purple-300">{member.role}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-green-300 font-bold">{member.salary}M/tháng</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-center">
                        <div className="text-blue-300">Skill</div>
                        <div className="font-bold">{member.skill}/10</div>
                      </div>
                      <div className="text-center">
                        <div className="text-yellow-300">Kinh nghiệm</div>
                        <div className="font-bold">{member.experience} năm</div>
                      </div>
                    </div>
                    
                    <div className="text-xs">
                      <div className="text-gray-300 mb-1">Chuyên môn:</div>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty, index) => (
                          <span key={index} className="bg-indigo-600/50 px-1 py-0.5 rounded text-xs">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Team đã chọn ({selectedTeam.length}/6):</h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {selectedTeam.map((member) => (
                <div key={member.id} className="bg-green-500/20 p-3 rounded border border-green-400">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">{member.name}</h4>
                      <p className="text-sm text-green-300">{member.role}</p>
                    </div>
                    <button
                      onClick={() => removeTeamMember(member.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Skill: {member.skill}/10</span>
                    <span className="text-green-300">{member.salary}M/tháng</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/20 pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Chi phí team/tháng:</span>
                <span className="text-xl font-bold text-green-300">
                  {selectedTeam.reduce((sum, member) => sum + member.salary, 0)}M VNĐ
                </span>
              </div>
              
              <button
                onClick={() => setGamePhase('technology')}
                disabled={selectedTeam.length === 0}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 px-6 py-3 rounded-lg font-bold transition-all duration-200"
              >
                Chọn công nghệ
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'technology') {
    return (
      <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-6 rounded-lg text-white max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Chọn công nghệ phát triển (Tối đa 4)</h2>
          <div className="flex items-center space-x-4">
            <div className="bg-green-600/50 px-4 py-2 rounded">
              <span className="text-sm">Ngân sách: {budget - spentBudget}/{budget} triệu VNĐ</span>
            </div>
            <div className="bg-blue-600/50 px-4 py-2 rounded flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span className="text-sm">{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Game: {selectedGenre?.name}</h3>
            <div className="text-sm text-gray-300">Độ khó: {selectedGenre?.difficulty}/10</div>
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Team: {selectedTeam.length} thành viên</h3>
            <div className="text-sm text-gray-300">
              Skill trung bình: {selectedTeam.length > 0 ? (selectedTeam.reduce((sum, m) => sum + m.skill, 0) / selectedTeam.length).toFixed(1) : 0}/10
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Công nghệ có sẵn:</h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {TECHNOLOGIES.map((tech) => {
                const isSelected = selectedTech.find(t => t.id === tech.id);
                const canAfford = spentBudget + tech.cost <= budget;
                const canSelect = selectedTech.length < 4;
                
                return (
                  <div
                    key={tech.id}
                    className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'border-green-400 bg-green-500/20'
                        : canAfford && canSelect
                        ? 'border-blue-400 bg-blue-500/10 hover:bg-blue-500/20'
                        : 'border-gray-500 bg-gray-500/10 opacity-50'
                    }`}
                    onClick={() => {
                      if (isSelected) {
                        removeTech(tech.id);
                      } else if (canAfford && canSelect) {
                        handleTechSelect(tech);
                      }
                    }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{tech.name}</h4>
                        <p className="text-sm text-blue-300">{tech.type}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-green-300 font-bold">{tech.cost}M VNĐ</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-center">
                        <div className="text-green-300">Performance</div>
                        <div className="font-bold">{tech.performance}/10</div>
                      </div>
                      <div className="text-center">
                        <div className="text-red-300">Học tập</div>
                        <div className="font-bold">{tech.learningCurve}/10</div>
                      </div>
                    </div>
                    
                    <div className="text-xs">
                      <div className="text-gray-300 mb-1">Platforms:</div>
                      <div className="flex flex-wrap gap-1">
                        {tech.platforms.map((platform, index) => (
                          <span key={index} className="bg-blue-600/50 px-1 py-0.5 rounded text-xs">
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Công nghệ đã chọn ({selectedTech.length}/4):</h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {selectedTech.map((tech) => (
                <div key={tech.id} className="bg-blue-500/20 p-3 rounded border border-blue-400">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">{tech.name}</h4>
                      <p className="text-sm text-blue-300">{tech.type}</p>
                    </div>
                    <button
                      onClick={() => removeTech(tech.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Performance: {tech.performance}/10</span>
                    <span className="text-green-300">{tech.cost}M VNĐ</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/20 pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Tổng chi phí:</span>
                <span className="text-xl font-bold text-green-300">{spentBudget}/{budget} triệu VNĐ</span>
              </div>
              
              <button
                onClick={() => {
                  setGamePhase('development');
                  setIsDeveloping(true);
                  setDevelopmentProgress(0);
                }}
                disabled={selectedTech.length === 0}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 px-6 py-3 rounded-lg font-bold transition-all duration-200"
              >
                Bắt đầu phát triển
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'development') {
    return (
      <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-8 rounded-lg text-white max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Cpu className="w-16 h-16 mx-auto mb-4 text-purple-400 animate-pulse" />
          <h2 className="text-3xl font-bold mb-4">Đang phát triển game...</h2>
          <p className="text-xl text-purple-200">Team đang làm việc chăm chỉ để tạo ra tựa game tuyệt vời</p>
        </div>

        <div className="bg-white/10 p-6 rounded-lg mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-bold">Development Progress:</span>
            <span className="text-xl font-bold text-green-300">{developmentProgress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-6 mb-4">
            <div 
              className="bg-gradient-to-r from-purple-600 to-blue-600 h-6 rounded-full transition-all duration-300"
              style={{ width: `${developmentProgress}%` }}
            ></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-sm text-gray-300">Game</div>
              <div className="font-bold">{selectedGenre?.name}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-300">Team Size</div>
              <div className="font-bold">{selectedTeam.length} thành viên</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-300">Tech Stack</div>
              <div className="font-bold">{selectedTech.length} công nghệ</div>
            </div>
          </div>
        </div>

        {!isDeveloping && (
          <div className="text-center">
            <button
              onClick={calculateResults}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-8 py-3 rounded-lg font-bold text-lg transition-all duration-200"
            >
              Hoàn thành và ra mắt game
            </button>
          </div>
        )}
      </div>
    );
  }

  if (gamePhase === 'results') {
    const getPerformanceLevel = (score: number) => {
      if (score >= 90) return { level: 'Blockbuster Hit!', color: 'text-green-400', icon: '🏆' };
      if (score >= 80) return { level: 'Thành công lớn', color: 'text-blue-400', icon: '⭐' };
      if (score >= 70) return { level: 'Game tốt', color: 'text-yellow-400', icon: '👍' };
      if (score >= 60) return { level: 'Trung bình', color: 'text-orange-400', icon: '📈' };
      return { level: 'Cần cải thiện', color: 'text-red-400', icon: '🔧' };
    };

    const overallPerformance = getPerformanceLevel(studioScore);

    return (
      <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-8 rounded-lg text-white max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{overallPerformance.icon}</div>
          <h2 className="text-3xl font-bold mb-4">Kết quả Game Studio</h2>
          <p className={`text-2xl font-bold ${overallPerformance.color}`}>
            {overallPerformance.level} - {studioScore}/100 điểm
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Chỉ số game:</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <Paintbrush className="w-5 h-5 mr-2 text-blue-400" />
                  Chất lượng game
                </span>
                <span className="font-bold text-blue-300">{gameQuality}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <Cpu className="w-5 h-5 mr-2 text-green-400" />
                  Kỹ thuật
                </span>
                <span className="font-bold text-green-300">{technicalExcellence}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-yellow-400" />
                  Thành công thị trường
                </span>
                <span className="font-bold text-yellow-300">{marketSuccess}%</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Thông tin studio:</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Game:</span>
                <span className="font-bold">{selectedGenre?.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Team size:</span>
                <span className="font-bold">{selectedTeam.length} người</span>
              </div>
              <div className="flex justify-between">
                <span>Công nghệ:</span>
                <span className="font-bold">{selectedTech.length} stack</span>
              </div>
              <div className="flex justify-between">
                <span>Ngân sách sử dụng:</span>
                <span className="font-bold">{spentBudget}/{budget} triệu VNĐ</span>
              </div>
              <div className="flex justify-between">
                <span>ROI dự kiến:</span>
                <span className="font-bold">{selectedGenre ? (selectedGenre.revenueMultiplier * (studioScore / 100)).toFixed(1) : 0}x</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Star className="w-6 h-6 mr-2 text-yellow-400" />
            Đánh giá game critic
          </h3>
          <div className="text-gray-300 leading-relaxed">
            {studioScore >= 90 && (
              <p>
                🎉 <strong>Game of the Year candidate!</strong> Studio của bạn đã tạo ra một tựa game masterpiece với 
                chất lượng đỉnh cao, công nghệ tiên tiến và sức hút thị trường mạnh mẽ. Đây là khởi đầu tuyệt vời cho 
                một studio game huyền thoại!
              </p>
            )}
            {studioScore >= 80 && studioScore < 90 && (
              <p>
                ⭐ <strong>Hit game!</strong> Game của bạn có chất lượng cao và được người chơi đón nhận tích cực. 
                Studio đã thể hiện năng lực phát triển mạnh mẽ và có tiềm năng tạo ra những tựa game lớn hơn.
              </p>
            )}
            {studioScore >= 70 && studioScore < 80 && (
              <p>
                👍 <strong>Solid game!</strong> Game có chất lượng tốt và đáp ứng kỳ vọng người chơi. 
                Studio có nền tảng vững chắc để phát triển thêm và cải thiện cho dự án tiếp theo.
              </p>
            )}
            {studioScore >= 60 && studioScore < 70 && (
              <p>
                📈 <strong>Average game.</strong> Game đạt mức chấp nhận được nhưng cần cải thiện thêm về 
                chất lượng, kỹ thuật hoặc chiến lược thị trường.
              </p>
            )}
            {studioScore < 60 && (
              <p>
                🔧 <strong>Needs improvement.</strong> Studio cần đầu tư thêm vào team, công nghệ và 
                quy trình phát triển để tạo ra game chất lượng cao hơn.
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={handleRestart}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-lg font-bold transition-all duration-200"
          >
            Tạo studio mới
          </button>
          <button
            onClick={() => onComplete(true, studioScore)}
            className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 px-6 py-3 rounded-lg font-bold transition-all duration-200"
          >
            Hoàn thành
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default GameDevStudioGame;
