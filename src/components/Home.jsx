import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='relative'>
      <main className='bg-red-400 h-[90vh] flex justify-around'>
       <div className='flex items-center flex-col'>
        <h1 className='text-5xl font-bold mt-20'>Protect your Child Online</h1>
        <h3 className='text-2xl font-bold mt-10'>Keep harmful website away from your child.</h3>
       <p className='text-[20px]'>Safeweb helps parents control and protect their child's online experiance.</p>
       <Link to='/login' className='bg-black text-2xl mr-60 cursor-pointer text-red-500 mt-20 font-bold p-3 rounded-2xl hover:bg-gray-600'>[ Get Started ]</Link>
       </div>
       <div className='absolute top-8/12 left-8/12'>
        <h1 className='text-3xl font-bold'>Harmful Websites Include:  </h1>
        <h3 className='text-2xl text-white ml-10'>* Gambling</h3>
        <h3 className='text-2xl text-white ml-10'>* Piresy or Unauthorized</h3>
        <h3 className='text-2xl text-white ml-10'>* and other webs ....</h3>
       </div>
      </main>
    </div>
  )
}

export default Home
