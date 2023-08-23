"use client";

import { SignUpButton } from "@clerk/nextjs";
import { type ReactElement } from "react";
import { Link as ScrollLink } from "react-scroll";

export function CTA(): ReactElement {
  return (
    <div className='bg-indigo-700'>
      <div className='px-6 py-24 sm:px-6 sm:py-32 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Uzupełniaj swoją wiedzę na bierząco
            <br />
            Wybierz kurs dla siebie już dziś
          </h2>
          <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200'>
            Najważniejsze informacje, które musisz wiedzieć, aby zagłębić się w
            temat programowania. Materiały są przygotowane w taki sposób, aby
            były zrozumiałe i przyjemne do oglądania jednocześnie.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <SignUpButton>
              <span className='cursor-pointer rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
                Zarejestruj się
              </span>
            </SignUpButton>
            <ScrollLink
              to='contact'
              className='cursor-pointer text-sm font-semibold leading-6 text-white'
            >
              Skontaktuj się ze mną <span aria-hidden='true'>→</span>
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
}
