import React, { useState, useEffect } from 'react';

import axios from '../../API/api';
import Poster from './Poster/Poster';
import s from './row.module.sass';
import { NavigateNext, NavigateBefore } from '@material-ui/icons';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w300/';

function Row({ title, fetchUrl, isVertical }) {
  const [movies, setMovies] = useState([]);

  let [offset, setOffset] = useState(0);
  const offsets = ['0', '-93.2vw', '-186.3vw', '-217.4vw'];

  const increaseOffset = () => {
    if (offset < 3) {
      setOffset(++offset);
    } else {
      setOffset(0);
    }
  };

  const decreaseOffset = () => {
    if (offset > 0) {
      setOffset(--offset);
    } else {
      setOffset(3);
    }
  };

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
      <div className={s.row__posters} style={{ transform: `translateX(${offsets[offset]})` }}>
        {movies.map((movie) => {
          return <Poster movie={movie} isVertical={false} />;
        })}
      </div>
      <div className={`${s.offsetswitch_container} ${s.container_before}`}>
        <div className={s.row__offsetswitch} onClick={decreaseOffset}>
          <NavigateBefore fontSize="large" />
        </div>
      </div>
      <div className={`${s.offsetswitch_container} ${s.container_next}`}>
        <div className={s.row__offsetswitch} onClick={increaseOffset}>
          <NavigateNext fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Row;
