import { Heading } from '@/types';

export const getHeadings = (source: string): Heading[] => {
  const headingLines = source.match(/<h[2-4].*?>(.*?)<\/h[2-4]>/g) || [];

  return headingLines.map((line) => {
    const headingText = line.replace(/<h[2-4].*?>/g, '').replace(/<\/h[2-4]>/g, '');
    const headingLevel = Number(line.match(/<h([2-4])/)?.slice(1)[0]);
    const headingId = headingText
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    return {
      text: headingText,
      id: headingId,
      level: headingLevel,
    };
  });
};
