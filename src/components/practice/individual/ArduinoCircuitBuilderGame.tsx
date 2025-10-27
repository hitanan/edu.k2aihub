'use client';

import React, { useState, useEffect } from 'react';
import { Zap, CheckCircle, RotateCcw, Lightbulb, Cpu, Target } from 'lucide-react';

interface CircuitComponent {
  id: string;
  name: string;
  type: 'led' | 'resistor' | 'sensor' | 'wire' | 'arduino';
  color?: string;
  value?: string;
  icon: string;
  description: string;
}

interface CircuitQuestion {
  id: string;
  title: string;
  description: string;
  targetComponent: string;
  correctAnswer: string;
  options: string[];
  circuit: CircuitComponent[];
  explanation: string;
}

const CIRCUIT_COMPONENTS: CircuitComponent[] = [
  {
    id: 'led-red',
    name: 'LED Đỏ',
    type: 'led',
    color: 'red',
    icon: '🔴',
    description: 'Đèn LED phát sáng màu đỏ khi có dòng điện',
  },
  {
    id: 'led-green',
    name: 'LED Xanh',
    type: 'led',
    color: 'green',
    icon: '🟢',
    description: 'Đèn LED phát sáng màu xanh khi có dòng điện',
  },
  {
    id: 'led-blue',
    name: 'LED Xanh Dương',
    type: 'led',
    color: 'blue',
    icon: '🔵',
    description: 'Đèn LED phát sáng màu xanh dương khi có dòng điện',
  },
  {
    id: 'resistor-220',
    name: 'Điện trở 220Ω',
    type: 'resistor',
    value: '220',
    icon: '⚡',
    description: 'Điện trở hạn chế dòng điện để bảo vệ LED',
  },
  {
    id: 'arduino-uno',
    name: 'Arduino Uno',
    type: 'arduino',
    icon: '🔧',
    description: 'Bo mạch vi điều khiển Arduino Uno',
  },
];

const CIRCUIT_QUESTIONS: CircuitQuestion[] = [
  {
    id: 'basic-led',
    title: 'Mạch LED Cơ Bản',
    description: 'Tạo mạch LED đơn giản với Arduino. Chọn linh kiện phù hợp để làm LED nhấp nháy.',
    targetComponent: 'led-red',
    correctAnswer: 'Chân số 13 và GND',
    options: ['Chân số 13 và GND', 'Chân 5V và GND', 'Chân A0 và A1', 'Chân số 2 và số 3'],
    circuit: [
      CIRCUIT_COMPONENTS[0], // LED Đỏ
      CIRCUIT_COMPONENTS[3], // Điện trở 220Ω
      CIRCUIT_COMPONENTS[4], // Arduino Uno
    ],
    explanation:
      'LED được kết nối với chân số 13 (digital output) và GND thông qua điện trở 220Ω để hạn chế dòng điện.',
  },
  {
    id: 'traffic-light',
    title: 'Đèn Giao Thông',
    description: 'Tạo hệ thống đèn giao thông với 3 LED (đỏ, vàng, xanh). Chọn cách kết nối đúng.',
    targetComponent: 'led-green',
    correctAnswer: 'Chân 11, 12, 13 với GND',
    options: ['Chân 11, 12, 13 với GND', 'Chân A0, A1, A2 với 5V', 'Chân 2, 4, 6 với VIN', 'Chân TX, RX với GND'],
    circuit: [
      CIRCUIT_COMPONENTS[0], // LED Đỏ
      CIRCUIT_COMPONENTS[1], // LED Xanh
      CIRCUIT_COMPONENTS[2], // LED Xanh Dương
      CIRCUIT_COMPONENTS[3], // Điện trở
      CIRCUIT_COMPONENTS[4], // Arduino
    ],
    explanation: 'Mỗi LED kết nối với một chân digital (11, 12, 13) qua điện trở và về GND để tạo đèn giao thông.',
  },
  {
    id: 'pwm-dimmer',
    title: 'Điều Chỉnh Độ Sáng LED',
    description: 'Sử dụng PWM để điều chỉnh độ sáng LED. Chọn chân PWM phù hợp.',
    targetComponent: 'led-blue',
    correctAnswer: 'Chân số 9 (PWM)',
    options: ['Chân số 9 (PWM)', 'Chân số 1 (TX)', 'Chân A0 (Analog)', 'Chân số 8 (Digital)'],
    circuit: [
      CIRCUIT_COMPONENTS[2], // LED Xanh Dương
      CIRCUIT_COMPONENTS[3], // Điện trở
      CIRCUIT_COMPONENTS[4], // Arduino
    ],
    explanation: 'Chân PWM (3, 5, 6, 9, 10, 11) có thể tạo tín hiệu analog để điều chỉnh độ sáng LED.',
  },
];

export default function ArduinoCircuitBuilderGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<string>('');
  const [isLEDBlinking, setIsLEDBlinking] = useState(false);

  const question = CIRCUIT_QUESTIONS[currentQuestion];

  // LED blinking effect when correct answer is selected
  useEffect(() => {
    let blinkInterval: NodeJS.Timeout;

    if (isCorrect && selectedComponent.includes('led')) {
      setIsLEDBlinking(true);
      blinkInterval = setInterval(() => {
        setIsLEDBlinking((prev) => !prev);
      }, 1000); // Blink every second
    } else {
      setIsLEDBlinking(false);
    }

    return () => {
      if (blinkInterval) {
        clearInterval(blinkInterval);
      }
    };
  }, [isCorrect, selectedComponent]);

  const handleComponentSelect = (componentId: string) => {
    setSelectedComponent(componentId);
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    const correct = answer === question.correctAnswer;
    setIsCorrect(correct);
    setShowExplanation(true);

    if (correct) {
      setScore((prev) => prev + 10);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < CIRCUIT_QUESTIONS.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      resetQuestion();
    }
  };

  const resetQuestion = () => {
    setSelectedAnswer('');
    setIsCorrect(null);
    setShowExplanation(false);
    setSelectedComponent('');
    setIsLEDBlinking(false);
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    resetQuestion();
  };

  const getLEDStyle = (component: CircuitComponent) => {
    if (component.type !== 'led') return {};

    const isSelected = selectedComponent === component.id;
    const isTargetComponent = component.id === question.targetComponent;

    const baseStyle = {
      transition: 'all 0.3s ease',
      transform: isSelected ? 'scale(1.1)' : 'scale(1)',
      filter: 'brightness(0.7)',
    };

    // LED blinking effect for target component when correct
    if (isTargetComponent && isCorrect && isLEDBlinking) {
      baseStyle.filter = 'brightness(1.5) drop-shadow(0 0 10px currentColor)';
    } else if (isTargetComponent && isCorrect) {
      baseStyle.filter = 'brightness(1.2)';
    }

    return baseStyle;
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-800 rounded-xl text-white">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          <Zap className="w-8 h-8 text-yellow-400" />
          <h1 className="text-3xl font-bold">Arduino Circuit Builder</h1>
          <Cpu className="w-8 h-8 text-blue-400" />
        </div>

        <div className="flex justify-between items-center max-w-md mx-auto">
          <div className="text-lg">
            Câu hỏi: {currentQuestion + 1}/{CIRCUIT_QUESTIONS.length}
          </div>
          <div className="text-lg">
            Điểm: <span className="text-yellow-400 font-bold">{score}</span>
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="mb-8 p-6 bg-gray-700 rounded-lg">
        <h2 className="text-2xl font-bold mb-2 text-blue-300">{question.title}</h2>
        <p className="text-gray-300 text-lg">{question.description}</p>

        {selectedComponent && (
          <div className="mt-4 p-3 bg-blue-900 rounded-lg">
            <Target className="w-5 h-5 inline mr-2" />
            Đã chọn:{' '}
            <span className="font-bold">{CIRCUIT_COMPONENTS.find((c) => c.id === selectedComponent)?.name}</span>
          </div>
        )}
      </div>

      {/* Circuit Components */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-yellow-400" />
          Linh Kiện Mạch
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {question.circuit.map((component) => (
            <div
              key={component.id}
              onClick={() => handleComponentSelect(component.id)}
              className={`p-4 bg-gray-700 rounded-lg cursor-pointer border-2 transition-all duration-300 hover:bg-gray-600 ${
                selectedComponent === component.id ? 'border-blue-400 bg-blue-900' : 'border-gray-600'
              } ${component.id === question.targetComponent && isCorrect ? 'ring-2 ring-green-400' : ''}`}
              style={getLEDStyle(component)}
            >
              <div className="text-center">
                <div className="text-4xl mb-2">{component.icon}</div>
                <div className="font-bold text-sm">{component.name}</div>
                <div className="text-xs text-gray-400 mt-1">{component.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Answer Options */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Chọn cách kết nối đúng:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option)}
              disabled={showExplanation}
              className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                selectedAnswer === option
                  ? isCorrect
                    ? 'border-green-400 bg-green-900 text-green-100'
                    : 'border-red-400 bg-red-900 text-red-100'
                  : option === question.correctAnswer && showExplanation
                    ? 'border-green-400 bg-green-800 text-green-100'
                    : 'border-gray-600 bg-gray-700 hover:bg-gray-600'
              } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer hover:border-blue-400'}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div
          className={`p-6 rounded-lg mb-6 ${
            isCorrect ? 'bg-green-900 border border-green-400' : 'bg-red-900 border border-red-400'
          }`}
        >
          <div className="flex items-center gap-2 mb-3">
            {isCorrect ? (
              <CheckCircle className="w-6 h-6 text-green-400" />
            ) : (
              <Target className="w-6 h-6 text-red-400" />
            )}
            <h3 className="text-xl font-bold">{isCorrect ? 'Chính xác! 🎉' : 'Chưa đúng! 💡'}</h3>
          </div>
          <p className="text-lg">{question.explanation}</p>

          {isCorrect && selectedComponent.includes('led') && (
            <div className="mt-4 p-3 bg-yellow-900 rounded-lg border border-yellow-400">
              <div className="flex items-center gap-2">
                <span className="text-2xl">💡</span>
                <span className="font-bold">LED đang nhấp nháy!</span>
              </div>
              <p className="text-sm mt-1">Quan sát LED đỏ nhấp nháy mỗi giây như trong thực tế.</p>
            </div>
          )}
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-center gap-4">
        {currentQuestion < CIRCUIT_QUESTIONS.length - 1 ? (
          <button
            onClick={nextQuestion}
            disabled={!showExplanation}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg font-bold transition-colors"
          >
            Câu tiếp theo →
          </button>
        ) : (
          showExplanation && (
            <div className="text-center">
              <div className="text-2xl font-bold mb-4">
                🎊 Hoàn thành! Điểm của bạn: {score}/{CIRCUIT_QUESTIONS.length * 10}
              </div>
              <button
                onClick={restartGame}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-bold transition-colors inline-flex items-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Practice again
              </button>
            </div>
          )
        )}
      </div>

      {/* Code Preview */}
      {selectedComponent.includes('led') && isCorrect && (
        <div className="mt-8 p-6 bg-gray-900 rounded-lg border border-blue-400">
          <h3 className="text-xl font-bold mb-4 text-blue-300">💻 Code Arduino:</h3>
          <pre className="bg-black p-4 rounded-lg text-green-400 text-sm overflow-x-auto">
            {`void setup() {
  pinMode(13, OUTPUT); // Thiết lập chân 13 là đầu ra
}

void loop() {
  digitalWrite(13, HIGH); // Bật LED
  delay(1000);           // Đợi 1 giây
  digitalWrite(13, LOW);  // Tắt LED
  delay(1000);           // Đợi 1 giây
}`}
          </pre>
        </div>
      )}
    </div>
  );
}
