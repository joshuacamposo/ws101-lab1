export function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

export function toKebabCase(text: string): string {
  return text.toLowerCase().replace(/\s+/g, "-");
}

export function countVowels(text: string): number {
  return (text.match(/[aeiou]/gi) || []).length;
}