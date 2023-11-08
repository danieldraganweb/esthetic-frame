"use client";
import styles from "./page.module.scss";
import HeroSection from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import ContactFormClientContact from "./components/ContactFormClientContact/ContactFormClientContact";
import BlogComponent from "./components/Blog/Blog";
import CookiePolicyAlert from "./components/CookiePolicies/CookiePolicy";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <HeroSection className={styles.hero} />
        <Services className={styles.services} />
        <ContactFormClientContact className={styles.contactForm} />
        <BlogComponent className={styles.blog} />
        <CookiePolicyAlert />
      </main>
    </>
  );
}
