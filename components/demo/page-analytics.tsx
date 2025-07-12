"use client";
import React from "react";

const pages = [
  { pathname: "/", count: 1116 },
  { pathname: "/components/animated-form", count: 629 },
];

const maxCount = Math.max(...pages.map((p) => p.count));

export default function PagesAnalytics() {
  return (
    <section>
      <div className="overflow-hidden rounded-t-lg border-x border-t border-zinc-800 bg-black shadow">
        <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-6">
          <h2 className="text-sm font-semibold text-white">Pages</h2>
          <span className="text-xs font-semibold text-zinc-400">
            PAGE VIEWS
          </span>
        </div>
        <div className="relative">
          <ul>
            {pages.slice(0, 6).map((page) => (
              <li
                key={page.pathname}
                className="relative mx-2 my-2 flex h-8 items-center"
              >
                <div
                  className="absolute left-0 top-0 h-full rounded-md bg-zinc-900"
                  style={{ width: `${(page.count / maxCount) * 100}%` }}
                />
                <div className="relative z-10 flex w-full items-center justify-between px-4">
                  <div className="truncate text-sm text-white">
                    {page.pathname}
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {page.count}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
