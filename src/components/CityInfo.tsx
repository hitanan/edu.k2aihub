'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { City } from '@/types';

interface CityInfoProps {
  city: City | null;
}

const CityInfo: React.FC<CityInfoProps> = ({ city }) => {
  const router = useRouter();

  const handleShare = async () => {
    if (!city) return;
    
    const shareData = {
      title: `${city.name} - Địa Lý Việt Nam`,
      text: `Tìm hiểu về ${city.name} - ${city.description.substring(0, 100)}...`,
      url: `${window.location.origin}/city/${city.slug}`
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

  const handleViewFullPage = () => {
    if (!city) return;
    router.push(`/city/${city.slug}`);
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
            <span className="text-sm text-gray-500">Mã: {city.code}</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-1 hover:text-blue-800 cursor-pointer" onClick={handleViewFullPage}>
            {city.name}
          </h1>
          <p className="text-gray-600">
            Vùng miền: {city.region}
          </p>
        </div>
        <button
          onClick={handleShare}
          className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
          title="Chia sẻ thành phố này"
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

      {/* Former names */}
      {city.oldNames.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
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

      {/* Description */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Về {city.name}
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
            onClick={handleViewFullPage}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium cursor-pointer"
          >
            Xem Trang Đầy Đủ
          </button>
          <button
            onClick={handleShare}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
          >
            Chia Sẻ
          </button>
        </div>
      </div>
    </div>
  );
};

export default CityInfo;
