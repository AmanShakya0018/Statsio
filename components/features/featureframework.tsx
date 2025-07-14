"use client";
import { cn } from "@/lib/utils";
import FrameworkCard from "./frameworkcard";

const FeatureFramework = () => {
  return (
    <div
      className={cn(
        "relative",
        "flex flex-col justify-between",
        "h-[20rem] space-y-4",
        "rounded-md border border-neutral-800/50 bg-neutral-950",
      )}
    >
      <FrameworkCard />
      <div className="px-4 pb-4">
        <div className="text-sm font-semibold text-white">
          Framework Agnostic
        </div>
        <div className="mt-2 text-xs text-neutral-400">
          Seamlessly integrate with any tech stack, whether it&apos;s Next.js,
          React, HTML, or anything else. Statsio works everywhere.
        </div>
      </div>
    </div>
  );
};

export default FeatureFramework;
