"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import AnalyticsPreview from "../demo/analyticspreview";
import Herobuttons from "./hero-buttons";
import TechStackSection from "./techstacksection";

const HeroSection = () => {
  return (
    <div className="mx-auto flex min-h-[100vh] flex-col items-center justify-center">
      <div
        className={cn(
          "flex h-full min-h-[99.5vh] w-full max-w-[99.5%] justify-center rounded-b-2xl",
          "bg-[radial-gradient(125%_125%_at_50%_101%,rgba(80,140,240,0.7)_0%,rgba(60,120,220,0.6)_15%,rgba(40,90,200,0.5)_30%,rgba(0,0,0,0.5)_50%,rgba(0,0,0,1)_70%,rgba(0,0,0,1)_100%)]",
        )}
      >
        <div
          className={cn(
            "mt-16 flex h-full min-h-[99.5vh] w-full flex-col justify-center rounded-b-2xl sm:mt-32 lg:mt-0 lg:flex-row",
          )}
        >
          <div className="flex lg:flex-[2]">
            <div className="flex flex-col justify-center space-y-5 pl-6 lg:mx-auto lg:max-w-[32rem] xl:pl-2">
              <Badge />
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
              <TechStackSection />
            </div>
          </div>
          <div className="relative hidden items-center overflow-hidden lg:flex lg:flex-[3]">
            {/* <div className="relative w-[calc(100%+8rem)] max-w-none"> */}
            <div className="relative w-[calc(100%+8rem)] max-w-none origin-right skew-x-[-0.05rad] skew-y-[-0.02rad]">
              <div className="min-w-[600px] scale-75 rounded-xl">
                <AnalyticsPreview />
              </div>
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

const Badge = () => {
  return (
    <div className="flex max-w-fit items-center justify-center gap-2 rounded-full border border-neutral-700/80 bg-black px-3 py-1.5">
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
  );
};
