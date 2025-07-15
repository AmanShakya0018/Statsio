"use client";

import React from "react";
import FeatureContent from "./feature-content";
import FeatureFramework from "./featureframework";
import FeatureOnboard from "./featureonboard";
import FeatureVaultlock from "./featurevaultlock";
import FeatureInsights from "./featureinsights";
import { motion } from "motion/react";

const FeaturesBlock = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-4 px-2 py-12 lg:pb-24 lg:pt-36">
      <FeatureContent />
      <motion.div
        initial={{
          opacity: 0,
          y: 5,
          filter: "blur(10px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.3,
          delay: 0.2,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="grid w-full grid-cols-1 gap-4 md:grid-cols-3"
      >
        <div className="col-span-1 md:col-span-2">
          <FeatureFramework />
        </div>
        <div className="col-span-1 md:col-span-1">
          <FeatureOnboard />
        </div>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: 5,
          filter: "blur(10px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.3,
          delay: 0.2,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="grid w-full grid-cols-1 gap-4 md:grid-cols-3"
      >
        <div className="col-span-1 md:col-span-1">
          <FeatureVaultlock />
        </div>
        <div className="col-span-1 md:col-span-2">
          <FeatureInsights />
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturesBlock;
