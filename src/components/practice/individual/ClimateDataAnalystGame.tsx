'use client';

import React, { useState, useEffect } from 'react';
import { Trophy, BarChart3, Clock, Cloud, Zap, TrendingUp, Database, MapPin, AlertTriangle } from 'lucide-react';

interface GameProps {
  onComplete: (_: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface DataSource {
  id: string;
  name: string;
  type: 'satellite' | 'weather_station' | 'sensor_network' | 'research_database' | 'ocean_buoy';
  accuracy: number;
  coverage: number;
  cost: number;
  real_time: boolean;
  description: string;
}

interface AnalysisMethod {
  id: string;
  name: string;
  category: 'statistical' | 'machine_learning' | 'modeling' | 'visualization' | 'prediction';
  complexity: number;
  accuracy: number;
  processing_time: number;
  cost: number;
  description: string;
}

interface Research {
  id: string;
  name: string;
  region: string;
  time_frame: string;
  data_requirements: string[];
  methodology: string[];
  impact_level: number;
  urgency: number;
  difficulty: number;
  budget: number;
  description: string;
}

const DATA_SOURCES: DataSource[] = [
  {
    id: 'modis-satellite',
    name: 'MODIS Satellite Terra/Aqua',
    type: 'satellite',
    accuracy: 90,
    coverage: 100,
    cost: 80,
    real_time: false,
    description: 'Dữ liệu vệ tinh toàn cầu về thảm thực vật, nhiệt độ bề mặt',
  },
  {
    id: 'landsat-imagery',
    name: 'Landsat Archive Imagery',
    type: 'satellite',
    accuracy: 95,
    coverage: 85,
    cost: 60,
    real_time: false,
    description: 'Hình ảnh vệ tinh lịch sử từ 1972, theo dõi biến đổi land use',
  },
  {
    id: 'weather-stations',
    name: 'Global Weather Station Network',
    type: 'weather_station',
    accuracy: 85,
    coverage: 70,
    cost: 40,
    real_time: true,
    description: 'Mạng lưới trạm thời tiết toàn cầu, dữ liệu real-time',
  },
  {
    id: 'ocean-buoys',
    name: 'NOAA Ocean Buoys',
    type: 'ocean_buoy',
    accuracy: 88,
    coverage: 60,
    cost: 50,
    real_time: true,
    description: 'Phao đo nhiệt độ nước biển, mực nước, dòng chảy',
  },
  {
    id: 'iot-sensors',
    name: 'IoT Environmental Sensors',
    type: 'sensor_network',
    accuracy: 80,
    coverage: 45,
    cost: 30,
    real_time: true,
    description: 'Mạng cảm biến IoT: CO2, PM2.5, độ ẩm, nhiệt độ',
  },
  {
    id: 'climate-database',
    name: 'IPCC Climate Database',
    type: 'research_database',
    accuracy: 98,
    coverage: 90,
    cost: 70,
    real_time: false,
    description: 'Cơ sở dữ liệu khí hậu chuẩn từ IPCC và NASA',
  },
];

const ANALYSIS_METHODS: AnalysisMethod[] = [
  {
    id: 'time-series-analysis',
    name: 'Time Series Analysis (ARIMA)',
    category: 'statistical',
    complexity: 60,
    accuracy: 80,
    processing_time: 30,
    cost: 40,
    description: 'Phân tích chuỗi thời gian, dự báo xu hướng khí hậu',
  },
  {
    id: 'machine-learning-ensemble',
    name: 'ML Ensemble Methods',
    category: 'machine_learning',
    complexity: 85,
    accuracy: 92,
    processing_time: 80,
    cost: 90,
    description: 'Random Forest + XGBoost cho prediction và pattern recognition',
  },
  {
    id: 'climate-modeling',
    name: 'General Circulation Models (GCM)',
    category: 'modeling',
    complexity: 95,
    accuracy: 88,
    processing_time: 120,
    cost: 120,
    description: 'Mô hình toàn cầu phức tạp, mô phỏng hệ thống khí hậu',
  },
  {
    id: 'geospatial-analysis',
    name: 'GIS & Geospatial Analysis',
    category: 'visualization',
    complexity: 70,
    accuracy: 85,
    processing_time: 50,
    cost: 60,
    description: 'Phân tích không gian địa lý với QGIS, ArcGIS, Google Earth Engine',
  },
  {
    id: 'deep-learning-cnn',
    name: 'Deep Learning CNN',
    category: 'machine_learning',
    complexity: 90,
    accuracy: 94,
    processing_time: 100,
    cost: 100,
    description: 'Convolutional Neural Networks cho xử lý ảnh vệ tinh',
  },
  {
    id: 'statistical-regression',
    name: 'Multi-variable Regression',
    category: 'statistical',
    complexity: 40,
    accuracy: 75,
    processing_time: 20,
    cost: 25,
    description: 'Hồi quy đa biến, tìm mối quan hệ giữa các yếu tố khí hậu',
  },
  {
    id: 'ensemble-climate-models',
    name: 'Ensemble Climate Predictions',
    category: 'prediction',
    complexity: 100,
    accuracy: 90,
    processing_time: 150,
    cost: 140,
    description: 'Kết hợp nhiều mô hình khí hậu để dự báo chính xác hơn',
  },
];

const RESEARCH_PROJECTS: Research[] = [
  {
    id: 'vietnam-sea-level',
    name: 'Dự báo mực nước biển Việt Nam 2050',
    region: 'Vietnam Coastal Areas',
    time_frame: '1990-2050',
    data_requirements: ['satellite', 'ocean_buoy', 'research_database'],
    methodology: ['modeling', 'statistical', 'prediction'],
    impact_level: 95,
    urgency: 90,
    difficulty: 85,
    budget: 350,
    description: 'Dự báo mực nước biển dâng tác động đến 28 tỉnh ven biển Việt Nam',
  },
  {
    id: 'mekong-drought',
    name: 'Phân tích hạn hán lưu vực Mekong',
    region: 'Mekong Delta',
    time_frame: '2000-2025',
    data_requirements: ['satellite', 'weather_station', 'research_database'],
    methodology: ['machine_learning', 'visualization', 'statistical'],
    impact_level: 90,
    urgency: 85,
    difficulty: 75,
    budget: 280,
    description: 'Mô hình dự báo hạn hán và đề xuất giải pháp thích ứng',
  },
  {
    id: 'urban-heat-island',
    name: 'Urban Heat Island TP.HCM',
    region: 'Ho Chi Minh City',
    time_frame: '2010-2030',
    data_requirements: ['satellite', 'sensor_network', 'weather_station'],
    methodology: ['machine_learning', 'visualization', 'modeling'],
    impact_level: 80,
    urgency: 75,
    difficulty: 70,
    budget: 220,
    description: 'Nghiên cứu hiệu ứng đảo nhiệt đô thị và giải pháp giảm thiểu',
  },
  {
    id: 'forest-deforestation',
    name: 'Theo dõi phá rừng Amazon-Việt Nam',
    region: 'Amazon & Vietnam Forests',
    time_frame: '1990-2025',
    data_requirements: ['satellite', 'research_database'],
    methodology: ['machine_learning', 'visualization'],
    impact_level: 85,
    urgency: 80,
    difficulty: 60,
    budget: 180,
    description: 'So sánh tốc độ phá rừng và hiệu quả chính sách bảo vệ',
  },
  {
    id: 'extreme-weather-prediction',
    name: 'Dự báo thời tiết cực đoan',
    region: 'Southeast Asia',
    time_frame: '2005-2030',
    data_requirements: ['satellite', 'weather_station', 'ocean_buoy'],
    methodology: ['machine_learning', 'modeling', 'prediction'],
    impact_level: 100,
    urgency: 95,
    difficulty: 90,
    budget: 400,
    description: 'Mô hình dự báo bão, lũ lụt, hạn hán với độ chính xác cao',
  },
];

const ClimateDataAnalystGame: React.FC<GameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [gamePhase, setGamePhase] = useState<
    'briefing' | 'project-selection' | 'data-selection' | 'method-selection' | 'analysis' | 'results'
  >('briefing');
  const [selectedProject, setSelectedProject] = useState<Research | null>(null);
  const [selectedDataSources, setSelectedDataSources] = useState<DataSource[]>([]);
  const [selectedMethods, setSelectedMethods] = useState<AnalysisMethod[]>([]);
  const [budget] = useState(400);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [, setIsAnalyzing] = useState(false);

  // Analysis results
  const [dataQuality, setDataQuality] = useState(0);
  const [methodAccuracy, setMethodAccuracy] = useState(0);
  const [projectImpact, setProjectImpact] = useState(0);

  const totalCost =
    selectedDataSources.reduce((sum, ds) => sum + ds.cost, 0) + selectedMethods.reduce((sum, m) => sum + m.cost, 0);

  const canAfford = totalCost <= budget;

  const calculateAnalysisScore = () => {
    if (!selectedProject || selectedDataSources.length === 0 || selectedMethods.length === 0) {
      return { data: 0, method: 0, impact: 0 };
    }

    // Data quality score
    const coverageScore = selectedDataSources.reduce((sum, ds) => sum + ds.coverage, 0) / selectedDataSources.length;
    const accuracyScore = selectedDataSources.reduce((sum, ds) => sum + ds.accuracy, 0) / selectedDataSources.length;
    const realTimeBonus = selectedDataSources.some((ds) => ds.real_time) ? 10 : 0;
    const dataScore = Math.round(coverageScore * 0.4 + accuracyScore * 0.5 + realTimeBonus * 0.1);

    // Method effectiveness
    const methodAccuracy = selectedMethods.reduce((sum, m) => sum + m.accuracy, 0) / selectedMethods.length;
    const methodComplexity = selectedMethods.reduce((sum, m) => sum + m.complexity, 0) / selectedMethods.length;
    const methodScore = Math.round(methodAccuracy * 0.7 + (methodComplexity / 100) * 30 * 0.3);

    // Project impact (data-method fit)
    const requiredDataTypes = selectedProject.data_requirements;
    const availableDataTypes = selectedDataSources.map((ds) => ds.type);
    const dataFit =
      requiredDataTypes.filter((req) =>
        availableDataTypes.includes(
          req as 'satellite' | 'weather_station' | 'sensor_network' | 'research_database' | 'ocean_buoy',
        ),
      ).length / requiredDataTypes.length;

    const requiredMethods = selectedProject.methodology;
    const availableMethods = selectedMethods.map((m) => m.category);
    const methodFit =
      requiredMethods.filter((req) =>
        availableMethods.includes(
          req as 'statistical' | 'machine_learning' | 'modeling' | 'visualization' | 'prediction',
        ),
      ).length / requiredMethods.length;

    const impactScore = Math.round(selectedProject.impact_level * (dataFit * 0.5 + methodFit * 0.5));

    return {
      data: Math.min(100, dataScore),
      method: Math.min(100, methodScore),
      impact: Math.min(100, impactScore),
    };
  };

  const startAnalysis = () => {
    if (!selectedProject || selectedDataSources.length === 0 || selectedMethods.length === 0 || !canAfford) {
      onComplete(false, 0);
      return;
    }

    setGamePhase('analysis');
    setIsAnalyzing(true);

    const analysisResults = calculateAnalysisScore();
    setDataQuality(analysisResults.data);
    setMethodAccuracy(analysisResults.method);
    setProjectImpact(analysisResults.impact);

    const totalComplexity = selectedMethods.reduce((sum, m) => sum + m.processing_time, 0);

    const interval = setInterval(() => {
      setAnalysisProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          setGamePhase('results');
          return 100;
        }
        return prev + Math.max(1, (100 / totalComplexity) * 5);
      });
    }, 200);
  };

  const getOverallScore = () => {
    const analysisResults = calculateAnalysisScore();
    const costEfficiency = Math.round(((budget - totalCost) / budget) * 100);
    const urgencyBonus = selectedProject ? selectedProject.urgency / 10 : 0;

    return Math.round(
      analysisResults.data * 0.3 +
        analysisResults.method * 0.3 +
        analysisResults.impact * 0.25 +
        costEfficiency * 0.1 +
        urgencyBonus * 0.05,
    );
  };

  useEffect(() => {
    if (timeLeft <= 0 && gamePhase !== 'results') {
      onComplete(false, 0);
    }
  }, [timeLeft, gamePhase, onComplete]);

  if (gamePhase === 'briefing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-slate-900 to-blue-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-green-500/20">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <BarChart3 className="w-16 h-16 text-green-400" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Climate Data Analyst</h1>
            <p className="text-xl text-gray-300 mb-6">
              Phân tích dữ liệu khí hậu để giải quyết các thách thức môi trường!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Database className="w-6 h-6 mr-2 text-green-400" />
                Quy trình phân tích
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Chọn dự án nghiên cứu khí hậu</li>
                <li>• Lựa chọn nguồn dữ liệu phù hợp</li>
                <li>• Áp dụng phương pháp phân tích</li>
                <li>• Quản lý ngân sách 400 triệu VNĐ</li>
                <li>• Đảm bảo độ chính xác và tác động</li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-blue-400" />
                Tiêu chí đánh giá
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>
                  • <span className="text-green-400">Chất lượng dữ liệu (30%)</span> - Độ bao phủ và chính xác
                </li>
                <li>
                  • <span className="text-blue-400">Phương pháp (30%)</span> - Độ chính xác và phù hợp
                </li>
                <li>
                  • <span className="text-yellow-400">Tác động (25%)</span> - Giá trị khoa học và xã hội
                </li>
                <li>
                  • <span className="text-purple-400">Hiệu quả (15%)</span> - Chi phí và tính cấp thiết
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setGamePhase('project-selection')}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105"
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
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-slate-900 to-blue-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn dự án nghiên cứu khí hậu</h2>
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
                    isSelected ? 'border-green-500 bg-green-500/20' : 'border-white/20 hover:border-green-400/50'
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Cloud className="w-8 h-8 text-green-400" />
                    <div className="text-right">
                      <div className="text-yellow-400 font-bold text-sm">{project.budget}M VNĐ</div>
                      <div className="text-red-400 font-bold text-xs">Khó: {project.difficulty}%</div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Vùng:</span>
                      <span className="text-white text-xs">{project.region}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Thời gian:</span>
                      <span className="text-white text-xs">{project.time_frame}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Tác động:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${project.impact_level}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Cấp thiết:</span>
                      <div className="bg-gray-700 rounded-full h-2 w-16">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: `${project.urgency}%` }}></div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <span className="text-gray-400 text-xs">Cần dữ liệu:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {project.data_requirements.slice(0, 2).map((req) => (
                          <span key={req} className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">
                            {req}
                          </span>
                        ))}
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

          <div className="text-center">
            <button
              onClick={() => setGamePhase('data-selection')}
              disabled={!selectedProject}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Tiếp tục chọn dữ liệu
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'data-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-slate-900 to-blue-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn nguồn dữ liệu (tối đa 4)</h2>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <span>Dự án: {selectedProject?.name}</span>
              <span>Đã chọn: {selectedDataSources.length}/4</span>
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {DATA_SOURCES.map((source) => {
              const isSelected = selectedDataSources.some((ds) => ds.id === source.id);
              const canSelect =
                selectedDataSources.length < 4 && totalCost + source.cost - (isSelected ? source.cost : 0) <= budget;

              return (
                <div
                  key={source.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-blue-500 bg-blue-500/20'
                      : !canSelect && !isSelected
                        ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                        : 'border-white/20 hover:border-blue-400/50'
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedDataSources((prev) => prev.filter((ds) => ds.id !== source.id));
                    } else if (canSelect) {
                      setSelectedDataSources((prev) => [...prev, source]);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      {source.type === 'satellite' && <MapPin className="w-6 h-6 text-blue-400" />}
                      {source.type === 'weather_station' && <Cloud className="w-6 h-6 text-gray-400" />}
                      {source.type === 'sensor_network' && <Zap className="w-6 h-6 text-yellow-400" />}
                      {source.type === 'research_database' && <Database className="w-6 h-6 text-purple-400" />}
                      {source.type === 'ocean_buoy' && <BarChart3 className="w-6 h-6 text-blue-600" />}
                    </div>
                    <div className="text-right">
                      <span className="text-yellow-400 font-bold text-sm">{source.cost}M</span>
                      {source.real_time && <div className="text-green-400 text-xs">Real-time</div>}
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2">{source.name}</h3>
                  <p className="text-gray-300 text-xs mb-3">{source.description}</p>

                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Độ chính xác:</span>
                      <div className="bg-gray-700 rounded-full h-1 w-12">
                        <div className="bg-green-500 h-1 rounded-full" style={{ width: `${source.accuracy}%` }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Bao phủ:</span>
                      <div className="bg-gray-700 rounded-full h-1 w-12">
                        <div className="bg-blue-500 h-1 rounded-full" style={{ width: `${source.coverage}%` }}></div>
                      </div>
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
              onClick={() => setGamePhase('method-selection')}
              disabled={selectedDataSources.length === 0}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Tiếp tục chọn phương pháp
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'method-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-slate-900 to-blue-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Chọn phương pháp phân tích (tối đa 3)</h2>
            <div className="flex justify-center items-center gap-4 text-gray-300">
              <span>
                Ngân sách còn lại: {budget - selectedDataSources.reduce((sum, ds) => sum + ds.cost, 0)} triệu VNĐ
              </span>
              <span>Đã chọn: {selectedMethods.length}/3</span>
            </div>
            <div className="text-right text-yellow-400">
              <Clock className="w-5 h-5 inline mr-1" />
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {ANALYSIS_METHODS.map((method) => {
              const isSelected = selectedMethods.some((m) => m.id === method.id);
              const currentCostWithoutMethod =
                selectedDataSources.reduce((sum, ds) => sum + ds.cost, 0) +
                selectedMethods.filter((m) => m.id !== method.id).reduce((sum, m) => sum + m.cost, 0);
              const canSelect = selectedMethods.length < 3 && currentCostWithoutMethod + method.cost <= budget;

              return (
                <div
                  key={method.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? 'border-purple-500 bg-purple-500/20'
                      : !canSelect && !isSelected
                        ? 'border-gray-600 bg-gray-600/20 cursor-not-allowed opacity-50'
                        : 'border-white/20 hover:border-purple-400/50'
                  }`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedMethods((prev) => prev.filter((m) => m.id !== method.id));
                    } else if (canSelect) {
                      setSelectedMethods((prev) => [...prev, method]);
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <TrendingUp className="w-6 h-6 text-purple-400" />
                    <div className="text-right">
                      <span className="text-yellow-400 font-bold text-sm">{method.cost}M</span>
                      <div className="text-gray-400 text-xs">{method.processing_time}h</div>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2">{method.name}</h3>
                  <p className="text-gray-300 text-xs mb-3">{method.description}</p>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-400">Độ chính xác:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div className="bg-green-500 h-1 rounded-full" style={{ width: `${method.accuracy}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Độ phức tạp:</span>
                      <div className="bg-gray-700 rounded-full h-1 mt-1">
                        <div
                          className="bg-orange-500 h-1 rounded-full"
                          style={{ width: `${method.complexity}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 text-center">
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        method.category === 'statistical'
                          ? 'bg-blue-500/20 text-blue-400'
                          : method.category === 'machine_learning'
                            ? 'bg-green-500/20 text-green-400'
                            : method.category === 'modeling'
                              ? 'bg-purple-500/20 text-purple-400'
                              : method.category === 'visualization'
                                ? 'bg-yellow-500/20 text-yellow-400'
                                : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {method.category}
                    </span>
                  </div>

                  {isSelected && (
                    <div className="mt-3 text-center">
                      <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs">Đã chọn</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-white/10 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Tóm tắt nghiên cứu</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-2">Dự án</h4>
                <p className="text-gray-300 text-sm">{selectedProject?.name}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Dữ liệu ({selectedDataSources.length})</h4>
                {selectedDataSources.map((source) => (
                  <p key={source.id} className="text-gray-300 text-sm">
                    {source.name.split(' ')[0]}
                  </p>
                ))}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Phương pháp ({selectedMethods.length})</h4>
                {selectedMethods.map((method) => (
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
              onClick={startAnalysis}
              disabled={!canAfford || selectedMethods.length === 0}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Bắt đầu phân tích
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'analysis') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-slate-900 to-blue-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-green-500/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Đang phân tích dữ liệu khí hậu...</h2>
            <p className="text-gray-300">Processing data, modeling & generating insights</p>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <div className="flex justify-between text-white mb-2">
                <span>Tiến độ phân tích</span>
                <span>{Math.round(analysisProgress)}%</span>
              </div>
              <div className="bg-gray-700 rounded-full h-6">
                <div
                  className="bg-gradient-to-r from-green-500 to-blue-500 h-6 rounded-full transition-all duration-300"
                  style={{ width: `${analysisProgress}%` }}
                ></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-400">Data Quality</span>
                  <span className="text-white font-bold">{dataQuality}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${dataQuality}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-purple-400">Method Accuracy</span>
                  <span className="text-white font-bold">{methodAccuracy}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-purple-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${methodAccuracy}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-400">Project Impact</span>
                  <span className="text-white font-bold">{projectImpact}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${projectImpact}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center space-x-4 text-gray-300">
              <BarChart3 className="w-6 h-6 text-green-400 animate-pulse" />
              <span>
                Đang xử lý {selectedDataSources.length} nguồn dữ liệu với {selectedMethods.length} phương pháp...
              </span>
              <AlertTriangle className="w-6 h-6 text-yellow-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'results') {
    const analysisResults = calculateAnalysisScore();
    const analysisScore = getOverallScore();

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-slate-900 to-blue-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full border border-green-500/20">
          <div className="text-center mb-8">
            <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">Phân tích hoàn thành!</h2>
            <p className="text-2xl text-gray-300 mb-2">{selectedProject?.name}</p>
            <div className="text-6xl font-bold text-white mb-4">{analysisScore} điểm</div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Kết quả phân tích</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-blue-400">Chất lượng dữ liệu:</span>
                  <span className="text-white font-bold">{analysisResults.data}/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-400">Độ chính xác phương pháp:</span>
                  <span className="text-white font-bold">{analysisResults.method}/100</span>
                </div>
                <div className="flex justify-between border-t border-white/20 pt-2">
                  <span className="text-green-400">Tác động dự án:</span>
                  <span className="text-white font-bold">{analysisResults.impact}/100</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Đánh giá</h3>
              <div className="space-y-2 text-gray-300">
                {analysisScore >= 90 && <p>🏆 Nghiên cứu xuất sắc! Có thể thay đổi chính sách khí hậu toàn cầu.</p>}
                {analysisScore >= 80 && analysisScore < 90 && (
                  <p>🌟 Nghiên cứu rất tốt! Kết quả có giá trị khoa học cao.</p>
                )}
                {analysisScore >= 70 && analysisScore < 80 && (
                  <p>✅ Nghiên cứu khá ổn! Cần cải thiện một số phương pháp.</p>
                )}
                {analysisScore >= 60 && analysisScore < 70 && (
                  <p>⚠️ Nghiên cứu cơ bản! Cần thêm dữ liệu và phương pháp.</p>
                )}
                {analysisScore < 60 && <p>❌ Nghiên cứu cần cải thiện nhiều để đạt chuẩn khoa học.</p>}

                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-sm">
                    <strong>Lưu ý:</strong> Nghiên cứu khí hậu cần cân bằng giữa chất lượng dữ liệu, độ chính xác phương
                    pháp và tác động thực tế.
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
              onClick={() => onComplete(true, analysisScore)}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
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

export default ClimateDataAnalystGame;
