import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconDatabaseExport,
} from "@tabler/icons-react";
import { MdAnalytics, MdInsights } from "react-icons/md";
import { Earth } from "lucide-react";
import WorldMap from "./world-map";

export default function FeaturesBentoGrid() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
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
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
  </div>
);
const items = [
  {
    title: "Data Export",
    description: "Easily export your analytics data in CSV format for custom reports, backups, or deeper analysis.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconDatabaseExport className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Visitor Insights",
    description: "Get a clear breakdown of your traffic with real-time data on unique visitors, device types, browsers, and operating systems.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <MdInsights className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Global Insights",
    description: "Accurate country-level tracking, helping you understand your audience geography in real-time.",
    header: <WorldMap />,
    className: "md:col-span-1",
    icon: <Earth className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Real-time Analytics",
    description: "Track website performance as it happens with live updates and instant insights.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <MdAnalytics className="h-4 w-4 text-neutral-500" />,
  },
];
