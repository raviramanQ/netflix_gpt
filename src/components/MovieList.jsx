import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  console.log('Movies:', movies);

  // Check if movies exist and have at least one item
//   if (movies && movies.length !== 0) {
   
  return (
    <div className='p-6'>
      <h1 className='text-3xl py-4 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll'>
      <div className='flex'>
         {movies?.map((movie)=>
         <MovieCard key={movie.id} posterPath={movie.poster_path} />

         )}
      </div>
    </div>
    </div>

  );
// };
};

export default MovieList;
