import { Metadata } from 'next';
import OceanConservation3D from '@/components/games/OceanConservation3D';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('Ocean Conservation 3D - Game Bảo Vệ Đại Dương 3D'),
  description: createDescription('Game mô phỏng 3D về bảo vệ đại dương với hệ sinh thái biển, dọn rác thải nhựa, và cứu hộ sinh vật biển. Học về môi trường biển và tác động của ô nhiễm nhựa.'),
  keywords: createKeywords(['ocean conservation', 'marine ecosystem', 'plastic pollution', 'environmental game', '3D simulation', 'marine biology', 'sustainability', 'ocean cleanup', 'sea animals', 'underwater exploration']),
  openGraph: {
    title: 'Ocean Conservation 3D - Game Bảo Vệ Đại Dương 3D',
    description: 'Trải nghiệm 3D tương tác về bảo vệ đại dương, dọn rác thải nhựa và cứu hộ sinh vật biển',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&h=600&fit=crop',
        width: 1200,
        height: 600,
        alt: 'Ocean Conservation 3D Game',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ocean Conservation 3D - Game Bảo Vệ Đại Dương 3D',
    description: 'Trải nghiệm 3D tương tác về bảo vệ đại dương, dọn rác thải nhựa và cứu hộ sinh vật biển',
  },
};

export default function OceanConservation3DPage() {
  return (
    <div className="min-h-screen">
      <OceanConservation3D />
    </div>
  );
}