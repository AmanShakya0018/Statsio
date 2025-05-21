"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { AddSiteModal } from "@/components/globals/site-modal";
import { EmptyState } from "@/components/globals/empty-state";
import { SiteCard } from "@/components/globals/site-card";

interface Site {
  id: string;
  name: string;
  domain: string;
  visitors: number;
  pageviews: number;
}

export default function SitesPage() {
  const [sites, setSites] = useState<Site[]>([]);

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

  const handleSiteAdded = (newSite: Site) => {
    setSites((prev) => [newSite, ...prev]);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-10 space-y-2">
        <h1 className="text-3xl font-bold">Your Sites</h1>
        <p className="text-muted-foreground max-w-xl">
          Statsio helps you collect privacy-friendly analytics for your websites. Here you can manage your tracked
          domains and view analytics.
        </p>
        <AddSiteModal
          trigger={<Button size="sm" className="mt-2">Add New Site</Button>}
          onSiteAdded={handleSiteAdded}
        />
      </div>

      {sites.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {sites.map((site) => (
            <SiteCard
              key={site.id}
              site={{
                ...site,
                script: `<script src="${process.env.NEXT_PUBLIC_API_URL}/tracker.js" data-site="${site.id}"></script>`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
