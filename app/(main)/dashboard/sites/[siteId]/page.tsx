"use client";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import SiteHeader from "@/components/globals/site-header";
import useRequireAuth from "@/hooks/useRequireAuth";
import Footer2 from "@/components/landingpage/footer2";
import ToggleButtonGroup from "@/components/globals/togglebutton";
import Trackingscript from "@/components/globals/trackingscript";
import SiteAnalyticsGrid from "@/components/project/site-analytics-grid";
import Navbar from "@/components/landingpage/navbar-shrink";
import { useSession } from "next-auth/react";

export default function SiteVisitsPage() {
  useRequireAuth();
  const { status } = useSession();
  const { siteId } = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();

  const analyticsParam = searchParams.get("analytics") === "true";
  const resolvedSiteid = Array.isArray(siteId) ? siteId[0] : (siteId ?? "");

  const handleAnalyticsToggle = (value: boolean) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("analytics", "true");
    } else {
      params.delete("analytics");
    }
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  if (status !== "authenticated") return null;

  return (
    <div className="bg-black">
      <Navbar />
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 pb-4 pt-24">
        <SiteHeader siteId={resolvedSiteid} />
        <ToggleButtonGroup
          analytics={analyticsParam}
          setAnalytics={handleAnalyticsToggle}
        />
        {!analyticsParam ? (
          <Trackingscript siteId={resolvedSiteid} />
        ) : (
          <SiteAnalyticsGrid siteId={resolvedSiteid} />
        )}
      </div>
      <Footer2 />
    </div>
  );
}
