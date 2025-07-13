import React from "react";

const GlowIcon = () => {
  return (
    <div className="[perspective:400px] [transform-style:preserve-3d]">
      <div
        className="relative mx-auto h-14 w-14 rounded-md bg-gradient-to-b from-neutral-800 to-neutral-950 p-[4px]"
        style={{ transform: "rotateX(25deg)", transformOrigin: "center" }}
      >
        <div className="relative z-20 flex h-full w-full items-center justify-center overflow-hidden rounded-[5px] bg-black">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 320 512"
            className="h-6 w-6 text-cyan-500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"></path>
          </svg>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-30 mx-auto h-4 w-full rounded-full bg-neutral-600 opacity-50 blur-lg" />

        <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 mx-auto h-[8px] w-[60%] bg-gradient-to-r from-transparent via-cyan-600 to-transparent blur-sm" />
      </div>
    </div>
  );
};

export default GlowIcon;
