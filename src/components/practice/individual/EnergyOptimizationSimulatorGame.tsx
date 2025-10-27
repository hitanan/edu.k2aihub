import React, { useState, useEffect, useCallback } from 'react';
import { 
  Zap, 
  Battery, 
  Sun, 
  Moon, 
  Activity, 
  Target, 
  Award,
  Play,
  RotateCcw,
  Heart,
  Brain,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';

interface EnergyOptimizationSimulatorGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface EnergyActivity {
  id: string;
  name: string;
  type: 'work' | 'exercise' | 'rest' | 'social' | 'creative';
  energyCost: number;
  energyGain: number;
  duration: number; // in hours
  prerequisites: string[];
  benefits: string[];
  icon: React.ReactNode;
  timeOfDay: 'morning' | 'afternoon' | 'evening' | 'any';
}

interface PersonalProfile {
  chronotype: 'early-bird' | 'night-owl' | 'intermediate';
  stressLevel: number; // 1-10
  fitnessLevel: number; // 1-10
  workType: 'creative' | 'analytical' | 'physical' | 'social';
  sleepHours: number;
}

interface TimeSlot {
  hour: number;
  activity: EnergyActivity | null;
  energyLevel: number;
  stress: number;
}

const ACTIVITIES: EnergyActivity[] = [
  {
    id: 'deep-work',
    name: 'Công Việc Tập Trung',
    type: 'work',
    energyCost: 25,
    energyGain: 0,
    duration: 2,
    prerequisites: ['high-energy'],
    benefits: ['productivity', 'achievement'],
    icon: <Brain className="w-4 h-4" />,
    timeOfDay: 'morning'
  },
  {
    id: 'email-tasks',
    name: 'Email & Công Việc Nhẹ',
    type: 'work',
    energyCost: 10,
    energyGain: 0,
    duration: 1,
    prerequisites: [],
    benefits: ['organization'],
    icon: <Activity className="w-4 h-4" />,
    timeOfDay: 'any'
  },
  {
    id: 'high-intensity-workout',
    name: 'Tập Luyện Cường Độ Cao',
    type: 'exercise',
    energyCost: 30,
    energyGain: 40,
    duration: 1,
    prerequisites: ['high-energy'],
    benefits: ['fitness', 'endorphins', 'long-term-energy'],
    icon: <Zap className="w-4 h-4" />,
    timeOfDay: 'morning'
  },
  {
    id: 'light-exercise',
    name: 'Tập Luyện Nhẹ',
    type: 'exercise',
    energyCost: 15,
    energyGain: 20,
    duration: 1,
    prerequisites: [],
    benefits: ['mood', 'circulation'],
    icon: <Activity className="w-4 h-4" />,
    timeOfDay: 'any'
  },
  {
    id: 'power-nap',
    name: 'Ngủ Trưa Ngắn',
    type: 'rest',
    energyCost: 0,
    energyGain: 35,
    duration: 0.5,
    prerequisites: [],
    benefits: ['energy-restoration', 'alertness'],
    icon: <Moon className="w-4 h-4" />,
    timeOfDay: 'afternoon'
  },
  {
    id: 'meditation',
    name: 'Thiền & Mindfulness',
    type: 'rest',
    energyCost: 5,
    energyGain: 25,
    duration: 0.5,
    prerequisites: [],
    benefits: ['stress-reduction', 'clarity'],
    icon: <Heart className="w-4 h-4" />,
    timeOfDay: 'any'
  },
  {
    id: 'social-meeting',
    name: 'Gặp Gỡ Bạn Bè',
    type: 'social',
    energyCost: 20,
    energyGain: 30,
    duration: 2,
    prerequisites: [],
    benefits: ['connection', 'joy', 'support'],
    icon: <Heart className="w-4 h-4" />,
    timeOfDay: 'evening'
  },
  {
    id: 'creative-work',
    name: 'Công Việc Sáng Tạo',
    type: 'creative',
    energyCost: 20,
    energyGain: 15,
    duration: 2,
    prerequisites: ['medium-energy'],
    benefits: ['fulfillment', 'innovation'],
    icon: <Sun className="w-4 h-4" />,
    timeOfDay: 'afternoon'
  },
  {
    id: 'nature-walk',
    name: 'Đi Bộ Trong Tự Nhiên',
    type: 'exercise',
    energyCost: 10,
    energyGain: 30,
    duration: 1,
    prerequisites: [],
    benefits: ['vitamin-d', 'fresh-air', 'mental-clarity'],
    icon: <Sun className="w-4 h-4" />,
    timeOfDay: 'any'
  },
  {
    id: 'reading',
    name: 'Đọc Sách',
    type: 'rest',
    energyCost: 5,
    energyGain: 15,
    duration: 1,
    prerequisites: [],
    benefits: ['learning', 'relaxation'],
    icon: <Brain className="w-4 h-4" />,
    timeOfDay: 'evening'
  }
];

const PROFILES: PersonalProfile[] = [
  {
    chronotype: 'early-bird',
    stressLevel: 6,
    fitnessLevel: 7,
    workType: 'analytical',
    sleepHours: 8
  },
  {
    chronotype: 'night-owl',
    stressLevel: 7,
    fitnessLevel: 5,
    workType: 'creative',
    sleepHours: 7
  },
  {
    chronotype: 'intermediate',
    stressLevel: 5,
    fitnessLevel: 6,
    workType: 'social',
    sleepHours: 7.5
  }
];

const EnergyOptimizationSimulatorGame: React.FC<EnergyOptimizationSimulatorGameProps> = ({
  onComplete,
  timeLeft,
  onRestart
}) => {
  const [profile, setProfile] = useState<PersonalProfile>(PROFILES[0]);
  const [currentDay, setCurrentDay] = useState(1);
  const [schedule, setSchedule] = useState<TimeSlot[]>([]);
  const [gamePhase, setGamePhase] = useState<'setup' | 'planning' | 'simulation' | 'results'>('setup');
  const [score, setScore] = useState(0);
  const [totalEnergyGained, setTotalEnergyGained] = useState(0);
  const [totalProductivity, setTotalProductivity] = useState(0);
  const [wellnessScore, setWellnessScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedHour, setSelectedHour] = useState<number | null>(null);
  const [warnings, setWarnings] = useState<string[]>([]);

  const initializeSchedule = useCallback(() => {
    const newSchedule: TimeSlot[] = [];
    let baseEnergy = 100;
    
    // Adjust base energy based on chronotype and sleep
    if (profile.chronotype === 'early-bird') {
      baseEnergy += 20;
    } else if (profile.chronotype === 'night-owl') {
      baseEnergy -= 10;
    }
    
    baseEnergy += (profile.sleepHours - 7) * 10;
    
    for (let hour = 6; hour < 24; hour++) {
      // Natural energy curve based on chronotype
      let energyLevel = baseEnergy;
      
      if (profile.chronotype === 'early-bird') {
        if (hour < 10) energyLevel += 20;
        else if (hour > 20) energyLevel -= 30;
        else if (hour > 16) energyLevel -= 10;
      } else if (profile.chronotype === 'night-owl') {
        if (hour < 10) energyLevel -= 30;
        else if (hour > 18) energyLevel += 20;
        else if (hour > 14) energyLevel += 10;
      } else {
        // intermediate
        if (hour < 8 || hour > 22) energyLevel -= 20;
        else if (hour >= 10 && hour <= 16) energyLevel += 10;
      }
      
      // Apply stress factor
      energyLevel -= profile.stressLevel * 3;
      
      newSchedule.push({
        hour,
        activity: null,
        energyLevel: Math.max(0, Math.min(100, energyLevel)),
        stress: profile.stressLevel
      });
    }
    
    setSchedule(newSchedule);
  }, [profile]);

  const calculateOptimizationScore = useCallback(() => {
    let totalScore = 0;
    let productivity = 0;
    let energyGained = 0;
    let wellness = 0;
    const newWarnings: string[] = [];
    
    // Calculate productivity and energy balance
    schedule.forEach((slot, index) => {
      if (slot.activity) {
        const activity = slot.activity;
        
        // Check prerequisites
        if (activity.prerequisites.includes('high-energy') && slot.energyLevel < 70) {
          newWarnings.push(`⚠️ ${activity.name} tại ${slot.hour}:00 - Năng lượng không đủ`);
        }
        
        // Calculate productivity based on energy alignment
        if (activity.type === 'work') {
          let prodMultiplier = slot.energyLevel / 100;
          
          // Time of day bonus/penalty
          if (activity.timeOfDay !== 'any') {
            const isOptimalTime = (
              (activity.timeOfDay === 'morning' && slot.hour < 12) ||
              (activity.timeOfDay === 'afternoon' && slot.hour >= 12 && slot.hour < 18) ||
              (activity.timeOfDay === 'evening' && slot.hour >= 18)
            );
            
            prodMultiplier *= isOptimalTime ? 1.5 : 0.7;
          }
          
          productivity += activity.energyCost * prodMultiplier;
        }
        
        // Calculate energy dynamics
        energyGained += activity.energyGain;
        
        // Wellness calculation
        if (activity.benefits.includes('stress-reduction')) {
          wellness += 15;
        }
        if (activity.benefits.includes('fitness')) {
          wellness += 10;
        }
        if (activity.benefits.includes('connection')) {
          wellness += 12;
        }
        
        // Update energy level for next slot
        if (index < schedule.length - 1) {
          schedule[index + 1].energyLevel = Math.max(0, 
            Math.min(100, schedule[index + 1].energyLevel + activity.energyGain - activity.energyCost)
          );
        }
      }
    });
    
    // Balance check
    const hasWork = schedule.some(s => s.activity?.type === 'work');
    const hasExercise = schedule.some(s => s.activity?.type === 'exercise');
    const hasRest = schedule.some(s => s.activity?.type === 'rest');
    const hasSocial = schedule.some(s => s.activity?.type === 'social');
    
    if (!hasWork) newWarnings.push('⚠️ Thiếu hoạt động công việc');
    if (!hasExercise) newWarnings.push('⚠️ Thiếu hoạt động thể chất');
    if (!hasRest) newWarnings.push('⚠️ Thiếu thời gian nghỉ ngơi');
    if (!hasSocial) newWarnings.push('⚠️ Thiếu hoạt động xã hội');
    
    // Calculate final score
    totalScore = (productivity * 0.4) + (wellness * 0.3) + (energyGained * 0.3);
    
    // Penalties for imbalance
    const balanceScore = [hasWork, hasExercise, hasRest, hasSocial].filter(Boolean).length;
    totalScore *= (balanceScore / 4);
    
    setTotalProductivity(Math.round(productivity));
    setTotalEnergyGained(Math.round(energyGained));
    setWellnessScore(Math.round(wellness));
    setScore(Math.round(totalScore));
    setWarnings(newWarnings);
  }, [schedule]);

  const addActivityToSchedule = (hour: number, activity: EnergyActivity) => {
    const newSchedule = [...schedule];
    const slotIndex = newSchedule.findIndex(slot => slot.hour === hour);
    
    if (slotIndex !== -1) {
      newSchedule[slotIndex].activity = activity;
      setSchedule(newSchedule);
    }
  };

  const removeActivityFromSchedule = (hour: number) => {
    const newSchedule = [...schedule];
    const slotIndex = newSchedule.findIndex(slot => slot.hour === hour);
    
    if (slotIndex !== -1) {
      newSchedule[slotIndex].activity = null;
      setSchedule(newSchedule);
    }
  };

  const startGame = () => {
    setIsPlaying(true);
    setCurrentDay(1);
    setGamePhase('setup');
    initializeSchedule();
  };

  const nextPhase = () => {
    switch (gamePhase) {
      case 'setup':
        setGamePhase('planning');
        break;
      case 'planning':
        setGamePhase('simulation');
        calculateOptimizationScore();
        break;
      case 'simulation':
        if (currentDay < 3) {
          setCurrentDay(prev => prev + 1);
          setGamePhase('planning');
          initializeSchedule();
        } else {
          setGamePhase('results');
        }
        break;
      case 'results':
        onComplete(score >= 60, score);
        break;
    }
  };

  const restartGame = () => {
    setProfile(PROFILES[0]);
    setCurrentDay(1);
    setSchedule([]);
    setGamePhase('setup');
    setScore(0);
    setTotalEnergyGained(0);
    setTotalProductivity(0);
    setWellnessScore(0);
    setIsPlaying(false);
    setSelectedHour(null);
    setWarnings([]);
    onRestart();
  };

  const getHourDisplay = (hour: number) => {
    return hour < 12 ? `${hour}:00 AM` : `${hour === 12 ? 12 : hour - 12}:00 PM`;
  };

  const getEnergyColor = (level: number) => {
    if (level >= 80) return 'bg-green-500';
    if (level >= 60) return 'bg-yellow-500';
    if (level >= 40) return 'bg-orange-500';
    return 'bg-red-500';
  };

  useEffect(() => {
    if (timeLeft <= 0 && isPlaying) {
      onComplete(false, score);
    }
  }, [timeLeft, isPlaying, score, onComplete]);

  useEffect(() => {
    if (gamePhase === 'setup') {
      initializeSchedule();
    }
  }, [gamePhase, initializeSchedule]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-900 via-orange-900 to-red-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-500/20 p-3 rounded-xl">
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">⚡ Tối Ưu Năng Lượng Cá Nhân</h1>
                <p className="text-orange-200">Quản lý và tối ưu hóa năng lượng hàng ngày</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-2xl font-bold text-yellow-400">{Math.round(score)}</div>
                <div className="text-sm text-orange-200">Điểm số</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-400">{Math.ceil(timeLeft / 60)}</div>
                <div className="text-sm text-orange-200">Phút</div>
              </div>
            </div>
          </div>
        </div>

        {!isPlaying ? (
          /* Start Screen */
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center">
            <div className="bg-yellow-500/20 p-6 rounded-2xl w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <Battery className="w-12 h-12 text-yellow-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Chào Mừng Đến Trung Tâm Tối Ưu Năng Lượng!</h2>
            <p className="text-orange-200 text-lg mb-8 max-w-2xl mx-auto">
              Học cách quản lý năng lượng cá nhân hiệu quả! Xây dựng lịch trình hoàn hảo 
              để tối đa hóa năng suất và sức khỏe tinh thần.
            </p>
            <button
              onClick={startGame}
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center gap-2 mx-auto"
            >
              <Play className="w-6 h-6" />
              Bắt Đầu Tối Ưu
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-orange-200">Ngày {currentDay}/3</span>
                <span className="text-yellow-300 capitalize">{gamePhase}</span>
              </div>
              <div className="w-full bg-orange-900/50 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-yellow-500 to-orange-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((currentDay - 1) / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            {gamePhase === 'setup' && (
              /* Profile Setup Phase */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-6">👤 Thiết Lập Hồ Sơ Cá Nhân</h2>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {PROFILES.map((prof, index) => (
                    <button
                      key={index}
                      onClick={() => setProfile(prof)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                        profile.chronotype === prof.chronotype
                          ? 'border-yellow-400 bg-yellow-500/20'
                          : 'border-gray-600 bg-gray-800/30 hover:border-gray-500'
                      }`}
                    >
                      <h3 className="font-semibold text-white mb-2">
                        {prof.chronotype === 'early-bird' && '🌅 Người Dậy Sớm'}
                        {prof.chronotype === 'night-owl' && '🦉 Người Thức Khuya'}
                        {prof.chronotype === 'intermediate' && '⏰ Người Bình Thường'}
                      </h3>
                      <div className="space-y-1 text-sm text-gray-300">
                        <div>Stress: {prof.stressLevel}/10</div>
                        <div>Thể lực: {prof.fitnessLevel}/10</div>
                        <div>Ngủ: {prof.sleepHours}h/đêm</div>
                        <div>Công việc: {prof.workType}</div>
                      </div>
                    </button>
                  ))}
                </div>
                
                <div className="bg-yellow-900/30 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-yellow-200 mb-2">📊 Hồ Sơ Được Chọn</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <strong className="text-white">Nhịp sinh học:</strong>
                      <p className="text-gray-300 text-sm">
                        {profile.chronotype === 'early-bird' && 'Năng lượng cao vào buổi sáng, giảm dần về chiều'}
                        {profile.chronotype === 'night-owl' && 'Năng lượng tăng dần trong ngày, đỉnh vào tối'}
                        {profile.chronotype === 'intermediate' && 'Năng lượng ổn định trong ngày'}
                      </p>
                    </div>
                    <div>
                      <strong className="text-white">Đặc điểm:</strong>
                      <ul className="text-gray-300 text-sm">
                        <li>• Mức stress: {profile.stressLevel}/10</li>
                        <li>• Thể lực: {profile.fitnessLevel}/10</li>
                        <li>• Giấc ngủ: {profile.sleepHours} giờ/đêm</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={nextPhase}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Tiến Hành Lập Lịch
                </button>
              </div>
            )}

            {gamePhase === 'planning' && (
              /* Schedule Planning Phase */
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                  <h2 className="text-xl font-bold text-white mb-4">📅 Lên Lịch Ngày {currentDay}</h2>
                  
                  {/* Daily Schedule */}
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-yellow-200 mb-3">⏰ Lịch Trình Hàng Ngày</h3>
                      <div className="space-y-2 max-h-80 overflow-y-auto">
                        {schedule.map((slot) => (
                          <button
                            key={slot.hour}
                            onClick={() => setSelectedHour(selectedHour === slot.hour ? null : slot.hour)}
                            className={`w-full p-3 rounded-lg border text-left transition-all duration-200 ${
                              selectedHour === slot.hour
                                ? 'border-yellow-400 bg-yellow-500/20'
                                : 'border-gray-600 bg-gray-800/30 hover:border-gray-500'
                            }`}
                          >
                            <div className="flex justify-between items-center">
                              <span className="font-semibold text-white">
                                {getHourDisplay(slot.hour)}
                              </span>
                              <div className="flex items-center gap-2">
                                <Battery className="w-4 h-4 text-gray-400" />
                                <div className="w-16 bg-gray-700 rounded-full h-2">
                                  <div
                                    className={`${getEnergyColor(slot.energyLevel)} h-2 rounded-full transition-all duration-300`}
                                    style={{ width: `${slot.energyLevel}%` }}
                                  ></div>
                                </div>
                                <span className="text-xs text-gray-400">{slot.energyLevel}</span>
                              </div>
                            </div>
                            {slot.activity && (
                              <div className="mt-2 flex items-center gap-2 text-sm text-yellow-300">
                                {slot.activity.icon}
                                {slot.activity.name}
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-yellow-200 mb-3">🎯 Hoạt Động Có Sẵn</h3>
                      {selectedHour && (
                        <div className="mb-4 p-3 bg-blue-900/30 rounded-lg">
                          <div className="text-sm text-blue-200">Đang chọn: {getHourDisplay(selectedHour)}</div>
                          <div className="flex items-center gap-2 mt-1">
                            <Battery className="w-4 h-4 text-gray-400" />
                            <span className="text-white">
                              Năng lượng: {schedule.find(s => s.hour === selectedHour)?.energyLevel}/100
                            </span>
                          </div>
                        </div>
                      )}
                      
                      <div className="space-y-2 max-h-64 overflow-y-auto">
                        {ACTIVITIES.map((activity) => {
                          const canSchedule = selectedHour && 
                            (!activity.prerequisites.includes('high-energy') || 
                             (schedule.find(s => s.hour === selectedHour)?.energyLevel || 0) >= 70);
                          
                          return (
                            <div
                              key={activity.id}
                              className={`p-3 rounded-lg border transition-all duration-200 ${
                                selectedHour && canSchedule
                                  ? 'border-green-500 bg-green-500/10 cursor-pointer hover:bg-green-500/20'
                                  : 'border-gray-600 bg-gray-800/30'
                              }`}
                              onClick={() => {
                                if (selectedHour && canSchedule) {
                                  addActivityToSchedule(selectedHour, activity);
                                }
                              }}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  {activity.icon}
                                  <span className="font-semibold text-white text-sm">{activity.name}</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs">
                                  <span className="text-red-300">-{activity.energyCost}</span>
                                  <span className="text-green-300">+{activity.energyGain}</span>
                                </div>
                              </div>
                              <div className="text-xs text-gray-300 mt-1">
                                {activity.duration}h • {activity.timeOfDay} • {activity.benefits.join(', ')}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      
                      {selectedHour && schedule.find(s => s.hour === selectedHour)?.activity && (
                        <button
                          onClick={() => selectedHour && removeActivityFromSchedule(selectedHour)}
                          className="w-full mt-4 bg-red-500/20 border border-red-500 text-red-300 px-4 py-2 rounded-lg hover:bg-red-500/30 transition-all duration-200"
                        >
                          Xóa Hoạt Động
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <button
                    onClick={nextPhase}
                    className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold mt-6 transition-all duration-200"
                  >
                    Mô Phỏng Ngày {currentDay}
                  </button>
                </div>
              </div>
            )}

            {gamePhase === 'simulation' && (
              /* Simulation Results */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-6 h-6 text-yellow-400" />
                  <h2 className="text-2xl font-bold text-white">📊 Kết Quả Mô Phỏng Ngày {currentDay}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                  <div className="bg-blue-900/30 rounded-lg p-4 text-center">
                    <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <h3 className="font-semibold text-blue-200 mb-1">Năng Suất</h3>
                    <div className="text-2xl font-bold text-blue-400">{totalProductivity}</div>
                    <div className="text-sm text-gray-300">điểm productivity</div>
                  </div>
                  
                  <div className="bg-green-900/30 rounded-lg p-4 text-center">
                    <Battery className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <h3 className="font-semibold text-green-200 mb-1">Năng Lượng</h3>
                    <div className="text-2xl font-bold text-green-400">{totalEnergyGained}</div>
                    <div className="text-sm text-gray-300">điểm energy gain</div>
                  </div>
                  
                  <div className="bg-purple-900/30 rounded-lg p-4 text-center">
                    <Heart className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <h3 className="font-semibold text-purple-200 mb-1">Sức Khỏe</h3>
                    <div className="text-2xl font-bold text-purple-400">{wellnessScore}</div>
                    <div className="text-sm text-gray-300">điểm wellness</div>
                  </div>
                </div>
                
                {warnings.length > 0 && (
                  <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                      <h3 className="font-semibold text-red-200">Cảnh Báo & Đề Xuất</h3>
                    </div>
                    <div className="space-y-1">
                      {warnings.map((warning, index) => (
                        <div key={index} className="text-red-300 text-sm">{warning}</div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    {Math.round(score)}
                  </div>
                  <div className="text-lg text-orange-200">Điểm tối ưu hóa</div>
                </div>
                
                <button
                  onClick={nextPhase}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  {currentDay < 3 ? 'Ngày Tiếp Theo' : 'Xem Kết Quả Cuối'}
                </button>
              </div>
            )}

            {gamePhase === 'results' && (
              /* Final Results */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-2xl w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">🎉 Hoàn Thành Chương Trình!</h2>
                <p className="text-orange-200 text-lg mb-8">
                  Bạn đã học được cách tối ưu hóa năng lượng cá nhân hiệu quả! 
                  Áp dụng những kiến thức này vào cuộc sống hàng ngày nhé.
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

export default EnergyOptimizationSimulatorGame;