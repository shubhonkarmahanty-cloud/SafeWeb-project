import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between bg-gray-500 text-white font-medium h-5 w-100% items-center p-10'>
        <span className='font-bold text-3xl text-black [text-shadow:_1px_1px_10px_red] '>SafeWeb</span>
        <div className='flex gap-10 mr-8 text-[20px]'>
            <Link className='hover:text-black hover:font-bold hover:[text-shadow:_1px_1px_6px_red]' to="/">Home</Link>
            <Link className='hover:text-black hover:font-bold hover:[text-shadow:_1px_1px_6px_red]' to="#">AboutUs</Link>
            <Link className='hover:text-black hover:font-bold hover:[text-shadow:_1px_1px_6px_red]' to="#">Help</Link>
            <Link className='hover:text-black hover:font-bold hover:[text-shadow:_1px_1px_6px_red]' to="/login">Login</Link>
            
        </div>
      </nav>
    </div>
  )
}

export default Navbar
