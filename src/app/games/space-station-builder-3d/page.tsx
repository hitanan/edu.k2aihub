import { Metadata } from 'next';
import SpaceStationBuilder3D from '@/components/games/SpaceStationBuilder3D';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('Space Station Builder 3D - Game Xây Dựng Trạm Vũ Trụ 3D'),
  description: createDescription('Game mô phỏng 3D xây dựng trạm vũ trụ với hệ thống sống, năng lượng mặt trời, và khám phá không gian. Học về công nghệ vũ trụ và kỹ thuật hàng không.'),
  keywords: createKeywords(['space station', 'space exploration', 'orbital mechanics', 'space engineering', '3D simulation', 'solar panels', 'life support', 'spacecraft', 'astronomy', 'space technology']),
  openGraph: {
    title: 'Space Station Builder 3D - Game Xây Dựng Trạm Vũ Trụ 3D',
    description: 'Trải nghiệm 3D tương tác xây dựng trạm vũ trụ với công nghệ tiên tiến và khám phá không gian',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&h=600&fit=crop',
        width: 1200,
        height: 600,
        alt: 'Space Station Builder 3D Game',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Space Station Builder 3D - Game Xây Dựng Trạm Vũ Trụ 3D',
    description: 'Trải nghiệm 3D tương tác xây dựng trạm vũ trụ với công nghệ tiên tiến và khám phá không gian',
  },
};

export default function SpaceStationBuilder3DPage() {
  return (
    <div className="min-h-screen">
      <SpaceStationBuilder3D />
    </div>
  );
}