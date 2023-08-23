"use client";

import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRef, type ReactElement } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import contactPhoto from "../../../public/contactPhoto.jpeg";

const ContactFormSchema = z.object({
  firstName: z.string().nonempty("Imię jest wymagane"),
  lastName: z.string().nonempty("Nazwisko jest wymagane"),
  title: z.string().nonempty("Tytuł jest wymagany"),
  email: z
    .string()
    .email("Niepoprawny adres email")
    .nonempty("Email jest wymagany"),
  message: z.string().nonempty("Wiadomość jest wymagana"),
});

type ContactForm = z.infer<typeof ContactFormSchema>;

export function Contact(): ReactElement {
  const { register, handleSubmit } = useForm<ContactForm>({
    resolver: zodResolver(ContactFormSchema),
  });

  const form = useRef<HTMLFormElement>(null);

  async function onSubmit(): Promise<void> {
    if (!form.current) return;

    await emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className='isolate bg-white px-6 py-24 sm:py-32 lg:px-8' id='contact'>
      <div className='mx-auto max-w-xl lg:max-w-4xl'>
        <h2 className='text-4xl font-bold tracking-tight text-gray-900'>
          Masz pytanie? Użyj formularza poniżej!
        </h2>
        <p className='mt-2 text-lg leading-8 text-gray-600'>
          Pamiętaj, że nie ma głupich pytań. Jeśli masz jakiekolwiek wątpliwości
          lub chcesz się czegoś dowiedzieć, napisz do mnie. Postaram się
          odpowiedzieć jak najszybciej.
        </p>
        <div className='mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row'>
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className='lg:flex-auto'
          >
            <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
              <div>
                <label
                  htmlFor='firstName'
                  className='block text-sm font-semibold leading-6 text-gray-900'
                >
                  Imię
                </label>
                <div className='mt-2.5'>
                  <input
                    type='text'
                    {...register("firstName")}
                    id='first-name'
                    autoComplete='given-name'
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='lastName'
                  className='block text-sm font-semibold leading-6 text-gray-900'
                >
                  Nazwisko
                </label>
                <div className='mt-2.5'>
                  <input
                    type='text'
                    {...register("lastName")}
                    id='last-name'
                    autoComplete='family-name'
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='title'
                  className='block text-sm font-semibold leading-6 text-gray-900'
                >
                  Tytuł
                </label>
                <div className='mt-2.5'>
                  <input
                    id='title'
                    {...register("title")}
                    type='text'
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-semibold leading-6 text-gray-900'
                >
                  Email
                </label>
                <div className='mt-2.5'>
                  <input
                    type='email'
                    {...register("email")}
                    id='website'
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='message'
                  className='block text-sm font-semibold leading-6 text-gray-900'
                >
                  Treść wiadomości
                </label>
                <div className='mt-2.5'>
                  <textarea
                    id='message'
                    {...register("message")}
                    rows={4}
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className='mt-10'>
              <button
                type='submit'
                className='block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Wyślij wiadomość
              </button>
            </div>
            <p className='mt-4 text-sm leading-6 text-gray-500'>
              Wysyłając wiadomość, akceptuję{" "}
              <Link
                href='/privacy-policy'
                className='font-semibold text-indigo-600'
              >
                politykę&nbsp;prywatności
              </Link>
              .
            </p>
          </form>
          <div className='lg:mt-6 lg:w-80 lg:flex-none'>
            {/* <Image
              className='h-12 w-auto'
              src='https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg'
              alt=''
              fill
            /> */}
            <figure className='mt-10'>
              <blockquote className='text-lg font-semibold leading-8 text-gray-900'>
                <p>
                  “Tu miał być jakiś gruby cytat. Cytatu nie będzie bo nie
                  potrafię w sztukę ale umiem programować, chociaż programowanie
                  to trochę sztuka - nie?”
                </p>
              </blockquote>
              <figcaption className='mt-10 flex gap-x-6'>
                <Image
                  src={contactPhoto}
                  alt=''
                  className='h-12 w-12 flex-none rounded-full bg-gray-50'
                />
                <div>
                  <div className='text-base font-semibold text-gray-900'>
                    Dawid Grabowski
                  </div>
                  <div className='text-sm leading-6 text-gray-600'>
                    Frontend Developer
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
