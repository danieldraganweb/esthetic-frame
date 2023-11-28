import "./globals.scss";
import type { Metadata } from "next";
import Head from "next/head";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Script from "next/script";
import {
  Cormorant_Garamond,
  Roboto,
  Cinzel_Decorative,
} from "next/font/google";

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
// const data = {
//   event: {
//     token:
//       "",
//     siteKey: "6Ldjnh4pAAAAABo7csbvpnlKF8MpQYeMCg8Cz19P",
//     expectedAction: "homepage",
//   },
// }; // Replace {} with your actual data object

// fetch(
//   "https://recaptchaenterprise.googleapis.com/v1/projects/esthetic-frame-1701156317748/assessments?key=YOUR_API_KEY",
//   {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   }
// )
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Success:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="ESTHETIC FRAME by Alexandra Ivan" />
        <meta
          property="og:description"
          content="Permanenten Make-up Studio, Vienna, Austria"
        />
        <meta property="og:image" content="/Logo.svg" />
        <meta property="og:url" content="estheticframe.at" />
        <meta property="og:type" content="website" />
        <meta name="author" content="Alexandra Ivan" />

        <script
          src="https://www.google.com/recaptcha/enterprise.js?render=6Ldjnh4pAAAAABo7csbvpnlKF8MpQYeMCg8Cz19P"
          async
          defer
        ></script>
      </Head>
      <Script
        id="cookieyes"
        src="https://cdn-cookieyes.com/client_data/d28c0f4d8bfb96a1cace6550/script.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://www.google.com/recaptcha/enterprise.js?render=6Ldjnh4pAAAAABo7csbvpnlKF8MpQYeMCg8Cz19P"
        async
        defer
      />
      <html
        lang="de"
        className={`${cormorant_garamond.variable} ${roboto.variable} ${cinzel_decorative.variable}`}
      >
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
