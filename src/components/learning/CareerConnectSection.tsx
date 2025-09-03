import { Briefcase, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CareerConnectSectionProps {
  name: string;
  title: string;
  company: string;
  imageUrl: string;
  quote: string;
  interviewUrl?: string;
}

export function CareerConnectSection({
  name,
  title,
  company,
  imageUrl,
  quote,
  interviewUrl,
}: CareerConnectSectionProps) {
  return (
    <Card className="bg-purple-900/50 border-purple-700">
      <CardHeader>
        <CardTitle className="flex items-center text-xl text-purple-300">
          <Briefcase className="w-6 h-6 mr-3" />
          Trích dẫn chia sẻ (Nội dung Minh Họa)
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0">
          <Image
            src={imageUrl}
            alt={`Ảnh của ${name}`}
            width={120}
            height={120}
            className="rounded-full object-cover border-4 border-purple-500"
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          <p className="text-purple-300">
            {title} tại {company}
          </p>
          <blockquote className="mt-4 p-4 border-l-4 border-purple-500 bg-purple-900/70 rounded-r-lg">
            <p className="text-gray-300 italic">&ldquo;{quote}&rdquo;</p>
          </blockquote>
          {interviewUrl && (
            <Button asChild className="mt-4 bg-purple-600 hover:bg-purple-700">
              <Link href={interviewUrl}>
                <MessageSquare className="w-4 h-4 mr-2" />
                Xem phỏng vấn
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
