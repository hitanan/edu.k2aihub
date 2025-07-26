import { Metadata } from 'next';
import Link from 'next/link';
import CityPage from '@/components/CityPage';
import { City } from '@/types';
import { createSlug, findCityBySlug } from '@/utils/slug';
import citiesData from '@/data/cities';

interface CityPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    return citiesData.map((city: City) => ({
      slug: createSlug(city.name),
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
        title: 'City Not Found - Vietnam Geography',
        description: 'The requested city could not be found.',
      };
    }

    return {
      title: `${city.name} - Vietnam Geography`,
      description: `Learn about ${city.name}, ${city.region}. ${city.description.substring(0, 150)}...`,
      keywords: `${city.name}, ${city.oldNames.join(', ')}, ${city.region}, Vietnam, geography`,
      openGraph: {
        title: `${city.name} - Vietnam Geography`,
        description: `${city.description.substring(0, 200)}...`,
        type: 'article',
        url: `/city/${createSlug(city.name)}`,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Vietnam Geography',
      description: 'Learn about Vietnam\'s 34 provincial administrative units.',
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
            <h1 className="text-2xl font-bold text-gray-800 mb-4">City Not Found</h1>
            <p className="text-gray-600 mb-4">The city with slug &quot;{slug}&quot; could not be found.</p>
            <Link
              href="/"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Return to Map
            </Link>
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
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Error Loading City</h1>
          <p className="text-gray-600 mb-4">There was an error loading the city page.</p>
          <Link
            href="/"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Return to Map
          </Link>
        </div>
      </div>
    );
  }
}
