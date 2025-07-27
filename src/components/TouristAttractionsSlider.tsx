'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { TouristAttraction } from '@/types';

interface TouristAttractionsSliderProps {
  attractions: TouristAttraction[];
}

const TouristAttractionsSlider: React.FC<TouristAttractionsSliderProps> = ({ attractions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || attractions.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % attractions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, attractions.length]);

  if (!attractions || attractions.length === 0) {
    return null;
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + attractions.length) % attractions.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % attractions.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="mr-2">🏛️</span>
          Địa Điểm Nổi Tiếng
        </h3>
        
        <div className="relative">
          {/* Main slider */}
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {attractions.map((attraction, index) => (
                <div key={index} className="min-w-full h-full relative">
                  <Image
                    src={attraction.imageUrl}
                    alt={attraction.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder-attraction.svg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h4 className="text-xl font-bold mb-2">{attraction.name}</h4>
                    <p className="text-sm opacity-90 line-clamp-3">{attraction.description}</p>
                    {attraction.location && (
                      <p className="text-xs mt-1 opacity-75">📍 {attraction.location}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            {attractions.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
                  aria-label="Hình ảnh trước"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
                  aria-label="Hình ảnh tiếp theo"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Dots indicator */}
          {attractions.length > 1 && (
            <div className="flex justify-center mt-4 space-x-2">
              {attractions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-blue-600 scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Đi đến hình ảnh ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Attraction list */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {attractions.map((attraction, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                  index === currentIndex
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                }`}
                onClick={() => goToSlide(index)}
              >
                <h5 className="font-semibold text-gray-800 mb-1">{attraction.name}</h5>
                <p className="text-sm text-gray-600 line-clamp-2">{attraction.description}</p>
                {attraction.location && (
                  <p className="text-xs text-gray-500 mt-1">📍 {attraction.location}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristAttractionsSlider;
