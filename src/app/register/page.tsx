import { SignUp } from "@clerk/nextjs";
import { type ReactElement } from "react";

export default function Register(): ReactElement {
  return (
    <section className='w-screen min-h-screen flex items-center justify-center pb-16'>
      <SignUp path='/register' />
    </section>
  );
}
