import React, { useState } from 'react';

import ReactPlayer from 'react-player/youtube';
import s from './poster.module.sass';
import Button from '../../../common/Button/Button';

const PosterHovered = ({ background }) => {
  const [muted, setMuted] = useState(true);
  const url = 'https://www.youtube.com/watch?v=ZAXA1DV4dtI&t=11s&ab_channel=Netflix';
  return (
    <>
      <ReactPlayer url={url} width="400px" height="225px" playing loop muted={muted} />
      <div className={s.btn_container}>
        <div className={s.btn_container__inner}>
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
        <Button />
      </div>

      <div
        onClick={() => {
          setMuted(!muted);
        }}>
        123
      </div>
    </>
  );
};

export default PosterHovered;
