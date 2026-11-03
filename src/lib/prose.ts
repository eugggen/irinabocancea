export function proseParagraphs(paragraphs: string[]): string[] {
  return paragraphs.filter((paragraph) => paragraph.trim().length > 0);
}
