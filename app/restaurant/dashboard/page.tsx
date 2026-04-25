'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import Addnewitem from '../../_components/Addnewitem.jsx'
import Restaurantheader from '@/app/_components/restaurantheader.jsx';
const page = () => {
  const router = useRouter();
  const [additem,setAdditem]= useState(false);
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(!token){
      alert("Login first");
      router.push("/restaurant")
    }
  },[])
  return (
    <>
    <Restaurantheader/>
    <button onClick={()=>{setAdditem(true)}}>Add Item</button>
    <button onClick={()=>{setAdditem(false)}}>Dashboard</button>
    {
      additem?<Addnewitem/>:<h1>Dashboard</h1>
    }
    </>
  )
}

export default page
