"use client"
import React from 'react';
import { PointerHighlight } from '../ui/pointer-highlight';
import FeaturesBentoGrid from './features-bento-grid';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      viewport={{ once: true }}
      id="features"
      className="w-full mx-auto bg-white dark:bg-neutral-950 py-8 px-4 md:px-8"
    >
      <div className="relative w-fit mx-auto p-4 flex items-center justify-center">
        <h2 className="font-sans text-xl text-center md:text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100">
          <PointerHighlight>
            <span className='text-4xl font-semibold mb-3 bg-black dark:bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent'>
              Analytics made easy
            </span>
          </PointerHighlight>
        </h2>
      </div>

      <p className="max-w-lg text-sm text-neutral-600 text-center mx-auto mt-4 mb-6 dark:text-neutral-400">
        Track what matters, forget the noise.
      </p>
      <FeaturesBentoGrid />


    </motion.section>
  );
};

export default FeaturesSection;
