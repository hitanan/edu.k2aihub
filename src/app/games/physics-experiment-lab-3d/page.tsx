import { Metadata } from 'next';
import { createTitle, createDescription } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('Physics Experiment Lab 3D - Phòng Thí Nghiệm Vật Lý 3D'),
  description: createDescription('Khám phá vật lý qua thí nghiệm 3D tương tác. Mechanics, thermodynamics, electromagnetism, quantum physics và modern physics.'),
  keywords: ['physics experiments', 'vật lý 3D', 'mechanics', 'thermodynamics', 'quantum physics', 'virtual lab'],
  openGraph: {
    title: 'Physics Experiment Lab 3D | K2AiHub',
    description: 'Phòng thí nghiệm vật lý 3D với thí nghiệm tương tác chân thực',
    type: 'website',
  },
};

export default function PhysicsExperimentLab3DPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            ⚛️ Physics Experiment Lab 3D
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Phòng thí nghiệm vật lý 3D tương tác - Khám phá các định luật vật lý từ cơ học đến lượng tử qua thí nghiệm ảo chân thực
          </p>
        </div>

        {/* Game Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">🎯 Physics Concepts</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Classical mechanics và kinematics</li>
                <li>• Thermodynamics và statistical mechanics</li>
                <li>• Electromagnetism và wave physics</li>
                <li>• Quantum mechanics fundamentals</li>
                <li>• Relativity và modern physics</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">🔬 Lab Techniques</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Data collection và error analysis</li>
                <li>• Measurement precision và accuracy</li>
                <li>• Graphical analysis và curve fitting</li>
                <li>• Experimental design principles</li>
                <li>• Scientific report writing</li>
              </ul>
            </div>
          </div>

          {/* Physics Domains */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">⚗️ Physics Domains</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-red-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🏃</div>
                <h4 className="font-bold mb-2">Classical Mechanics</h4>
                <p className="text-sm text-gray-300 mb-3">Motion, forces và energy</p>
                <div className="text-xs text-red-300">
                  <div>• Newton's laws</div>
                  <div>• Projectile motion</div>
                  <div>• Rotational dynamics</div>
                  <div>• Oscillations và waves</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-red-500/30 rounded text-xs">Foundation</span>
                </div>
              </div>
              
              <div className="bg-orange-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🌡️</div>
                <h4 className="font-bold mb-2">Thermodynamics</h4>
                <p className="text-sm text-gray-300 mb-3">Heat, temperature và energy</p>
                <div className="text-xs text-orange-300">
                  <div>• Heat capacity</div>
                  <div>• Phase transitions</div>
                  <div>• Gas laws</div>
                  <div>• Entropy và engines</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-orange-500/30 rounded text-xs">Statistical</span>
                </div>
              </div>
              
              <div className="bg-yellow-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="font-bold mb-2">Electromagnetism</h4>
                <p className="text-sm text-gray-300 mb-3">Electric và magnetic fields</p>
                <div className="text-xs text-yellow-300">
                  <div>• Coulomb&lsquo;s law</div>
                  <div>• Magnetic induction</div>
                  <div>• Maxwell&lsquo;s equations</div>
                  <div>• EM wave propagation</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-yellow-500/30 rounded text-xs">Unified theory</span>
                </div>
              </div>
              
              <div className="bg-blue-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🌊</div>
                <h4 className="font-bold mb-2">Wave Physics</h4>
                <p className="text-sm text-gray-300 mb-3">Vibrations, waves và optics</p>
                <div className="text-xs text-blue-300">
                  <div>• Wave interference</div>
                  <div>• Doppler effect</div>
                  <div>• Diffraction patterns</div>
                  <div>• Laser physics</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-blue-500/30 rounded text-xs">Coherence</span>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">⚛️</div>
                <h4 className="font-bold mb-2">Quantum Physics</h4>
                <p className="text-sm text-gray-300 mb-3">Atomic và subatomic behavior</p>
                <div className="text-xs text-purple-300">
                  <div>• Wave-particle duality</div>
                  <div>• Uncertainty principle</div>
                  <div>• Schrödinger equation</div>
                  <div>• Quantum tunneling</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-purple-500/30 rounded text-xs">Probability</span>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🚀</div>
                <h4 className="font-bold mb-2">Modern Physics</h4>
                <p className="text-sm text-gray-300 mb-3">Relativity và cosmology</p>
                <div className="text-xs text-green-300">
                  <div>• Special relativity</div>
                  <div>• General relativity</div>
                  <div>• Particle physics</div>
                  <div>• Cosmological models</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-green-500/30 rounded text-xs">Cutting-edge</span>
                </div>
              </div>
            </div>
          </div>

          {/* Classic Experiments */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🔬 Classic Physics Experiments</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🍎 Galileo's Inclined Plane</h4>
                <p className="text-gray-300 mb-4">Investigating acceleration và the nature of motion</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Uniform acceleration measurement</div>
                  <div>• Time và distance relationships</div>
                  <div>• Friction coefficient determination</div>
                  <div>• Graphical analysis techniques</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-blue-500/30 rounded-full text-xs">Foundation experiment</span>
                </div>
              </div>
              
              <div className="bg-red-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">💧 Millikan Oil Drop</h4>
                <p className="text-gray-300 mb-4">Measuring elementary charge với precision</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Electric field balancing</div>
                  <div>• Charge quantization discovery</div>
                  <div>• Microscopic observation techniques</div>
                  <div>• Statistical data analysis</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-red-500/30 rounded-full text-xs">Nobel Prize work</span>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🌈 Double Slit Experiment</h4>
                <p className="text-gray-300 mb-4">Wave-particle duality demonstration</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Interference pattern formation</div>
                  <div>• Single photon behavior</div>
                  <div>• Measurement effect observation</div>
                  <div>• Quantum superposition principles</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-green-500/30 rounded-full text-xs">Quantum foundations</span>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🧲 Faraday's Electromagnetic Induction</h4>
                <p className="text-gray-300 mb-4">Discovering the relationship between electricity và magnetism</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Induced EMF measurement</div>
                  <div>• Magnetic flux changes</div>
                  <div>• Lenz's law demonstration</div>
                  <div>• Generator principle verification</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs">Electromagnetic unity</span>
                </div>
              </div>
            </div>
          </div>

          {/* Laboratory Equipment */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">⚙️ Virtual Laboratory Equipment</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-cyan-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">📏</div>
                <h5 className="font-bold text-sm mb-1">Digital Calipers</h5>
                <p className="text-xs text-gray-400">Precision measurement</p>
                <div className="mt-2 text-xs text-cyan-300">±0.01mm accuracy</div>
              </div>
              
              <div className="bg-red-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">⚖️</div>
                <h5 className="font-bold text-sm mb-1">Analytical Balance</h5>
                <p className="text-xs text-gray-400">Mass measurement</p>
                <div className="mt-2 text-xs text-red-300">0.1mg precision</div>
              </div>
              
              <div className="bg-green-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🔬</div>
                <h5 className="font-bold text-sm mb-1">Microscope</h5>
                <p className="text-xs text-gray-400">Magnified observation</p>
                <div className="mt-2 text-xs text-green-300">1000x zoom</div>
              </div>
              
              <div className="bg-yellow-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">📊</div>
                <h5 className="font-bold text-sm mb-1">Oscilloscope</h5>
                <p className="text-xs text-gray-400">Waveform analysis</p>
                <div className="mt-2 text-xs text-yellow-300">Digital sampling</div>
              </div>
              
              <div className="bg-blue-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🌡️</div>
                <h5 className="font-bold text-sm mb-1">Thermal Camera</h5>
                <p className="text-xs text-gray-400">Heat distribution</p>
                <div className="mt-2 text-xs text-blue-300">IR imaging</div>
              </div>
              
              <div className="bg-purple-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🔵</div>
                <h5 className="font-bold text-sm mb-1">Laser System</h5>
                <p className="text-xs text-gray-400">Coherent light source</p>
                <div className="mt-2 text-xs text-purple-300">Monochromatic</div>
              </div>
              
              <div className="bg-orange-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🧲</div>
                <h5 className="font-bold text-sm mb-1">Magnetometer</h5>
                <p className="text-xs text-gray-400">Magnetic field mapping</p>
                <div className="mt-2 text-xs text-orange-300">3D visualization</div>
              </div>
              
              <div className="bg-teal-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">⚡</div>
                <h5 className="font-bold text-sm mb-1">Function Generator</h5>
                <p className="text-xs text-gray-400">Signal generation</p>
                <div className="mt-2 text-xs text-teal-300">Multiple waveforms</div>
              </div>
            </div>
          </div>

          {/* Advanced Simulations */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🖥️ Advanced Physics Simulations</h3>
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h5 className="font-bold mb-3 text-blue-400">🌌 N-Body Simulations</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Planetary motion dynamics</li>
                    <li>• Galaxy formation</li>
                    <li>• Gravitational wave sources</li>
                    <li>• Tidal interactions</li>
                    <li>• Chaos theory demonstrations</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-bold mb-3 text-purple-400">🔬 Molecular Dynamics</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Gas kinetic theory</li>
                    <li>• Phase transition modeling</li>
                    <li>• Brownian motion simulation</li>
                    <li>• Crystallization processes</li>
                    <li>• Material property prediction</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-bold mb-3 text-green-400">⚛️ Quantum Simulations</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Wavefunction evolution</li>
                    <li>• Quantum tunneling visualization</li>
                    <li>• Atomic orbital modeling</li>
                    <li>• Entanglement demonstrations</li>
                    <li>• Quantum computer algorithms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Data Analysis Tools */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">📈 Data Analysis & Visualization</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-600/20 p-6 rounded-lg">
                <h5 className="font-bold mb-3 text-green-400">📊 Statistical Analysis</h5>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Error propagation calculations</div>
                  <div>• Linear và non-linear regression</div>
                  <div>• Uncertainty quantification</div>
                  <div>• Hypothesis testing procedures</div>
                  <div>• Confidence interval determination</div>
                </div>
              </div>
              
              <div className="bg-orange-600/20 p-6 rounded-lg">
                <h5 className="font-bold mb-3 text-orange-400">🎨 Data Visualization</h5>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• 3D surface plotting</div>
                  <div>• Vector field visualization</div>
                  <div>• Animation và time series</div>
                  <div>• Interactive parameter exploration</div>
                  <div>• Publication-quality figures</div>
                </div>
              </div>
            </div>
          </div>

          {/* Research Projects */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🔬 Research Project Templates</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-600/20 p-6 rounded-lg">
                <h5 className="font-bold mb-2 text-blue-400">🎯 Projectile Motion Analysis</h5>
                <p className="text-sm text-gray-400 mb-2">Comprehensive trajectory study</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>• Air resistance effects</div>
                  <div>• Optimal launch angle</div>
                  <div>• Range vs angle graphs</div>
                  <div>• 3D trajectory visualization</div>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg">
                <h5 className="font-bold mb-2 text-purple-400">🌊 Wave Interference Study</h5>
                <p className="text-sm text-gray-400 mb-2">Multi-source wave analysis</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>• Constructive/destructive patterns</div>
                  <div>• Beat frequency phenomena</div>
                  <div>• Standing wave formation</div>
                  <div>• Doppler shift measurements</div>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg">
                <h5 className="font-bold mb-2 text-green-400">⚡ Circuit Analysis Project</h5>
                <p className="text-sm text-gray-400 mb-2">Complex electrical networks</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>• AC/DC circuit behavior</div>
                  <div>• Impedance calculations</div>
                  <div>• Resonance phenomena</div>
                  <div>• Power factor optimization</div>
                </div>
              </div>
            </div>
          </div>

          {/* Lab Performance */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🏆 Lab Performance Metrics</h3>
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg">
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-400">487</div>
                  <div className="text-sm text-gray-300">Experiments completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">96.8%</div>
                  <div className="text-sm text-gray-300">Theoretical prediction accuracy</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">24</div>
                  <div className="text-sm text-gray-300">Physics concepts mastered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">156</div>
                  <div className="text-sm text-gray-300">Lab reports published</div>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="text-center bg-blue-600/20 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">🚀 Sắp Ra Mắt</h3>
            <p className="text-gray-200 mb-6">
              Immersive 3D physics laboratory với haptic feedback, AI-powered experiment guidance, và collaborative research environments.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-blue-300">📅 Dự kiến: Q3 2025</div>
              <div className="text-sm text-blue-300">🎯 Độ tuổi: 12+ (Math foundation helpful)</div>
              <div className="text-sm text-blue-300">⏱️ Experiments: 30 minutes - 3 hours</div>
              <div className="text-sm text-blue-300">🏆 Certification: Physics researcher + Data analyst</div>
              <div className="text-sm text-blue-300">🥽 VR support: Immersive physics exploration</div>
              <div className="text-sm text-blue-300">🤝 University partnerships: Real lab protocols</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}