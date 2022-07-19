import React from "react";

import styles from "./style.module.css";

type GradeProps = {
  currentGrade: any;
  imdbRating: any;
  imdbVotes: any;
};

function Grade({ currentGrade, imdbRating, imdbVotes }: GradeProps) {
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>Рейтинг фильма:</h3>
      <div className={styles.gradeWrapp}>
        <fieldset className={styles.rating}>
          {currentGrade >= 6 ? (
            <span className={styles.currentGradeGreen}>{currentGrade}</span>
          ) : currentGrade <= 6 && currentGrade >= 4 ? (
            <span className={styles.currentGradeGray}>{currentGrade}</span>
          ) : (
            <span className={styles.currentGradeRed}>{currentGrade}</span>
          )}
          <div className={styles.ratingGroup}>
            <input
              type="radio"
              name="rating"
              value={1}
              className={styles.ratingStar}
            />
            <input
              type="radio"
              name="rating"
              value={2}
              className={styles.ratingStar}
            />
            <input
              type="radio"
              name="rating"
              value={3}
              className={styles.ratingStar}
            />
            <input
              type="radio"
              name="rating"
              value={4}
              className={styles.ratingStar}
            />
            <input
              type="radio"
              name="rating"
              value={5}
              className={styles.ratingStar}
            />
            <input
              type="radio"
              name="rating"
              value={6}
              className={styles.ratingStar}
            />
            <input
              type="radio"
              name="rating"
              value={7}
              className={styles.ratingStar}
            />
            <input
              type="radio"
              name="rating"
              value={8}
              className={styles.ratingStar}
            />
            <input
              type="radio"
              name="rating"
              value={9}
              className={styles.ratingStar}
            />
            <input
              type="radio"
              name="rating"
              value={10}
              className={styles.ratingStar}
            />
          </div>
        </fieldset>
      </div>
      <span className={styles.imdbRating}>Оценок: {imdbVotes}</span>
    </div>
  );
}

export default Grade;
