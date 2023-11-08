import "./globals.scss";
import type { Metadata } from "next";
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
  description: "Permanent makeup and microblading in Austria, Vienna",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${cormorant_garamond.variable} ${roboto.variable} ${cinzel_decorative.variable}`}
    >
      <head>
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/d28c0f4d8bfb96a1cace6550/script.js"
          strategy="lazyOnload"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
