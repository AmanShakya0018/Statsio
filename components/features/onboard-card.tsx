"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { LuLoader } from "react-icons/lu";

interface OnboardCardProps {
  duration?: number;
  step1?: string;
  step2?: string;
  step3?: string;
}

const OnboardCard = ({
  duration = 3000,
  step1 = "Welcome Aboard",
  step2 = "Verifying Details",
  step3 = "Account Created",
}: OnboardCardProps) => {
  const [progress, setProgress] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    const forward = setTimeout(() => setProgress(100), 100);
    const reset = setTimeout(() => {
      setAnimateKey((k) => k + 1);
    }, duration + 2000);

    return () => {
      clearTimeout(forward);
      clearTimeout(reset);
    };
  }, [animateKey, duration]);

  return (
    <div
      className={cn(
        "relative",
        "mt-4 flex flex-col items-center justify-center gap-1 p-1",
      )}
    >
      <div className="flex w-full max-w-[250px] scale-[0.9] flex-col justify-center gap-2 rounded-md border border-neutral-800 bg-gradient-to-br from-neutral-800 to-neutral-950 py-2 pl-3 pr-16 opacity-80">
        <div className="flex items-center justify-start gap-2 text-xs text-white">
          <div>
            <LuLoader />
          </div>
          <div>{step3}</div>
        </div>
        <div
          className={`ml-5 h-1.5 w-[100%] overflow-hidden rounded-full bg-neutral-700`}
        ></div>
      </div>
      <div className="flex w-full max-w-[250px] flex-col justify-center gap-2 rounded-md border border-neutral-800 bg-gradient-to-br from-neutral-800 to-neutral-950 py-2 pl-3 pr-16">
        <div className="flex items-center justify-start gap-1.5 text-xs text-white">
          <div className="animate-spin">
            <LuLoader />
          </div>
          <div>{step2}</div>
        </div>
        <div
          className={`ml-5 h-1.5 w-[100%] overflow-hidden rounded-full bg-neutral-700`}
        >
          <motion.div
            key={animateKey}
            className="h-full bg-cyan-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: duration / 1000, ease: "easeInOut" }}
          />
        </div>
      </div>
      <div className="flex w-full max-w-[250px] scale-[0.9] flex-col justify-center gap-2 rounded-md border border-neutral-800 bg-gradient-to-br from-neutral-800 to-neutral-950 py-2 pl-3 pr-16 opacity-80">
        <div className="flex items-center justify-start text-xs text-white">
          <div className="relative">
            <svg width="20" height="20">
              <circle cx="10" cy="10" r="5" fill="#06b6d4" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-neutral-900">
              <IoMdCheckmark className="size-2" />
            </div>
          </div>
          <div>{step1}</div>
        </div>
        <div
          className={`ml-5 h-1.5 w-[100%] overflow-hidden rounded-full bg-cyan-500`}
        ></div>
      </div>
      <div className="absolute top-0 h-[40%] w-full [background-image:linear-gradient(to_bottom,rgba(10,10,10,1)_20%,transparent_100%)]" />
      <div className="absolute bottom-0 h-[40%] w-full [background-image:linear-gradient(to_top,rgba(10,10,10,1)_20%,transparent_100%)]" />
    </div>
  );
};
export default OnboardCard;
