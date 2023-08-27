import { type ReactElement } from "react";
import { CTA } from "./_components/CTA";
import { Contact } from "./_components/Contact";
import { FAQ } from "./_components/FAQ";
import { Footer } from "./_components/Footer";
import { Hero } from "./_components/Hero";

export default function Home(): ReactElement {
  return (
    <main className='bg-neutral-900'>
      <Hero />
      <CTA />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
