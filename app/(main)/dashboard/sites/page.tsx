"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AddSiteModal } from "@/components/globals/site-modal";
import { EmptyState } from "@/components/globals/empty-state";
import { LoadingState } from "@/components/globals/loading-state";
import { SiteCard } from "@/components/globals/site-card";
import { useSession } from "next-auth/react";
import useRequireAuth from "@/hooks/useRequireAuth";
import Footer from "@/components/landingpage/footer";
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

  const handleSiteEdited = (
    editedSiteId: string,
    updatedData: { name: string; domain: string },
  ) => {
    setSites((prev) =>
      prev.map((site) =>
        site.id === editedSiteId ? { ...site, ...updatedData } : site,
      ),
    );
  };
  if (status !== "authenticated") return null;

  return (
    <div className="bg-black">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-24">
        <div className="mb-10 flex flex-row items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Welcome back,
              <br className="block md:hidden" /> {session?.user?.name}!
            </h1>
            <p className="max-w-xl text-sm text-neutral-400 md:text-[1rem]">
              Manage your websites and view privacy-friendly analytics in one
              place.
            </p>
          </div>
          {sites.length !== 0 && (
            <AddSiteModal
              trigger={
                <button className="mt-2 flex items-center justify-center gap-2 rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-[0.75rem] font-semibold text-white transition-all duration-300 hover:bg-neutral-800">
                  <Plus size={16} />
                  Add New Site
                </button>
              }
              onSiteAdded={handleSiteAdded}
            />
          )}
        </div>

        {isLoading ? (
          <LoadingState />
        ) : sites.length === 0 ? (
          <EmptyState onSiteAdded={handleSiteAdded} />
        ) : (
          <div className="flex min-h-[400px] flex-col justify-between space-y-8 rounded-lg border border-dashed border-neutral-800">
            <div className="grid gap-3 p-3 sm:grid-cols-1 md:grid-cols-2 md:p-6">
              {sites.map((site) => (
                <SiteCard
                  key={site.id}
                  site={site}
                  onDelete={handleSiteDeleted}
                  onEdit={handleSiteEdited}
                />
              ))}
            </div>

            <div className="mt-4 border-t border-dashed border-neutral-800 p-4">
              <p className="mb-3 text-xs text-zinc-400 sm:text-sm">
                Need help setting up tracking on your website?
              </p>
              <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">
                <Link href="/docs" target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center justify-center gap-2 rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-[0.75rem] font-semibold text-white transition-all duration-300 hover:bg-neutral-800">
                    <BookOpen className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                    View documentation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
