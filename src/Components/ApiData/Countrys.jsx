import React from 'react'

export default function Countrys({ flags, name, population, capital }) {
  return (
    <div className="px-6 py-10 hover:outline rounded-md bg-gradient-to-tr from-black via-gray-700 to-black text-white shadow-md hover:scale-105 transition-transform duration-300">
      {/* Flag with fallback */}
      <img 
        src={flags?.svg || "https://via.placeholder.com/150"} 
        alt={name || "Country flag"} 
        className="w-24 h-16 object-cover mx-auto mb-4" 
      />

      {/* Country Details */}
      <h2 className="text-lg font-semibold text-center">{name || "N/A"}</h2>
      <p className="text-sm text-center">Capital: {capital || "N/A"}</p>
      <p className="text-sm text-center">
        Population: {population?.toLocaleString() || "N/A"}
      </p>
    </div>
  )
}
