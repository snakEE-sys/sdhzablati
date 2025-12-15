export function useTime(timeString: string) {
  const dummyDate = "2000-01-01";
  const fullDateTimeString = `${dummyDate}T${timeString}`;
  const time = new Date(fullDateTimeString);
  return time.toLocaleTimeString("cs-cz", {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  });
}
