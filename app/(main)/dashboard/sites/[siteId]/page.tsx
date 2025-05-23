"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SiteHeader from "@/components/globals/site-header";
import useRequireAuth from "@/hooks/useRequireAuth";
import Navbar from "@/components/landingpage/navbar";
import ContentNavigation from "@/components/shared/content-navigation";
import Footer2 from "@/components/landingpage/footer2";
import ToggleButtonGroup from "@/components/globals/togglebutton";
import Trackingscript from "@/components/globals/trackingscript";
import SiteAnalyticsGrid from "@/components/project/site-analytics-grid";

interface Site {
  id: string;
  name: string;
  domain: string;
}

export default function SiteVisitsPage() {
  useRequireAuth();
  const { siteId } = useParams();
  const [sites, setSites] = useState<Site>();
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    if (!siteId) return;

    const fetchData = async () => {
      try {
        const sites = await axios.get(`/api/sites/${siteId}/data`);
        setSites(sites.data);
      } catch (error) {
        console.error("Error fetching analytics:", error);
      }
    };

    fetchData();
  }, [siteId]);


  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-3 max-w-7xl mx-auto my-4 p-4">
        <ContentNavigation>{sites?.domain}</ContentNavigation>
        <SiteHeader
          name={sites?.name ?? "Loading site..."}
          domain={sites?.domain ?? "Fetching domain..."}
          id={Array.isArray(siteId) ? siteId[0] : siteId ?? "YOUR-SITE-ID"}
        />
        <ToggleButtonGroup analytics={analytics} setAnalytics={setAnalytics} />
        {(!analytics) ? (<Trackingscript siteId={Array.isArray(siteId) ? siteId[0] : siteId ?? "YOUR-SITE-ID"} />)
          : (<SiteAnalyticsGrid siteId={Array.isArray(siteId) ? siteId[0] : siteId ?? ""} />)}
      </div>
      <Footer2 />
    </>
  );
}
