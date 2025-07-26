'use client';

import React, { useState, useEffect } from 'react';
import { City } from '@/types';
import { matchVietnameseText } from '@/utils/vietnamese';

interface SearchProps {
  cities: City[];
  onFilterChange: (filteredCities: City[]) => void;
  onCitySelect: (city: City) => void;
}

const Search: React.FC<SearchProps> = ({ cities, onFilterChange, onCitySelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredCities([]);
      onFilterChange([]);
      setShowResults(false);
      return;
    }

    const filtered = cities.filter(city => {
      return (
        matchVietnameseText(city.name, searchTerm) ||
        city.oldNames.some(oldName => matchVietnameseText(oldName, searchTerm)) ||
        matchVietnameseText(city.region, searchTerm)
      );
    });

    setFilteredCities(filtered);
    onFilterChange(filtered);
    setShowResults(true);
  }, [searchTerm, cities, onFilterChange]);

  const handleCityClick = (city: City) => {
    onCitySelect(city);
    setShowResults(false);
    setSearchTerm(city.name);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setFilteredCities([]);
    onFilterChange([]);
    setShowResults(false);
  };

  return (
    <div className="relative">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Tìm kiếm thành phố, vùng miền hoặc tên cũ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-black placeholder-gray-500"
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Search Results */}
      {showResults && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {filteredCities.length > 0 ? (
            <div className="py-2">
              <div className="px-4 py-2 text-sm text-gray-500 border-b border-gray-100">
                Tìm thấy {filteredCities.length} kết quả{filteredCities.length !== 1 ? '' : ''}
              </div>
              {filteredCities.map((city) => (
                <button
                  key={city.id}
                  onClick={() => handleCityClick(city)}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors duration-150"
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-3 h-3 rounded-full flex-shrink-0" 
                      style={{ backgroundColor: city.color }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">{city.name}</span>
                        <span className="text-xs text-gray-500">#{city.code}</span>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {city.region}
                        {city.oldNames.length > 1 && (
                          <span className="ml-2 text-gray-400">
                            • Bao gồm: {city.oldNames.slice(1).join(', ')}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="px-4 py-8 text-center text-gray-500">
              <svg className="h-12 w-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.034 0-3.9.785-5.291 2.09m6.582 0A7.962 7.962 0 0118 15c2.034 0 3.9.785 5.291 2.09M15 11V9a6 6 0 00-12 0v2c0 .558.45 1.01 1 1.01h10c.55 0 1-.452 1-1.01z" />
              </svg>
              <p>Không tìm thấy thành phố nào với từ khóa &quot;{searchTerm}&quot;</p>
              <p className="text-sm mt-1">Thử tìm kiếm tên thành phố, vùng miền hoặc tên tỉnh cũ</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
