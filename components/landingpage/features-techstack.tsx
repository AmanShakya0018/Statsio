import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";

const FeatureTechstack = () => {
  return (
    <Card className="group relative rounded-md border-neutral-900 bg-black sm:col-span-3">
      <CardHeader className="p-0"></CardHeader>
      <CardContent className="relative h-fit px-6 py-6 md:px-12 md:py-8">
        <div className="flex items-center justify-center gap-4">
          <div className="flex aspect-square items-center justify-center rounded-md border border-neutral-800 bg-neutral-800/50 p-4 [@media(min-width:350px)]:h-20 [@media(min-width:450px)]:h-28">
            <RiNextjsFill size={36} className="text-white" />
          </div>
          <div className="flex aspect-square items-center justify-center rounded-md border border-neutral-800 bg-neutral-800/50 p-4 [@media(min-width:350px)]:h-20 [@media(min-width:450px)]:h-28">
            <IoLogoReact size={36} className="text-white" />
          </div>
          <div className="flex aspect-square items-center justify-center rounded-md border border-neutral-800 bg-neutral-800/50 p-4 [@media(min-width:350px)]:h-20 [@media(min-width:450px)]:h-28">
            <FaHtml5 size={36} className="text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureTechstack;
