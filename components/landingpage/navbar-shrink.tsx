"use client"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import React, { useEffect, useState } from "react"
// import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { navItems } from "@/constants"
import Image from "next/image"
import SignInButton from "../shared/SignInButoon"
import UserAccountNav from "../shared/UserAccountNav"
import { useSession } from "next-auth/react"

// const navItems = [
//   { name: 'Features', href: '#link' },
//   { name: 'Solution', href: '#link' },
//   { name: 'Pricing', href: '#link' },
//   { name: 'About', href: '#link' },
// ]

const Navbar = () => {
  const [menuState, setMenuState] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className="fixed group z-50 w-full px-2">
        <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
          <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 py-1">
            <div className="flex w-full justify-between lg:w-auto">
              <Link href="/" className="flex items-center">
                <Image
                  width={500}
                  height={500}
                  src={"/logo.png"}
                  alt="Statsio"
                  quality={100}
                  priority={true}
                  className="w-10 h-10 rounded-xl mt-1 object-cover flex-shrink-0"
                />
                <h3 className="text-xl font-bold ml-1">Statsio</h3>
              </Link>


              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150">
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150">
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={cn("flex flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit",
                session?.user ? "w-[60%]" : "w-full"
              )}>
                {session?.user ? (
                  <UserAccountNav user={session.user} />
                ) : (
                  <SignInButton text={"Sign In"} />
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
