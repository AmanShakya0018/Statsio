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
          className="max-w-[88rem] mx-auto px-4 py-4 flex flex-col gap-4 items-center justify-center space-y-3"
        >
          <div className="flex flex-col items-center justify-center">
            {/* <h1 className="tracking-tighter max-w-[40rem] text-4xl lg:text-6xl text-center font-bold"> */}
            <h1 className="text-balance relative z-20 mx-auto mb-4 mt-4 max-w-4xl text-center text-4xl font-semibold tracking-tight text-neutral-300 md:text-7xl">
              <span className="inline-block bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent">
                Your All-in-One Analytics Solution
              </span>
            </h1>
          </div>
          <p className="text-primary/80 max-w-[34rem] text-center tracking-tight md:text-lg font-light">
            Smarter web analytics for modern developers — built to give you actionable metrics, instantly.
          </p>
          <Herobuttons />
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection