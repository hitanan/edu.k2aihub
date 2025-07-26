'use client';

import React from 'react';
import { City } from '@/types';
import { createSlug } from '@/utils/slug';

interface CityInfoProps {
  city: City | null;
}

const CityInfo: React.FC<CityInfoProps> = ({ city }) => {
  const handleShare = () => {
    if (!city) return;
    
    const shareData = {
      title: `${city.name} - Vietnam Geography`,
      text: `Learn about ${city.name} - ${city.description.substring(0, 100)}...`,
      url: `${window.location.origin}/city/${createSlug(city.name)}`
    };

    if (navigator.share) {
      navigator.share(shareData);
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(shareData.url);
      alert('Link copied to clipboard!');
    }
  };

  if (!city) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="text-center py-12">
          <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Vietnam Geography
          </h2>
          <p className="text-gray-600 mb-4">
            Select a city on the map to learn more about it
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              About Vietnam&apos;s 34 Provincial Units
            </h3>
            <p className="text-gray-700 leading-relaxed">
              After the administrative merger, Vietnam is expected to have 34 provincial-level 
              administrative units. This reorganization aims to optimize governance, improve 
              administrative efficiency, and promote balanced regional development across the country.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const paragraphs = city.description.split('. ');
  const para1 = paragraphs.slice(0, Math.ceil(paragraphs.length / 3)).join('. ');
  const para2 = paragraphs.slice(Math.ceil(paragraphs.length / 3), Math.ceil(2 * paragraphs.length / 3)).join('. ');
  const para3 = paragraphs.slice(Math.ceil(2 * paragraphs.length / 3)).join('. ');

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: city.color }}
            />
            <span className="text-sm text-gray-500">Code: {city.code}</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-1">
            {city.name}
          </h1>
          <p className="text-gray-600">
            Region: {city.region}
          </p>
        </div>
        <button
          onClick={handleShare}
          className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
          title="Share this city"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
          </svg>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
            <span className="text-sm font-medium text-blue-800">Population</span>
          </div>
          <p className="text-lg font-bold text-blue-900">{city.population}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-sm font-medium text-green-800">Area</span>
          </div>
          <p className="text-lg font-bold text-green-900">{city.area}</p>
        </div>
      </div>

      {/* Former names */}
      {city.oldNames.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            Includes former provinces:
          </h3>
          <div className="flex flex-wrap gap-2">
            {city.oldNames.map((name, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Description */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">
          About {city.name}
        </h3>
        
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>{para1}{para1.endsWith('.') ? '' : '.'}</p>
          {para2 && <p>{para2}{para2.endsWith('.') ? '' : '.'}</p>}
          {para3 && <p>{para3}{para3.endsWith('.') ? '' : '.'}</p>}
        </div>
      </div>

      {/* Action buttons */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex gap-3">
          <button
            onClick={() => window.open(`/city/${createSlug(city.name)}`, '_blank')}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            View Full Page
          </button>
          <button
            onClick={handleShare}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default CityInfo;
