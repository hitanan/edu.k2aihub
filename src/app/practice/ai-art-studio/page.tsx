import { Metadata } from 'next';
import { createGameMetadata } from '@/utils/seo';
import AIArtStudioGame from '@/components/practice/individual/AIArtStudioGame';

export const metadata: Metadata = createGameMetadata('ai-art-studio');

export default function AIArtStudioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">🎨 Xưởng Nghệ Thuật AI</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tạo ra những tác phẩm nghệ thuật tuyệt đẹp với sức mạnh của AI. Thử nghiệm với prompts và khám phá vô số khả
            năng sáng tạo!
          </p>
        </div>

        <AIArtStudioGame />
      </div>
    </div>
  );
}
