"use client";
import { Code2 } from "lucide-react";
import React from "react";
import { IoMdCode } from "react-icons/io";

interface ToggleButtonGroupProps {
  analytics: boolean;
  setAnalytics: (value: boolean) => void;
}

const ToggleButtonGroup = ({
  analytics,
  setAnalytics,
}: ToggleButtonGroupProps) => {
  return (
    <div className="xs:flex-row xs:justify-between mb-2 flex flex-col gap-2 border-b border-zinc-800">
      <div className="flex flex-row gap-2">
        <button
          className={`relative inline-flex h-9 items-center justify-center gap-1.5 rounded-none border-b-2 border-neutral-800 px-4 pb-3 pt-2 text-sm font-medium transition-colors ${
            !analytics
              ? "border-b-white text-white duration-300"
              : "border-b-transparent text-neutral-400"
          }`}
          onClick={() => setAnalytics(false)}
        >
          <IoMdCode className="h-4 w-4" />
          <span>Tracking Script</span>
        </button>
        <button
          className={`relative inline-flex h-9 items-center justify-center gap-1.5 rounded-none border-b-2 border-neutral-800 px-4 pb-3 pt-2 text-sm font-medium transition-colors ${
            analytics
              ? "border-b-white text-white duration-300"
              : "border-b-transparent text-neutral-400"
          }`}
          onClick={() => setAnalytics(true)}
        >
          <Code2 className="h-4 w-4" />
          <span>Analytics</span>
        </button>
      </div>
    </div>
  );
};

export default ToggleButtonGroup;
