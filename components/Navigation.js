import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navigation.module.css";

export const Navigation = () => {
  // const [activeLink, setActiveLink] = useState("home");
  const router = useRouter();
  const activePath = router.pathname;

  return (
    <div className={styles.linkContainer}>
      <Link
        href="/home"
        // onClick={() => setActiveLink("home")}
        className={`${styles.link} ${
          activePath === "/home" ? styles.active : ""
        }`}
      >
        Accueil
      </Link>
      <Link
        href="/favorites"
        // onClick={() => setActiveLink("favorites")}
        className={`${styles.link} ${
          activePath === "/favorites" ? styles.active : ""
        }`}
      >
        Mes favories
      </Link>
    </div>
  );
};
