export function formatTimeAgo(timestamp: string): string {
  const currentDate: Date = new Date("2025-11-20");
  const givenDate: Date = new Date(timestamp);

  const days = currentDate.getDate() - givenDate.getDate();
  const hours = currentDate.getHours() - givenDate.getHours();
  const mins = currentDate.getMinutes() - givenDate.getMinutes();
  // const days = remTime / (1000 * 60 * 60 * 24);
  // const hours = (remTime / (1000 * 60)) % 24;
  // const mins = (remTime / (1000 * 60)) % 60;

  if (days === 1) return `Yesterday`;
  else if (days > 1) return `${days} days ago`;
  else if (hours > 0) return `${hours} hours ago`;
  else return `${mins} minutes ago`;
}
