import { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import CityPage from '@/components/CityPage';
import LoadingSpinner from '@/components/LoadingSpinner';
import { City } from '@/types';
import { findCityBySlug } from '@/utils/slug';
import citiesData from '@/data/cities';

interface CityPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    // Pre-generate all city pages at build time for better performance
    return citiesData.map((city: City) => ({
      slug: city.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Force static generation for all paths
export const dynamic = 'force-static';
export const revalidate = false; // Never revalidate since city data is static

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const city = findCityBySlug(citiesData, slug);
    
    if (!city) {
      return {
        title: 'Không Tìm Thấy Thành Phố - Địa Lý Việt Nam',
        description: 'Không thể tìm thấy thành phố được yêu cầu.',
        robots: {
          index: false,
          follow: false,
        },
      };
    }

    // Create comprehensive keywords
    const keywords = [
      city.name,
      ...city.oldNames,
      city.region,
      'Việt Nam',
      'địa lý',
      'tỉnh thành',
      'hành chính',
      'dân số',
      'diện tích',
      'kinh tế',
      'du lịch',
      'văn hóa'
    ].join(', ');

    // Enhanced description with key statistics
    const enhancedDescription = `${city.description} Diện tích: ${city.area}, Dân số: ${city.population}. Khám phá lịch sử, văn hóa và kinh tế của ${city.name}.`;
    
    // Create structured data for better SEO
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Place',
      name: city.name,
      description: city.description,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: city.coordinates.y, 
        longitude: city.coordinates.x
      },
      containedInPlace: {
        '@type': 'Country',
        name: 'Việt Nam'
      },
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          name: 'Dân số',
          value: city.population
        },
        {
          '@type': 'PropertyValue', 
          name: 'Diện tích',
          value: city.area
        },
        {
          '@type': 'PropertyValue',
          name: 'Vùng miền',
          value: city.region
        }
      ]
    };

    return {
      title: `${city.name} - Địa Lý Việt Nam | ${city.region}`,
      description: enhancedDescription.length > 160 ? enhancedDescription.substring(0, 157) + '...' : enhancedDescription,
      keywords,
      authors: [{ name: 'Địa Lý Việt Nam Team' }],
      creator: 'Nền Tảng Thông Tin Tương Tác',
      publisher: 'Địa Lý Việt Nam',
      formatDetection: {
        email: false,
        address: false,
        telephone: false,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      openGraph: {
        type: 'article',
        locale: 'vi_VN',
        url: `/city/${city.slug}`,
        title: `${city.name} - Khám Phá ${city.region}`,
        description: city.description,
        siteName: 'Địa Lý Việt Nam',
        images: [
          {
            url: '/ban-do-viet-nam-34-tinh.jpg',
            width: 1200,
            height: 630,
            alt: `Bản đồ Việt Nam - Vị trí ${city.name}`,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${city.name} - ${city.region}`,
        description: city.description.substring(0, 200),
        images: ['/ban-do-viet-nam-34-tinh.jpg'],
      },
      alternates: {
        canonical: `/city/${city.slug}`,
      },
      other: {
        'structured-data': JSON.stringify(structuredData),
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Địa Lý Việt Nam',
      description: 'Tìm hiểu về 34 đơn vị hành chính cấp tỉnh của Việt Nam.',
    };
  }
}

export default async function Page({ params }: CityPageProps) {
  try {
    const { slug } = await params;
    const city = findCityBySlug(citiesData, slug);

    if (!city) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Không Tìm Thấy Thành Phố</h1>
            <p className="text-gray-600 mb-4">Không thể tìm thấy thành phố với mã &quot;{slug}&quot;.</p>
            <Link
              href="/city"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Quay Về Bản Đồ
            </Link>
          </div>
        </div>
      );
    }

    return (
      <Suspense fallback={<LoadingSpinner message={`Đang tải thông tin ${city.name}...`} />}>
        <CityPage city={city} allCities={citiesData} />
      </Suspense>
    );
  } catch (error) {
    console.error('Error rendering city page:', error);
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Lỗi Tải Thành Phố</h1>
          <p className="text-gray-600 mb-4">Có lỗi xảy ra khi tải trang thành phố.</p>
          <Link
            href="/city"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Quay Về Bản Đồ
          </Link>
        </div>
      </div>
    );
  }
}
