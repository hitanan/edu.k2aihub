import { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import CityPage from '@/components/city/CityPage';
import LoadingSpinner from '@/components/LoadingSpinner';
import { City } from '@/types';
import { findCityBySlug } from '@/utils/slug';
import {
  createTitle,
  createDescription,
  createKeywords,
  createEducationalContentStructuredData,
  createFAQStructuredData,
  createBreadcrumbStructuredData,
  createPlaceStructuredData,
} from '@/utils/seo';
import { SocialSeoPresets } from '@/utils/socialSeo';
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
        title: createTitle('Không Tìm Thấy Thành Phố - Địa Lý Việt Nam'),
        description: createDescription('Không thể tìm thấy thành phố được yêu cầu'),
        robots: {
          index: false,
          follow: false,
        },
      };
    }

    // Create comprehensive keywords with city-specific terms
    const cityKeywords = [
      city.name,
      ...city.oldNames,
      city.region,
      'du lịch',
      'văn hóa',
      'kinh tế',
      'dân số',
      'diện tích',
      'hành chính',
    ];

    // Add tourist attraction keywords if they exist
    if (city.touristAttractions && city.touristAttractions.length > 0) {
      cityKeywords.push(...city.touristAttractions.map((attraction) => attraction.name), 'điểm du lịch', 'danh thắng');
    }

    // Enhanced description with key statistics and tourist attractions
    let enhancedDescription = `${city.description} Diện tích: ${city.area}, Dân số: ${city.population}.`;

    if (city.touristAttractions && city.touristAttractions.length > 0) {
      const attractionNames = city.touristAttractions
        .slice(0, 3)
        .map((a) => a.name)
        .join(', ');
      enhancedDescription += ` Khám phá các điểm du lịch nổi tiếng: ${attractionNames}.`;
    }

    enhancedDescription += ` Tìm hiểu lịch sử, văn hóa và kinh tế của ${city.name}`;

    const socialMeta = SocialSeoPresets.city(
      `${city.name} - ${city.region} | Địa Lý Việt Nam`,
      enhancedDescription,
      cityKeywords,
    );

    return {
      title: createTitle(`${city.name} - ${city.region} | Địa Lý Việt Nam`),
      description: enhancedDescription,
      keywords: createKeywords(cityKeywords),
      openGraph: socialMeta.openGraph,
      twitter: socialMeta.twitter,
      alternates: {
        canonical: `/city/${city.slug}`,
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

    const enhancedDescription = `${city.description} Diện tích: ${city.area}, Dân số: ${city.population}.`;
    const educationalData = createEducationalContentStructuredData(
      `${city.name} - ${city.region}`,
      enhancedDescription,
      `https://edu.k2aihub.com/city/${city.slug}`,
    );
    const faqData = createFAQStructuredData(city);
    const breadcrumbData = createBreadcrumbStructuredData(city);
    const placeData = createPlaceStructuredData(city);
    const structuredData = [educationalData, faqData, breadcrumbData, placeData].filter(Boolean);

    return (
      <Suspense fallback={<LoadingSpinner message={`Đang tải thông tin ${city.name}...`} />}>
        <CityPage city={city} allCities={citiesData} structuredData={structuredData} />
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
