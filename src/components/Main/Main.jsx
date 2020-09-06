import React from 'react';
import URIs from '../API/requests';
import Row from './Row/Row';

export const Main = () => {
  return (
    <>
      <Row title={'Popular on Netflix'} fetchUrl={URIs.netflixOriginals} isVertical />
      <Row title={'Trending Now'} fetchUrl={URIs.trending} />
      <Row title={'Top Rated'} fetchUrl={URIs.topRated} />
      <Row title={'Action Movies'} fetchUrl={URIs.actionMovies} />
      <Row title={'Comedy Movies'} fetchUrl={URIs.comedies} />
      <Row title={'Horror Movies'} fetchUrl={URIs.horrors} />
      <Row title={'Romance Movies'} fetchUrl={URIs.romances} />
    </>
  );
};
