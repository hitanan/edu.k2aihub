import React, { useState, useEffect, useCallback } from 'react';
import {
  Zap,
  Sun,
  Wind,
  Droplet,
  Battery,
  Home,
  Factory,
  Target,
  Play,
  RotateCcw,
  Award,
  Gauge,
  Activity,
  CloudRain,
} from 'lucide-react';

interface RenewableEnergyGridManagerProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
  onRestart: () => void;
}

interface EnergySource {
  id: string;
  name: string;
  type: 'solar' | 'wind' | 'hydro' | 'nuclear' | 'coal' | 'gas';
  capacity: number; // MW
  output: number; // Current MW output
  efficiency: number; // %'
  cost: number; // $ per MW
  carbonEmission: number; // kg CO2 per MWh
  reliability: number; // 1-10
  weatherDependent: boolean;
  icon: React.ReactNode;
  description: string;
}

interface GridComposition {
  type: string;
  count: number;
  capacity: number;
  icon: React.ReactNode;
}

interface EnergyConsumer {
  id: string;
  name: string;
  type: 'residential' | 'commercial' | 'industrial';
  baseDemand: number; // MW
  currentDemand: number; // MW
  priority: number; // 1-10
  icon: React.ReactNode;
  description: string;
}

interface Weather {
  condition: 'sunny' | 'cloudy' | 'windy' | 'rainy' | 'stormy';
  solarEfficiency: number; // multiplier
  windEfficiency: number; // multiplier
  icon: React.ReactNode;
  description: string;
}

interface GridEvent {
  id: string;
  title: string;
  description: string;
  impact: {
    demand?: number; // % change
    solar?: number; // % change
    wind?: number; // % change
    hydro?: number; // % change
  };
  duration: number; // seconds
  severity: number; // 1-10
}

// Available energy sources
const availableSources: EnergySource[] = [
  {
    id: 'solar-farm',
    name: 'Solar Farm',
    type: 'solar',
    capacity: 100,
    output: 80,
    efficiency: 22,
    cost: 1200000,
    carbonEmission: 48,
    reliability: 7,
    weatherDependent: true,
    icon: <Sun className="w-6 h-6" />,
    description: 'Photovoltaic solar panels generating clean energy from sunlight',
  },
  {
    id: 'wind-turbine',
    name: 'Wind Turbine Farm',
    type: 'wind',
    capacity: 150,
    output: 120,
    efficiency: 35,
    cost: 1800000,
    carbonEmission: 11,
    reliability: 6,
    weatherDependent: true,
    icon: <Wind className="w-6 h-6" />,
    description: 'Modern wind turbines harnessing wind power',
  },
  {
    id: 'hydro-dam',
    name: 'Hydroelectric Dam',
    type: 'hydro',
    capacity: 300,
    output: 280,
    efficiency: 90,
    cost: 5000000,
    carbonEmission: 24,
    reliability: 9,
    weatherDependent: false,
    icon: <Droplet className="w-6 h-6" />,
    description: 'Reliable hydroelectric power from flowing water',
  },
  {
    id: 'nuclear-plant',
    name: 'Nuclear Power Plant',
    type: 'nuclear',
    capacity: 1000,
    output: 950,
    efficiency: 33,
    cost: 15000000,
    carbonEmission: 12,
    reliability: 10,
    weatherDependent: false,
    icon: <Zap className="w-6 h-6" />,
    description: 'Clean nuclear power with high reliability',
  },
  {
    id: 'gas-plant',
    name: 'Natural Gas Plant',
    type: 'gas',
    capacity: 500,
    output: 450,
    efficiency: 60,
    cost: 800000,
    carbonEmission: 490,
    reliability: 8,
    weatherDependent: false,
    icon: <Factory className="w-6 h-6" />,
    description: 'Flexible natural gas power generation',
  },
  {
    id: 'battery-storage',
    name: 'Battery Storage',
    type: 'solar', // Acts as renewable storage
    capacity: 200,
    output: 150,
    efficiency: 85,
    cost: 2500000,
    carbonEmission: 0,
    reliability: 8,
    weatherDependent: false,
    icon: <Battery className="w-6 h-6" />,
    description: 'Large-scale battery storage for grid stabilization',
  },
];

