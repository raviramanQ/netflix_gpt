import React from 'react'
import {onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch,useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {LOGO_URL, SUPPORTED_LANGUAGES} from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  // console.log('-------->>>>>>>',user);
  

  const handleSignOut = ()=>{

    signOut(auth).then(() => {

    }).catch((error) => {
      navigate("/error")

    });

  };

  const handleGptSearchClick = ()=>{
     dispatch(toggleGptSearchView());
  }

  const handleLangChange = (e)=>{
    dispatch(changeLanguage(e.target.value));
  };

  const dispatch = useDispatch();

  useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (user) => {
       if (user) {
      //  console.log('======>>>>>meena',user);
       
         const {uid,email,displayName,photoURL} = user;

        //  console.log('======>>>>>PPPPP____',photoURL);


         dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
         navigate("/browse")


       } else {

          dispatch(removeUser());

          navigate("/")



       }
     });

     return () => unsubscribe();
 },[])

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' 
      src={LOGO_URL} alt=""/>
     
      {user && (

<div className="flex items-center p-2">
  <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLangChange}>
    {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
  </select>
<button onClick={handleGptSearchClick} className="py-2 px-2 m-2 bg-purple-700">GPT Search</button>
<img className="w-12 h-10 m-2" alt="usericon" src={user?.photoURL} />
<button onClick={handleSignOut} className="font-bold text-white m-2">
  (Sign Out)
</button>
</div>

      )}

    </div>


  )
}

export default Header