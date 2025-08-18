import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  const imageURL = data.poster_path
    ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Image';

  return (
    <Link to={`/movie/${data.id}`}>
    <div className="bg-gray-900 text-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-xs mx-auto cursor-pointer">
      {/* Image Section */}
      <div className="relative group">
        <img
          src={imageURL}
          alt={data.title || 'Movie Poster'}
          className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-105"
        />

        {/* Rating Badge */}
        <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded flex items-center gap-1 text-xs font-semibold shadow-md">
          <FontAwesomeIcon icon={faStar} className="text-sm" />
          <span>{data.vote_average?.toFixed(1) || 'N/A'}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h2 className="text-md font-semibold truncate">{data.title}</h2>
        <p className="text-xs text-gray-400 mt-1">Click to view details</p>
      </div>
    </div>
    </Link>
  );
};

export default Card;
