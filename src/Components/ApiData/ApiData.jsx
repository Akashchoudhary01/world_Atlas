import Api from '../../api/api.json'

export default function ApiData() {
  return (
    <div className='flex justify-center mt-8'>
      <div className='grid md:grid-cols-3 gap-6'>
        {Api.map((country) => (
          <div 
            key={country.id} 
            className='px-6 py-6 hover:outline rounded-md bg-gradient-to-tr from-black via-gray-700 to-black   text-white shadow-md hover:scale-105 transition-transform duration-300'
          >
            <h2 className='text-xl font-bold mb-2'>{country.name}</h2>
            <p><span className="font-semibold">Capital:</span> {country.capital}</p>
            <p><span className="font-semibold">Population:</span> {country.population}</p>
            <p><span className="font-semibold">Festival:</span> {country.main_festival}</p>
            <p className="italic mt-2 text-sm">"{country.interesting_fact}"</p>
          </div>
        ))}
      </div>
    </div>
  )
}
