import { Code2 } from "lucide-react";
import React from "react";
import { IoMdCode } from "react-icons/io";

const Togglebutton = () => {
  return (
    <div className="xs:flex-row xs:justify-between mb-2 flex flex-col gap-2 border-b border-zinc-800">
      <div className="flex flex-row gap-2">
        <div className="font-mediumtransition-colors relative inline-flex h-9 items-center justify-center gap-1.5 rounded-none border-b-2 border-b-transparent px-4 pb-3 pt-2 text-sm text-neutral-400">
          <IoMdCode className="h-4 w-4" />
          <span>Tracking Script</span>
        </div>
        <div className="relative inline-flex h-9 items-center justify-center gap-1.5 rounded-none border-b-2 border-b-white px-4 pb-3 pt-2 text-sm font-medium text-white transition-colors duration-300">
          <Code2 className="h-4 w-4" />
          <span>Analytics</span>
        </div>
      </div>
    </div>
  );
};

export default Togglebutton;
