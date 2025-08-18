import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faVideo } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, useLocation } from "react-router-dom";

const categories = [
  { name: "Action", id: 28, genre: "action" },
  { name: "Comedy", id: 35, genre: "comedy" },
  { name: "Romance", id: 10749, genre: "romance" },
  { name: "Horror", id: 27, genre: "horror" },
  { name: "Sci-Fi", id: 878, genre: "sci-fi" },
  { name: "Thriller", id: 53, genre: "thriller" },
  { name: "Drama", id: 18, genre: "drama" },
  { name: "Adventure", id: 12, genre: "adventure" },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
    setQuery("");
  };

  const handleCategoryClick = (cat) => {
    navigate(`/${cat.genre}`, { state: { id: cat.id, name: cat.name } });
  };

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 shadow-md">
      {/* Top Bar */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-white hover:text-blue-400 transition"
        >
          <FontAwesomeIcon icon={faVideo} className="text-xl" />
          <h1 className="text-xl font-bold">CinemaHub</h1>
        </Link>

        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-md overflow-hidden w-full max-w-md">
          <span className="p-2 text-gray-500">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input
            type="text"
            placeholder="Search movies"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-2 py-1 outline-none text-black"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>

      {/* Category Scroll Bar */}
      <div className="flex gap-3 overflow-x-auto mt-4 scrollbar-hide pb-2">
        {categories.map((cat) => {
          const isActive = location.pathname === `/${cat.genre}`;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat)}
              className={`text-sm px-4 py-2 rounded-lg whitespace-nowrap transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-white/10 hover:bg-blue-500 text-white"
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Header;
