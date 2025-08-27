'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  Code2, 
  Play, 
  Bug, 
  CheckCircle2, 
  Lightbulb, 
  Zap, 
  Brain,
  Terminal,
  FileText,
  Cpu,
  Database,
  Globe,
  Settings,
  Target,
  Award,
  BookOpen
} from 'lucide-react';

interface AIPythonCodingAssistantGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface CodingChallenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  category: 'algorithms' | 'data-structures' | 'ai-ml' | 'web-dev' | 'automation';
  prompt: string;
  starterCode: string;
  solution: string;
  testCases: TestCase[];
  aiHints: string[];
  concepts: string[];
  estimatedTime: number; // minutes
}

interface TestCase {
  input: string;
  expectedOutput: string;
  description: string;
}

interface AIAssistant {
  name: string;
  specialty: string;
  personality: string;
  responses: {
    greeting: string[];
    hint: string[];
    encouragement: string[];
    debugging: string[];
    explanation: string[];
  };
}

const AI_ASSISTANTS: AIAssistant[] = [
  {
    name: 'CodeGuru',
    specialty: 'Algorithms & Data Structures',
    personality: 'Methodical and precise',
    responses: {
      greeting: [
        'Xin chào! Tôi là CodeGuru, chuyên gia về thuật toán. Hôm nay chúng ta sẽ giải quyết vấn đề gì?',
        'Chào bạn! Sẵn sàng khám phá thế giới thuật toán chưa? Tôi sẽ hướng dẫn bạn từng bước.',
        'Hello Developer! Hãy cùng nhau xây dựng những giải pháp code hiệu quả nhé!'
      ],
      hint: [
        'Gợi ý: Hãy thử sử dụng approach chia để trị (divide and conquer) cho bài này.',
        'Bạn có thể tối ưu thuật toán bằng cách sử dụng dynamic programming.',
        'Hãy nghĩ về cấu trúc dữ liệu nào phù hợp nhất cho việc lưu trữ và truy xuất.'
      ],
      encouragement: [
        'Tuyệt vời! Bạn đang trên đúng hướng. Tiếp tục phát huy!',
        'Code của bạn ngày càng tiến bộ. Hãy tin vào khả năng của mình!',
        'Excellent! Cách tiếp cận này rất thông minh.'
      ],
      debugging: [
        'Tôi nhận thấy có một lỗi logic nhỏ ở vòng lặp. Hãy kiểm tra điều kiện dừng.',
        'Edge case: Bạn đã xem xét trường hợp input rỗng chưa?',
        'Lỗi index: Hãy đảm bảo không truy cập ngoài phạm vi array.'
      ],
      explanation: [
        'Thuật toán này có độ phức tạp O(n log n) vì chúng ta sử dụng divide and conquer.',
        'Cách tiếp cận này giúp tối ưu bộ nhớ từ O(n²) xuống O(n).',
        'Pattern này rất phổ biến trong competitive programming.'
      ]
    }
  },
  {
    name: 'MLMentor',
    specialty: 'AI & Machine Learning',
    personality: 'Curious and innovative',
    responses: {
      greeting: [
        'Chào bạn! Tôi là MLMentor, chuyên gia AI. Sẵn sàng khám phá machine learning?',
        'Hi there! Cùng nhau xây dựng những mô hình AI thông minh nhé!',
        'Welcome to AI world! Hôm nay chúng ta sẽ tạo ra điều kỳ diệu gì?'
      ],
      hint: [
        'Hãy thử sử dụng scikit-learn để implement model này nhanh chóng.',
        'Feature engineering là chìa khóa. Bạn đã chuẩn bị dữ liệu tốt chưa?',
        'Gradient descent sẽ giúp optimize cost function hiệu quả hơn.'
      ],
      encouragement: [
        'Amazing! Mô hình của bạn đang học tốt đấy!',
        'Perfect! Accuracy đang tăng lên từng epoch.',
        'Brilliant! Cách tiếp cận deep learning này rất sáng tạo!'
      ],
      debugging: [
        'Overfitting detected! Hãy thử thêm regularization hoặc dropout.',
        'Learning rate có vẻ quá cao. Thử giảm xuống 0.001 xem sao.',
        'Data preprocessing: Đừng quên normalize dữ liệu trước khi train.'
      ],
      explanation: [
        'Neural network này sử dụng backpropagation để cập nhật weights.',
        'Cross-validation giúp đánh giá model objektively hơn.',
        'Ensemble methods kết hợp nhiều model để tăng độ chính xác.'
      ]
    }
  },
  {
    name: 'DevBot',
    specialty: 'Web Development & APIs',
    personality: 'Practical and efficient',
    responses: {
      greeting: [
        'Hey Developer! Tôi là DevBot, chuyên gia web development. Sẵn sàng code chưa?',
        'Chào bạn! Cùng xây dựng những ứng dụng web tuyệt vời nhé!',
        'Hello! Hôm nay chúng ta sẽ tạo ra những API và web app gì thú vị?'
      ],
      hint: [
        'Sử dụng Flask hoặc Django cho backend, React cho frontend sẽ rất hiệu quả.',
        'RESTful API design: Đừng quên implement proper status codes.',
        'Async/await sẽ giúp handle concurrent requests tốt hơn.'
      ],
      encouragement: [
        'Great job! API endpoint này hoạt động rất smooth.',
        'Excellent! Frontend design vừa responsive vừa user-friendly.',
        'Perfect! Database queries được optimize rất tốt!'
      ],
      debugging: [
        'CORS error: Hãy check Access-Control-Allow-Origin header.',
        'Database connection: Kiểm tra connection string và credentials.',
        '404 Error: Route mapping có vẻ chưa đúng, hãy double-check URL patterns.'
      ],
      explanation: [
        'MVC pattern giúp tách biệt logic, view và data rất hiệu quả.',
        'JWT tokens provide stateless authentication cho API.',
        'Database indexing sẽ cải thiện query performance đáng kể.'
      ]
    }
  }
];

