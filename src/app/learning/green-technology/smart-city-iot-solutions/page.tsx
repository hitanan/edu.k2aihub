import type { Metadata } from "next";
import Image from 'next/image';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';
import { greenTechLessons } from '@/data/green-technology';
import { getModuleNavigation, ModuleNavigation } from '@/utils/moduleNavigation';
import { defaultImage } from "@/utils/image";

export const metadata: Metadata = {
  title: createTitle("Smart City IoT Solutions - Giải Pháp IoT Thành Phố Thông Minh"),
  description: createDescription("Học cách xây dựng smart city với IoT: traffic management, environmental monitoring, smart grids và urban automation systems."),
  keywords: createKeywords(["smart city", "IoT", "urban technology", "traffic management", "environmental monitoring", "smart grid"]),
};

const lesson = greenTechLessons.find(l => l.id === 'smart-city-iot-solutions')!;
const imageUrl = defaultImage;

export default function SmartCityIoTSolutionsPage() {
  const navConfig = getModuleNavigation('green-technology', 'smart-city-iot-solutions')   ?? {} as ModuleNavigation;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
      {/* Navigation */}
      <div className="bg-black/20 sticky top-0 z-50 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <a href="/green-technology" className="text-green-400 hover:text-green-300 transition-colors">
                ← Green Technology
              </a>
              <span className="text-gray-500">/</span>
              <span className="text-white font-medium">{lesson.title}</span>
            </div>
            
            <div className="flex items-center space-x-4">
              {navConfig.previous && (
                <a 
                  href={navConfig.previous.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  ← {navConfig.previous.title}
                </a>
              )}
              {navConfig.next && (
                <a 
                  href={navConfig.next.href}
                  className="text-sm bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  {navConfig.next.title} →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">🏙️</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {lesson.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {lesson.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-green-500/20 text-green-200 px-4 py-2 rounded-full">
                ⏱️ {lesson.duration}
              </span>
              <span className="bg-emerald-500/20 text-emerald-200 px-4 py-2 rounded-full">
                🎯 {lesson.difficulty}
              </span>
              <span className="bg-teal-500/20 text-teal-200 px-4 py-2 rounded-full">
                🌱 {lesson.environmentalImpact}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Learning Objectives */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">🎯 Mục Tiêu Học Tập</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lesson.objectives.map((objective, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  {objective}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content Image */}
        <div className="mb-12">
          <Image 
            src={imageUrl} 
            alt="Smart City IoT Architecture Overview"
            width={800} 
            height={400}
            className="w-full h-64 md:h-80 object-cover rounded-2xl"
          />
        </div>

        {/* Prerequisites */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">📋 Kiến Thức Cần Thiết</h2>
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6">
            <ul className="space-y-2">
              {lesson.prerequisites.map((prereq, index) => (
                <li key={index} className="flex items-start text-yellow-200">
                  <span className="text-yellow-400 mr-3">•</span>
                  {prereq}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Core Content Sections */}
        <div className="space-y-12">
          {/* Section 1: IoT Architecture */}
          <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              🏗️ Smart City IoT Architecture
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-green-300 mb-4">4-Layer IoT Architecture</h3>
                <p className="text-gray-300 mb-4">
                  Smart city IoT systems được xây dựng theo kiến trúc 4 tầng để đảm bảo scalability, 
                  security và interoperability giữa các hệ thống khác nhau.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-blue-500/10 rounded-lg p-4">
                      <h4 className="text-blue-300 font-semibold mb-2">🔗 1. Perception Layer</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Environmental sensors (PM2.5, noise, temperature)</li>
                        <li>• Traffic cameras và vehicle detectors</li>
                        <li>• Smart meters (electricity, water, gas)</li>
                        <li>• Infrastructure monitoring sensors</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-500/10 rounded-lg p-4">
                      <h4 className="text-green-300 font-semibold mb-2">📡 2. Network Layer</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• LoRaWAN for long-range, low-power devices</li>
                        <li>• 5G/LTE for high-bandwidth applications</li>
                        <li>• WiFi 6 cho dense deployment areas</li>
                        <li>• Edge computing gateways</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-purple-500/10 rounded-lg p-4">
                      <h4 className="text-purple-300 font-semibold mb-2">🔄 3. Data Processing Layer</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Real-time stream processing (Apache Kafka)</li>
                        <li>• AI/ML models for pattern recognition</li>
                        <li>• Data fusion và cross-system correlation</li>
                        <li>• Predictive analytics for maintenance</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-500/10 rounded-lg p-4">
                      <h4 className="text-orange-300 font-semibold mb-2">🖥️ 4. Application Layer</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• City management dashboards</li>
                        <li>• Citizen mobile applications</li>
                        <li>• Emergency response systems</li>
                        <li>• Resource optimization algorithms</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-green-300 mb-4">IoT Communication Protocols</h3>
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-green-400 font-mono mb-2">Protocol Comparison:</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-gray-300">
                      <thead>
                        <tr className="border-b border-gray-600">
                          <th className="text-left py-2">Protocol</th>
                          <th className="text-left py-2">Range</th>
                          <th className="text-left py-2">Power</th>
                          <th className="text-left py-2">Use Case</th>
                        </tr>
                      </thead>
                      <tbody className="space-y-2">
                        <tr>
                          <td className="py-1 text-blue-300">LoRaWAN</td>
                          <td className="py-1">2-15km</td>
                          <td className="py-1 text-green-400">Ultra-low</td>
                          <td className="py-1">Environmental monitoring</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-blue-300">NB-IoT</td>
                          <td className="py-1">1-10km</td>
                          <td className="py-1 text-green-400">Low</td>
                          <td className="py-1">Smart meters, parking</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-blue-300">WiFi 6</td>
                          <td className="py-1">50-100m</td>
                          <td className="py-1 text-yellow-400">Medium</td>
                          <td className="py-1">High-density areas</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-blue-300">5G</td>
                          <td className="py-1">100m-5km</td>
                          <td className="py-1 text-red-400">High</td>
                          <td className="py-1">Real-time control systems</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Traffic Management */}
          <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              🚦 AI-Powered Traffic Management
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-green-300 mb-4">Intelligent Traffic Control System</h3>
                <p className="text-gray-300 mb-4">
                  AI traffic management systems sử dụng computer vision và machine learning để 
                  optimize traffic flow, reduce congestion và giảm emissions trong thành phố.
                </p>
                
                <div className="bg-gray-900/50 rounded-lg p-4 my-4">
                  <h4 className="text-green-400 font-mono mb-2">Traffic Optimization Algorithm:</h4>
                  <pre className="text-green-300 text-sm overflow-x-auto">
{`# Python code for adaptive traffic light control
import cv2
import tensorflow as tf
import numpy as np

class SmartTrafficController:
    def __init__(self):
        self.vehicle_detector = tf.keras.models.load_model('yolo_traffic.h5')
        self.traffic_density = {}
        self.optimization_matrix = np.zeros((4, 4))  # 4 directions
        
    def analyze_traffic_flow(self, camera_feeds):
        """Analyze real-time traffic from multiple cameras"""
        for direction, frame in camera_feeds.items():
            # Vehicle detection using YOLO
            vehicles = self.detect_vehicles(frame)
            
            # Calculate traffic density
            density = len(vehicles) / self.get_lane_area(direction)
            self.traffic_density[direction] = density
            
            # Predict wait time
            wait_time = self.calculate_wait_time(density)
            
        return self.optimize_light_timing()
    
    def optimize_light_timing(self):
        """AI-based traffic light optimization"""
        # Priority algorithm based on traffic density
        priorities = {}
        for direction, density in self.traffic_density.items():
            # Weight by environmental factors
            emergency_factor = self.check_emergency_vehicles(direction)
            pedestrian_factor = self.count_pedestrians(direction)
            
            priority_score = density * 0.6 + emergency_factor * 0.3 + \\
                           pedestrian_factor * 0.1
            priorities[direction] = priority_score
            
        # Optimize green light duration
        total_cycle = 120  # seconds
        optimized_timing = self.calculate_green_times(
            priorities, total_cycle
        )
        
        return optimized_timing
    
    def environmental_impact_calculation(self):
        """Calculate CO2 reduction from optimization"""
        baseline_emissions = 450  # kg CO2/hour without optimization
        optimized_emissions = baseline_emissions * 0.72  # 28% reduction
        
        daily_savings = (baseline_emissions - optimized_emissions) * 24
        return {
            'daily_co2_reduction': daily_savings,
            'fuel_savings_liters': daily_savings / 2.3,  # kg CO2 to liters
            'cost_savings_usd': daily_savings * 0.5
        }`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-green-300 mb-4">Smart Parking & Electric Vehicle Integration</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-500/10 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-3">🅿️ Smart Parking System</h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div className="flex justify-between">
                        <span>Occupancy detection:</span>
                        <span className="text-blue-300">95% accuracy</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Search time reduction:</span>
                        <span className="text-green-300">40%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Traffic reduction:</span>
                        <span className="text-green-300">25%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Revenue increase:</span>
                        <span className="text-yellow-300">18%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-500/10 rounded-lg p-4">
                    <h4 className="text-green-300 font-semibold mb-3">⚡ EV Charging Network</h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div className="flex justify-between">
                        <span>Charging stations:</span>
                        <span className="text-green-300">1,200+</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Smart scheduling:</span>
                        <span className="text-green-300">Peak shaving</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Grid integration:</span>
                        <span className="text-blue-300">V2G capable</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Green energy %:</span>
                        <span className="text-green-300">85%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Environmental Monitoring */}
          <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              🌍 Environmental Monitoring Network
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-green-300 mb-4">Air Quality Monitoring System</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive air quality network với real-time monitoring của PM2.5, PM10, 
                  NO2, O3 và các pollutants khác, tích hợp AI để predict air quality trends.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-red-500/10 rounded-lg p-4">
                    <h4 className="text-red-300 font-semibold mb-2">🔴 PM2.5 Sensors</h4>
                    <ul className="text-gray-300 text-xs space-y-1">
                      <li>• Laser scattering detection</li>
                      <li>• 1μg/m³ accuracy</li>
                      <li>• Real-time data (1-min intervals)</li>
                      <li>• Weather compensation</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-500/10 rounded-lg p-4">
                    <h4 className="text-yellow-300 font-semibold mb-2">🟡 Gas Sensors</h4>
                    <ul className="text-gray-300 text-xs space-y-1">
                      <li>• NO2, SO2, CO detection</li>
                      <li>• Electrochemical sensing</li>
                      <li>• ppb-level sensitivity</li>
                      <li>• Temperature compensation</li>
                    </ul>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-4">
                    <h4 className="text-green-300 font-semibold mb-2">🟢 Weather Integration</h4>
                    <ul className="text-gray-300 text-xs space-y-1">
                      <li>• Wind speed/direction</li>
                      <li>• Temperature/humidity</li>
                      <li>• Atmospheric pressure</li>
                      <li>• Precipitation detection</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-green-400 font-mono mb-2">Air Quality Prediction Model:</h4>
                  <pre className="text-green-300 text-sm overflow-x-auto">
{`# Machine Learning model for air quality prediction
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import StandardScaler
import joblib

class AirQualityPredictor:
    def __init__(self):
        self.model = RandomForestRegressor(n_estimators=100, random_state=42)
        self.scaler = StandardScaler()
        self.features = [
            'temperature', 'humidity', 'wind_speed', 'wind_direction',
            'pressure', 'hour', 'day_of_week', 'month',
            'traffic_volume', 'industrial_activity'
        ]
    
    def train_model(self, historical_data):
        """Train on 2+ years of historical data"""
        X = historical_data[self.features]
        y = historical_data['pm25_level']
        
        X_scaled = self.scaler.fit_transform(X)
        self.model.fit(X_scaled, y)
        
        # Save model for deployment
        joblib.dump(self.model, 'air_quality_model.pkl')
        joblib.dump(self.scaler, 'feature_scaler.pkl')
    
    def predict_next_24h(self, current_conditions, weather_forecast):
        """Predict air quality for next 24 hours"""
        predictions = []
        
        for hour in range(24):
            features = self.prepare_features(
                current_conditions, weather_forecast[hour], hour
            )
            features_scaled = self.scaler.transform([features])
            prediction = self.model.predict(features_scaled)[0]
            
            # Classify air quality level
            aqi_level = self.calculate_aqi(prediction)
            health_advice = self.get_health_advice(aqi_level)
            
            predictions.append({
                'hour': hour,
                'pm25_predicted': prediction,
                'aqi_level': aqi_level,
                'health_advice': health_advice
            })
            
        return predictions
    
    def calculate_aqi(self, pm25_value):
        """Convert PM2.5 to AQI standard"""
        if pm25_value <= 12: return "Good"
        elif pm25_value <= 35: return "Moderate"
        elif pm25_value <= 55: return "Unhealthy for Sensitive"
        elif pm25_value <= 150: return "Unhealthy"
        else: return "Hazardous"`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Smart Energy Grid */}
          <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              ⚡ Smart Energy Grid Integration
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-green-300 mb-4">Distributed Energy Management</h3>
                <p className="text-gray-300 mb-4">
                  Smart grid systems tích hợp renewable energy sources, energy storage, và 
                  demand response để optimize energy distribution và reduce carbon footprint.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-500/10 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-3">🏠 Distributed Generation</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">☀️</span>
                        Rooftop solar: 15,000+ installations
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">💨</span>
                        Small wind turbines: 500+ units
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">🔋</span>
                        Battery storage: 2.5 GWh capacity
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">⚡</span>
                        Grid-tied inverters: 99.2% efficiency
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-500/10 rounded-lg p-4">
                    <h4 className="text-green-300 font-semibold mb-3">📊 Demand Response Program</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">🏢</span>
                        Commercial participants: 800+ buildings
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">🏠</span>
                        Residential smart meters: 120,000+
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">💰</span>
                        Peak demand reduction: 15%
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">📱</span>
                        Mobile app engagement: 85%
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-gray-900/50 rounded-lg p-4">
                  <h4 className="text-green-400 font-mono mb-2">Smart Grid Control Algorithm:</h4>
                  <pre className="text-green-300 text-sm overflow-x-auto">
{`# Energy management system for smart city grid
import numpy as np
from scipy.optimize import minimize

class SmartGridController:
    def __init__(self):
        self.renewable_sources = {
            'solar': {'capacity': 50, 'efficiency': 0.22},
            'wind': {'capacity': 30, 'efficiency': 0.35},
            'hydro': {'capacity': 20, 'efficiency': 0.90}
        }
        self.energy_storage = {'capacity': 100, 'current': 60}
        self.demand_forecast = []
        
    def optimize_energy_dispatch(self, forecast_hours=24):
        """Optimize energy dispatch for next 24 hours"""
        
        def objective_function(x):
            # x = [solar_dispatch, wind_dispatch, storage_discharge]
            cost = 0
            emissions = 0
            
            for hour in range(forecast_hours):
                # Calculate cost ($/MWh)
                solar_cost = x[hour*3] * 25      # $25/MWh
                wind_cost = x[hour*3+1] * 30     # $30/MWh
                storage_cost = x[hour*3+2] * 45  # $45/MWh
                
                cost += solar_cost + wind_cost + storage_cost
                
                # Calculate emissions (kg CO2/MWh)
                emissions += x[hour*3] * 0 + x[hour*3+1] * 0 + \\
                           x[hour*3+2] * 50  # Storage has some emissions
                           
            return cost + emissions * 0.05  # Carbon pricing
            
        # Constraints: supply = demand, storage limits
        constraints = []
        for hour in range(forecast_hours):
            # Supply-demand balance
            constraints.append({
                'type': 'eq',
                'fun': lambda x, h=hour: (
                    x[h*3] + x[h*3+1] + x[h*3+2] - 
                    self.demand_forecast[h]
                )
            })
            
        # Optimization bounds
        bounds = []
        for hour in range(forecast_hours):
            bounds.extend([
                (0, 50),   # Solar max capacity
                (0, 30),   # Wind max capacity  
                (0, 40)    # Storage max discharge
            ])
            
        # Solve optimization
        result = minimize(
            objective_function, 
            x0=np.ones(forecast_hours*3) * 10,
            method='SLSQP',
            bounds=bounds,
            constraints=constraints
        )
        
        return self.format_dispatch_schedule(result.x)
    
    def calculate_grid_efficiency(self, dispatch_schedule):
        """Calculate overall grid efficiency metrics"""
        total_renewable = sum(dispatch_schedule['solar'] + 
                            dispatch_schedule['wind'])
        total_demand = sum(self.demand_forecast)
        
        renewable_percentage = (total_renewable / total_demand) * 100
        co2_savings = total_renewable * 0.5  # kg CO2 saved per MWh
        
        return {
            'renewable_percentage': renewable_percentage,
            'co2_savings_kg': co2_savings,
            'grid_efficiency': 96.5,  # Modern grid efficiency
            'transmission_losses': 3.5
        }`}
                  </pre>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Practical Exercises */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">🛠️ Bài Tập Thực Hành</h2>
          <div className="space-y-6">
            {lesson.exercises.map((exercise, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-green-300 mb-4">
                  Bài tập {index + 1}: {exercise.title}
                </h3>
                <p className="text-gray-300 mb-4">{exercise.description}</p>
                
                <div className="bg-blue-500/10 rounded-lg p-4 mb-4">
                  <h4 className="text-blue-300 font-medium mb-2">📝 Yêu cầu:</h4>
                  <ul className="text-gray-300 space-y-1">
                    {exercise.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <details className="bg-green-500/10 rounded-lg p-4">
                  <summary className="text-green-300 font-medium cursor-pointer mb-2">
                    💡 Gợi ý giải
                  </summary>
                  <div className="text-gray-300 mt-2">
                    {exercise.solution}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>

        {/* Real-world Applications */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">🌍 Ứng Dụng Thực Tế</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lesson.realWorldApplications.map((app, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🌍</div>
                <div className="text-purple-300 text-sm font-semibold">{app}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Showcase */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">🚀 Công Nghệ Tiên Tiến</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-lg font-bold text-white mb-3">Digital Twins</h3>
              <p className="text-gray-300 text-sm mb-3">
                Virtual replicas của city infrastructure để simulate và optimize operations.
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Real-time data synchronization</li>
                <li>• Predictive maintenance</li>
                <li>• Scenario planning</li>
                <li>• AI-driven insights</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-lg font-bold text-white mb-3">Edge Computing</h3>
              <p className="text-gray-300 text-sm mb-3">
                Distributed computing để reduce latency và improve real-time response.
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Sub-millisecond latency</li>
                <li>• Local data processing</li>
                <li>• Bandwidth optimization</li>
                <li>• Enhanced security</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-4">🔐</div>
              <h3 className="text-lg font-bold text-white mb-3">Blockchain IoT</h3>
              <p className="text-gray-300 text-sm mb-3">
                Secure, decentralized IoT data management với smart contracts.
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Immutable data records</li>
                <li>• Automated payments</li>
                <li>• Device identity management</li>
                <li>• Distributed governance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-8 border border-green-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">🎉 Hoàn thành bài học!</h2>
            <p className="text-gray-300 mb-6">
              Bạn đã học được cách xây dựng Smart City IoT solutions. 
              Hãy tiếp tục khám phá các chủ đề khác trong Green Technology module hoặc thực hành với Arduino IoT projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/green-technology"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                ← Quay lại Green Technology
              </a>
              <a 
                href="/arduino"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Thực hành Arduino IoT →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
