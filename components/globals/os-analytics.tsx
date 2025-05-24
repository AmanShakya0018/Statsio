"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Maximize2 } from "lucide-react"
import { GoGraph } from "react-icons/go"
import { PiDotsThreeBold } from "react-icons/pi"
import { FiDownload } from "react-icons/fi"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { exportToCSV } from "@/lib/export-csv"

interface Os {
  os: string
  count: number
}

interface OssAnalyticsProps {
  siteId: string
}

export default function OssAnalytics({ siteId }: OssAnalyticsProps) {
  const [oses, setOses] = useState<Os[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchOses = async () => {
      try {
        const response = await axios.get(`/api/sites/${siteId}/analytics/os`)
        setOses(response.data)
      } catch (error) {
        console.error("Failed to fetch OS analytics:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchOses()
  }, [siteId])

  const maxCount = Math.max(...oses.map((page) => page.count), 0)
  const totalCount = oses.reduce((acc, curr) => acc + curr.count, 0)

  return (
    <section>
      <div className="bg-white dark:bg-black rounded-lg overflow-hidden shadow border border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between px-4 py-6 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-sm font-semibold text-zinc-800 dark:text-white">Operating Systems</h2>
          <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">PAGE VIEWS</span>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-[5.18rem]">
            <div className="mb-2">
              <GoGraph className="h-5 w-5 text-neutral-500" />
            </div>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">Loading...</p>
          </div>
        ) : oses.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-[5.18rem]">
            <div className="mb-2">
              <GoGraph className="h-5 w-5 text-neutral-500" />
            </div>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">No data found for selected period.</p>
          </div>
        ) : (
          <div className="relative">
            <ul>
              {oses.slice(0, 4).map((page) => (
                <li key={page.os} className="relative h-8 flex items-center my-2 mx-2">
                  <div
                    className="absolute left-0 top-0 h-full bg-neutral-100 dark:bg-zinc-900 rounded-md"
                    style={{ width: `${(page.count / maxCount) * 100}%` }}
                  />
                  <div className="flex items-center justify-between w-full px-4 relative z-10">
                    <div className="truncate text-sm text-zinc-800 dark:text-white">{page.os}</div>
                    <div className="text-sm flex flex-row gap-0.5 font-semibold text-zinc-800 dark:text-white">
                      {((page.count / totalCount) * 100).toFixed(0)}%
                    </div>
                  </div>
                </li>
              ))}

              {Array.from({ length: 4 - oses.slice(0, 4).length }).map((_, idx) => (
                <li key={`empty-${idx}`} className="relative h-8 flex items-center my-2 mx-2 opacity-0 pointer-events-none">
                  <div className="w-full h-full" />
                </li>
              ))}
              <>
                <div className="absolute bottom-12 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none z-10" />
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
                        <button onClick={() => exportToCSV(oses, `oses-analytics`)} className="w-full">
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
        <DialogContent className="sm:max-w-[600px] bg-white dark:bg-black text-zinc-800 dark:text-white border border-zinc-200 dark:border-zinc-800">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <div className="flex items-center justify-between pl-2 pr-4 py-3 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 bg-white dark:bg-black">
              <h2 className="text-[1rem] font-semibold text-zinc-800 dark:text-white">Operating Systems</h2>
              <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">PAGE VIEWS</span>
            </div>
          </DialogHeader>
          <div className="max-h-[60vh] overflow-y-auto">
            <ul>
              {oses.map((page) => (
                <li key={page.os} className="relative h-8 flex items-center my-2 mr-2">
                  <div
                    className="absolute left-0 top-0 h-full bg-neutral-100 dark:bg-zinc-900 rounded-md"
                    style={{ width: `${(page.count / maxCount) * 100}%` }}
                  />
                  <div className="flex items-center justify-between w-full px-4 relative z-10">
                    <div className="truncate text-sm text-zinc-800 dark:text-white">{page.os}</div>
                    <div className="text-sm flex flex-row gap-0.5 font-semibold text-zinc-800 dark:text-white">
                      {((page.count / totalCount) * 100).toFixed(0)}%
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