const CODING_CHALLENGES: CodingChallenge[] = [
  {
    id: 'fibonacci-ai',
    title: 'Fibonacci với AI Optimization',
    description: 'Implement chuỗi Fibonacci sử dụng dynamic programming và tối ưu với AI hints.',
    difficulty: 'Cơ bản',
    category: 'algorithms',
    prompt: 'Viết function tính số Fibonacci thứ n sử dụng dynamic programming để tránh tính toán lặp lại.',
    starterCode: `def fibonacci(n):
    """
    Tính số Fibonacci thứ n sử dụng dynamic programming
    Args:
        n: vị trí trong chuỗi Fibonacci (n >= 0)
    Returns:
        Số Fibonacci thứ n
    """
    # TODO: Implement your solution here
    pass

# Test cases
print(fibonacci(10))  # Expected: 55
print(fibonacci(0))   # Expected: 0
print(fibonacci(1))   # Expected: 1`,
    solution: `def fibonacci(n):
    """
    Tính số Fibonacci thứ n sử dụng dynamic programming
    """
    if n <= 1:
        return n
    
    # Memoization approach
    dp = [0] * (n + 1)
    dp[1] = 1
    
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    
    return dp[n]`,
    testCases: [
      { input: '10', expectedOutput: '55', description: 'Fibonacci số thứ 10' },
      { input: '0', expectedOutput: '0', description: 'Fibonacci số thứ 0' },
      { input: '1', expectedOutput: '1', description: 'Fibonacci số thứ 1' },
      { input: '15', expectedOutput: '610', description: 'Fibonacci số thứ 15' }
    ],
    aiHints: [
      'Sử dụng mảng để lưu trữ các giá trị đã tính toán (memoization)',
      'Base cases: F(0) = 0, F(1) = 1',
      'Công thức: F(n) = F(n-1) + F(n-2)',
      'Time complexity: O(n), Space complexity: O(n)'
    ],
    concepts: ['Dynamic Programming', 'Memoization', 'Time Complexity', 'Space Optimization'],
    estimatedTime: 15
  },
  {
    id: 'ml-linear-regression',
    title: 'Linear Regression từ Scratch',
    description: 'Xây dựng mô hình Linear Regression không sử dụng thư viện, chỉ với NumPy.',
    difficulty: 'Trung bình',
    category: 'ai-ml',
    prompt: 'Implement Linear Regression với gradient descent từ đầu, không sử dụng sklearn.',
    starterCode: `import numpy as np
import matplotlib.pyplot as plt

class LinearRegression:
    def __init__(self, learning_rate=0.01, max_iterations=1000):
        self.learning_rate = learning_rate
        self.max_iterations = max_iterations
        self.weights = None
        self.bias = None
        self.costs = []
    
    def fit(self, X, y):
        """
        Train the linear regression model
        Args:
            X: Training features (m x n)
            y: Training targets (m,)
        """
        # TODO: Initialize parameters
        # TODO: Implement gradient descent
        pass
    
    def predict(self, X):
        """
        Make predictions on new data
        """
        # TODO: Implement prediction
        pass
    
    def cost_function(self, y_true, y_pred):
        """
        Calculate mean squared error
        """
        # TODO: Implement MSE
        pass

# Test with sample data
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

model = LinearRegression()
model.fit(X, y)
predictions = model.predict(X)
print("Predictions:", predictions)`,
    solution: `import numpy as np
import matplotlib.pyplot as plt

class LinearRegression:
    def __init__(self, learning_rate=0.01, max_iterations=1000):
        self.learning_rate = learning_rate
        self.max_iterations = max_iterations
        self.weights = None
        self.bias = None
        self.costs = []
    
    def fit(self, X, y):
        # Initialize parameters
        m, n = X.shape
        self.weights = np.zeros(n)
        self.bias = 0
        
        # Gradient descent
        for i in range(self.max_iterations):
            # Forward pass
            y_pred = self.predict(X)
            
            # Calculate cost
            cost = self.cost_function(y, y_pred)
            self.costs.append(cost)
            
            # Calculate gradients
            dw = (1/m) * np.dot(X.T, (y_pred - y))
            db = (1/m) * np.sum(y_pred - y)
            
            # Update parameters
            self.weights -= self.learning_rate * dw
            self.bias -= self.learning_rate * db
    
    def predict(self, X):
        return np.dot(X, self.weights) + self.bias
    
    def cost_function(self, y_true, y_pred):
        return np.mean((y_true - y_pred) ** 2)`,
    testCases: [
      { input: 'X=[[1],[2],[3]], y=[2,4,6]', expectedOutput: 'predictions≈[2,4,6]', description: 'Perfect linear relationship' },
      { input: 'X=[[0],[1],[2]], y=[1,3,5]', expectedOutput: 'predictions≈[1,3,5]', description: 'Linear with intercept' }
    ],
    aiHints: [
      'Khởi tạo weights và bias bằng 0',
      'Sử dụng gradient descent để tối ưu cost function',
      'Cost function: MSE = (1/m) * Σ(y_pred - y_true)²',
      'Update rule: w = w - α * dw, b = b - α * db'
    ],
    concepts: ['Machine Learning', 'Gradient Descent', 'Linear Regression', 'Cost Function', 'NumPy'],
    estimatedTime: 30
  },
  {
    id: 'api-weather-service',
    title: 'Weather API Service với AI Features',
    description: 'Tạo RESTful API cho dự báo thời tiết với AI prediction và caching thông minh.',
    difficulty: 'Nâng cao',
    category: 'web-dev',
    prompt: 'Xây dựng Weather API service với endpoints để lấy thông tin thời tiết, cache dữ liệu và AI prediction.',
    starterCode: `from flask import Flask, jsonify, request
import requests
import json
from datetime import datetime, timedelta
import numpy as np

app = Flask(__name__)

# In-memory cache (production nên dùng Redis)
weather_cache = {}

class WeatherService:
    def __init__(self):
        self.api_key = "your_api_key_here"
        self.base_url = "http://api.openweathermap.org/data/2.5"
    
    def get_current_weather(self, city):
        """
        Lấy thông tin thời tiết hiện tại
        """
        # TODO: Implement weather API call with caching
        pass
    
    def predict_temperature(self, historical_data):
        """
        Dự đoán nhiệt độ sử dụng simple linear regression
        """
        # TODO: Implement AI prediction
        pass

weather_service = WeatherService()

@app.route('/weather/<city>')
def get_weather(city):
    """
    API endpoint để lấy thông tin thời tiết
    """
    # TODO: Implement endpoint
    pass

@app.route('/weather/<city>/predict')
def predict_weather(city):
    """
    API endpoint để dự đoán thời tiết
    """
    # TODO: Implement prediction endpoint
    pass

if __name__ == '__main__':
    app.run(debug=True)`,
    solution: `from flask import Flask, jsonify, request
import requests
import json
from datetime import datetime, timedelta
import numpy as np
import hashlib

app = Flask(__name__)

# In-memory cache
weather_cache = {}
CACHE_DURATION = 600  # 10 minutes

class WeatherService:
    def __init__(self):
        self.api_key = "your_api_key_here"
        self.base_url = "http://api.openweathermap.org/data/2.5"
    
    def get_cache_key(self, city):
        return hashlib.md5(f"weather_{city.lower()}".encode()).hexdigest()
    
    def get_current_weather(self, city):
        # Check cache first
        cache_key = self.get_cache_key(city)
        now = datetime.now()
        
        if cache_key in weather_cache:
            cached_data, timestamp = weather_cache[cache_key]
            if (now - timestamp).seconds < CACHE_DURATION:
                return cached_data
        
        # Simulate API call (thực tế sẽ gọi OpenWeatherMap API)
        mock_data = {
            "city": city,
            "temperature": np.random.uniform(15, 35),
            "humidity": np.random.uniform(30, 90),
            "description": "Partly cloudy",
            "timestamp": now.isoformat()
        }
        
        # Cache the result
        weather_cache[cache_key] = (mock_data, now)
        
        return mock_data
    
    def predict_temperature(self, historical_data):
        if len(historical_data) < 3:
            return None
        
        # Simple linear regression on temperature trend
        X = np.arange(len(historical_data)).reshape(-1, 1)
        y = np.array([data["temperature"] for data in historical_data])
        
        # Calculate slope and intercept
        n = len(X)
        slope = (n * np.sum(X.flatten() * y) - np.sum(X) * np.sum(y)) / (n * np.sum(X**2) - np.sum(X)**2)
        intercept = (np.sum(y) - slope * np.sum(X)) / n
        
        # Predict next value
        next_x = len(historical_data)
        predicted_temp = slope * next_x + intercept
        
        return {
            "predicted_temperature": float(predicted_temp),
            "confidence": 0.75,  # Mock confidence score
            "trend": "increasing" if slope > 0 else "decreasing"
        }

weather_service = WeatherService()

@app.route('/weather/<city>')
def get_weather(city):
    try:
        weather_data = weather_service.get_current_weather(city)
        return jsonify({
            "status": "success",
            "data": weather_data
        })
    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        }), 500

@app.route('/weather/<city>/predict')
def predict_weather(city):
    try:
        # Get historical data (mock)
        historical_data = [
            {"temperature": 22.5, "timestamp": "2024-01-01"},
            {"temperature": 24.1, "timestamp": "2024-01-02"},
            {"temperature": 25.8, "timestamp": "2024-01-03"},
        ]
        
        prediction = weather_service.predict_temperature(historical_data)
        
        if prediction:
            return jsonify({
                "status": "success",
                "city": city,
                "prediction": prediction
            })
        else:
            return jsonify({
                "status": "error",
                "message": "Insufficient data for prediction"
            }), 400
    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        }), 500`,
    testCases: [
      { input: 'GET /weather/hanoi', expectedOutput: 'JSON with weather data', description: 'Current weather API' },
      { input: 'GET /weather/hanoi/predict', expectedOutput: 'JSON with prediction', description: 'Weather prediction API' }
    ],
    aiHints: [
      'Sử dụng Flask để tạo RESTful API endpoints',
      'Implement caching để giảm API calls và tăng performance',
      'Linear regression đơn giản cho temperature prediction',
      'Error handling và status codes phù hợp'
    ],
    concepts: ['Flask', 'RESTful API', 'Caching', 'AI Prediction', 'Error Handling', 'JSON'],
    estimatedTime: 45
  }
];

