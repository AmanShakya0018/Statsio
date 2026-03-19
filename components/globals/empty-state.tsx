import { BarChart2, BookOpen, Plus } from "lucide-react";
import Link from "next/link";
import { AddSiteModal } from "./site-modal";
import { cn } from "@/lib/utils";

export function EmptyState() {
  return (
    <div className="flex min-h-[400px] flex-col justify-between rounded-lg border border-dashed">
      <div className="mt-8 flex flex-col items-center justify-center p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <BarChart2 className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mt-4 text-lg font-semibold">No sites yet</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          You haven&apos;t added any sites to track. Add your first site to
          start collecting analytics.
        </p>
        <AddSiteModal
          trigger={
            <button
              className={cn(
                "group mt-4 flex items-center justify-center gap-2 rounded-md bg-neutral-950 px-3 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-neutral-800",
                "shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33]",
              )}
            >
              <Plus size={16} />
              Add New Site
            </button>
          }
        />
      </div>
      <div className="mt-4 border-t border-dashed border-neutral-300 p-4 dark:border-neutral-800">
        <p className="mb-3 text-xs text-zinc-600 dark:text-zinc-400 sm:text-sm">
          Need help setting up tracking on your website?
        </p>
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">
          <Link href="/docs" target="_blank" rel="noopener noreferrer">
            <button
              className={cn(
                "group flex items-center justify-center gap-2 rounded-md bg-neutral-950 px-3 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-neutral-800",
                "shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33]",
              )}
            >
              <BookOpen className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
              View documentation
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
