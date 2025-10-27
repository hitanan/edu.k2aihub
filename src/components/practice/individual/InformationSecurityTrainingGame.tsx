'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { Shield, Lock, Users, CheckCircle, Star, AlertTriangle, Eye, Target } from 'lucide-react';

interface InformationSecurityTrainingGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface SecurityScenario {
  id: string;
  title: string;
  category: 'phishing' | 'password' | 'social-engineering' | 'data-protection' | 'malware';
  description: string;
  icon: string;
  urgencyLevel: 'low' | 'medium' | 'high' | 'critical';
  situation: string;
  evidence: string[];
  responses: Array<{
    text: string;
    isCorrect: boolean;
    explanation: string;
    securityImpact: number;
    complianceScore: number;
  }>;
  learningPoints: string[];
  realWorldExample: string;
  points: number;
}

const securityScenarios: SecurityScenario[] = [
  {
    id: 'phishing-email',
    title: 'Suspicious Email Investigation',
    category: 'phishing',
    description: 'A potentially malicious email requires immediate security assessment',
    icon: '📧',
    urgencyLevel: 'high',
    situation: 'An employee received an email claiming to be from the IT department requesting immediate password verification due to a "security breach". The email has urgent language and asks for credentials to be entered on an external link.',
    evidence: [
      'Sender email: it-support@companyname-security.net',
      'Subject: URGENT: Account Security Verification Required',
      'Contains external link to credential form',
      'Poor grammar and spelling errors',
      'Requests immediate action within 2 hours',
      'No internal ticket reference number'
    ],
    responses: [
      {
        text: 'Click the link to verify account security',
        isCorrect: false,
        explanation: 'This would lead to credential theft and potential system compromise',
        securityImpact: -30,
        complianceScore: -20
      },
      {
        text: 'Report as phishing and delete immediately',
        isCorrect: true,
        explanation: 'Correct response - this email shows multiple phishing indicators',
        securityImpact: 25,
        complianceScore: 20
      },
      {
        text: 'Forward to colleagues to warn them',
        isCorrect: false,
        explanation: 'Forwarding malicious emails can increase exposure risk',
        securityImpact: -10,
        complianceScore: 5
      },
      {
        text: 'Contact IT directly through official channels to verify',
        isCorrect: true,
        explanation: 'Excellent practice - verify suspicious requests through known channels',
        securityImpact: 30,
        complianceScore: 25
      }
    ],
    learningPoints: [
      'Always verify requests through official channels',
      'Be suspicious of urgent language and external links',
      'Check sender domain carefully for spoofing',
      'Report phishing attempts to security team'
    ],
    realWorldExample: 'In 2021, over 83% of organizations experienced phishing attacks, with average losses of $4.65M per successful breach.',
    points: 25
  },
  {
    id: 'password-policy',
    title: 'Password Security Incident',
    category: 'password',
    description: 'An employee\'s account shows suspicious activity patterns',
    icon: '🔐',
    urgencyLevel: 'medium',
    situation: 'Security monitoring detected that an employee account has been accessed from unusual locations and times. The account uses a weak password that appears in breach databases. Multiple failed login attempts preceded successful access.',
    evidence: [
      'Password: "Company123!" (common pattern)',
      'Login from new geographic location',
      'Access at 3 AM (outside normal hours)',
      '15 failed attempts before successful login',
      'Password unchanged for 18 months',
      'No multi-factor authentication enabled'
    ],
    responses: [
      {
        text: 'Ignore - could be employee traveling',
        isCorrect: false,
        explanation: 'Ignoring security indicators increases risk of compromise',
        securityImpact: -25,
        complianceScore: -15
      },
      {
        text: 'Force immediate password reset and enable MFA',
        isCorrect: true,
        explanation: 'Proper incident response - secure the account immediately',
        securityImpact: 30,
        complianceScore: 25
      },
      {
        text: 'Send password security reminder email',
        isCorrect: false,
        explanation: 'Too passive for active security incident',
        securityImpact: 5,
        complianceScore: 10
      },
      {
        text: 'Temporarily disable account pending investigation',
        isCorrect: true,
        explanation: 'Good security measure to prevent further unauthorized access',
        securityImpact: 25,
        complianceScore: 20
      }
    ],
    learningPoints: [
      'Implement strong password policies',
      'Enable multi-factor authentication for all accounts',
      'Monitor for unusual access patterns',
      'Respond quickly to security indicators'
    ],
    realWorldExample: 'Weak passwords contribute to 81% of hacking-related breaches according to Verizon\'s 2021 Data Breach Investigations Report.',
    points: 30
  },
  {
    id: 'social-engineering',
    title: 'Social Engineering Attack',
    category: 'social-engineering',
    description: 'A caller claims to need urgent access to company systems',
    icon: '📞',
    urgencyLevel: 'critical',
    situation: 'A person calls the reception desk claiming to be a new IT contractor who needs urgent remote access to the company network to fix a critical server issue. They claim their manager authorized this but they don\'t have the proper credentials yet. They\'re asking for temporary access credentials.',
    evidence: [
      'Caller has no official company email or ID',
      'Claims urgent authorization from unnamed manager',
      'Refuses to provide verifiable contact information',
      'Uses technical jargon to appear legitimate',
      'Creates time pressure ("servers will crash")',
      'No documented work order or ticket number'
    ],
    responses: [
      {
        text: 'Provide temporary guest access credentials',
        isCorrect: false,
        explanation: 'Social engineering success - never provide access without verification',
        securityImpact: -40,
        complianceScore: -30
      },
      {
        text: 'Refuse access and verify through IT management',
        isCorrect: true,
        explanation: 'Correct - all access requests must be verified through proper channels',
        securityImpact: 35,
        complianceScore: 30
      },
      {
        text: 'Ask for their company ID number for verification',
        isCorrect: false,
        explanation: 'Social engineers can fake or research ID numbers',
        securityImpact: -15,
        complianceScore: 5
      },
      {
        text: 'Document the request and report to security team',
        isCorrect: true,
        explanation: 'Excellent - document potential security incidents for investigation',
        securityImpact: 30,
        complianceScore: 25
      }
    ],
    learningPoints: [
      'Never provide access based on verbal requests alone',
      'Verify all access requests through official channels',
      'Be suspicious of urgency and pressure tactics',
      'Document and report suspicious requests'
    ],
    realWorldExample: 'Social engineering attacks increased 270% in 2021, often targeting human psychology rather than technical vulnerabilities.',
    points: 35
  },
  {
    id: 'data-protection',
    title: 'Data Leak Prevention',
    category: 'data-protection',
    description: 'Sensitive customer data is being shared inappropriately',
    icon: '🗂️',
    urgencyLevel: 'high',
    situation: 'A marketing team member has been sharing customer email lists with external vendors for campaign targeting without proper data protection agreements. The data includes personal information and purchasing history. A privacy audit discovered this unauthorized sharing.',
    evidence: [
      'Customer emails shared via unencrypted file transfer',
      'No data processing agreements with vendors',
      'Personal data includes purchase history and preferences',
      'Sharing violates company privacy policy',
      'No customer consent for external sharing',
      'Data includes EU residents (GDPR applicable)'
    ],
    responses: [
      {
        text: 'Continue sharing but ask for data agreements',
        isCorrect: false,
        explanation: 'Insufficient response - data is already compromised and sharing must stop',
        securityImpact: -20,
        complianceScore: -25
      },
      {
        text: 'Immediately stop sharing and assess breach impact',
        isCorrect: true,
        explanation: 'Correct immediate response to prevent further data exposure',
        securityImpact: 30,
        complianceScore: 35
      },
      {
        text: 'Get retroactive consent from customers',
        isCorrect: false,
        explanation: 'Cannot retroactively consent to unauthorized data sharing',
        securityImpact: 5,
        complianceScore: -10
      },
      {
        text: 'Report to data protection officer and conduct impact assessment',
        isCorrect: true,
        explanation: 'Required compliance action for potential data breach',
        securityImpact: 25,
        complianceScore: 40
      }
    ],
    learningPoints: [
      'All data sharing requires proper agreements and consent',
      'Personal data must be protected throughout processing',
      'Compliance with privacy regulations (GDPR, CCPA) is mandatory',
      'Regular privacy training prevents unauthorized sharing'
    ],
    realWorldExample: 'GDPR fines averaged €28.9 million in 2021, often for unauthorized data sharing and processing violations.',
    points: 40
  }
];

