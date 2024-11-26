import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';

const VideoBackground = ({videoId}) => {

   // u can use useState hook too to get video key but for now we use redux store

   

   const dispatch = useDispatch();

   const getTrailer = useSelector(store => store.movies?.trailerVideos);

   console.log(getTrailer);
   

   // console.log('000000',videoId);
   

   const getMovieVideos = async () => {
      const moviesFetch = await fetch("https://api.themoviedb.org/3/movie/"+videoId+"/videos?language=en-US",API_OPTIONS);

      const json = await moviesFetch.json();

      console.log('mov====>>>',json);

      const filterTrainers = await json.results.filter((videos) => videos.type == "Trailer");

      console.log(filterTrainers);

      const trailer = filterTrainers.length? filterTrainers[0] : json.results[0];

      console.log('34567345678',trailer);

      dispatch(addTrailerVideo(trailer));
      
      
      
   }

   useEffect(()=>{

      getMovieVideos();

   },[]);


  return (
    <div><iframe width="560" height="315" src={"https://www.youtube.com/embed/"+getTrailer?.key} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
  )
}

export default VideoBackground