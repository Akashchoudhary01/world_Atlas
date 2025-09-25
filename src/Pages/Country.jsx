import React, { useState, useEffect, useTransition } from "react";
import { getCountryData } from "../api/CountryApi/CountryApi";
import CountryCard from "./CountryCard";
// import Loading from "../Components/Ui/Loading/Loading";

export default function Country() {
  const [countries, setCountries] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCountryData();
        startTransition(() => {
         setCountries(res.data);
         console.log(res.data);

        });
      } catch (err) {
        console.error("Error fetching countries:", err);
      }
    };

    fetchData();
  }, []);

  if (isPending) {
    return (
      <div className="h-lvh flex items-center justify-center">
        {/* <Loading /> */}
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="bg-zinc-950 h-full text-white w-full p-10">
      <div className="max-w-5xl min-w-[20rem] m-auto">
        <h1 className="text-2xl font-bold mb-6">Country List</h1>
        <ul className="grid md:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <li key={index}>
              <CountryCard country={country} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
