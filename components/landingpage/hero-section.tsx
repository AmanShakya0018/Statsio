"use client"
import React from 'react'
import { motion } from "framer-motion";
import Herobuttons from './hero-buttons';

const HeroSection = () => {

  return (
    <div>
      <div className='py-2 lg:py-16'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4 items-center justify-center space-y-3"
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-balance relative z-20 mx-auto mt-4 max-w-4xl text-center text-4xl font-semibold tracking-tight md:text-7xl">
              <span className="inline-block bg-black dark:bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent">
                Your All-in-One Analytics Solution
              </span>
            </h1>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-[34rem] text-center tracking-tight md:text-lg font-light">
            Your site deserves more than page views — get deep, actionable insights from real users with Statsio.
          </p>
          <Herobuttons />
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection