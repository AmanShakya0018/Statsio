"use client"
import AnalyticsChart from "@/components/globals/analytics-chart"
import BrowsersAndDevicesAnalytics from "@/components/globals/browser-device-analytics"
import CountrysAnalytics from "@/components/globals/country-analytics"
import OssAnalytics from "@/components/globals/os-analytics"
import PagesAnalytics from "@/components/globals/page-analytics"
import ReferrersAnalytics from "@/components/globals/referrers-analytics"


interface SiteAnalyticsGridProps {
  siteId: string
}

export default function SiteAnalyticsGrid({ siteId }: SiteAnalyticsGridProps) {
  return (
    <>
      <AnalyticsChart siteId={siteId} />
      <div className="flex flex-col lg:flex-row w-full gap-3">
        <div className="w-full lg:w-1/2">
          <PagesAnalytics siteId={siteId} />
        </div>
        <div className="w-full lg:w-1/2">
          <ReferrersAnalytics siteId={siteId} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-3">
        <div className="w-full lg:w-1/3">
          <CountrysAnalytics siteId={siteId} />
        </div>
        <div className="w-full lg:w-1/3">
          <OssAnalytics siteId={siteId} />
        </div>
        <div className="w-full lg:w-1/3">
          <BrowsersAndDevicesAnalytics siteId={siteId} />
        </div>
      </div>
    </>
  )
}
