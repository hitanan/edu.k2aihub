'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Play, Pause, RotateCcw, Truck, Package } from 'lucide-react';

interface GameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface SupplyNode {
  id: string;
  name: string;
  type: 'supplier' | 'warehouse' | 'factory' | 'customer';
  location: { x: number; y: number };
  inventory: number;
  capacity: number;
  demand: number;
  cost: number;
  efficiency: number;
}

interface Route {
  id: string;
  from: string;
  to: string;
  distance: number;
  time: number;
  cost: number;
  isActive: boolean;
}

interface Shipment {
  id: string;
  routeId: string;
  quantity: number;
  startTime: number;
  status: 'pending' | 'in-transit' | 'delivered';
  priority: 'low' | 'medium' | 'high';
}

export function SupplyChainOptimizationChallengeGame({ onComplete, timeLeft, onRestart }: GameProps) {
  const [gameState, setGameState] = useState<'setup' | 'running' | 'paused' | 'completed'>('setup');
  const [score, setScore] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [efficiency, setEfficiency] = useState(100);
  const [customerSatisfaction, setCustomerSatisfaction] = useState(100);

  const [nodes, setNodes] = useState<SupplyNode[]>([
    {
      id: 'supplier1',
      name: 'Nhà cung cấp A',
      type: 'supplier',
      location: { x: 10, y: 50 },
      inventory: 1000,
      capacity: 1000,
      demand: 0,
      cost: 10,
      efficiency: 90,
    },
    {
      id: 'supplier2',
      name: 'Nhà cung cấp B',
      type: 'supplier',
      location: { x: 10, y: 20 },
      inventory: 800,
      capacity: 800,
      demand: 0,
      cost: 12,
      efficiency: 85,
    },
    {
      id: 'warehouse1',
      name: 'Kho trung tâm',
      type: 'warehouse',
      location: { x: 40, y: 35 },
      inventory: 500,
      capacity: 2000,
      demand: 0,
      cost: 5,
      efficiency: 95,
    },
    {
      id: 'factory1',
      name: 'Nhà máy sản xuất',
      type: 'factory',
      location: { x: 65, y: 40 },
      inventory: 200,
      capacity: 1500,
      demand: 300,
      cost: 8,
      efficiency: 88,
    },
    {
      id: 'customer1',
      name: 'Khách hàng A',
      type: 'customer',
      location: { x: 85, y: 60 },
      inventory: 0,
      capacity: 0,
      demand: 150,
      cost: 0,
      efficiency: 100,
    },
    {
      id: 'customer2',
      name: 'Khách hàng B',
      type: 'customer',
      location: { x: 85, y: 20 },
      inventory: 0,
      capacity: 0,
      demand: 100,
      cost: 0,
      efficiency: 100,
    },
  ]);

  const [routes, setRoutes] = useState<Route[]>([
    { id: 'r1', from: 'supplier1', to: 'warehouse1', distance: 35, time: 2, cost: 15, isActive: false },
    { id: 'r2', from: 'supplier2', to: 'warehouse1', distance: 32, time: 2, cost: 14, isActive: false },
    { id: 'r3', from: 'warehouse1', to: 'factory1', distance: 25, time: 1, cost: 10, isActive: false },
    { id: 'r4', from: 'factory1', to: 'customer1', distance: 28, time: 2, cost: 12, isActive: false },
    { id: 'r5', from: 'factory1', to: 'customer2', distance: 32, time: 2, cost: 14, isActive: false },
    { id: 'r6', from: 'warehouse1', to: 'customer1', distance: 48, time: 3, cost: 20, isActive: false },
    { id: 'r7', from: 'warehouse1', to: 'customer2', distance: 45, time: 3, cost: 18, isActive: false },
  ]);

  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [gameTime, setGameTime] = useState(0);
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);
  const [shipmentQuantity, setShipmentQuantity] = useState(50);

  // Game simulation
  useEffect(() => {
    if (gameState !== 'running') return;

    const interval = setInterval(() => {
      setGameTime(prev => prev + 1);

      // Update shipments
      setShipments(prevShipments => {
        return prevShipments.map(shipment => {
          if (shipment.status === 'pending') {
            return { ...shipment, status: 'in-transit' };
          }
          if (shipment.status === 'in-transit') {
            const route = routes.find(r => r.id === shipment.routeId);
            if (route && gameTime >= shipment.startTime + route.time) {
              return { ...shipment, status: 'delivered' };
            }
          }
          return shipment;
        });
      });

      // Process delivered shipments
      setShipments(prevShipments => {
        const delivered = prevShipments.filter(s => s.status === 'delivered');
        
        delivered.forEach(shipment => {
          const route = routes.find(r => r.id === shipment.routeId);
          if (route) {
            // Update inventory
            setNodes(prevNodes => {
              return prevNodes.map(node => {
                if (node.id === route.from) {
                  return { ...node, inventory: Math.max(0, node.inventory - shipment.quantity) };
                }
                if (node.id === route.to) {
                  return { ...node, inventory: Math.min(node.capacity, node.inventory + shipment.quantity) };
                }
                return node;
              });
            });

            // Update cost
            setTotalCost(prev => prev + route.cost * shipment.quantity / 100);
            
            // Update score based on efficiency
            const efficiencyBonus = shipment.priority === 'high' ? 15 : shipment.priority === 'medium' ? 10 : 5;
            setScore(prev => prev + efficiencyBonus);
          }
        });

        return prevShipments.filter(s => s.status !== 'delivered');
      });

      // Update customer satisfaction
      setCustomerSatisfaction(prev => {
        const customers = nodes.filter(n => n.type === 'customer');
        let satisfaction = 100;
        
        customers.forEach(customer => {
          const fulfillmentRate = Math.min(100, (customer.inventory / customer.demand) * 100);
          if (fulfillmentRate < 50) satisfaction -= 20;
          else if (fulfillmentRate < 80) satisfaction -= 10;
        });

        return Math.max(0, satisfaction);
      });

      // Update efficiency based on costs
      setEfficiency(prev => {
        const costEfficiency = Math.max(0, 100 - totalCost / 10);
        return Math.min(100, costEfficiency);
      });

      // Random demand fluctuations
      if (gameTime % 5 === 0) {
        setNodes(prevNodes => {
          return prevNodes.map(node => {
            if (node.type === 'customer') {
              const fluctuation = (Math.random() - 0.5) * 50;
              return { 
                ...node, 
                demand: Math.max(50, Math.min(300, node.demand + fluctuation))
              };
            }
            return node;
          });
        });
      }

    }, 1000);

    return () => clearInterval(interval);
  }, [gameState, gameTime, routes, nodes, totalCost]);

  // Auto-complete game
  useEffect(() => {
    if (timeLeft <= 0 && gameState === 'running') {
      const success = score >= 150 && customerSatisfaction >= 70 && efficiency >= 60;
      setGameState('completed');
      onComplete(success, score);
    }
  }, [timeLeft, score, customerSatisfaction, efficiency, gameState, onComplete]);

  const createShipment = useCallback(() => {
    if (!selectedRoute) return;

    const route = routes.find(r => r.id === selectedRoute);
    const fromNode = nodes.find(n => n.id === route?.from);
    
    if (!route || !fromNode || fromNode.inventory < shipmentQuantity) {
      alert('Không đủ hàng tồn kho!');
      return;
    }

    const newShipment: Shipment = {
      id: `shipment-${Date.now()}`,
      routeId: selectedRoute,
      quantity: shipmentQuantity,
      startTime: gameTime,
      status: 'pending',
      priority: shipmentQuantity > 100 ? 'high' : shipmentQuantity > 50 ? 'medium' : 'low',
    };

    setShipments(prev => [...prev, newShipment]);
    setRoutes(prev => prev.map(r => r.id === selectedRoute ? { ...r, isActive: true } : r));
  }, [selectedRoute, shipmentQuantity, nodes, gameTime]);

  const getNodeTypeIcon = (type: SupplyNode['type']) => {
    switch (type) {
      case 'supplier': return '🏭';
      case 'warehouse': return '🏬';
      case 'factory': return '⚙️';
      case 'customer': return '🏪';
      default: return '📦';
    }
  };

  const getNodeStatusColor = (node: SupplyNode) => {
    if (node.type === 'customer') {
      const fulfillment = (node.inventory / node.demand) * 100;
      return fulfillment >= 80 ? 'border-green-500' : fulfillment >= 50 ? 'border-yellow-500' : 'border-red-500';
    }
    
    const utilizationRate = (node.inventory / node.capacity) * 100;
    return utilizationRate > 80 ? 'border-red-500' : utilizationRate > 50 ? 'border-yellow-500' : 'border-green-500';
  };

  const startGame = () => setGameState('running');
  const pauseGame = () => setGameState('paused');
  const resumeGame = () => setGameState('running');

  if (gameState === 'completed') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 flex items-center justify-center p-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full border border-indigo-500/20 text-center">
          <Package className="w-16 h-16 mx-auto mb-4 text-indigo-400" />
          <h2 className="text-2xl font-bold text-white mb-4">Hoàn thành!</h2>
          <div className="space-y-2 mb-6">
            <p className="text-gray-300">Điểm số: <span className="text-indigo-400 font-bold">{score}</span></p>
            <p className="text-gray-300">Tổng chi phí: <span className="text-red-400 font-bold">${totalCost.toFixed(2)}</span></p>
            <p className="text-gray-300">Hiệu suất: <span className="text-yellow-400 font-bold">{efficiency.toFixed(1)}%</span></p>
            <p className="text-gray-300">Hài lòng KH: <span className="text-green-400 font-bold">{customerSatisfaction.toFixed(1)}%</span></p>
          </div>
          <button onClick={onRestart} className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-6 rounded-xl">
            Chơi lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <Package className="w-8 h-8 text-indigo-400" />
          <h1 className="text-2xl font-bold text-white">Tối Ưu Chuỗi Cung Ứng</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-white">Thời gian: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</div>
          <div className="text-indigo-400 font-bold">Điểm: {score}</div>
        </div>
      </div>

      {/* Game Controls */}
      <div className="mb-6 flex space-x-4">
        {gameState === 'setup' && (
          <button onClick={startGame} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg flex items-center">
            <Play className="w-4 h-4 mr-2" />
            Bắt đầu
          </button>
        )}
        {gameState === 'running' && (
          <button onClick={pauseGame} className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg flex items-center">
            <Pause className="w-4 h-4 mr-2" />
            Tạm dừng
          </button>
        )}
        {gameState === 'paused' && (
          <button onClick={resumeGame} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg flex items-center">
            <Play className="w-4 h-4 mr-2" />
            Tiếp tục
          </button>
        )}
        <button onClick={onRestart} className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg flex items-center">
          <RotateCcw className="w-4 h-4 mr-2" />
          Khởi động lại
        </button>
      </div>

      {/* Main Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Supply Chain Map */}
        <div className="lg:col-span-3 bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Sơ đồ chuỗi cung ứng</h2>
          
          <div className="relative bg-slate-800 rounded-lg p-4" style={{ height: '400px' }}>
            {/* Nodes */}
            {nodes.map(node => (
              <div
                key={node.id}
                className={`absolute border-2 rounded-lg p-3 bg-slate-700 ${getNodeStatusColor(node)} transform -translate-x-1/2 -translate-y-1/2 min-w-[120px]`}
                style={{ left: `${node.location.x}%`, top: `${node.location.y}%` }}
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">{getNodeTypeIcon(node.type)}</div>
                  <div className="text-white text-xs font-semibold">{node.name}</div>
                  <div className="text-gray-300 text-xs mt-1">
                    {node.type === 'customer' ? (
                      <span>Cần: {node.demand}</span>
                    ) : (
                      <span>Tồn: {node.inventory}</span>
                    )}
                  </div>
                  {node.inventory > 0 && node.type === 'customer' && (
                    <div className="text-green-400 text-xs">
                      Có: {node.inventory}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Routes */}
            {routes.map(route => {
              const fromNode = nodes.find(n => n.id === route.from);
              const toNode = nodes.find(n => n.id === route.to);
              if (!fromNode || !toNode) return null;

              return (
                <svg
                  key={route.id}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ zIndex: 1 }}
                >
                  <line
                    x1={`${fromNode.location.x}%`}
                    y1={`${fromNode.location.y}%`}
                    x2={`${toNode.location.x}%`}
                    y2={`${toNode.location.y}%`}
                    stroke={route.isActive ? '#10b981' : '#6b7280'}
                    strokeWidth={route.isActive ? '3' : '1'}
                    strokeDasharray={route.isActive ? '0' : '5,5'}
                  />
                </svg>
              );
            })}

            {/* Active Shipments */}
            {shipments
              .filter(s => s.status === 'in-transit')
              .map(shipment => {
                const route = routes.find(r => r.id === shipment.routeId);
                const fromNode = nodes.find(n => n.id === route?.from);
                const toNode = nodes.find(n => n.id === route?.to);
                if (!route || !fromNode || !toNode) return null;

                const progress = Math.min(1, (gameTime - shipment.startTime) / route.time);
                const x = fromNode.location.x + (toNode.location.x - fromNode.location.x) * progress;
                const y = fromNode.location.y + (toNode.location.y - fromNode.location.y) * progress;

                return (
                  <div
                    key={shipment.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%`, zIndex: 10 }}
                  >
                    <Truck className="w-6 h-6 text-blue-400" />
                  </div>
                );
              })}
          </div>
        </div>

        {/* Control Panel */}
        <div className="space-y-6">
          {/* Statistics */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">Thống kê</h3>
            <div className="space-y-3">
              <div className="text-gray-300">
                Tổng chi phí: <span className="text-red-400 font-bold">${totalCost.toFixed(2)}</span>
              </div>
              <div className="text-gray-300">
                Hiệu suất: <span className="text-yellow-400 font-bold">{efficiency.toFixed(1)}%</span>
              </div>
              <div className="text-gray-300">
                Hài lòng KH: <span className="text-green-400 font-bold">{customerSatisfaction.toFixed(1)}%</span>
              </div>
              <div className="text-gray-300">
                Lô hàng: <span className="text-blue-400 font-bold">{shipments.length}</span>
              </div>
            </div>
          </div>

          {/* Shipment Control */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">Tạo lô hàng</h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-gray-300 text-sm block mb-2">Chọn tuyến đường:</label>
                <select
                  value={selectedRoute || ''}
                  onChange={(e) => setSelectedRoute(e.target.value || null)}
                  className="w-full bg-slate-800 text-white rounded px-3 py-2 text-sm"
                >
                  <option value="">-- Chọn tuyến --</option>
                  {routes.map(route => {
                    const fromNode = nodes.find(n => n.id === route.from);
                    const toNode = nodes.find(n => n.id === route.to);
                    return (
                      <option key={route.id} value={route.id}>
                        {fromNode?.name} → {toNode?.name} (${route.cost})
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <label className="text-gray-300 text-sm block mb-2">Số lượng:</label>
                <input
                  type="number"
                  min="10"
                  max="200"
                  step="10"
                  value={shipmentQuantity}
                  onChange={(e) => setShipmentQuantity(Number(e.target.value))}
                  className="w-full bg-slate-800 text-white rounded px-3 py-2 text-sm"
                />
              </div>

              <button
                onClick={createShipment}
                disabled={!selectedRoute || gameState !== 'running'}
                className="w-full bg-indigo-500 hover:bg-indigo-600 disabled:bg-gray-600 text-white py-2 rounded-lg flex items-center justify-center"
              >
                <Truck className="w-4 h-4 mr-2" />
                Gửi hàng
              </button>
            </div>
          </div>

          {/* Active Routes */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">Tuyến đường hoạt động</h3>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {routes.filter(r => r.isActive).map(route => {
                const fromNode = nodes.find(n => n.id === route.from);
                const toNode = nodes.find(n => n.id === route.to);
                return (
                  <div key={route.id} className="text-sm bg-slate-800 rounded p-2">
                    <div className="text-green-400 font-semibold">
                      {fromNode?.name} → {toNode?.name}
                    </div>
                    <div className="text-gray-400">
                      Chi phí: ${route.cost} | Thời gian: {route.time}h
                    </div>
                  </div>
                );
              })}
              {routes.filter(r => r.isActive).length === 0 && (
                <div className="text-gray-400 text-sm text-center py-4">
                  Chưa có tuyến đường nào hoạt động
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-6 bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-white/10">
        <h3 className="text-white font-semibold mb-2">Hướng dẫn:</h3>
        <p className="text-gray-300 text-sm">
          🎯 Tối ưu hóa chuỗi cung ứng bằng cách quản lý tuyến đường và lô hàng. 
          💡 Theo dõi tồn kho và nhu cầu khách hàng. 
          ⚡ Cân bằng chi phí và hiệu suất để đạt điểm số cao nhất!
        </p>
      </div>
    </div>
  );
}
