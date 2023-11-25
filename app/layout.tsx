import "./globals.scss";
import type { Metadata } from "next";
import Head from "next/head";
import {
  Cormorant_Garamond,
  Roboto,
  Cinzel_Decorative,
} from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Script from "next/script";

const cormorant_garamond = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-garamond",
  weight: ["300", "400", "500", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700"],
});

const cinzel_decorative = Cinzel_Decorative({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cinzel-decorative",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Esthetic Frame by Alexandra Ivan",
  description: "Permanent makeup and microblading studio in Austria, Vienna",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html
        lang="de"
        className={`${cormorant_garamond.variable} ${roboto.variable} ${cinzel_decorative.variable}`}
      >
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            property="og:title"
            content="ESTHETIC FRAME by Alexandra Ivan"
          />
          <meta
            property="og:description"
            content="Permanenten Make-up Studio, Vienna, Austria"
          />
          <meta property="og:image" content="/Logo.svg" />
          <meta property="og:url" content="estheticframe.at" />
          <meta property="og:type" content="website" />
          <meta name="author" content="Alexandra Ivan" />
        </Head>
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/d28c0f4d8bfb96a1cace6550/script.js"
          strategy="lazyOnload"
        />
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
