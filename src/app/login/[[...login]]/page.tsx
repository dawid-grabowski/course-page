import { SignIn } from "@clerk/nextjs";
import { type ReactElement } from "react";

export default async function Login(): Promise<ReactElement> {
  return (
    <section className='w-screen min-h-screen flex items-center justify-center pb-16'>
      <SignIn />
    </section>
  );
}
