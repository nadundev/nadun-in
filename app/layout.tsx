import type { Metadata } from "next";
import { Karla } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const quincyCF = localFont({
  src: [
    {
      path: "/fonts/quincycf-thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "/fonts/quincycf-thinitalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "/fonts/quincycf-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "/fonts/quincycf-lightitalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "/fonts/quincycf-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/quincycf-regularitalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "/fonts/quincycf-text.otf",
      weight: "450",
      style: "normal",
    },
    {
      path: "/fonts/quincycf-textitalic.otf",
      weight: "450",
      style: "italic",
    },
    {
      path: "/fonts/quincycf-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/quincycf-mediumitalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "/fonts/quincycf-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/quincycf-bolditalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "/fonts/quincycf-extrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "/fonts/quincycf-extrabolditalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "/fonts/quincycf-black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "/fonts/quincycf-blackitalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-quincy-cf",
});

const karla = Karla({
  variable: "--font-karla-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nadun - UX Designer",
  description: "Designing portfolio of Nadun Nissanka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quincyCF.variable} ${karla.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
