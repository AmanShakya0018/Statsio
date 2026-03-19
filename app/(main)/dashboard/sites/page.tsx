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
