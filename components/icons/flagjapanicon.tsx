import * as React from "react";
import type { SVGProps } from "react";

const FlagJapanIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    {...props}
  >
    {/* Flag Base */}
    <rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff" />

    {/* Border */}
    <path
      d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
      opacity=".15"
    />

    {/* Red Circle */}
    <circle cx="16" cy="16" r="6" fill="#ae232f" />

    {/* Top Highlight */}
    <path
      d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
      fill="#fff"
      opacity=".2"
    />
  </svg>
);

export default FlagJapanIcon;
