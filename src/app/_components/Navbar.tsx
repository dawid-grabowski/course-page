"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";
import { SVGProps, useState, type ReactElement } from "react";
import { navigation, type Navigation } from "../_data/navigation";
import { SVGLogo } from "./SVGLogo";

export function Navbar(): ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { isLoaded, isSignedIn } = useUser();

  return (
    <header className='fixed inset-x-0 top-0 z-50 backdrop-filter backdrop-blur-lg'>
      <motion.nav
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        className='mx-auto max-w-7xl flex items-center justify-between h-16 px-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Dawid Grabowski - GrabIT</span>
            <SVGLogo className='h-6 w-auto' />
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-200'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map((item: Navigation) => (
            <Link
              key={item.id}
              href={item.href}
              target={item.target}
              className='transition-colors cursor-pointer font-medium text-sm leading-6 text-slate-200 hover:text-slate-300'
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className='hidden lg:flex lg:flex-1 gap-3 lg:justify-end'>
          {!isLoaded || !isSignedIn ? (
            <>
              <Link
                href='/login'
                className='transition-colors rounded-md bg-indigo-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Logowanie
              </Link>
              <SignUpButton>
                <button
                  type='button'
                  className='backdrop-filter backdrop-blur-lg transition-colors rounded-md px-3.5 py-2.5 text-sm font-semibold text-neutral-300 shadow-sm ring-1 ring-inset ring-neutral-300 hover:bg-neutral-800'
                >
                  Rejestracja
                </button>
              </SignUpButton>
            </>
          ) : (
            <UserButton />
          )}
        </div>
      </motion.nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-900 shadow-lg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Dawid Grabowski - GrabIT</span>
              <SVGLogo className='h-6 w-auto' />
            </Link>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-zinc-200'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-zinc-400/10'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-200 hover:bg-neutral-800 transition-colors'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className='py-6'>
                {!isLoaded || !isSignedIn ? (
                  <Link
                    href='/login'
                    onClick={() => setMobileMenuOpen(false)}
                    className='-mx-3 cursor-pointer block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-200 hover:bg-neutral-800 transition-colors'
                  >
                    Zaloguj się
                  </Link>
                ) : (
                  <UserButton />
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
