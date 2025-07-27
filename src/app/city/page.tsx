'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import VietnamMap from '@/components/VietnamMap';
import CityInfo from '@/components/CityInfo';
import Search from '@/components/Search';
import LoadingSpinner from '@/components/LoadingSpinner';
import FAQ from '@/components/FAQ';
import { City } from '@/types';
import citiesData from '@/data/cities';
import { HomeIcon } from "lucide-react";


export default function CityModule() {
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [hoveredCity, setHoveredCity] = useState<City | null>(null);
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);

  const faqItems = [
    {
      question: "Việt Nam có bao nhiều tỉnh thành?",
      answer: "Việt Nam hiện có 34 đơn vị hành chính cấp tỉnh, bao gồm 19 tỉnh và 15 thành phố trực thuộc trung ương. Đây là kết quả sau quá trình sắp xếp lại đơn vị hành chính."
    },
    {
      question: "Làm thế nào để tìm kiếm thông tin về một tỉnh thành?",
      answer: "Bạn có thể sử dụng thanh tìm kiếm ở trên để nhập tên tỉnh thành hoặc nhấp trực tiếp vào bản đồ tương tác. Hệ thống hỗ trợ tìm kiếm cả tên hiện tại và tên cũ của các tỉnh thành."
    },
    {
      question: "Thông tin trên trang web này có chính xác không?",
      answer: "Tất cả thông tin được thu thập từ các nguồn chính thức và cập nhật thường xuyên. Chúng tôi luôn nỗ lực đảm bảo độ chính xác cao nhất cho dữ liệu về dân số, diện tích và các thông tin khác."
    },
    {
      question: "Có thể tải xuống thông tin này không?",
      answer: "Hiện tại chúng tôi cung cấp tính năng chia sẻ thông tin qua các nền tảng xã hội. Tính năng tải xuống dữ liệu sẽ được cập nhật trong phiên bản tiếp theo."
    },
    {
      question: "Làm thế nào để góp ý hoặc báo lỗi?",
      answer: "Bạn có thể sử dụng trang 'Góp Ý & Phản Hồi' để gửi ý kiến, đề xuất hoặc báo cáo lỗi. Chúng tôi rất trân trọng mọi phản hồi từ người dùng."
    }
  ];

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
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <h1 className="text-xl font-bold text-gray-900">
                  Địa Lý Việt Nam
                </h1>
              </Link>
              <nav className="hidden md:flex items-center gap-1 ml-6">
                <Link href="/" className="text-gray-500 hover:text-gray-700 text-sm">
                  Trang Chủ
                </Link>
                <span className="text-gray-300 mx-2">/</span>
                <span className="text-gray-900 text-sm font-medium">
                  Địa Lý Việt Nam
                </span>
              </nav>
            </div>
            <nav className="flex items-center gap-6">
              <Link
                href="/feedback"
                className="px-3 py-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium"
              >
                💬 Góp Ý & Phản Hồi
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
            <div className="text-3xl font-bold text-green-600 mb-2">6</div>
            <div className="text-sm text-gray-600">Thành Phố Lớn</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
            <div className="text-sm text-gray-600">Vùng Miền</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">102 Triệu</div>
            <div className="text-sm text-gray-600">Tổng Dân Số</div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <FAQ 
            items={faqItems}
            title="Câu Hỏi Thường Gặp về Địa Lý Việt Nam"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600 mb-2">
              Địa Lý Việt Nam - Ứng Dụng Giáo Dục cho 34 Đơn Vị Hành Chính Cấp Tỉnh
            </p>
            <p className="text-sm text-gray-500">
              © 2025 K2 AI Hub
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
