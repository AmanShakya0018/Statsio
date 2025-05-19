import { CiGlobe } from "react-icons/ci";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link"

export default function SiteHeader({
  name,
  domain,
}: {
  name: string
  domain: string
}) {
  return (
    <div className="flex flex-col space-y-3 px-1 pt-1 pb-3 mb-3 border-b border-neutral-200 dark:border-neutral-800">
      <h1 className="text-3xl font-semibold text-black dark:text-white">
        {name}
      </h1>
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-1">
        <CiGlobe className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
        <Link
          href={`https://${domain}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-black font-semibold flex flex-row gap-1 items-center dark:text-white"
        >
          {domain}
          <BiLinkExternal className="w-3.5 h-3.5 mt-1 text-neutral-500 dark:text-neutral-400" />
        </Link>
      </div>
    </div>
  )
}
