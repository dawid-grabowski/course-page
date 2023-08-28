"use client";

import { motion } from "framer-motion";
import { type ReactElement } from "react";

export default function Courses(): ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      viewport={{ once: true }}
      className='h-screen w-full flex justify-center items-center'
    >
      <div className='relative flex flex-col justify-between w-80 h-96 border p-4 border-neutral-700 bg-neutral-800 rounded-md'>
        <div className='absolute backdrop-filter backdrop-blur-sm top-0 left-0 w-full h-full rounded-md flex justify-center items-center'>
          <p className='text-zinc-200 font-bold'>W trakcie przygotowania...</p>
        </div>
        <div className='flex items-start flex-col justify-start gap-2'>
          <h1 className='text-zinc-200 font-bold text-lg'>
            TypeScript - Podstawy
          </h1>
          <p className='text-sm text-zinc-400'>
            Czysty JavaScript to już przeżytek, a umyślny jego wybór to
            zachaczanie o pewnego rodzaju skazanie siebie na trud i problemy. JS
            został wyparty o tyle, że praktycznie każda oferta z nim związana
            wymaga jeszcze znajomości TS&apos;a. Dlatego jeśli chcesz, aby każda
            twoja linijka kodu była bezpieczna, a umysł spokojniejszy to ten
            kurs jest dla Ciebie.
          </p>
        </div>
        <button className='w-full bg-neutral-800 border border-neutral-700 transition-colors hover:bg-neutral-700 py-3 rounded-md text-zinc-200'>
          Przejdź do kursu
        </button>
      </div>
    </motion.div>
  );
}
