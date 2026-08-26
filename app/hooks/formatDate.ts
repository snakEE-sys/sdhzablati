export function formatDate(date: Date) {
  return date.toLocaleString("cs-CZ", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
