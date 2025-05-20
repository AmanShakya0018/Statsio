"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {


  return (
    <div className="hidden md:block border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-white dark:bg-black">
      <div className="max-w-[80rem] mx-auto text-sm px-4 text-gray-400 flex sm:flex-row flex-col justify-between items-start ">
        <div>
          <div className="mb-2 flex">
            <Link href="/" className="flex items-center">
              <Image
                width={500}
                height={500}
                src={"/logo.png"}
                alt="logo.png"
                quality={100}
                priority={true}
                className="w-10 h-10 rounded-full object-cover flex-shrink-0 mt-1"
              />
              <span className="text-2xl font-extrabold text-black dark:text-white ">Statsio</span>
            </Link>
          </div>
          <div className="mt-2 text-zinc-400">
            Build by
            <a className="dark:text-emerald-500 pl-1 font-medium text-neutral-600" target="__blank" href="https://www.amanshakya.in">@AmanShakya</a>
          </div>
          <div className="mt-2 mr-2 max-w-fit">
            <Link href="https://x.com/compose/tweet?text=%F0%9F%93%A2%20Exploring%20site%20analytics%20on%20%23Statsio%20%E2%9C%85%20Join%20now%20and%20track%20your%20website%20traffic%20with%20ease!%20%F0%9F%94%8D%20%40amanshakya0018" target='_blank'>
              <div className='flex flex-row items-center gap-2 text-zinc-900 dark:text-zinc-200 rounded-md px-3 py-2 bg-neutral-200 dark:bg-neutral-800'>
                Share Your Thoughts On
                <svg
                  height="14"
                  viewBox="0 0 1200 1227"
                  fill="currentColor"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
                </svg>
              </div>
            </Link>
          </div>
          <p className="text-sm dark:text-zinc-400 mt-5">
            © {new Date().getFullYear()} Statsio. All rights reserved.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <Link href='/'>
              <p className="hover:text-foreground/80 text-foreground/60">Home</p>
            </Link>
            <Link href='/dashboard/sites'>
              <p className="hover:text-foreground/80 text-foreground/60">Dashboard</p>
            </Link>
          </div>
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <Link href='https://x.com/AmanShakya0018' target="_blank">
              <p className="hover:text-foreground/80 text-foreground/60">Twitter</p>
            </Link>
            <Link href='https://www.github.com/amanshakya0018/' target='_blank'>
              <p className="hover:text-foreground/80 text-foreground/60">Github</p>
            </Link>
            <Link href='https://www.linkedin.com/in/amanshakya0018/' target='_blank'>
              <p className="hover:text-foreground/80 text-foreground/60">LindedIn</p>
            </Link>
          </div>
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <p className="hover:text-foreground/80 text-foreground/60"><a href='/termsofservice' target='_blank'>Terms of Service</a></p>
            <p className="hover:text-foreground/80 text-foreground/60"><a href='/privacypolicy' target='_blank'>Privacy Policy</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
