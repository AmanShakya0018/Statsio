import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { CiHeart } from 'react-icons/ci'

const Footer = () => {

  return (
    <div className="block border-t border-neutral-100 dark:border-white/[0.1] px-8 py-12">
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
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <span className="text-lg font-medium text-black dark:text-white ">Statsio</span>
            </Link>
          </div>
          <p className="text-sm dark:text-zinc-400 ml-3">
            © {new Date().getFullYear()} Statsio. All rights reserved.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <Link href='/dashboard/sites'>
              <p className="hover:text-foreground/80 text-foreground/60">Dashboard</p>
            </Link>
            <Link href='/docs'>
              <p className="hover:text-foreground/80 text-foreground/60">Documentation</p>
            </Link>
          </div>
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <Link href='https://x.com/AmanShakya0018' target="_blank">
              <p className="hover:text-foreground/80 text-foreground/60">Twitter</p>
            </Link>
            <Link href='https://www.github.com/amanshakya0018/' target='_blank'>
              <p className="hover:text-foreground/80 text-foreground/60">Github</p>
            </Link>
          </div>
          <div className="flex justify-center space-y-4 flex-col mt-4">
            <p className="hover:text-foreground/80 text-foreground/60"><Link href='/termsofservice' target='_blank'>Terms of Service</Link></p>
            <p className="hover:text-foreground/80 text-foreground/60"><Link href='/privacypolicy' target='_blank'>Privacy Policy</Link></p>
          </div>
        </div>
      </div>
      <p className="w-full mt-12 -mb-6 text-center text-sm text-muted-foreground">
        Made with <CiHeart className="inline-block text-foreground align-middle w-5 h-5 pb-0.5" /> by{' '}
        <a
          href="https://amanshakya.in"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-zinc-500"
        >
          this guy
        </a>
      </p>
    </div>
  )
}

export default Footer
