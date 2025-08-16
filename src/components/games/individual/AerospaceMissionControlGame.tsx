'use client';

import React, { useState, useEffect } from 'react';
import { Trophy, Rocket, Clock, Satellite, Target, AlertTriangle, CheckCircle } from 'lucide-react';

interface GameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface Mission {
  id: string;
  name: string;
  type: 'satellite' | 'spacecraft' | 'probe' | 'station' | 'rover';
  complexity: number;
  duration: number; // in days
  budget: number; // in million USD
  risk_factor: number;
  scientific_value: number;
  description: string;
}

interface Component {
  id: string;
  name: string;
  type: 'propulsion' | 'navigation' | 'communication' | 'power' | 'science' | 'life_support';
  reliability: number;
  cost: number; // in million USD
  weight: number; // in kg
  power_consumption: number; // in watts
  description: string;
}

interface LaunchWindow {
  id: string;
  name: string;
  date: string;
  weather_risk: number;
  orbital_alignment: number;
  cost_multiplier: number;
  description: string;
}

const MISSIONS: Mission[] = [
  {
    id: 'mars-rover',
    name: 'Sứ mệnh thăm dò sao Hỏa',
    type: 'rover',
    complexity: 95,
    duration: 687, // Mars mission duration
    budget: 2500,
    risk_factor: 85,
    scientific_value: 95,
    description: 'Gửi robot thăm dò lên sao Hỏa để tìm kiếm dấu hiệu sự sống và nghiên cứu khí hậu'
  },
  {
    id: 'lunar-base',
    name: 'Xây dựng trạm không gian Mặt Trăng',
    type: 'station',
    complexity: 90,
    duration: 365,
    budget: 5000,
    risk_factor: 70,
    scientific_value: 85,
    description: 'Thiết lập căn cứ nghiên cứu khoa học trên Mặt Trăng cho các sứ mệnh dài hạn'
  },
  {
    id: 'europa-probe',
    name: 'Thăm dó vệ tinh Europa của Sao Mộc',
    type: 'probe',
    complexity: 88,
    duration: 2190, // 6 years
    budget: 4200,
    risk_factor: 90,
    scientific_value: 98,
    description: 'Khám phá đại dương dưới lớp băng của Europa để tìm kiếm sự sống ngoài hành tinh'
  },
  {
    id: 'space-telescope',
    name: 'Kính thiên văn không gian thế hệ mới',
    type: 'satellite',
    complexity: 85,
    duration: 180,
    budget: 3800,
    risk_factor: 60,
    scientific_value: 92,
    description: 'Quan sát các thiên hà xa xôi và tìm hiểu về nguồn gốc vũ trụ'
  },
  {
    id: 'asteroid-mining',
    name: 'Khai thác tiểu hành tinh',
    type: 'spacecraft',
    complexity: 92,
    duration: 1095, // 3 years
    budget: 6000,
    risk_factor: 95,
    scientific_value: 80,
    description: 'Khai thác tài nguyên quý hiếm từ tiểu hành tinh để phục vụ công nghệ trên Trái Đất'
  }
];

const COMPONENTS: Component[] = [
  {
    id: 'ion-propulsion',
    name: 'Động cơ ion hiệu suất cao',
    type: 'propulsion',
    reliability: 95,
    cost: 500,
    weight: 250,
    power_consumption: 2000,
    description: 'Động cơ tiên tiến cho các chuyến bay dài hạn trong không gian'
  },
  {
    id: 'chemical-rocket',
    name: 'Tên lửa hóa học truyền thống',
    type: 'propulsion',
    reliability: 90,
    cost: 800,
    weight: 2000,
    power_consumption: 0,
    description: 'Động cơ mạnh mẽ cho giai đoạn phóng và đẩy ban đầu'
  },
  {
    id: 'ai-navigation',
    name: 'Hệ thống định vị AI tự động',
    type: 'navigation',
    reliability: 88,
    cost: 300,
    weight: 50,
    power_consumption: 150,
    description: 'Hệ thống dẫn đường thông minh sử dụng AI và machine learning'
  },
  {
    id: 'quantum-communication',
    name: 'Thông tin liên lạc lượng tử',
    type: 'communication',
    reliability: 85,
    cost: 400,
    weight: 30,
    power_consumption: 100,
    description: 'Hệ thống liên lạc bảo mật tuyệt đối qua mạng lượng tử'
  },
  {
    id: 'solar-panels',
    name: 'Tấm pin năng lượng mặt trời',
    type: 'power',
    reliability: 92,
    cost: 200,
    weight: 100,
    power_consumption: -3000, // negative means it generates power
    description: 'Nguồn năng lượng sạch và bền vững cho tàu vũ trụ'
  },
  {
    id: 'rtg-generator',
    name: 'Máy phát điện nhiệt phóng xạ',
    type: 'power',
    reliability: 98,
    cost: 600,
    weight: 45,
    power_consumption: -1500,
    description: 'Nguồn năng lượng ổn định cho các sứ mệnh xa và dài hạn'
  },
  {
    id: 'scientific-lab',
    name: 'Phòng thí nghiệm khoa học mini',
    type: 'science',
    reliability: 80,
    cost: 450,
    weight: 200,
    power_consumption: 500,
    description: 'Thiết bị phân tích mẫu vật và tiến hành thí nghiệm khoa học'
  },
  {
    id: 'life-support',
    name: 'Hệ thống hỗ trợ sự sống',
    type: 'life_support',
    reliability: 95,
    cost: 800,
    weight: 500,
    power_consumption: 800,
    description: 'Cung cấp oxy, nước và không khí sạch cho phi hành đoàn'
  }
];

