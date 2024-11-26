import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if(movies == null) return;

  const mainMovie = movies[0];

  console.log('788888888===',mainMovie);


  const {original_title, overview, id} = mainMovie;

  
  

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} ></VideoTitle>
      <VideoBackground videoId={id}></VideoBackground>
    </div>
  )
}

export default MainContainer