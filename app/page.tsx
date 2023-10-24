"use client";
import styles from "./page.module.scss";
import HeroSection from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import ContactFormClientContact from "./components/ContactFormClientContact/ContactFormClientContact";
import Contact from "./components/Contact/Contact";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <HeroSection />
        <Services />
        <ContactFormClientContact />
        <Contact />
      </main>
    </>
  );
}
