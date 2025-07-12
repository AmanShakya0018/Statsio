"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  CartesianGrid,
} from "recharts";
import { ArrowUp, ArrowDown } from "lucide-react";
import { usePageViews } from "@/hooks/usePageViews";
import { useUniqueVisitors } from "@/hooks/useUniqueVisitors";
import { useState } from "react";
import CustomSelect from "./custom-select";

interface AnalyticsCustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    name: string;
    dataKey: string;
    payload: { date: string; count: number };
    stroke?: string;
    fill?: string;
    unit?: string;
  }>;
  label?: string;
}

export default function AnalyticsChart({ siteId }: { siteId: string }) {
  const [range, setRange] = useState<"7d" | "all">("7d");

  const { data: pageViewsData, total: pageViewsTotal } = usePageViews(
    siteId,
    range,
  );
  const { data: visitorsData, total: visitorsTotal } = useUniqueVisitors(
    siteId,
    range,
  );

  const [activeMetric, setActiveMetric] = useState<"pageviews" | "visitors">(
    "pageviews",
  );

  const activeData =
    activeMetric === "pageviews" ? pageViewsData : visitorsData;

  const current7 = activeData.slice(-7);
  const previous7 = activeData.slice(-14, -7);
  const current7Sum = current7.reduce((sum, d) => sum + d.count, 0);
  const previous7Sum = previous7.reduce((sum, d) => sum + d.count, 0);
  const hasEnoughData = activeData.length >= 14;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const renderArrow = () => {
    if (hasEnoughData) {
      if (current7Sum > previous7Sum) {
        return (
          <span className="flex items-center rounded bg-green-950 px-2 py-1 text-green-500">
            <ArrowUp className="h-4 w-4" />
          </span>
        );
      } else if (current7Sum < previous7Sum) {
        return (
          <span className="flex items-center rounded bg-red-950 px-2 py-1 text-red-500">
            <ArrowDown className="h-4 w-4" />
          </span>
        );
      }
    }

    if (activeData.length >= 7 && previous7Sum === 0 && current7Sum > 0) {
      return (
        <span className="flex items-center rounded bg-green-950 px-2 py-1 text-green-500">
          <ArrowUp className="h-4 w-4" />
        </span>
      );
    }

    return null;
  };

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: AnalyticsCustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-md border border-neutral-800 bg-neutral-950 p-3 shadow-md">
          <div className="flex items-center gap-2 font-medium text-zinc-500">
            <span className="h-2 w-2 rounded-full bg-[#5b98ff]"></span>
            <p className="text-sm capitalize text-zinc-200">
              {activeMetric === "visitors" ? "Visitors" : "Page Views"}
            </p>
            <p className="text-white">{payload[0].value}</p>
          </div>
          <p className="mt-1 text-sm text-zinc-400">
            {label ? formatDate(label) : "N/A Date"}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full overflow-hidden rounded-xl border border-zinc-800 bg-black">
      <div className="grid grid-cols-1 divide-y divide-zinc-800">
        <div className="border-b-px flex flex-col items-start justify-between border-neutral-800 md:flex-row">
          <div className="flex">
            {["pageviews", "visitors"].map((metric) => (
              <div key={metric} className="border-r border-neutral-800 pt-6">
                <button
                  onClick={() =>
                    setActiveMetric(metric as "visitors" | "pageviews")
                  }
                  className={`flex w-48 flex-col items-start border-b-2 ${
                    activeMetric === metric
                      ? "border-zinc-300"
                      : "border-transparent"
                  }`}
                >
                  <div
                    className={`ml-4 pb-3 transition-opacity duration-200 ${
                      activeMetric === metric ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    <p className="flex text-sm font-semibold capitalize text-zinc-400">
                      {metric === "visitors" ? "Visitors" : "Page Views"}
                    </p>
                    <div className="mt-1 flex items-center space-x-4">
                      <p className="text-4xl font-semibold text-white">
                        {metric === "visitors" ? visitorsTotal : pageViewsTotal}
                      </p>
                      {range === "7d" ? (
                        renderArrow()
                      ) : (
                        <span className="flex items-center rounded bg-green-950 px-2 py-1 text-green-500">
                          <ArrowUp className="h-4 w-4" />
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
          <div className="p-2">
            <CustomSelect value={range} onValueChange={setRange} />
          </div>
        </div>

        <div className="h-[400px] w-full p-4">
          <ResponsiveContainer width="100%" height="100%" className="focus">
            <LineChart
              data={activeData}
              margin={{ top: 40, right: 20, left: 0, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#e5e7eb"
                className="stroke-[#2a2a2a]"
              />

              <defs>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5b98ff" stopOpacity={0.4} />
                  <stop offset="50%" stopColor="#5b98ff" stopOpacity={0.1} />
                  <stop offset="100%" stopColor="#5b98ff" stopOpacity={0} />
                </linearGradient>
              </defs>

              <XAxis
                dataKey="date"
                tickFormatter={formatDate}
                tick={{ fill: "#6b7280", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                allowDecimals={false}
                tick={{ fill: "#6b7280", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip content={<CustomTooltip />} />

              <Area
                type="monotone"
                dataKey="count"
                stroke="none"
                fill="url(#colorPv)"
                fillOpacity={0.8}
              />
              <Line
                type="linear"
                dataKey="count"
                stroke="#5b98ff"
                strokeWidth={2}
                dot={false}
                activeDot={{
                  r: 6,
                  fill: "#5b98ff",
                  stroke: "#fff",
                  strokeWidth: 2,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
