import { getFlagURL } from "@/lib/country-flag"
import { ArrowUp } from "lucide-react"
import Image from "next/image"

const FeaturesVisitorInsights = () => {

  return (
    <div className="w-full bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-900 shadow-sm">
      <div className="flex p-3 items-center justify-start gap-4 border-b border-neutral-200 dark:border-neutral-900">
        <div className="flex items-center space-x-3 pr-3 border-r border-neutral-200 dark:border-neutral-900">
          <div>
            <div className="text-[1rem] font-bold text-zinc-900 dark:text-zinc-100">Visitors</div>
            <div className="text-sm text-zinc-500 dark:text-zinc-500 flex items-center space-x-1">
              <span>12.5k</span>
              <div className="flex text-xs items-center space-x-0.5 text-emerald-600 dark:text-emerald-400">
                <ArrowUp className="h-3 w-3" />
                <span>11.8%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div>
            <div className="text-[1rem] font-bold text-zinc-900 dark:text-zinc-100">Page Views</div>
            <div className="text-sm text-zinc-500 dark:text-zinc-500 flex items-center space-x-1">
              <span>28.9k</span>
              <div className="flex text-xs items-center space-x-0.5 text-emerald-600 dark:text-emerald-400">
                <ArrowUp className="h-3 w-3" />
                <span>8.2%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 p-3">
        <div>
          <h3 className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-3">Top Countries</h3>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Image
                  height={500}
                  width={500}
                  quality={99}
                  src={getFlagURL("India")}
                  alt={"In"}
                  className="w-5 h-4 inline-block rounded-sm object-cover"
                />
                <span className="text-xs text-zinc-700 dark:text-zinc-300">India</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-16 h-1 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-zinc-400 dark:bg-zinc-500 rounded-full" style={{ width: "40%" }} />
                </div>
                <span className="text-xs text-zinc-500 dark:text-zinc-500">40%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Image
                  height={500}
                  width={500}
                  quality={99}
                  src={getFlagURL("United States")}
                  alt={"US"}
                  className="w-5 h-4 inline-block rounded-sm object-cover"
                />
                <span className="text-xs text-zinc-700 dark:text-zinc-300">United States</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-16 h-1 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-zinc-400 dark:bg-zinc-500 rounded-full" style={{ width: "20%" }} />
                </div>
                <span className="text-xs text-zinc-500 dark:text-zinc-500">20%</span>
              </div>
            </div>


            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Image
                  height={500}
                  width={500}
                  quality={99}
                  src={getFlagURL("United Kingdom")}
                  alt={"UK"}
                  className="w-5 h-4 inline-block rounded-sm object-cover"
                />
                <span className="text-xs text-zinc-700 dark:text-zinc-300">United Kingdom</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-16 h-1 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-zinc-400 dark:bg-zinc-500 rounded-full" style={{ width: "17%" }} />
                </div>
                <span className="text-xs text-zinc-500 dark:text-zinc-500">17%</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Image
                  height={500}
                  width={500}
                  quality={99}
                  src={getFlagURL("Australia")}
                  alt={"AU"}
                  className="w-5 h-4 inline-block rounded-sm object-cover"
                />
                <span className="text-xs text-zinc-700 dark:text-zinc-300">Australia</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-16 h-1 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-zinc-400 dark:bg-zinc-500 rounded-full" style={{ width: "15%" }} />
                </div>
                <span className="text-xs text-zinc-500 dark:text-zinc-500">15%</span>
              </div>
            </div>

          </div>
        </div>

        <div>
          <h3 className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-3">Top Pages</h3>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-500 rounded-full"></div>
                <span className="text-xs text-zinc-700 dark:text-zinc-300 font-mono">/</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-16 h-1 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-zinc-400 dark:bg-zinc-500 rounded-full" style={{ width: "30%" }} />
                </div>
                <span className="text-xs text-zinc-500 dark:text-zinc-500">30%</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-500 rounded-full"></div>
                <span className="text-xs text-zinc-700 dark:text-zinc-300 font-mono">/products</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-16 h-1 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-zinc-400 dark:bg-zinc-500 rounded-full" style={{ width: "25%" }} />
                </div>
                <span className="text-xs text-zinc-500 dark:text-zinc-500">25%</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-500 rounded-full"></div>
                <span className="text-xs text-zinc-700 dark:text-zinc-300 font-mono">/cart</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-16 h-1 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-zinc-400 dark:bg-zinc-500 rounded-full" style={{ width: "15%" }} />
                </div>
                <span className="text-xs text-zinc-500 dark:text-zinc-500">15%</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-500 rounded-full"></div>
                <span className="text-xs text-zinc-700 dark:text-zinc-300 font-mono">/about</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-16 h-1 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-zinc-400 dark:bg-zinc-500 rounded-full" style={{ width: "10%" }} />
                </div>
                <span className="text-xs text-zinc-500 dark:text-zinc-500">10%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesVisitorInsights