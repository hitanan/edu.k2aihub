'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import { Vector3Array } from '@/data/gameData';
import { useGameStore } from '@/utils/gameStore';

// Vietnamese Heritage Sites Data
const HERITAGE_SITES = [
  {
    id: 'van-mieu',
    name: 'Văn Miếu Quốc Tử Giám',
    nameEn: 'Temple of Literature',
    location: 'Hà Nội',
    year: 1070,
    description: 'Ngôi đền đầu tiên của Việt Nam dành cho Khổng Tử và các bậc hiền tài.',
    position: [-8, 0, -8],
    color: '#8B4513',
    quiz: {
      question: 'Văn Miếu được xây dựng vào năm nào?',
      options: ['1070', '1080', '1090', '1100'],
      correct: 0,
    },
  },
  {
    id: 'chua-mot-cot',
    name: 'Chùa Một Cột',
    nameEn: 'One Pillar Pagoda',
    location: 'Hà Nội',
    year: 1049,
    description: 'Chùa có kiến trúc độc đáo, tượng trưng cho hoa sen nở trên mặt nước.',
    position: [0, 0, -8],
    color: '#DAA520',
    quiz: {
      question: 'Chùa Một Cột được xây dựng dưới triều đại nào?',
      options: ['Lý Thái Tông', 'Lý Thánh Tông', 'Trần Thái Tông', 'Lê Thánh Tông'],
      correct: 0,
    },
  },
  {
    id: 'hoang-thanh',
    name: 'Hoàng Thành Thăng Long',
    nameEn: 'Imperial Citadel of Thang Long',
    location: 'Hà Nội',
    year: 1010,
    description: 'Trung tâm chính trị của Việt Nam qua nhiều triều đại phong kiến.',
    position: [8, 0, -8],
    color: '#CD853F',
    quiz: {
      question: 'Hoàng Thành Thăng Long được UNESCO công nhận là Di sản thế giới vào năm nào?',
      options: ['2008', '2009', '2010', '2011'],
      correct: 2,
    },
  },
  {
    id: 'ha-long-bay',
    name: 'Vịnh Hạ Long',
    nameEn: 'Ha Long Bay',
    location: 'Quảng Ninh',
    year: 1994,
    description: 'Kỳ quan thiên nhiên thế giới với hàng nghìn đảo đá vôi.',
    position: [-8, 0, 0],
    color: '#4682B4',
    quiz: {
      question: 'Vịnh Hạ Long có khoảng bao nhiêu đảo đá vôi?',
      options: ['1600', '1800', '2000', '2200'],
      correct: 0,
    },
  },
  {
    id: 'hoi-an',
    name: 'Phố Cổ Hội An',
    nameEn: 'Hoi An Ancient Town',
    location: 'Quảng Nam',
    year: 1999,
    description: 'Thành phố cổ với kiến trúc độc đáo, là cảng thương mại quốc tế.',
    position: [0, 0, 0],
    color: '#DEB887',
    quiz: {
      question: 'Hội An được UNESCO công nhận là Di sản thế giới vào năm nào?',
      options: ['1998', '1999', '2000', '2001'],
      correct: 1,
    },
  },
  {
    id: 'my-son',
    name: 'Thánh Địa Mỹ Sơn',
    nameEn: 'My Son Sanctuary',
    location: 'Quảng Nam',
    year: 1999,
    description: 'Quần thể đền tháp Chăm Pa cổ, trung tâm tôn giáo Hindu.',
    position: [8, 0, 0],
    color: '#A0522D',
    quiz: {
      question: 'Mỹ Sơn là di tích của nền văn minh nào?',
      options: ['Chăm Pa', 'Óc Eo', 'Đông Sơn', 'Sa Huỳnh'],
      correct: 0,
    },
  },
  {
    id: 'hue-citadel',
    name: 'Kinh Thành Huế',
    nameEn: 'Hue Imperial City',
    location: 'Thừa Thiên Huế',
    year: 1993,
    description: 'Cố đô của triều Nguyễn, biểu tượng văn hóa hoàng gia Việt Nam.',
    position: [-8, 0, 8],
    color: '#B8860B',
    quiz: {
      question: 'Kinh Thành Huế là cố đô của triều đại nào?',
      options: ['Trần', 'Lê', 'Nguyễn', 'Lý'],
      correct: 2,
    },
  },
  {
    id: 'phong-nha',
    name: 'Phong Nha - Kẻ Bàng',
    nameEn: 'Phong Nha-Ke Bang National Park',
    location: 'Quảng Bình',
    year: 2003,
    description: 'Công viên quốc gia với hệ thống hang động kỳ vĩ nhất thế giới.',
    position: [0, 0, 8],
    color: '#556B2F',
    quiz: {
      question: 'Hang Sơn Trà nằm trong khu vực nào?',
      options: ['Phong Nha - Kẻ Bàng', 'Hạ Long', 'Cát Bà', 'Ba Bể'],
      correct: 0,
    },
  },
  {
    id: 'trang-an',
    name: 'Quần Thể Tràng An',
    nameEn: 'Trang An Landscape Complex',
    location: 'Ninh Bình',
    year: 2014,
    description: 'Di sản hỗn hợp văn hóa và thiên nhiên với cảnh quan karst.',
    position: [8, 0, 8],
    color: '#2E8B57',
    quiz: {
      question: 'Tràng An là di sản hỗn hợp, kết hợp giữa hai yếu tố nào?',
      options: ['Văn hóa và Thiên nhiên', 'Lịch sử và Kiến trúc', 'Tôn giáo và Nghệ thuật', 'Cổ học và Địa chất'],
      correct: 0,
    },
  },
];

