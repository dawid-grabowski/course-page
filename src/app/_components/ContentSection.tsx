import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { type ReactElement } from "react";
import dgLogo from "../../../public/dg_yt.jpg";

export function ContentSection(): ReactElement {
  return (
    <div className='isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0'>
      <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div className='lg:max-w-lg'>
              <p className='text-base font-semibold leading-7 text-indigo-600'>
                Czy jest sens?
              </p>
              <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Rozwój jako programista
              </h1>
              <p className='mt-6 text-xl leading-8 text-gray-700'>
                W pracy programisty najważniejszym jest nie zostawać w tyle i
                zawsze być up-to-date z technologiami. Jest wiele źródeł wiedzy
                i warto wybrać świadomie swoją ścieżkę rozwoju.
              </p>
            </div>
          </div>
        </div>
        <div className='-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'>
          <Image
            className='w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]'
            src={dgLogo}
            alt=''
            width={1500}
            height={1000}
          />
        </div>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div className='max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg'>
              <p>
                Kursy online zyskują ogromnie na popularności. Są one bardzo
                wygodne, ponieważ możemy uczyć się w dowolnym miejscu i czasie.
                Mimo wygody warto zabrać pod uwagę również inne alternatywy.
                Jako, że jesteś na stronie z kursami postaram się mimo wszystko
                przekonać Cię, że wideo, które dla Ciebie przygotowałęm mogą być
                najlepszym rozwiązaniem.
              </p>
              <ul role='list' className='mt-8 space-y-8 text-gray-600'>
                <li className='flex gap-x-3'>
                  <CloudArrowUpIcon
                    className='mt-1 h-5 w-5 flex-none text-indigo-600'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      Push to deploy.
                    </strong>{" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </span>
                </li>
                <li className='flex gap-x-3'>
                  <LockClosedIcon
                    className='mt-1 h-5 w-5 flex-none text-indigo-600'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      SSL certificates.
                    </strong>{" "}
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo.
                  </span>
                </li>
                <li className='flex gap-x-3'>
                  <ServerIcon
                    className='mt-1 h-5 w-5 flex-none text-indigo-600'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      Database backups.
                    </strong>{" "}
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </span>
                </li>
              </ul>
              <p className='mt-8'>
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p>
              <h2 className='mt-16 text-2xl font-bold tracking-tight text-gray-900'>
                No server? No problem.
              </h2>
              <p className='mt-6'>
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
                vitae interdum mauris enim, consequat vulputate nibh. Maecenas
                pellentesque id sed tellus mauris, ultrices mauris. Tincidunt
                enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
