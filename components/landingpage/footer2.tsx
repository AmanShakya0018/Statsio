import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="relative">
      <div className="border-t border-zinc-200 dark:border-zinc-800 px-8 py-6 relative">
        <div className="max-w-7xl px-4 mx-auto text-sm text-zinc-500 dark:text-zinc-400 flex sm:flex-row flex-col justify-between items-start">
          <div>
            <div className="mr-4 md:flex mb-4">
              <Link
                className="font-normal flex items-center text-sm mr-4 text-zinc-800 dark:text-white px-2 py-1 relative z-20"
                href="/"
              >
                <Image
                  width={500}
                  height={500}
                  src={"/logo.png"}
                  alt="logo.png"
                  quality={100}
                  priority={true}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0 mt-0.5"
                />
                <span className="font-bold">Statsio</span>
              </Link>
            </div>
            <div className="text-xs sm:text-[0.8rem] text-zinc-600 dark:text-zinc-400">© {new Date().getFullYear()} Statsio Inc.</div>
          </div>

          <div className="grid grid-cols-2 gap-10 items-start mt-10 md:mt-0">
            <div className="flex justify-center space-y-4 flex-col mt-4">
              <Link className="transition-colors hover:text-zinc-800 dark:hover:text-zinc-300 text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm" href="/dashboard/sites">Dashboard</Link>
              <Link className="transition-colors hover:text-zinc-800 dark:hover:text-zinc-300 text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm" href="/docs">Documentation</Link>
            </div>

            <div className="flex justify-center space-y-4 flex-col mt-4">
              <Link className="transition-colors hover:text-zinc-800 dark:hover:text-zinc-300 text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm" href='/termsofservice' target='_blank'>Terms of Service</Link>
              <Link className="transition-colors hover:text-zinc-800 dark:hover:text-zinc-300 text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm" href='/privacypolicy' target='_blank'>Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer