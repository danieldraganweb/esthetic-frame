import Image from "next/image";
import styles from "./page.module.scss";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <h1 className={styles.title}>Welcome to Esthetic Frame</h1>
    </main>
  );
}
