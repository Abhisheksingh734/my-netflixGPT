import React from "react";
import Header from "./Header";
import useNowPlayingMoviesHooks from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";

const Browse = () => {
  useNowPlayingMoviesHooks();
  usePopularMovies();
  useTrendingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/* 
        MainContainer
          - Videotitle
          - VideoBackground
        SecondaryContainer
          - MovieList * n
          - cards * n
      */}
    </div>
  );
};

export default Browse;
