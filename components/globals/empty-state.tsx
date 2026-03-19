import { BarChart2, BookOpen, Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { AddSiteModal } from "./site-modal";

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
            <Button variant="outline" size="sm" className="mt-2">
              <Plus size={16} />
              Add New Site
            </Button>
          }
        />
      </div>
      <div className="mt-4 border-t border-dashed border-neutral-300 p-4 dark:border-neutral-800">
        <p className="mb-3 text-xs text-zinc-600 dark:text-zinc-400 sm:text-sm">
          Need help setting up tracking on your website?
        </p>
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">
          <Link href="/docs" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              <BookOpen className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
              View documentation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
