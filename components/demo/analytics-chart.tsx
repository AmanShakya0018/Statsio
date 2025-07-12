"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  ReferenceLine,
  ReferenceDot,
} from "recharts";
import { ArrowUp, Clock } from "lucide-react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const chartData = [
  { date: "Jul 4", count: 52 },
  { date: "Jul 5", count: 19 },
  { date: "Jul 6", count: 17 },
  { date: "Jul 7", count: 76 },
  { date: "Jul 8", count: 155 },
  { date: "Jul 9", count: 136 },
  { date: "Jul 10", count: 42 },
];

export default function StaticAnalyticsChart() {
  const july8DataPoint = chartData.find((d) => d.date === "Jul 8");

  return (
    <div className="pointer-events-none w-full overflow-hidden rounded-xl border border-neutral-800 bg-black">
      <div className="grid grid-cols-1 divide-y divide-zinc-800">
        <div className="flex flex-row items-start justify-between">
          <div className="flex">
            <div className="border-r border-zinc-800 pt-6">
              <div className="flex w-48 flex-col items-start border-b-2 border-transparent">
                <div className="ml-4 pb-3 opacity-70">
                  <p className="flex text-sm font-medium capitalize text-zinc-400">
                    Page Views
                  </p>
                  <div className="mt-1 flex items-center space-x-4">
                    <p className="text-4xl font-semibold text-white">3993</p>
                    <span className="flex items-center rounded bg-green-950 px-2 py-1 text-green-500">
                      <ArrowUp className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-r border-zinc-800 pt-6">
              <div className="flex w-48 flex-col items-start border-b-2 border-zinc-300">
                <div className="ml-4 pb-3">
                  <p className="flex text-sm font-medium capitalize text-zinc-400">
                    Visitors
                  </p>
                  <div className="mt-1 flex items-center space-x-4">
                    <p className="text-4xl font-semibold text-white">497</p>
                    <span className="flex items-center rounded bg-green-950 px-2 py-1 text-green-500">
                      <ArrowUp className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="flex w-[140px] items-center justify-between rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-[13px] text-neutral-100">
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                Last 7 Days
              </div>
              <MdOutlineKeyboardArrowDown className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="relative h-[400px] w-full p-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 40, right: 20, left: 0, bottom: 20 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#2a2a2a"
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

              <Area
                type="monotone"
                dataKey="count"
                stroke="none"
                fill="url(#colorPv)"
                fillOpacity={0.8}
                isAnimationActive={false}
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
                isAnimationActive={false}
              />
              {july8DataPoint && (
                <>
                  <ReferenceLine x={july8DataPoint.date} stroke="#a3a3a3" />
                  <ReferenceDot
                    x={july8DataPoint.date}
                    y={july8DataPoint.count}
                    r={6}
                    fill="#5b98ff"
                    stroke="#fff"
                    strokeWidth={2}
                  />
                </>
              )}
            </LineChart>
          </ResponsiveContainer>
          <div className="absolute right-[17.5rem] top-24 rounded-md border border-neutral-800 bg-neutral-950 p-3 shadow-md">
            <div className="flex items-center gap-2 font-medium text-zinc-500">
              <span className="h-2 w-2 rounded-full bg-[#5b98ff]"></span>
              <p className="text-sm capitalize text-zinc-200">Visitors</p>
              <p className="text-white">155</p>
            </div>
            <p className="mt-1 text-sm text-zinc-400">Jul 8</p>
          </div>
        </div>
      </div>
    </div>
  );
}
