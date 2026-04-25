"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/navigation'

const Restaurantheader = () => {
  const router = useRouter();
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token)setIsLoggedIn(true);
  },[])
  const logout = ()=>{
    localStorage.removeItem("token")
    setIsLoggedIn(false)
    router.push("/restaurant")
  }
  return (
    <>
    <h1>Restaurant App</h1>
      <ul>
        <li>
            <Link href="/">Home</Link>
        </li>
        {
          isLoggedIn?<button onClick={logout}>Logout</button>:
          <li>
            <Link href="/restaurant">Login/Signup</Link>
        </li>
        }
        <li>
            <Link href="/">Profile</Link>
        </li>
      </ul>
    </>
  )
}

export default Restaurantheader
