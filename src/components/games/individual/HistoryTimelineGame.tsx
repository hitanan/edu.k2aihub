'use client';

import { useState, useEffect } from 'react';

interface HistoryTimelineGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

export function HistoryTimelineGame({ onComplete, timeLeft, onRestart }: HistoryTimelineGameProps) {
  const [events] = useState([
    { id: 1, year: 1945, event: 'Tuyên bố Độc lập', placed: false },
    { id: 2, year: 1975, event: 'Thống nhất đất nước', placed: false },
    { id: 3, year: 1986, event: 'Đổi mới', placed: false },
    { id: 4, year: 2007, event: 'Gia nhập WTO', placed: false },
    { id: 5, year: 1954, event: 'Chiến thắng Điện Biên Phủ', placed: false },
  ]);

  const [timeline, setTimeline] = useState<Array<{ id: number; year: number; event: string }>>([]);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const addToTimeline = (eventId: number) => {
    const event = events.find((e) => e.id === eventId);
    if (!event || timeline.find((t) => t.id === eventId)) return;

    const newTimeline = [...timeline, event].sort((a, b) => a.year - b.year);
    setTimeline(newTimeline);

    // Check if correctly placed
    const correctOrder = events.slice().sort((a, b) => a.year - b.year);
    const currentIndex = newTimeline.length - 1;
    const isCorrect = newTimeline[currentIndex].id === correctOrder[currentIndex].id;

    if (isCorrect) {
      setScore((prev) => prev + 20);
    } else {
      setScore((prev) => Math.max(0, prev - 10));
    }

    if (newTimeline.length === events.length) {
      const finalScore = score + (isCorrect ? 20 : -10);
      setGameComplete(true);
      setTimeout(() => onComplete(true, finalScore), 1500);
    }
  };

  const removeFromTimeline = (eventId: number) => {
    setTimeline((prev) => prev.filter((t) => t.id !== eventId));
  };

  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);

  const unplacedEvents = events.filter((e) => !timeline.find((t) => t.id === e.id));

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">📚 Vietnam History Timeline</h3>
        <div className="text-amber-400 font-medium">Điểm: {score}</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-white font-medium mb-3">Historical Events:</h4>
          <div className="space-y-2">
            {unplacedEvents.map((event) => (
              <button
                key={event.id}
                onClick={() => addToTimeline(event.id)}
                className="w-full p-3 bg-amber-500/20 border border-amber-500/50 rounded-lg text-left hover:bg-amber-500/30 transition-all"
              >
                <div className="text-white font-medium">{event.event}</div>
                <div className="text-amber-400 text-sm">{event.year}</div>
              </button>
            ))}
          </div>

          {unplacedEvents.length === 0 && !gameComplete && (
            <div className="text-center p-4 bg-blue-500/20 border border-blue-500/50 rounded-lg">
              <div className="text-blue-400">All events placed!</div>
            </div>
          )}
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Timeline (Chronological Order):</h4>
          <div className="space-y-2">
            {timeline.length === 0 ? (
              <div className="text-center p-8 border-2 border-dashed border-gray-600 rounded-lg">
                <div className="text-gray-400">Drag events here to build timeline</div>
              </div>
            ) : (
              timeline.map((event, index) => (
                <div
                  key={event.id}
                  className="p-3 bg-gray-800/50 border border-gray-600 rounded-lg cursor-pointer hover:bg-gray-700/50"
                  onClick={() => removeFromTimeline(event.id)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-white font-medium">{event.event}</div>
                      <div className="text-gray-400 text-sm">Position {index + 1}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-yellow-400 font-bold">{event.year}</div>
                      <div className="text-gray-500 text-xs">Click to remove</div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {gameComplete && (
            <div className="mt-4 text-center p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
              <div className="text-green-400 font-bold text-lg">🎉 Timeline Complete!</div>
              <div className="text-gray-300">Great job learning Vietnam history!</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