// Energy consumers
const initialConsumers: EnergyConsumer[] = [
  {
    id: 'residential',
    name: 'Residential Areas',
    type: 'residential',
    baseDemand: 800,
    currentDemand: 800,
    priority: 8,
    icon: <Home className="w-6 h-6" />,
    description: 'Homes and residential buildings',
  },
  {
    id: 'commercial',
    name: 'Commercial District',
    type: 'commercial',
    baseDemand: 600,
    currentDemand: 600,
    priority: 7,
    icon: <Factory className="w-6 h-6" />,
    description: 'Offices, shops, and commercial buildings',
  },
  {
    id: 'industrial',
    name: 'Industrial Complex',
    type: 'industrial',
    baseDemand: 1200,
    currentDemand: 1200,
    priority: 9,
    icon: <Factory className="w-6 h-6" />,
    description: 'Manufacturing and industrial facilities',
  },
];

// Weather conditions
const weatherConditions: Weather[] = [
  {
    condition: 'sunny',
    solarEfficiency: 1.2,
    windEfficiency: 0.8,
    icon: <Sun className="w-6 h-6" />,
    description: 'Clear sunny weather, optimal for solar power',
  },
  {
    condition: 'cloudy',
    solarEfficiency: 0.6,
    windEfficiency: 0.9,
    icon: <CloudRain className="w-6 h-6" />,
    description: 'Cloudy conditions reduce solar efficiency',
  },
  {
    condition: 'windy',
    solarEfficiency: 0.9,
    windEfficiency: 1.3,
    icon: <Wind className="w-6 h-6" />,
    description: 'Strong winds boost wind power generation',
  },
  {
    condition: 'rainy',
    solarEfficiency: 0.4,
    windEfficiency: 1.1,
    icon: <CloudRain className="w-6 h-6" />,
    description: 'Rain reduces solar output but helps wind',
  },
];

// Grid events
const gridEvents: GridEvent[] = [
  {
    id: 'peak-demand',
    title: 'Peak Demand Period',
    description: 'Hot summer day increases air conditioning demand',
    impact: { demand: 25 },
    duration: 5,
    severity: 6,
  },
  {
    id: 'storm-damage',
    title: 'Storm Damage',
    description: 'Severe storm affects wind and solar generation',
    impact: { wind: -40, solar: -60 },
    duration: 8,
    severity: 8,
  },
  {
    id: 'industrial-expansion',
    title: 'Industrial Expansion',
    description: 'New factory comes online, increasing baseline demand',
    impact: { demand: 15 },
    duration: 15,
    severity: 5,
  },
  {
    id: 'equipment-failure',
    title: 'Equipment Maintenance',
    description: 'Scheduled maintenance reduces power plant output',
    impact: { wind: -20, solar: -15 },
    duration: 6,
    severity: 4,
  },
  {
    id: 'heat-wave',
    title: 'Heat Wave',
    description: 'Extreme heat increases solar efficiency but spikes demand',
    impact: { demand: 30, solar: 20 },
    duration: 7,
    severity: 7,
  },
];

