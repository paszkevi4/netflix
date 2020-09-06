import React, { useState, useEffect } from 'react';
import axios from '../API/api';
import URIs from '../API/requests';
import s from './header.module.sass';

const Header = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios(URIs.netflixOriginals);
      const temp = Math.floor(Math.random() * res.data.results.length);
      console.log('temp: ', temp);
      setMovie(res.data.results[temp]);
    };
    fetch();
  }, []);

  return (
    <header
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}>
      <div className={s.header__container}>
        <h1>{movie?.name}</h1>
        <button>play</button>
        <button>to my list</button>
        <p className={s.header__container_description}>{movie?.overview}</p>
      </div>
      <div className={s.header__fade}></div>
    </header>
  );
};

export default Header;
