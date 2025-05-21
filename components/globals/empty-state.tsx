import { BarChart2 } from "lucide-react"

export function EmptyState() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
        <BarChart2 className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">No sites yet</h3>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        You haven&apos;t added any sites to track. Add your first site to start collecting analytics.
      </p>
    </div>
  )
}