const RenewableEnergyGridManagerGame: React.FC<RenewableEnergyGridManagerProps> = ({
  onComplete,
  timeLeft,
  onRestart,
}) => {
  // Game state
  const [gamePhase, setGamePhase] = useState<'setup' | 'managing' | 'event' | 'results'>('setup');
  const [isStarted, setIsStarted] = useState(false);
  const [score, setScore] = useState(0);

  // Grid management
  const [budget, setBudget] = useState(50000000); // $50M budget
  const [totalOutput, setTotalOutput] = useState(0);
  const [totalDemand, setTotalDemand] = useState(0);
  const [gridStability, setGridStability] = useState(100);
  const [carbonEmissions, setCarbonEmissions] = useState(0);
  const [renewablePercentage, setRenewablePercentage] = useState(0);

  // Energy sources and consumers
  const [energySources, setEnergySources] = useState<EnergySource[]>([]);
  const [consumers, setConsumers] = useState<EnergyConsumer[]>([]);

  // Weather and events
  const [currentWeather, setCurrentWeather] = useState<Weather | null>(null);
  const [currentEvent, setCurrentEvent] = useState<GridEvent | null>(null);
  const [eventHistory, setEventHistory] = useState<GridEvent[]>([]);

  // UI state
  const [selectedSource, setSelectedSource] = useState<EnergySource | null>(null);
  const [sourceCount, setSourceCount] = useState(1);

  // Add energy source to grid
  const addEnergySource = () => {
    if (!selectedSource || budget < selectedSource.cost * sourceCount) return;

    const newSources = Array.from({ length: sourceCount }, (_, index) => ({
      ...selectedSource,
      id: `${selectedSource.id}-${Date.now()}-${index}`,
      output: selectedSource.capacity * (selectedSource.efficiency / 100),
    }));

    setEnergySources((prev) => [...prev, ...newSources]);
    setBudget((prev) => prev - selectedSource.cost * sourceCount);
    setSelectedSource(null);
    setSourceCount(1);
  };

  // Calculate grid metrics
  const calculateGridMetrics = useCallback(() => {
    const totalOut = energySources.reduce((sum, source) => {
      let output = source.output;

      // Apply weather effects
      if (currentWeather && source.weatherDependent) {
        if (source.type === 'solar') {
          output *= currentWeather.solarEfficiency;
        } else if (source.type === 'wind') {
          output *= currentWeather.windEfficiency;
        }
      }

      return sum + output;
    }, 0);

    const totalDem = consumers.reduce((sum, consumer) => sum + consumer.currentDemand, 0);
    const emissions = energySources.reduce((sum, source) => {
      return sum + source.output * source.carbonEmission;
    }, 0);

    const renewableSources = ['solar', 'wind', 'hydro', 'nuclear'];
    const renewableOutput = energySources
      .filter((source) => renewableSources.includes(source.type))
      .reduce((sum, source) => sum + source.output, 0);
    const renewablePercent = totalOut > 0 ? (renewableOutput / totalOut) * 100 : 0;

    // Grid stability calculation
    const supplyDemandRatio = totalOut / totalDem;
    let stability = 100;
    if (supplyDemandRatio < 0.9)
      stability = 50; // Under supply
    else if (supplyDemandRatio > 1.2)
      stability = 70; // Over supply
    else if (supplyDemandRatio >= 0.95 && supplyDemandRatio <= 1.1) stability = 100; // Optimal

    setTotalOutput(totalOut);
    setTotalDemand(totalDem);
    setCarbonEmissions(emissions);
    setRenewablePercentage(renewablePercent);
    setGridStability(stability);
  }, [energySources, consumers, currentWeather]);

  // Change weather randomly
  const changeWeather = useCallback(() => {
    const newWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    setCurrentWeather(newWeather);
  }, []);

  // Trigger grid event
  const triggerGridEvent = () => {
    const randomEvent = gridEvents[Math.floor(Math.random() * gridEvents.length)];
    setCurrentEvent(randomEvent);
    setGamePhase('event');

    // Apply event effects
    if (randomEvent.impact.demand) {
      const newConsumers = consumers.map((consumer) => ({
        ...consumer,
        currentDemand: consumer.baseDemand * (1 + randomEvent.impact.demand! / 100),
      }));
      setConsumers(newConsumers);
    }

    if (randomEvent.impact.solar || randomEvent.impact.wind || randomEvent.impact.hydro) {
      const updatedSources = energySources.map((source) => {
        let outputMultiplier = 1;
        if (source.type === 'solar' && randomEvent.impact.solar) {
          outputMultiplier = 1 + randomEvent.impact.solar / 100;
        } else if (source.type === 'wind' && randomEvent.impact.wind) {
          outputMultiplier = 1 + randomEvent.impact.wind / 100;
        } else if (source.type === 'hydro' && randomEvent.impact.hydro) {
          outputMultiplier = 1 + randomEvent.impact.hydro / 100;
        }

        return {
          ...source,
          output: Math.max(0, source.capacity * (source.efficiency / 100) * outputMultiplier),
        };
      });
      setEnergySources(updatedSources);
    }

    setEventHistory((prev) => [...prev, randomEvent]);

    setTimeout(() => {
      setCurrentEvent(null);
      if (timeLeft < 20) {
        endGame();
      } else {
        setGamePhase('managing');
      }
    }, randomEvent.duration * 1000);
  };

  // Start game
  const startGame = () => {
    setIsStarted(true);
    setGamePhase('managing');
    setConsumers(initialConsumers);
    changeWeather();
  };

  // End game and calculate score
  const endGame = () => {
    setGamePhase('results');

    const efficiencyScore = Math.min(gridStability, 100);
    const renewableScore = renewablePercentage * 2;
    const budgetScore = (budget / 50000000) * 200;
    const emissionScore = Math.max(0, 200 - carbonEmissions / 1000);

    const finalScore = Math.max(0, Math.min(1000, efficiencyScore + renewableScore + budgetScore + emissionScore));
    setScore(finalScore);

    setTimeout(() => {
      onComplete(true, finalScore);
    }, 3000);
  };

  // Effects
  useEffect(() => {
    calculateGridMetrics();
  }, [calculateGridMetrics]);

  useEffect(() => {
    const weatherInterval = setInterval(() => {
      if (gamePhase === 'managing') {
        changeWeather();
      }
    }, 15000);

    return () => clearInterval(weatherInterval);
  }, [gamePhase, changeWeather]);

  useEffect(() => {
    if (timeLeft === 30 && gamePhase === 'managing') {
      triggerGridEvent();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, gamePhase]);

  // Render setup phase
  if (!isStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🔋</div>
            <h1 className="text-4xl font-bold text-white mb-4">Renewable Energy Grid Manager</h1>
            <p className="text-xl text-gray-500 mb-8">
              Build and manage a sustainable electrical grid with renewable energy sources
            </p>
          </div>

          <div className="bg-black bg-opacity-30 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Target className="mr-3" />
              Management Objectives
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg font-semibold text-white mb-2">Balance Supply & Demand</h3>
                <p className="text-gray-200">Maintain grid stability by matching power generation to consumption</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🌱</div>
                <h3 className="text-lg font-semibold text-white mb-2">Maximize Renewables</h3>
                <p className="text-gray-200">Increase the percentage of clean, renewable energy sources</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-lg font-semibold text-white mb-2">Budget Management</h3>
                <p className="text-gray-200">Efficiently use your $50M budget for maximum impact</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🌍</div>
                <h3 className="text-lg font-semibold text-white mb-2">Reduce Emissions</h3>
                <p className="text-gray-200">Minimize carbon emissions while meeting energy needs</p>
              </div>
            </div>
          </div>

          <div className="bg-black bg-opacity-30 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Available Energy Sources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {availableSources.slice(0, 6).map((source) => (
                <div key={source.id} className="bg-white bg-opacity-10 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div className="text-green-400 mr-3">{source.icon}</div>
                    <h3 className="font-semibold text-white">{source.name}</h3>
                  </div>
                  <div className="text-sm text-gray-500 space-y-1">
                    <div>Capacity: {source.capacity} MW</div>
                    <div>Efficiency: {source.efficiency}%</div>
                    <div>Cost: ${(source.cost / 1000000).toFixed(1)}M</div>
                    <div>Emissions: {source.carbonEmission} kg CO2/MWh</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={startGame}
            className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center text-xl"
          >
            <Play className="mr-3" size={24} />
            Start Grid Management
          </button>
        </div>
      </div>
    );
  }

  // Render managing phase
  if (gamePhase === 'managing') {
    const supplyDemandRatio = totalDemand > 0 ? totalOutput / totalDemand : 0;

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Grid Status Dashboard */}
          <div className="bg-black bg-opacity-30 rounded-xl p-6 mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              <div className="text-center">
                <div className="text-xl font-bold text-white">{totalOutput.toFixed(0)} MW</div>
                <div className="text-gray-500 text-sm">Supply</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">{totalDemand.toFixed(0)} MW</div>
                <div className="text-gray-500 text-sm">Demand</div>
              </div>
              <div className="text-center">
                <div
                  className={`text-xl font-bold ${gridStability > 80 ? 'text-green-400' : gridStability > 50 ? 'text-yellow-400' : 'text-red-400'}`}
                >
                  {gridStability.toFixed(0)}%
                </div>
                <div className="text-gray-500 text-sm">Stability</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-400">{renewablePercentage.toFixed(0)}%</div>
                <div className="text-gray-500 text-sm">Renewable</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">${(budget / 1000000).toFixed(1)}M</div>
                <div className="text-gray-500 text-sm">Budget</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-orange-400">{(carbonEmissions / 1000).toFixed(1)}t</div>
                <div className="text-gray-500 text-sm">CO2/hr</div>
              </div>
              <div className="text-center flex items-center justify-center">
                <div className="text-blue-400 mr-2">{currentWeather?.icon}</div>
                <div className="text-sm text-gray-500 capitalize">{currentWeather?.condition}</div>
              </div>
              <div className="text-center">
                <Gauge
                  className={`mx-auto mb-1 ${
                    supplyDemandRatio >= 0.95 && supplyDemandRatio <= 1.1
                      ? 'text-green-400'
                      : supplyDemandRatio > 0.8
                        ? 'text-yellow-400'
                        : 'text-red-400'
                  }`}
                  size={24}
                />
                <div className="text-gray-500 text-sm">Balance</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Energy Sources */}
            <div className="bg-black bg-opacity-30 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Add Energy Sources</h2>
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {availableSources.map((source) => (
                  <div
                    key={source.id}
                    onClick={() => setSelectedSource(source)}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      selectedSource?.id === source.id
                        ? 'bg-green-600 bg-opacity-50 border-2 border-green-400'
                        : 'bg-white bg-opacity-10 hover:bg-opacity-20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-green-400 mr-3">{source.icon}</div>
                        <div>
                          <h3 className="font-semibold text-white">{source.name}</h3>
                          <div className="text-sm text-gray-200">
                            {source.capacity} MW | ${(source.cost / 1000000).toFixed(1)}M
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 text-sm">{source.efficiency}% efficiency</div>
                        <div className="text-orange-400 text-sm">{source.carbonEmission} kg CO2</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {selectedSource && (
                <div className="mt-6 p-4 bg-green-600 bg-opacity-20 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Add {selectedSource.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{selectedSource.description}</p>
                  <div className="flex items-center space-x-4">
                    <input
                      type="number"
                      value={sourceCount}
                      onChange={(e) => setSourceCount(Math.max(1, parseInt(e.target.value) || 1))}
                      placeholder="Quantity"
                      min={1}
                      max={Math.floor(budget / selectedSource.cost)}
                      className="w-20 px-3 py-2 bg-white bg-opacity-20 text-white rounded border border-green-400 focus:border-green-300 focus:outline-none"
                    />
                    <span className="text-gray-200">×</span>
                    <span className="text-white">${(selectedSource.cost / 1000000).toFixed(1)}M</span>
                    <span className="text-gray-200">=</span>
                    <span className="text-white">${((selectedSource.cost * sourceCount) / 1000000).toFixed(1)}M</span>
                    <button
                      onClick={addEnergySource}
                      disabled={budget < selectedSource.cost * sourceCount}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white rounded font-semibold transition-all"
                    >
                      Add to Grid
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Current Grid */}
            <div className="bg-black bg-opacity-30 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Current Grid Status</h2>

              {/* Energy Sources */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Power Generation</h3>
                {energySources.length === 0 ? (
                  <div className="text-center text-gray-500 py-8">
                    <Zap size={48} className="mx-auto mb-4 opacity-50" />
                    <p>No power sources installed. Add some to start generating electricity!</p>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-40 overflow-y-auto">
                    {energySources.map((source, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-white bg-opacity-10 rounded-lg p-3"
                      >
                        <div className="flex items-center">
                          <div className="text-green-400 mr-3">{source.icon}</div>
                          <div>
                            <h4 className="font-semibold text-white text-sm">{source.name}</h4>
                            <div className="text-xs text-gray-200">
                              {source.output.toFixed(0)} MW / {source.capacity} MW
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-green-400 text-sm">
                            {((source.output / source.capacity) * 100).toFixed(0)}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Energy Demand */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Energy Demand</h3>
                <div className="space-y-3">
                  {consumers.map((consumer) => (
                    <div
                      key={consumer.id}
                      className="flex items-center justify-between bg-white bg-opacity-10 rounded-lg p-3"
                    >
                      <div className="flex items-center">
                        <div className="text-blue-400 mr-3">{consumer.icon}</div>
                        <div>
                          <h4 className="font-semibold text-white text-sm">{consumer.name}</h4>
                          <div className="text-xs text-gray-200">Priority: {consumer.priority}/10</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-blue-400 text-sm">{consumer.currentDemand.toFixed(0)} MW</div>
                        <div
                          className={`text-xs ${
                            consumer.currentDemand > consumer.baseDemand ? 'text-yellow-400' : 'text-gray-200'
                          }`}
                        >
                          {consumer.currentDemand > consumer.baseDemand ? 'High' : 'Normal'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={triggerGridEvent}
                  disabled={energySources.length === 0}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white rounded-lg font-semibold transition-all"
                >
                  Continue Managing Grid
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render event phase
  if (gamePhase === 'event') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-purple-900 p-6 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">⚡</div>
          <h1 className="text-4xl font-bold text-white mb-6">Grid Event</h1>
          {currentEvent && (
            <div className="bg-black bg-opacity-30 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">{currentEvent.title}</h2>
              <p className="text-xl text-orange-100 mb-6">{currentEvent.description}</p>
              <div className="flex items-center justify-center text-lg text-white">
                <Activity className="mr-2" />
                Managing grid response...
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Render results phase
  if (gamePhase === 'results') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 p-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🏆</div>
          <h1 className="text-4xl font-bold text-white mb-8">Grid Management Results</h1>

          <div className="bg-black bg-opacity-30 rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-white">{gridStability.toFixed(0)}%</div>
                <div className="text-green-100">Grid Stability</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">{renewablePercentage.toFixed(0)}%</div>
                <div className="text-green-100">Renewable Energy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">${(budget / 1000000).toFixed(1)}M</div>
                <div className="text-green-100">Remaining Budget</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">{score.toFixed(0)}</div>
                <div className="text-green-100">Management Score</div>
              </div>
            </div>

            <div className="text-lg text-green-100 mb-6">
              {score > 800
                ? '🌟 Excellent grid management! Outstanding renewable energy integration!'
                : score > 600
                  ? '✅ Good job balancing supply, demand, and sustainability!'
                  : score > 400
                    ? '⚖️ Decent effort - focus more on renewables and stability!'
                    : '📊 Learning experience - renewable energy grid management is complex!'}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Final Grid Composition</h3>
                {energySources
                  .reduce((acc: GridComposition[], source) => {
                    const existing = acc.find((item: GridComposition) => item.type === source.type);
                    if (existing) {
                      existing.count += 1;
                      existing.capacity += source.capacity;
                    } else {
                      acc.push({ type: source.type, count: 1, capacity: source.capacity, icon: source.icon });
                    }
                    return acc;
                  }, [])
                  .map((sourceGroup: GridComposition, index: number) => (
                    <div key={index} className="flex justify-between items-center mb-2 text-green-100">
                      <span className="flex items-center">
                        <span className="mr-2">{sourceGroup.icon}</span>
                        {sourceGroup.count}× {sourceGroup.type}
                      </span>
                      <span>{sourceGroup.capacity} MW</span>
                    </div>
                  ))}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Environmental Impact</h3>
                <div className="space-y-2 text-green-100">
                  <div className="flex justify-between">
                    <span>CO2 Emissions:</span>
                    <span>{(carbonEmissions / 1000).toFixed(1)} t/hr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Renewable %:</span>
                    <span className="text-green-400">{renewablePercentage.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Clean Energy:</span>
                    <span>
                      {renewablePercentage > 70
                        ? '🌿 Excellent'
                        : renewablePercentage > 50
                          ? '🌱 Good'
                          : '⚠️ Needs improvement'}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Grid Events Handled</h3>
                {eventHistory.map((event, index) => (
                  <div key={index} className="text-sm text-green-100 mb-2">
                    ⚡ {event.title}
                  </div>
                ))}
                {eventHistory.length === 0 && <div className="text-sm text-green-100">No major events occurred</div>}
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={onRestart}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center"
            >
              <RotateCcw className="mr-2" size={20} />
              Manage New Grid
            </button>
            <button
              onClick={() => onComplete(true, score)}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center"
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

export default RenewableEnergyGridManagerGame;
