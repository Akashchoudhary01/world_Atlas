import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
})

//get Method HTTP
export const getCountryData = ()=>{
  api.get("/all?fields=name,flags,population,capital,region")
};