// Heritage Site 3D Model Component
function HeritageSite({
  site,
  isSelected,
  onSelect,
  onQuizStart,
}: {
  site: (typeof HERITAGE_SITES)[0];
  isSelected: boolean;
  onSelect: () => void;
  onQuizStart: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = site.position[1] + Math.sin(state.clock.elapsedTime * 2 + site.position[0]) * 0.1;

      // Rotation animation when selected
      if (isSelected) {
        meshRef.current.rotation.y += 0.02;
      }

      // Scale animation on hover
      const targetScale = hovered ? 1.1 : isSelected ? 1.2 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  const handleClick = () => {
    onSelect();
    setTimeout(() => onQuizStart(), 500);
  };

  return (
    <group position={site.position as Vector3Array}>
      {/* Main Building */}
      <mesh
        ref={meshRef}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color={site.color}
          emissive={isSelected ? site.color : '#000000'}
          emissiveIntensity={isSelected ? 0.2 : 0}
        />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 1.5, 0]}>
        <coneGeometry args={[1.5, 1, 4]} />
        <meshStandardMaterial color="#8B0000" />
      </mesh>

      {/* Base Platform */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[2.5, 2.5, 0.4, 8]} />
        <meshStandardMaterial color="#A9A9A9" />
      </mesh>

      {/* Info Label */}
      {(hovered || isSelected) && (
        <Html position={[0, 3, 0]} center>
          <div className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-bold shadow-lg">{site.name}</div>
        </Html>
      )}

      {/* Selection Ring */}
      {isSelected && (
        <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[3, 3.2, 32]} />
          <meshBasicMaterial color="#FFD700" transparent opacity={0.8} />
        </mesh>
      )}
    </group>
  );
}

// Environment Component
function Environment() {
  return (
    <>
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#8FBC8F" />
      </mesh>

      {/* Sky */}
      <mesh>
        <sphereGeometry args={[25, 32, 32]} />
        <meshBasicMaterial color="#87CEEB" side={THREE.BackSide} />
      </mesh>

      {/* Clouds */}
      {Array.from({ length: 8 }, (_, i) => (
        <mesh key={i} position={[(Math.random() - 0.5) * 40, 8 + Math.random() * 5, (Math.random() - 0.5) * 40]}>
          <sphereGeometry args={[2 + Math.random() * 2, 8, 8]} />
          <meshBasicMaterial color="white" transparent opacity={0.8} />
        </mesh>
      ))}
    </>
  );
}

