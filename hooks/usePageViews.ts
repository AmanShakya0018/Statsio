import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface PageView {
  date: string;
  count: number;
}

const fetchPageViews = async (siteId: string): Promise<PageView[]> => {
  const res = await axios.get(`/api/sites/${siteId}/analytics/timeseries`);
  return res.data;
};

const processPageViews = (data: PageView[], range: "7d" | "all") => {
  if (range === "7d") {
    const today = new Date();
    const last7Days = Array.from({ length: 7 }).map((_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() - (6 - i));
      return date.toISOString().split("T")[0];
    });

    const countsByDate = Object.fromEntries(
      data.map((entry) => [entry.date, entry.count]),
    );

    const padded = last7Days.map((date) => ({
      date,
      count: countsByDate[date] || 0,
    }));

    return {
      data: padded,
      total: padded.reduce((sum, entry) => sum + entry.count, 0),
    };
  } else {
    const sorted = [...data].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );
    return {
      data: sorted,
      total: sorted.reduce((sum, entry) => sum + entry.count, 0),
    };
  }
};

export function usePageViews(siteId: string, range: "7d" | "all") {
  const { data: rawData, ...rest } = useQuery({
    queryKey: ["pageViews", siteId],
    queryFn: () => fetchPageViews(siteId),
    enabled: !!siteId,
  });

  const processed = rawData
    ? processPageViews(rawData, range)
    : { data: [], total: 0 };

  return {
    ...rest,
    data: processed.data,
    total: processed.total,
  };
}
