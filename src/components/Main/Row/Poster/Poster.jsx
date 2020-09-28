import React, { useState } from 'react';
import s from './poster.module.sass';
const PosterHovered = React.lazy(() => import('./PosterHovered'));
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';

const Poster = ({ movie }) => {
  const [showMovie, setShowMovie] = useState(false);

  return (
    <div
      className={s.row__poster}
      onMouseEnter={() => {
        setShowMovie(true);
      }}
      onMouseLeave={() => {
        setShowMovie(false);
      }}
      style={{ backgroundImage: `url(${IMAGE_URL + movie?.backdrop_path})` }}>
      <div
        className={s.row__poster_inner}
        style={{ backgroundImage: `url(${IMAGE_URL + movie?.backdrop_path})` }}>
        <React.Suspense fallback={<div></div>}>
          {showMovie && <PosterHovered movie={movie} />}
        </React.Suspense>
      </div>
    </div>
  );
};

export default Poster;
