import * as React from "react";
import type { SVGProps } from "react";

const FlagUSAIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    {...props}
  >
    {/* Flag Base */}
    <rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff" />
    <path
      d="M1.638 5.846h28.724c-.711-1.108-1.947-1.846-3.362-1.846H5c-1.414 0-2.65.738-3.362 1.846Z"
      fill="#a62842"
    />
    <path
      d="M2.03 7.692a1.25 1.25 0 0 0-.03.308v1.539H31v-1.539a1.25 1.25 0 0 0-.03-.308H2.03Z"
      fill="#a62842"
    />
    <path fill="#a62842" d="M2 11.385H31V13.231H2z" />
    <path fill="#a62842" d="M2 15.077H31V16.923H2z" />
    <path fill="#a62842" d="M1 18.769H31V20.615H1z" />
    <path
      d="M1 24c0 .105.023.204.031.308H30.969a1.25 1.25 0 0 0 .031-.308v-1.539H1V24Z"
      fill="#a62842"
    />
    <path
      d="M30.362 26.154H1.638C2.35 27.262 3.586 28 5 28h22c1.414 0 2.65-.738 3.362-1.846Z"
      fill="#a62842"
    />

    {/* Blue Section */}
    <path d="M5 4h11v12.923H1V8c0-2.208 1.792-4 4-4Z" fill="#102d5e" />

    {/* Border and Highlight */}
    <path
      d="M27 4H5c-2.209 0-4 1.791-4 4v16c0 2.209 1.791 4 4 4h22c2.209 0 4-1.791 4-4V8c0-2.209-1.791-4-4-4Zm3 20c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3h22c1.654 0 3 1.346 3 3v16Z"
      opacity=".15"
    />
    <path
      d="M27 5H5c-1.657 0-3 1.343-3 3v1c0-1.657 1.343-3 3-3h22c1.657 0 3 1.343 3 3v-1c0-1.657-1.343-3-3-3Z"
      fill="#fff"
      opacity=".2"
    />

    {/* Stars */}
    {[
      [4.601, 7.463],
      [7.58, 7.463],
      [10.56, 7.463],
      [13.539, 7.463],
      [6.066, 9.283],
      [9.046, 9.283],
      [12.025, 9.283],
      [4.601, 11.104],
      [7.58, 11.104],
      [10.56, 11.104],
      [13.539, 11.104],
      [6.066, 12.924],
      [9.046, 12.924],
      [12.025, 12.924],
      [4.601, 14.744],
      [7.58, 14.744],
      [10.56, 14.744],
      [13.539, 14.744],
    ].map(([x, y], i) => (
      <path
        key={i}
        fill="#fff"
        d={`M${x} ${y}L${x + 0.592} ${y - 0.43}H${x - 0.731}l-.226-.695-.226.695H${x - 1.958}l.591.43-.226.695.591-.43.591.43-.226-.695Z`}
      />
    ))}
  </svg>
);

export default FlagUSAIcon;
