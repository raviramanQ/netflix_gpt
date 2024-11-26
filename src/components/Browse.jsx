import React from 'react'
import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';



const Browse = () => {

  useNowPlayingMovies();


  return (
    <div><Header></Header>

    <MainContainer></MainContainer>

    <SecondaryContainer></SecondaryContainer>
    {
      /*

        MainContainer
         - VideoBackground
         - VideoTitle
        SecondaryContainer
         - MovieList * n
         - cards * n s

      */
    }
    </div>
  )
}

export default Browse