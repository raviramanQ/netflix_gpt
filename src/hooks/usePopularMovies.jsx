import { useEffect } from 'react'
import { API_OPTIONS} from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/moviesSlice'

const usePopularMovies = () => {
   // Fetch data from TMDB API and update store

  const dispatch = useDispatch();

  const getPopularMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS);
    
      const response = await data.json();

      console.log('TMDB====>>>',response.results);

      dispatch(addPopularMovies(response.results));
      


  };

  useEffect(()=>{

    getPopularMovies();

  },[]);
};

export default usePopularMovies;