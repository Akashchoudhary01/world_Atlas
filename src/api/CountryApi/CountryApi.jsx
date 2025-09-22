import React, { useState, useEffect } from "react";
import axios from "axios";
import Country from "../../Pages/Country";

export default function CountryApi() {
  const [countryApiData, setCountryApiData] = useState([]);
  const Api = "https://restcountries.com/v3.1/all?fields=name,flags,population,capital";

  const countryData = async () => {
    try {
      const res = await axios.get(Api);
      setCountryApiData(res.data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    countryData();
  }, []); // ✅ run once when component mounts

  return (
    <div className="bg-zinc-950 h-full w-full p-10">
      <div className="max-w-5xl min-w-[20rem] m-auto">
      <h1 className="md:text-4xl text-2xl tracking-wide text-white mb-8">
            Explore the World: 🌏 Country Atlas
          </h1>
    
        <ul className="grid md:grid-cols-4 gap-6">
          {countryApiData.map((currElem) => (
            <Country
              key={currElem.name.common} // ✅ unique key
              name={currElem.name.common}
              capital={currElem.capital?.[0] || "N/A"}
              flags={currElem.flags}
              population={currElem.population}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
