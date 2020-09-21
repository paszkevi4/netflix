import React, { useState } from 'react';
import s from './poster.module.sass';

const PosterHovered = ({ movie, isVertical }) => {
  return (
    <div className={s.post_hovered}>
      <img src="" alt="img" />
      <div className={s.post_hovered__buttons}></div>
      <div className={s.post_hovered__markers}></div>
    </div>
  );
};

export default PosterHovered;
