import React from "react";
import styles from "../styles/Home.module.css";
import { Navigation } from "./Navigation";

export const Favorites = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.headerContainer}>
          <Navigation />
          <h1 className={styles.title}>Movies App</h1>
        </div>
      </main>
    </>
  );
};
