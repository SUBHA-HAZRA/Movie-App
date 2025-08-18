import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../../Components/Card/Card";

export const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  // const API_Key = "85eb928626dd8c61b86f86c625867078";

  useEffect(() => {
    if (query) {
      const fetchData = async () => {
        try {
          const res = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=06f0979a80e27f89325c8ea42457cc9b&query=${query}`
          );
          const data = await res.json();
          setResults(data.results || []);
        } catch (error) {
          console.error("Failed to fetch search results:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [query]);

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-10 min-h-screen bg-[#CAD5E2]">
      {/* Heading */}
<h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
  Search Results for:{" "}
  <span className="text-indigo-600 font-medium underline decoration-indigo-400">
    {query}
  </span>
</h2>


      {/* Loader */}
      {loading ? (
        <div className="text-center text-gray-500 text-lg">Loading...</div>
      ) : results.length === 0 ? (
        <p className="text-center text-red-500 text-lg font-medium">
          No results found.
        </p>
      ) : (
        // Result Grid
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {results.map((movie) => (
            <Card key={movie.id} data={movie}/>
          ))}
        </div>
      )}
    </div>
  );
};
