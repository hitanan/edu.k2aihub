'use client';

import React, { useState, useEffect } from 'react';
import { Trophy, Brain, Clock, Cpu, Database, Zap, Target, Beaker, Settings } from 'lucide-react';

interface GameProps {
  onComplete: (_: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface ResearchProject {
  id: string;
  name: string;
  field: 'computer_vision' | 'nlp' | 'robotics' | 'reinforcement_learning' | 'generative_ai' | 'medical_ai';
  complexity: number;
  potential_impact: number;
  timeline: number;
  funding_needed: number;
  ethical_considerations: number;
  description: string;
}

interface AIResource {
  id: string;
  name: string;
  type: 'computing' | 'data' | 'model' | 'tools' | 'human';
  performance: number;
  cost: number;
  availability: number;
  scalability: number;
  description: string;
}

interface Methodology {
  id: string;
  name: string;
  approach: 'supervised' | 'unsupervised' | 'reinforcement' | 'transfer' | 'federated' | 'hybrid';
  accuracy_potential: number;
  computational_cost: number;
  data_requirements: number;
  implementation_difficulty: number;
  cost: number;
  description: string;
}

const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    id: 'autonomous-vehicles',
    name: 'Xe tự hành thông minh cho Việt Nam',
    field: 'computer_vision',
    complexity: 95,
    potential_impact: 90,
    timeline: 36,
    funding_needed: 400,
    ethical_considerations: 85,
    description: 'Phát triển hệ thống AI nhận diện giao thông phức tạp của Việt Nam',
  },
  {
    id: 'vietnamese-llm',
    name: 'Large Language Model tiếng Việt',
    field: 'nlp',
    complexity: 90,
    potential_impact: 95,
    timeline: 24,
    funding_needed: 350,
    ethical_considerations: 80,
    description: 'Xây dựng mô hình ngôn ngữ lớn chuyên biệt cho tiếng Việt',
  },
  {
    id: 'medical-diagnosis-ai',
    name: 'AI chẩn đoán y tế từ xa',
    field: 'medical_ai',
    complexity: 85,
    potential_impact: 100,
    timeline: 18,
    funding_needed: 280,
    ethical_considerations: 95,
    description: 'Hệ thống AI hỗ trợ chẩn đoán bệnh qua hình ảnh y tế',
  },
  {
    id: 'warehouse-robots',
    name: 'Robot kho hàng thông minh',
    field: 'robotics',
    complexity: 75,
    potential_impact: 80,
    timeline: 15,
    funding_needed: 220,
    ethical_considerations: 60,
    description: 'Robot tự động hóa warehouse với AI navigation và sorting',
  },
  {
    id: 'educational-ai-tutor',
    name: 'AI Gia sư cá nhân hóa',
    field: 'generative_ai',
    complexity: 70,
    potential_impact: 85,
    timeline: 12,
    funding_needed: 180,
    ethical_considerations: 70,
    description: 'Hệ thống AI tutor thích ứng với phong cách học của từng học sinh',
  },
  {
    id: 'game-ai-opponent',
    name: 'AI đối thủ game thông minh',
    field: 'reinforcement_learning',
    complexity: 80,
    potential_impact: 70,
    timeline: 10,
    funding_needed: 150,
    ethical_considerations: 50,
    description: 'AI agent học hỏi và thích ứng với gameplay của người chơi',
  },
];

