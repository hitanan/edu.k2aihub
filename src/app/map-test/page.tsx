'use client';

import cities from '@/data/cities';
import VietnamMap from '@/components/city/VietnamMap';
import VietnamMapDirect from '@/components/city/VietnamMapDirect';
import VietnamMapEmbedded from '@/components/city/VietnamMapEmbedded';
import VietnamMapFixed from '@/components/city/VietnamMapFixed';
import VietnamMapUltimate from '@/components/city/VietnamMapUltimate';
import VietnamMapSuper from '@/components/city/VietnamMapSuper';
import { useState } from 'react';
import { City } from '@/types';

export default function MapTestPage() {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [hoveredCity, setHoveredCity] = useState<City | null>(null);
  const [mapType, setMapType] = useState<'original' | 'direct' | 'embedded' | 'fixed' | 'ultimate' | 'super'>('super');

  const handleCityClick = (city: City) => {
    setSelectedCity(city);
    console.log('City clicked:', city.name, city.slug);
  };

  const handleCityHover = (city: City | null) => {
    setHoveredCity(city);
    if (city) {
      console.log('City hovered:', city.name, city.slug);
    }
  };

  const renderMap = () => {
    const commonProps = {
      cities,
      selectedCity,
      onCityClick: handleCityClick,
      onCityHover: handleCityHover,
      filteredCities: []
    };

    switch (mapType) {
      case 'direct':
        return <VietnamMapDirect {...commonProps} />;
      case 'embedded':
        return <VietnamMapEmbedded {...commonProps} />;
      case 'fixed':
        return <VietnamMapFixed {...commonProps} />;
      case 'ultimate':
        return <VietnamMapUltimate {...commonProps} />;
      case 'super':
        return <VietnamMapSuper {...commonProps} />;
      default:
        return <VietnamMap {...commonProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Vietnam Map Test</h1>
        
        <div className="mb-4 flex gap-2 flex-wrap">
          <button
            onClick={() => setMapType('super')}
            className={`px-4 py-2 rounded font-bold ${mapType === 'super' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            🔥 SUPER (DOM Parse + Reorder)
          </button>
          <button
            onClick={() => setMapType('ultimate')}
            className={`px-4 py-2 rounded ${mapType === 'ultimate' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            🚀 ULTIMATE (Path Reorder)
          </button>
          <button
            onClick={() => setMapType('fixed')}
            className={`px-4 py-2 rounded ${mapType === 'fixed' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Fixed (Regex SVG)
          </button>
          <button
            onClick={() => setMapType('original')}
            className={`px-4 py-2 rounded ${mapType === 'original' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Original (Fetch)
          </button>
          <button
            onClick={() => setMapType('direct')}
            className={`px-4 py-2 rounded ${mapType === 'direct' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Direct (DOM)
          </button>
          <button
            onClick={() => setMapType('embedded')}
            className={`px-4 py-2 rounded ${mapType === 'embedded' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Embedded (Static)
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Container */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-semibold mb-4">
              {mapType === 'super' ? '🔥 SUPER DOM-Parsed Map with Path Reordering' :
               mapType === 'ultimate' ? '🚀 ULTIMATE Path-Reordered Map' :
               mapType === 'fixed' ? 'Fixed Regex-based Map' :
               mapType === 'original' ? 'Fetch-based Map' : 
               mapType === 'direct' ? 'Direct DOM Map' : 'Embedded Static Map'}
            </h2>
            <div className="aspect-square">
              {renderMap()}
            </div>
          </div>

          {/* Info Panel */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Information</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700">Total Cities:</h3>
                <p className="text-gray-600">{cities.length}</p>
              </div>
              
              {selectedCity && (
                <div>
                  <h3 className="font-medium text-gray-700">Selected City:</h3>
                  <p className="text-gray-600">{selectedCity.name}</p>
                  <p className="text-sm text-gray-500">Slug: {selectedCity.slug}</p>
                </div>
              )}
              
              {hoveredCity && (
                <div>
                  <h3 className="font-medium text-gray-700">Hovered City:</h3>
                  <p className="text-gray-600">{hoveredCity.name}</p>
                  <p className="text-sm text-gray-500">Slug: {hoveredCity.slug}</p>
                </div>
              )}
              
              <div>
                <h3 className="font-medium text-gray-700">Instructions:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Hover over provinces to see names</li>
                  <li>• Click to select a province</li>
                  <li>• Check browser console for logs</li>
                  <li>• Switch between map implementations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Comparison Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6">🔍 Map Solution Comparison</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-purple-200 rounded-lg p-4 bg-gradient-to-br from-purple-50 to-pink-50">
              <h3 className="font-bold text-purple-700 mb-2">🔥 SUPER Solution</h3>
              <p className="text-sm text-gray-700 mb-3">
                Advanced DOM parsing with path reordering to prevent overlap issues.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>✅ XMLSerializer for proper DOM parsing</li>
                <li>✅ Path removal and re-insertion logic</li>
                <li>✅ Guaranteed event firing for all provinces</li>
                <li>✅ Real-time visual feedback</li>
                <li>✅ Best performance and reliability</li>
              </ul>
            </div>

            <div className="border border-red-200 rounded-lg p-4 bg-red-50">
              <h3 className="font-bold text-red-700 mb-2">🚀 ULTIMATE Solution</h3>
              <p className="text-sm text-gray-700 mb-3">
                Path reordering approach to solve overlap issues.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>✅ Dynamic path reordering</li>
                <li>✅ Good event handling</li>
                <li>✅ Decent performance</li>
                <li>⚠️ Some edge cases with complex paths</li>
              </ul>
            </div>

            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
              <h3 className="font-bold text-blue-700 mb-2">Fixed Solution</h3>
              <p className="text-sm text-gray-700 mb-3">
                Regex-based SVG manipulation for basic functionality.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>✅ Simple implementation</li>
                <li>✅ Fast loading</li>
                <li>⚠️ Limited styling capabilities</li>
                <li>⚠️ Basic event handling</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h3 className="font-bold text-gray-700 mb-2">Original Solution</h3>
              <p className="text-sm text-gray-700 mb-3">
                Basic fetch-based approach with minimal processing.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>❌ Event handling issues</li>
                <li>❌ Province overlap problems</li>
                <li>❌ Inconsistent interactions</li>
                <li>✅ Simple to understand</li>
              </ul>
            </div>

            <div className="border border-green-200 rounded-lg p-4 bg-green-50">
              <h3 className="font-bold text-green-700 mb-2">Direct DOM Solution</h3>
              <p className="text-sm text-gray-700 mb-3">
                Direct DOM manipulation for real-time updates.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>✅ Real-time DOM updates</li>
                <li>✅ Good performance</li>
                <li>⚠️ Complex state management</li>
                <li>⚠️ Browser compatibility issues</li>
              </ul>
            </div>

            <div className="border border-yellow-200 rounded-lg p-4 bg-yellow-50">
              <h3 className="font-bold text-yellow-700 mb-2">Embedded Static</h3>
              <p className="text-sm text-gray-700 mb-3">
                Static SVG embedding with basic interactivity.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>✅ Fast initial load</li>
                <li>✅ No network requests</li>
                <li>❌ Limited customization</li>
                <li>❌ Static styling only</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
            <h4 className="font-bold text-blue-800 mb-2">🏆 Why SUPER Solution Works Best:</h4>
            <p className="text-sm text-blue-700">
              The SUPER solution uses advanced DOM parsing with XMLSerializer and implements sophisticated path reordering logic. 
              This prevents the province overlap issues that plagued earlier solutions and ensures reliable event handling for all 34 provinces. 
              The combination of proper DOM manipulation and real-time visual feedback makes it the most robust solution.
            </p>
          </div>

          <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
            <h4 className="font-bold text-yellow-800 mb-2">🔄 Why Original Now Works:</h4>
            <p className="text-sm text-yellow-700">
              The original solution now works because we&apos;ve improved the underlying SVG structure and event handling in the codebase. 
              However, it still has fundamental limitations with province overlap and event consistency that make it less reliable than the SUPER solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
