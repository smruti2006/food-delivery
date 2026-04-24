"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const restaurantlogin = () => {
  const router = useRouter();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const login = async(e)=>{
    e.preventDefault();
    if(!email || !password)alert("Fill all the field");
    else{
      const res = await fetch("/API/restaurant/login",{
        method:"POST",
        body:JSON.stringify({email,password})
      }
      )
      const data= await res.json();
      if(res.ok){
        router.push("/restaurant/dashboard");
      }else{
        alert(data.message);
      }
    }

  }
  return (
    <>
      <div>
        <h3>Login Component</h3>
        <form onSubmit={login}>
          <input type="text" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
          <br></br>
          <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
          <br></br>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default restaurantlogin;
