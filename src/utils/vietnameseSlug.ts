import { visit } from 'unist-util-visit';
import type { Root, Element } from 'hast';

/**
 * Custom slug function that preserves Vietnamese characters
 * @param text The heading text to create a slug from
 * @returns A URL-safe slug that preserves Vietnamese characters
 */
export function createVietnameseSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    // Keep Vietnamese characters, numbers, letters, spaces, and basic punctuation
    .replace(/[^\wàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ\s-]/g, '')
    // Replace spaces and multiple dashes with single dash
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    // Remove leading/trailing dashes
    .replace(/^-+|-+$/g, '');
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