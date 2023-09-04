import { plPL } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Footer } from "./_components/Footer";
import { Navbar } from "./_components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Dawid Grabowski - Kursy, konsultacje, przyjemnie i prosto o programowaniu.",
  description:
    "Na platformie znajdziesz kursy, konsultacje oraz materiały, które pomogą Ci w nauce programowania. Najnowsze technologie, wytłumaczone w prosty i przyjemny sposób. Programowanie nie musi być nudne, a nauka może być relaksująca.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      localization={plPL}
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#4f46e5",
        },
      }}
    >
      <html lang='pl-PL' style={{ scrollBehavior: "smooth" }}>
        <head>
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='./apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='./favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='./favicon-16x16.png'
          />
          <link rel='manifest' href='./site.webmanifest' />
          <link
            rel='mask-icon'
            href='./safari-pinned-tab.svg'
            color='#2563eb'
          />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='theme-color' content='#171717' />
        </head>
        <body className={clsx(inter.className, "relative overflow-x-hidden")}>
          <Navbar />
          <Script
            src='https://app.easy.tools/coffees/scripts/191ab6e973cd40a7b02fc1d9244dad7b.js'
            strategy='lazyOnload'
          />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
