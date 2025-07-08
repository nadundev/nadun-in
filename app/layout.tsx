import type { Metadata, Viewport } from "next";
import { Karla } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import StructuredData from "./components/StructuredData";

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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also disable zoom on iOS
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://nadun.in'),
  title: {
    default: "Nadun Nissanka - UX Designer",
    template: "%s | Nadun Nissanka"
  },
  description: "Award-winning UX Designer specializing in user-centered design, product strategy, and digital experiences. View my portfolio of innovative design solutions.",
  keywords: ["UX Designer", "User Experience", "Product Designer", "UI Design", "Portfolio", "Nadun Nissanka", "Sri Lanka", "Design"],
  authors: [{ name: "Nadun Nissanka" }],
  creator: "Nadun Nissanka",
  publisher: "Nadun Nissanka",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nadun.in',
    title: 'Nadun Nissanka - UX Designer',
    description: 'Award-winning UX Designer specializing in user-centered design, product strategy, and digital experiences.',
    siteName: 'Nadun Nissanka Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nadun Nissanka - UX Designer Portfolio',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nadun Nissanka - UX Designer',
    description: 'Award-winning UX Designer specializing in user-centered design, product strategy, and digital experiences.',
    creator: '@your-twitter-handle',
    images: {
      url: '/og-image.jpg',
      alt: 'Nadun Nissanka - UX Designer Portfolio',
    },
  },
  verification: {
    google: 'BuZc1879yCDqlLHuNo_2hB_wvz3tiyJdQdDzv7yNqfE',
  },
  alternates: {
    canonical: 'https://nadun.in',
  },
  other: {
    'theme-color': '#000000',
    'color-scheme': 'light',
    'twitter:image:alt': 'Nadun Nissanka - UX Designer Portfolio',
    'og:image:alt': 'Nadun Nissanka - UX Designer Portfolio',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="BuZc1879yCDqlLHuNo_2hB_wvz3tiyJdQdDzv7yNqfE" />
        <StructuredData />
      </head>
      <body
        className={`${quincyCF.variable} ${karla.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
