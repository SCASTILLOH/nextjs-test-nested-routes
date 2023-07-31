"use client";
import Link from "next/link";
import React, { Children, useEffect, useState } from "react";
import { useQuery } from "react-query";

async function getMovies() {
  const res = await fetch("http://localhost:3001/movies");
  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }
  return res.json();
}

const MoviesLayout = ({ children }) => {
  const {
    data: movies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <small className="bg-red-500 text-white p-1">Layout</small>
      <div className="flex gap-4 px-3 py-8 border border-red-600">

        <div>
          <small className="bg-red-500 text-white p-1">{"content"}</small>
          <div className="flex flex-col gap-4 px-1 py-3 whitespace-nowrap border border-red-600">
            {movies.map((movie) => (
              <Link href={`/movies/${movie.id}`} key={movie.id}>
                {movie.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <small className="bg-red-500 text-white p-1 ">{"children"}</small>
          <div className="bg-gray-200 w-full p-10 border border-red-600">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MoviesLayout;
