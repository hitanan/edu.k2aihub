import React, { useState, useEffect } from 'react';
import { initialThreats, type SecurityThreat } from '@/data/games/cybersecurityData';

interface CybersecurityDefenseGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

export default function CybersecurityDefenseGame({ onComplete, timeLeft, onRestart }: CybersecurityDefenseGameProps) {
  const [threats, setThreats] = useState<SecurityThreat[]>(initialThreats);
  const [securityLevel, setSecurityLevel] = useState(60);
  const [score, setScore] = useState(0);

  const blockThreat = (threatId: number) => {
    setThreats((prev) => prev.map((threat) => (threat.id === threatId ? { ...threat, blocked: true } : threat)));
    setSecurityLevel((prev) => Math.min(100, prev + 10));

    const threat = threats.find((t) => t.id === threatId);
    const points = threat?.severity === 'critical' ? 30 : threat?.severity === 'high' ? 20 : 15;
    setScore((prev) => prev + points);
  };

  const allThreatsBlocked = threats.every((threat) => threat.blocked);

  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);

  useEffect(() => {
    if (allThreatsBlocked) {
      setTimeout(() => onComplete(true, score + 50), 1000);
    }
  }, [allThreatsBlocked, score, onComplete]);

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">🛡️ Phòng thủ An ninh mạng</h3>
        <div className="flex justify-between">
          <div className="text-red-400 font-medium">Điểm: {score}</div>
          <div
            className={`font-medium ${securityLevel > 80 ? 'text-green-400' : securityLevel > 60 ? 'text-yellow-400' : 'text-red-400'}`}
          >
            Bảo mật: {securityLevel}%
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-white font-medium mb-3">Mối đe dọa được phát hiện:</h4>
        <div className="space-y-3">
          {threats.map((threat) => (
            <div
              key={threat.id}
              className={`p-4 rounded-lg border transition-all ${
                threat.blocked
                  ? 'bg-green-500/20 border-green-500/50'
                  : threat.severity === 'critical'
                    ? 'bg-red-500/20 border-red-500/50'
                    : threat.severity === 'high'
                      ? 'bg-orange-500/20 border-orange-500/50'
                      : 'bg-yellow-500/20 border-yellow-500/50'
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-white font-medium">{threat.name}</div>
                  <div className="text-gray-400 text-sm">
                    Type: {threat.type} | Severity: {threat.severity}
                  </div>
                </div>
                {threat.blocked ? (
                  <span className="text-green-400 font-bold">BLOCKED ✓</span>
                ) : (
                  <button
                    onClick={() => blockThreat(threat.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Block
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {allThreatsBlocked && (
        <div className="text-center p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
          <div className="text-green-400 font-bold text-lg">🎉 All Threats Blocked!</div>
          <div className="text-gray-300">System Security: 100%</div>
        </div>
      )}
    </div>
  );
}
