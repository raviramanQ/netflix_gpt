import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (

    movies.nowPlayingMovies && (
    <div className='bg-black'>
      <div className='-mt-52 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}></MovieList>
      <MovieList title={"Trending"} movies={movies.trendingMovies}></MovieList>
      <MovieList title={"Popular"} movies={movies.popularMovies}></MovieList>
      <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies}></MovieList>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}></MovieList>
     
    </div>
    </div>
    )
  )
}

export default SecondaryContainer