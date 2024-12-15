import React from 'react'
import GptSearchBar from './GptSearchBar'
import { IMG_LOGIN_LOGO_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
     <div className="absolute -z-10">
     <img src={IMG_LOGIN_LOGO_URL} alt="logo"/>
     </div>
        <GptSearchBar></GptSearchBar>
    </div>
  )
}

export default GptSearch