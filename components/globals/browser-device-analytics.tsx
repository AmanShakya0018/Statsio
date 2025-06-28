"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Maximize2 } from "lucide-react";
import { GoGraph } from "react-icons/go";
import axios from "axios";
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

interface Browser {
  browser: string;
  count: number;
}

interface Device {
  device: string;
  count: number;
}

interface BrowsersAndDevicesAnalyticsProps {
  siteId: string;
}

export default function BrowsersAndDevicesAnalytics({
  siteId,
}: BrowsersAndDevicesAnalyticsProps) {
  const [browsers, setBrowsers] = useState<Browser[]>([]);
  const [devices, setDevices] = useState<Device[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"browsers" | "devices">(
    "browsers",
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [browsersResponse, devicesResponse] = await Promise.all([
          axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/sites/${siteId}/analytics/browser`,
          ),
          axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/sites/${siteId}/analytics/devices`,
          ),
        ]);
        setBrowsers(browsersResponse.data);
        setDevices(devicesResponse.data);
      } catch (error) {
        console.error("Error fetching analytics data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [siteId]);

  const browserMaxCount = Math.max(...browsers.map((browser) => browser.count));
  const browserTotalCount = browsers.reduce((acc, curr) => acc + curr.count, 0);

  const deviceMaxCount = Math.max(...devices.map((device) => device.count));
  const deviceTotalCount = devices.reduce((acc, curr) => acc + curr.count, 0);

  const currentData = activeTab === "browsers" ? browsers : devices;
  const maxCount = activeTab === "browsers" ? browserMaxCount : deviceMaxCount;
  const totalCount =
    activeTab === "browsers" ? browserTotalCount : deviceTotalCount;

  return (
    <section>
      <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow dark:border-zinc-800 dark:bg-black">
        <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-5 dark:border-zinc-800">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveTab("browsers")}
              className={`rounded-md px-4 py-1 text-sm font-semibold ${activeTab === "browsers" ? "bg-neutral-200 text-zinc-900 dark:bg-zinc-900 dark:text-white" : "text-zinc-500 dark:text-zinc-400"}`}
            >
              Browsers
            </button>
            <button
              onClick={() => setActiveTab("devices")}
              className={`rounded-md px-4 py-1 text-sm font-semibold ${activeTab === "devices" ? "bg-neutral-200 text-zinc-900 dark:bg-zinc-900 dark:text-white" : "text-zinc-500 dark:text-zinc-400"}`}
            >
              Devices
            </button>
          </div>
          <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
            PAGE VIEWS
          </span>
        </div>
        {isLoading ? (
          <div className="flex min-h-[13.35rem] flex-col items-center justify-center">
            <TextShimmer className="text-sm" duration={1}>
              Loading...
            </TextShimmer>
          </div>
        ) : currentData.length === 0 ? (
          <div className="flex min-h-[13.35rem] flex-col items-center justify-center">
            <div className="mb-2">
              <GoGraph className="h-5 w-5 text-neutral-500" />
            </div>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              No data found for selected period.
            </p>
          </div>
        ) : (
          <div className="relative">
            <ul>
              {currentData.slice(0, 4).map((item) => (
                <li
                  key={
                    activeTab === "browsers"
                      ? (item as Browser).browser
                      : (item as Device).device
                  }
                  className="relative mx-2 my-2 flex h-8 items-center"
                >
                  <div
                    className="absolute left-0 top-0 h-full rounded-md bg-neutral-100 dark:bg-zinc-900"
                    style={{ width: `${(item.count / maxCount) * 100}%` }}
                  />
                  <div className="relative z-10 flex w-full items-center justify-between px-4">
                    <div className="truncate text-sm text-zinc-900 dark:text-white">
                      {activeTab === "browsers"
                        ? (item as Browser).browser
                        : (item as Device).device}
                    </div>
                    <div className="text-sm text-zinc-900 dark:text-white">
                      <span className="font-semibold">
                        {((item.count / totalCount) * 100).toFixed(0)}
                      </span>
                      <span className="font-normal">%</span>
                    </div>
                  </div>
                </li>
              ))}
              {Array.from({ length: 4 - currentData.slice(0, 4).length }).map(
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
                <div className="pointer-events-none absolute bottom-12 left-0 right-0 z-10 h-8 rounded-b-lg bg-gradient-to-t from-white to-transparent dark:from-black" />
                <div className="flex w-full flex-row items-center justify-center gap-2 px-4 pb-3 pt-2 text-sm text-zinc-500 dark:text-zinc-400">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center space-x-2 rounded-2xl border border-neutral-300 px-2 py-1 text-xs text-black dark:border-neutral-800 dark:text-white"
                  >
                    <p>View All</p>
                    <Maximize2 className="h-3 w-3" />
                  </button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="items-center space-x-2 rounded-2xl border border-neutral-300 px-1 text-black dark:border-neutral-800 dark:text-white">
                        <PiDotsThreeBold className="h-6 w-6" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="bg-white dark:bg-black"
                      align="end"
                    >
                      <DropdownMenuItem asChild>
                        <button
                          onClick={() =>
                            exportToCSV(
                              activeTab === "browsers" ? browsers : devices,
                              `${activeTab}-analytics`,
                            )
                          }
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
        <DialogContent className="border-zinc-200 bg-white text-zinc-900 dark:border-zinc-800 dark:bg-black dark:text-white sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <div className="sticky top-0 flex items-center justify-between border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
              <div className="flex space-x-2 py-3 pl-2">
                <button
                  onClick={() => setActiveTab("browsers")}
                  className={`rounded-md px-4 py-1 text-[1rem] font-semibold ${activeTab === "browsers" ? "bg-neutral-200 text-zinc-900 dark:bg-zinc-900 dark:text-white" : "text-zinc-500 dark:text-zinc-400"}`}
                >
                  Browsers
                </button>
                <button
                  onClick={() => setActiveTab("devices")}
                  className={`rounded-md px-4 py-1 text-[1rem] font-semibold ${activeTab === "devices" ? "bg-neutral-200 text-zinc-900 dark:bg-zinc-900 dark:text-white" : "text-zinc-500 dark:text-zinc-400"}`}
                >
                  Devices
                </button>
              </div>
              <span className="pr-4 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                PAGE VIEWS
              </span>
            </div>
          </DialogHeader>
          <div className="max-h-[60vh] overflow-y-auto">
            <ul>
              {currentData.map((item) => (
                <li
                  key={
                    activeTab === "browsers"
                      ? (item as Browser).browser
                      : (item as Device).device
                  }
                  className="relative my-2 mr-2 flex h-8 items-center"
                >
                  <div
                    className="absolute left-0 top-0 h-full rounded-md bg-neutral-100 dark:bg-zinc-900"
                    style={{ width: `${(item.count / maxCount) * 100}%` }}
                  />
                  <div className="relative z-10 flex w-full items-center justify-between px-4">
                    <div className="truncate text-sm text-zinc-900 dark:text-white">
                      {activeTab === "browsers"
                        ? (item as Browser).browser
                        : (item as Device).device}
                    </div>
                    <div className="text-sm text-zinc-900 dark:text-white">
                      <span className="font-semibold">
                        {((item.count / totalCount) * 100).toFixed(0)}
                      </span>
                      <span className="font-normal">%</span>
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
