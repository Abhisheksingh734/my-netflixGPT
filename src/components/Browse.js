import React from "react";
import Header from "./Header";
import useNowPlayingMoviesHooks from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMoviesHooks();
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
