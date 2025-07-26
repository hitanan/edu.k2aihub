'use client';

import React from 'react';

interface LoadingSpinnerProps {
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message = 'Đang tải...' }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <div className="absolute inset-0 rounded-full h-12 w-12 border-t-2 border-green-600 mx-auto animate-ping opacity-20"></div>
        </div>
        <p className="text-gray-600 text-lg font-medium">{message}</p>
        <p className="text-gray-500 text-sm mt-2">Nền Tảng Thông Minh</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
