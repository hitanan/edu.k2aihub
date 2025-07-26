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

  // Adjusted coordinates based on Vietnam's actual shape
  const cityCoordinates: { [key: string]: { x: number; y: number } } = {
    '01': { x: 260, y: 120 }, // Hà Nội
    '04': { x: 300, y: 50 },  // Cao Bằng
    '08': { x: 230, y: 80 },  // Tuyên Quang
    '11': { x: 150, y: 90 },  // Điện Biên
    '12': { x: 120, y: 70 },  // Lai Châu
    '14': { x: 180, y: 110 }, // Sơn La
    '15': { x: 200, y: 60 },  // Lào Cai
    '19': { x: 270, y: 100 }, // Thái Nguyên
    '20': { x: 320, y: 80 },  // Lạng Sơn
    '22': { x: 350, y: 110 }, // Quảng Ninh
    '24': { x: 290, y: 130 }, // Bắc Ninh
    '25': { x: 240, y: 120 }, // Phú Thọ
    '31': { x: 330, y: 140 }, // Hải Phòng
    '33': { x: 280, y: 140 }, // Hưng Yên
    '37': { x: 250, y: 160 }, // Ninh Bình
    '38': { x: 220, y: 190 }, // Thanh Hóa
    '40': { x: 200, y: 230 }, // Nghệ An
    '42': { x: 240, y: 260 }, // Hà Tĩnh
    '44': { x: 260, y: 290 }, // Quảng Trị
    '46': { x: 280, y: 320 }, // Huế
    '48': { x: 300, y: 350 }, // Đà Nẵng
    '51': { x: 320, y: 380 }, // Quảng Ngãi
    '52': { x: 280, y: 420 }, // Gia Lai
    '56': { x: 340, y: 440 }, // Khánh Hòa
    '66': { x: 300, y: 480 }, // Đắk Lắk
    '68': { x: 320, y: 520 }, // Lâm Đồng
    '75': { x: 340, y: 560 }, // Đồng Nai
    '79': { x: 320, y: 590 }, // TP.HCM
    '80': { x: 280, y: 580 }, // Tây Ninh
    '82': { x: 260, y: 620 }, // Đồng Tháp
    '86': { x: 290, y: 640 }, // Vĩnh Long
    '91': { x: 240, y: 660 }, // An Giang
    '92': { x: 270, y: 680 }, // Cần Thơ
    '96': { x: 280, y: 720 }, // Cà Mau
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-blue-50 rounded-lg p-4">
      <svg
        viewBox="0 0 400 800"
        className="w-full h-full max-w-md max-h-full"
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
      >
        {/* Vietnam Country Shape - Simplified */}
        <path
          d="M200,50 Q220,40 250,50 L280,60 Q320,55 340,75 L360,90 Q380,110 370,140 L375,170 Q380,200 365,230 L370,260 Q375,290 360,320 L365,350 Q370,380 355,410 L360,440 Q365,470 350,500 L355,530 Q360,560 345,590 L350,620 Q355,650 340,680 L345,710 Q350,740 335,760 L320,770 Q300,775 280,770 L260,765 Q240,760 220,750 L200,740 Q180,730 170,710 L165,680 Q160,650 175,620 L170,590 Q165,560 180,530 L175,500 Q170,470 185,440 L180,410 Q175,380 190,350 L185,320 Q180,290 195,260 L190,230 Q185,200 200,170 L195,140 Q190,110 205,80 L200,50 Z"
          fill="#e8f4fd"
          stroke="#3b82f6"
          strokeWidth="2"
          opacity="0.3"
        />

        {/* Cities */}
        {cities.map((city) => {
          const coords = cityCoordinates[city.code] || city.coordinates;
          return (
            <g key={city.id}>
              <circle
                cx={coords.x}
                cy={coords.y}
                r={selectedCity?.id === city.id ? 8 : 6}
                fill={city.color}
                stroke={getCityStroke(city)}
                strokeWidth={getCityStrokeWidth(city)}
                opacity={getCityOpacity(city)}
                className="cursor-pointer transition-all duration-200 hover:r-8"
                onMouseEnter={() => onCityHover(city)}
                onMouseLeave={() => onCityHover(null)}
                onClick={() => onCityClick(city)}
                style={{
                  filter: selectedCity?.id === city.id ? 'brightness(1.2)' : 'none',
                }}
              >
                <title>{city.name}</title>
              </circle>

              {/* City labels for major cities */}
              {(city.name.includes('Thành phố') || selectedCity?.id === city.id) && (
                <text
                  x={coords.x}
                  y={coords.y - 12}
                  textAnchor="middle"
                  className="text-xs font-medium fill-gray-700 pointer-events-none"
                  opacity={getCityOpacity(city)}
                >
                  {city.name.replace('Thành phố ', '')}
                </text>
              )}
            </g>
          );
        })}

        {/* Region Labels */}
        <text x="200" y="30" textAnchor="middle" className="text-sm font-bold fill-gray-600 opacity-60">
          CHINA
        </text>
        <text x="380" y="200" textAnchor="middle" className="text-sm font-bold fill-blue-600 opacity-60">
          EAST SEA
        </text>
        <text x="30" y="400" textAnchor="middle" className="text-sm font-bold fill-gray-600 opacity-60" transform="rotate(-90, 30, 400)">
          LAOS
        </text>
        <text x="150" y="700" textAnchor="middle" className="text-sm font-bold fill-gray-600 opacity-60">
          CAMBODIA
        </text>

        {/* Legend */}
        <g transform="translate(20, 750)">
          <rect x="0" y="0" width="120" height="40" fill="white" fillOpacity="0.9" stroke="#e5e7eb" rx="4" />
          <circle cx="10" cy="15" r="4" fill="#3b82f6" />
          <text x="20" y="19" className="text-xs fill-gray-700">Provincial Unit</text>
          <circle cx="10" cy="30" r="4" fill="#ef4444" stroke="#000" strokeWidth="2" />
          <text x="20" y="34" className="text-xs fill-gray-700">Selected</text>
        </g>
      </svg>
    </div>
  );
};

export default VietnamMap;
