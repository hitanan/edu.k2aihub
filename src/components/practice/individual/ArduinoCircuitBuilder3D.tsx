import React, { useState, useEffect, useRef, useCallback, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere, Cylinder, Plane } from '@react-three/drei';
import * as THREE from 'three';

// Interface definitions
interface ArduinoComponent {
  id: string;
  name: string;
  type: 'board' | 'sensor' | 'actuator' | 'passive' | 'display';
  description: string;
  pins: string[];
  model: string;
  color: string;
  position?: [number, number, number];
  connected?: boolean;
  unlocked: boolean;
}

interface Connection {
  id: string;
  fromComponent: string;
  fromPin: string;
  toComponent: string;
  toPin: string;
}

interface Level {
  id: number;
  title: string;
  description: string;
  problem: string;
  targetComponents: string[];
  requiredConnections: Array<{
    from: { component: string; pin: string };
    to: { component: string; pin: string };
  }>;
  code: string;
  hints: string[];
  points: number;
  unlocksComponents: string[];
}

interface GameState {
  currentLevel: number;
  score: number;
  unlockedComponents: string[];
  completedLevels: number[];
  isGameStarted: boolean;
  connections: Connection[];
  selectedComponent: string | null;
  selectedPin: string | null;
}

// Component Library
const ARDUINO_COMPONENTS: ArduinoComponent[] = [
  {
    id: 'arduino_uno',
    name: 'Arduino Uno',
    type: 'board',
    description: 'Main microcontroller board',
    pins: ['D0', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'VCC', 'GND'],
    model: 'board',
    color: '#1E40AF',
    unlocked: true
  },
  {
    id: 'ldr_sensor',
    name: 'Light Sensor (LDR)',
    type: 'sensor',
    description: 'Detects light intensity',
    pins: ['VCC', 'GND', 'OUT'],
    model: 'sensor',
    color: '#F59E0B',
    unlocked: true
  },
  {
    id: 'led_red',
    name: 'Red LED',
    type: 'actuator',
    description: 'Light emitting diode',
    pins: ['Anode', 'Cathode'],
    model: 'led',
    color: '#DC2626',
    unlocked: true
  },
  {
    id: 'resistor_220',
    name: '220Ω Resistor',
    type: 'passive',
    description: 'Current limiting resistor',
    pins: ['Pin1', 'Pin2'],
    model: 'resistor',
    color: '#6B7280',
    unlocked: true
  },
  {
    id: 'pir_sensor',
    name: 'PIR Motion Sensor',
    type: 'sensor',
    description: 'Detects motion/movement',
    pins: ['VCC', 'GND', 'OUT'],
    model: 'sensor',
    color: '#7C3AED',
    unlocked: false
  },
  {
    id: 'servo_motor',
    name: 'Servo Motor',
    type: 'actuator',
    description: 'Precise position control motor',
    pins: ['VCC', 'GND', 'Signal'],
    model: 'motor',
    color: '#059669',
    unlocked: false
  }
];