export default function InformationSecurityTrainingGame({
  onComplete,
  timeLeft,
  onRestart
}: InformationSecurityTrainingGameProps) {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedResponses, setSelectedResponses] = useState<number[]>([]);
  const [scenarioComplete, setScenarioComplete] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [securityLevel, setSecurityLevel] = useState(1);
  const [complianceScore, setComplianceScore] = useState(100);
  const [gameComplete, setGameComplete] = useState(false);

  const currentScenarioData = securityScenarios[currentScenario];

  const handleResponseToggle = useCallback((responseIndex: number) => {
    if (scenarioComplete) return;
    
    setSelectedResponses(prev => 
      prev.includes(responseIndex)
        ? prev.filter(r => r !== responseIndex)
        : [...prev, responseIndex]
    );
  }, [scenarioComplete]);

  const handleSubmitResponse = useCallback(() => {
    if (selectedResponses.length === 0) return;

    setScenarioComplete(true);

    // Calculate scores based on selected responses
    let securityImpact = 0;
    let complianceImpact = 0;
    let correctResponses = 0;

    selectedResponses.forEach(responseIndex => {
      const response = currentScenarioData.responses[responseIndex];
      securityImpact += response.securityImpact;
      complianceImpact += response.complianceScore;
      if (response.isCorrect) {
        correctResponses++;
      }
    });

    // Calculate scenario score based on correct responses and impact
    const correctPercentage = (correctResponses / currentScenarioData.responses.filter(r => r.isCorrect).length) * 100;
    const scenarioPoints = Math.max(0, Math.round((currentScenarioData.points * correctPercentage) / 100));
    
    setTotalScore(prev => prev + scenarioPoints);
    setComplianceScore(prev => Math.max(0, Math.min(100, prev + complianceImpact)));

    // Adjust security level based on performance
    if (correctPercentage >= 80 && securityImpact > 20) {
      setSecurityLevel(prev => Math.min(10, prev + 1));
    } else if (correctPercentage < 50 || securityImpact < 0) {
      setSecurityLevel(prev => Math.max(1, prev - 1));
    }

    setTimeout(() => setShowResults(true), 2000);
  }, [selectedResponses, currentScenarioData]);

  const handleNextScenario = useCallback(() => {
    if (currentScenario < securityScenarios.length - 1) {
      setCurrentScenario(prev => prev + 1);
      setSelectedResponses([]);
      setScenarioComplete(false);
      setShowResults(false);
    } else {
      setGameComplete(true);
      const finalScore = Math.max(0, Math.min(100, (totalScore / 130) * 100));
      onComplete(totalScore > 0, finalScore);
    }
  }, [currentScenario, totalScore, onComplete]);

  useEffect(() => {
    if (timeLeft <= 0 && !gameComplete) {
      const finalScore = Math.max(0, (totalScore / 130) * 100);
      onComplete(totalScore > 0, finalScore);
    }
  }, [timeLeft, gameComplete, totalScore, onComplete]);

  if (gameComplete) {
    const finalScore = Math.max(0, Math.min(100, (totalScore / 130) * 100));

    return (
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 text-white rounded-xl">
        <div className="text-center mb-8">
          <Shield className="w-16 h-16 mx-auto mb-4 text-red-400" />
          <h2 className="text-3xl font-bold mb-2">Security Training Complete</h2>
          <div className="text-6xl font-bold text-red-400 mb-4">
            {Math.round(finalScore)}%
          </div>
          <p className="text-xl mb-6">
            Security Level: {securityLevel}/10 | Compliance: {complianceScore}%
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Star className="w-5 h-5 mr-2 text-red-400" />
              Security Achievements
            </h3>
            <ul className="space-y-2 text-sm">
              {finalScore >= 90 && <li>• Security Expert - Master of threat detection</li>}
              {securityLevel >= 8 && <li>• Incident Response Pro - Excellent crisis management</li>}
              {complianceScore >= 85 && <li>• Compliance Champion - Regulatory excellence</li>}
              {finalScore >= 70 && <li>• Security Analyst - Strong threat assessment</li>}
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Target className="w-5 h-5 mr-2 text-orange-400" />
              Areas for Improvement
            </h3>
            <ul className="space-y-2 text-sm">
              {finalScore < 80 && <li>• Review security incident response procedures</li>}
              {securityLevel < 7 && <li>• Practice threat detection scenarios</li>}
              {complianceScore < 80 && <li>• Study privacy and compliance regulations</li>}
              <li>• Stay updated on emerging security threats</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={onRestart}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
          >
            <Shield className="w-4 h-4 inline mr-2" />
            New Training
          </button>
          <button
            onClick={() => onComplete(true, finalScore)}
            className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors"
          >
            <CheckCircle className="w-4 h-4 inline mr-2" />
            Complete Training
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 text-white rounded-xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Shield className="w-8 h-8 mr-3 text-red-400" />
          <div>
            <h2 className="text-2xl font-bold">Information Security Training</h2>
            <p className="text-red-300">Scenario {currentScenario + 1}/{securityScenarios.length}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-red-400">{totalScore} pts</div>
          <div className="text-sm text-gray-300 flex items-center">
            <Star className="w-4 h-4 mr-1" />
            Security Level: {securityLevel}/10
          </div>
          <div className="text-sm text-gray-300">Compliance: {complianceScore}%</div>
          <div className="text-sm text-gray-300">⏱️ {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white/20 rounded-full h-2 mb-6">
        <div 
          className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentScenario + (showResults ? 1 : 0)) / securityScenarios.length) * 100}%` }}
        />
      </div>

      {/* Scenario Header */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          <div className="text-4xl mr-4">{currentScenarioData.icon}</div>
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <h3 className="text-xl font-bold text-yellow-300 mr-4">
                {currentScenarioData.title}
              </h3>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                currentScenarioData.urgencyLevel === 'critical' ? 'bg-red-600' :
                currentScenarioData.urgencyLevel === 'high' ? 'bg-orange-600' :
                currentScenarioData.urgencyLevel === 'medium' ? 'bg-yellow-600' :
                'bg-green-600'
              }`}>
                {currentScenarioData.urgencyLevel.toUpperCase()}
              </div>
            </div>
            <p className="text-gray-200">{currentScenarioData.description}</p>
          </div>
        </div>
      </div>

      {/* Situation */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-red-300 flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2" />
          Security Situation:
        </h4>
        <p className="text-gray-200 mb-4">{currentScenarioData.situation}</p>
      </div>

      {/* Evidence */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-yellow-300 flex items-center">
          <Eye className="w-5 h-5 mr-2" />
          Evidence & Indicators:
        </h4>
        <div className="grid md:grid-cols-2 gap-3">
          {currentScenarioData.evidence.map((evidence, index) => (
            <div key={index} className="flex items-start p-3 bg-yellow-900/20 border border-yellow-600/30 rounded-lg">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0" />
              <span className="text-sm">{evidence}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Response Options */}
      <div className="bg-white/10 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-blue-300">
          Your Security Response (Select all appropriate actions):
        </h4>
        <div className="grid gap-4">
          {currentScenarioData.responses.map((response, index) => (
            <button
              key={index}
              onClick={() => handleResponseToggle(index)}
              disabled={scenarioComplete}
              className={`p-4 text-left rounded-lg border-2 transition-all ${
                selectedResponses.includes(index)
                  ? 'border-blue-500 bg-blue-900/30 text-white'
                  : 'border-gray-600 bg-white/5 text-gray-300 hover:bg-white/10'
              } ${scenarioComplete ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className="font-medium mb-2">{response.text}</div>
              <div className="text-sm text-gray-400 flex items-center space-x-4">
                <span>Security Impact: {response.securityImpact > 0 ? '+' : ''}{response.securityImpact}</span>
                <span>Compliance: {response.complianceScore > 0 ? '+' : ''}{response.complianceScore}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-400">
            Selected: {selectedResponses.length} response(s)
          </span>
        </div>
      </div>

      {/* Results Display */}
      {showResults && (
        <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-lg p-6 mb-6 border border-green-500">
          <h4 className="font-semibold text-green-300 mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" />
            Security Response Analysis:
          </h4>

          {/* Response Analysis */}
          <div className="space-y-3 mb-4">
            {selectedResponses.map(responseIndex => {
              const response = currentScenarioData.responses[responseIndex];
              return (
                <div key={responseIndex} className={`p-3 rounded-lg ${
                  response.isCorrect 
                    ? 'bg-green-900/50 border border-green-500' 
                    : 'bg-red-900/50 border border-red-500'
                }`}>
                  <div className="font-medium mb-1">
                    {response.isCorrect ? '✅' : '❌'} {response.text}
                  </div>
                  <div className="text-sm text-gray-300">{response.explanation}</div>
                </div>
              );
            })}
          </div>

          {/* Learning Points */}
          <div>
            <h5 className="font-semibold text-yellow-300 mb-2">Key Learning Points:</h5>
            <div className="grid gap-2">
              {currentScenarioData.learningPoints.map((point, index) => (
                <div key={index} className="text-sm text-gray-300 flex items-start">
                  <div className="w-1 h-1 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                  {point}
                </div>
              ))}
            </div>
          </div>

          {/* Real World Example */}
          <div className="mt-4 p-3 bg-white/10 rounded-lg">
            <h5 className="font-semibold text-purple-300 mb-1">Real-World Context:</h5>
            <p className="text-sm text-gray-300">{currentScenarioData.realWorldExample}</p>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        {!scenarioComplete ? (
          <button
            onClick={handleSubmitResponse}
            disabled={selectedResponses.length === 0}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              selectedResponses.length > 0
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            <Lock className="w-4 h-4 inline mr-2" />
            Submit Response
          </button>
        ) : showResults ? (
          <button
            onClick={handleNextScenario}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            {currentScenario < securityScenarios.length - 1 ? (
              <>
                <Users className="w-4 h-4 inline mr-2" />
                Next Scenario
              </>
            ) : (
              <>
                <CheckCircle className="w-4 h-4 inline mr-2" />
                Complete Training
              </>
            )}
          </button>
        ) : (
          <div className="px-6 py-3 bg-yellow-600 text-white rounded-lg font-medium">
            <Shield className="w-4 h-4 inline mr-2 animate-pulse" />
            Analyzing Response...
          </div>
        )}
      </div>
    </div>
  );
}