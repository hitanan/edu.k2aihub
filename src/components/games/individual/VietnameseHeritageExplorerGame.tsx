'use client';

import React, { useState, useEffect } from 'react';
import { Trophy, MapPin, Clock, Star, Compass, Camera, Users, Heart } from 'lucide-react';

interface GameProps {
  onComplete: (_: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface HeritageDestination {
  id: string;
  name: string;
  type: 'tangible' | 'intangible' | 'natural' | 'cultural';
  region: 'north' | 'central' | 'south';
  historical_value: number;
  cultural_significance: number;
  preservation_need: number;
  tourist_potential: number;
  accessibility: number;
  cost: number;
  description: string;
  unesco_status?: 'world_heritage' | 'tentative' | 'memory_of_world';
}

interface ExplorationActivity {
  id: string;
  name: string;
  type: 'documentation' | 'education' | 'preservation' | 'promotion' | 'research';
  heritage_impact: number;
  community_benefit: number;
  cost: number;
  duration: number;
  requirements: string[];
  description: string;
}

interface ExplorationTeam {
  id: string;
  name: string;
  specialty: 'archaeologist' | 'folklorist' | 'photographer' | 'educator' | 'conservator' | 'local_guide';
  expertise_level: number;
  cultural_knowledge: number;
  language_skills: number;
  cost: number;
  description: string;
}

const HERITAGE_DESTINATIONS: HeritageDestination[] = [
  {
    id: 'hoi-an',
    name: 'Phố cổ Hội An',
    type: 'tangible',
    region: 'central',
    historical_value: 95,
    cultural_significance: 90,
    preservation_need: 85,
    tourist_potential: 95,
    accessibility: 90,
    cost: 60,
    description: 'Khu phố cổ được UNESCO công nhận là Di sản văn hóa thế giới',
    unesco_status: 'world_heritage',
  },
  {
    id: 'ca-tru',
    name: 'Ca trù Nam Định',
    type: 'intangible',
    region: 'north',
    historical_value: 85,
    cultural_significance: 95,
    preservation_need: 95,
    tourist_potential: 60,
    accessibility: 70,
    cost: 40,
    description: 'Nghệ thuật ca trù truyền thống có nguy cơ mai một',
    unesco_status: 'memory_of_world',
  },
  {
    id: 'ha-long-bay',
    name: 'Vịnh Hạ Long',
    type: 'natural',
    region: 'north',
    historical_value: 80,
    cultural_significance: 85,
    preservation_need: 80,
    tourist_potential: 100,
    accessibility: 95,
    cost: 80,
    description: 'Kỳ quan thiên nhiên thế giới với huyền thoại và địa chất độc đáo',
  },
  {
    id: 'don-ca-tai-tu',
    name: 'Đờn ca tài tử Nam Bộ',
    type: 'intangible',
    region: 'south',
    historical_value: 80,
    cultural_significance: 90,
    preservation_need: 85,
    tourist_potential: 70,
    accessibility: 75,
    cost: 35,
    description: 'Nghệ thuật âm nhạc dân gian miền Nam phong phú và sống động',
  },
  {
    id: 'cham-culture',
    name: 'Văn hóa Chăm Phan Rang',
    type: 'cultural',
    region: 'central',
    historical_value: 90,
    cultural_significance: 95,
    preservation_need: 90,
    tourist_potential: 65,
    accessibility: 70,
    cost: 50,
    description: 'Di sản văn hóa cộng đồng Chăm với kiến trúc và tín ngương độc đáo',
  },
  {
    id: 'dong-ho-paintings',
    name: 'Tranh Đông Hồ Bắc Ninh',
    type: 'intangible',
    region: 'north',
    historical_value: 85,
    cultural_significance: 90,
    preservation_need: 95,
    tourist_potential: 60,
    accessibility: 80,
    cost: 30,
    description: 'Nghệ thuật tranh dân gian truyền thống làng Đông Hồ',
  },
];

const EXPLORATION_ACTIVITIES: ExplorationActivity[] = [
  {
    id: 'oral-history-recording',
    name: 'Thu thập lịch sử truyền miệng',
    type: 'documentation',
    heritage_impact: 90,
    community_benefit: 85,
    cost: 40,
    duration: 6,
    requirements: ['Recording equipment', 'Local language skills', 'Community trust'],
    description: 'Ghi lại những câu chuyện, truyền thuyết từ người cao tuổi',
  },
  {
    id: 'artisan-workshop',
    name: 'Workshop nghệ nhân truyền thống',
    type: 'education',
    heritage_impact: 85,
    community_benefit: 90,
    cost: 60,
    duration: 8,
    requirements: ['Skilled artisans', 'Workshop space', 'Materials'],
    description: 'Dạy nghề truyền thống cho thế hệ trẻ',
  },
  {
    id: 'digital-archive',
    name: 'Số hóa di sản văn hóa',
    type: 'preservation',
    heritage_impact: 95,
    community_benefit: 70,
    cost: 80,
    duration: 10,
    requirements: ['Digital equipment', 'Technical expertise', 'Storage systems'],
    description: 'Tạo kho lưu trữ số cho tài liệu, hiện vật văn hóa',
  },
  {
    id: 'cultural-festival',
    name: 'Tổ chức lễ hội văn hóa',
    type: 'promotion',
    heritage_impact: 75,
    community_benefit: 95,
    cost: 100,
    duration: 12,
    requirements: ['Event planning', 'Community participation', 'Marketing'],
    description: 'Quảng bá di sản thông qua sự kiện cộng đồng',
  },
  {
    id: 'heritage-mapping',
    name: 'Lập bản đồ di sản',
    type: 'research',
    heritage_impact: 80,
    community_benefit: 75,
    cost: 50,
    duration: 8,
    requirements: ['GPS equipment', 'Research skills', 'Local knowledge'],
    description: 'Khảo sát và lập bản đồ các di tích, địa điểm văn hóa',
  },
  {
    id: 'youth-education',
    name: 'Chương trình giáo dục trẻ em',
    type: 'education',
    heritage_impact: 80,
    community_benefit: 90,
    cost: 45,
    duration: 6,
    requirements: ['Educational materials', 'School cooperation', 'Trained teachers'],
    description: 'Giáo dục ý thức bảo vệ di sản cho thế hệ tương lai',
  },
];

const EXPLORATION_TEAM: ExplorationTeam[] = [
  {
    id: 'senior-archaeologist',
    name: 'Nhà khảo cổ học',
    specialty: 'archaeologist',
    expertise_level: 95,
    cultural_knowledge: 90,
    language_skills: 80,
    cost: 50,
    description: 'Chuyên gia khảo cổ có kinh nghiệm nghiên cứu di sản Việt Nam',
  },
  {
    id: 'folklorist',
    name: 'Nhà dân tộc học',
    specialty: 'folklorist',
    expertise_level: 90,
    cultural_knowledge: 95,
    language_skills: 85,
    cost: 45,
    description: 'Chuyên gia về văn hóa dân gian và tập tục truyền thống',
  },
  {
    id: 'heritage-photographer',
    name: 'Nhiếp ảnh gia di sản',
    specialty: 'photographer',
    expertise_level: 85,
    cultural_knowledge: 75,
    language_skills: 70,
    cost: 35,
    description: 'Chuyên chụp ảnh di sản văn hóa và nghệ thuật truyền thống',
  },
  {
    id: 'cultural-educator',
    name: 'Nhà giáo dục văn hóa',
    specialty: 'educator',
    expertise_level: 80,
    cultural_knowledge: 85,
    language_skills: 90,
    cost: 40,
    description: 'Chuyên gia giáo dục và truyền thông văn hóa',
  },
  {
    id: 'conservation-expert',
    name: 'Chuyên gia bảo tồn',
    specialty: 'conservator',
    expertise_level: 90,
    cultural_knowledge: 80,
    language_skills: 75,
    cost: 55,
    description: 'Chuyên gia bảo tồn và phục hồi di sản văn hóa',
  },
  {
    id: 'local-guide',
    name: 'Hướng dẫn viên địa phương',
    specialty: 'local_guide',
    expertise_level: 70,
    cultural_knowledge: 95,
    language_skills: 95,
    cost: 25,
    description: 'Người dân địa phương am hiểu sâu sắc về văn hóa bản địa',
  },
];

const VietnameseHeritageExplorerGame: React.FC<GameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [gamePhase, setGamePhase] = useState<
    'briefing' | 'destination-selection' | 'team-selection' | 'activity-selection' | 'exploration' | 'results'
  >('briefing');
  const [selectedDestinations, setSelectedDestinations] = useState<HeritageDestination[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<ExplorationTeam[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<ExplorationActivity[]>([]);
  const budget = 400;
  const [explorationProgress, setExplorationProgress] = useState(0);

  // Heritage metrics
  const [heritagePreservation, setHeritagePreservation] = useState(0);
  const [communityImpact, setCommunityImpact] = useState(0);
  const [culturalAwareness, setCulturalAwareness] = useState(0);

  const totalCost =
    selectedDestinations.reduce((sum, d) => sum + d.cost, 0) +
    selectedTeam.reduce((sum, t) => sum + t.cost, 0) +
    selectedActivities.reduce((sum, a) => sum + a.cost, 0);

  const canAfford = totalCost <= budget;

  const calculateHeritageScore = () => {
    if (selectedDestinations.length === 0 || selectedTeam.length === 0 || selectedActivities.length === 0) {
      return { preservation: 0, community: 0, awareness: 0 };
    }

    // Heritage preservation score
    const destinationValue =
      selectedDestinations.reduce((sum, d) => sum + (d.historical_value + d.cultural_significance) / 2, 0) /
      selectedDestinations.length;
    const teamExpertise = selectedTeam.reduce((sum, t) => sum + t.expertise_level, 0) / selectedTeam.length;
    const activityImpact =
      selectedActivities.reduce((sum, a) => sum + a.heritage_impact, 0) / selectedActivities.length;
    const preservationScore = Math.round(destinationValue * 0.4 + teamExpertise * 0.3 + activityImpact * 0.3);

    // Community impact
    const communityBenefit =
      selectedActivities.reduce((sum, a) => sum + a.community_benefit, 0) / selectedActivities.length;
    const teamCulturalKnowledge = selectedTeam.reduce((sum, t) => sum + t.cultural_knowledge, 0) / selectedTeam.length;
    const communityScore = Math.round(communityBenefit * 0.6 + teamCulturalKnowledge * 0.4);

    // Cultural awareness
    const destinationSignificance =
      selectedDestinations.reduce((sum, d) => sum + d.cultural_significance, 0) / selectedDestinations.length;
    const teamLanguageSkills = selectedTeam.reduce((sum, t) => sum + t.language_skills, 0) / selectedTeam.length;
    const activityEducation =
      selectedActivities.filter((a) => a.type === 'education' || a.type === 'promotion').length * 20;
    const awarenessScore = Math.round(
      destinationSignificance * 0.5 + teamLanguageSkills * 0.3 + Math.min(activityEducation, 40) * 0.2,
    );

    return {
      preservation: Math.min(100, preservationScore),
      community: Math.min(100, communityScore),
      awareness: Math.min(100, awarenessScore),
    };
  };

  const startExploration = () => {
    if (
      selectedDestinations.length === 0 ||
      selectedTeam.length === 0 ||
      selectedActivities.length === 0 ||
      !canAfford
    ) {
      onComplete(false, 0);
      return;
    }

    setGamePhase('exploration');

    const heritageResults = calculateHeritageScore();
    setHeritagePreservation(heritageResults.preservation);
    setCommunityImpact(heritageResults.community);
    setCulturalAwareness(heritageResults.awareness);

    const totalDuration = selectedActivities.reduce((sum, a) => sum + a.duration, 0);

    const interval = setInterval(() => {
      setExplorationProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setGamePhase('results');
          return 100;
        }
        return prev + Math.max(1, (100 / totalDuration) * 3);
      });
    }, 300);
  };

