import React from 'react';
import YouTube from 'react-youtube';
import moneyheist from '../../../img/mh.png';

//
// Styles
import { Buttons } from '../../Header/Header';
import s from './trailer.module.sass';

const Trailer = () => {
  const opts = {
    width: '1040px',
    height: '585px',
    playerVars: {
      controls: 0,
      rel: 0,
      fs: 0,
      autoplay: 0,
      loop: 1,
    },
  };

  return (
    <div className={s.trailer}>
      <div className={s.trailer_video}>
        <YouTube videoId="fvCdLmxnkj0" opts={opts} />
      </div>
      <div className={s.trailer_description}>
        <img src={moneyheist} alt="moneyheist" />
        <Buttons />
        <p>
          With millions of euros and their lives on the line, nine robbers attempt to pull off the
          greatest heist of the time.
        </p>
      </div>
    </div>
  );
};

export default Trailer;
