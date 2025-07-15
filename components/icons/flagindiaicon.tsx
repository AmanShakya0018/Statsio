import * as React from "react";
import type { SVGProps } from "react";

const FlagIndiaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    {...props}
  >
    <path fill="#fff" d="M1 11H31V21H1z" />
    <path
      d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
      fill="#e06535"
    />
    <path
      d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
      transform="rotate(180 16 24)"
      fill="#2c6837"
    />
    <path
      d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
      opacity=".15"
    />
    <path
      d="M16 12.292c-2.048 0-3.708 1.66-3.708 3.708s1.66 3.708 3.708 3.708 3.708-1.66 3.708-3.708-1.66-3.708-3.708-3.708Z"
      fill="#2c2c6b"
    />
    {/* Chakra (Ashoka Wheel) details */}
    <path
      d="M27 5H5c-1.657 0-3 1.343-3 3v1c0-1.657 1.343-3 3-3H27c1.657 0 3 1.343 3 3v-1c0-1.657-1.343-3-3-3Z"
      fill="#fff"
      opacity=".2"
    />
  </svg>
);

export default FlagIndiaIcon;
