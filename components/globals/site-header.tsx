"use client"
import Image from "next/image"
import { CiGlobe } from "react-icons/ci"
import { BiLinkExternal } from "react-icons/bi"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Check, Copy } from "lucide-react"
import { IoMdCode } from "react-icons/io"
import { MdOutlineWifiTetheringError } from "react-icons/md"
import axios from "axios"
import ContentNavigation from "../shared/content-navigation"
import { TextShimmer } from "../ui/text-shimmer"

interface SiteInterfaceProps {
  siteId: string;
}

interface Site {
  name: string;
  domain: string;
}

export default function SiteHeader({ siteId }: SiteInterfaceProps) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [isLoading, setIsLoading] = useState(true);
  const [sites, setSites] = useState<Site>();
  const trackingScript = `<script defer src="${process.env.NEXT_PUBLIC_API_URL}/tracker.js" data-site="${siteId}"></script>`
  const favicon = `https://www.google.com/s2/favicons?sz=64&domain_url=https://${sites?.domain}`

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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(trackingScript)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }


  return (
    <>
      <ContentNavigation>
        {isLoading ? (
          <TextShimmer className='text-sm' duration={1}>
            Loading...
          </TextShimmer>
        ) : (
          sites?.domain
        )}</ContentNavigation>
      <div className="flex flex-row justify-between items-start px-1 pt-1 pb-3">
        {isLoading ? (
          <div className="flex flex-col space-y-3">
            <div className="flex flex-row items-center gap-2">
              <div className="w-7 h-7 rounded-sm bg-neutral-300 dark:bg-neutral-700 animate-pulse" />
              <h1 className="text-3xl font-semibold text-black dark:text-white">
                <TextShimmer className='text-lg' duration={1}>
                  Loading...
                </TextShimmer>
              </h1>
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-1">
              <CiGlobe className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
              <div
                className="hover:underline text-black font-semibold flex flex-row gap-1 items-center dark:text-white"
              >
                <TextShimmer className='text-sm' duration={1}>
                  Loading...
                </TextShimmer>
                <BiLinkExternal className="w-3.5 h-3.5 mt-1 text-neutral-500 dark:text-neutral-400" />
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
                  className="w-7 h-7 rounded-sm"
                />
              ) : (
                <MdOutlineWifiTetheringError className="w-7 h-7 text-neutral-500 dark:text-neutral-400" />
              )}
              <h1 className="text-3xl font-semibold text-black dark:text-white">{sites?.name}</h1>
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-1">
              <CiGlobe className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
              <Link
                href={`https://${sites?.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-black font-semibold flex flex-row gap-1 items-center dark:text-white"
              >
                {sites?.domain}
                <BiLinkExternal className="w-3.5 h-3.5 mt-1 text-neutral-500 dark:text-neutral-400" />
              </Link>
            </div>
          </div>
        )}

        <Button variant="outline" size="sm" onClick={() => setOpen(true)} className="mt-1">
          <IoMdCode className="w-4 h-4" />Tracking Script
        </Button>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Tracking Script</DialogTitle>
              <DialogDescription>
                Add this script to your website to start tracking analytics with Statsio. Place it in the head section of
                your HTML.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Input readOnly value={trackingScript} className="font-mono text-sm" />
              </div>
              <Button size="sm" variant="ghost" onClick={copyToClipboard}>
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span className="sr-only">Copy</span>
              </Button>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              Statsio provides real-time analytics, visitor insights, and performance metrics to help you understand your
              audience better.
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}
