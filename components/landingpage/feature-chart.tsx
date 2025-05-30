"use client"

import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Area, AreaChart, CartesianGrid } from 'recharts'
import React from 'react'

const FeatureChart = () => {
  return (
    <div className="relative h-[50%]">
      <div className="absolute z-10 max-w-lg px-6 pr-12 pt-6 md:px-12 md:pt-8">
        <p className="text-2xl font-semibold mb-3 bg-black dark:bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent">
          Monitor your application&apos;s analytics always up-to-date.</p>
      </div>
      <MonitoringChart />
    </div>
  )
}
export default FeatureChart

const MonitoringChart = () => {
  return (
    <ChartContainer className="h-64 aspect-auto" config={chartConfig}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 0,
          right: 0,
        }}>
        <defs>
          <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
            <stop offset="55%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
            <stop offset="55%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} horizontal={false} />
        <ChartTooltip active cursor={false} content={<ChartTooltipContent className="dark:bg-muted" />} />
        <Area strokeWidth={2} dataKey="mobile" type="stepBefore" fill="url(#fillMobile)" fillOpacity={0.1} stroke="var(--color-mobile)" stackId="a" />
        <Area strokeWidth={2} dataKey="desktop" type="stepBefore" fill="url(#fillDesktop)" fillOpacity={0.1} stroke="var(--color-desktop)" stackId="a" />
      </AreaChart>
    </ChartContainer>
  )
}


const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#2563eb',
  },
  mobile: {
    label: 'Mobile',
    color: '#60a5fa',
  },
} satisfies ChartConfig

const chartData = [
  { month: 'May', desktop: 56, mobile: 224 },
  { month: 'June', desktop: 56, mobile: 224 },
  { month: 'January', desktop: 126, mobile: 252 },
  { month: 'February', desktop: 205, mobile: 410 },
  { month: 'March', desktop: 200, mobile: 126 },
  { month: 'April', desktop: 400, mobile: 800 },
]