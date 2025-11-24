export interface Activity {
  date: string;
  count: number;
  level: number;
}

// generate dummy data for full year (Jan–Dec 2025)
export const userActivityData: Activity[] = Array.from({ length: 365 }, (_, i) => {
  const date = new Date(2025, 0, 1 + i);
  const count = Math.floor(Math.random() * 15);
  const level = count>10?4: Math.max(2,Number(count/2.5))

  return {
    date: date.toISOString().split("T")[0],
    count,
    level,
  };
});


