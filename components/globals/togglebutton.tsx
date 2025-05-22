"use client"
import { Code2 } from 'lucide-react';
import React from 'react';
import { IoMdCode } from 'react-icons/io';

interface ToggleButtonGroupProps {
  analytics: boolean;
  setAnalytics: (value: boolean) => void;
}

const ToggleButtonGroup = ({ analytics, setAnalytics }: ToggleButtonGroupProps) => {
  return (
    <div className="flex flex-col xs:flex-row xs:justify-between gap-2 mb-2 border-b border-zinc-200 dark:border-zinc-800">
      <div className='flex flex-row gap-2'>
        <button
          className={`inline-flex items-center justify-center gap-1.5 relative h-9 rounded-none border-b-2 px-4 pb-3 pt-2 font-medium text-sm transition-colors
          ${!analytics
              ? "border-b-primary dark:text-white text-zinc-950 duration-300"
              : "border-b-transparent text-neutral-500 dark:text-neutral-400"
            }`}
          onClick={() => setAnalytics(false)}
        >
          <IoMdCode className="w-4 h-4" />
          <span>Tracking Script</span>
        </button>
        <button
          className={`inline-flex items-center justify-center gap-1.5 relative h-9 rounded-none border-b-2 px-4 pb-3 pt-2 font-medium text-sm transition-colors
          ${analytics
              ? "border-b-primary dark:text-white text-zinc-950 duration-300"
              : "border-b-transparent text-neutral-500 dark:text-neutral-400"
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