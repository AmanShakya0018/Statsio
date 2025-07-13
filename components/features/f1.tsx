"use client";
import { cn } from "@/lib/utils";
import ComponentContainer from "./component-container";

const F1 = () => {
  return (
    <ComponentContainer className="md:py-20">
      <div
        className={cn(
          "relative",
          "flex items-center justify-center",
          "h-[14rem] w-full max-w-[350px]",
          "rounded-md border border-neutral-800 bg-neutral-900",
        )}
      ></div>
    </ComponentContainer>
  );
};

export default F1;
