"use client"

import { CiGlobe } from "react-icons/ci"
import { BiLinkExternal } from "react-icons/bi"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Check, Copy } from "lucide-react"
import { IoMdCode } from "react-icons/io"

export default function SiteHeader({
  name,
  domain,
  id,
}: {
  name: string
  domain: string
  id: string
}) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const trackingScript = `<script src="${process.env.NEXT_PUBLIC_API_URL}/tracker.js" data-site="${id}"></script>`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(trackingScript)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-row justify-between items-start px-1 pt-1 pb-3 mb-3 border-b border-neutral-200 dark:border-neutral-800">
      <div className="flex flex-col space-y-3">
        <h1 className="text-3xl font-semibold text-black dark:text-white">{name}</h1>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-1">
          <CiGlobe className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
          <Link
            href={`https://${domain}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-black font-semibold flex flex-row gap-1 items-center dark:text-white"
          >
            {domain}
            <BiLinkExternal className="w-3.5 h-3.5 mt-1 text-neutral-500 dark:text-neutral-400" />
          </Link>
        </div>
      </div>

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
  )
}
