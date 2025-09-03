import { Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface VietnamContextBoxProps {
  title: string;
  content: string[];
}

export function VietnamContextBox({ title, content }: VietnamContextBoxProps) {
  if (!content || content.length === 0) {
    return null;
  }

  return (
    <Card className="bg-sky-900/50 border-sky-700">
      <CardHeader>
        <CardTitle className="flex items-center text-xl text-sky-300">
          <Globe className="w-6 h-6 mr-3" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 list-disc list-inside text-gray-300">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
