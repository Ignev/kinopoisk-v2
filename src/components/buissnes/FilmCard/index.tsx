import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

type FilmCardProps = {
  id: number;
  productionYear: string;
  genre: string;
  cover: string;
  name: string;
  duration: string;
};

function FilmCard({
  id,
  productionYear,
  genre,
  cover,
  name,
  duration,
}: FilmCardProps): JSX.Element {
  return (
    <Link to={`/${id}`} state={{ id: id }}>
      <div className={styles.root}>
        <img className={styles.cover} src={cover} alt="" />
        <div className={styles.info}>
          <h3 className={styles.title}>{name}</h3>
          <span>
            <span className={styles.bull}> ·</span> {productionYear}
          </span>
          <span>
            <span className={styles.bull}> ·</span> {genre}
          </span>
          <span>
            <span className={styles.bull}> ·</span> {duration}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default FilmCard;
