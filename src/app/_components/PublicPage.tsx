import { type ReactElement } from "react";
import { CTA } from "./CTA";
import { Contact } from "./Contact";
import { ContentSection } from "./ContentSection";
import { Courses } from "./Courses";
import { FAQ } from "./FAQ";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { Reviews } from "./Reviews";

export function PublicPage(): ReactElement {
  return (
    <main className='bg-white'>
      <Navbar />
      <Hero />
      <Courses />
      <ContentSection />
      <Reviews />
      <CTA />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
