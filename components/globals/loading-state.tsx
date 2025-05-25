import { BookOpen } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import { TextShimmer } from "../ui/text-shimmer"

export function LoadingState() {
  return (
    <div className="flex min-h-[400px] flex-col justify-between rounded-lg border border-dashed">
      <div className="flex flex-col items-center justify-center p-8 mt-24 text-center">
        <TextShimmer className='text-sm' duration={1}>
          Loading...
        </TextShimmer>
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
