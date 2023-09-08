import React from "react";
// import Image from "next/image";
import styles from "./Navbar.module.scss";
import Link from "next/link";

function LogoComponent() {
  return (
    <>
      <div className={styles.logo}>
        <div className={styles.logo__square}></div>
        <Link href="/">
          <h1>ESTHETIC FRAME</h1>
          <h2>by Alexandra Ivan</h2>
        </Link>
      </div>
    </>
  );
}

export default LogoComponent;
