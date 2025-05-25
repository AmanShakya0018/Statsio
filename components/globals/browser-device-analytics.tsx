"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Maximize2 } from "lucide-react"
import { GoGraph } from "react-icons/go"
import axios from "axios"
import { PiDotsThreeBold } from "react-icons/pi"
import { FiDownload } from "react-icons/fi"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { exportToCSV } from "@/lib/export-csv"
import { TextShimmer } from "../ui/text-shimmer"

interface Browser {
  browser: string
  count: number
}

interface Device {
  device: string
  count: number
}

interface BrowsersAndDevicesAnalyticsProps {
  siteId: string
}

export default function BrowsersAndDevicesAnalytics({ siteId }: BrowsersAndDevicesAnalyticsProps) {
  const [browsers, setBrowsers] = useState<Browser[]>([])
  const [devices, setDevices] = useState<Device[]>([])
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"browsers" | "devices">("browsers")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [browsersResponse, devicesResponse] = await Promise.all([
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/sites/${siteId}/analytics/browser`),
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/sites/${siteId}/analytics/devices`)
        ])
        setBrowsers(browsersResponse.data)
        setDevices(devicesResponse.data)
      } catch (error) {
        console.error("Error fetching analytics data:", error)
      } finally {
        setIsLoading(false);
      }
    }

    fetchData()
  }, [siteId])

  const browserMaxCount = Math.max(...browsers.map((browser) => browser.count))
  const browserTotalCount = browsers.reduce((acc, curr) => acc + curr.count, 0)

  const deviceMaxCount = Math.max(...devices.map((device) => device.count))
  const deviceTotalCount = devices.reduce((acc, curr) => acc + curr.count, 0)

  const currentData = activeTab === "browsers" ? browsers : devices
  const maxCount = activeTab === "browsers" ? browserMaxCount : deviceMaxCount
  const totalCount = activeTab === "browsers" ? browserTotalCount : deviceTotalCount

  return (
    <section>
      <div className="bg-white dark:bg-black rounded-lg overflow-hidden shadow border border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between px-4 py-5 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveTab("browsers")}
              className={`px-4 py-1 text-sm font-semibold rounded-md ${activeTab === "browsers" ? "bg-neutral-200 dark:bg-zinc-900 text-zinc-900 dark:text-white" : "text-zinc-500 dark:text-zinc-400"}`}
            >
              Browsers
            </button>
            <button
              onClick={() => setActiveTab("devices")}
              className={`px-4 py-1 text-sm font-semibold rounded-md ${activeTab === "devices" ? "bg-neutral-200 dark:bg-zinc-900 text-zinc-900 dark:text-white" : "text-zinc-500 dark:text-zinc-400"}`}
            >
              Devices
            </button>
          </div>
          <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">PAGE VIEWS</span>
        </div>
        {isLoading ? (
          <div className="flex flex-col items-center justify-center min-h-[13.35rem]">
            <TextShimmer className='text-sm' duration={1}>
              Loading...
            </TextShimmer>
          </div>
        ) : currentData.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[13.35rem]">
            <div className="mb-2">
              <GoGraph className="h-5 w-5 text-neutral-500" />
            </div>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">No data found for selected period.</p>
          </div>
        ) : (
          <div className="relative">
            <ul>
              {currentData.slice(0, 4).map((item) => (
                <li
                  key={activeTab === "browsers" ? (item as Browser).browser : (item as Device).device}
                  className="relative h-8 flex items-center my-2 mx-2"
                >
                  <div
                    className="absolute left-0 top-0 h-full bg-neutral-100 dark:bg-zinc-900 rounded-md"
                    style={{ width: `${(item.count / maxCount) * 100}%` }}
                  />
                  <div className="flex items-center justify-between w-full px-4 relative z-10">
                    <div className="truncate text-sm text-zinc-900 dark:text-white">
                      {activeTab === "browsers" ? (item as Browser).browser : (item as Device).device}
                    </div>
                    <div className="text-sm text-zinc-900 dark:text-white">
                      <span className="font-semibold">{((item.count / totalCount) * 100).toFixed(0)}</span>
                      <span className="font-normal">%</span>
                    </div>
                  </div>
                </li>
              ))}
              {Array.from({ length: 4 - currentData.slice(0, 4).length }).map((_, idx) => (
                <li key={`empty-${idx}`} className="relative h-8 flex items-center my-2 mx-2 opacity-0 pointer-events-none">
                  <div className="w-full h-full" />
                </li>
              ))}
              <>
                <div className="absolute bottom-12 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none z-10 rounded-b-lg" />
                <div className="flex flex-row gap-2 w-full items-center justify-center px-4 pb-3 pt-2 text-sm text-zinc-500 dark:text-zinc-400">
                  <button onClick={() => setIsModalOpen(true)} className="flex text-xs text-black dark:text-white border border-neutral-300 dark:border-neutral-800 px-2 py-1 rounded-2xl items-center space-x-2">
                    <p>View All</p>
                    <Maximize2 className="h-3 w-3" />
                  </button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="text-black dark:text-white border border-neutral-300 dark:border-neutral-800 px-1 rounded-2xl items-center space-x-2">
                        <PiDotsThreeBold className="h-6 w-6" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white dark:bg-black" align="end">
                      <DropdownMenuItem asChild>
                        <button
                          onClick={() =>
                            exportToCSV(
                              activeTab === "browsers" ? browsers : devices,
                              `${activeTab}-analytics`
                            )
                          }
                          className="w-full"
                        >
                          <FiDownload /> Export CSV
                        </button>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </>
            </ul>
          </div>
        )}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px] bg-white dark:bg-black text-zinc-900 dark:text-white border-zinc-200 dark:border-zinc-800">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 sticky top-0 bg-white dark:bg-black">
              <div className="flex pl-2 space-x-2 py-3">
                <button
                  onClick={() => setActiveTab("browsers")}
                  className={`px-4 py-1 text-[1rem] font-semibold rounded-md ${activeTab === "browsers" ? "bg-neutral-200 dark:bg-zinc-900 text-zinc-900 dark:text-white" : "text-zinc-500 dark:text-zinc-400"}`}
                >
                  Browsers
                </button>
                <button
                  onClick={() => setActiveTab("devices")}
                  className={`px-4 py-1 text-[1rem] font-semibold rounded-md ${activeTab === "devices" ? "bg-neutral-200 dark:bg-zinc-900 text-zinc-900 dark:text-white" : "text-zinc-500 dark:text-zinc-400"}`}
                >
                  Devices
                </button>
              </div>
              <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 pr-4">PAGE VIEWS</span>
            </div>
          </DialogHeader>
          <div className="max-h-[60vh] overflow-y-auto">
            <ul>
              {currentData.map((item) => (
                <li
                  key={activeTab === "browsers" ? (item as Browser).browser : (item as Device).device}
                  className="relative h-8 flex items-center my-2 mr-2"
                >
                  <div
                    className="absolute left-0 top-0 h-full bg-neutral-100 dark:bg-zinc-900 rounded-md"
                    style={{ width: `${(item.count / maxCount) * 100}%` }}
                  />
                  <div className="flex items-center justify-between w-full px-4 relative z-10">
                    <div className="truncate text-sm text-zinc-900 dark:text-white">
                      {activeTab === "browsers" ? (item as Browser).browser : (item as Device).device}
                    </div>
                    <div className="text-sm text-zinc-900 dark:text-white">
                      <span className="font-semibold">{((item.count / totalCount) * 100).toFixed(0)}</span>
                      <span className="font-normal">%</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
