import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';

export default function CountryApi() {
    const Api = `https://restcountries.com/v3.1/all?fields=name,flags`;

    const countryData = async ()=>{
        const res = await axios.get(Api);
        console.log(res);

    }

    useEffect(()=>{
        countryData();
    })
 
}
