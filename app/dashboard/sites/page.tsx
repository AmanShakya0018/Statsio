"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SitesPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [sites, setSites] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [domain, setDomain] = useState("");

  useEffect(() => {
    const fetchSites = async () => {
      try {
        const res = await axios.get("/api/sites");
        setSites(res.data);
      } catch (error) {
        console.error("Error fetching sites:", error);
      }
    };

    fetchSites();
  }, []);

  const handleAddSite = async () => {
    if (!name || !domain) return alert("Fill both fields");

    try {
      const res = await axios.post("/api/sites", { name, domain });
      const newSite = res.data;
      setSites([newSite, ...sites]);
      setName("");
      setDomain("");
    } catch (error) {
      console.error("Error adding site:", error);
      alert("Error adding site");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Your Sites</h1>

      <div className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Site Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Domain (e.g. example.com)"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleAddSite}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Add Site
        </button>
      </div>

      <div className="space-y-4">
        {sites.length === 0 ? (
          <p>No sites yet. Add one above.</p>
        ) : (
          sites.map((site) => (
            <div key={site.id} className="p-4 border rounded space-y-2">
              <h2 className="text-xl font-semibold">{site.name}</h2>
              <p className="text-gray-600">{site.domain}</p>
              <div className="bg-gray-100 p-2 rounded text-sm">
                {`<script src="${process.env.NEXT_PUBLIC_API_URL}/tracker.js" data-site="${site.id}"></script>`}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
