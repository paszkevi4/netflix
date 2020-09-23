import React, { useState } from 'react';

import ReactPlayer from 'react-player/youtube';
import s from './poster.module.sass';
import Button from '../../../common/Button/Button';

import {
  PlayArrow,
  Add,
  ThumbUpAlt,
  ThumbDownAlt,
  ExpandMore,
  VolumeOff,
  VolumeUp,
} from '@material-ui/icons';

const PosterHovered = ({ background }) => {
  const [muted, setMuted] = useState(true);
  const url = 'https://www.youtube.com/watch?v=ZAXA1DV4dtI&t=11s&ab_channel=Netflix';
  return (
    <>
      <ReactPlayer url={url} width="400px" height="225px" playing loop muted={muted} />
      <div
        className={s.poster_inner__unmute}
        onClick={() => {
          setMuted(!muted);
        }}>
        <Button element={muted ? <VolumeUp fontSize="large" /> : <VolumeOff fontSize="large" />} />
      </div>
      <div className={s.btn_container}>
        <div className={s.btn_container__inner}>
          <Button element={<PlayArrow fontSize="large" />} />
          <Button element={<Add fontSize="large" />} />
          <Button element={<ThumbUpAlt />} />
          <Button element={<ThumbDownAlt />} />
        </div>
        <Button element={<ExpandMore fontSize="large" />} />
      </div>
      <div className={s.description_container}>
        <span className={s.description_match}>97% Match</span>
        <span className={s.description_age}>16+</span>
        <span>2 Seaseons</span>
      </div>
      <div className={s.description_container}>
        <span>Quirky</span>
        <div className={s.description_dot}></div>
        <span>Witty</span>
        <span className={s.description_dot}></span>
        <span>Exciting</span>
      </div>
    </>
  );
};

export default PosterHovered;
