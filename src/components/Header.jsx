import React from 'react'
import {onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch,useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {LOGO_URL} from '../utils/constant';

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

      <div className='flex p-2'>
        <img 
        className='w-12 h-12'
        alt = "usericon"
        src= {user?.photoURL} />
        <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
      </div>
      )}

    </div>


  )
}

export default Header