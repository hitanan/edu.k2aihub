'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  Zap, 
  Magnet, 
  Atom, 
  Waves, 
  RotateCcw, 
  Play, 
  Pause, 
  Settings,
  Eye,
  TestTube2,
  Gauge,
  Target,
  CheckCircle2
} from 'lucide-react';

interface PhysicsExperimentLab3DGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface Experiment {
  id: string;
  name: string;
  description: string;
  category: 'mechanics' | 'electricity' | 'magnetism' | 'waves' | 'thermodynamics';
  difficulty: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  equipment: string[];
  procedure: string[];
  theory: string;
  safetyTips: string[];
  expectedResults: string;
  realWorldApplications: string[];
}

interface ExperimentResult {
  experimentId: string;
  success: boolean;
  accuracy: number;
  timeToComplete: number;
  safetyCompliance: boolean;
  theoreticalUnderstanding: number;
}

const PHYSICS_EXPERIMENTS: Experiment[] = [
  {
    id: 'pendulum-motion',
    name: 'Con Lắc Đơn và Chuyển Động Điều Hòa',
    description: 'Nghiên cứu chuyển động điều hòa của con lắc đơn và các yếu tố ảnh hưởng đến chu kỳ dao động.',
    category: 'mechanics',
    difficulty: 'Cơ bản',
    equipment: ['Con lắc đơn', 'Thước đo', 'Đồng hồ bấm giây', 'Thước đo góc', 'Máy quay phim'],
    procedure: [
      'Thiết lập con lắc với chiều dài L = 1m',
      'Kéo con lắc ra góc 15° so với phương thẳng đứng',
      'Thả con lắc và đo thời gian 10 chu kỳ dao động',
      'Thay đổi chiều dài con lắc và lặp lại thí nghiệm',
      'Ghi nhận và phân tích dữ liệu'
    ],
    theory: 'Chu kỳ dao động của con lắc đơn được xác định bởi công thức T = 2π√(L/g), trong đó L là chiều dài con lắc và g là gia tốc trọng trường.',
    safetyTips: [
      'Đảm bảo khu vực thí nghiệm rộng rãi',
      'Kiểm tra độ chắc chắn của giá đỡ',
      'Không đứng trong vùng dao động của con lắc'
    ],
    expectedResults: 'Chu kỳ dao động tỷ lệ thuận với căn bậc hai của chiều dài con lắc và không phụ thuộc vào khối lượng.',
    realWorldApplications: ['Đồng hồ quả lắc', 'Thiết bị đo độ nghiêng', 'Cảm biến địa chấn', 'Đồng hồ Foucault']
  },
  {
    id: 'electromagnetic-induction',
    name: 'Cảm Ứng Điện từ và Định Luật Faraday',
    description: 'Khám phá hiện tượng cảm ứng điện từ và ứng dụng định luật Faraday-Lenz trong thực tế.',
    category: 'electricity',
    difficulty: 'Trung bình',
    equipment: ['Cuộn dây dẫn', 'Nam châm vĩnh cửu', 'Galmét', 'Máy phát điện mini', 'Đèn LED', 'Dây dẫn'],
    procedure: [
      'Kết nối cuộn dây với galmét để đo dòng điện cảm ứng',
      'Di chuyển nam châm vào ra khỏi cuộn dây với tốc độ khác nhau',
      'Quan sát và ghi nhận sự thay đổi của kim galmét',
      'Thay đổi số vòng dây và cường độ từ trường',
      'Đo và phân tích suất điện động cảm ứng'
    ],
    theory: 'Định luật Faraday: ε = -dΦ/dt, trong đó ε là suất điện động cảm ứng và Φ là từ thông qua mạch kín.',
    safetyTips: [
      'Sử dụng điện áp thấp dưới 12V',
      'Kiểm tra cách điện của dây dẫn',
      'Tránh để nam châm mạnh gần thiết bị điện tử'
    ],
    expectedResults: 'Suất điện động cảm ứng tỷ lệ với tốc độ thay đổi từ thông và tuân theo quy tắc bàn tay phải.',
    realWorldApplications: ['Máy phát điện', 'Biến áp', 'Động cơ điện', 'Cảm biến từ', 'Sạc không dây']
  },
  {
    id: 'wave-interference',
    name: 'Giao Thoa Sóng và Hiện Tượng Cộng Hưởng',
    description: 'Nghiên cứu hiện tượng giao thoa sóng cơ học và điện từ, cũng như hiện tượng cộng hưởng.',
    category: 'waves',
    difficulty: 'Nâng cao',
    equipment: ['Máy phát sóng', 'Bể nước', 'Laser', 'Lưới nhiễu xạ', 'Micro thu âm', 'Loa phát âm'],
    procedure: [
      'Thiết lập thí nghiệm giao thoa sóng nước với hai nguồn đồng bộ',
      'Quan sát và chụp ảnh hình ảnh giao thoa',
      'Thực hiện thí nghiệm Young với ánh sáng laser',
      'Đo khoảng cách vân giao thoa và tính bước sóng ánh sáng',
      'Nghiên cứu cộng hưởng âm thanh với ống sóng dừng'
    ],
    theory: 'Nguyên lý chồng chất sóng: khi hai sóng gặp nhau, biên độ tổng hợp bằng tổng đại số của các biên độ thành phần.',
    safetyTips: [
      'Không chiếu laser trực tiếp vào mắt',
      'Sử dụng kính bảo hộ khi làm việc với laser',
      'Kiểm tra mức âm thanh để tránh tổn thương thính giác'
    ],
    expectedResults: 'Quan sát được các vân sáng tối xen kẽ trong giao thoa ánh sáng và các điểm cực đại cực tiểu trong giao thoa sóng cơ.',
    realWorldApplications: ['Kính thiên văn', 'Radar', 'Sonar', 'Công nghệ hologram', 'Thiết bị đo laser']
  },
  {
    id: 'thermal-expansion',
    name: 'Sự Nở Nhiệt và Chuyển Pha Chất',
    description: 'Khám phá sự giãn nở nhiệt của vật rắn, lỏng, khí và quá trình chuyển pha của các chất.',
    category: 'thermodynamics',
    difficulty: 'Trung bình',
    equipment: ['Thanh kim loại', 'Bếp đun', 'Nhiệt kế', 'Thước đo', 'Nước đá', 'Bình thủy tinh'],
    procedure: [
      'Đo chiều dài ban đầu của thanh kim loại ở nhiệt độ phòng',
      'Đun nóng thanh kim loại và đo sự thay đổi chiều dài',
      'Thực hiện thí nghiệm với các loại kim loại khác nhau',
      'Quan sát quá trình chuyển pha của nước: rắn → lỏng → khí',
      'Đo nhiệt độ trong quá trình chuyển pha'
    ],
    theory: 'Hệ số nở dài: α = ΔL/(L₀ΔT), trong đó α là hệ số nở dài, ΔL là độ biến thiên chiều dài, L₀ là chiều dài ban đầu.',
    safetyTips: [
      'Sử dụng kẹp chịu nhiệt khi cầm vật nóng',
      'Đeo kính bảo hộ khi làm việc với nhiệt độ cao',
      'Đảm bảo thông gió tốt trong phòng thí nghiệm'
    ],
    expectedResults: 'Các kim loại khác nhau có hệ số nở nhiệt khác nhau. Nước có điểm nóng chảy 0°C và điểm sôi 100°C ở áp suất tiêu chuẩn.',
    realWorldApplications: ['Thiết kế cầu và đường sắt', 'Động cơ nhiệt', 'Nhiệt kế', 'Hệ thống làm lạnh', 'Công nghiệp luyện kim']
  }
];

