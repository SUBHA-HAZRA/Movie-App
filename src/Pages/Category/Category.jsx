import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Card from "../../Components/Card/Card";

const Category = () => {
  const { genre } = useParams();
  const location = useLocation();
  const { id, name } = location.state || {};

  // const API_KEY = "06f0979a80e27f89325c8ea42457cc9b";
  const API_KEY = "85eb928626dd8c61b86f86c625867078";
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchMovies = async () => {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`
      );
      const data = await res.json();
      setMovies(data.results);
      setLoading(false);
    };

    fetchMovies();
  }, [id]);

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-12 bg-[#CAD5E2]">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-900 tracking-wide drop-shadow-sm">
        {name || "Category"} Movies
      </h1>

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {movies.map((movie) => (
            <Card key={movie.id} data={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
