"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Maximize2, MoreHorizontal } from 'lucide-react'

// Define TypeScript interfaces
interface Page {
  pathname: string
  count: number
}

interface PagesAnalyticsProps {
  pages: Page[]
}

export default function PagesAnalytics({ pages }: PagesAnalyticsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Find the maximum count to calculate relative widths
  const maxCount = Math.max(...pages.map((page) => page.count))

  return (
    <section className="mb-8">
      <div className="bg-black rounded-lg overflow-hidden shadow border border-zinc-800">
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
          <h2 className="text-sm font-semibold text-white">Pages</h2>
          <span className="text-sm text-zinc-400">VISITORS</span>
        </div>
        <ul>
          {pages.slice(0, 6).map((page) => (
            <li key={page.pathname} className="relative h-8 flex items-center my-2 mx-2">
              <div
                className="absolute left-0 top-0 h-full bg-zinc-900 rounded-md"
                style={{ width: `${(page.count / maxCount) * 100}%` }}
              />
              <div className="flex items-center justify-between w-full px-4 relative z-10">
                <div className="truncate text-sm text-white">{page.pathname}</div>
                <div className="text-sm text-white">{page.count}</div>
              </div>
            </li>
          ))}

          {pages.length > 6 && (
            <li className="flex items-center justify-between px-4 py-3 mt-4 border-t border-zinc-800 text-sm text-zinc-400">
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
          )}
        </ul>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px] bg-black text-white border-zinc-800">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <div className="flex items-center justify-between pl-2 pr-4 py-3 border-b border-zinc-800 sticky top-0 bg-black">
              <h2 className="text-[1rem] font-semibold text-white">Pages</h2>
              <span className="text-xs font-semibold text-zinc-400">VISITORS</span>
            </div>
          </DialogHeader>
          <div className="max-h-[60vh] overflow-y-auto">
            <ul>
              {pages.map((page) => (
                <li key={page.pathname} className="relative h-8 flex items-center my-2 mr-2">
                  <div
                    className="absolute left-0 top-0 h-full bg-zinc-900 rounded-md"
                    style={{ width: `${(page.count / maxCount) * 100}%` }}
                  />
                  <div className="flex items-center justify-between w-full px-4 relative z-10">
                    <div className="truncate text-sm text-white">{page.pathname}</div>
                    <div className="text-sm text-white">{page.count}</div>
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
