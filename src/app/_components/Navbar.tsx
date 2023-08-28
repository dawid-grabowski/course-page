"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { SVGProps, useEffect, useState, type ReactElement } from "react";
import { navigation, type Navigation } from "../_data/navigation";
import { SVGLogo } from "./SVGLogo";

export function Navbar(props: SVGProps<SVGSVGElement>): ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [navbarStyle, setNavbarStyle] = useState<string>("fixed");
  const { isLoaded, isSignedIn } = useUser();

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.location.pathname === "/register"
      ? setNavbarStyle("fixed")
      : setNavbarStyle("sticky");
  }, []);

  return (
    <header
      className={clsx(
        navbarStyle === "fixed" ? "sticky" : "fixed",
        "inset-x-0 top-0 z-50 backdrop-filter backdrop-blur-lg"
      )}
    >
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
            className='inline-flex items-center justify-center rounded-md text-indigo-800'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Otwórz menu główne</span>
            {/* <MenuButton
              toggle={() => setMobileMenuOpen((prevState) => !prevState)}
            /> */}
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
              <SignInButton>
                <button
                  type='button'
                  className='transition-colors rounded-md bg-indigo-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Logowanie
                </button>
              </SignInButton>
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
    </header>
  );
}
