"use client";

import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma, SiTailwindcss, SiTypescript } from "react-icons/si";
import { motion } from "motion/react";

const TechStackSection = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 8,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.3,
        delay: 0.25,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      className="flex items-center gap-4 pt-2 text-neutral-400"
    >
      <p className="text-sm text-neutral-400 md:text-[1rem]">Built with</p>
      <div>
        <RiNextjsFill className="size-5 md:size-6" />
      </div>
      <div>
        <BiLogoPostgresql className="size-5 md:size-6" />
      </div>
      <div>
        <SiPrisma className="size-4 md:size-5" />
      </div>
      <div>
        <FaReact className="size-4 md:size-5" />
      </div>
      <div>
        <SiTypescript className="size-4 md:size-5" />
      </div>
      <div>
        <SiTailwindcss className="size-4 md:size-5" />
      </div>
    </motion.div>
  );
};
export default TechStackSection;