// Quiz Modal Component
function QuizModal({
  site,
  onAnswer,
  onClose,
}: {
  site: (typeof HERITAGE_SITES)[0] | null;
  onAnswer: (correct: boolean) => void;
  onClose: () => void;
}) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  if (!site) return null;

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);
    const correct = index === site.quiz.correct;

    // Show answer feedback for 2 seconds, then close
    setTimeout(() => {
      onAnswer(correct);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-2xl mx-4 text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{site.name}</h3>
          <p className="text-gray-600 mb-4">{site.description}</p>
          <div className="text-sm text-gray-500 mb-4">
            📍 {site.location} | 📅 Năm {site.year}
          </div>
        </div>

        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="text-lg font-semibold text-blue-800 mb-4">{site.quiz.question}</h4>
          <div className="grid grid-cols-2 gap-3">
            {site.quiz.options.map((option, index) => {
              let buttonClass = 'p-3 rounded-lg font-medium transition-colors ';

              if (showResult) {
                if (index === site.quiz.correct) {
                  buttonClass += 'bg-green-500 text-white'; // Correct answer
                } else if (index === selectedAnswer) {
                  buttonClass += 'bg-red-500 text-white'; // Wrong selected answer
                } else {
                  buttonClass += 'bg-gray-100 text-gray-500'; // Other options
                }
              } else {
                buttonClass += 'bg-blue-100 hover:bg-blue-200 text-blue-800'; // Default state
              }

              return (
                <button key={index} onClick={() => handleAnswer(index)} disabled={showResult} className={buttonClass}>
                  {option}
                </button>
              );
            })}
          </div>

          {/* Answer feedback */}
          {showResult && (
            <div className="mt-4 p-3 rounded-lg">
              {selectedAnswer === site.quiz.correct ? (
                <div className="text-green-600 font-bold">✅ Chính xác! +100 điểm</div>
              ) : (
                <div className="text-red-600 font-bold">
                  ❌ Sai rồi! Đáp án đúng là: {site.quiz.options[site.quiz.correct]}
                </div>
              )}
              <div className="text-sm text-gray-500 mt-2">Đang chuyển sang di tích tiếp theo...</div>
            </div>
          )}
        </div>

        {!showResult && (
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Đóng
          </button>
        )}
      </div>
    </div>
  );
}