// Game Levels
const GAME_LEVELS: Level[] = [
  {
    id: 1,
    title: 'Đèn đường tắt',
    description: 'Khôi phục hệ thống đèn đường thông minh của thành phố NeoCircuity',
    problem: 'Đèn đường không tự động bật khi trời tối. Người dân phải di chuyển trong bóng tối!',
    targetComponents: ['arduino_uno', 'ldr_sensor', 'led_red', 'resistor_220'],
    requiredConnections: [
      { from: { component: 'ldr_sensor', pin: 'VCC' }, to: { component: 'arduino_uno', pin: 'VCC' } },
      { from: { component: 'ldr_sensor', pin: 'GND' }, to: { component: 'arduino_uno', pin: 'GND' } },
      { from: { component: 'ldr_sensor', pin: 'OUT' }, to: { component: 'arduino_uno', pin: 'A0' } },
      { from: { component: 'led_red', pin: 'Anode' }, to: { component: 'resistor_220', pin: 'Pin1' } },
      { from: { component: 'resistor_220', pin: 'Pin2' }, to: { component: 'arduino_uno', pin: 'D13' } },
      { from: { component: 'led_red', pin: 'Cathode' }, to: { component: 'arduino_uno', pin: 'GND' } }
    ],
    code: `void setup() {
  pinMode(13, OUTPUT);
  pinMode(A0, INPUT);
}

void loop() {
  int lightLevel = analogRead(A0);
  if (lightLevel < 500) {
    digitalWrite(13, HIGH);
  } else {
    digitalWrite(13, LOW);
  }
  delay(100);
}`,
    hints: [
      'Cảm biến ánh sáng cần được kết nối với analog pin',
      'LED cần resistor để bảo vệ khỏi dòng điện quá lớn',
      'Sử dụng analogRead() để đọc giá trị cảm biến'
    ],
    points: 1000,
    unlocksComponents: ['pir_sensor', 'servo_motor']
  },
  {
    id: 2,
    title: 'Cửa tự động lỗi',
    description: 'Sửa chữa hệ thống cửa tự động ở các tòa nhà công cộng',
    problem: 'Cửa tự động không mở khi có người đến gần, gây bất tiện cho người dân!',
    targetComponents: ['arduino_uno', 'pir_sensor', 'servo_motor'],
    requiredConnections: [
      { from: { component: 'pir_sensor', pin: 'VCC' }, to: { component: 'arduino_uno', pin: 'VCC' } },
      { from: { component: 'pir_sensor', pin: 'GND' }, to: { component: 'arduino_uno', pin: 'GND' } },
      { from: { component: 'pir_sensor', pin: 'OUT' }, to: { component: 'arduino_uno', pin: 'D2' } },
      { from: { component: 'servo_motor', pin: 'VCC' }, to: { component: 'arduino_uno', pin: 'VCC' } },
      { from: { component: 'servo_motor', pin: 'GND' }, to: { component: 'arduino_uno', pin: 'GND' } },
      { from: { component: 'servo_motor', pin: 'Signal' }, to: { component: 'arduino_uno', pin: 'D9' } }
    ],
    code: `#include <Servo.h>
Servo doorServo;

void setup() {
  doorServo.attach(9);
  pinMode(2, INPUT);
  doorServo.write(0); // Door closed
}

void loop() {
  if (digitalRead(2) == HIGH) {
    doorServo.write(90); // Open door
    delay(3000);
    doorServo.write(0);  // Close door
  }
  delay(100);
}`,
    hints: [
      'PIR sensor trả về HIGH khi phát hiện chuyển động',
      'Servo motor cần thư viện Servo.h',
      'Góc 0 độ = cửa đóng, 90 độ = cửa mở'
    ],
    points: 1500,
    unlocksComponents: ['dht22_sensor', 'dc_fan', 'relay_module']
  }
];

// Component Props
interface Component3DProps {
  position: [number, number, number];
  selected: boolean;
  onClick: () => void;
}

interface LED3DProps extends Component3DProps {
  on?: boolean;
}

interface Sensor3DProps extends Component3DProps {
  type: string;
}

interface WorkBenchProps {
  children: React.ReactNode;
}

interface GameSceneProps {
  level: Level | undefined;
  selectedComponents: string[];
  onComponentClick: (componentId: string) => void;
  gameState: GameState & { circuitComplete: boolean };
}

