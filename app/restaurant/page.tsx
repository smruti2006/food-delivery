"use client"
import React, { useState } from 'react'
import Restaurantlogin from '../_components/restaurantlogin'
import Restaurantsignup from '../_components/restaurantsignup'
import Restaurantheader from '../_components/restaurantheader'
import RestarantFooter from '../_components/Restaurantfooter'
const Page = () => {
  const [login,setLogin]=useState(false);
  return (
    <>
    <Restaurantheader/>
    <h1>Restaurant Login/Signup Page</h1>
    {
      login?<Restaurantlogin/>:<Restaurantsignup/>  
    }
    <button onClick={()=>setLogin(!login)} >
      {login?"do not have account? Signup":"Already have account ? Login"}
    </button>
    <RestarantFooter/>
    </>
  )
}

export default Page
