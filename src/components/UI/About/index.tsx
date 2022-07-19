import React from "react";

import styles from "./style.module.css"; 

type AboutProps = {
  year: any;
  released: any;
  runtime: any;
  genre: any;
  director: any;
  writer: any;
  actors: any;
  country: any;
};

function About({
  year,
  released,
  runtime,
  genre,
  director,
  writer,
  actors,
  country,
}: AboutProps): JSX.Element {
  return (
    <>
      <div className={styles.infoItem}>
        <div className={styles.itemLeft}>Год производства</div>
        <div className={styles.itemRight}>{year}</div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.itemLeft}>Страна</div>
        <div className={styles.itemRight}>{country}</div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.itemLeft}>Жанр</div>
        <div className={styles.itemRight}>{genre}</div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.itemLeft}>Режиссер</div>
        <div className={styles.itemRight}>{director}</div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.itemLeft}>Сценарий</div>
        <div className={styles.itemRight}>{writer}</div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.itemLeft}>Актёры</div>
        <div className={styles.itemRight}>{actors}</div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.itemLeft}>Премьера в Росcии</div>
        <div className={styles.itemRight}>{released}</div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.itemLeft}>Длительносить</div>
        <div className={styles.itemRight}>{runtime}</div>
      </div>
    </>
  );
}

export default About;
