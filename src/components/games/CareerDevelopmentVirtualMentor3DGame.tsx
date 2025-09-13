'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Maximize, RotateCcw, Volume2, VolumeX, Briefcase, Award, MessageCircle, Target } from 'lucide-react';

interface CareerDevelopmentVirtualMentor3DGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface Mentor {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  position: { x: number; y: number; z: number };
  color: string;
  isActive: boolean;
  dialog: string[];
}

interface CareerGoal {
  id: string;
  title: string;
  progress: number;
  position: { x: number; y: number; z: number };
  color: string;
  requirements: string[];
}

interface SkillNode {
  id: string;
  name: string;
  level: number;
  category: 'technical' | 'soft' | 'leadership';
  position: { x: number; y: number; z: number };
  connections: string[];
  color: string;
}

const CareerDevelopmentVirtualMentor3DGame: React.FC<CareerDevelopmentVirtualMentor3DGameProps> = ({
  onComplete,
  timeLeft,
  onRestart,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [gameState, setGameState] = useState<'playing' | 'completed'>('playing');
  const [selectedMentor, setSelectedMentor] = useState<string | null>(null);
  const [currentDialog, setCurrentDialog] = useState<string>('');
  const [cameraRotation, setCameraRotation] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });

  // Game data
  const [mentors] = useState<Mentor[]>([
    {
      id: 'ceo',
      name: 'CEO Jennifer',
      role: 'Giám đốc điều hành',
      expertise: ['Leadership', 'Strategy', 'Vision'],
      position: { x: 0, y: 100, z: 0 },
      color: '#8B5CF6',
      isActive: true,
      dialog: [
        'Chào bạn! Tôi có thể chia sẻ về lãnh đạo chiến lược.',
        'Để thành công, bạn cần có tầm nhìn rõ ràng và khả năng truyền cảm hứng.',
        'Hãy phát triển kỹ năng giao tiếp và tư duy chiến lược.',
      ],
    },
    {
      id: 'cto',
      name: 'CTO Michael',
      role: 'Giám đốc công nghệ',
      expertise: ['Technology', 'Innovation', 'Team Building'],
      position: { x: -150, y: 0, z: -100 },
      color: '#3B82F6',
      isActive: true,
      dialog: [
        'Công nghệ đang thay đổi nhanh chóng.',
        'Hãy luôn học hỏi và cập nhật kiến thức mới.',
        'Kỹ năng giải quyết vấn đề là chìa khóa thành công.',
      ],
    },
    {
      id: 'hr-director',
      name: 'HR Director Sarah',
      role: 'Giám đốc nhân sự',
      expertise: ['People Management', 'Communication', 'Culture'],
      position: { x: 150, y: 0, z: 100 },
      color: '#10B981',
      isActive: true,
      dialog: [
        'Con người là tài sản quý giá nhất của tổ chức.',
        'Phát triển kỹ năng giao tiếp và lắng nghe.',
        'Xây dựng mạng lưới quan hệ mạnh mẽ.',
      ],
    },
    {
      id: 'mentor',
      name: 'Senior Mentor David',
      role: 'Cố vấn nghề nghiệp',
      expertise: ['Career Guidance', 'Skills Development', 'Goal Setting'],
      position: { x: 0, y: 0, z: -200 },
      color: '#F59E0B',
      isActive: true,
      dialog: [
        'Đặt mục tiêu SMART cho sự nghiệp của bạn.',
        'Thành công đến từ việc học hỏi liên tục.',
        'Hãy dám thử thách và bước ra khỏi vùng an toàn.',
      ],
    },
  ]);

  const [skills, setSkills] = useState<SkillNode[]>([
    {
      id: 'leadership',
      name: 'Lãnh đạo',
      level: 0,
      category: 'leadership',
      position: { x: -100, y: 50, z: 50 },
      connections: ['communication', 'strategy'],
      color: '#8B5CF6',
    },
    {
      id: 'communication',
      name: 'Giao tiếp',
      level: 0,
      category: 'soft',
      position: { x: 100, y: 50, z: -50 },
      connections: ['leadership', 'teamwork'],
      color: '#10B981',
    },
    {
      id: 'technical',
      name: 'Kỹ thuật',
      level: 0,
      category: 'technical',
      position: { x: -50, y: -50, z: 100 },
      connections: ['innovation', 'problem-solving'],
      color: '#3B82F6',
    },
    {
      id: 'strategy',
      name: 'Chiến lược',
      level: 0,
      category: 'leadership',
      position: { x: 50, y: -50, z: -100 },
      connections: ['leadership', 'innovation'],
      color: '#F59E0B',
    },
    {
      id: 'innovation',
      name: 'Đổi mới',
      level: 0,
      category: 'technical',
      position: { x: 0, y: -100, z: 0 },
      connections: ['technical', 'strategy'],
      color: '#EF4444',
    },
    {
      id: 'teamwork',
      name: 'Làm việc nhóm',
      level: 0,
      category: 'soft',
      position: { x: 75, y: 75, z: 75 },
      connections: ['communication'],
      color: '#EC4899',
    },
  ]);

  const [careerGoals, setCareerGoals] = useState<CareerGoal[]>([
    {
      id: 'promotion',
      title: 'Thăng tiến',
      progress: 0,
      position: { x: 0, y: 150, z: 0 },
      color: '#8B5CF6',
      requirements: ['leadership', 'communication'],
    },
    {
      id: 'expertise',
      title: 'Chuyên môn',
      progress: 0,
      position: { x: -100, y: 100, z: -100 },
      color: '#3B82F6',
      requirements: ['technical', 'innovation'],
    },
    {
      id: 'network',
      title: 'Mạng lưới',
      progress: 0,
      position: { x: 100, y: 100, z: 100 },
      color: '#10B981',
      requirements: ['communication', 'teamwork'],
    },
  ]);

  // 3D projection functions
  const project3DTo2D = useCallback(
    (x: number, y: number, z: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return { x: 0, y: 0, scale: 1 };

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Apply rotation
      const rotatedX = x * Math.cos(cameraRotation.y) - z * Math.sin(cameraRotation.y);
      const rotatedZ = x * Math.sin(cameraRotation.y) + z * Math.cos(cameraRotation.y);
      const rotatedY = y * Math.cos(cameraRotation.x) - rotatedZ * Math.sin(cameraRotation.x);
      const finalZ = y * Math.sin(cameraRotation.x) + rotatedZ * Math.cos(cameraRotation.x);

      // Apply perspective projection
      const distance = 500;
      const scale = distance / (distance + finalZ);

      return {
        x: centerX + rotatedX * scale * zoom,
        y: centerY - rotatedY * scale * zoom,
        scale: scale,
      };
    },
    [cameraRotation, zoom],
  );

  // Animation and rendering
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    // Clear canvas with office background
    const gradient = ctx.createRadialGradient(
      canvas.width / 2,
      canvas.height / 2,
      0,
      canvas.width / 2,
      canvas.height / 2,
      Math.max(canvas.width, canvas.height) / 2,
    );
    gradient.addColorStop(0, 'rgba(30, 41, 59, 1)');
    gradient.addColorStop(1, 'rgba(15, 23, 42, 1)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw skill connections
    skills.forEach((skill) => {
      skill.connections.forEach((connectionId) => {
        const connectedSkill = skills.find((s) => s.id === connectionId);
        if (connectedSkill) {
          const pos1 = project3DTo2D(skill.position.x, skill.position.y, skill.position.z);
          const pos2 = project3DTo2D(connectedSkill.position.x, connectedSkill.position.y, connectedSkill.position.z);

          ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(pos1.x, pos1.y);
          ctx.lineTo(pos2.x, pos2.y);
          ctx.stroke();
        }
      });
    });

    // Draw skill nodes
    skills.forEach((skill) => {
      const pos = project3DTo2D(skill.position.x, skill.position.y, skill.position.z);
      const size = 20 + skill.level * 5;

      // Skill circle
      ctx.fillStyle = skill.color;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, size * pos.scale, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();

      // Level indicator
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `${10 * pos.scale}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(skill.level.toString(), pos.x, pos.y + 3);

      // Skill name
      ctx.font = `${12 * pos.scale}px Arial`;
      ctx.fillText(skill.name, pos.x, pos.y + size * pos.scale + 20);
    });

    // Draw mentors
    mentors.forEach((mentor) => {
      const pos = project3DTo2D(mentor.position.x, mentor.position.y, mentor.position.z);
      const size = 30;

      // Mentor avatar
      ctx.fillStyle = mentor.color;
      ctx.strokeStyle = selectedMentor === mentor.id ? '#FFFFFF' : 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = selectedMentor === mentor.id ? 4 : 2;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, size * pos.scale, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();

      // Mentor icon
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `${16 * pos.scale}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText('👤', pos.x, pos.y + 5);

      // Mentor name
      ctx.font = `${12 * pos.scale}px Arial`;
      ctx.fillText(mentor.name, pos.x, pos.y + size * pos.scale + 20);

      // Role
      ctx.font = `${10 * pos.scale}px Arial`;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.fillText(mentor.role, pos.x, pos.y + size * pos.scale + 35);
    });

    // Draw career goals
    careerGoals.forEach((goal) => {
      const pos = project3DTo2D(goal.position.x, goal.position.y, goal.position.z);
      const size = 25;

      // Goal circle
      ctx.fillStyle = goal.color;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, size * pos.scale, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();

      // Progress indicator
      if (goal.progress > 0) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, (size - 5) * pos.scale, 0, 2 * Math.PI * (goal.progress / 100));
        ctx.fill();
      }

      // Goal title
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `${12 * pos.scale}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(goal.title, pos.x, pos.y + size * pos.scale + 20);

      // Progress percentage
      ctx.font = `${10 * pos.scale}px Arial`;
      ctx.fillText(`${goal.progress}%`, pos.x, pos.y + size * pos.scale + 35);
    });
  }, [mentors, skills, careerGoals, selectedMentor, project3DTo2D]);

  // Mouse interaction handlers
  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true);
    setLastMousePos({ x: event.clientX, y: event.clientY });

    // Check for mentor selection
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Check mentors
    mentors.forEach((mentor) => {
      const pos = project3DTo2D(mentor.position.x, mentor.position.y, mentor.position.z);
      const distance = Math.sqrt((mouseX - pos.x) ** 2 + (mouseY - pos.y) ** 2);
      if (distance < 30) {
        setSelectedMentor(mentor.id);
        showMentorDialog(mentor);
      }
    });

    // Check skills
    skills.forEach((skill) => {
      const pos = project3DTo2D(skill.position.x, skill.position.y, skill.position.z);
      const distance = Math.sqrt((mouseX - pos.x) ** 2 + (mouseY - pos.y) ** 2);
      if (distance < 25) {
        developSkill(skill.id);
      }
    });
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDragging) {
      const deltaX = event.clientX - lastMousePos.x;
      const deltaY = event.clientY - lastMousePos.y;

      setCameraRotation((prev) => ({
        x: prev.x + deltaY * 0.01,
        y: prev.y + deltaX * 0.01,
      }));

      setLastMousePos({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (event: React.WheelEvent<HTMLCanvasElement>) => {
    event.preventDefault();
    const delta = event.deltaY > 0 ? 0.9 : 1.1;
    setZoom((prev) => Math.max(0.5, Math.min(2, prev * delta)));
  };

  // Game logic
  const showMentorDialog = (mentor: Mentor) => {
    const randomDialog = mentor.dialog[Math.floor(Math.random() * mentor.dialog.length)];
    setCurrentDialog(randomDialog);
    setScore((prev) => prev + 10);

    // Clear dialog after 3 seconds
    setTimeout(() => {
      setCurrentDialog('');
    }, 3000);
  };

  const developSkill = (skillId: string) => {
    setSkills((prev) =>
      prev.map((skill) => {
        if (skill.id === skillId && skill.level < 5) {
          const newLevel = skill.level + 1;
          setScore((prevScore) => prevScore + 15);

          // Update career goal progress
          updateCareerGoals(skillId);

          return { ...skill, level: newLevel };
        }
        return skill;
      }),
    );
  };

  const updateCareerGoals = (skillId: string) => {
    setCareerGoals((prev) =>
      prev.map((goal) => {
        if (goal.requirements.includes(skillId)) {
          const newProgress = Math.min(100, goal.progress + 20);
          return { ...goal, progress: newProgress };
        }
        return goal;
      }),
    );
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      canvasRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  // Game completion check
  useEffect(() => {
    const totalProgress = careerGoals.reduce((sum, goal) => sum + goal.progress, 0);
    const averageProgress = totalProgress / careerGoals.length;

    if (averageProgress >= 80) {
      setGameState('completed');
      onComplete(true, score);
    }
  }, [careerGoals, score, onComplete]);

  // Animation loop
  useEffect(() => {
    const animationLoop = () => {
      animate();
      requestAnimationFrame(animationLoop);
    };
    animationLoop();
  }, [animate]);

  return (
    <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 relative overflow-hidden">
      {/* Game UI */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
          <h3 className="text-lg font-bold mb-2 flex items-center">
            <Briefcase className="w-5 h-5 mr-2 text-purple-400" />
            Cố Vấn Nghề Nghiệp 3D
          </h3>
          <div className="text-sm space-y-1">
            <div>Điểm: {score}</div>
            <div>Thời gian: {Math.max(0, timeLeft)}s</div>
          </div>
        </div>
      </div>

      {/* Career Progress */}
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white text-sm max-w-xs">
          <h4 className="font-semibold mb-2 flex items-center">
            <Target className="w-4 h-4 mr-1" />
            Tiến Độ Nghề Nghiệp
          </h4>
          {careerGoals.map((goal) => (
            <div key={goal.id} className="mb-2">
              <div className="text-xs text-gray-300">{goal.title}</div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${goal.progress}%`,
                    backgroundColor: goal.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 z-10">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white text-sm max-w-xs">
          <h4 className="font-semibold mb-1">Hướng dẫn:</h4>
          <ul className="text-xs space-y-1">
            <li>• Kéo để xoay môi trường 3D</li>
            <li>• Click vào cố vấn để nhận lời khuyên</li>
            <li>• Click vào kỹ năng để phát triển</li>
            <li>• Hoàn thành 80% mục tiêu để thắng</li>
          </ul>
        </div>
      </div>

      {/* Dialog display */}
      {currentDialog && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 text-white max-w-md">
            <div className="flex items-start">
              <MessageCircle className="w-5 h-5 mr-2 mt-1 text-blue-400 flex-shrink-0" />
              <p className="text-sm">{currentDialog}</p>
            </div>
          </div>
        </div>
      )}

      {/* Control buttons */}
      <div className="absolute bottom-4 right-4 z-10 flex gap-2">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="bg-white/10 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/20 transition-colors"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
        <button
          onClick={onRestart}
          className="bg-white/10 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/20 transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
        <button
          onClick={toggleFullscreen}
          className="bg-white/10 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/20 transition-colors"
        >
          <Maximize className="w-5 h-5" />
        </button>
      </div>

      {/* 3D Canvas */}
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        className="w-full h-full cursor-move"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
        style={{ imageRendering: 'auto' }}
      />

      {/* Victory overlay */}
      {gameState === 'completed' && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-20">
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-8 rounded-2xl text-white text-center max-w-md">
            <Award className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Nghề nghiệp phát triển!</h2>
            <p className="text-lg mb-4">Bạn đã xây dựng được kế hoạch nghề nghiệp xuất sắc!</p>
            <div className="text-sm space-y-1 mb-6">
              <div>Điểm cuối: {score}</div>
              <div>Kỹ năng phát triển: {skills.reduce((sum, skill) => sum + skill.level, 0)}</div>
            </div>
            <button
              onClick={onRestart}
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Chơi lại
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerDevelopmentVirtualMentor3DGame;
