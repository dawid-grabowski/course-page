"use client";

import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";
import Link from "next/link";
import { type ReactElement } from "react";

export default function MyCourses(): ReactElement {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return <></>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      viewport={{ once: true }}
      className='bg-neutral-900 min-h-screen flex items-start justify-center'
      id='cta'
    >
      <div className='px-6 py-24 sm:px-6 sm:py-32 lg:px-8'>
        <div className='mx-auto max-w-2xl text-left lg:text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-zinc-200 sm:text-4xl'>
            Hej, {user.firstName}!
          </h2>
          <p className='lg:mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400'>
            Poniżej znajdziesz wszystkie zakupione przez siebie kursy.
            <br />W razie jakichkolwiek pytań, śmiało napisz do mnie. Służę
            pomocą!
          </p>
        </div>

        <div className='flex items-start lg:items-center justify-center flex-col gap-6'>
          <p className='lg:mx-auto mt-48 max-w-xl text-left text-lg leading-8 text-zinc-400'>
            Nie posiadasz jeszcze żadnych zakupionych kursów.
          </p>
          <Link
            href='/courses'
            className='p-4 bg-neutral-800 border border-neutral-500 rounded-md text-zinc-200 hover:bg-neutral-700 transition-colors'
          >
            Zobacz dostępne materiały
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
