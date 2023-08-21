import styles from "./page.module.scss";
import HeroSection from "./components/Hero";
import Services from "./components/Services";
import ContactFormClientContact from "./components/ContactFormClientContact";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <HeroSection />
        <Services />
        <ContactFormClientContact />
      </main>
    </>
  );
}
