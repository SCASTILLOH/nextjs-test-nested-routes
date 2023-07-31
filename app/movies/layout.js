'use client'
import Link from 'next/link';
import React, { Children, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

async function getMovies() {
  const res = await fetch('http://localhost:3001/movies')
  if (!res.ok) {
    throw new Error('Failed to fetch movies')
  }
  return res.json()
}

const MoviesLayout = ({ children }) => {
  const { data: movies, isLoading, error } = useQuery({
    queryKey: ['movies'],
    queryFn: getMovies
  })

  if (isLoading) return <p>Loading...</p>

  return (
    <div className='flex gap-4 px-3 py-8'>
      <div className='flex flex-col gap-4'>{movies.map((movie) => (
        <Link href={`/movies/${movie.id}`} key={movie.id}>
          {movie.title}
        </Link>
      ))}</div>
      <div className="bg-gray-200 w-full p-10">{children}</div>
    </div>
  );
};

export default MoviesLayout;
