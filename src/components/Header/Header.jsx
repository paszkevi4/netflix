import React, { useState, useEffect } from 'react';
import axios from '../API/api';
import URIs from '../API/requests';
import s from './header.module.sass';
import luciferTitle from '../../img/lucifer.png';
import { PlayArrow, InfoOutlined } from '@material-ui/icons';

const Header = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios(URIs.netflixOriginals);
      const temp = Math.floor(Math.random() * res.data.results.length);
      console.log('temp: ', temp);
      // switch hardcoded 1 to temp
      setMovie(res.data.results[1]);
    };
    fetch();
  }, []);

  // TODO: rename header
  return (
    <div
      className={s.header}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}>
      <div className={s.header__container}>
        <img src={luciferTitle} alt="Lucifer" />
        <div className={s.header_button__group}>
          <button>
            {<PlayArrow fontSize="large" />}
            <span>Play</span>
          </button>
          <button>
            {<InfoOutlined fontSize="large" />}
            <span>More Info</span>
          </button>
        </div>

        {/* <h1>{movie?.name}</h1> */}
        {/* <p className={s.header__container_description}>{movie?.overview}</p> */}
      </div>
      <div className={s.header_fade}>
        <div></div>
      </div>
      <div className={s.header__fade}></div>
    </div>
  );
};

export default Header;
