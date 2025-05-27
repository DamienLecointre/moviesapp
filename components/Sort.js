import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Sort.module.css";

export const Sort = (props) => {
  const handleClick = (name) => {
    props.selectedBtnSort(name);
  };

  return (
    <div className={styles.btnContainer}>
      <button
        className={styles.btnWrapper}
        value={"Top"}
        onClick={(e) => handleClick(e.target.value)}
      >
        Top <FontAwesomeIcon icon={faArrowUp} className={styles.icon} />
      </button>

      <button
        className={styles.btnWrapper}
        value={"Flop"}
        onClick={(e) => handleClick(e.target.value)}
      >
        Flop <FontAwesomeIcon icon={faArrowDown} className={styles.icon} />
      </button>
    </div>
  );
};
