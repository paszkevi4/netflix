import React, { useState } from 'react';

//
// Components
import ReactPlayer from 'react-player/youtube';
import { Buttons } from '../../Header/Header';
import Button from '../../common/Button/Button';
import { VolumeOff, VolumeUp } from '@material-ui/icons';

//
// Styles
import s from './trailer.module.sass';
import moneyheist from '../../../img/mh.png';

const Trailer = () => {
  const [muted, setMuted] = useState(true);
  const url = 'https://www.youtube.com/watch?v=ZAXA1DV4dtI';

  const config = {
    youtube: {
      playerVars: { end: 100, iv_load_policy: 3, modestbranding: 1, showinfo: 0 },
    },
  };

  return (
    <div className={s.trailer}>
      <div className={s.trailer_video}>
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          playing
          loop
          muted={muted}
          config={config}
        />
        <div className={s.trailer_video__cover}></div>
        <div
          onClick={() => {
            setMuted(!muted);
          }}
          className={s.trailer_video__button}>
          <Button
            element={muted ? <VolumeOff fontSize="large" /> : <VolumeUp fontSize="large" />}
          />
        </div>
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
