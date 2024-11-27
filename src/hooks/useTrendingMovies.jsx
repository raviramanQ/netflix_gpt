import { useEffect } from 'react'
import { API_OPTIONS} from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addTrendingMovies } from '../utils/moviesSlice'

const useTrendingMovies = () => {
   // Fetch data from TMDB API and update store

  const dispatch = useDispatch();

  const getTrendingMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS);
    
      const response = await data.json();

      console.log('TMDB====>>>',response.results);

      dispatch(addTrendingMovies(response.results));
      


  };

  useEffect(()=>{

    getTrendingMovies();

  },[]);
};

export default useTrendingMovies;