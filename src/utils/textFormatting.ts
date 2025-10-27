/**
 * Text formatting utilities for educational content
 * Handles paragraph splitting, truncation, and display optimization
 */

/**
 * Splits long text into paragraphs by sentences for better readability
 * Strategy: Split by periods followed by space, group sentences into paragraphs
 *
 * @param text - The text to split into paragraphs
 * @param sentencesPerParagraph - Number of sentences per paragraph (default: 3)
 * @returns Array of paragraph strings
 */
export function splitIntoParagraphs(text: string | undefined, sentencesPerParagraph: number = 3): string[] {
  if (!text) return [];

  // Normalize whitespace
  const normalized = text.replace(/\s+/g, ' ').trim();

  // Split by sentence endings (., !, ?) followed by space and capital letter
  // This regex preserves the punctuation
  const sentences = normalized.split(/(?<=[.!?])\s+(?=[A-Z])/);

  // Group sentences into paragraphs
  const paragraphs: string[] = [];
  for (let i = 0; i < sentences.length; i += sentencesPerParagraph) {
    const paragraph = sentences.slice(i, i + sentencesPerParagraph).join(' ');
    if (paragraph.trim()) {
      paragraphs.push(paragraph.trim());
    }
  }

  return paragraphs;
}

/**
 * Truncates text at word boundary with ellipsis
 * Used for card previews and summaries
 *
 * @param text - The text to truncate
 * @param maxChars - Maximum character limit (default: 220)
 * @returns Truncated text with ellipsis if needed
 */
export function truncateText(text: string | undefined, maxChars: number = 220): string {
  if (!text) return '';

  const plain = text.replace(/\s+/g, ' ').trim();

  if (plain.length <= maxChars) return plain;

  const clipped = plain.slice(0, maxChars);
  const lastSpace = clipped.lastIndexOf(' ');

  return (lastSpace > 0 ? clipped.slice(0, lastSpace) : clipped) + '...';
}

/**
 * Formats FAQ text by splitting into readable paragraphs
 *
 * @param text - FAQ answer text
 * @returns Array of paragraph strings
 */
export function formatFAQAnswer(text: string | undefined): string[] {
  return splitIntoParagraphs(text, 2); // 2 sentences per paragraph for FAQs
}

/**
 * Formats learning objective text for display
 *
 * @param text - Learning objective text
 * @returns Formatted text ready for display
 */
export function formatLearningObjective(text: string | undefined): string {
  if (!text) return '';
  return text.replace(/\s+/g, ' ').trim();
}
