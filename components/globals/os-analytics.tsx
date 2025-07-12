"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Maximize2 } from "lucide-react";
import { GoGraph } from "react-icons/go";
import { PiDotsThreeBold } from "react-icons/pi";
import { FiDownload } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { exportToCSV } from "@/lib/export-csv";
import { TextShimmer } from "../ui/text-shimmer";

interface Os {
  os: string;
  count: number;
}

interface OssAnalyticsProps {
  siteId: string;
}

export default function OssAnalytics({ siteId }: OssAnalyticsProps) {
  const [oses, setOses] = useState<Os[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchOses = async () => {
      try {
        const response = await axios.get(`/api/sites/${siteId}/analytics/os`);
        setOses(response.data);
      } catch (error) {
        console.error("Failed to fetch OS analytics:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOses();
  }, [siteId]);

  const maxCount = Math.max(...oses.map((page) => page.count), 0);
  const totalCount = oses.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <section>
      <div className="overflow-hidden rounded-lg border border-neutral-800 bg-black shadow">
        <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-6">
          <h2 className="text-sm font-semibold text-white">
            Operating Systems
          </h2>
          <span className="text-xs font-semibold text-neutral-400">
            PAGE VIEWS
          </span>
        </div>

        {isLoading ? (
          <div className="flex min-h-[13.35rem] flex-col items-center justify-center">
            <TextShimmer className="text-sm" duration={1}>
              Loading...
            </TextShimmer>
          </div>
        ) : oses.length === 0 ? (
          <div className="flex min-h-[13.35rem] flex-col items-center justify-center">
            <div className="mb-2">
              <GoGraph className="h-5 w-5 text-neutral-500" />
            </div>
            <p className="text-sm text-neutral-500">
              No data found for selected period.
            </p>
          </div>
        ) : (
          <div className="relative">
            <ul>
              {oses.slice(0, 4).map((page) => (
                <li
                  key={page.os}
                  className="relative mx-2 my-2 flex h-8 items-center"
                >
                  <div
                    className="absolute left-0 top-0 h-full rounded-md bg-neutral-900"
                    style={{ width: `${(page.count / maxCount) * 100}%` }}
                  />
                  <div className="relative z-10 flex w-full items-center justify-between px-4">
                    <div className="truncate text-sm text-white">{page.os}</div>
                    <div className="flex flex-row gap-0.5 text-sm font-semibold text-white">
                      {((page.count / totalCount) * 100).toFixed(0)}%
                    </div>
                  </div>
                </li>
              ))}

              {Array.from({ length: 4 - oses.slice(0, 4).length }).map(
                (_, idx) => (
                  <li
                    key={`empty-${idx}`}
                    className="pointer-events-none relative mx-2 my-2 flex h-8 items-center opacity-0"
                  >
                    <div className="h-full w-full" />
                  </li>
                ),
              )}
              <>
                <div className="pointer-events-none absolute bottom-12 left-0 right-0 z-10 h-8 bg-gradient-to-t from-black to-transparent" />
                <div className="flex w-full flex-row items-center justify-center gap-2 px-4 pb-3 pt-2 text-sm text-neutral-400">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center space-x-2 rounded-2xl border border-neutral-800 px-2 py-1 text-xs text-white"
                  >
                    <p>View All</p>
                    <Maximize2 className="h-3 w-3" />
                  </button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="items-center space-x-2 rounded-2xl border border-neutral-800 px-1 text-white">
                        <PiDotsThreeBold className="h-6 w-6" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="border border-neutral-800 bg-black text-white"
                      align="end"
                    >
                      <DropdownMenuItem asChild>
                        <button
                          onClick={() => exportToCSV(oses, `oses-analytics`)}
                          className="w-full"
                        >
                          <FiDownload /> Export CSV
                        </button>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </>
            </ul>
          </div>
        )}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="border border-neutral-800 bg-black text-white sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <div className="sticky top-0 flex items-center justify-between border-b border-neutral-800 bg-black py-3 pl-2 pr-4">
              <h2 className="text-[1rem] font-semibold text-white">
                Operating Systems
              </h2>
              <span className="text-xs font-semibold text-neutral-400">
                PAGE VIEWS
              </span>
            </div>
          </DialogHeader>
          <div className="max-h-[60vh] overflow-y-auto">
            <ul>
              {oses.map((page) => (
                <li
                  key={page.os}
                  className="relative my-2 mr-2 flex h-8 items-center"
                >
                  <div
                    className="absolute left-0 top-0 h-full rounded-md bg-neutral-900"
                    style={{ width: `${(page.count / maxCount) * 100}%` }}
                  />
                  <div className="relative z-10 flex w-full items-center justify-between px-4">
                    <div className="truncate text-sm text-white">{page.os}</div>
                    <div className="flex flex-row gap-0.5 text-sm font-semibold text-white">
                      {((page.count / totalCount) * 100).toFixed(0)}%
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
