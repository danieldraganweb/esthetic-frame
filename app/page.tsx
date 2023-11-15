"use client";
import styles from "./page.module.scss";
import HeroSection from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import ContactFormClientContact from "./components/ContactFormClientContact/ContactFormClientContact";
import BlogComponent from "./components/Blog/Blog";
import CookiePolicyAlert from "./components/CookiePolicies/CookiePolicy";
import FacebookPixel from "./components/FacebookPixel/FacebookPixel";
import Error from "./error";
import { ErrorBoundary } from "react-error-boundary";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <ErrorBoundary fallback={Error as any}>
          <HeroSection className={styles.hero} />
          <Services className={styles.services} />
          <ContactFormClientContact className={styles.contactForm} />
          <BlogComponent className={styles.blog} />
          <CookiePolicyAlert />
          <FacebookPixel />
        </ErrorBoundary>
      </main>
    </>
  );
}
