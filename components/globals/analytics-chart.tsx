// components/AnalyticsChart.tsx
"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";
import { usePageViews } from "@/hooks/usePageViews";

export default function AnalyticsChart({ siteId }: { siteId: string }) {
  const { data, total } = usePageViews(siteId);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="w-full rounded-xl mb-3 bg-black px-6 py-6 space-y-6">
      <div>
        <p className="text-sm text-zinc-400">Page Views</p>
        <p className="text-3xl font-semibold text-white">{total}</p>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#5b98ff" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#5b98ff" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="date"
              tickFormatter={formatDate}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              allowDecimals={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{ backgroundColor: "#171717", border: "none" }}
              labelFormatter={formatDate}
              labelStyle={{ color: "#ffffff" }}
              itemStyle={{ color: "#ffffff" }}
            />

            <Area
              type="monotone"
              dataKey="count"
              stroke={undefined}
              fill="url(#colorPv)"
            />

            <Line
              type="monotone"
              dataKey="count"
              stroke="#5b98ff"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
