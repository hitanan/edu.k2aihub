import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';

export const metadata: Metadata = createGameMetadata('gene-editing-lab-3d');

export default function GeneEditingLab3DPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-cyan-900 to-blue-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            🧬 Gene Editing Lab 3D
          </h1>
          <p className="text-xl text-green-200 max-w-3xl mx-auto">
            Phòng thí nghiệm chỉnh sửa gen thế hệ mới - Làm chủ công nghệ CRISPR, genetic engineering và synthetic biology trong môi trường 3D tương tác
          </p>
        </div>

        {/* Game Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">🎯 Gene Editing Skills</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• CRISPR-Cas9 system mastery</li>
                <li>• DNA sequencing và analysis</li>
                <li>• Gene therapy design</li>
                <li>• Synthetic biology applications</li>
                <li>• Bioethics và safety protocols</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">🔬 Laboratory Techniques</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• PCR amplification và cloning</li>
                <li>• Cell culture và transfection</li>
                <li>• Protein expression analysis</li>
                <li>• Genome-wide screening</li>
                <li>• Clinical trial protocols</li>
              </ul>
            </div>
          </div>

          {/* CRISPR Technologies */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">✂️ CRISPR Technologies</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🧬</div>
                <h4 className="font-bold mb-2">CRISPR-Cas9</h4>
                <p className="text-sm text-gray-300 mb-3">Classical gene editing system</p>
                <div className="text-xs text-blue-300">
                  <div>• Double-strand breaks</div>
                  <div>• Non-homologous end joining</div>
                  <div>• Homology-directed repair</div>
                  <div>• 20-nucleotide targets</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-blue-500/30 rounded text-xs">Most popular</span>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-bold mb-2">Base Editing</h4>
                <p className="text-sm text-gray-300 mb-3">Precise nucleotide changes</p>
                <div className="text-xs text-purple-300">
                  <div>• C-to-T conversion</div>
                  <div>• A-to-G conversion</div>
                  <div>• No double-strand breaks</div>
                  <div>• Reduced off-targets</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-purple-500/30 rounded text-xs">High precision</span>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🔧</div>
                <h4 className="font-bold mb-2">Prime Editing</h4>
                <p className="text-sm text-gray-300 mb-3">Versatile genome editing</p>
                <div className="text-xs text-green-300">
                  <div>• Insertions up to 300bp</div>
                  <div>• Deletions và replacements</div>
                  <div>• Reverse transcriptase</div>
                  <div>• Minimal off-targets</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-green-500/30 rounded text-xs">Next-gen</span>
                </div>
              </div>
              
              <div className="bg-orange-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🧪</div>
                <h4 className="font-bold mb-2">CRISPR Activation</h4>
                <p className="text-sm text-gray-300 mb-3">Gene expression control</p>
                <div className="text-xs text-orange-300">
                  <div>• dCas9 systems</div>
                  <div>• Transcriptional activation</div>
                  <div>• VP64, SAM systems</div>
                  <div>• Multiplexed targeting</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-orange-500/30 rounded text-xs">Epigenetic</span>
                </div>
              </div>
              
              <div className="bg-red-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🔒</div>
                <h4 className="font-bold mb-2">CRISPR Interference</h4>
                <p className="text-sm text-gray-300 mb-3">Gene silencing technology</p>
                <div className="text-xs text-red-300">
                  <div>• CRISPRi systems</div>
                  <div>• Transcriptional repression</div>
                  <div>• KRAB domains</div>
                  <div>• Reversible silencing</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-red-500/30 rounded text-xs">Gene knockdown</span>
                </div>
              </div>
              
              <div className="bg-teal-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">📊</div>
                <h4 className="font-bold mb-2">CRISPR Screening</h4>
                <p className="text-sm text-gray-300 mb-3">High-throughput discovery</p>
                <div className="text-xs text-teal-300">
                  <div>• Pooled libraries</div>
                  <div>• Functional genomics</div>
                  <div>• Drug target discovery</div>
                  <div>• Synthetic lethality</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-teal-500/30 rounded text-xs">Discovery tool</span>
                </div>
              </div>
            </div>
          </div>

          {/* Gene Therapy Applications */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">💊 Gene Therapy Applications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pink-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🏥 Medical Applications</h4>
                <p className="text-gray-300 mb-4">Therapeutic gene editing for human diseases</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Sickle cell disease treatment</div>
                  <div>• Duchenne muscular dystrophy</div>
                  <div>• Leber congenital amaurosis</div>
                  <div>• Beta-thalassemia therapy</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-pink-500/30 rounded-full text-xs">Clinical trials</span>
                </div>
              </div>
              
              <div className="bg-cyan-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🦠 Infectious Diseases</h4>
                <p className="text-gray-300 mb-4">Antimicrobial resistance và viral infections</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• HIV reservoir elimination</div>
                  <div>• Hepatitis B virus clearance</div>
                  <div>• Antibiotic resistance reversal</div>
                  <div>• Prophylactic immunity</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-cyan-500/30 rounded-full text-xs">Global health</span>
                </div>
              </div>
              
              <div className="bg-yellow-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🧠 Neurological Disorders</h4>
                <p className="text-gray-300 mb-4">Central nervous system gene therapy</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Huntington&apos;s disease</div>
                  <div>• Alzheimer&apos;s prevention</div>
                  <div>• Spinal muscular atrophy</div>
                  <div>• Parkinson&apos;s disease therapy</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-yellow-500/30 rounded-full text-xs">Complex diseases</span>
                </div>
              </div>
              
              <div className="bg-indigo-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🫀 Organ Engineering</h4>
                <p className="text-gray-300 mb-4">Regenerative medicine và organ transplant</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Xenotransplantation safety</div>
                  <div>• Organ bioengineering</div>
                  <div>• Stem cell programming</div>
                  <div>• Tissue regeneration</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-indigo-500/30 rounded-full text-xs">Regenerative</span>
                </div>
              </div>
            </div>
          </div>

          {/* Laboratory Equipment */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🔬 3D Lab Equipment</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-blue-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🧬</div>
                <h5 className="font-bold text-sm mb-1">DNA Synthesizer</h5>
                <p className="text-xs text-gray-400">Custom oligonucleotides</p>
                <div className="mt-2 text-xs text-blue-300">99.9% accuracy</div>
              </div>
              
              <div className="bg-green-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">⚡</div>
                <h5 className="font-bold text-sm mb-1">Electroporator</h5>
                <p className="text-xs text-gray-400">Cell transfection</p>
                <div className="mt-2 text-xs text-green-300">95% efficiency</div>
              </div>
              
              <div className="bg-purple-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">📊</div>
                <h5 className="font-bold text-sm mb-1">Flow Cytometer</h5>
                <p className="text-xs text-gray-400">Cell analysis</p>
                <div className="mt-2 text-xs text-purple-300">Multi-parameter</div>
              </div>
              
              <div className="bg-orange-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🔬</div>
                <h5 className="font-bold text-sm mb-1">Confocal Microscope</h5>
                <p className="text-xs text-gray-400">High-resolution imaging</p>
                <div className="mt-2 text-xs text-orange-300">Live cell imaging</div>
              </div>
              
              <div className="bg-red-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🧪</div>
                <h5 className="font-bold text-sm mb-1">PCR Thermal Cycler</h5>
                <p className="text-xs text-gray-400">DNA amplification</p>
                <div className="mt-2 text-xs text-red-300">Real-time qPCR</div>
              </div>
              
              <div className="bg-teal-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">📈</div>
                <h5 className="font-bold text-sm mb-1">Next-Gen Sequencer</h5>
                <p className="text-xs text-gray-400">Genome analysis</p>
                <div className="mt-2 text-xs text-teal-300">Whole genome</div>
              </div>
              
              <div className="bg-yellow-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🥽</div>
                <h5 className="font-bold text-sm mb-1">VR Molecular Viewer</h5>
                <p className="text-xs text-gray-400">3D structure analysis</p>
                <div className="mt-2 text-xs text-yellow-300">Immersive design</div>
              </div>
              
              <div className="bg-cyan-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🤖</div>
                <h5 className="font-bold text-sm mb-1">Automated Workstation</h5>
                <p className="text-xs text-gray-400">High-throughput processing</p>
                <div className="mt-2 text-xs text-cyan-300">384-well format</div>
              </div>
            </div>
          </div>

          {/* Experimental Workflows */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">⚗️ Experimental Workflows</h3>
            <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold mb-3 text-green-400">🎯 Target Identification</h5>
                  <ol className="text-sm text-gray-400 space-y-1 list-decimal ml-4">
                    <li>Literature review và pathway analysis</li>
                    <li>In silico target prediction</li>
                    <li>Guide RNA design và optimization</li>
                    <li>Off-target analysis và scoring</li>
                    <li>Experimental validation planning</li>
                  </ol>
                </div>
                
                <div>
                  <h5 className="font-bold mb-3 text-blue-400">🧬 Construct Design</h5>
                  <ol className="text-sm text-gray-400 space-y-1 list-decimal ml-4">
                    <li>Vector selection và cloning strategy</li>
                    <li>Promoter và regulatory elements</li>
                    <li>Delivery system optimization</li>
                    <li>Safety switch integration</li>
                    <li>Quality control checkpoints</li>
                  </ol>
                </div>
                
                <div>
                  <h5 className="font-bold mb-3 text-purple-400">🔬 In Vitro Testing</h5>
                  <ol className="text-sm text-gray-400 space-y-1 list-decimal ml-4">
                    <li>Cell line selection và culture</li>
                    <li>Transfection protocol optimization</li>
                    <li>Editing efficiency assessment</li>
                    <li>Functional assays và phenotyping</li>
                    <li>Safety profiling và cytotoxicity</li>
                  </ol>
                </div>
                
                <div>
                  <h5 className="font-bold mb-3 text-orange-400">🐭 In Vivo Validation</h5>
                  <ol className="text-sm text-gray-400 space-y-1 list-decimal ml-4">
                    <li>Animal model selection</li>
                    <li>Delivery route optimization</li>
                    <li>Biodistribution studies</li>
                    <li>Efficacy và safety evaluation</li>
                    <li>Regulatory submission preparation</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Bioethics & Safety */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">⚖️ Bioethics & Safety</h3>
            <div className="bg-gradient-to-r from-red-600/10 to-orange-600/10 p-6 rounded-lg">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h5 className="font-bold mb-3 text-red-400">🛡️ Safety Protocols</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Biosafety level containment</li>
                    <li>• Personal protective equipment</li>
                    <li>• Waste disposal procedures</li>
                    <li>• Emergency response plans</li>
                    <li>• Regulatory compliance</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-bold mb-3 text-orange-400">📋 Ethical Considerations</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Informed consent processes</li>
                    <li>• Germline editing implications</li>
                    <li>• Equity và access concerns</li>
                    <li>• Enhancement vs treatment</li>
                    <li>• Cultural sensitivity</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-bold mb-3 text-yellow-400">⚖️ Regulatory Framework</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• FDA IND applications</li>
                    <li>• ICH guidelines compliance</li>
                    <li>• International harmonization</li>
                    <li>• Patent landscape navigation</li>
                    <li>• Clinical trial design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Research Achievements */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🏆 Research Achievements</h3>
            <div className="bg-gradient-to-r from-green-600/10 to-cyan-600/10 p-6 rounded-lg">
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400">127</div>
                  <div className="text-sm text-gray-300">Successful edits</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">8</div>
                  <div className="text-sm text-gray-300">Clinical trials initiated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">95.7%</div>
                  <div className="text-sm text-gray-300">On-target efficiency</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">$2.5M</div>
                  <div className="text-sm text-gray-300">Research grants awarded</div>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="text-center bg-green-600/20 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">🚀 Sắp Ra Mắt</h3>
            <p className="text-gray-200 mb-6">
              Immersive 3D gene editing platform với real laboratory simulations, AI-powered design tools, và collaborative research environments.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-green-300">📅 Dự kiến: Q4 2025</div>
              <div className="text-sm text-green-300">🎯 Độ tuổi: 18+ (Advanced biology knowledge)</div>
              <div className="text-sm text-green-300">⏱️ Experiments: 2-8 hours each</div>
              <div className="text-sm text-green-300">🏆 Certification: Biotechnology + Genetic engineering</div>
              <div className="text-sm text-green-300">🧬 Integration: Real laboratory protocols</div>
              <div className="text-sm text-green-300">🤝 Partnerships: Leading research institutions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}