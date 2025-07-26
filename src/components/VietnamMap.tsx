'use client';

import React from 'react';
import { City } from '@/types';

interface VietnamMapProps {
  cities: City[];
  selectedCity: City | null;
  onCityClick: (city: City) => void;
  onCityHover: (city: City | null) => void;
  filteredCities: City[];
}

const VietnamMap: React.FC<VietnamMapProps> = ({
  cities,
  selectedCity,
  onCityClick,
  onCityHover,
  filteredCities
}) => {
  const isHighlighted = (city: City) => {
    return filteredCities.length > 0 ? filteredCities.some(c => c.id === city.id) : false;
  };

  const getCityOpacity = (city: City) => {
    if (filteredCities.length === 0) return 1;
    return isHighlighted(city) ? 1 : 0.3;
  };

  const getCityStroke = (city: City) => {
    if (selectedCity?.id === city.id) return '#000';
    if (isHighlighted(city)) return '#ff6b35';
    return '#fff';
  };

  const getCityStrokeWidth = (city: City) => {
    if (selectedCity?.id === city.id) return 3;
    if (isHighlighted(city)) return 2;
    return 1;
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg p-4 relative">
      {/* Background Map Image */}
      <div 
        className="absolute inset-4 rounded-lg bg-contain bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: 'url(/ban-do-viet-nam-34-tinh.jpg)',
        }}
      />
      
      {/* Interactive Overlay */}
      <svg
        viewBox="0 0 400 700"
        className="w-full h-full max-w-md max-h-full relative z-10"
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
      >
        {/* Cities */}
        {cities.map((city) => {
          const coords = city.coordinates;
          const isSelected = selectedCity?.id === city.id;
          
          return (
            <g key={city.id}>
              <circle
                cx={coords.x}
                cy={coords.y}
                r={isSelected ? 10 : 7}
                fill={city.color}
                stroke={getCityStroke(city)}
                strokeWidth={getCityStrokeWidth(city)}
                opacity={getCityOpacity(city)}
                className="cursor-pointer transition-all duration-150 ease-out"
                style={{
                  filter: isSelected ? 'brightness(1.2) drop-shadow(0 0 8px rgba(0,0,0,0.3))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                  transformOrigin: `${coords.x}px ${coords.y}px`,
                  pointerEvents: 'none'
                }}
              >
                <title>{city.name}</title>
              </circle>

              {/* Invisible larger circle for easier hover/click */}
              <circle
                cx={coords.x}
                cy={coords.y}
                r={15}
                fill="transparent"
                className="cursor-pointer"
                style={{ pointerEvents: 'all' }}
                onMouseEnter={() => onCityHover(city)}
                onMouseLeave={() => onCityHover(null)}
                onClick={() => onCityClick(city)}
              />

              {/* City labels for major cities */}
              {(city.name.includes('Thành phố') || isSelected) && (
                <text
                  x={coords.x}
                  y={coords.y - 15}
                  textAnchor="middle"
                  className="text-xs font-bold fill-white pointer-events-none select-none"
                  opacity={getCityOpacity(city)}
                  style={{
                    textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                    filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.8))'
                  }}
                >
                  {city.name.replace('Thành phố ', '')}
                </text>
              )}
            </g>
          );
        })}

        {/* Legend */}
        <g transform="translate(20, 700)">
          <rect x="0" y="0" width="140" height="50" fill="white" fillOpacity="0.95" stroke="#e5e7eb" rx="6" />
          <circle cx="15" cy="20" r="5" fill="#3b82f6" stroke="white" strokeWidth="1" />
          <text x="30" y="25" className="text-xs fill-gray-700 font-medium">Provincial Unit</text>
          <circle cx="15" cy="35" r="5" fill="#ef4444" stroke="#000" strokeWidth="2" />
          <text x="30" y="40" className="text-xs fill-gray-700 font-medium">Selected City</text>
        </g>
      </svg>
    </div>
  );
};

export default VietnamMap;
