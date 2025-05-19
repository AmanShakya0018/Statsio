"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Maximize2 } from 'lucide-react'
import { GoGraph } from "react-icons/go"

interface Referrer {
  referrer: string
  count: number
}

interface ReferrersAnalyticsProps {
  referrers: Referrer[]
}

export default function ReferrersAnalytics({ referrers }: ReferrersAnalyticsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const maxCount = Math.max(...referrers.map((referrer) => referrer.count))

  return (
    <section>
      <div className="bg-white dark:bg-black rounded-lg overflow-hidden shadow border border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between px-4 py-6 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-white">Referrers</h2>
          <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">PAGE VIEWS</span>
        </div>
        {referrers.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-[7.89rem]">
            <div className="mb-2">
              <GoGraph className="h-5 w-5 text-neutral-500" />
            </div>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">No data found for selected period.</p>
          </div>
        ) : (
          <div className="relative">
            <ul>
              {referrers.slice(0, 6).map((referrer) => (
                <li key={referrer.referrer} className="relative h-8 flex items-center my-2 mx-2">
                  <div
                    className="absolute left-0 top-0 h-full bg-neutral-100 dark:bg-zinc-900 rounded-md"
                    style={{ width: `${(referrer.count / maxCount) * 100}%` }}
                  />
                  <div className="flex items-center justify-between w-full px-4 relative z-10">
                    <div className="truncate text-sm text-zinc-900 dark:text-white">{referrer.referrer}</div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-white">{referrer.count}</div>
                  </div>
                </li>
              ))}
              {Array.from({ length: 6 - referrers.slice(0, 6).length }).map((_, idx) => (
                <li key={`empty-${idx}`} className="relative h-8 flex items-center my-2 mx-2 opacity-0 pointer-events-none">
                  <div className="w-full h-full" />
                </li>
              ))}

              {referrers.length > 6 ? (
                <>
                  <div className="absolute bottom-11 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none z-10 rounded-b-lg" />
                  <button onClick={() => setIsModalOpen(true)} className="flex w-full items-center justify-center px-4 py-3 mt-4 border-t border-zinc-200 dark:border-zinc-800 text-sm text-zinc-500 dark:text-zinc-400">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1" >
                        <span>View All</span>
                        <Maximize2 className="h-4 w-4" />
                      </div>
                    </div>
                  </button>
                </>
              ) : (
                <div className="h-[3.3rem]" />
              )}
            </ul>
          </div>
        )}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px] bg-white dark:bg-black text-zinc-900 dark:text-white border-zinc-200 dark:border-zinc-800">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <div className="flex items-center justify-between pl-2 pr-4 py-3 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 bg-white dark:bg-black">
              <h2 className="text-[1rem] font-semibold text-zinc-900 dark:text-white">Referrers</h2>
              <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">PAGE VIEWS</span>
            </div>
          </DialogHeader>
          <div className="max-h-[60vh] overflow-y-auto">
            <ul>
              {referrers.map((referrer) => (
                <li key={referrer.referrer} className="relative h-8 flex items-center my-2 mr-2">
                  <div
                    className="absolute left-0 top-0 h-full bg-neutral-100 dark:bg-zinc-900 rounded-md"
                    style={{ width: `${(referrer.count / maxCount) * 100}%` }}
                  />
                  <div className="flex items-center justify-between w-full px-4 relative z-10">
                    <div className="truncate text-sm text-zinc-900 dark:text-white">{referrer.referrer}</div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-white">{referrer.count}</div>
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
