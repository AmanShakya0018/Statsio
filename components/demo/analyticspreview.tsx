"use client";
import React from "react";
import SiteHeader from "./site-header";
import PagesAnalytics from "./page-analytics";
import ReffererAnalytics from "./refferer-analytics";
import Tb from "./togglebutton";
import AnalyticsChart from "./analytics-chart";

const AnalyticsPreview = () => {
  return (
    <div className="mx-auto flex h-auto w-[80rem] items-center justify-center rounded-lg bg-neutral-950 px-6 text-white shadow-2xl shadow-black">
      <div className="flex w-full flex-col space-y-6">
        <SiteHeader />
        <Tb />
        <AnalyticsChart />
        <div className="flex w-full flex-row gap-3">
          <div className="w-1/2">
            <PagesAnalytics />
          </div>
          <div className="w-1/2">
            <ReffererAnalytics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPreview;
