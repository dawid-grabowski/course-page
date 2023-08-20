import { plPL } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
      <html lang='pl-PL'>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
