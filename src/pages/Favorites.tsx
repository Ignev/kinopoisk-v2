import React from 'react'
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addfFavoriteFilm } from '../app/slice/favoritesSlice';
import FilmCard from '../components/buissnes/FilmCard';

function Favorites() {
    const dispatch = useAppDispatch();
    const films = useAppSelector((state) => state.favorites.films);
    console.log(films);
    
    return (
        <div className="wrapper">
          {films.map(( obj ) => (
            <FilmCard
              key={obj.id}
              id={obj.id}
              productionYear={obj.productionYear}
              genre={obj.genre}
              cover={obj.cover}
              name={obj.name}
              duration={obj.duration}
            />
          ))}
        </div>
      );
}

export default Favorites