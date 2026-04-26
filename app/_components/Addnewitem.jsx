"use client"
import React, { useState } from 'react'
const addnewitem = () => {
  const[item,setItem]=useState("");
  const[price,setPrice]=useState("");
  const[path,setPath]=useState("");
  const[description,setDescription]=useState("");
  const addItem = ()=>{
    console.log(item,price,path,description)
  }
  return (
    <>
        <div>
          <input type="text" placeholder='Enter your food item' onChange={(e)=>{setItem(e.target.value)}}/><br/>
          <input type='text' placeholder='Enter your price' onChange={(e)=>{setPrice(e.target.value)}}/><br/>
          <input type='text' placeholder='Enter your path'onChange={(e)=>{setPath(e.target.value)}}/><br/>
          <input type='text' placeholder='Enter your description' onChange={(e)=>{setDescription(e.target.value)}}/><br/>
          <button onClick={addItem}>Add item</button>
        </div>
    </>
  )
}

export default addnewitem
