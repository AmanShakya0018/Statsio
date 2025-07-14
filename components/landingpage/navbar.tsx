"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Themetoggle } from "../shared/ThemeToggle";
import SignInButton from "../shared/SignInButoon";
import UserAccountNav from "../shared/UserAccountNav";
import { navItems } from "@/constants";
import AnchorNav from "../shared/anchor-nav";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <Sheet>
      <nav className="sticky top-0 z-50 w-full border-b border-primary/10 bg-secondary/15 px-4 shadow-lg shadow-neutral-600/5 backdrop-blur-lg lg:px-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-12 items-center justify-between">
            <div className="flex items-center space-x-12">
              <Link href="/" className="flex items-center">
                <Image
                  width={500}
                  height={500}
                  src={"/logo.png"}
                  alt="Statsio"
                  quality={100}
                  priority={true}
                  className="mt-1 h-10 w-10 flex-shrink-0 rounded-xl object-cover"
                />
                <h3 className="ml-1 text-xl font-bold">Statsio</h3>
              </Link>
              <div className="hidden items-center space-x-6 md:flex">
                {navItems.map((item) => (
                  <AnchorNav
                    key={item.name + item.href}
                    absolute
                    href={item.href}
                  >
                    {item.name}
                  </AnchorNav>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <Themetoggle />
              <div className="hidden items-center md:flex">
                {session?.user ? (
                  <UserAccountNav user={session.user} />
                ) : (
                  <SignInButton text={"Sign In"} />
                )}
              </div>
              <div className="flex items-center space-x-1 md:hidden">
                <SheetTrigger asChild>
                  <Menu className="h-10 w-10 rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-neutral-900" />
                </SheetTrigger>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <SheetContent className="border-neutral-300 bg-neutral-100 text-black dark:border-neutral-900 dark:bg-neutral-950 dark:text-white">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="flex h-12 w-full flex-col items-end justify-center border-b border-neutral-300 px-4 py-8 dark:border-neutral-800">
          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <SignInButton text={"Sign In"} />
          )}
        </div>
        <div className="flex h-full w-full flex-col space-y-2 py-4">
          {navItems.map((item) => (
            <Link
              key={item.name + item.href}
              href={item.href}
              className="block rounded-md border-b border-neutral-300 px-4 py-2 text-lg font-medium text-zinc-700 transition-colors hover:bg-neutral-300 dark:border-neutral-800 dark:text-zinc-200 dark:hover:bg-neutral-800"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Navbar;
