'use client';

import React from 'react';
import { City } from '@/types';

interface CityTooltipProps {
  city: City | null;
  mousePosition: { x: number; y: number };
  isVisible: boolean;
}

const CityTooltip: React.FC<CityTooltipProps> = ({ city, mousePosition, isVisible }) => {
  if (!city || !isVisible) return null;

  // Calculate tooltip position to avoid edge overflow
  const tooltipWidth = 280;
  const tooltipHeight = 120;
  const offset = 15;
  
  let left = mousePosition.x + offset;
  let top = mousePosition.y + offset;
  
  // Adjust if tooltip would go off-screen
  if (typeof window !== 'undefined') {
    if (left + tooltipWidth > window.innerWidth) {
      left = mousePosition.x - tooltipWidth - offset;
    }
    if (top + tooltipHeight > window.innerHeight) {
      top = mousePosition.y - tooltipHeight - offset;
    }
  }

  return (
    <div
      className="fixed z-[100] pointer-events-none select-none"
      style={{
        left: `${left}px`,
        top: `${top}px`,
        transform: 'translateZ(0)', // Force hardware acceleration
      }}
    >
      <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-xl p-4 max-w-xs pointer-events-none">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
            {city.name.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">
              {city.name}
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
              <div>
                <span className="text-gray-500">Dân số:</span>
                <div className="font-medium">{city.population.toLocaleString()}</div>
              </div>
              <div>
                <span className="text-gray-500">Diện tích:</span>
                <div className="font-medium">{city.area.toLocaleString()} km²</div>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Vùng: {city.region}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityTooltip;
