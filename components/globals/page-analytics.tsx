"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Maximize2 } from 'lucide-react'
import { GoGraph } from "react-icons/go";
import axios from "axios";

interface Page {
  pathname: string
  count: number
}

interface PagesAnalyticsProps {
  siteId: string
}

export default function PagesAnalytics({ siteId }: PagesAnalyticsProps) {
  const [pages, setpages] = useState<Page[]>([]);
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/sites/${siteId}/analytics/pages`)
        setpages(response.data);
      } catch (error) {
        console.error("Failed to fetch pages:" + error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchPages()
  }, [siteId])

  const maxCount = Math.max(...pages.map((page) => page.count), 0)

  return (
    <section>
      <div className="bg-white dark:bg-black rounded-lg overflow-hidden shadow border border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between px-4 py-6 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-white">Pages</h2>
          <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">PAGE VIEWS</span>
        </div>
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-[7.68rem]">
            <div className="mb-2">
              <GoGraph className="h-5 w-5 text-neutral-500" />
            </div>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">Loading...</p>
          </div>
        ) : pages.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-[7.68rem]">
            <div className="mb-2">
              <GoGraph className="h-5 w-5 text-neutral-500" />
            </div>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">No data found for selected period.</p>
          </div>
        ) : (
          <div className="relative">
            <ul>
              {pages.slice(0, 6).map((page) => (
                <li key={page.pathname} className="relative h-8 flex items-center my-2 mx-2">
                  <div
                    className="absolute left-0 top-0 h-full bg-neutral-100 dark:bg-zinc-900 rounded-md"
                    style={{ width: `${(page.count / maxCount) * 100}%` }}
                  />
                  <div className="flex items-center justify-between w-full px-4 relative z-10">
                    <div className="truncate text-sm text-zinc-900 dark:text-white">{page.pathname}</div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-white">{page.count}</div>
                  </div>
                </li>
              ))}
              {Array.from({ length: 6 - pages.slice(0, 6).length }).map((_, idx) => (
                <li key={`empty-${idx}`} className="relative h-8 flex items-center my-2 mx-2 opacity-0 pointer-events-none">
                  <div className="w-full h-full" />
                </li>
              ))}
              <>
                <div className="absolute bottom-12 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none z-10" />
                <div className="flex w-full items-center justify-center px-4 pb-3 pt-2 text-sm text-zinc-500 dark:text-zinc-400">
                  <button onClick={() => setIsModalOpen(true)} className="flex text-xs text-black dark:text-white border border-neutral-300 dark:border-neutral-800 px-2 py-1 rounded-2xl items-center space-x-2">
                    <p>View All</p>
                    <Maximize2 className="h-4 w-4" />
                  </button>
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
            <div className="flex items-center justify-between pl-2 pr-4 py-3 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 bg-white dark:bg-black">
              <h2 className="text-[1rem] font-semibold text-zinc-900 dark:text-white">Pages</h2>
              <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">PAGE VIEWS</span>
            </div>
          </DialogHeader>
          <div className="max-h-[60vh] overflow-y-auto">
            <ul>
              {pages.map((page) => (
                <li key={page.pathname} className="relative h-8 flex items-center my-2 mr-2">
                  <div
                    className="absolute left-0 top-0 h-full bg-neutral-100 dark:bg-zinc-900 rounded-md"
                    style={{ width: `${(page.count / maxCount) * 100}%` }}
                  />
                  <div className="flex items-center justify-between w-full px-4 relative z-10">
                    <div className="truncate text-sm text-zinc-900 dark:text-white">{page.pathname}</div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-white">{page.count}</div>
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
