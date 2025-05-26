import React, { useState } from "react";
import styles from "../styles/Search.module.css";

export const Search = (props) => {
  const [searchMovie, setSearchMovie] = useState("");

  const handleSearch = (searchValue) => {
    props.searchDone(searchValue);
    setSearchMovie("");
  };

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        type="search"
        placeholder="Tapez votre recherche"
        onChange={(e) => setSearchMovie(e.target.value)}
        value={searchMovie}
      />
      <button
        className={styles.searchBtn}
        onClick={() => handleSearch(searchMovie)}
      >
        Rechercher
      </button>
    </div>
  );
};
