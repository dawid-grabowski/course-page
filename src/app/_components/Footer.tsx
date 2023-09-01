"use client";

import Link from "next/link";
import { type ReactElement, type SVGProps } from "react";
import { type JSX } from "react/jsx-runtime";
import {
  Navigation as MainNavigation,
  navigation as mainNavigation,
} from "../_data/navigation";
import { GLOBAL_CONSTS } from "@/app/_consts/consts";

type FooterNavigation = {
  main: MainNavigation[];
  social: {
    name: string;
    href: string;
    icon: (
      props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
    ) => JSX.Element;
  }[];
};

const footerNavigation: FooterNavigation = {
  main: mainNavigation,
  social: [
    {
      name: "YouTube",
      href: "https://www.youtube.com/@dawidgrabowski",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export function Footer(): ReactElement {
  return (
    <footer className="bg-neutral-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {footerNavigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                target={item.target}
                className="cursor-pointer text-sm leading-6 text-zinc-600 transition-colors hover:text-zinc-400"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {footerNavigation.social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-400 transition-colors"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-zinc-600">
          &copy; 2023 GrabIT - Wszelkie prawa zastrzeżone.
        </p>
        <div className="mt-10 text-xs leading-5 text-zinc-600">
          <Link href={GLOBAL_CONSTS.PRIVACY_POLICY_URL}></Link>
        </div>
      </div>
    </footer>
  );
}
