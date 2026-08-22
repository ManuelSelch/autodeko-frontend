export function splitProductTitle(title: string) {
  const [firstWord = "", ...remainingWords] = title.trim().split(/\s+/);

  return {
    firstWord,
    remainingTitle: remainingWords.join(" "),
  };
}
