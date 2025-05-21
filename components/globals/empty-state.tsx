import { BarChart2, BookOpen, Plus } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import { AddSiteModal } from "./site-modal"

interface Site {
  id: string;
  name: string;
  domain: string;
}

interface EmptyStateProps {
  onSiteAdded: (site: Site) => void;
}

export function EmptyState({ onSiteAdded }: EmptyStateProps) {
  return (
    <div className="flex min-h-[400px] flex-col justify-between rounded-lg border border-dashed">
      <div className="flex flex-col items-center justify-center p-8 mt-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <BarChart2 className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mt-4 text-lg font-semibold">No sites yet</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          You haven&apos;t added any sites to track. Add your first site to start collecting analytics.
        </p>
        <AddSiteModal
          trigger={
            <Button variant="outline" size="sm" className="mt-2">
              <Plus size={16} />
              Add New Site
            </Button>
          }
          onSiteAdded={onSiteAdded}
        />
      </div>
      <div className="p-4 mt-4 border-t border-dashed border-neutral-300 dark:border-neutral-800">
        <p className="mb-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
          Need help setting up tracking on your website?
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
          <Link href="/docs" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="sm"
            >
              <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              View documentation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
