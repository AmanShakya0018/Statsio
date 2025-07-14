"use client";

import { cn } from "@/lib/utils";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { useState, useEffect } from "react";

const FrameworkCard = () => {
  const [nextJsTransform, setNextJsTransform] = useState("none");
  const [reactTransform, setReactTransform] = useState("none");
  const [htmlTransform, setHtmlTransform] = useState("none");

  useEffect(() => {
    const cycleAnimations = async () => {
      const upStyle = "translateY(-3.71px) rotateX(10.71deg) translateZ(20px)";
      const downStyle = "none";

      const transitionDuration = 1100;

      const durationOfUpState = 1200;
      const delayBetweenCards = 600;

      while (true) {
        setReactTransform(upStyle);
        await new Promise((resolve) => setTimeout(resolve, durationOfUpState));
        setReactTransform(downStyle);
        await new Promise((resolve) =>
          setTimeout(resolve, transitionDuration + delayBetweenCards),
        );

        setNextJsTransform(upStyle);
        await new Promise((resolve) => setTimeout(resolve, durationOfUpState));
        setNextJsTransform(downStyle);
        await new Promise((resolve) =>
          setTimeout(resolve, transitionDuration + delayBetweenCards),
        );

        setHtmlTransform(upStyle);
        await new Promise((resolve) => setTimeout(resolve, durationOfUpState));
        setHtmlTransform(downStyle);
        await new Promise((resolve) =>
          setTimeout(resolve, transitionDuration + delayBetweenCards),
        );
      }
    };

    cycleAnimations();
  }, []);

  const cardClasses =
    "flex aspect-square items-center justify-center rounded-md border border-neutral-800 bg-gradient-to-b from-neutral-700 to-neutral-900 p-4 " +
    "[@media(min-width:320px)]:h-20 [@media(min-width:500px)]:h-36 " +
    "transition-transform duration-1000 ease-out will-change-transform";

  return (
    <>
      <div
        className={cn(
          "relative",
          "flex flex-col items-center justify-center gap-1",
          "h-[14.5rem] w-full",
        )}
      >
        <div className="absolute flex h-full w-full items-center justify-center">
          <div className="h-full w-[15rem]">
            <svg
              className="h-full w-full"
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              fill="none"
            >
              <g stroke="#737373" strokeWidth="0.1">
                <path d="M 1 0 v 5 q 0 5 5 5 h 39 q 5 0 5 5 v 71 q 0 5 5 5 h 39 q 5 0 5 5 v 5" />
              </g>
              <g mask="url(#framework-mask)">
                <circle
                  className="frameworkline framework-line"
                  cx="0"
                  cy="0"
                  r="12"
                  fill="url(#framework-blue-grad)"
                />
              </g>
              <defs>
                <mask id="framework-mask">
                  <path
                    d="M 1 0 v 5 q 0 5 5 5 h 39 q 5 0 5 5 v 71 q 0 5 5 5 h 39 q 5 0 5 5 v 5"
                    strokeWidth="0.3"
                    stroke="white"
                  />
                </mask>
                <radialGradient id="framework-blue-grad" fx="1">
                  <stop offset="0%" stopColor={"#3b82f6"} />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div
          className={cn(
            "flex items-center justify-center gap-4",
            "[perspective:1000px] [transform-style:preserve-3d]",
          )}
        >
          <div className={cardClasses} style={{ transform: reactTransform }}>
            <IoLogoReact className="size-6 text-neutral-100 [@media(min-width:500px)]:size-9" />
          </div>
          <div className={cardClasses} style={{ transform: nextJsTransform }}>
            <RiNextjsFill className="size-6 text-neutral-100 [@media(min-width:500px)]:size-9" />
          </div>
          <div className={cardClasses} style={{ transform: htmlTransform }}>
            <FaHtml5 className="size-6 text-neutral-100 [@media(min-width:500px)]:size-9" />
          </div>
        </div>
      </div>
      <style>
        {`    
.frameworkline {
  offset-anchor: 10px 0px;
  animation: frameworkline-animation-path;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.9, 0.8, 0.8, 0.9);
  animation-duration: 3.5s;
}

.framework-line {
  offset-path: path(
    "M 1 0 v 5 q 0 5 5 5 h 39 q 5 0 5 5 v 71 q 0 5 5 5 h 39 q 5 0 5 5 v 20"
  );
}

@keyframes frameworkline-animation-path {
  0% {
    offset-distance: 0%;
  }
  85% {
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
export default FrameworkCard;
