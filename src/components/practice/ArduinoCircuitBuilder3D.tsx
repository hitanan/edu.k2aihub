"use client";
import React, { useState } from 'react';
import { Cpu, RotateCcw, Play, Square, CheckCircle, AlertCircle } from 'lucide-react';

// Component definitions
interface Component {
  id: string;
  name: string;
  type: 'microcontroller' | 'sensor' | 'actuator' | 'resistor' | 'led' | 'capacitor' | 'wire';
  pins: number;
  description: string;
  voltage: number;
  current?: number;
  resistance?: number;
  color?: string;
  size: { width: number; height: number; depth: number };
  position?: { x: number; y: number; z: number };
  rotation?: { x: number; y: number; z: number };
  connections?: Connection[];
}

interface Connection {
  fromComponent: string;
  fromPin: number;
  toComponent: string;
  toPin: number;
  wireType: 'power' | 'ground' | 'digital' | 'analog';
}

interface Circuit {
  components: Component[];
  connections: Connection[];
  isValid: boolean;
  errors: string[];
}

// Available components library
const AVAILABLE_COMPONENTS: Component[] = [
  {
    id: 'arduino-uno',
    name: 'Arduino Uno R3',
    type: 'microcontroller',
    pins: 32,
    description: 'Microcontroller board based on ATmega328P',
    voltage: 5,
    current: 40,
    size: { width: 68.6, height: 53.4, depth: 15 },
    color: '#2563eb'
  },
  {
    id: 'led-red',
    name: 'LED (Red)',
    type: 'led',
    pins: 2,
    description: 'Light Emitting Diode - Red',
    voltage: 2.2,
    current: 20,
    size: { width: 5, height: 8, depth: 5 },
    color: '#dc2626'
  },
  {
    id: 'led-green',
    name: 'LED (Green)',
    type: 'led',
    pins: 2,
    description: 'Light Emitting Diode - Green',
    voltage: 2.1,
    current: 20,
    size: { width: 5, height: 8, depth: 5 },
    color: '#16a34a'
  },
  {
    id: 'led-blue',
    name: 'LED (Blue)',
    type: 'led',
    pins: 2,
    description: 'Light Emitting Diode - Blue',
    voltage: 3.3,
    current: 20,
    size: { width: 5, height: 8, depth: 5 },
    color: '#2563eb'
  },
  {
    id: 'resistor-220',
    name: '220Ω Resistor',
    type: 'resistor',
    pins: 2,
    description: 'Current limiting resistor for LEDs',
    voltage: 5,
    resistance: 220,
    size: { width: 10, height: 4, depth: 4 },
    color: '#8b5cf6'
  },
  {
    id: 'resistor-1k',
    name: '1kΩ Resistor',
    type: 'resistor',
    pins: 2,
    description: 'Pull-up/pull-down resistor',
    voltage: 5,
    resistance: 1000,
    size: { width: 10, height: 4, depth: 4 },
    color: '#a855f7'
  },
  {
    id: 'button',
    name: 'Push Button',
    type: 'sensor',
    pins: 4,
    description: 'Momentary tactile switch',
    voltage: 5,
    size: { width: 12, height: 12, depth: 8 },
    color: '#64748b'
  },
  {
    id: 'temperature-sensor',
    name: 'TMP36 Temperature Sensor',
    type: 'sensor',
    pins: 3,
    description: 'Analog temperature sensor',
    voltage: 5,
    size: { width: 5, height: 15, depth: 5 },
    color: '#0ea5e9'
  },
  {
    id: 'servo-motor',
    name: 'SG90 Servo Motor',
    type: 'actuator',
    pins: 3,
    description: 'Micro servo motor with 180° rotation',
    voltage: 5,
    current: 100,
    size: { width: 22, height: 12, depth: 25 },
    color: '#ea580c'
  },
  {
    id: 'ultrasonic-sensor',
    name: 'HC-SR04 Ultrasonic Sensor',
    type: 'sensor',
    pins: 4,
    description: 'Distance measuring sensor',
    voltage: 5,
    current: 15,
    size: { width: 45, height: 20, depth: 15 },
    color: '#059669'
  }
];

