import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { MdInsights, MdSpeed } from "react-icons/md";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { Earth } from "lucide-react";
import WorldMap from "./world-map";
import FeatureTechstack from "./features-techstack";
import FeaturesVisitorInsights from "./features-insights";
import OnboardCard from "./onboard-card";

export default function FeaturesBentoGrid() {
  return (
    <BentoGrid className="mx-auto max-w-6xl md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const items = [
  {
    title: "Framework Agnostic",
    description:
      "Seamlessly integrate with any tech stack, whether it's Next.js, React, HTML, or anything else. Statsio works everywhere.",
    header: <FeatureTechstack />,
    className: "md:col-span-2",
    icon: <HiOutlineCodeBracket className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Effortless Onboarding",
    description:
      "Visualize every step of setup with real-time feedback — crafted for clarity and trust.",
    header: <OnboardCard />,
    className: "md:col-span-1",
    icon: <MdSpeed className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Global Insights",
    description:
      "Accurate country-level tracking, helping you understand your audience geography in real-time.",
    header: <WorldMap />,
    className: "md:col-span-1",
    icon: <Earth className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Visitor Insights",
    description:
      "Get a clear breakdown of your traffic with real-time data on unique visitors, device types, browsers, and operating systems.",
    header: <FeaturesVisitorInsights />,
    className: "md:col-span-2",
    icon: <MdInsights className="h-4 w-4 text-neutral-500" />,
  },
];
