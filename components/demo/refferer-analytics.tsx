"use client";
import React from "react";

const pages = [
  { pathname: "Direct", count: 2205 },
  { pathname: "https://t.co/", count: 2021 },
];

const maxCount = Math.max(...pages.map((p) => p.count));

export default function ReffererAnalytics() {
  return (
    <section>
      <div className="overflow-hidden rounded-t-lg border-x border-t border-zinc-200 bg-white shadow dark:border-zinc-800 dark:bg-black">
        <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-6 dark:border-zinc-800">
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-white">
            Referrers
          </h2>
          <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
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
                  className="absolute left-0 top-0 h-full rounded-md bg-neutral-100 dark:bg-zinc-900"
                  style={{ width: `${(page.count / maxCount) * 100}%` }}
                />
                <div className="relative z-10 flex w-full items-center justify-between px-4">
                  <div className="truncate text-sm text-zinc-900 dark:text-white">
                    {page.pathname}
                  </div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-white">
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
