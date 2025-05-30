import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconDatabaseExport,
} from "@tabler/icons-react";
import { MdAnalytics, MdInsights } from "react-icons/md";
import { Earth } from "lucide-react";

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
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Real-time Analytics",
    description: "Track website performance as it happens with live updates and instant insights.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <MdAnalytics className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Visitor Insights",
    description: "Understand your audience with detailed breakdowns of visitor behavior and demographics.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <MdInsights className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Data Export",
    description: "Export your data to PDF for offline analysis and sharing.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconDatabaseExport className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Global Tracking",
    description:
      "Monitor visitor locations and understand your worldwide audience distribution.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <Earth className="h-4 w-4 text-neutral-500" />,
  },
];
