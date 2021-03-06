import React from 'react';
import Row from './Row/Row';
import URIs from '../../API/requests';
import Trailer from './Trailer/Trailer';

const Main = () => {
  return (
    <>
      <Row title={'Popular on Netflix'} fetchUrl={URIs.netflixOriginals} />
      <Row title={'Trending Now'} fetchUrl={URIs.trending} />
      <Row title={'Netflix Originals'} fetchUrl={URIs.topRated} />
      <Trailer />
      <Row title={'Comedies'} fetchUrl={URIs.comedies} />
      <Row title={'Action & Adventure'} fetchUrl={URIs.actionMovies} />
      <Row title={'Documentaries'} fetchUrl={URIs.topRated} />
      <Row title={'Dramas'} fetchUrl={URIs.dramas} />
      <Row title={'Thriller Movies'} fetchUrl={URIs.horrors} />
      <Row title={'Romantic Movies'} fetchUrl={URIs.romances} />
    </>
  );
};

export default Main;
