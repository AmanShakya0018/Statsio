const HeroBadge = () => {
  return (
    <>
      <div className="relative flex max-w-fit items-center justify-center gap-3 rounded-full border border-neutral-700/80 bg-black px-3 py-1.5">
        <div className="absolute inset-x-0 bottom-full h-20 w-[165px]">
          <svg
            className="h-full w-full"
            width="100%"
            height="100%"
            viewBox="0 0 50 50"
            fill="none"
          >
            {/* <g stroke="#fff" strokeWidth="0.4">
              <path d="M 69 49.8 h -30 q -3 0 -3 -3 v -15 q 0 -3 -3 -3 h -23 q -3 0 -3 -3 v -15 q 0 -3 -3 -3 h -30" />
            </g> */}
            <g mask="url(#ml-mask-1)">
              <circle
                className="multiline ml-light-1"
                cx="0"
                cy="0"
                r="20"
                fill="url(#ml-white-grad)"
              />
            </g>
            <defs>
              <mask id="ml-mask-1">
                <path
                  d="M 69 49.8 h -30 q -3 0 -3 -3 v -13 q 0 -3 -3 -3 h -23 q -3 0 -3 -3 v -13 q 0 -3 -3 -3 h -30"
                  strokeWidth="0.6"
                  stroke="white"
                />
              </mask>
              <radialGradient id="ml-white-grad" fx="1">
                <stop offset="0%" stopColor={"#3b82f6"} />
                <stop offset="20%" stopColor={"#3b82f6"} />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="relative flex h-1 w-1 items-center justify-center rounded-full bg-blue-500/40">
          <div className="flex h-2 w-2 animate-ping items-center justify-center rounded-full bg-blue-500">
            <div className="flex h-2 w-2 animate-ping items-center justify-center rounded-full bg-blue-500"></div>
          </div>
          <div className="absolute left-1/2 top-1/2 flex h-1 w-1 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-400"></div>
        </div>
        <span className="bg-clip-text text-xs font-medium text-zinc-300">
          Blazingly fast analytics
        </span>
      </div>
      <style>
        {`    
.multiline {
  offset-anchor: 10px 0px;
  animation: multiline-animation-path;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 3s;
}

.ml-light-1 {
  offset-path: path(
    "M 69 49.8 h -30 q -3 0 -3 -3 v -13 q 0 -3 -3 -3 h -23 q -3 0 -3 -3 v -13 q 0 -3 -3 -3 h -50"
  );
}

@keyframes multiline-animation-path {
  0% {
    offset-distance: 0%;
  }
  50% {
    offset-distance: 100%;
  }
  100% {
    offset-distance: 100%;
  }
}`}
      </style>
    </>
  );
};
export default HeroBadge;
