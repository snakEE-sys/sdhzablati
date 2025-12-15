export function useDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleString("cs-cz", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