// Circuit validation rules
const CIRCUIT_RULES = [
  {
    name: 'LED Current Limiting',
    check: (circuit: Circuit) => {
      const leds = circuit.components.filter(c => c.type === 'led');
      const resistors = circuit.components.filter(c => c.type === 'resistor');
      
      for (const led of leds) {
        const hasResistor = circuit.connections.some(conn => {
          const connectedComponents = [conn.fromComponent, conn.toComponent];
          return connectedComponents.includes(led.id) && 
                 resistors.some(r => connectedComponents.includes(r.id));
        });
        if (!hasResistor) {
          return { valid: false, error: `LED ${led.name} needs current limiting resistor` };
        }
      }
      return { valid: true, error: '' };
    }
  },
  {
    name: 'Power Supply Validation',
    check: (circuit: Circuit) => {
      const microcontrollers = circuit.components.filter(c => c.type === 'microcontroller');
      if (microcontrollers.length === 0) {
        return { valid: false, error: 'Circuit needs a microcontroller for power supply' };
      }
      if (microcontrollers.length > 1) {
        return { valid: false, error: 'Only one microcontroller allowed per circuit' };
      }
      return { valid: true, error: '' };
    }
  },
  {
    name: 'Voltage Compatibility',
    check: (circuit: Circuit) => {
      const arduino = circuit.components.find(c => c.id === 'arduino-uno');
      if (!arduino) return { valid: true, error: '' };
      
      const highVoltageComponents = circuit.components.filter(c => 
        c.voltage > 5 && c.type !== 'microcontroller'
      );
      
      if (highVoltageComponents.length > 0) {
        return { 
          valid: false, 
          error: `Components ${highVoltageComponents.map(c => c.name).join(', ')} exceed Arduino 5V limit` 
        };
      }
      return { valid: true, error: '' };
    }
  }
];

