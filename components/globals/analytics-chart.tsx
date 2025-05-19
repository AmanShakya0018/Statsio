"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  CartesianGrid,
  type TooltipProps,
} from "recharts"
import { ArrowUp, ArrowDown } from "lucide-react"
import { usePageViews } from "@/hooks/usePageViews"
import { useUniqueVisitors } from "@/hooks/useUniqueVisitors"
import { useState } from "react"

export default function AnalyticsChart({ siteId }: { siteId: string }) {
  const { data: pageViewsData, total: pageViewsTotal } = usePageViews(siteId)
  const { data: visitorsData, total: visitorsTotal } = useUniqueVisitors(siteId)
  const [activeMetric, setActiveMetric] = useState<"pageviews" | "visitors">("visitors")

  const activeData = activeMetric === "pageviews" ? pageViewsData : visitorsData

  const current7 = activeData.slice(-7)
  const previous7 = activeData.slice(-14, -7)
  const current7Sum = current7.reduce((sum, d) => sum + d.count, 0)
  const previous7Sum = previous7.reduce((sum, d) => sum + d.count, 0)
  const hasEnoughData = activeData.length >= 14

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  }

  const renderArrow = () => {
    if (!hasEnoughData) return null
    const isUp = current7Sum > previous7Sum
    const isZero = previous7Sum === 0 && current7Sum > 0

    return (
      <span
        className={`flex items-center ${isUp || isZero ? "text-green-500 bg-green-200 dark:bg-green-950" : "text-red-500 bg-red-200 dark:bg-red-950"
          } rounded px-2 py-1`}
      >
        {isUp || isZero ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
      </span>
    )
  }

  const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 rounded-md p-3 shadow-md">
          <div className="text-zinc-700 dark:text-zinc-500 font-medium flex gap-2 items-center">
            <span className="w-2 h-2 bg-[#5b98ff] rounded-full"></span>
            <p className="text-sm text-zinc-900 dark:text-zinc-200 capitalize">
              {activeMetric === "visitors" ? "Visitors" : "Page Views"}
            </p>
            <p className="text-black dark:text-white">{payload[0].value}</p>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">{formatDate(label)}</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="w-full rounded-xl bg-white dark:bg-black border border-neutral-200 dark:border-zinc-800 overflow-hidden">
      <div className="grid grid-cols-1 divide-y divide-neutral-200 dark:divide-zinc-800">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex space-x-6">
              {["visitors", "pageviews"].map((metric) => (
                <button
                  key={metric}
                  onClick={() => setActiveMetric(metric as "visitors" | "pageviews")}
                  className={`flex flex-col items-start ${activeMetric === metric ? "border-b-2 border-white dark:border-zinc-300" : ""
                    }`}
                >
                  <p className="text-zinc-500 font-semibold dark:text-zinc-400 text-sm capitalize">
                    {metric === "visitors" ? "Visitors" : "Page Views"}
                  </p>
                  <div className="flex items-center space-x-4 mt-1">
                    <p className="text-4xl font-semibold text-black dark:text-white">
                      {metric === "visitors" ? visitorsTotal : pageViewsTotal}
                    </p>
                    {activeMetric === metric && renderArrow()}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="h-[300px] w-full p-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={activeData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" className="dark:stroke-[#2a2a2a]" />

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

              <Area type="monotone" dataKey="count" stroke="none" fill="url(#colorPv)" fillOpacity={1} />
              <Line
                type="linear"
                dataKey="count"
                stroke="#5b98ff"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, fill: "#5b98ff", stroke: "#fff", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
