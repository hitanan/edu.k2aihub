/**
 * Social Sharing Component for better content distribution and SEO
 */

'use client';

import { useState } from 'react';
import { City } from '@/types';

interface SocialSharingProps {
  city: City;
  className?: string;
}

export default function SocialSharing({ city, className = '' }: SocialSharingProps) {
  const [copied, setCopied] = useState(false);

  const currentUrl = `https://k2aihub.com/city/${city.slug}`;
  const shareTitle = `${city.name} - Khám phá ${city.region} | K2AiHub`;
  const shareDescription = `Tìm hiểu về ${city.name}: dân số ${city.population}, diện tích ${city.area}. Khám phá các điểm du lịch và văn hóa đặc sắc.`;

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&description=${encodeURIComponent(shareDescription)}`,
    zalo: `https://zalo.me/share?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(shareTitle)}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleShare = (platform: keyof typeof shareUrls) => {
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        Chia sẻ thông tin {city.name}
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {/* Facebook */}
        <button
          onClick={() => handleShare('facebook')}
          className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          aria-label={`Chia sẻ ${city.name} trên Facebook`}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Facebook
        </button>

        {/* Twitter */}
        <button
          onClick={() => handleShare('twitter')}
          className="flex items-center justify-center gap-2 px-3 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition-colors"
          aria-label={`Chia sẻ ${city.name} trên Twitter`}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
          Twitter
        </button>

        {/* Zalo */}
        <button
          onClick={() => handleShare('zalo')}
          className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          aria-label={`Chia sẻ ${city.name} trên Zalo`}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169-.017-.334-.017-.5-.017-.666 0-1.332.116-1.998.349-.333.116-.666.25-.999.4-.166.083-.332.183-.499.283-.166.1-.332.216-.499.349-.166.133-.332.283-.499.449-.166.166-.332.349-.499.549-.166.2-.332.416-.499.649-.166.233-.332.483-.499.749-.166.266-.332.549-.499.849-.166.3-.332.616-.499.949-.166.333-.332.683-.499 1.049-.166.366-.332.749-.499 1.149-.166.4-.332.816-.499 1.249-.166.433-.332.883-.499 1.349-.166.466-.332.949-.499 1.449-.166.5-.332 1.016-.499 1.549-.166.533-.332 1.083-.499 1.649-.166.566-.332 1.149-.499 1.749-.166.6-.332 1.216-.499 1.849-.166.633-.332 1.283-.499 1.949-.166.666-.332 1.349-.499 2.049-.166.7-.332 1.416-.499 2.149-.166.733-.332 1.483-.499 2.249-.166.766-.332 1.549-.499 2.349-.166.8-.332 1.616-.499 2.449-.166.833-.332 1.683-.499 2.549-.166.866-.332 1.749-.499 2.649-.166.9-.332 1.816-.499 2.749-.166.933-.332 1.883-.499 2.849-.166.966-.332 1.949-.499 2.949-.166 1-.332 2.016-.499 3.049-.166 1.033-.332 2.083-.499 3.149-.166 1.066-.332 2.149-.499 3.249-.166 1.1-.332 2.216-.499 3.349-.166 1.133-.332 2.283-.499 3.449-.166 1.166-.332 2.349-.499 3.549-.166 1.2-.332 2.416-.499 3.649-.166 1.233-.332 2.483-.499 3.749-.166 1.266-.332 2.549-.499 3.849-.166 1.3-.332 2.616-.499 3.949-.166 1.333-.332 2.683-.499 4.049-.166 1.366-.332 2.749-.499 4.149-.166 1.4-.332 2.816-.499 4.249-.166 1.433-.332 2.883-.499 4.349-.166 1.466-.332 2.949-.499 4.449-.166 1.5-.332 3.016-.499 4.549-.166 1.533-.332 3.083-.499 4.649-.166 1.566-.332 3.149-.499 4.749-.166 1.6-.332 3.216-.499 4.849-.166 1.633-.332 3.283-.499 4.949-.166 1.666-.332 3.349-.499 5.049-.166 1.7-.332 3.416-.499 5.149-.166 1.733-.332 3.483-.499 5.249-.166 1.766-.332 3.549-.499 5.349-.166 1.8-.332 3.616-.499 5.449-.166 1.833-.332 3.683-.499 5.549-.166 1.866-.332 3.749-.499 5.649-.166 1.9-.332 3.816-.499 5.749-.166 1.933-.332 3.883-.499 5.849-.166 1.966-.332 3.949-.499 5.949-.166 2-.332 4.016-.499 6.049-.166 2.033-.332 4.083-.499 6.149-.166 2.066-.332 4.149-.499 6.249-.166 2.1-.332 4.216-.499 6.349-.166 2.133-.332 4.283-.499 6.449-.166 2.166-.332 4.349-.499 6.549-.166 2.2-.332 4.416-.499 6.649-.166 2.233-.332 4.483-.499 6.749-.166 2.266-.332 4.549-.499 6.849-.166 2.3-.332 4.616-.499 6.949-.166 2.333-.332 4.683-.499 7.049-.166 2.366-.332 4.749-.499 7.149-.166 2.4-.332 4.816-.499 7.249-.166 2.433-.332 4.883-.499 7.349-.166 2.466-.332 4.949-.499 7.449-.166 2.5-.332 5.016-.499 7.549-.166 2.533-.332 5.083-.499 7.649-.166 2.566-.332 5.149-.499 7.749-.166 2.6-.332 5.216-.499 7.849-.166 2.633-.332 5.283-.499 7.949-.166 2.666-.332 5.349-.499 8.049-.166 2.7-.332 5.416-.499 8.149-.166 2.733-.332 5.483-.499 8.249-.166 2.766-.332 5.549-.499 8.349-.166 2.8-.332 5.616-.499 8.449-.166 2.833-.332 5.683-.499 8.549-.166 2.866-.332 5.749-.499 8.649-.166 2.9-.332 5.816-.499 8.749-.166 2.933-.332 5.883-.499 8.849-.166 2.966-.332 5.949-.499 8.949-.166 3-.332 6.016-.499 9.049-.166 3.033-.332 6.083-.499 9.149-.166 3.066-.332 6.149-.499 9.249-.166 3.1-.332 6.216-.499 9.349-.166 3.133-.332 6.283-.499 9.449-.166 3.166-.332 6.349-.499 9.549-.166 3.2-.332 6.416-.499 9.649-.166 3.233-.332 6.483-.499 9.749-.166 3.266-.332 6.549-.499 9.849-.166 3.3-.332 6.616-.499 9.949-.166 3.333-.332 6.683-.499 10.049-.166 3.366-.332 6.749-.499 10.149-.166 3.4-.332 6.816-.499 10.249-.166 3.433-.332 6.883-.499 10.349-.166 3.466-.332 6.949-.499 10.449-.166 3.5-.332 7.016-.499 10.549-.166 3.533-.332 7.083-.499 10.649-.166 3.566-.332 7.149-.499 10.749-.166 3.6-.332 7.216-.499 10.849-.166 3.633-.332 7.283-.499 10.949-.166 3.666-.332 7.349-.499 11.049-.166 3.7-.332 7.416-.499 11.149-.166 3.733-.332 7.483-.499 11.249-.166 3.766-.332 7.549-.499 11.349-.166 3.8-.332 7.616-.499 11.449-.166 3.833-.332 7.683-.499 11.549-.166 3.866-.332 7.749-.499 11.649-.166 3.9-.332 7.816-.499 11.749-.166 3.933-.332 7.883-.499 11.849-.166 3.966-.332 7.949-.499 11.949-.166 4-.332 8.016-.499 12.049z"/>
          </svg>
          Zalo
        </button>

        {/* LinkedIn */}
        <button
          onClick={() => handleShare('linkedin')}
          className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors"
          aria-label={`Chia sẻ ${city.name} trên LinkedIn`}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </button>

        {/* Pinterest */}
        <button
          onClick={() => handleShare('pinterest')}
          className="flex items-center justify-center gap-2 px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          aria-label={`Chia sẻ ${city.name} trên Pinterest`}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.120.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
          </svg>
          Pinterest
        </button>

        {/* Copy Link */}
        <button
          onClick={copyToClipboard}
          className="flex items-center justify-center gap-2 px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          aria-label={`Sao chép liên kết ${city.name}`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          {copied ? 'Đã sao chép!' : 'Sao chép'}
        </button>
      </div>

      {/* Additional sharing info */}
      <div className="mt-3 text-xs text-gray-500">
        Chia sẻ để giúp bạn bè tìm hiểu về {city.name}
      </div>
    </div>
  );
}
