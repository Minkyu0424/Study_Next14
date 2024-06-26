"use client";
import { useEffect, useState } from "react";

const page = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    const res = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const json = await res.json();
    setMovies(json);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      영화
      <div>{isLoading ? "Now Loading...." : JSON.stringify(movies)}</div>
    </div>
  );
};

export default page;
