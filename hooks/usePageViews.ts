import { useEffect, useState } from "react";

interface PageView {
  date: string;
  count: number;
}

export function usePageViews(siteId: string) {
  const [data, setData] = useState<PageView[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/sites/${siteId}/analytics/timeseries`);
      const json = await res.json();

      const today = new Date();
      const last7Days = Array.from({ length: 7 }).map((_, i) => {
        const date = new Date(today);
        date.setDate(today.getDate() - (6 - i));
        return date.toISOString().split("T")[0];
      });

      const countsByDate = Object.fromEntries(
        json.map((entry: PageView) => [entry.date, entry.count])
      );

      const padded = last7Days.map((date) => ({
        date,
        count: countsByDate[date] || 0,
      }));

      setData(padded);
      setTotal(padded.reduce((sum, entry) => sum + entry.count, 0));
    }

    fetchData();
  }, [siteId]);

  return { data, total };
}
