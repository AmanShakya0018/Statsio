"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Maximize2, MoreHorizontal } from "lucide-react"

interface Browser {
  browser: string
  count: number
}

interface Device {
  device: string
  count: number
}

interface BrowsersAndDevicesAnalyticsProps {
  browsers: Browser[]
  devices: Device[]
}

export default function BrowsersAndDevicesAnalytics({ browsers, devices }: BrowsersAndDevicesAnalyticsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"browsers" | "devices">("browsers")

  const browserMaxCount = Math.max(...browsers.map((browser) => browser.count))
  const browserTotalCount = browsers.reduce((acc, curr) => acc + curr.count, 0)

  const deviceMaxCount = Math.max(...devices.map((device) => device.count))
  const deviceTotalCount = devices.reduce((acc, curr) => acc + curr.count, 0)

  const currentData = activeTab === "browsers" ? browsers : devices
  const maxCount = activeTab === "browsers" ? browserMaxCount : deviceMaxCount
  const totalCount = activeTab === "browsers" ? browserTotalCount : deviceTotalCount

  return (
    <section>
      <div className="bg-black rounded-lg overflow-hidden shadow border border-zinc-800">
        <div className="flex items-center justify-between px-4 py-5 border-b border-zinc-800">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveTab("browsers")}
              className={`px-4 py-1 text-sm font-semibold rounded-md ${activeTab === "browsers" ? "bg-zinc-900 text-white" : "text-zinc-400"
                }`}
            >
              Browsers
            </button>
            <button
              onClick={() => setActiveTab("devices")}
              className={`px-4 py-1 text-sm font-semibold rounded-md ${activeTab === "devices" ? "bg-zinc-900 text-white" : "text-zinc-400"
                }`}
            >
              Devices
            </button>
          </div>
          <span className="text-xs font-semibold text-zinc-400">PAGE VIEWS</span>
        </div>
        <ul>
          {currentData.slice(0, 4).map((item) => (
            <li
              key={activeTab === "browsers" ? (item as Browser).browser : (item as Device).device}
              className="relative h-8 flex items-center my-2 mx-2"
            >
              <div
                className="absolute left-0 top-0 h-full bg-zinc-900 rounded-md"
                style={{ width: `${(item.count / maxCount) * 100}%` }}
              />
              <div className="flex items-center justify-between w-full px-4 relative z-10">
                <div className="truncate text-sm text-white">
                  {activeTab === "browsers" ? (item as Browser).browser : (item as Device).device}
                </div>
                <div className="text-sm text-white">{((item.count / totalCount) * 100).toFixed(0)}%</div>
              </div>
            </li>
          ))}
          {Array.from({ length: 4 - currentData.slice(0, 4).length }).map((_, idx) => (
            <li key={`empty-${idx}`} className="relative h-8 flex items-center my-2 mx-2 opacity-0 pointer-events-none">
              <div className="w-full h-full" />
            </li>
          ))}

          {currentData.length > 4 ? (
            <li className="flex items-center justify-between px-4 py-3 border-t border-zinc-800 text-sm text-zinc-400">
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-1" onClick={() => setIsModalOpen(true)}>
                  <span>View All</span>
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>
              <button>
                <MoreHorizontal className="h-5 w-5 text-zinc-500" />
              </button>
            </li>
          ) : (
            <div className="h-[2.8rem]" />
          )}
        </ul>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px] bg-black text-white border-zinc-800">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <div className="flex items-center justify-between border-b border-zinc-800 sticky top-0 bg-black">
              <div className="flex pl-2 space-x-2 py-3">
                <button
                  onClick={() => setActiveTab("browsers")}
                  className={`px-4 py-1 text-[1rem] font-semibold rounded-md ${activeTab === "browsers" ? "bg-zinc-900 text-white" : "text-zinc-400"
                    }`}
                >
                  Browsers
                </button>
                <button
                  onClick={() => setActiveTab("devices")}
                  className={`px-4 py-1 text-[1rem] font-semibold rounded-md ${activeTab === "devices" ? "bg-zinc-900 text-white" : "text-zinc-400"
                    }`}
                >
                  Devices
                </button>
              </div>
              <span className="text-xs font-semibold text-zinc-400 pr-4">PAGE VIEWS</span>
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
                    className="absolute left-0 top-0 h-full bg-zinc-900 rounded-md"
                    style={{ width: `${(item.count / maxCount) * 100}%` }}
                  />
                  <div className="flex items-center justify-between w-full px-4 relative z-10">
                    <div className="truncate text-sm text-white">
                      {activeTab === "browsers" ? (item as Browser).browser : (item as Device).device}
                    </div>
                    <div className="text-sm text-white">{((item.count / totalCount) * 100).toFixed(0)}%</div>
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
