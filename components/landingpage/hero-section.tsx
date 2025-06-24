"use client";
import React from "react";
import { motion } from "motion/react";
import Herobuttons from "./hero-buttons";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <div className="pb-12 pt-20 lg:pt-40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 space-y-3 px-4 py-4">
          <div className="flex flex-col items-center justify-center">
            <motion.h1
              initial={{
                y: 10,
                filter: "blur(10px)",
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                filter: "blur(0px)",
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              className="relative z-20 mx-auto mt-4 max-w-4xl text-balance text-center text-5xl font-semibold tracking-tight md:text-[4.8rem]"
            >
              <span className="inline-block bg-black bg-clip-text text-transparent dark:bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)]">
                Your All-in-One Analytics Solution
              </span>
            </motion.h1>
          </div>
          <motion.p
            initial={{
              y: 10,
              filter: "blur(10px)",
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              filter: "blur(0px)",
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="bg-gradient-stop max-w-sm bg-black from-white/70 via-white/70 via-40% to-white/30 bg-clip-text text-center text-base text-transparent dark:bg-gradient-to-br sm:max-w-lg lg:max-w-md"
          >
            Track page views and visitors with Statsio — a minimal analytics
            tool for developers who prefer simplicity.
          </motion.p>
          <motion.div
            initial={{
              y: 5,
              filter: "blur(5px)",
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              filter: "blur(0px)",
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.5,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
          >
            <Herobuttons />
          </motion.div>
          <motion.div
            initial={{
              y: 5,
              filter: "blur(5px)",
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              filter: "blur(0px)",
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.6,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="mx-auto -mt-16 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]"
          >
            <div className="-mr-16 pl-16 [mask-image:linear-gradient(to_right,black_50%,transparent_100%)] [perspective:10000px] lg:-mr-20 lg:pl-36">
              <div className="[transform:rotateX(20deg);]">
                <div className="relative skew-x-[.20rad] lg:h-fit">
                  <Image
                    className="relative z-[2] block rounded-[--radius]"
                    src="/analytics.webp"
                    alt="hero section"
                    width={2880}
                    height={2074}
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
