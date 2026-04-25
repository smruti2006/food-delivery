"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
const addnewitem = () => {
    const router = useRouter();
    const [dashboard,setDashboard]=useState(false);
  return (
    <>
        <h1>Add Item</h1> 
    </>
  )
}

export default addnewitem
