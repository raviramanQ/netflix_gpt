import  { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
// import VideoBackground from '../components/VideoBackground';

const useMovies = (videoId) => {

   const dispatch = useDispatch();

   const getMovieVideos = async () => {
      const moviesFetch = await fetch("https://api.themoviedb.org/3/movie/"+videoId+"/videos?language=en-US",API_OPTIONS);

      const json = await moviesFetch.json();

      console.log('mov====>>>',json);

      const filterTrainers = await json.results.filter((videos) => videos.type == "Trailer");

      console.log(filterTrainers);

      const trailer = filterTrainers.length? filterTrainers[0] : json.results[0];

      console.log('34567345678',trailer);

      dispatch(addTrailerVideo(trailer));
      
      
      
   };

   useEffect(()=>{

      getMovieVideos();

   },[]);

};

export default useMovies;