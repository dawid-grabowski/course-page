"use client";

import { SignUpButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import Link from "next/link";
import { type ReactElement } from "react";

export function CTA(): ReactElement {
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
      className='bg-neutral-900'
      id='cta'
    >
      <div className='px-6 py-24 sm:px-6 sm:py-32 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-zinc-200 sm:text-4xl'>
            Uzupełniaj swoją wiedzę na bierząco
            <br />
            Wybierz kurs dla siebie już dziś
          </h2>
          <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400'>
            Najważniejsze informacje, które musisz wiedzieć, aby zagłębić się w
            temat programowania. Materiały są przygotowane w taki sposób, aby
            były zrozumiałe i przyjemne do oglądania jednocześnie.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <SignUpButton>
              <span className='cursor-pointer rounded-md bg-indigo-700 px-3.5 py-2.5 text-sm font-semibold text-zinc-200 shadow-sm hover:bg-indigo-600 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
                Dołącz do platformy
              </span>
            </SignUpButton>
            <Link
              href='/courses'
              className='cursor-pointer text-sm font-semibold leading-6 text-zinc-200 hover:text-zinc-300 transition-colors'
            >
              Zobacz dostępne kursy <span aria-hidden='true'>→</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
