import React from 'react'
import image from '../assets/unnamed.png'

export default function Home() {
  return (
    <div className='bg-zinc-950 h-full w-full p-10'>
      <div className='max-w-5xl min-w-[20rem] m-auto'>
        {/* grid for image and Slogan */}
        <div className='grid justify-center items-center grid-row md:grid-cols-2 mt-4'>
          <div className='text-white text-center'>
            <h1 className='text-3xl  md:text-5xl mb-8'>Discover the World at Your Fingertips</h1>
            <p className='text-xl font-light '>Explore countries, cultures, and continents with our World Atlas. Discover maps, facts, and stories that bring the  <span className='text-blue-600 font-bold'>Earth</span> closer.</p>
          </div>
          <div className='md:ml-20'>

          <img className='w-xl mt-5 md:mt-0' src={image} alt="" />
          </div>
        </div>

  
      </div>
    
      
    </div>
  )
}
