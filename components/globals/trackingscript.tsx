"use client"

import { Copy, CheckCircle } from "lucide-react"
import { useState } from "react"

interface TrackingScriptProps {
  siteId: string
  domain?: string
}

const TrackingScriptInstructions = ({ siteId }: TrackingScriptProps) => {
  const [copiedBlock, setCopiedBlock] = useState<"html" | "nextjs" | "react" | null>(null)

  const htmlCodeBlock = `<script
  defer
  data-site="${siteId}"
  src="${process.env.NEXT_PUBLIC_API_URL || "https://statsio.amanshakya.in"}/tracker.js"
></script>`

  const nextJsCodeBlock = `import Script from "next/script";

<Script
  defer
  data-site="${siteId}"
  src="${process.env.NEXT_PUBLIC_API_URL || "https://statsio.amanshakya.in"}/tracker.js"
/>`

  const reactPublicCodeBlock = `<!-- public/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Other meta tags -->

    <!-- ✅ Paste this inside the <head> -->
    <script
      defer
      data-site="${siteId}"
      src="${process.env.NEXT_PUBLIC_API_URL || "https://statsio.amanshakya.in"}/tracker.js"
    ></script>

    <title>Your App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`

  const handleCopy = async (
    type: "html" | "nextjs" | "react",
    code: string
  ) => {
    await navigator.clipboard.writeText(code)
    setCopiedBlock(type)
    setTimeout(() => setCopiedBlock(null), 2000)
  }

  return (
    <div className="space-y-4 text-neutral-800 dark:text-neutral-100">
      <div className="space-y-2">
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
          To start tracking visitors on your website, add the following script to your site. Our analytics solution is
          designed to be lightweight and privacy-focused.
        </p>
      </div>
      <div className="space-y-6">
        {/* --- Next.js --- */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">Next.js Implementation</h3>
            <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800 mx-4"></div>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400">Add this code to your layout or page file:</p>
          <div className="relative group">
            <div className="absolute -inset-px bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 font-mono text-sm overflow-auto">
              <pre className="text-neutral-700 dark:text-neutral-300">{nextJsCodeBlock}</pre>
              <button
                onClick={() => handleCopy("nextjs", nextJsCodeBlock)}
                className="absolute top-3 right-3 p-1.5 rounded-md text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              >
                {copiedBlock === "nextjs" ? (
                  <span className="flex items-center">
                    <CheckCircle size={14} className="mr-1.5 text-emerald-500" />
                    <span>Copied</span>
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Copy size={14} className="mr-1.5" />
                    <span>Copy</span>
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* --- React public/index.html --- */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">React (public/index.html) Implementation</h3>
            <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800 mx-4"></div>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400">
            If you&apos;re using Create React App or any other React setup, you can simply paste this code into the{" "}
            <code className="bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-700 dark:text-neutral-300 text-xs">
              public/index.html
            </code>{" "}
            file inside the{" "}
            <code className="bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-700 dark:text-neutral-300 text-xs">
              {"<head>"}
            </code>{" "}
            section.
          </p>
          <div className="relative group">
            <div className="absolute -inset-px bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 font-mono text-sm overflow-auto">
              <pre className="text-neutral-700 dark:text-neutral-300">{reactPublicCodeBlock}</pre>
              <button
                onClick={() => handleCopy("react", reactPublicCodeBlock)}
                className="absolute top-3 right-3 p-1.5 rounded-md text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              >
                {copiedBlock === "react" ? (
                  <span className="flex items-center">
                    <CheckCircle size={14} className="mr-1.5 text-emerald-500" />
                    <span>Copied</span>
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Copy size={14} className="mr-1.5" />
                    <span>Copy</span>
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* --- HTML --- */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">HTML Implementation</h3>
            <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800 mx-4"></div>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400">
            Add this code to the{" "}
            <code className="bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-700 dark:text-neutral-300 text-xs">
              {"<head>"}
            </code>{" "}
            section of your HTML:
          </p>
          <div className="relative group">
            <div className="absolute -inset-px bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 font-mono text-sm overflow-auto">
              <pre className="text-neutral-700 dark:text-neutral-300">{htmlCodeBlock}</pre>
              <button
                onClick={() => handleCopy("html", htmlCodeBlock)}
                className="absolute top-3 right-3 p-1.5 rounded-md text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                aria-label="Copy HTML code"
              >
                {copiedBlock === "html" ? (
                  <span className="flex items-center">
                    <CheckCircle size={14} className="mr-1.5 text-emerald-500" />
                    <span>Copied</span>
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Copy size={14} className="mr-1.5" />
                    <span>Copy</span>
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-900/80 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 shadow-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-4">
            <div className="h-10 w-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Analytics will begin automatically
            </h4>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              Once implemented, data collection begins immediately. View real-time analytics in your analytics tab.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrackingScriptInstructions
