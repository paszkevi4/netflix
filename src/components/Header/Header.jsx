import React, { useState, useEffect } from 'react';
import axios from '../API/api';
import URIs from '../API/requests';
import s from './header.module.sass';
import luciferTitle from '../../img/elite.png';
import { PlayArrow, InfoOutlined, TrafficOutlined } from '@material-ui/icons';

const Header = () => {
  const [fullDescription, setFullDescription] = useState(true);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setFullDescription(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // TODO: rename header
  return (
    <div
      className={s.header}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}>
      <div className={s.header__container}>
        <img className={fullDescription ? s.img : ''} src={luciferTitle} alt="Lucifer" />
        <p style={fullDescription ? {} : { opacity: '0', height: '0' }}>
          Reunited by their father's death, estranged siblings with extraordinary powers uncover
          shocking family secrets and a looming threat to humanity.
        </p>
        <Buttons />
      </div>
      <div className={s.header_fade}>
        <div></div>
      </div>
      <div className={s.header__fade}></div>
    </div>
  );
};

export const Buttons = () => {
  return (
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
  );
};

export default Header;
