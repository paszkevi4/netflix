import React from 'react';
import URIs from '../API/requests';
import Row from './Row/Row';
import Trailer from './Trailer/Trailer';

export const Main = () => {
  return (
    <>
      <Row title={'TV Shows'} fetchUrl={URIs.netflixOriginals} />
      <Row title={'Trending Now'} fetchUrl={URIs.trending} />
      <Trailer />
      <Row title={'Comedies'} fetchUrl={URIs.comedies} />
      <Row title={'Popular on Netflix'} fetchUrl={URIs.topRated} />
      {/* UKRAINE */}
      <Row title={'Netflix Originals'} fetchUrl={URIs.netflixOriginals} />
      <Row title={'Action & Adventure'} fetchUrl={URIs.actionMovies} />
      <Row title={'Documentaries'} fetchUrl={URIs.documentaries} />
      <Row title={'Dramas'} fetchUrl={URIs.dramas} />
      <Row title={'Thriller Movies'} fetchUrl={URIs.horrors} />
      <Row title={'Romantic Movies'} fetchUrl={URIs.romances} />
    </>
  );
};
