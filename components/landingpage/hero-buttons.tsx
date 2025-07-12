import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";

const Herobuttons = () => {
  return (
    <div className="mt-4 flex items-center gap-4 sm:gap-3">
      <Link
        href={"/dashboard/sites"}
        className={cn(
          "group relative flex h-9 w-full cursor-pointer items-center justify-center gap-1 rounded-sm bg-white px-4 py-1.5 text-[0.9rem] font-semibold text-black no-underline transition-all duration-300 hover:bg-neutral-200 md:h-10 md:px-8 md:py-2 md:text-[1rem]",
        )}
      >
        <TextGlitch text={"Get Started"} />
      </Link>
      <Link
        href="/docs"
        className="group flex w-full items-center gap-2 text-nowrap rounded-sm bg-neutral-800/50 py-[10px] pl-3 pr-2 text-[0.9rem] text-sm text-neutral-200 transition-all duration-300 hover:bg-neutral-900/50 hover:text-white"
      >
        See How It Works
        <div className="relative overflow-hidden font-medium">
          <span className="invisible">
            <ChevronRightIcon size={14} />
          </span>
          <span className="absolute left-0 top-0 text-neutral-200 transition-transform duration-300 ease-in-out hover:duration-150 group-hover:translate-x-full group-hover:text-white">
            <ChevronRightIcon size={14} />
          </span>
          <span className="absolute left-0 top-0 -translate-x-full text-neutral-200 transition-transform duration-300 ease-in-out hover:duration-150 group-hover:translate-x-0 group-hover:text-white">
            <ChevronRightIcon size={14} />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Herobuttons;

function TextGlitch({ text }: { text: string }) {
  return (
    <div className="relative overflow-hidden">
      <span className="invisible">{text}</span>
      <span className="absolute left-0 top-0 font-semibold transition-transform duration-500 ease-in-out [text-shadow:0_0.5px_0_rgb(255,255,255,.48)] hover:duration-300 group-hover:-translate-y-full">
        {text}
      </span>
      <span className="absolute left-0 top-0 translate-y-full font-semibold transition-transform duration-500 ease-in-out [text-shadow:0_0.5px_0_rgb(255,255,255,.48)] hover:duration-300 group-hover:translate-y-0">
        {text}
      </span>
    </div>
  );
}
