import Link from "next/link";
import { type ReactElement } from "react";
import { getFaqs } from "../_utlis/getFaqs";

export async function FAQ(): Promise<ReactElement> {
  const { result } = await getFaqs();

  return (
    <div className='bg-white' id='faq'>
      <div className='mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8'>
        <h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-900'>
          Często zadawane pytania
        </h2>
        <p className='mt-6 max-w-2xl text-base leading-7 text-gray-600'>
          Masz inne pytanie i nie możesz znaleźć odpowiedzi, której szukasz?
          Skontaktuj się ze mną, wysyłając wiadomość na adres e-mail{" "}
          <Link
            href='mailto:kontakt@grabowskidawid.com'
            className='font-semibold text-indigo-600 hover:text-indigo-500'
          >
            kontakt@grabowskidawid.com
          </Link>{" "}
          i odezwę się do Ciebie najszybciej jak to możliwe.
        </p>
        <div className='mt-20'>
          <dl className='space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10'>
            {result.map((faq) => (
              <div key={faq.id}>
                <dt className='text-base font-semibold leading-7 text-gray-900'>
                  {faq.title}
                </dt>
                <dd className='mt-2 text-base leading-7 text-gray-600'>
                  {faq.content}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
