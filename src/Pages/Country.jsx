import React, { useState, useEffect, useTransition } from "react";
import { getCountryData } from "../api/CountryApi/CountryApi";
// import Loading from "../Components/Ui/Loading/Loading";

export default function Country() {
  const [countries, setCountries] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCountryData();
        // Mark state update as low priority
        startTransition(() => {
          setCountries(res.data);
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
    <div>
      <h1>Country List</h1>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
}