// 3D Components
function Arduino3D({ position, selected, onClick }: Component3DProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current && selected) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group position={position} onClick={onClick}>
      <Box ref={meshRef} args={[3, 0.2, 2]} position={[0, 0, 0]}>
        <meshStandardMaterial color={selected ? "#60A5FA" : "#1E40AF"} />
      </Box>
      {/* USB Port */}
      <Box args={[0.3, 0.1, 0.6]} position={[-1.2, 0.15, -0.7]}>
        <meshStandardMaterial color="#C0C0C0" />
      </Box>
      {/* Power Jack */}
      <Cylinder args={[0.15, 0.15, 0.3]} position={[-1.2, 0.15, 0.5]} rotation={[Math.PI/2, 0, 0]}>
        <meshStandardMaterial color="#2D3748" />
      </Cylinder>
      {/* Pin headers */}
      <Box args={[0.1, 0.3, 1.5]} position={[1.2, 0.15, 0]}>
        <meshStandardMaterial color="#2D3748" />
      </Box>
      <Box args={[0.1, 0.3, 1]} position={[-0.8, 0.15, 0.8]}>
        <meshStandardMaterial color="#2D3748" />
      </Box>
      {/* Label */}
      <Text
        position={[0, 0.3, 0]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Arduino Uno
      </Text>
    </group>
  );
}

