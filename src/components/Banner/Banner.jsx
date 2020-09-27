import React, { useState, useEffect } from 'react';
import s from './banner.module.sass';
import luciferTitle from '../../img/lucifer.png';
import Buttons from '../common/PlayButtons/PlayButtons';

import ReactPlayer from 'react-player/youtube';

const Banner = () => {
  const [fullDescription, setFullDescription] = useState(false);

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
      playerVars: {
        end: 111,
        iv_load_policy: 3,
        modestbranding: 1,
        showinfo: 0,
        host: 'https://www.youtube.com',
        origin: 'https://paszkevi4.github.io',
      },
    },
  };

  return (
    <div className={s.banner}>
      <div className={s.banner__container}>
        <img className={fullDescription ? s.img : ''} src={luciferTitle} alt="Lucifer" />
        <p style={fullDescription ? {} : { opacity: '0', height: '0', zIndex: '-1' }}>
          Reunited by their father's death, estranged siblings with extraordinary powers uncover
          shocking family secrets and a looming threat to humanity.
        </p>
        <Buttons />
      </div>
      <div
        className={s.banner_player}
        style={{
          backgroundImage: `url("https://images6.alphacoders.com/752/thumb-1920-752073.jpg")`,
        }}>
        <ReactPlayer url={url} width="100%" height="100%" playing muted loop config={config} />
        <div className={s.banner_player__cover}></div>
        <div className={s.banner_fade}></div>
      </div>
    </div>
  );
};

export default Banner;
