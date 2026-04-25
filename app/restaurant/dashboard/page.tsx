'use client'
import React, { useState } from 'react'
import Addnewitem from '../../_components/Addnewitem.jsx'
import Restaurantheader from '@/app/_components/restaurantheader.jsx';
const page = () => {
  const [additem,setAdditem]= useState(false);
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
