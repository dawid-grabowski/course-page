import { SignUp } from "@clerk/nextjs";
import { type ReactElement } from "react";

export default async function Register(): Promise<ReactElement> {
  return (
    <section className='w-screen min-h-screen flex items-center justify-center flex-col top-full pt-24 pb-16'>
      <SignUp />
    </section>
  );
}
