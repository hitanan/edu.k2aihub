import React, { useState } from 'react';
import { 
  Shield, 
  Lock,
  Server,
  Wifi,
  Terminal,
  Eye,
  AlertTriangle,
  CheckCircle,
  Play,
  RotateCcw,
  Award,
  Target,
  Network,
  Database,
  Globe
} from 'lucide-react';

interface EthicalHackingSimulatorProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface HackingTool {
  id: string;
  name: string;
  type: 'reconnaissance' | 'scanning' | 'exploitation' | 'analysis';
  description: string;
  effectivenessScore: number;
  ethicsScore: number;
  timeRequired: number;
  icon: React.ReactNode;
  prerequisites?: string[];
}

interface Vulnerability {
  id: string;
  name: string;
  type: 'network' | 'web' | 'system' | 'database';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  exploitComplexity: number;
  impactScore: number;
  discoveredBy?: string[];
}

interface HackingScenario {
  id: string;
  name: string;
  description: string;
  targetType: 'corporate' | 'government' | 'educational' | 'healthcare';
  vulnerabilities: Vulnerability[];
  ethicalGuidelines: string[];
  legalRequirements: string[];
}

const EthicalHackingSimulatorGame: React.FC<EthicalHackingSimulatorProps> = ({
  onComplete,
  timeLeft,
  onRestart,
}) => {
  // Game state
  const [gamePhase, setGamePhase] = useState<'setup' | 'reconnaissance' | 'testing' | 'reporting' | 'results'>('setup');
  const [isStarted, setIsStarted] = useState(false);
  const [score, setScore] = useState(0);

  // Hacking state
  const [selectedScenario, setSelectedScenario] = useState<HackingScenario | null>(null);
  const [usedTools, setUsedTools] = useState<HackingTool[]>([]);
  const [discoveredVulnerabilities, setDiscoveredVulnerabilities] = useState<Vulnerability[]>([]);
  const [ethicsScore, setEthicsScore] = useState(100);
  const [legalCompliance] = useState(100);
  const [selectedTool, setSelectedTool] = useState<HackingTool | null>(null);

  // Available hacking tools
  const hackingTools: HackingTool[] = [
    // Reconnaissance Tools
    {
      id: 'nmap',
      name: 'Nmap',
      type: 'reconnaissance',
      description: 'Network mapper for port scanning and service discovery',
      effectivenessScore: 9,
      ethicsScore: 10,
      timeRequired: 8,
      icon: <Network className="w-5 h-5" />,
      prerequisites: []
    },
    {
      id: 'whois',
      name: 'WHOIS Lookup',
      type: 'reconnaissance',
      description: 'Domain registration information gathering',
      effectivenessScore: 6,
      ethicsScore: 10,
      timeRequired: 3,
      icon: <Globe className="w-5 h-5" />,
      prerequisites: []
    },
    {
      id: 'social-engineering',
      name: 'Social Engineering',
      type: 'reconnaissance',
      description: 'Human-based information gathering (requires extreme caution)',
      effectivenessScore: 8,
      ethicsScore: 3,
      timeRequired: 12,
      icon: <Eye className="w-5 h-5" />,
      prerequisites: []
    },

    // Scanning Tools
    {
      id: 'nikto',
      name: 'Nikto',
      type: 'scanning',
      description: 'Web server vulnerability scanner',
      effectivenessScore: 8,
      ethicsScore: 9,
      timeRequired: 10,
      icon: <Server className="w-5 h-5" />,
      prerequisites: ['nmap']
    },
    {
      id: 'openvas',
      name: 'OpenVAS',
      type: 'scanning',
      description: 'Comprehensive vulnerability assessment scanner',
      effectivenessScore: 9,
      ethicsScore: 10,
      timeRequired: 15,
      icon: <Shield className="w-5 h-5" />,
      prerequisites: ['nmap']
    },
    {
      id: 'wifi-analyzer',
      name: 'WiFi Analyzer',
      type: 'scanning',
      description: 'Wireless network security assessment',
      effectivenessScore: 7,
      ethicsScore: 8,
      timeRequired: 12,
      icon: <Wifi className="w-5 h-5" />,
      prerequisites: []
    },

    // Exploitation Tools (Ethical Use Only)
    {
      id: 'metasploit',
      name: 'Metasploit',
      type: 'exploitation',
      description: 'Penetration testing framework (requires authorization)',
      effectivenessScore: 10,
      ethicsScore: 5,
      timeRequired: 20,
      icon: <Target className="w-5 h-5" />,
      prerequisites: ['nikto', 'openvas']
    },
    {
      id: 'sqlmap',
      name: 'SQLMap',
      type: 'exploitation',
      description: 'SQL injection detection and exploitation',
      effectivenessScore: 9,
      ethicsScore: 6,
      timeRequired: 15,
      icon: <Database className="w-5 h-5" />,
      prerequisites: ['nikto']
    },

    // Analysis Tools
    {
      id: 'wireshark',
      name: 'Wireshark',
      type: 'analysis',
      description: 'Network protocol analyzer for traffic inspection',
      effectivenessScore: 8,
      ethicsScore: 10,
      timeRequired: 10,
      icon: <Terminal className="w-5 h-5" />,
      prerequisites: []
    },
    {
      id: 'burp-suite',
      name: 'Burp Suite',
      type: 'analysis',
      description: 'Web application security testing platform',
      effectivenessScore: 9,
      ethicsScore: 9,
      timeRequired: 18,
      icon: <Lock className="w-5 h-5" />,
      prerequisites: ['nikto']
    }
  ];

  // Hacking scenarios
  const hackingScenarios: HackingScenario[] = [
    {
      id: 'corporate-pentest',
      name: 'Corporate Penetration Test',
      description: 'Authorized security assessment of corporate infrastructure',
      targetType: 'corporate',
      vulnerabilities: [
        {
          id: 'open-ports',
          name: 'Open Network Ports',
          type: 'network',
          severity: 'medium',
          description: 'Unnecessary services exposed to network',
          exploitComplexity: 3,
          impactScore: 5
        },
        {
          id: 'sql-injection',
          name: 'SQL Injection',
          type: 'web',
          severity: 'high',
          description: 'Database queries vulnerable to injection attacks',
          exploitComplexity: 6,
          impactScore: 8
        },
        {
          id: 'weak-passwords',
          name: 'Weak Password Policy',
          type: 'system',
          severity: 'medium',
          description: 'Default or easily guessable passwords',
          exploitComplexity: 4,
          impactScore: 6
        },
        {
          id: 'unencrypted-data',
          name: 'Unencrypted Data Storage',
          type: 'database',
          severity: 'critical',
          description: 'Sensitive data stored without encryption',
          exploitComplexity: 2,
          impactScore: 10
        }
      ],
      ethicalGuidelines: [
        'Obtain written authorization before testing',
        'Test only specified targets and timeframes',
        'Do not cause service disruption',
        'Protect discovered information',
        'Provide detailed remediation recommendations'
      ],
      legalRequirements: [
        'Signed penetration testing agreement',
        'Scope clearly defined and approved',
        'Non-disclosure agreement in place',
        'Emergency contact procedures established'
      ]
    },
    {
      id: 'web-app-assessment',
      name: 'Web Application Security Assessment',
      description: 'Security evaluation of web application vulnerabilities',
      targetType: 'corporate',
      vulnerabilities: [
        {
          id: 'xss-vulnerability',
          name: 'Cross-Site Scripting (XSS)',
          type: 'web',
          severity: 'high',
          description: 'User input not properly sanitized',
          exploitComplexity: 5,
          impactScore: 7
        },
        {
          id: 'csrf-vulnerability',
          name: 'Cross-Site Request Forgery',
          type: 'web',
          severity: 'medium',
          description: 'Missing CSRF protection tokens',
          exploitComplexity: 6,
          impactScore: 5
        },
        {
          id: 'broken-auth',
          name: 'Broken Authentication',
          type: 'web',
          severity: 'critical',
          description: 'Authentication bypass vulnerabilities',
          exploitComplexity: 8,
          impactScore: 9
        }
      ],
      ethicalGuidelines: [
        'Test only with explicit permission',
        'Use test accounts when possible',
        'Avoid accessing sensitive user data',
        'Document all findings thoroughly'
      ],
      legalRequirements: [
        'Web application testing authorization',
        'Data privacy compliance',
        'Backup and recovery procedures'
      ]
    }
  ];

  // Use tool
  const useTool = () => {
    if (!selectedTool || !selectedScenario) return;

    // Check prerequisites
    const hasPrerequisites = selectedTool.prerequisites?.every(prereq =>
      usedTools.some(tool => tool.id === prereq)
    ) ?? true;

    if (!hasPrerequisites) {
      alert(`Prerequisites not met: ${selectedTool.prerequisites?.join(', ')}`);
      return;
    }

    // Add tool to used tools
    setUsedTools(prev => [...prev, selectedTool]);
    
    // Update ethics and legal scores based on tool
    if (selectedTool.ethicsScore < 7) {
      setEthicsScore(prev => Math.max(0, prev - (10 - selectedTool.ethicsScore) * 2));
    }

    // Discover vulnerabilities based on tool effectiveness
    const toolEffectiveness = selectedTool.effectivenessScore / 10;
    const potentialVulns = selectedScenario.vulnerabilities.filter(v => 
      !discoveredVulnerabilities.some(dv => dv.id === v.id)
    );

    const newVulns = potentialVulns.filter(() => Math.random() < toolEffectiveness * 0.7);
    if (newVulns.length > 0) {
      newVulns.forEach(vuln => {
        vuln.discoveredBy = vuln.discoveredBy ? [...vuln.discoveredBy, selectedTool.id] : [selectedTool.id];
      });
      setDiscoveredVulnerabilities(prev => [...prev, ...newVulns]);
    }

    setSelectedTool(null);
  };

  // Start hacking simulation
  const startHacking = (scenario: HackingScenario) => {
    setSelectedScenario(scenario);
    setGamePhase('reconnaissance');
    setIsStarted(true);
  };

  // Move to next phase
  const moveToNextPhase = () => {
    if (gamePhase === 'reconnaissance') setGamePhase('testing');
    else if (gamePhase === 'testing') setGamePhase('reporting');
    else if (gamePhase === 'reporting') {
      // Calculate final score
      const vulnerabilityScore = discoveredVulnerabilities.reduce((sum, vuln) => {
        const severityMultiplier = { low: 1, medium: 2, high: 3, critical: 4 }[vuln.severity];
        return sum + vuln.impactScore * severityMultiplier;
      }, 0);

      const timeBonus = timeLeft > 60 ? 200 : timeLeft > 30 ? 150 : 100;
      const ethicsBonus = ethicsScore;
      const legalBonus = legalCompliance;
      const toolVarietyBonus = new Set(usedTools.map(t => t.type)).size * 50;

      const finalScore = Math.max(0, Math.min(1000,
        vulnerabilityScore * 3 + timeBonus + ethicsBonus + legalBonus + toolVarietyBonus
      ));

      setScore(finalScore);
      setGamePhase('results');
      
      setTimeout(() => {
        onComplete(true, finalScore);
      }, 3000);
    }
  };

  // Render setup phase
  if (!isStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-black p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🛡️</div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Ethical Hacking Simulator
            </h1>
            <p className="text-xl text-red-100 mb-8">
              Learn penetration testing and cybersecurity assessment ethically
            </p>
          </div>

          <div className="bg-black bg-opacity-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Shield className="mr-3" />
              Ethical Hacking Principles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">📋</div>
                <h3 className="text-lg font-semibold text-white mb-2">Authorization</h3>
                <p className="text-red-100">Always obtain explicit written permission before testing</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-lg font-semibold text-white mb-2">Scope Limitation</h3>
                <p className="text-red-100">Test only within agreed boundaries and timeframes</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="text-lg font-semibold text-white mb-2">Responsible Disclosure</h3>
                <p className="text-red-100">Report vulnerabilities responsibly with remediation guidance</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {hackingScenarios.map(scenario => (
              <div key={scenario.id} className="bg-black bg-opacity-30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">{scenario.name}</h3>
                <p className="text-red-100 mb-4">{scenario.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Target Vulnerabilities:</h4>
                  <div className="space-y-2">
                    {scenario.vulnerabilities.slice(0, 2).map(vuln => (
                      <div key={vuln.id} className="flex items-center justify-between">
                        <span className="text-red-100 text-sm">{vuln.name}</span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          vuln.severity === 'critical' ? 'bg-red-600' :
                          vuln.severity === 'high' ? 'bg-orange-600' :
                          vuln.severity === 'medium' ? 'bg-yellow-600' :
                          'bg-blue-600'
                        }`}>
                          {vuln.severity.toUpperCase()}
                        </span>
                      </div>
                    ))}
                    {scenario.vulnerabilities.length > 2 && (
                      <div className="text-sm text-gray-400">
                        +{scenario.vulnerabilities.length - 2} more vulnerabilities
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Legal Requirements:</h4>
                  <ul className="text-red-100 text-sm space-y-1">
                    {scenario.legalRequirements.slice(0, 2).map((req, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle size={12} className="mr-2 text-green-400" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => startHacking(scenario)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center"
                >
                  <Play className="mr-2" size={20} />
                  Begin Assessment
                </button>
              </div>
            ))}
          </div>

          <div className="bg-yellow-900 bg-opacity-30 rounded-xl p-6">
            <div className="flex items-start">
              <AlertTriangle className="text-yellow-400 mr-3 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Important Disclaimer</h3>
                <p className="text-yellow-100">
                  This simulator is for educational purposes only. All hacking activities must be performed
                  with explicit authorization and within legal boundaries. Unauthorized access to computer
                  systems is illegal and unethical.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render game phases
  if (gamePhase === 'reconnaissance' || gamePhase === 'testing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-black p-6">
        <div className="max-w-7xl mx-auto">
          {/* Status Dashboard */}
          <div className="bg-black bg-opacity-50 rounded-xl p-6 mb-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="text-xl font-bold text-white">{discoveredVulnerabilities.length}</div>
                <div className="text-red-100 text-sm">Vulnerabilities</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">{usedTools.length}</div>
                <div className="text-red-100 text-sm">Tools Used</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-400">{ethicsScore}%</div>
                <div className="text-red-100 text-sm">Ethics Score</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-blue-400">{legalCompliance}%</div>
                <div className="text-red-100 text-sm">Legal Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-yellow-400">
                  {gamePhase === 'reconnaissance' ? 'Recon' : 'Testing'}
                </div>
                <div className="text-red-100 text-sm">Phase</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Tools Panel */}
            <div className="bg-black bg-opacity-30 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Security Tools</h2>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {hackingTools.filter(tool => 
                  gamePhase === 'reconnaissance' ? 
                    ['reconnaissance', 'scanning', 'analysis'].includes(tool.type) :
                    tool.type === 'exploitation' || tool.type === 'analysis'
                ).map((tool) => (
                  <div
                    key={tool.id}
                    onClick={() => setSelectedTool(tool)}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      selectedTool?.id === tool.id
                        ? 'bg-red-600 bg-opacity-50 border-2 border-red-400'
                        : 'bg-white bg-opacity-10 hover:bg-opacity-20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-red-400 mr-3">{tool.icon}</div>
                        <div>
                          <h3 className="font-semibold text-white">{tool.name}</h3>
                          <div className="text-sm text-red-100 capitalize">{tool.type}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 text-sm">Effectiveness: {tool.effectivenessScore}/10</div>
                        <div className="text-yellow-400 text-sm">Ethics: {tool.ethicsScore}/10</div>
                      </div>
                    </div>
                    {usedTools.some(used => used.id === tool.id) && (
                      <div className="mt-2 text-center">
                        <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">USED</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {selectedTool && (
                <div className="mt-6 p-4 bg-red-600 bg-opacity-20 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">{selectedTool.name}</h3>
                  <p className="text-red-100 text-sm mb-4">{selectedTool.description}</p>
                  
                  {selectedTool.prerequisites && selectedTool.prerequisites.length > 0 && (
                    <div className="mb-4">
                      <div className="text-sm text-red-100">Prerequisites:</div>
                      <div className="text-sm text-yellow-400">
                        {selectedTool.prerequisites?.map((prereq, index) => {
                          const tool = hackingTools.find(t => t.id === prereq);
                          const isUsed = usedTools.some(used => used.id === prereq);
                          return (
                            <span key={prereq} className={isUsed ? 'text-green-400' : 'text-red-400'}>
                              {tool?.name}{isUsed ? ' ✓' : ' ✗'}
                              {index < (selectedTool.prerequisites?.length || 0) - 1 ? ', ' : ''}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={useTool}
                    disabled={usedTools.some(used => used.id === selectedTool.id)}
                    className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white rounded font-semibold transition-all"
                  >
                    {usedTools.some(used => used.id === selectedTool.id) ? 'Already Used' : 'Use Tool'}
                  </button>
                </div>
              )}
            </div>

            {/* Findings Panel */}
            <div className="bg-black bg-opacity-30 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Security Findings</h2>
              
              {selectedScenario && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{selectedScenario.name}</h3>
                  <div className="text-red-100 text-sm">
                    Target: <span className="text-white capitalize">{selectedScenario.targetType}</span>
                  </div>
                </div>
              )}

              {discoveredVulnerabilities.length === 0 ? (
                <div className="text-center text-red-100 py-8">
                  <Shield size={48} className="mx-auto mb-4 opacity-50" />
                  <p>No vulnerabilities discovered yet. Use reconnaissance tools to begin scanning.</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-96 overflow-y-auto mb-6">
                  {discoveredVulnerabilities.map((vuln, index) => (
                    <div key={index} className="bg-white bg-opacity-10 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-white">{vuln.name}</h4>
                        <span className={`px-2 py-1 rounded text-xs ${
                          vuln.severity === 'critical' ? 'bg-red-600' :
                          vuln.severity === 'high' ? 'bg-orange-600' :
                          vuln.severity === 'medium' ? 'bg-yellow-600' :
                          'bg-blue-600'
                        }`}>
                          {vuln.severity.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-red-100 text-sm mb-2">{vuln.description}</p>
                      <div className="flex justify-between text-xs">
                        <span className="text-red-100">Type: {vuln.type}</span>
                        <span className="text-yellow-400">Impact: {vuln.impactScore}/10</span>
                      </div>
                      {vuln.discoveredBy && (
                        <div className="mt-2 text-xs text-green-400">
                          Discovered by: {vuln.discoveredBy.join(', ')}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <button
                onClick={moveToNextPhase}
                disabled={discoveredVulnerabilities.length === 0}
                className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white rounded-lg font-semibold transition-all"
              >
                {gamePhase === 'reconnaissance' ? 'Move to Testing Phase' : 'Generate Report'}
              </button>
              <div className="text-center text-sm text-red-100 mt-2">
                {discoveredVulnerabilities.length === 0 ? 
                  'Discover vulnerabilities to proceed' :
                  `${discoveredVulnerabilities.length} vulnerabilities found`
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render reporting phase
  if (gamePhase === 'reporting') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-red-900 p-6 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">📋</div>
          <h1 className="text-4xl font-bold text-white mb-6">Generating Security Report</h1>
          <div className="bg-black bg-opacity-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Compiling Assessment Results</h2>
            <p className="text-xl text-red-100 mb-6">
              Analyzing discovered vulnerabilities, documenting findings, and preparing remediation recommendations...
            </p>
            <div className="flex items-center justify-center space-x-4 text-white">
              <div className="animate-spin">⚙️</div>
              <div>Generating comprehensive security report</div>
              <div className="animate-pulse">📊</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render results phase
  if (gamePhase === 'results') {
    const criticalVulns = discoveredVulnerabilities.filter(v => v.severity === 'critical').length;
    const highVulns = discoveredVulnerabilities.filter(v => v.severity === 'high').length;
    const mediumVulns = discoveredVulnerabilities.filter(v => v.severity === 'medium').length;
    const lowVulns = discoveredVulnerabilities.filter(v => v.severity === 'low').length;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-black p-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🛡️</div>
          <h1 className="text-4xl font-bold text-white mb-8">Security Assessment Complete</h1>

          <div className="bg-black bg-opacity-50 rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-white">{score.toFixed(0)}</div>
                <div className="text-red-100">Assessment Score</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400">{discoveredVulnerabilities.length}</div>
                <div className="text-red-100">Total Vulnerabilities</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">{ethicsScore}%</div>
                <div className="text-red-100">Ethics Score</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">{legalCompliance}%</div>
                <div className="text-red-100">Legal Compliance</div>
              </div>
            </div>

            <div className="text-lg text-red-100 mb-6">
              {score > 800 ? '🏆 Excellent assessment! Professional-grade penetration testing.' :
               score > 600 ? '🎯 Good security assessment with comprehensive findings.' :
               score > 400 ? '🔍 Decent assessment. Consider more thorough reconnaissance.' :
               '📚 Learning experience. Remember ethical guidelines and proper authorization.'}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Vulnerability Breakdown</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-red-100">Critical:</span>
                    <span className="text-red-400 font-semibold">{criticalVulns}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-red-100">High:</span>
                    <span className="text-orange-400 font-semibold">{highVulns}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-red-100">Medium:</span>
                    <span className="text-yellow-400 font-semibold">{mediumVulns}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-red-100">Low:</span>
                    <span className="text-blue-400 font-semibold">{lowVulns}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Tools Used</h3>
                <div className="space-y-2">
                  {['reconnaissance', 'scanning', 'exploitation', 'analysis'].map(type => {
                    const count = usedTools.filter(t => t.type === type).length;
                    return count > 0 ? (
                      <div key={type} className="flex justify-between items-center text-red-100">
                        <span className="capitalize">{type}:</span>
                        <span className="text-white">{count}</span>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Assessment Quality</h3>
                <div className="space-y-2 text-red-100">
                  <div>Scope: <span className="text-white">{selectedScenario?.targetType}</span></div>
                  <div>Time Efficiency: <span className="text-white">{timeLeft > 60 ? 'Excellent' : timeLeft > 30 ? 'Good' : 'Rushed'}</span></div>
                  <div>Methodology: <span className="text-white">
                    {new Set(usedTools.map(t => t.type)).size >= 3 ? 'Comprehensive' : 'Basic'}
                  </span></div>
                  <div>Ethical Compliance: <span className="text-white">
                    {ethicsScore >= 80 ? 'Excellent' : ethicsScore >= 60 ? 'Good' : 'Needs Improvement'}
                  </span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={onRestart}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center"
            >
              <RotateCcw className="mr-2" size={20} />
              New Assessment
            </button>
            <button
              onClick={() => onComplete(true, score)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center"
            >
              <Award className="mr-2" size={20} />
              Complete
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default EthicalHackingSimulatorGame;