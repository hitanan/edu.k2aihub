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
      setGameTime((prev) => prev + 1);

      // Update shipments
      setShipments((prevShipments) => {
        return prevShipments.map((shipment) => {
          if (shipment.status === 'pending') {
            return { ...shipment, status: 'in-transit' };
          }
          if (shipment.status === 'in-transit') {
            const route = routes.find((r) => r.id === shipment.routeId);
            if (route && gameTime >= shipment.startTime + route.time) {
              return { ...shipment, status: 'delivered' };
            }
          }
          return shipment;
        });
      });

      // Process delivered shipments
      setShipments((prevShipments) => {
        const delivered = prevShipments.filter((s) => s.status === 'delivered');

        delivered.forEach((shipment) => {
          const route = routes.find((r) => r.id === shipment.routeId);
          if (route) {
            // Update inventory
            setNodes((prevNodes) => {
              return prevNodes.map((node) => {
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
            setTotalCost((prev) => prev + (route.cost * shipment.quantity) / 100);

            // Update score based on efficiency
            const efficiencyBonus = shipment.priority === 'high' ? 15 : shipment.priority === 'medium' ? 10 : 5;
            setScore((prev) => prev + efficiencyBonus);
          }
        });

        return prevShipments.filter((s) => s.status !== 'delivered');
      });

      // Update customer satisfaction
      setCustomerSatisfaction(() => {
        const customers = nodes.filter((n) => n.type === 'customer');
        let satisfaction = 100;

        customers.forEach((customer) => {
          const fulfillmentRate = Math.min(100, (customer.inventory / customer.demand) * 100);
          if (fulfillmentRate < 50) satisfaction -= 20;
          else if (fulfillmentRate < 80) satisfaction -= 10;
        });

        return Math.max(0, satisfaction);
      });

      // Update efficiency based on costs
      setEfficiency(() => {
        const costEfficiency = Math.max(0, 100 - totalCost / 10);
        return Math.min(100, costEfficiency);
      });

      // Random demand fluctuations
      if (gameTime % 5 === 0) {
        setNodes((prevNodes) => {
          return prevNodes.map((node) => {
            if (node.type === 'customer') {
              const fluctuation = (Math.random() - 0.5) * 50;
              return {
                ...node,
                demand: Math.max(50, Math.min(300, node.demand + fluctuation)),
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

    const route = routes.find((r) => r.id === selectedRoute);
    const fromNode = nodes.find((n) => n.id === route?.from);

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

    setShipments((prev) => [...prev, newShipment]);
    setRoutes((prev) => prev.map((r) => (r.id === selectedRoute ? { ...r, isActive: true } : r)));
  }, [selectedRoute, shipmentQuantity, nodes, gameTime, routes]);

  const getNodeTypeIcon = (type: SupplyNode['type']) => {
    switch (type) {
      case 'supplier':
        return '🏭';
      case 'warehouse':
        return '🏬';
      case 'factory':
        return '⚙️';
      case 'customer':
        return '🏪';
      default:
        return '📦';
    }
  };

  const getNodeStatusColor = (node: SupplyNode) => {
    if (node.type === 'customer') {
      const fulfillmentRate = Math.min(100, (node.inventory / Math.max(1, node.demand)) * 100);
      if (fulfillmentRate < 50) return 'border-red-500';
      if (fulfillmentRate < 80) return 'border-yellow-500';
      return 'border-green-500';
    }

    const inventoryPercentage = (node.inventory / Math.max(1, node.capacity)) * 100;
    if (inventoryPercentage < 10) {
      return 'border-red-500'; // Critical low stock
    }
    if (inventoryPercentage < 30) {
      return 'border-yellow-500'; // Low stock
    }
    if (inventoryPercentage > 90) {
      return 'border-blue-500'; // Overstocked
    }
    return 'border-green-500'; // Healthy stock
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold">Supply Chain Optimization Game</h1>
          <p className="text-sm text-gray-500">Thời gian còn lại: {timeLeft} giây</p>
        </div>
        <div className="flex items-center">
          <button
            onClick={onRestart}
            className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all mr-2"
          >
            <RotateCcw className="w-4 h-4 mr-1" /> Khởi động lại
          </button>
          <button
            onClick={() => setGameState((prev) => (prev === 'running' ? 'paused' : 'running'))}
            className="px-4 py-2 text-sm bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-all"
          >
            {gameState === 'running' ? <Pause className="w-4 h-4 mr-1" /> : <Play className="w-4 h-4 mr-1" />}
            {gameState === 'running' ? 'Tạm dừng' : 'Tiếp tục'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-2">Tình trạng tổng quan</h2>
          <div className="flex justify-between text-sm text-gray-500">
            <div>
              <div>
                Điểm số: <span className="font-semibold text-black">{score}</span>
              </div>
              <div>
                Tổng chi phí: <span className="font-semibold text-black">{totalCost} $</span>
              </div>
            </div>
            <div>
              <div>
                Hiệu suất: <span className="font-semibold text-black">{efficiency}%</span>
              </div>
              <div>
                Sự hài lòng của khách hàng: <span className="font-semibold text-black">{customerSatisfaction}%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-2">Lộ trình đã chọn</h2>
          {selectedRoute ? (
            <div className="text-sm text-gray-500">
              <div>
                <span className="font-semibold text-black">{routes.find((r) => r.id === selectedRoute)?.from}</span> →{' '}
                <span className="font-semibold text-black">{routes.find((r) => r.id === selectedRoute)?.to}</span>
              </div>
              <div className="flex justify-between mt-2">
                <div>
                  <div>
                    Khoảng cách:{' '}
                    <span className="font-semibold text-black">
                      {routes.find((r) => r.id === selectedRoute)?.distance} km
                    </span>
                  </div>
                  <div>
                    Thời gian:{' '}
                    <span className="font-semibold text-black">
                      {routes.find((r) => r.id === selectedRoute)?.time} giờ
                    </span>
                  </div>
                </div>
                <div>
                  <div>
                    Chi phí:{' '}
                    <span className="font-semibold text-black">
                      {routes.find((r) => r.id === selectedRoute)?.cost} $
                    </span>
                  </div>
                  <div>
                    Trạng thái:{' '}
                    <span className="font-semibold text-black">
                      {routes.find((r) => r.id === selectedRoute)?.isActive ? 'Đang hoạt động' : 'Ngừng hoạt động'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-sm text-gray-500 italic">Chưa có lộ trình nào được chọn.</div>
          )}
        </div>
      </div>

      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-2">Các nút cung ứng</h2>
        <div className="grid grid-cols-2 gap-4">
          {nodes.map((node) => (
            <div
              key={node.id}
              className={`p-4 rounded-md shadow-sm border-l-4 transition-all ${getNodeStatusColor(node)}`}
            >
              <div className="flex items-center mb-2">
                <div className="text-2xl mr-2">{getNodeTypeIcon(node.type)}</div>
                <div>
                  <div className="font-semibold text-black">{node.name}</div>
                  <div className="text-xs text-gray-500">{node.type}</div>
                </div>
              </div>
              <div className="text-sm text-gray-700">
                Tồn kho: <span className="font-semibold">{node.inventory}</span> / {node.capacity} <br />
                Nhu cầu: <span className="font-semibold">{node.demand}</span> <br />
                Chi phí: <span className="font-semibold">{node.cost} $</span> <br />
                Hiệu suất: <span className="font-semibold">{node.efficiency}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-2">Các lộ trình</h2>
        <div className="grid grid-cols-2 gap-4">
          {routes.map((route) => (
            <div
              key={route.id}
              className={`p-4 rounded-md shadow-sm border-l-4 transition-all ${route.isActive ? 'border-green-500' : 'border-gray-300'}`}
            >
              <div className="flex items-center mb-2">
                <div className="text-2xl mr-2">
                  <Truck className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <div className="font-semibold text-black">
                    {route.from} → {route.to}
                  </div>
                  <div className="text-xs text-gray-500">Khoảng cách: {route.distance} km</div>
                </div>
              </div>
              <div className="text-sm text-gray-700">
                Thời gian: <span className="font-semibold">{route.time} giờ</span> <br />
                Chi phí: <span className="font-semibold">{route.cost} $</span> <br />
                Trạng thái:{' '}
                <span className="font-semibold">{route.isActive ? 'Đang hoạt động' : 'Ngừng hoạt động'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-2">Các lô hàng</h2>
        <div className="space-y-2">
          {shipments.map((shipment) => (
            <div
              key={shipment.id}
              className={`p-4 rounded-md shadow-sm border-l-4 transition-all ${shipment.status === 'delivered' ? 'border-green-500' : 'border-blue-500'}`}
            >
              <div className="flex items-center mb-2">
                <div className="text-2xl mr-2">
                  <Package className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <div className="font-semibold text-black">Lô hàng {shipment.id}</div>
                  <div className="text-xs text-gray-500">
                    Tuyến đường: {routes.find((r) => r.id === shipment.routeId)?.from} →{' '}
                    {routes.find((r) => r.id === shipment.routeId)?.to}
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-700">
                Số lượng: <span className="font-semibold">{shipment.quantity}</span> <br />
                Thời gian bắt đầu: <span className="font-semibold">{shipment.startTime} giờ</span> <br />
                Trạng thái: <span className="font-semibold">{shipment.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {gameState === 'running' && (
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-2">Tạo lô hàng mới</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Chọn tuyến đường</label>
              <select
                value={selectedRoute || ''}
                onChange={(e) => setSelectedRoute(e.target.value)}
                className="block w-full p-2 text-sm border rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">-- Chọn tuyến đường --</option>
                {routes.map((route) => (
                  <option key={route.id} value={route.id}>
                    {route.from} → {route.to} (Khoảng cách: {route.distance} km)
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Số lượng</label>
              <input
                type="number"
                value={shipmentQuantity}
                onChange={(e) => setShipmentQuantity(Math.max(0, Number(e.target.value)))}
                className="block w-full p-2 text-sm border rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              onClick={createShipment}
              className="w-full px-4 py-2 text-sm bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition-all"
            >
              Tạo lô hàng
            </button>
          </div>
        </div>
      )}

      {gameState === 'completed' && (
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-2">Kết thúc trò chơi</h2>
          <div className="text-sm text-gray-700 mb-4">
            Cảm ơn bạn đã tham gia trò chơi! Dưới đây là kết quả của bạn:
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <div className="font-semibold text-black">Điểm số:</div>
              <div>{score}</div>
            </div>
            <div>
              <div className="font-semibold text-black">Tổng chi phí:</div>
              <div>{totalCost} $</div>
            </div>
            <div>
              <div className="font-semibold text-black">Hiệu suất:</div>
              <div>{efficiency}%</div>
            </div>
            <div>
              <div className="font-semibold text-black">Sự hài lòng của khách hàng:</div>
              <div>{customerSatisfaction}%</div>
            </div>
          </div>
          <div className="mt-4">
            <button
              onClick={onRestart}
              className="w-full px-4 py-2 text-sm bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all"
            >
              Chơi lại
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
