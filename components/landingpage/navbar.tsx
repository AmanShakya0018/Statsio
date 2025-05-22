'use client'
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { Themetoggle } from '../shared/ThemeToggle';
import SignInButton from '../shared/SignInButoon';
import UserAccountNav from '../shared/UserAccountNav';
import { navItems } from '@/constants';
import AnchorNav from '../shared/anchor-nav';
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
import { Menu } from 'lucide-react';


const Navbar = () => {

  const { data: session } = useSession();

  return (
    <Sheet>
      <nav className="z-50 sticky top-0 w-full bg-secondary/15 shadow-lg shadow-neutral-600/5 backdrop-blur-lg border-b border-primary/10 px-4 lg:px-8
">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-12">
            <div className='flex items-center space-x-12'>
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
              <div
                className="hidden md:flex items-center space-x-6">
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
              <div className='hidden md:flex items-center'>
                {session?.user ? (
                  <UserAccountNav user={session.user} />
                ) : (
                  <SignInButton text={"Sign In"} />
                )}
              </div>
              <div className="md:hidden flex items-center space-x-1">
                <SheetTrigger asChild>
                  <Menu className="w-10 h-10 hover:bg-slate-100 dark:hover:bg-neutral-900 p-2 rounded-lg" />
                </SheetTrigger>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <SheetContent className="bg-neutral-100 dark:bg-neutral-950 text-black dark:text-white border-neutral-300 dark:border-neutral-900">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="flex flex-col justify-center px-4 py-8 items-end h-12 w-full border-b border-neutral-300 dark:border-neutral-800">
          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <SignInButton text={"Sign In"} />
          )}
        </div>
        <div className="w-full h-full py-4 flex flex-col space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name + item.href}
              href={item.href}
              className="block px-4 py-2 rounded-md text-lg font-medium text-zinc-700 dark:text-zinc-200 hover:bg-neutral-300 dark:hover:bg-neutral-800 transition-colors border-b border-neutral-300 dark:border-neutral-800"
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