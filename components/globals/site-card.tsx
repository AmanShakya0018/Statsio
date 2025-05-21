"use client"

import { useState } from "react"
import { CheckCircle, Copy, ExternalLink } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

interface SiteCardProps {
  site: {
    id: string
    name: string
    domain: string
    script: string
    visitors: number
    pageviews: number
  }
}

export function SiteCard({ site }: SiteCardProps) {
  const { toast } = useToast()
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(site.script)
    setCopied(true)
    toast({
      title: "Copied to clipboard",
      description: "The tracking script has been copied to your clipboard.",
    })

    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">{site.name}</CardTitle>
            <CardDescription className="mt-1 flex items-center">
              <span className="text-sm font-medium text-muted-foreground">{site.domain}</span>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="relative rounded-md bg-muted p-3">
          <pre className="text-xs text-muted-foreground">
            <code>{site.script}</code>
          </pre>
          <Button size="sm" variant="ghost" className="absolute right-2 top-2 h-7 w-7 p-0" onClick={copyToClipboard}>
            {copied ? <CheckCircle className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
            <span className="sr-only">Copy script</span>
          </Button>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-muted/40 px-6 py-3">
        <Button asChild className="ml-auto" size="sm">
          <Link href={`/dashboard/sites/${site.id}`}>
            <ExternalLink className="mr-2 h-4 w-4" />
            View Analytics
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
