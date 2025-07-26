'use client';

import React, { useState, useEffect, useCallback } from 'react';
import VietnamMap from '@/components/VietnamMap';
import CityInfo from '@/components/CityInfo';
import Search from '@/components/Search';
import FeedbackForm from '@/components/FeedbackForm';
import LoadingSpinner from '@/components/LoadingSpinner';
import { City } from '@/types';
import citiesData from '@/data/cities';

export default function Home() {
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [hoveredCity, setHoveredCity] = useState<City | null>(null);
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [activeTab, setActiveTab] = useState<'map' | 'feedback'>('map');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use static data instead of dynamic imports
    setCities(citiesData);
    setLoading(false);
  }, []);

  useEffect(() => {
    // Load selected city from localStorage on mount - client-side only
    if (typeof window !== 'undefined' && cities.length > 0) {
      const savedCityId = localStorage.getItem('selectedCityId');
      if (savedCityId) {
        const city = cities.find(c => c.id === parseInt(savedCityId));
        if (city) {
          setSelectedCity(city);
        }
      }
    }
  }, [cities]);

  useEffect(() => {
    // Save selected city to localStorage - client-side only
    if (typeof window !== 'undefined') {
      if (selectedCity) {
        localStorage.setItem('selectedCityId', selectedCity.id.toString());
      } else {
        localStorage.removeItem('selectedCityId');
      }
    }
  }, [selectedCity]);

  const handleCityClick = (city: City) => {
    setSelectedCity(city);
  };

  const handleCityHover = (city: City | null) => {
    setHoveredCity(city);
  };

  const handleFilterChange = useCallback((filtered: City[]) => {
    setFilteredCities(filtered);
  }, []);

  const handleCitySelect = useCallback((city: City) => {
    setSelectedCity(city);
    setActiveTab('map');
  }, []);

  if (loading) {
    return (
      <LoadingSpinner message="Đang tải Địa Lý Việt Nam..." />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg"></div>
              <h1 className="text-xl font-bold text-gray-900">
                Địa Lý Việt Nam
              </h1>
            </div>
            <nav className="flex items-center gap-6">
              <button
                onClick={() => setActiveTab('map')}
                className={`px-3 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  activeTab === 'map'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Bản Đồ Tương Tác
              </button>
              <button
                onClick={() => setActiveTab('feedback')}
                className={`px-3 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  activeTab === 'feedback'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Góp Ý
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'map' ? (
          <>
            {/* Search */}
            <div className="mb-8">
              <Search
                cities={cities}
                onFilterChange={handleFilterChange}
                onCitySelect={handleCitySelect}
              />
            </div>

            {/* Map and Info Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Map Section */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="mb-4">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    Bản Đồ Tương Tác 34 Đơn Vị Hành Chính Cấp Tỉnh Việt Nam
                  </h2>
                  <p className="text-sm text-gray-600">
                    Nhấp vào bất kỳ thành phố nào để tìm hiểu thêm thông tin. 
                    {hoveredCity && (
                      <span className="ml-2 font-medium text-blue-600">
                        Đang di chuột: {hoveredCity.name}
                      </span>
                    )}
                  </p>
                </div>
                <div className="aspect-[3/4] w-full">
                  <VietnamMap
                    cities={cities}
                    selectedCity={selectedCity}
                    onCityClick={handleCityClick}
                    onCityHover={handleCityHover}
                    filteredCities={filteredCities}
                  />
                </div>
                {filteredCities.length > 0 && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>{filteredCities.length}</strong> thành phố phù hợp với tìm kiếm của bạn
                    </p>
                  </div>
                )}
              </div>

              {/* Info Section */}
              <div>
                <CityInfo city={selectedCity} />
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">34</div>
                <div className="text-sm text-gray-600">Đơn Vị Cấp Tỉnh</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">5</div>
                <div className="text-sm text-gray-600">Thành Phố Lớn</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
                <div className="text-sm text-gray-600">Vùng Miền</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">96M+</div>
                <div className="text-sm text-gray-600">Tổng Dân Số</div>
              </div>
            </div>
          </>
        ) : (
          <FeedbackForm />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600 mb-2">
              Địa Lý Việt Nam - Ứng Dụng Giáo Dục cho 34 Đơn Vị Hành Chính Cấp Tỉnh
            </p>
            <p className="text-sm text-gray-500">
              Được xây dựng với Next.js, TypeScript và Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
