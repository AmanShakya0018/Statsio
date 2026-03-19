"use client";

import Link from "next/link";
import { AddSiteModal } from "@/components/globals/site-modal";
import { EmptyState } from "@/components/globals/empty-state";
import { LoadingState } from "@/components/globals/loading-state";
import { SiteCard } from "@/components/globals/site-card";
import { useSession } from "next-auth/react";
import useRequireAuth from "@/hooks/useRequireAuth";
import Footer from "@/components/landingpage/footer";
import { BookOpen, Plus } from "lucide-react";
import Navbar from "@/components/landingpage/navbar-shrink";
import { useQuery } from "@tanstack/react-query";
import { fetchSites } from "@/lib/api";
import { cn } from "@/lib/utils";

export default function SitesPage() {
  useRequireAuth();
  const { data: session, status } = useSession();

  const {
    data: sites = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["sites"],
    queryFn: fetchSites,
    enabled: status === "authenticated",
  });

  if (status !== "authenticated") return null;

  return (
    <div className="bg-black">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-24">
        <div className="mb-10 flex flex-col items-start justify-between sm:flex-row">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Welcome back,
              <br className="block md:hidden" /> {session?.user?.name}!
            </h1>
            <p className="mt-2 max-w-sm text-balance text-sm text-neutral-400 md:max-w-xl md:text-[1rem]">
              Manage your websites and view privacy-friendly analytics in one
              place.
            </p>
          </div>
          {sites.length !== 0 && (
            <AddSiteModal
              trigger={
                <button
                  className={cn(
                    "group mt-4 flex items-center justify-center gap-2 rounded-md bg-neutral-950 px-3 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-neutral-800",
                    "shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33]",
                  )}
                >
                  <Plus size={16} />
                  Add New Site
                </button>
              }
            />
          )}
        </div>

        {isLoading ? (
          <LoadingState />
        ) : isError ? (
          <div className="flex min-h-[400px] items-center justify-center rounded-lg border border-dashed border-red-900/50 bg-red-900/10 p-8 text-red-400">
            <p>Failed to load sites. Please try refreshing the page.</p>
          </div>
        ) : sites.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="flex min-h-[400px] flex-col justify-between space-y-8 rounded-lg border border-dashed border-neutral-800">
            <div className="grid gap-3 p-3 sm:grid-cols-1 md:grid-cols-2 md:p-6">
              {sites.map((site) => (
                <SiteCard key={site.id} site={site} />
              ))}
            </div>

            <div className="mt-4 border-t border-dashed border-neutral-800 p-4">
              <p className="mb-3 text-xs text-zinc-400 sm:text-sm">
                Need help setting up tracking on your website?
              </p>
              <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">
                <Link href="/docs" target="_blank" rel="noopener noreferrer">
                  <button
                    className={cn(
                      "group flex items-center justify-center gap-2 rounded-md bg-neutral-950 px-3 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-neutral-800",
                      "shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33]",
                    )}
                  >
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
