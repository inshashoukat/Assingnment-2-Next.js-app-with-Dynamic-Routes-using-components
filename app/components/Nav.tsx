import React from "react";

export default function Nav(){
    return(
        <header className='bg-black '>
        <nav className='flex justify-center items-center gap-20 bg-blue-400 text-2xl'>
            <a href="/" className="text-4x1">Home</a>
            <a href="/about" className="text-4x1">About</a>
            <a href="/countries" className="text-4x1">Countries</a>
        </nav>
    </header>
  )
}