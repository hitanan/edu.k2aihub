'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { City } from '@/types';
import { createRegionSlug } from '@/utils/slug';
import ShareButton from '@/components/ShareButton';

interface CityInfoProps {
  city: City | null;
  hoveredCity?: City | null;
}

const CityInfo: React.FC<CityInfoProps> = ({ city, hoveredCity }) => {
  const router = useRouter();

  const handleViewFullPage = () => {
    if (!city) return;
    router.push(`/city/${city.slug}`);
  };

  // Show hovered city info if hovering, otherwise show selected city
  const displayCity = hoveredCity || city;

  if (!displayCity) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="text-center py-12">
          <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Địa Lý Việt Nam
          </h2>
          <p className="text-gray-600 mb-4">
            Chọn một thành phố trên bản đồ để tìm hiểu thêm thông tin
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Về 34 Đơn Vị Hành Chính Cấp Tỉnh Việt Nam
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Sau khi sáp nhập hành chính, Việt Nam dự kiến có 34 đơn vị hành chính cấp tỉnh. 
              Việc tổ chức lại này nhằm tối ưu hóa quản lý, nâng cao hiệu quả hành chính và 
              thúc đẩy sự phát triển cân bằng giữa các vùng miền trên cả nước.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const paragraphs = displayCity.description.split('. ');
  const para1 = paragraphs.slice(0, Math.ceil(paragraphs.length / 3)).join('. ');
  const para2 = paragraphs.slice(Math.ceil(paragraphs.length / 3), Math.ceil(2 * paragraphs.length / 3)).join('. ');
  const para3 = paragraphs.slice(Math.ceil(2 * paragraphs.length / 3)).join('. ');

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Hover indicator */}
      {hoveredCity && (
        <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-amber-700">
              Đang xem thông tin: {hoveredCity.name}
            </span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: displayCity.color }}
            />
            <span className="text-sm text-gray-500">Mã đơn vị hành chính: {displayCity.code}</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-1 hover:text-blue-800 cursor-pointer" onClick={handleViewFullPage}>
            {displayCity.name}
          </h1>
          <p className="text-gray-600">
            Vùng miền: <Link 
              href={`/region/${createRegionSlug(displayCity.region)}`}
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              {displayCity.region}
            </Link>
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
            <span className="text-sm font-medium text-blue-800">Dân số</span>
          </div>
          <p className="text-lg font-bold text-blue-900">{displayCity.population}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-sm font-medium text-green-800">Diện tích</span>
          </div>
          <p className="text-lg font-bold text-green-900">{displayCity.area}</p>
        </div>
      </div>

      {/* Former names */}
      {displayCity.oldNames.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            Bao gồm các tỉnh cũ:
          </h3>
          <div className="flex flex-wrap gap-2">
            {displayCity.oldNames.map((name, index) => (
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
          Về {displayCity.name}
        </h3>
        
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>{para1}{para1.endsWith('.') ? '' : '.'}</p>
          {para2 && <p>{para2}{para2.endsWith('.') ? '' : '.'}</p>}
          {para3 && <p>{para3}{para3.endsWith('.') ? '' : '.'}</p>}
        </div>
      </div>

      {/* Action buttons - only show for selected city, not hovered */}
      {!hoveredCity && city && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex gap-3">
            <button
              onClick={handleViewFullPage}
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium cursor-pointer"
            >
              Xem Trang Đầy Đủ
            </button>
            <ShareButton 
              title={`${city.name} - Địa Lý Việt Nam | K2AiHub`}
              description={`Tìm hiểu về ${city.name} - ${city.description.substring(0, 100)}...`}
              url={typeof window !== 'undefined' ? `${window.location.origin}/city/${city.slug}` : ''}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CityInfo;
