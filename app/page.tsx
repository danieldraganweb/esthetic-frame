import styles from "./page.module.scss";
import HeroSection from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <HeroSection />
        <Services />
      </main>
    </>
  );
}
