"use client";
import Image from "next/image";
import { CiGlobe } from "react-icons/ci";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineWifiTetheringError } from "react-icons/md";
import axios from "axios";
import ContentNavigation from "../shared/content-navigation";
import { TextShimmer } from "../ui/text-shimmer";

interface SiteInterfaceProps {
  siteId: string;
}

interface Site {
  name: string;
  domain: string;
}

export default function SiteHeader({ siteId }: SiteInterfaceProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [sites, setSites] = useState<Site>();
  const favicon = `https://www.google.com/s2/favicons?sz=64&domain_url=https://${sites?.domain}`;

  useEffect(() => {
    if (!siteId) return;

    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/sites/${siteId}/data`);
        setSites(res.data);
      } catch (error) {
        console.error("Error fetching analytics:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [siteId]);

  return (
    <>
      <ContentNavigation>
        {isLoading ? (
          <TextShimmer className="text-sm" duration={1}>
            Loading...
          </TextShimmer>
        ) : (
          sites?.domain
        )}
      </ContentNavigation>
      <div className="flex flex-row items-start justify-between px-1 pb-3 pt-1">
        {isLoading ? (
          <div className="flex flex-col space-y-3">
            <div className="flex flex-row items-center gap-2">
              <div className="h-7 w-7 animate-pulse rounded-sm bg-neutral-700" />
              <h1 className="text-3xl font-semibold text-white">
                <TextShimmer className="text-lg" duration={1}>
                  Loading...
                </TextShimmer>
              </h1>
            </div>
            <div className="flex items-center space-x-1 text-sm text-neutral-400">
              <CiGlobe className="h-4 w-4 text-neutral-400" />
              <div className="flex flex-row items-center gap-1 font-semibold text-white hover:underline">
                <TextShimmer className="text-sm" duration={1}>
                  Loading...
                </TextShimmer>
                <BiLinkExternal className="mt-1 h-3.5 w-3.5 text-neutral-400" />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col space-y-3">
            <div className="flex flex-row items-center gap-2">
              {favicon ? (
                <Image
                  width={24}
                  height={24}
                  src={favicon}
                  alt={`${sites?.name} favicon`}
                  className="h-7 w-7 rounded-sm"
                />
              ) : (
                <MdOutlineWifiTetheringError className="h-7 w-7 text-neutral-400" />
              )}
              <h1 className="text-3xl font-semibold text-white">
                {sites?.name}
              </h1>
            </div>
            <div className="flex items-center space-x-1 text-sm text-neutral-400">
              <CiGlobe className="h-4 w-4 text-neutral-400" />
              <Link
                href={`https://${sites?.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-1 font-semibold text-white hover:underline"
              >
                {sites?.domain}
                <BiLinkExternal className="mt-1 h-3.5 w-3.5 text-neutral-400" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
