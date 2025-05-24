"use client";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import SiteHeader from "@/components/globals/site-header";
import useRequireAuth from "@/hooks/useRequireAuth";
import Navbar from "@/components/landingpage/navbar";
import Footer2 from "@/components/landingpage/footer2";
import ToggleButtonGroup from "@/components/globals/togglebutton";
import Trackingscript from "@/components/globals/trackingscript";
import SiteAnalyticsGrid from "@/components/project/site-analytics-grid";


export default function SiteVisitsPage() {
  useRequireAuth();
  const { siteId } = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();

  const analyticsParam = searchParams.get("analytics") === "true";
  const resolvedSiteid = Array.isArray(siteId) ? siteId[0] : siteId ?? "";

  const handleAnalyticsToggle = (value: boolean) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("analytics", "true");
    } else {
      params.delete("analytics");
    }
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-3 max-w-7xl mx-auto my-4 p-4">
        <SiteHeader
          siteId={resolvedSiteid}
        />
        <ToggleButtonGroup analytics={analyticsParam} setAnalytics={handleAnalyticsToggle} />
        {!analyticsParam ? (
          <Trackingscript siteId={resolvedSiteid} />
        ) : (
          <SiteAnalyticsGrid siteId={resolvedSiteid} />
        )}
      </div>
      <Footer2 />
    </>
  );
}
