import React, { useState, useEffect } from 'react';
import movieTrailer from 'movie-trailer';

import s from './poster.module.sass';

//
// Components
import ReactPlayer from 'react-player/youtube';
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

const PosterHovered = ({ movie }) => {
  const [muted, setMuted] = useState(true);
  const [url, setUrl] = useState('https://www.youtube.com/watch?v=lptctjAT-Mk');

  useEffect(() => {
    movieTrailer(movie?.name || '')
      .then((data) => {
        setUrl(data);
      })
      .catch((error) => error);
  }, [movie]);

  return (
    <>
      <ReactPlayer url={url} width="400px" height="225px" playing loop muted={muted} />
      <div
        className={s.poster_inner__unmute}
        onClick={() => {
          setMuted(!muted);
        }}>
        <Button element={muted ? <VolumeOff fontSize="large" /> : <VolumeUp fontSize="large" />} />
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
