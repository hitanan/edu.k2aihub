'use client';

import React from 'react';
import { City } from '@/types';

interface VietnamMapUltimateProps {
  cities: City[];
  selectedCity: City | null;
  onCityClick: (city: City) => void;
  onCityHover: (city: City | null) => void;
}

const VietnamMapUltimate: React.FC<VietnamMapUltimateProps> = ({
  cities,
  selectedCity,
  onCityClick,
  onCityHover,
}) => {
  const [svgContent, setSvgContent] = React.useState<string>('');
  const [processedSvgContent, setProcessedSvgContent] = React.useState<string>('');
  const [hoveredCity, setHoveredCity] = React.useState<string | null>(null);
  const svgRef = React.useRef<HTMLDivElement>(null);

  // Create city lookup map
  const cityLookup = React.useMemo(() => {
    const map = new Map<string, City>();
    cities.forEach(city => {
      map.set(city.slug, city);
    });
    return map;
  }, [cities]);

  // Load SVG content
  React.useEffect(() => {
    const loadSvg = async () => {
      try {
        const response = await fetch('/Vietnam.svg');
        const content = await response.text();
        setSvgContent(content);
        console.log('SVG loaded successfully, length:', content.length);
      } catch (error) {
        console.error('Failed to load SVG:', error);
      }
    };

    loadSvg();
  }, []);

  // Get path color based on state
  const getPathColor = React.useCallback((citySlug: string): string => {
    if (selectedCity?.slug === citySlug) {
      return '#D97706'; // Yellow-brown for selected
    }
    if (hoveredCity === citySlug) {
      return '#FCD34D'; // Yellow for hover
    }
    // Use different colors for different regions to ensure visibility
    const regionColors = [
      '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', 
      '#EF4444', '#8B5A2B', '#6B7280', '#EC4899'
    ];
    const colorIndex = citySlug.charCodeAt(0) % regionColors.length;
    return regionColors[colorIndex];
  }, [selectedCity, hoveredCity]);

  // Process SVG content with path reordering
  React.useEffect(() => {
    if (!svgContent) return;

    try {
      console.log('=== ULTIMATE SVG PROCESSING ===');
      
      // Extract all path elements with inkscape:label (use non-greedy matching)
      const pathPattern = /<path[^>]*inkscape:label="([^"]*)"[^>]*>/g;
      const pathMatches = Array.from(svgContent.matchAll(pathPattern));
      
      console.log(`Found ${pathMatches.length} complete path elements`);
      
      if (pathMatches.length === 0) {
        // Try self-closing path pattern
        const selfClosingPattern = /<path[^>]*inkscape:label="([^"]*)"[^>]*\/>/g;
        const selfClosingMatches = Array.from(svgContent.matchAll(selfClosingPattern));
        console.log(`Found ${selfClosingMatches.length} self-closing path elements`);
      }

      // Remove all original path elements
      let cleanedSvg = svgContent;
      pathMatches.forEach(match => {
        cleanedSvg = cleanedSvg.replace(match[0], '');
      });

      // Process and reorder paths by area size (larger areas first to prevent overlap)
      const processedPaths: Array<{citySlug: string, element: string, area: number}> = [];

      pathMatches.forEach((match, index) => {
        const citySlug = match[1];
        const fullPathElement = match[0];
        
        console.log(`Processing path ${index + 1}: ${citySlug}`);
        
        const city = cityLookup.get(citySlug);
        if (!city) {
          console.warn(`City not found: ${citySlug}`);
          return;
        }

        // Calculate approximate area based on path data length (rough heuristic)
        const pathDataMatch = fullPathElement.match(/d="([^"]*)"/);
        const pathData = pathDataMatch ? pathDataMatch[1] : '';
        const approximateArea = pathData.length; // Longer path data = more complex shape = likely larger

        // Create new path with proper styling and guaranteed visibility
        const newPathElement = fullPathElement
          .replace(/style="[^"]*"/g, '') // Remove existing styles
          .replace(/fill="[^"]*"/g, '') 
          .replace(/fill-opacity="[^"]*"/g, '')
          .replace(/stroke="[^"]*"/g, '')
          .replace(/stroke-width="[^"]*"/g, '')
          .replace(/opacity="[^"]*"/g, '')
          .replace(/<path([^>]*)/g, `<path$1 
            fill="${getPathColor(citySlug)}" 
            fill-opacity="1" 
            stroke="#ffffff" 
            stroke-width="0.5" 
            opacity="1"
            cursor="pointer" 
            class="province-path" 
            data-city-slug="${citySlug}" 
            data-city-name="${city.name}"
            style="pointer-events: all; visibility: visible;"`)
          .replace(/\s+/g, ' '); // Clean up whitespace

        processedPaths.push({
          citySlug,
          element: newPathElement,
          area: approximateArea
        });

        console.log(`Processed ${citySlug} (${city.name}) - area: ${approximateArea}`);
      });

      // Sort paths by area (largest first) to prevent smaller provinces from being hidden
      processedPaths.sort((a, b) => b.area - a.area);
      console.log('Path rendering order (largest to smallest):', processedPaths.map(p => p.citySlug));

      // Insert reordered paths back into SVG
      const pathsXml = processedPaths.map(p => p.element).join('\n');
      const finalSvg = cleanedSvg.replace('</svg>', `${pathsXml}\n</svg>`);

      // Ensure SVG has proper styling for visibility
      const styledSvg = finalSvg
        .replace('<svg', '<svg style="width: 100%; height: 100%; background: transparent;"')
        .replace(/viewBox="[^"]*"/g, '') // Remove viewBox to prevent scaling issues
        .replace('<svg', '<svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet"');

      setProcessedSvgContent(styledSvg);
      console.log(`Final SVG processed with ${processedPaths.length} reordered paths`);

    } catch (error) {
      console.error('SVG processing error:', error);
      setProcessedSvgContent(svgContent); // Fallback to original
    }
  }, [svgContent, cityLookup, getPathColor]);

  // Event handling with direct SVG manipulation
  React.useEffect(() => {
    if (!processedSvgContent || !svgRef.current) return;

    const svgContainer = svgRef.current;
    const svgElement = svgContainer.querySelector('svg');
    if (!svgElement) return;

    console.log('Setting up event listeners on SVG');

    // Click handler
    const handleClick = (event: MouseEvent) => {
      const target = event.target as SVGElement;
      console.log('Click on:', target.tagName, target.getAttribute('data-city-slug'));
      
      if (target.tagName === 'path' && target.hasAttribute('data-city-slug')) {
        const citySlug = target.getAttribute('data-city-slug');
        const city = cityLookup.get(citySlug!);
        if (city) {
          console.log('City clicked:', city.name);
          onCityClick(city);
        }
      }
    };

    // Hover handlers
    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as SVGElement;
      if (target.tagName === 'path' && target.hasAttribute('data-city-slug')) {
        const citySlug = target.getAttribute('data-city-slug')!;
        const city = cityLookup.get(citySlug);
        if (city) {
          console.log('City hovered:', city.name);
          setHoveredCity(citySlug);
          onCityHover(city);
          
          // Apply hover styling
          target.setAttribute('fill', '#FCD34D');
          target.setAttribute('stroke-width', '2');
        }
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      const target = event.target as SVGElement;
      if (target.tagName === 'path' && target.hasAttribute('data-city-slug')) {
        const citySlug = target.getAttribute('data-city-slug')!;
        const city = cityLookup.get(citySlug);
        if (city) {
          setHoveredCity(null);
          onCityHover(null);
          
          // Reset styling
          target.setAttribute('fill', getPathColor(citySlug));
          target.setAttribute('stroke-width', '0.5');
        }
      }
    };

    // Add event listeners
    svgElement.addEventListener('click', handleClick);
    svgElement.addEventListener('mouseover', handleMouseOver);
    svgElement.addEventListener('mouseout', handleMouseOut);

    console.log('Event listeners attached successfully');

    return () => {
      svgElement.removeEventListener('click', handleClick);
      svgElement.removeEventListener('mouseover', handleMouseOver);
      svgElement.removeEventListener('mouseout', handleMouseOut);
    };
  }, [processedSvgContent, cityLookup, onCityClick, onCityHover, getPathColor]);

  if (!processedSvgContent) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg">
        <div className="text-gray-500">Loading ultimate map...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative bg-gray-50 rounded-lg p-4">
      <div 
        ref={svgRef}
        className="w-full h-full"
        dangerouslySetInnerHTML={{ __html: processedSvgContent }}
      />
      
      {/* Debug info */}
      <div className="absolute top-2 right-2 bg-white/90 p-2 rounded text-xs">
        <div>Hover: {hoveredCity || 'None'}</div>
        <div>Selected: {selectedCity?.name || 'None'}</div>
      </div>
    </div>
  );
};

export default VietnamMapUltimate;
