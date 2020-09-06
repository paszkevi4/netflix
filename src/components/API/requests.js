const API_KEY = `1e742183b0803a9ef1402fbbbd56aca4`;

const URIs = {
  trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  netflixOriginals: `/discover/tv?api_key=${API_KEY}&width_networks=123`,
  topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horrors: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romances: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
};

export default URIs;
