'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { City } from '@/types';

interface VietnamMapProps {
  cities: City[];
  selectedCity: City | null;
  onCityClick: (city: City) => void;
  onCityHover: (city: City | null) => void;
  filteredCities: City[];
}

const VietnamMapFixed: React.FC<VietnamMapProps> = ({
  cities,
  selectedCity,
  onCityClick,
  onCityHover,
  filteredCities
}) => {
  const [svgContent, setSvgContent] = useState<string>('');
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const svgRef = useRef<HTMLDivElement>(null);

  // Create a lookup map for cities by slug
  const cityLookup = React.useMemo(() => {
    const lookup = new Map<string, City>();
    cities.forEach(city => {
      lookup.set(city.slug, city);
    });
    return lookup;
  }, [cities]);

  // Load SVG content
  useEffect(() => {
    const loadSvg = async () => {
      try {
        const response = await fetch('/Vietnam.svg');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const svgText = await response.text();
        setSvgContent(svgText);
        console.log('SVG loaded successfully, length:', svgText.length);
      } catch (error) {
        console.error('Error loading SVG:', error);
      }
    };

    loadSvg();
  }, []);

  // Create filtered city set for performance
  const filteredCitySet = React.useMemo(() => {
    return new Set(filteredCities.map(city => city.slug));
  }, [filteredCities]);

  // Get fill color for a path
  const getPathFill = useCallback((citySlug: string) => {
    if (selectedCity?.slug === citySlug) {
      return '#D97706'; // Yellow-brown for selected
    }
    if (filteredCitySet.has(citySlug)) {
      return '#9CA3AF'; // Gray for filtered cities
    }
    return '#9CA3AF'; // Default gray
  }, [selectedCity, filteredCitySet]);

  // Get fill opacity for a path
  const getPathOpacity = useCallback((citySlug: string) => {
    if (selectedCity?.slug === citySlug) {
      return 0.9;
    }
    if (filteredCitySet.has(citySlug)) {
      return 0.7;
    }
    return 0.5;
  }, [selectedCity, filteredCitySet]);

  // Process SVG content using simple text processing
  const processedSvgContent = React.useMemo(() => {
    if (!svgContent) return '';
    
    try {
      console.log('Original SVG content length:', svgContent.length);
      
      // Find all path elements with inkscape:label using regex
      const pathPattern = /<path[^>]*inkscape:label="([^"]*)"[^>]*>/g;
      const pathMatches = Array.from(svgContent.matchAll(pathPattern));
      
      console.log(`Found ${pathMatches.length} path elements with inkscape:label`);
      
      let modifiedSvg = svgContent;
      const foundCities: string[] = [];
      
      // Process each path match
      pathMatches.forEach((match, index) => {
        const citySlug = match[1];
        const fullPathElement = match[0];
        
        console.log(`Processing path ${index + 1}: ${citySlug}`);
        foundCities.push(citySlug);
        
        const city = cityLookup.get(citySlug);
        
        if (city) {
          // Create new path element with proper styling and event attributes
          const newPathElement = fullPathElement
            .replace(/style="[^"]*"/g, '') // Remove existing style
            .replace(/fill="[^"]*"/g, '') // Remove existing fill
            .replace(/fill-opacity="[^"]*"/g, '') // Remove existing fill-opacity
            .replace(/>/, ` fill="${getPathFill(citySlug)}" fill-opacity="${getPathOpacity(citySlug)}" stroke="#ffffff" stroke-width="1" cursor="pointer" class="province-path transition-all duration-300 ease-out hover:stroke-width-2" data-city-slug="${citySlug}" data-city-name="${city.name}">`);
          
          modifiedSvg = modifiedSvg.replace(fullPathElement, newPathElement);
          console.log(`Styled path for ${citySlug} (${city.name})`);
        } else {
          console.warn(`City not found in lookup: ${citySlug}`);
          // Still add basic styling for unknown cities
          const newPathElement = fullPathElement
            .replace(/style="[^"]*"/g, '')
            .replace(/fill="[^"]*"/g, '')
            .replace(/fill-opacity="[^"]*"/g, '')
            .replace(/>/, ` fill="#999999" fill-opacity="0.5" stroke="#ffffff" stroke-width="1" data-city-slug="${citySlug}">`);
          
          modifiedSvg = modifiedSvg.replace(fullPathElement, newPathElement);
        }
      });
      
      console.log(`Processed ${foundCities.length} cities:`, foundCities);
      
      return modifiedSvg;
      
    } catch (error) {
      console.error('Error processing SVG:', error);
      return svgContent; // Fallback to original content
    }
  }, [svgContent, cityLookup, getPathFill, getPathOpacity]);

  // Mouse interaction handlers with useCallback to prevent re-renders
  const handlePathClick = useCallback((citySlug: string) => {
    const city = cityLookup.get(citySlug);
    if (city) {
      onCityClick(city);
    }
  }, [cityLookup, onCityClick]);

  const handlePathMouseEnter = useCallback((citySlug: string) => {
    setHoveredCity(citySlug);
    const city = cityLookup.get(citySlug);
    if (city) {
      onCityHover(city);
    }
  }, [cityLookup, onCityHover]);

  const handlePathMouseLeave = useCallback(() => {
    setHoveredCity(null);
    onCityHover(null);
  }, [onCityHover]);

  // Add proper event delegation for SVG interactions
  useEffect(() => {
    const svgContainer = svgRef.current;
    if (!svgContainer) return;

    const svgElement = svgContainer.querySelector('svg');
    if (!svgElement) return;

    // Handle click events
    const handleClick = (event: Event) => {
      const target = event.target as SVGElement;
      if (target.tagName === 'path') {
        const citySlug = target.getAttribute('data-city-slug');
        if (citySlug) {
          console.log('City clicked:', citySlug);
          handlePathClick(citySlug);
        }
      }
    };

    // Handle mouse enter events for hover
    const handleMouseEnter = (event: Event) => {
      const target = event.target as SVGElement;
      if (target.tagName === 'path') {
        const citySlug = target.getAttribute('data-city-slug');
        if (citySlug) {
          console.log('City hovered:', citySlug);
          handlePathMouseEnter(citySlug);
          
          // Apply hover color immediately
          target.setAttribute('fill', '#FCD34D'); // Yellow hover color
          target.setAttribute('fill-opacity', '0.8');
          target.setAttribute('stroke-width', '2');
        }
      }
    };

    // Handle mouse leave events to reset hover
    const handleMouseLeave = (event: Event) => {
      const target = event.target as SVGElement;
      if (target.tagName === 'path') {
        const citySlug = target.getAttribute('data-city-slug');
        if (citySlug) {
          handlePathMouseLeave();
          
          // Reset to normal colors
          target.setAttribute('fill', getPathFill(citySlug));
          target.setAttribute('fill-opacity', getPathOpacity(citySlug).toString());
          target.setAttribute('stroke-width', '1');
        }
      }
    };

    // Add event listeners
    svgElement.addEventListener('click', handleClick);
    svgElement.addEventListener('mouseenter', handleMouseEnter, { capture: true });
    svgElement.addEventListener('mouseleave', handleMouseLeave, { capture: true });

    console.log('Event listeners added to SVG element');

    // Cleanup event listeners
    return () => {
      svgElement.removeEventListener('click', handleClick);
      svgElement.removeEventListener('mouseenter', handleMouseEnter, { capture: true });
      svgElement.removeEventListener('mouseleave', handleMouseLeave, { capture: true });
    };
  }, [processedSvgContent, handlePathClick, handlePathMouseEnter, handlePathMouseLeave, getPathFill, getPathOpacity]);

  if (!svgContent) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg p-4">
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg p-4 relative">
      <div 
        ref={svgRef}
        className="w-full h-full max-w-md max-h-full relative"
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
        dangerouslySetInnerHTML={{ __html: processedSvgContent }}
      />
      
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

export default VietnamMapFixed;
