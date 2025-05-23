"use client"

import { CheckCircle } from "lucide-react"
import { CodeBlock } from "../ui/code-block"

interface TrackingScriptProps {
  siteId: string
  domain?: string
}

const TrackingScriptInstructions = ({ siteId }: TrackingScriptProps) => {

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
            <h3 className="text-lg font-medium text-neutral-800 dark:text-transparent bg-clip-text bg-gradient-stop bg-gradient-to-br from-white via-30% via-white to-white/30">Next.js Implementation</h3>
            <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800 mx-4"></div>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400">Add this code to your layout or page file:</p>
          <CodeBlock
            language="jsx"
            code={nextJsCodeBlock}
          />
        </div>

        {/* --- React public/index.html --- */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-neutral-800 dark:text-transparent bg-clip-text bg-gradient-stop bg-gradient-to-br from-white via-30% via-white to-white/30">React (public/index.html) Implementation</h3>
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
          <CodeBlock
            language="jsx"
            code={reactPublicCodeBlock}
          />
        </div>

        {/* --- HTML --- */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-neutral-800 dark:text-transparent bg-clip-text bg-gradient-stop bg-gradient-to-br from-white via-30% via-white to-white/30">HTML Implementation</h3>
            <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800 mx-4"></div>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400">
            Add this code to the{" "}
            <code className="bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-700 dark:text-neutral-300 text-xs">
              {"<head>"}
            </code>{" "}
            section of your HTML:
          </p>
          <CodeBlock
            language="jsx"
            code={htmlCodeBlock}
          />
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
