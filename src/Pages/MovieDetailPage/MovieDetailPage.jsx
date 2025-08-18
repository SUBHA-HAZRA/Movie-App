import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Import icons from react-icons
import {
  FaTags,
  FaMoneyBillWave,
  FaFilm,
  FaStar,
  FaClock,
  FaCalendarAlt,
  FaVoteYea,
  FaLanguage,
  FaBuilding,
  FaGlobe,
} from "react-icons/fa";

const API_KEY = "85eb928626dd8c61b86f86c625867078";

function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    async function fetchMovieData() {
      try {
        setLoading(true);

        const movieRes = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );
        if (!movieRes.ok) throw new Error("Failed to fetch movie details");
        const movieData = await movieRes.json();

        const videosRes = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
        );
        if (!videosRes.ok) throw new Error("Failed to fetch movie videos");
        const videosData = await videosRes.json();

        setMovie(movieData);

        const officialTrailers = videosData.results.filter(
          (video) => video.type === "Trailer" && video.official === true
        );

        setVideos(officialTrailers);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchMovieData();
  }, [id]);

  function formatDate(dateStr) {
    if (!dateStr) return "N/A";
    const d = new Date(dateStr);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  }

  function formatRuntime(minutes) {
    if (!minutes) return "N/A";
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h}h ${m}m`;
  }

  function formatMoneyMillion(num) {
    if (!num) return "N/A";
    return `$${Math.round(num / 1_000_000)}M`;
  }

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-white bg-gray-900">
        <p className="text-xl">Loading movie data...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-red-500 bg-gray-900">
        <p className="text-xl">Error : {error}</p>
      </div>
    );

  if (!movie)
    return (
      <div className="flex justify-center items-center h-screen text-white bg-gray-900">
        <p className="text-xl">No movie found.</p>
      </div>
    );

  return (
    <div className="bg-[#CAD5E2] min-h-screen py-0.5 md:py-8 lg:py-12">
      <div className="max-w-6xl mx-auto md:my-6 lg:my-8 p-4 md:p-8 bg-gray-900 text-white rounded-xl shadow-lg">
        {/* Movie info & poster */}
        <div className="flex flex-col md:flex-row gap-8">
          <img
            className="w-full max-w-xs md:max-w-sm rounded-lg shadow-lg border border-white object-cover"
            style={{ aspectRatio: "2/3", minHeight: "400px" }}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
          <div className="flex-1 flex flex-col justify-between">
            <div className="space-y-5">
              <h1 className="text-4xl font-bold">{movie.title}</h1>
              {movie.tagline && (
                <p className="italic text-gray-300 mb-4">"{movie.tagline}"</p>
              )}
              <p className="text-gray-200">Overview : {movie.overview}</p>

              {/* Genres with rounded boxes */}
              <div>
                <h3 className="font-semibold text-lg mb-1 flex items-center gap-2 text-yellow-400">
                  <FaTags /> Genres :
                </h3>
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((g) => (
                    <span
                      key={g.id}
                      className="bg-yellow-400 text-gray-900 rounded-xl px-3 py-1 text-sm font-medium"
                    >
                      {g.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Budget with box */}
              <div>
                <h3 className="font-semibold text-lg mb-1 flex items-center gap-2 text-green-400">
                  <FaMoneyBillWave /> Budget :
                </h3>
                <div>
                  <span className="bg-green-500 text-white rounded-xl px-3 py-1 text-sm font-medium inline-block">
                    {formatMoneyMillion(movie.budget)}
                  </span>
                </div>
              </div>

              {/* Revenue with box */}
              <div>
                <h3 className="font-semibold text-lg mb-1 flex items-center gap-2 text-green-400">
                  <FaMoneyBillWave /> Revenue :
                </h3>
                <div>
                  <span className="bg-green-500 text-white rounded-xl px-3 py-1 text-sm font-medium inline-block">
                    {formatMoneyMillion(movie.revenue)}
                  </span>
                </div>
              </div>

              {/* Production Companies with rounded boxes */}
              <div>
                <h3 className="font-semibold text-lg mb-1 flex items-center gap-2 text-blue-400">
                  <FaBuilding /> Production Companies :
                </h3>
                <div className="flex flex-wrap gap-2">
                  {movie.production_companies.map((c) => (
                    <span
                      key={c.id}
                      className="bg-blue-400 text-white rounded-xl px-3 py-1 text-sm font-medium"
                    >
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <FaClock className="text-yellow-300" />
                  <span className="font-semibold">Runtime :</span>{" "}
                  {formatRuntime(movie.runtime)}
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-yellow-300" />
                  <span className="font-semibold">Release Date :</span>{" "}
                  {formatDate(movie.release_date)}
                </div>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  <span className="font-semibold">Rating :</span>{" "}
                  {movie.vote_average.toFixed(1)}
                </div>
                <div className="flex items-center gap-2">
                  <FaVoteYea className="text-yellow-400" />
                  <span className="font-semibold">Votes :</span> {movie.vote_count}
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <FaLanguage className="text-yellow-300" />
                  <span className="font-semibold">Language(s) :</span>{" "}
                  {movie.spoken_languages.map((l) => l.english_name).join(", ")}
                </div>
              </div>
            </div>

            {movie.homepage && (
              <a
                href={movie.homepage}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold text-center"
              >
                <FaGlobe className="inline mr-2" />
                Official Website
              </a>
            )}
          </div>
        </div>

        {/* Trailers Section */}
        {videos.length > 0 ? (
          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 border-b border-white pb-2 text-center flex justify-center items-center gap-2">
              <FaFilm />
              Official Trailer
            </h2>
            <div className="border border-white rounded-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${videos[0].key}`}
                  title={videos[0].name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-3 text-center">
              Published:{" "}
              {videos[0].published_at
                ? new Date(videos[0].published_at).toLocaleDateString()
                : "Unknown"}
            </p>
          </div>
        ) : (
          <p className="mt-16 text-center text-gray-400">
            No official trailers found.
          </p>
        )}
      </div>
    </div>
  );
}

export default MovieDetailPage;
