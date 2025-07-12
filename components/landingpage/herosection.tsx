"use client";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import AnalyticsPreview from "../demo/analyticspreview";

const HeroSection = () => {
  return (
    <div className="mx-auto flex min-h-[100vh] flex-col items-center justify-center">
      <div
        className={cn(
          "flex h-full min-h-[99.5vh] w-full max-w-[99.5%] justify-center rounded-b-2xl",
          "bg-[radial-gradient(125%_125%_at_50%_101%,rgba(140,80,240,0.4)_0%,rgba(120,60,220,0.3)_15%,rgba(90,40,200,0.2)_30%,rgba(30,30,30,0.3)_50%,rgba(0,0,0,1)_70%,rgba(0,0,0,1)_100%)]",
        )}
      >
        <div
          className={cn(
            "mt-16 flex h-full min-h-[99.5vh] w-full flex-col justify-center rounded-b-2xl sm:mt-32 lg:mt-0 lg:flex-row",
          )}
        >
          <div className="flex lg:flex-[2]">
            <div className="flex flex-col justify-center space-y-5 pl-6 lg:mx-auto lg:max-w-[32rem] xl:pl-2">
              <motion.h1 className="max-w-lg whitespace-pre-wrap text-balance font-sans text-4xl font-bold tracking-tight text-white md:max-w-2xl md:text-5xl">
                Unlock Real Insights from Simple Stats
              </motion.h1>
              <motion.p className="max-w-sm text-balance text-[0.95rem] text-neutral-400 sm:max-w-lg md:text-[1.1rem] lg:max-w-md">
                Track page views and visitors with Statsio, a minimal analytics
                tool for developers who prefer simplicity.
              </motion.p>
              <motion.div className="flex items-start">
                <Herobuttons />
              </motion.div>
            </div>
          </div>
          <div className="relative hidden items-center overflow-hidden lg:flex lg:flex-[3]">
            {/* <div className="relative w-[calc(100%+8rem)] max-w-none"> */}
            <div className="relative w-[calc(100%+8rem)] max-w-none origin-right skew-x-[-0.05rad] skew-y-[-0.02rad]">
              <div className="min-w-[600px] scale-75 rounded-xl">
                <AnalyticsPreview />
              </div>
              {/* <div
                className="relative transform-gpu transition-transform duration-700"
                style={{
                  perspective: "2000px",
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="relative transform-gpu transition-all duration-500"
                  style={{
                    transform: "rotateY(-15deg) rotateX(5deg) translateZ(50px)",
                    transformOrigin: "center center",
                  }}
                >
                  <Image
                    src="/forgeui-statsio.png"
                    alt="Hero Image"
                    width={2000}
                    height={2000}
                    priority
                    quality={99}
                    className="h-auto w-full min-w-[600px] rounded-xl object-cover shadow-2xl shadow-black"
                  />
                </div>
              </div> */}
            </div>
          </div>
          <div className="mx-auto mt-4 block max-w-7xl overflow-hidden lg:hidden">
            <div className="-mr-16 pl-2">
              <div className="relative skew-x-[.10rad] p-6">
                <Image
                  className="rounded-xl shadow-lg shadow-black"
                  src="/forgeui-statsio.png"
                  alt="hero section"
                  width={2000}
                  height={2000}
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

const Herobuttons = () => {
  return (
    <div className="mt-4 flex items-center gap-4 sm:gap-3">
      <Link
        href={"/dashboard/sites"}
        className={cn(
          "group relative flex h-9 w-full cursor-pointer items-center justify-center gap-1 rounded-sm bg-white px-4 py-1.5 text-[0.9rem] font-semibold text-black no-underline transition-all duration-300 hover:bg-neutral-200 md:h-10 md:px-8 md:py-2 md:text-[1rem]",
        )}
      >
        <TextGlitch text={"Get Started"} />
      </Link>
      <Link
        href="/docs"
        className="group flex w-full items-center gap-2 text-nowrap rounded-sm bg-neutral-900/90 py-[9.75px] pl-3 pr-2 text-[0.9rem] text-sm text-neutral-200 transition-all duration-300 hover:bg-neutral-900 hover:text-white"
      >
        See How It Works
        <div className="relative overflow-hidden font-medium">
          <span className="invisible">
            <ChevronRightIcon size={14} />
          </span>
          <span className="absolute left-0 top-0 text-neutral-200 transition-transform duration-300 ease-in-out hover:duration-150 group-hover:translate-x-full group-hover:text-white">
            <ChevronRightIcon size={14} />
          </span>
          <span className="absolute left-0 top-0 -translate-x-full text-neutral-200 transition-transform duration-300 ease-in-out hover:duration-150 group-hover:translate-x-0 group-hover:text-white">
            <ChevronRightIcon size={14} />
          </span>
        </div>
      </Link>
    </div>
  );
};

function TextGlitch({ text }: { text: string }) {
  return (
    <div className="relative overflow-hidden">
      <span className="invisible">{text}</span>
      <span className="absolute left-0 top-0 font-semibold transition-transform duration-500 ease-in-out [text-shadow:0_0.5px_0_rgb(255,255,255,.48)] hover:duration-300 group-hover:-translate-y-full">
        {text}
      </span>
      <span className="absolute left-0 top-0 translate-y-full font-semibold transition-transform duration-500 ease-in-out [text-shadow:0_0.5px_0_rgb(255,255,255,.48)] hover:duration-300 group-hover:translate-y-0">
        {text}
      </span>
    </div>
  );
}
