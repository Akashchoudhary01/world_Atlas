import React from 'react'

export default function CountryCard(country , flags) {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <img src={flags} alt={`Flag of ${country.name.common}`} />
    </div>
  )
}

