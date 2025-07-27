'use client';

import React from 'react';
import { City } from '@/types';
import { fetchAsset } from '@/utils/assets';

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

  // Check if city is highlighted based on filtered cities
  const isHighlighted = React.useCallback((city: City) => {
    if (filteredCities.length === 0) return true;
    return filteredCities.some(filtered => filtered.slug === city.slug);
  }, [filteredCities]);

  // Load SVG content
  React.useEffect(() => {
    const loadSvg = async () => {
      try {
        // Use the asset utility for deployment-safe path resolution
        const response = await fetchAsset('/vietnam.svg');
        const content = await response.text();
        setSvgContent(content);
      } catch (error) {
        console.error('Failed to load SVG:', error);
      }
    };

    loadSvg();
  }, []);

  // Simplified color mapping for better visual appeal
  const getPathColor = React.useCallback((citySlug: string): string => {
    const city = cityLookup.get(citySlug);
    if (!city) return '#9CA3AF';

    if (selectedCity?.slug === citySlug) {
      return '#DC2626'; // Vibrant red for selected
    }
    
    if (hoveredCity === citySlug) {
      return '#F59E0B'; // Bright amber for hover
    }
    
    if (filteredCities.length > 0 && !isHighlighted(city)) {
      return '#F3F4F6'; // Very light gray for non-highlighted when filtering
    }
    
    // Simple default color scheme
    return '#6B7280'; // Clean gray for all cities
  }, [selectedCity, hoveredCity, filteredCities, cityLookup, isHighlighted]);

  // Process SVG content with DOM parsing and reordering
  React.useEffect(() => {
    if (!svgContent) return;

    try {
      // Parse SVG using DOMParser for proper DOM manipulation
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
      const svgElement = svgDoc.documentElement;

      // Find all path elements with inkscape:label
      const pathElements = Array.from(svgElement.querySelectorAll('path'));
      const labeledPaths = pathElements.filter(path => {
        const inkscapeLabel = path.getAttribute('inkscape:label') || 
                             path.getAttributeNS('http://www.inkscape.org/namespaces/inkscape', 'label');
        return inkscapeLabel !== null;
      });

      // Process each path individually
      const processedPaths: Array<{element: Element, citySlug: string, city: City | null}> = [];
      
      labeledPaths.forEach((pathElement) => {
        const inkscapeLabel = pathElement.getAttribute('inkscape:label') || 
                             pathElement.getAttributeNS('http://www.inkscape.org/namespaces/inkscape', 'label');
        
        if (!inkscapeLabel) return;
        
        const citySlug = inkscapeLabel.trim();
        const city = cityLookup.get(citySlug);
        
        // Clear existing attributes that might cause issues
        pathElement.removeAttribute('style');
        pathElement.removeAttribute('fill');
        pathElement.removeAttribute('fill-opacity');
        pathElement.removeAttribute('stroke');
        pathElement.removeAttribute('stroke-width');
        pathElement.removeAttribute('opacity');
        
        // Set proper attributes with consistent styling
        const fillColor = getPathColor(citySlug);
        const opacity = (filteredCities.length > 0 && city && !isHighlighted(city)) ? '0.3' : '1';
        
        pathElement.setAttribute('fill', fillColor);
        pathElement.setAttribute('fill-opacity', opacity);
        pathElement.setAttribute('stroke', '#FFFFFF');
        pathElement.setAttribute('stroke-width', '0.5');
        pathElement.setAttribute('opacity', '1');
        pathElement.setAttribute('cursor', 'pointer');
        pathElement.setAttribute('data-city-slug', citySlug);
        if (city) {
          pathElement.setAttribute('data-city-name', city.name);
        }
        
        // Force visibility
        (pathElement as SVGElement).style.pointerEvents = 'all';
        (pathElement as SVGElement).style.visibility = 'visible';
        
        processedPaths.push({ element: pathElement, citySlug, city: city || null });
      });

      // Clear and re-add paths to ensure proper rendering order
      const container = svgElement.querySelector('g') || svgElement;
      
      // Remove all existing paths
      labeledPaths.forEach(path => {
        if (path.parentNode) {
          path.parentNode.removeChild(path);
        }
      });

      // Add paths back (larger provinces first to prevent overlap issues)
      processedPaths.forEach(({ element }) => {
        container.appendChild(element);
      });

      // Ensure SVG has proper dimensions
      svgElement.setAttribute('width', '100%');
      svgElement.setAttribute('height', '100%');
      svgElement.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      
      // Serialize back to string
      const serializer = new XMLSerializer();
      const finalSvg = serializer.serializeToString(svgElement);
      
      setProcessedSvgContent(finalSvg);

    } catch (error) {
      console.error('SVG processing error:', error);
      setProcessedSvgContent(svgContent); // Fallback
    }
  }, [svgContent, cityLookup, getPathColor, filteredCities, isHighlighted]);

  // Event handling
  React.useEffect(() => {
    if (!processedSvgContent || !svgRef.current) return;

    const svgContainer = svgRef.current;
    const svgElement = svgContainer.querySelector('svg');
    if (!svgElement) return;

    // Click handler
    const handleClick = (event: MouseEvent) => {
      event.preventDefault();
      const target = event.target as SVGElement;
      
      if (target.tagName === 'path' && target.hasAttribute('data-city-slug')) {
        const citySlug = target.getAttribute('data-city-slug')!;
        const city = cityLookup.get(citySlug);
        if (city) {
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
          setHoveredCity(citySlug);
          onCityHover(city);
          
          // Apply hover styling
          target.setAttribute('fill', '#F59E0B');
          target.setAttribute('stroke', '#D97706');
          target.setAttribute('stroke-width', '1.5');
        }
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      const target = event.target as SVGElement;
      if (target.tagName === 'path' && target.hasAttribute('data-city-slug')) {
        const citySlug = target.getAttribute('data-city-slug')!;
        
        setHoveredCity(null);
        onCityHover(null);
        
        // Reset styling
        const isSelected = selectedCity?.slug === citySlug;
        if (isSelected) {
          target.setAttribute('fill', '#DC2626');
          target.setAttribute('stroke', '#B91C1C');
          target.setAttribute('stroke-width', '2');
        } else {
          target.setAttribute('fill', getPathColor(citySlug));
          target.setAttribute('stroke', '#FFFFFF');
          target.setAttribute('stroke-width', '0.5');
        }
      }
    };

    // Add event listeners
    svgElement.addEventListener('click', handleClick, true);
    svgElement.addEventListener('mouseover', handleMouseOver, true);
    svgElement.addEventListener('mouseout', handleMouseOut, true);

    return () => {
      svgElement.removeEventListener('click', handleClick, true);
      svgElement.removeEventListener('mouseover', handleMouseOver, true);
      svgElement.removeEventListener('mouseout', handleMouseOut, true);
    };
  }, [processedSvgContent, cityLookup, onCityClick, onCityHover, selectedCity, getPathColor]);

  // Update selected city styling when selectedCity changes
  React.useEffect(() => {
    if (!svgRef.current) return;
    
    const svgElement = svgRef.current.querySelector('svg');
    if (!svgElement) return;

    // Reset all path styles
    const allPaths = svgElement.querySelectorAll('path[data-city-slug]');
    allPaths.forEach(path => {
      const citySlug = path.getAttribute('data-city-slug')!;
      const isSelected = selectedCity?.slug === citySlug;
      
      if (isSelected) {
        path.setAttribute('fill', '#D97706');
        path.setAttribute('stroke', '#B45309');
        path.setAttribute('stroke-width', '2');
      } else {
        path.setAttribute('fill', getPathColor(citySlug));
        path.setAttribute('stroke', '#FFFFFF');
        path.setAttribute('stroke-width', '0.5');
      }
    });
  }, [selectedCity, getPathColor]);

  if (!processedSvgContent) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg">
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <div 
        ref={svgRef}
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))' }}
        dangerouslySetInnerHTML={{ __html: processedSvgContent }}
      />
    </div>
  );
};

export default VietnamMap;
