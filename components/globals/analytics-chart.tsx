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

export default function AnalyticsChart({ siteId }: { siteId: string }) {
  const { data, total } = usePageViews(siteId)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
  }

  const current7 = data.slice(-7)
  const previous7 = data.slice(-14, -7)

  const current7Sum = current7.reduce((sum, d) => sum + d.count, 0)
  const previous7Sum = previous7.reduce((sum, d) => sum + d.count, 0)

  const hasEnoughData = data.length >= 14

  const renderArrow = () => {
    if (hasEnoughData) {
      if (current7Sum > previous7Sum) {
        return (
          <span className="flex items-center text-green-500 bg-green-950 rounded px-2 py-1">
            <ArrowUp className="w-4 h-4" />
          </span>
        )
      } else {
        return (
          <span className="flex items-center text-red-500 bg-red-950 rounded px-2 py-1">
            <ArrowDown className="w-4 h-4" />
          </span>
        )
      }
    } else if (data.length >= 7 && previous7Sum === 0 && current7Sum > 0) {
      return (
        <span className="flex items-center text-green-500 bg-green-950 rounded px-2 py-1">
          <ArrowUp className="w-4 h-4" />
        </span>
      )
    } else {
      return null
    }
  }

  const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-neutral-950 border flex flex-col items-center border-neutral-800 rounded-md p-3">
          <div className="text-zinc-500 font-medium flex gap-2 items-center">
            <span className="w-2 h-2 bg-[#5b98ff] rounded-full"></span>
            <p className="text-sm text-zinc-200">Page Views</p>
            <p className="text-white">{payload[0].value}</p>
          </div>
          <p className="text-gray-400 text-sm mt-1">{formatDate(label)}</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="w-full rounded-xl bg-black border border-zinc-800 overflow-hidden">
      <div className="grid grid-cols-1 divide-y divide-zinc-800">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-zinc-400 text-sm">Page Views</p>
              <div className="flex items-center space-x-3 mt-1">
                <p className="text-4xl font-semibold text-white">{total}</p>
                {renderArrow()}
              </div>
            </div>
          </div>
        </div>

        <div className="h-[300px] w-full p-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2a2a2a" />
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
                tick={{ fill: "#9ca3af", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis allowDecimals={false} tick={{ fill: "#9ca3af", fontSize: 12 }} axisLine={false} tickLine={false} />

              <Tooltip content={<CustomTooltip />} />

              <Area type="monotone" dataKey="count" stroke="none" fill="url(#colorPv)" fillOpacity={1} />

              <Line
                type="linear"
                dataKey="count"
                stroke="#5b98ff"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, fill: "#5b98ff", stroke: "#111", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
