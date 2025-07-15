"use client";

import React from "react";
// import FeatureContent from "./feature-content";
// import FeatureFramework from "./featureframework";
// import FeatureOnboard from "./featureonboard";
import FeatureVaultlock from "./featurevaultlock";
import FeatureInsights from "./featureinsights";

const FeaturesBlock = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-4 py-12 lg:pb-24 lg:pt-36">
      {/* <FeatureContent />
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
        <div className="col-span-1 md:col-span-2">
          <FeatureFramework />
        </div>
        <div className="col-span-1 md:col-span-1">
          <FeatureOnboard />
        </div>
      </div> */}
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
        <div className="col-span-1 md:col-span-1">
          <FeatureVaultlock />
        </div>
        <div className="col-span-1 md:col-span-2">
          <FeatureInsights />
        </div>
      </div>
    </div>
  );
};

export default FeaturesBlock;
