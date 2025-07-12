"use client";
import React from "react";
import { PointerHighlight } from "../ui/pointer-highlight";
import FeaturesBentoGrid from "./features-bento-grid";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      id="features"
      className="mx-auto w-full px-4 py-8 md:px-8"
    >
      <div className="relative mx-auto flex w-fit items-center justify-center p-4">
        <h2 className="text-center font-sans text-xl font-bold tracking-tight text-neutral-100 md:text-4xl">
          <PointerHighlight>
            <span className="mb-3 bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-3xl font-semibold text-transparent md:text-5xl">
              Analytics made easy
            </span>
          </PointerHighlight>
        </h2>
      </div>

      <p className="mx-auto mb-6 mt-4 max-w-lg text-center text-sm text-neutral-400">
        From tech stacks to traffic sources—get fast, global insights on who’s
        visiting and how.
      </p>
      <FeaturesBentoGrid />
    </motion.section>
  );
};

export default FeaturesSection;
