"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Maximize2 } from "lucide-react"
import { GoGraph } from "react-icons/go"

interface Country {
  country: string
  count: number
}

interface CountrysAnalyticsProps {
  countries: Country[]
}

const CountrysAnalytics: React.FC<CountrysAnalyticsProps> = ({ countries }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const maxCount = countries.length > 0 ? Math.max(...countries.map((page) => page.count)) : 0
  const totalCount = countries.length > 0 ? countries.reduce((acc, curr) => acc + curr.count, 0) : 0

  return (
    <section>
      <div className="bg-white dark:bg-black rounded-lg overflow-hidden shadow border border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between px-4 py-6 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-sm font-semibold text-zinc-800 dark:text-white">Countries</h2>
          <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">PAGE VIEWS</span>
        </div>

        {countries.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-[5.16rem]">
            <div className="mb-2">
              <GoGraph className="h-5 w-5 text-neutral-500" />
            </div>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">No data found for selected period.</p>
          </div>
        ) : (
          <div className="relative">
            <ul>
              {countries.slice(0, 4).map((page) => (
                <li key={page.country} className="relative h-8 flex items-center my-2 mx-2">
                  <div
                    className="absolute left-0 top-0 h-full bg-neutral-100 dark:bg-zinc-900 rounded-md"
                    style={{ width: `${(page.count / maxCount) * 100}%` }}
                  />
                  <div className="flex items-center justify-between w-full px-4 relative z-10">
                    <div className="truncate text-sm text-zinc-800 dark:text-white">{page.country}</div>
                    <div className="text-sm flex flex-row gap-0.5 font-semibold text-zinc-800 dark:text-white">
                      {((page.count / totalCount) * 100).toFixed(0)}
                      <p className="font-normal">%</p>
                    </div>
                  </div>
                </li>
              ))}
              {Array.from({ length: 4 - countries.slice(0, 4).length }).map((_, idx) => (
                <li
                  key={`empty-${idx}`}
                  className="relative h-8 flex items-center my-2 mx-2 opacity-0 pointer-events-none"
                >
                  <div className="w-full h-full" />
                </li>
              ))}

              {countries.length > 4 ? (
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
                <div className="h-[2.8rem]" />
              )}
            </ul>
          </div>
        )}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px] bg-white dark:bg-black text-zinc-800 dark:text-white border border-zinc-200 dark:border-zinc-800">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <div className="flex items-center justify-between pl-2 pr-4 py-3 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 bg-white dark:bg-black">
              <h2 className="text-[1rem] font-semibold text-zinc-800 dark:text-white">Countries</h2>
              <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">PAGE VIEWS</span>
            </div>
          </DialogHeader>
          <div className="max-h-[60vh] overflow-y-auto">
            <ul>
              {countries.map((page) => (
                <li key={page.country} className="relative h-8 flex items-center my-2 mr-2">
                  <div
                    className="absolute left-0 top-0 h-full bg-neutral-100 dark:bg-zinc-900 rounded-md"
                    style={{ width: `${(page.count / maxCount) * 100}%` }}
                  />
                  <div className="flex items-center justify-between w-full px-4 relative z-10">
                    <div className="truncate text-sm text-zinc-800 dark:text-white">{page.country}</div>
                    <div className="text-sm flex flex-row gap-0.5 font-semibold text-zinc-800 dark:text-white">
                      {((page.count / totalCount) * 100).toFixed(0)}
                      <p className="font-normal">%</p>
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

export default CountrysAnalytics
