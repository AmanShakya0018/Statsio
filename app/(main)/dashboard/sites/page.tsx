"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { AddSiteModal } from "@/components/globals/site-modal";
import { EmptyState } from "@/components/globals/empty-state";
import { LoadingState } from "@/components/globals/loading-state";
import { SiteCard } from "@/components/globals/site-card";
import { useSession } from "next-auth/react";
import useRequireAuth from "@/hooks/useRequireAuth";
import Footer2 from "@/components/landingpage/footer2";
import { BookOpen, Plus } from "lucide-react";
import Navbar from "@/components/landingpage/navbar-shrink";

interface Site {
  id: string;
  name: string;
  domain: string;
}

export default function SitesPage() {
  useRequireAuth();
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [sites, setSites] = useState<Site[]>([]);

  useEffect(() => {
    const fetchSites = async () => {
      if (status !== "authenticated") return;
      try {
        const res = await axios.get("/api/sites");
        setSites(res.data);
      } catch (error) {
        console.error("Error fetching sites:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSites();
  }, [status]);

  const handleSiteAdded = (newSite: Site) => {
    setSites((prev) => [newSite, ...prev]);
  };

  const handleSiteDeleted = (deletedSiteId: string) => {
    setSites((prev) => prev.filter((site) => site.id !== deletedSiteId));
  };

  const handleSiteEdited = (editedSiteId: string, updatedData: { name: string; domain: string }) => {
    setSites((prev) =>
      prev.map((site) => site.id === editedSiteId ? { ...site, ...updatedData } : site)
    )
  }
  if (status !== "authenticated") return null;

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 pb-8 pt-24">
        <div className="mb-10 flex flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Welcome back,
              <br className="block md:hidden" /> {session?.user?.name}!</h1>
            <p className="text-muted-foreground max-w-xl">
              Manage your websites and view privacy-friendly analytics in one place.
            </p>
          </div>
          {sites.length !== 0 &&
            <AddSiteModal
              trigger={<Button variant="outline" size="sm" className="mt-2"><Plus size={16} />Add New Site</Button>}
              onSiteAdded={handleSiteAdded}
            />
          }
        </div>

        {isLoading ? (
          <LoadingState />
        ) :
          (sites.length === 0 ? (
            <EmptyState onSiteAdded={handleSiteAdded} />
          ) : (
            <div className="min-h-[400px] flex flex-col justify-between rounded-lg border border-dashed border-neutral-300 dark:border-neutral-800 space-y-8">
              <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 p-8">
                {sites.map((site) => (
                  <SiteCard key={site.id} site={site} onDelete={handleSiteDeleted} onEdit={handleSiteEdited} />
                ))}
              </div>

              <div className="p-4 mt-4 border-t border-dashed border-neutral-300 dark:border-neutral-800">
                <p className="mb-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                  Need help setting up tracking on your website?
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                  <Link href="/docs" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                    >
                      <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      View documentation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Footer2 />
    </>
  );
}