const AI_RESOURCES: AIResource[] = [
  {
    id: 'nvidia-a100-cluster',
    name: 'NVIDIA A100 GPU Cluster',
    type: 'computing',
    performance: 95,
    cost: 120,
    availability: 70,
    scalability: 90,
    description: 'Cluster GPU hàng đầu cho deep learning và training model lớn',
  },
  {
    id: 'google-tpu-pods',
    name: 'Google TPU v4 Pods',
    type: 'computing',
    performance: 100,
    cost: 150,
    availability: 60,
    scalability: 95,
    description: 'Tensor Processing Units chuyên dụng cho AI workloads',
  },
  {
    id: 'imagenet-dataset',
    name: 'ImageNet + Custom Datasets',
    type: 'data',
    performance: 85,
    cost: 40,
    availability: 90,
    scalability: 80,
    description: 'Bộ dataset chuẩn kết hợp với dữ liệu tùy chỉnh',
  },
  {
    id: 'vietnamese-corpus',
    name: 'Vietnamese Language Corpus',
    type: 'data',
    performance: 90,
    cost: 60,
    availability: 75,
    scalability: 85,
    description: 'Corpus tiếng Việt lớn với 10 tỷ tokens đã được làm sạch',
  },
  {
    id: 'pretrained-models',
    name: 'Pre-trained Foundation Models',
    type: 'model',
    performance: 80,
    cost: 30,
    availability: 95,
    scalability: 70,
    description: 'GPT-4, BERT, ResNet và các mô hình nền tảng',
  },
  {
    id: 'ai-research-team',
    name: 'Senior AI Research Team',
    type: 'human',
    performance: 90,
    cost: 100,
    availability: 80,
    scalability: 60,
    description: 'Team 5 PhD AI researchers với kinh nghiệm 10+ năm',
  },
  {
    id: 'mlops-platform',
    name: 'MLOps Development Platform',
    type: 'tools',
    performance: 85,
    cost: 50,
    availability: 85,
    scalability: 95,
    description: 'Platform tích hợp MLflow, Kubernetes, monitoring và deployment',
  },
];

const METHODOLOGIES: Methodology[] = [
  {
    id: 'transformer-architecture',
    name: 'Transformer Architecture + Attention',
    approach: 'supervised',
    accuracy_potential: 95,
    computational_cost: 90,
    data_requirements: 85,
    implementation_difficulty: 80,
    cost: 80,
    description: 'State-of-the-art cho NLP và Computer Vision tasks',
  },
  {
    id: 'reinforcement-learning',
    name: 'Deep Reinforcement Learning',
    approach: 'reinforcement',
    accuracy_potential: 85,
    computational_cost: 85,
    data_requirements: 60,
    implementation_difficulty: 90,
    cost: 70,
    description: 'PPO, SAC algorithms cho autonomous systems',
  },
  {
    id: 'federated-learning',
    name: 'Federated Learning Framework',
    approach: 'federated',
    accuracy_potential: 80,
    computational_cost: 70,
    data_requirements: 40,
    implementation_difficulty: 85,
    cost: 60,
    description: 'Training phân tán bảo vệ privacy với FedAvg, FedProx',
  },
  {
    id: 'transfer-learning',
    name: 'Transfer Learning + Fine-tuning',
    approach: 'transfer',
    accuracy_potential: 85,
    computational_cost: 50,
    data_requirements: 50,
    implementation_difficulty: 40,
    cost: 30,
    description: 'Tận dụng pre-trained models cho domain-specific tasks',
  },
  {
    id: 'unsupervised-clustering',
    name: 'Unsupervised Learning + Clustering',
    approach: 'unsupervised',
    accuracy_potential: 70,
    computational_cost: 60,
    data_requirements: 70,
    implementation_difficulty: 50,
    cost: 35,
    description: 'K-means, DBSCAN, autoencoders cho pattern discovery',
  },
  {
    id: 'ensemble-methods',
    name: 'Ensemble Methods + Model Fusion',
    approach: 'hybrid',
    accuracy_potential: 90,
    computational_cost: 80,
    data_requirements: 75,
    implementation_difficulty: 60,
    cost: 55,
    description: 'Kết hợp multiple models để tăng accuracy và robustness',
  },
];

