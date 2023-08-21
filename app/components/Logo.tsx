import React from "react";
// import Image from "next/image";
import styles from "../styles/components/Navbar.module.scss";

function LogoComponent() {
  return (
    <>
      <div className={styles.logo}>
        <div className={styles.logo__square}></div>
        <h1>ESTHETIC FRAME</h1>
        <h2>by Alexandra Ivan</h2>
      </div>
    </>
  );
}

export default LogoComponent;
