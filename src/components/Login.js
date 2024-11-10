import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {

  const [IsSign,setIsSignIn] = useState(true);

  const [errorMessage,seterrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = ()=>{
    console.log(email.current.value);
    console.log(password.current.value);

    const res = checkValidData(email.current.value,password.current.value)

    // console.log(res);
    

    // email.

    seterrorMessage(res);
    
    
  }

  const toggleSignInForm=()=>{

    setIsSignIn(!IsSign);

  }

   return <div>
     <Header/>
      {/* background image for netflix */}
     <div className="absolute">
     <img src="https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_small.jpg" alt="logo"/>
     </div>

    <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
    <h1 className="font-bold text-3xl py-4">{IsSign? 'Sign In':'Sign Up'}</h1>

    {!IsSign?
    <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-600 rounded-md"/>:''
    }
    <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-600 rounded-md"/>

    <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-600 rounded-md"/>

    <p type="text" className=" text-red-900">{errorMessage}</p>
     
    <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick = {handleButtonClick} >{IsSign?'Sign In':'Sign Up'}</button>
   
    <span className="text-gray-400">New to Netflix? <span className="text-white cursor-pointer" onClick = {toggleSignInForm}>{IsSign? 'Sign in now' :'Sign up now'}.</span></span>

    <p className="py-4 text-gray-600">This page is protected by Google reCAPTCHA to ensure you're not a bot</p>
     
    </form>
     
   </div>;

};

export default Login;