import React from 'react'
import {TMDP_IMG_PATH_CDN} from '../utils/constant'

const MovieCard = ({posterPath}) => {
   // console.log('ppppppp0000===',posterPath);
   
  return (
    <div className='w-48 pr-4'>
      <img alt="Movie Card" src={TMDP_IMG_PATH_CDN+posterPath} />
    </div>
  )
};

export default MovieCard