const LAUNCH_WINDOWS: LaunchWindow[] = [
  {
    id: 'optimal',
    name: 'Cửa sổ phóng tối ưu',
    date: 'Tháng 3-5 (Mùa khô)',
    weather_risk: 10,
    orbital_alignment: 95,
    cost_multiplier: 1.0,
    description: 'Điều kiện thời tiết và quỹ đạo hoàn hảo, tỷ lệ thành công cao nhất'
  },
  {
    id: 'good',
    name: 'Cửa sổ phóng tốt',
    date: 'Tháng 11-12 (Cuối mùa mưa)',
    weather_risk: 25,
    orbital_alignment: 85,
    cost_multiplier: 1.1,
    description: 'Điều kiện khá tốt với một số rủi ro về thời tiết'
  },
  {
    id: 'acceptable',
    name: 'Cửa sổ phóng chấp nhận được',
    date: 'Tháng 6-8 (Giữa năm)',
    weather_risk: 40,
    orbital_alignment: 70,
    cost_multiplier: 1.3,
    description: 'Điều kiện trung bình, cần chuẩn bị kỹ lưỡng để đối phó rủi ro'
  },
  {
    id: 'risky',
    name: 'Cửa sổ phóng rủi ro cao',
    date: 'Tháng 9-10 (Mùa bão)',
    weather_risk: 70,
    orbital_alignment: 60,
    cost_multiplier: 1.5,
    description: 'Điều kiện khó khăn, chỉ nên chọn khi thời gian cấp bách'
  }
];

