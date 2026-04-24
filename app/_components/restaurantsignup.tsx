"use client";
import React, { useState } from "react";
import Link from "next/link";
import RestaurantLogin from "./restaurantlogin";
import { useRouter } from "next/navigation";
const restaurantsignup = () => {
  const router = useRouter();
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_password] = useState("");
  const [rname, setRname] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const signup = async (e) => {
    e.preventDefault();
    const res = await fetch("/API/restaurant/signup", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        c_password,
        rname,
        city,
        address,
        contact,
      }),
    });
    const data = await res.json();
    alert(data.message);
    if (res.ok) {
      console.log(res);
      router.push("/restaurant/dashboard");
    } else {
      setLogin(true);
    }
  };
  return (
    <>
      {login ? (
        <RestaurantLogin />
      ) : (
        <>
          <h3>Signup Component</h3>
          <form onSubmit={signup}>
            <input
              type="text"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Confirm password"
              onChange={(e) => setC_password(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Restaurant Name"
              onChange={(e) => setRname(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Enter city"
              onChange={(e) => setCity(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Enter full address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Contact no"
              onChange={(e) => setContact(e.target.value)}
            />
            <br />
            <button type="submit">Sign Up</button>
          </form>
        </>
      )}
    </>
  );
};

export default restaurantsignup;
