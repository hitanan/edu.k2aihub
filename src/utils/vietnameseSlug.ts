import { visit } from 'unist-util-visit';
import type { Root, Element } from 'hast';

/**
 * Create URL-safe, non-diacritic Vietnamese slug (ASCII-only)
 * - Remove all Vietnamese diacritics (including Đ/đ -> d)
 * - Keep a-z, 0-9 and dashes
 * - Collapse spaces to single dash
 */
export function createVietnameseSlug(text: string): string {
  if (!text) return '';

  // Normalize and strip diacritics
  const withoutDiacritics = text
    .toLowerCase()
    .trim()
    // Normalize to NFD form and remove combining marks
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    // Vietnamese special letters
    .replace(/đ/g, 'd');

  return (
    withoutDiacritics
      // Remove all non-alphanumeric characters except spaces and dashes
      .replace(/[^a-z0-9\s-]/g, '')
      // Replace whitespace with dashes
      .replace(/\s+/g, '-')
      // Collapse multiple dashes
      .replace(/-+/g, '-')
      // Trim leading/trailing dashes
      .replace(/^-+|-+$/g, '')
  );
}

/**
 * Custom rehype plugin to add Vietnamese-friendly IDs to headings
 */
export function rehypeVietnameseSlug() {
  return (tree: Root) => {
    visit(tree, 'element', (node: Element) => {
      if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName)) {
        // Extract text content from the heading
        const textContent = extractTextContent(node);
        if (textContent) {
          const id = createVietnameseSlug(textContent);
          if (id) {
            node.properties = node.properties || {};
            node.properties.id = id;
          }
        }
      }
    });
  };
}

/**
 * Extract text content from a hast node
 */
function extractTextContent(node: Element | { type: string; value?: string; children?: unknown[] }): string {
  if ('value' in node && typeof node.value === 'string') {
    return node.value;
  }

  if ('children' in node && Array.isArray(node.children)) {
    return node.children
      .map((child) => extractTextContent(child as Element | { type: string; value?: string; children?: unknown[] }))
      .join('');
  }

  return '';
}

/**
 * Generate table of contents from markdown content
 * @param content Raw markdown content
 * @returns Array of heading objects with Vietnamese-friendly slugs
 */
export function generateTableOfContents(content: string): Array<{
  id: string;
  title: string;
  level: number;
}> {
  const headings: Array<{ id: string; title: string; level: number }> = [];
  const lines = content.split('\n');

  for (const line of lines) {
    const match = line.match(/^(#{1,6})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const title = match[2].trim();
      const id = createVietnameseSlug(title);

      if (id && title) {
        headings.push({
          id,
          title,
          level,
        });
      }
    }
  }

  return headings;
}
