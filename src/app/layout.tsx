import { plPL } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Footer } from "./_components/Footer";
import { Navbar } from "./_components/Navbar";
import { ProgressBar } from "./_components/ProgressBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dawid Grabowski - Programowanie może być proste i przyjemne",
  description: "Generated by create next app",
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
          <meta name='theme-color' content='#ffffff' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='black-translucent'
          />
        </head>
        <body className={clsx(inter.className, "relative overflow-x-hidden")}>
          <Navbar />
          <ProgressBar />
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
