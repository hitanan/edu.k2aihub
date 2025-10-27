import React, { useState, useEffect } from 'react';
import { BarChart3, LineChart, PieChart, Activity } from 'lucide-react';

interface DataItem {
  month?: string;
  category?: string;
  value: number;
}

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
    ] as DataItem[],
    users: [
      { category: 'Desktop', value: 45 },
      { category: 'Mobile', value: 35 },
      { category: 'Tablet', value: 20 },
    ] as DataItem[],
  };

  const chartTypes = [
    { id: 'bar', name: 'Bar Chart', icon: BarChart3, bestFor: 'sales', points: 20 },
    { id: 'line', name: 'Line Chart', icon: LineChart, bestFor: 'sales', points: 25 },
    { id: 'pie', name: 'Pie Chart', icon: PieChart, bestFor: 'users', points: 25 },
    { id: 'scatter', name: 'Scatter Plot', icon: Activity, bestFor: 'none', points: 10 },
  ];

  const selectChart = (chartId: string) => {
    setSelectedChart(chartId);
    const chart = chartTypes.find((c) => c.id === chartId);
    const isOptimal = chart?.bestFor === dataSet;
    const points = isOptimal ? chart.points : Math.floor(chart?.points ?? 0 / 2) || 5;
    setScore((prev) => prev + points);
  };

  const renderChart = () => {
    if (!selectedChart) return null;

    const currentData = data[dataSet as keyof typeof data];
    const maxValue = Math.max(...currentData.map(d => d.value));

    switch (selectedChart) {
      case 'bar':
        return (
          <div className="bg-gray-800/50 rounded-lg p-4">
            <h5 className="text-white font-medium mb-4">Bar Chart - {dataSet === 'sales' ? 'Sales Data' : 'User Data'}</h5>
            <div className="flex items-end justify-between h-48 gap-2 px-2">
              {currentData.map((item, index) => {
                const barHeight = Math.max((item.value / maxValue) * 80, 5); // Minimum 5% height
                return (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div className="text-blue-400 text-xs mb-1">{item.value}</div>
                    <div
                      className="bg-gradient-to-t from-blue-600 to-blue-400 w-full rounded-t transition-all duration-500 min-h-[20px] flex items-end justify-center"
                      style={{ height: `${barHeight}%` }}
                    >
                      <div className="text-white text-xs font-semibold mb-1">
                        {item.value}
                      </div>
                    </div>
                    <div className="text-gray-400 text-xs mt-2 text-center font-medium">
                      {item.month || item.category}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'line':
        return (
          <div className="bg-gray-800/50 rounded-lg p-4">
            <h5 className="text-white font-medium mb-4">Line Chart - {dataSet === 'sales' ? 'Sales Trend' : 'User Distribution'}</h5>
            <div className="relative h-32">
              <svg width="100%" height="100%" className="overflow-visible">
                {currentData.map((item, index) => {
                  if (index === 0) return null;
                  const x1 = ((index - 1) / (currentData.length - 1)) * 100;
                  const y1 = 100 - (currentData[index - 1].value / maxValue) * 80;
                  const x2 = (index / (currentData.length - 1)) * 100;
                  const y2 = 100 - (item.value / maxValue) * 80;
                  
                  return (
                    <line
                      key={index}
                      x1={`${x1}%`}
                      y1={`${y1}%`}
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke="#3B82F6"
                      strokeWidth="2"
                    />
                  );
                })}
                {currentData.map((item, index) => {
                  const x = (index / (currentData.length - 1)) * 100;
                  const y = 100 - (item.value / maxValue) * 80;
                  
                  return (
                    <circle
                      key={index}
                      cx={`${x}%`}
                      cy={`${y}%`}
                      r="3"
                      fill="#3B82F6"
                    />
                  );
                })}
              </svg>
              <div className="flex justify-between mt-2">
                {currentData.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-gray-400 text-xs">{item.month || item.category}</div>
                    <div className="text-blue-400 text-xs">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'pie':
        const total = currentData.reduce((sum, item) => sum + item.value, 0);
        let cumulativePercent = 0;
        
        return (
          <div className="bg-gray-800/50 rounded-lg p-4">
            <h5 className="text-white font-medium mb-4">Pie Chart - {dataSet === 'sales' ? 'Sales Distribution' : 'User Segments'}</h5>
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32">
                <svg width="128" height="128" className="transform -rotate-90">
                  {currentData.map((item, index) => {
                    const percent = (item.value / total) * 100;
                    const strokeDasharray = `${percent} ${100 - percent}`;
                    const strokeDashoffset = -cumulativePercent;
                    const color = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'][index] || '#6B7280';
                    
                    cumulativePercent += percent;
                    
                    return (
                      <circle
                        key={index}
                        cx="64"
                        cy="64"
                        r="30"
                        fill="transparent"
                        stroke={color}
                        strokeWidth="8"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        pathLength="100"
                      />
                    );
                  })}
                </svg>
              </div>
              <div className="ml-4 space-y-2">
                {currentData.map((item, index) => {
                  const color = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'][index] || '#6B7280';
                  const percent = ((item.value / total) * 100).toFixed(1);
                  
                  return (
                    <div key={index} className="flex items-center">
                      <div
                        className="w-3 h-3 rounded mr-2"
                        style={{ backgroundColor: color }}
                      />
                      <div className="text-gray-300 text-sm">
                        {item.month || item.category}: {percent}%
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case 'scatter':
        return (
          <div className="bg-gray-800/50 rounded-lg p-4">
            <h5 className="text-white font-medium mb-4">Scatter Plot - Data Points</h5>
            <div className="relative h-32 bg-gray-700/50 rounded">
              <svg width="100%" height="100%">
                {currentData.map((item, index) => {
                  const x = ((index + 1) / currentData.length) * 90 + 5;
                  const y = 90 - (item.value / maxValue) * 80;
                  
                  return (
                    <circle
                      key={index}
                      cx={`${x}%`}
                      cy={`${y}%`}
                      r="4"
                      fill="#8B5CF6"
                    />
                  );
                })}
              </svg>
            </div>
            <div className="text-center mt-2 text-gray-400 text-xs">
              Note: Scatter plots work best with two continuous variables
            </div>
          </div>
        );

      default:
        return null;
    }
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
              onClick={() => {
                setDataSet('sales');
                setSelectedChart(null);
              }}
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
              onClick={() => {
                setDataSet('users');
                setSelectedChart(null);
              }}
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

          <h4 className="text-white font-medium mb-3 mt-4">Chọn loại biểu đồ:</h4>
          <div className="space-y-2">
            {chartTypes.map((chart) => {
              const IconComponent = chart.icon;
              return (
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
                    <div className="flex items-center">
                      <IconComponent className="w-4 h-4 mr-2" />
                      <div>
                        <div className="text-white font-medium">{chart.name}</div>
                        <div className="text-gray-400 text-sm">
                          {chart.bestFor === dataSet ? '✓ Optimal for this data' : 'Available option'}
                        </div>
                      </div>
                    </div>
                    <div className="text-yellow-400">{chart.points} pts</div>
                  </div>
                  {selectedChart === chart.id && <div className="mt-2 text-green-400 text-sm">Selected ✓</div>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Chart Visualization */}
        <div>
          <h4 className="text-white font-medium mb-3">Biểu đồ trực quan:</h4>
          {selectedChart ? (
            renderChart()
          ) : (
            <div className="bg-gray-800/50 rounded-lg p-8 text-center">
              <div className="text-gray-400 mb-2">📊</div>
              <div className="text-gray-400">Chọn loại biểu đồ để xem visualization</div>
            </div>
          )}
          
          {selectedChart && (
            <div className="mt-4 p-3 bg-indigo-500/20 border border-indigo-500/50 rounded-lg">
              <div className="text-indigo-300 text-sm font-medium mb-1">Phân tích:</div>
              <div className="text-gray-300 text-sm">
                {selectedChart === 'bar' && 'Bar charts tốt nhất cho việc so sánh các giá trị khác nhau.'}
                {selectedChart === 'line' && 'Line charts hiển thị xu hướng thay đổi theo thời gian.'}
                {selectedChart === 'pie' && 'Pie charts thể hiện tỷ lệ phần trăm của từng phần trong tổng thể.'}
                {selectedChart === 'scatter' && 'Scatter plots hiển thị mối quan hệ giữa hai biến số.'}
              </div>
            </div>
          )}
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
