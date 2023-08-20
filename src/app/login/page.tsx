import { SignIn } from "@clerk/nextjs";
import { type ReactElement } from "react";

export default function Login(): ReactElement {
  return (
    <section className='w-screen min-h-screen flex items-center justify-center pb-16'>
      <SignIn path='/login' routing='path' afterSignInUrl='/' redirectUrl='/' />
    </section>
  );
}
