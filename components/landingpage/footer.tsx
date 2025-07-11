"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="block border-t border-white/[0.1] px-8 py-12">
      <div className="mx-auto flex max-w-[80rem] flex-col items-start justify-between px-4 text-sm text-neutral-400 sm:flex-row">
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
                className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
              />
              <span className="text-lg font-medium text-white">Statsio</span>
            </Link>
          </div>
          <p className="ml-3 text-sm text-zinc-400">
            © {new Date().getFullYear()} Statsio. All rights reserved.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-3 items-start gap-10 md:mt-0">
          <div className="mt-4 flex flex-col justify-center space-y-4">
            <Link href="/dashboard/sites">
              <p className="text-neutral-300/60 hover:text-neutral-300/80">
                Dashboard
              </p>
            </Link>
            <Link href="/docs">
              <p className="text-neutral-300/60 hover:text-neutral-300/80">
                Documentation
              </p>
            </Link>
          </div>
          <div className="mt-4 flex flex-col justify-center space-y-4">
            <Link href="https://x.com/AmanShakya0018" target="_blank">
              <p className="text-neutral-300/60 hover:text-neutral-300/80">
                Twitter
              </p>
            </Link>
            <Link href="https://www.github.com/amanshakya0018/" target="_blank">
              <p className="text-neutral-300/60 hover:text-neutral-300/80">
                Github
              </p>
            </Link>
          </div>
          <div className="mt-4 flex flex-col justify-center space-y-4">
            <p className="text-neutral-300/60 hover:text-neutral-300/80">
              <Link href="/termsofservice" target="_blank">
                Terms of Service
              </Link>
            </p>
            <p className="text-neutral-300/60 hover:text-neutral-300/80">
              <Link href="/privacypolicy" target="_blank">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 hidden w-full items-center justify-center md:flex">
        <h1 className="select-none bg-gradient-to-b from-neutral-700 to-neutral-900 bg-clip-text text-center text-3xl font-bold text-transparent md:text-5xl lg:text-[10rem]">
          STATSIO
        </h1>
      </div>
      <p className="-mb-6 mt-12 w-full text-center text-sm text-neutral-300">
        Made with{" "}
        <CiHeart className="inline-block h-5 w-5 pb-0.5 align-middle text-neutral-300" />{" "}
        by{" "}
        <a
          href="https://amanshakya.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:underline"
        >
          this guy
        </a>
      </p>
    </div>
  );
};

export default Footer;
