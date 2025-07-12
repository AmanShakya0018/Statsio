import { BookOpen } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { TextShimmer } from "../ui/text-shimmer";

export function LoadingState() {
  return (
    <div className="flex min-h-[400px] flex-col justify-between rounded-lg border border-dashed border-neutral-800">
      <div className="mt-24 flex flex-col items-center justify-center p-8 text-center">
        <TextShimmer className="text-sm" duration={1}>
          Loading...
        </TextShimmer>
      </div>
      <div className="mt-4 border-t border-dashed border-neutral-800 p-4">
        <p className="mb-3 text-xs text-zinc-400 sm:text-sm">
          Need help setting up tracking on your website?
        </p>
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">
          <Link href="/docs" target="_blank" rel="noopener noreferrer">
            <Button className="flex items-center justify-center gap-2 rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-[0.75rem] font-semibold text-white transition-all duration-300 hover:bg-neutral-800">
              <BookOpen className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
              View documentation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
