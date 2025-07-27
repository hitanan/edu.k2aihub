'use client';

import React, { useState } from 'react';
import { City } from '@/types';

interface VietnamMapEmbeddedProps {
  cities: City[];
  selectedCity: City | null;
  onCityClick: (city: City) => void;
  onCityHover: (city: City | null) => void;
  filteredCities: City[];
}

const VietnamMapEmbedded: React.FC<VietnamMapEmbeddedProps> = ({
  cities,
  selectedCity,
  onCityClick,
  onCityHover,
  filteredCities
}) => {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  // Create a lookup map for cities by slug
  const cityLookup = React.useMemo(() => {
    const lookup = new Map<string, City>();
    cities.forEach(city => {
      lookup.set(city.slug, city);
    });
    return lookup;
  }, [cities]);

  const isHighlighted = React.useCallback((city: City) => {
    return filteredCities.length > 0 ? filteredCities.some(c => c.id === city.id) : false;
  }, [filteredCities]);

  const getCityOpacity = React.useCallback((city: City) => {
    if (filteredCities.length === 0) return 1;
    return isHighlighted(city) ? 1 : 0.3;
  }, [filteredCities, isHighlighted]);

  const getPathFill = React.useCallback((citySlug: string) => {
    const city = cityLookup.get(citySlug);
    if (!city) return '#999999';
    
    if (selectedCity?.slug === citySlug) {
      return '#D97706'; // Yellow-brown for selected
    }
    
    if (hoveredCity === citySlug) {
      return '#FCD34D'; // Yellow for hover
    }
    
    if (filteredCities.length > 0 && !isHighlighted(city)) {
      return '#9CA3AF'; // Gray for non-highlighted when filtering
    }
    
    return '#666666'; // Default gray
  }, [cityLookup, selectedCity, hoveredCity, filteredCities, isHighlighted]);

  const getPathOpacity = React.useCallback((citySlug: string) => {
    const city = cityLookup.get(citySlug);
    if (!city) return 0.6;
    return getCityOpacity(city);
  }, [cityLookup, getCityOpacity]);

  const handlePathClick = (citySlug: string) => {
    const city = cityLookup.get(citySlug);
    if (city) {
      onCityClick(city);
    }
  };

  const handlePathMouseEnter = (citySlug: string) => {
    setHoveredCity(citySlug);
    const city = cityLookup.get(citySlug);
    if (city) {
      onCityHover(city);
    }
  };

  const handlePathMouseLeave = () => {
    setHoveredCity(null);
    onCityHover(null);
  };

  // Define path configurations for each city
  const cityPaths = [
    {
      slug: 'an-giang',
      d: "M 154.33008 674.2793 L 152.86914 674.56055 L 152.61914 675.60938 L 152.0293 675.51953 L 151.33984 675.90039 L 151.10938 676.16992 L 151.25977 676.66992 L 150.67969 676.94922 L 150.81055 677.5 L 150.01953 678.03906 L 150.41992 679.48047 L 151.53906 681.83008 L 151.42969 682.68945 L 151.75 683.08008 L 151.82031 683.67969 L 152.46094 684.03906 L 153.32031 685.11914 L 153.64062 686.96094 L 146.2793 691.33008 L 145.08984 692.75 L 143.16992 696.07031 L 141.66016 697.41992 L 136.99023 697.59961 L 137.2207 698.38086 L 136.98047 699.24023 L 137.98047 700.2793 L 139.58984 703.38086 L 139.4707 703.5 L 141.45117 706.10352 L 141.43945 706.09961 L 139.41992 703.46094 L 139.53906 703.33984 L 137.92969 700.24023 L 136.92969 699.19922 L 137.16992 698.33984 L 136.93945 697.56055 L 135.61914 697.58984 L 132.23047 696.58008 L 130.18945 696.4707 L 130.17969 697.0293 L 128.65039 697.13086 L 127.80078 696.83008 L 127.16016 697.05078 L 126.86914 698.34961 L 125.66016 698.96094 L 125.24023 700.83984 L 124.82031 701.26953 L 124.00977 701.35938 L 123.64062 702.40039 L 122.58008 703.44922 L 121.48047 702.21094 L 119.43945 702.63086 L 120.09961 703.7793 L 119.61914 704.66016 L 119.74023 705.17969 L 119.55078 705.61914 L 120.46094 705.46094 L 121.09961 704.76953 L 121.49023 704.76953 L 121.67969 705.06055 L 121.84961 705.25977 L 123.2207 706.68945 L 123.9707 707.83008 L 124.24023 708.5293 L 123.99023 708.88086 L 124.32031 709.60938 L 124.16016 710.24023 L 124.38086 710.21094 L 124.83008 709.50977 L 125.25977 709.60938 L 126.10938 710.36914 L 126.78906 711.41016 L 127.36914 713.50977 L 126.94922 714.0293 L 127.57031 714.66016 L 127.21094 715.03906 L 128.25977 716.34961 L 127.73047 717.13086 L 127.84961 717.28906 L 128.21094 717.34961 L 128.59961 717.00977 L 130.09961 717.58984 L 130.32031 717.42969 L 130.41992 716.68945 L 131.75977 714.93945 L 133.51953 713.39062 L 134.80078 712.85938 L 136.5 713.30078 L 138.01953 714.2207 L 139.2207 715.42969 L 140.60938 717.31055 L 141.44922 718.99023 L 142.5293 720.08008 L 143.42969 720.30078 L 146.41016 719.64062 L 148.16016 719.64062 L 152.55078 724.18945 L 152.91992 724.4707 L 154.10938 727.56055 L 153.92969 728.51953 L 153.64062 729.11914 L 153.34961 729.21094 L 152.74023 727.51953 L 151.86914 727.4707 L 150.64062 728.13086 L 149.16992 729.36914 L 146.26953 732.48047 L 144.7793 732.86914 L 143.50977 732.60938 L 143.06055 733 L 142.66016 733.90039 L 141.14062 739.89062 L 139.94922 749.38086 L 140.5 749.44922 L 142.38086 751.31055 L 144.19922 747.76953 L 145.7207 749.31055 L 146.60938 748.08984 L 147.38086 748.71094 L 148.18945 748.93945 L 148.69922 747.96094 L 162.16016 756.31055 L 163.10938 756.41992 L 163.86914 756.90039 L 164.18945 756.67969 L 164.59961 757.10938 L 165.14062 757.21094 L 164.69922 755.68945 L 164.46094 755.58984 L 163.84961 754.48047 L 163.66016 753.07031 L 163.81055 751.55078 L 164.14062 750.68945 L 164.40039 750.84961 L 164.65039 750.65039 L 164.94922 750.88086 L 164.94922 750.4707 L 165.34961 750.13086 L 165.16016 749.71094 L 165.66992 749.56055 L 165.28906 748.65039 L 165.35938 747.93945 L 164.51953 748.07031 L 164.76953 747.2207 L 163.88086 746.59961 L 163.41016 745.7793 L 163.41992 744.42969 L 163.71094 743.84961 L 164.31055 744.28906 L 164.59961 745.38086 L 165.63086 745.80078 L 166.2793 745.09961 L 166.33008 745.55078 L 166.61914 745.7793 L 166.5 746.15039 L 167.44922 746.16016 L 167.75977 746.40039 L 167.78906 746.06055 L 167.92969 745.92969 L 168.08008 744.96094 L 168.80078 744.40039 L 169.25977 744.57031 L 169.65039 743.4707 L 169.38086 743.2793 L 169.65039 743.03906 L 168.96094 742.58008 L 167.75 742.63086 L 167.89062 741.92969 L 167.0293 742.13086 L 166.83984 741.75 L 166.14062 741.75 L 166.08008 741.17969 L 165.58984 740.46094 L 167.07031 739.84961 L 167.86914 738.94922 L 168.83008 738.64062 L 168.98047 738.16992 L 169.48047 737.86914 L 169.93945 737.92969 L 170.08008 737.42969 L 169.67969 737.36914 L 169.57031 736.86914 L 170.0293 736.82031 L 169.81055 736.73047 L 169.86914 736.44922 L 170.15039 736.64062 L 170.01953 736.36914 L 170.30078 736.43945 L 170.2207 736.16992 L 170.41016 736.39062 L 170.48047 736.0293 L 170.66992 736.15039 L 170.64062 735.92969 L 171.2207 735.66016 L 170.91016 734.41992 L 172.19922 734.08008 L 175.58008 732.16992 L 175.34961 731.9707 L 176.53906 729.35938 L 176.16992 729.00977 L 167.44922 720.92969 L 167.05078 720.44922 L 166.84961 719.4707 L 164.99023 717.38086 L 164.66992 717.68945 L 164.2793 717.23047 L 163.98047 717.49023 L 160.25 714.19922 L 160.5 713.80078 L 160.35547 713.62305 L 160.35938 713.61914 L 160.53906 713.83984 L 161.75977 712.23047 L 162.09961 711.90039 L 162.41992 712.2793 L 164.19922 710.25977 L 164.4707 710.68945 L 164.80078 710.5 L 166.00977 712.50977 L 171.48047 710.65039 L 170.71094 708.90039 L 173.34961 708.49023 L 173.85938 707.81055 L 174.28906 707.73047 L 173.89062 707.24023 L 174.08984 706.64062 L 174.55078 706.18945 L 175.59961 705.75 L 175.59961 705.40039 L 176.0293 705.07031 L 175.76953 703.80078 L 176.06055 703.7793 L 176.16992 703.39062 L 176.56055 703.10938 L 177.24023 702.91992 L 176.92969 702.68945 L 177.0293 702.25 L 177.35938 702 L 178.35938 702.25 L 178.18945 699.7207 L 177.44922 697.99023 L 176.51953 696.83008 L 175.18945 696.07031 L 173.78906 696.34961 L 173.43945 696.67969 L 171.60938 695.76953 L 170.09961 695.90039 L 168.84961 694.91992 L 167.64062 694.5293 L 166.31055 691.31055 L 166.25977 689.40039 L 166.59961 687.13086 L 165.92969 686.82031 L 163.91992 687.16016 L 162.96094 686.81055 L 162.88086 686.33008 L 164.15039 685.4707 L 164.26953 685 L 164 684.73047 L 162.68945 684.64062 L 162.07031 684.28906 L 161.89062 683.68945 L 161.9707 682.64062 L 160.39062 682.46094 L 159.28906 680.01953 L 158.23047 678.90039 L 158.21094 676.88086 L 156.53906 676.2793 L 153.98047 676.48047 L 153.80078 676.25977 L 154.55078 675.17969 L 154.57031 674.49023 L 154.33008 674.2793 z"
    },
    // Add more city paths here as needed...
    {
      slug: 'ho-chi-minh',
      d: "M 223.10938 645.82031 L 222.58008 646.16016 L 222.03906 647.00977 L 222.21094 647.09961 L 221.88086 647.19922 L 221.91992 647.4707 L 221.41992 647.61914 L 221.53906 647.83008 L 220.80078 648.14062 L 220.66992 648.01953 L 220.36914 648.33984 L 219.94922 648.41016 L 219.84961 648.2207 L 219.67969 648.46094 L 219.76953 648.60938 L 219.42969 648.91992 L 219.59961 649.30078 L 219.13086 650.03906 L 219.14062 651.19922 L 218.59961 651.75977 L 218.67969 652.34961 L 218.50977 652.19922 L 218.41016 652.39062 L 218.44922 653.05078 L 217.91016 653.01953 L 217.46094 654.13086 L 218.41992 655.15039 L 217.91992 656.65039 L 218.15039 656.83984 L 218.10938 656.53906 L 218.36914 656.65039 L 218.18945 657.10938 L 218.33984 657.31055 L 218.51953 656.96094 L 218.81055 657.17969 L 218.93945 657.0293 L 218.71094 658.35938 L 219.42969 658.49023 L 218.75 659.13086 L 219.2793 659.66992 L 219.7793 659.33008 L 220.18945 660.16992 L 220.43945 660.18945 L 220.24023 660.7207 L 220.73047 661.0293 L 220.44922 662 L 220.66992 662.43945 L 221.31055 662.65039 L 221.55078 662.31055 L 221.84961 662.56055 L 221.83008 663.15039 L 222.9707 663.13086 L 223.2207 663.88086 L 222.83008 664.38086 L 223.75586 665.10547 L 223.74023 665.10938 z"
    }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg p-4 relative">
      <svg
        className="w-full h-full max-w-md max-h-full"
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
        viewBox="0 0 812 873"
        xmlns="http://www.w3.org/2000/svg"
      >
        {cityPaths.map((cityPath) => {
          const city = cityLookup.get(cityPath.slug);
          return (
            <path
              key={cityPath.slug}
              d={cityPath.d}
              fill={getPathFill(cityPath.slug)}
              fillOpacity={getPathOpacity(cityPath.slug)}
              stroke="#ffffff"
              strokeWidth="1"
              cursor="pointer"
              className="province-path transition-all duration-300 ease-out"
              onClick={() => handlePathClick(cityPath.slug)}
              onMouseEnter={() => handlePathMouseEnter(cityPath.slug)}
              onMouseLeave={handlePathMouseLeave}
              data-city-slug={cityPath.slug}
              data-city-name={city?.name || cityPath.slug}
            />
          );
        })}
      </svg>
      
      {/* Tooltip for hovered city */}
      {hoveredCity && (
        <div className="absolute top-4 left-4 bg-black text-white px-3 py-2 rounded-lg text-sm pointer-events-none z-20">
          {cityLookup.get(hoveredCity)?.name}
        </div>
      )}
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white bg-opacity-95 border border-gray-200 rounded-lg p-3 text-xs">
        <div className="flex items-center mb-2">
          <div className="w-4 h-4 bg-gray-400 rounded mr-2"></div>
          <span className="text-gray-700">Province</span>
        </div>
        <div className="flex items-center mb-2">
          <div className="w-4 h-4 bg-yellow-300 rounded mr-2"></div>
          <span className="text-gray-700">Hovered</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-yellow-700 rounded mr-2"></div>
          <span className="text-gray-700">Selected</span>
        </div>
      </div>
    </div>
  );
};

export default VietnamMapEmbedded;
