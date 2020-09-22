import React, { useState } from 'react';
import PosterHovered from './PosterHovered';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

import s from './poster.module.sass';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w300/';

const Poster = ({ movie, isVertical }) => {
  const [showMovie, setShowMovie] = useState(false);
  return (
    <div
      className={s.row_poster}
      style={{ backgroundImage: `url(${IMAGE_URL + movie?.backdrop_path})` }}>
      <div
        className={s.row_poster__inner}
        style={{ backgroundImage: `url(${IMAGE_URL + movie?.backdrop_path})` }}></div>
    </div>
  );
};

export default Poster;

// <div
//   className={s.row_poster__container}
//   onMouseLeave={() => {
//     setShowMovie(false);
//   }}>
//   {/* {showMovie && <PosterHovered />} */}
//   <div className={s.row__poster}>
//     <img
//       key={movie.id}
//       onMouseEnter={() => {
//         setShowMovie(true);
//       }}
//       src={
//         isVertical ? `${IMAGE_URL + movie.poster_path}` : `${IMAGE_URL + movie?.backdrop_path}`
//       }
//       alt="movie poster"
//     />
//   </div>
// </div>
