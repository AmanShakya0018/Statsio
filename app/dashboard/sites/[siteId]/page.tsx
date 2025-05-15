"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

interface Visit {
  id: string;
  pathname: string;
  referrer: string;
  userAgent: string;
  createdAt: string;
}

export default function SiteVisitsPage() {
  const { siteId } = useParams();
  const [visits, setVisits] = useState<Visit[]>([]);

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        const res = await axios.get(`/api/sites/${siteId}/visits`);
        setVisits(res.data);
      } catch (error) {
        console.error("Error fetching visits:", error);
      }
    };

    fetchVisits();
  }, [siteId]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Visits for Site ID: {siteId}</h1>

      {visits.length === 0 ? (
        <p>No visits yet.</p>
      ) : (
        <div className="space-y-4">
          {visits.map((visit) => (
            <div key={visit.id} className="p-4 border rounded space-y-2">
              <p><strong>Path:</strong> {visit.pathname}</p>
              <p><strong>Referrer:</strong> {visit.referrer || "Direct"}</p>
              <p><strong>User Agent:</strong> {visit.userAgent}</p>
              <p className="text-gray-600 text-sm">
                {new Date(visit.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
