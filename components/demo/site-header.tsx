"use client";
import Image from "next/image";
import { CiGlobe } from "react-icons/ci";
import { BiLinkExternal } from "react-icons/bi";
import { MdOutlineWifiTetheringError } from "react-icons/md";
import Link from "next/link";

export default function SiteHeader() {
  const favicon = `https://www.google.com/s2/favicons?sz=64&domain_url=https://forgeui.in`;

  return (
    <>
      <div className="flex flex-row items-start justify-between px-1 pb-3 pt-1">
        <div className="flex flex-col space-y-3">
          <div className="flex flex-row items-center gap-2">
            {favicon ? (
              <Image
                width={24}
                height={24}
                src={favicon}
                alt={`avicon`}
                className="h-7 w-7 rounded-sm"
              />
            ) : (
              <MdOutlineWifiTetheringError className="h-7 w-7 text-neutral-500 dark:text-neutral-400" />
            )}
            <h1 className="text-3xl font-semibold text-black dark:text-white">
              Forge UI
            </h1>
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
            <CiGlobe className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
            <Link
              href={"https://forgeui.in"}
              target="_blank"
              className="flex flex-row items-center gap-1 font-semibold text-black hover:underline dark:text-white"
            >
              forgeui.in
              <BiLinkExternal className="mt-1 h-3.5 w-3.5 text-neutral-500 dark:text-neutral-400" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
