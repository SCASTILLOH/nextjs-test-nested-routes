import React from 'react'

async function getMovie(id) {
  const res = await fetch(`http://localhost:3001/movies/${id}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Page = async ({params}) => {
  const {id} = params
  const movie = await getMovie(id)
  return (
    <>
    <p className='font-bold text-sky-700 text-xl'>{movie.title}</p>
    <p>{movie.year}</p>
    <p className=''>{movie.director}</p>
    <p className='text-gray-600 pt-3'>{movie.description}</p>
    </>
  )
}

export default Page