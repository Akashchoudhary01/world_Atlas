import axios from 'axios'
import React from 'react'
import { useState  , useEffect , useTransition} from 'react'
import {getCountryData} from '../api/CountryApi/CountryApi'





export default function Country() {
  const [isPending, startTransition] = useTransition();
const [CountryData , setCountryData] = useState([]);
  useEffect(()=>{
    startTransition(async()=>{
      const res = await getCountryData();
      setCountryData(res.data)
      console.log(res.data);
    });
  
  } , []);

  if(isPending) {
    return <h1>Loading...</h1> 
  }
  
  return (
     <div className='bg-zinc-950 h-full w-full p-10'>
      <div className='max-w-5xl min-w-[20rem] text-white m-auto'>
        Hello 
    
       
    </div>
    </div>
    
  )
}
