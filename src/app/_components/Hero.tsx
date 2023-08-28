"use client";

import { SignInButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useId, type ReactElement } from "react";
import { Link as ScrollLink } from "react-scroll";
import mainPhoto from "../../../public/mainPhoto.png";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 200, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export function Hero(): ReactElement {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  const id = useId();

  const introductionList: React.ReactNode[] = [
    <h1
      key={id}
      className='mt-10 max-w-lg text-4xl font-bold tracking-tight text-zinc-200 sm:text-6xl'
    >
      Hej, jestem
    </h1>,
    <span
      key={id + Math.random()}
      className='relative whitespace-nowrap text-indigo-600'
    >
      <svg
        aria-hidden='true'
        viewBox='0 0 418 42'
        className='absolute left-0 -bottom-[60%] h-[1.2rem] w-full fill-indigo-800'
        preserveAspectRatio='none'
      >
        <path d='M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z' />
      </svg>
      <span className='relative ax-w-lg text-4xl font-bold tracking-tight text-zinc-200 sm:text-6xl'>
        Dawid.
      </span>
    </span>,
    <p
      key={id + Math.random()}
      className='mt-6 text-lg leading-8 text-zinc-400'
    >
      Na codzień programuję używając Next.js i TypeScript. Studiuję Software
      Development na International University of Applied Sciences. W wolnym
      czasie prowadzę swoje projekty, tworzę treści na YouTube i staram się
      przekazywać swoją wiedzę innym.
    </p>,
    <div key={id + Math.random()} className='mt-10 flex items-center gap-x-6'>
      <SignInButton>
        <button className='cursor-pointer rounded-md bg-indigo-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
          Zaloguj się
        </button>
      </SignInButton>
      <ScrollLink
        to='contact'
        className='hidden sm:block cursor-pointer text-sm font-semibold leading-6 text-zinc-200 hover:text-zinc-300 transition-colors'
      >
        Skontaktuj się ze mną <span aria-hidden='true'>→</span>
      </ScrollLink>
      <ScrollLink
        to='contact'
        className='sm:hidden cursor-pointer text-sm font-semibold leading-6 text-zinc-200 hover:text-zinc-300 transition-colors'
      >
        Skontaktuj się <span aria-hidden='true'>→</span>
      </ScrollLink>
    </div>,
  ];

  return (
    <div className='flex items-center justify-center bg-neutral-900 min-h-screen'>
      <div className='flex flex-row'>
        <div className='mx-auto max-w-7xl px-6 py-24 mt-10 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40'>
          <motion.ul
            variants={container}
            initial='hidden'
            animate='visible'
            className='mx-auto max-w-2xl lg:mx-0 lg:flex-auto'
          >
            {introductionList.map((node: React.ReactNode, index: number) => (
              <motion.li key={index} variants={item}>
                {node}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            className='mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow'
          >
            <Image
              alt='Photo of Dawid Grabowski - Frontend Developer'
              src={mainPhoto}
              className='mx-auto w-[22.875rem] max-w-full drop-shadow-xa rounded-3xl shadow-2xl'
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
