import { Navigation } from "./Navigation";
import { useEffect, useState } from "react";
import { Cards } from "./Cards";
import { Search } from "./Search";
import styles from "../styles/Home.module.css";
import { Sort } from "./Sort";

const TMDBAPIKEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

function Home() {
  const [search, setSearch] = useState(null);
  const [moviesData, setMoviesData] = useState([]);
  const [genresMap, setGenresMap] = useState({});

  // ---------------------------
  //RECHERCHE DES GENRES DE FILM
  // ---------------------------

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDBAPIKEY}&language=fr-FR`
    )
      .then((res) => res.json())
      .then((data) => {
        const map = {};
        data.genres.forEach((genre) => {
          map[genre.id] = genre.name;
        });
        setGenresMap(map);
        // console.log(genresMap);
      });
  }, []);

  // ------------------------------------------------------
  //AFFICHAGE D'UNE SELECTION DE FILM AU LOADING DE LA PAGE
  // ------------------------------------------------------

  useEffect(() => {
    if (Object.keys(genresMap).length === 0) return;
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${TMDBAPIKEY}&language=fr-FR`
    ).then((res) =>
      res.json().then((data) => {
        const formatedData = data.results.slice(0, 12).map((movie) => {
          const poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
          const dateStr = movie.release_date;
          const parts = dateStr.split("-").reverse();
          const invertedDate = parts.join("/");
          const averageData = movie.vote_average;
          const formatedAverage = averageData.toFixed(1);
          const genreNames = (movie.genre_ids || []).map((id) => genresMap[id]);
          let overview = movie.overview;
          if (overview.length > 250) {
            overview = overview.substring(0, 250) + "...";
          }

          return {
            poster,
            title: movie.title,
            date: invertedDate,
            voteAverage: formatedAverage,
            genres: genreNames,
            overview,
          };
        });
        setMoviesData(formatedData);
      })
    );
  }, [genresMap]);

  // ------------------------------------
  //AFFICHAGE DU RESULTAT DE LA RECHERCHE
  // ------------------------------------

  const searchDone = (searchInput) => {
    // console.log("recherche :", search);
    setSearch(searchInput);
  };

  useEffect(() => {
    if (search === null || Object.keys(genresMap).length === 0) return;
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${TMDBAPIKEY}&query=${search}&language=fr-FR`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log("data brut :", data.results);

        const formatedData = data.results.slice(0, 12).map((movie) => {
          const poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
          const dateStr = movie.release_date;
          const parts = dateStr.split("-").reverse();
          const invertedDate = parts.join("/");
          const averageData = movie.vote_average;
          const formatedAverage = averageData.toFixed(1);
          const genreNames = (movie.genre_ids || []).map((id) => genresMap[id]);
          let overview = movie.overview;
          if (overview.length > 250) {
            overview = overview.substring(0, 250) + "...";
          }

          return {
            poster,
            title: movie.title,
            date: invertedDate,
            voteAverage: formatedAverage,
            genres: genreNames,
            overview,
          };
        });
        // setMoviesData(formatedData);
        setMoviesData(formatedData);
        // console.log("voici formatedData :", moviesData);
      });
  }, [search, genresMap]);
  // console.log("Voici moviesData après fetch :", moviesData);
  // console.log("voici la recherche :", search);

  // 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher'

  // -----------------
  //AFFICHAGE DES CARDS
  // ------------------

  const moviesCards = moviesData.map((data, index) => {
    return (
      <Cards
        key={index}
        poster={data.poster}
        title={data.title}
        date={data.date}
        voteAverage={data.voteAverage}
        genres={data.genres}
        overview={data.overview}
        isHomePage={true}
      />
    );
  });

  // ------------
  //TRI DES CARDS
  // ------------

  const selectedBtnSort = (btnName) => {
    console.log(btnName, moviesData);
    if (btnName === "Top") {
      setMoviesData(moviesData.sort((a, b) => a.title - b.title));
    }
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.headerContainer}>
          <Navigation />
          <h1 className={styles.title}>Movies App</h1>
        </div>
        <Search searchDone={searchDone} />
        <Sort selectedBtnSort={selectedBtnSort} />
        <ul className={styles.cardsContainer}>{moviesCards}</ul>
      </main>
    </>
  );
}

export default Home;
