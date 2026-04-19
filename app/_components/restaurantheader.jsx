import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Restaurantheader = () => {
  return (
    <>
     <Image
        src="/download-removebg-preview.png"
        alt="logo"
        width={200}
        height={100}
      />
      <ul>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/restaurant">Login/Signup</Link>
        </li>
        <li>
            <Link href="/">Profile</Link>
        </li>
      </ul>
    </>
  )
}

export default Restaurantheader
