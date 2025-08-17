import React from 'react';
import { Metadata } from 'next';
import NeuralNetworkBuilder3D from '@/components/games/NeuralNetworkBuilder3D';
import { createTitle, createDescription } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('Neural Network Builder 3D - Xây dựng mạng neural 3D tương tác'),
  description: createDescription('Thiết kế, huấn luyện và visualize neural networks trong môi trường 3D. Từ perceptron cơ bản đến deep learning với datasets thực tế và Vietnamese AI applications.'),
  keywords: ['neural network', '3D AI builder', 'machine learning', 'deep learning', 'AI education', 'artificial intelligence', 'Vietnamese AI', 'data science'],
  openGraph: {
    title: 'Neural Network Builder 3D - Xây dựng mạng neural 3D',
    description: 'Môi trường 3D để học AI và machine learning. Tạo neural networks với visualization thời gian thực.',
    type: 'website',
  },
};

export default function NeuralNetworkBuilder3DGame() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 py-8">
      <div className="container mx-auto px-4">
        {/* Game Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Neural Network Builder 3D
          </h1>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            Khám phá thế giới AI và machine learning qua việc xây dựng neural networks trong không gian 3D tương tác. 
            Từ perceptron đơn giản đến deep learning architectures, tất cả với datasets thực tế từ Việt Nam.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-purple-800/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-purple-300 mb-2">🧠 3D Architecture</h3>
              <p className="text-gray-300 text-sm">
                Visualize neurons, layers và connections trong 3D space với real-time activation animation
              </p>
            </div>
            <div className="bg-pink-800/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-pink-300 mb-2">📊 Vietnamese Datasets</h3>
              <p className="text-gray-300 text-sm">
                Train với real-world data: house prices, weather prediction, nông nghiệp classification
              </p>
            </div>
            <div className="bg-indigo-800/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-indigo-300 mb-2">⚡ Live Training</h3>
              <p className="text-gray-300 text-sm">
                Watch gradient descent in action với real-time loss graphs và accuracy metrics
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">🚀 Tính Năng Nổi Bật</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Interactive layer design với drag-and-drop neuron management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Real-time weight visualization với connection strength indicators</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Multiple activation functions: ReLU, Sigmoid, Tanh, Softmax</span>
                </li>
              </ul>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>Progressive challenges: từ XOR problem đến multi-class classification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>Vietnamese AI applications: fintech, agriculture, smart cities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>Performance analytics với loss curves và training metrics</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-800/40 to-indigo-800/40 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">🎓 Deep Learning Education</h3>
            <p className="text-gray-300 mb-4">
              Comprehensive AI learning platform với hands-on neural network development:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl mb-2">🏗️</div>
                <h4 className="font-semibold text-purple-300">Architecture Design</h4>
                <p className="text-sm text-gray-400">Layer depth, neuron count optimization</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📈</div>
                <h4 className="font-semibold text-pink-300">Training Dynamics</h4>
                <p className="text-sm text-gray-400">Gradient descent, learning rates</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="font-semibold text-indigo-300">Performance Tuning</h4>
                <p className="text-sm text-gray-400">Hyperparameter optimization</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🚀</div>
                <h4 className="font-semibold text-blue-300">Real Applications</h4>
                <p className="text-sm text-gray-400">Computer vision, NLP, predictions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Game Component */}
        <div className="w-full max-w-7xl mx-auto">
          <NeuralNetworkBuilder3D />
        </div>

        {/* Vietnamese AI Applications */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-blue-800/30 to-teal-800/30 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">🇻🇳 AI Applications trong Thực Tế Việt Nam</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-300 mb-2">🏠 Bất Động Sản</h4>
                <p className="text-gray-400 text-sm mb-3">
                  Dự đoán giá nhà ở TP.HCM và Hà Nội dựa trên location, diện tích, và market trends
                </p>
                <div className="text-xs text-gray-500">
                  Network: 3 inputs → 6 hidden → 1 output (regression)
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-green-300 mb-2">🌾 Nông Nghiệp Thông Minh</h4>
                <p className="text-gray-400 text-sm mb-3">
                  Classification diseases trong cây lúa và crop yield prediction cho Mekong Delta
                </p>
                <div className="text-xs text-gray-500">
                  Network: 4 inputs → 8 hidden → 3 outputs (multi-class)
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-300 mb-2">🌤️ Dự Báo Thời Tiết</h4>
                <p className="text-gray-400 text-sm mb-3">
                  Weather pattern recognition cho monsoon seasons và typhoon prediction
                </p>
                <div className="text-xs text-gray-500">
                  Network: 4 inputs → 6 hidden → 3 outputs (classification)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Connections */}
        <div className="max-w-6xl mx-auto mt-8">
          <div className="bg-gradient-to-r from-indigo-800/30 to-purple-800/30 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">🔗 Kết Nối Với Curriculum</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-300 mb-2">AI & Machine Learning</h4>
                <p className="text-gray-400 text-sm mb-3">
                  Hands-on practice với neural network architectures và training algorithms
                </p>
                <div className="text-xs text-gray-500">
                  Lessons: ML Fundamentals, Deep Learning, Computer Vision
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-pink-300 mb-2">Python Programming</h4>
                <p className="text-gray-400 text-sm mb-3">
                  Understanding code behind neural networks và data preprocessing
                </p>
                <div className="text-xs text-gray-500">
                  Lessons: NumPy, Pandas, TensorFlow/PyTorch basics
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-indigo-300 mb-2">Data Science & Analytics</h4>
                <p className="text-gray-400 text-sm mb-3">
                  Dataset analysis, feature engineering, và model evaluation techniques
                </p>
                <div className="text-xs text-gray-500">
                  Lessons: Statistics, Data Visualization, Model Validation
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Challenges */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-gradient-to-r from-teal-800/30 to-green-800/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">🎯 Progressive Challenges</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-teal-300 mb-3">Beginner Level</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Simple Perceptron: Binary classification với linear separation</li>
                  <li>• XOR Problem Solver: First multi-layer network với hidden neurons</li>
                  <li>• Basic regression: Predicting continuous values</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-300 mb-3">Advanced Level</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Multi-class Classification: 3+ output categories</li>
                  <li>• Deep Networks: Multiple hidden layers với proper initialization</li>
                  <li>• Hyperparameter Optimization: Learning rates, architectures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-gradient-to-r from-yellow-800/30 to-orange-800/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">🏭 Ứng Dụng Trong Ngành Công Nghiệp</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-300 mb-2">FinTech & Banking</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Credit scoring systems cho Vietnamese banks</li>
                  <li>• Fraud detection trong digital payments (MoMo, ZaloPay)</li>
                  <li>• Investment recommendations dựa trên VN-Index patterns</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-300 mb-2">E-commerce & Tech</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Product recommendations trên Shopee, Lazada Vietnam</li>
                  <li>• Vietnamese language processing cho chatbots</li>
                  <li>• Image recognition cho quality control trong manufacturing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
