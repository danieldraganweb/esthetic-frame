import styles from "./page.module.scss";
import HeroSection from "./components/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <h1 className={styles.title}>Welcome to Esthetic Frame</h1>
    </main>
  );
}