const SAFETY_PROTOCOLS = {
  'pre-experiment': [
    'Đọc kỹ hướng dẫn thí nghiệm',
    'Kiểm tra thiết bị và đảm bảo hoạt động bình thường',
    'Mặc đồ bảo hộ phù hợp',
    'Chuẩn bị thiết bị cấp cứu'
  ],
  'during-experiment': [
    'Tuân thủ các bước thí nghiệm theo đúng thứ tự',
    'Quan sát liên tục các dấu hiệu bất thường',
    'Ghi chép dữ liệu một cách chính xác',
    'Thông báo ngay khi có sự cố'
  ],
  'post-experiment': [
    'Tắt tất cả thiết bị và nguồn điện',
    'Dọn dẹp khu vực làm việc',
    'Lưu trữ dữ liệu và mẫu vật an toàn',
    'Báo cáo kết quả và nhận xét'
  ]
};

export default function PhysicsExperimentLab3DGame({ 
  onComplete, 
  timeLeft, 
  onRestart 
}: PhysicsExperimentLab3DGameProps) {
  const [currentExperiment, setCurrentExperiment] = useState<Experiment | null>(null);
  const [experimentPhase, setExperimentPhase] = useState<'selection' | 'setup' | 'execution' | 'analysis' | 'report'>('selection');
  const [completedExperiments, setCompletedExperiments] = useState<ExperimentResult[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [labEquipment, setLabEquipment] = useState<Record<string, boolean>>({});
  const [safetyChecklist, setSafetyChecklist] = useState<Record<string, boolean>>({});
  const [experimentData, setExperimentData] = useState<Record<string, number[]>>({});
  const [score, setScore] = useState(0);
  const [experimentStartTime, setExperimentStartTime] = useState<number>(0);
  const [showSafetyAlert, setShowSafetyAlert] = useState(false);
  const [is3DView, setIs3DView] = useState(true);

  // Initialize lab equipment
  useEffect(() => {
    const allEquipment = Array.from(new Set(
      PHYSICS_EXPERIMENTS.flatMap(exp => exp.equipment)
    ));
    const equipmentStatus: Record<string, boolean> = {};
    allEquipment.forEach(item => {
      equipmentStatus[item] = true; // All equipment available initially
    });
    setLabEquipment(equipmentStatus);
  }, []);

  const startExperiment = (experiment: Experiment) => {
    setCurrentExperiment(experiment);
    setExperimentPhase('setup');
    setCurrentStep(0);
    setExperimentStartTime(Date.now());
    
    // Initialize safety checklist
    const safetyItems: Record<string, boolean> = {};
    experiment.safetyTips.forEach(tip => {
      safetyItems[tip] = false;
    });
    setSafetyChecklist(safetyItems);
  };

  const completeExperiment = useCallback(() => {
    if (!currentExperiment) return;

    const experimentTime = Date.now() - experimentStartTime;
    const safetyCompliance = Object.values(safetyChecklist).every(checked => checked);
    const accuracy = Math.min(100, 70 + (safetyCompliance ? 20 : 0) + (experimentTime < 300000 ? 10 : 0));
    
    const result: ExperimentResult = {
      experimentId: currentExperiment.id,
      success: accuracy >= 70,
      accuracy,
      timeToComplete: experimentTime,
      safetyCompliance,
      theoreticalUnderstanding: Math.floor(Math.random() * 30) + 70
    };

    setCompletedExperiments(prev => [...prev, result]);
    setScore(prev => prev + Math.floor(accuracy));

    if (completedExperiments.length >= 2) {
      const finalScore = score + Math.floor(accuracy);
      onComplete(true, finalScore);
    } else {
      setExperimentPhase('selection');
      setCurrentExperiment(null);
    }
  }, [currentExperiment, experimentStartTime, safetyChecklist, completedExperiments.length, score, onComplete]);

  const toggleSafetyItem = (item: string) => {
    setSafetyChecklist(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const recordData = (value: number) => {
    if (!currentExperiment) return;
    
    setExperimentData(prev => ({
      ...prev,
      [currentExperiment.id]: [...(prev[currentExperiment.id] || []), value]
    }));
  };

  const render3DLabEnvironment = () => (
    <div className="relative w-full h-96 bg-gradient-to-b from-blue-900 via-slate-800 to-slate-900 rounded-xl border border-cyan-500/30 overflow-hidden">
      {/* 3D Lab Setup */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse at 50% 100%, rgba(0,255,255,0.1) 0%, transparent 70%),
          linear-gradient(180deg, rgba(30,58,138,0.8) 0%, rgba(15,23,42,0.9) 100%)
        `,
        perspective: '1000px'
      }}>
        
        {/* Lab Table */}
        <div 
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-32 bg-gradient-to-b from-gray-300 to-gray-500 rounded-lg shadow-2xl"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateX(-50%) rotateX(75deg) translateZ(-20px)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg opacity-80"></div>
        </div>

        {/* Lab Equipment */}
        {currentExperiment && (
          <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-8">
            {currentExperiment.equipment.slice(0, 3).map((equipment, index) => (
              <div
                key={index}
                className="w-12 h-16 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg shadow-lg"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `translateX(-50%) rotateX(15deg) rotateY(${index * 10 - 10}deg) translateZ(${index * 5}px)`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-500 rounded-lg opacity-70"></div>
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-white font-bold">
                  {equipment.split(' ')[0]}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Floating Particles for Effect */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-70 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Lab Status Display */}
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm p-3 rounded-lg border border-cyan-500/30">
          <div className="flex items-center space-x-2 text-cyan-400 text-sm">
            <TestTube2 className="w-4 h-4" />
            <span>Lab Status: Active</span>
          </div>
          <div className="flex items-center space-x-2 text-green-400 text-sm mt-1">
            <Gauge className="w-4 h-4" />
            <span>Safety: {Object.values(safetyChecklist).filter(v => v).length}/{Object.keys(safetyChecklist).length}</span>
          </div>
        </div>
      </div>
    </div>
  );

  if (experimentPhase === 'selection') {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <TestTube2 className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">Phòng Thí Nghiệm Vật Lý 3D</h2>
            <Atom className="w-8 h-8 text-cyan-400" />
          </div>
          <p className="text-gray-300 mb-6">
            Khám phá các nguyên lý vật lý thông qua thí nghiệm tương tác trong môi trường 3D
          </p>
          
          {/* 3D Lab Environment */}
          {render3DLabEnvironment()}
        </div>

        {/* Experiment Selection Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PHYSICS_EXPERIMENTS.map((experiment) => {
            const isCompleted = completedExperiments.some(result => result.experimentId === experiment.id);
            
            return (
              <div
                key={experiment.id}
                className={`bg-gradient-to-br ${
                  isCompleted 
                    ? 'from-green-900/50 to-emerald-900/50 border-green-500/30' 
                    : 'from-slate-800/50 to-slate-900/50 border-slate-700/30'
                } backdrop-blur-sm p-6 rounded-xl border hover:border-blue-500/50 transition-all duration-300 cursor-pointer group`}
                onClick={() => !isCompleted && startExperiment(experiment)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {experiment.category === 'mechanics' && <Zap className="w-6 h-6 text-yellow-400" />}
                    {experiment.category === 'electricity' && <Zap className="w-6 h-6 text-blue-400" />}
                    {experiment.category === 'magnetism' && <Magnet className="w-6 h-6 text-red-400" />}
                    {experiment.category === 'waves' && <Waves className="w-6 h-6 text-purple-400" />}
                    {experiment.category === 'thermodynamics' && <Gauge className="w-6 h-6 text-orange-400" />}
                    
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                        {experiment.name}
                      </h3>
                      <p className="text-sm text-gray-400">{experiment.difficulty}</p>
                    </div>
                  </div>
                  
                  {isCompleted && <CheckCircle2 className="w-6 h-6 text-green-400" />}
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {experiment.description}
                </p>

                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Thiết Bị Cần Thiết:</div>
                    <div className="flex flex-wrap gap-1">
                      {experiment.equipment.slice(0, 3).map((item, index) => (
                        <span key={index} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                      {experiment.equipment.length > 3 && (
                        <span className="text-xs text-gray-400">+{experiment.equipment.length - 3}</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-400 mb-1">Ứng Dụng Thực Tế:</div>
                    <div className="text-xs text-gray-300">
                      {experiment.realWorldApplications.slice(0, 2).join(', ')}
                    </div>
                  </div>
                </div>

                {!isCompleted && (
                  <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span>Bắt Đầu Thí Nghiệm</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress Summary */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/30">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Tiến Độ Thí Nghiệm</h3>
              <p className="text-gray-300">
                Hoàn thành {completedExperiments.length}/{PHYSICS_EXPERIMENTS.length} thí nghiệm
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-cyan-400">{score}</div>
              <div className="text-sm text-gray-400">Điểm số</div>
            </div>
          </div>

          <div className="w-full bg-gray-700/50 rounded-full h-2 mt-4">
            <div
              className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(completedExperiments.length / PHYSICS_EXPERIMENTS.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    );
  }

  if (experimentPhase === 'setup' && currentExperiment) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Chuẩn Bị Thí Nghiệm</h2>
          <h3 className="text-xl text-blue-400 mb-4">{currentExperiment.name}</h3>
          
          {render3DLabEnvironment()}
        </div>

        {/* Safety Checklist */}
        <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm p-6 rounded-xl border border-red-500/30">
          <div className="flex items-center space-x-2 mb-4">
            <Settings className="w-6 h-6 text-red-400" />
            <h3 className="text-lg font-bold text-white">Kiểm Tra An Toàn</h3>
          </div>
          
          <div className="space-y-3">
            {currentExperiment.safetyTips.map((tip, index) => (
              <label key={index} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={safetyChecklist[tip] || false}
                  onChange={() => toggleSafetyItem(tip)}
                  className="w-4 h-4 text-red-500 bg-transparent border-red-500 rounded focus:ring-red-500"
                />
                <span className="text-gray-300">{tip}</span>
              </label>
            ))}
          </div>

          {!Object.values(safetyChecklist).every(checked => checked) && (
            <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
              <p className="text-red-300 text-sm">
                ⚠️ Vui lòng kiểm tra tất cả các mục an toàn trước khi bắt đầu thí nghiệm
              </p>
            </div>
          )}
        </div>

        {/* Equipment Check */}
        <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
          <div className="flex items-center space-x-2 mb-4">
            <TestTube2 className="w-6 h-6 text-blue-400" />
            <h3 className="text-lg font-bold text-white">Thiết Bị Cần Thiết</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-3">
            {currentExperiment.equipment.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg">
                <div className={`w-3 h-3 rounded-full ${labEquipment[item] ? 'bg-green-400' : 'bg-red-400'}`}></div>
                <span className="text-gray-300">{item}</span>
                {labEquipment[item] && <CheckCircle2 className="w-4 h-4 text-green-400 ml-auto" />}
              </div>
            ))}
          </div>
        </div>

        {/* Theory Overview */}
        <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
          <div className="flex items-center space-x-2 mb-4">
            <Atom className="w-6 h-6 text-purple-400" />
            <h3 className="text-lg font-bold text-white">Cơ Sở Lý Thuyết</h3>
          </div>
          <p className="text-gray-300 mb-4">{currentExperiment.theory}</p>
          <div className="text-sm text-purple-300">
            <strong>Ứng dụng thực tế:</strong> {currentExperiment.realWorldApplications.join(', ')}
          </div>
        </div>

        {/* Start Experiment Button */}
        <div className="text-center">
          <button
            onClick={() => Object.values(safetyChecklist).every(checked => checked) ? setExperimentPhase('execution') : setShowSafetyAlert(true)}
            disabled={!Object.values(safetyChecklist).every(checked => checked)}
            className={`px-8 py-3 rounded-xl font-bold text-white transition-all duration-200 ${
              Object.values(safetyChecklist).every(checked => checked)
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-green-500/25'
                : 'bg-gray-600 cursor-not-allowed opacity-50'
            }`}
          >
            Bắt Đầu Thí Nghiệm
          </button>
        </div>

        {/* Safety Alert Modal */}
        {showSafetyAlert && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-gradient-to-br from-red-900 to-orange-900 p-6 rounded-xl border border-red-500/50 max-w-md mx-4">
              <div className="text-center">
                <div className="text-4xl mb-4">⚠️</div>
                <h3 className="text-lg font-bold text-white mb-2">Cảnh Báo An Toàn</h3>
                <p className="text-gray-300 mb-4">
                  Bạn cần hoàn thành tất cả các kiểm tra an toàn trước khi bắt đầu thí nghiệm.
                </p>
                <button
                  onClick={() => setShowSafetyAlert(false)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Đã hiểu
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (experimentPhase === 'execution' && currentExperiment) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Thực Hiện Thí Nghiệm</h2>
          <h3 className="text-xl text-blue-400 mb-4">{currentExperiment.name}</h3>
          
          {render3DLabEnvironment()}
        </div>

        {/* Current Step */}
        <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">
              Bước {currentStep + 1}/{currentExperiment.procedure.length}
            </h3>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-bold">
                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <div className="w-full bg-gray-700/50 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentStep + 1) / currentExperiment.procedure.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="p-4 bg-slate-800/50 rounded-lg mb-4">
            <p className="text-white text-lg">{currentExperiment.procedure[currentStep]}</p>
          </div>

          {/* Data Recording */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-300">
                Ghi Nhận Dữ Liệu (giá trị đo được)
              </label>
              <input
                type="number"
                step="0.01"
                className="w-full bg-slate-700/50 border border-slate-600 text-white px-3 py-2 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Nhập giá trị..."
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    const value = parseFloat((e.target as HTMLInputElement).value);
                    if (!isNaN(value)) {
                      recordData(value);
                      (e.target as HTMLInputElement).value = '';
                    }
                  }
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Dữ Liệu Đã Ghi ({(experimentData[currentExperiment.id] || []).length})
              </label>
              <div className="bg-slate-700/50 rounded-lg p-3 h-20 overflow-y-auto">
                {(experimentData[currentExperiment.id] || []).map((value, index) => (
                  <div key={index} className="text-sm text-blue-300">
                    Lần {index + 1}: {value}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex space-x-3">
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(prev => prev - 1)}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                Bước Trước
              </button>
            )}
            <button
              onClick={() => {
                if (currentStep < currentExperiment.procedure.length - 1) {
                  setCurrentStep(prev => prev + 1);
                } else {
                  setExperimentPhase('analysis');
                }
              }}
              className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg transition-all duration-200"
            >
              {currentStep < currentExperiment.procedure.length - 1 ? 'Bước Tiếp' : 'Hoàn Thành'}
            </button>
          </div>
        </div>

        {/* Real-time Observations */}
        <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm p-6 rounded-xl border border-green-500/30">
          <div className="flex items-center space-x-2 mb-4">
            <Eye className="w-6 h-6 text-green-400" />
            <h3 className="text-lg font-bold text-white">Quan Sát & Nhận Xét</h3>
          </div>
          <textarea
            className="w-full bg-slate-700/50 border border-slate-600 text-white px-3 py-2 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-500"
            rows={3}
            placeholder="Ghi lại những quan sát và nhận xét trong quá trình thí nghiệm..."
          />
        </div>
      </div>
    );
  }

  if (experimentPhase === 'analysis' && currentExperiment) {
    const experimentData_current = experimentData[currentExperiment.id] || [];
    const avgValue = experimentData_current.length > 0 
      ? experimentData_current.reduce((a, b) => a + b, 0) / experimentData_current.length 
      : 0;

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Phân Tích Kết Quả</h2>
          <h3 className="text-xl text-blue-400 mb-4">{currentExperiment.name}</h3>
        </div>

        {/* Data Analysis */}
        <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
          <div className="flex items-center space-x-2 mb-4">
            <Target className="w-6 h-6 text-purple-400" />
            <h3 className="text-lg font-bold text-white">Phân Tích Dữ Liệu</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-white mb-3">Dữ Liệu Thu Thập</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-slate-700/50 rounded">
                  <span className="text-gray-300">Số lần đo:</span>
                  <span className="text-white font-bold">{experimentData_current.length}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-slate-700/50 rounded">
                  <span className="text-gray-300">Giá trị trung bình:</span>
                  <span className="text-white font-bold">{avgValue.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-slate-700/50 rounded">
                  <span className="text-gray-300">Giá trị min:</span>
                  <span className="text-white font-bold">
                    {experimentData_current.length > 0 ? Math.min(...experimentData_current).toFixed(2) : 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between items-center p-2 bg-slate-700/50 rounded">
                  <span className="text-gray-300">Giá trị max:</span>
                  <span className="text-white font-bold">
                    {experimentData_current.length > 0 ? Math.max(...experimentData_current).toFixed(2) : 'N/A'}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-white mb-3">Đánh Giá Kết Quả</h4>
              <div className="space-y-3">
                <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <div className="text-green-400 font-medium mb-1">Kết Quả Mong Đợi</div>
                  <div className="text-sm text-gray-300">{currentExperiment.expectedResults}</div>
                </div>
                <div className="p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                  <div className="text-blue-400 font-medium mb-1">Độ Chính Xác</div>
                  <div className="text-sm text-gray-300">
                    {experimentData_current.length >= 3 ? 'Cao' : experimentData_current.length >= 1 ? 'Trung bình' : 'Thấp'} 
                    ({experimentData_current.length} lần đo)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Theory Comparison */}
        <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/30">
          <div className="flex items-center space-x-2 mb-4">
            <Atom className="w-6 h-6 text-cyan-400" />
            <h3 className="text-lg font-bold text-white">So Sánh Với Lý Thuyết</h3>
          </div>
          
          <div className="p-4 bg-slate-800/50 rounded-lg mb-4">
            <p className="text-gray-300">{currentExperiment.theory}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-white mb-2">Ứng Dụng Thực Tế</h4>
              <ul className="space-y-1">
                {currentExperiment.realWorldApplications.map((app, index) => (
                  <li key={index} className="text-gray-300 text-sm flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Sai Số & Cải Thiện</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• Sai số dụng cụ: ±2%</li>
                <li>• Sai số môi trường: ±1%</li>
                <li>• Sai số con người: ±3%</li>
                <li>• Đề xuất: Tăng số lần đo</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Complete Experiment */}
        <div className="text-center">
          <button
            onClick={completeExperiment}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-green-500/25"
          >
            Hoàn Thành Thí Nghiệm
          </button>
        </div>
      </div>
    );
  }

  return null;
}