const AerospaceMissionControlGame: React.FC<GameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [gamePhase, setGamePhase] = useState<'briefing' | 'mission-selection' | 'component-selection' | 'launch-window' | 'mission-execution' | 'results'>('briefing');
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [selectedComponents, setSelectedComponents] = useState<Component[]>([]);
  const [selectedLaunchWindow, setSelectedLaunchWindow] = useState<LaunchWindow | null>(null);
  const [budget] = useState(8000); // 8 billion USD
  const [missionProgress, setMissionProgress] = useState(0);
  const [isExecuting, setIsExecuting] = useState(false);
  
  // Mission metrics
  const [missionSuccess, setMissionSuccess] = useState(0);
  const [scientificValue, setScientificValue] = useState(0);
  const [budgetEfficiency, setBudgetEfficiency] = useState(0);

  const totalCost = (selectedMission?.budget || 0) + 
    selectedComponents.reduce((sum, c) => sum + c.cost, 0) + 
    ((selectedMission?.budget || 0) * ((selectedLaunchWindow?.cost_multiplier || 1) - 1));

  const canAfford = totalCost <= budget;

  const calculateMissionScore = () => {
    if (!selectedMission || selectedComponents.length === 0 || !selectedLaunchWindow) {
      return { success: 0, scientific: 0, efficiency: 0 };
    }
    
    // Mission success probability
    const componentReliability = selectedComponents.reduce((sum, c) => sum + c.reliability, 0) / selectedComponents.length;
    const weatherBonus = (100 - selectedLaunchWindow.weather_risk);
    const orbitalBonus = selectedLaunchWindow.orbital_alignment;
    const complexityPenalty = selectedMission.complexity;
    
    const successScore = Math.round(
      (componentReliability * 0.4 + weatherBonus * 0.2 + orbitalBonus * 0.2 + (100 - complexityPenalty) * 0.2)
    );
    
    // Scientific value calculation
    const missionScientificValue = selectedMission.scientific_value;
    const hasScientificEquipment = selectedComponents.some(c => c.type === 'science') ? 20 : 0;
    const scientificScore = Math.round(missionScientificValue * 0.8 + hasScientificEquipment * 0.2);
    
    // Budget efficiency
    const budgetUsage = totalCost / budget;
    const efficiencyScore = Math.round((1 - budgetUsage) * 100);
    
    return {
      success: Math.min(100, Math.max(0, successScore)),
      scientific: Math.min(100, scientificScore),
      efficiency: Math.max(0, efficiencyScore)
    };
  };

  const startMissionExecution = () => {
    if (!selectedMission || selectedComponents.length === 0 || !selectedLaunchWindow || !canAfford) {
      onComplete(false, 0);
      return;
    }

    setGamePhase('mission-execution');
    setIsExecuting(true);
    
    const missionResults = calculateMissionScore();
    setMissionSuccess(missionResults.success);
    setScientificValue(missionResults.scientific);
    setBudgetEfficiency(missionResults.efficiency);
    
    const totalComplexity = selectedMission.complexity + 
      selectedComponents.length * 10 + 
      selectedLaunchWindow.weather_risk;
    
    const interval = setInterval(() => {
      setMissionProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsExecuting(false);
          setGamePhase('results');
          return 100;
        }
        return prev + Math.max(1, (100 / totalComplexity) * 3);
      });
    }, 200);
  };

  const getOverallScore = () => {
    const missionResults = calculateMissionScore();
    const riskBonus = selectedMission ? (selectedMission.risk_factor / 100) * 10 : 0; // Risk bonus
    
    return Math.round(
      missionResults.success * 0.4 + 
      missionResults.scientific * 0.3 + 
      missionResults.efficiency * 0.2 + 
      riskBonus * 0.1
    );
  };

  useEffect(() => {
    if (timeLeft <= 0 && gamePhase !== 'results') {
      onComplete(false, 0);
    }
  }, [timeLeft, gamePhase, onComplete]);

  if (gamePhase === 'briefing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-indigo-500/20">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Rocket className="w-16 h-16 text-indigo-400" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Aerospace Mission Control</h1>
            <p className="text-xl text-gray-300 mb-6">
              Điều khiển sứ mệnh không gian và chinh phục vũ trụ!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Satellite className="w-6 h-6 mr-2 text-indigo-400" />
                Quy trình sứ mệnh
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Chọn sứ mệnh không gian phù hợp</li>
                <li>• Lựa chọn thiết bị và công nghệ tiên tiến</li>
                <li>• Chọn cửa sổ phóng tối ưu</li>
                <li>• Quản lý ngân sách 8 tỷ USD</li>
                <li>• Thực hiện sứ mệnh và đánh giá kết quả</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Target className="w-6 h-6 mr-2 text-purple-400" />
                Tiêu chí thành công
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• <span className="text-indigo-400">Thành công sứ mệnh (40%)</span> - Độ tin cậy và an toàn</li>
                <li>• <span className="text-blue-400">Giá trị khoa học (30%)</span> - Đóng góp cho nhân loại</li>
                <li>• <span className="text-green-400">Hiệu quả ngân sách (20%)</span> - Tối ưu chi phí</li>
                <li>• <span className="text-yellow-400">Thử thách rủi ro (10%)</span> - Bonus cho sứ mệnh khó</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('mission-selection')}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Bắt đầu sứ mệnh
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'mission-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn sứ mệnh không gian</h2>
            <p className="text-gray-300">Ngân sách: {budget.toLocaleString()} triệu USD</p>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {MISSIONS.map((mission) => {
              const isSelected = selectedMission?.id === mission.id;
              
              return (
                <div
                  key={mission.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-indigo-500 bg-indigo-500/20'
                      : 'border-white/20 hover:border-indigo-400/50'
                  }`}
                  onClick={() => setSelectedMission(mission)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {mission.type === 'satellite' && <Satellite className="w-8 h-8 text-blue-400" />}
                      {mission.type === 'spacecraft' && <Rocket className="w-8 h-8 text-red-400" />}
                      {mission.type === 'probe' && <Target className="w-8 h-8 text-green-400" />}
                      {mission.type === 'station' && <CheckCircle className="w-8 h-8 text-purple-400" />}
                      {mission.type === 'rover' && <AlertTriangle className="w-8 h-8 text-yellow-400" />}
                    </div>
                    <span className="text-yellow-400 font-bold text-sm">{mission.budget}M USD</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3">{mission.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{mission.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Độ phức tạp:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div 
                          className="bg-red-500 h-2 rounded-full" 
                          style={{width: `${mission.complexity}%`}}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Giá trị KH:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{width: `${mission.scientific_value}%`}}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Rủi ro:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div 
                          className="bg-yellow-500 h-2 rounded-full" 
                          style={{width: `${mission.risk_factor}%`}}
                        ></div>
                      </div>
                    </div>
                    <div className="text-center text-gray-400">
                      Thời gian: {mission.duration} ngày
                    </div>
                  </div>
                  
                  {isSelected && (
                    <div className="mt-4 text-center">
                      <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm">Đã chọn</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('component-selection')}
              disabled={!selectedMission}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Tiếp tục chọn thiết bị
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'component-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn thiết bị (tối đa 5)</h2>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <span>Sứ mệnh: {selectedMission?.name}</span>
              <span>Đã chọn: {selectedComponents.length}/5</span>
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {COMPONENTS.map((component) => {
              const isSelected = selectedComponents.some(c => c.id === component.id);
              const canSelect = selectedComponents.length < 5 && 
                (totalCost + component.cost - (isSelected ? component.cost : 0)) <= budget;
              
              return (
                <div
                  key={component.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-blue-500 bg-blue-500/20'
                      : !canSelect && !isSelected
                      ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                      : 'border-white/20 hover:border-blue-400/50'
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedComponents(prev => prev.filter(c => c.id !== component.id));
                    } else if (canSelect) {
                      setSelectedComponents(prev => [...prev, component]);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <Target className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-yellow-400 font-bold text-sm">{component.cost}M USD</span>
                  </div>
                  
                  <h3 className="text-sm font-bold text-white mb-2">{component.name}</h3>
                  <p className="text-gray-300 text-xs mb-3">{component.description}</p>
                  
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div>
                      <span className="text-gray-400">Độ tin cậy:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div 
                          className="bg-green-500 h-1 rounded-full" 
                          style={{width: `${component.reliability}%`}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Trọng lượng:</span>
                      <span className="text-white text-xs">{component.weight}kg</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Năng lượng:</span>
                      <span className="text-white text-xs">{component.power_consumption}W</span>
                    </div>
                    <div className="text-center">
                      <span className={`text-xs px-1 py-0.5 rounded ${
                        component.type === 'propulsion' ? 'bg-red-500/20 text-red-400' :
                        component.type === 'navigation' ? 'bg-blue-500/20 text-blue-400' :
                        component.type === 'communication' ? 'bg-green-500/20 text-green-400' :
                        component.type === 'power' ? 'bg-yellow-500/20 text-yellow-400' :
                        component.type === 'science' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-orange-500/20 text-orange-400'
                      }`}>
                        {component.type}
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
              onClick={() => setGamePhase('launch-window')}
              disabled={selectedComponents.length === 0}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Tiếp tục chọn cửa sổ phóng
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'launch-window') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn cửa sổ phóng</h2>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <span>Chi phí hiện tại: {(selectedMission?.budget || 0) + selectedComponents.reduce((sum, c) => sum + c.cost, 0)} triệu USD</span>
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {LAUNCH_WINDOWS.map((launchWindow) => {
              const isSelected = selectedLaunchWindow?.id === launchWindow.id;
              const additionalCost = ((selectedMission?.budget || 0) * (launchWindow.cost_multiplier - 1));
              const totalWithLaunch = totalCost;
              const canSelect = totalWithLaunch <= budget;
              
              return (
                <div
                  key={launchWindow.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-green-500 bg-green-500/20'
                      : !canSelect && !isSelected
                      ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                      : 'border-white/20 hover:border-green-400/50'
                  }`}
                  onClick={() => {
                    if (canSelect) {
                      setSelectedLaunchWindow(launchWindow);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Rocket className="w-8 h-8 text-green-400" />
                    <div className="text-right">
                      <div className="text-yellow-400 font-bold">+{Math.round(additionalCost)} triệu USD</div>
                      <div className="text-xs text-gray-400">x{launchWindow.cost_multiplier}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{launchWindow.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{launchWindow.description}</p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Thời gian:</span>
                      <span className="text-white">{launchWindow.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Rủi ro thời tiết:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-20">
                        <div 
                          className="bg-red-500 h-2 rounded-full" 
                          style={{width: `${launchWindow.weather_risk}%`}}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Căn chỉnh quỹ đạo:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-20">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{width: `${launchWindow.orbital_alignment}%`}}
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
            <h3 className="text-xl font-bold text-white mb-4">Tóm tắt sứ mệnh</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="text-lg font-semibold text-indigo-400 mb-2">Sứ mệnh</h4>
                <p className="text-gray-300 text-sm">{selectedMission?.name}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Thiết bị ({selectedComponents.length})</h4>
                {selectedComponents.map(component => (
                  <p key={component.id} className="text-gray-300 text-sm">{component.name.split(' ')[0]}</p>
                ))}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-2">Cửa sổ phóng</h4>
                <p className="text-gray-300 text-sm">{selectedLaunchWindow?.name || 'Chưa chọn'}</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-white">Tổng chi phí: {totalCost.toLocaleString()} triệu USD</span>
                <span className={`text-lg font-semibold ${canAfford ? 'text-green-400' : 'text-red-400'}`}>
                  {canAfford ? '✅ Trong ngân sách' : '❌ Vượt ngân sách'}
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={startMissionExecution}
              disabled={!canAfford || !selectedLaunchWindow}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Bắt đầu sứ mệnh
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'mission-execution') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-indigo-500/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Sứ mệnh đang thực hiện...</h2>
            <p className="text-gray-300">Phóng và điều khiển tàu vũ trụ</p>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <div className="flex justify-between text-white mb-2">
                <span>Tiến độ sứ mệnh</span>
                <span>{Math.round(missionProgress)}%</span>
              </div>
              <div className="bg-gray-700 rounded-full h-6">
                <div 
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-6 rounded-full transition-all duration-300" 
                  style={{width: `${missionProgress}%`}}
                ></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-indigo-400">Thành công sứ mệnh</span>
                  <span className="text-white font-bold">{missionSuccess}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-indigo-500 h-3 rounded-full transition-all duration-300" 
                    style={{width: `${missionSuccess}%`}}
                  ></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-400">Giá trị khoa học</span>
                  <span className="text-white font-bold">{scientificValue}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-blue-500 h-3 rounded-full transition-all duration-300" 
                    style={{width: `${scientificValue}%`}}
                  ></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-400">Hiệu quả ngân sách</span>
                  <span className="text-white font-bold">{budgetEfficiency}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-green-500 h-3 rounded-full transition-all duration-300" 
                    style={{width: `${budgetEfficiency}%`}}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center space-x-4 text-gray-300">
              <Rocket className="w-6 h-6 text-indigo-400 animate-pulse" />
              <span>Đang thực hiện sứ mệnh {selectedMission?.name}...</span>
              <Satellite className="w-6 h-6 text-purple-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'results') {
    const missionResults = calculateMissionScore();
    const finalScore = getOverallScore();

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-indigo-500/20">
          <div className="text-center mb-8">
            <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">Sứ mệnh hoàn thành!</h2>
            <p className="text-2xl text-gray-300 mb-2">{selectedMission?.name}</p>
            <div className="text-6xl font-bold text-white mb-4">{finalScore} điểm</div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Kết quả sứ mệnh</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-indigo-400">Thành công sứ mệnh:</span>
                  <span className="text-white font-bold">{missionResults.success}/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-400">Giá trị khoa học:</span>
                  <span className="text-white font-bold">{missionResults.scientific}/100</span>
                </div>
                <div className="flex justify-between border-t border-white/20 pt-2">
                  <span className="text-green-400">Hiệu quả ngân sách:</span>
                  <span className="text-white font-bold">{missionResults.efficiency}/100</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Đánh giá</h3>
              <div className="space-y-2 text-gray-300">
                {finalScore >= 90 && <p>🚀 Sứ mệnh huyền thoại! Công nghệ vũ trụ đỉnh cao của nhân loại.</p>}
                {finalScore >= 80 && finalScore < 90 && <p>⭐ Sứ mệnh xuất sắc! Đóng góp quan trọng cho khoa học vũ trụ.</p>}
                {finalScore >= 70 && finalScore < 80 && <p>✅ Sứ mệnh thành công! Đạt được mục tiêu đề ra.</p>}
                {finalScore >= 60 && finalScore < 70 && <p>⚠️ Sứ mệnh gặp khó khăn nhưng vẫn có kết quả.</p>}
                {finalScore < 60 && <p>❌ Sứ mệnh thất bại. Cần cải thiện kế hoạch và thiết bị.</p>}
                
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-sm">
                    <strong>Tổng chi phí:</strong> {totalCost.toLocaleString()} triệu USD
                    <br />
                    <strong>Thời gian thực hiện:</strong> {selectedMission?.duration} ngày
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
              Sứ mệnh mới
            </button>
            <button
              onClick={() => onComplete(true, finalScore)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
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

export default AerospaceMissionControlGame;
