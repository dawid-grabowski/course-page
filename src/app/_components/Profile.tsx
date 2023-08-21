import { UserProfile } from "@clerk/nextjs";
import { type ReactElement } from "react";

export function Profile(): ReactElement {
  return (
    <section className='w-screen min-h-screen flex items-center justify-center pb-16'>
      <UserProfile />
    </section>
  );
}
