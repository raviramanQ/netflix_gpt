import React from 'react'
import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';



const Browse = () => {

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();


  return (
    <div><Header></Header>
    {showGptSearch?<GptSearch></GptSearch>:<><MainContainer></MainContainer>

<SecondaryContainer></SecondaryContainer>
</>
}

    
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