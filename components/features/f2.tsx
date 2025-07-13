"use client";
import React from "react";
import { cn } from "@/lib/utils";
import ComponentContainer from "./component-container";

const F2 = () => {
  return (
    <ComponentContainer>
      <div
        className={cn(
          "relative overflow-hidden",
          "h-[30rem] w-full max-w-[350px]",
          "rounded-md border border-neutral-900 bg-neutral-950",
        )}
      ></div>
    </ComponentContainer>
  );
};

export default F2;
