"use client"
import { FilePenLine, SquareArrowOutUpRight, Trash } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface SiteCardProps {
  site: {
    id: string
    name: string
    domain: string
  }
}

export function SiteCard({ site }: SiteCardProps) {

  return (
    <Link
      href={`/dashboard/sites/${site.id}`}
      className="flex items-start gap-2 bg-white dark:bg-black p-3 border border-zinc-200 dark:border-zinc-800 rounded-md w-full h-full cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-900 transition"
    >
      <div className="flex flex-col flex-1 gap-2 pr-2 h-full overflow-hidden">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h2 className="overflow-hidden text-zinc-800 dark:text-white text-xl text-ellipsis whitespace-nowrap">
              {site.name}
            </h2>
            <div className="bg-emerald-400 p-[2px] rounded-full animate-pulse">
              <div className="bg-emerald-500 rounded-full size-[5px]" />
            </div>
          </div>
          <p className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 text-sm 2xl:text-xs underline">
            {site.domain}
            <SquareArrowOutUpRight size={9} />
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-2 pl-3 border-l border-zinc-200 dark:border-zinc-800 h-full">
        <Button
          className="bg-transparent p-1 rounded-full text-zinc-500 dark:text-zinc-400 transition"
          size="icon"
          variant="ghost"
        >
          <FilePenLine size={16} />
        </Button>
        <Button
          className="bg-transparent p-1 rounded-full text-red-400 transition"
          size="icon"
          variant="ghost"
        >
          <Trash size={16} />
        </Button>
      </div>
    </Link>
  )
}
