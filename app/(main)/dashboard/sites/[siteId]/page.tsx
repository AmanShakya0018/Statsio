"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

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

export default function SiteVisitsPage() {
  const { siteId } = useParams();

  const [visits, setVisits] = useState<Visit[]>([]);
  const [pages, setPages] = useState([]);
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

      <section className="mb-10">
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
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-1">Pages</h2>
        <pre className="bg-gray-100 p-2 rounded text-sm">{JSON.stringify(pages, null, 2)}</pre>
      </section>

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
