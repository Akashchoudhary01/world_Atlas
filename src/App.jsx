import React from 'react'
import { router } from './Components/Router/Router'
import { RouterProvider } from 'react-router-dom'
// import Header from './Components/Ui/Header'
import Layout from './Components/Outlet/Layout'

export default function App() {
  return (
    <RouterProvider router={router}>
    
    <div className='flex w-full justify-center items-center text-white bg-zinc-800 h-lvh'>
      <div className='max-w-xl'>
        <Layout/>
      </div>
    </div>
    </RouterProvider>

  )
}
