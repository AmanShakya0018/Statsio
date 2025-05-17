"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import PagesAnalytics from "@/components/globals/page-analytics";

interface Visit {
  id: string;
  pathname: string;
  referrer: string;
  userAgent: string;
  device: string;
  country: string;
  os: string;
  browser: string;
  createdAt: string;
}

interface Page {
  pathname: string;
  count: number;
}


export default function SiteVisitsPage() {
  const { siteId } = useParams();

  const [, setVisits] = useState<Visit[]>([]);
  const [pages, setPages] = useState<Page[]>([]);
  const [referrers, setReferrers] = useState([]);
  const [countries, setCountries] = useState([]);
  const [devices, setDevices] = useState([]);
  const [oses, setOses] = useState([]);
  const [timeseries, setTimeseries] = useState([]);
  const [browser, setBrowser] = useState([]);

  useEffect(() => {
    if (!siteId) return;

    const fetchData = async () => {
      try {
        const visits = await axios.get(`/api/sites/${siteId}/visits`);
        setVisits(visits.data);

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

        const timeseries = await axios.get(`/api/sites/${siteId}/analytics/timeseries`);
        setTimeseries(timeseries.data);

        const browser = await axios.get(`/api/sites/${siteId}/analytics/browser`);
        setBrowser(browser.data);
      } catch (error) {
        console.error("Error fetching analytics:", error);
      }
    };

    fetchData();
  }, [siteId]);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Analytics for Site ID: {siteId}</h1>

      {/* <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Visits</h2>
        {visits.length === 0 ? (
          <p>No visits yet.</p>
        ) : (
          <div className="space-y-4">
            {visits.map((visit) => (
              <div key={visit.id} className="p-4 border rounded space-y-1">
                <p><strong>Path:</strong> {visit.pathname}</p>
                <p><strong>Referrer:</strong> {visit.referrer || "Direct"}</p>
                <p><strong>Device:</strong> {visit.device}</p>
                <p><strong>Country:</strong> {visit.country}</p>
                <p><strong>OS:</strong> {visit.os}</p>
                <p><strong>Browser:</strong> {visit.browser}</p>
                <p className="text-gray-600 text-sm">
                  {new Date(visit.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </section> */}

      {/* <section className="mb-8">
        <div className="bg-zinc-900 rounded-lg overflow-hidden shadow">
          <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
            <h2 className="text-sm font-semibold text-white">Pages</h2>
            <span className="text-sm text-zinc-400">VISITORS</span>
          </div>
          <ul>
            {pages.slice(0, 6).map((page: Page,) => (
              <li
                key={page.pathname}
                className="flex items-center justify-between px-4 py-2 hover:bg-zinc-800"
              >
                <div className="truncate text-sm text-white w-2/3">{page.pathname}</div>
                <div className="flex items-center space-x-2 w-1/3 justify-end">
                  <div className="bg-zinc-700 h-2 rounded w-full relative">
                    <div
                      className="absolute top-0 left-0 h-2 bg-white rounded"
                      style={{
                        width: `${(page.count / pages[0].count) * 100
                          }%`,
                      }}
                    />
                  </div>
                  <span className="text-sm text-white w-6 text-right">{page.count}</span>
                </div>
              </li>
            ))}

            {pages.length > 6 && (
              <li className="flex items-center justify-between px-4 py-2 border-t border-zinc-800 text-sm text-zinc-400 hover:bg-zinc-800">
                <button className="flex items-center space-x-1">
                  <span>View All</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <span className="text-zinc-500">...</span>
              </li>
            )}
          </ul>
        </div>
      </section> */}

      <PagesAnalytics pages={pages} />


      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-1">Referrers</h2>
        <pre className="bg-gray-100 p-2 rounded text-sm">{JSON.stringify(referrers, null, 2)}</pre>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-1">Countries</h2>
        <pre className="bg-gray-100 p-2 rounded text-sm">{JSON.stringify(countries, null, 2)}</pre>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-1">Devices</h2>
        <pre className="bg-gray-100 p-2 rounded text-sm">{JSON.stringify(devices, null, 2)}</pre>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-1">OS</h2>
        <pre className="bg-gray-100 p-2 rounded text-sm">{JSON.stringify(oses, null, 2)}</pre>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-1">Browser</h2>
        <pre className="bg-gray-100 p-2 rounded text-sm">{JSON.stringify(browser, null, 2)}</pre>
      </section>
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-1">Time Series</h2>
        <pre className="bg-gray-100 p-2 rounded text-sm">{JSON.stringify(timeseries, null, 2)}</pre>
      </section>
    </div>
  );
}
