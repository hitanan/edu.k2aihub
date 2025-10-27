'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Play, Pause, RotateCcw, Waves, Anchor, Leaf, BarChart3, CheckCircle } from 'lucide-react';

interface GameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface CarbonSite {
  id: string;
  type: 'mangrove' | 'seagrass' | 'saltmarsh';
  x: number;
  y: number;
  health: number; // 0-100
  carbonCapture: number; // tons CO2/year
  biodiversity: number; // 0-100
  protectionLevel: number; // 0-100
  threats: string[];
  isProtected: boolean;
}

interface RestorationProject {
  id: string;
  siteId: string;
  type: 'planting' | 'protection' | 'monitoring' | 'cleanup';
  progress: number; // 0-100
  cost: number;
  impact: number;
  timeToComplete: number;
}

interface EnvironmentalData {
  waterQuality: number;
  pollution: number;
  climateStress: number;
  humanActivity: number;
}

export function BlueCarbonTrackerGame({ onComplete, timeLeft, onRestart }: GameProps) {
  const [gameState, setGameState] = useState<'setup' | 'running' | 'paused' | 'completed'>('setup');
  const [score, setScore] = useState(0);
  const [totalCarbonCapture, setTotalCarbonCapture] = useState(0);
  const [budget, setBudget] = useState(500000); // $500K budget
  const [totalBiodiversity, setTotalBiodiversity] = useState(0);
  
  const [carbonSites, setCarbonSites] = useState<CarbonSite[]>([]);
  const [restorationProjects, setRestorationProjects] = useState<RestorationProject[]>([]);
  const [selectedSite, setSelectedSite] = useState<string | null>(null);
  
  const [environmental, setEnvironmental] = useState<EnvironmentalData>({
    waterQuality: 70,
    pollution: 30,
    climateStress: 40,
    humanActivity: 50,
  });

  const gridSize = 8;

  // Initialize carbon sites
  useEffect(() => {
    const initialSites: CarbonSite[] = [];
    const siteTypes: Array<'mangrove' | 'seagrass' | 'saltmarsh'> = ['mangrove', 'seagrass', 'saltmarsh'];
    
    for (let i = 0; i < 12; i++) {
      const x = Math.floor(Math.random() * gridSize);
      const y = Math.floor(Math.random() * gridSize);
      const type = siteTypes[Math.floor(Math.random() * siteTypes.length)];
      
      // Avoid overlap
      if (initialSites.some(site => site.x === x && site.y === y)) continue;
      
      const threats = [];
      if (Math.random() < 0.4) threats.push('pollution');
      if (Math.random() < 0.3) threats.push('development');
      if (Math.random() < 0.2) threats.push('overfishing');
      if (Math.random() < 0.3) threats.push('climate change');
      
      initialSites.push({
        id: `site-${i}`,
        type,
        x,
        y,
        health: Math.floor(Math.random() * 40) + 40, // 40-80
        carbonCapture: type === 'mangrove' ? 150 : type === 'seagrass' ? 100 : 80,
        biodiversity: Math.floor(Math.random() * 30) + 50,
        protectionLevel: Math.floor(Math.random() * 50),
        threats,
        isProtected: false,
      });
    }
    
    setCarbonSites(initialSites);
  }, []);

  // Environmental simulation
  useEffect(() => {
    if (gameState !== 'running') return;

    const envInterval = setInterval(() => {
      setEnvironmental(prev => ({
        waterQuality: Math.max(0, Math.min(100, prev.waterQuality + (Math.random() - 0.5) * 10)),
        pollution: Math.max(0, Math.min(100, prev.pollution + (Math.random() - 0.5) * 8)),
        climateStress: Math.max(0, Math.min(100, prev.climateStress + (Math.random() - 0.5) * 5)),
        humanActivity: Math.max(0, Math.min(100, prev.humanActivity + (Math.random() - 0.5) * 6)),
      }));

    }, 2000);

    return () => clearInterval(envInterval);
  }, [gameState]);

  // Site health simulation
  useEffect(() => {
    if (gameState !== 'running') return;

    const siteInterval = setInterval(() => {
      setCarbonSites(prevSites => {
        return prevSites.map(site => {
          let healthChange = 0;
          
          // Environmental factors affect health
          if (environmental.waterQuality > 80) healthChange += 2;
          else if (environmental.waterQuality < 40) healthChange -= 2;
          
          if (environmental.pollution > 70) healthChange -= 3;
          else if (environmental.pollution < 30) healthChange += 1;
          
          if (environmental.climateStress > 80) healthChange -= 2;
          
          // Protection helps
          if (site.isProtected) healthChange += 1;
          
          // Threats reduce health
          healthChange -= site.threats.length;
          
          // Restoration projects help
          const activeProjects = restorationProjects.filter(p => p.siteId === site.id && p.progress < 100);
          healthChange += activeProjects.length * 2;
          
          const newHealth = Math.max(0, Math.min(100, site.health + healthChange));
          
          // Carbon capture affected by health
          const baseCarbonCapture = site.type === 'mangrove' ? 150 : site.type === 'seagrass' ? 100 : 80;
          const carbonCapture = baseCarbonCapture * (newHealth / 100);
          
          return {
            ...site,
            health: newHealth,
            carbonCapture,
          };
        });
      });
    }, 3000);

    return () => clearInterval(siteInterval);
  }, [gameState, environmental, restorationProjects]);

  // Progress restoration projects
  useEffect(() => {
    if (gameState !== 'running') return;

    const projectInterval = setInterval(() => {
      setRestorationProjects(prevProjects => {
        return prevProjects.map(project => {
          if (project.progress >= 100) return project;
          
          const progressIncrease = 5 + Math.random() * 10;
          const newProgress = Math.min(100, project.progress + progressIncrease);
          
          // Complete project effects
          if (newProgress >= 100 && project.progress < 100) {
            // Apply project benefits
            setCarbonSites(prevSites => prevSites.map(site => {
              if (site.id !== project.siteId) return site;
              
              let healthBonus = 0;
              let protectionBonus = 0;
              
              switch (project.type) {
                case 'planting':
                  healthBonus = 15;
                  break;
                case 'protection':
                  protectionBonus = 25;
                  break;
                case 'monitoring':
                  healthBonus = 5;
                  protectionBonus = 10;
                  break;
                case 'cleanup':
                  healthBonus = 10;
                  break;
              }
              
              return {
                ...site,
                health: Math.min(100, site.health + healthBonus),
                protectionLevel: Math.min(100, site.protectionLevel + protectionBonus),
                isProtected: site.protectionLevel + protectionBonus >= 75,
              };
            }));
            
            setScore(prev => prev + project.impact * 10);
          }
          
          return {
            ...project,
            progress: newProgress,
          };
        });
      });
    }, 1500);

    return () => clearInterval(projectInterval);
  }, [gameState]);

  // Score calculation
  useEffect(() => {
    const totalCarbon = carbonSites.reduce((sum, site) => sum + site.carbonCapture, 0);
    const totalBio = carbonSites.reduce((sum, site) => sum + site.biodiversity, 0) / Math.max(1, carbonSites.length);
    const avgHealth = carbonSites.reduce((sum, site) => sum + site.health, 0) / Math.max(1, carbonSites.length);
    const protectedSites = carbonSites.filter(site => site.isProtected).length;
    
    setTotalCarbonCapture(totalCarbon);
    setTotalBiodiversity(totalBio);
    
    const carbonScore = totalCarbon * 2;
    const healthScore = avgHealth * 5;
    const protectionScore = protectedSites * 100;
    const biodiversityScore = totalBio * 3;
    const envScore = (environmental.waterQuality - environmental.pollution) * 2;
    
    setScore(Math.round(carbonScore + healthScore + protectionScore + biodiversityScore + envScore));
  }, [carbonSites, environmental]);

  // Auto-complete game
  useEffect(() => {
    if (timeLeft <= 0 && gameState === 'running') {
      const success = score >= 5000 && totalCarbonCapture >= 800 && totalBiodiversity >= 70;
      setGameState('completed');
      onComplete(success, score);
    }
  }, [timeLeft, score, totalCarbonCapture, totalBiodiversity, gameState, onComplete]);

  const startRestorationProject = useCallback((siteId: string, type: RestorationProject['type']) => {
    const costs = {
      planting: 25000,
      protection: 40000,
      monitoring: 15000,
      cleanup: 20000,
    };
    
    const impacts = {
      planting: 15,
      protection: 20,
      monitoring: 10,
      cleanup: 12,
    };
    
    const cost = costs[type];
    if (budget < cost) {
      alert('Không đủ ngân sách!');
      return;
    }
    
    const newProject: RestorationProject = {
      id: `project-${Date.now()}`,
      siteId,
      type,
      progress: 0,
      cost,
      impact: impacts[type],
      timeToComplete: 30 + Math.random() * 30,
    };
    
    setRestorationProjects(prev => [...prev, newProject]);
    setBudget(prev => prev - cost);
  }, [budget]);

  const getSiteIcon = (type: CarbonSite['type']) => {
    switch (type) {
      case 'mangrove': return '🌳';
      case 'seagrass': return '🌿';
      case 'saltmarsh': return '🌾';
      default: return '🌱';
    }
  };

  const getSiteColor = (health: number) => {
    if (health > 80) return 'bg-green-500';
    if (health > 60) return 'bg-yellow-500';
    if (health > 40) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const startGame = () => setGameState('running');
  const pauseGame = () => setGameState('paused');
  const resumeGame = () => setGameState('running');

  if (gameState === 'completed') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full border border-teal-500/20 text-center">
          <Waves className="w-16 h-16 mx-auto mb-4 text-teal-400" />
          <h2 className="text-2xl font-bold text-white mb-4">Hoàn thành!</h2>
          <div className="space-y-2 mb-6">
            <p className="text-gray-300">Điểm số: <span className="text-teal-400 font-bold">{score}</span></p>
            <p className="text-gray-300">Carbon hấp thụ: <span className="text-green-400 font-bold">{totalCarbonCapture.toFixed(1)} tấn/năm</span></p>
            <p className="text-gray-300">Đa dạng sinh học: <span className="text-blue-400 font-bold">{totalBiodiversity.toFixed(1)}%</span></p>
            <p className="text-gray-300">Ngân sách còn: <span className="text-yellow-400 font-bold">${(budget/1000).toFixed(0)}K</span></p>
          </div>
          <button onClick={onRestart} className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-3 px-6 rounded-xl">
            Practice again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <Waves className="w-8 h-8 text-teal-400" />
          <h1 className="text-2xl font-bold text-white">Theo Dõi Carbon Xanh</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-white">Thời gian: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</div>
          <div className="text-teal-400 font-bold">Điểm: {score}</div>
        </div>
      </div>

      {/* Game Controls */}
      <div className="mb-6 flex space-x-4">
        {gameState === 'setup' && (
          <button onClick={startGame} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg flex items-center">
            <Play className="w-4 h-4 mr-2" />
            Bắt đầu
          </button>
        )}
        {gameState === 'running' && (
          <button onClick={pauseGame} className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg flex items-center">
            <Pause className="w-4 h-4 mr-2" />
            Tạm dừng
          </button>
        )}
        {gameState === 'paused' && (
          <button onClick={resumeGame} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg flex items-center">
            <Play className="w-4 h-4 mr-2" />
            Tiếp tục
          </button>
        )}
        <button onClick={onRestart} className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg flex items-center">
          <RotateCcw className="w-4 h-4 mr-2" />
          Khởi động lại
        </button>
      </div>

      {/* Main Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Coastal Ecosystem Map */}
        <div className="lg:col-span-3 bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Bản đồ hệ sinh thái ven biển</h2>
          
          <div className="grid grid-cols-8 gap-1 bg-teal-900/30 p-4 rounded-lg" style={{ aspectRatio: '1' }}>
            {Array.from({ length: 64 }, (_, i) => {
              const x = i % gridSize;
              const y = Math.floor(i / gridSize);
              const site = carbonSites.find(s => s.x === x && s.y === y);
              
              return (
                <div
                  key={i}
                  className={`aspect-square border border-teal-700/50 cursor-pointer transition-all hover:bg-teal-600/30 flex items-center justify-center relative ${
                    site ? getSiteColor(site.health) + '/50' : 'bg-teal-800/20'
                  } ${selectedSite === site?.id ? 'ring-2 ring-yellow-400' : ''}`}
                  onClick={() => site && setSelectedSite(selectedSite === site.id ? null : site.id)}
                >
                  {site && (
                    <div className="relative group">
                      <span className="text-2xl">{getSiteIcon(site.type)}</span>
                      {site.isProtected && (
                        <CheckCircle className="w-3 h-3 text-green-400 absolute -top-1 -right-1" />
                      )}
                      
                      {/* Site Info Tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black/90 text-white text-xs p-3 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 min-w-max">
                        <div className="font-semibold mb-1">{site.type.charAt(0).toUpperCase() + site.type.slice(1)}</div>
                        <div>Sức khỏe: {site.health.toFixed(0)}%</div>
                        <div>Carbon: {site.carbonCapture.toFixed(1)} tấn/năm</div>
                        <div>Đa dạng sinh học: {site.biodiversity.toFixed(0)}%</div>
                        <div>Bảo vệ: {site.protectionLevel.toFixed(0)}%</div>
                        {site.threats.length > 0 && (
                          <div className="text-red-400 mt-1">
                            Mối đe dọa: {site.threats.join(', ')}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* Water gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-blue-800/20" />
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-4 flex justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <span className="mr-2">🌳</span>
                <span className="text-gray-300">Rừng ngập mặn</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">🌿</span>
                <span className="text-gray-300">Cỏ biển</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">🌾</span>
                <span className="text-gray-300">Đầm lầy mặn</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 mr-2 rounded"></div>
                <span className="text-gray-300">Khỏe mạnh</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 mr-2 rounded"></div>
                <span className="text-gray-300">Trung bình</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 mr-2 rounded"></div>
                <span className="text-gray-300">Có nguy cơ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="space-y-6">
          {/* Statistics */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              Thống kê
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Carbon hấp thụ:</span>
                <span className="text-green-400 font-bold">{totalCarbonCapture.toFixed(0)} tấn/năm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Đa dạng sinh học:</span>
                <span className="text-blue-400 font-bold">{totalBiodiversity.toFixed(0)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Ngân sách:</span>
                <span className="text-yellow-400 font-bold">${(budget/1000).toFixed(0)}K</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Khu vực bảo vệ:</span>
                <span className="text-emerald-400 font-bold">{carbonSites.filter(s => s.isProtected).length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Dự án đang thực hiện:</span>
                <span className="text-purple-400 font-bold">{restorationProjects.filter(p => p.progress < 100).length}</span>
              </div>
            </div>
          </div>

          {/* Environmental Conditions */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Leaf className="w-5 h-5 mr-2" />
              Điều kiện môi trường
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">Chất lượng nước:</span>
                  <span className="text-blue-400">{environmental.waterQuality.toFixed(0)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${environmental.waterQuality}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">Ô nhiễm:</span>
                  <span className="text-red-400">{environmental.pollution.toFixed(0)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${environmental.pollution}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">Áp lực khí hậu:</span>
                  <span className="text-orange-400">{environmental.climateStress.toFixed(0)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-orange-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${environmental.climateStress}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">Hoạt động con người:</span>
                  <span className="text-purple-400">{environmental.humanActivity.toFixed(0)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${environmental.humanActivity}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Site Actions */}
          {selectedSite && (
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <Anchor className="w-5 h-5 mr-2" />
                Hành động phục hồi
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => startRestorationProject(selectedSite, 'planting')}
                  disabled={budget < 25000}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm"
                >
                  Trồng cây ($25K)
                </button>
                <button
                  onClick={() => startRestorationProject(selectedSite, 'protection')}
                  disabled={budget < 40000}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm"
                >
                  Bảo vệ khu vực ($40K)
                </button>
                <button
                  onClick={() => startRestorationProject(selectedSite, 'monitoring')}
                  disabled={budget < 15000}
                  className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm"
                >
                  Giám sát ($15K)
                </button>
                <button
                  onClick={() => startRestorationProject(selectedSite, 'cleanup')}
                  disabled={budget < 20000}
                  className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm"
                >
                  Dọn dẹp ($20K)
                </button>
              </div>
            </div>
          )}

          {/* Active Projects */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">Dự án đang thực hiện</h3>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {restorationProjects.filter(p => p.progress < 100).map(project => (
                <div key={project.id} className="bg-slate-800 rounded p-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white text-sm">{project.type}</span>
                    <span className="text-gray-300 text-xs">{project.progress.toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1">
                    <div 
                      className="bg-green-500 h-1 rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              ))}
              {restorationProjects.filter(p => p.progress < 100).length === 0 && (
                <div className="text-gray-400 text-center py-4 text-sm">
                  Không có dự án đang thực hiện
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-6 bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-white/10">
        <h3 className="text-white font-semibold mb-2">Hướng dẫn:</h3>
        <p className="text-gray-300 text-sm">
          🌊 Quản lý và phục hồi hệ sinh thái carbon xanh ven biển. 
          🌱 Chọn các khu vực để thực hiện dự án phục hồi và bảo vệ. 
          📊 Theo dõi chỉ số môi trường và tối đa hóa khả năng hấp thụ carbon!
        </p>
      </div>
    </div>
  );
}
