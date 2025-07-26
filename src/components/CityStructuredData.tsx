import { City } from '@/types';

interface CityStructuredDataProps {
  city: City;
}

export default function CityStructuredData({ city }: CityStructuredDataProps) {
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
      '@type': 'AdministrativeArea',
      name: city.region,
      containedInPlace: {
        '@type': 'Country',
        name: 'Việt Nam'
      }
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
        name: 'Mã hành chính',
        value: city.code
      },
      {
        '@type': 'PropertyValue',
        name: 'Vùng miền',
        value: city.region
      }
    ],
    alternateName: city.oldNames,
    url: `/city/${city.slug}`,
    sameAs: [
      `https://vi.wikipedia.org/wiki/${encodeURIComponent(city.name.replace('Thành phố ', '').replace('TP ', ''))}`,
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}
