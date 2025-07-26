'use client';

import React from 'react';
import Link from 'next/link';
import { City } from '@/types';
import { createSlug } from '@/utils/slug';
import VietnamMap from '@/components/VietnamMap';
import { useRouter } from 'next/navigation'

interface CityPageProps {
  city: City;
  allCities: City[];
}

const CityPage: React.FC<CityPageProps> = ({ city, allCities }) => {
  const [selectedCity, setSelectedCity] = React.useState<City>(city);
    const router = useRouter();
  const handleCityClick = (newCity: City) => {
    setSelectedCity(newCity);
    // Navigate to the new city page using slug
    router.push(`/city/${createSlug(newCity.name)}`);
  };

  const handleCityHover = (newCity: City | null) => {
    // Handle hover for visual feedback
    console.log('Hovering over:', newCity?.name || 'none');
  };

  const handleBackToMap = () => {
    // Save the current city to localStorage before navigating back
    localStorage.setItem('selectedCityId', city.id.toString());
    router.back();
  };

  const handleShare = async () => {
    const shareData = {
      title: `${city.name} - Địa Lý Việt Nam`,
      text: `Tìm hiểu về ${city.name} - ${city.description.substring(0, 100)}...`,
      url: window.location.href
    };

    try {
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        // Fallback to copying URL with better mobile support
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(shareData.url);
          // Show a toast notification instead of alert for better UX
          if (window.innerWidth <= 768) {
            // Mobile-optimized notification
            const toast = document.createElement('div');
            toast.textContent = 'Đã sao chép liên kết!';
            toast.style.cssText = `
              position: fixed;
              bottom: 20px;
              left: 50%;
              transform: translateX(-50%);
              background: #10b981;
              color: white;
              padding: 12px 24px;
              border-radius: 8px;
              font-size: 14px;
              font-weight: 500;
              z-index: 1000;
              box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            `;
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 3000);
          } else {
            alert('Đã sao chép liên kết vào clipboard!');
          }
        } else {
          // Final fallback for older browsers
          const textArea = document.createElement('textarea');
          textArea.value = shareData.url;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          alert('Đã sao chép liên kết!');
        }
      }
    } catch (error) {
      console.error('Error sharing:', error);
      // Fallback if sharing fails
      try {
        await navigator.clipboard.writeText(shareData.url);
        alert('Đã sao chép liên kết!');
      } catch (clipboardError) {
        console.error('Clipboard error:', clipboardError);
      }
    }
  };

  const paragraphs = city.description.split('. ');
  const para1 = paragraphs.slice(0, Math.ceil(paragraphs.length / 3)).join('. ');
  const para2 = paragraphs.slice(Math.ceil(paragraphs.length / 3), Math.ceil(2 * paragraphs.length / 3)).join('. ');
  const para3 = paragraphs.slice(Math.ceil(2 * paragraphs.length / 3)).join('. ');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <button onClick={handleBackToMap} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg"></div>
                <h1 className="text-xl font-bold text-gray-900">
                  Địa Lý Việt Nam
                </h1>
              </button>
            </div>
            <nav className="flex items-center gap-4">
              <button
                onClick={handleBackToMap}
                className="px-3 py-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium"
              >
                ← Về Bản Đồ
              </button>
              <button
                onClick={handleShare}
                className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Chia Sẻ
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <button onClick={handleBackToMap} className="hover:text-gray-700">
                Trang chủ
              </button>
            </li>
            <li>/</li>
            <li>
              <span className="text-gray-900 font-medium">{city.name}</span>
            </li>
          </ol>
        </nav>

        {/* City Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-6 h-6 rounded-full" 
                  style={{ backgroundColor: city.color }}
                />
                <span className="text-sm text-gray-500">Mã: {city.code}</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">{city.region}</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {city.name}
              </h1>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                    <span className="text-sm font-medium text-blue-800">Dân số</span>
                  </div>
                  <p className="text-lg font-bold text-blue-900">{city.population}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-sm font-medium text-green-800">Diện tích</span>
                  </div>
                  <p className="text-lg font-bold text-green-900">{city.area}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Former names */}
          {city.oldNames.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                Bao gồm các tỉnh cũ:
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
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Vị trí trên Bản đồ
            </h2>
            <div className="aspect-[3/4] w-full">
              <VietnamMap
                cities={allCities}
                selectedCity={selectedCity}
                onCityClick={handleCityClick}
                onCityHover={handleCityHover}
                filteredCities={[city]}
              />
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Nhấp vào các thành phố khác để khám phá chúng
            </p>
          </div>

          {/* Information Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Về {city.name}
            </h2>
            
            {city.fullPageContent ? (
              <div 
                className="text-gray-700 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: city.fullPageContent }}
                style={{
                  lineHeight: '1.6',
                }}
              />
            ) : (
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>{para1}{para1.endsWith('.') ? '' : '.'}</p>
                {para2 && <p>{para2}{para2.endsWith('.') ? '' : '.'}</p>}
                {para3 && <p>{para3}{para3.endsWith('.') ? '' : '.'}</p>}
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex gap-3">
                <button
                  onClick={handleShare}
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                  Chia Sẻ Thành Phố Này
                </button>
                <button
                  onClick={handleBackToMap}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium text-center"
                >
                  Khám Phá Thêm
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Cities */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Các Thành Phố Khác trong {city.region}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allCities
              .filter(c => c.region === city.region && c.id !== city.id)
              .slice(0, 6)
              .map((relatedCity) => (
                <Link
                  key={relatedCity.id}
                  href={`/city/${createSlug(relatedCity.name)}`}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full flex-shrink-0" 
                      style={{ backgroundColor: relatedCity.color }}
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">
                        {relatedCity.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Mã: {relatedCity.code}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
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
              Được xây dựng với Next.js, TypeScript và Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CityPage;
