import { type ReactElement } from "react";
import { CTA } from "./_components/CTA";
import { Contact } from "./_components/Contact";
import { ContentSection } from "./_components/ContentSection";
import { Courses } from "./_components/Courses";
import { FAQ } from "./_components/FAQ";
import { Footer } from "./_components/Footer";
import { Hero } from "./_components/Hero";
import { Navbar } from "./_components/Navbar";
import { Reviews } from "./_components/Reviews";

export default function Home(): ReactElement {
  return (
    <main className='bg-white'>
      <Navbar />
      <Hero />
      <Courses />
      <ContentSection />
      {/* <Reviews /> */}
      <CTA />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
