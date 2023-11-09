import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";

function LogoComponent() {
  return (
    <>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/Logo.svg"
            alt="logo"
            width={400}
            height={130}
            sizes="100vw"
            priority={true}
            style={{
              objectFit: "contain",
              borderRadius: "1em",
            }}
            className={styles["logo"]}
          />
        </Link>
      </div>
    </>
  );
}

export default LogoComponent;
