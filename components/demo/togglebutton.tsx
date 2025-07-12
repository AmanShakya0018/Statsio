import { Code2 } from "lucide-react";
import React from "react";
import { IoMdCode } from "react-icons/io";

const Tb = () => {
  return (
    <div className="xs:flex-row xs:justify-between mb-2 flex flex-col gap-2 border-b border-zinc-200 dark:border-zinc-800">
      <div className="flex flex-row gap-2">
        <button className="relative inline-flex h-9 items-center justify-center gap-1.5 rounded-none border-b-2 border-b-transparent px-4 pt-2 pb-3 text-sm font-medium text-neutral-500 transition-colors dark:text-neutral-400">
          <IoMdCode className="h-4 w-4" />
          <span>Tracking Script</span>
        </button>
        <button className="border-b-primary relative inline-flex h-9 items-center justify-center gap-1.5 rounded-none border-b-2 px-4 pt-2 pb-3 text-sm font-medium text-zinc-950 transition-colors duration-300 dark:text-white">
          <Code2 className="h-4 w-4" />
          <span>Analytics</span>
        </button>
      </div>
    </div>
  );
};

export default Tb;
