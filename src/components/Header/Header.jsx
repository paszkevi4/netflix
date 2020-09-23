import React, { useState, useEffect } from 'react';
import axios from '../API/api';
import URIs from '../API/requests';
import s from './header.module.sass';
import luciferTitle from '../../img/lucifer.png';
import { PlayArrow, InfoOutlined, TrafficOutlined } from '@material-ui/icons';

import ReactPlayer from 'react-player/youtube';

const Header = () => {
  const [fullDescription, setFullDescription] = useState(false);
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
      setFullDescription(true);
    }, 1000);
    const timer1 = setTimeout(() => {
      setFullDescription(false);
    }, 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer1);
    };
  }, []);

  const url = 'https://www.youtube.com/watch?v=3mTh2joPPj8';
  const config = {
    youtube: {
      playerVars: { end: 111, iv_load_policy: 3, modestbranding: 1, showinfo: 0 },
    },
  };

  // TODO: rename header
  return (
    <div className={s.header}>
      <div className={s.header__container}>
        <img className={fullDescription ? s.img : ''} src={luciferTitle} alt="Lucifer" />
        <p style={fullDescription ? {} : { opacity: '0', height: '0', zIndex: '-1' }}>
          Reunited by their father's death, estranged siblings with extraordinary powers uncover
          shocking family secrets and a looming threat to humanity.
        </p>
        <Buttons />
      </div>
      <div
        className={s.header_player}
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        }}>
        <ReactPlayer url={url} width="100%" height="100%" playing muted loop config={config} />
        <div className={s.header_player__cover}></div>
        <div className={s.header_fade}></div>
      </div>
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
