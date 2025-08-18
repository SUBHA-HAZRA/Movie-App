import React, { useEffect, useState } from "react";
import { IoIosTrendingUp } from "react-icons/io";
import Card from "../../Components/Card/Card";

const Home = () => {
  const API_URL = "https://api.themoviedb.org/3/trending/movie/week?api_key=";
  // const API_Key = "06f0979a80e27f89325c8ea42457cc9b";
  const API_Key = "85eb928626dd8c61b86f86c625867078";

  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTrend = async () => {
      try {
        const response = await fetch(`${API_URL}${API_Key}`);
        const data = await response.json();
        setTrending(data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      } finally {
        setLoading(false);
      }
    };

    getTrend();
  }, []);

  return (
    <div className="bg-[#CAD5E2] min-h-screen px-4 sm:px-6 lg:px-12 py-10">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8 gap-6">
        <div className="flex items-center gap-4">
          {/* Icon with ping animation */}
          <div className="relative">
            <IoIosTrendingUp className="text-red-500 text-4xl sm:text-5xl animate-bounce drop-shadow-lg" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Trending Now
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-1">
              Most popular movies this week
            </p>
          </div>
        </div>
      </div>

      {/* Movie Cards */}
      {loading ? (
        <div className="text-center text-gray-500 text-lg">Loading...</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {trending.map((movie) => (
            <Card key={movie.id} data={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
