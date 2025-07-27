'use client';

import React from 'react';
import { City } from '@/types';

interface VietnamMapSuperProps {
  cities: City[];
  selectedCity: City | null;
  onCityClick: (city: City) => void;
  onCityHover: (city: City | null) => void;
}

const VietnamMapSuper: React.FC<VietnamMapSuperProps> = ({
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
        console.log('=== SUPER SVG LOADED ===');
        console.log('Original SVG length:', content.length);
      } catch (error) {
        console.error('Failed to load SVG:', error);
      }
    };

    loadSvg();
  }, []);

  // Revolutionary approach: Parse DOM and manipulate individual paths
  React.useEffect(() => {
    if (!svgContent) return;

    try {
      console.log('=== SUPER SVG PROCESSING - DOM APPROACH ===');
      
      // Parse SVG using DOMParser for proper DOM manipulation
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
      const svgElement = svgDoc.documentElement;

      console.log('Parsed SVG element:', svgElement.tagName);

      // Find all path elements - try multiple strategies
      let pathElements: Element[] = [];
      
      // Strategy 1: Direct path query
      pathElements = Array.from(svgElement.querySelectorAll('path'));
      console.log(`Found ${pathElements.length} path elements via direct query`);
      
      if (pathElements.length === 0) {
        // Strategy 2: All elements, filter for paths
        const allElements = Array.from(svgElement.querySelectorAll('*'));
        pathElements = allElements.filter(el => el.tagName.toLowerCase() === 'path');
        console.log(`Found ${pathElements.length} path elements via filter`);
      }

      // Filter paths that have inkscape:label
      const labeledPaths = pathElements.filter(path => {
        const inkscapeLabel = path.getAttribute('inkscape:label') || 
                             path.getAttributeNS('http://www.inkscape.org/namespaces/inkscape', 'label');
        return inkscapeLabel !== null;
      });

      console.log(`Found ${labeledPaths.length} paths with inkscape:label`);

      // Process each path individually
      const processedPaths: Array<{element: Element, citySlug: string, city: City}> = [];
      
      labeledPaths.forEach((pathElement, index) => {
        const inkscapeLabel = pathElement.getAttribute('inkscape:label') || 
                             pathElement.getAttributeNS('http://www.inkscape.org/namespaces/inkscape', 'label');
        
        if (!inkscapeLabel) return;
        
        const citySlug = inkscapeLabel.trim();
        const city = cityLookup.get(citySlug);
        
        console.log(`Processing path ${index + 1}: ${citySlug}`, city ? `(${city.name})` : '(NOT FOUND)');
        
        if (city) {
          // Clear all existing attributes that might cause issues
          pathElement.removeAttribute('style');
          pathElement.removeAttribute('fill');
          pathElement.removeAttribute('fill-opacity');
          pathElement.removeAttribute('stroke');
          pathElement.removeAttribute('stroke-width');
          pathElement.removeAttribute('opacity');
          pathElement.removeAttribute('display');
          pathElement.removeAttribute('visibility');
          
          // Set guaranteed visible attributes with unique colors
          const colorIndex = index % 8;
          const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F'];
          const fillColor = colors[colorIndex];
          
          pathElement.setAttribute('fill', fillColor);
          pathElement.setAttribute('fill-opacity', '0.8');
          pathElement.setAttribute('stroke', '#2C3E50');
          pathElement.setAttribute('stroke-width', '1');
          pathElement.setAttribute('opacity', '1');
          pathElement.setAttribute('cursor', 'pointer');
          pathElement.setAttribute('data-city-slug', citySlug);
          pathElement.setAttribute('data-city-name', city.name);
          pathElement.setAttribute('data-original-fill', fillColor);
          
          // Force visibility
          (pathElement as SVGElement).style.pointerEvents = 'all';
          (pathElement as SVGElement).style.visibility = 'visible';
          (pathElement as SVGElement).style.display = 'block';
          
          processedPaths.push({ element: pathElement, citySlug, city });
          
          console.log(`✅ Styled ${citySlug} with color ${fillColor}`);
        }
      });

      // Clear the SVG and re-add paths in controlled order
      const container = svgElement.querySelector('g') || svgElement;
      
      // Remove all existing paths
      labeledPaths.forEach(path => {
        if (path.parentNode) {
          path.parentNode.removeChild(path);
        }
      });

      // Add paths back in reverse order (so smaller ones render on top)
      processedPaths.reverse().forEach(({ element }) => {
        container.appendChild(element);
      });

      // Ensure SVG has proper viewBox and dimensions
      svgElement.setAttribute('width', '100%');
      svgElement.setAttribute('height', '100%');
      svgElement.setAttribute('viewBox', '0 0 1000 1200');
      svgElement.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      
      // Serialize back to string
      const serializer = new XMLSerializer();
      const finalSvg = serializer.serializeToString(svgElement);
      
      setProcessedSvgContent(finalSvg);
      console.log(`✅ SUPER PROCESSING COMPLETE: ${processedPaths.length} cities processed`);
      console.log('Cities order:', processedPaths.map(p => p.citySlug));

    } catch (error) {
      console.error('SUPER SVG processing error:', error);
      setProcessedSvgContent(svgContent); // Fallback
    }
  }, [svgContent, cityLookup]);

  // Enhanced event handling
  React.useEffect(() => {
    if (!processedSvgContent || !svgRef.current) return;

    const svgContainer = svgRef.current;
    const svgElement = svgContainer.querySelector('svg');
    if (!svgElement) return;

    console.log('=== SETTING UP SUPER EVENT HANDLERS ===');

    // Enhanced click handler
    const handleClick = (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      
      const target = event.target as SVGElement;
      console.log('🖱️ SUPER CLICK on:', target.tagName, target.getAttribute('data-city-slug'));
      
      if (target.tagName === 'path' && target.hasAttribute('data-city-slug')) {
        const citySlug = target.getAttribute('data-city-slug')!;
        const city = cityLookup.get(citySlug);
        if (city) {
          console.log('🎯 City selected:', city.name);
          onCityClick(city);
          
          // Visual feedback for selection
          const allPaths = svgElement.querySelectorAll('path[data-city-slug]');
          allPaths.forEach(path => {
            const originalFill = path.getAttribute('data-original-fill') || '#666666';
            path.setAttribute('fill', originalFill);
            path.setAttribute('stroke-width', '1');
          });
          
          // Highlight selected
          target.setAttribute('fill', '#D97706');
          target.setAttribute('stroke', '#B45309');
          target.setAttribute('stroke-width', '3');
        }
      }
    };

    // Enhanced hover handlers
    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as SVGElement;
      if (target.tagName === 'path' && target.hasAttribute('data-city-slug')) {
        const citySlug = target.getAttribute('data-city-slug')!;
        const city = cityLookup.get(citySlug);
        if (city) {
          console.log('🏠 City hovered:', city.name);
          setHoveredCity(citySlug);
          onCityHover(city);
          
          // Hover styling
          target.setAttribute('fill', '#FCD34D');
          target.setAttribute('stroke', '#F59E0B');
          target.setAttribute('stroke-width', '2');
          target.style.filter = 'brightness(1.1)';
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
          
          // Reset to original or selected styling
          const isSelected = selectedCity?.slug === citySlug;
          if (isSelected) {
            target.setAttribute('fill', '#D97706');
            target.setAttribute('stroke', '#B45309');
            target.setAttribute('stroke-width', '3');
          } else {
            const originalFill = target.getAttribute('data-original-fill') || '#666666';
            target.setAttribute('fill', originalFill);
            target.setAttribute('stroke', '#2C3E50');
            target.setAttribute('stroke-width', '1');
          }
          target.style.filter = '';
        }
      }
    };

    // Add event listeners with capture to ensure they fire
    svgElement.addEventListener('click', handleClick, true);
    svgElement.addEventListener('mouseover', handleMouseOver, true);
    svgElement.addEventListener('mouseout', handleMouseOut, true);

    console.log('✅ SUPER event listeners attached');

    return () => {
      svgElement.removeEventListener('click', handleClick, true);
      svgElement.removeEventListener('mouseover', handleMouseOver, true);
      svgElement.removeEventListener('mouseout', handleMouseOut, true);
    };
  }, [processedSvgContent, cityLookup, onCityClick, onCityHover, selectedCity]);

  if (!processedSvgContent) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg">
        <div className="text-gray-500">Loading SUPER map...</div>
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
      
      {/* Enhanced debug info */}
      <div className="absolute top-2 right-2 bg-white/95 p-3 rounded-lg shadow-lg text-xs font-mono">
        <div className="text-green-600 font-bold">🚀 SUPER MAP ACTIVE</div>
        <div>Hover: <span className="font-bold text-blue-600">{hoveredCity || 'None'}</span></div>
        <div>Selected: <span className="font-bold text-orange-600">{selectedCity?.name || 'None'}</span></div>
        <div>Total Cities: <span className="font-bold">{cities.length}</span></div>
      </div>
    </div>
  );
};

export default VietnamMapSuper;
