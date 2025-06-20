import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Cards.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addFavoritesToStore } from "../reducers/favorites";

export const Cards = (props) => {
  const dispatch = useDispatch();

  const addFavorites = (newFavorite) => {
    dispatch(addFavoritesToStore(newFavorite));
  };

  const genreData = props.genres;

  return (
    <li className={styles.card}>
      <Image
        className={styles.img}
        src={
          props.poster === "https://image.tmdb.org/t/p/w500/null"
            ? "/poster.jpg"
            : props.poster
        }
        alt={props.title}
        height={300}
        width={220}
        style={{ height: "auto" }}
      />
      <h1 className={styles.title}>
        {props.title === null || props.title === ""
          ? "Titre inconnu"
          : props.title}
      </h1>
      <p className={styles.text}>
        Sorti le :
        {props.date === null || props.date === ""
          ? "Date de sortie inconnue"
          : props.date}
      </p>
      <div className={styles.averageContainer}>
        <h3 className={styles.averageText}>
          {props.voteAverage === null || props.voteAverage === ""
            ? "-"
            : props.voteAverage}
          / 10
        </h3>
        {props.voteAverage && (
          <FontAwesomeIcon
            className={styles.averageIcon}
            icon={faStar}
            size="1x"
          />
        )}
      </div>
      <ul className={styles.genreContainer}>
        {genreData === undefined
          ? null
          : genreData.map((type) => (
              <li key={type} className={styles.genre}>
                {type}
              </li>
            ))}
      </ul>
      <div className={styles.synopsisContainer}>
        <h3 className={styles.averageText}>Synopsis</h3>
        <p className={styles.text}>
          {props.overview === null || props.overview === ""
            ? "Pas de résumé pour ce film"
            : props.overview}
        </p>
      </div>
      <button
        className={styles.btnFavorite}
        onClick={props.isHomePage ? () => addFavorites(props) : props.onClick}
      >
        {props.isHomePage
          ? "Ajouter aux coups de coeur"
          : "Suprimer des coups de coeur"}
      </button>
    </li>
  );
};
