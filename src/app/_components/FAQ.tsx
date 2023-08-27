import Link from "next/link";
import { type ReactElement } from "react";
import { getFaqs } from "../_utlis/getFaqs";
import { FAQWrapper } from "./FAQWrapper";

export async function FAQ(): Promise<ReactElement> {
  const { result } = await getFaqs();

  return (
    <FAQWrapper>
      <div className='mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8'>
        <h2 className='text-2xl font-bold leading-10 tracking-tight text-zinc-200'>
          Często zadawane pytania
        </h2>
        <p className='mt-6 max-w-2xl text-base leading-7 text-zinc-400'>
          Masz inne pytanie i nie możesz znaleźć odpowiedzi, której szukasz?
          Skontaktuj się ze mną, wysyłając wiadomość na adres e-mail{" "}
          <Link
            href='mailto:kontakt@grabowskidawid.com'
            className='font-semibold text-indigo-700 transition-colors hover:text-indigo-600'
          >
            kontakt@grabowskidawid.com
          </Link>{" "}
          i odezwę się do Ciebie najszybciej jak to możliwe.
        </p>
        <div className='mt-20'>
          <dl className='space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10'>
            {result.map((faq) => (
              <div key={faq.id}>
                <dt className='text-base font-semibold leading-7 text-zinc-200'>
                  {faq.title}
                </dt>
                <dd className='mt-2 text-base leading-7 text-zinc-400'>
                  {faq.content}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </FAQWrapper>
  );
}
