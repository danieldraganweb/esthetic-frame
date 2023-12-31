"use client";
import styles from "./page.module.scss";
import HeroSection from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import ContactFormClientContact from "./components/ContactFormClientContact/ContactFormClientContact";
import BlogComponent from "./components/Blog/Blog";
import CookiePolicyAlert from "./components/CookiePolicies/CookiePolicy";
import FacebookPixel from "./components/FacebookPixel/FacebookPixel";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <HeroSection />
        <Services />
        <ContactFormClientContact />
        <BlogComponent />
        <CookiePolicyAlert />
        <FacebookPixel />
      </main>
    </>
  );
}
