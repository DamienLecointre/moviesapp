import { Navigation } from "./Navigation";
import styles from "../styles/Home.module.css";

function Home() {
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
}

export default Home;
