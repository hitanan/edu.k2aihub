'use client';

import React, { useState, useEffect } from 'react';
import { Truck, Package, MapPin, Clock, Target, RotateCcw, TrendingUp } from 'lucide-react';

interface LogisticsNetworkSimGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface Location {
  id: string;
  name: string;
  type: 'warehouse' | 'store' | 'supplier';
  position: { x: number; y: number };
  inventory: number;
  demand: number;
  capacity: number;
  color: string;
}

interface Vehicle {
  id: string;
  type: 'truck' | 'van' | 'drone';
  capacity: number;
  speed: number;
  cost: number;
  position: { x: number; y: number };
  route: string[];
  cargo: number;
  isMoving: boolean;
}

interface Delivery {
  id: string;
  from: string;
  to: string;
  amount: number;
  priority: 'low' | 'medium' | 'high';
  deadline: number;
  status: 'pending' | 'in-transit' | 'delivered';
}

const LogisticsNetworkSimGame: React.FC<LogisticsNetworkSimGameProps> = ({ onComplete, timeLeft, onRestart }) => {
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'playing' | 'completed'>('playing');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [totalCost, setTotalCost] = useState(0);
  const [efficiency] = useState(100);

  const [locations, setLocations] = useState<Location[]>([
    {
      id: 'warehouse-1',
      name: 'Kho Trung Tâm',
      type: 'warehouse',
      position: { x: 400, y: 200 },
      inventory: 1000,
      demand: 0,
      capacity: 2000,
      color: '#3B82F6',
    },
    {
      id: 'store-1',
      name: 'Cửa Hàng A',
      type: 'store',
      position: { x: 200, y: 100 },
      inventory: 50,
      demand: 100,
      capacity: 200,
      color: '#10B981',
    },
    {
      id: 'store-2',
      name: 'Cửa Hàng B',
      type: 'store',
      position: { x: 600, y: 150 },
      inventory: 30,
      demand: 150,
      capacity: 250,
      color: '#10B981',
    },
    {
      id: 'store-3',
      name: 'Cửa Hàng C',
      type: 'store',
      position: { x: 350, y: 350 },
      inventory: 20,
      demand: 120,
      capacity: 180,
      color: '#10B981',
    },
    {
      id: 'supplier-1',
      name: 'Nhà Cung Cấp X',
      type: 'supplier',
      position: { x: 100, y: 300 },
      inventory: 500,
      demand: 0,
      capacity: 1000,
      color: '#F59E0B',
    },
  ]);

  const [vehicles, setVehicles] = useState<Vehicle[]>([
    {
      id: 'truck-1',
      type: 'truck',
      capacity: 200,
      speed: 50,
      cost: 100,
      position: { x: 400, y: 200 },
      route: [],
      cargo: 0,
      isMoving: false,
    },
    {
      id: 'van-1',
      type: 'van',
      capacity: 100,
      speed: 70,
      cost: 60,
      position: { x: 400, y: 200 },
      route: [],
      cargo: 0,
      isMoving: false,
    },
  ]);

  const [deliveries, setDeliveries] = useState<Delivery[]>([
    {
      id: 'delivery-1',
      from: 'warehouse-1',
      to: 'store-1',
      amount: 80,
      priority: 'high',
      deadline: 300,
      status: 'pending',
    },
    {
      id: 'delivery-2',
      from: 'warehouse-1',
      to: 'store-2',
      amount: 120,
      priority: 'medium',
      deadline: 400,
      status: 'pending',
    },
    {
      id: 'delivery-3',
      from: 'supplier-1',
      to: 'warehouse-1',
      amount: 200,
      priority: 'low',
      deadline: 500,
      status: 'pending',
    },
  ]);

  const calculateDistance = (pos1: { x: number; y: number }, pos2: { x: number; y: number }) => {
    return Math.sqrt(Math.pow(pos2.x - pos1.x, 2) + Math.pow(pos2.y - pos1.y, 2));
  };

  const assignDelivery = (deliveryId: string, vehicleId: string) => {
    const delivery = deliveries.find((d) => d.id === deliveryId);
    const vehicle = vehicles.find((v) => v.id === vehicleId);
    const fromLocation = locations.find((l) => l.id === delivery?.from);
    const toLocation = locations.find((l) => l.id === delivery?.to);

    if (delivery && vehicle && fromLocation && toLocation && !vehicle.isMoving) {
      // Update delivery status
      setDeliveries((prev) => prev.map((d) => (d.id === deliveryId ? { ...d, status: 'in-transit' } : d)));

      // Move vehicle and update cargo
      setVehicles((prev) =>
        prev.map((v) => {
          if (v.id === vehicleId) {
            return {
              ...v,
              route: [delivery.from, delivery.to],
              cargo: delivery.amount,
              isMoving: true,
            };
          }
          return v;
        }),
      );

      // Calculate cost and update
      const distance = calculateDistance(fromLocation.position, toLocation.position);
      const deliveryCost = (distance / 10) * vehicle.cost;
      setTotalCost((prev) => prev + deliveryCost);

      // Simulate delivery completion after some time
      setTimeout(() => {
        completeDelivery(deliveryId, vehicleId);
      }, 3000);
    }
  };

  const completeDelivery = (deliveryId: string, vehicleId: string) => {
    const delivery = deliveries.find((d) => d.id === deliveryId);
    if (!delivery) return;

    // Update delivery status
    setDeliveries((prev) => prev.map((d) => (d.id === deliveryId ? { ...d, status: 'delivered' } : d)));

    // Update vehicle
    setVehicles((prev) =>
      prev.map((v) => {
        if (v.id === vehicleId) {
          const toLocation = locations.find((l) => l.id === delivery.to);
          return {
            ...v,
            position: toLocation?.position || v.position,
            route: [],
            cargo: 0,
            isMoving: false,
          };
        }
        return v;
      }),
    );

    // Update location inventories
    setLocations((prev) =>
      prev.map((l) => {
        if (l.id === delivery.from) {
          return { ...l, inventory: l.inventory - delivery.amount };
        } else if (l.id === delivery.to) {
          return { ...l, inventory: l.inventory + delivery.amount };
        }
        return l;
      }),
    );

    // Add score based on priority and efficiency
    const priorityBonus = delivery.priority === 'high' ? 50 : delivery.priority === 'medium' ? 30 : 20;
    setScore((prev) => prev + priorityBonus + 20);
  };

  const addNewVehicle = (type: Vehicle['type']) => {
    const vehicleConfig = {
      truck: { capacity: 200, speed: 50, cost: 100 },
      van: { capacity: 100, speed: 70, cost: 60 },
      drone: { capacity: 50, speed: 100, cost: 40 },
    };

    const config = vehicleConfig[type];
    const newVehicle: Vehicle = {
      id: `${type}-${Date.now()}`,
      type,
      ...config,
      position: { x: 400, y: 200 },
      route: [],
      cargo: 0,
      isMoving: false,
    };

    setVehicles((prev) => [...prev, newVehicle]);
    setTotalCost((prev) => prev + config.cost * 2); // Purchase cost
  };

  const optimizeRoutes = () => {
    // Simple route optimization logic
    const pendingDeliveries = deliveries.filter((d) => d.status === 'pending');
    const availableVehicles = vehicles.filter((v) => !v.isMoving);

    pendingDeliveries.forEach((delivery, index) => {
      if (availableVehicles[index]) {
        assignDelivery(delivery.id, availableVehicles[index].id);
      }
    });

    setScore((prev) => prev + 30);
  };

  // Game completion check
  useEffect(() => {
    const completedDeliveries = deliveries.filter((d) => d.status === 'delivered').length;
    const completionRate = completedDeliveries / deliveries.length;

    if (completionRate >= 0.8 && gameState !== 'completed') {
      setGameState('completed');
      onComplete(true, score);
    }
  }, [deliveries, gameState, onComplete, score]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete(false, score);
    }
  }, [timeLeft, onComplete, score]);

  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-900 via-slate-800 to-indigo-900 text-white p-4">
      <div className="max-w-7xl mx-auto h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <Truck className="w-8 h-8 text-blue-400" />
            <div>
              <h2 className="text-2xl font-bold">Mô Phỏng Mạng Lưới Logistics</h2>
              <p className="text-sm text-gray-300">Tối ưu hóa vận chuyển và phân phối</p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-green-400" />
              <span className="font-semibold">{score} điểm</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">${totalCost}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-red-400" />
              <span className="font-semibold">{Math.max(0, timeLeft)}s</span>
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-5 gap-4">
          {/* Logistics Map */}
          <div className="col-span-3 bg-black/30 backdrop-blur-sm rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-blue-400" />
              Bản Đồ Logistics
            </h3>
            <div className="bg-black/20 rounded-lg h-96 relative border border-gray-600 overflow-hidden">
              {/* Grid background */}
              <div className="absolute inset-0 opacity-10">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute border-gray-500"
                    style={{
                      left: `${i * 5}%`,
                      width: '1px',
                      height: '100%',
                      borderLeft: '1px solid currentColor',
                    }}
                  />
                ))}
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute border-gray-500"
                    style={{
                      top: `${i * 8.33}%`,
                      width: '100%',
                      height: '1px',
                      borderTop: '1px solid currentColor',
                    }}
                  />
                ))}
              </div>

              {/* Locations */}
              {locations.map((location) => (
                <div
                  key={location.id}
                  className={`absolute w-12 h-12 rounded-full border-2 cursor-pointer transition-all flex items-center justify-center ${
                    selectedLocation === location.id ? 'border-yellow-400 scale-110' : 'border-white'
                  }`}
                  style={{
                    left: location.position.x - 24,
                    top: location.position.y - 24,
                    backgroundColor: location.color,
                  }}
                  onClick={() => setSelectedLocation(location.id)}
                >
                  <div className="text-xs font-bold text-white text-center">
                    {location.type === 'warehouse' ? '🏭' : location.type === 'store' ? '🏪' : '🏭'}
                  </div>
                </div>
              ))}

              {/* Vehicles */}
              {vehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className={`absolute w-8 h-8 rounded cursor-pointer transition-all flex items-center justify-center ${
                    selectedVehicle === vehicle.id ? 'bg-yellow-400' : 'bg-orange-500'
                  } ${vehicle.isMoving ? 'animate-pulse' : ''}`}
                  style={{
                    left: vehicle.position.x - 16,
                    top: vehicle.position.y - 16,
                  }}
                  onClick={() => setSelectedVehicle(vehicle.id)}
                >
                  <Truck className="w-4 h-4 text-white" />
                </div>
              ))}

              {/* Routes for moving vehicles */}
              {vehicles
                .filter((v) => v.isMoving)
                .map((vehicle) => {
                  const fromLoc = locations.find((l) => l.id === vehicle.route[0]);
                  const toLoc = locations.find((l) => l.id === vehicle.route[1]);
                  if (fromLoc && toLoc) {
                    return (
                      <svg key={vehicle.id} className="absolute inset-0 pointer-events-none">
                        <line
                          x1={fromLoc.position.x}
                          y1={fromLoc.position.y}
                          x2={toLoc.position.x}
                          y2={toLoc.position.y}
                          stroke="#10B981"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                          className="animate-pulse"
                        />
                      </svg>
                    );
                  }
                  return null;
                })}
            </div>
          </div>

          {/* Control Panel */}
          <div className="col-span-2 space-y-4">
            {/* Deliveries Panel */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Package className="w-5 h-5 mr-2 text-green-400" />
                Đơn Hàng
              </h3>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {deliveries.map((delivery) => (
                  <div key={delivery.id} className="bg-black/20 p-2 rounded flex justify-between items-center">
                    <div className="text-xs">
                      <div className="font-semibold">{delivery.amount} đơn vị</div>
                      <div className="text-gray-400">
                        {locations.find((l) => l.id === delivery.from)?.name} →{' '}
                        {locations.find((l) => l.id === delivery.to)?.name}
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          delivery.status === 'delivered'
                            ? 'bg-green-400'
                            : delivery.status === 'in-transit'
                              ? 'bg-yellow-400'
                              : 'bg-red-400'
                        }`}
                      />
                      <span
                        className={`text-xs px-1 py-0.5 rounded ${
                          delivery.priority === 'high'
                            ? 'bg-red-600'
                            : delivery.priority === 'medium'
                              ? 'bg-yellow-600'
                              : 'bg-green-600'
                        }`}
                      >
                        {delivery.priority.toUpperCase()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vehicles Panel */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Truck className="w-5 h-5 mr-2 text-blue-400" />
                Phương Tiện
              </h3>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {vehicles.map((vehicle) => (
                  <div key={vehicle.id} className="bg-black/20 p-2 rounded flex justify-between items-center">
                    <div className="text-xs">
                      <div className="font-semibold">{vehicle.type.toUpperCase()}</div>
                      <div className="text-gray-400">
                        Tải: {vehicle.cargo}/{vehicle.capacity}
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs ${vehicle.isMoving ? 'bg-green-600' : 'bg-gray-600'}`}>
                      {vehicle.isMoving ? 'Đang di chuyển' : 'Sẵn sàng'}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-3 gap-1">
                <button
                  onClick={() => addNewVehicle('truck')}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-2 rounded text-xs transition-colors"
                >
                  + Xe tải
                </button>
                <button
                  onClick={() => addNewVehicle('van')}
                  className="bg-green-600 hover:bg-green-700 text-white py-1 px-2 rounded text-xs transition-colors"
                >
                  + Xe van
                </button>
                <button
                  onClick={() => addNewVehicle('drone')}
                  className="bg-purple-600 hover:bg-purple-700 text-white py-1 px-2 rounded text-xs transition-colors"
                >
                  + Drone
                </button>
              </div>
            </div>

            {/* Actions Panel */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">Hành Động</h3>
              <div className="space-y-2">
                <button
                  onClick={optimizeRoutes}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors flex items-center justify-center"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Tối Ưu Tuyến Đường
                </button>

                <button
                  onClick={onRestart}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors flex items-center justify-center"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Chơi Lại
                </button>

                {/* Stats */}
                <div className="mt-4 p-3 bg-black/20 rounded-lg">
                  <div className="text-xs text-gray-400 mb-2">Thống Kê</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>Đã giao:</span>
                      <span>
                        {deliveries.filter((d) => d.status === 'delivered').length}/{deliveries.length}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hiệu quả:</span>
                      <span>{efficiency}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Chi phí:</span>
                      <span>${totalCost}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Victory Modal */}
      {gameState === 'completed' && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl text-white text-center max-w-md mx-4">
            <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-10 h-10 text-green-900" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Logistics Xuất Sắc!</h2>
            <p className="text-lg mb-4">Bạn đã tối ưu hóa mạng lưới logistics thành công!</p>
            <div className="text-blue-200 space-y-1 mb-6">
              <div>Điểm cuối: {score}</div>
              <div>Tổng chi phí: ${totalCost}</div>
              <div>Hiệu quả: {efficiency}%</div>
            </div>
            <button
              onClick={onRestart}
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Chơi Lại
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogisticsNetworkSimGame;
