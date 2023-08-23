"use client";

import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type ReactElement } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import contactPhoto from "../../../public/contactPhoto.jpeg";
import { StatusAlert } from "./StatusAlert";

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

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact(): ReactElement {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  const { register, handleSubmit, reset } = useForm<ContactForm>({
    resolver: zodResolver(ContactFormSchema),
  });

  const form = useRef<HTMLFormElement>(null);

  async function onSubmit(): Promise<void> {
    if (!form.current) return;

    setFormStatus("loading");

    await emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
      )
      .then(
        (result) => {
          setFormStatus("success");
          console.log(result.text);
        },
        (error) => {
          setFormStatus("error");
          console.log(error.text);
        }
      )
      .finally(() => {
        reset();
      });
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
                    placeholder='np. Jan'
                    id='firstName'
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
                    placeholder='np. Kowalski'
                    id='lastName'
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
                    placeholder='np. Dokąd nocą tupta jeż?'
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
                    id='email'
                    type='email'
                    {...register("email")}
                    placeholder='np. jan.kowalski@gmail.com'
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
                    placeholder='np. Cześć Dawid, chciałbym się dowiedzieć gdzie tuptają jeże w nocy? Wiem, że może to głupie pytanie ale chyba programista powinien znać odpowiedź na to pytanie? Z góry dzięki. Janek.'
                    rows={6}
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className='mt-10'>
              <button
                type='submit'
                className='flex items-center justify-center w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                {formStatus === "loading" ? (
                  <div role='status'>
                    <svg
                      aria-hidden='true'
                      className='w-4 h-4 mr-2 text-white animate-spin fill-indigo-600'
                      viewBox='0 0 100 101'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                        fill='currentColor'
                      />
                      <path
                        d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                        fill='currentFill'
                      />
                    </svg>
                    <span className='sr-only'>Wysyłanie...</span>
                  </div>
                ) : (
                  <span>Wyślij wiadomość</span>
                )}
              </button>
              {formStatus === "success" ? (
                <StatusAlert
                  title='Wiadomość została wysłana!'
                  status='success'
                >
                  <span>
                    Postaram się skontaktować z Tobą jak najprędzej. Zazwyczaj
                    zajmuje mi to do 24h.
                  </span>
                </StatusAlert>
              ) : null}
              {formStatus === "error" ? (
                <StatusAlert title='Wystąpił błąd.' status='error'>
                  <span>
                    Niestety wystąpił błąd. Spróbuj ponownie później lub napisz
                    wiadomość bezpośrednio na mojego maila:
                  </span>{" "}
                  <Link
                    href='mailto:kontakt@grabowskidawid.com'
                    className='font-medium'
                  >
                    kontakt@grabowskidawid.com
                  </Link>
                </StatusAlert>
              ) : null}
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
