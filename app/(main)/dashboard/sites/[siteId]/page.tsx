"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import PagesAnalytics from "@/components/globals/page-analytics";
import ReferrersAnalytics from "@/components/globals/referrers-analytics";
import CountrysAnalytics from "@/components/globals/country-analytics";
import OssAnalytics from "@/components/globals/os-analytics";
import BrowsersAndDevicesAnalytics from "@/components/globals/browser-device-analytics";
import AnalyticsChart from "@/components/globals/analytics-chart";
import { Themetoggle } from "@/components/shared/ThemeToggle";
import SiteHeader from "@/components/globals/site-header";

interface Page {
  pathname: string;
  count: number;
}

interface Site {
  id: string;
  name: string;
  domain: string;
}


export default function SiteVisitsPage() {
  const { siteId } = useParams();

  const [sites, setSites] = useState<Site>();
  const [pages, setPages] = useState<Page[]>([]);
  const [referrers, setReferrers] = useState([]);
  const [countries, setCountries] = useState([]);
  const [devices, setDevices] = useState([]);
  const [oses, setOses] = useState([]);
  const [browser, setBrowser] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!siteId) return;

    const fetchData = async () => {
      try {
        // setLoading(true);
        const sites = await axios.get(`/api/sites/${siteId}/data`);
        setSites(sites.data);

        const pages = await axios.get(`/api/sites/${siteId}/analytics/pages`);
        setPages(pages.data);

        const referrers = await axios.get(`/api/sites/${siteId}/analytics/referrers`);
        setReferrers(referrers.data);

        const countries = await axios.get(`/api/sites/${siteId}/analytics/countries`);
        setCountries(countries.data);

        const devices = await axios.get(`/api/sites/${siteId}/analytics/devices`);
        setDevices(devices.data);

        const oses = await axios.get(`/api/sites/${siteId}/analytics/os`);
        setOses(oses.data);

        const browser = await axios.get(`/api/sites/${siteId}/analytics/browser`);
        setBrowser(browser.data);
      } catch (error) {
        console.error("Error fetching analytics:", error);
      }
      // finally {
      //   setLoading(false);
      // }
    };

    fetchData();
  }, [siteId]);


  return (
    <div className="flex flex-col gap-3 max-w-7xl mx-auto p-4">
      <Themetoggle />
      <SiteHeader
        name={sites?.name ?? "Loading site..."}
        domain={sites?.domain ?? "Fetching domain..."}
      />
      <AnalyticsChart siteId={Array.isArray(siteId) ? siteId[0] : siteId ?? ""} />
      <div className="flex flex-col lg:flex-row w-full gap-3">
        <div className="w-full lg:w-1/2">
          <PagesAnalytics pages={pages} />
        </div>
        <div className="w-full lg:w-1/2">
          <ReferrersAnalytics referrers={referrers} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-3">
        <div className="w-full lg:w-1/3">
          <CountrysAnalytics countries={countries} />
        </div>
        <div className="w-full lg:w-1/3">
          <OssAnalytics oses={oses} />
        </div>
        <div className="w-full lg:w-1/3">
          <BrowsersAndDevicesAnalytics browsers={browser} devices={devices} />
        </div>
      </div>
    </div>
  );
}
