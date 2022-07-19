import React from "react";
import { useLocation } from "react-router-dom";
import films from "../../assets/films.json";
import About from "../../components/UI/About";
import Grade from "../../components/buissnes/Grade";

import styles from "./style.module.css";

function Film(): JSX.Element {
  const location: any = useLocation();
  const [imagePopup, setImagePopup] = React.useState(false);
  const [srcImg, setSrcImg] = React.useState("");

  const clickImage = (src: string) => {
    setImagePopup(true);
    setSrcImg(src);
  };
  const clickPopup = () => {
    setImagePopup(false);
    setSrcImg("");
  };

  const currentId = +location.state.id;
  const film = films.find((film) => film.id === currentId);
  console.log(currentId);

  return (
    <>
      {imagePopup ? (
        <div className={styles.popup} onClick={() => clickPopup()}>
          <img src={srcImg} className={styles.popupImage} alt={`srcImg`} />
        </div>
      ) : (
        ""
      )}
      <div className="wrapper">
        <div className={styles.root}>
          <div className={styles.cover}>
            <img className={styles.coverImg} src={film?.Poster} alt="" />
          </div>
          <div className={styles.info}>
            <h1 className={styles.title}>
              {film?.Title} ({film?.Year})
            </h1>
            <div className={styles.click}>
              <span className={styles.rated}>{film?.Rated}+</span>{" "}
              <button className={styles.fav}></button>
            </div>

            <h2 className={styles.subtitle}>О фильме:</h2>

            <About
              year={film?.Year}
              released={film?.Released}
              country={film?.Country}
              runtime={film?.Runtime}
              genre={film?.Genre}
              director={film?.Director}
              writer={film?.Writer}
              actors={film?.Actors}
            />
          </div>
        </div>
        <Grade
          imdbRating={film?.imdbRating}
          currentGrade={Number(film?.imdbRating)}
          imdbVotes={film?.imdbVotes}
        />
        <div className={styles.sliderWrapp}>
          <h3 className={styles.sliderTitle}>Кадры из фильма:</h3>
          <div className={styles.slider}>
            {film?.Images.map((imgSrc, index) => (
              <img
                key={index}
                className={styles.sliderItem}
                src={imgSrc}
                alt={`imgSrc`}
                onClick={() => clickImage(imgSrc)}
              />
            ))}
          </div>
        </div>
        <div className={styles.filmPlot}>
          <h3 className={styles.filmPlotTitle}>Краткое описание:</h3>
          <p className={styles.filmPlotText}>{film?.Plot}</p>
        </div>
        <div className={styles.videoWrapper}>
          <div className={styles.videoHeader}></div>
          <video className={styles.video} controls src={film?.src}></video>
        </div>
      </div>
    </>
  );
}

export default Film;
