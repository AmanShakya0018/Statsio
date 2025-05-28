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
                className="font-normal flex space-x-2 items-center text-sm mr-4 text-zinc-800 dark:text-white px-2 py-1 relative z-20"
                href="/"
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                >
                  <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
                  <path
                    d="M11.0389 19.8912L11.0392 28.5579C12.6769 28.5579 14.0028 27.2273 13.9972 25.5897L13.9712 18.071L13.9899 13.8938C13.9996 11.7406 15.753 10.003 17.9061 10.0126C20.0593 10.0223 21.797 11.7756 21.7873 13.9288L21.7686 18.106L21.7686 18.7764C21.7686 19.3921 22.2677 19.8912 22.8833 19.8911C23.499 19.8911 23.998 19.392 23.998 18.7764L23.998 13.5232C23.998 9.95254 21.1035 7.05796 17.5328 7.05796C13.9735 7.05796 11.0836 9.93487 11.0677 13.4942L11.0389 19.8912Z"
                    fill="#111B21"
                  />
                </svg>
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