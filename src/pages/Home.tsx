import React from "react";

import FilmCard from "../components/buissnes/FilmCard";

import films from "../assets/films.json";

console.log(films[0].id);

function Home() {
  return (
    <div className="wrapper">
      {films.map((obj) => (
        <FilmCard
          key={obj.id}
          id={obj.id}
          productionYear={obj.Year}
          genre={obj.Genre}
          cover={obj.Poster}
          name={obj.Title}
          duration={obj.Runtime}
        />
      ))}
    </div>
  );
}

export default Home;
