import { Footer } from "@/app/_components/Footer";
import { SignUp } from "@clerk/nextjs";
import { type ReactElement } from "react";

export default function Register(): ReactElement {
  return (
    <section className='w-screen min-h-screen flex items-center justify-center flex-col top-full pb-16'>
      <SignUp />
      <Footer />
    </section>
  );
}
