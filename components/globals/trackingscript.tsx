"use client";

import { CheckCircle } from "lucide-react";
import { CodeBlock } from "../ui/code-block";

interface TrackingScriptProps {
  siteId: string;
  domain?: string;
}

const TrackingScriptInstructions = ({ siteId }: TrackingScriptProps) => {
  const htmlCodeBlock = `<script
  defer
  data-site="${siteId}"
  src="${process.env.NEXT_PUBLIC_API_URL || "https://statsio.amanshakya.in"}/tracker.js"
></script>`;

  const nextJsCodeBlock = `import Script from "next/script";

<Script
  defer
  data-site="${siteId}"
  src="${process.env.NEXT_PUBLIC_API_URL || "https://statsio.amanshakya.in"}/tracker.js"
/>`;

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
</html>`;

  return (
    <div className="space-y-4 text-neutral-100">
      <div className="space-y-2">
        <p className="leading-relaxed text-neutral-400">
          To start tracking visitors on your website, add the following script
          to your site. Our analytics solution is designed to be lightweight and
          privacy-focused.
        </p>
      </div>
      <div className="space-y-6">
        {/* --- Next.js --- */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="bg-gradient-stop bg-gradient-to-br from-white via-white via-30% to-white/30 bg-clip-text text-lg font-medium text-transparent">
              Next.js Implementation
            </h3>
            <div className="mx-4 h-px flex-1 bg-neutral-800"></div>
          </div>
          <p className="text-neutral-400">
            Add this code to your layout or page file:
          </p>
          <CodeBlock language="jsx" code={nextJsCodeBlock} />
        </div>

        {/* --- React public/index.html --- */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="bg-gradient-stop bg-gradient-to-br from-white via-white via-30% to-white/30 bg-clip-text text-lg font-medium text-transparent">
              React (public/index.html) Implementation
            </h3>
            <div className="mx-4 h-px flex-1 bg-neutral-800"></div>
          </div>
          <p className="text-neutral-400">
            If you&apos;re using Create React App or any other React setup, you
            can simply paste this code into the{" "}
            <code className="rounded bg-neutral-800 px-1.5 py-0.5 text-xs text-neutral-300">
              public/index.html
            </code>{" "}
            file inside the{" "}
            <code className="rounded bg-neutral-800 px-1.5 py-0.5 text-xs text-neutral-300">
              {"<head>"}
            </code>{" "}
            section.
          </p>
          <CodeBlock language="jsx" code={reactPublicCodeBlock} />
        </div>

        {/* --- HTML --- */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="bg-gradient-stop bg-gradient-to-br from-white via-white via-30% to-white/30 bg-clip-text text-lg font-medium text-transparent">
              HTML Implementation
            </h3>
            <div className="mx-4 h-px flex-1 bg-neutral-800"></div>
          </div>
          <p className="text-neutral-400">
            Add this code to the{" "}
            <code className="rounded bg-neutral-800 px-1.5 py-0.5 text-xs text-neutral-300">
              {"<head>"}
            </code>{" "}
            section of your HTML:
          </p>
          <CodeBlock language="jsx" code={htmlCodeBlock} />
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-neutral-800 bg-gradient-to-r from-neutral-900 to-neutral-900/80 p-5 shadow-sm">
        <div className="flex items-center">
          <div className="mr-4 flex-shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800">
              <CheckCircle className="h-5 w-5 text-neutral-400" />
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-neutral-300">
              Analytics will begin automatically
            </h4>
            <p className="mt-1 text-sm text-neutral-400">
              Once implemented, data collection begins immediately. View
              real-time analytics in your analytics tab.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingScriptInstructions;
