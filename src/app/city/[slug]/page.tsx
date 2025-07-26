import { Metadata } from 'next';
import Link from 'next/link';
import CityPage from '@/components/CityPage';
import { City } from '@/types';
import { findCityBySlug } from '@/utils/slug';
import citiesData from '@/data/cities';

interface CityPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    return citiesData.map((city: City) => ({
      slug: city.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const city = findCityBySlug(citiesData, slug);
    
    if (!city) {
      return {
        title: 'Không Tìm Thấy Thành Phố - Địa Lý Việt Nam',
        description: 'Không thể tìm thấy thành phố được yêu cầu.',
      };
    }

    return {
      title: `${city.name} - Địa Lý Việt Nam`,
      description: `Tìm hiểu về ${city.name}, ${city.region}. ${city.description.substring(0, 150)}...`,
      keywords: `${city.name}, ${city.oldNames.join(', ')}, ${city.region}, Việt Nam, địa lý`,
      openGraph: {
        title: `${city.name} - Địa Lý Việt Nam`,
        description: `${city.description.substring(0, 200)}...`,
        type: 'article',
        url: `/city/${city.slug}`,
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
            <button
              onClick={() => window.history.back()}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Quay Về Bản Đồ
            </button>
          </div>
        </div>
      );
    }

    return <CityPage city={city} allCities={citiesData} />;
  } catch (error) {
    console.error('Error rendering city page:', error);
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Lỗi Tải Thành Phố</h1>
          <p className="text-gray-600 mb-4">Có lỗi xảy ra khi tải trang thành phố.</p>
          <button
            onClick={() => window.history.back()}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Quay Về Bản Đồ
          </button>
        </div>
      </div>
    );
  }
}
