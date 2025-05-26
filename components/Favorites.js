import React from "react";
import { Navigation } from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Favorites.module.css";
import { useSelector } from "react-redux";
import { Cards } from "./Cards";

export const Favorites = () => {
  const favorite = useSelector((state) => state.favorites.value);
  let favorites = <p>pas encore de favories</p>;
  if (favorite.length > 0) {
    favorites = favorite.map((data, i) => {
      return <Cards key={i} {...data} />;
    });
  }
  return (
    <>
      <main className={styles.main}>
        <div className={styles.headerContainer}>
          <Navigation />
          <h1 className={styles.title}>Movies App</h1>
        </div>
        <div className={styles.subtitleContainer}>
          <h3 className={styles.subtitle}>Coups de coeur</h3>
          <FontAwesomeIcon className={styles.subtitleIcon} icon={faHeart} />
        </div>

        <ul className={styles.cardsContainer}>{favorites}</ul>
      </main>
    </>
  );
};
