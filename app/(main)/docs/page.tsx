"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { CheckCircle, BarChart3 } from "lucide-react"
import Navbar from "@/components/landingpage/navbar"
import TrackingScriptInstructions from "@/components/globals/trackingscript"
import Footer from "@/components/landingpage/footer2"

const DocumentationPage = () => {

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <BarChart3 className="w-3 h-3 mr-1" />
              Quick Start
            </Badge>
            <h1 className="text-5xl font-medium text-neutral-800 dark:text-transparent bg-clip-text bg-gradient-stop bg-gradient-to-br from-white via-30% via-white to-white/30 mb-4">
              Quick Start Guide
            </h1>
            <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Follow these simple steps to add Statsio analytics to your website and start tracking visitor data in
              minutes.
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-neutral-800 dark:text-transparent bg-clip-text bg-gradient-stop bg-gradient-to-br from-white via-30% via-white to-white/30">Create an Account</h3>
                <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800 mx-4"></div>
              </div>
              <p className="text-neutral-500 dark:text-neutral-400">
                Sign up for a Statsio account if you haven&apos;t already. It&apos;s free to get started and no credit card is
                required.
              </p>
              <Link href="/signin">
                <Button variant="outline" className="group mt-2">
                  Create Account
                  <CheckCircle className="w-4 h-4 ml-2 group-hover:text-green-500 transition-colors" />
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-neutral-800 dark:text-transparent bg-clip-text bg-gradient-stop bg-gradient-to-br from-white via-30% via-white to-white/30">Add Your Website</h3>
                <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800 mx-4"></div>
              </div>
              <p className="text-neutral-500 dark:text-neutral-400">
                After logging in, go to your dashboard and add a new project by entering a{" "}
                <span className="font-semibold text-foreground bg-muted px-2 py-0.5 rounded">Project Name</span> and
                the <span className="font-semibold text-foreground bg-muted px-2 py-0.5 rounded">Domain</span> of
                your website. You&apos;ll then receive a unique Tracking ID for your site.
              </p>
            </div>

            <TrackingScriptInstructions siteId="YOUR-SITE-ID" />

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DocumentationPage
