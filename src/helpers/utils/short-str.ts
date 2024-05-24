export function shortStr(
  text?: string | null,
  limit: number = 100,
  extendable: boolean = false
): string {
  if (!text) return "";

  if (text.length <= limit) {
    return text;
  }

  const truncatedText = text.slice(0, limit);
  return extendable ? `${truncatedText}...` : truncatedText;
}