export default function AIPythonCodingAssistantGame({ 
  onComplete, 
  timeLeft, 
  onRestart 
}: AIPythonCodingAssistantGameProps) {
  const [currentChallenge, setCurrentChallenge] = useState<CodingChallenge | null>(null);
  const [selectedAssistant, setSelectedAssistant] = useState<AIAssistant | null>(null);
  const [gamePhase, setGamePhase] = useState<'selection' | 'coding' | 'testing' | 'completed'>('selection');
  const [userCode, setUserCode] = useState('');
  const [testResults, setTestResults] = useState<boolean[]>([]);
  const [score, setScore] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [aiMessages, setAiMessages] = useState<string[]>([]);
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);
  const [codeExecutionResults, setCodeExecutionResults] = useState<string[]>([]);
  const [showAIChat, setShowAIChat] = useState(false);

  const startChallenge = (challenge: CodingChallenge, assistant: AIAssistant) => {
    setCurrentChallenge(challenge);
    setSelectedAssistant(assistant);
    setUserCode(challenge.starterCode);
    setGamePhase('coding');
    setTestResults([]);
    setHintsUsed(0);
    setCodeExecutionResults([]);
    
    // AI greeting message
    const greeting = assistant.responses.greeting[Math.floor(Math.random() * assistant.responses.greeting.length)];
    setAiMessages([greeting]);
  };

  const requestAIHint = () => {
    if (!selectedAssistant || !currentChallenge) return;
    
    setHintsUsed(prev => prev + 1);
    
    const hint = currentChallenge.aiHints[Math.min(hintsUsed, currentChallenge.aiHints.length - 1)];
    const aiResponse = selectedAssistant.responses.hint[Math.floor(Math.random() * selectedAssistant.responses.hint.length)];
    
    setAiMessages(prev => [...prev, `💡 ${hint}`, aiResponse]);
    setScore(prev => Math.max(0, prev - 10)); // Penalty for hints
  };

  const runCode = useCallback(() => {
    if (!currentChallenge) return;
    
    // Simulate code execution (trong thực tế sẽ dùng code execution engine)
    const results: string[] = [];
    const testsPassed: boolean[] = [];
    
    currentChallenge.testCases.forEach((testCase, index) => {
      try {
        // Mock execution results
        const isCorrect = Math.random() > 0.3; // Simulated success rate
        testsPassed.push(isCorrect);
        
        if (isCorrect) {
          results.push(`✅ Test ${index + 1}: PASSED - ${testCase.description}`);
        } else {
          results.push(`❌ Test ${index + 1}: FAILED - Expected: ${testCase.expectedOutput}`);
        }
      } catch (error) {
        testsPassed.push(false);
        results.push(`🐛 Test ${index + 1}: ERROR - ${error}`);
      }
    });
    
    setTestResults(testsPassed);
    setCodeExecutionResults(results);
    
    // Calculate score
    const passedCount = testsPassed.filter(Boolean).length;
    const testScore = (passedCount / testsPassed.length) * 100;
    const timeBonus = Math.max(0, (timeLeft / 120) * 20);
    const hintPenalty = hintsUsed * 5;
    
    const totalScore = Math.max(0, testScore + timeBonus - hintPenalty);
    setScore(prev => prev + Math.floor(totalScore));
    
    // AI feedback
    if (selectedAssistant) {
      if (passedCount === testsPassed.length) {
        const encouragement = selectedAssistant.responses.encouragement[Math.floor(Math.random() * selectedAssistant.responses.encouragement.length)];
        setAiMessages(prev => [...prev, `🎉 ${encouragement}`]);
      } else {
        const debugging = selectedAssistant.responses.debugging[Math.floor(Math.random() * selectedAssistant.responses.debugging.length)];
        setAiMessages(prev => [...prev, `🔍 ${debugging}`]);
      }
    }
    
    if (passedCount === testsPassed.length) {
      setCompletedChallenges(prev => [...prev, currentChallenge.id]);
      
      if (completedChallenges.length >= 2) {
        setGamePhase('completed');
        onComplete(true, score + Math.floor(totalScore));
      } else {
        setTimeout(() => setGamePhase('selection'), 3000);
      }
    }
  }, [currentChallenge, selectedAssistant, timeLeft, hintsUsed, score, completedChallenges.length, onComplete]);

  const render3DCodeEnvironment = () => (
    <div className="relative w-full h-64 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-xl border border-cyan-500/30 overflow-hidden">
      {/* 3D Code Editor Simulation */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse at 30% 50%, rgba(59,130,246,0.3) 0%, transparent 50%),
          radial-gradient(ellipse at 70% 50%, rgba(147,51,234,0.3) 0%, transparent 50%),
          linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.9) 100%)
        `,
        perspective: '1000px'
      }}>
        
        {/* Floating Code Blocks */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg border border-cyan-500/20 p-2"
              style={{
                width: `${60 + Math.random() * 40}px`,
                height: `${20 + Math.random() * 20}px`,
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 80}%`,
                transform: `rotateX(${Math.random() * 20}deg) rotateY(${Math.random() * 20}deg) translateZ(${Math.random() * 50}px)`,
                transformStyle: 'preserve-3d',
                animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              <div className="text-xs text-cyan-400 font-mono">
                {['def', 'if', 'for', 'import', 'class', 'return'][Math.floor(Math.random() * 6)]}
              </div>
            </div>
          ))}
        </div>

        {/* AI Assistant Avatar */}
        {selectedAssistant && (
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm p-3 rounded-lg border border-blue-500/30">
            <div className="flex items-center space-x-2">
              <Brain className="w-6 h-6 text-blue-400" />
              <div>
                <div className="text-sm font-bold text-white">{selectedAssistant.name}</div>
                <div className="text-xs text-gray-400">{selectedAssistant.specialty}</div>
              </div>
            </div>
          </div>
        )}

        {/* Coding Stats */}
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm p-3 rounded-lg border border-purple-500/30">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center space-x-1">
              <Code2 className="w-3 h-3 text-cyan-400" />
              <span className="text-white">Lines: {userCode.split('\n').length}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Target className="w-3 h-3 text-green-400" />
              <span className="text-white">Tests: {testResults.filter(Boolean).length}/{testResults.length}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Lightbulb className="w-3 h-3 text-yellow-400" />
              <span className="text-white">Hints: {hintsUsed}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Award className="w-3 h-3 text-purple-400" />
              <span className="text-white">Score: {score}</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateY(0deg); }
          50% { transform: translateY(-10px) rotateY(10deg); }
        }
      `}</style>
    </div>
  );

  if (gamePhase === 'selection') {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">AI Python Coding Assistant</h2>
            <Code2 className="w-8 h-8 text-cyan-400" />
          </div>
          <p className="text-gray-300 mb-6">
            Lập trình Python với sự hỗ trợ của AI thông minh - từ algorithms đến machine learning
          </p>
          
          {render3DCodeEnvironment()}
        </div>

        {/* AI Assistant Selection */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/30">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
            <Brain className="w-6 h-6 text-blue-400" />
            <span>Chọn AI Assistant</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            {AI_ASSISTANTS.map(assistant => (
              <div
                key={assistant.name}
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                  selectedAssistant?.name === assistant.name
                    ? 'bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-blue-500/50'
                    : 'bg-gradient-to-br from-slate-800/30 to-slate-900/30 border-slate-700/30 hover:border-blue-500/30'
                }`}
                onClick={() => setSelectedAssistant(assistant)}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{assistant.name}</h4>
                    <p className="text-sm text-gray-400">{assistant.personality}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-2">{assistant.specialty}</p>
                <div className="text-xs text-blue-300 italic">
                  &quot;{assistant.responses.greeting[0]}&quot;
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge Selection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CODING_CHALLENGES.map(challenge => {
            const isCompleted = completedChallenges.includes(challenge.id);
            const canStart = selectedAssistant !== null;
            
            return (
              <div
                key={challenge.id}
                className={`relative bg-gradient-to-br backdrop-blur-sm p-6 rounded-xl border transition-all duration-300 ${
                  isCompleted
                    ? 'from-green-900/50 to-emerald-900/50 border-green-500/30'
                    : canStart
                      ? 'from-slate-800/50 to-slate-900/50 border-slate-700/30 hover:border-cyan-500/50 cursor-pointer'
                      : 'from-gray-900/50 to-gray-800/50 border-gray-600/30 opacity-60'
                }`}
                onClick={() => canStart && !isCompleted && startChallenge(challenge, selectedAssistant!)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {challenge.category === 'algorithms' && <Cpu className="w-6 h-6 text-blue-400" />}
                    {challenge.category === 'ai-ml' && <Brain className="w-6 h-6 text-purple-400" />}
                    {challenge.category === 'web-dev' && <Globe className="w-6 h-6 text-green-400" />}
                    {challenge.category === 'data-structures' && <Database className="w-6 h-6 text-cyan-400" />}
                    {challenge.category === 'automation' && <Settings className="w-6 h-6 text-orange-400" />}
                    
                    <div>
                      <h3 className="text-lg font-bold text-white">{challenge.title}</h3>
                      <p className="text-sm text-gray-400">{challenge.difficulty} • {challenge.estimatedTime} phút</p>
                    </div>
                  </div>
                  
                  {isCompleted && <CheckCircle2 className="w-6 h-6 text-green-400" />}
                </div>

                <p className="text-gray-300 text-sm mb-4">{challenge.description}</p>

                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Concepts:</div>
                    <div className="flex flex-wrap gap-1">
                      {challenge.concepts.slice(0, 3).map(concept => (
                        <span key={concept} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                          {concept}
                        </span>
                      ))}
                      {challenge.concepts.length > 3 && (
                        <span className="text-xs text-gray-400">+{challenge.concepts.length - 3}</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-400 mb-1">Test Cases:</div>
                    <div className="text-xs text-gray-300">{challenge.testCases.length} test cases</div>
                  </div>
                </div>

                {!isCompleted && canStart && (
                  <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span>Bắt Đầu Challenge</span>
                  </button>
                )}

                {!canStart && (
                  <div className="w-full mt-4 bg-gray-600/20 border border-gray-600/30 text-gray-400 py-2 px-4 rounded-lg text-center text-sm">
                    Chọn AI Assistant trước
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress Summary */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/30">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Tiến Độ Coding</h3>
              <p className="text-gray-300">
                Hoàn thành {completedChallenges.length}/{CODING_CHALLENGES.length} challenges
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-cyan-400">{score}</div>
              <div className="text-sm text-gray-400">Điểm số</div>
            </div>
          </div>

          <div className="w-full bg-gray-700/50 rounded-full h-2 mt-4">
            <div
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(completedChallenges.length / CODING_CHALLENGES.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'coding' && currentChallenge && selectedAssistant) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Coding Challenge</h2>
          <h3 className="text-xl text-cyan-400 mb-4">{currentChallenge.title}</h3>
          
          {render3DCodeEnvironment()}
        </div>

        {/* Challenge Description */}
        <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
          <div className="flex items-center space-x-2 mb-4">
            <BookOpen className="w-6 h-6 text-blue-400" />
            <h3 className="text-lg font-bold text-white">Mô Tả Bài Toán</h3>
          </div>
          <p className="text-gray-300 mb-4">{currentChallenge.description}</p>
          <div className="p-4 bg-slate-800/50 rounded-lg">
            <p className="text-white text-sm">{currentChallenge.prompt}</p>
          </div>
        </div>

        {/* Code Editor */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/30">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-cyan-400" />
              <span>Python Code Editor</span>
            </h3>
            <div className="flex space-x-2">
              <button
                onClick={requestAIHint}
                className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-lg font-medium transition-all duration-200 flex items-center space-x-2"
              >
                <Lightbulb className="w-4 h-4" />
                <span>AI Hint</span>
              </button>
              <button
                onClick={runCode}
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg font-medium transition-all duration-200 flex items-center space-x-2"
              >
                <Play className="w-4 h-4" />
                <span>Run Code</span>
              </button>
            </div>
          </div>

          <textarea
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            className="w-full h-64 bg-slate-900/80 border border-slate-600 text-green-400 font-mono text-sm px-4 py-3 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-none"
            placeholder="# Viết code Python của bạn ở đây..."
            style={{ fontFamily: 'Monaco, Menlo, monospace' }}
          />

          <div className="flex justify-between items-center mt-2 text-sm text-gray-400">
            <span>Lines: {userCode.split('\n').length} | Characters: {userCode.length}</span>
            <span>Difficulty: {currentChallenge.difficulty}</span>
          </div>
        </div>

        {/* Test Results */}
        {codeExecutionResults.length > 0 && (
          <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
            <div className="flex items-center space-x-2 mb-4">
              <FileText className="w-6 h-6 text-purple-400" />
              <h3 className="text-lg font-bold text-white">Kết Quả Test</h3>
            </div>
            
            <div className="space-y-2">
              {codeExecutionResults.map((result, index) => (
                <div key={index} className="p-3 bg-slate-800/50 rounded-lg font-mono text-sm">
                  <span className={`${
                    result.includes('PASSED') ? 'text-green-400' : 
                    result.includes('FAILED') ? 'text-red-400' : 'text-yellow-400'
                  }`}>
                    {result}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-gray-300">
                Passed: {testResults.filter(Boolean).length}/{testResults.length} tests
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">Score:</span>
                <span className="text-cyan-400 font-bold">+{Math.floor((testResults.filter(Boolean).length / testResults.length) * 100)}</span>
              </div>
            </div>
          </div>
        )}

        {/* AI Chat */}
        <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm p-6 rounded-xl border border-green-500/30">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white flex items-center space-x-2">
              <Brain className="w-6 h-6 text-green-400" />
              <span>{selectedAssistant.name} - AI Assistant</span>
            </h3>
            <button
              onClick={() => setShowAIChat(!showAIChat)}
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              {showAIChat ? 'Ẩn Chat' : 'Hiện Chat'}
            </button>
          </div>
          
          {showAIChat && (
            <div className="bg-slate-800/50 rounded-lg p-4 max-h-40 overflow-y-auto">
              {aiMessages.map((message, index) => (
                <div key={index} className="mb-2 p-2 bg-slate-700/30 rounded text-sm text-gray-300">
                  {message}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (gamePhase === 'completed') {
    return (
      <div className="text-center space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">🏆 Excellent Coding!</h2>
          <p className="text-xl text-cyan-400 mb-2">Bạn đã hoàn thành tất cả challenges!</p>
          <p className="text-gray-300 mb-6">
            Kỹ năng Python và tư duy thuật toán của bạn đã được nâng cao đáng kể.
          </p>
          
          {render3DCodeEnvironment()}
        </div>

        <div className="bg-gradient-to-br from-gold-900/50 to-yellow-900/50 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/30">
          <h3 className="text-xl font-bold text-white mb-4">Coding Statistics</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Challenges hoàn thành:</span>
                <span className="text-white font-bold">{completedChallenges.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">AI Assistant:</span>
                <span className="text-blue-400 font-bold">{selectedAssistant?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Hints sử dụng:</span>
                <span className="text-orange-400 font-bold">{hintsUsed}</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Code lines written:</span>
                <span className="text-cyan-400 font-bold">{userCode.split('\n').length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Test success rate:</span>
                <span className="text-green-400 font-bold">
                  {testResults.length > 0 ? Math.round((testResults.filter(Boolean).length / testResults.length) * 100) : 0}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Final Score:</span>
                <span className="text-yellow-400 font-bold">{score}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={onRestart}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl font-bold transition-all duration-200 mr-4"
          >
            Coding Session Mới
          </button>
          <button
            onClick={() => onComplete(true, score)}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl font-bold transition-all duration-200"
          >
            Hoàn Thành
          </button>
        </div>
      </div>
    );
  }

  return null;
}