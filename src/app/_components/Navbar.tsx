"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactElement } from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../../public/dg_logo.svg";
import { navigation, type Navigation } from "../_data/navigation";

export function Navbar(): ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { isLoaded, isSignedIn } = useUser();
  const pathname = usePathname();

  return (
    <header className='absolute inset-x-0 top-0 z-50'>
      <nav
        className='flex items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Dawid Grabowski - GrabIT</span>
            <Image
              className='h-12 w-auto'
              src={logo}
              alt=''
              height={500}
              width={500}
            />
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Otwórz menu główne</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map((item: Navigation) =>
            pathname === "/" ? (
              <ScrollLink
                to={item.href}
                offset={-50}
                className='cursor-pointer font-medium text-sm leading-6 text-gray-600 hover:text-gray-900'
                key={item.name}
              >
                {item.name}
              </ScrollLink>
            ) : (
              <Link
                key={item.name}
                href='/'
                className='cursor-pointer font-medium text-sm leading-6 text-gray-600 hover:text-gray-900'
              >
                {item.name}
              </Link>
            )
          )}
          {!isLoaded || !isSignedIn ? null : (
            <Link
              href='/my-courses'
              className='cursor-pointer text-sm font-semibold leading-6 text-gray-900'
            >
              Moje kursy
            </Link>
          )}
        </div>
        <div className='hidden lg:flex lg:flex-1 gap-3 lg:justify-end'>
          {!isLoaded || !isSignedIn ? (
            <>
              <SignInButton>
                <button
                  type='button'
                  className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Logowanie
                </button>
              </SignInButton>
              <SignUpButton>
                <button
                  type='button'
                  className='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                >
                  Rejestracja
                </button>
              </SignUpButton>
            </>
          ) : (
            <UserButton />
          )}
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-50' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Dawid Grabowski - GrabIT</span>
              <Image
                className='h-12 w-auto'
                src={logo}
                alt=''
                height={500}
                width={500}
              />
            </Link>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Zamknij menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navigation.map((item: Navigation) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className='py-6'>
                {!isLoaded || !isSignedIn ? (
                  <>
                    <SignInButton>
                      <button className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                        Zaloguj się
                      </button>
                    </SignInButton>
                    <SignUpButton>
                      <button className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                        Zarejestruj się
                      </button>
                    </SignUpButton>
                  </>
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
