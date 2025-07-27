/**
 * SEO-optimized Image component with lazy loading and proper alt text
 */

import Image from 'next/image';
import { useState } from 'react';

interface SEOImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export default function SEOImage({
  src,
  alt,
  width = 600,
  height = 400,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 85,
  placeholder = 'empty',
  blurDataURL
}: SEOImageProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Fallback image for errors
  const fallbackImage = '/ban-do-viet-nam-34-tinh.jpg';

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={imageError ? fallbackImage : src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        className={`transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover'
        }}
        onError={handleImageError}
        onLoad={handleImageLoad}
        loading={priority ? 'eager' : 'lazy'}
      />
      
      {/* Loading skeleton */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">Đang tải...</div>
        </div>
      )}
    </div>
  );
}
