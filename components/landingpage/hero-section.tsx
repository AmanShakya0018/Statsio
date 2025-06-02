"use client"
import React from 'react'
import { motion } from "framer-motion";
import Herobuttons from './hero-buttons';
import Image from 'next/image';

const HeroSection = () => {

  return (
    <div>
      <div className='pt-20 pb-12 lg:pt-40'>
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-6 items-center justify-center space-y-3"
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-balance relative z-20 mx-auto mt-4 max-w-4xl text-center text-5xl font-semibold tracking-tight md:text-[4.8rem]">
              <span className="inline-block bg-black dark:bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent">
                Your All-in-One Analytics Solution
              </span>
            </h1>
          </div>
          <p className="bg-clip-text bg-gradient-stop bg-black dark:bg-gradient-to-br from-white/70 via-40% via-white/70 to-white/30 max-w-sm sm:max-w-lg lg:max-w-md text-center text-base text-transparent">
            Track page views and visitors with Statsio — a minimal analytics tool for developers who prefer simplicity.
          </p>
          <Herobuttons />
          <div className="mx-auto -mt-16 max-w-7xl [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] overflow-hidden">
            <div className="[perspective:10000px] [mask-image:linear-gradient(to_right,black_50%,transparent_100%)] -mr-16 pl-16 lg:-mr-20 lg:pl-36">
              <div className="[transform:rotateX(20deg);]">
                <div className="lg:h-fit relative skew-x-[.20rad]">
                  <Image
                    className="rounded-[--radius] z-[2] relative block"
                    src="/analytics.webp"
                    alt="hero section"
                    width={2880}
                    height={2074}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection