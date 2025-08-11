import React, { useState, useEffect } from 'react';

interface DataVisualizationGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

export function DataVisualizationGame({ onComplete, timeLeft, onRestart }: DataVisualizationGameProps) {
  const [selectedChart, setSelectedChart] = useState<string | null>(null);
  const [dataSet, setDataSet] = useState('sales');
  const [score, setScore] = useState(0);

  const data = {
    sales: [
      { month: 'Jan', value: 120 },
      { month: 'Feb', value: 150 },
      { month: 'Mar', value: 180 },
      { month: 'Apr', value: 200 },
      { month: 'May', value: 220 },
    ],
    users: [
      { category: 'Desktop', value: 45 },
      { category: 'Mobile', value: 35 },
      { category: 'Tablet', value: 20 },
    ],
  };

  const chartTypes = [
    { id: 'bar', name: 'Bar Chart', bestFor: 'sales', points: 20 },
    { id: 'line', name: 'Line Chart', bestFor: 'sales', points: 25 },
    { id: 'pie', name: 'Pie Chart', bestFor: 'users', points: 25 },
    { id: 'scatter', name: 'Scatter Plot', bestFor: 'none', points: 10 },
  ];

  const selectChart = (chartId: string) => {
    setSelectedChart(chartId);
    const chart = chartTypes.find((c) => c.id === chartId);
    const isOptimal = chart?.bestFor === dataSet;
    const points = isOptimal ? chart.points : Math.floor(chart?.points ?? 0 / 2) || 5;
    setScore((prev) => prev + points);
  };

  useEffect(() => {
    if (timeLeft <= 0) onRestart();
  }, [timeLeft, onRestart]);

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">📊 Trực quan hóa dữ liệu</h3>
        <div className="text-indigo-400 font-medium">Điểm: {score}</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-white font-medium mb-3">Chọn loại dữ liệu:</h4>
          <div className="space-y-2 mb-4">
            <button
              onClick={() => setDataSet('sales')}
              className={`w-full p-3 rounded-lg text-left transition-all ${
                dataSet === 'sales'
                  ? 'bg-blue-500/20 border-blue-500/50 border'
                  : 'bg-gray-800/50 border border-gray-600 hover:bg-gray-700/50'
              }`}
            >
              <div className="text-white font-medium">Sales Data</div>
              <div className="text-gray-400 text-sm">Monthly sales figures</div>
            </button>
            <button
              onClick={() => setDataSet('users')}
              className={`w-full p-3 rounded-lg text-left transition-all ${
                dataSet === 'users'
                  ? 'bg-blue-500/20 border-blue-500/50 border'
                  : 'bg-gray-800/50 border border-gray-600 hover:bg-gray-700/50'
              }`}
            >
              <div className="text-white font-medium">User Data</div>
              <div className="text-gray-400 text-sm">Device usage breakdown</div>
            </button>
          </div>

          <h4 className="text-white font-medium mb-3">Dữ liệu hiện tại:</h4>
          <div className="bg-gray-800/50 rounded-lg p-4">
            <pre className="text-gray-300 text-sm">{JSON.stringify(data[dataSet as keyof typeof data], null, 2)}</pre>
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Chọn loại biểu đồ:</h4>
          <div className="space-y-2">
            {chartTypes.map((chart) => (
              <button
                key={chart.id}
                onClick={() => selectChart(chart.id)}
                disabled={selectedChart === chart.id}
                className={`w-full p-3 rounded-lg text-left transition-all ${
                  selectedChart === chart.id
                    ? 'bg-green-500/20 border-green-500/50 border'
                    : chart.bestFor === dataSet
                      ? 'bg-indigo-500/20 border-indigo-500/50 border hover:bg-indigo-500/30'
                      : 'bg-gray-800/50 border border-gray-600 hover:bg-gray-700/50'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-medium">{chart.name}</div>
                    <div className="text-gray-400 text-sm">
                      {chart.bestFor === dataSet ? '✓ Optimal for this data' : 'Available option'}
                    </div>
                  </div>
                  <div className="text-yellow-400">{chart.points} pts</div>
                </div>
                {selectedChart === chart.id && <div className="mt-2 text-green-400 text-sm">Selected ✓</div>}
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedChart && (
        <button
          onClick={() => onComplete(true, score)}
          className="w-full mt-6 bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:from-indigo-600 hover:to-blue-600 transition-all duration-200"
        >
          Complete Visualization ✓
        </button>
      )}
    </div>
  );
}
