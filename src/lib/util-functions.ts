export function sanitizeText(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "\n$1\n") // Bold to new lines
    .replace(/\*(.*?)\*/g, "$1") // Remove italics
    .replace(/\s+/g, " ") // Remove extra spaces
    .replace(/\.([A-Za-z])/g, ".\n$1") // Add new line after periods
    .trim();
}
