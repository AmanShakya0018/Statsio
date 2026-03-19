"use client";
import Image from "next/image";
import { CiGlobe } from "react-icons/ci";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineWifiTetheringError } from "react-icons/md";
import axios from "axios";
import ContentNavigation from "../shared/content-navigation";
import { TextShimmer } from "../ui/text-shimmer";
import { useQuery } from "@tanstack/react-query";

interface SiteInterfaceProps {
  siteId: string;
}

interface Site {
  name: string;
  domain: string;
}

const getSiteData = async (siteId: string): Promise<Site> => {
  const res = await axios.get(`/api/sites/${siteId}/data`);
  return res.data;
};

export default function SiteHeader({ siteId }: SiteInterfaceProps) {
  const [faviconError, setFaviconError] = useState(false);

  const { data: site, isLoading } = useQuery({
    queryKey: ["site", siteId],
    queryFn: () => getSiteData(siteId),
    enabled: !!siteId,
  });

  const favicon = site?.domain
    ? `https://www.google.com/s2/favicons?sz=64&domain_url=https://${site.domain}`
    : null;

  return (
    <>
      <ContentNavigation>
        {isLoading ? (
          <TextShimmer className="text-sm" duration={1}>
            Loading...
          </TextShimmer>
        ) : (
          site?.domain
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
              {favicon && !faviconError ? (
                <Image
                  width={24}
                  height={24}
                  src={favicon}
                  alt={`${site?.name} favicon`}
                  className="h-7 w-7 rounded-sm"
                  onError={() => setFaviconError(true)}
                />
              ) : (
                <MdOutlineWifiTetheringError className="h-7 w-7 text-neutral-400" />
              )}
              <h1 className="text-3xl font-semibold text-white">
                {site?.name}
              </h1>
            </div>
            <div className="flex items-center space-x-1 text-sm text-neutral-400">
              <CiGlobe className="h-4 w-4 text-neutral-400" />
              <Link
                href={`https://${site?.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-1 font-semibold text-white hover:underline"
              >
                {site?.domain}
                <BiLinkExternal className="mt-1 h-3.5 w-3.5 text-neutral-400" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
