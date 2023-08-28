import { type ReactElement } from "react";
import { CTA } from "./_components/CTA";
import { Contact } from "./_components/Contact";
import { FAQ } from "./_components/FAQ";
import { Hero } from "./_components/Hero";
import { ProgressBar } from "./_components/ProgressBar";

export default async function Home(): Promise<ReactElement> {
  return (
    <main className='bg-neutral-900 z-0'>
      <ProgressBar />
      <Hero />
      <CTA />
      <FAQ />
      <Contact />
    </main>
  );
}
