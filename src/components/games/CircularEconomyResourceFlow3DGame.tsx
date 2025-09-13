'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Maximize, RotateCcw, Volume2, VolumeX, Recycle, Leaf, Factory, Truck, Home } from 'lucide-react';

interface CircularEconomyResourceFlow3DGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface Resource {
  id: string;
  name: string;
  type: 'raw' | 'manufactured' | 'waste' | 'recycled';
  amount: number;
  value: number;
  location: { x: number; y: number; z: number };
  color: string;
  flowTarget?: string;
}

interface ProcessingNode {
  id: string;
  name: string;
  type: 'extraction' | 'manufacturing' | 'consumption' | 'recycling' | 'disposal';
  position: { x: number; y: number; z: number };
  capacity: number;
  efficiency: number;
  resources: string[];
  color: string;
  icon: React.ReactNode;
}

const CircularEconomyResourceFlow3DGame: React.FC<CircularEconomyResourceFlow3DGameProps> = ({
  onComplete,
  timeLeft,
  onRestart,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [gameState, setGameState] = useState<'playing' | 'completed'>('playing');
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [cameraRotation, setCameraRotation] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });

  // Game data
  const [resources, setResources] = useState<Resource[]>([
    {
      id: 'plastic',
      name: 'Nhựa',
      type: 'raw',
      amount: 100,
      value: 10,
      location: { x: -200, y: 0, z: 0 },
      color: '#3B82F6',
    },
    {
      id: 'metal',
      name: 'Kim loại',
      type: 'raw',
      amount: 80,
      value: 15,
      location: { x: -100, y: 0, z: -100 },
      color: '#6B7280',
    },
    {
      id: 'electronic-waste',
      name: 'Rác điện tử',
      type: 'waste',
      amount: 50,
      value: -5,
      location: { x: 100, y: 0, z: 100 },
      color: '#EF4444',
    },
    {
      id: 'recycled-plastic',
      name: 'Nhựa tái chế',
      type: 'recycled',
      amount: 30,
      value: 8,
      location: { x: 200, y: 0, z: 0 },
      color: '#10B981',
    },
  ]);

  const [processingNodes] = useState<ProcessingNode[]>([
    {
      id: 'extraction',
      name: 'Khai thác',
      type: 'extraction',
      position: { x: -250, y: 0, z: 0 },
      capacity: 100,
      efficiency: 0.8,
      resources: ['plastic', 'metal'],
      color: '#8B5CF6',
      icon: <Factory className="w-6 h-6" />,
    },
    {
      id: 'manufacturing',
      name: 'Sản xuất',
      type: 'manufacturing',
      position: { x: 0, y: 0, z: -200 },
      capacity: 80,
      efficiency: 0.9,
      resources: ['plastic', 'metal', 'recycled-plastic'],
      color: '#F59E0B',
      icon: <Factory className="w-6 h-6" />,
    },
    {
      id: 'consumption',
      name: 'Tiêu dùng',
      type: 'consumption',
      position: { x: 250, y: 0, z: 0 },
      capacity: 120,
      efficiency: 0.7,
      resources: ['manufactured'],
      color: '#EF4444',
      icon: <Home className="w-6 h-6" />,
    },
    {
      id: 'recycling',
      name: 'Tái chế',
      type: 'recycling',
      position: { x: 0, y: 0, z: 200 },
      capacity: 60,
      efficiency: 0.85,
      resources: ['electronic-waste', 'waste'],
      color: '#10B981',
      icon: <Recycle className="w-6 h-6" />,
    },
  ]);

  const [flows, setFlows] = useState<Array<{ from: string; to: string; amount: number; active: boolean }>>([]);
  const [circularityScore, setCircularityScore] = useState(0);

  // 3D projection functions
  const project3DTo2D = useCallback(
    (x: number, y: number, z: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return { x: 0, y: 0 };

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Apply rotation
      const rotatedX = x * Math.cos(cameraRotation.y) - z * Math.sin(cameraRotation.y);
      const rotatedZ = x * Math.sin(cameraRotation.y) + z * Math.cos(cameraRotation.y);
      const rotatedY = y * Math.cos(cameraRotation.x) - rotatedZ * Math.sin(cameraRotation.x);
      const finalZ = y * Math.sin(cameraRotation.x) + rotatedZ * Math.cos(cameraRotation.x);

      // Apply perspective projection
      const distance = 800;
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

    // Clear canvas completely to avoid trails
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw 3D grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    for (let i = -400; i <= 400; i += 100) {
      // Grid lines
      const start1 = project3DTo2D(i, 0, -400);
      const end1 = project3DTo2D(i, 0, 400);
      const start2 = project3DTo2D(-400, 0, i);
      const end2 = project3DTo2D(400, 0, i);

      ctx.beginPath();
      ctx.moveTo(start1.x, start1.y);
      ctx.lineTo(end1.x, end1.y);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(start2.x, start2.y);
      ctx.lineTo(end2.x, end2.y);
      ctx.stroke();
    }

    // Draw resource flows
    flows.forEach((flow) => {
      if (flow.active) {
        const fromNode = processingNodes.find((n) => n.id === flow.from);
        const toNode = processingNodes.find((n) => n.id === flow.to);
        if (fromNode && toNode) {
          const fromPos = project3DTo2D(fromNode.position.x, fromNode.position.y, fromNode.position.z);
          const toPos = project3DTo2D(toNode.position.x, toNode.position.y, toNode.position.z);

          ctx.strokeStyle = '#10B981';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(fromPos.x, fromPos.y);
          ctx.lineTo(toPos.x, toPos.y);
          ctx.stroke();

          // Animated flow particles
          const time = Date.now() * 0.001;
          const progress = (time % 2) / 2;
          const particleX = fromPos.x + (toPos.x - fromPos.x) * progress;
          const particleY = fromPos.y + (toPos.y - fromPos.y) * progress;

          ctx.fillStyle = '#10B981';
          ctx.beginPath();
          ctx.arc(particleX, particleY, 4, 0, 2 * Math.PI);
          ctx.fill();
        }
      }
    });

    // Draw processing nodes
    processingNodes.forEach((node) => {
      const pos = project3DTo2D(node.position.x, node.position.y, node.position.z);
      const scale = pos.scale ?? 1;
      const size = 30 * scale;

      // Node circle
      ctx.fillStyle = node.color;
      ctx.strokeStyle = selectedNode === node.id ? '#FFFFFF' : 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = selectedNode === node.id ? 3 : 1;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, size, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();

      // Node label
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `${12 * scale}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(node.name, pos.x, pos.y + size + 15 * scale);
    });

    // Draw resources
    resources.forEach((resource) => {
      const pos = project3DTo2D(resource.location.x, resource.location.y, resource.location.z);
      const scale = pos.scale ?? 1;
      const size = 15 * scale;

      ctx.fillStyle = resource.color;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, size, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();

      // Resource amount
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `${10 * scale}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(resource.amount.toString(), pos.x, pos.y + 4);
    });
  }, [processingNodes, resources, flows, selectedNode, project3DTo2D]);

  // Mouse interaction handlers
  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true);
    setLastMousePos({ x: event.clientX, y: event.clientY });

    // Check for node selection
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    processingNodes.forEach((node) => {
      const pos = project3DTo2D(node.position.x, node.position.y, node.position.z);
      const distance = Math.sqrt((mouseX - pos.x) ** 2 + (mouseY - pos.y) ** 2);
      if (distance < 30) {
        setSelectedNode(node.id);
        processResource(node);
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
  const processResource = (node: ProcessingNode) => {
    if (node.type === 'recycling') {
      // Convert waste to recycled materials
      setResources((prev) =>
        prev.map((resource) => {
          if (resource.type === 'waste' && resource.amount > 0) {
            return { ...resource, amount: Math.max(0, resource.amount - 10) };
          }
          if (resource.type === 'recycled' && resource.name.includes('tái chế')) {
            return { ...resource, amount: resource.amount + 8 };
          }
          return resource;
        }),
      );

      setScore((prev) => prev + 20);
      setCircularityScore((prev) => Math.min(100, prev + 5));

      // Add flow animation
      setFlows((prev) => [...prev, { from: 'consumption', to: 'recycling', amount: 10, active: true }]);
      setTimeout(() => {
        setFlows((prev) => prev.filter((f) => !(f.from === 'consumption' && f.to === 'recycling')));
      }, 2000);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      canvasRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Game completion check
  useEffect(() => {
    if (circularityScore >= 80) {
      setGameState('completed');
      onComplete(true, score);
    }
  }, [circularityScore, score, onComplete]);

  // Animation loop
  useEffect(() => {
    const animationLoop = () => {
      animate();
      requestAnimationFrame(animationLoop);
    };
    animationLoop();
  }, [animate]);

  return (
    <div className="w-full h-full bg-gradient-to-br from-green-900 via-slate-900 to-blue-900 relative overflow-hidden">
      {/* Game UI */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
          <h3 className="text-lg font-bold mb-2 flex items-center">
            <Recycle className="w-5 h-5 mr-2 text-green-400" />
            Kinh Tế Tuần Hoàn 3D
          </h3>
          <div className="text-sm space-y-1">
            <div>Điểm: {score}</div>
            <div>Thời gian: {Math.max(0, timeLeft)}s</div>
            <div>Độ tuần hoàn: {circularityScore}%</div>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${circularityScore}%` }}
            />
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white text-sm max-w-xs">
          <h4 className="font-semibold mb-1">Hướng dẫn:</h4>
          <ul className="text-xs space-y-1">
            <li>• Kéo để xoay camera 3D</li>
            <li>• Scroll để zoom</li>
            <li>• Click vào trạm tái chế để xử lý rác thải</li>
            <li>• Đạt 80% độ tuần hoàn để thắng</li>
          </ul>
        </div>
      </div>

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
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-2xl text-white text-center max-w-md">
            <Leaf className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Thành công!</h2>
            <p className="text-lg mb-4">Bạn đã tạo ra một hệ thống kinh tế tuần hoàn hiệu quả!</p>
            <div className="text-sm space-y-1 mb-6">
              <div>Điểm cuối: {score}</div>
              <div>Độ tuần hoàn: {circularityScore}%</div>
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

export default CircularEconomyResourceFlow3DGame;