  const getOverallScore = () => {
    const heritageResults = calculateHeritageScore();
    const costEfficiency = Math.round(((budget - totalCost) / budget) * 100);
    const diversityBonus = selectedDestinations.length >= 2 ? 10 : 0;
    const comprehensiveBonus = selectedActivities.length >= 3 ? 10 : 0;

    return Math.round(
      heritageResults.preservation * 0.35 +
        heritageResults.community * 0.35 +
        heritageResults.awareness * 0.2 +
        costEfficiency * 0.05 +
        (diversityBonus + comprehensiveBonus) * 0.05,
    );
  };

  useEffect(() => {
    if (timeLeft <= 0 && gamePhase !== 'results') {
      onComplete(false, 0);
    }
  }, [timeLeft, gamePhase, onComplete]);

  if (gamePhase === 'briefing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-900 via-slate-900 to-red-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-amber-500/20">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <MapPin className="w-16 h-16 text-amber-400" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Vietnamese Heritage Explorer</h1>
            <p className="text-xl text-gray-300 mb-6">Khám phá và bảo tồn di sản văn hóa Việt Nam!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Compass className="w-6 h-6 mr-2 text-amber-400" />
                Nhiệm vụ khám phá
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Chọn điểm đến di sản văn hóa</li>
                <li>• Tập hợp đội ngũ chuyên gia</li>
                <li>• Thực hiện hoạt động bảo tồn</li>
                <li>• Quản lý ngân sách 400 triệu VNĐ</li>
                <li>• Nâng cao nhận thức cộng đồng</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Star className="w-6 h-6 mr-2 text-red-400" />
                Tiêu chí đánh giá
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>
                  • <span className="text-amber-400">Bảo tồn di sản (35%)</span> - Giá trị và chất lượng bảo tồn
                </li>
                <li>
                  • <span className="text-blue-400">Tác động cộng đồng (35%)</span> - Lợi ích cho người dân
                </li>
                <li>
                  • <span className="text-green-400">Nhận thức văn hóa (20%)</span> - Giáo dục và quảng bá
                </li>
                <li>
                  • <span className="text-yellow-400">Hiệu quả (10%)</span> - Chi phí và đa dạng
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('destination-selection')}
              className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Bắt đầu khám phá
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'destination-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-900 via-slate-900 to-red-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn điểm đến di sản (tối đa 3)</h2>
            <p className="text-gray-300">Ngân sách: {budget} triệu VNĐ</p>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {HERITAGE_DESTINATIONS.map((destination) => {
              const isSelected = selectedDestinations.some((d) => d.id === destination.id);
              const canSelect = selectedDestinations.length < 3;

              return (
                <div
                  key={destination.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-amber-500 bg-amber-500/20'
                      : !canSelect && !isSelected
                        ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                        : 'border-white/20 hover:border-amber-400/50'
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedDestinations((prev) => prev.filter((d) => d.id !== destination.id));
                    } else if (canSelect) {
                      setSelectedDestinations((prev) => [...prev, destination]);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <MapPin className="w-8 h-8 text-amber-400" />
                    <div className="text-right">
                      <span className="text-yellow-400 font-bold text-sm">{destination.cost}M</span>
                      {destination.unesco_status && (
                        <div
                          className={`text-xs px-2 py-1 rounded mt-1 ${
                            destination.unesco_status === 'world_heritage'
                              ? 'bg-gold-500/20 text-yellow-400'
                              : destination.unesco_status === 'tentative'
                                ? 'bg-blue-500/20 text-blue-400'
                                : 'bg-green-500/20 text-green-400'
                          }`}
                        >
                          UNESCO
                        </div>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{destination.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{destination.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Giá trị lịch sử:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div
                          className="bg-amber-500 h-2 rounded-full"
                          style={{ width: `${destination.historical_value}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Ý nghĩa văn hóa:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div
                          className="bg-red-500 h-2 rounded-full"
                          style={{ width: `${destination.cultural_significance}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Cần bảo tồn:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div
                          className="bg-orange-500 h-2 rounded-full"
                          style={{ width: `${destination.preservation_need}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Tiềm năng du lịch:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${destination.tourist_potential}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        destination.type === 'tangible'
                          ? 'bg-blue-500/20 text-blue-400'
                          : destination.type === 'intangible'
                            ? 'bg-purple-500/20 text-purple-400'
                            : destination.type === 'natural'
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-orange-500/20 text-orange-400'
                      }`}
                    >
                      {destination.type}
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded ml-2 ${
                        destination.region === 'north'
                          ? 'bg-red-500/20 text-red-400'
                          : destination.region === 'central'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : 'bg-blue-500/20 text-blue-400'
                      }`}
                    >
                      {destination.region}
                    </span>
                  </div>

                  {isSelected && (
                    <div className="mt-4 text-center">
                      <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm">Đã chọn</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('team-selection')}
              disabled={selectedDestinations.length === 0}
              className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Tiếp tục chọn đội ngũ
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'team-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-900 via-slate-900 to-red-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Tập hợp đội ngũ chuyên gia (tối đa 4)</h2>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <span>Điểm đến: {selectedDestinations.length}</span>
              <span>Đã chọn: {selectedTeam.length}/4</span>
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {EXPLORATION_TEAM.map((member) => {
              const isSelected = selectedTeam.some((t) => t.id === member.id);
              const canSelect = selectedTeam.length < 4;

              return (
                <div
                  key={member.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-blue-500 bg-blue-500/20'
                      : !canSelect && !isSelected
                        ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                        : 'border-white/20 hover:border-blue-400/50'
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedTeam((prev) => prev.filter((t) => t.id !== member.id));
                    } else if (canSelect) {
                      setSelectedTeam((prev) => [...prev, member]);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Users className="w-8 h-8 text-blue-400" />
                    <span className="text-yellow-400 font-bold text-sm">{member.cost}M</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{member.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Chuyên môn:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${member.expertise_level}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Kiến thức văn hóa:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div
                          className="bg-amber-500 h-2 rounded-full"
                          style={{ width: `${member.cultural_knowledge}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Ngôn ngữ:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${member.language_skills}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        member.specialty === 'archaeologist'
                          ? 'bg-brown-500/20 text-yellow-600'
                          : member.specialty === 'folklorist'
                            ? 'bg-purple-500/20 text-purple-400'
                            : member.specialty === 'photographer'
                              ? 'bg-pink-500/20 text-pink-400'
                              : member.specialty === 'educator'
                                ? 'bg-green-500/20 text-green-400'
                                : member.specialty === 'conservator'
                                  ? 'bg-blue-500/20 text-blue-400'
                                  : 'bg-orange-500/20 text-orange-400'
                      }`}
                    >
                      {member.specialty}
                    </span>
                  </div>

                  {isSelected && (
                    <div className="mt-4 text-center">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Đã chọn</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('activity-selection')}
              disabled={selectedTeam.length === 0}
              className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Tiếp tục chọn hoạt động
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'activity-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-900 via-slate-900 to-red-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn hoạt động bảo tồn (tối đa 4)</h2>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <span>
                Ngân sách còn lại:{' '}
                {budget -
                  selectedDestinations.reduce((sum, d) => sum + d.cost, 0) -
                  selectedTeam.reduce((sum, t) => sum + t.cost, 0)}{' '}
                triệu VNĐ
              </span>
              <span>Đã chọn: {selectedActivities.length}/4</span>
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {EXPLORATION_ACTIVITIES.map((activity) => {
              const isSelected = selectedActivities.some((a) => a.id === activity.id);
              const currentCostWithoutActivity =
                selectedDestinations.reduce((sum, d) => sum + d.cost, 0) +
                selectedTeam.reduce((sum, t) => sum + t.cost, 0) +
                selectedActivities.filter((a) => a.id !== activity.id).reduce((sum, a) => sum + a.cost, 0);
              const canSelect = selectedActivities.length < 4 && currentCostWithoutActivity + activity.cost <= budget;

              return (
                <div
                  key={activity.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-green-500 bg-green-500/20'
                      : !canSelect && !isSelected
                        ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                        : 'border-white/20 hover:border-green-400/50'
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedActivities((prev) => prev.filter((a) => a.id !== activity.id));
                    } else if (canSelect) {
                      setSelectedActivities((prev) => [...prev, activity]);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {activity.type === 'documentation' && <Camera className="w-6 h-6 text-blue-400" />}
                      {activity.type === 'education' && <Users className="w-6 h-6 text-green-400" />}
                      {activity.type === 'preservation' && <Star className="w-6 h-6 text-yellow-400" />}
                      {activity.type === 'promotion' && <Heart className="w-6 h-6 text-red-400" />}
                      {activity.type === 'research' && <Compass className="w-6 h-6 text-purple-400" />}
                    </div>
                    <div className="text-right">
                      <span className="text-yellow-400 font-bold text-sm">{activity.cost}M</span>
                      <div className="text-xs text-gray-400">{activity.duration} tháng</div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{activity.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{activity.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Tác động di sản:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div
                          className="bg-amber-500 h-2 rounded-full"
                          style={{ width: `${activity.heritage_impact}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Lợi ích cộng đồng:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${activity.community_benefit}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        activity.type === 'documentation'
                          ? 'bg-blue-500/20 text-blue-400'
                          : activity.type === 'education'
                            ? 'bg-green-500/20 text-green-400'
                            : activity.type === 'preservation'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : activity.type === 'promotion'
                                ? 'bg-red-500/20 text-red-400'
                                : 'bg-purple-500/20 text-purple-400'
                      }`}
                    >
                      {activity.type}
                    </span>
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
            <h3 className="text-xl font-bold text-white mb-4">Tóm tắt dự án khám phá</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="text-lg font-semibold text-amber-400 mb-2">Điểm đến ({selectedDestinations.length})</h4>
                {selectedDestinations.map((dest) => (
                  <p key={dest.id} className="text-gray-300 text-sm">
                    {dest.name}
                  </p>
                ))}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Đội ngũ ({selectedTeam.length})</h4>
                {selectedTeam.map((member) => (
                  <p key={member.id} className="text-gray-300 text-sm">
                    {member.name}
                  </p>
                ))}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-2">Hoạt động ({selectedActivities.length})</h4>
                {selectedActivities.map((activity) => (
                  <p key={activity.id} className="text-gray-300 text-sm">
                    {activity.name}
                  </p>
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
              onClick={startExploration}
              disabled={!canAfford || selectedActivities.length === 0}
              className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Bắt đầu khám phá di sản
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'exploration') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-900 via-slate-900 to-red-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-amber-500/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Đang khám phá di sản...</h2>
            <p className="text-gray-300">Thực hiện hoạt động bảo tồn và nghiên cứu</p>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <div className="flex justify-between text-white mb-2">
                <span>Tiến độ khám phá</span>
                <span>{Math.round(explorationProgress)}%</span>
              </div>
              <div className="bg-gray-700 rounded-full h-6">
                <div
                  className="bg-gradient-to-r from-amber-500 to-red-500 h-6 rounded-full transition-all duration-300"
                  style={{ width: `${explorationProgress}%` }}
                ></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-amber-400">Bảo tồn di sản</span>
                  <span className="text-white font-bold">{heritagePreservation}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-amber-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${heritagePreservation}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-400">Tác động cộng đồng</span>
                  <span className="text-white font-bold">{communityImpact}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${communityImpact}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-400">Nhận thức văn hóa</span>
                  <span className="text-white font-bold">{culturalAwareness}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${culturalAwareness}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center space-x-4 text-gray-300">
              <MapPin className="w-6 h-6 text-amber-400 animate-pulse" />
              <span>Đang thực hiện {selectedActivities.length} hoạt động bảo tồn...</span>
              <Compass className="w-6 h-6 text-red-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'results') {
    const heritageResults = calculateHeritageScore();
    const heritageScore = getOverallScore();

    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-900 via-slate-900 to-red-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-amber-500/20">
          <div className="text-center mb-8">
            <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">Khám phá di sản thành công!</h2>
            <p className="text-2xl text-gray-300 mb-2">Dự án bảo tồn di sản Việt Nam</p>
            <div className="text-6xl font-bold text-white mb-4">{heritageScore} điểm</div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Kết quả bảo tồn</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-amber-400">Bảo tồn di sản:</span>
                  <span className="text-white font-bold">{heritageResults.preservation}/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-400">Tác động cộng đồng:</span>
                  <span className="text-white font-bold">{heritageResults.community}/100</span>
                </div>
                <div className="flex justify-between border-t border-white/20 pt-2">
                  <span className="text-green-400">Nhận thức văn hóa:</span>
                  <span className="text-white font-bold">{heritageResults.awareness}/100</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Đánh giá tổng thể</h3>
              <div className="space-y-2 text-gray-300">
                {heritageScore >= 90 && <p>🏆 Nhà bảo tồn di sản xuất sắc! Đóng góp to lớn cho văn hóa Việt Nam.</p>}
                {heritageScore >= 80 && heritageScore < 90 && (
                  <p>🌟 Dự án bảo tồn rất thành công! Có tác động tích cực lâu dài.</p>
                )}
                {heritageScore >= 70 && heritageScore < 80 && (
                  <p>✅ Bảo tồn hiệu quả! Cần mở rộng phạm vi và hoạt động.</p>
                )}
                {heritageScore >= 60 && heritageScore < 70 && (
                  <p>⚠️ Có tiến bộ! Cần cải thiện phương pháp và nguồn lực.</p>
                )}
                {heritageScore < 60 && <p>❌ Cần nỗ lực nhiều hơn để bảo vệ di sản văn hóa quý báu.</p>}

                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-sm">
                    <strong>Lưu ý:</strong> Bảo tồn di sản văn hóa là trách nhiệm của toàn xã hội, cần sự tham gia của
                    cộng đồng và các thế hệ tương lai.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-x-4">
            <button
              onClick={onRestart}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Khám phá mới
            </button>
            <button
              onClick={() => onComplete(true, heritageScore)}
              className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
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

export default VietnameseHeritageExplorerGame;
