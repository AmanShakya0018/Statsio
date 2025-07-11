"use client";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import TrackingScriptInstructions from "@/components/globals/trackingscript";
import Footer from "@/components/landingpage/footer2";
import { BiLinkExternal } from "react-icons/bi";
import Navbar from "@/components/landingpage/navbar-shrink";

const DocumentationPage = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="min-h-screen">
        <div className="mx-auto max-w-4xl px-6 pb-16 pt-32">
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="mb-4 flex max-w-fit items-center justify-center gap-2 rounded-full bg-neutral-800 px-3 py-1">
              <div className="relative flex h-1.5 w-1.5 items-center justify-center rounded-full bg-emerald-500/40">
                <div className="flex h-2 w-2 animate-ping items-center justify-center rounded-full bg-emerald-500">
                  <div className="flex h-2 w-2 animate-ping items-center justify-center rounded-full bg-emerald-500"></div>
                </div>
                <div className="absolute left-1/2 top-1/2 flex h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-400"></div>
              </div>
              <span className="bg-clip-text text-xs font-medium text-zinc-300">
                Setup in minutes
              </span>
            </div>
            <h1 className="bg-gradient-stop mb-4 bg-gradient-to-br from-white via-white via-30% to-white/30 bg-clip-text text-5xl font-medium text-neutral-800 text-transparent">
              Quick Start Guide
            </h1>
            <p className="mx-auto max-w-2xl text-[1rem] leading-relaxed text-neutral-400">
              Follow these simple steps to add Statsio analytics to your website
              and start tracking visitor data in minutes.
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="bg-gradient-stop bg-gradient-to-br from-white via-white via-30% to-white/30 bg-clip-text text-lg font-medium text-transparent">
                  Create an Account
                </h3>
                <div className="mx-4 h-px flex-1 bg-neutral-800"></div>
              </div>
              <p className="text-neutral-400">
                Sign up for a Statsio account if you haven&apos;t already.
                It&apos;s free to get started and no credit card is required.
              </p>
              <Link href="/signin">
                <button className="group mt-2 flex items-center justify-center gap-2 rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-neutral-800">
                  Create Account
                  <CheckCircle className="h-4 w-4 transition-colors group-hover:text-green-500" />
                </button>
              </Link>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="bg-gradient-stop bg-gradient-to-br from-white via-white via-30% to-white/30 bg-clip-text text-lg font-medium text-transparent">
                  Add Your Website
                </h3>
                <div className="mx-4 h-px flex-1 bg-neutral-800"></div>
              </div>
              <p className="text-neutral-400">
                After logging in, go to your dashboard and add a new project by
                entering a{" "}
                <span className="rounded bg-neutral-800 px-2 py-0.5 font-semibold text-neutral-100">
                  Project Name
                </span>{" "}
                and the{" "}
                <span className="rounded bg-neutral-800 px-2 py-0.5 font-semibold text-neutral-100">
                  Domain
                </span>{" "}
                of your website. You&apos;ll then receive a unique Tracking ID
                for your site.
              </p>
              <Link href="/dashboard/sites">
                <button className="group mt-2 flex items-center justify-center gap-2 rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-neutral-800">
                  Go to Dashboard
                  <BiLinkExternal className="h-4 w-4" />
                </button>
              </Link>
            </div>

            <TrackingScriptInstructions siteId="YOUR-SITE-ID" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocumentationPage;