const AIResearchLabGame: React.FC<GameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [gamePhase, setGamePhase] = useState<
    'briefing' | 'project-selection' | 'resource-selection' | 'methodology-selection' | 'research' | 'results'
  >('briefing');
  const [selectedProject, setSelectedProject] = useState<ResearchProject | null>(null);
  const [selectedResources, setSelectedResources] = useState<AIResource[]>([]);
  const [selectedMethodologies, setSelectedMethodologies] = useState<Methodology[]>([]);
  const [budget] = useState(500);
  const [researchProgress, setResearchProgress] = useState(0);
  const [, setIsResearching] = useState(false);

  // Research metrics
  const [technicalAchievement, setTechnicalAchievement] = useState(0);
  const [practicalImpact, setPracticalImpact] = useState(0);
  const [ethicalCompliance, setEthicalCompliance] = useState(0);

  const totalCost =
    selectedResources.reduce((sum, r) => sum + r.cost, 0) + selectedMethodologies.reduce((sum, m) => sum + m.cost, 0);

  const canAfford = totalCost <= budget;

  const calculateResearchScore = () => {
    if (!selectedProject || selectedResources.length === 0 || selectedMethodologies.length === 0) {
      return { technical: 0, impact: 0, ethical: 0 };
    }

    // Technical achievement score
    const resourcePerformance = selectedResources.reduce((sum, r) => sum + r.performance, 0) / selectedResources.length;
    const methodologyAccuracy =
      selectedMethodologies.reduce((sum, m) => sum + m.accuracy_potential, 0) / selectedMethodologies.length;
    const projectComplexityBonus = (selectedProject.complexity / 100) * 20;
    const technicalScore = Math.round(
      resourcePerformance * 0.4 + methodologyAccuracy * 0.4 + projectComplexityBonus * 0.2,
    );

    // Practical impact
    const resourceScalability = selectedResources.reduce((sum, r) => sum + r.scalability, 0) / selectedResources.length;
    const implementationFeasibility =
      100 -
      selectedMethodologies.reduce((sum, m) => sum + m.implementation_difficulty, 0) / selectedMethodologies.length;
    const projectImpactPotential = selectedProject.potential_impact;
    const impactScore = Math.round(
      resourceScalability * 0.3 + implementationFeasibility * 0.3 + projectImpactPotential * 0.4,
    );

    // Ethical compliance
    const ethicalConsideration = selectedProject.ethical_considerations;
    const dataPrivacyBonus = selectedMethodologies.some((m) => m.approach === 'federated') ? 20 : 0;
    const humanResourceBonus = selectedResources.some((r) => r.type === 'human') ? 15 : 0;
    const ethicalScore = Math.round(Math.min(100, ethicalConsideration + dataPrivacyBonus + humanResourceBonus));

    return {
      technical: Math.min(100, technicalScore),
      impact: Math.min(100, impactScore),
      ethical: Math.min(100, ethicalScore),
    };
  };

  const startResearch = () => {
    if (!selectedProject || selectedResources.length === 0 || selectedMethodologies.length === 0 || !canAfford) {
      onComplete(false, 0);
      return;
    }

    setGamePhase('research');
    setIsResearching(true);

    const researchResults = calculateResearchScore();
    setTechnicalAchievement(researchResults.technical);
    setPracticalImpact(researchResults.impact);
    setEthicalCompliance(researchResults.ethical);

    const totalComplexity =
      selectedProject.complexity + selectedMethodologies.reduce((sum, m) => sum + m.implementation_difficulty, 0);

    const interval = setInterval(() => {
      setResearchProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsResearching(false);
          setGamePhase('results');
          return 100;
        }
        return prev + Math.max(1, (100 / totalComplexity) * 3);
      });
    }, 250);
  };

  const getOverallScore = () => {
    const researchResults = calculateResearchScore();
    const costEfficiency = Math.round(((budget - totalCost) / budget) * 100);
    const timelineBonus = selectedProject ? Math.max(0, ((36 - selectedProject.timeline) / 36) * 20) : 0;

    return Math.round(
      researchResults.technical * 0.35 +
        researchResults.impact * 0.35 +
        researchResults.ethical * 0.2 +
        costEfficiency * 0.05 +
        timelineBonus * 0.05,
    );
  };

  useEffect(() => {
    if (timeLeft <= 0 && gamePhase !== 'results') {
      onComplete(false, 0);
    }
  }, [timeLeft, gamePhase, onComplete]);

  if (gamePhase === 'briefing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-purple-500/20">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Brain className="w-16 h-16 text-purple-400" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">AI Research Lab</h1>
            <p className="text-xl text-gray-300 mb-6">
              Dẫn dắt phòng lab AI tiên tiến để tạo ra breakthrough công nghệ!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Target className="w-6 h-6 mr-2 text-purple-400" />
                Mục tiêu nghiên cứu
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Chọn dự án AI có tác động cao</li>
                <li>• Phân bổ tài nguyên tính toán hiệu quả</li>
                <li>• Áp dụng phương pháp AI phù hợp</li>
                <li>• Quản lý ngân sách 500 triệu VNĐ</li>
                <li>• Đảm bảo tính đạo đức và thực tiễn</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Beaker className="w-6 h-6 mr-2 text-blue-400" />
                Tiêu chí đánh giá
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>
                  • <span className="text-purple-400">Thành tựu kỹ thuật (35%)</span> - Độ khó và chất lượng
                </li>
                <li>
                  • <span className="text-blue-400">Tác động thực tiễn (35%)</span> - Ứng dụng trong đời sống
                </li>
                <li>
                  • <span className="text-green-400">Tuân thủ đạo đức (20%)</span> - AI Ethics và Privacy
                </li>
                <li>
                  • <span className="text-yellow-400">Hiệu quả (10%)</span> - Chi phí và timeline
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('project-selection')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Bắt đầu nghiên cứu
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'project-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn dự án AI nghiên cứu</h2>
            <p className="text-gray-300">Ngân sách: {budget} triệu VNĐ</p>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {RESEARCH_PROJECTS.map((project) => {
              const isSelected = selectedProject?.id === project.id;

              return (
                <div
                  key={project.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected ? 'border-purple-500 bg-purple-500/20' : 'border-white/20 hover:border-purple-400/50'
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Brain className="w-8 h-8 text-purple-400" />
                    <div className="text-right">
                      <div className="text-yellow-400 font-bold text-sm">{project.funding_needed}M VNĐ</div>
                      <div className="text-blue-400 font-bold text-xs">{project.timeline} tháng</div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Lĩnh vực:</span>
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          project.field === 'computer_vision'
                            ? 'bg-blue-500/20 text-blue-400'
                            : project.field === 'nlp'
                              ? 'bg-green-500/20 text-green-400'
                              : project.field === 'robotics'
                                ? 'bg-red-500/20 text-red-400'
                                : project.field === 'reinforcement_learning'
                                  ? 'bg-yellow-500/20 text-yellow-400'
                                  : project.field === 'generative_ai'
                                    ? 'bg-purple-500/20 text-purple-400'
                                    : 'bg-pink-500/20 text-pink-400'
                        }`}
                      >
                        {project.field}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Độ phức tạp:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: `${project.complexity}%` }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Tác động:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${project.potential_impact}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Đạo đức:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div
                          className="bg-purple-500 h-2 rounded-full"
                          style={{ width: `${project.ethical_considerations}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="mt-4 text-center">
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">Đã chọn</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('resource-selection')}
              disabled={!selectedProject}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Tiếp tục chọn tài nguyên
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'resource-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn tài nguyên AI (tối đa 4)</h2>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <span>Dự án: {selectedProject?.name}</span>
              <span>Đã chọn: {selectedResources.length}/4</span>
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {AI_RESOURCES.map((resource) => {
              const isSelected = selectedResources.some((r) => r.id === resource.id);
              const canSelect =
                selectedResources.length < 4 && totalCost + resource.cost - (isSelected ? resource.cost : 0) <= budget;

              return (
                <div
                  key={resource.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-blue-500 bg-blue-500/20'
                      : !canSelect && !isSelected
                        ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                        : 'border-white/20 hover:border-blue-400/50'
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedResources((prev) => prev.filter((r) => r.id !== resource.id));
                    } else if (canSelect) {
                      setSelectedResources((prev) => [...prev, resource]);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      {resource.type === 'computing' && <Cpu className="w-6 h-6 text-red-400" />}
                      {resource.type === 'data' && <Database className="w-6 h-6 text-blue-400" />}
                      {resource.type === 'model' && <Brain className="w-6 h-6 text-purple-400" />}
                      {resource.type === 'tools' && <Settings className="w-6 h-6 text-green-400" />}
                      {resource.type === 'human' && <Target className="w-6 h-6 text-yellow-400" />}
                    </div>
                    <span className="text-yellow-400 font-bold text-sm">{resource.cost}M</span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2">{resource.name}</h3>
                  <p className="text-gray-300 text-xs mb-3">{resource.description}</p>

                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div>
                      <span className="text-gray-400">Performance:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div
                          className="bg-green-500 h-1 rounded-full"
                          style={{ width: `${resource.performance}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Availability:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div
                          className="bg-blue-500 h-1 rounded-full"
                          style={{ width: `${resource.availability}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Scalability:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div
                          className="bg-purple-500 h-1 rounded-full"
                          style={{ width: `${resource.scalability}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <span
                        className={`text-xs px-1 py-0.5 rounded ${
                          resource.type === 'computing'
                            ? 'bg-red-500/20 text-red-400'
                            : resource.type === 'data'
                              ? 'bg-blue-500/20 text-blue-400'
                              : resource.type === 'model'
                                ? 'bg-purple-500/20 text-purple-400'
                                : resource.type === 'tools'
                                  ? 'bg-green-500/20 text-green-400'
                                  : 'bg-yellow-500/20 text-yellow-400'
                        }`}
                      >
                        {resource.type}
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
              onClick={() => setGamePhase('methodology-selection')}
              disabled={selectedResources.length === 0}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Tiếp tục chọn phương pháp
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'methodology-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn phương pháp AI (tối đa 3)</h2>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <span>Ngân sách còn lại: {budget - selectedResources.reduce((sum, r) => sum + r.cost, 0)} triệu VNĐ</span>
              <span>Đã chọn: {selectedMethodologies.length}/3</span>
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {METHODOLOGIES.map((method) => {
              const isSelected = selectedMethodologies.some((m) => m.id === method.id);
              const currentCostWithoutMethod =
                selectedResources.reduce((sum, r) => sum + r.cost, 0) +
                selectedMethodologies.filter((m) => m.id !== method.id).reduce((sum, m) => sum + m.cost, 0);
              const canSelect = selectedMethodologies.length < 3 && currentCostWithoutMethod + method.cost <= budget;

              return (
                <div
                  key={method.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-green-500 bg-green-500/20'
                      : !canSelect && !isSelected
                        ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                        : 'border-white/20 hover:border-green-400/50'
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedMethodologies((prev) => prev.filter((m) => m.id !== method.id));
                    } else if (canSelect) {
                      setSelectedMethodologies((prev) => [...prev, method]);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <Zap className="w-6 h-6 text-green-400" />
                    <span className="text-yellow-400 font-bold text-sm">{method.cost}M</span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2">{method.name}</h3>
                  <p className="text-gray-300 text-xs mb-3">{method.description}</p>

                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div>
                      <span className="text-gray-400">Accuracy:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div
                          className="bg-green-500 h-1 rounded-full"
                          style={{ width: `${method.accuracy_potential}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Compute Cost:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div
                          className="bg-red-500 h-1 rounded-full"
                          style={{ width: `${method.computational_cost}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Data Need:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div
                          className="bg-blue-500 h-1 rounded-full"
                          style={{ width: `${method.data_requirements}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Difficulty:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div
                          className="bg-orange-500 h-1 rounded-full"
                          style={{ width: `${method.implementation_difficulty}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 text-center">
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        method.approach === 'supervised'
                          ? 'bg-blue-500/20 text-blue-400'
                          : method.approach === 'unsupervised'
                            ? 'bg-green-500/20 text-green-400'
                            : method.approach === 'reinforcement'
                              ? 'bg-red-500/20 text-red-400'
                              : method.approach === 'transfer'
                                ? 'bg-purple-500/20 text-purple-400'
                                : method.approach === 'federated'
                                  ? 'bg-yellow-500/20 text-yellow-400'
                                  : 'bg-pink-500/20 text-pink-400'
                      }`}
                    >
                      {method.approach}
                    </span>
                  </div>

                  {isSelected && (
                    <div className="mt-3 text-center">
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">Đã chọn</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-white/10 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Tóm tắt lab setup</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Dự án</h4>
                <p className="text-gray-300 text-sm">{selectedProject?.name}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Tài nguyên ({selectedResources.length})</h4>
                {selectedResources.map((resource) => (
                  <p key={resource.id} className="text-gray-300 text-sm">
                    {resource.name.split(' ')[0]}
                  </p>
                ))}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-2">
                  Phương pháp ({selectedMethodologies.length})
                </h4>
                {selectedMethodologies.map((method) => (
                  <p key={method.id} className="text-gray-300 text-sm">
                    {method.name.split(' ')[0]}
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
              onClick={startResearch}
              disabled={!canAfford || selectedMethodologies.length === 0}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Bắt đầu nghiên cứu
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'research') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-purple-500/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Đang nghiên cứu AI...</h2>
            <p className="text-gray-300">Training models, testing và optimization</p>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <div className="flex justify-between text-white mb-2">
                <span>Tiến độ nghiên cứu</span>
                <span>{Math.round(researchProgress)}%</span>
              </div>
              <div className="bg-gray-700 rounded-full h-6">
                <div
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-6 rounded-full transition-all duration-300"
                  style={{ width: `${researchProgress}%` }}
                ></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-purple-400">Technical Achievement</span>
                  <span className="text-white font-bold">{technicalAchievement}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-purple-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${technicalAchievement}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-400">Practical Impact</span>
                  <span className="text-white font-bold">{practicalImpact}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${practicalImpact}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-400">Ethical Compliance</span>
                  <span className="text-white font-bold">{ethicalCompliance}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${ethicalCompliance}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center space-x-4 text-gray-300">
              <Brain className="w-6 h-6 text-purple-400 animate-pulse" />
              <span>
                Đang training với {selectedResources.length} resources và {selectedMethodologies.length}{' '}
                methodologies...
              </span>
              <Cpu className="w-6 h-6 text-blue-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'results') {
    const researchResults = calculateResearchScore();
    const researchScore = getOverallScore();

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-purple-500/20">
          <div className="text-center mb-8">
            <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">Nghiên cứu hoàn thành!</h2>
            <p className="text-2xl text-gray-300 mb-2">{selectedProject?.name}</p>
            <div className="text-6xl font-bold text-white mb-4">{researchScore} điểm</div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Kết quả nghiên cứu</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-purple-400">Thành tựu kỹ thuật:</span>
                  <span className="text-white font-bold">{researchResults.technical}/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-400">Tác động thực tiễn:</span>
                  <span className="text-white font-bold">{researchResults.impact}/100</span>
                </div>
                <div className="flex justify-between border-t border-white/20 pt-2">
                  <span className="text-green-400">Tuân thủ đạo đức:</span>
                  <span className="text-white font-bold">{researchResults.ethical}/100</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Đánh giá</h3>
              <div className="space-y-2 text-gray-300">
                {researchScore >= 90 && <p>🏆 Breakthrough nghiên cứu! Có thể thay đổi ngành AI toàn cầu.</p>}
                {researchScore >= 80 && researchScore < 90 && (
                  <p>🌟 Nghiên cứu xuất sắc! Kết quả có giá trị khoa học cao.</p>
                )}
                {researchScore >= 70 && researchScore < 80 && <p>✅ Nghiên cứu tốt! Cần cải thiện một số aspect.</p>}
                {researchScore >= 60 && researchScore < 70 && (
                  <p>⚠️ Nghiên cứu cơ bản! Cần thêm resources và methods.</p>
                )}
                {researchScore < 60 && <p>❌ Nghiên cứu cần cải thiện nhiều để đạt chuẩn publication.</p>}

                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-sm">
                    <strong>Lưu ý:</strong> Nghiên cứu AI cần cân bằng giữa innovation, practical impact và AI ethics
                    compliance.
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
              Nghiên cứu lại
            </button>
            <button
              onClick={() => onComplete(true, researchScore)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
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

export default AIResearchLabGame;