function Sensor3D({ type, position, selected, onClick }: Sensor3DProps) {
  const color = type === 'ldr' ? '#F59E0B' : type === 'pir' ? '#7C3AED' : '#059669';
  const name = type === 'ldr' ? 'Light Sensor' : type === 'pir' ? 'PIR Sensor' : 'DHT22';

  return (
    <group position={position} onClick={onClick}>
      <Box args={[1, 0.8, 0.6]}>
        <meshStandardMaterial color={selected ? "#60A5FA" : color} />
      </Box>
      {/* Sensor element */}
      <Sphere args={[0.2]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#2D3748" />
      </Sphere>
      {/* Pins */}
      <Box args={[0.05, 0.4, 0.05]} position={[-0.3, -0.4, -0.2]}>
        <meshStandardMaterial color="#FFD700" />
      </Box>
      <Box args={[0.05, 0.4, 0.05]} position={[0, -0.4, -0.2]}>
        <meshStandardMaterial color="#FFD700" />
      </Box>
      <Box args={[0.05, 0.4, 0.05]} position={[0.3, -0.4, -0.2]}>
        <meshStandardMaterial color="#FFD700" />
      </Box>
      <Text
        position={[0, 1.2, 0]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </group>
  );
}

function LED3D({ position, selected, on = false, onClick }: LED3DProps) {
  return (
    <group position={position} onClick={onClick}>
      <Cylinder args={[0.25, 0.25, 0.8]} rotation={[Math.PI/2, 0, 0]}>
        <meshStandardMaterial 
          color={on ? "#FF4444" : selected ? "#60A5FA" : "#DC2626"} 
          emissive={on ? "#441111" : "#000000"}
        />
      </Cylinder>
      {/* Leads */}
      <Cylinder args={[0.02, 0.02, 0.6]} position={[-0.15, -0.5, 0]}>
        <meshStandardMaterial color="#C0C0C0" />
      </Cylinder>
      <Cylinder args={[0.02, 0.02, 0.6]} position={[0.15, -0.5, 0]}>
        <meshStandardMaterial color="#C0C0C0" />
      </Cylinder>
      <Text
        position={[0, 1, 0]}
        fontSize={0.12}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        LED
      </Text>
      {on && (
        <pointLight 
          position={[0, 0, 0]} 
          color="#FF4444" 
          intensity={2} 
          distance={5}
        />
      )}
    </group>
  );
}

function WorkBench({ children }: WorkBenchProps) {
  return (
    <group>
      {/* Work surface */}
      <Plane args={[20, 15]} rotation={[-Math.PI/2, 0, 0]} position={[0, -2, 0]}>
        <meshStandardMaterial color="#8B5CF6" />
      </Plane>
      {/* Breadboard */}
      <Box args={[8, 0.2, 3]} position={[0, -1.8, -2]}>
        <meshStandardMaterial color="#FBBF24" />
      </Box>
      {/* Grid lines on breadboard */}
      {Array.from({length: 30}).map((_, i) => (
        <Box key={i} args={[0.02, 0.05, 3]} position={[-3.8 + (i * 0.25), -1.75, -2]}>
          <meshStandardMaterial color="#D97706" />
        </Box>
      ))}
      {children}
    </group>
  );
}

function GameScene({ level, selectedComponents, onComponentClick, gameState }: GameSceneProps) {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(10, 8, 10);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  const isComponentRequired = (componentId: string) => {
    return level?.targetComponents.includes(componentId) || false;
  };

  const isLedOn = gameState.circuitComplete && selectedComponents.includes('led_red');

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={0.8}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      
      <WorkBench>
        {/* Arduino Uno - Main board */}
        <Arduino3D 
          position={[0, -1.6, 0]}
          selected={selectedComponents.includes('arduino_uno')}
          onClick={() => onComponentClick('arduino_uno')}
        />

        {/* Components based on level */}
        {isComponentRequired('ldr_sensor') && (
          <Sensor3D 
            type="ldr"
            position={[-4, -1.6, -3]}
            selected={selectedComponents.includes('ldr_sensor')}
            onClick={() => onComponentClick('ldr_sensor')}
          />
        )}

        {isComponentRequired('pir_sensor') && (
          <Sensor3D 
            type="pir"
            position={[-4, -1.6, 1]}
            selected={selectedComponents.includes('pir_sensor')}
            onClick={() => onComponentClick('pir_sensor')}
          />
        )}

        {isComponentRequired('led_red') && (
          <LED3D 
            position={[4, -1.6, -3]}
            selected={selectedComponents.includes('led_red')}
            onClick={() => onComponentClick('led_red')}
            on={isLedOn}
          />
        )}

        {isComponentRequired('resistor_220') && (
          <Box args={[1, 0.15, 0.15]} position={[4, -1.6, -1]}>
            <meshStandardMaterial 
              color={selectedComponents.includes('resistor_220') ? "#60A5FA" : "#6B7280"} 
            />
          </Box>
        )}
      </WorkBench>

      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
        minDistance={5}
        maxDistance={20}
      />
    </>
  );
}

interface ArduinoCircuitBuilder3DProps {
  onComplete: (score: number) => void;
}

export default function ArduinoCircuitBuilder3D({ onComplete }: ArduinoCircuitBuilder3DProps) {
  const [gameState, setGameState] = useState<GameState>({
    currentLevel: 1,
    score: 0,
    unlockedComponents: ['arduino_uno', 'ldr_sensor', 'led_red', 'resistor_220'],
    completedLevels: [],
    isGameStarted: false,
    connections: [],
    selectedComponent: null,
    selectedPin: null,
  });
  
  const [selectedComponents, setSelectedComponents] = useState<string[]>([]);
  const [showCode, setShowCode] = useState(false);
  const [circuitComplete, setCircuitComplete] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentLevel = GAME_LEVELS.find(l => l.id === gameState.currentLevel);

  const handleComponentClick = useCallback((componentId: string) => {
    setSelectedComponents(prev => 
      prev.includes(componentId)
        ? prev.filter(id => id !== componentId)
        : [...prev, componentId]
    );
  }, []);

  const checkCircuit = useCallback(() => {
    if (!currentLevel) return;
    
    const hasAllComponents = currentLevel.targetComponents.every(comp => 
      selectedComponents.includes(comp)
    );
    
    if (hasAllComponents && selectedComponents.length === currentLevel.targetComponents.length) {
      setCircuitComplete(true);
      setTimeout(() => {
        const newScore = gameState.score + currentLevel.points;
        setGameState(prev => ({
          ...prev,
          score: newScore,
          completedLevels: [...prev.completedLevels, currentLevel.id],
          unlockedComponents: [...prev.unlockedComponents, ...currentLevel.unlocksComponents]
        }));
        onComplete(newScore);
      }, 2000);
    }
  }, [selectedComponents, currentLevel, gameState.score, onComplete]);

  useEffect(() => {
    checkCircuit();
  }, [checkCircuit]);

  const resetLevel = useCallback(() => {
    setSelectedComponents([]);
    setCircuitComplete(false);
    setShowCode(false);
  }, []);

  const startGame = useCallback(() => {
    setGameState(prev => ({ ...prev, isGameStarted: true }));
  }, []);

  // Fullscreen functionality
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => {
        console.log('Fullscreen not supported or denied:', err);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  if (!gameState.isGameStarted) {
    return (
      <div className="w-full h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center text-white">
        <div className="max-w-4xl mx-auto text-center p-8">
          <div className="mb-6">
            <h1 className="text-6xl font-bold mb-4">🏗️ Arduino Circuit Builder 3D</h1>
            <p className="text-2xl text-blue-300 mb-8">Khôi phục thành phố NeoCircuity bằng Arduino!</p>
          </div>
          
          <div className="bg-black/50 rounded-2xl p-8 mb-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">🌍 Cốt truyện</h2>
            <p className="text-lg text-gray-300 mb-4">
              Trong thành phố tương lai NeoCircuity, hệ thống điều khiển trung tâm bị lỗi! 
              Mọi thiết bị Arduino trong thành phố ngừng hoạt động.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Bạn là kỹ sư điện tử trẻ tuổi được giao nhiệm vụ khôi phục từng khu vực 
              bằng cách xây dựng và lập trình các mạch Arduino.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-800/30 p-4 rounded-xl">
                <h3 className="text-xl font-bold text-blue-300 mb-2">🔧 Xây dựng mạch</h3>
                <p className="text-sm text-gray-300">Kéo thả linh kiện, kết nối dây dẫn trong môi trường 3D</p>
              </div>
              <div className="bg-purple-800/30 p-4 rounded-xl">
                <h3 className="text-xl font-bold text-purple-300 mb-2">💻 Lập trình</h3>
                <p className="text-sm text-gray-300">Viết code Arduino để điều khiển các thiết bị</p>
              </div>
              <div className="bg-green-800/30 p-4 rounded-xl">
                <h3 className="text-xl font-bold text-green-300 mb-2">🏆 Giải quyết</h3>
                <p className="text-sm text-gray-300">Hoàn thành thử thách để khôi phục thành phố</p>
              </div>
            </div>
          </div>

          <button
            onClick={startGame}
            className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl text-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            🚀 Bắt đầu nhiệm vụ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* HUD - Game Information */}
      <div className="absolute top-4 left-4 z-10 bg-black/80 rounded-2xl p-4 backdrop-blur-sm border-2 border-blue-400/50">
        <h2 className="text-xl font-bold text-blue-300 mb-2">🏗️ Nhiệm vụ {gameState.currentLevel}</h2>
        <h3 className="text-lg font-semibold text-yellow-300 mb-2">{currentLevel?.title}</h3>
        <p className="text-sm text-gray-300 mb-3 max-w-xs">{currentLevel?.problem}</p>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-purple-300">💎 Điểm: {gameState.score}</span>
          <span className="text-green-300">✅ Hoàn thành: {gameState.completedLevels.length}</span>
        </div>
      </div>

      {/* Component Selection Panel */}
      <div className="absolute top-4 right-4 z-10 bg-black/80 rounded-2xl p-4 backdrop-blur-sm border-2 border-purple-400/50 max-w-sm">
        <h3 className="text-lg font-bold text-purple-300 mb-3">🔧 Linh kiện cần dùng</h3>
        <div className="space-y-2 mb-4 max-h-40 overflow-y-auto">
          {currentLevel?.targetComponents.map(compId => {
            const component = ARDUINO_COMPONENTS.find(c => c.id === compId);
            const isSelected = selectedComponents.includes(compId);
            return (
              <div key={compId} className={`p-2 rounded-lg border ${isSelected ? 'border-green-400 bg-green-900/30' : 'border-gray-600 bg-gray-800/30'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{component?.name}</span>
                  {isSelected && <span className="text-green-400">✓</span>}
                </div>
                <p className="text-xs text-gray-400">{component?.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setShowCode(!showCode)}
            className="px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold transition-colors"
          >
            {showCode ? '🔧 Ẩn code' : '💻 Xem code'}
          </button>
          
          <button
            onClick={resetLevel}
            className="px-3 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg text-sm font-semibold transition-colors"
          >
            🔄 Reset level
          </button>

          {/* Fullscreen button - only show on desktop */}
          <button
            onClick={toggleFullscreen}
            className="hidden md:block px-3 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-semibold transition-colors"
            title={isFullscreen ? 'Thoát fullscreen' : 'Chế độ toàn màn hình'}
          >
            {isFullscreen ? '🗗 Thoát FS' : '⛶ Fullscreen'}
          </button>
        </div>
      </div>

      {/* Code Panel */}
      {showCode && (
        <div className="absolute bottom-4 left-4 z-10 bg-black/90 rounded-2xl p-4 backdrop-blur-sm border-2 border-green-400/50 max-w-2xl max-h-80 overflow-y-auto">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-green-300">💻 Arduino Code</h3>
            <button
              onClick={() => setShowCode(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>
          <pre className="text-xs text-green-300 font-mono whitespace-pre-wrap bg-gray-900/50 p-3 rounded-lg overflow-x-auto">
            {currentLevel?.code}
          </pre>
        </div>
      )}

      {/* Hints Panel */}
      <div className="absolute bottom-4 right-4 z-10 bg-black/80 rounded-2xl p-4 backdrop-blur-sm border-2 border-yellow-400/50 max-w-sm">
        <h3 className="text-lg font-bold text-yellow-300 mb-3">💡 Gợi ý</h3>
        <div className="space-y-2">
          {currentLevel?.hints.map((hint, index) => (
            <div key={index} className="text-xs text-gray-300 bg-yellow-900/20 p-2 rounded-lg">
              {hint}
            </div>
          ))}
        </div>
      </div>

      {/* Success Modal */}
      {circuitComplete && (
        <div className="absolute inset-0 bg-black/75 flex items-center justify-center z-20">
          <div className="bg-gradient-to-br from-green-800 via-blue-800 to-purple-800 rounded-3xl p-8 max-w-md mx-4 border-4 border-green-400">
            <div className="text-center">
              <div className="text-7xl mb-4">🎉</div>
              <h2 className="text-4xl font-bold text-white mb-4">Tuyệt vời!</h2>
              <p className="text-lg text-gray-200 mb-2">Bạn đã khôi phục thành công:</p>
              <p className="text-xl font-bold text-green-300 mb-4">{currentLevel?.title}</p>
              <div className="text-3xl font-bold text-yellow-300 mb-6">+{currentLevel?.points} điểm</div>
              <p className="text-sm text-gray-300 mb-6">Khu vực này của NeoCircuity đã được cứu!</p>
              <button
                onClick={() => {
                  setCircuitComplete(false);
                  // Next level logic here
                }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-white transition-all text-lg"
              >
                🚀 Tiếp tục nhiệm vụ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3D Scene */}
      <div className="w-full h-full">
        <Canvas 
          shadows
          camera={{ position: [10, 8, 10], fov: 60 }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <GameScene 
              level={currentLevel}
              selectedComponents={selectedComponents}
              onComponentClick={handleComponentClick}
              gameState={{ ...gameState, circuitComplete }}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Loading indicator for 3D scene */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center pointer-events-none">
        <div className="text-white text-center">
          <div className="animate-spin text-4xl mb-2">⚡</div>
          <p className="text-lg">Đang tải môi trường 3D...</p>
        </div>
      </div>
    </div>
  );
}