// Game Stats Component - Enhanced with store sync
function GameStats({ visited, score, totalSites }: { visited: number; score: number; totalSites: number }) {
  // Enhanced store integration for persistence
  const { vietnameseHeritage } = useGameStore();
  const [persistentVisited, setPersistentVisited] = useState(visited);
  const [persistentScore, setPersistentScore] = useState(score);

  // Always sync with store data for persistence
  useEffect(() => {
    // Use store data if it's more recent than component props
    const storeVisited = vietnameseHeritage.visitedSites.length;
    const storeScore = vietnameseHeritage.score;

    if (storeVisited >= visited) {
      setPersistentVisited(storeVisited);
    } else {
      setPersistentVisited(visited);
    }

    if (storeScore >= score) {
      setPersistentScore(storeScore);
    } else {
      setPersistentScore(score);
    }
  }, [visited, score, vietnameseHeritage.visitedSites.length, vietnameseHeritage.score]);

  const finalProgress = (persistentVisited / totalSites) * 100;

  return (
    <div className="absolute top-4 left-4 bg-white bg-opacity-95 rounded-lg p-4 min-w-[250px] shadow-lg backdrop-blur-sm z-30">
      <h3 className="text-lg font-bold text-gray-800 mb-3">📊 Thống Kê Khám Phá</h3>

      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Tiến độ khám phá</span>
            <span>{Math.round(finalProgress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${finalProgress}%` }}
            ></div>
          </div>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">🏛️ Đã thăm:</span>
          <span className="font-semibold">
            {persistentVisited}/{totalSites}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">⭐ Điểm số:</span>
          <span className="font-semibold text-blue-600">{persistentScore}</span>
        </div>

        {/* Persistence indicator */}
        <div className="text-xs text-gray-400 border-t pt-2">💾 Tiến độ được lưu tự động</div>
      </div>
    </div>
  );
}

// Instructions Component
function Instructions({ onStart }: { onStart: () => void }) {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-2xl mx-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🏛️ Vietnamese Heritage Explorer 3D</h2>

        <div className="text-left space-y-4 mb-6">
          <p className="text-gray-600">
            Chào mừng đến với hành trình khám phá di sản văn hóa Việt Nam! Bạn sẽ tham quan các địa danh lịch sử nổi
            tiếng nhất của đất nước.
          </p>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-2">🎮 Cách chơi:</h3>
            <ul className="text-blue-700 space-y-1 text-sm">
              <li>
                • <strong>Click vào các di tích</strong> để khám phá
              </li>
              <li>
                • <strong>Trả lời câu hỏi</strong> về từng di sản
              </li>
              <li>
                • <strong>Thu thập điểm</strong> và tìm hiểu lịch sử
              </li>
              <li>
                • <strong>Kéo chuột</strong> để xoay góc nhìn
              </li>
              <li>
                • <strong>Lăn chuột</strong> để zoom in/out
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-800 mb-2">🎯 Mục tiêu:</h3>
            <p className="text-green-700 text-sm">
              Thăm quan tất cả {HERITAGE_SITES.length} di sản văn hóa và trả lời đúng câu hỏi để có điểm cao nhất!
            </p>
          </div>
        </div>

        <button
          onClick={onStart}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-green-600 transition-all transform hover:scale-105"
        >
          🚀 Bắt Đầu Khám Phá
        </button>
      </div>
    </div>
  );
}

// Main Game Component
export default function VietnameseHeritageExplorer3D() {
  // Store integration
  const { vietnameseHeritage, setVietnameseHeritageState } = useGameStore();

  const [gameStarted, setGameStarted] = useState(false);
  const [selectedSite, setSelectedSite] = useState<string | null>(vietnameseHeritage.selectedSite);
  const [showQuiz, setShowQuiz] = useState(false);
  const [visitedSites, setVisitedSites] = useState<Set<string>>(new Set(vietnameseHeritage.visitedSites));
  const [score, setScore] = useState(vietnameseHeritage.score);
  const [showResult, setShowResult] = useState(false);

  // Track initialization to prevent infinite loops
  const isInitialized = useRef(false);

  // Initialize from store on mount - always sync with store
  useEffect(() => {
    if (!isInitialized.current) {
      setVisitedSites(new Set(vietnameseHeritage.visitedSites));
      setScore(vietnameseHeritage.score);
      setSelectedSite(vietnameseHeritage.selectedSite);
      isInitialized.current = true;
    }
  }, [vietnameseHeritage.visitedSites, vietnameseHeritage.score, vietnameseHeritage.selectedSite]);

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      // Clean up any Three.js resources
      setSelectedSite(null);
      setShowQuiz(false);
    };
  }, []);

  const currentSite = HERITAGE_SITES.find((site) => site.id === selectedSite);

  const handleSiteSelect = useCallback((siteId: string) => {
    setSelectedSite(siteId);
  }, []);

  const handleQuizStart = useCallback(() => {
    setShowQuiz(true);
  }, []);

  const handleQuizAnswer = useCallback(
    (correct: boolean) => {
      if (selectedSite) {
        const newVisitedSites = new Set(visitedSites).add(selectedSite);
        setVisitedSites(newVisitedSites);

        let newScore = score;
        if (correct) {
          newScore = score + 100;
          setScore(newScore);
        }

        // Save to store
        setVietnameseHeritageState({
          visitedSites: Array.from(newVisitedSites),
          score: newScore,
          selectedSite: null,
          gameTime: vietnameseHeritage.gameTime + 1,
        });
      }
      setShowQuiz(false);
      setSelectedSite(null);

      // Check if all sites visited
      if (visitedSites.size === HERITAGE_SITES.length - 1) {
        setTimeout(() => setShowResult(true), 1000);
      }
    },
    [selectedSite, visitedSites, score, setVietnameseHeritageState, vietnameseHeritage.gameTime],
  );

  const resetGame = () => {
    setSelectedSite(null);
    setShowQuiz(false);
    setVisitedSites(new Set());
    setScore(0);
    setShowResult(false);
    // Reset in store
    const { resetVietnameseHeritage } = useGameStore.getState();
    resetVietnameseHeritage();
  };

  if (!gameStarted) {
    return <Instructions onStart={() => setGameStarted(true)} />;
  }

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-blue-400 to-green-400">
      {/* Game Stats - FIXED persistence */}
      {gameStarted && <GameStats visited={visitedSites.size} score={score} totalSites={HERITAGE_SITES.length} />}

      {/* Controls Info - FIXED persistence */}
      {gameStarted && (
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-lg p-3 text-sm z-40">
          <div className="text-gray-600 space-y-1">
            <div>🖱️ Kéo: Xoay góc nhìn</div>
            <div>🔍 Lăn: Zoom in/out</div>
            <div>👆 Click: Chọn di tích</div>
          </div>
        </div>
      )}

      {/* 3D Scene with enhanced WebGL context protection */}
      <Canvas
        camera={{ position: [0, 8, 15], fov: 60 }}
        gl={{
          antialias: false,
          alpha: false,
          preserveDrawingBuffer: false,
          powerPreference: 'high-performance',
          failIfMajorPerformanceCaveat: false,
          depth: true,
          stencil: false,
        }}
        dpr={[1, 1.5]}
        performance={{ min: 0.1 }}
        onCreated={({ gl, scene }) => {
          // Enhanced WebGL context loss prevention
          const canvas = gl.domElement;

          const handleContextLost = (event: Event) => {
            event.preventDefault();
            console.warn('WebGL context lost - preventing default behavior');
          };

          const handleContextRestored = () => {
            console.log('WebGL context restored');
            // Force scene update
            scene.traverse((child) => {
              if (child.type === 'Mesh' && 'material' in child) {
                const mesh = child as THREE.Mesh;
                if (mesh.material) {
                  if (Array.isArray(mesh.material)) {
                    mesh.material.forEach((mat) => (mat.needsUpdate = true));
                  } else {
                    mesh.material.needsUpdate = true;
                  }
                }
              }
            });
          };

          canvas.addEventListener('webglcontextlost', handleContextLost, false);
          canvas.addEventListener('webglcontextrestored', handleContextRestored, false);

          // Cleanup function
          return () => {
            canvas.removeEventListener('webglcontextlost', handleContextLost);
            canvas.removeEventListener('webglcontextrestored', handleContextRestored);
          };
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[0, 10, 0]} intensity={0.5} />

        <Environment />

        {HERITAGE_SITES.map((site) => (
          <HeritageSite
            key={site.id}
            site={site}
            isSelected={selectedSite === site.id}
            onSelect={() => handleSiteSelect(site.id)}
            onQuizStart={handleQuizStart}
          />
        ))}

        <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2} minDistance={5} maxDistance={30} />
      </Canvas>

      {/* Quiz Modal */}
      {showQuiz && (
        <QuizModal site={currentSite || null} onAnswer={handleQuizAnswer} onClose={() => setShowQuiz(false)} />
      )}

      {/* Game Complete Modal */}
      {showResult && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-lg mx-4 text-center">
            <h2 className="text-3xl font-bold text-green-600 mb-4">🎉 Chúc Mừng!</h2>
            <p className="text-gray-600 mb-4">
              Bạn đã khám phá thành công {HERITAGE_SITES.length} di sản văn hóa Việt Nam!
            </p>
            <div className="text-2xl font-bold text-blue-600 mb-6">
              ⭐ Tổng điểm: {score}/{HERITAGE_SITES.length * 100}
            </div>
            <div className="flex gap-4 justify-center">
              <button
                onClick={resetGame}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                🔄 Practice again
              </button>
              <button
                onClick={() => (window.location.href = '/practice')}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                🎮 Practice khác
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
