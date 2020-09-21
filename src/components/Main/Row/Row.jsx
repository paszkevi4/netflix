import React, { useState, useEffect } from 'react';
import Poster from './Poster/Poster';
import axios from '../../API/api';
import s from './row.module.sass';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w300/';

function Row({ title, fetchUrl, isVertical }) {
  const [movies, setMovies] = useState([]);
  window.movies = movies;
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.results);
    };
    fetch();
  }, [fetchUrl]);
  return (
    <div className={s.row}>
      <h1 className={s.row__title}>{title}</h1>
      <div className={s.row__posters}>
        {movies.map((movie) => {
          return <Poster movie={movie} isVertical={false} />;
        })}
      </div>
    </div>
  );
}

export default Row;