const ArduinoCircuitBuilder3D: React.FC = () => {
  const [circuit, setCircuit] = useState<Circuit>({
    components: [],
    connections: [],
    isValid: false,
    errors: []
  });
  
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);
  const [selectedTool, setSelectedTool] = useState<'select' | 'wire' | 'delete'>('select');
  const [isSimulating, setIsSimulating] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);
  
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number } | null>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Circuit challenges for progressive learning
  const CHALLENGES = [
    {
      id: 'basic-led',
      title: 'Basic LED Circuit',
      description: 'Create a simple LED circuit với Arduino và current limiting resistor',
      requirements: ['Arduino Uno', 'LED', '220Ω Resistor'],
      points: 100,
      level: 1
    },
    {
      id: 'multiple-leds',
      title: 'Multiple LED Control',
      description: 'Control 3 different colored LEDs independently',
      requirements: ['Arduino Uno', '3 LEDs', '3 Resistors'],
      points: 200,
      level: 2
    },
    {
      id: 'button-input',
      title: 'Button Input Circuit',
      description: 'Create button-controlled LED với pull-up resistor',
      requirements: ['Arduino Uno', 'Push Button', 'LED', '2 Resistors'],
      points: 250,
      level: 2
    },
    {
      id: 'temperature-display',
      title: 'Temperature Sensing',
      description: 'Build temperature sensor circuit với LED indicator',
      requirements: ['Arduino Uno', 'TMP36 Sensor', 'LEDs for indication'],
      points: 300,
      level: 3
    },
    {
      id: 'servo-control',
      title: 'Servo Motor Control',
      description: 'Control servo motor position with potentiometer',
      requirements: ['Arduino Uno', 'Servo Motor', 'Control Input'],
      points: 350,
      level: 3
    },
    {
      id: 'distance-alarm',
      title: 'Distance Alarm System',
      description: 'Create ultrasonic distance sensor với LED/buzzer alarm',
      requirements: ['Arduino Uno', 'HC-SR04 Sensor', 'Alert LEDs'],
      points: 400,
      level: 4
    }
  ];

  // Validate circuit against rules
  const validateCircuit = (currentCircuit: Circuit): Circuit => {
    const errors: string[] = [];
    let isValid = true;

    for (const rule of CIRCUIT_RULES) {
      const result = rule.check(currentCircuit);
      if (!result.valid) {
        errors.push(result.error);
        isValid = false;
      }
    }

    return {
      ...currentCircuit,
      isValid,
      errors
    };
  };

  // Add component to circuit
  const addComponent = (componentType: Component) => {
    const newComponent: Component = {
      ...componentType,
      id: `${componentType.id}-${Date.now()}`,
      position: { 
        x: Math.random() * 200 + 50, 
        y: Math.random() * 200 + 50, 
        z: 0 
      },
      rotation: { x: 0, y: 0, z: 0 },
      connections: []
    };

    const newCircuit = {
      ...circuit,
      components: [...circuit.components, newComponent]
    };

    setCircuit(validateCircuit(newCircuit));
    setScore(score + 10);
  };

  // Remove component from circuit
  const removeComponent = (componentId: string) => {
    const newCircuit = {
      ...circuit,
      components: circuit.components.filter(c => c.id !== componentId),
      connections: circuit.connections.filter(c => 
        c.fromComponent !== componentId && c.toComponent !== componentId
      )
    };

    setCircuit(validateCircuit(newCircuit));
  };

  // Simulate circuit
  const simulateCircuit = () => {
    if (!circuit.isValid) {
      alert('Fix circuit errors before simulation!');
      return;
    }

    setIsSimulating(!isSimulating);
    
    if (!isSimulating) {
      // Check completed challenges
      CHALLENGES.forEach(challenge => {
        if (challenge.level <= level && !completedChallenges.includes(challenge.id)) {
          const hasRequiredComponents = challenge.requirements.every(req => 
            circuit.components.some(c => c.name.includes(req.split(' ')[0]))
          );
          
          if (hasRequiredComponents) {
            setCompletedChallenges([...completedChallenges, challenge.id]);
            setScore(score + challenge.points);
            
            if (challenge.level > level) {
              setLevel(challenge.level);
            }
          }
        }
      });
    }
  };

  // Clear circuit
  const clearCircuit = () => {
    setCircuit({
      components: [],
      connections: [],
      isValid: false,
      errors: []
    });
    setIsSimulating(false);
  };

  // 3D Canvas rendering (simplified CSS 3D approach)
  const render3DComponent = (component: Component) => {
    const { position = { x: 0, y: 0, z: 0 }, rotation: componentRotation = { x: 0, y: 0, z: 0 } } = component;
    
    return (
      <div
        key={component.id}
        className="absolute cursor-pointer transition-transform duration-200 hover:scale-110"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `
            rotateX(${rotation.x + componentRotation.x}deg) 
            rotateY(${rotation.y + componentRotation.y}deg) 
            rotateZ(${componentRotation.z}deg)
            translate3d(0, 0, ${position.z}px)
          `,
          transformStyle: 'preserve-3d',
        }}
        onClick={() => selectedTool === 'delete' ? removeComponent(component.id) : setSelectedComponent(component)}
      >
        <div
          className={`
            rounded-lg shadow-lg border-2 flex items-center justify-center text-xs font-bold text-white
            ${selectedComponent?.id === component.id ? 'border-yellow-400 ring-2 ring-yellow-200' : 'border-gray-300'}
            ${isSimulating ? 'animate-pulse' : ''}
          `}
          style={{
            width: `${Math.max(component.size.width * 0.8, 40)}px`,
            height: `${Math.max(component.size.height * 0.8, 30)}px`,
            backgroundColor: component.color || '#6b7280',
            boxShadow: `0 ${position.z * 0.1}px ${position.z * 0.2}px rgba(0,0,0,0.3)`
          }}
        >
          <div className="text-center p-1">
            <div className="text-[10px] leading-tight">{component.name}</div>
            {component.type === 'led' && isSimulating && (
              <div className="w-2 h-2 rounded-full mx-auto mt-1 animate-ping" 
                   style={{ backgroundColor: component.color }} />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Arduino Circuit Builder 3D
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Build và test Arduino circuits trong virtual 3D environment
          </p>
          
          {/* Game Stats */}
          <div className="flex justify-center gap-8 mb-6">
            <div className="bg-blue-800/50 px-4 py-2 rounded-lg">
              <div className="text-sm text-blue-200">Score</div>
              <div className="text-2xl font-bold">{score}</div>
            </div>
            <div className="bg-purple-800/50 px-4 py-2 rounded-lg">
              <div className="text-sm text-purple-200">Level</div>
              <div className="text-2xl font-bold">{level}</div>
            </div>
            <div className="bg-green-800/50 px-4 py-2 rounded-lg">
              <div className="text-sm text-green-200">Completed</div>
              <div className="text-2xl font-bold">{completedChallenges.length}/{CHALLENGES.length}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Component Library */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Cpu className="w-5 h-5 mr-2" />
                Components
              </h3>
              
              <div className="space-y-2 max-h-80 overflow-y-auto">
                {AVAILABLE_COMPONENTS.map(component => (
                  <button
                    key={component.id}
                    onClick={() => addComponent(component)}
                    className="w-full p-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-left transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-sm">{component.name}</div>
                        <div className="text-xs text-gray-400">{component.type}</div>
                      </div>
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: component.color || '#6b7280' }}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-bold mb-4">Tools</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedTool('select')}
                  className={`w-full p-2 rounded-lg transition-colors duration-200 ${
                    selectedTool === 'select' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  Select
                </button>
                <button
                  onClick={() => setSelectedTool('wire')}
                  className={`w-full p-2 rounded-lg transition-colors duration-200 ${
                    selectedTool === 'wire' ? 'bg-green-600' : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  Wire
                </button>
                <button
                  onClick={() => setSelectedTool('delete')}
                  className={`w-full p-2 rounded-lg transition-colors duration-200 ${
                    selectedTool === 'delete' ? 'bg-red-600' : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  Delete
                </button>
              </div>
            </div>

            {/* Circuit Controls */}
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-4">Controls</h3>
              <div className="space-y-2">
                <button
                  onClick={simulateCircuit}
                  disabled={!circuit.isValid}
                  className={`w-full p-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center ${
                    circuit.isValid
                      ? isSimulating 
                        ? 'bg-red-600 hover:bg-red-700' 
                        : 'bg-green-600 hover:bg-green-700'
                      : 'bg-gray-600 cursor-not-allowed'
                  }`}
                >
                  {isSimulating ? (
                    <>
                      <Square className="w-4 h-4 mr-2" />
                      Stop Simulation
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Simulate Circuit
                    </>
                  )}
                </button>
                
                <button
                  onClick={clearCircuit}
                  className="w-full p-3 bg-gray-600 hover:bg-gray-700 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Clear Circuit
                </button>
              </div>
            </div>
          </div>

          {/* 3D Canvas */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/30 rounded-lg p-4 h-[600px] relative overflow-hidden">
              <div className="absolute top-4 left-4 z-10">
                <h3 className="text-lg font-bold mb-2">Circuit Design Area</h3>
                <div className="text-sm text-gray-400">
                  Drag components, rotate với mouse wheel
                </div>
              </div>
              
              {/* 3D Perspective Container */}
              <div 
                className="w-full h-full relative"
                style={{ 
                  perspective: '1000px',
                  perspectiveOrigin: 'center center'
                }}
                onMouseMove={(e) => {
                  if (dragOffset) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const mouseX = e.clientX - rect.left;
                    const mouseY = e.clientY - rect.top;
                    
                    setRotation({
                      x: ((mouseY - centerY) / centerY) * 15,
                      y: ((mouseX - centerX) / centerX) * 15
                    });
                  }
                }}
                onMouseDown={(e) => {
                  setDragOffset({ x: e.clientX, y: e.clientY });
                }}
                onMouseUp={() => setDragOffset(null)}
                onMouseLeave={() => setDragOffset(null)}
              >
                {/* 3D Grid Background */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                  }}
                />
                
                {/* 3D Components */}
                <div 
                  className="absolute inset-0"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                  }}
                >
                  {circuit.components.map((component) => 
                    render3DComponent(component)
                  )}
                </div>

                {/* Connection Wires */}
                <svg className="absolute inset-0 pointer-events-none">
                  {circuit.connections.map((connection, index) => {
                    const fromComponent = circuit.components.find(c => c.id === connection.fromComponent);
                    const toComponent = circuit.components.find(c => c.id === connection.toComponent);
                    
                    if (!fromComponent || !toComponent) return null;
                    
                    const fromPos = fromComponent.position || { x: 0, y: 0, z: 0 };
                    const toPos = toComponent.position || { x: 0, y: 0, z: 0 };
                    
                    const wireColors = {
                      power: '#ef4444',
                      ground: '#000000',
                      digital: '#22c55e',
                      analog: '#f59e0b'
                    };
                    
                    return (
                      <line
                        key={index}
                        x1={fromPos.x + 20}
                        y1={fromPos.y + 15}
                        x2={toPos.x + 20}
                        y2={toPos.y + 15}
                        stroke={wireColors[connection.wireType]}
                        strokeWidth="3"
                        className={isSimulating ? 'animate-pulse' : ''}
                      />
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>

          {/* Status Panel */}
          <div className="lg:col-span-1">
            {/* Circuit Status */}
            <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                {circuit.isValid ? (
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                ) : (
                  <AlertCircle className="w-5 h-5 mr-2 text-red-400" />
                )}
                Circuit Status
              </h3>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Components:</span>
                  <span>{circuit.components.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Connections:</span>
                  <span>{circuit.connections.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Status:</span>
                  <span className={circuit.isValid ? 'text-green-400' : 'text-red-400'}>
                    {circuit.isValid ? 'Valid' : 'Invalid'}
                  </span>
                </div>
              </div>

              {circuit.errors.length > 0 && (
                <div className="mt-4 p-3 bg-red-800/30 rounded-lg">
                  <div className="text-sm font-semibold text-red-300 mb-2">Errors:</div>
                  {circuit.errors.map((error, index) => (
                    <div key={index} className="text-xs text-red-200 mb-1">
                      • {error}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Challenges */}
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-4">Challenges</h3>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {CHALLENGES.filter(challenge => challenge.level <= level + 1).map(challenge => (
                  <div
                    key={challenge.id}
                    className={`p-3 rounded-lg border ${
                      completedChallenges.includes(challenge.id)
                        ? 'bg-green-800/30 border-green-600'
                        : challenge.level <= level
                        ? 'bg-blue-800/30 border-blue-600'
                        : 'bg-gray-700/30 border-gray-600'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-semibold text-sm">{challenge.title}</div>
                      <div className="text-xs text-gray-400">Lv.{challenge.level}</div>
                    </div>
                    <div className="text-xs text-gray-300 mb-2">{challenge.description}</div>
                    <div className="text-xs text-gray-400">
                      Reward: {challenge.points} points
                    </div>
                    {completedChallenges.includes(challenge.id) && (
                      <div className="text-xs text-green-400 mt-1">✓ Completed!</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Educational Information */}
        <div className="mt-12 bg-gradient-to-r from-blue-800/30 to-purple-800/30 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Arduino Circuit Building Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-blue-300">Circuit Fundamentals</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Ohm&apos;s Law applications</li>
                <li>• Current limiting resistors</li>
                <li>• Voltage dividers</li>
                <li>• Pull-up/pull-down resistors</li>
                <li>• Power supply considerations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-300">Arduino Programming</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Digital I/O control</li>
                <li>• Analog signal reading</li>
                <li>• PWM output generation</li>
                <li>• Sensor data processing</li>
                <li>• Real-time control loops</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-300">Safety Practices</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Component voltage ratings</li>
                <li>• Current limitations</li>
                <li>• Proper grounding techniques</li>
                <li>• Heat dissipation considerations</li>
                <li>• Protective circuits</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArduinoCircuitBuilder3D;
