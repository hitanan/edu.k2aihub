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
  const [mapType, setMapType] = useState<'original' | 'direct' | 'embedded' | 'fixed' | 'ultimate' | 'super'>('direct');

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
      </div>
    </div>
  );
}
