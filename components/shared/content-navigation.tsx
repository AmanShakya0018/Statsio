import Link from "next/link";
import React, { ReactNode } from "react";

interface ContentNavigationProps {
  children: ReactNode;
}

const ContentNavigation = ({ children }: ContentNavigationProps) => {
  return (
    <div className="mb-1 ml-1 flex items-center space-x-1 text-sm leading-none text-zinc-400">
      <Link href={"/dashboard/sites"} className="truncate">
        Sites
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-chevron-right h-4.5 w-3.5 pt-1"
      >
        <path d="m9 18 6-6-6-6"></path>
      </svg>
      <div className="text-neutral-200">{children}</div>
    </div>
  );
};

export default ContentNavigation;
