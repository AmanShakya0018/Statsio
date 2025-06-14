import { useEffect, useState } from "react";

interface Visitor {
  date: string;
  count: number;
}

export function useUniqueVisitors(siteId: string, range: "7d" | "all") {
  const [data, setData] = useState<Visitor[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/sites/${siteId}/analytics/uniques`);
      const json: Visitor[] = await res.json();

      if (range === "7d") {
        const today = new Date();
        const last7Days = Array.from({ length: 7 }).map((_, i) => {
          const date = new Date(today);
          date.setDate(today.getDate() - (6 - i));
          return date.toISOString().split("T")[0];
        });

        const countsByDate = Object.fromEntries(
          json.map((entry) => [entry.date, entry.count])
        );

        const padded = last7Days.map((date) => ({
          date,
          count: countsByDate[date] || 0,
        }));

        setData(padded);
        setTotal(padded.reduce((sum, entry) => sum + entry.count, 0));
      } else {
        const sorted = json.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        setData(sorted);
        setTotal(sorted.reduce((sum, entry) => sum + entry.count, 0));
      }
    }

    fetchData();
  }, [siteId, range]);

  return { data, total };
}
