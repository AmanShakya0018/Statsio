"use client";

import React from "react";
import FeatureContent from "./feature-content";
import F4 from "./f4";
import F2 from "./f2";
import F1 from "./f1";
import F3 from "./f3";

const FeaturesBlock = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-4 py-12 lg:pb-24 lg:pt-36">
      <FeatureContent />

      <div className="mt-5 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        <F4 />

        <F2 />
      </div>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="md:col-span-1 lg:col-span-2">
          <F1 />
        </div>
        <div className="md:col-span-1 lg:col-span-1">
          <F3 />
        </div>
      </div>
    </div>
  );
};

export default FeaturesBlock;
