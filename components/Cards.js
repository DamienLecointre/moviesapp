import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Cards.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const Cards = (props) => {
  // console.log(moviesData);
  const genreData = props.genres;
  // const averagedata = props.voteAverage;

  return (
    <li className={styles.card}>
      <Image
        className={styles.img}
        src={props.poster}
        alt={props.title}
        height={300}
        width={220}
      />
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.text}>Sorti le : {props.date}</p>
      <div className={styles.averageContainer}>
        <h3 className={styles.averageText}>{props.voteAverage}</h3>
        <FontAwesomeIcon
          className={styles.averageIcon}
          icon={faStar}
          size="1rem"
        />
      </div>
      <ul className={styles.genreContainer}>
        {genreData.map((type) => (
          <li key={type} className={styles.genre}>
            {type}
          </li>
        ))}
      </ul>
      <p className={styles.text}>{props.overview}</p>
      <button className={styles.btnFavorite}>Ajouter aux coups de coeur</button>
    </li>
  );
};
